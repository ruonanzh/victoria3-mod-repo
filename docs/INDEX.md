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
| Change only a value inside an existing block | — (nothing to read) | — | the block's own directory | `REPLACE:` (gated) or implicit replace |

If no row fits, or a row needs a fourth page, say so and report it. The table is incomplete then, and
a controlled search for that one gap beats wandering through the whole catalogue.

## Lookup hierarchy (which source is authoritative for what)

| You need | Source |
|---|---|
| Whether an effect, trigger, modifier, event target, or on-action name exists | The dumps in [`script_docs/`](script_docs/SOURCE.md). They ship with this repository, and `validate_mod` reads them. A hit proves the name exists. A miss is not proof, because the game leaves some names out of the dump: check their definition in `game-scripts/vanilla/game/`. |
| Whether a building, law, good, technology, or another game object exists | Its definition under `game-scripts/vanilla/game/common/`. These object ids are not in the dumps. |
| Exact vanilla object definitions, field values, INJECT targets, and loc keys | The vanilla scripts at `game-scripts/vanilla/game/`, which `sync_game_scripts` writes. The `game-scripts/workshop/` part holds other authors' mods, so it is not evidence. |
| How to call something, what scope it needs, what the pitfalls are | [`mod-wiki/`](mod-wiki/) (a snapshot of the wiki), or the live wiki `vic3.paradoxwikis.com` |
| The exact name of a GUI data model entry | [`data_types/`](data_types/) (the `dump_data_types` dump; [`script_docs/SOURCE.md`](script_docs/SOURCE.md) records it) |
| The modding conventions and the reason behind them | [`victoria3-modding-conventions.md`](victoria3-modding-conventions.md) |

> **The wiki covers a minority of names.** The wiki snapshot answers "how do I call this", and it
> cannot answer "does this exist": a name missing from the wiki is usually just undocumented. For
> existence, read the dumps. [`script_docs/SOURCE.md`](script_docs/SOURCE.md) records the measured
> share of the dump names that the snapshot mentions, together with the command that measures it.
>
> **The dumps ship with this repository.** [`script_docs/SOURCE.md`](script_docs/SOURCE.md) records
> the game version, the `script_docs` command, and how to regenerate the six files. A maintainer
> regenerates them after a game patch. The agent reads them and does not copy anything from the
> player's machine.

- **Start here:** [`victoria3-modding-conventions.md`](victoria3-modding-conventions.md). This cheat-sheet
  covers override and `INJECT` semantics, ASCII load order, localization, and metadata. It answers
  most modding questions on its own.
- **Exact names and values: read the dumps for a name, and grep `game-scripts/vanilla/game/` for a
  definition.** The mirror also holds `game-scripts/workshop/`, which is another author's mod. Do not
  treat anything there as vanilla.
- **Concepts and how-to method: the live wiki.** `vic3.paradoxwikis.com` explains how the systems
  work and the mod API concepts. It can lag a patch behind the vanilla scripts.

> `validate_mod` checks syntax, conventions, and name-level semantics. The syntax and convention
> checks cover the metadata fields, the localization YAML, the brace and quote balance, and the
> top-level rule for the keywords. The name-level checks cover the target of a `REPLACE:`/`INJECT:`
> keyword, a near-miss effect or trigger name, and the localization keys of a new decision, trait, or
> journal entry. Section 10 of the conventions lists what no tool checks, and that list is for you.

## Other pages in `docs/`

| Page | Load it when you need to |
|------|------------------------|
| [`game.md`](game.md) | The game overview, the game systems, and the mod loading mechanics. |
| [`victoria3-modding-conventions.md`](victoria3-modding-conventions.md) | The reason behind the override, load-order, localization, and metadata rules. |
| The writing rule | The four rules are in § Writing rule of [`AGENTS.md`](../AGENTS.md). Every English string that reaches an agent follows them. |
| [`script_docs/SOURCE.md`](script_docs/SOURCE.md) | The provenance of the six name dumps and the GUI data types dump, the regeneration commands, and the counts. |
| [`mod-wiki/INDEX.md`](mod-wiki/INDEX.md) | The mod API reference. Start there for a mechanism, an effect, a trigger, or a folder's rules. Its [`SOURCE.md`](mod-wiki/SOURCE.md) records the snapshot and the CC BY-SA license. |
