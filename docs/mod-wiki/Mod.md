# Mod

This article is timeless and should be accurate for any version of the game.

*For instructions on how to mod, see [modding](./Modding.md)*

A **mod** (short for *modification*) is an alteration of the game and the objective of [modding](./Modding.md). Modifications can range from small tweaks to total conversions.

## Installation
Mods can be downloaded and installed from several sources:

- Automatically using Paradox Launcher or manually from [Paradox Mods](https://mods.paradoxplaza.com/games/victoria3)
- Automatically using Steam's Client application from the [Steam Workshop](https://steamcommunity.com/app/529340/workshop/) (Steam version only)
- Manually from the [Victoria 3 User Modifications sub-forum](https://forum.paradoxplaza.com/forum/forums/victoria-3.1095/)
- Manually from [Nexus Mods](https://www.nexusmods.com/games/victoria3/mods)

Mods from the Steam Workshop will be placed in `…\SteamLibrary\SteamApps\workshop\content\529340`, named by their Workshop ID.
Mods from Paradox Mods will be placed in the mod folder location, named `PDX_*MOD_ID*`.

### Locate Your Victoria 3 Mod Directory
When running Victoria 3 from Steam or the Paradox Launcher, the mod installation folder is:

| OS | Path |
| Windows | `%USERPROFILE%\Documents\Paradox Interactive\Victoria 3\mod\` |
| Linux | `~/.local/share/Paradox Interactive/Victoria 3/mod/` |
| Mac OS | `~/Documents/Paradox Interactive/Victoria 3/mod/` |

If the mod folder doesn't exist, create it.

Never install mods into the game installation directory, as the mod will not be properly loaded.[[1]](#cite_note-1)

Check in the mod description the Victoria 3 version compatible with the version of the mod. If needed, rollback to an older [patch](https://vic3.paradoxwikis.com/Patches), using “Steam Beta” tab in Steam or the “Game Settings” tab in Paradox Launcher.

## Manual installation
The steps are usually the following (refer to specific mod instructions, if any):

1. **Prepare**: Remove any existing installation of the mod (mod folder and .mod file). This is very important, as the game loads all files present in mod folder, so old mod files that are no longer present or were renamed in a new version of the mod would conflict.

   :   Clear your gfx cache, by deleting the folder *<Victoria 3\_settings>\<mod\_name>\gfx*, if any.
2. **Place Mod Files Appropriately**: Extract the downloaded archive, so that the mod folder contains the '.mod' file and directory of the mod.
3. **Enable the Mod in the Launcher**: Start Stellaris and select the mod in the "Mod" tab. Note that the mod may have a different name in the launcher than the name of the '.mod' file.
4. **Launch the Game**: With the mod enabled, click "Play" to start Stellaris with the mod active!

If you are having trouble, then use the launcher's mod area to create an empty mod from within the launcher. Once created, go to the mod/ folder to see the structure of the newly generated mod and compare it with the structure of the mod you are trying to install.

For more info, see [Setting up the mod folder](./Modding.md#Setting_up_the_mod_folder).

## Mods lists
Most mods are published on the Steam Workshop:

- [Victoria 3 Steam Workshop](https://steamcommunity.com/app/529340/workshop/)

## Mods with wiki pages
*Wiki pages for Victoria 3 modifications are the responsibility of the mod's developers.*

- [Victoria 3 to Hearts of Iron IV converter](https://vic3.paradoxwikis.com/Victoria_3_to_Hearts_of_Iron_IV_converter)

## See also
- [Modding](./Modding.md)

## References
1. [↑](#cite_ref-1) i.e.:`…\SteamApps\common\Victoria 3\mod` or `~/.local/share/Paradox Launcher/games/Victoria 3/mod`

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • Mods • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
