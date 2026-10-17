# Interface modding

## Templates and types
### Templates
Templates are simply containers for properties. So `using = template_name` simply adds all properties (like `size` etc.) and widgets/containers, that are in the template block, to the current widget/container.

**Defining a Template**

Create a new `.gui` file in the `game/gui` folder (subfolders are also supported):

```
template example_template {
    container = {
        # Some container
    }

    # Properties
    size = { 100 100 }
}
```

### Types
Types are widget/container in itself that allow reuse and overwriting properties in it.

**Defining a Type**

Create a new `.gui` file in the `game/gui` folder (subfolders are also supported):

```
types my_types {
    # Base type
    type example_base_type = widget {
        # Anything you want
        # Defining a set of overwritable properties or widgets/containers
        block "test_block" {
            size = { 100 100 }
        }
    }

    # Extended type
    type extended_example_type = example_base_type {
        # Anything you define here will be added at the bottom of the base type
        # Overwriting a predefined block
        blockoverride "test_block" {
            size = { 200 200 }
        }
    }
}
```

### Using a type
Types can be referred anywhere even in other types:

```
widget = {
    # Using the type as is
    example_base_type = {}

    # Overwriting a block in the type
    example_base_type = {
        # Overwriting a predefined block
        blockoverride "test_block" {
            size = { 200 200 }
        }
    }

    # Extending the type
    example_base_type = {
        widget = {
            # This widget will be added at the bottom of the existing content
        }
    }
}
```

## Creating custom panels
### Setting up the windows
Create a type for the window you want to implement.

This is an example for a side panel:

```
type example_side_panel = default_block_window {
    # Important to make sure the window does not overlay other base game stuff
    layer = layer_ingame_menu
    
    # Decide visibility i.e. when should your window be shown
    # Best practice is using the GUI variable system
    visible = "[GetVariableSystem.HasValue('com_open_window', 'example_side_panel')]"

    # Adding this to the show state is important otherwise your window may be overlayed by
    # base game windows or not close base game windows correctly
    # See the base game for how to set sound effects and other stuff here
    blockoverride "animation_state_block" {
        state = {
            name = _show
            # Close other open panels before showing this one
            on_finish = "[InformationPanelBar.ClosePanel]"
            on_finish = "[MapListPanelManager.CloseCurrentPanel]"
        }
    }

    # Your window implementation
    # See base game panels for examples on how to set up
    # tabs, fixed bottoms and other stuff
}
```

For full screen panels the above points still apply but for your window to work correctly you also need to hide some GUI components. To do that you either overwrite the base game logic or use the [Community Mod Framework](https://github.com/Victoria-3-Modding-Co-op/Community-Mod-Framework). It has guides on how to set up the hiding of the GUI elements. The main difference for full screen panels is that they are based on another base type:

```
type example_full_screen_panel = fullscreen_block_window {
    # Same as side panel
}
```

### Adding your panels to the game
To add your panels to the game you will need to create a scripted widget.

First create a new GUI file and set it up like this:

```
widget = {
    name = example_panels
    layer = layer_ingame_menu
    size = { 100% 100% }

    # Full screen panels go here
    # Refer to them like this:
    example_full_screen_panel = {}

    vbox = {
        parentanchor = top|left
        layoutpolicy_horizontal = expanding
        layoutpolicy_vertical = expanding
        margin_top = 85 #margin topbar

        widget = {
            layoutpolicy_horizontal = expanding
            layoutpolicy_vertical = expanding

            hbox = {
                layoutpolicy_horizontal = expanding
                layoutpolicy_vertical = expanding

                # Side panels go here
                # Refer to them like this:
                example_side_panel = {}

                expand = {}
            }
        }
    }
}
```

Next you need to register your scripted widget. To do that create a new TXT file in the `game/gui/scripted_widgets/` folder and add a line like this

```
gui/name_of_the_file_with_widget.gui = example_panels
```

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | Interface • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
