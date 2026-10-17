# Model modding

## Introduction
The following guide will explain how to edit or create new models into the game.

### Tools:
- A tool to edit and export in .mesh format, like IO PDX Tools by Ross G.
- A 3D modeling software, like Blender.
- A text editor like Notepad++ or Visual Studio Code to edit .asset files.

## Editing a model
### Finding the model to edit
The first thing is to find the model to edit.
To do so, find the Victoria 3 installation folder (not the mod folder, the folder where Victoria 3 files are).
In this folder there is a "gfx" folder, inside it there is another folder called "models". In this folder there are all the 3D models in the game.
Search the model to edit inside that folder, in this example the model used will be the european city urban center that is located in "gfx/models/buildings/european/city\_urban\_center\_01".

On this folder, there are the following files:

- *.asset* file. This file does not contain the mesh data, but it does contain how the game identifies and uses the mesh data. Is the bridge between the .mesh file and the rendering in the game.
- *.mesh* file. This where the 3D model is contained. This is the file to edit.
- *.dds* files. There are the textures of the model.

To start working in the mod, the folder structure must be replicated and the files to edit must be copied. In this example case, the folder replicated is "gfx/models/buildings/european/city\_urban\_center\_01" with its contents.

### Editing a 3D building model
To edit a 3D model, a 3D modelling software is needed with the tools to import paradox *.mesh* files (other games might use *.mesh* too, but they are not the same type of file, as it depends on the game engine being used). In this example, Blender and the PDX Blender Tools will be used, wich are free to use.

On Blender, open the *.mesh* file on the mod folder (**not in the game folder**, don't edit game assets, this can lead to isues that will be only fixed by re-downloading the game again). In this case, the *.mesh* opened in Blender with the Tool is "european\_city\_urban\_center\_01.mesh".

The .mesh file contains the following objects:

- LOD\_0\_decal\_decal
- LOD\_0\_mesh\_mesh
- LOD\_0\_worlddecal\_worlddecal
- LOD\_1\_decal\_decal
- LOD\_1\_mesh\_mesh
- LOD\_1\_worlddecal\_worlddecal
- LOD\_2\_decal\_decal
- LOD\_2\_mesh\_mesh
- LOD\_2\_worlddecal\_worlddecal
- LOD\_3\_decal\_decal
- LOD\_3\_mesh\_mesh
- LOD\_3\_worlddecal\_worlddecal

The file contains 3 models, a decal, a mesh, and a worlddecal that are duplicated 4 times (one each LOD\_X). This is for optimisation, each LOD has a different **L**evel **O**f **D**etail that the game engine manages according to how close the camera is to the model, if the camera is very close, the model will display a high resolution object (LOD\_0 objects), but if the camera is very far away, the model will display a low resolution object (LOD\_3 objects); the other LOD are to use inbetween very close and very far. Also, the LOD used depends on the graphics quality set up by the player. This means that a model has to be modelled 4 times for the same object, but in practice creating the other LOD are easy once the main LOD exists (this will be explained later).
For editing, the LOD of focus must be LOD\_0.

There are 3 objects:

- *decal\_decal*. This is a plane that shouldn't be modified. This plane renders a texture under the building so it can have a custom ground texture. In the case of the City Urban Center, it has a cobblestone square with some paths.
- *mesh\_mesh*. This is the 3D model. It can be modified or reworked from the ground up.
- *wolddecal\_worlddecal*. This is a decal for the game engine that shouldn't be edited. This decal renders the texture of the city ground (not the building, but the entire city. In this case, it renders a cobblestone street that is common to all european culture city building. This decal also shows the size of the building in the grid (a city is created by spawning the models in a square grid. The model shouldn't be bigger than the world decal size).

For basic edits, the only object to be edited is the LOD\_0\_mesh\_mesh; for advanced edits, the decal\_decal might be scaled to fit the edited mesh\_mesh; and for very advanced (with coding) edits, the wolrddecal\_worlddecal can be edited.

TODO

## Notes
- `.asset` files must be encoded with LF (Unix style) line endings, using CRLF (Windows style) line endings will break their functionality.

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | 3D Models • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
