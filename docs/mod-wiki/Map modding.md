# Map modding

|  | **This article is undergoing a major reconstruction.**  You are welcome to assist in its overhaul. |

In Victoria III, it is possible to mod the game map by modifying the game files or through the map editor. This includes editing land, seas, rivers, provinces, and states. For modding states, see [state](./State modding.md) modding.

## Getting started
To open the map editor:

- Navigate to the Steam Library, right-click on Victoria 3 and open properties.
- Under the General tab, and within the "LAUNCH OPTIONS" section type `-map editor` in the specified field.
- Simply open Victoria 3. Do this with a map that functions before you try to use anything you've created. You can import new assets later from within the editor.

Alternatively, you can start a campaign in debug mode and use the "map\_editor" [console command](./Console commands.md).

#### Creating a desktop shortcut
If you plan on extensively using the map editor or actively switching between the map editor and game, then having a dedicated desktop shortcut will be handy. To create a dedicated desktop shortcut, follow the steps below or follow this Youtube video by [The Iron Workshop](https://www.youtube.com/watch?v=5kmDfxSb8U0)

- Navigate to the Steam Library, right-click on Victoria 3 and open properties.
- Under the Installed Files tab, select Browse...
- Then select the binaries folder, within this folder should be an application called "victoria3".
- Right click the application, (if you have Windows 11) show more options, then send to Desktop.
- Now on your desktop there should be a shortcut for victoria3 - Shortcut (not be confused with the by default installed Victoria 3 shortcut).
- Right click the shortcut, (if you have Windows 11) show more options, select properties.
- In the properties, there should be Target (ex. `"C:\Program Files (x86)\Steam\steamapps\common\Victoria 3\binaries\victoria3.exe"`)
- Add after the (.exe"): `-map editor`
- Click Okay, which should close the program and then to verify that it has worked, double click the application.
- Please note that the map editor will open the map file of the mod selected and activated in your Victoria 3 launcher.

## Heightmap
The heightmap is the base of every map, and defines the overall shape of the non-paper map. Heightmaps are represented as greyscale images, where black is the lowest possible elevation, and white is the highest possible elevation. The heightmap can be modified within the map editor or through modifying the png file.

### Creating a heightmap with external resources
*Minimal heightmap - created and published with permission from Mekbots.*

For real world locations, NASA provides detailed heightmaps to the public through the topography section of the Blue Marble project.

Fictional heightmaps are usually created using a combination of software, often an image editor like Photoshop or GIMP and terrain generation software like World Machine or Gaea.

A minimal heightmap can be found in the [Total Conversion Sandbox](https://steamcommunity.com/sharedfiles/filedetails/?id=2893763054) mod in the Steam workshop. If you are using the minimal height map, I would recommend copying the contents of the Total Conversion Sandbox into your new mod folder and using this guide to help you set up the mod.

### The base game heightmap
The heightmap is found at /Victoria 3/game/map\_data/heightmap.png, and must be saved as a 16bit grayscale image (within Photoshop: Image:Mode: Grayscale + 16 bit scale).

Along "heightmap.png", there are also two important **automatically generated** heightmap files, "indirection\_heightmap.png" and "packed\_heightmap.png". These will be created by the Vic3 map editor when a heightmap is repacked and saved.

### Common Issues
- Sometimes, a new Heightmap in the map editor, will have random holes or parts of the map will be ocean rather than land. To fix this, select in the tools, Heightmap Resolution (*shortcut*: 5), select the affected tile and click Resoution + (*shortcut*: keypad +).

## Overview of the Victoria 3 map editor
TODO

## Map painting
TODO

### Hubs and locators
To see hubs and locators in the map object editor, turn `Auto refresh` and `Draw city spheres` in the Mask Painter tool on.

## Paper map
TODO

## River mapping
The river map is a file that defines the rivers, which is used by the game engine to place, draw, and render rivers onto your map. River maps are extremely sensitive to mistakes. Improperly created river maps will either cause a crash or will prevent the river map from rendering, depending on the mistake.

There does not appear to be a way to create or modify the river map using the Map Editor and instead must be created or modified using external programs such as GIMP.

### Exporting the river map
The river map file must be exported as an indexed 8-bit RGB image with a specific color palette and must have the same dimensions as the province map. To ensure that the correct palette is used and the file is saved in the correct format, it is recommended to use GIMP to export the river map with the game’s original river map, found at /Victoria 3/game/map\_data/rivers.png, as the base, changing the image’s dimensions if necessary. When done in this manner, the image will be in the correct format when exporting without needing to change any settings.

### River map colors
There are specific colors that are the only ones that can be used within river maps. Each color has a specific meaning, which is used by the game engine to draw rivers onto your map.

#### Reference colors
These colors are there as reference for the person drawing the map. As far as can be determined, they are not used by the game engine when creating or rendering rivers.

- #ffffff (white) indicates land
- #7a7a7a (grey) indicates water

#### Gradient colors
These 13 colors define the width and path of the river. They are a gradient from light blue to dark blue and then dark green to light green, with light blue being having the minimum river width and light green having the maximum river width.

The game engine determines what river width to assign to each of the gradient colors and paint onto your map using a range defined in a separate file, found at /Victoria 3/game/common/defines/jomini/rivers.txt. The engine divides the range, where TH\_MIN is the minimum width and TH\_MAX is the maximum width, equally among the 13 gradient colors. Unmodified, this range is between 1.25 for the minimum width and 2.75 for the maximum width but it can be changed by simply changing the values of TH\_MIN and TH\_MAX within this definition file.

From widest to narrowest, the colors are:

- #00d400 is the maximum river width
- #00a300
- #008100
- #005800
- #030068
- #08009b
- #0e00cf
- #1100e9
- #1500ff
- #005fff
- #0096ff
- #00cbff

- #00e5ff is the minimum river width

#### Special colors
These colors start, combine, or split a river system. See the next section for their use and placement.

- #00ff00 (pure green) indicates the source of a river system
- #ff0000 (pure red) indicates a tributary joining the main river
- #ffc000 (pure yellow) indicates a river splitting

### Proper river construction
Examples of invalid river constructions and an example of a proper construction

Each river system (main river, tributaries, and splits) may only have a single source. This source must be located at the start of the main river. Placing it instead at the start of tributaries will cause the entire river system to not render. Tributaries connect to the main river with a pure red pixel. This pixel may not split the main river, instead it should be placed orthogonally adjacent to it. Splits separate from the main river with a pure yellow pixel. This pixel may not split the main river, instead it should be placed orthogonally adjacent to it. In summary, each river section should have only one of the three special colors at one end, with the other end having no special color; rivers will flow away from green and yellow pixels and flow towards red pixels.

All pixels of a river system must be orthogonally adjacent to no more than two other pixels. If a river is created using diagonally adjacent pixels or if a pixel is orthogonally adjacent to 3 or more other pixels, the river system will fail to render.

## Lakes
Lakes can be created in two ways, either by lowering the height of the lake province below sea level or by using a lake decal. When using a lake decal, be sure to update /gfx/map/map\_object\_data/lakes.txt so that the line `disable_transform_packing=yes` is included. Without that line, lake decals will not appear in game. Note that the map editor will delete this line automatically, so it must be readded after using the map editor.

Lake provinces also need to be added to /map\_data/default.map, in the `lakes` block.

## Province mapping
TODO

## State modding
*See also: [State modding guide](./State modding guide.md)*

In order to add a state region to the game:

- Create the *state region*, by editing or imitating the following vanilla files:
  - /Victoria 3/game/map\_data/state\_regions/00\_west\_europe.txt
    - The IDs of state regions do not need to be sequential. For example, if creating a new state region from provinces that used to be part of the vanilla state region with ID 180, you can give to the new state region an ID of 10180.
  - /Victoria 3/game/localization/english/map/states\_l\_english.yml
  - /Victoria 3/game/localization/english/hub\_names\_l\_english.yml
  - /Victoria 3/game/common/strategic\_regions/african\_strategic\_regions.txt
  - /Victoria 3/game/common/scripted\_triggers/00\_geography\_triggers.txt
- Create a *state* in the new state region, by editing or imitating the following vanilla files:
  - /Victoria 3/game/common/history/states/00\_west\_europe.txt
  - /Victoria 3/game/common/history/pops/00\_west\_europe.txt
- Start up the game in debug mode. The error log will tell you that the "map object locator" is incomplete. This means that your mod contains no positions (XY coordinate pairs) associated with the five hubs that you created in /Victoria 3/game/map\_data/state\_regions/00\_west\_europe.txt. In order to fix this, go to `Documents\Victoria 3\generated` and copy the five automatically-generated position files from that folder to /Victoria 3/game/gfx/map/map\_object\_data in your mod, then close the game.
- Start up the game in debug mode again. The error log will tell you "Cannot connect state adjacency connection, no connection node found in state". This means that, even though you have created positions associated with the hubs in your new state region, those positions have not been properly integrated into the game map as "anchors". In order to fix this, open the map editor (as explained above), switch to the "Spline Network Strip Tool" tab (it looks like a spiderweb on the left side of the window), select the new state region, and click the "Automatically Place All Hub Anchors" button (looks like two arrows pointing at two circles just above the list of state regions). This will create a purple wireframe sphere on top of each position that was automatically generated in the previous step. Now, click the "Save As" button (looks like a pencil on a floppy disk at the upper-left corner of the window). In the dialog box that appears, uncheck all the checkboxes except the one labeled "Spline Network". In the dropdown list next to `"gfx/map/spline_network/spline_network.splnet"`, you should be able to select the folder that corresponds to your mod. Click the "OK" button to save your change to the spline network, and then close the game.
- Start up the game in debug mode again. The error log will tell you "Strip between locators 1234 and 5678 connects state region to a non-adjacent one", or "State has nodes but they are not connected to anything", or something in that vein. This means that your anchors have been properly integrated into the map, but they are not yet properly connected with "strips" (travel paths for military units and graphical effects) to any of the map's other anchors. In order to fix this, open the map editor and switch to the "Spline Network Strip Tool" tab. Use the "Select and Modify Anchors" tool to nudge anchors into preferred positions; use the "Select and Modify Strips" tool to delete bad strips; and use the "Create a Strip Between Two Anchors" tool, in conjunction with the "Spline Type" dropdown, to create new strips. Save the spline network as explained in the previous step, and close the game. (This step may require some trial and error. Use the error log, and look at vanilla state regions, to figure out what the game wants you to do.)
- Start up the game in debug mode one more time. If your new state region is coastal, then the error log will tell you "Port node 1234 in state My New State Region has no harbor node to connect to". This means that you need to add a harbor node – an anchor placed on a water state region that allows travel paths to transfer from land anchors (called "type 0" in the map editor) to water anchors ("type 1"). In order to fix this:
  - Open the map editor.
  - Switch to the "Spline Network Strip Tool" tab.
  - Switch to the "Create New Anchors" tool.
  - Change the "Spline Type" dropdown menu to "coastal\_naval\_route".
  - Click on the map near your new state region's port (land, type 0) anchor to create a water (type 1) anchor, which will act as a harbor. Move the harbor anchor so that it overlaps the port anchor. In the "Spline Anchors" menu at the right side of the screen, give to the harbor anchor the same index as the city anchor (*not* the same index as the port anchor).
  - Switch to the "Select and Modify Strips" tool.
  - Draw a "coastal\_naval\_route" strip from the anchor that you just created to the anchor that is at the center of the water state route that your new state region adjoins.

## Spline modding
TODO

### How to define a spline for a canal
- Note1: It is unknown how to reference 3D model canals when the map editor is launched.
- Note2: First, be sure to create a backup of your MOD. This is because you will need to save only specific files after you have finished editing the spline connections.

- Splines can only connect to adjacent locations in principle. However, canals must pass through land. Does that seem contradictory? The solution is to avoid this contradiction.
- Let's eliminate the land in the area where we intend to connect the canals. That means sinking it into the sea.

1. Enable "Map Content Editor".
2. Select one of the Sea States to which you plan to connect the canal.
3. Please fill in the landmass that is blocking the other Sea State you plan to connect with the color of the Sea State you just selected.

   Map Content Editor (before)

   Map Content Editor (after)
4. Are there no more landmasses blocking your path? If so, press "Apply Changes" to exit "Map Content Editor" mode.
5. Next, launch the "Spline Network Strip Tool".
6. Select "Create a strip between two anchors".
7. Open the "Spline Type" dropdown and enable "naval\_route".
8. Connect the two Sea States. (Detailed instructions are omitted.)

   Spline Network Strip Tool (before)

   Spline Network Strip Tool (after)

   1. Did the spline you added at this time show "Invalid Strip"? In that case, the Map Editor mistakenly believes that the two Sea States are not adjacent.

      Spline Network Strip Tool (error: Invalid Strip)
   2. Let's do some additional processing. Launch "Heightmap Painter".
   3. Look for the "Up" and "Dn" buttons. If you find it, press "Dn".
   4. Please submerge the land blocking the canal.

      Heightmap Painter (before)

      Heightmap Painter (after)
   5. Please try again using the "Spline Network Strip Tool" *(5)* . If that doesn't work, please try again using the "Map Content Editor" *(1)*.
9. Launch the "Spline Network Adjustment Tool" and adjust the fine details of the added splines.

   After adjusting with the Spline Network Adjustment Tool
10. Save the MOD. Save the MOD. Click "Save as" and save **ONLY** gfx\map\spline\_network\spline\_network.splnet.

- Here, I will only explain the definition method for splines in relation to canals. I will omit other adjustments.

### Creating new spline types
This is left blank for the Realms of Exether & Anbennar teams to explain.

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | Map • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
