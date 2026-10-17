# Mod compatibility

This article details various compatibility mechanics, which allow multiple mods to work together more easily and also allow for easier maintenance of mods by not relying directly on base game files.

## Overview
These are the basic compatibility mechanics, which apply to most game files, with exceptions noted where necessary.

### File loading order
Victoria 3 always loads files in a set order. This does not matter for the game's functionality, but it matters greatly for compatibility of mods.

All files are loaded in [ASCII order](https://en.wikipedia.org/wiki/ASCII#Printable_character_table), this means that a file titled `00_foo.txt` is loaded before a file titled `01_bar.txt`, and so on. It does not matter whether that file is from the base game or a mod. Files in subfolders are loaded after files in the parent folder, for example an event file at events/zz\_example.txt is loaded before an event file at events/example/00\_example.txt, even though the latter file comes earlier in ASCII order.

### File overwrites
A direct file overwrite occurs when a mod has a file with the same exact filename and path[[1]](#cite_note-1) as a file in the base game, DLC, or another mod. In this case, a mod's file takes precedence over base game or DLC file, and a file from a mod lower in the playlist takes precedence over one from higher in the playlist.

Whichever file has the highest precedence is used, as if the other files did not exist.

### Game object load order
Defined game objects – such as buildings, ideologies, or laws – are loaded in the order they are defined.

For example, the two law files `00_test_laws.txt` and `01_example_laws.txt`:

```
File: 00_test_laws.txt
  law_foo = {
     law_group = example_group
     <law definition>
  }
  law_bar = {
     law_group = example_group
     <law definition>
  }
-------------------------------
File: 01_example_laws.txt
  law_baz = {
     law_group = example_group
     <law definition>
  }
  law_test = {
     law_group = example_group
     <law definition>
  }
```

These are equivalent to a single file that has all four laws:

```
law_foo = {
   law_group = example_group
   <law definition>
}
law_bar = {
   law_group = example_group
   <law definition>
}
law_baz = {
   law_group = example_group
   <law definition>
}
law_test = {
   law_group = example_group
   <law definition>
}
```

Generally, there is little to no gameplay effect, but this does affect the visual ordering of the objects in relevant screens.

### Inject and replace
The `INJECT:` and `REPLACE:` keywords allow for modifying defined game objects without overwriting the original files.[[2]](#cite_note-2) Most defined game objects require the use of these keywords or else require a direct file overwrite. The list of folders that use these keywords is listed below.

Keywords

| Keyword | Functionality |
| `INJECT:` | Appends the injected script at the end of an existing entry. Errors if the specified entry does not exist. |
| `REPLACE:` | Replaces an existing entry with a new one. Errors if the specified entry does not exist |
| `TRY_INJECT:` | Same as `INJECT:` but does not error if the specified entry does not exist |
| `TRY_REPLACE:` | Same as `REPLACE:` but does not error if the specified entry does not exist |
| `INJECT_OR_CREATE:` | Same as `INJECT:` but if the specified entry does not exist, it creates it |
| `REPLACE_OR_CREATE:` | Same as `REPLACE:` but if the specified entry does not exist, it creates it |

The `INJECT:` and `REPLACE:` keywords can only be used on the top level blocks in a file. For example, this works:

```
INJECT:building_example = {
    production_method_groups = {
        pmg_foo
    }
    <etc.>
}
```

These do not:

```
building_example = {
    INJECT:production_method_groups = {
        pmg_foo
    }
    <etc.>
}
--------------------------------------------
INJECT:building_example = {
   	INJECT:production_method_groups = {
		pmg_foo
	}
    <etc.>
}
```

Importantly, this means that certain types are not easily injectable as it is not possible to inject into a sub-block.

#### Behavior
The `REPLACE:` keywords overwrite the specified object as expected, replacing any previous definition with the new one. Note that this still occurs in the usual [loading order](#File_loading_order), so if multiple mods are trying to replace an object entry, the last one loaded "wins". Similarly, if the replace is defined too 'early' it cannot apply correctly.

`INJECT:` keywords append the specified script to the object without changing any previous definition. Certain types of script cannot be injected this way if that type of script is already defined. Namely, most trigger and effect blocks. For example, trying to inject an `is_visible` block into a law fails if that law already has a defined `is_visible` block; however, if the law does not have a defined `is_visible` block, injecting a new one works as expected. Note that `INJECT:` does not work for scripted effects and scripted triggers. Using `INJECT:` for either of these results in the original effect/trigger being overwritten as though it was `REPLACE:`

When injecting blocks that can be defined multiple times, `INJECT:` keywords append their content to the end of the object's definition. For example, given a base game strategy such as:

```
ai_strategy_default = {
    #... some code
    wargoal_scores = {
        a = {
            # some score calc
        }
        b = {
            # some score calc
        }
        c = {
            # some score calc
        }
    }
    #... some code
}
```

Injecting the following from a mod:

```
INJECT:ai_strategy_default = {
    wargoal_scores = {
        d = {
            # some score calc
        }
    }
}
```

Effectively results in the following:

```
ai_strategy_default = {
    #... some code
    wargoal_scores = {
        a = {
            # some score calc
        }
        b = {
            # some score calc
        }
        c = {
            # some score calc
        }
    }
    #... some code
    wargoal_scores = {
        d = {
            # some score calc
        }
    }
}
```

This can result in unexpected behavior if the injected blocks and the previously defined blocks try to refer to the same elements. If the injected block referred to `a` for example, it might overwrite the base game calculation or not be read.

### Implicit replace
Folders that do not use the `INJECT` and `REPLACE` keywords generally function with an implicit replace. For example, if a file `00_foo.txt` defines a coat of arms:

```
FOO = {
	pattern = "pattern_solid.tga"
	color1 = "red"
	color2 = "red"

	colored_emblem = {
		texture = "ce_bicolor_bottom.dds"
		color1 = "blue"
		color2 = "blue"
	}
}
```

And then a file `01_bar.txt` redefines it as:

```
FOO = {
	pattern = "pattern_solid.tga"
	color1 = "blue"
	color2 = "blue"

	colored_emblem = {
		texture = "ce_bicolor_bottom.dds"
		color1 = "red"
		color2 = "red"
	}
}
```

Only the latter is used.

Implicit replacements **do not work** in folders that use `INJECT` and `REPLACE`.

## Exceptions
There are a few exceptions to the rules defined above.

### GUI types
*See also: [Interface modding](./Interface modding.md)*

Relevant folder: game/gui/

When a GUI `type` or `template` (NOT `types`) is loaded, it cannot be overwritten. So the one that is loaded first *wins* and is used. Otherwise, the rules defined above still apply. Example GUI `type` and `template`:

```
types gate_main_panel_types {
    type gate_main_panel = default_block_window {
        # Some gui stuff
    }
}

template test {
  # Some gui stuff
}
```

> **NOTE:** The `types` container in the example above does not need to be unique and has no overwriting logic at all.

### Events
*See also: [Event modding](./Event modding.md)*

Relevant folder: game/events/

Events follow the same logic as GUI types in that the first one loaded *wins*. So an event loaded in a file that is loaded before another file with the same event is used. Not the last one defined as other definitions.

Particularly relevant, sub-folders are always loaded *after* files in the main events folder, which can cause unexpected behavior if modding base game events.

### Defines
*See also: [Defines](./Defines.md)*

Relevant folder: `game/common/defines/`

Defines use a unique replacement mechanic that allows for replacing any single defines without replacing the whole define category:

```
NSomeCategory = {
    A_SINGLE_DEFINE = X
}
```

This is allowed and changes only the specified defines in the category.

### On actions
*See also: [On action](./On action.md)*

Relevant folder: game/common/on\_actions/

On actions allow for appending more `on_actions`, `events`, or `random_events`, but they do not allow for replacing the on actions's `trigger` and `effect` blocks without replacing the whole file.

This works:

```
# Base game on action
on_monthly_pulse = {
  on_actions = {
    some_custom_on_action
  }
}

# Modded on action
some_custom_on_action = {
  trigger = {
    # Trigger logic
  }
  effect = {
    # Effect logic
  }
}
```

This produces errors and overwrites the base game `effect`:

```
on_monthly_pulse = {
  effect = {
    # Effect logic
  }
}
```

### Localization
*See also: [Localization](./Localization.md)*

Relevant folder: game/localization/

Localization has a unique replacement mechanic using a special folder.

To overwrite single localization keys, they must be defined in the [mod\_name]/localization/[language]/replace folder. Full file overwrites still work, but later loaded localization keys DO NOT overwrite the previously defined ones.

### DNA data
*See also: [Character modding](./Character modding.md)*

Relevant folder: game/common/dna\_data/

Defined character DNAs do not overwrite each other but produce duplicates. Only file overwrites properly replace a character's DNA.

### List of folders
*Please add or remove folders from this list if you know of any undocumented differences*

The following folders – *and only the following folders* – support the `INJECT:` and `REPLACE:` keywords.[[3]](#cite_note-3)

- `common/acceptance_statuses`
- `common/achievements`
- `common/ai_strategies`
- `common/alert_groups`
- `common/alert_types`
- `common/amendments`
- `common/battle_conditions`
- `common/building_groups`
- `common/buildings`
- `common/buy_packages`
- `common/character_interactions`
- `common/character_templates`
- `common/character_traits`
- `common/cohesion_levels`
- `common/combat_unit_experience_levels`
- `common/combat_unit_groups`
- `common/combat_unit_types`
- `common/commander_orders`
- `common/commander_ranks`
- `common/company_charter_types`
- `common/company_types`
- `common/country_creation`
- `common/country_definitions`
- `common/country_formation`
- `common/country_ranks`
- `common/country_types`
- `common/culture_graphics`
- `common/cultures`
- `common/decisions`
- `common/decrees`
- `common/diplomatic_actions`
- `common/diplomatic_catalyst_categories`
- `common/diplomatic_catalysts`
- `common/diplomatic_plays`
- `common/discrimination_trait_groups`
- `common/discrimination_traits`
- `common/dna_data`
- `common/dynamic_company_names`
- `common/dynamic_country_map_colors`
- `common/dynamic_country_names`
- `common/dynamic_treaty_names`
- `common/ethnicities`
- `common/flag_definitions`
- `common/game_concepts`
- `common/genes`
- `common/geographic_regions`
- `common/goods`
- `common/government_types`
- `common/harvest_condition_types`
- `common/ideologies`
- `common/institutions`
- `common/interest_group_traits`
- `common/interest_groups`
- `common/journal_entries`
- `common/journal_entry_groups`
- `common/labels`
- `common/law_groups`
- `common/laws`
- `common/legitimacy_levels`
- `common/liberty_desire_levels`
- `common/military_formation_flags`
- `common/mobilization_option_groups`
- `common/mobilization_options`
- `common/modifier_type_definitions`
- `common/objective_subgoal_categories`
- `common/objective_subgoals`
- `common/objectives`
- `common/parties`
- `common/political_lobbies`
- `common/political_lobby_appeasement (factor)`
- `common/political_lobby_appeasement (reason)`
- `common/political_movement_categories`
- `common/political_movement_pop_support`
- `common/political_movements`
- `common/pop_needs`
- `common/pop_types`
- `common/power_bloc_coa_pieces`
- `common/power_bloc_identities`
- `common/power_bloc_map_textures`
- `common/power_bloc_names`
- `common/power_bloc_principle_groups`
- `common/power_bloc_principles`
- `common/prestige_goods`
- `common/production_method_groups`
- `common/production_methods`
- `common/proposal_types`
- `common/religions`
- `common/script_values`
- `common/scripted_buttons`
- `common/scripted_effects (REPLACE only)`
- `common/scripted_guis`
- `common/scripted_lists`
- `common/scripted_modifiers`
- `common/scripted_progress_bars`
- `common/scripted_rules (REPLACE only)`
- `common/scripted_triggers (REPLACE only)`
- `common/social_classes`
- `common/social_hierarchies`
- `common/state_traits`
- `common/static_modifiers`
- `common/strategic_regions`
- `common/subject_types`
- `common/technology`
- `common/terrain`
- `common/terrain_manipulators`
- `common/themes`
- `common/treaty_articles`
- `common/tutorial_lesson_chains`
- `common/tutorial_lessons`
- `common/war_goal_types`
- `gfx/map/army_dioramas`
- `gfx/map/city_data/city_building_vfx`
- `gfx/map/fleet_dioramas`
- `gfx/map/fleet_entities`
- `gfx/map/front_entities`
- `gfx/portraits/accessories`
- `gfx/portraits/portrait_modifiers`
- `gui_animations`
- `modifier_icons`
- `music`
- `notifications`
- `sound/persistent_objects`

Other folders **do not** support the `INJECT:` and `REPLACE:` keywords and can use only direct file overwrites or implicit replacement

## References
1. [↑](#cite_ref-1) Relative to the `game/` and `[mod_name]/` folders
2. [↑](#cite_ref-2) Adapted from the [Modding Digest](https://github.com/Victoria-3-Modding-Co-op/Modding-Digests/blob/main/1.12.0/inject_types.md) by Bahmut.
3. [↑](#cite_ref-3) This list was provided by the modding community's very own industry plant: **Doodlez**

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • Mod compatibility • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
