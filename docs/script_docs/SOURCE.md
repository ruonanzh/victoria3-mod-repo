# The dumps in this directory

These six files are the game's own name dumps. `validate_mod` reads them for the name-level
checks, and this page records where they came from, so the next maintainer can regenerate them.

## How to regenerate them

1. Start Victoria 3 with debug mode on.
2. Load a campaign. The dump needs a loaded game, not the main menu.
3. Open the console and run `script_docs`.
4. The game writes the files to `<Documents>/Paradox Interactive/Victoria 3/docs/`.
5. Copy the six `.log` files here, and update the table below.

Victoria 3 writes these six files, and no `data_types` dump. The wiki spells a second command
`DumpDataTypes`, and this game version produces nothing for it. Do not add a page for it.

## Provenance

| Field | Value |
|---|---|
| Game version | `1.13.11 (Matcha)` (from `launcher/launcher-settings.json`, field `rawVersion`) |
| Dump command | `script_docs` |
| Dumped on | 2026-10-19 |
| Source path | `<Documents>/Paradox Interactive/Victoria 3/docs/` |

## What each file holds

| File | Shape of a name line | Names |
|---|---|---|
| `effects.log` | `## <name>` | 3152 |
| `triggers.log` | `## <name>` | 1816 |
| `modifiers.log` | `<name>:` at column zero, under a `--- <section> ---` heading | 7090 |
| `event_targets.log` | `### <name>` | 353 |
| `on_actions.log` | `<name>:` at column zero | 262 |
| `custom_localization.log` | `<name>:` at column zero | 960 |

The counts are what `get_game_info` reports, and they come from these files. Re-measure them with:

```bash
node -e 'const d="docs/script_docs";const f=require("fs");for(const n of ["effects","triggers","event_targets"]){const t=f.readFileSync(d+"/"+n+".log","utf8");const re=n==="event_targets"?/^### /gm:/^## /gm;console.log(n,(t.match(re)||[]).length)}'
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
