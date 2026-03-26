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

// extract product name and document type from URL
function parse_url(url: string): { product: string; doc_type: string } {
  const match = url.match(/document-viewer\/([^/]+)\/(\w+)/i);
  if (!match) {
    throw new Error(`Invalid TI document URL: ${url}`);
  }
  return { product: match[1].toUpperCase(), doc_type: match[2] };
}

// fetch the main page and extract ordered GUIDs from TOC
async function extract_toc(url: string): Promise<DatasheetInfo> {
  const { product, doc_type } = parse_url(url);
  const normalized_url = `${BASE_URL}/document-viewer/${product}/${doc_type}`;

  console.error(`[*] Fetching TOC from ${normalized_url}`);
  const response = await fetch(normalized_url);
  if (!response.ok) {
    throw new Error(`Failed to fetch TOC: ${response.status}`);
  }

  const html = await response.text();

  // extract document ID from image paths (e.g., SLLSFV1)
  const doc_id_match = html.match(/\/ods\/images\/([A-Z0-9]+)\//);
  const doc_id = doc_id_match?.[1] || product;

  // extract title
  const title_match = html.match(/<title>([^<]+)<\/title>/);
  const title = title_match?.[1]?.replace(/\s*\|\s*TI\.com\s*$/, "").trim() || product;

  // extract ordered GUIDs from TOC hrefs
  const guid_pattern = new RegExp(
    `href="//www\\.ti\\.com/document-viewer/${product}/${doc_type}/(GUID-[A-F0-9-]+)`,
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

  console.error(`[*] Found ${guids.length} sections`);
  return { product, doc_id, title, guids };
}

// fetch a single content block by GUID
async function fetch_block(
  product: string,
  doc_type: string,
  guid: string,
  order: number
): Promise<ContentBlock> {
  const url = `${BASE_URL}/document-viewer/${product}/${doc_type}/${guid}?raw=1`;
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`[!] Failed to fetch ${guid}: ${response.status}`);
    return { guid, html: "", order };
  }
  const html = await response.text();
  return { guid, html, order };
}

// fetch all content blocks in parallel with concurrency limit
async function fetch_all_blocks(
  info: DatasheetInfo,
  doc_type: string,
  concurrency: number = 10
): Promise<ContentBlock[]> {
  const blocks: ContentBlock[] = [];
  const queue = [...info.guids.entries()];

  console.error(`[*] Fetching ${queue.length} sections (concurrency: ${concurrency})`);

  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) break;
      const [order, guid] = item;
      const block = await fetch_block(info.product, doc_type, guid, order);
      blocks.push(block);
      if (blocks.length % 20 === 0) {
        console.error(`[*] Progress: ${blocks.length}/${info.guids.length}`);
      }
    }
  });

  await Promise.all(workers);
  return blocks.sort((a, b) => a.order - b.order);
}

// configure turndown for optimal datasheet conversion
function create_turndown(doc_id: string): TurndownService {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });

  // handle images with full URLs
  td.addRule("images", {
    filter: "img",
    replacement: (_content, node) => {
      const el = node as HTMLImageElement;
      const src = el.getAttribute("src") || "";
      const alt = el.getAttribute("alt")?.replace(/\n/g, " ") || "";
      const title = el.getAttribute("title")?.replace(/\n/g, " ") || "";

      // convert relative URLs to absolute
      const full_src = src.startsWith("/") ? `${BASE_URL}${src}` : src;
      const caption = title || alt;
      return caption ? `![${caption}](${full_src})` : `![](${full_src})`;
    },
  });

  // handle figure captions
  td.addRule("figcaption", {
    filter: (node) =>
      node.nodeName === "SPAN" && node.classList?.contains("caption"),
    replacement: (content) => `\n\n**${content.trim()}**\n\n`,
  });

  // handle section labels (e.g., "5.1")
  td.addRule("section-label", {
    filter: (node) =>
      node.nodeName === "SPAN" && node.classList?.contains("section-label"),
    replacement: (content) => content.trim() + " ",
  });

  // handle subscripts
  td.addRule("subscript", {
    filter: "sub",
    replacement: (content) => `~${content}~`,
  });

  // handle superscripts
  td.addRule("superscript", {
    filter: "sup",
    replacement: (content) => `^${content}^`,
  });

  // tables handled via regex in clean_html, skip turndown's default
  td.addRule("table", {
    filter: "table",
    replacement: (_content, node) => {
      // fallback: just get text content if regex didn't catch it
      const text = node.textContent || "";
      return text.trim() ? `\n\n${text.trim()}\n\n` : "";
    },
  });

  return td;
}

// storage for extracted tables during processing
const table_store = new Map<string, string>();

// convert HTML table to markdown table using regex
function convert_table_html(table_html: string): string {
  const rows: string[][] = [];
  let max_cols = 0;

  // extract all rows
  const row_regex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let row_match;
  while ((row_match = row_regex.exec(table_html)) !== null) {
    const row_html = row_match[1];
    const cells: string[] = [];

    // extract cells (th or td)
    const cell_regex = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi;
    let cell_match;
    while ((cell_match = cell_regex.exec(row_html)) !== null) {
      // strip HTML tags and clean whitespace
      const text = cell_match[1]
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/\s+/g, " ")
        .replace(/\|/g, "\\|")
        .trim();
      cells.push(text);
    }

    if (cells.length > 0) {
      rows.push(cells);
      max_cols = Math.max(max_cols, cells.length);
    }
  }

  if (rows.length === 0 || max_cols === 0) return "";

  // skip tables where all cells are empty (used for figure spacing)
  const has_content = rows.some((row) => row.some((cell) => cell.length > 0));
  if (!has_content) return "";

  // pad rows to max columns
  for (const row of rows) {
    while (row.length < max_cols) {
      row.push("");
    }
  }

  // build markdown table
  const lines: string[] = [];
  const header = rows[0];
  lines.push("| " + header.join(" | ") + " |");
  lines.push("| " + header.map(() => "---").join(" | ") + " |");

  for (let i = 1; i < rows.length; i++) {
    lines.push("| " + rows[i].join(" | ") + " |");
  }

  const table_md = "\n\n" + lines.join("\n") + "\n\n";
  const placeholder = `TBLPLACEHOLDER${Date.now()}X${Math.random().toString(36).slice(2)}END`;
  table_store.set(placeholder, table_md);
  return placeholder;
}


// clean HTML before conversion, extracting tables
function clean_html(html: string): string {
  // extract just the content div, skip meta tags
  const content_match = html.match(/<div[^>]*class="[^"]*subsection[^"]*"[^>]*>[\s\S]*$/);
  if (content_match) {
    html = content_match[0];
  }

  // also try to get title div
  const title_match = html.match(/<div[^>]*class="[^"]*doc-type[^"]*"[^>]*>[\s\S]*$/);
  if (title_match) {
    html = title_match[0];
  }

  // remove script tags
  html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");

  // remove style tags
  html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  // remove xmlns attributes
  html = html.replace(/\s+xmlns:[a-z]+="[^"]*"/gi, "");

  // convert tables to markdown and store with placeholders
  html = html.replace(/<table[^>]*>[\s\S]*?<\/table>/gi, (match) => {
    const md = convert_table_html(match);
    if (md && md.startsWith("TBLPLACEHOLDER")) {
      return md;
    }
    return "";
  });

  return html;
}

// convert blocks to markdown
function convert_to_markdown(blocks: ContentBlock[], info: DatasheetInfo): string {
  const td = create_turndown(info.doc_id);
  const sections: string[] = [];

  // add document header
  sections.push(`# ${info.title}\n`);
  sections.push(`**Product:** ${info.product}\n`);
  sections.push(`**Document ID:** ${info.doc_id}\n`);
  sections.push(`**Source:** [TI Document Viewer](${BASE_URL}/document-viewer/${info.product}/datasheet)\n`);
  sections.push("---\n");

  for (const block of blocks) {
    if (!block.html) continue;

    // clear table store for each block
    table_store.clear();

    const cleaned = clean_html(block.html);
    if (!cleaned.trim()) continue;

    try {
      let md = td.turndown(cleaned);
      // restore tables from store
      md = md.replace(/TBLPLACEHOLDER[a-z0-9X]+END/gi, (placeholder) => {
        return table_store.get(placeholder) || "";
      });
      if (md.trim()) {
        sections.push(md);
        sections.push("\n");
      }
    } catch (err) {
      console.error(`[!] Failed to convert block ${block.guid}: ${err}`);
    }
  }

  return sections.join("\n").replace(/\n{4,}/g, "\n\n\n");
}

// main entry point
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
    console.error("Error: URL required");
    process.exit(1);
  }

  const { doc_type } = parse_url(url);
  const start = performance.now();

  // step 1: extract TOC
  const info = await extract_toc(url);

  // step 2: fetch all blocks
  const blocks = await fetch_all_blocks(info, doc_type, concurrency);

  // step 3: convert to markdown
  console.error(`[*] Converting to Markdown...`);
  const markdown = convert_to_markdown(blocks, info);

  const elapsed = ((performance.now() - start) / 1000).toFixed(2);
  console.error(`[*] Done in ${elapsed}s`);

  // output
  if (output) {
    await Bun.write(output, markdown);
    console.error(`[*] Written to ${output}`);
  } else {
    console.log(markdown);
  }
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
