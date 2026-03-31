#!/bin/sh
set -u

APP_NAME="ti-fetch"
REPO_OWNER="${TI_FETCH_REPO_OWNER:-thuvasooriya}"
REPO_NAME="${TI_FETCH_REPO_NAME:-ti-fetch}"
RELEASE_BASE_URL="${TI_FETCH_RELEASE_BASE_URL:-https://github.com/${REPO_OWNER}/${REPO_NAME}/releases}"
APP_VERSION="${VERSION:-latest}"
INSTALL_MODE="auto"
BIN_DIR="${TI_FETCH_BIN_DIR:-${XDG_BIN_HOME:-${HOME}/.local/bin}}"
VERBOSE="0"
TMP_DIR=""

if [ -t 1 ]; then
  RED='\033[0;31m'
  GREEN='\033[0;32m'
  YELLOW='\033[0;33m'
  CYAN='\033[0;36m'
  BOLD='\033[1m'
  NC='\033[0m'
else
  RED=''
  GREEN=''
  YELLOW=''
  CYAN=''
  BOLD=''
  NC=''
fi

say() {
  printf "%b\n" "$1"
}

say_verbose() {
  if [ "$VERBOSE" = "1" ]; then
    say "$1"
  fi
}

err() {
  say "${RED}error${NC}: $1" >&2
  exit 1
}

warn() {
  say "${YELLOW}warning${NC}: $1" >&2
}

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || err "need '$1' (command not found)"
}

usage() {
  cat <<EOF
${APP_NAME} installer

Usage:
  install.sh [options]

Options:
  --version VERSION   Install specific version (default: latest)
  --mode MODE         Install mode: auto|binary|bundle (default: auto)
  --bundle            Shortcut for --mode bundle
  --binary            Shortcut for --mode binary
  --bin-dir PATH      Installation directory (default: ~/.local/bin)
  -v, --verbose       Enable verbose output
  -h, --help          Show help
EOF
}

cleanup() {
  if [ -n "$TMP_DIR" ] && [ -d "$TMP_DIR" ]; then
    rm -rf "$TMP_DIR"
  fi
}

get_architecture() {
  ostype="$(uname -s)"
  cputype="$(uname -m)"

  case "$ostype" in
    Linux) platform="linux" ;;
    Darwin) platform="darwin" ;;
    *) err "unsupported OS: $ostype" ;;
  esac

  case "$cputype" in
    x86_64|amd64) arch="x64" ;;
    arm64|aarch64) arch="arm64" ;;
    *) err "unsupported CPU architecture: $cputype" ;;
  esac

  printf "%s-%s" "$platform" "$arch"
}

download() {
  url="$1"
  output="$2"

  if command -v curl >/dev/null 2>&1; then
    curl --proto '=https' --tlsv1.2 -fsSL "$url" -o "$output"
    return
  fi

  if command -v wget >/dev/null 2>&1; then
    wget --https-only -q "$url" -O "$output"
    return
  fi

  err "need curl or wget"
}

detect_bun_runtime() {
  command -v bun >/dev/null 2>&1
}

resolve_artifact() {
  arch_key="$1"
  resolved_mode="$INSTALL_MODE"

  case "$resolved_mode" in
    auto|binary|bundle) ;;
    *) err "invalid --mode value: $resolved_mode (expected auto|binary|bundle)" ;;
  esac

  if [ "$resolved_mode" = "auto" ]; then
    if detect_bun_runtime; then
      resolved_mode="bundle"
    else
      resolved_mode="binary"
    fi
  fi

  case "$resolved_mode" in
    bundle)
      ARTIFACT="${APP_NAME}"
      BINARY_NAME="${APP_NAME}"
      ARCHIVE_TYPE="raw"
      ;;
    binary)
      ARCHIVE_TYPE="tar.gz"
      case "$arch_key" in
        linux-x64)
          ARTIFACT="${APP_NAME}-linux-x64.tar.gz"
          BINARY_NAME="${APP_NAME}-linux-x64"
          ;;
        linux-arm64)
          ARTIFACT="${APP_NAME}-linux-arm64.tar.gz"
          BINARY_NAME="${APP_NAME}-linux-arm64"
          ;;
        darwin-x64)
          ARTIFACT="${APP_NAME}-darwin-x64.tar.gz"
          BINARY_NAME="${APP_NAME}-darwin-x64"
          ;;
        darwin-arm64)
          ARTIFACT="${APP_NAME}-darwin-arm64.tar.gz"
          BINARY_NAME="${APP_NAME}-darwin-arm64"
          ;;
        *)
          err "unsupported architecture for binary mode: $arch_key"
          ;;
      esac
      ;;
  esac

  INSTALL_MODE_RESOLVED="$resolved_mode"
}

build_download_url() {
  if [ "$APP_VERSION" = "latest" ]; then
    printf "%s/latest/download/%s" "$RELEASE_BASE_URL" "$ARTIFACT"
    return
  fi

  case "$APP_VERSION" in
    v*) tag="$APP_VERSION" ;;
    *) tag="v$APP_VERSION" ;;
  esac

  printf "%s/download/%s/%s" "$RELEASE_BASE_URL" "$tag" "$ARTIFACT"
}

build_checksum_url() {
  if [ "$APP_VERSION" = "latest" ]; then
    printf "%s/latest/download/checksums.txt" "$RELEASE_BASE_URL"
    return
  fi

  case "$APP_VERSION" in
    v*) tag="$APP_VERSION" ;;
    *) tag="v$APP_VERSION" ;;
  esac

  printf "%s/download/%s/checksums.txt" "$RELEASE_BASE_URL" "$tag"
}

compute_sha256() {
  file="$1"

  if command -v sha256sum >/dev/null 2>&1; then
    sha256sum "$file" | awk '{print $1}'
    return
  fi

  if command -v shasum >/dev/null 2>&1; then
    shasum -a 256 "$file" | awk '{print $1}'
    return
  fi

  return 1
}

verify_checksum() {
  checksum_url="$(build_checksum_url)"
  checksum_path="${TMP_DIR}/checksums.txt"

  if [ "$VERBOSE" = "1" ]; then
    if ! download "$checksum_url" "$checksum_path"; then
      warn "checksum manifest unavailable; skipping verification"
      return
    fi
  else
    if ! download "$checksum_url" "$checksum_path" 2>/dev/null; then
      warn "checksum manifest unavailable; skipping verification"
      return
    fi
  fi

  expected_checksum="$(awk -v file="$ARTIFACT" '$2==file || $2=="*"file {print $1; exit}' "$checksum_path")"
  if [ -z "$expected_checksum" ]; then
    warn "no checksum entry for ${ARTIFACT}; skipping verification"
    return
  fi

  actual_checksum="$(compute_sha256 "$archive_path" 2>/dev/null || true)"
  if [ -z "$actual_checksum" ]; then
    warn "sha256sum/shasum unavailable; skipping verification"
    return
  fi

  if [ "$actual_checksum" != "$expected_checksum" ]; then
    err "checksum verification failed for ${ARTIFACT}"
  fi

  say_verbose "Checksum verified for ${ARTIFACT}"
}

while [ $# -gt 0 ]; do
  case "$1" in
    --version)
      shift
      [ $# -gt 0 ] || err "--version requires a value"
      APP_VERSION="$1"
      ;;
    --mode)
      shift
      [ $# -gt 0 ] || err "--mode requires a value"
      INSTALL_MODE="$1"
      ;;
    --bundle)
      INSTALL_MODE="bundle"
      ;;
    --binary)
      INSTALL_MODE="binary"
      ;;
    --bin-dir)
      shift
      [ $# -gt 0 ] || err "--bin-dir requires a value"
      BIN_DIR="$1"
      ;;
    -v|--verbose)
      VERBOSE="1"
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      err "unknown option: $1"
      ;;
  esac
  shift
done

need_cmd uname
need_cmd mktemp
need_cmd mkdir
need_cmd chmod

arch_key="$(get_architecture)"
resolve_artifact "$arch_key"

if [ "$INSTALL_MODE_RESOLVED" = "binary" ]; then
  need_cmd tar
fi

if [ "$INSTALL_MODE_RESOLVED" = "bundle" ] && ! detect_bun_runtime; then
  err "bundle mode requires 'bun' in PATH"
fi

download_url="$(build_download_url)"

say "${CYAN}info${NC}: detected ${BOLD}${arch_key}${NC}"
say "${CYAN}info${NC}: install mode ${BOLD}${INSTALL_MODE_RESOLVED}${NC}"
say "${CYAN}info${NC}: downloading ${BOLD}${download_url}${NC}"

TMP_DIR="$(mktemp -d 2>/dev/null || mktemp -d -t ti-fetch-install)"
trap cleanup EXIT INT TERM HUP

archive_path="${TMP_DIR}/${ARTIFACT}"
if ! download "$download_url" "$archive_path"; then
  if [ "$INSTALL_MODE" = "auto" ] && [ "$INSTALL_MODE_RESOLVED" = "bundle" ]; then
    warn "bundle asset unavailable; retrying standalone binary mode"
    INSTALL_MODE="binary"
    resolve_artifact "$arch_key"
    need_cmd tar
    download_url="$(build_download_url)"
    archive_path="${TMP_DIR}/${ARTIFACT}"
    say "${CYAN}info${NC}: install mode ${BOLD}${INSTALL_MODE_RESOLVED}${NC}"
    say "${CYAN}info${NC}: downloading ${BOLD}${download_url}${NC}"
    download "$download_url" "$archive_path" || err "download failed"
  else
    err "download failed"
  fi
fi

verify_checksum

if [ "$ARCHIVE_TYPE" = "tar.gz" ]; then
  say_verbose "Extracting ${ARTIFACT}"
  tar -xzf "$archive_path" -C "$TMP_DIR" || err "failed to extract ${ARTIFACT}"
  binary_path="${TMP_DIR}/${BINARY_NAME}"
else
  binary_path="$archive_path"
fi

[ -f "$binary_path" ] || err "installed asset not found: ${BINARY_NAME}"

mkdir -p "$BIN_DIR" || err "failed to create ${BIN_DIR}"
target_path="${BIN_DIR}/${APP_NAME}"
mv "$binary_path" "$target_path" || err "failed to install ${APP_NAME}"
chmod +x "$target_path" || err "failed to mark binary executable"

say "${GREEN}success${NC}: installed ${BOLD}${APP_NAME}${NC} to ${target_path}"

case ":${PATH}:" in
  *":${BIN_DIR}:"*) ;;
  *)
    say "${YELLOW}note${NC}: add ${BIN_DIR} to PATH"
    say "  export PATH=\"\$PATH:${BIN_DIR}\""
    ;;
esac
