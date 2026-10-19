#!/usr/bin/env node
// Runs the committed semantic error cases, the Workshop smoke test, and the sample-mod check.
//
//   node scripts/test-semantics.mjs
//
// Node 22.18+ or Node 24 runs the TypeScript sources through type stripping; `tests/hooks.mjs`
// supplies the extensionless-import and `typebox` resolution that the sources need.
import { installHooks } from "./tests/hooks.mjs";

installHooks();

import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  assert,
  assertEqual,
  fixtureRoot,
  loadModule,
  repoRoot,
  runSuite,
  runTool,
  summarizeWarnings,
} from "./tests/helpers.mjs";
import { CASES } from "./tests/expectations.mjs";

const { analyzeSemantics } = await loadModule(".pi/lib/mod-semantics.ts");

const MINIMAL_EFFECTS = "## add_devastation\n";
const MINIMAL_TRIGGERS = "## has_technology_researched\n";

/** Expands a `count` entry into that many entries. */
function expandExpected(expected) {
  const out = [];
  for (const item of expected) {
    const count = item.count ?? 1;
    for (let i = 0; i < count; i += 1) out.push(item);
  }
  return out;
}

/** Matches every expected warning once, then rejects any warning that the case did not predict. */
function compareWarnings(label, actual, expected) {
  const remaining = [...actual];
  for (const item of expandExpected(expected)) {
    const index = remaining.findIndex(
      (warning) =>
        warning.code === item.code &&
        warning.level === item.level &&
        (!item.includes || warning.message.includes(item.includes)),
    );
    assert(
      index >= 0,
      `${label}: missing ${item.level} ${item.code}${item.includes ? ` containing ${JSON.stringify(item.includes)}` : ""}. Actual: ${summarizeWarnings(actual)}`,
    );
    remaining.splice(index, 1);
  }
  assert(
    remaining.length === 0,
    `${label}: ${remaining.length} unpredicted warning(s): ${summarizeWarnings(remaining)}`,
  );
}

function assertChecked(label, result, prefixes) {
  for (const prefix of prefixes) {
    assert(
      result.checked.some((line) => line.startsWith(prefix)),
      `${label}: the ${prefix} class did not run. checked=${JSON.stringify(result.checked)}`,
    );
  }
}

/** A throwaway repository root with only the layers the case needs. */
function makeTempRepo({ dumps, vanilla }) {
  const root = mkdtempSync(join(tmpdir(), "v3-semantics-"));
  writeFileSync(
    join(root, "mod-repo.json"),
    JSON.stringify({
      version: "1.0.0",
      modType: "pdx-script",
      game: { name: "Victoria 3", steamAppId: 529340, platforms: ["windows"] },
      modInstall: { relativeTo: "userDocuments", path: "Paradox Interactive/Victoria 3/mod" },
      compile: null,
      workshop: { supported: true },
    }),
  );
  if (dumps) {
    mkdirSync(join(root, "docs", "script_docs"), { recursive: true });
    writeFileSync(join(root, "docs", "script_docs", "effects.log"), MINIMAL_EFFECTS);
    writeFileSync(join(root, "docs", "script_docs", "triggers.log"), MINIMAL_TRIGGERS);
  }
  if (vanilla) {
    // An empty mirror is enough: the check only asks whether the root exists.
    mkdirSync(join(root, "game-scripts", "vanilla", "game"), { recursive: true });
  }
  return root;
}

function copyFixture(caseName, repo) {
  const modPath = join(repo, "mod", caseName);
  cpSync(join(fixtureRoot, caseName), modPath, { recursive: true });
  return modPath;
}

const tests = [];

for (const testCase of CASES) {
  tests.push([
    `fixture ${testCase.dir}`,
    () => {
      const modPath = join(fixtureRoot, testCase.dir);
      const result = analyzeSemantics(modPath, { repoRoot });
      assertChecked(testCase.dir, result, testCase.checked);
      compareWarnings(testCase.dir, result.warnings, testCase.warnings);
    },
  ]);
}

tests.push([
  "missing vanilla mirror: C1 and C3 report a NOTE and stay silent",
  () => {
    const repo = makeTempRepo({ dumps: true, vanilla: false });
    try {
      const modPath = copyFixture("c3-clean", repo);
      const result = analyzeSemantics(modPath, { repoRoot: repo });
      assertEqual(result.warnings.length, 1, "warning count");
      assertEqual(result.warnings[0].code, "c3-no-vanilla-mirror", "warning code");
      assertEqual(result.warnings[0].level, "note", "warning level");
      assert(
        result.warnings.every((warning) => !warning.message.includes("has no")),
        `no key should be reported without the vanilla side: ${summarizeWarnings(result.warnings)}`,
      );
    } finally {
      rmSync(repo, { recursive: true, force: true });
    }
  },
]);

tests.push([
  "missing dumps: C2 reports a NOTE and stays silent",
  () => {
    const repo = makeTempRepo({ dumps: false, vanilla: true });
    try {
      const modPath = copyFixture("c2-clean", repo);
      const result = analyzeSemantics(modPath, { repoRoot: repo });
      assertEqual(result.warnings.length, 1, "warning count");
      assertEqual(result.warnings[0].code, "c2-no-dumps", "warning code");
      assertEqual(result.warnings[0].level, "note", "warning level");
    } finally {
      rmSync(repo, { recursive: true, force: true });
    }
  },
]);

tests.push([
  "missing mirror and dumps: notes only, no false warning",
  () => {
    const repo = makeTempRepo({ dumps: false, vanilla: false });
    try {
      const modPath = copyFixture("c1-missing", repo);
      const result = analyzeSemantics(modPath, { repoRoot: repo });
      assertEqual(result.warnings.length, 2, "warning count");
      const codes = result.warnings.map((warning) => warning.code).sort();
      assertEqual(codes.join(","), "c1-no-vanilla-mirror,c2-no-dumps", "warning codes");
      assert(
        result.warnings.every((warning) => warning.level === "note"),
        `both items must be notes: ${summarizeWarnings(result.warnings)}`,
      );
    } finally {
      rmSync(repo, { recursive: true, force: true });
    }
  },
]);

tests.push([
  "reference/example_mod passes validate_mod with no semantic warning",
  async () => {
    const result = await runTool(".pi/extensions/mod-lint.ts", { modDir: "reference/example_mod" });
    assert(!result.threw, `validate_mod threw: ${result.error}`);
    assert(result.text.startsWith("PASS:"), `expected PASS:\n${result.text}`);
    assertEqual(result.details.ok, true, "details.ok");
    assertEqual(result.details.semantic.warnings.length, 0, "semantic warning count");
  },
]);

const workshopRoot = join(repoRoot, "game-scripts", "workshop");
const KNOWN_WORKSHOP_WARNINGS = [
  { code: "c2-near-miss", includes: "make_indepedent", mod: "2988303719" },
  {
    code: "c1-missing-target",
    includes: "pmg_train_automation_building_hydroponic",
    mod: "3472248460",
  },
];

if (!existsSync(workshopRoot)) {
  tests.push([
    "Workshop mods (skipped: game-scripts/workshop is absent)",
    () => {
      console.log("  run sync_game_scripts first to enable this test");
    },
  ]);
} else {
  tests.push([
    "Workshop mods: no crash, and only the known true positives",
    () => {
      const mods = readdirSync(workshopRoot, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort();
      assert(mods.length > 0, "game-scripts/workshop/ holds no mod directory");

      const found = new Set();
      for (const mod of mods) {
        const result = analyzeSemantics(join(workshopRoot, mod), { repoRoot });
        for (const warning of result.warnings) {
          // A note is informational, and it never turns into an error.
          if (warning.level === "note") continue;
          const known = KNOWN_WORKSHOP_WARNINGS.find(
            (item) => item.code === warning.code && warning.message.includes(item.includes),
          );
          assert(
            known,
            `${mod}: unpredicted ${warning.level} ${warning.code}: ${warning.message}\n` +
              "If this is a new true positive, add it to KNOWN_WORKSHOP_WARNINGS and to the review notes.",
          );
          found.add(`${mod}|${known.code}|${known.includes}`);
        }
      }
      for (const item of KNOWN_WORKSHOP_WARNINGS) {
        assert(
          found.has(`${item.mod}|${item.code}|${item.includes}`),
          `${item.mod}: the known true positive ${item.code} (${item.includes}) was not reported`,
        );
      }
      console.log(`  ${mods.length} Workshop mod(s); the two known true positives were found`);
    },
  ]);
}

await runSuite("Semantic checks", tests);
