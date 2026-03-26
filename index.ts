#!/usr/bin/env bun
import TurndownService from "turndown";

const BASE_URL = "https://www.ti.com";

interface DatasheetInfo {
  product: string;
  doc_id: string;
  title: string;
  guids: string[];
}

interface ContentBlock {
  guid: string;
  html: string;
  order: number;
}

function parse_url(url: string): { product: string; doc_type: string } {
  const match = url.match(/document-viewer\/([^/]+)\/(\w+)/i);
  if (!match) {
    throw new Error(`Invalid TI document URL: ${url}`);
  }
  return { product: match[1].toUpperCase(), doc_type: match[2] };
}

async function extract_toc(url: string): Promise<DatasheetInfo> {
  const { product, doc_type } = parse_url(url);
  const normalized_url = `${BASE_URL}/document-viewer/${product}/${doc_type}`;

  process.stderr.write(`[*] Fetching TOC from ${normalized_url}\n`);
  const response = await fetch(normalized_url);
  if (!response.ok) {
    throw new Error(`Failed to fetch TOC: ${response.status}`);
  }

  const html = await response.text();

  const doc_id_match = html.match(/\/ods\/images\/([A-Z0-9]+)\//);
  const doc_id = doc_id_match?.[1] || product;

  const title_match = html.match(/<title>([^<]+)<\/title>/);
  const title = title_match?.[1]?.replace(/\s*\|\s*TI\.com\s*$/, "").trim() || product;

  const guid_pattern = new RegExp(
    `href="//www\\.ti\\.com/document-viewer/${product}/${doc_type}/(GUID-[A-Za-z0-9-]+)`,
    "gi"
  );
  const guids: string[] = [];
  const seen = new Set<string>();

  let match;
  while ((match = guid_pattern.exec(html)) !== null) {
    const guid = match[1];
    if (!seen.has(guid)) {
      seen.add(guid);
      guids.push(guid);
    }
  }

  process.stderr.write(`[*] Found ${guids.length} sections\n`);
  return { product, doc_id, title, guids };
}

async function fetch_block(
  product: string,
  doc_type: string,
  guid: string,
  order: number
): Promise<ContentBlock> {
  const url = `${BASE_URL}/document-viewer/${product}/${doc_type}/${guid}?raw=1`;
  const response = await fetch(url);
  if (!response.ok) {
    process.stderr.write(`\n[!] Failed to fetch ${guid}: ${response.status}\n`);
    return { guid, html: "", order };
  }
  const html = await response.text();
  return { guid, html, order };
}

async function fetch_all_blocks(
  info: DatasheetInfo,
  doc_type: string,
  concurrency: number = 10
): Promise<ContentBlock[]> {
  const blocks: ContentBlock[] = [];
  const queue = [...info.guids.entries()];
  const total = queue.length;

  process.stderr.write(`[*] Fetching ${total} sections (concurrency: ${concurrency})\n`);

  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) break;
      const [order, guid] = item;
      const block = await fetch_block(info.product, doc_type, guid, order);
      blocks.push(block);
      process.stderr.write(`\r[*] Progress: ${blocks.length}/${total}`);
    }
  });

  await Promise.all(workers);
  process.stderr.write(`\r[*] Progress: ${total}/${total}\n`);
  return blocks.sort((a, b) => a.order - b.order);
}

function create_turndown(): TurndownService {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });

  td.addRule("images", {
    filter: "img",
    replacement: (_content, node) => {
      const el = node as HTMLImageElement;
      const src = el.getAttribute("src") || "";
      const alt = el.getAttribute("alt")?.replace(/\n/g, " ") || "";
      const title = el.getAttribute("title")?.replace(/\n/g, " ") || "";
      const full_src = src.startsWith("/") ? `${BASE_URL}${src}` : src;
      const caption = title || alt;
      return caption ? `![${caption}](${full_src})` : `![](${full_src})`;
    },
  });

  td.addRule("figcaption", {
    filter: (node) =>
      node.nodeName === "SPAN" && node.classList?.contains("caption"),
    replacement: (content) => `\n\n**${content.trim()}**\n\n`,
  });

  td.addRule("section-label", {
    filter: (node) =>
      node.nodeName === "SPAN" && node.classList?.contains("section-label"),
    replacement: (content) => content.trim() + " ",
  });

  // use HTML tags for subscript (works in GFM, ~~ is strikethrough)
  td.addRule("subscript", {
    filter: "sub",
    replacement: (content) => `<sub>${content}</sub>`,
  });

  // use HTML tags for superscript
  td.addRule("superscript", {
    filter: "sup",
    replacement: (content) => `<sup>${content}</sup>`,
  });

  // skip tables - handled separately
  td.addRule("skip-table", {
    filter: "table",
    replacement: () => "",
  });

  return td;
}

function decode_html_entities(text: string): string {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function extract_cell_text(cell_html: string): string {
  let text = cell_html
    .replace(/<sub[^>]*>([\s\S]*?)<\/sub>/gi, "<sub>$1</sub>")
    .replace(/<sup[^>]*>([\s\S]*?)<\/sup>/gi, "<sup>$1</sup>")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  text = decode_html_entities(text);
  text = text.replace(/\|/g, "\\|");
  return text;
}

function convert_table_html(table_html: string): string {
  const rows: string[][] = [];
  let max_cols = 0;

  const row_regex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let row_match;
  while ((row_match = row_regex.exec(table_html)) !== null) {
    const row_html = row_match[1];
    const cells: string[] = [];

    const cell_regex = /<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi;
    let cell_match;
    while ((cell_match = cell_regex.exec(row_html)) !== null) {
      const text = extract_cell_text(cell_match[2]);
      cells.push(text);
    }

    if (cells.length > 0) {
      rows.push(cells);
      max_cols = Math.max(max_cols, cells.length);
    }
  }

  if (rows.length === 0 || max_cols === 0) return "";

  const has_content = rows.some((row) => row.some((cell) => cell.length > 0));
  if (!has_content) return "";

  for (const row of rows) {
    while (row.length < max_cols) {
      row.push("");
    }
  }

  const lines: string[] = [];
  const header = rows[0];
  lines.push("| " + header.join(" | ") + " |");
  lines.push("| " + header.map(() => "---").join(" | ") + " |");

  for (let i = 1; i < rows.length; i++) {
    lines.push("| " + rows[i].join(" | ") + " |");
  }

  return "\n\n" + lines.join("\n") + "\n\n";
}

function extract_tables(html: string): { html: string; tables: string[] } {
  const tables: string[] = [];
  const placeholder_prefix = "TABLEPLACEHOLDER";
  let counter = 0;

  const processed_html = html.replace(/<table[^>]*>[\s\S]*?<\/table>/gi, (match) => {
    const md = convert_table_html(match);
    if (md) {
      const placeholder = `${placeholder_prefix}${counter++}`;
      tables.push(md);
      return placeholder;
    }
    return "";
  });

  return { html: processed_html, tables };
}

function clean_html(html: string): string {
  const content_match = html.match(/<div[^>]*class="[^"]*subsection[^"]*"[^>]*>[\s\S]*$/);
  if (content_match) {
    html = content_match[0];
  }

  const title_match = html.match(/<div[^>]*class="[^"]*doc-type[^"]*"[^>]*>[\s\S]*$/);
  if (title_match) {
    html = title_match[0];
  }

  html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  html = html.replace(/\s+xmlns:[a-z]+="[^"]*"/gi, "");

  return html;
}

// clean up markdown artifacts from turndown
function post_process_markdown(md: string): string {
  // remove unnecessary backslash escapes before underscores in identifiers
  // pattern: letter/number followed by \_ followed by letter/number
  md = md.replace(/([A-Za-z0-9])\\_([A-Za-z0-9])/g, "$1_$2");
  
  // clean up multiple consecutive escapes
  md = md.replace(/\\_\\_/g, "__");
  
  // normalize whitespace around HTML sub/sup tags
  md = md.replace(/\s*<(sub|sup)>\s*/g, "<$1>");
  md = md.replace(/\s*<\/(sub|sup)>\s*/g, "</$1>");
  
  return md;
}

function convert_to_markdown(blocks: ContentBlock[], info: DatasheetInfo): string {
  const td = create_turndown();
  const sections: string[] = [];

  sections.push(`# ${info.title}\n`);
  sections.push(`**Product:** ${info.product}\n`);
  sections.push(`**Document ID:** ${info.doc_id}\n`);
  sections.push(`**Source:** [TI Document Viewer](${BASE_URL}/document-viewer/${info.product}/datasheet)\n`);
  sections.push("---\n");

  for (const block of blocks) {
    if (!block.html) continue;

    const cleaned = clean_html(block.html);
    if (!cleaned.trim()) continue;

    const { html: html_without_tables, tables } = extract_tables(cleaned);

    try {
      let md = td.turndown(html_without_tables);

      for (let i = 0; i < tables.length; i++) {
        md = md.replace(`TABLEPLACEHOLDER${i}`, tables[i]);
      }

      md = post_process_markdown(md);

      if (md.trim()) {
        sections.push(md);
        sections.push("\n");
      }
    } catch (err) {
      process.stderr.write(`\n[!] Failed to convert block ${block.guid}: ${err}\n`);
    }
  }

  return sections.join("\n").replace(/\n{4,}/g, "\n\n\n");
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
    console.log(`
ti-fetch - Extract TI datasheets to Markdown

Usage:
  ti-fetch <url> [options]

Arguments:
  url                 TI document viewer URL
                      Example: https://www.ti.com/document-viewer/mcf8329a-q1/datasheet

Options:
  -o, --output FILE   Output file (default: stdout)
  -c, --concurrency N Parallel requests (default: 10)
  -h, --help          Show this help

Examples:
  ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet
  ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o mcf8329a-q1.md
`);
    process.exit(0);
  }

  let url = "";
  let output = "";
  let concurrency = 10;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "-o" || arg === "--output") {
      output = args[++i];
    } else if (arg === "-c" || arg === "--concurrency") {
      concurrency = parseInt(args[++i], 10);
    } else if (!arg.startsWith("-")) {
      url = arg;
    }
  }

  if (!url) {
    process.stderr.write("Error: URL required\n");
    process.exit(1);
  }

  const { doc_type } = parse_url(url);
  const start = performance.now();

  const info = await extract_toc(url);
  const blocks = await fetch_all_blocks(info, doc_type, concurrency);

  process.stderr.write(`[*] Converting to Markdown...\n`);
  const markdown = convert_to_markdown(blocks, info);

  const elapsed = ((performance.now() - start) / 1000).toFixed(2);
  process.stderr.write(`[*] Done in ${elapsed}s\n`);

  if (output) {
    await Bun.write(output, markdown);
    process.stderr.write(`[*] Written to ${output}\n`);
  } else {
    console.log(markdown);
  }
}

main().catch((err) => {
  process.stderr.write(`Error: ${err.message}\n`);
  process.exit(1);
});
