#!/usr/bin/env bun
import TurndownService from "turndown";
import { join, dirname, extname, basename } from "node:path";
import { createRequire } from "node:module";
import MathMLToLaTeX from "mathml-to-latex";
import package_json from "./package.json" with { type: "json" };
import {
  prompt_text,
  render_help,
  run_with_spinner,
  terminal_style,
  type HelpDocument,
} from "./lib/cli";
import {
  parse_self_update_cli_options,
  run_github_self_update,
  type ReleaseAssetSpec,
} from "./lib/self_update";

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

type ImageDownloadMode = "off" | "auto" | "webp" | "png";


function parse_url(url: string): { product: string; doc_type: string } {
  const match = url.match(/document-viewer\/([^/]+)\/(\w+)/i);
  if (!match) {
    throw new Error(`Invalid TI document URL: ${url}`);
  }
  return { product: match[1].toUpperCase(), doc_type: match[2] };
}

async function extract_toc(
  url: string,
  options?: { log_progress?: boolean }
): Promise<DatasheetInfo> {
  const log_progress = options?.log_progress ?? true;
  const { product, doc_type } = parse_url(url);
  const normalized_url = `${BASE_URL}/document-viewer/${product}/${doc_type}`;

  if (log_progress) {
    process.stderr.write(`[*] Fetching TOC from ${normalized_url}\n`);
  }
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

  if (log_progress) {
    process.stderr.write(`[*] Found ${guids.length} sections\n`);
  }
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

// Lazy-load sharp only when image mode requires SVG conversion (--download-images=webp|png).
// For bundle/compiled artifacts, install sharp at runtime in a tool cache when unavailable.
const SHARP_VERSION = "0.34.5";
const SHARP_RUNTIME_DIR = (() => {
  const home_dir = Bun.env.HOME || Bun.env.USERPROFILE || ".";
  const cache_root = Bun.env.XDG_CACHE_HOME || join(home_dir, ".cache");
  return join(cache_root, "ti-fetch", "sharp-runtime");
})();

let _sharp: typeof import("sharp").default | null = null;
let _sharp_loading: Promise<typeof import("sharp").default> | null = null;

function load_sharp_from_runtime_dir(): typeof import("sharp").default {
  const runtime_require = createRequire(join(SHARP_RUNTIME_DIR, "package.json"));
  const loaded = runtime_require("sharp") as unknown;
  const sharp = (loaded as { default?: typeof import("sharp").default }).default ?? (loaded as typeof import("sharp").default);

  if (typeof sharp !== "function") {
    throw new Error("Sharp module did not resolve to a callable export");
  }

  return sharp;
}

async function install_runtime_sharp(): Promise<typeof import("sharp").default> {
  const package_json_path = join(SHARP_RUNTIME_DIR, "package.json");
  const sharp_package_json = join(SHARP_RUNTIME_DIR, "node_modules", "sharp", "package.json");

  const runtime_pkg = {
    name: "ti-fetch-sharp-runtime",
    private: true,
    type: "module",
    dependencies: {
      sharp: SHARP_VERSION,
    },
  };

  await Bun.write(package_json_path, `${JSON.stringify(runtime_pkg, null, 2)}\n`, { createPath: true });

  const install = Bun.spawnSync({
    cmd: ["bun", "install", "--silent"],
    cwd: SHARP_RUNTIME_DIR,
    stdout: "pipe",
    stderr: "pipe",
  });

  if (install.exitCode !== 0) {
    const stderr_text = new TextDecoder().decode(install.stderr);
    throw new Error(
      `bun install failed in ${SHARP_RUNTIME_DIR} (exit ${install.exitCode}). ${stderr_text.trim()}`
    );
  }

  if (!(await Bun.file(sharp_package_json).exists())) {
    throw new Error(`sharp package missing after install in ${SHARP_RUNTIME_DIR}`);
  }

  return load_sharp_from_runtime_dir();
}

async function load_sharp(): Promise<typeof import("sharp").default> {
  const skip_direct = Bun.env.TI_FETCH_SHARP_SKIP_DIRECT === "1";
  let direct_msg = skip_direct ? "skipped (TI_FETCH_SHARP_SKIP_DIRECT=1)" : "";

  if (!skip_direct) {
    try {
      return (await import("sharp")).default;
    } catch (direct_err) {
      direct_msg = direct_err instanceof Error ? direct_err.message : String(direct_err);
    }
  }

  const cached_sharp_package = join(SHARP_RUNTIME_DIR, "node_modules", "sharp", "package.json");

  try {
    if (await Bun.file(cached_sharp_package).exists()) {
      try {
        return load_sharp_from_runtime_dir();
      } catch {
        // Corrupted or incomplete cache: reinstall below.
      }
    }
    return await install_runtime_sharp();
  } catch (runtime_err) {
    const runtime_msg = runtime_err instanceof Error ? runtime_err.message : String(runtime_err);
    throw new Error(
      "Failed to load optional dependency 'sharp' required by --download-images=webp|png.\n" +
      "ti-fetch bundle runs with Bun (not Node). npm/node lines in nested errors are emitted by sharp itself.\n" +
      "Tried loading local sharp and runtime-installing sharp with Bun.\n" +
      `Direct load error: ${direct_msg}\n` +
      `Runtime install error: ${runtime_msg}`
    );
  }
}

async function get_sharp(): Promise<typeof import("sharp").default> {
  if (_sharp) return _sharp;
  if (_sharp_loading) return _sharp_loading;

  _sharp_loading = load_sharp();
  try {
    _sharp = await _sharp_loading;
    return _sharp;
  } finally {
    _sharp_loading = null;
  }
}

async function download_image(url: string, local_path: string, image_mode: ImageDownloadMode): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download image: ${url}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const source_url = url.split("?")[0] ?? url;
  const ext = extname(source_url).toLowerCase();

  if (ext === ".svg" && (image_mode === "webp" || image_mode === "png")) {
    const sharp = await get_sharp();
    const converted_path = local_path.replace(/\.svg$/i, image_mode === "webp" ? ".webp" : ".png");
    await Bun.write(converted_path, new Uint8Array(), { createPath: true });
    if (image_mode === "webp") {
      await sharp(buffer).webp({ quality: 90 }).toFile(converted_path);
    } else {
      await sharp(buffer).png().toFile(converted_path);
    }
    return converted_path;
  }

  await Bun.write(local_path, buffer, { createPath: true });
  return local_path;
}

async function download_images(
  markdown: string,
  output_path: string,
  image_mode: ImageDownloadMode,
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

    const source_url = url.split("?")[0] ?? url;
    const filename = basename(source_url) || `image-${images.length + 1}`;
    const local_path = join(assets_dir, filename);
    const relative_path = `assets/${filename}`;

    images.push({ url, local_path, relative_path });
  }

  if (images.length === 0) {
    return markdown;
  }

  process.stderr.write(`[*] Downloading ${images.length} images...\n`);

  const download_queue = [...images];
  const results = new Map<string, string>(); // url -> relative_path
  let completed = 0;
  const worker_count = Math.max(1, Math.min(concurrency, 10));

  const workers = Array.from({ length: worker_count }, async () => {
    while (download_queue.length > 0) {
      const img = download_queue.shift();
      if (!img) break;

      try {
        const actual_path = await download_image(img.url, img.local_path, image_mode);
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
      // Always use full URL initially; rewritten to local assets when image downloads are enabled
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
  // Count header rows in <thead>
  const thead_match = table_html.match(/<thead[^>]*>([\s\S]*?)<\/thead>/i);
  const thead_html = thead_match ? thead_match[1] : "";
  const thead_rows = (thead_html.match(/<tr[^>]*>/gi) || []).length;

  // Build a proper grid handling both colspan and rowspan
  const grid: (string | null)[][] = [];
  const rowspan_cells: Map<string, { text: string; remaining: number }> = new Map();

  const row_regex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let row_idx = 0;
  let row_match;

  while ((row_match = row_regex.exec(table_html)) !== null) {
    const row_html = row_match[1];
    grid[row_idx] = [];
    let col_idx = 0;

    const cell_regex = /<(th|td)([^>]*)>([\s\S]*?)<\/\1>/gi;
    let cell_match;

    while ((cell_match = cell_regex.exec(row_html)) !== null) {
      const attrs = cell_match[2];
      const content = cell_match[3];
      const text = extract_cell_text(content);

      const colspan_match = attrs.match(/colspan\s*=\s*["']?(\d+)["']?/i);
      const rowspan_match = attrs.match(/rowspan\s*=\s*["']?(\d+)["']?/i);
      const colspan = colspan_match ? parseInt(colspan_match[1], 10) : 1;
      const rowspan = rowspan_match ? parseInt(rowspan_match[1], 10) : 1;

      while (grid[row_idx][col_idx] !== undefined) col_idx++;

      for (let c = 0; c < colspan; c++) {
        const target_col = col_idx + c;
        grid[row_idx][target_col] = text;

        if (rowspan > 1) {
          for (let r = 1; r < rowspan; r++) {
            const key = `${row_idx + r},${target_col}`;
            rowspan_cells.set(key, { text, remaining: rowspan - r });
          }
        }
      }
      col_idx += colspan;
    }

    row_idx++;
  }

  // Fill in rowspan cells
  for (const [key, info] of rowspan_cells.entries()) {
    const [r, c] = key.split(",").map(Number);
    if (!grid[r]) grid[r] = [];
    if (grid[r][c] === undefined) {
      grid[r][c] = info.text;
    }
  }

  if (grid.length === 0) return "";

  const max_cols = Math.max(...grid.map((r) => r?.length || 0));
  if (max_cols === 0) return "";

  for (const row of grid) {
    for (let c = 0; c < max_cols; c++) {
      if (row[c] === undefined || row[c] === null) {
        row[c] = "";
      }
    }
    while (row.length < max_cols) {
      row.push("");
    }
  }

  const has_content = grid.some((row) => row.some((cell) => (cell ?? "").length > 0));
  if (!has_content) return "";

  // Use thead row count for header detection (default to 1)
  const header_row_count = Math.max(1, thead_rows);

  // Merge header rows: later rows override earlier (more specific sub-headers)
  const header: string[] = [...grid[0].map((c) => c ?? "")];
  for (let h = 1; h < header_row_count && h < grid.length; h++) {
    for (let c = 0; c < max_cols; c++) {
      const current = header[c];
      const candidate = grid[h][c] ?? "";
      if (candidate && candidate !== current) {
        header[c] = candidate;
      }
    }
  }

  const lines: string[] = [];
  lines.push("| " + header.join(" | ") + " |");
  lines.push("| " + header.map(() => "---").join(" | ") + " |");

  for (let i = header_row_count; i < grid.length; i++) {
    lines.push("| " + (grid[i].map((c) => c ?? "")).join(" | ") + " |");
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

const DEFAULT_CONCURRENCY = 10;
const DOWNLOAD_IMAGE_FLAG_VALUES = ["auto", "webp", "png"] as const;
const INTERACTIVE_IMAGE_MODES = ["off", ...DOWNLOAD_IMAGE_FLAG_VALUES] as const;
const DOWNLOAD_IMAGE_FLAG_VALUES_SET = new Set<string>(DOWNLOAD_IMAGE_FLAG_VALUES);
const INTERACTIVE_IMAGE_MODES_SET = new Set<string>(INTERACTIVE_IMAGE_MODES);

const package_meta = package_json as {
  name: string;
  description: string;
  version: string;
  repository?: string | { url?: string };
};
const CLI_NAME = package_meta.name;
const CLI_DESCRIPTION = package_meta.description;
const CLI_VERSION = package_meta.version;
const CLI_REPOSITORY = package_meta.repository;
const DEFAULT_RELEASE_REPOSITORY = "thuvasooriya/ti-fetch";

type InputKind = "url" | "file";

interface ParsedCliConfig {
  input: string;
  output: string;
  concurrency: number;
  image_mode: ImageDownloadMode;
}

interface RunConfig {
  url: string;
  output: string;
  concurrency: number;
  image_mode: ImageDownloadMode;
}

interface ResolvedRunConfig {
  targets: RunConfig[];
  preloaded_info?: DatasheetInfo;
}

interface ResolvedInput {
  kind: InputKind;
  urls: string[];
}

function parse_download_images_flag_value(value: string): ImageDownloadMode {
  const normalized = value.trim().toLowerCase();
  if (DOWNLOAD_IMAGE_FLAG_VALUES_SET.has(normalized)) {
    return normalized as ImageDownloadMode;
  }
  throw new Error(`Invalid --download-images value: ${value}. Allowed values: auto, webp, png`);
}

function parse_interactive_image_mode(value: string): ImageDownloadMode {
  const normalized = value.trim().toLowerCase();
  if (INTERACTIVE_IMAGE_MODES_SET.has(normalized)) {
    return normalized as ImageDownloadMode;
  }
  throw new Error(`Image mode must be one of: off, auto, webp, png`);
}

const RELEASE_PLATFORM_ASSETS: Record<string, ReleaseAssetSpec> = {
  "darwin-arm64": {
    asset_name: "ti-fetch-darwin-arm64.tar.gz",
    archive_type: "tar.gz",
    extracted_binary_name: "ti-fetch-darwin-arm64",
  },
  "darwin-x64": {
    asset_name: "ti-fetch-darwin-x64.tar.gz",
    archive_type: "tar.gz",
    extracted_binary_name: "ti-fetch-darwin-x64",
  },
  "linux-arm64": {
    asset_name: "ti-fetch-linux-arm64.tar.gz",
    archive_type: "tar.gz",
    extracted_binary_name: "ti-fetch-linux-arm64",
  },
  "linux-x64": {
    asset_name: "ti-fetch-linux-x64.tar.gz",
    archive_type: "tar.gz",
    extracted_binary_name: "ti-fetch-linux-x64",
  },
  "win32-arm64": {
    asset_name: "ti-fetch-windows-arm64.zip",
    archive_type: "zip",
    extracted_binary_name: "ti-fetch-windows-arm64.exe",
  },
  "win32-x64": {
    asset_name: "ti-fetch-windows-x64.zip",
    archive_type: "zip",
    extracted_binary_name: "ti-fetch-windows-x64.exe",
  },
};
const RELEASE_BUNDLE_ASSET: ReleaseAssetSpec = {
  asset_name: "ti-fetch",
  archive_type: "raw",
};

function print_self_update_help(): void {
  const help_document: HelpDocument = {
    name: `${CLI_NAME} self-update`,
    description: "Update installed release build from latest GitHub release",
    version: CLI_VERSION,
    usage: ["ti-fetch self-update [--check]"],
    sections: [
      {
        title: "Options",
        rows: [
          { left: "--check", right: "Check for updates without installing" },
          { left: "-h, --help", right: "Show command help" },
        ],
      },
    ],
    examples: ["ti-fetch self-update --check", "ti-fetch self-update"],
  };
  console.log(render_help(help_document));
}

async function run_self_update(check_only: boolean): Promise<void> {
  const result = await run_github_self_update(
    {
      app_name: CLI_NAME,
      current_version: CLI_VERSION,
      repository: CLI_REPOSITORY,
      repository_override: Bun.env.TI_FETCH_RELEASE_REPO?.trim(),
      api_base_url: Bun.env.TI_FETCH_RELEASE_API_BASE?.trim(),
      checksum_asset_name: Bun.env.TI_FETCH_RELEASE_CHECKSUM_ASSET?.trim(),
      default_repository: DEFAULT_RELEASE_REPOSITORY,
      platform_assets: RELEASE_PLATFORM_ASSETS,
      bundle_asset: RELEASE_BUNDLE_ASSET,
    },
    {
      check_only,
      spinner: run_with_spinner,
    }
  );

  if (result.status === "up_to_date") {
    if (Bun.semver.order(result.current_version, result.latest_version) > 0) {
      process.stderr.write(`[*] Installed version v${result.current_version} is newer than release v${result.latest_version}\n`);
    } else {
      process.stderr.write(`[*] ${CLI_NAME} is already up to date (v${result.current_version})\n`);
    }
    return;
  }

  if (result.status === "update_available") {
    process.stderr.write(`[*] Update available: v${result.current_version} -> v${result.latest_version}\n`);
    process.stderr.write(`[*] Run '${CLI_NAME} self-update' to install the update\n`);
    return;
  }

  process.stderr.write(`${terminal_style.success("✔")} Updated ${CLI_NAME} to v${result.latest_version}\n`);
  if (result.checksum_verified) {
    process.stderr.write(`[*] Release checksum verified\n`);
  }
  if (result.release_url) {
    process.stderr.write(`[*] Release notes: ${result.release_url}\n`);
  }
}

async function handle_self_update_command(args: string[]): Promise<boolean> {
  if (args[0] !== "self-update") {
    return false;
  }

  const options = parse_self_update_cli_options(args.slice(1));
  if (options.show_help) {
    print_self_update_help();
    return true;
  }

  await run_self_update(options.check_only);
  return true;
}

function build_help_document(): HelpDocument {
  return {
    name: CLI_NAME,
    description: CLI_DESCRIPTION,
    version: CLI_VERSION,
    usage: ["ti-fetch <url-or-file> [options]", "ti-fetch self-update [--check]"],
    sections: [
      {
        title: "Arguments",
        rows: [
          { left: "url-or-file", right: "TI document viewer URL or path to file with URLs (one per line)" },
          { left: "", right: "Example URL: https://www.ti.com/document-viewer/mcf8329a-q1/datasheet" },
          { left: "", right: "Example file: tmp/urls.md" },
        ],
      },
      {
        title: "Options",
        rows: [
          {
            left: "-o, --output PATH",
            right: "Output file for single URL input; output directory for URL-file input",
          },
          { left: "-c, --concurrency N", right: `Parallel requests (default: ${DEFAULT_CONCURRENCY})` },
          {
            left: "--download-images[=MODE]",
            right: "Download images to assets/ and relink markdown (MODE: auto|webp|png; default when flag is auto)",
          },
          { left: "-v, --version", right: "Show version" },
          { left: "-h, --help", right: "Show this help" },
        ],
      },
      {
        title: "Commands",
        rows: [
          { left: "self-update", right: "Update installed release build from latest GitHub release" },
          { left: "self-update --check", right: "Check for updates without installing" },
        ],
      },
    ],
    examples: [
      "ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet",
      "ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o mcf8329a-q1.md",
      "ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o out.md --download-images",
      "ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o out.md --download-images=webp",
      "ti-fetch tmp/urls.md",
      "ti-fetch tmp/urls.md -o out --download-images=png",
      "ti-fetch self-update --check",
      "ti-fetch self-update",
    ],
  };
}

function print_help(): void {
  console.log(render_help(build_help_document()));
}

function print_version(): void {
  console.log(`${CLI_NAME} v${CLI_VERSION}`);
}

function is_interactive_tty(): boolean {
  return Boolean(process.stdin.isTTY && process.stdout.isTTY);
}

function infer_default_output_path(url: string): string {
  const { product, doc_type } = parse_url(url);
  return `${product.toLowerCase()}-${doc_type}.md`;
}

function parse_positive_integer(value: string, flag_name: string): number {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`${flag_name} must be a positive integer`);
  }
  return parsed;
}

function validate_run_config(config: RunConfig): void {
  parse_url(config.url);

  if (config.image_mode !== "off" && !config.output) {
    throw new Error("--download-images requires -o/--output when input is a single URL");
  }

  if (!Number.isInteger(config.concurrency) || config.concurrency <= 0) {
    throw new Error("--concurrency must be a positive integer");
  }
}

function parse_cli_args(args: string[]): ParsedCliConfig {
  let input = "";
  let output = "";
  let concurrency = DEFAULT_CONCURRENCY;
  let image_mode: ImageDownloadMode = "off";

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    if (arg === "-o" || arg === "--output") {
      const value = args[i + 1];
      if (!value) {
        throw new Error(`${arg} requires a path`);
      }
      output = value;
      i++;
      continue;
    }

    if (arg === "-c" || arg === "--concurrency") {
      const value = args[i + 1];
      if (!value) {
        throw new Error(`${arg} requires a value`);
      }
      concurrency = parse_positive_integer(value, "--concurrency");
      i++;
      continue;
    }

    if (arg === "--download-images") {
      const maybe_mode = args[i + 1];
      if (maybe_mode && !maybe_mode.startsWith("-") && DOWNLOAD_IMAGE_FLAG_VALUES_SET.has(maybe_mode.trim().toLowerCase())) {
        image_mode = parse_download_images_flag_value(maybe_mode);
        i++;
      } else if (maybe_mode && !maybe_mode.startsWith("-") && input) {
        throw new Error(`Invalid --download-images value: ${maybe_mode}. Allowed values: auto, webp, png`);
      } else {
        image_mode = "auto";
      }
      continue;
    }

    if (arg.startsWith("--download-images=")) {
      const value = arg.slice("--download-images=".length);
      if (!value) {
        throw new Error("--download-images requires a value when using --download-images=<mode>");
      }
      image_mode = parse_download_images_flag_value(value);
      continue;
    }


    if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    }

    if (input) {
      throw new Error("Only one input argument is supported");
    }
    input = arg;
  }

  if (!input) {
    throw new Error("Input required (TI document URL or URL-list file path)");
  }

  return {
    input,
    output,
    concurrency,
    image_mode,
  };
}

async function resolve_input(args: ParsedCliConfig): Promise<ResolvedInput> {
  try {
    parse_url(args.input);
    return { kind: "url", urls: [args.input] };
  } catch {
    // Not a TI URL; treat as URL-list file path.
  }

  const input_file = Bun.file(args.input);
  if (!(await input_file.exists())) {
    throw new Error(`Input must be a TI document URL or a readable file containing URLs: ${args.input}`);
  }

  const content = await input_file.text();
  const urls: string[] = [];
  const lines = content.split(/\r?\n/);

  for (let line_index = 0; line_index < lines.length; line_index++) {
    const raw = lines[line_index] ?? "";
    const value = raw.trim();
    if (!value) continue;

    try {
      parse_url(value);
      urls.push(value);
    } catch {
      throw new Error(`Invalid URL in ${args.input} at line ${line_index + 1}: ${value}`);
    }
  }

  if (urls.length === 0) {
    throw new Error(`No valid URLs found in ${args.input}`);
  }

  return { kind: "file", urls };
}

function resolve_targets(parsed_args: ParsedCliConfig, input: ResolvedInput): RunConfig[] {
  if (input.kind === "url") {
    const target: RunConfig = {
      url: input.urls[0],
      output: parsed_args.output,
      concurrency: parsed_args.concurrency,
      image_mode: parsed_args.image_mode,
    };
    validate_run_config(target);
    return [target];
  }

  const outputs = new Set<string>();
  const targets = input.urls.map((url) => {
    const filename = infer_default_output_path(url);
    const output = parsed_args.output ? join(parsed_args.output, filename) : filename;

    if (outputs.has(output)) {
      throw new Error(`Resolved duplicate output path for URL list input: ${output}`);
    }
    outputs.add(output);

    const target: RunConfig = {
      url,
      output,
      concurrency: parsed_args.concurrency,
      image_mode: parsed_args.image_mode,
    };
    validate_run_config(target);
    return target;
  });

  return targets;
}

async function resolve_interactive_config(): Promise<ResolvedRunConfig> {
  console.log(`${terminal_style.bold(CLI_NAME)} ${terminal_style.dim(`v${CLI_VERSION}`)}`);
  console.log(CLI_DESCRIPTION);
  console.log("");

  let validated_url = "";
  let info: DatasheetInfo | null = null;

  while (!info) {
    const candidate_url = await prompt_text({
      label: "TI document URL",
      validate: (value) => {
        try {
          parse_url(value);
          return null;
        } catch (error) {
          return (error as Error).message;
        }
      },
    });

    try {
      info = await run_with_spinner("Validating URL and fetching metadata", async () => {
        return extract_toc(candidate_url, { log_progress: false });
      });
      validated_url = candidate_url;
    } catch (error) {
      process.stderr.write(`${terminal_style.error("Error:")} ${(error as Error).message}\n`);
    }
  }

  const output = await prompt_text({
    label: "Output file",
    default_value: infer_default_output_path(validated_url),
  });

  const image_mode_value = await prompt_text({
    label: "Image mode (off/auto/webp/png)",
    default_value: "off",
    validate: (value) => {
      try {
        parse_interactive_image_mode(value);
        return null;
      } catch (error) {
        return (error as Error).message;
      }
    },
  });
  const image_mode = parse_interactive_image_mode(image_mode_value);

  const concurrency_value = await prompt_text({
    label: "Concurrency",
    default_value: String(DEFAULT_CONCURRENCY),
    validate: (value) => {
      try {
        parse_positive_integer(value, "--concurrency");
        return null;
      } catch (error) {
        return (error as Error).message;
      }
    },
  });
  const concurrency = parse_positive_integer(concurrency_value, "--concurrency");

  const target: RunConfig = {
    url: validated_url,
    output,
    concurrency,
    image_mode,
  };

  validate_run_config(target);
  return { targets: [target], preloaded_info: info };
}

async function resolve_run_config(args: string[]): Promise<ResolvedRunConfig | null> {
  if (args.includes("-v") || args.includes("--version")) {
    print_version();
    return null;
  }

  if (args.includes("-h") || args.includes("--help")) {
    print_help();
    return null;
  }

  if (args.length === 0) {
    if (!is_interactive_tty()) {
      print_help();
      return null;
    }
    return resolve_interactive_config();
  }

  const parsed_args = parse_cli_args(args);
  const input = await resolve_input(parsed_args);
  const targets = resolve_targets(parsed_args, input);
  return { targets };
}

async function execute_pipeline(config: RunConfig, preloaded_info?: DatasheetInfo): Promise<void> {
  if (config.image_mode === "webp" || config.image_mode === "png") {
    await get_sharp();
  }

  const { doc_type } = parse_url(config.url);
  const start = performance.now();

  const info = preloaded_info ?? (await extract_toc(config.url));
  const blocks = await fetch_all_blocks(info, doc_type, config.concurrency);

  process.stderr.write(`[*] Converting to Markdown...\n`);
  let markdown = convert_to_markdown(blocks, info);

  if (config.image_mode !== "off" && config.output) {
    markdown = await download_images(markdown, config.output, config.image_mode, config.concurrency);
  }

  const elapsed = ((performance.now() - start) / 1000).toFixed(2);
  process.stderr.write(`[*] Done in ${elapsed}s\n`);

  if (config.output) {
    await Bun.write(config.output, markdown, { createPath: true });
    process.stderr.write(`[*] Written to ${config.output}\n`);
  } else {
    console.log(markdown);
  }
}

async function main() {
  const args = process.argv.slice(2);
  if (await handle_self_update_command(args)) return;
  const resolved = await resolve_run_config(args);
  if (!resolved) return;

  for (let index = 0; index < resolved.targets.length; index++) {
    const target = resolved.targets[index];
    if (resolved.targets.length > 1) {
      process.stderr.write(`\n[*] Processing target ${index + 1}/${resolved.targets.length}: ${target.url}\n`);
    }
    const preloaded_info = index === 0 ? resolved.preloaded_info : undefined;
    await execute_pipeline(target, preloaded_info);
  }
}

main().catch((err) => {
  process.stderr.write(`Error: ${err.message}\n`);
  process.exit(1);
});
