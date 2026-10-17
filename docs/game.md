# Victoria 3 game mechanics

Victoria 3 (Paradox, Clausewitz/Jomini engine) is a grand-strategy game of society-building in the
Victorian age. A mod is a set of pure PDXScript text files: `.txt`, `.gui`, `.gfx`, `.asset`, and
`.yml`. A mod needs no compilation and no runtime SDK.

## How the game loads mods

- A mod is a directory under the Paradox user-documents directory. The path is
  `<the player's Documents directory>\Paradox Interactive\Victoria 3\mod\<name>\`.
  The player can move the Documents directory, so the tools read it from the system registry.
  The Paradox launcher loads the mod from there.
- The mod directory is **flat** and mirrors the game's own `game/` directory: `.metadata/metadata.json`
  (required), plus `common/`, `events/`, `gui/`, `gfx/`, `localization/`, `map_data/`, and so on.
  There is no `in_game/`+`main_menu/` split.
- At load time, the game layers the mod files on top of the vanilla files. A file with the same
  name overwrites the vanilla file. A top-level object with the same name replaces the vanilla
  object, per the directory's keyword rules (`INJECT:` and `REPLACE:`, which are folder-gated).
  Files load in ASCII order by filename, and a subdirectory loads after its parent.

## What the game systems are

- **Pops** are the people, split by culture, religion, and profession, grouped into **interest
  groups** that push political demands.
- **Buildings** and **production methods** turn goods and labor into output; **goods** flow through
  markets, and **trade** moves them between markets.
- **Laws**, **institutions**, and **government types** shape what the state can do.
- **Technology** advances unlock new production methods and units.
- **Diplomacy** is driven by **diplomatic plays** that can escalate into war; **power blocs**
  organize great powers.
- **Journal entries** and **events** drive the narrative content.

## Where to find the reference

The knowledge layer has its own map. See [`INDEX.md`](INDEX.md).
This page describes the game mechanics only.

## Key reminders

- **Cross-platform.** The game has Windows, macOS, and Linux builds; v1 of this repo locates it on
  Windows only.
- **Localization YAML must be UTF-8 with BOM.** Without a BOM, the game ignores the file silently,
  and that failure is fatal.
- **The vanilla scripts are the source of truth.** `game-scripts/` (from `sync_game_scripts`) holds
  the vanilla `game/` scripts; grep it for exact values. The official wiki (vic3.paradoxwikis.com)
  holds the same data as prose, and can lag one patch behind.
