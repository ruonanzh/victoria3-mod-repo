# Victoria 3 modding conventions (cheat-sheet)

A committed, retrieval-oriented reference for writing Victoria 3 mods. It explains the reason behind the
rules that `validate_mod` enforces. It also explains the load-order and override semantics that the
tool cannot check on its own. This is the **knowledge layer**: read it for guidance. It runs and
enforces nothing.

- Enforcement lives in `.pi/extensions/mod-lint.ts` (the `validate_mod` tool).
- This document is the **single source of truth** for the modding rules. `AGENTS.md` and
  `.pi/skills/mod-creator/SKILL.md` reference it instead of repeating the rules.
- The boundaries and the mandatory `validate_mod` step live in [`AGENTS.md`](../AGENTS.md). The
  step-by-step procedure, with the product shapes and the `validate_mod` usage, is in
  [`../.pi/skills/mod-creator/SKILL.md`](../.pi/skills/mod-creator/SKILL.md).
- v1 ships no game-generated dumps (the `script_docs` / `dump_data_types` console commands produce
  them, and they are not regenerated yet). For exact semantic names, grep `game-scripts/`, and read
  [`mod-wiki/`](mod-wiki/INDEX.md) for a mechanism or a definition.
- A mod is PDXScript text only. The game engine is C++, and it is out of scope. A mod cannot add
  behavior that the engine does not expose.

> Sources: the Victoria 3 wiki grounds the mechanics below. Online pages:
> [Mod files load order](https://vic3.paradoxwikis.com/Mod_files_load_order),
> [Mod structure](https://vic3.paradoxwikis.com/Mod_structure),
> [Localization](https://vic3.paradoxwikis.com/Localization). The wiki flags some pages as
> "requires verification". Where the precedence is version-sensitive, this page notes it.

## 1. Overriding vanilla: file overwrite, implicit replace, and INJECT:/REPLACE:

Victoria 3 loads the mod files on top of the vanilla files. Three override mechanisms exist. See
`Mod_files_load_order`, sections "Overview" and "Inject and replace".

- **Direct file overwrite:** a mod file with the *same path and filename* as a base-game/DLC/other-mod
  file takes precedence. The lower-in-playlist mod wins, and the losing files are treated "as if they
  did not exist." Whole-file, so anything you omit is lost - brittle across patches.
- **Implicit replace:** in folders that do **not** use the keyword system, if two files define the
  same top-level object, the **later-loaded definition wins** (the object is redefined). This works
  only outside keyword folders.
- **`INJECT:` / `REPLACE:` keywords:** most `common/` folders (and some others) require
  a keyword to modify an existing object without a full file overwrite. Implicit replace does **not**
  work in these folders. Keywords must sit at the **top level of the file**, directly before a database
  entry. The wiki states the rule, and gives a nested example that does **not** work (an `INJECT:`
  inside another `INJECT:`). The corpus agrees: Victoria 3 vanilla uses the keywords **0 times**, and
  2,318 uses across 10 downloaded Workshop mods are **all** at the top level, with none nested. A
  container folder such as `common/genes/` (`color_genes = { hair_color = { … } }`) can therefore be
  replaced only as a whole container, not entry by entry:

  ```txt
  REPLACE:color_genes = { … }        # the whole container
  ```

  | Keyword | Effect |
  | --- | --- |
  | `INJECT:` | Append script to the end of an existing entry. The game errors if the entry does not exist. |
  | `REPLACE:` | Replace an existing entry. The game errors if the entry does not exist. |
  | `TRY_INJECT:` or `TRY_REPLACE:` | The same, but the game does not error if the entry does not exist. |
  | `INJECT_OR_CREATE:` or `REPLACE_OR_CREATE:` | The same, but the game creates the entry if it does not exist. |

  ```txt
  REPLACE:some_vanilla_key = {
      # replaces the vanilla `some_vanilla_key` entirely
  }
  INJECT:some_vanilla_key = {
      # appends to the existing vanilla `some_vanilla_key`
  }
  ```

**Rule of thumb:** prefer additive new objects. Use `INJECT:`/`REPLACE:` (or the `TRY_`/`_OR_CREATE`
variants) for surgical changes in keyword folders. Reserve full-file overwrite for when you must
change most of a file. `validate_mod` treats a keyword nested inside another block as an **ERROR**,
because the game ignores it: the wiki documents top-level-only, and no real mod nests one. Whether a
top-level object redefines a vanilla name **without** a keyword is a soft rule the agent checks with
`grep`/`read` against `game-scripts/`.

**Folder gating and special rules (Victoria 3).** The `INJECT:`/`REPLACE:` keywords work only in a
documented folder list (~130 folders: most `common/*`, some `gfx/*`, `map_data/state_regions`,
`music`, `notifications`, `modifier_icons`, `gui_animations`, `sound/persistent_objects`). Everything
else falls back to file overwrite or implicit replace.

The wiki's `Mod compatibility` page then has an `Exceptions` section. These six are quoted from it:

- **GUI `type`/`template`**: the **first** loaded definition wins; a later mod cannot overwrite one.
  The `types` container is not unique and has no overriding logic at all.
- **`events`**: the same first-loaded-wins rule. Sub-folders of `events/` load after the main folder.
- **`defines`**: per-entry merge — `NSomeCategory = { A_SINGLE_DEFINE = X }` replaces that one define,
  not the whole category.
- **`on_actions`**: a mod may append `on_actions`, `events`, and `random_events` to an existing hook,
  but it **cannot** replace that hook's `trigger` or `effect` block without overwriting the whole file.
- **`localization`**: single keys are overridden only in `localization/<lang>/replace/`. A later
  loaded key does **not** overwrite an earlier one outside that folder.
- **`dna_data`**: definitions do not overwrite each other, they produce duplicates. Only a file
  overwrite replaces a character's DNA.

Two more notes that the wiki states elsewhere on the same page (not in its `Exceptions` list):

- **`scripted_effects` / `scripted_triggers` / `scripted_rules`**: the folder list marks them
  `REPLACE only`; an `INJECT:` silently acts as `REPLACE:`. (`script_values` is gated but carries no
  such mark.)
- **`genes`**: a container folder (`color_genes = { hair_color = { … } }`). Because the keyword works
  at the file top level only, a mod can replace the whole container, not one gene inside it.

**Whole-path replacement.** To drop a vanilla folder entirely, list it in
`game_custom_data.replace_paths` inside `metadata.json` (an array of paths, for example
`"replace_paths": ["common/buildings", "events"]`). There is no `.mod` top-level `replace_path`
directive in Victoria 3.

## 2. Load order (ASCII order, and a subdirectory after its parent)

Per `Mod_files_load_order`, section "File loading order":

- Files load in **ASCII order** by name: `00_foo.txt` before `01_bar.txt`. Vanilla compared with mod
  does not matter for ordering. It does matter for overwrite precedence, which section 1 covers.
- **A file in a subdirectory loads after the files in the parent directory**, regardless of ASCII
  order. Example: `events/zz_example.txt` loads before `events/example/00_example.txt`.
- **Game objects** apply in the order the files define them. Multiple files concatenate as if they
  were one file.
- Ordering-prefix idioms. They tune the ASCII position only, and do not change which definition wins
  semantically.
  - `00_...` forces an **early** load, for base and framework definitions that others build on.
  - `zz_...`, `98_...`, and `99_...` force a **late** load.
- **GUI is an exception.** A `type` or `template` definition is **first-loaded-wins** across mods, so
  a later mod cannot overwrite one. **Filenames have no effect** for GUI. `events` follows the same
  first-loaded-wins rule.

## 3. Localization (BOM, filename, header, and the override directory)

Write the files under `your_mods/<name>/localization/<lang>/...`. See `Localization`
and `Mod_files_load_order`, section "Localization". The mod root is flat in Victoria 3, so there is
no `<top_folder>` level.

- **Encoding (mandatory):** UTF-8 **with BOM** (`EF BB BF`). Without a BOM the game **ignores the
  file**. This failure is fatal, not cosmetic, so the linter treats a missing BOM as an ERROR.
- **Filename (mandatory):** the filename must end with `_l_<language>`, for example
  `building_food_industry_l_simp_chinese.yml`. The leading part is free-form. The linter enforces the
  suffix and anchors `<language>` to the directory. The shipped languages are `braz_por`, `english`,
  `french`, `german`, `japanese`, `korean`, `polish`, `russian`, `simp_chinese`, `spanish`, and
  `turkish` (`localization/languages.yml` in the game directory).
- **Header:** the first content line is `l_<lang>:`, and it must match the language **directory**
  (`.../localization/simp_chinese/...` gives `l_simp_chinese:`).
- **Entry format:** an indented `  key: "value"`, or `  key:0 "value"` with an explicit version
  number. The value starts at the first `"` and ends at the last unescaped `"` on the same line,
  so an inner `"` and a doubled `""` are both legal (vanilla writes `""L'État, c'est moi!""`). A
  value that does not start with `"`, or that is never closed by a `"` at the end of its line, is
  an error. Placeholders such as `[Scope.GetName]`, escapes such as `\n`, and nested calls such as
  `[Localize('other_key')]` all live inside the quoted value.
- **Overriding vanilla loc keys:** the reliable mechanism is a `replace` **subdirectory**,
  `<lang>/replace/overwriting_l_<lang>.yml`. Keys there overwrite identical keys elsewhere. Outside
  `replace/`, the precedence between duplicate keys is version-sensitive. The `Localization` page
  notes reverse-alphabetical processing with an `a` or `0` prefix trick. `Mod_files_load_order`
  states that a key that loads later does **not** overwrite an earlier one. Prefer the `replace/`
  directory, and do not rely on filename ordering to win a key.
- **No duplicate keys** within one file. They are ambiguous and easy to miss, and the linter flags
  them.

## 4. Brace and quote balance (PDXScript and GUI)

- Every `.txt`, `.gui`, `.gfx`, or `.asset` file under the mod root must have balanced
  `{ }` and balanced `"`. An extra `}` or an unterminated string breaks the parse of the file. The
  game often drops everything after it, without a message.
- A `#` starts a line comment **outside** a quoted string. Inside a string, `#` is literal. For
  example, the loc markup `#italic ... #!` lives inside the quotes.
- **A GUI string can span several physical lines.** A datamodel expression such as
  `visible = "[Or( ... )]"` legitimately wraps across lines, and the closing `"` can be several
  lines below the opening one. That is correct, as long as the string eventually closes.
- A file that is **not game script** is skipped by the linter: a `README.txt`, anything under
  `.metadata/`, `tools/`, `licenses/`, or `documentation/`, and a `localization/languages.yml` (the
  language list is a game definition, not a localization file). Those live inside the mod root; the
  linter skips them by path, not by location.

## 5. `metadata.json`

Per `Mod_structure`, section "Metadata": every mod **requires** a `metadata.json` inside a
`.metadata` directory, or "the game will error". The documented standard structure is valid JSON
with `name`, `id`, `version` (`x.x` or `x.x.x`), `supported_game_version` (for example `1.13.*`),
`short_description`, and `tags`, plus optional `relationships` and `game_custom_data`. The summary
field is `short_description`, not `description`. The wiki also documents `game_id` as a standard
field with the value `victoria3`: it is a safety catch that stops the launcher from loading a mod
built for another game. The wiki does not document an individual missing field as load-fatal, so the
linter treats a missing file or invalid JSON as an ERROR, and a missing standard field as a WARN.
Read `supported_game_version` from the `supportedGameVersion` value of `get_game_info`. Do not do
binary forensics.

The mod root should hold a `thumbnail.png` (the Steam Workshop image), and `.metadata/` may hold one
too (the launcher image). The recommended size is 512x512. The metadata can reference it with a
`"thumbnail": "thumbnail.png"` entry — the field is `thumbnail`, not `picture`. The image can live
only in the Paradox mod directory, and you do not have to version it in the repository. The linter
warns when the `thumbnail` entry is missing, or when its value names no existing file in the mod root
or `.metadata/`.

`game_custom_data` is normally `{"multiplayer_synchronized": true}` (Victoria 3 marks the mod as
multiplayer-safe), and it may hold a `replace_paths` array (see section 1).

## 6. Housekeeping

- Edit only under `your_mods/<name>/`. Treat `docs/`, `.pi/`, and `reference/` as read-only.
  The game directory lives on the player's machine. `try_set_game_dir` records it as `gameDir`, and
  it is a read-only reference.
- Do not leave scratch files or backup files under `your_mods/<name>/`. Examples: `temp_*`,
  `_tmp_*`, and editor backups.
- **The install path must be ASCII.** The wiki states that Victoria 3 "cannot load any mods whose file
  path includes non-ASCII characters", for example a Windows user name with Chinese characters or
  accents. The workspace copy is `your_mods/<name>/`, but the launcher reads
  `<Documents>/Paradox Interactive/Victoria 3/mod/<name>`, so a non-ASCII Documents path breaks the
  install. `install_mod` warns when it sees one.
- **The launcher reads the mod directory from the game's own config.** `launcher-settings.json` holds
  `"gameDataPath": "%USER_DOCUMENTS%/Paradox Interactive/Victoria 3"` and `"modPath": "mod"`, so the
  mod directory is that path plus `/mod`. A player can move it by editing `gameDataPath`.

## 7. Choosing an entry mechanism

Victoria 3 hooks new content into the game through a small number of **entry points**. They are not
interchangeable: a feature that reports a one-off choice is an event, a feature that keeps running is
a journal entry, and a feature that puts a button on an existing screen is a scripted GUI. Most mods
need one of them at most, and many need none.

Pick the entry **before** you write script. Read the row that matches your feature, then open the
folder it names and read one of the examples in it.

| Entry point | Use it when | Defined in / read this example |
| --- | --- | --- |
| `journal_entries` | The feature is a **persistent state with progress** (it stays active, tracks progress bars, and runs until its completion condition is met). | `common/journal_entries/`, and its UI group in `common/journal_entry_groups/` |
| `decisions` | The feature is a **player-triggered action** (a button the player presses). | `common/decisions/` |
| `events` | The feature surfaces as an **event popup** (a one-off window with options). | `events/` (top level, not under `common/`) |
| `scripted_guis` | The feature needs a **custom panel** (its own buttons or widgets). | `common/scripted_guis/` plus the layout under `gui/` |
| `character_interactions` | The action becomes available **after the player selects a character** (the interaction fires on that character). | `common/character_interactions/` |
| `on_actions` | The feature hooks a **game event** (a point in the game loop where content fires). | `common/on_actions/` |
| `objectives` | The feature is a **goal** the player works toward. | `common/objectives/` |
| Other mechanisms for existing screens and hooks | These hook into an existing screen or hook, and the entry points above do not cover them. | `gui/` (panels), `common/scripted_buttons/`, `common/scripted_progress_bars/`, `common/scripted_lists/`, `common/scripted_triggers/`, `common/scripted_effects/` |

A mod can also add its own content to one of the game's own data folders, such as scripted effects,
script values, laws, or pop types. The `mod-creator` skill lists the common ones.

The four families are a **persistent mechanic** (`journal_entries`), a **panel** (`scripted_guis`), an
**action** (`decisions` / `character_interactions`), and **event-driven content** (`events`).

**Decide this before you write any script: does this version need its own panel, or any new entry
point at all?** If it does, open the folder that the row names, read one of the examples there or the
readme the game ships for that folder, then write. If it does not, skip this whole page.

---

## Going deeper (what the linter does not check)

The linter checks syntax and conventions only in v1. It does **not** check whether an effect,
trigger, or modifier name exists, whether an `INJECT:`/`REPLACE:` target exists, or whether a new
object has its localization keys — those name-level semantic checks are cut in v1 (they return when
the game dumps are regenerated). For exact vanilla values, follow the lookup hierarchy in
[`INDEX.md`](INDEX.md).

- **The mod API snapshot:** [`mod-wiki/INDEX.md`](mod-wiki/INDEX.md) holds 69 wiki pages: the modding
  guides, the effect/trigger/scope reference, the gated folder list, each content type, and the
  reference lists. Most pages state which game version they were verified against. A page can lag a
  patch behind, and the set is CC BY-SA 3.0 (see its [`SOURCE.md`](mod-wiki/SOURCE.md)).
- **Vanilla scripts:** `game-scripts/`, generated by `sync_game_scripts`, holds the vanilla `game/`
  scripts and the `workshop/` scripts. Grep it for exact object definitions, field values, INJECT
  targets, and loc keys.
- **The official wiki:** vic3.paradoxwikis.com. It has the concepts and worked examples, and can lag
  a patch behind the vanilla scripts.
- **Paradox Language Support (PLS):** an IntelliJ plugin for editor-time Victoria 3 validation, when a
  human can open the project.
