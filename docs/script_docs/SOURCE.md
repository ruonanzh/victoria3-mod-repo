# The dumps in this directory

These six files are the game's own name dumps. `validate_mod` reads them for the name-level
checks, and this page records where they came from, so the next maintainer can regenerate them.

## How to regenerate them

1. Start Victoria 3 with debug mode on.
2. Load a campaign. The dump needs a loaded game, not the main menu.
3. Open the console and run `script_docs`.
4. The game writes the files to `<Documents>/Paradox Interactive/Victoria 3/docs/`.
5. Copy the six `.log` files here, and update the table below.

## The GUI data types dump

The game has a second dump. It holds the GUI data binding types, not the script names.

- **Command:** `dump_data_types` in the console, with debug mode on. The wiki lists it as "dumps the
  registered data types" (`Console commands.md`), and `Modding.md` names the GUI form `DumpDataTypes`,
  which is the button in the data types explorer.
- **Output:** the game prints `Data types dumped into '<path>'`. Read that line for the exact path.
  The files follow `data_types_<category>.txt`, and the binary names the `data_types/data_types_`
  prefix, so the directory is a `data_types/` subdirectory under the same `docs` directory that holds
  the six script dumps.
- **State in this repository:** **not dumped yet.** The directory is not part of this repository, so
  no page here is based on it.
- **Do not confuse the two commands.** `data_types` and `data_type` on their own are not commands.

## Provenance

| Field | Value |
|---|---|
| Game version | `1.13.11 (Matcha)` (from `launcher/launcher-settings.json`, field `rawVersion`) |
| Dump command | `script_docs` |
| Dumped on | 2026-10-19 |
| Source path | `<Documents>/Paradox Interactive/Victoria 3/docs/` |

## What each file holds

| File | Shape of a name line | Unique names |
|---|---|---|
| `effects.log` | `## <name>` | 3152 |
| `triggers.log` | `## <name>` | 1816 |
| `modifiers.log` | `<name>:` at column zero, under a `--- <section> ---` heading | 7090 |
| `event_targets.log` | `### <name>` | 336 |
| `on_actions.log` | `<name>:` at column zero | 262 |
| `custom_localization.log` | `<name>:` at column zero | 202 |

The count is a unique name. `get_game_info` reports four of these six counts. Re-measure all six with
the rule that the tool uses:

```bash
node -e '
const fs=require("fs"),d="docs/script_docs";
const n=(f,re)=>{const t=fs.readFileSync(d+"/"+f,"utf8");const s=new Set();for(const m of t.matchAll(re))s.add(m[1]);return s.size};
console.log("effects",n("effects.log",/^## (\S+)/gm));
console.log("triggers",n("triggers.log",/^## (\S+)/gm));
console.log("event_targets",n("event_targets.log",/^### (\S+)/gm));
for(const f of ["modifiers","on_actions","custom_localization"])console.log(f,n(f+".log",/^([a-z_][a-z0-9_.]*):\s*$/gm));
'
```

## Two limits

- **A name here proves only that the name exists.** The scope, the type, and the value domain are
  not checked by any tool in this repository.
- **`modifiers.log` carries the game's localized name and description** in the language the game
  runs in, so the column beside `Mask:` can be Chinese. Read the key on the left. The localized
  text is not an identifier.

## Agreeing with the wiki snapshot

`docs/INDEX.md` points here for the measured coverage. The snapshot mentions 560 of the 3152 effects
and 818 of the 1816 triggers: a word match, measured on 2026-10-19. Regenerating the dump at a new game
version changes those counts, so re-measure them before you repeat the numbers. Re-run
`node scripts/measure-wiki-coverage.mjs`, which reads every `docs/script_docs/*.log` and every
`docs/mod-wiki/*.md` page, counts a name as mentioned when it appears as a whole word, then update this
page.
