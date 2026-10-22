---
name: mod-creator
description: The guide to writing a Victoria 3 (pdx-script) mod. Read it before you search or write. The order of work, the metadata fields, and `validate_mod`.
---

# Writing Victoria 3 mods (pdx-script)

A Victoria 3 mod is a directory of **pure PDXScript text files**: `.txt`, `.gui`, `.gfx`, `.asset`, and `.yml`. There is no compilation and no runtime SDK. Write the mod under `your_mods/<ModName>/`, then check the result with the `validate_mod` tool. All paths below are relative to the workspace root, not to the skill directory.

This skill provides domain method only, and it **grants no permissions**. Reading it does not allow you to create directories, to check or install runtimes, or to modify source files. The session role and its bound directory gate those actions.

## The order of work

Work in two stages. Stage 1 settles what the player wants, backed by research. Stage 2 writes the mod. Do not start stage 2 until the player settles the shape in step 5.

### Stage 1: Settle what the player wants

**Must know fact.** Victoria 3 is a C++ engine, and PDXScript is the layer on top of it. There is no self-describing API and no framework. The game's mechanics, its data, and its UI are text in the vanilla scripts: PDXScript, GUI layout, asset definitions, and localization. Those files are the whole surface you can mod. If a mechanism is absent from them, you cannot mod it.

0. **Load the modding context.** Run `sync_game_scripts`, then check that `game-scripts/vanilla/game/` exists. When it does not, the workspace is not ready: use `setup-workspace` first.
1. **Start with the wiki.** Read the routing table at the top of `docs/INDEX.md`, then the pages its row names, before your first search. A request that only sets a value skips this step.
2. **Pick where the objects go.** When the work stays inside one existing block, skip to step 5. The exception is a block in a `.gui` file: do steps 3 and 4 first. Otherwise read section 7 of `docs/victoria3-modding-conventions.md` and open one example in each directory that the row names. When the work needs no entry point, read `## Data kinds` below for the directory.
3. **Research the vanilla code.** Write down the mechanism family and the object name you expect. Run `grep -rln <keyword> game-scripts/vanilla/` first, and read the file list. Open the first file, then one or two more when they disagree. Search inside one file with `grep -n`. A name comes from `docs/script_docs/`. A definition, a field value, and a location key come from `game-scripts/vanilla/game/`. A building, law, good, or technology id is not in the dumps at all. Never search `game-scripts/workshop/` for evidence: that part holds other authors' mods.
4. **Research the UI window when the edit touches one.** A UI window is one window that the game shows to the player. The work has two separate questions: which mechanism you use, and what you write inside a UI window. Step 2 answers the first, and section 7 also names the directories that attach to an existing UI window. For the second, read that window's own `.gui` file and note the `block` you can fill.

   The readable copy of that file is under `game-scripts/vanilla/game/gui/`. A GUI `type` or `template` is first-loaded-wins, so an override of one has to load first. Read the block names before you write.
5. **Give one example shape.** Describe what the mod sets, its scope, and its shape, as one concrete example the player can edit. Settle that shape with the player, then wait. Do this even when the request looks specific. Put the shape on a page, following `mod-page`. Name the subject, not the option you suggest. Skip this step only when the player waives confirmation in words. An example is "start now, no confirmation". A choice between two options is not a waiver.

### Stage 2: Write the mod

6. **Read the modding conventions in full.** Read `docs/victoria3-modding-conventions.md`. It is the single source of truth. Section 7 gave you the entry mechanism in step 2, and the rest gives the rules you write under.
7. **Find the vanilla you want to modify, then pick the override form.** Open the file that holds the object, and read the object. Pick one form: a new object, an implicit replace, a keyword, or a full-file overwrite. Check that the target of a keyword exists in `game-scripts/vanilla/` before you write it. The forms, their limits, and the load order are in `docs/victoria3-modding-conventions.md` sections 1 and 2.
8. **Write the files.** Produce or modify a mod under `your_mods/<ModName>/`. Reuse `reference/example_mod/`. You may write only inside the bound mod directory. With no binding, call `create_mod_folder` with a `lower_snake_case` name, as the **Directory name** rule below defines it. Do not create a second binding when one already exists.
9. **Check the result, then dispatch the reviewer.** Run `validate_mod` on `your_mods/<ModName>/`, and fix every ERROR. Then dispatch `mod-reviewer` and pass it the `validate_mod` output, so it does not repeat those checks. Apply what it finds. Before you finish, ask: does this modification need an icon, a UI label (localization), a menu entry, a column, a filter, or a panel? Add what is missing. Reuse an existing in-game icon or asset when one fits, because you do not have to create new art. Do not wait for the player to ask about the icon.

   When you cannot dispatch, work through section 10 of `docs/victoria3-modding-conventions.md` by hand.

- **Directory name** (this repository's rule, enforced by `create_mod_folder`). The name is `lower_snake_case`: it starts with a lowercase letter, then holds only lowercase letters, digits, and underscores, at most 40 characters. Do **not** use hyphens: `fix_trade_companies`, not `fix-trade-companies`. It must not be a Windows reserved device name: `con`, `prn`, `aux`, `nul`, `com1` to `com9`, and `lpt1` to `lpt9`.

## Searching the vanilla scripts

A search that lists files is cheaper than one that lists every line. Long line output costs the most context.

- **Cap every listing.** One `head -20` per search. A long result means the keyword is too broad, so narrow the keyword instead of raising the cap.
- **Names and places are different questions.** A name, a scope, or a modifier category comes from `docs/script_docs/` or `docs/data_types/`. A file, a block, a field value, and a loc key come from the vanilla scripts.
- **The mod root is not the search root.** A vanilla search reads `game-scripts/vanilla/game/common/`. The mod writes to `common/` at its own root, because a mod mirrors the game's `game/` directory and adds no level of its own.
- **Check the form.** A hit tells you where the object is, not how to edit it. Section 1 of `docs/victoria3-modding-conventions.md` has the forms.

## Mod structure

```
<ModName>/
├── .metadata/
│   ├── metadata.json        # required, or the game errors
│   └── thumbnail.png        # launcher image (optional, may live only locally)
├── common/                  # content mirrors the game's game/ directory, flat
├── events/
├── gui/
├── localization/
└── thumbnail.png            # optional mod image
```

## metadata.json

`.metadata/metadata.json` holds one valid JSON object. Standard fields:

| Field | Rule |
|---|---|
| `name` | A non-empty string: the mod title that the player reads. |
| `id` | A non-empty string. The wiki requires the field. It states that the value must stay stable over time. Do not include a version number. Do not touch it on a rename. An empty `id` is a WARN, not an error. **This repository suggests** lowercase snake_case that matches the `your_mods/` directory name. That is not a game rule. `install_mod` uses the `your_mods/` directory name as the install directory name, so a match helps the player. `validate_mod` does **not** report an error when the two differ. |
| `version` | `x.x` or `x.x.x`, two or three parts. The wiki example is `1.1`, and it states that the launcher understands semantic versioning. |
| `supported_game_version` | A patch-level wildcard, for example `1.13.*`. An exact version such as `1.0.4` goes stale: this game updates its minor version often, and the game then flags the mod outdated. A loose `1.*` is a WARN. The wiki also states that `+` means "or higher". |
| `short_description` | A one-line summary. The field is **`short_description`**, not `description`. |
| `game_id` | `"victoria3"`. The launcher uses it to refuse a mod built for another game. An empty or absent value is a WARN. |
| `tags` | An array of strings. The wiki documents a maximum of 5, and states that the tags affect the local listing only. |
| `thumbnail` | `"thumbnail.png"`, optional. The field is **`thumbnail`**, not `picture`. |
| `relationships` | `[]`, optional. `rel_type` is one of `dependency`, `incompatible_with`, `load_before`, and `load_after`, and `resource_type` is `"mod"`. |
| `game_custom_data` | `{"multiplayer_synchronized": true}` normally. |

```json
{
  "name": "Elite Education Cost Tweak",
  "id": "elite_education_cost_tweak",
  "version": "1.0",
  "supported_game_version": "1.13.*",
  "short_description": "Adjusts expensive child education costs.",
  "tags": ["Gameplay", "Balance"],
  "thumbnail": "thumbnail.png",
  "relationships": [],
  "game_id": "victoria3",
  "game_custom_data": { "multiplayer_synchronized": true }
}
```

The wiki's own example carries `/* */` comments, so it is **not valid JSON**. Copy the fields, not the comments. `.metadata/thumbnail.png` is the launcher image, and the wiki documents it as optional. `validate_mod` warns when the `thumbnail` entry is missing, or when its value names no existing file.

`game_custom_data.replace_paths` is not in the wiki snapshot, and this repository has not verified it. Prefer a full-file overwrite, which the wiki states. See convention section 1.

## Localization YAML

The rules and the reasons are in `docs/victoria3-modding-conventions.md` section 3.

A rewrite of the file drops its BOM, and the game then ignores the file in silence. Restore it with `printf '\xEF\xBB\xBF' | cat - <file> > tmp && mv tmp <file>`.

## The validate_mod tool

Call `validate_mod` with `modDir = your_mods/<ModName>/`.

- `PASS: <name> is valid - syntax, conventions, and the name-level checks listed below. Scope, type, and value domains are not checked.` means the static checks passed. A run with warnings adds ` (N warning(s))` to that line. It does not mean the mod ran in the game.
- On failure the first line is `FAIL: <name> has N error(s), M warning(s)`. Each `ERROR:` line after it names the file and the field. Read those lines instead of looking for a path in `NEXT:`. Fix every ERROR, and do not modify another mod.
- The tool checks the syntax and the conventions, and then three name-level classes:
  - that the target of a `REPLACE:`/`INJECT:` keyword exists in the same `common/<directory>/`, in this mod or in `game-scripts/vanilla/`.
  - that an effect or trigger name inside an effect or trigger block is not a near miss for a name in `docs/script_docs/`.
  - that a new decision, character trait, journal entry, or journal entry group has its localization keys.
- A name-level finding is a `WARN:` or a `NOTE:`, never an ERROR. Read them. They are evidence that a name is wrong, not proof of a load failure.
- The tool does not check a scope, a type, a value domain, or a GUI resolution order. Section 10 of the conventions lists what to check by hand.
- Use `how-to-speak` to report the result to the player.

## Common errors

A failing run starts with `FAIL: <name> has N error(s), M warning(s)`, then one `ERROR: <file>: <message>` line per error, then the `WARN:` lines. The messages below are the common ones, quoted as the tool prints them. The text after each one is the fix.

- `ERROR: .metadata/metadata.json: missing .metadata/metadata.json`: create the file with the standard fields above.
- `invalid JSON (<parser message>)` or `metadata.json top-level value must be an object`: fix the JSON. The wiki example carries comments, so a copy of it fails here.
- `version '<v>' is not semver x.x or x.x.x`: use `x.x` or `x.x.x`.
- `missing UTF-8 BOM (game ignores localization files without a BOM)`: save the file as UTF-8 **with BOM** (`EF BB BF`).
- `filename must end with '_l_<language>.yml'`: rename the file, and make the suffix match its language directory.
- `line N: expected a language header 'l_<lang>:' as the first content line`: the first content line must be `l_<lang>:`.
- `malformed localization line (expected '  key: "value"' or '  key:0 "value"')`: write ` key: "value"` with a closing double quote on the same line.
- `unbalanced braces: extra '}'` (ERROR) or `unbalanced '"' (unterminated string)` (ERROR): fix the balance. An unclosed `{` at end of file is only a **WARN** (`unbalanced braces: N '{' never closed`). Vanilla itself ships such files in `common/dna_data/`.
- `ERROR: ... is nested (depth N) and has no effect`: the keyword is not at the file top level. Move the whole object up. A nested keyword is a silent no-op in Victoria 3, which is why it is an error. A container directory such as `common/genes/` can be replaced only as a whole.
- `WARN: semantic: ... names no top-level object in common/<dir>`: the keyword target is absent. Check the spelling against `game-scripts/vanilla/game/common/<dir>/`, or use `TRY_`/`_OR_CREATE` when the target can be absent.
- `WARN: semantic: ... is not a known effect, trigger, or modifier name. Did you mean '<name>'?`: a near miss inside an effect or trigger block. Take the suggestion or fix the name.

## Data kinds (what to add, and where it lives)

Read section 7 of `docs/victoria3-modding-conventions.md` for the entry mechanism, and open one example in the directory that row names. Then read the table below, which names the directory for each kind of object a mod can add.

The game holds **135 directories and one file** (`achievement_groups.txt`) under `game-scripts/vanilla/game/common/`. Count them before you trust the number:

```bash
ls -p game-scripts/vanilla/game/common | grep -c /
```

A mod can add its own content to one of those directories. The common ones are:

| Kind | Directory | One real example |
| --- | --- | --- |
| scripted effects | `common/scripted_effects/` | `0000_debug_effects.txt` |
| scripted triggers | `common/scripted_triggers/` | `00_ai_triggers.txt` |
| script values | `common/script_values/` | `00_diplomacy_values.txt` |
| scripted rules | `common/scripted_rules/` | `00_scripted_rules.txt` |
| laws | `common/laws/` (with `common/law_groups/`) | `00_army_model.txt` |
| pop types | `common/pop_types/` | `academics.txt` |
| production methods | `common/production_methods/` (with `common/production_method_groups/`) | `00_dummy.txt` |
| buildings | `common/buildings/` (with `common/building_groups/`) | `01_industry.txt` |
| goods | `common/goods/` | `00_goods.txt` |
| technologies | `common/technology/technologies/` (a container directory, and `eras/` sits beside it) | `10_production.txt` |
| institutions | `common/institutions/` | `00_institutions.txt` |
| ideologies | `common/ideologies/` | `00_ig_ideologies.txt` |
| interest groups | `common/interest_groups/` | `00_armed_forces.txt` |
| modifier type definitions | `common/modifier_type_definitions/` | `00_modifier_types.txt` |

A few of those directories ship a `readme.md` that lists the fields (`common/laws/` does). Victoria 3 ships far fewer of them than you might expect: read one vanilla file in the directory instead. When a task only sets values inside an existing block, there is no new definition to place.

## Reference

- A runnable sample, which must pass `validate_mod`: `reference/example_mod/`. `reference/` holds only that one in v1. The real-world pattern mods are not ported yet.
- Knowledge-layer navigation, and what to load when: `docs/INDEX.md`. Its lookup hierarchy names the authoritative source for each question.
- The game overview: `docs/game.md`.
- The modding conventions, the single source of truth: `docs/victoria3-modding-conventions.md`.

## Related skills

- The paths are not ready. Use `setup-workspace`. Victoria 3 has no runtime to install.
- Getting the mod into the game, which uses the Paradox mod directory. Use `mod-installer`.
