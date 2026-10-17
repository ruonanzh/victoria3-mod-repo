# Victoria 3 modding docs index

A curated map of the knowledge layer under `docs/`.
**Load selectively.** Read this index first. Then open only the one or two pages that the current
task needs, instead of pulling the whole `docs/` directory into context.

## Route a request (start here)

Find the row that matches what the player asked for. It gives three things: the **primary page** to
read whole, the **supporting pages** to grep for a name (never read whole: some run 400 KB to 840 KB),
and the **vanilla folders** to search.

| The player asks for | Primary page (read whole) | Supporting pages (grep a name) | Vanilla folders | Entry form |
|---|---|---|---|---|
| Change a building's output or cost | [`Building modding.md`](mod-wiki/Building modding.md) | [`List of buildings.md`](mod-wiki/List of buildings.md), [`Modifier types.md`](mod-wiki/Modifier types.md) | `common/buildings`, `common/building_groups` | `REPLACE:` (gated) |
| Add a good, or change one | [`Goods modding.md`](mod-wiki/Goods modding.md) | [`Goods.md`](mod-wiki/Goods.md) | `common/goods` | new object |
| Add or change a production method | [`Building modding.md`](mod-wiki/Building modding.md) | [`List of production methods.md`](mod-wiki/List of production methods.md) | `common/production_methods`, `common/production_method_groups` | new object or `REPLACE:` |
| Add an event | [`Event modding.md`](mod-wiki/Event modding.md) | [`Effect.md`](mod-wiki/Effect.md), [`Trigger.md`](mod-wiki/Trigger.md) | `events/` | event (first loaded wins) |
| Add a journal entry | [`Journal modding.md`](mod-wiki/Journal modding.md) | [`Effect.md`](mod-wiki/Effect.md), [`Trigger.md`](mod-wiki/Trigger.md) | `common/journal_entries`, `common/journal_entry_groups` | new object |
| Add a decision | [`Decision modding.md`](mod-wiki/Decision modding.md) | [`Effect.md`](mod-wiki/Effect.md) | `common/decisions` | new object |
| Add or change a law | [`Law modding.md`](mod-wiki/Law modding.md) | [`Modifier types.md`](mod-wiki/Modifier types.md) | `common/laws`, `common/law_groups` | `REPLACE:` |
| Add a country | [`New country modding.md`](mod-wiki/New country modding.md) | [`Country modding.md`](mod-wiki/Country modding.md) | `common/country_definitions`, `common/history` | new object |
| Add a culture or a religion | [`Culture modding.md`](mod-wiki/Culture modding.md), [`Religion modding.md`](mod-wiki/Religion modding.md) | — | `common/cultures`, `common/religions` | new object |
| Add an interest group or a party | [`Interest group modding.md`](mod-wiki/Interest group modding.md) | — | `common/interest_groups`, `common/parties` | new object |
| Add a technology | [`Technology modding.md`](mod-wiki/Technology modding.md) | — | `common/technology/technologies` | new object |
| Add a modifier | [`Modifier modding.md`](mod-wiki/Modifier modding.md) | [`Modifier types.md`](mod-wiki/Modifier types.md), [`List of culture modifier types.md`](mod-wiki/List of culture modifier types.md) | `common/static_modifiers`, `common/scripted_modifiers` | new object, or reference one |
| Add a character or DNA | [`Character modding.md`](mod-wiki/Character modding.md) | [`Trait modding.md`](mod-wiki/Trait modding.md) | `common/dna_data`, `common/character_traits` | whole-file overwrite for `dna_data` |
| Change the UI, or add a panel | [`GUI script.md`](mod-wiki/GUI script.md) | [`Scripted gui.md`](mod-wiki/Scripted gui.md), [`List of GUI script functions.md`](mod-wiki/List of GUI script functions.md) | `gui/`, `common/scripted_guis` | panel (`type` is first loaded wins) |
| Change the map, or add a state | [`Map modding.md`](mod-wiki/Map modding.md), [`State modding.md`](mod-wiki/State modding.md) | [`List of state regions.md`](mod-wiki/List of state regions.md) | `map_data/`, `common/state_traits` | whole file or `REPLACE:` |
| Add art, a texture, or an icon | [`Graphical asset modding.md`](mod-wiki/Graphical asset modding.md) | — | `gfx/` | new object |
| Add text, or translate the mod | [`Localization.md`](mod-wiki/Localization.md) | — | `localization/<lang>/` | `replace/` for a single key |
| Add a diplomatic action | [`Diplomacy modding.md`](mod-wiki/Diplomacy modding.md) | — | `common/diplomatic_actions` | new object |
| Add a war goal | [`War goal modding.md`](mod-wiki/War goal modding.md) | — | `common/war_goal_types` | new object |
| Change AI behaviour | [`AI modding.md`](mod-wiki/AI modding.md) | [`Defines.md`](mod-wiki/Defines.md) | `common/ai_strategies` | `REPLACE:` |
| Change only a value inside an existing block | — (nothing to read) | — | the block's own folder | `REPLACE:`, no new object |

If no row fits, or a row needs a fourth page, say so and report it. The table is incomplete then, and
a controlled search for that one gap beats wandering through the whole catalogue.

## Lookup hierarchy (which source is authoritative for what)

| You need | Source |
|---|---|
| Whether a name exists in this game version | The `script_docs` dump, when the player has produced one (see the note below) |
| Exact vanilla object definitions, field values, INJECT targets, and loc keys | `game-scripts/` (the script mirror that `sync_game_scripts` generates) |
| How to call something, what scope it needs, what the pitfalls are | [`mod-wiki/`](mod-wiki/) (a snapshot of the wiki, 69 pages), or the live wiki `vic3.paradoxwikis.com` |
| The modding conventions and the reason behind them | [`victoria3-modding-conventions.md`](victoria3-modding-conventions.md) |

> **The wiki covers a minority of names.** Measured against a dump of 1.13.11, the vendored pages
> name 584 of 3,152 effects (19%) and 956 of 1,816 triggers (53%). So the wiki answers "how do I call
> this", and it cannot answer "does this exist": a name missing from the wiki is usually just
> undocumented. For existence, grep the dump or `game-scripts/`.
>
> **The dump is produced by the player, not by this repository.** Start a game with debug mode on,
> load a campaign, and run `script_docs` in the console. The game writes the logs to
> `<Documents>/Paradox Interactive/Victoria 3/docs/`: `effects.log`, `triggers.log`,
> `modifiers.log`, `event_targets.log`, `on_actions.log`, and `custom_localization.log`. It writes
> them there and nowhere else; nothing in this workspace copies them. Ask the player for the path, or
> read it from `<Documents>`, which `try_set_game_dir` already recorded. Until a dump exists, for exact
> names and values grep `game-scripts/` after you run `sync_game_scripts`; for concepts, read
> [`mod-wiki/`](mod-wiki/).

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
| The writing standard | Not shipped in this repository. § Writing rule in [`AGENTS.md`](../AGENTS.md) holds the four rules that apply to the text here. The full file, with the term list and the measured values, is `docs/eu5-harness/v3-writing-standard.md` in the design repository. |
| [`mod-wiki/INDEX.md`](mod-wiki/INDEX.md) | The mod API reference: 69 wiki pages. Start there for a mechanism, an effect, a trigger, or a folder's rules. Its [`SOURCE.md`](mod-wiki/SOURCE.md) records the snapshot and the CC BY-SA license. |
