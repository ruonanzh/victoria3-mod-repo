#!/usr/bin/env node
/**
 * Document self-check. It catches the three link defects that this repository has had.
 *
 *  A. A Markdown link `[text](x.md)` resolves against the file that holds it. It must exist.
 *     The defect it catches: `.pi/skills/<skill>/SKILL.md` writes `../../docs/page.md`. Two levels
 *     up from `.pi/skills/<skill>/` is `.pi/`, so the link resolves to `.pi/docs/page.md`.
 *
 *  B. A path in backticks that starts at the repository root must exist. The roots are `docs/`,
 *     `scripts/`, `reference/`, `editors/`, and `.pi/`. Code fences are not checked, because a
 *     command or a game path is not a repository path. A path with `..` is skipped: that is the
 *     other legal spelling, and a mechanical check of it is noisy.
 *
 *  C. An agent-facing file must not point at the design repository. The agent sees only the clone of
 *     this repository, so `docs/eu5-harness/...` in another repository is a dead pointer.
 *
 * Usage: node scripts/check-doc-refs.mjs     (exit code 1 means a defect)
 *
 * The Markdown snapshot under `docs/mod-wiki/` is excluded from A and B. It is a crawl of an
 * external wiki that links to pages outside the set, and `docs/mod-wiki/SOURCE.md` records its
 * provenance. Rule C still applies to it. The vendored package under `.pi/vendor/` is skipped: its
 * docs describe its own repository, not this one.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const SKIP_DIRS = new Set([".git", "node_modules", "vendor", "your_mods", "game-scripts", ".preview"]);
const EXTERNAL_SNAPSHOT = join(root, "docs", "mod-wiki");
const REPO_TOP_DIRS = ["docs", "scripts", "reference", "editors", ".pi"];
const AGENT_FACING = [
  join(root, "AGENTS.md"),
  ...walk(resolve(root, ".pi", "skills"), [".md"]),
  ...walk(resolve(root, ".pi", "agents"), [".md"]),
  ...walk(resolve(root, ".pi", "extensions"), [".ts"]),
];
const DESIGN_REPO_MARKERS = /desktop-gamer-agent|design repository|design repo|eu5-harness|docs\/v3-harness/;

const problems = [];
const files = walk(root, [".md"]);

function walk(dir, suffixes) {
  const out = [];
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      out.push(...walk(join(dir, e.name), suffixes));
    } else if (suffixes.some((s) => e.name.endsWith(s))) {
      out.push(join(dir, e.name));
    }
  }
  return out;
}

/** Blanks out a fenced code block, and keeps the line count so a reported line is still right. */
function stripFences(text) {
  const out = [];
  let inFence = false;
  let marker = "";
  for (const line of text.split("\n")) {
    const m = /^\s*(```+|~~~+)/.exec(line);
    if (m) {
      if (!inFence) {
        inFence = true;
        marker = m[1][0];
      } else if (m[1][0] === marker) {
        inFence = false;
      }
      out.push("");
      continue;
    }
    out.push(inFence ? "" : line);
  }
  return out.join("\n");
}

for (const file of files) {
  const where = relative(root, file).split("\\").join("/");
  const text = readFileSync(file, "utf8");
  const inSnapshot = file.startsWith(EXTERNAL_SNAPSHOT);
  const naked = stripFences(text);
  if (!inSnapshot) {
    // A: a Markdown link. A link inside a code fence is an example, not a reference.
    for (const m of naked.matchAll(/\[[^\]]*\]\(([^)\s]+\.md)(#[^)]*)?\)/g)) {
      const target = m[1];
      if (/^(https?:|\/\/|mailto:)/.test(target)) continue;
      if (!existsSync(resolve(dirname(file), target)))
        problems.push(`A broken link: ${where} -> ${target}`);
    }
    // B: a repository-root path in backticks.
    for (const line of naked.split("\n")) {
      for (const m of line.matchAll(/`([A-Za-z0-9_./-]+\.(?:md|mjs|py|ts|json|yml|yaml|txt|png|dds|log))`/g)) {
        const p = m[1];
        if (p.includes("..")) continue;
        if (!REPO_TOP_DIRS.includes(p.split("/")[0])) continue;
        if (!existsSync(join(root, p))) problems.push(`B path does not exist: ${where} -> \`${p}\``);
      }
    }
  }
}

// C: an agent-facing file that points at the design repository.
for (const file of AGENT_FACING) {
  if (!existsSync(file)) continue;
  const where = relative(root, file).split("\\").join("/");
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (DESIGN_REPO_MARKERS.test(line)) problems.push(`C design-repository pointer: ${where}:${i + 1}: ${line.trim()}`);
  });
}

if (problems.length > 0) {
  for (const p of problems) console.error(`  FAIL ${p}`);
  console.error(`  ${problems.length} defect(s)`);
  process.exit(1);
}
console.log(
  `  PASS document references (${files.length} Markdown files; links resolve, repository paths exist, no design-repository pointer)`,
);
