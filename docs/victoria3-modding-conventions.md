# Victoria 3 modding conventions (cheat-sheet)

A committed, retrieval-oriented reference for writing Victoria 3 mods. It explains the reason behind the
rules that `validate_mod` enforces. It also explains the load-order and override semantics that the
tool cannot check on its own. This is the **knowledge layer**: read it for guidance. It runs and
enforces nothing.

- Enforcement lives in `.pi/extensions/mod-lint.ts` (the syntax and convention checks) and in
  `.pi/lib/mod-semantics.ts` (the name-level checks). Both sit behind the `validate_mod` tool.
- This document is the **single source of truth** for the modding rules. `AGENTS.md` and
  `.pi/skills/mod-creator/SKILL.md` reference it instead of repeating the rules.
- The boundaries and the mandatory `validate_mod` step live in [`AGENTS.md`](../AGENTS.md). The
  step-by-step procedure is in [`../.pi/skills/mod-creator/SKILL.md`](../.pi/skills/mod-creator/SKILL.md).
- The game's own name dumps ship in [`script_docs/`](script_docs/SOURCE.md). `validate_mod` reads them
  for the name-level checks. The vanilla scripts under `game-scripts/vanilla/` are the other evidence
  layer. Section 9 lists what the tool checks, and section 10 lists what no tool checks.
- A mod is PDXScript text only. The game engine is C++, and it is out of scope. A mod cannot add
  behavior that the engine does not expose.

> **Sources.** The wiki snapshot in [`mod-wiki/`](mod-wiki/INDEX.md) grounds the mechanics below. The
> load-order and override rules come from `Mod compatibility.md`, sections *Overview*, *File loading
> order*, *Game object load order*, *Inject and replace*, *Implicit replace*, *Exceptions*, and *List
> of folders*. The metadata rules come from `Mod structure.md`, the localization rules from
> `Localization.md`, and the failure symptoms from `Troubleshooting.md`. The snapshot has no `Mod files
> load order` page: the wiki links that page as an out-of-set URL, and its content sits in `Mod
> compatibility.md`. Where the snapshot is silent, this page says so. Where this page gives a
> measurement, it gives the command that repeats it.

## 1. Overriding vanilla: file overwrite, implicit replace, and INJECT:/REPLACE:

Victoria 3 loads the mod files on top of the vanilla files. Three override mechanisms exist. See
`Mod compatibility.md`, sections *Overview* and *Inject and replace*.

- **Direct file overwrite:** a mod file with the *same path and filename* as a base-game, DLC, or
  other-mod file takes precedence. The lower-in-playlist mod wins, and the losing files are treated
  "as if they did not exist". This is a whole-file override, so anything you omit is lost. A vanilla
  patch can then change a key you never repeated.
- **Implicit replace:** in a directory that does **not** use the keyword system, two files that define
  the same top-level object leave the **later-loaded definition** in force. The wiki says those
  directories "generally function with an implicit replace", so it is the general rule and not a
  guaranteed one.
- **`INJECT:` / `REPLACE:` keywords:** most `common/` directories (and some others) require a keyword
  to modify an existing object without a full file overwrite. Implicit replace does **not** work in
  these directories. Keywords must sit at the **top level of the file**, directly before a database
  entry. The wiki gives a nested example that does **not** work, an `INJECT:` inside another
  `INJECT:`. A container directory such as `common/genes/` (`color_genes = { hair_color = { … } }`)
  can therefore be replaced only as a whole container:

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

Three limits that the wiki states and that catch authors:

- **`INJECT:` fails on a block type that already exists in the entry.** The wiki's example is an
  `is_visible` block injected into a law that already defines `is_visible`. The injection does
  nothing. The same block works when the entry does not define it yet.
- **`INJECT:` appends a duplicate block when the block can appear many times.** The wiki shows a
  `wargoal_scores` example, where a second block is added and the two can then conflict.
- **`REPLACE:` still obeys load order.** If two mods replace the same entry, the last one loaded
  wins. A `REPLACE:` that loads too early cannot apply correctly.

**Rule of thumb:** prefer additive new objects. Use `INJECT:`/`REPLACE:` (or the `TRY_`/`_OR_CREATE`
variants) for surgical changes in a gated directory. Reserve a full-file overwrite for when you must
change most of a file. Whether a top-level object redefines a vanilla name **without** a keyword is a
soft rule: check it with `grep`/`read` against `game-scripts/vanilla/`.

**The gated directory list (Victoria 3).** The `INJECT:`/`REPLACE:` keywords work only in a
documented list. `Mod compatibility.md` section *List of folders* holds **122 list entries**, which
name **121 distinct directories** (two entries are the `(factor)` and `(reason)` halves of
`common/political_lobby_appeasement`). The list is mostly `common/*`, some `gfx/*`, plus
`gui_animations`, `modifier_icons`, `music`, `notifications`, and `sound/persistent_objects`.

The wiki marks that list as community-maintained: "Please add or remove folders from this list if you
know of any undocumented differences." It is therefore version-sensitive. Re-read it after a game
patch. Count the entries with:

```bash
sed -n '/### List of folders/,/^## /p' "docs/mod-wiki/Mod compatibility.md" | grep -cE '^- '
```

**Corpus check.** The vanilla scripts use no keyword at all. The 10 mirrored Workshop mods hold 2338
keyword occurrences in 355 `.txt` files, and none of them is nested inside another block. Measured on
2026-10-19 against the mirror:

```bash
grep -rhoE '(TRY_)?(INJECT|REPLACE)(_OR_CREATE)?:' --include=*.txt game-scripts/vanilla/game | wc -l
grep -rhoE '(TRY_)?(INJECT|REPLACE)(_OR_CREATE)?:' --include=*.txt game-scripts/workshop | wc -l
```

The first command prints 0, and the second prints 2338. The Workshop part of the mirror is another
author's mod, so it is never the evidence that a target exists.

**The wiki's `Exceptions` section.** These six are quoted from `Mod compatibility.md`:

- **GUI `type`/`template`**: the **first** loaded definition wins, so a later mod cannot overwrite one.
  The `types` container is not unique and has no overriding logic at all, so its blocks merge.
- **`events`**: the same first-loaded-wins rule. A sub-folder of `events/` loads after the main
  directory, so a main-directory event wins the same event id.
- **`defines`**: a unique replacement mechanic. `NSomeCategory = { A_SINGLE_DEFINE = X }` changes only
  that one define in the category, and it does not replace the whole category.
- **`on_actions`**: a mod may append `on_actions`, `events`, and `random_events` to an existing hook.
  It **cannot** replace that hook's `trigger` or `effect` block without overwriting the whole file.
- **`localization`**: single keys are overridden only in `localization/<lang>/replace/`. A later
  loaded key does **not** overwrite an earlier one outside that directory.
- **`dna_data`**: definitions do not overwrite each other, they produce duplicates. Only a file
  overwrite replaces a character's DNA.

Two notes that the wiki states beside that list:

- **`scripted_effects` / `scripted_triggers`**: an `INJECT:` silently acts as `REPLACE:`, so the
  original definition is overwritten. The wiki states this in prose for these two directories only.
- **`scripted_rules`**: the gated list marks it `REPLACE only`, and the prose does not repeat the
  equivalence. Treat "`INJECT:` acts as `REPLACE:`" there as an **inference**, and check it in the game.

Two more notes about the list itself:

- **`genes`**: the list gates `common/genes`. The wiki states that injecting into a sub-block is not
  possible. The `color_genes`/`hair_color` shape in this page comes from the vanilla files, because
  the snapshot does not show that directory's structure.
- **`dna_data`** is both in the gated list and in the exceptions. The two statements sit side by side
  in the wiki. This page repeats them, and it does not claim which one wins.

**Whole-path replacement.** `game_custom_data.replace_paths` is an array in `metadata.json`, for
example `["common/buildings", "events"]`. **The wiki snapshot does not document it, and the vanilla
files of 1.13.11 do not mention it.** This repository has not verified the array, so treat it as
unverified and prefer the mechanism that the wiki states: a full-file overwrite. There is no `.mod`
top-level `replace_path` directive in Victoria 3.

## 2. Load order (ASCII order, and a subdirectory after its parent)

Per `Mod compatibility.md`, sections *File loading order* and *Game object load order*:

- Files load in **ASCII order** by name: `00_foo.txt` before `01_bar.txt`. Whether a file comes from
  vanilla or from a mod does not change that order.
- **A file in a subdirectory loads after the files in the parent directory**, regardless of ASCII
  order. Example: `events/zz_example.txt` loads before `events/example/00_example.txt`.
- **Game objects** apply in the order the files define them. Multiple files concatenate as if they
  were one file.

Ordering prefixes. `00_...` forces an **early** load, for base and framework definitions that others
build on. `zz_...`, `98_...`, and `99_...` force a **late** load. The wiki documents the `00_`/`01_`
illustration only, so read `zz_`, `98_`, and `99_` as a convention of this repository and of the
vanilla files, not as a wiki rule.

The prefix matters for the winner. In a directory without keywords, the **later-loaded definition
wins**, so a late prefix is how an override wins. In a gated directory the keyword decides the
mechanism, and the prefix decides the load order that a `REPLACE:` obeys. This is why a prefix is not
"only cosmetic".

**GUI is an exception.** A `type` or `template` definition is **first-loaded-wins**, so a
later-loaded definition cannot win, and the filename order cannot make it win. Everything else in the
GUI files follows the rules above.

**`events` follows the same first-loaded-wins rule**, and a sub-folder loads after the main directory.
An event defined in `events/` therefore beats the same event id in `events/example/`.

## 3. Localization (BOM, filename, header, and the override directory)

Write the files under `your_mods/<name>/localization/<lang>/...`. See `Localization.md` and
`Mod compatibility.md`, section *Localization*. The mod root is flat in Victoria 3, so there is no
`<top_folder>` level. The directory name is spelled `localization`, with a z. A misspelled directory is
one of the wiki's documented failure modes.

- **Encoding (mandatory):** UTF-8 **with BOM** (`EF BB BF`). The wiki states that the game "simply
  ignores" a localization file without a BOM. This failure is fatal, not cosmetic, so `validate_mod`
  treats a missing BOM as an ERROR.
- **Filename (mandatory):** the filename must end with `_l_<language>`, for example
  `building_food_industry_l_simp_chinese.yml`. The leading part is free-form. `validate_mod` enforces
  the suffix and anchors `<language>` to the directory.
- **Header:** the first content line is `l_<lang>:`. The wiki states that the same language name is
  used as the identifier in the first line, and every example writes it that way. `validate_mod`
  treats a mismatch with the directory as an ERROR.
- **Entry format:** the wiki states one line that starts with **a single space**, then `key:`, then
  the value: ` key: "value"`, or ` key:0 "value"` with an explicit version number. The version number
  is optional.
- **The value is a quoted string.** It starts at the first `"`. An inner `"`, a doubled `""`, and a
  closing `"` after several lines are all accepted by `validate_mod`, because the engine accepts the
  vanilla files that do this. One example is
  `game-scripts/vanilla/game/localization/english/agitators_2_l_english.yml:9`, which wraps one value
  in `""`. The wiki snapshot does not describe the quote parsing, so this rule is engine behaviour
  observed in the vanilla files.
- **Overriding vanilla loc keys:** the mechanism the wiki states is a `replace` **subdirectory**,
  `<lang>/replace/overwriting_l_<lang>.yml`. Keys there overwrite identical keys elsewhere.
- **Precedence outside `replace/` is contested in the snapshot.** `Localization.md` states that files
  are processed in reverse alphabetical order, and it offers an `a` or `0` filename prefix to "make
  sure it applied last". `Mod compatibility.md` states that a later-loaded key does **not** overwrite
  an earlier one. This page does not resolve the conflict: prefer the `replace/` directory, and do not
  rely on filename order to win a key.
- **No duplicate keys** within one file. The wiki does not state this. `validate_mod` flags it,
  because a duplicate key is ambiguous and easy to miss.
- **All player-facing text goes through a localization key.** `Localization.md` states that every
  string the player reads must be a key, not a literal in the script.
- **The shipped languages** are `braz_por`, `english`, `french`, `german`, `japanese`, `korean`,
  `polish`, `russian`, `simp_chinese`, `spanish`, and `turkish`. The list is in the game's
  `game/localization/languages.yml`, and the wiki gives the same 11 names in `Localization.md`.

## 4. Brace and quote balance (PDXScript and GUI)

These are `validate_mod` rules. The wiki does not describe a parser, so the tool states what it
checks and how severe each finding is.

- Every `.txt`, `.gui`, `.gfx`, and `.asset` file under the mod root is checked for balanced `{ }` and
  balanced `"`. An **extra `}`** and a **`"` that never closes** are ERRORs. A `{` that never closes
  is only a **WARN**, because vanilla itself ships files like that in `common/dna_data/`.
- A `#` starts a line comment **outside** a quoted string. Inside a string, `#` is literal. The wiki
  states this rule for localization files, and `Localization.md` writes the comment marker the same
  way.
- **A GUI string can span several physical lines.** A datamodel expression such as
  `visible = "[Or( ... )]"` legitimately wraps across lines, and the closing `"` can sit several
  lines below the opening one. That is correct as long as the string closes. The wiki does not state
  it, and `validate_mod` accepts it.
- **A file that is not game script is skipped.** The tool skips every file whose name starts with
  `readme`, and everything under `.metadata/`, `tools/`, `licenses/`, and `documentation/`. It also
  skips `localization/languages.yml`, which is a game definition and not a localization file. The
  tool skips these by path, not by location.
- **What the game reports.** `Troubleshooting.md` shows a missing brace as
  `Unexpected token: …, near line: 129`, and states that "hundreds of errors" then flood the error
  log. It also states that a missing brace breaks every definition below it. The game does not stay
  silent, so read the first error.

The wiki's own `metadata.json` example carries `/* … */` comments, so it is **not valid JSON**.
`validate_mod` uses `JSON.parse`, so copy the fields and not the comments.

## 5. `metadata.json`

Per `Mod structure.md`, section *Metadata*: every mod needs a `metadata.json` inside a `.metadata`
directory. `Modding.md` states that the file "is a requirement in order for the game to load your mod
at all". The standard structure is valid JSON with `name`, `id`, `version` (`x.x` or `x.x.x`),
`supported_game_version` (for example `1.13.*`), `short_description`, and `tags`, plus optional
`relationships` and `game_custom_data`.

| Field | What holds |
| --- | --- |
| `name` | The mod title that the player reads. |
| `id` | A unique identifier. The wiki states that it must stay stable over time: "Do not include version numbers or change if you rename your mod." |
| `version` | `1.1` in the wiki example, and `validate_mod` accepts two or three numeric parts. The wiki states that the launcher "will typically understand semantic versioning", so treat the exact form as a tool rule. |
| `supported_game_version` | A patch-level wildcard such as `1.13.*`. The wiki states that `*` works and that `+` means "or higher". |
| `short_description` | The one-line summary. The field is **`short_description`**, not `description`. |
| `tags` | An array of strings. The wiki states a maximum of 5, and that the tags affect the local listing only. |
| `game_id` | `"victoria3"`. The wiki calls it a "safety catch" that keeps the launcher from loading a mod built for another game. |
| `game_custom_data` | `{"multiplayer_synchronized": true}` normally. |
| `relationships` | `[]` when the mod has none. The wiki states `resource_type` is `"mod"` and `rel_type` is one of `dependency`, `incompatible_with`, `load_before`, and `load_after`. |
| `thumbnail` | `"thumbnail.png"`, optional. The wiki's metadata block does not list it, so this is a `validate_mod` rule: the tool warns when the entry is missing or when it names no file in the mod root or in `.metadata/`. |

The wiki documents that the `.metadata` directory may also hold a `thumbnail.png` for the launcher. It
does not document a size and it does not document a mod-root copy, so this page does not either.
`install_mod` copies whatever the mod ships.

Read `supported_game_version` from the `supportedGameVersion` value of `get_game_info`. Do not do
binary forensics.

The wiki does not document an individual missing field as load-fatal. `validate_mod` therefore treats a
missing file or invalid JSON as an ERROR, and a missing standard field as a WARN.

`game_custom_data.replace_paths` is not in the wiki snapshot. Section 1 says how to treat it.

## 6. Housekeeping

- Edit only under `your_mods/<name>/`. Treat `docs/`, `.pi/`, and `reference/` as read-only.
  The game directory lives on the player's machine. `try_set_game_dir` records it as `gameDir`, and
  it is a read-only reference.
- Do not leave scratch files or backup files under `your_mods/<name>/`. Examples: `temp_*`,
  `_tmp_*`, and editor backups. `Mod.md` gives the reason: the game loads every file in the mod
  directory, so an old file keeps taking part.
- **The install path must be ASCII.** `Mod structure.md` states that "Victoria 3 cannot load any mods
  whose file path includes non-ASCII characters", and it names a user name with accents or a
  different alphabet as the cause. The workspace copy is `your_mods/<name>/`. The launcher reads
  `<Documents>/Paradox Interactive/Victoria 3/mod/<name>`, so a non-ASCII Documents path breaks the
  install. `install_mod` warns when it sees one.
- **The launcher reads the mod directory from the game's own config.**
  `<install>/launcher/launcher-settings.json` holds
  `"gameDataPath": "%USER_DOCUMENTS%/Paradox Interactive/Victoria 3"`. The same file holds
  `"modPath": "mod"`, and the wiki snapshot does not mention that field, so the value comes from the
  installed file itself. A player can move the directory by editing `gameDataPath`, which the wiki
  documents.

## 7. Choosing an entry mechanism

Victoria 3 hooks new content into the game through a small number of **entry points**. They are not
interchangeable: a feature that reports a one-off choice is an event, a feature that keeps running is
a journal entry, and a feature that puts a button on an existing UI window is a scripted GUI. Most
mods need one of them at most, and many need none.

Pick the entry **before** you write script. Read the row that matches your feature, then open the
directory it names and read one of the examples in it.

| Entry point | Use it when | Defined in / read this example |
| --- | --- | --- |
| `journal_entries` | The feature is a **persistent state with progress**. It can end on completion, on failure, on a timeout, or as invalid. | `common/journal_entries/`, and its UI group in `common/journal_entry_groups/` |
| `decisions` | The feature is a **player-triggered action** (a button the player presses). | `common/decisions/` |
| `events` | The feature surfaces as an **event window** (a one-off window with options). `popup = yes` only makes the window open by itself. | `events/` (top level, not under `common/`) |
| `scripted_guis` | The feature needs **script logic behind a button or a widget**. The layout itself lives in `gui/`. | `common/scripted_guis/` plus the layout under `gui/` |
| `on_actions` | The feature hooks a **hook that the game calls** at a specific circumstance. | `common/on_actions/` |
| `character_interactions` | The action becomes available **after the player selects a character**. The wiki snapshot has no page for this directory, so treat the rule as unverified. | `common/character_interactions/` |
| `objectives` | The feature is a **goal** the player works toward. The wiki snapshot has no page for this directory, so treat the rule as unverified. | `common/objectives/` |
| Other mechanisms for an existing UI window and a hook | These hook into an existing UI window or hook, and the entry points above do not cover them. | `gui/` (panels), `common/scripted_buttons/`, `common/scripted_progress_bars/`, `common/scripted_triggers/`, `common/scripted_effects/` |

A mod can also add its own content to one of the game's own data directories, such as scripted
effects, script values, laws, or pop types. The `mod-creator` skill lists the common ones.

The four families are a **persistent mechanic** (`journal_entries`), a **panel** (`gui/` plus
`scripted_guis`), an **action** (`decisions` / `character_interactions`), and **event-driven content**
(`events`).

**Decide this before you write any script: does this version need its own panel, or any new entry
point at all?** If it does, open the directory that the row names, read one of the examples there or
the readme the game ships for that directory, then write. If it does not, skip this whole page.

Three hard rules that the wiki states and that this table does not:

- **An event file needs a `namespace`**, or "your events will not work". The same page states that an
  event file must be UTF-8 BOM encoded.
- **Only a new `on_actions` block may be added** to an existing on-action. Adding any other block
  "causes errors".
- **The directory name is exact.** `common/decisions/…` works and `decisions/…` does not. Directory
  names are plural, with `common/technology` as the exception. `common/history/` and `events/` accept
  arbitrary subdirectories.

## 8. Glossary

Use one word for one thing. The right column is the only spelling this repository uses.

| Term | Meaning | Do not write |
| --- | --- | --- |
| vanilla scripts | The game's own scripts, mirrored at `game-scripts/vanilla/game/`. The only evidence root for a vanilla object, a field value, an `INJECT:` target, or a loc key. | game files, base files, the copy |
| mirror | The `game-scripts/` directory, which `sync_game_scripts` writes. It has two parts: `vanilla/` and `workshop/`. | script dump, game-scripts copy |
| dumps | The six name lists in `docs/script_docs/`, produced by the game's `script_docs` command. | logs, script docs, wiki dump |
| gated directory | A `common/<directory>` that accepts the `INJECT:`/`REPLACE:` keywords. The wiki calls the list "folders that use these keywords". | keyword folder |
| `validate_mod` | The tool that runs the syntax, convention, and name-level checks. | the linter, the validator |
| UI | What the player sees and clicks. | screen, interface |
| UI window | One window that the game shows, and the panel inside it. | screen, page |
| entry point | The game mechanism that surfaces a feature: a journal entry, a decision, an event, a scripted GUI, and so on. | hook, trigger |

## 9. The dumps and the name-level checks

`docs/script_docs/` holds six files, and [`script_docs/SOURCE.md`](script_docs/SOURCE.md) records how to
regenerate them and how many names each one holds. The game writes a second, separate dump of its GUI
data types, from the `dump_data_types` console command, and that page records its state. Do not repeat a
count in a second file: read it from that page.

`validate_mod` runs three name-level classes. Each one is a WARN or a NOTE, never a FAIL, because a
name-level conclusion is not proof.

- **C1, the target of a keyword.** A `REPLACE:` or `INJECT:` target must be a top-level object in the
  same `common/<directory>/`, in this mod or in the vanilla scripts. A missing target is a WARN. A
  `TRY_*` keyword gives a NOTE, and an `*_OR_CREATE` keyword is not reported, because it creates the
  entry on purpose. An `INJECT:` in `common/scripted_effects` or `common/scripted_triggers` gives a
  WARN, because the wiki states that it acts as `REPLACE:` there.
- **C2, a near miss inside an effect or trigger block.** The check reads a fixed list of containers
  (`immediate`, `effect`, `hidden_effect`, `trigger`, `potential`, `visible`, `allow`, `is_valid`,
  `ai_chance`, `after`, `option`, `if`, `while`, `limit`, `scope:<name>`, and similar). A name of 8
  characters or more that is not a known name and is within two edits of one gives a WARN with a
  suggestion. The suggestion must also share the first letter and be within two characters of the
  length. A shorter name, a name the mod defines, and a name that starts with an uppercase letter are
  not reported.

  **The dump is not complete.** The game leaves some names out of it, such as the trigger
  `any_princely_state`, which the vanilla files use. A name that the dump omits is not proof that the
  name is wrong. C2 reports only a near miss against a listed name, so a valid name that the game
  does not document is not reported. When a warning names a trigger or an effect that you believe is
  real, check its definition in `game-scripts/vanilla/`.
- **C3, the localization keys of a new object.** The wiki documents the keys for a decision
  (`<id>` and `<id>_desc`), a character trait (`<id>` and `<id>_desc`), a journal entry (`<id>` and
  `<id>_reason`), and a journal entry group (`<id>`). A new object of those classes without the key in
  the base language gives a WARN.

The semantic layer reads `docs/script_docs/` and `game-scripts/vanilla/`. When the mirror is absent,
C1 and C3 report a NOTE and check nothing. When the dumps are absent, C2 reports a NOTE.

The third file group is [`data_types/`](data_types/). It holds the GUI data binding names, such as
`StatusWidget.ToggleLoginWindow`, with the return type of each one. The game produces it with
`dump_data_types`, and [`script_docs/SOURCE.md`](script_docs/SOURCE.md) records the counts. **No check
reads it.** Read it when a `.gui` file uses a name you cannot place, or when the wiki page for GUI
functions is silent.

## 10. What no tool in this repository checks

Read the `WARN:` and `NOTE:` lines of `validate_mod` before you call a mod done. Then check these by
hand, and say which ones you checked:

- **The scope of an effect or a trigger.** The dumps list `Supported Scopes` for each name, and no
  tool compares that line with the scope the script uses.
- **A GUI data model name.** `docs/data_types/` lists every one that the game registers, and no tool
  compares a `.gui` expression with that list.
- **The type and the value domain of a field.** The dumps do not carry them, so the tool cannot.
- **Whether the gated list is complete.** The list is community-maintained and version-sensitive. A
  keyword in a directory that is not on the list is a silent no-op. `validate_mod` warns for `events/`
  and `localization/` only.
- **The resolution order of two GUI blocks with the same name.** It depends on the mod playlist, so
  only the game can settle it.
- **Whether a `REPLACE:` survives another mod.** The last loaded mod wins.
- **The text quality of a localization value.** Placeholder balance such as `[Scope.GetName]`, the
  meaning, and the tone are for a human.
- **Whether the mod loads at all.** Start the game with the mod enabled. `validate_mod` is a static
  check.
