# Institution modding

[Institutions](https://vic3.paradoxwikis.com/Institutions) in Victoria 3 are a mechanism for applying [modifiers](./Modifier modding.md) to incorporated states. Modding institutions generally involves modifying several related concepts.

## Institution definition
Institutions are defined in /Victoria 3/game/common/institutions. The basic definition is a script name, icon, background texture, and an optional base modifier. For example:

```
institution_home_affairs = {
	icon = "gfx/interface/icons/institution_icons/home_affairs.dds"
	background_texture = "gfx/interface/illustrations/institutions/home_affairs.dds"
	modifier = {
		country_revolution_progress_mult = -0.1
		country_secession_progress_mult = -0.1
	}
}
```

All other characteristics of institutions are defined or scripted in other files.

## Institution level
Institution levels limits are set in /Victoria 3/game/common/defines/00\_defines.txt, with `MIN_INSTITUTION_INVESTMENT` and `MAX_INSTITUTION_INVESTMENT`, which are set to 1 and 5 in unmodified Victoria 3. The maximum level is also limited by modifier `country_[institution_script_name]_investment_add`, which must be defined in /Victoria 3/game/common/modifier\_type\_definitions. For example:

```
country_institution_home_affairs_max_investment_add={
	decimals=0
	color=good
	game_data={
		ai_value=0
	}
}
```

In unmodified Victoria 3, this modifier is used in [technologies](./Technology modding.md) and [laws](./Law modding.md), but it can be applied anywhere a modifier is used.

The speed of changing from one level to another is set by the define `DAILY_INSTITUTION_SIZE_CHANGE`. The modifiers `country_institution_size_change_speed_mult` or defined institution specific modifiers `country_institution_size_change_speed_[institution_script_name]_mult` can affect that as well.

## Institution cost
The  bureaucracy cost of institutions per level is defined as 1 times `STATE_BUREAUCRACY_POP_MULTIPLE`. There is also a minimum cost defined by `MINIMUM_INVESTMENT_COST`. This cost can be modified by the modifiers `country_bureaucracy_investment_cost_factor_mult` or defined institution specific modifiers `country_institution_cost_[institution_script_name]_mult`. The modifier `state_bureaucracy_population_base_cost_factor_mult` also affects the cost by changing the effective amount of `STATE_BUREAUCRACY_POP_MULTIPLE`.

## Institution modifier
In addition to the defined modifier, other modifiers can be dynamically added to an institution. An institution can even have entirely dynamic effects by omitting a base modifier and only using added modifiers.

Additional modifiers are added to an institution as follows:

```
institution = institution_home_affairs	#which institution is affected
institution_modifier = {				#what modifiers are added
	state_conscription_rate_add = 0.005
	political_movement_radicalism_mult = -0.05
}
```

Keep in mind that these modifiers are multiplied by the institution's level, just as a base defined modifier is, and that all state-related modifiers only affect incorporated states. In unmodified Victoria 3, additional modifiers are only used with laws or power bloc's principles, and it is unclear whether they can be applied in other ways.

## Enabling institutions
In unmodified Victoria 3, all institutions are enabled through laws. Enabling an institution in a law simply requires the script line: `institution = [institution_script_name]`. This can be followed by an institution\_modifier block as above, or alone. It is unclear whether institutions can be enabled in any other way.

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • Institutions • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
