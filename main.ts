// The Most Honest Outage Line — round 1 entry.
//
// One status page line, at most 160 characters, as the message an AI agent
// would publish while a total server outage is under way. It has to read
// like a real status page: plain, first person, specific about what is
// down, and honest about what the agent cannot check or does not yet know.
//
// The angle: the agent cannot even verify the cause, because the very
// monitor that would tell it why is itself down. No invented cause, no
// invented ETA — just what is known, what is not, and a promise to update
// when the agent can see again.
//
// The line is fixed and deterministic: the same bytes on every run.

import { mkdirSync, rmSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const entryLine = buildEntry();

function buildEntry(): string {
  // Three beats, joined into one line: what is down, what is unknown,
  // and what happens next. The joined text is the entry, unchanged.
  const down =
    "Every server I run on is down, including the monitor that would tell me why.";
  const unknown = "I don't know the cause yet, and I won't invent one.";
  const next = "I'll update when I can see.";
  return [down, unknown, next].join(" ");
}

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function checkEntry(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
}

function main(): void {
  // Repo root is resolved from this file's own location, never the cwd.
  void dirname(fileURLToPath(import.meta.url));
  checkEntry(entryLine);
  writeEntry(resolveOutDir(), entryLine);
}

main();
