# Decree modding

[Decrees](https://vic3.paradoxwikis.com/Decrees) in Victoria 3 allow for adding modifiers to specific states.

## Decree definition
Decrees are defined in /Victoria 3/game/common/decrees. The basic definition is a script name, texture, cost, modifier, and AI weight. For example:

```
decree_promote_social_mobility = {	#Any unique script name
	texture = "gfx/interface/icons/decree/decree_promote_social_mobility.dds"	#An image file
	modifier = {	#List of modifiers, can be left out if decree is used for triggers only
		state_education_access_add = 0.25
		state_pop_qualifications_mult = 0.25
	}
	cost = 100	#Cost in authority to apply the decree
	
	ai_weight = {	#Script value for AI to decide to use the decree, triggers in state scope
		value = 0

		[script values]
	}
}
```

The authority cost of a decree is affected by the modifier `country_decree_cost_mult`, and the define `MIN_DECREE_COST` limits the maximum discount.

Script names can be anything and the script name also generates localization keys: `[script name]` and `[script_name]_desc`. The script name is used for triggers, so a clear, but unique name is good to use.

Additional characteristics can be scripted for each decree:

| Element | Description |
| unlocking\_technologies | A list of [technologies](./Technology modding.md), one of which must be researched to use this decree Functionally a trigger shorthand for "has any of these technologies" |
| unlocking\_laws | A list of [laws](./Law modding.md), one of which must be enacted to use this decree Functionally a trigger shorthand for "has any of these laws" |
| country\_trigger | A trigger block that must return true for a country to use this decree Also disables and hides the decree if false |
| state\_trigger | A trigger block that must return true on a given state to use this decree Also disables the decree if false |

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • Decrees • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
