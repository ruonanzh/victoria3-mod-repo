# Troubleshooting

This article has been verified for the current version (1.13) of the game.

**Troubleshooting** is the process of finding bugs or other issues and fixing them. There are different tools and processes to help with troubleshooting. The most important one being the error log.

## Error log
The error log can be accessed either by clicking on the error manul in the bottom right corner of the screen when the [debug\_mode](./Console commands.md#Debug_mode) is activated or by going to the `logs` folder.

Depending on the operating system the `logs` folder is located in a different place:

| OS | Path |
| Windows | %USERPROFILE%/Documents/Paradox Interactive/Victoria 3/logs/ |
| Linux | ~/.local/share/Paradox Interactive/Victoria 3/logs/ |
| Mac OS | ~/Documents/Paradox Interactive/Victoria 3/logs/ |

The error log gets split into multiple files on starting the game or when the current log file gets too long. The most current log entry is named `error.log`. The oldest log file is usually named `error.5.log` .

### Analyzing error log entries
Each entry in the error log can range from absolutely catastrophic to not really relevant. The error log however does not indicate how bad an error is.

Error logs consist of the time it occurred, an indication of what kind of error it is as well as additional information:

```
 [23:38:26][jomini_eventmanager.cpp:376]: Event cristo_redentor.1 is orphaned
```

This error for example occurred at `23:38:26`, is an error of an event (`[jomini_eventmanager.cpp:376]`) and means that the event `cristo_redentor.1` is not fired by an [effect](./Effect.md), [on\_action](./On action.md) or similar. This might be intentional or a bug that needs to be fixed.

The same is true for this error:

```
 [23:38:26][jomini_effect.cpp:1135]: Variable 'foo' is set but is never used. Note that use in localization doesn't count due to technical limitations. Use in unused scripted triggers and effects also does not count
```

It means that the variable foo has been set but is not used in a trigger. This could be intentional if the variable is only used to display something in a localization or could indicate that it was misspelled somewhere.

If the variable is intentionally not used, you can use it in a trigger that is not actually used to remove the error from the log.

#### Locating error sources in script
Some mistakes can cause the error log to get flooded with errors. One of those error messages looks like this:

```
 [08:39:29.969](debug:268): [2026-05-12 08:39:29.192] [cw] [error] [pdx_persistent_reader.cpp:268] Error: "Unexpected token: character_role_prefix_thief, near line: 129" in file: "common/character_roles/prefix_character_roles.txt" near line: 135
```

It indicates an error in a specific file (`common/character_roles/prefix_character_roles.txt`) on or near a specific line (`near line: 129"`). It also clarifies what (`character_role_prefix_thief`) exactly confused it by being unexpected (`Unexpected token`).

The first step should be too look at that specific file to find the cause of the issue (Note that the lines surrounding the specified lines are important, so it's best to not just look at that specific line):

```
character_role_prefix_inspector = {
	texture = "gfx/interface/icons/character_role_icons/prefix_inspector_role.dds"

	title_format = custom

	priority = 20

	spawn_characters_to_pool = no

### Criminals ###
character_role_prefix_thief = {
	texture = "gfx/interface/icons/character_role_icons/prefix_thief_role.dds"

	priority = 20

	spawn_characters_to_pool = no
}

character_role_prefix_crime_boss = {
	texture = "gfx/interface/icons/character_role_icons/crime_boss_role.dds"

	priority = 25

	spawn_characters_to_pool = no
}
```

Looking at the `character_role_prefix_thief` entry, there seems to be nothing wrong. But there is an error in line 125. The closing bracket is missing there which causes hundreds of errors to flood the error log. This is caused by the fact that a missing bracket causes all definitions below it to break which can cause even more errors in other files that use `character_role_prefix_thief` and other character roles.

Therefore it is often best to start with the error at the top and see if it can cause the other errors to appear.

## Identifying crash sources
Most often small errors do not cause crashes of the game, but in some edge cases it still happens. In this case, the error log often doesn't help to identify the issue as the game crashes before logging the error.

Therefore it is important to know methods to find the source of a crash or to know the most likely culprits.

### Divide and conquer
The **divide and conquer** strategy is a way to quickly find something in huge files or collections of files. In the context of Victoria 3 troubleshooting it is often useful to identify the source of a crash, especially if the crash occurs on start up of the game.

To use divide and conquer it is necessary to delete half the files of a mod and see if the game still crashes. If it still crashes, the half that is still existing is probably the issue. If the game does not crash anymore, then the issue lays in the deleted half of the files.

The process can get repeated over and over to identify the file that is causing the issue. However it does not always work as sometimes the crash only occurs in specific situations that require multiple files to work together.

### Examples of crash sources
| Cause | Explanation |
| non existing traits in character templates | Traits that do not exist can cause the game to crash when the character is created. |
| mistakes in geographic\_region files | The geographic\_region files seem to cause crashes quite often if there is an issue like a spelling issue in them. |

### List of known error log codes
| Code | Explanation |
| [jomini\_eventmanager.cpp:376] | Event error |
| [jomini\_effect.cpp:1135] | Variable error |

## Debug log
The debug log is another useful file which can provide helpful information for debugging.

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • Troubleshooting |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
