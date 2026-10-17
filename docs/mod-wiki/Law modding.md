# Law modding

[Laws](https://vic3.paradoxwikis.com/Laws) in Victoria 3 provide for making major changes to a country. Modding laws typically involves modifying several related concepts.

## Law group definition
Law groups provide certain basic details for laws, such as enactment time and chance of movements. For each law group, only a single law can be active at a time.

Law groups are defined in /Victoria 3/game/common/law\_groups. The basic definition is a script name, category, and movement chances. For example:

```
lawgroup_taxation = {
	law_group_category = economy
	
	progressive_movement_chance = 1.5
	regressive_movement_chance = 0.15
}
```

The three categories are `power_structure`, `economy`, and `human_rights`. Script names can be anything and the script name also generates localization keys: `[script name]` and `[script_name]_desc`. The law group is used for ideologies as well as triggers, so a clear, but unique name is good to use.

The movement chances are multipliers to the base chance for a movement to form related to laws in this group.

Additional characteristics can be scripted for each law group:

| Characteristic | Description | Value type |
| base\_enactment\_days | Changes the default number of days between enactment checks Default amount is set by define: LAW\_ENACTMENT\_DEFAULT\_BASE\_DAYS | integer |
| enactment\_approval\_mult | Changes the amount of approval affected by law changes in this group | float |
| affected\_by\_regime\_change | Laws in this group are changed by the regime change effect | boolean |
| change\_allowed\_trigger | Trigger block that must return true to allow manual law changes in this group | trigger block |
| linked\_social\_hierarchy | Laws in this group only appear for countries with the specified social hierarchy | social hierarchy |

## Law definition
Laws are defined in /Victoria 3/game/common/laws. Each law has certain required elements and a number of optional elements. A basic definition requires the following: a script name, a group, an icon, a progressiveness score, a pop support value block, an ai\_will\_do trigger block, and an ai\_enact\_weight\_modifier value block

```
law_no_health_system = {
	group = lawgroup_health_system
	icon = "gfx/interface/icons/law_icons/no_health_system.dds"
	
	progressiveness = 0
	
	# AI shouldn't try to abolish institutions
	ai_will_do = {
		always = no
	}

	ai_enact_weight_modifier = { #Petitions
		value = 0
		
		if = {
			limit = { ai_has_enact_weight_modifier_journal_entries = yes }
			add = 750
		}
	}
}
```

Like law groups, the script name can be anything and generates the localization keys `[script_name]` and `[script_name]_desc`

Laws may have additional blocks and elements as well:

| Element | Description |
| group | which law group this law belongs to |
| icon | Path to a .dds image file |
| progressiveness | an integer that rates laws relative to each other; used for other script |
| modifier | a modifier block added by the law |
| institution | [institution](./Institution modding.md) enabled by the law |
| institution\_modifier | a modifier block added to the institution enabled by the law |
| unlocking\_technologies | a list of [technologies](./Technology modding.md) that must be researched to enact the law functionally a trigger shorthand for "has any of these technologies" |
| unlocking\_laws | a list of laws, one of which must be enacted to enact this law functionally a trigger shorthand for "has any of these laws" used with base laws |
| requires\_law\_or | a list of laws, one of which must be enacted to enact this law functionally a trigger shorthand for "has any of these laws" used with variant laws |
| disallowing\_laws | a list of laws which block enacting this law functionally a trigger shorthand for "has none of these laws" |
| can\_enact | a trigger block that must return true to enact this law |
| parent | another law which provides ideology stances to this law; this law also counts as a variant of the law for triggers |
| is\_visible | a trigger block that must return true for this law to appear in the list of laws for a country |
| on\_enact | an effect block that is done when the law is successfully enacted |
| on\_activate | an effect block that is done when the law becomes the active law for any reason fired in addition to on\_enact, when successfully enacted |
| on\_deactivate | an effect block that is done when the law stops being the active law for any reason |
| tax\_modifier\_[level] | a modifier block that adds effects to the given taxation level Levels are `very_low`, `low`, `medium`, `high`, and `very_high` |
| can\_impose | a trigger block which determines whether a country can impose this law on another |
| ai\_impose\_chance | a script value that determines how likely the AI is to impose this law when it can |
| ai\_will\_do | a trigger block which determines whether the AI will try to enact this law |
| ai\_enact\_weight\_modifier | a script value that dermines how likely the AI is to try to enact this law |

## Other effects
Law effects can also be enabled in other files by referencing the law. Production methods are one such example.

## Law script documentation
The following [effects](./Effect.md), [event targets](./Event target.md), and [triggers](./Trigger.md) can be used in law scope.

List of law effects

| Effect | Description | Example | Targets |
| every\_possible\_amendment\_type | Iterate through amendment types that could be added to the scoped law | ``` every_possible_amendment_type = {   limit = { <triggers> } #optional   <effects> } ``` | amendment\_type |
| every\_scope\_amendment | Iterate through amendments of the scoped law | ``` every_scope_amendment = {   limit = { <triggers> } #optional   <effects> } ``` | amendment |
| ordered\_possible\_amendment\_type | Iterate through amendment types that could be added to the scoped law | ``` ordered_possible_amendment_type = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | amendment\_type |
| ordered\_scope\_amendment | Iterate through amendments of the scoped law | ``` ordered_scope_amendment = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | amendment |
| random\_possible\_amendment\_type | Iterate through amendment types that could be added to the scoped law | ``` random_possible_amendment_type = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | amendment\_type |
| random\_scope\_amendment | Iterate through amendments of the scoped law | ``` random_scope_amendment = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | amendment |

List of law triggers

| Trigger | Description | Example | Targets |
| any\_possible\_amendment\_type | Iterate through amendment types that could be added to the scoped law | ``` any_possible_amendment_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | amendment\_type |
| any\_scope\_amendment | Iterate through amendments of the scoped law | ``` any_scope_amendment = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | amendment |
| can\_be\_enacted | Checks if a law could be enacted by its country, considering its current situation | ``` can_be_enacted = yes ``` | boolean |
| is\_reasonable\_law\_for\_petition | Checks if a law is considered reasonable for a government petition to enact it | ``` is_reasonable_law_for_petition = yes ``` | boolean |
| law\_approved\_by | Checks whether the scoped law is approved by an interest group | ``` law_approved_by = ig_rural_folk ``` |  |
| law\_is\_available | Checks if a law is available for its country, considering its current situation. Like can\_be\_enacted, but ignores government support | ``` law_is_available = yes ``` | boolean |

List of law event targets

| Event target | Description | To scope |
| currently\_active\_law\_in\_group | Scope from a law to the currently active law in that group | law |
| imposer\_of\_law | Scope from a country to the country currently imposing a law on them | country |
| law\_type | Scope to a law type from its name (law\_type:law\_protected\_speech) or from a scoped law | law\_type |
| owner | Scope to the owner country of object | country |
| type | Scope from an object to its type | amendment\_type, building\_type, company\_type, diplomatic\_play\_type, harvest\_condition\_type, institution\_type, interest\_group\_type, law\_type, political\_movement\_type, ship\_type, strait\_type |

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • Laws • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
