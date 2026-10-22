# Victoria 3 mod workspace

**Victoria 3** (Paradox, Clausewitz/Jomini engine) modding environment. Mods are pure PDXScript text files. There is no compilation and no runtime SDK. The game is cross-platform (Windows, macOS, Linux). v1 locates it on Windows only, and macOS and Linux path discovery is TODO.

## Environment facts

This machine and this workspace hold these fixed facts. They prevent wasted turns.

- **Prefer `node` for scripts.** The product ships its own node, so every player machine has it. On this machine `python` is a Microsoft Store stub. It exits with `exit 49` and is a silent no-op. If python is truly needed, run `command -v py` first. If `py` is missing, fall back to `node` or `awk`.
- **Read scripts only from the vanilla scripts at `game-scripts/vanilla/`.** `sync_game_scripts` mirrors the install root there, so the game's own `game/` content reads as `game-scripts/vanilla/game/...`. The other part of the mirror, `game-scripts/workshop/`, holds other authors' mods. It is never evidence that a name exists. Victoria 3 mods are **flat**: a mod mirrors the game's `game/` directory (`common/`, `events/`, `gui/`, `localization/`, and the rest), with no `in_game/`+`main_menu/` split. Do not `grep` the real install directory while you develop. Installing a mod is a third place: `install_mod` writes to the Paradox launcher mod directory, `<user documents>/Paradox Interactive/Victoria 3/mod/`.
- **The name dumps ship with this repository**, in `docs/script_docs/`. They are the game's own name lists, and `validate_mod` reads them. [`docs/script_docs/SOURCE.md`](docs/script_docs/SOURCE.md) records the game version and the command that regenerates them. A name that the dump lists exists. A name that it omits is **not** proof of absence, because the game leaves some of them out. Check its definition in the vanilla scripts instead. A building, law, good, or technology id is not in the dump at all. The GUI data types dump is separate, in [`docs/data_types/`](docs/data_types/), and no tool reads it.
- **One read-only subagent ships here:** `mod-reviewer`, under `.pi/agents/`. It checks the soft rules that `validate_mod` cannot see, before you install. It does not write, so you apply every change. When you cannot dispatch it, work through section 10 of `docs/victoria3-modding-conventions.md` by hand.

## Directory map

- `docs/` — the knowledge layer. Start at [`docs/INDEX.md`](docs/INDEX.md) for the map. The modding conventions live **only** in [`docs/victoria3-modding-conventions.md`](docs/victoria3-modding-conventions.md). [`docs/mod-wiki/`](docs/mod-wiki/INDEX.md) is a wiki snapshot under CC BY-SA 3.0. Read it for a mechanism, an effect, or a directory's rules, and use it on demand. Do not edit it, and use its `SOURCE.md` to refresh the snapshot. [`docs/script_docs/`](docs/script_docs/SOURCE.md) holds the name dumps, which `validate_mod` reads. [`docs/data_types/`](docs/script_docs/SOURCE.md) holds the GUI data types dump.
- `game-scripts/` — the mirror that `sync_game_scripts` writes, and git ignores it. It has two parts. `vanilla/` is a copy of the install root, so the game's own scripts read as `game-scripts/vanilla/game/...`. `workshop/` holds one directory per mirrored Workshop mod. PDXScript has no self-describing API, so you cannot write a working override or `INJECT` without this context.
- `.pi/skills/` — the step guidance. The role skills are `setup-workspace`, `mod-creator`, and `mod-installer`. `how-to-speak` covers anything the player reads. `mod-page` covers a mod page. Each skill declares its own scope and trigger, and Pi keeps the descriptions in context.
- `.pi/extensions/` — the tools. The path tools are `try_set_game_dir`, `set_game_dir`, and `check_game_paths`. `get_game_info` reports the game version, the paths, the script layout, and whether the vanilla scripts are present. `check_runtime` and `install_runtime` cover a runtime, and Victoria 3 has none. The mod tools are `validate_mod` and `install_mod`. `sync_game_scripts` writes the mirror. Trust the capabilities and the side effects that each tool declares.
- `reference/` — read-only mod samples. `reference/example_mod/` is a runnable sample that passes `validate_mod`. v1 ships no real-world pattern mods.
- `scripts/` — maintainer scripts. `check-doc-refs.mjs` checks every Markdown link, every repository-root path in backticks, and that no agent-facing file points outside this repository. `test-semantics.mjs` and `test-tools.mjs` are the regression suites for the name-level checks and for the nine tools. `check-md-lines.mjs` checks that every prose block is one line. `measure-wiki-coverage.mjs` re-measures the share of dump names that the wiki snapshot mentions.
- `mod-repo.json` — the machine-readable game and environment declaration. `workshop.supported` declares whether this game has a Steam Workshop. `workshopDir` is a read-only reference, and installing does not use it.
- `your_mods/` — the mod output area. Write mods only here, as `your_mods/<ModName>/`.

## Runtime state file

`.gamer-agent.local.json` (**under this workspace directory**) is the single source of truth for path state. The tools in `.pi/extensions/` read and write it. **Only trust the copy in this workspace.** Other clones and leftover state can hold a same-named file. Those files lead to wrong conclusions. **"Ready" means the recorded values plus the tool result.** A directory that `ls` shows is not necessarily recorded. The path tools and `sync_game_scripts` read the recorded state. `validate_mod` reads the dumps and the mirror instead, so it works without a path record. Field meanings are in `.pi/skills/setup-workspace/SKILL.md`.

## Who decides

- **The agent proposes.** When the direction or a player choice is still open, state one concrete example and what it changes in the game.
- **The player decides.** The design and its numbers go into the mod after the player settles them, in the way `mod-page` and `mod-creator` set out.

## Session roles and write boundary

The session sets one of two roles. The agent does not choose the role.

- **Q&A (Game Helper):** read-only. Answer game-mechanics and mod API questions from `docs/`. The read-only tools are `check_game_paths`, `get_game_info`, `check_runtime`, `install_runtime`, and `validate_mod`. Do **not** write or edit a mod file, locate or record paths, or mirror the scripts into `game-scripts/`. Without a mirror, `validate_mod` reports the syntax checks and C2 only, and it says so.
- **Mod development:** write only under `your_mods/<ModName>/`. The session role and the binding decide who may write and which mod directory is writable. This file does not decide that. The path tools write `.gamer-agent.local.json`, and `sync_game_scripts` writes `game-scripts/`. Those writes prepare the workspace, and they are not a mod edit.

The repository owner maintains everything else (`docs/`, `.pi/`, `reference/`, `mod-repo.json`). Do not write there.

Every English string that reaches an agent follows [`docs/victoria3-modding-conventions.md`](docs/victoria3-modding-conventions.md) section 11.

## Validation

- Run `validate_mod` on `your_mods/<ModName>/` after every change, and clear every ERROR before you end the turn.
- Read the `WARN:` and `NOTE:` lines. A `PASS` line is not proof that the mod runs.
- Dispatch `mod-reviewer` before `install_mod`. It reads the `validate_mod` receipt, so it does not repeat those checks.
