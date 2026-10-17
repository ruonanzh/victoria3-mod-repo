# Victoria 3 modding docs index

A curated map of the knowledge layer under `docs/`.
**Load selectively.** Read this index first. Then open only the one or two pages that the current
task needs, instead of pulling the whole `docs/` directory into context.

## Lookup hierarchy (which source is authoritative for what)

| You need | Source |
|---|---|
| Exact vanilla object definitions, field values, INJECT targets, and loc keys | `game-scripts/` (the script mirror that `sync_game_scripts` generates) |
| Mechanics concepts and the mod API | the live wiki, `vic3.paradoxwikis.com` |
| The modding conventions and the reason behind them | [`victoria3-modding-conventions.md`](victoria3-modding-conventions.md) |

> **v1 ships no game dumps.** The `script_docs/` and `data_types/` dumps are not regenerated yet
> (they need the game in debug mode), and there is no local wiki snapshot. For exact names and
> values, grep `game-scripts/` after you run `sync_game_scripts`, and read the live wiki for
> concepts. The deep name-level semantic checks return when the dumps are regenerated.

- **Start here:** [`victoria3-modding-conventions.md`](victoria3-modding-conventions.md). This cheat-sheet
  covers override and `INJECT` semantics, ASCII load order, localization, and metadata. It answers
  most modding questions on its own.
- **Exact names and values: grep `game-scripts/`.** It holds the vanilla `game/` scripts and the
  Workshop scripts. Grep it for exact object definitions, field values, `INJECT:`/`REPLACE:` targets,
  and loc keys.
- **Concepts and how-to method: the live wiki.** `vic3.paradoxwikis.com` explains how the systems
  work and the mod API concepts. It can lag a patch behind the vanilla scripts.

> `validate_mod` checks syntax and conventions only in v1: it does not check whether an effect,
> trigger, or modifier name exists, whether an `INJECT:`/`REPLACE:` target exists, or whether a new
> object has its localization keys. Check those against `game-scripts/` yourself.

## Other pages in `docs/`

| Page | Load it when you need to |
|------|------------------------|
| [`game.md`](game.md) | The game overview, the game systems, and the mod loading mechanics. |
| [`victoria3-modding-conventions.md`](victoria3-modding-conventions.md) | The reason behind the override, load-order, localization, and metadata rules. |
