#!/usr/bin/env node
// Exercises all nine tools against a throwaway workspace and a fake game install.
//
//   node scripts/test-tools.mjs
//
// Nothing outside the OS temporary directory is written: the fake game root, the fake Workshop
// directory, and the mod install target all live under one mkdtemp directory. The real Documents
// directory and the real workspace state file are never touched.
import { installHooks } from "./tests/hooks.mjs";

installHooks();

import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  assert,
  assertEqual,
  assertIncludes,
  loadTool,
  repoRoot,
  runSuite,
  runTool,
} from "./tests/helpers.mjs";

const EXTENSIONS = [
  [".pi/extensions/check-game-paths.ts", "check_game_paths"],
  [".pi/extensions/get-game-info.ts", "get_game_info"],
  [".pi/extensions/mod-install.ts", "install_mod"],
  [".pi/extensions/mod-lint.ts", "validate_mod"],
  [".pi/extensions/runtime-check.ts", "check_runtime"],
  [".pi/extensions/runtime-install.ts", "install_runtime"],
  [".pi/extensions/set-game-dir.ts", "set_game_dir"],
  [".pi/extensions/sync-game-scripts.ts", "sync_game_scripts"],
  [".pi/extensions/try-set-game-dir.ts", "try_set_game_dir"],
];

const root = mkdtempSync(join(tmpdir(), "v3-tools-"));
const workspace = join(root, "workspace");
const steamRoot = join(root, "steam");
const gameDir = join(steamRoot, "steamapps", "common", "Victoria 3");
const workshopDir = join(steamRoot, "steamapps", "workshop", "content", "529340");
const modInstallDir = join(gameDir, "modout");

function write(path, content) {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, content);
}

// The fake install: the sentinel executable, the launcher version, and one vanilla script.
write(join(gameDir, "binaries", "victoria3.exe"), "");
write(
  join(gameDir, "launcher", "launcher-settings.json"),
  JSON.stringify({ formatVersion: 1.1, version: "1.13.11 (Matcha)", rawVersion: "1.13.11" }, null, 2),
);
write(
  join(gameDir, "game", "common", "decisions", "00_vanilla.txt"),
  "vanilla_dec = {\n\tpotential = { always = yes }\n}\n",
);
// One mirrored Workshop mod, to prove that the Workshop part of the mirror is written.
write(
  join(workshopDir, "123456789", "game", "common", "buildings", "ws_buildings.txt"),
  "ws_building = { }\n",
);

mkdirSync(join(workspace, "your_mods"), { recursive: true });
cpSync(join(repoRoot, "reference", "example_mod"), join(workspace, "your_mods", "example_mod"), {
  recursive: true,
});
write(
  join(workspace, "mod-repo.json"),
  JSON.stringify(
    {
      version: "1.0.0",
      modType: "pdx-script",
      game: {
        name: "Victoria 3",
        steamAppId: 529340,
        platforms: ["windows"],
        installDirHint: { windows: [] },
      },
      // `gameDir` keeps the test away from the player's Documents directory.
      modInstall: { relativeTo: "gameDir", path: "modout" },
      compile: null,
      workshop: { supported: true },
    },
    null,
    2,
  ),
);

const statePath = join(workspace, ".gamer-agent.local.json");
const readStateFile = () => JSON.parse(readFileSync(statePath, "utf8"));

const tests = [];

tests.push([
  "all nine extensions register their declared tool name",
  async () => {
    for (const [file, expected] of EXTENSIONS) {
      const tool = await loadTool(file);
      assertEqual(tool.name, expected, file);
    }
  },
]);

tests.push([
  "get_game_info before any state is recorded: FAIL with a NEXT step",
  async () => {
    const result = await runTool(".pi/extensions/get-game-info.ts", {}, workspace);
    assert(!result.threw, `get_game_info threw: ${result.error}`);
    assert(result.text.startsWith("FAIL:"), `expected FAIL:\n${result.text}`);
    assertIncludes(result.text, "NEXT:", "get_game_info");
    assertEqual(result.details.ok, false, "details.ok");
  },
]);

tests.push([
  "check_game_paths before any state is recorded: FAIL with a NEXT step",
  async () => {
    const result = await runTool(".pi/extensions/check-game-paths.ts", {}, workspace);
    assert(!result.threw, `check_game_paths threw: ${result.error}`);
    assert(result.text.startsWith("FAIL:"), `expected FAIL:\n${result.text}`);
    assertIncludes(result.text, "NEXT:", "check_game_paths");
  },
]);

tests.push([
  "set_game_dir records the three paths",
  async () => {
    const result = await runTool(".pi/extensions/set-game-dir.ts", { path: gameDir }, workspace);
    assert(!result.threw, `set_game_dir threw: ${result.error}`);
    assert(result.text.startsWith("PASS:"), `expected PASS:\n${result.text}`);
    const state = readStateFile();
    assertEqual(state.gameDir, gameDir, "state.gameDir");
    assertEqual(state.modInstallDir, modInstallDir, "state.modInstallDir");
    assertEqual(state.workshopDir, workshopDir, "state.workshopDir");
  },
]);

tests.push([
  "try_set_game_dir is idempotent and caches the build tag",
  async () => {
    const result = await runTool(".pi/extensions/try-set-game-dir.ts", {}, workspace);
    assert(!result.threw, `try_set_game_dir threw: ${result.error}`);
    assertIncludes(result.text, "PASS: gameDir already correct", "try_set_game_dir");
    assertEqual(readStateFile().gameBuild, "1.13.11", "state.gameBuild");
  },
]);

tests.push([
  "check_game_paths passes on the recorded paths",
  async () => {
    const result = await runTool(".pi/extensions/check-game-paths.ts", {}, workspace);
    assert(!result.threw, `check_game_paths threw: ${result.error}`);
    assert(result.text.startsWith("PASS:"), `expected PASS:\n${result.text}`);
    assertEqual(result.details.ok, true, "details.ok");
  },
]);

tests.push([
  "get_game_info reports 1.13.* and says the mirror is missing",
  async () => {
    const result = await runTool(".pi/extensions/get-game-info.ts", {}, workspace);
    assert(!result.threw, `get_game_info threw: ${result.error}`);
    assert(result.text.startsWith("PASS:"), `expected PASS:\n${result.text}`);
    assertIncludes(result.text, "1.13.*", "supportedGameVersion");
    assertIncludes(result.text, "missing", "vanilla mirror state");
  },
]);

tests.push([
  "sync_game_scripts writes vanilla/ and workshop/, then copies nothing on a second run",
  async () => {
    const first = await runTool(".pi/extensions/sync-game-scripts.ts", {}, workspace);
    assert(!first.threw, `sync_game_scripts threw: ${first.error}`);
    assert(first.text.startsWith("PASS:"), `expected PASS:\n${first.text}`);
    assert(first.details.copied > 0, `expected copied > 0, got ${first.details.copied}`);
    assert(
      existsSync(join(workspace, "game-scripts", "vanilla", "game", "common", "decisions", "00_vanilla.txt")),
      "the vanilla part did not copy the fake game script",
    );
    assert(
      existsSync(
        join(workspace, "game-scripts", "workshop", "123456789", "game", "common", "buildings", "ws_buildings.txt"),
      ),
      "the workshop part did not copy the fake Workshop mod",
    );
    const second = await runTool(".pi/extensions/sync-game-scripts.ts", {}, workspace);
    assert(!second.threw, `sync_game_scripts threw on the second run: ${second.error}`);
    assertEqual(second.details.copied, 0, "second run copied");
  },
]);

tests.push([
  "get_game_info now reports the mirror as present",
  async () => {
    const result = await runTool(".pi/extensions/get-game-info.ts", {}, workspace);
    assertIncludes(result.text, "present", "vanilla mirror state");
  },
]);

tests.push([
  "validate_mod passes the sample mod",
  async () => {
    const result = await runTool(
      ".pi/extensions/mod-lint.ts",
      { modDir: "your_mods/example_mod" },
      workspace,
    );
    assert(!result.threw, `validate_mod threw: ${result.error}`);
    assert(result.text.startsWith("PASS:"), `expected PASS:\n${result.text}`);
    assertEqual(result.details.ok, true, "details.ok");
  },
]);

tests.push([
  "validate_mod rejects a directory that does not exist",
  async () => {
    const result = await runTool(
      ".pi/extensions/mod-lint.ts",
      { modDir: "your_mods/no_such_mod" },
      workspace,
    );
    assert(result.threw, "validate_mod should throw on a missing directory");
    assertIncludes(result.error, "INVALID_MOD_DIR", "validate_mod error");
  },
]);

tests.push([
  "install_mod copies the sample mod to the derived target",
  async () => {
    const result = await runTool(
      ".pi/extensions/mod-install.ts",
      { modDir: "your_mods/example_mod" },
      workspace,
    );
    assert(!result.threw, `install_mod threw: ${result.error}`);
    assert(result.text.startsWith("PASS:"), `expected PASS:\n${result.text}`);
    assertEqual(result.details.ok, true, "details.ok");
    assert(
      existsSync(join(modInstallDir, "example_mod", ".metadata", "metadata.json")),
      `install_mod did not write ${join(modInstallDir, "example_mod")}`,
    );
    assert(
      existsSync(join(workspace, "your_mods", "example_mod", ".pi-mod.json")),
      "install_mod did not write the workspace-side record",
    );
  },
]);

tests.push([
  "check_runtime passes; install_runtime skips without installing",
  async () => {
    const check = await runTool(".pi/extensions/runtime-check.ts", {}, workspace);
    assert(!check.threw, `check_runtime threw: ${check.error}`);
    assert(check.text.startsWith("PASS:"), `expected PASS:\n${check.text}`);
    const install = await runTool(".pi/extensions/runtime-install.ts", {}, workspace);
    assert(!install.threw, `install_runtime threw: ${install.error}`);
    assert(install.text.startsWith("SKIP:"), `expected SKIP:\n${install.text}`);
    assertEqual(install.details.ok, true, "details.ok");
  },
]);

tests.push([
  "try_set_game_dir stays idempotent after the install",
  async () => {
    const result = await runTool(".pi/extensions/try-set-game-dir.ts", {}, workspace);
    assert(!result.threw, `try_set_game_dir threw: ${result.error}`);
    assertIncludes(result.text, "PASS: gameDir already correct", "try_set_game_dir");
  },
]);

try {
  await runSuite("Tool checks", tests);
} finally {
  rmSync(root, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
}
