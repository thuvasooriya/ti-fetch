# ti-fetch

Extract Texas Instruments datasheets to well-structured Markdown files.

## Overview

TI's document viewer uses lazy-loading, rendering content in blocks as you scroll. This tool extracts all content sections in parallel and assembles them into a single comprehensive Markdown file.

## Features

- Parallel fetching of all document sections (~3s for 150+ sections)
- Proper Markdown formatting with headings, lists, and tables
- Equation extraction from MathML with LaTeX output by default
- Subscript/superscript preservation using HTML tags (`<sub>`, `<sup>`)
- Optional local image download to `assets/` with relative links (`--download-images`)
- Optional SVG conversion modes for downloaded images: `webp` or `png` (requires optional `sharp` dependency)
- Built-in `self-update` command for standalone binaries
- Links to TI resources maintained

## Installation

The following commands assume you have `$HOME/.local/bin` in your PATH.

### Installer scripts

Unix/macOS installer (auto mode):

- If `bun` is in PATH, installs the release bundle (`ti-fetch`).
- Otherwise installs the platform standalone binary (`ti-fetch-<os>-<arch>.tar.gz`).

```bash
curl -fsSL https://raw.githubusercontent.com/thuvasooriya/ti-fetch/main/scripts/install.sh | sh
```

Windows PowerShell installer (always standalone binary):

```powershell
iwr https://raw.githubusercontent.com/thuvasooriya/ti-fetch/main/scripts/install.ps1 -useb | iex
```

Unix/macOS installer mode overrides:

```bash
# Force standalone binary install
curl -fsSL https://raw.githubusercontent.com/thuvasooriya/ti-fetch/main/scripts/install.sh | sh -s -- --mode binary

# Force bundle install (requires bun in PATH)
curl -fsSL https://raw.githubusercontent.com/thuvasooriya/ti-fetch/main/scripts/install.sh | sh -s -- --mode bundle

# Pin version and custom install directory
curl -fsSL https://raw.githubusercontent.com/thuvasooriya/ti-fetch/main/scripts/install.sh | sh -s -- --version 1.0.0 --bin-dir "$HOME/.local/bin"
```

The Unix installer auto-detects `linux|darwin` and `x64|arm64`.
The PowerShell installer auto-detects Windows `x64|arm64`.
When release checksums are available, the Unix installer verifies the downloaded asset before install.

Bundle installs require `bun` in PATH.
For `--download-images=webp|png`, ti-fetch bootstraps `sharp` into `~/.cache/ti-fetch/sharp-runtime` when it is not preinstalled.

Manual release artifacts remain available at [Releases](https://github.com/thuvasooriya/ti-fetch/releases), but the installer scripts above are the recommended installation path.

### From source

```bash
git clone https://github.com/thuvasooriya/ti-fetch.git
cd ti-fetch
bun install

# Run directly
bun run index.ts <url-or-file>

# Or build
bun run build        # standalone binary
bun run build:bundle # lightweight bundle (requires bun)
```

## Usage

```bash
ti-fetch <url-or-file> [options]
ti-fetch self-update [--check]
```

### Arguments

| Argument      | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| `url-or-file` | TI document viewer URL, or path to a file containing URLs (one per line) |

### Options

| Option                     | Description                                                                      | Default             |
| -------------------------- | -------------------------------------------------------------------------------- | ------------------- |
| `-o, --output PATH`        | Output file for single URL input; output directory for URL-file input            | stdout (single URL) |
| `-c, --concurrency N`      | Parallel requests                                                                | 10                  |
| `--download-images[=MODE]` | Download images to `assets/` and relink markdown (`MODE`: `auto`, `webp`, `png`) | off                 |
| `-v, --version`            | Show version                                                                     |                     |
| `-h, --help`               | Show help                                                                        |                     |

- Omit `--download-images` to keep remote image URLs (`off`).
- `--download-images` without a value defaults to `auto`.

### Commands

| Command               | Description                                               |
| --------------------- | --------------------------------------------------------- |
| `self-update`         | Update installed release build from latest GitHub release |
| `self-update --check` | Check for updates without installing                      |

`self-update` is intended for release installs (standalone binary or release bundle).

When release checksums are published, `self-update` verifies downloaded assets before install.

### Examples

```bash
# Output to stdout (single URL input)
ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet

# Save single URL output to a file
ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o mcf8329a-q1.md

# Higher concurrency for faster fetching
ti-fetch https://www.ti.com/document-viewer/tps65988/datasheet -c 20 -o tps65988.md

# Download images locally and preserve original formats
ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o mcf8329a-q1.md --download-images

# Download images and convert SVG files to WebP
ti-fetch https://www.ti.com/document-viewer/mcf8329a-q1/datasheet -o mcf8329a-q1.md --download-images=webp

# Process URL list file; outputs <product>-<doc-type>.md per URL in cwd
ti-fetch tmp/urls.md

# Process URL list file into output directory with PNG conversion for SVGs
ti-fetch tmp/urls.md -o out --download-images=png

# Check for updates (release installs)
ti-fetch self-update --check

# Install latest release update
ti-fetch self-update
```

## Examples

[mcf8329a-q1](examples/mcf8329a-q1-datasheet.md)
[tac5112](examples/tac5112-datasheet.md)
[tac5212](examples/tac5212-datasheet.md)

## How it works

1. Accepts either a TI URL or a line-based file of TI URLs
2. Fetches each document page to extract the table of contents
3. Parses ordered section GUIDs from TOC links
4. Fetches all content blocks in parallel via `/{product}/datasheet/{GUID}?raw=1`
5. Extracts MathML equation blocks and converts them to LaTeX
6. Converts remaining HTML to Markdown using Turndown with custom rules
7. Optionally downloads and relinks images locally (`assets/`, SVG conversion modes: `webp`/`png`)
8. Assembles sections in document order

## Building

```bash
# Install dependencies
bun install

# Build for current platform
bun run build

# Build lightweight bundle (requires bun to run)
bun run build:bundle
# Check package.json for more

```

## License

MIT
