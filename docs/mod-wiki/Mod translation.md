# Mod translation

This article is timeless and should be accurate for any version of the game.

## Translating mods using ParaTranz
[ParaTranz](https://paratranz.cn/projects?game=vic3) is a platform for translating PDX mods into different languages. They have a lot of really nice features:

- Offering translations from other mods that partially match
- Exporting with updated language tags (`l_[language]` suffixes and such)
- Doing checksum comparisons on file and localization key level when importing a new version of a localization file
- And a lot more

### Existing Projects
There are a lot of existing projects for big mods. I have contacted an existing project for a Chinese translation of my mod and now include their translations into my mod officially and provide them with updated loc files before updates.

### Link
- <https://paratranz.cn/projects?game=vic3>

### Setup Guide
First create a project which is straight forward.

Go to files and click "Manage Files".

Click "Add Files".

Check the "update" checkbox (for the future) and drag & drop the whole english localization folder into the marked area.

If you already have translations you can import those as well.
The tool does checksum checks and only updates localizations keys that have changed.

Then to translate go to the files page (not the manage files one) and click on a loc file.

Then it will send you to the translation view.
As you can see it knows PDX formatting and even warns translators if a formatting or concept tag is missing in the translation.
Also it has support for linking multiple machine translators like DeepL, Google Translate, Deepseek and so on.

I also recommend activating the "replace yml" settings in the export settings

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | Mod translation • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
