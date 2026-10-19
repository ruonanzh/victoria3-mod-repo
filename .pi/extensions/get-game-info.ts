/**
 * get_game_info - it reports the recorded game environment facts in one call. It takes no
 * arguments, it is read-only, and it writes no state.
 *
 * The facts:
 *   - the three paths: gameDir, modInstallDir, and workshopDir;
 *   - supportedGameVersion: the version value for the mod metadata;
 *   - the mirror: whether each part is present, and how many files it holds;
 *   - the dumps: whether docs/script_docs/ holds them, and how many names each one has.
 *
 * The version rule: the tool derives supportedGameVersion from the build tag in the runtime state
 * (`gameBuild`), and it prints the major and the minor version with a wildcard, for example `1.13.*`.
 * It never prints the exact build. Reason: an exact value becomes stale at every game patch, so the
 * game then reads the mod as out of date, and the wildcard stays valid across patch updates. The
 * exact build stays in `.gamer-agent.local.json` for traceability only.
 *
 * Read-only: the tool reads `.gamer-agent.local.json`, and it never writes it. A missing or invalid
 * gameDir is a FAIL, and the agent then runs try_set_game_dir, which records the paths.
 *
 * Victoria 3 facts: the install scripts live in `<gameDir>/game/...`, and the vanilla mirror holds
 * the install root, so its scripts read as `game-scripts/vanilla/game/...`.
 */
import { readdirSync } from "node:fs";
import { join, relative } from "node:path";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { checkGameDir, pathsFor, readModRepoConfig, readState, vanillaScriptsDir, workshopMirrorDir } from "../lib/game-paths";
import { loadDumpNames } from "../lib/mod-semantics";

/** The label column width of the report. */
const LABEL_WIDTH = 22;
const row = (label: string, value: string): string => `${label.padEnd(LABEL_WIDTH)}${value}`;

/** The number of files under a directory, recursively. A missing directory has 0. */
function countFiles(dir: string): number {
  let n = 0;
  const walk = (d: string): void => {
    let entries;
    try {
      entries = readdirSync(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name === ".git") continue;
      if (e.isDirectory()) walk(join(d, e.name));
      else if (e.isFile()) n += 1;
    }
  };
  walk(dir);
  return n;
}

/** The number of directories under a directory, one level only. */
function countDirs(dir: string): number {
  try {
    return readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).length;
  } catch {
    return 0;
  }
}

/**
 * Turns the recorded build tag into the version value for the mod metadata: `1.13.11` becomes
 * `1.13.*`. It returns null when no tag is recorded, and it never returns the exact build.
 */
export function supportedGameVersion(build: string | null | undefined): string | null {
  if (typeof build !== "string") return null;
  const m = build.trim().match(/^(\d+)\.(\d+)\./);
  return m ? `${m[1]}.${m[2]}.*` : null;
}

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "get_game_info",
    label: "Get Game Info",
    description:
      "Reports the recorded game environment facts for Victoria 3 in one call: the game directory, the mod install directory, the Workshop directory, the supported game version, the script layout, whether each part of the script mirror is present and how many files it holds, whether docs/script_docs/ holds the dumps, and where the entry points are. It takes no arguments, it reads the runtime state and the workspace files, and it writes nothing.",
    promptSnippet: "Report the game paths, the supported version, the mirror state, and the dumps",
    promptGuidelines: [
      "Use get_game_info when you need the game paths, the version value for the mod metadata, the state of the script mirror, or whether the dumps are present. It answers all of them in one call.",
      "Use get_game_info instead of gathering the game version yourself. Write the returned `supportedGameVersion` into `supported_game_version`. Do not read `victoria3.exe`, and do not use its `VersionInfo`.",
      "get_game_info takes no arguments, and it writes nothing. If it returns FAIL, run try_set_game_dir first, which locates the game and records the paths.",
    ],
    parameters: Type.Object({}),
    async execute(_id, _params, _s, _u, ctx) {
      const cwd = ctx.cwd;
      const state = readState(cwd);
      const verdict = checkGameDir(typeof state.gameDir === "string" ? state.gameDir : null);
      if (!verdict.ok || !verdict.path) {
        return {
          content: [
            {
              type: "text",
              text:
                `FAIL: gameDir not recorded - ${verdict.reason ?? "no valid game directory is recorded"}.\n` +
                `NEXT: run try_set_game_dir with no arguments. It locates the game and records the paths.`,
            },
          ],
          details: { ok: false, code: verdict.code ?? "GAME_DIRECTORY_NOT_FOUND", wroteState: false },
        };
      }
      const gameDir = verdict.path;

      // The configuration gives the derived paths. The derived mod install path wins over the
      // recorded one, because the player can move the Documents directory after the tool recorded
      // it, and install_mod uses the derived path. This tool is read-only, so it does not repair
      // the record. The recorded Workshop path wins, because pathsFor does not report a missing one.
      let derived: { modInstallDir: string | null; workshopDir: string | null } | null = null;
      try {
        derived = pathsFor(gameDir, readModRepoConfig(cwd));
      } catch {
        derived = null;
      }
      const modInstallDir = derived?.modInstallDir ?? (state.modInstallDir as string | null | undefined) ?? null;
      const workshopDir = (state.workshopDir as string | null | undefined) ?? derived?.workshopDir ?? null;

      const build = typeof state.gameBuild === "string" ? state.gameBuild : null;
      const version = supportedGameVersion(build);

      // The mirror has two parts, and each one is reported as it really is. A count is a
      // measurement, so the row never claims that a part is absent when it is present.
      const vanillaDir = vanillaScriptsDir(cwd);
      const vanillaRulesDir = join(vanillaDir, "common");
      const vanillaFiles = countFiles(vanillaDir);
      const workshopDirMirror = workshopMirrorDir(cwd);
      const workshopMods = countDirs(workshopDirMirror);
      const workshopFiles = workshopMods > 0 ? countFiles(workshopDirMirror) : 0;
      const mirrorValue =
        vanillaFiles === 0
          ? "missing - run sync_game_scripts, then count again"
          : `vanilla ${vanillaFiles} file(s), ${countDirs(vanillaRulesDir)} folder(s) under common/; workshop ${workshopMods} mod(s), ${workshopFiles} file(s)`;

      // The dumps ship with the repository. `validate_mod` reads them, so a missing dump is worth a
      // NOTE: the name-level checks then degrade to a note instead of a report.
      const dumps = loadDumpNames(join(cwd, "docs", "script_docs"));
      const dumpValue = !dumps.dir
        ? "missing - see docs/script_docs/SOURCE.md"
        : dumps.missing.length > 0
          ? `partial - missing ${dumps.missing.join(", ")}. See docs/script_docs/SOURCE.md`
          : `effects ${dumps.counts.effects}, triggers ${dumps.counts.triggers}, modifiers ${dumps.counts.modifiers}, event targets ${dumps.counts.event_targets}`;

      const lines = [
        "PASS: game info",
        row("gameDir", gameDir),
        row("modInstallDir", modInstallDir ?? "(none - mod-repo.json declares no mod install path)"),
        row("workshopDir", workshopDir ?? "(none - no Workshop directory was found)"),
        row(
          "supportedGameVersion",
          version
            ? `${version}    (write this value into the mod metadata. Do not gather the version yourself)`
            : "(none - no build tag is recorded, so the version cannot be derived)",
        ),
        row("layout", `install: ${gameDir}/game/...`),
        row("", `vanilla:  ${relative(cwd, vanillaScriptsDir(cwd)).split("\\").join("/")}/...`),
        row("mirror", mirrorValue),
        row("dumps", dumpValue),
        row("entry points", "see docs/victoria3-modding-conventions.md section 7"),
      ];
      if (!version) {
        lines.push(
          "NOTE: no build tag is recorded for the game, so supportedGameVersion cannot be derived.",
          "NEXT: do not fall back to `1.*` - `validate_mod` warns on that loose form. Ask the player which game version the mod must support, and write a patch-level wildcard such as `1.13.*` only when the version is known.",
        );
      }
      return {
        content: [{ type: "text", text: lines.join("\n") }],
        details: {
          ok: true,
          gameDir,
          modInstallDir,
          workshopDir,
          supportedGameVersion: version,
          mirror: { vanillaFiles, vanillaCommons: countDirs(vanillaRulesDir), workshopMods, workshopFiles },
          dumps: { dir: dumps.dir, counts: dumps.counts },
          wroteState: false,
        },
      };
    },
  });
}
