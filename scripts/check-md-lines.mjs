#!/usr/bin/env node
/**
 * No hard wrapping, for markdown that an agent reads.
 *
 * A paragraph or a list item is one line. A wrap at about 100 columns puts a newline in the middle of
 * a sentence, so the model reads a broken sentence, a `grep` for that sentence misses it, and a
 * `git diff` touches two lines for one word. This checker and fixer joins every block back into one
 * line and leaves it there.
 *
 * Usage:
 *   node scripts/check-md-lines.mjs            check the default set, exit 1 on a violation
 *   node scripts/check-md-lines.mjs --list     list every violation as file:line: text
 *   node scripts/check-md-lines.mjs --fix      rewrite in place
 *   node scripts/check-md-lines.mjs FILE...    check only these files
 *
 * Applies to hand-written markdown that an agent reads: `AGENTS.md`, `README.md`, `docs/*.md`, the
 * skills, the agents, `.pi/prompts/*.md`, `scripts/tests/README.md`, and the hand-written files in
 * `docs/mod-wiki/`.
 *
 * Not applied to: fenced code, the YAML header, tables, headings, and html blocks. A blockquote is
 * one block, so a `>` paragraph counts the same as any other paragraph.
 * Vendored snapshots (docs/mod-wiki, docs/script_docs, docs/data_types, reference, .pi/vendor) are
 * never rewritten, and an explicit file argument does not get around that. The hand-written files
 * inside `docs/mod-wiki/` are the exception.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKIP_DIRS = [
  ".git",
  "node_modules",
  "game-scripts",
  ".pi/vendor",
  "docs/mod-wiki",
  "docs/script_docs",
  "docs/data_types",
  "reference",
  "your_mods",
];
/** Hand-written files inside a vendored snapshot still follow this rule. */
const KEEP = new Set(["docs/mod-wiki/INDEX.md", "docs/mod-wiki/SOURCE.md", "docs/mod-wiki/LICENSE.md"]);
const KEEP_LOWER = new Set([...KEEP].map((rel) => rel.toLowerCase()));

const isBlank = (line) => line.trim() === "";
const isFence = (line) => /^\s*(```|~~~)/.test(line);
const isTable = (line) => /^\s*\|/.test(line);
const isHeading = (line) => /^\s*#{1,6}\s/.test(line);
const isHr = (line) => /^\s*([-*_])\1{2,}\s*$/.test(line);
const isHtml = (line) => /^\s*</.test(line);
const isQuote = (line) => /^\s*>/.test(line);
/** A `>` with no text ends one quoted paragraph and starts another. */
const isQuoteBlank = (line) => /^\s*>\s*$/.test(line);
const QUOTE_PREFIX = /^\s*>\s?/;
/** Text inside a quote that must keep its own lines: a nested quote, a list, a table, a heading. */
const isQuoteStructural = (line) => {
  const body = line.replace(QUOTE_PREFIX, "");
  return isListStart(body) || isSpecial(body) || isQuote(body) || body.trim() === "";
};
const isListStart = (line) => LIST_ITEM.test(line);
const isSpecial = (line) => isFence(line) || isTable(line) || isHeading(line) || isHr(line) || isHtml(line);

function isSkipped(rel) {
  const key = rel.toLowerCase();
  return SKIP_DIRS.some((skip) => key === skip || key.startsWith(`${skip}/`));
}

function isKept(rel) {
  return KEEP_LOWER.has(rel.toLowerCase());
}

function collectFiles(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(ROOT, full).split(path.sep).join("/");
    if (entry.isDirectory()) {
      const skipped = isSkipped(rel);
      if (skipped && ![...KEEP_LOWER].some((keep) => keep.startsWith(`${rel.toLowerCase()}/`))) continue;
      collectFiles(full, out);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      if (isSkipped(rel) && !isKept(rel)) continue;
      out.push(rel);
    }
  }
}

const LIST_ITEM = /^(\s*)([-*+]|\d+\.)\s+/;
const CJK = /[\u3000-\u303f\u3400-\u9fff\uff00-\uffef]/;

/** Join two lines with one space, unless both sides are CJK text. */
function joinLines(left, right) {
  if (CJK.test(left.slice(-1)) && CJK.test(right.trim().slice(0, 1))) return `${left}${right.trim()}`;
  return `${left} ${right.trim()}`;
}

function analyse(lines) {
  const violations = [];
  let inFence = false;
  let inHeader = lines[0]?.trim() === "---";
  let extended = false;
  let inQuote = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (inHeader) {
      if (i > 0 && /^---\s*$/.test(line)) inHeader = false;
      continue;
    }
    if (isFence(line)) {
      inFence = !inFence;
      extended = false;
      inQuote = false;
      continue;
    }
    if (inFence) continue;
    if (isBlank(line) || isQuoteBlank(line)) {
      extended = false;
      inQuote = false;
      continue;
    }
    if (isSpecial(line)) {
      extended = false;
      inQuote = false;
      continue;
    }
    if (isQuote(line)) {
      // Consecutive `>` lines are one quoted paragraph. A structural line inside a
      // quote keeps its own line, and this rule does not merge across it.
      if (isQuoteStructural(line)) {
        extended = false;
        inQuote = false;
        continue;
      }
      if (extended && inQuote) {
        violations.push({ line: i + 1, text: line.trim(), reason: "continues the line above" });
      }
      extended = true;
      inQuote = true;
      continue;
    }
    // A quote ends at the first line without `>`. Markdown allows a lazy
    // continuation there, and this rule does not merge one.
    if (inQuote) {
      extended = false;
      inQuote = false;
    }
    // A list item starts a new block. Any other non-blank line continues the block above it.
    if (isListStart(line)) extended = false;
    if (extended) {
      violations.push({ line: i + 1, text: line.trim(), reason: "continues the line above" });
    }
    extended = true;
    inQuote = false;
  }
  return violations;
}

function rewrite(text) {
  const lines = text.split("\n");
  const out = [];
  let inFence = false;
  let inHeader = lines[0]?.trim() === "---";
  let block = null;
  let quoted = false;

  const flush = () => {
    if (!block) return;
    if (quoted) {
      const indent = /^\s*/.exec(block[0])[0];
      let joined = block[0].replace(QUOTE_PREFIX, "");
      for (const line of block.slice(1)) joined = joinLines(joined, line.replace(QUOTE_PREFIX, ""));
      out.push(`${indent}> ${joined}`.trimEnd());
      block = null;
      return;
    }
    const first = block[0];
    const marker = LIST_ITEM.exec(first);
    // Prefix of the first line: the list marker, or the leading indentation.
    const firstPrefix = marker ? `${marker[1]}${marker[2]} ` : /^\s*/.exec(first)[0];
    const bodyStart = marker ? first.slice(marker[0].length) : first.trimStart();
    let joined = bodyStart;
    for (const line of block.slice(1)) joined = joinLines(joined, line);
    out.push(firstPrefix + joined);
    block = null;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (inHeader) {
      out.push(line);
      if (i > 0 && /^---\s*$/.test(line)) inHeader = false;
      continue;
    }
    if (isFence(line)) {
      flush();
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }
    if (isBlank(line) || isQuoteBlank(line) || isSpecial(line)) {
      flush();
      quoted = false;
      out.push(line);
      continue;
    }
    if (isQuote(line)) {
      if (isQuoteStructural(line)) {
        flush();
        quoted = false;
        out.push(line);
        continue;
      }
      if (!quoted) flush();
      quoted = true;
      block = block ? [...block, line] : [line];
      continue;
    }
    if (isListStart(line)) {
      flush();
      quoted = false;
      block = [line];
      continue;
    }
    if (quoted) {
      flush();
      quoted = false;
    }
    block = block ? [...block, line] : [line];
  }
  flush();
  return out.join("\n");
}

const args = process.argv.slice(2);
const fix = args.includes("--fix");
const list = args.includes("--list");
const only = args.filter((arg) => !arg.startsWith("--"));

const files = [];
if (only.length > 0) {
  for (const file of only) {
    const rel = path.relative(ROOT, path.resolve(file)).split(path.sep).join("/");
    // An explicit argument must not rewrite a vendored snapshot either.
    if (isSkipped(rel) && !isKept(rel)) {
      console.log(`skipped ${rel}: a vendored snapshot, not hand-written`);
      continue;
    }
    files.push(rel);
  }
} else collectFiles(ROOT, files);
files.sort();

let total = 0;
let changed = 0;
for (const rel of files) {
  const full = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
  const raw = fs.readFileSync(full, "utf8");
  // Keep the file's own newline style: the repo checks out CRLF on Windows.
  const crlf = raw.includes("\r\n");
  const text = crlf ? raw.split("\r\n").join("\n") : raw;
  const lines = text.split("\n");
  const violations = analyse(lines);
  if (violations.length === 0 && !fix) continue;
  if (fix) {
    const next = rewrite(text);
    if (next !== text) {
      const written = crlf ? next.split("\n").join("\r\n") : next;
      fs.writeFileSync(full, written, "utf8");
      changed += 1;
      const after = analyse(next.split("\n")).length;
      console.log(`fixed ${rel} (${violations.length} -> ${after})`);
      total += after;
    } else if (violations.length > 0) {
      console.log(`unfixed ${rel} (${violations.length})`);
      total += violations.length;
    }
    continue;
  }
  total += violations.length;
  for (const violation of violations) {
    if (list) console.log(`${rel}:${violation.line}: ${violation.text.slice(0, 120)}`);
    else console.log(`${rel}:${violation.line}: ${violation.reason}: ${violation.text.slice(0, 90)}`);
  }
}

if (fix) {
  console.log(`\n${changed} file(s) rewritten, ${total} violation(s) left.`);
  process.exit(total === 0 ? 0 : 1);
}
if (files.length === 0) {
  console.log(`no checkable file: every argument names a vendored snapshot, which this rule does not cover.`);
  process.exit(0);
}
if (total === 0) console.log(`OK: ${files.length} markdown file(s), one block per line.`);
else console.log(`\n${total} violation(s) in ${files.length} markdown file(s).`);
process.exit(total === 0 ? 0 : 1);
