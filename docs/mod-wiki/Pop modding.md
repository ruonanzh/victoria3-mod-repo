# Pop modding

Pops have many attributes, but they are most fundamentally defined by their [profession](https://vic3.paradoxwikis.com/Profession).

## Profession definition
Professions are defined in /Victoria 3/game/common/pop\_types. Each profession is defined with a script name and a number of characteristics

```
example = {	# profession name
	texture = "gfx/interface/icons/pops_icons/example.dds"		# profession icon
	color = { 12 251 123 }				# profession color; unmodified professions all use decimal hsv
	strata = Deprecated ###DO NOT USE IN NEW VERSIONS!###
	start_quality_of_life = 10			# basic quality of life/standard of living
	wage_weight = 3					# multiplier of the pop's wage from building's base wage
	paid_private_wage = yes/no			# whether this pop type receives wages in a non government funded building (default no)
	education_access = 0.25				# bonus amount of education access
	consumption_mult = 1				# optional goods consumption multiplier (default = 1)
	dependent_wage = 0.5				# wage for dependents per year
	unemployment = yes				# can pop be unemployed
	unemployment_wealth = 5				# unemployed pops whose wealth drops to or below this level switches '''to''' this profession
	can_always_hire = yes				# profession does not require qualifications
	subsistence_income = yes			# profession benefits from subsistence income
	ignores_employment_proportionality = yes	# buildings can hire this profession even if unable to hire other professions
	is_slave = yes					# profession is enslaved
    military = yes					# profession is military
	# 50% - 100% politically engaged
	political_engagement_base = 0.5				# basic political engagement
	political_engagement_literacy_factor = 1.0		# literacy to political engagement, scaled by literacy
	political_engagement_mult = { value = 1	}		# scripted value to escalate dynamic political engagement value
	qualifications_growth_desc = "ENGINEERS_QUALIFICATIONS_DESC"		# Qualifications growth desc localization
	qualifications = {}					# Qualifications scripted values list
	portrait_age = { value = 30 }				# Age for portrait
	portrait_pose = { value = 0 }				# Pose for portrait
	portrait_is_female = { always = yes }			# Is portrait female or male
}
```

There are two [defines](./Defines.md) that refer to professions directly: `DEFAULT_POP_TYPE` and `SLAVE_POP_TYPE`, be sure to update these if replacing unmodified professions.

## Profession modifiers
*See also: [Modifier types § Object-based modifiers](./Modifier types.md#Object-based_modifiers)*

There are a number of [modifier types](./Modifier types.md) related to each profession. New professions require these new modifiers be scripted as well.

| Common modifiers |
| - building\_employment\_[profession]\_add - building\_employment\_[profession]\_mult - country\_[profession]\_pol\_str\_mult - country\_[profession]\_voting\_power\_add - state\_[profession]\_mortality\_mult |
| Less common modifiers |
| - building\_group\_[group]\_[profession]\_mortality\_mult - building\_group\_[group]\_[profession]\_standard\_of\_living\_add - building\_[profession]\_shares\_add - state\_[profession]\_investment\_pool\_contribution\_add - state\_[profession]\_investment\_pool\_contribution\_mult |

## Pop script documentation
The following [effects](./Effect.md), [event targets](./Event target.md), and [triggers](./Trigger.md) can be used in pop scope.

List of pop effects

| Effect | Description | Example | Targets |
| add\_pop\_wealth | Adds the wealth of the pop | ``` add_pop_wealth = {   wealth_distribution = { script_value }   update_loyalties = yes/no } ``` |  |
| change\_pop\_culture | Changes the culture of the scoped pop to a specified culture by a specified percentage | ``` change_pop_culture = {   target = cu:spanish   value = 0.33 } ``` |  |
| change\_pop\_religion | Changes the religion of the scoped pop to a specified religion by a specified percentage | ``` change_pop_religion = {   target = rel:catholic   value = 0.5 } ``` |  |
| change\_poptype | Changes the type of the pop to the given type |  | pop\_type |
| move\_partial\_pop | Moves the scoped pop to the specified state (they become unemployed) | ``` move_partial_pop = { state = s:STATE_TUSCANY.region_state:TUS } move_partial_pop = { state = s:STATE_TUSCANY.region_state:TUS population = 1000 } move_partial_pop = { state = s:STATE_TUSCANY.region_state:TUS population_ratio = 0.2 }  NOTE: VERY IMPORTANT! This effect _may_ change the pop type of the moved pop. This will happen under the following conditions: 1. if the current pop type cannot be unemployed, the new pop type will be the default one 2.if the current pop type is a slave type and the target state does not allow slavery, the new pop type will be the default one ``` |  |
| move\_pop | Moves the scoped pop in its entirety to the specified state (they become unemployed) | ``` move_pop = s:STATE_TUSCANY.region_state:TUS NOTE: VERY IMPORTANT! This effect _may_ change the pop type of the moved pop. This will happen under the following conditions: 1. if the current pop type cannot be unemployed, the new pop type will be the default one 2.if the current pop type is a slave type and the target state does not allow slavery, the new pop type will be the default one ``` | state |
| set\_pop\_literacy | Sets the literacy percentage of the workforce of the pop | ``` set_pop_literacy = {   literacy_rate = { script_value } } ``` |  |
| set\_pop\_qualifications | Sets the pop qualifications for percentage of workforce of the pop for the given type | ``` set_pop_qualifications = {   pop_type = {}   qualifications = { script_value } } ``` |  |
| set\_pop\_wealth | Sets the wealth of the pop | ``` set_pop_wealth = {   wealth_distribution = { script_value }   update_loyalties = true/false } ``` |  |

List of pop triggers

| Trigger | Description | Example | Targets |
| dependents | Compares the dependents size of the scoped pop | ``` dependents >= 2000 ``` | value |
| food\_security | Checks if a pop has a certain amount of food security | ``` food_security = value ``` | value |
| has\_ongoing\_assimilation | Checks if the scoped pop has ongoing cultural assimilation | ``` has_ongoing_assimilation = yes ``` | boolean |
| has\_ongoing\_conversion | Checks if the scoped pop has ongoing religious conversion | ``` has_ongoing_conversion = yes ``` | boolean |
| has\_pop\_culture | Checks if pop has specific culture | ``` has_pop_culture = culture ``` |  |
| has\_pop\_religion | Checks if pop has specific religion | ``` has_pop_religion = religion ``` |  |
| has\_social\_class | Checks if the scoped pop belongs to a specific social class | ``` has_social_class = <key> ``` |  |
| has\_state\_religion | Check if the Pop has the state religion |  | boolean |
| is\_employed | Check if the pop is employed |  | boolean |
| is\_in\_mild\_starvation | Check if the pop is in mild starvation | ``` is_in_mild_starvation = yes ``` | boolean |
| is\_in\_severe\_starvation | Check if the pop is in severe starvation | ``` is_in_severe_starvation = yes ``` | boolean |
| is\_in\_starvation | Check if the pop is in starvation (mild or severe) | ``` is_in_starvation = yes ``` | boolean |
| is\_pop\_type | Checks if pop is of specified type | ``` is_pop_type = poptype ``` |  |
| literacy\_rate | Checks if a pop, state or country has a certain amount of literacy | ``` literacy = value ``` | value |
| pop\_acceptance | Compares the scoped pop's acceptance against an acceptance value | ``` pop_acceptance > 50 ``` | value |
| pop\_employment\_building | Checks if pop is working in a specific building type | ``` pop_employment_building = building ``` |  |
| pop\_employment\_building\_group | Checks if pop is working in a specific building type | ``` pop_employment_building = building ``` |  |
| pop\_has\_primary\_culture | Checks if pop's culture is primary | ``` pop_has_primary_culture = bool ``` | boolean |
| pop\_loyalist\_fraction | Compares the number of Radicals in a pop to its total size | ``` pop_loyalty_fraction < 0.5 ``` | value |
| pop\_neutral\_fraction | Compares the number of Neutrals (not Radical, not Loyalist) in a pop to its total size | ``` pop_neutral_fraction > 0.95 ``` | value |
| pop\_radical\_fraction | Compares the number of Radicals in a pop to its total size | ``` pop_radical_fraction > 0.25 ``` | value |
| quality\_of\_life | Compares the quality of life of the given pop | ``` quality_of_life > 10 ``` | value |
| standard\_of\_living | Compares the standard of living of a given pop | ``` standard_of_living > 10 ``` | value |
| strata | Checks the strata of the scoped pop | ``` strata >= upper/middle/lower ``` | value |
| total\_size | Compares the total size of the scoped pop | ``` total_size >= 3000 ``` | value |
| wealth | Checks if a pop has a certain amount of wealth | ``` wealth = value ``` | value |
| workforce | Compares the workforce size of the scoped pop | ``` workforce >= 1000 ``` | value |

List of pop event targets

| Event target | Description | To scope |
| culture | Scope to pop's or character's culture | culture |
| home\_country | Scopes to the home country of an exile | country |
| owner | Scope to the owner country of object | country |
| pop\_weight\_modifier\_scale | Get the Pop's weight modifier scale multiplier | value |
| religion | Scope to country or country definition's primary religion or pop religion | religion |
| state | Scope to the state of the object | state |
| workplace | Scope to the workplace of a pop | building |

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • Pops • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
