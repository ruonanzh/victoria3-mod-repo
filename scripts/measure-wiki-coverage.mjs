#!/usr/bin/env node
/**
 * Measures how much of the name dumps the wiki snapshot mentions.
 *
 * It reads every `## <name>` line of `docs/script_docs/effects.log` and
 * `docs/script_docs/triggers.log`, then counts a name as mentioned when it appears in any page under
 * `docs/mod-wiki/` as a whole word. The result is the coverage share that `docs/script_docs/SOURCE.md`
 * records. Re-run it after a dump refresh or a snapshot refresh, then update that page.
 *
 * Usage: node scripts/measure-wiki-coverage.mjs
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dumpDir = join(root, "docs", "script_docs");
const wikiDir = join(root, "docs", "mod-wiki");

const names = (file) => {
  const text = readFileSync(join(dumpDir, file), "utf8");
  return new Set((text.match(/^## \S+/gm) ?? []).map((line) => line.replace(/^#+\s*/, "")));
};

let wikiText = "";
for (const page of readdirSync(wikiDir)) {
  if (!page.endsWith(".md")) continue;
  wikiText += `${readFileSync(join(wikiDir, page), "utf8")}\n`;
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const mentioned = (set) => {
  let n = 0;
  for (const name of set) {
    if (new RegExp(`(^|[^A-Za-z0-9_])${escapeRe(name)}([^A-Za-z0-9_]|$)`).test(wikiText)) n += 1;
  }
  return n;
};

for (const [label, file] of [
  ["effects", "effects.log"],
  ["triggers", "triggers.log"],
]) {
  const all = names(file);
  const hit = mentioned(all);
  console.log(`${label}: ${hit} of ${all.size} (${((100 * hit) / all.size).toFixed(0)}%)`);
}
