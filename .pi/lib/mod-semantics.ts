/**
 * mod-semantics - the name-level semantic validation for a Victoria 3 mod.
 *
 * It is the semantic layer of `validate_mod`. The syntax and the convention checks live in
 * mod-lint.ts. This file answers the three questions that a brace and BOM check cannot answer:
 *   - C1  Does the target of a `REPLACE:` or `INJECT:` keyword exist? The target must sit in the
 *         same `common/<directory>/` as the keyword, either in this mod or in the vanilla scripts.
 *         A `TRY_*` or `*_OR_CREATE` keyword is best effort by design, so a missing target is a
 *         note there, never a warning.
 *   - C2  Is a name inside an effect list or a trigger list a near miss for a known name? The known
 *         names come from `docs/script_docs/`, which this repository ships. The check reports only
 *         a name within an edit distance of 2 from a known name, so a structure field is not
 *         reported.
 *   - C3  Does a new game object have its localization keys? The wiki states the key shape for
 *         decisions, character traits, and journal entries.
 *
 * The evidence comes from the repository itself, not from the player's machine:
 *   - `docs/script_docs/` holds the game's own dumps (effects, triggers, modifiers, event targets,
 *     on actions, custom localization). `docs/script_docs/SOURCE.md` records how to regenerate them.
 *   - `game-scripts/vanilla/` holds the mirror of the install root. The Workshop part of the mirror
 *     holds other authors' mods, so it is not evidence and this file never reads it.
 *
 * Contract: read only, with no third-party dependency. Every text field is ASCII or English. An
 * item is a warning or a note, never a failure, because a name-level conclusion is not proof.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { vanillaScriptsDir } from "./game-paths";

export interface SemanticWarning {
  code: string;
  message: string;
  /** `warn` means fix it, and `note` is a hint. A name-level conclusion is never a failure. */
  level?: "warn" | "note";
}

export interface SemanticResult {
  checked: string[];
  warnings: SemanticWarning[];
}

export interface SemanticOptions {
  /**
   * The workspace root: the directory that holds `mod-repo.json` and `docs/`. The caller passes
   * `ctx.cwd`, so the tool reads the workspace it runs in and never guesses.
   */
  repoRoot?: string;
}

// ---- the dumps ----

/** The dump files that this file reads, and the prefix that a name line starts with. */
const DUMP_FILES = {
  effects: "effects.log",
  triggers: "triggers.log",
  modifiers: "modifiers.log",
  event_targets: "event_targets.log",
  on_actions: "on_actions.log",
  custom_localization: "custom_localization.log",
} as const;

type DumpKind = keyof typeof DUMP_FILES;

export interface DumpNames {
  /** The directory that was read, or null when it holds no dump. */
  dir: string | null;
  effects: Set<string>;
  triggers: Set<string>;
  modifiers: Set<string>;
  eventTargets: Set<string>;
  onActions: Set<string>;
  customLocalization: Set<string>;
  /** The name count per dump file, for a report. */
  counts: Record<DumpKind, number>;
}

const dumpCache = new Map<string, DumpNames>();

/** A name line of a dump: `## name`, `### name`, or a column-zero `name:`. */
function dumpNameLines(kind: DumpKind, text: string): string[] {
  const out: string[] = [];
  if (kind === "effects" || kind === "triggers") {
    for (const line of text.split(/\r?\n/)) {
      const m = /^##\s+(\S+)\s*$/.exec(line);
      if (m) out.push(m[1]);
    }
    return out;
  }
  if (kind === "event_targets") {
    for (const line of text.split(/\r?\n/)) {
      const m = /^###\s+(\S+)\s*$/.exec(line);
      if (m) out.push(m[1]);
    }
    return out;
  }
  // modifiers.log, on_actions.log, and custom_localization.log use a column-zero `name:` line.
  for (const line of text.split(/\r?\n/)) {
    const m = /^([A-Za-z_][\w.]*):\s*$/.exec(line);
    if (m) out.push(m[1]);
  }
  return out;
}

/**
 * Reads the dumps once, then serves the cached copy. A missing directory, a missing file, and an
 * unreadable file all mean the same thing: that class of names is unknown, and the caller must say
 * so instead of reporting a name as wrong.
 */
export function loadDumpNames(scriptDocsDir: string): DumpNames {
  const cached = dumpCache.get(scriptDocsDir);
  if (cached) return cached;
  const dir = existsSync(scriptDocsDir) ? scriptDocsDir : null;
  const names: DumpNames = {
    dir,
    effects: new Set(),
    triggers: new Set(),
    modifiers: new Set(),
    eventTargets: new Set(),
    onActions: new Set(),
    customLocalization: new Set(),
    counts: { effects: 0, triggers: 0, modifiers: 0, event_targets: 0, on_actions: 0, custom_localization: 0 },
  };
  if (!dir) {
    dumpCache.set(scriptDocsDir, names);
    return names;
  }
  const targets: Record<DumpKind, Set<string>> = {
    effects: names.effects,
    triggers: names.triggers,
    modifiers: names.modifiers,
    event_targets: names.eventTargets,
    on_actions: names.onActions,
    custom_localization: names.customLocalization,
  };
  for (const kind of Object.keys(DUMP_FILES) as DumpKind[]) {
    let text: string;
    try {
      text = readFileSync(join(dir, DUMP_FILES[kind]), "utf8");
    } catch {
      continue;
    }
    const list = dumpNameLines(kind, text);
    for (const n of list) targets[kind].add(n);
    names.counts[kind] = list.length;
  }
  dumpCache.set(scriptDocsDir, names);
  return names;
}

/** Every known name, in one set. A name in this set is never a C2 candidate. */
function knownNames(d: DumpNames): Set<string> {
  const all = new Set<string>();
  for (const s of [d.effects, d.triggers, d.modifiers, d.eventTargets, d.onActions, d.customLocalization])
    for (const n of s) all.add(n);
  return all;
}

// ---- the script text ----

function readText(p: string): string | null {
  try {
    const text = readFileSync(p, "utf8");
    // A vanilla script can start with a UTF-8 BOM, and a BOM would stop the first name on the first
    // line from matching. Strip it here, so every caller sees the same text.
    return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  } catch {
    return null;
  }
}

/**
 * Strips a `#` line comment that sits outside a quoted string. A string can span several physical
 * lines, which a GUI file uses, so the scan carries its state across the lines.
 */
function stripLineComments(text: string): string {
  const out: string[] = [];
  let inString = false;
  for (const line of text.split(/\r?\n/)) {
    let cut = line.length;
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (ch === '"') {
        inString = !inString;
        continue;
      }
      if (ch === "#" && !inString) {
        cut = i;
        break;
      }
    }
    out.push(line.slice(0, cut));
  }
  return out.join("\n");
}

const OVERRIDE_KEYWORD = "(?:TRY_)?(?:INJECT|REPLACE)(?:_OR_CREATE)?";
const OVERRIDE_DECL_RE = new RegExp(`^[ \\t]*(${OVERRIDE_KEYWORD}):\\s*(\\w+)\\s*=`);
const TOPLEVEL_DEF_RE = /^[ \t]*(\w+)\s*=/;

/** The top-level definitions and the override declarations of one file. */
function scanTopLevel(text: string): {
  definitions: Set<string>;
  overrides: Array<{ keyword: string; name: string }>;
} {
  const definitions = new Set<string>();
  const overrides: Array<{ keyword: string; name: string }> = [];
  let depth = 0;
  let inString = false;
  let atLineStart = true;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === "\n") {
      atLineStart = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      atLineStart = false;
      continue;
    }
    if (inString) {
      atLineStart = false;
      continue;
    }
    if (ch === "{") {
      depth += 1;
      atLineStart = false;
      continue;
    }
    if (ch === "}") {
      depth = Math.max(0, depth - 1);
      atLineStart = false;
      continue;
    }
    if (depth === 0 && atLineStart) {
      const rest = text.slice(i, i + 200);
      const o = OVERRIDE_DECL_RE.exec(rest);
      if (o && o.index === 0) {
        overrides.push({ keyword: o[1].toUpperCase(), name: o[2] });
        i += o[0].length - 1;
        atLineStart = false;
        continue;
      }
      const d = TOPLEVEL_DEF_RE.exec(rest);
      if (d && d.index === 0) {
        definitions.add(d[1]);
        i += d[0].length - 1;
        atLineStart = false;
        continue;
      }
    }
    if (ch !== " " && ch !== "\t" && ch !== "\r") atLineStart = false;
  }
  return { definitions, overrides };
}

interface ModFile {
  abs: string;
  rel: string;
}

const NON_SCRIPT_DIR_PREFIXES = ["/.metadata/", "/tools/", "/licenses/", "/documentation/"];

function walkFiles(root: string, suffixes: Set<string>): ModFile[] {
  const out: ModFile[] = [];
  const walk = (dir: string): void => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name === ".git") continue;
      const abs = join(dir, e.name);
      if (e.isDirectory()) {
        walk(abs);
        continue;
      }
      if (!e.isFile()) continue;
      const rel = `/${abs.slice(root.length + 1).split("\\").join("/")}`;
      if (NON_SCRIPT_DIR_PREFIXES.some((p) => rel.toLowerCase().startsWith(p))) continue;
      const dot = e.name.lastIndexOf(".");
      if (dot < 0 || !suffixes.has(e.name.slice(dot).toLowerCase())) continue;
      out.push({ abs, rel });
    }
  };
  walk(root);
  return out;
}

/** The `common/<directory>` category of a mod file, or null when the file is not in `common/`. */
function categoryOf(rel: string): string | null {
  const parts = rel.replace(/^\/+/, "").split("/");
  if (parts.length >= 3 && parts[0].toLowerCase() === "common") return `common/${parts[1]}`;
  return null;
}

// ---- C1: the existence of a REPLACE:/INJECT: target ----

/** The vanilla top-level names of one category, cached per vanilla root and category. */
const vanillaCategoryCache = new Map<string, Set<string> | null>();

function vanillaCategoryNames(vanillaRoot: string, category: string): Set<string> | null {
  const key = `${vanillaRoot}|${category}`;
  const cached = vanillaCategoryCache.get(key);
  if (cached !== undefined) return cached;
  const dir = join(vanillaRoot, category);
  if (!existsSync(dir)) {
    vanillaCategoryCache.set(key, null);
    return null;
  }
  const names = new Set<string>();
  for (const { abs } of walkFiles(dir, new Set([".txt"]))) {
    const text = readText(abs);
    if (text === null) continue;
    for (const n of scanTopLevel(stripLineComments(text)).definitions) names.add(n);
  }
  vanillaCategoryCache.set(key, names);
  return names;
}

/** A keyword that is best effort by design: a missing target is normal there. */
function isTryKeyword(keyword: string): boolean {
  return keyword.startsWith("TRY_");
}

/** A keyword that creates the entry when it is absent, so a missing target is the intended use. */
function isCreateKeyword(keyword: string): boolean {
  return keyword.endsWith("_OR_CREATE");
}

/** The wiki marks these as `REPLACE only`, so an `INJECT:` on them does not inject. */
const REPLACE_ONLY_CATEGORIES = new Set(["common/scripted_effects", "common/scripted_triggers"]);
/** The gated-folder list marks this one `REPLACE only`, and the prose states it only for the two above. */
const REPLACE_ONLY_INFERRED = new Set(["common/scripted_rules"]);

// ---- C2: a near miss inside an effect list or a trigger list ----

/**
 * The containers whose direct children are effect or trigger names. This list is frozen: an entry
 * needs a vanilla or wiki example, because a wrong entry turns a field name into a false report.
 */
const EFFECT_CONTAINERS = new Set([
  "immediate",
  "effect",
  "hidden_effect",
  "trigger",
  "potential",
  "visible",
  "allow",
  "is_valid",
  "ai_chance",
  "after",
  "option",
  "complete_effect",
  "fail_effect",
  "timeout_effect",
  "invalid_effect",
  "abort_effect",
  "select_effect",
  "on_accept",
  "on_decline",
  "random_events",
  "first_valid",
  "weight",
]);

/**
 * The structure fields that may sit directly inside an effect or trigger list. They are not game
 * names, so they are never reported. A field that is missing from this list is harmless: the check
 * reports only a name that is within an edit distance of 2 from a known name.
 */
const STRUCTURE_FIELDS = new Set([
  "tooltip",
  "desc",
  "custom_tooltip",
  "custom_description",
  "multiply",
  "subtract",
  "add",
  "divide",
  "modulo",
  "min",
  "max",
  "value",
  "limit",
  "while",
  "count",
  "percent",
  "chance",
  "weight",
  "modifier",
  "scope",
  "target",
  "type",
  "key",
  "name",
  "icon",
  "text",
  "title",
  "flavor",
  "days",
  "weeks",
  "months",
  "years",
  "flag",
  "save_scope_as",
  "save_temporary_scope_as",
  "save_scope_value_as",
  "ordered_trigger",
  "random_list",
  "random",
  "if",
  "else",
  "else_if",
  "scope_type",
  "scope_value",
]);

/** The minimum length of a C2 candidate. A short name is too close to too many known names. */
const C2_MIN_LENGTH = 8;
/** The maximum number of C2 items in one report, so a broken file cannot flood the output. */
const C2_MAX_ITEMS = 20;

/** A bounded Levenshtein distance: it stops as soon as the best possible distance exceeds `max`. */
function distanceWithin(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const prev = new Array<number>(b.length + 1);
  const cur = new Array<number>(b.length + 1);
  for (let j = 0; j <= b.length; j += 1) prev[j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    cur[0] = i;
    let best = cur[0];
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (cur[j] < best) best = cur[j];
    }
    if (best > max) return max + 1;
    for (let j = 0; j <= b.length; j += 1) prev[j] = cur[j];
  }
  return prev[b.length];
}

/** The nearest known name: same first letter, a length within 2, and an edit distance of 2 or less. */
function suggest(name: string, known: Set<string>): string | null {
  const lower = name.toLowerCase();
  let best: { name: string; d: number } | null = null;
  for (const k of known) {
    const kl = k.toLowerCase();
    if (kl[0] !== lower[0]) continue;
    if (Math.abs(kl.length - lower.length) > 2) continue;
    const d = distanceWithin(lower, kl, 2);
    if (d > 2) continue;
    if (!best || d < best.d) best = { name: k, d };
    if (d === 1) break;
  }
  return best ? best.name : null;
}

/**
 * The direct children of the effect and trigger containers in one file. A child is reported as
 * `<container>` plus `<name>`, so the item can name both. The scan is per token, not per line: a
 * vanilla file often writes a whole block on one line, and a per-line match would miss it.
 */
function containerChildren(text: string): Array<{ container: string; name: string }> {
  const out: Array<{ container: string; name: string }> = [];
  const stack: Array<{ name: string }> = [];
  let ident = "";
  let inString = false;
  let pendingName: string | null = null;
  const isWord = (ch: string): boolean => /[A-Za-z0-9_.]/.test(ch);
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === '"') {
      inString = !inString;
      ident = "";
      continue;
    }
    if (inString) continue;
    if (isWord(ch)) {
      ident += ch;
      continue;
    }
    if (ch === "=") {
      const top = stack[stack.length - 1];
      const name = ident;
      ident = "";
      pendingName = name || null;
      if (name && top && EFFECT_CONTAINERS.has(top.name)) out.push({ container: top.name, name });
      continue;
    }
    if (ch === "{") {
      stack.push({ name: (pendingName ?? "").toLowerCase() });
      pendingName = null;
      ident = "";
      continue;
    }
    if (ch === "}") {
      stack.pop();
      pendingName = null;
      ident = "";
      continue;
    }
    // A name never spans a line, so a line break ends it. A space or a tab does not: the file
    // writes `name = value`, and that space sits inside the pair.
    if (ch === "\n" || ch === "\r") {
      ident = "";
      continue;
    }
    if (ch !== " " && ch !== "\t") ident = "";
  }
  return out;
}

// ---- C3: a new object without its localization keys ----

/** The key suffix that each class must carry, per the wiki pages named in SOURCE.md of the docs. */
const LOC_KEY_CLASSES: Array<{ category: string; suffixes: string[] }> = [
  { category: "common/decisions", suffixes: ["", "_desc"] },
  { category: "common/character_traits", suffixes: ["", "_desc"] },
  { category: "common/journal_entries", suffixes: ["", "_reason"] },
  { category: "common/journal_entry_groups", suffixes: [""] },
];

const LOC_KEY_LINE_RE = /^[ \t]*([^\s:#][^:]*):\s*(?:\d+\s*)?".*/;

/** The loc keys of the mod, per language. A file is `localization/<lang>/..._l_<lang>.yml`. */
function modLocKeys(modRoot: string): Map<string, Set<string>> {
  const byLang = new Map<string, Set<string>>();
  for (const { abs, rel } of walkFiles(modRoot, new Set([".yml", ".yaml"]))) {
    const parts = rel.replace(/^\/+/, "").split("/");
    if (parts[0].toLowerCase() !== "localization") continue;
    // `localization/languages.yml` is the game's language list, not a localization file, so it does
    // not name a language. A real language is a directory, and its name carries no suffix.
    if (parts.length < 3) continue;
    const lang = parts[1].toLowerCase();
    if (lang.includes(".") || lang === "replace") continue;
    const text = readText(abs);
    if (text === null) continue;
    let keys = byLang.get(lang);
    if (!keys) {
      keys = new Set<string>();
      byLang.set(lang, keys);
    }
    for (const line of text.split(/\r?\n/)) {
      const m = LOC_KEY_LINE_RE.exec(line);
      if (m) keys.add(m[1].trim());
    }
  }
  return byLang;
}

// ---- the entry point ----

function findRepoRoot(modPath: string): string | null {
  let p = resolve(modPath);
  for (let i = 0; i < 6; i += 1) {
    if (existsSync(join(p, "mod-repo.json"))) return p;
    const up = dirname(p);
    if (up === p) return null;
    p = up;
  }
  return null;
}

/**
 * Runs the three semantic classes. The caller passes the workspace root, and this function reads
 * only the mod, the dumps, and the vanilla mirror under it.
 */
export function analyzeSemantics(modPath: string, opts?: SemanticOptions): SemanticResult {
  const checked: string[] = [];
  const warnings: SemanticWarning[] = [];
  const modRoot = resolve(modPath);
  const repoRoot = opts?.repoRoot ? resolve(opts.repoRoot) : findRepoRoot(modRoot);

  const dumps = repoRoot ? loadDumpNames(join(repoRoot, "docs", "script_docs")) : null;
  const vanillaRoot = repoRoot && existsSync(vanillaScriptsDir(repoRoot)) ? vanillaScriptsDir(repoRoot) : null;

  // One pass over the mod collects the top-level names by category and the override declarations.
  const defsByCategory = new Map<string, Set<string>>();
  const overrides: Array<{ category: string; keyword: string; name: string; file: string }> = [];
  const modDefinedNames = new Set<string>();
  const files = walkFiles(modRoot, new Set([".txt", ".gui", ".gfx", ".asset"]));
  for (const { abs, rel } of files) {
    const text = readText(abs);
    if (text === null) continue;
    const cleaned = stripLineComments(text);
    const scan = scanTopLevel(cleaned);
    for (const d of scan.definitions) modDefinedNames.add(d);
    const category = categoryOf(rel);
    if (!category) continue;
    let defs = defsByCategory.get(category);
    if (!defs) {
      defs = new Set<string>();
      defsByCategory.set(category, defs);
    }
    for (const d of scan.definitions) defs.add(d);
    for (const o of scan.overrides) overrides.push({ category, ...o, file: rel.replace(/^\/+/, "") });
  }

  // ---- C1 ----
  if (overrides.length > 0) {
    if (!vanillaRoot) {
      warnings.push({
        code: "c1-no-vanilla-mirror",
        level: "note",
        message: `the vanilla mirror is not present, so a REPLACE:/INJECT: target cannot be checked. Run sync_game_scripts, then run validate_mod again.`,
      });
    } else {
      let targetCount = 0;
      for (const o of overrides) {
        const vanilla = vanillaCategoryNames(vanillaRoot, o.category);
        if (vanilla === null) continue; // This category has no vanilla file, so a target cannot exist there.
        targetCount += 1;
        const known = (defsByCategory.get(o.category)?.has(o.name) ?? false) || vanilla.has(o.name);
        if (!known && isCreateKeyword(o.keyword)) continue; // The keyword creates the entry on purpose.
        if (!known) {
          warnings.push({
            code: "c1-missing-target",
            level: isTryKeyword(o.keyword) ? "note" : "warn",
            message: isTryKeyword(o.keyword)
              ? `${o.file}: ${o.keyword}:${o.name} names no top-level object in ${o.category}, in this mod or in the vanilla scripts. This keyword tolerates an absent entry, so this is only a hint.`
              : `${o.file}: ${o.keyword}:${o.name} names no top-level object in ${o.category}, in this mod or in the vanilla scripts. The game reports an error when the entry is absent.`,
          });
        }
        if (o.keyword === "INJECT" && REPLACE_ONLY_CATEGORIES.has(o.category)) {
          warnings.push({
            code: "c1-inject-scripted",
            level: "warn",
            message: `${o.file}: ${o.category} accepts REPLACE: only. The wiki states that INJECT: on a scripted effect or trigger overwrites the original definition as if it were REPLACE:. Use REPLACE: and copy the whole definition.`,
          });
        } else if (o.keyword === "INJECT" && REPLACE_ONLY_INFERRED.has(o.category)) {
          warnings.push({
            code: "c1-inject-scripted-inferred",
            level: "note",
            message: `${o.file}: the gated-folder list marks ${o.category} as REPLACE only, so INJECT: may overwrite the whole definition. The wiki states that equivalence for scripted effects and scripted triggers only, so check this one in the game.`,
          });
        }
      }
      if (targetCount > 0)
        checked.push(
          `C1 the target of REPLACE:/INJECT: in ${targetCount} declaration(s) against ${vanillaRoot}`,
        );
    }
  }

  // ---- C2 ----
  if (dumps?.dir) {
    const known = knownNames(dumps);
    const structureAllowed = new Set([...STRUCTURE_FIELDS, ...known]);
    let candidates = 0;
    const reported = new Set<string>();
    for (const { abs, rel } of files) {
      if (!rel.toLowerCase().endsWith(".txt")) continue;
      const category = categoryOf(rel);
      if (!category && !rel.toLowerCase().startsWith("/events/")) continue;
      const text = readText(abs);
      if (text === null) continue;
      for (const { container, name } of containerChildren(stripLineComments(text))) {
        const lower = name.toLowerCase();
        // A game name is lowercase snake_case. An uppercase identifier is a constant such as a state
        // or a good, and the game names it somewhere else, so it is not a candidate. A dotted name
        // is a field path such as `amendment.type`, not a game name.
        if (name !== lower || name.includes(".")) continue;
        if (lower.length < C2_MIN_LENGTH) continue;
        if (structureAllowed.has(lower) || structureAllowed.has(name)) continue;
        if (modDefinedNames.has(name)) continue;
        const guess = suggest(name, known);
        if (!guess) continue;
        const key = `${rel.replace(/^\/+/, "")}|${lower}|${guess}`;
        if (reported.has(key)) continue;
        reported.add(key);
        candidates += 1;
        if (candidates > C2_MAX_ITEMS) continue;
        warnings.push({
          code: "c2-near-miss",
          level: "warn",
          message: `${rel.replace(/^\/+/, "")}: '${name}' in a ${container} block is not a known effect, trigger, or modifier name. Did you mean '${guess}'? The dumps in docs/script_docs/ name ${dumps.counts.effects} effects and ${dumps.counts.triggers} triggers.`,
        });
      }
    }
    if (candidates > C2_MAX_ITEMS)
      warnings.push({
        code: "c2-truncated",
        level: "note",
        message: `${candidates - C2_MAX_ITEMS} more near-miss name(s) were not listed.`,
      });
    checked.push(`C2 effect and trigger names inside the effect and trigger blocks, against docs/script_docs/`);
  } else {
    warnings.push({
      code: "c2-no-dumps",
      level: "note",
      message: `docs/script_docs/ holds no dump, so an effect or trigger name cannot be checked. See docs/script_docs/SOURCE.md for how to regenerate it.`,
    });
  }

  // ---- C3 ----
  const classesPresent = LOC_KEY_CLASSES.filter((c) => (defsByCategory.get(c.category)?.size ?? 0) > 0);
  if (classesPresent.length > 0 && vanillaRoot === null) {
    // Without the vanilla side, a vanilla object and a new object look the same, so the check would
    // report the vanilla keys of an override as missing.
    warnings.push({
      code: "c3-no-vanilla-mirror",
      level: "note",
      message: `the vanilla mirror is not present, so an existing vanilla object cannot be told apart from a new one. Run sync_game_scripts, then run validate_mod again.`,
    });
  } else if (classesPresent.length > 0 && vanillaRoot) {
    const locKeys = modLocKeys(modRoot);
    // Check the base language only. A mod that ships one file per language often translates the base
    // language and leaves the others partial, and a partial translation is not a broken key.
    const languages = locKeys.has("english") ? ["english"] : [...locKeys.keys()].slice(0, 1);
    if (languages.length === 0) languages.push("english");
    let newObjects = 0;
    for (const { category, suffixes } of classesPresent) {
      const defs = defsByCategory.get(category) as Set<string>;
      const vanilla = vanillaCategoryNames(vanillaRoot, category);
      for (const name of defs) {
        if (vanilla?.has(name)) continue; // An override keeps the vanilla keys.
        newObjects += 1;
        for (const lang of languages) {
          const keys = locKeys.get(lang) ?? new Set<string>();
          for (const suffix of suffixes) {
            if (keys.has(`${name}${suffix}`)) continue;
            warnings.push({
              code: "c3-missing-loc",
              level: "warn",
              message: `${category.split("/")[1]}: the new object '${name}' has no '${name}${suffix}' key in localization/${lang}/. The wiki documents that key for this class.`,
            });
          }
        }
      }
    }
    if (newObjects > 0)
      checked.push(
        `C3 the localization keys of ${newObjects} new object(s) in the classes that the wiki documents`,
      );
  }

  return { checked, warnings };
}

/** The display name of a mod directory, for a caller that reports the path. */
export const modDirName = (p: string): string => basename(p);
