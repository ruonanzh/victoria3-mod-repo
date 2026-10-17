# Mod structure

This article is timeless and should be accurate for any version of the game.

Understanding the structure of a mod folder is critical to begin modding Victoria 3.

## Mod folder location
By default, the folder for local mods is located at:

- Users/[username]/Documents/Paradox Interactive/Victoria 3/mod on Windows and MacOS
- home/[username]/.local/share/Paradox Interactive/Victoria 3/mod on Linux

Note that Victoria 3 cannot load any mods whose file path includes non-ASCII characters. For example, if your username includes characters with accents or from a different alphabet. You can change the location of local mods by editing Steam/steamapps/common/Victoria 3/launcher/launcher-settings.json, at the line `"gameDataPath": "%USER_DOCUMENTS%/Paradox Interactive/Victoria 3",`. For example, if you change that line to `"gameDataPath": "C:/Paradox Interactive/Victoria 3",`, then the local mod folder would be at C:/Paradox Interactive/Victoria 3/mod instead of its default location.

Mods downloaded from the Steam workshop are located in Steam/steamapps/workshop/content/529340

Note that there is the general mod folder which contains all local mods, and a specific "mod folder" for each mod. The "mod folder" should have a clear, unique name, and it is the counterpart to the game folder of base Victoria 3.

## Metadata
Mods require a metadata.json file within a .metadata folder to provide additional information for the launcher.

The basic structure for the metadata file looks like this:

```
  {
    "name" : "Mymod",                     /* Name of your mod as it should be displayed to players */
    "id" : "com.github.mymod",            /* Id of the mod, as chosen by the modder. This must be unique - we suggest using a reverse domain name 
                                             notation, but any string sufficiently unique will do. It is used when *other* mods refer to yours in relationships.
                                             Please note that the ID needs to be consistent over time. Do not include version numbers or change if you rename your
                                             mod, since that would wreck any relationships. Do not use the example ID given here! */
    "version" : "1.1",                    /* Version of your mod. The launcher will typically understand semantic versioning, others are hit-and-miss */
    "game_id" : "victoria3",              /* Game for which the mod is created. Should always be "victoria3", unless something is seriously off. Safety catch to 
                                             avoid games trying to load mods that are made for other games and violently crashing */
    "supported_game_version" : "1.0.4",   /* Version of the game for which your mod has been made. This works with "*" as a wildcard and "+" to indicate "or higher" */
    "short_description" : "Best mod!",    /* A description of your mod to be shown in popups or other places where longer texts or descriptions with 
                                             decorations won't fit */
    "tags" : ["province", "fix"],         /* Tags defines in what categories your mod will be listed under locally. To prevent tag spamming, a maximum of 5 are allowed.
                                             Please note that this does not guarantee that any mods backend list the mod correctly (make sure to specify tags during upload) */
    "relationships" : [                   /* Descriptions on how your mod relates to other mods. Naturally, an empty list means "no relationships" */
        {
            "rel_type" : "dependency",    /* The type of relationship that this item describes. Supported types are "dependency", "incompatible_with", 
                                             "load_before", "load_after" - The latter three are being tested in launcher version 2023.10-rc */
            "id" : "com.github.othermod", /* The "id" of the mod the relationship concerns. This does not relate to a mod's workshop ID/number string. */
            "display_name" : "Othermod",  /* Display name of the other mod if that mod is *not* present on disk - If you have it installed, we'll use 
                                             the "name" from its own descriptor file */
            "resource_type" : "mod",      /* What type of item you depend on. Currently we only support "mod", but "dlc" is being considered as well */
            "version" : "1.2.*"           /* If this version of your mod depends on a certain version of the other mod, you can put it here. If you don't 
                                             care, just use "*". Same globbing as for "supported_game_version" */
        }
    ],                 
    "game_custom_data" : {                /* Victoria 3-specific information that the game engine needs to know */
      "multiplayer_synchronized" : true   /*  */
    }
  }
```

The .metadata folder may also contain a *thumbnail.png* file that serves as the thumbnail in the launcher.

## Mod folder structure
The specific mod folder is the counter part of base Victoria 3's game folder. Thus, the structure within that folder must be maintained for the mod to function correctly. For example, starting from the mod folder, the structure to modify decisions should be:

- mod/[mod-name-folder]/common/decisions/[mod decision files]
- Common errors are adding or removing a level, the following would not work as the game cannot read the files correctly:
  - mod/[mod-name-folder]/game/common/decisions/[mod decision files]
  - mod/[mod-name-folder]/common/[mod decision files]
  - mod/[mod-name-folder]/decisions/[mod decision files]

Also be aware of typos. Misspelled folders are not read correctly. Also note that most folders are given in plural form when that works in English grammar; the main exception is common/technology.

Certain folders, namely common/history and events, can have any number of subfolders, which can be arbitrarily named. This is mainly useful for organization, to keep related files closer together.

### Additional files
The game engine generally loads full folders and not specifically named files. So for most mods, it is better to define their content in files which are [loaded after the base game](https://vic3.paradoxwikis.com/Mod_files_load_order). For example, a new file into the common/buildings folder named `my_modded_buildings.txt` will load just as well as one that is named identically to a base game file.

### File naming
Mod files should be given a reasonably unique name. A common practice is to use a mod "prefix" such as an acronym or abbreviation of the mod's name. Most game files do not require certain name, but are named for clarity. Files with required names should be indicated in their related article on this wiki.

Also note that file names are very important for the [load order](https://vic3.paradoxwikis.com/Load_order), which determines which mod file is used when two or more mods modify the same game element.

## Mod folder template
[This repository](https://github.com/Victoria-3-Modding-Co-op/Mod-Template) from the Victoria 3 Modding Co-op has a basic mod folder setup along with other helpful resources for starting mod development from scratch.

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • Mod structure • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
