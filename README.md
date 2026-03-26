# ti-fetch

Extract Texas Instruments datasheets to well-structured Markdown files.

## Overview

TI's document viewer uses lazy-loading, rendering content in blocks as you scroll. This tool extracts all content sections in parallel and assembles them into a single comprehensive Markdown file.

## Features

- Parallel fetching of all document sections (~3s for 150+ sections)
- Proper Markdown formatting with headings, lists, and tables
- Equation extraction from MathML with LaTeX output by default
- Subscript/superscript preservation using HTML tags (`<sub>`, `<sup>`)
- Optional local image download to `assets/` with relative links
- Optional SVG→WebP conversion for downloaded images
- Links to TI resources maintained

## Installation

The following commands assume you have `$HOME/.local/bin` in your PATH.

### Bundle (requires Bun)

If you have [Bun](https://bun.sh) installed, use the lightweight bundle:

```bash
curl -L https://github.com/thuvasooriya/ti-fetch/releases/latest/download/ti-fetch -o ~/.local/bin/ti-fetch
chmod +x ~/.local/bin/ti-fetch
```

Note: The bundle requires `bun` to be in your PATH.

### Pre-built binaries (standalone)

Download from [Releases](https://github.com/thuvasooriya/ti-fetch/releases):

#### macOS ARM64 (Apple Silicon)

```bash
curl -L https://github.com/thuvasooriya/ti-fetch/releases/latest/download/ti-fetch-darwin-arm64.tar.gz | tar xz
mv ti-fetch-darwin-arm64 ~/.local/bin/ti-fetch
```

#### macOS x64 (Intel)

```bash
curl -L https://github.com/thuvasooriya/ti-fetch/releases/latest/download/ti-fetch-darwin-x64.tar.gz | tar xz
mv ti-fetch-darwin-x64 ~/.local/bin/ti-fetch
```

#### Linux ARM64

```bash
curl -L https://github.com/thuvasooriya/ti-fetch/releases/latest/download/ti-fetch-linux-arm64.tar.gz | tar xz
mv ti-fetch-linux-arm64 ~/.local/bin/ti-fetch
```

#### Linux x64

```bash
curl -L https://github.com/thuvasooriya/ti-fetch/releases/latest/download/ti-fetch-linux-x64.tar.gz | tar xz
mv ti-fetch-linux-x64 ~/.local/bin/ti-fetch
```

### From source

```bash
git clone https://github.com/thuvasooriya/ti-fetch.git
cd ti-fetch
bun install

# Run directly
bun run index.ts <url>

# Or build
bun run build        # standalone binary
bun run build:bundle # lightweight bundle (requires bun)
```

## Usage

```bash
ti-fetch <url> [options]
```

### Arguments

| Argument | Description            |
| -------- | ---------------------- |
| `url`    | TI document viewer URL |

### Options

| Option                | Description                                                    | Default |
| --------------------- | -------------------------------------------------------------- | ------- |
| `-o, --output FILE`   | Output file path                                               | stdout  |
| `-c, --concurrency N` | Parallel requests                                              | 10      |
| `--download-images`   | Download images to `assets/` next to output file, relink MD    | off     |
| `--svg-to-webp`       | Convert downloaded SVGs to WebP (requires `--download-images`) | off     |
| `-h, --help`          | Show help                                                      |         |

### Examples

```bash
# Output to stdout
ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet

# Save to file
ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o mcf8329a-q1.md

# Higher concurrency for faster fetching
ti-fetch https://www.ti.com/document-viewer/tps65988/datasheet -c 20 -o tps65988.md

# Download images locally and use relative links
ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o mcf8329a-q1.md --download-images

# Download images and convert SVG files to WebP
ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o mcf8329a-q1.md --download-images --svg-to-webp
```

## Output Format

The generated Markdown includes:

- Document title and metadata
- All sections with proper heading hierarchy
- Tables in Markdown format
- Images (remote URLs by default, or local `assets/` links with `--download-images`)
- Figure captions
- Equations converted from MathML to LaTeX (`$$...$$`) when TI provides MathML; non-MathML equations remain source text/image
- Internal links preserved

### Example output structure

```markdown
# SLLSFV1 Data sheet

**Product:** MCF8329A-Q1
**Document ID:** SLLSFV1
**Source:** [TI Document Viewer](https://www.ti.com/document-viewer/MCF8329A-Q1/datasheet)

---

# 1 Features

- AEC-Q100 qualified for automotive applications
  - Temperature Grade-1: -40C to 125C
- Three-phase BLDC gate driver...

## 5.1 Absolute Maximum Ratings

| Parameter | Min  | Max | Unit |
| --------- | ---- | --- | ---- |
| PVDD      | -0.3 | 70  | V    |

...
```

## How it works

1. Fetches the main document page to extract the table of contents
2. Parses ordered section GUIDs from TOC links
3. Fetches all content blocks in parallel via `/{product}/datasheet/{GUID}?raw=1`
4. Extracts MathML equation blocks and converts them to LaTeX
5. Converts remaining HTML to Markdown using Turndown with custom rules
6. Optionally downloads and relinks images locally (`assets/`, optional SVG→WebP)
7. Assembles sections in document order

## Building

```bash
# Install dependencies
bun install

# Build for current platform
bun run build

# Build lightweight bundle (requires bun to run)
bun run build:bundle

# Cross-compile for all platforms
bun run build:all

# Individual targets
bun run build:linux-x64
bun run build:linux-arm64
bun run build:darwin-x64
bun run build:darwin-arm64
```

### Build size comparison

| Build Mode                      | Size   | Notes                          |
| ------------------------------- | ------ | ------------------------------ |
| `--compile --minify --bytecode` | ~60MB  | Standalone, embeds Bun runtime |
| `--target=bun --minify`         | ~250KB | Requires `bun` in PATH         |

The standalone binary embeds the full Bun runtime (~58MB base). The `--minify` flag reduces the JS bundle size. The `--bytecode` flag pre-compiles to bytecode for faster startup.

For minimal distribution size when users have Bun installed, use the bundle mode.

## License

MIT
