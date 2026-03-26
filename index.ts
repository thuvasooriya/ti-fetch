#!/usr/bin/env bun
import TurndownService from "turndown";
import { join, dirname, extname, basename } from "node:path";
import MathMLToLaTeX from "mathml-to-latex";

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

interface ImageInfo {
  url: string;
  local_path: string;
  relative_path: string;
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

// Lazy-load sharp only when --svg-to-webp is used (native module can't be bundled)
let _sharp: typeof import("sharp").default | null = null;
async function get_sharp() {
  if (!_sharp) {
    try {
      _sharp = (await import("sharp")).default;
    } catch (err) {
      const err_msg = err instanceof Error ? err.message : String(err);
      throw new Error(
        "Failed to load optional dependency 'sharp' required by --svg-to-webp.\n" +
        "Install or reinstall it with Bun: bun add sharp\n" +
        "If this is a release bundle/binary, --svg-to-webp may require running from source with dependencies installed.\n" +
        `Original error: ${err_msg}`
      );
    }
  }
  return _sharp;
}

async function download_image(url: string, local_path: string, convert_to_webp: boolean = false): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download image: ${url}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const ext = extname(url).toLowerCase();

  // Convert SVG to WebP if requested
  if (convert_to_webp && ext === ".svg") {
    const sharp = await get_sharp();
    const webp_path = local_path.replace(/\.svg$/i, ".webp");
    await Bun.write(webp_path, new Uint8Array(), { createPath: true });
    await sharp(buffer).webp({ quality: 90 }).toFile(webp_path);
    return webp_path;
  }

  // Otherwise save as-is
  await Bun.write(local_path, buffer, { createPath: true });
  return local_path;
}

async function download_images(
  markdown: string,
  output_path: string,
  convert_svg: boolean,
  concurrency: number
 ): Promise<string> {
  const output_dir = dirname(output_path);
  const assets_dir = join(output_dir, "assets");


  // Extract all image URLs
  const image_pattern = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const images: ImageInfo[] = [];
  let match;

  while ((match = image_pattern.exec(markdown)) !== null) {
    const url = match[2];
    if (!url.startsWith("http")) continue; // Skip already-local images

    const filename = basename(url).replace(/\?.*$/, ""); // Remove query params
    const local_path = join(assets_dir, filename);
    const relative_path = `assets/${filename}`;

    images.push({ url, local_path, relative_path });
  }

  if (images.length === 0) {
    return markdown;
  }

  process.stderr.write(`[*] Downloading ${images.length} images...\n`);

  // Download images with concurrency
  const download_queue = [...images];
  const results = new Map<string, string>(); // url -> relative_path
  let completed = 0;
  const worker_count = Math.max(1, Math.min(concurrency, 10));

  const workers = Array.from({ length: worker_count }, async () => {
    while (download_queue.length > 0) {
      const img = download_queue.shift();
      if (!img) break;

      try {
        const actual_path = await download_image(img.url, img.local_path, convert_svg);
        const actual_filename = basename(actual_path);
        const actual_relative = `assets/${actual_filename}`;
        results.set(img.url, actual_relative);
        completed++;
        process.stderr.write(`\r[*] Downloaded: ${completed}/${images.length}`);
      } catch (err) {
        process.stderr.write(`\n[!] Failed to download ${img.url}: ${err}\n`);
        results.set(img.url, img.url); // Keep original URL on failure
      }
    }
  });

  await Promise.all(workers);
  process.stderr.write(`\n`);

  // Replace URLs in markdown
  let updated = markdown;
  for (const [url, relative_path] of results.entries()) {
    updated = updated.replace(new RegExp(`\\]\\(${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)`, "g"), `](${relative_path})`);
  }

  return updated;
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
      const alt = (el.getAttribute("alt") || "").replace(/\s+/g, " ").trim();
      const title = (el.getAttribute("title") || "").replace(/\s+/g, " ").trim();
      const full_src = src.startsWith("/") ? `${BASE_URL}${src}` : src;
      const caption = title || alt;
      // Always use full URL initially - will be replaced later if download_images is true
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

  td.addRule("subscript", {
    filter: "sub",
    replacement: (content) => `<sub>${content}</sub>`,
  });

  td.addRule("superscript", {
    filter: "sup",
    replacement: (content) => `<sup>${content}</sup>`,
  });

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
  // preserve sub/sup tags, convert to HTML entities
  let text = cell_html
    .replace(/<sub[^>]*>([\s\S]*?)<\/sub>/gi, "<sub>$1</sub>")
    .replace(/<sup[^>]*>([\s\S]*?)<\/sup>/gi, "<sup>$1</sup>")
    // remove all other tags but keep text
    .replace(/<(?!\/?(sub|sup)\b)[^>]+>/gi, " ")
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

function mathml_to_latex(mathml: string): string {
  try {
    // Add xmlns if missing
    if (!mathml.includes('xmlns')) {
      mathml = mathml.replace('<math', '<math xmlns="http://www.w3.org/1998/Math/MathML"');
    }
    
    // Decode HTML entities
    mathml = mathml
      .replace(/&nbsp;/g, ' ')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&#xA0;/g, ' ');
    
    let latex = MathMLToLaTeX.MathMLToLaTeX.convert(mathml);
    
    // Normalize converter artifacts
    latex = latex.replace(/\\textrm\{\s*\}/g, " ");
    latex = latex.replace(/\\left\(\s*\\right\.\s*/g, "(");
    latex = latex.replace(/\s*\\left\.\s*\\right\)/g, ")");
    latex = latex.replace(/\\underline\s*/g, "\\_");
    
    // Join split identifiers emitted as letter-by-letter tokens
    let previous = "";
    while (latex !== previous) {
      previous = latex;
      latex = latex
        .replace(/(?<!\\)\b([A-Za-z](?: [A-Za-z])+)\b/g, (match) =>
          match.replace(/ /g, "")
        )
        .replace(/(?<!\\)\b([A-Za-z]) ([a-z]{2,})\b/g, "$1$2")
        .replace(/([A-Za-z]) ([A-Za-z])_/g, "$1$2_")
        .replace(/_([A-Za-z]) ([A-Za-z])/g, "_$1$2")
        .replace(/\{([A-Za-z]) ([A-Za-z])/g, "{$1$2")
        .replace(/([A-Za-z]) ([A-Za-z])\}/g, "$1$2}");
    }
    
    // Remove spacing around subscripts and escaped underscores
    latex = latex.replace(/\s*_\s*/g, "_");
    latex = latex.replace(/([A-Za-z]) \\_/g, "$1\\_");
    latex = latex.replace(/\\_ ([A-Za-z])/g, "\\_$1");
    latex = latex.replace(/\{\s+/g, "{").replace(/\s+\}/g, "}");
    latex = latex.replace(/\\times([A-Za-z])/g, "\\times $1");
    latex = latex.replace(/_\{\}/g, "");
    latex = latex.replace(/\s{2,}/g, " ").trim();
    return latex;
  } catch (err) {
    process.stderr.write(`\n[!] Failed to convert MathML: ${err}\n`);
    return "";
  }
}

function extract_equations(html: string): { html: string; equations: Map<string, string> } {
  const equations = new Map<string, string>();
  const placeholder_prefix = "EQUATIONPLACEHOLDER";
  let counter = 0;

  // Extract equation blocks with MathML
  const processed_html = html.replace(
    /<div[^>]*class="[^"]*equation[^"]*"[^>]*>([\s\S]*?)<\/div>/gi,
    (match, content) => {
      // Extract label
      const label_match = content.match(/<span[^>]*class="[^"]*equation-label[^"]*"[^>]*>([^<]+)<\/span>/);
      const label = label_match ? label_match[1].trim() : "";
      
      // Extract MathML
      const mathml_match = content.match(/<math[^>]*>([\s\S]*?)<\/math>/i);
      if (mathml_match) {
        const mathml = '<math>' + mathml_match[1] + '</math>';
        const latex = mathml_to_latex(mathml);
        
        if (latex) {
          const placeholder = `${placeholder_prefix}${counter}`;
          const equation_md = label
            ? `\n\n${label} $$${latex}$$\n\n`
            : `\n\n$$${latex}$$\n\n`;
          equations.set(placeholder, equation_md);
          counter++;
          return placeholder;
        }
      }
      
      // Return original if conversion failed
      return match;
    }
  );

  return { html: processed_html, equations };
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

function post_process_markdown(md: string): string {
  // remove unnecessary backslash escapes before underscores in identifiers
  md = md.replace(/([A-Za-z0-9])\\_([A-Za-z0-9])/g, "$1_$2");
  md = md.replace(/\\_\\_/g, "__");
  
  // remove unnecessary backslashes before = in equations
  md = md.replace(/\\=/g, "=");
  
  // remove unnecessary backslashes before * (multiplication)
  md = md.replace(/\\\*/g, "*");
  
  // fix excessive spacing in equations (C U R R E N T -> CURRENT)
  md = md.replace(/([A-Z])\s{2,}([A-Z])/g, "$1$2");
  
  // fix spaced subscript references like ( i q ) -> (i_q)
  md = md.replace(/\(\s*([a-z])\s+([a-z])\s*\)/g, "($1_$2)");
  
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

    // Extract equations first (before tables)
    const { html: html_without_equations, equations } = extract_equations(cleaned);
    
    // Then extract tables
    const { html: html_without_tables, tables } = extract_tables(html_without_equations);

    try {
      let md = td.turndown(html_without_tables);

      // Replace table placeholders
      for (let i = 0; i < tables.length; i++) {
        md = md.replace(`TABLEPLACEHOLDER${i}`, tables[i]);
      }

      md = post_process_markdown(md);

      // Replace equation placeholders (use function to avoid $ interpretation)
      for (const [placeholder, equation_md] of equations.entries()) {
        md = md.replace(placeholder, () => equation_md);
      }


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
  url                    TI document viewer URL
                         Example: https://www.ti.com/document-viewer/mcf8329a-q1/datasheet

Options:
  -o, --output FILE      Output file (default: stdout)
  -c, --concurrency N    Parallel requests (default: 10)
  --download-images      Download images to assets/ directory and use relative links
  --svg-to-webp          Convert SVG images to WebP (requires --download-images)
  -h, --help             Show this help

Examples:
  ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet
  ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o mcf8329a-q1.md
  ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o out.md --download-images
  ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o out.md --download-images --svg-to-webp
`);
    process.exit(0);
  }

  let url = "";
  let output = "";
  let concurrency = 10;
  let download_imgs = false;
  let svg_to_webp = false;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "-o" || arg === "--output") {
      output = args[++i];
    } else if (arg === "-c" || arg === "--concurrency") {
      concurrency = parseInt(args[++i], 10);
    } else if (arg === "--download-images") {
      download_imgs = true;
    } else if (arg === "--svg-to-webp") {
      svg_to_webp = true;
    } else if (!arg.startsWith("-")) {
      url = arg;
    }
  }

  if (!url) {
    process.stderr.write("Error: URL required\n");
    process.exit(1);
  }

  if (svg_to_webp && !download_imgs) {
    process.stderr.write("Error: --svg-to-webp requires --download-images\n");
    process.exit(1);
  }

  if (download_imgs && !output) {
    process.stderr.write("Error: --download-images requires -o/--output\n");
    process.exit(1);
  }

  // Validate sharp is available early if --svg-to-webp is used
  if (svg_to_webp) {
    try {
      await get_sharp();
    } catch (err) {
      process.stderr.write(`Error: ${(err as Error).message}\n`);
      process.exit(1);
    }
  }

  const { doc_type } = parse_url(url);
  const start = performance.now();

  const info = await extract_toc(url);
  const blocks = await fetch_all_blocks(info, doc_type, concurrency);

  process.stderr.write(`[*] Converting to Markdown...\n`);
  let markdown = convert_to_markdown(blocks, info);

  if (download_imgs && output) {
    markdown = await download_images(markdown, output, svg_to_webp, concurrency);
  }

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
