# The dumps in this directory

These six files are the game's own name dumps. `validate_mod` reads them for the name-level
checks, and this page records where they came from, so the next maintainer can regenerate them.

## How to regenerate them

1. Start Victoria 3 with debug mode on.
2. Load a campaign. The dump needs a loaded game, not the main menu.
3. Open the console and run `script_docs`.
4. The game writes the files to `<Documents>/Paradox Interactive/Victoria 3/docs/`.
5. Copy the six `.log` files here, and update the table under *What each file holds*.

For the GUI data types dump, run `dump_data_types` in the same session. It writes to
`<Documents>/Paradox Interactive/Victoria 3/logs/data_types/`, which is a different directory.

## The GUI data types dump

The game has a second, separate dump. It holds the GUI data binding types, not the script names. The
files are in [`../data_types/`](../data_types/), and they come from the same debug session.

- **Command:** `dump_data_types` in the console, with debug mode on. The wiki lists it as "dumps the
  registered data types" (`Console commands.md`), and `Modding.md` names the GUI form `DumpDataTypes`,
  which is the button in the data types explorer.
- **Output:** the game prints `Data types dumped into '<path>'`. The path is a `data_types/` directory
  under the **`logs`** directory, not under `docs`. In this repository the files are copied to
  [`../data_types/`](../data_types/).
- **Do not confuse the two commands.** `data_types` and `data_type` on their own are not commands. The
  console command list is in `docs/mod-wiki/Console commands.md`.

| File | Entries | Unique names |
| --- | --- | --- |
| `data_types_common.txt` | 335 | 334 |
| `data_types_gui.txt` | 929 | 914 |
| `data_types_internalclausewitzgui.txt` | 2891 | 2866 |
| `data_types_script.txt` | 473 | 357 |
| `data_types_uncategorized.txt` | 14232 | 13158 |

An entry is one block, and its first line is the name, with or without its argument list. Re-measure
with:

```bash
node -e '
const fs=require("fs"),d="docs/data_types";
for(const f of fs.readdirSync(d).sort()){const t=fs.readFileSync(d+"/"+f,"utf8");let n=0;const s=new Set();
for(const b of t.split(/-{10,}/)){const l=b.split(/\r?\n/).filter(x=>x.trim()!=="");if(!l.length)continue;
const m=/^([A-Za-z_][\w.]*)\s*(?:\(|$)/.exec(l[0].trim());if(!m)continue;n++;s.add(m[1])}
console.log(f,"entries",n,"unique",s.size)}
'
```

No check in this repository reads these files yet. They are the evidence for a GUI data model name
such as `StatusWidget.ToggleLoginWindow`. Read them when a `.gui` file uses a name you cannot place.
The five files are the game's data binding groups: the GUI group, the Jomini group, the script group,
and the two catch-all groups. Do not read `common` or `script` as GUI-only.

## Provenance

| Field | Value |
|---|---|
| Game version | `1.13.11 (Matcha)` (from `launcher/launcher-settings.json`, field `version`; `rawVersion` holds `1.13.11`) |
| Script dump command | `script_docs` |
| Data types dump command | `dump_data_types` |
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

The count is a unique name. Re-measure all six with the rule that `validate_mod` uses:

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
`node scripts/measure-wiki-coverage.mjs`, which reads `effects.log` and `triggers.log` and every
`docs/mod-wiki/*.md` page, counts a name as mentioned when it appears as a whole word, then update this
page.
