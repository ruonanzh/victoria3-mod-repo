# State modding guide

*See also: [State modding](./State modding.md), [Map modding#State Modding](./Map modding.md#State_Modding)*

## Creating a new state region
This guide covers how to create a new state region without editing the province map.

Important starting notes:

- It's recommended to do text editing with a better editor than plain Notepad. My recommendations are Notepad++ (which is what this guide will use), Visual Studio Code and Sublime.
- All .txt files in the game must have the encoding `UTF8-BOM`. They may not work properly if they don't have that. If you don't know how to set the encoding, just copy an existing file and change its contents.
- Everything after a `#` in a text file is "commented out", meaning the game ignores what's written after the #.
- This guide is done in the context of a mod that is already set up and working properly, so make sure you've got that important step done first.

### Get the province IDs
First of all, you need to know the IDs of the provinces that will be taken from the old state and being the part of the new state. One way you can do this is to go in game with debug mode and hover on a land, you will find "Province ID". Take note all of them. Alternatively, open /Victoria 3/game/map\_data/provinces.png and note the hexcode color of provinces in that image.

In this guide, we will take Singapore province and form Singapore as its own state. The province ID of Singapore is `xC00130`. You may take note of multiple province IDs.

### Define the state region
On this part, we will define the map data of the newly created Singapore state. You mod file will be here:

/<mod>/map\_data/state\_regions/<filename>.txt

You can find the corresponding file here

/Victoria 3/game/map\_data/state\_regions/<anyfile>.txt

From there, copy the related states' script and paste in the new mod file. Remove any provinces from the old states and move them to the new state, including the hubs (city, port, farm, etc). Also, on the new state, only use the included province IDs for those hubs.

Each state region needs a unique script name and state ID. Here, we'll use `STATE_SINGAPORE` as the script name, and `800` as the state ID.

In our Singapore example, the script will look like this:

```
STATE_MALAYA = {
    id = 540
    subsistence_building = "building_subsistence_rice_paddies"
    provinces = { "x0080B0" "x08673B" "x23578B" "x374A68" "x660411" "x66170B" "x6CFA94" "x76546D" "x78EF92" "x8080B0" "x80C0B0" "x8E3305" "xAA2287" "xAF3737" "xB6B53D" "xC84C4C" "xCAB9F2" "xCF3E8D" "xD8E596" "xE87C53" "xF9F87A" "xFCBAFC" }
    city = "x8E3305"
    port = "x8E3305"
    farm = "x76546D"
    mine = "x08673B"
    wood = "xCAB9F2"
    arable_land = 35
    arable_resources = { "bg_rice_farms" "bg_livestock_ranches" "bg_coffee_plantations" "bg_tea_plantations" "bg_sugar_plantations" "bg_banana_plantations" }
    capped_resources = {
        bg_coal_mining = 32
        bg_lead_mining = 24
        bg_logging = 17
        bg_fishing = 10
    }
    resource = {
        type = "bg_rubber"
        undiscovered_amount = 40
    }
    naval_exit_id = 3052
}
STATE_SINGAPORE = {
    id = 800
    subsistence_building = "building_subsistence_rice_paddies"
    provinces = { "xC00130" }
    city = "xC00130"
    port = "xC00130"
    farm = "xC00130"
    mine = "xC00130"
    wood = "xC00130"
    arable_land = 4
    arable_resources = { "bg_rice_farms" "bg_livestock_ranches" "bg_coffee_plantations" "bg_tea_plantations" "bg_sugar_plantations" "bg_banana_plantations" }
    capped_resources = {
        bg_logging = 1
        bg_fishing = 12
    }
    naval_exit_id = 3052
}
```

#### Strategic region
To include the new state in a strategic region, you need to define the mod file on this path:

/<mod>/common/strategic\_regions/<filename>.txt

And the corresponding file will be here:

/Victoria 3/game/common/strategic\_regions/<any file>.txt

Next, you need to find the desired regions script name and redefine that on the new file. In our Singapore example, the region is Indochina. So, the new file will look like this:

```
region_indochina = {
	graphical_culture = "asian"
	capital_province = x5C3070
	map_color = { 0.9 0.1 0.1 }
	states = { STATE_CAMBODIA STATE_MEKONG STATE_TONKIN STATE_ANNAM STATE_LAOS STATE_CHIANG_MAI STATE_NAKHON_RATCHASIMA STATE_MALAYA STATE_TENASSERIM STATE_BANGKOK STATE_KACHIN STATE_SHAN_STATES STATE_BURMA STATE_PEGU STATE_SINGAPORE}
}
```

Notice that we add `STATE_SINGAPORE` there.

#### Localization
To give the state region an in-game name, create a file on this path.

<mod>/localization/english/map/<filename>\_l\_english.yml

Remember, add "`_l_english`" at the end of the file name. It's a lower case "L", not an uppercase "i" or a 1.

The mod file will look like this.

```
l_english:
 STATE_SINGAPORE:0 "Singapore"
```

### Map elements
*Main article: [Map\_modding#State\_Modding](./Map modding.md#State_Modding)*

There are a number of map elements, which are required for good function of new state regions

### State history
To define the new state's history, see the following guide.

## Overwriting existing states
*See also: [Mod files load order](https://vic3.paradoxwikis.com/Mod_files_load_order)*

The examples below are for new countries but this also works for existing countries.[[1]](#cite_note-1) This guide only mentions relevant history files. All other history files work normally and do not need anything special. This whole process is needed so the games pop and building calculation is correct. If you annex the full state in /<mod>/common/history/states, the buildings and pops will not be fully integrated and buildings will have no workers at game start.

None of these files should overwrite base game files.

### Defining the state
/<mod>/common/history/states

The first thing we do is create a new file.
In this file, we add all provinces except one province per country that already owns the state. This creates a new split state that is totally empty, and it does not annex any existing states.

Here is an example where I gave Guatemala to `GOK`:

```
STATES = {
    s:STATE_GUATEMALA = {
        create_state = {
            country = c:GOK
            owned_provinces = {
                x02073E x7D333F x464F6A x0F5049
                xBD8628 xA9090A x78C465 xD9BEFE
                xD030C0 x42124E xB2E11E x50B040
                x2D4EB6 x5449D0 x6D71DA x702CD9
                x65C19A x30E01C x50B0C0 xC67219
                xD176F3 xFA4B41 x011E0F
            }
        }
    }
}
```

If you are creating a new state region or split state instead of overwriting a state, only add the relevant provinces.

### Adding pops
/<mod>/common/history/pops

When adding pops we need to remove existing ones from the original state owner, so when we later annex it properly we do not get their population. The removal and recreation leads to proper integration of pop workplaces.

**NOTE**: This needs to be done even if you plan to keep the same pops. In that case you will need to copy the pops from the base game.

In this example we kill the whole population of Guatemala first, and then add our own. We need to do it for UCA and GBR since it is a split state:

```
POPS = {
    s:STATE_GUATEMALA = {
        region_state:UCA = {
            kill_population_percent_in_state = {
                percent = 1 # 100%
            }
        }
        region_state:GBR = {
            kill_population_percent_in_state = {
                percent = 1 # 100%
            }
        }
        region_state:GOK = {
            create_pop = {
                culture = orcish
                size = 200000
            }
            create_pop = {
                pop_type = slaves
                culture = central_american
                size = 164404
            }
            create_pop = {
                pop_type = slaves
                culture = mayan
                size = 312000
            }
        }
    }
}
```

If you are creating a new state region or split state instead of overwriting a state, you only need to kill pops if you are redefining how many pops are in the original states.

### Adding buildings
/<mod>/common/history/buildings

When adding buildings we need to remove existing ones from the original state owner, so when we later annex it properly we do not get their buildings without workforces. The removal and recreation leads to proper integration of pop workplaces. To find which buildings to remove see the base game history files.

**NOTE**: This needs to be done even if you plan to keep the same buildings. In that case you will need to copy the buildings from the base game.

In this example, we remove all buildings of Guatemala first and then add our own. We need to do it for UCA and GBR since it is a split state:

```
BUILDINGS = {
    s:STATE_GUATEMALA = {
        region_state:UCA = {
            # Clean up base game buildings
            remove_building = building_government_administration
            remove_building = building_maize_farm
            remove_building = building_livestock_ranch
            remove_building = building_barracks
        }
        region_state:GBR = {
            # Clean up base game buildings
            remove_building = building_port
        }
        region_state:GOK = {
            create_building = {
                building = "building_port"
                add_ownership = {
                    country = {
                        country = "c:GOK"
                        levels = 2
                    }
                }
                reserves = 1
                activate_production_methods = { "pm_anchorage" }
            }
            # More buildings could be here
        }
    }
}
```

If you are creating a new state region or split state instead of overwriting a state, you only need to remove buildings if you are redefining how many are in the original states.

### Annexing the state properly
/<mod>/common/on\_actions

Finally, we need to annex the now empty states by stealing the last provinces. This needs to be done from the `on_game_started` [on action](https://vic3.paradoxwikis.com/On_actions). Be sure to create a new on actions file with a custom on action for compatibility.

This is an example where we steal the last two provinces (GBR and UCA) for Guatemala:

```
on_game_started = {
    on_actions = {
        mod_history_setup_on_action
    }
}

mod_history_setup_on_action = {
    effect = {
        s:STATE_GUATEMALA = {
            set_owner_of_provinces = {
                country = c:GOK
                provinces = {
                    xDEC8D3
                    xD0B040
                }
            }
        }
    }
}
```

Of course, skip this step if not overwriting the original states.

## References
1. [↑](#cite_ref-1) Adapted from [Bahmut | Chris's guide](https://discord.com/channels/827163966551621662/1346877562143510622) on the [Victoria 3 Mod Co-op Discord](https://discord.com/invite/uUbuMTQjA7)

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • State modding guide |
