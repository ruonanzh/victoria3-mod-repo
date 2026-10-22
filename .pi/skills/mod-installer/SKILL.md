---
name: mod-installer
description: Install a Victoria 3 mod into the Paradox mod directory with the `install_mod` tool. Covers the install directory name, in-place updates on a re-install, the `<directory name>_pimod` fallback for an occupied target, and the transactional replace. Also covers the steps that make the mod visible and enabled. Read it when the player wants the mod in the game, visible in the launcher, or updated.
---

# Install a mod into the game (Victoria 3)

`install_mod` copies a mod into the **Paradox mod directory** (`<userDocuments>/Paradox Interactive/Victoria 3/mod`). The path comes from `mod-repo.json`, and `try_set_game_dir` records the derived value. The tool does not locate the game itself. If no path is recorded, run `try_set_game_dir` with no arguments first. A missing target directory is not an error. It is the normal state on a new machine, and the tool creates it.

## Rules

- **The installed directory name equals the `your_mods/` directory name.** This repository suggests that the name matches `metadata.id`. The name is therefore always a single path segment, so the tool cannot write outside the game directory. The player sees the same directory name in the launcher as in the workspace.
- **A re-install updates in place.** The tool identifies its own previous install through the workspace-side record `your_mods/<mod name>/.pi-mod.json`, which holds `name` and `installedDir`.
- **Another mod owns the target directory.** The tool does not overwrite it. It installs as `<directory name>_pimod`. The installed copy keeps its own `metadata.json`. Tell the player the directory name that the tool used. The in-game title `name` and the `id` stay the same.
- **The replace is transactional.** The tool moves the old copy aside instead of deleting it. It deletes that copy after the new copy lands. If the new copy fails, the old version is still there.

## Review before the install

Run `validate_mod` first, and clear every ERROR. Then dispatch `mod-reviewer` with the planned files and the `validate_mod` receipt. It reports the semantics that `validate_mod` does not check.

- `PASS`: install.
- `WARN`: tell the player the risk, then install.
- `FAIL`: correct the mod and run `validate_mod` again. The verdict does not block the install, so install only when the player agrees.

Skip this step when you write no script file. When the `subagent` tool is not available, work through the last section of `docs/victoria3-modding-conventions.md` by hand.

## After the install

An `install_mod` success does not mean the game loaded or enabled the mod. Report the three states separately: copied into the mod directory, visible in the launcher, and active in the game. The player must enable the mod in the launcher **playlist**. Give these steps:

1. Open the Paradox launcher for Victoria 3.
2. Open **Playsets**, and select the playset you want, or create one.
3. Find the mod by the name in its `metadata.json`, and tick it on.
4. Press **Play** from the launcher. The game restarts, and the mod loads from that playlist.

Steam does not enable it. A mod in the mod folder is a candidate, and nothing more. The playlist is what the game reads.

## Related skills

- The paths are not ready. Use `setup-workspace`. `try_set_game_dir` ensures the paths, and `check_game_paths` checks them without recording.
- The mod content itself: `metadata.json`, localization, and PDXScript. Use `mod-creator`.
