import { createHash } from "node:crypto";
import { chmod, mkdtemp, realpath, rename, rm } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { tmpdir } from "node:os";

export type ReleaseArchiveType = "tar.gz" | "zip" | "raw";

export interface ReleaseAssetSpec {
  asset_name: string;
  archive_type: ReleaseArchiveType;
  extracted_binary_name?: string;
}

export interface SelfUpdateTarget {
  mode: "compiled_binary" | "bundle_script";
  install_path: string;
  asset: ReleaseAssetSpec;
}

export interface SelfUpdateRuntimeContext {
  executable_path: string;
  argv: string[];
  platform: string;
  arch: string;
}

export interface GithubSelfUpdateConfig {
  app_name: string;
  current_version: string;
  repository?: string | { url?: string };
  repository_override?: string;
  default_repository: string;
  platform_assets: Record<string, ReleaseAssetSpec>;
  bundle_asset?: ReleaseAssetSpec;
  api_base_url?: string;
  executable_path?: string;
  argv?: string[];
  temp_root?: string;
  user_agent?: string;
  checksum_asset_name?: string;
  resolve_target?: (runtime: SelfUpdateRuntimeContext, config: GithubSelfUpdateConfig) => SelfUpdateTarget | Promise<SelfUpdateTarget>;
}

export interface SelfUpdateCliOptions {
  check_only: boolean;
  show_help: boolean;
}

export interface SelfUpdateRuntimeOptions {
  check_only: boolean;
  spinner: <T>(label: string, run: () => Promise<T>) => Promise<T>;
}

export interface SelfUpdateResult {
  status: "up_to_date" | "update_available" | "updated";
  current_version: string;
  latest_version: string;
  repository_slug: string;
  release_url: string;
  checksum_verified: boolean;
}

interface GithubReleaseAsset {
  name: string;
  browser_download_url: string;
}

interface GithubRelease {
  tag_name: string;
  html_url: string;
  assets: GithubReleaseAsset[];
}

const DEFAULT_API_BASE_URL = "https://api.github.com";
const DEFAULT_CHECKSUM_ASSET_NAME = "checksums.txt";

export function parse_self_update_cli_options(args: string[]): SelfUpdateCliOptions {
  let check_only = false;
  let show_help = false;

  for (const arg of args) {
    if (arg === "--check") {
      check_only = true;
      continue;
    }

    if (arg === "-h" || arg === "--help") {
      show_help = true;
      continue;
    }

    throw new Error(`Unknown option for self-update: ${arg}`);
  }

  return { check_only, show_help };
}

function normalize_version_tag(tag: string): string {
  return tag.trim().replace(/^v/i, "");
}

function parse_github_repository_slug(repository: string | { url?: string } | undefined): string | null {
  const repository_url = typeof repository === "string" ? repository : repository?.url;
  if (!repository_url) {
    return null;
  }

  const match = repository_url.match(/github\.com[:/](?<owner>[^/]+)\/(?<repo>[^/.]+?)(?:\.git)?(?:\/)?$/i);
  if (!match?.groups?.owner || !match.groups.repo) {
    return null;
  }

  return `${match.groups.owner}/${match.groups.repo}`;
}

function resolve_release_repository_slug(config: GithubSelfUpdateConfig): string {
  if (config.repository_override?.trim()) {
    return config.repository_override.trim();
  }

  return parse_github_repository_slug(config.repository) ?? config.default_repository;
}

function parse_github_release(payload: unknown): GithubRelease {
  if (!payload || typeof payload !== "object") {
    throw new Error("GitHub release response is not an object");
  }

  const record = payload as Record<string, unknown>;
  const tag_name = typeof record.tag_name === "string" ? record.tag_name : "";
  const html_url = typeof record.html_url === "string" ? record.html_url : "";
  const assets_payload = Array.isArray(record.assets) ? record.assets : [];

  const assets: GithubReleaseAsset[] = [];
  for (const item of assets_payload) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const asset_record = item as Record<string, unknown>;
    const name = typeof asset_record.name === "string" ? asset_record.name : "";
    const browser_download_url =
      typeof asset_record.browser_download_url === "string" ? asset_record.browser_download_url : "";

    if (!name || !browser_download_url) {
      continue;
    }

    assets.push({ name, browser_download_url });
  }

  if (!tag_name) {
    throw new Error("GitHub release response is missing tag_name");
  }

  return {
    tag_name,
    html_url,
    assets,
  };
}

async function fetch_latest_github_release(config: GithubSelfUpdateConfig, repository_slug: string): Promise<GithubRelease> {
  const api_base_url = config.api_base_url ?? DEFAULT_API_BASE_URL;
  const user_agent = config.user_agent ?? `${config.app_name}/${config.current_version}`;

  const response = await fetch(`${api_base_url}/repos/${repository_slug}/releases/latest`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": user_agent,
    },
  });

  if (!response.ok) {
    const body = (await response.text()).trim();
    const message_suffix = body ? `: ${body}` : "";
    throw new Error(`Failed to fetch latest release (${response.status})${message_suffix}`);
  }

  return parse_github_release(await response.json());
}

function is_bun_runtime_executable(executable_path: string): boolean {
  const executable_name = basename(executable_path).toLowerCase();
  return executable_name === "bun" || executable_name === "bun.exe" || executable_name.startsWith("bun-");
}

function assert_asset_spec(asset: ReleaseAssetSpec): void {
  if (asset.archive_type !== "raw" && !asset.extracted_binary_name) {
    throw new Error(`Asset '${asset.asset_name}' requires extracted_binary_name for archive type ${asset.archive_type}`);
  }
}

async function resolve_existing_path(path: string): Promise<string> {
  try {
    return await realpath(path);
  } catch {
    return path;
  }
}

async function resolve_default_target(runtime: SelfUpdateRuntimeContext, config: GithubSelfUpdateConfig): Promise<SelfUpdateTarget> {
  if (is_bun_runtime_executable(runtime.executable_path)) {
    if (!config.bundle_asset) {
      throw new Error("self-update for bundle mode is not configured for this application");
    }

    const script_path = runtime.argv[1];
    if (!script_path) {
      throw new Error("Unable to resolve bundle script path for self-update");
    }

    if (/[.]m?[ct]?tsx?$/i.test(script_path)) {
      throw new Error("self-update is unavailable when running from source files; use release installs instead");
    }

    assert_asset_spec(config.bundle_asset);
    return {
      mode: "bundle_script",
      install_path: await resolve_existing_path(script_path),
      asset: config.bundle_asset,
    };
  }

  const platform_key = `${runtime.platform}-${runtime.arch}`;
  const platform_asset = config.platform_assets[platform_key];
  if (!platform_asset) {
    throw new Error(`self-update is not supported on ${runtime.platform}/${runtime.arch}`);
  }

  assert_asset_spec(platform_asset);
  return {
    mode: "compiled_binary",
    install_path: await resolve_existing_path(runtime.executable_path),
    asset: platform_asset,
  };
}

async function resolve_update_target(config: GithubSelfUpdateConfig): Promise<SelfUpdateTarget> {
  const runtime: SelfUpdateRuntimeContext = {
    executable_path: config.executable_path ?? process.execPath,
    argv: config.argv ?? process.argv,
    platform: process.platform,
    arch: process.arch,
  };

  const target = config.resolve_target
    ? await config.resolve_target(runtime, config)
    : await resolve_default_target(runtime, config);

  if (!target.install_path) {
    throw new Error("self-update target is missing install_path");
  }

  assert_asset_spec(target.asset);
  return {
    ...target,
    install_path: await resolve_existing_path(target.install_path),
  };
}

async function download_release_asset(
  config: GithubSelfUpdateConfig,
  asset: GithubReleaseAsset,
  destination_path: string
): Promise<void> {
  const user_agent = config.user_agent ?? `${config.app_name}/${config.current_version}`;
  const response = await fetch(asset.browser_download_url, {
    headers: {
      Accept: "application/octet-stream",
      "User-Agent": user_agent,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download release asset ${asset.name}: HTTP ${response.status}`);
  }

  await Bun.write(destination_path, Buffer.from(await response.arrayBuffer()));
}

function parse_checksum_lines(content: string): Map<string, string> {
  const checksums = new Map<string, string>();
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const match = trimmed.match(/^([A-Fa-f0-9]{64})\s+[* ]?(.+)$/);
    if (!match) {
      continue;
    }

    const hash = match[1]?.toLowerCase();
    const file_name = match[2]?.trim();
    if (!hash || !file_name) {
      continue;
    }

    checksums.set(file_name, hash);
    checksums.set(basename(file_name), hash);
  }

  return checksums;
}

async function compute_file_sha256(file_path: string): Promise<string> {
  const file_buffer = Buffer.from(await Bun.file(file_path).arrayBuffer());
  return createHash("sha256").update(file_buffer).digest("hex");
}

async function fetch_text_asset(config: GithubSelfUpdateConfig, asset: GithubReleaseAsset): Promise<string> {
  const user_agent = config.user_agent ?? `${config.app_name}/${config.current_version}`;
  const response = await fetch(asset.browser_download_url, {
    headers: {
      Accept: "application/octet-stream",
      "User-Agent": user_agent,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download release asset ${asset.name}: HTTP ${response.status}`);
  }

  return response.text();
}

async function verify_release_asset_checksum(
  config: GithubSelfUpdateConfig,
  release: GithubRelease,
  asset_name: string,
  downloaded_path: string
): Promise<boolean> {
  const checksum_asset_name = config.checksum_asset_name ?? DEFAULT_CHECKSUM_ASSET_NAME;
  const checksum_asset = release.assets.find((asset) => asset.name === checksum_asset_name);
  if (!checksum_asset) {
    return false;
  }

  const checksums = parse_checksum_lines(await fetch_text_asset(config, checksum_asset));
  const expected_checksum = checksums.get(asset_name) ?? checksums.get(basename(asset_name));
  if (!expected_checksum) {
    return false;
  }

  const actual_checksum = await compute_file_sha256(downloaded_path);
  if (actual_checksum !== expected_checksum) {
    throw new Error(
      `Checksum verification failed for ${asset_name}: expected ${expected_checksum}, got ${actual_checksum}`
    );
  }

  return true;
}

async function extract_release_archive(archive_path: string, archive_type: ReleaseArchiveType, destination_dir: string): Promise<void> {
  if (archive_type === "raw") {
    return;
  }

  const command = archive_type === "zip"
    ? ["unzip", "-q", archive_path, "-d", destination_dir]
    : ["tar", "-xzf", archive_path, "-C", destination_dir];

  const extraction = Bun.spawnSync({
    cmd: command,
    stdout: "pipe",
    stderr: "pipe",
  });

  if (extraction.exitCode !== 0) {
    const stderr_text = new TextDecoder().decode(extraction.stderr).trim();
    throw new Error(`Failed to extract update archive: ${stderr_text || "archive extraction failed"}`);
  }
}

function resolve_extracted_asset_path(temp_root: string, asset: ReleaseAssetSpec): string {
  if (asset.archive_type === "raw") {
    return join(temp_root, asset.asset_name);
  }

  return join(temp_root, asset.extracted_binary_name ?? "");
}

async function install_updated_file(install_path: string, source_path: string): Promise<void> {
  const staged_path = join(dirname(install_path), `.${basename(install_path)}.update-${process.pid}-${Date.now()}`);

  try {
    await Bun.write(staged_path, Bun.file(source_path));
    await chmod(staged_path, 0o755);
    await rename(staged_path, install_path);
  } catch (error) {
    if (await Bun.file(staged_path).exists()) {
      await rm(staged_path, { force: true });
    }
    throw error;
  }
}

export async function run_github_self_update(
  config: GithubSelfUpdateConfig,
  options: SelfUpdateRuntimeOptions
): Promise<SelfUpdateResult> {
  const repository_slug = resolve_release_repository_slug(config);

  const release = await options.spinner("Checking latest release", async () => {
    return fetch_latest_github_release(config, repository_slug);
  });

  const latest_version = normalize_version_tag(release.tag_name);
  const current_version = normalize_version_tag(config.current_version);
  const version_order = Bun.semver.order(current_version, latest_version);

  if (Number.isNaN(version_order)) {
    throw new Error(`Unable to compare versions: current='${current_version}', latest='${latest_version}'`);
  }

  if (version_order >= 0) {
    return {
      status: "up_to_date",
      current_version,
      latest_version,
      repository_slug,
      release_url: release.html_url,
      checksum_verified: false,
    };
  }

  if (options.check_only) {
    return {
      status: "update_available",
      current_version,
      latest_version,
      repository_slug,
      release_url: release.html_url,
      checksum_verified: false,
    };
  }

  const target = await resolve_update_target(config);
  const release_asset = release.assets.find((asset) => asset.name === target.asset.asset_name);
  if (!release_asset) {
    throw new Error(
      `Release ${release.tag_name} does not contain required asset ${target.asset.asset_name} for ${process.platform}/${process.arch}`
    );
  }

  const temp_root = await mkdtemp(join(config.temp_root ?? tmpdir(), `${config.app_name}-update-`));
  let checksum_verified = false;

  try {
    const downloaded_asset_path = join(temp_root, target.asset.asset_name);

    await options.spinner("Downloading release asset", async () => {
      await download_release_asset(config, release_asset, downloaded_asset_path);
    });

    checksum_verified = await options.spinner("Verifying release checksum", async () => {
      return verify_release_asset_checksum(config, release, target.asset.asset_name, downloaded_asset_path);
    });

    await options.spinner("Extracting release asset", async () => {
      await extract_release_archive(downloaded_asset_path, target.asset.archive_type, temp_root);
    });

    const extracted_asset_path = resolve_extracted_asset_path(temp_root, target.asset);
    if (!(await Bun.file(extracted_asset_path).exists())) {
      throw new Error(`Updated executable not found after extraction: ${extracted_asset_path}`);
    }

    await options.spinner("Installing update", async () => {
      await install_updated_file(target.install_path, extracted_asset_path);
    });
  } finally {
    await rm(temp_root, { recursive: true, force: true });
  }

  return {
    status: "updated",
    current_version,
    latest_version,
    repository_slug,
    release_url: release.html_url,
    checksum_verified,
  };
}
