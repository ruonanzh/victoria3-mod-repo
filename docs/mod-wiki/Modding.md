# Modding

This article is timeless and should be accurate for any version of the game.

*This page discusses the basics of modding. For information about using game mods, see [Mod](./Mod.md)*

**Modding** (using 'mods', short for modification) in Victoria 3 provides players with the ability to alter various aspects of the game or incorporate new features, enhancing the overall gaming experience. While certain elements remain hardcoded and cannot be modified, such as the Migration or Battle casualty logic or map modes, a wide range of options are available for customization.

Mods do not disable achievements in Victoria 3, as the game has a separate rule governing this aspect.

**Modding**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |

## Getting started
### Setting up the mod folder
*Main article: [Mod structure](./Mod structure.md)*

- Create a new folder in `Documents\Paradox Interactive\Victoria 3\mod`, this new folder corresponds with the `game` folder in the base game.
  - Don't directly modify the game files, they will be overwritten with any game update.
- In the new folder, create your "*common*", "*localization*", etc. folders of your mod as needed.
  - Follow the same structure as found in *Victoria 3\game* folder.
- Place .txt and other files for the actual content inside the appropriate folder.
- Add a `.metadata` folder with a *[metadata.json](./Mod structure.md)* file inside. The file may be bare bones, but is a requirement in order for the game to load your mod at all.
- Manually add your mod folder in the launcher with "Add more mods" in the playset.

Alternatively, use the [Victoria 3 Mod Template from GitHub](https://github.com/Victoria-3-Modding-Co-op/Mod-Template) to set up the basic structure.

### Basic tools and resources
**File editors**

- Utilize a source code editor with syntax highlighting and other helpful features, such as Code Search. Popular free programs for modding Victoria 3 include:
  - [Sublime Text](https://www.sublimetext.com/) has the best supported plugin: [Victoria 3 Tools](https://github.com/dementive/Victoria3Tools)
  - [Visual Studio Code](https://code.visualstudio.com/) has the extension Paradox Highlight and [CwTools](https://marketplace.visualstudio.com/items?itemName=tboby.cwtools-vscode)(supports autocompletion, error checking, tooltips and more) available.
  - [IntelliJ](https://www.jetbrains.com/idea/download/other.html) (The Community Edition is free) has the extension [Paradox Language Support](https://plugins.jetbrains.com/plugin/16825-paradox-language-support) available.
  - [Notepad++](https://notepad-plus-plus.org/) is a less powerful choice, but may feel less overwhelming.
    - Select *Perl* as your language syntax for some syntax highlighting since there are no specific plugins for Victoria 3.

**Debug mode**

- Use debug mode in order to access hidden developer information and tools in game.
- This can be done by launching in debug mode from the launcher by going to "Game settings" on the left sidebar and scrolling to the bottom
- Alternatively, add the following launch option in Steam by right clicking on Victoria 3 in the game library, select Properties in the pop up, then at the bottom of the General tab add `-debug_mode`
  - This debug mode when launching from the main play button
- Debug mode also makes the game hotload most game files, letting you test changes more quickly without requiring relaunching the game.
  - A few folder/files are not covered, such as on\_actions; others might require returning to the main menu and starting a new session.
- Alternatively, there are also mods that allow activating and deactivating debug mode in-game, though they don't have the file hotloading functionality.

**Documentation**

- Use **`script_docs`** and **`DumpDataTypes`** commands in the game console to generate other logs with event effects, triggers and scopes.
  - Access the console in-game with `^` when debug\_mode is active.
  - Generated files are located in `Documents\Paradox Interactive\Victoria 3\docs`
  - This is the most reliable technical documentation you can get.
- Most of the documentation is also available on this wiki: see [Effect](./Effect.md), [Trigger](./Trigger.md), [Event target](./Event target.md), and [Data types](https://vic3.paradoxwikis.com/Data_types) for the main examples and see the navigation box at the [bottom of this page](#References) for more documentation pages.
- The [Modding Git Guide](https://docs.google.com/document/d/1bQdOVMY6FTu-2AKXZblYp6bF2-_W2JMUtXc5a0nZ8Ls) is a community made guide for using Git, GitHub/GitLab, and related tools such as KDiff3. It can be a useful stop for questions beyond this wiki, and contains step by step guides for much of what is talked about here. Though the examples are HOI4 based, the principles apply equally well to any Paradox game mod.

### Best practices
- Use proper, tabbed indentation to ensure opening and closing brackets are on the same level. This allows for code folding, easier error spotting, and improved readability.
  - Consider using an automatic formatting extension for your editor.
- When uncertain about implementation, search the base game code for relevant keywords using your editor.
- Use comments, which always start with `#`, to document your script, to navigate easier, or to disable parts of code without deleting them.
- Avoid overwriting items you don't want to change to minimize conflicts and enhance clarity.

### Priority of modded files
*Main article: [Mod compatibility](./Mod compatibility.md)*

- Using a filename that exists in vanilla will overwrite the original file completely.
  - If several files with the same name are used by different mods, the lowest modlist position in the launcher is relevant.
- If an item is modified by differently named files in several mods, the game orders relevant files ASCII-wise by filename.
  - This takes priority over the position in the modlist in the launcher.

### Debugging
- Read the error.log to find exceptions and warnings the game identified in `Documents/Paradox Interactive/Victoria 3/logs`
- Debug mode adds a button that opens the `error.log` for you and also shows its current number of errors since last open.
  - The default editor used for this in Windows is Notepad, but it is configurable.
  - You can either edit Documents/Paradox Interactive/Victoria 3/pdx\_settings.json directly, adding the following keys under the `System` key:
    - `"editor": "C:\\Program Files\\Sublime Text\\sublime_text.exe"` - tells the game which editor to use, you can use any valid editor on your computer, just make sure to use the correct path.
    - `"editor_postfix": ":$:1"` - this is used when opening the editor, for example this Sublime Text specific postfix makes sure the editor is opened scrolled to the latest line.
  - Or you can use the ingame settings editor accessible through the in-game console, under the Settings button. Choose System in the Category selector and find the `Editor` key.

- Backup your work, things can go wrong and it is always good to have a backup.
  - Using a version control system like [**Git**](https://git-scm.com/) allows you to track your changes, revert to a working version and collaborate.
  - If you are part of a team, consider using GitHub for team collaboration. If you are new to Git, a program like [Github Desktop](https://desktop.github.com/) is great for beginners.

- Set *encoding* to `UTF-8 with BOM` inside your editor for code files, especially for localization .yml files.
- For localization files, make sure your filenames end with l\_*language* like `foo_l_english.yml`. Note the first character in the suffix is an ell (lowercase L), not the numeral 1 or uppercase i.
- Join the [**official discord**](https://discord.com/invite/victoriagamePDX) and [**modding discord**](https://discord.gg/XJbqFbHdsM) to ask other modders for help.

## Tools and utilities
There are many third-party tools that can assist in modding, from text editing to image editing and more.

| Name | Category | Link(s) | Description |
| Paradox Highlight | Editor (VS Code) | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=dragon-archer.paradox-highlight) | Up-to-date syntax highlighting for all Victoria 3 files. Other paradox games like Crusader Kings III are also supported. |
| CWTools - Paradox Language Services | Editor (VS Code) | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=tboby.cwtools-vscode) | For editing Paradox game files in Visual Studio Code. It has syntax-highlighting, error checking, auto-completion and more. Based on the [Cwtools library](https://github.com/cwtools/cwtools) for parsing, editing, and validating Paradox Interactive script files. |
| Victoria 3 Tools | Editor (Sublime Text) | [GitHub](https://github.com/dementive/Victoria3Tools) | Victoria 3 Syntax for Sublime Text 4 |
| Paradox Language Support | Editor (IntelliJ) | [JETBRAINS Marketplace](https://plugins.jetbrains.com/plugin/16825-paradox-language-support) | The Intellij IDEA plugin for Paradox Interactive game modding. It has syntax-highlighting, error checking, auto-completion and more. |
| Victoria 3 Modding Support | Editor (IntelliJ) | [JETBRAINS Marketplace](https://plugins.jetbrains.com/plugin/25284-victoria-3-modding-support) | Adds support for the Victoria 3 definition and modding files. It has syntax-highlighting. |
| Tiger Mod Validator | General | [GitHub](https://github.com/amtep/tiger) | Tiger pounces on bugs. Checks Crusader Kings 3, Victoria 3, or Imperator: Rome user mod files for mistakes and warns about them. For example: missing localizations, or using a faith trigger on a character. |
| Tiger Mod Validator for VSCode | Editor (VSCode) | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=unlomtrois.ck3tiger-for-vscode) | An extension for VS Code that integrates Tiger logs with Problems tab and allows to see issues directly in the IDE. |
| Tiger Mod Validator Github Action | General | [GitHub](https://github.com/kaiser-chris/tiger-action-public) | A base repo and guide on how to setup ck3-tiger as a GitHub workflow action. |
| Pdx-Unlimiter | General | [GitHub](https://github.com/crschnick/pdx_unlimiter) | A powerful and smart savegame manager; it can edit save files and it can preview modded flags without starting the game. |
| Map data editor | General | [GitHub](https://github.com/Linnest2020/Vic3-mapdata-editor) | A mapdata editor to edit mapdata in common/history/states visually, it is helpful to edit the which provinces are which countries. |
| Vicky-Mapgen | General | [GitHub](https://github.com/Chease23/Vicky-Mapgen) | A Map Generator generates provinces by heightmap.png and boundaries.png |
| Music Mod Creation Tool | General | [GitHub](https://github.com/runite-drill/music-mod-creation-tool) | As its name, it is for music mod, and now it supported Vic 3 |
| UWPDumper | General | [GitHub](https://github.com/Wunkolo/UWPDumper) | A tool to extract files from Microsoft Store games. |
| Clausewitz Maya Exporter | General | [Paradox Forums](https://forum.paradoxplaza.com/forum "forumdirect:/threads/information-and-faq.924764/") | A tool to create and export 3D models to use in vic3 and other Clausewitz games. |
| Jomini.js | General | [GitHub](https://github.com/nickbabcock/jomini) | A powerful parsing library in javascript based on webassemby, has a C version named [Rakaly](https://github.com/rakaly/librakaly). |
| Victoria 3 Mod Template | General | [GitHub](https://github.com/Victoria-3-Modding-Co-op/Mod-Template) | A template to set up a GitHub repository for Victoria 3 mods. |

## Common problems
*Main article: [Troubleshooting](./Troubleshooting.md)*

- **Some local mod files fail to load.**
  - **Symptoms:**
    - A mod is correctly shown up in the launcher, it is added to the playset, but some files do not have an effect.
    - `error.log` contains a line such as `[virtualfilesystem.cpp:562]: Could not create lexer from file due to 'fopen() failed: 2'` followed by a line about encoding.
    - Potentially also problems with opening `error.log` by clicking on the error deer in game launched with the `-debug_mode` flag.
  - **Likely causes:**
    - Permissions. The game could have trouble accessing the mod files due to broken permissions.
    - File path containing non-ASCII characters. Victoria 3 has troubles with this (similarly to other games such as [Hearts of Iron IV](http://hoi4.paradoxwikis.com/Modding#Common_mistakes "hoi4:Modding")). In Windows, this can happen due to the user's username, and therefore the user folder containing Documents/Paradox Interactive/Victoria 3/, containing non-ASCII characters. You can easily check whether this is the case by looking at your filepath.
  - **Solutions:**
    - You can change the location of local mods by editing Steam/steamapps/common/Victoria 3/launcher/launcher-settings.json, at the line `"gameDataPath": "%USER_DOCUMENTS%/Paradox Interactive/Victoria 3",`.
    - For example, if you change that line to `"gameDataPath": "C:/Paradox Interactive/Victoria 3",`, then the local mod folder would be at C:/Paradox Interactive/Victoria 3/mod instead of its default location.

## Terminology
Victoria 3 modding has a number of terms that are derived from or similar to those in general programming. The following is a partial list of common terms.

Script
:   This is the 'code' that modders can use to change how the game functions.

[Effect](./Effect.md)
:   Script commands that change the game state in some way

[Trigger](./Trigger.md)
:   Script checks of the game state that are used to condition effects

[Scope](./Scope.md)
:   The context for a trigger or effect

[Event target](./Event target.md)
:   A keyword for a scope or game value

Type
:   The 'class' for a game object

Key
:   The script name of a type

Tag/TAG
:   The key for a country

## See also
[Console commands](./Console commands.md)

### Guides
- Grester's Compendium
- [State modding guide](./State modding guide.md)

## References
