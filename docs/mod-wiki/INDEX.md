# Victoria 3 mod API reference (mod-wiki)

A curated snapshot of the Victoria 3 wiki: **69 pages**, the modding set plus the core scripting reference. It also holds the reference lists those pages point at. Load a page only when the task needs it.

- Source, snapshot date, and license: [`SOURCE.md`](SOURCE.md).
- The overall docs map: [`../INDEX.md`](../INDEX.md).
- The rules behind the modding model: [`../victoria3-modding-conventions.md`](../victoria3-modding-conventions.md).

Every page is the wiki text as crawled, converted to Markdown. Links inside the set stay relative. Links to pages outside the set point at `vic3.paradoxwikis.com`, so they still work.

## Start here

| Page | Use it when |
|---|---|
| [`Modding.md`](Modding.md) | First read for any modding question. The hub page. |
| [`Mod structure.md`](Mod structure.md) | The mod folder layout, the `.metadata/metadata.json` shape, and where local mods live. |
| [`Mod compatibility.md`](Mod compatibility.md) | Override rules: file overwrites, `INJECT:`/`REPLACE:`, the gated folder list, and the exceptions. |
| [`Mod.md`](Mod.md) | The launcher and Workshop side: playlists, uploads, checksums. |
| [`Troubleshooting.md`](Troubleshooting.md) | The mod does not load, or the game ignores it. |

## Scripting reference

| Page | Covers |
|---|---|
| [`Effect.md`](Effect.md) | Every effect, with the scopes it runs in. |
| [`Trigger.md`](Trigger.md) | Every trigger, with its scopes. |
| [`Scope.md`](Scope.md) | Scopes and the scope-changing links. |
| [`Event target.md`](Event target.md) | Event targets: input and output scopes. |
| [`Modifier.md`](Modifier.md) | Modifiers as script objects. |
| [`Modifier types.md`](Modifier types.md) | The modifier type list and their categories. |
| [`List of culture modifier types.md`](List of culture modifier types.md) | The culture- and religion-derived modifier type names. |
| [`On action.md`](On action.md) | On-action hooks, and what a mod may append to them. |
| [`Defines.md`](Defines.md) | Every define, grouped by category. |
| [`Variable.md`](Variable.md) | Script variables. |
| [`Script value.md`](Script value.md) | Script values. |
| [`List of example script values.md`](List of example script values.md) | Worked script-value examples from vanilla. |
| [`Macro.md`](Macro.md) | Script macros. |
| [`Scripted gui.md`](Scripted gui.md) | Scripted GUIs. |
| [`GUI script.md`](GUI script.md) | The GUI format and its containers. |
| [`List of GUI script functions.md`](List of GUI script functions.md) | The GUI datamodel function list. |
| [`Script localization.md`](Script localization.md) | Localization calls from script. |
| [`Console commands.md`](Console commands.md) | Console commands, including `script_docs` and `dump_data_types`. |
| [`Scripted test.md`](Scripted test.md) | Scripted tests, the in-game test harness. |

## Concepts and content types

| Page | Covers |
|---|---|
| [`Localization.md`](Localization.md) | The localization file format, the BOM, and the `replace/` override folder. |
| [`AI modding.md`](AI modding.md) | AI strategies and weights. |
| [`Building modding.md`](Building modding.md) | Buildings and building groups. |
| [`Character modding.md`](Character modding.md) | Characters, DNA, and traits. |
| [`Country modding.md`](Country modding.md) | Country definitions, ranks, and formation. |
| [`Culture modding.md`](Culture modding.md) | Cultures, culture graphics, and discrimination traits. |
| [`Decision modding.md`](Decision modding.md) | Decisions. |
| [`Decree modding.md`](Decree modding.md) | Decrees. |
| [`Diplomacy modding.md`](Diplomacy modding.md) | Diplomatic actions and plays. |
| [`Event modding.md`](Event modding.md) | Events, and the first-loaded-wins rule. |
| [`Event images.md`](Event images.md) | The event image assets, and how an event names one. |
| [`Flag modding.md`](Flag modding.md) | Flags and coat-of-arms pieces. |
| [`Geographic region modding.md`](Geographic region modding.md) | Geographic regions. |
| [`Goods.md`](Goods.md) | Goods, and what consumes them. |
| [`Goods modding.md`](Goods modding.md) | Adding and changing goods. |
| [`Graphical asset modding.md`](Graphical asset modding.md) | Textures and `.gfx` assets. |
| [`History modding.md`](History modding.md) | Starting history: countries, states, pops, diplomacy. |
| [`Institution modding.md`](Institution modding.md) | Institutions. |
| [`Interest group modding.md`](Interest group modding.md) | Interest groups and their traits. |
| [`Interface modding.md`](Interface modding.md) | Interface overrides. |
| [`Journal modding.md`](Journal modding.md) | Journal entries and their groups. |
| [`Law modding.md`](Law modding.md) | Laws and law groups. |
| [`Map modding.md`](Map modding.md) | Map data and state regions. |
| [`Model modding.md`](Model modding.md) | 3D models. |
| [`Modifier modding.md`](Modifier modding.md) | Static and scripted modifiers. |
| [`Naval warfare.md`](Naval warfare.md) | Naval combat. |
| [`Needs.md`](Needs.md) | Pop needs. |
| [`Political movement modding.md`](Political movement modding.md) | Political movements. |
| [`Pop modding.md`](Pop modding.md) | Pop types and their needs. |
| [`Power bloc modding.md`](Power bloc modding.md) | Power blocs and their principles. |
| [`Rank.md`](Rank.md) | Country ranks. |
| [`Religion modding.md`](Religion modding.md) | Religions. |
| [`Sound modding.md`](Sound modding.md) | Sound events and banks. |
| [`State modding.md`](State modding.md) | States and state traits. |
| [`State modding guide.md`](State modding guide.md) | A worked guide to adding a state. |
| [`Technology modding.md`](Technology modding.md) | Technology and eras. |
| [`Trait modding.md`](Trait modding.md) | Character traits. |
| [`Treaty modding.md`](Treaty modding.md) | Treaties and their articles. |
| [`War goal modding.md`](War goal modding.md) | War goals. |
| [`Mod translation.md`](Mod translation.md) | Translating a mod's localization. |
| [`New country modding.md`](New country modding.md) | A worked guide to adding a country. |
| [`Save-game editing.md`](Save-game editing.md) | Editing a save game. |

## Reference lists

The wiki's own lists of what exists in vanilla. Use them to pick a real name before you write a block. `game-scripts/` is still the authority when the two disagree.

| Page | Lists |
|---|---|
| [`List of buildings.md`](List of buildings.md) | Every building and its group. |
| [`List of production methods.md`](List of production methods.md) | Every production method and the building that uses it. |
| [`List of state regions.md`](List of state regions.md) | Every state region and its states. |
| [`List of culture modifier types.md`](List of culture modifier types.md) | The culture- and religion-derived modifier type names. |
| [`List of example script values.md`](List of example script values.md) | Worked script-value examples. |
| [`List of GUI script functions.md`](List of GUI script functions.md) | The GUI datamodel functions. |
