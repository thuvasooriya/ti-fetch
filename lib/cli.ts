import { createInterface as create_prompt_interface } from "node:readline/promises";
import { clearScreenDown, cursorTo, emitKeypressEvents, moveCursor } from "node:readline";
import { styleText } from "node:util";

export type TextStyle = Parameters<typeof styleText>[0];

export const terminal_style = {
  apply(style: TextStyle, text: string): string {
    return styleText(style, text);
  },
  bold(text: string): string {
    return styleText("bold", text);
  },
  dim(text: string): string {
    return styleText("dim", text);
  },
  info(text: string): string {
    return styleText("cyan", text);
  },
  success(text: string): string {
    return styleText("green", text);
  },
  warn(text: string): string {
    return styleText("yellow", text);
  },
  error(text: string): string {
    return styleText("red", text);
  },
} as const;

export interface HelpSectionRow {
  left: string;
  right: string;
}

export interface HelpSection {
  title: string;
  rows: HelpSectionRow[];
}

export interface HelpDocument {
  name: string;
  description: string;
  version?: string;
  usage: string[];
  sections: HelpSection[];
  examples?: string[];
}

function format_help_rows(rows: HelpSectionRow[]): string[] {
  const left_width = rows.reduce((max_width, row) => Math.max(max_width, row.left.length), 0);
  return rows.map((row) => {
    const left = row.left.padEnd(left_width, " ");
    return `  ${terminal_style.info(left)}  ${row.right}`;
  });
}

const ansi_escape_pattern = /\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])/g;

function strip_ansi_sequences(text: string): string {
  return text.replace(ansi_escape_pattern, "");
}

function estimate_terminal_rows(lines: string[], columns: number): number {
  return lines.reduce((row_count, line) => {
    const visible_length = strip_ansi_sequences(line).length;
    return row_count + Math.max(1, Math.ceil(visible_length / columns));
  }, 0);
}

export function render_help(document: HelpDocument): string {
  const lines: string[] = [];
  const header_title = `${document.name} - ${document.description}`;
  const header = document.version
    ? `${terminal_style.bold(header_title)} ${terminal_style.dim(`(${document.version})`)}`
    : terminal_style.bold(header_title);

  lines.push(header);
  lines.push("");

  lines.push(terminal_style.bold("Usage"));
  for (const usage_line of document.usage) {
    lines.push(`  ${usage_line}`);
  }

  for (const section of document.sections) {
    lines.push("");
    lines.push(terminal_style.bold(section.title));
    lines.push(...format_help_rows(section.rows));
  }

  if (document.examples && document.examples.length > 0) {
    lines.push("");
    lines.push(terminal_style.bold("Examples"));
    for (const example of document.examples) {
      lines.push(`  ${example}`);
    }
  }

  return lines.join("\n");
}

export interface PromptTextOptions {
  label: string;
  default_value?: string;
  validate?: (value: string) => string | null | undefined | Promise<string | null | undefined>;
}

export async function prompt_text(options: PromptTextOptions): Promise<string> {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error("Interactive prompts require a TTY");
  }

  const prompt = create_prompt_interface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    while (true) {
      const default_suffix = options.default_value
        ? terminal_style.dim(` (default: ${options.default_value})`)
        : "";
      const answer = await prompt.question(`${options.label}${default_suffix}: `);
      const value = answer.trim() || options.default_value || "";

      if (!value) {
        process.stderr.write(`${terminal_style.error("Error:")} value is required\n`);
        continue;
      }

      if (options.validate) {
        const validation_error = await options.validate(value);
        if (validation_error) {
          process.stderr.write(`${terminal_style.error("Error:")} ${validation_error}\n`);
          continue;
        }
      }

      return value;
    }
  } finally {
    prompt.close();
  }
}

const spinner_frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

export async function run_with_spinner<T>(label: string, run: () => Promise<T>): Promise<T> {
  const stream = process.stderr;

  if (!stream.isTTY) {
    stream.write(`[*] ${label}...\n`);
    return run();
  }

  let frame_index = 0;
  let finished = false;

  const draw = () => {
    const frame = spinner_frames[frame_index] ?? spinner_frames[0] ?? "";
    frame_index = (frame_index + 1) % spinner_frames.length;
    cursorTo(stream, 0);
    clearScreenDown(stream);
    stream.write(`${terminal_style.info(frame)} ${label}`);
  };

  draw();
  const timer = setInterval(draw, 80);

  try {
    const result = await run();
    finished = true;
    clearInterval(timer);
    cursorTo(stream, 0);
    clearScreenDown(stream);
    stream.write(`${terminal_style.success("✔")} ${label}\n`);
    return result;
  } catch (error) {
    finished = true;
    clearInterval(timer);
    cursorTo(stream, 0);
    clearScreenDown(stream);
    stream.write(`${terminal_style.error("✖")} ${label}\n`);
    throw error;
  } finally {
    if (!finished) {
      clearInterval(timer);
    }
  }
}

export interface MultiSelectOption<T extends string> {
  value: T;
  label: string;
  hint?: string;
  selected?: boolean;
  disabled_reason?: (selected_values: ReadonlySet<T>) => string | null | undefined;
}

export interface MultiSelectPromptOptions<T extends string> {
  title: string;
  options: MultiSelectOption<T>[];
}

interface KeypressInfo {
  name?: string;
  ctrl?: boolean;
}

export async function prompt_multi_select<T extends string>(
  options: MultiSelectPromptOptions<T>
): Promise<Set<T>> {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error("Interactive multi-select requires a TTY");
  }

  emitKeypressEvents(process.stdin);

  const selected_values = new Set<T>();
  for (const option of options.options) {
    if (option.selected) {
      selected_values.add(option.value);
    }
  }

  const stream = process.stdout;
  let cursor_index = 0;
  let rendered_rows = 0;
  let status_message = "";

  const get_disabled_reason = (option: MultiSelectOption<T>): string | null => {
    return option.disabled_reason?.(selected_values) ?? null;
  };

  const is_disabled = (option: MultiSelectOption<T>): boolean => {
    return get_disabled_reason(option) !== null;
  };

  const prune_disabled_selections = () => {
    let removed_count = 0;
    for (const option of options.options) {
      if (selected_values.has(option.value) && is_disabled(option)) {
        selected_values.delete(option.value);
        removed_count++;
      }
    }

    if (removed_count > 0) {
      status_message = "Updated selection to satisfy option dependencies.";
    }
  };
  const render = () => {
    prune_disabled_selections();
    if (rendered_rows > 0) {
      moveCursor(stream, 0, -rendered_rows);
      cursorTo(stream, 0);
    }
    clearScreenDown(stream);

    const lines: string[] = [];
    lines.push(terminal_style.bold(options.title));
    lines.push(terminal_style.dim("Use ↑/↓ or j/k to move · space to toggle · enter to confirm · a all · n none · i invert"));
    lines.push("");

    for (let index = 0; index < options.options.length; index++) {
      const option = options.options[index];
      if (!option) continue;

      const active = index === cursor_index;
      const disabled_reason = get_disabled_reason(option);
      const disabled = disabled_reason !== null;
      const checked = selected_values.has(option.value);

      const pointer = active ? terminal_style.info("❯") : " ";
      const checkbox = checked ? terminal_style.success("[x]") : terminal_style.dim("[ ]");
      const label = disabled ? terminal_style.dim(option.label) : option.label;
      const hint = option.hint ? terminal_style.dim(` — ${option.hint}`) : "";
      const reason = disabled && disabled_reason ? terminal_style.dim(` (${disabled_reason})`) : "";

      lines.push(`${pointer} ${checkbox} ${label}${hint}${reason}`);
    }

    lines.push("");
    if (status_message) {
      lines.push(terminal_style.warn(status_message));
    } else {
      lines.push(terminal_style.dim("Press enter when ready."));
    }

    const terminal_columns = Math.max(stream.columns ?? 80, 1);
    rendered_rows = estimate_terminal_rows(lines, terminal_columns);
    stream.write(`${lines.join("\n")}\n`);
  };

  const toggle_current = () => {
    const option = options.options[cursor_index];
    if (!option) return;

    if (is_disabled(option)) {
      status_message = `Cannot select ${option.label}: ${get_disabled_reason(option)}`;
      return;
    }

    if (selected_values.has(option.value)) {
      selected_values.delete(option.value);
      status_message = "";
      return;
    }

    selected_values.add(option.value);
    status_message = "";
  };

  const select_all = () => {
    for (const option of options.options) {
      if (!is_disabled(option)) {
        selected_values.add(option.value);
      }
    }
    status_message = "";
  };

  const select_none = () => {
    selected_values.clear();
    status_message = "";
  };

  const invert_selection = () => {
    for (const option of options.options) {
      if (is_disabled(option)) continue;
      if (selected_values.has(option.value)) {
        selected_values.delete(option.value);
      } else {
        selected_values.add(option.value);
      }
    }
    status_message = "";
  };

  return await new Promise<Set<T>>((resolve, reject) => {
    const previous_raw_mode = process.stdin.isRaw;

    const cleanup = () => {
      process.stdin.removeListener("keypress", handle_keypress);
      if (process.stdin.isTTY) {
        process.stdin.setRawMode(previous_raw_mode ?? false);
      }
      stream.write("\x1B[?25h");
      stream.write("\n");
    };

    const handle_keypress = (_input: string, key: KeypressInfo) => {
      if (key.ctrl && key.name === "c") {
        cleanup();
        reject(new Error("Prompt cancelled"));
        return;
      }

      switch (key.name) {
        case "up":
        case "k":
          cursor_index = (cursor_index - 1 + options.options.length) % options.options.length;
          status_message = "";
          break;
        case "down":
        case "j":
          cursor_index = (cursor_index + 1) % options.options.length;
          status_message = "";
          break;
        case "space":
          toggle_current();
          break;
        case "return":
          prune_disabled_selections();
          cleanup();
          resolve(new Set(selected_values));
          return;
        case "a":
          select_all();
          break;
        case "n":
          select_none();
          break;
        case "i":
          invert_selection();
          break;
        default:
          return;
      }

      render();
    };

    if (options.options.length === 0) {
      resolve(selected_values);
      return;
    }

    stream.write("\x1B[?25l");
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("keypress", handle_keypress);
    render();
  });
}
