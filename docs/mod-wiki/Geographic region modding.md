# Geographic region modding

This article has been verified for the current version (1.13) of the game.

**Geographic regions**, also called *Georegions*, are static lists of [state regions and/or strategic regions](./State modding.md) defined in script. These can be iterated in script, helping reduce the complexity of iterations and are better supported by the game engine for performance. When used in [localization](./Localization.md), hovering over the geographic region name highlights all included state regions on the game map. Geographic regions can be used to group state regions separately from strategic regions and can also include more abstract regions such as climate zones or coastlines.

***The usage of georegion iterators is highly recommended by the game developers for performance reasons.***

## Definition
Geographic regions are defined in the common/geographic\_regions folder.

*All geographic region files must be in UTF-8 BOM encoding.*

A geographic region definition consists of the following elements:

- Geographic region key, used to call the geographic region
- Short key, for use in iterators
- List of included strategic regions
- List of included state regions

A geographic region can include any number of strategic or state regions, or exclusively state or strategic regions.

```
geographic_region_key = {
	# All state/strategic regions are added together to form a geographic region
	# the key to access this in script lists i.e <any/..>_<state/...>_in_europe
	short_key = "europe"

	# The Strategic Regions this geographic region encompasses
	strategic_regions = { sr:<key> sr:<key> sr:<key> }

	# The State Regions this geographic region encompasses
	state_regions = { <STATE_REGION> <STATE_REGION> }
}
```

## Usage
The [trigger](./Trigger.md) `is_in_geographic_region` checks if the scoped object is included in a specific geographic region. This can be used in the country, state, state\_region, or strategic\_region scopes.

```
any_scope_state = {
    is_in_geographic_region = geographic_region_south_america
    is_incorporated = yes
    count >= 10
}
```

When used in a country scope or country iterator, this trigger checks only for the *capital state* of that country.

### Iterators
A geographic region can be used to iterate any included regions in a more performance friendly manner. *This method is highly recommended by the game developers as \_country and \_state iterators are inherently expensive.*

The supported iterators are as follows:

- `{any|every|ordered|random}_country_in_<geographic_region_short_key>`
- `{any|every|ordered|random}_province_in_<geographic_region_short_key>`
- `{any|every|ordered|random}_state_in_<geographic_region_short_key>`
- `{any|every|ordered|random}_state_region_in_<geographic_region_short_key>`
- `{any|every|ordered|random}_strategic_region_in_<geographic_region_short_key>`

Example, from `je_springtime_of_the_peoples`:

```
	possible = {
		any_country_in_europe = {
			has_technology_researched = egalitarianism
        }
		custom_tooltip = {
			text = peoples_springtime_underway_tt
			has_global_variable = peoples_springtime_happening
		}
	}
```

Example, from `je_sale_of_alaska`:

```
custom_tooltip = {
			text = friendly_nation_with_interest_in_alaska_tt
			any_country_in_north_america = {
				NOT = {
					is_subject = yes
				}
				relations:root >= 0
				country_rank >= rank_value:great_power
				any_scope_state = {
					region = sr:region_pacific_coast
					is_incorporated = yes
				}
			}
		}
```

### Production methods
Geographic regions can be used to unlock [production methods](https://vic3.paradoxwikis.com/Production_methods_modding) by adding an `unlocking_geographic_regions` to the production method and listing any geographic regions by full key. For example:

```
	unlocking_geographic_regions = {
		geographic_region_wet_process_coffee_region
	}
```

## Localization
Geographic regions are localized as follows:

- `<geographic_region_key>` for the name of the geographic region
- `<geographic_region_key>_desc` for any fluff/lore description of your geographic region

For example:

```
 geographic_region_ring_of_fire: "Ring of Fire"
 geographic_region_ring_of_fire_desc: "A chain of seismically active sites and volcanoes around the edge of the Pacific Ocean."
```

Geographic regions can be called by script name in localization using the `GetGeographicRegion()` function. For example:

```
 je_eastern_frontier_tt_1: "[GetGeographicRegion('geographic_region_greater_khorasan').GetName] is owned by [SCOPE.GetRootScope.GetCountry.GetName] or its subjects."
 je_eastern_frontier_tt_2: "[GetGeographicRegion('geographic_region_chorasmia').GetName] is owned by [SCOPE.GetRootScope.GetCountry.GetName] or its subjects."
 je_eastern_frontier_tt_3: "[GetGeographicRegion('geographic_region_transoxiana').GetName] is owned by [SCOPE.GetRootScope.GetCountry.GetName] or its subjects."
```

*When hovered over in the UI, the geographic region will be highlighted on the game map.*

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • Geographic regions • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
