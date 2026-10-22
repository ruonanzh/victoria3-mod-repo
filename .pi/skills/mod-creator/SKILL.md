---
name: mod-creator
description: The guide for writing and modifying Victoria 3 (pdx-script) mods. Always read it first, before you search the vanilla scripts, before you read the reference mods, and before your first write. Covers the order of work, the mod structure, the `metadata.json` fields, localization YAML, PDXScript and GUI syntax, `INJECT:` and `REPLACE:` overrides, load order and naming, the entry mechanisms, the `validate_mod` output, and the semantic lookup path.
---

# Writing Victoria 3 mods (pdx-script)

A Victoria 3 mod is a directory of **pure PDXScript text files**: `.txt`, `.gui`, `.gfx`, `.asset`, and
`.yml`. There is no compilation and no runtime SDK. Write the mod under `your_mods/<ModName>/`, then
check the result with the `validate_mod` tool.
All paths below are relative to the workspace root, not to the skill directory.

This skill provides domain method only, and it **grants no permissions**. Reading it does not allow
you to create directories, to check or install runtimes, or to modify source files. The session role
and its bound directory gate those actions.

## The order of work

Work in two stages. Stage 1 settles what the player wants, backed by research. Stage 2 writes the
mod. Do not start stage 2 until the player confirms the shape in step 5.

### Stage 1: Settle what the player wants

**Must know fact.** Victoria 3 is a C++ engine, and PDXScript is the layer on top of it. There is no
self-describing API and no framework. The game's mechanics, its data, and its UI are text in the
vanilla scripts: PDXScript, GUI layout, asset definitions, and localization. Those files are the whole
surface you can mod. If a mechanism is absent from them, you cannot mod it.

0. **Load the modding context.** Run `sync_game_scripts`, then check that
   `game-scripts/vanilla/game/` exists. When it does not, the workspace is not ready: use
   `setup-workspace` first.
1. **If the request is about a game system, start with the wiki.** Compare the request with the
   routing table at the top of `docs/INDEX.md`. Take the pages that row names, and read them. A
   request that only changes a value skips this step.
2. **Pick where the objects go.** When the change stays inside one existing block, skip to step 5,
   except when that block is in a `.gui` file: do steps 3 and 4 first. A change can need an entry
   point, an existing data directory, or both. Read section 7 of
   `docs/victoria3-modding-conventions.md` and pick the row that matches the feature. Read one example
   in the directory that row names. When the change needs no entry point, go to `## Data kinds` below for the directory. When the row is unclear, or no listed kind matches, run the search in `## Searching the vanilla scripts` and open its first file.
3. **Research the vanilla code.** Find the objects your change touches, and how they connect. Before
   you search, write down the mechanism family and the object name you expect. Do not guess from
   names alone. Then run `grep -rln <keyword> game-scripts/vanilla/` and open the first file. `## Searching the vanilla scripts` gives the procedure.
   A name that the dumps in `docs/script_docs/` list exists. A name that they omit is not proof of
   absence, because the game leaves some names out, so check its definition in
   `game-scripts/vanilla/game/`. An object definition, a field value, an `INJECT:` target, or a loc key
   comes from `game-scripts/vanilla/game/`. A building, law, good, or technology id is not in the dumps
   at all. Never grep `game-scripts/workshop/` for evidence: that part holds other authors' mods.
4. **Research the UI window when the change touches one.** A UI window is one window that the game
   shows to the player. This change has two separate questions: which mechanism you use, and what you
   change inside a UI window. Step 2 answers the first, and section 7 also names the directories that
   attach to an existing UI window. For the second, read that window's own `.gui` file and note the
   `block` you can fill.

   The readable copy of that file is under `game-scripts/vanilla/game/gui/`. A GUI `type` or
   `template` is first-loaded-wins, so an override of one has to load first. Read the block names
   before you write.
5. **Confirm the mod shape with the player.** Describe what the mod changes, its scope, and its
   shape. Then wait for the player to confirm. Do this **even when the request looks specific**.
   Skip it only when the player says to start, for example "start now, no confirmation".

### Stage 2: Write the mod

6. **Read the modding conventions in full.** Read `docs/victoria3-modding-conventions.md`. It is the
   single source of truth. Section 7 gave you the entry mechanism in step 2, and the rest gives the
   rules you write under.
7. **Find the vanilla you want to modify, then pick the override form.** Open the file that holds the
   object, and read the object. Section 1 of the conventions has the forms and their limits. Pick
   one:
   - a new object
   - an implicit replace, in a directory without keywords
   - one of the `INJECT:`/`REPLACE:` keywords, or its `TRY_` or `_OR_CREATE` variant
   - a full-file overwrite

   Check that the target of a keyword exists in `game-scripts/vanilla/` before you write it.
8. **Write the files.** Produce or modify a mod under `your_mods/<ModName>/`. Reuse
   `reference/example_mod/`. You may write only inside the bound mod directory. With no binding, call
   `create_mod_folder` with a `lower_snake_case` name, as the **Directory name** rule below defines
   it. Do not create a second binding when one already exists.
9. **Check the result, then dispatch the reviewer.** Run `validate_mod` on
   `your_mods/<ModName>/`, and fix every ERROR. Then dispatch `mod-reviewer` and pass it the
   `validate_mod` output, so it does not repeat those checks. Apply what it finds. Before you finish,
   ask: does this modification need an icon, a UI label (localization), a menu entry, a column, a
   filter, or a panel? Add what is missing. Reuse an existing in-game icon or asset when one fits,
   because you do not have to create new art. Do not wait for the player to ask about the icon.

   When you cannot dispatch, work through section 10 of `docs/victoria3-modding-conventions.md` by hand.

- **Directory name** (this repository's rule, enforced by `create_mod_folder`). The name is
  `lower_snake_case`: it starts with a lowercase letter, then holds only lowercase letters, digits,
  and underscores, at most 40 characters. Do **not** use hyphens: `fix_trade_companies`, not
  `fix-trade-companies`. It must not be a Windows reserved device name: `con`, `prn`, `aux`,
  `nul`, `com1` to `com9`, and `lpt1` to `lpt9`.

## Searching the vanilla scripts

A search that lists files is cheaper than one that lists every line. Long line output costs the most context.

- **List files first.** Run `grep -rln <keyword> game-scripts/vanilla/`. Open the first file, then one or two more when they disagree. Search inside one file with `grep -n`.
- **Cap every listing.** One `head -20` per search. A long result means the keyword is too broad, so narrow the keyword instead of raising the cap.
- **Names and places are different questions.** A name comes from `docs/script_docs/`, and a GUI data model name comes from `docs/data_types/`. A definition, a field value, an `INJECT:` target, and a loc key come from `game-scripts/vanilla/game/`.
- **The mod root is not the search root.** A vanilla search reads `game-scripts/vanilla/game/common/`. The mod writes to `common/` at its own root, because a mod mirrors the game's `game/` directory and adds no level of its own.
- **The keyword belongs at the file top level.** Victoria 3 reads `REPLACE:` and `INJECT:` there. A nested keyword is a silent no-op, and `validate_mod` reports it as an `ERROR`.
- **Check the form.** A hit tells you where the object is, not how to modify it. Section 1 of `docs/victoria3-modding-conventions.md` has the forms.

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
| `id` | A non-empty string. The wiki requires the field and states that the value must stay stable over time: do not include a version number, and do not change it on a rename. **This repository suggests** lowercase snake_case that matches the `your_mods/` directory name. That is not a game rule. `install_mod` uses the `your_mods/` directory name as the install directory name, so a match helps the player. `validate_mod` does **not** report an error when the two differ. |
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

The wiki's own example carries `/* */` comments, so it is **not valid JSON**. Copy the fields, not
the comments. `.metadata/thumbnail.png` is the launcher image, and the wiki documents it as optional.
`validate_mod` warns when the `thumbnail` entry is missing, or when its value names no existing file.

`game_custom_data.replace_paths` is not in the wiki snapshot, and this repository has not verified
it. Prefer a full-file overwrite, which the wiki states. See convention section 1.

## Localization YAML

The files are `localization/<lang>/*.yml`, under the mod root. The directory name is spelled with a
z, and a misspelling is a documented failure mode.

- **Write the file as UTF-8 with BOM** (`EF BB BF`) in the call that creates it: start the content
  with the BOM character. A later rewrite of the file drops the BOM, and the game then ignores the
  file. That failure is fatal, not cosmetic. To add the BOM to a file that already
  exists, use: `printf '\xEF\xBB\xBF' | cat - <file> > tmp && mv tmp <file>`.
- The filename must end with `_l_<language>`, which matches the language directory.
- The first content line is `l_<lang>:`, and it must match the directory.
- An entry is ` key: "value"` or ` key:0 "value"` with an explicit version. The value starts
  and ends with a double quote. An inner `"` and a doubled `""` are legal, and the engine accepts
  them in the vanilla files. A value with no closing `"` on its line is an error. Keep the `[` and
  `]` placeholders balanced: `validate_mod` does not check that, and an unbalanced placeholder breaks
  the string at run time.
- One file must not hold duplicate keys.
- To override a vanilla loc key, use a `replace/` subdirectory:
  `<lang>/replace/overwriting_l_<lang>.yml`. Keys there overwrite identical keys elsewhere.
- Every string the player reads is a key. Do not write a display string into the script.

## PDXScript and GUI

The `.txt`, `.gui`, `.gfx`, and `.asset` files live under the mod root (flat, mirroring the game's `game/` directory).

- The encoding is UTF-8. Keep the `{` and `}` balanced, and keep the `"` balanced. A `#` starts a
  line comment outside a string, and `#` is literal inside a string. A GUI string can span several
  lines.
- The `INJECT:` and `REPLACE:` keywords go at the **file top level** only, in the form
  `KEYWORD:key = {`. A scalar value is also legal where the object itself is a scalar, for example
  `REPLACE:amenability = 50` in `common/script_values/`. The wiki allows no other level, and no real
  mod nests one: a container directory such as `common/genes/` can be replaced only as a whole.

## Overriding vanilla

Three mechanisms exist. The reason and the edge cases are in
`docs/victoria3-modding-conventions.md`.

1. **Direct file overwrite.** A file with the same path and filename replaces the vanilla file
   entirely. This is brittle across patches.
2. **Implicit replace.** In a directory that does not use the keywords, the later-loaded top-level
   object with the same name wins.
3. **The `INJECT:` and `REPLACE:` keywords.** A gated directory, which is most `common/`
   subdirectories, requires a keyword to modify an existing object. Implicit replace does not work
   there.

| Keyword | Effect |
|---|---|
| `INJECT:` or `REPLACE:` | Append or replace. The game errors when the object does not exist. |
| `TRY_INJECT:` or `TRY_REPLACE:` | The same, without the error when the object is absent. |
| `INJECT_OR_CREATE:` or `REPLACE_OR_CREATE:` | The same, and the game creates the object when it is absent. |

```txt
REPLACE:expensive_in_depth_education = {
    # replaces the vanilla block instead of duplicating the key
}
```

**Rule of thumb.** Prefer additive new objects. Use `INJECT:` or `REPLACE:` for a surgical
modification in a gated directory. Reserve a full-file overwrite for a modification to most of a
file. The keyword works in a documented list of directories, and the list is community-maintained.
Two traps that the wiki states: an `INJECT:` does nothing when that block type already exists in the
entry, and an `INJECT:` of a multi-occurrence block appends a duplicate. Section 1 of the conventions
has the list and the exception for scripted effects and triggers.

## Load order and naming

- Files load in **ASCII order**: `00_foo.txt` before `01_bar.txt`. A file in a subdirectory loads
  after the files in the parent directory.
- Prefix idioms: `00_` forces an early load, and `zz_`, `98_`, or `99_` forces a late load. In a
  directory without keywords the later definition wins, so a late prefix is how an override wins.
- **GUI and events are the exception: the FIRST loaded definition wins.** A `type` or `template`
  clash across mods is decided by **mod load order** (the playlist position), not by filename, and a
  later mod **cannot** overwrite an earlier one. The same holds for `events`. A late `zz_` prefix does
  **not** win a GUI `type` or `template`, it loses. To replace one of those, you must be the mod that
  loads first, and a full-file overwrite is the only reliable route.
- The mod directory name is `lower_snake_case`. Do not leave scratch files in the mod directory:
  `temp_*`, `_tmp_*`, and editor backups.

## The validate_mod tool

Call `validate_mod` with `modDir = your_mods/<ModName>/`.

- `PASS: <name> is valid` means the static checks passed. It does not mean the mod ran in the game.
- `FAIL: <reason>` gives one reason per line, in English. Each `ERROR:` line names the file and the
  field, so read those lines instead of looking for a path in `NEXT:`. Fix every ERROR, and do not
  modify another mod.
- The tool checks the syntax and the conventions, and then three name-level classes:
  - that the target of a `REPLACE:`/`INJECT:` keyword exists in the same `common/<directory>/`, in
    this mod or in `game-scripts/vanilla/`;
  - that an effect or trigger name inside an effect or trigger block is not a near miss for a name in
    `docs/script_docs/`;
  - that a new decision, character trait, journal entry, or journal entry group has its localization
    keys.
- A name-level finding is a `WARN:` or a `NOTE:`, never an ERROR. Read them. They are evidence that a
  name is wrong, not proof of a load failure.
- The tool does not check a scope, a type, a value domain, or a GUI resolution order. Section 10 of
  the conventions lists what to check by hand.
- Use `how-to-speak` to report the result to the player.

## Common errors

A failing run starts with `FAIL: <name> has N error(s), M warning(s)`, then one `ERROR: <file>: <message>`
line per error, then the `WARN:` lines. The messages below are the common ones, quoted as the tool
prints them. The text after each one is the fix.

- `ERROR: .metadata/metadata.json: missing .metadata/metadata.json`: create the file with the
  standard fields above.
- `metadata.json is not valid JSON` or `not a JSON object`: fix the JSON. The wiki example carries
  comments, so a copy of it fails here.
- `version '<v>' is not semver x.x or x.x.x`: use `x.x` or `x.x.x`.
- `missing UTF-8 BOM (game ignores localization files without a BOM)`: save the file as UTF-8
  **with BOM** (`EF BB BF`).
- `filename must end with '_l_<language>.yml'`: rename the file, and make the suffix match its
  language directory.
- `line N: expected a language header 'l_<lang>:' as the first content line`: the first content line
  must be `l_<lang>:`.
- `malformed localization line (expected '  key: "value"' or '  key:0 "value"')`: write
  ` key: "value"` with a closing double quote on the same line.
- `unbalanced braces: extra '}'` (ERROR) or `unbalanced '"' (unterminated string)` (ERROR): fix the
  balance. An unclosed `{` at end of file is only a **WARN** (`unbalanced braces: N '{' never closed`),
  because vanilla itself ships such files in `common/dna_data/`.
- `ERROR: ... is nested (depth N) and has no effect`: the keyword is not at the file top level. Move
  the whole object up. A nested keyword is a silent no-op in Victoria 3, which is why it is an error,
  and a container directory such as `common/genes/` can be replaced only as a whole.
- `WARN: semantic: ... names no top-level object in common/<dir>`: the keyword target is absent. Check
  the spelling against `game-scripts/vanilla/game/common/<dir>/`, or use `TRY_`/`_OR_CREATE` when the
  target can be absent.
- `WARN: semantic: ... is not a known effect, trigger, or modifier name. Did you mean '<name>'?`: a
  near miss inside an effect or trigger block. Take the suggestion or fix the name.

## Data kinds (what to add, and where it lives)

Read section 7 of `docs/victoria3-modding-conventions.md` for the entry mechanism, and open one example in the directory that row names. Then read the table below, which names the directory for each kind of object a mod can add.

The game holds **135 directories and one file** (`achievement_groups.txt`) under
`game-scripts/vanilla/game/common/`. Count them before you trust the number:

```bash
ls -p game-scripts/vanilla/game/common | grep -c /
```

A mod can add its own content to one of those directories. The common ones are:

| Kind | Directory | One real example |
| --- | --- | --- |
| scripted effects | `common/scripted_effects/` | (see the vanilla files) |
| scripted triggers | `common/scripted_triggers/` | (see the vanilla files) |
| script values | `common/script_values/` | (see the vanilla files) |
| scripted rules | `common/scripted_rules/` | (see the vanilla files) |
| laws | `common/laws/` (with `common/law_groups/`) | (see the vanilla files) |
| pop types | `common/pop_types/` | (see the vanilla files) |
| production methods | `common/production_methods/` (with `common/production_method_groups/`) | (see the vanilla files) |
| buildings | `common/buildings/` (with `common/building_groups/`) | (see the vanilla files) |
| goods | `common/goods/` | (see the vanilla files) |
| technologies | `common/technology/technologies/` (a container directory, and `eras/` sits beside it) | (see the vanilla files) |
| institutions | `common/institutions/` | (see the vanilla files) |
| ideologies | `common/ideologies/` | (see the vanilla files) |
| interest groups | `common/interest_groups/` | (see the vanilla files) |
| modifier type definitions | `common/modifier_type_definitions/` | (see the vanilla files) |

A few of those directories ship a `readme.md` that lists the fields (`common/laws/` does). Victoria 3
ships far fewer of them than you might expect: read one vanilla file in the directory instead. When a
task only changes values inside an existing block, there is no new definition to place.

## Semantic lookup path

The lookup hierarchy, which names the authoritative source for each question, is in `docs/INDEX.md`.

## Reference

- A runnable sample, which must pass `validate_mod`: `reference/example_mod/`.
- `reference/` holds only `example_mod/` in v1 (the real-world pattern mods are not ported yet).
- Knowledge-layer navigation, and what to load when: `docs/INDEX.md`.
- The game overview: `docs/game.md`.
- The modding conventions, the single source of truth: `docs/victoria3-modding-conventions.md`.

## Related skills

- The paths are not ready. Use `setup-workspace`. Victoria 3 has no runtime to install.
- Getting the mod into the game, which uses the Paradox mod directory. Use `mod-installer`.
