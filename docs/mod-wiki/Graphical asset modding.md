# Graphical asset modding

## 2-D Assets
Victoria 3 primarily uses the *DirectDraw Surface* (.dds) file format for storing texture assets. These are scaled as needed by the UI. While the game can accept any resolution, compressed must have resolutions dividable by 4, or the UI will show buggy scaling behavior and will print an error to the log.

### Exporting images via Paint.NET
Paint.NET is a flexible and beginner-friendly tool for .dds editing. This can be found at <https://www.getpaint.net/>.

#### Saving a compressed image:
In the save configuration:

1. Select **BC7 (sRGB, DX 11+)**
2. Check "**Generate Mip Maps**"
   1. The dropdown below this checkbox determines the interpolation algorithm used to figure out how the image will look when resized. The default should be **Bicubic**, and this is perfectly workable for virtually all cases. You shouldn't change this unless you know what you're doing. It is important to select a good option and avoid other ones because this will determine how your image looks when downsized, as is often the case for things such as [Ideology](https://vic3.paradoxwikis.com/Ideology) icons. Picking a poor option will often lead to your texture looking bad in some UI panels, such as looking very pixelated or "crunchy" when using Nearest Neighbor.

*Remember to keep your resolution divisible by 4!*

Recommended export options for Paint.NET .dds export

#### Saving an uncompressed image:
In the save configuration:

1. Select **B8G8R8A8 (Linear, A8R8G8B8)**
2. Check "**Generate Mip Maps"**
   1. See the note about the interpolation algorithm dropdown above in the compressed image instructions. The default is **Bicubic** and this should be the setting used to make sure your texture looks good unless you know what you're doing.

### Exporting images via GIMP
GIMP is a powerful tool similar to Photoshop in scope and features. This can be found at <https://www.gimp.org/>.

In the export settings:

1. Set your compression to **BC3 / DXT5**
2. **Generate mipmaps** for everything *except* event pictures
3. It is recommended to use **Kaiser** filter for generating mipmaps, as default can look worse

Recommended export options for GIMP .dds export

## 3-D Assets
*WIP*

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • Graphical Assets • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
