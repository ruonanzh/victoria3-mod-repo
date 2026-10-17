# Country modding

[Countries](https://vic3.paradoxwikis.com/Countries) in Victoria 3 are defined by a small number of base characteristics, most of which are adjustable in-game by scripting or player action; however the base characteristics always remain as scripted.

## Country definition
Countries are defined in /common/country\_definitions/; each country definition has required and optional elements:

Country definition elements

| Characteristic | Use | Example | Required? |
| TAG | Internal script ID, always three letters, creates the definition block | GER |  |
| color | Base map color: in RGB, hsv, or hsv360 colorspace | color = { 147 130 110 } |  |
| country\_type | Starting diplomatic type, defined in common/country\_types | country\_type = recognized |  |
| tier | Prestige tier, currently a hardcoded [list](./Rank.md#Prestige_sources) | tier = empire |  |
| cultures | Primary cultures, one or more | cultures = { north\_german south\_german } |  |
| religion | State religion, if different from default religion of first primary culture | religion = protestant |  |
| capital | Default capital state, technically optional | capital = STATE\_BRANDENBURG |  |
| is\_named\_from\_capital | Overrides usual state naming mechanics for split states | is\_named\_from\_capital = yes |  |
| valid\_as\_home\_country\_for\_separatists | Can separatists revolt for this country | valid\_as\_home\_country\_for\_separatists = { triggers } |  |
| social\_hierarchy | Sets a social hierarchy for use by this country | social\_hierarchy = british\_indian\_caste\_system |  |
| <order>\_unit\_color | Sets a consistent unit model color (in RGB); `primary, secondary, or tertiary` | primary\_unit\_color = { 20 20 120 } |  |

A full definition typically appears similar to this example:

```
GER = {
	color = { 147 130 110 }
	
	country_type = recognized

	tier = empire
	
	cultures = { north_german south_german }
	capital = STATE_BRANDENBURG
}
```

More notes:

- `color` is assumed as rgb unless set as hsv or hsv360:
  - thus `color = { 147 130 110 }` is read as rgb (in 0-255 values)
  - while `color = hsv{ 0.99 0.7 0.9 }` uses percentage HSV
  - and `color = hsv360{ 20 80 80 }` uses 0-360 Hue and 0-100 Saturation and Value.
- Characteristics which can be changed by script – such as type, cultures, and religion – are reset to the defined values if the country ceases to exist during the game and then later is released or reformed.

### Country formation
Country formations – i.e. [unifications](https://vic3.paradoxwikis.com/Formable_countries) – are defined in /common/country\_formation/. Each formation must be based on an already existing country definition. Formations are defined on two axes: major versus minor, and cultural homelands versus defined list of states.

All formations require a list of states, either explicitly defined or with `use_culture_states = yes` which uses all states with a homeland of any of the country's primary cultures as its list of states.

Country formation elements

| Characteristic | Use | Example | Notes |
| TAG | Internal script ID, creates the definition block | LAO | Must match already defined country |
| states | A defined list of states, one or more | states = { STATE\_LAOS } | Don't use along with `use_culture_states` |
| use\_culture\_states | All cultural homelands of the country's cultures are used | use\_culture\_states = yes | Don't use along with `states` |
| required\_states\_fraction | Percentage of states required for formation | required\_states\_fraction = 0.75 | Defaults to 0.75 if omitted |
| ai\_will\_do | Conditions for the AI to decide to form this country | ai\_will\_do = { triggers } | Vanilla mainly uses `always = yes` |
| possible | Additional requirements for formation | possible = { triggers } | Vanilla mainly uses `has_technology_researched = (pan-)nationalism` |
| max\_num\_formation\_candidates | Overrides the default amount of formation candidates | max\_num\_formation\_candidates = 1 | Default is 3 |
| can\_be\_formation\_candidate | Additional requirements to be a candidate for a major formation | can\_be\_formation\_candidate = { triggers } | candidates must also fulfill the possible block |
| can\_be\_unification\_target | Additional requirements to be a valid target for unification plays | can\_be\_unification\_target = { triggers } |  |

An example with a defined state list:

```
LAO = {
	states = {
		STATE_LAOS
	}

	required_states_fraction = 1.0
	
	ai_will_do = { always = yes }
}
```

An example with `use_culture_states = yes`

```
UBD = {
	use_culture_states = yes

	required_states_fraction = 1
	
	ai_will_do = { always = yes }

	possible = {
		has_technology_researched = pan-nationalism
	}
}
```

Major formations are declared by adding `is_major_formation = yes`. Major formations also have two diplomatic plays `unification_play` and `leadership_play` which should match existing [diplomatic plays](./Diplomacy modding.md) with the wargoals of `unification` and `unification_leadership` respectively

An example of a major formation:

```
ITA = {
	use_culture_states = yes

	is_major_formation = yes

	unification_play = dp_unify_italy
	leadership_play = dp_leadership_italy

	required_states_fraction = 0.7

	ai_will_do = { has_technology_researched = nationalism }

	possible = {
		OR = {
			country_has_primary_culture = cu:north_italian
			country_has_primary_culture = cu:south_italian
		}
	}
	
	max_num_formation_candidates = 3
	can_be_formation_candidate = {
		country_rank >= rank_value:minor_power
		any_country = {
			filter = {
				OR = {
					country_has_primary_culture = cu:north_italian
					country_has_primary_culture = cu:south_italian
				}
			}
			has_technology_researched = nationalism
			percent = 1
		}
	}
}
```

Forming the country requires only the possible block, while the unification candidate mechanic requires both the possible block and the can\_be\_formation\_candidate block.

### Country creation
Country creations – i.e. [liberations](https://vic3.paradoxwikis.com/Releasable_countries) – are defined in /common/country\_creation/. Each creation must be based on an already existing country definition. Creations are defined by either cultural homelands, a defined list of states, or a defined list of provinces. Note that a country's defined capital is effectively always included in the list of required states or culture states, even if not explicitly added to the list or a cultural homeland.

Country creation elements

| Characteristic | Use | Example | Notes |
| TAG | Internal script ID, creates the definition block | JAM | Must match already defined country |
| provinces | A defined list of provinces, one or more | provinces = { xC08061 x68BE66 } | Don't use along with `use_culture_states` or `states` The provinces do not need to belong to the same state |
| states | A defined list of states, one or more | states = { STATE\_JAMAICA } | Don't use along with `use_culture_states` or `provinces` |
| use\_culture\_states | All cultural homelands of the country's cultures are used | use\_culture\_states = yes | Don't use along with `states` or `provinces` |
| required\_num\_states | Number of states required for release | required\_num\_states = 2 | Defaults to 0 (effectively 1) if omitted |
| ai\_will\_do | Conditions for the AI to decide to release this country | ai\_will\_do = { triggers } | Vanilla always uses `always = no` |
| possible | Additional requirements for release | possible = { triggers } | Vanilla mainly uses `has_technology_researched = (pan-)nationalism` |

An example of a country release definition

```
PHI = {
	states = { 
		STATE_MINDANAO
		STATE_LUZON
		STATE_VISAYAS
	}
	required_num_states = 2
	ai_will_do = { always = no }
}
```

## Localization
Countries automatically generate [localization](./Localization.md) keys based on their tags: TAG and TAG\_ADJ, which define the country's name and adjective.

Dynamic names can be defined in common/dynamic\_country\_names, with a `DEFAULT` block usable by any country and then TAG blocks specific to those tags

```
TAG = {
	dynamic_country_name = {
		name = string # This can be set to the default name by using TAG as the string
		adjective = string # This can be set to the default adjective by using TAG_ADJ as the string
		is_revolutionary = yes # default no, if yes then used for revolts only
		is_main_tag_only = yes # default no, if yes then only the primary country for a definition can use this name (ie Poland, not dynamic revolt Poland)
		priority = 0 # default 0, if multiple names have valid triggers, higher priority is used. If same priority, first one in file is used
		# Scripted trigger, country-scope
		trigger = {
		}
	}	
}
```

## Map color
A country's default map color is defined as above, but dynamic colors can be scripted in common/dynamic\_country\_map\_colors. The first dynamic color which returns true is used, unless the [game rule](https://vic3.paradoxwikis.com/Game_rule) *Map Color for Subjects* on and the country is a subject.

```
kalmar_union = { #This is just an arbitrary script name, should be unique for dynamic colors
	color = "kalmar_orange" # a "named color" defined in common/named_colors
	possible = { # Scripted trigger, country-scope
		exists = c:SCA
		THIS = c:SCA
		has_law = law_type:law_monarchy
		ruler = {
			has_culture = cu:danish
		}
	}
}
```

Named colors are defined in the same way as a country's default color, with a declared hsv360 or rgb color, except tied to a script name. Named colors can be used for dynamic map colors as well as flag colors.

## Flags
*Main article: [Flag modding](./Flag modding.md)*

Countries have flags dynamically generated if they do not have a defined flag; otherwise they use a defined flag as scripted.

### Flag colors and unit model colors
Unit models in game draw their colors from either the country's defined unit colors or from the currently used coat of arms' colors.

Unit model colors can be defined in a country's definition as:

```
	primary_unit_color = { 20 20 120 }
	secondary_unit_color  = { 150 190 210 }
	tertiary_unit_color = { 5 5 90 }
```

Otherwise, the first three base/pattern colors defined for a coat of arms determine the unit model colors, even if those colors don't appear on the flag. Colors defined for emblems are never considered.

## Country history
*See also: [History modding](./History modding.md)*

/common/history/countries/ contains the starting political set up for countries that exist at game start. These are effect blocks, with several effects set up as scripted effects to unify common sets of laws and technologies.

One of those effect blocks is `effect_starting_politics_conservative = yes` which gives the following laws:

| Monarchy | Interventionism | Censorship |
| Oligarchy | Mercantilism | No Workers' right |
| National Supremacy | Per-Capita Taxation | Child Labor Allowed |
| State Religion | Tenant farmers | Legal Guardianship |
| Appointed Bureaucrats | No Colonial Affairs | No social security |
| Professional Army | Local Police Force | Migration Controls |
| No Home Affairs | Religious Schools | Slavery Banned |
|  | No Health System | Combination Acts |

If no laws are defined for a group, the "default" law in each group is active at game start. These are generally the first law scripted in the law files, unless a country does not meet the requirements for that law.

**Technologies**

You can unlock an individual technology for a country, such as Sericulture, by writing `add_technology_researched = sericulture` in its country file. A technology tier is a group of technologies you can assign a country in a single line like `effect_starting_technology_tier_6_tech = yes` for ease of use. There are 6 tiers, and tier 5 contains tier 6, tier 4 contains tier 5, tier 3 contains tier 4, and so on. The following tables show the difference in technologies between consecutive tiers. Best practice is to assign a country a tier and then assign specific technologies which the assigned tier does not contain in a way that the technology tree stays connected.

Tier 6

| Production | Military | Society |
| Enclosure | Standing Army | Urbanization |

Tier 5

| Production | Military | Society |
| - Manufacturies - Shaft Mining | - Navigation - Military Drill | - Rationalism - Bureaucracy |

Tier 4

| Production | Military | Society |
| - Prospecting - Steelworking - Distillation | - Drydocks - Admiralty - Gunsmithing - Artillery | - International Trade - Centralization - International Relations - Democracy |

Tier 3

| Production | Military | Society |
| - Cotton Gin | - Mandatory Service - Line Infantry - Army Reserves | - Law Enforcement - Currency Standards - Colonization - Academia - Medical Degrees - Romanticism |

Tier 2

| Production | Military | Society |
| - Lathe - Atmospheric Engine - Mechanical Tools | - Paddle Streamer - Army Reserves - Napoleonic Warfare | - Stock Exchange - Corporate Charters - Banking - Egalitarianism - Mass Communication - Empiricism - Dialectics |

Tier 1

| Production | Military | Society |
| - Railways | - Screw Frigate - Power of the Purse - General Staff - Percussion Cap | - Central Banking - Central Archives |

These preset scripted effects can be modified by defining other laws or additional technologies following the scripted effect call.

Other country starting circumstances are defined in the other history folders, such as diplomatic relations, owned states, and characters.

## Country script documentation
The following [effects](./Effect.md), [event targets](./Event target.md), and [triggers](./Trigger.md) can be used in country scope.

List of country effects

| Effect | Description | Example | Targets |
| activate\_law | Activates a law for a country, does not apply `when_enacted` effects | ``` activate_law = law_type:<law_key> ``` | law\_type |
| activate\_production\_method | Activates the named production method for buildings of a certain type in country/state | ``` activate_production_method = {   building_type = building_key   production_method = production_method_key } ``` |  |
| add\_banned\_goods | Adds a total ban of a good to a country | ``` add_banned_goods = <goods key/scope> ``` | goods |
| add\_change\_relations\_progress | Add progress towards changing relations between two countries | ``` add_change_relations_progress = {   country = country scope/tag   value = amount } ``` |  |
| add\_company | Adds company type to a country's companies | ``` add_company = company_type:key ``` | company\_type |
| add\_country\_monopoly | Adds a monopoly to a country scope | ``` add_country_monopoly = bt:building_textile_mills ``` | building\_type |
| add\_culture\_acceptance\_modifier | Apply a cultural acceptance modifier in the scoped country for the given culture. Other than the required culture argument, this effect has the same syntax as add\_modifier. | ``` add_culture_acceptance_modifier = {   culture = culture_scope   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } ``` |  |
| add\_declared\_interest | Will create a declared interest in the target strategic region | ``` c:FRA = { add_declared_interest = region_nile_basin } ``` |  |
| add\_enactment\_modifier | Adds an enactment-related timed modifier effect to object in scope | ``` add_enactment_modifier = {   name = modifier_key } ``` |  |
| add\_enactment\_phase | Changes the current law enactment phase in scope country by an added amount. The result will be clamped between 0 and NPolitics::LAW\_ENACTMENT\_MAX\_PHASES. The enacting law will pass if the resulting value equals NPolitics::LAW\_ENACTMENT\_MAX\_PHASES. |  |  |
| add\_enactment\_setback | Changes the current law enactment setback count in scope country by an added amount. The result will be clamped between 0 and country\_law\_max\_setbacks\_add. The law enactment will fail if the resulting value equals country\_law\_max\_setbacks\_add |  |  |
| add\_era\_researched | Add specified era as researched in a country scope | ``` add_era_researched = era ``` |  |
| add\_fervor\_target\_modifier | Apply a fervor target modifier in the scoped country for the given culture. Other than the required culture argument, this effect has the same syntax as add\_modifier. | ``` add_fervor_target_modifier = {   culture = culture_scope   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } ``` |  |
| add\_investment\_pool | Directly adds money to the investment pool | ``` add_investment_pool = 50 ``` |  |
| add\_journal\_entry | Adds a journal entry to a scoped country's journal, with optional saved scope target | ``` add_journal_entry = {   type = <key>   target = <scope> } ``` |  |
| add\_law\_progress | Adds x% progress to the current checkpoint of the law being passed (range is [0, 1], 0.1 means 10 percentage points) | ``` add_law_progress = 0.1 / -0.1 ``` |  |
| add\_liberty\_desire | Adds Liberty Desire to a Subject Country. Does nothing if the scoped country is not a subject in a Diplomatic Pact. | ``` add_liberty_desire = -5 ``` |  |
| add\_loyalists | Adds loyalists to pops in the scoped country. All parameters except value are optional. | ``` value is the percentage of each pop that will move towards loyalism. if interest_group is specified pops gain loyalists based on their ig membership. pop type and strata are mutually exclusive. add_radicals = {   value = 0.2   interest_group = <scope/ig:key>   pop_type = <scope/pop_type:key>   strata = <key>   culture = <scope/cu:key>   religion = <scope/rel:key> } ``` |  |
| add\_modifier | Adds a timed modifier effect to object in scope | ``` add_modifier = {   name = static_modifier_name   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } add_modifier = static_modifier_name #set as permanent modifier with no multiplier or decay ``` |  |
| add\_primary\_culture | Adds a culture to the primary cultures of a country | ``` add_primary_culture = <culture> ``` | culture |
| add\_radicals | Adds radicals to pops in the scoped country. All parameters except value are optional. | ``` value is the percentage of each pop that will move towards radicalism. if interest_group is specified pops gain radicals based on their ig membership. pop type and strata are mutually exclusive. add_radicals = {   value = 0.2   interest_group = <scope/ig:key>   pop_type = <scope/pop_type:key>   strata = <key>   culture = <scope/cu:key>   religion = <scope/rel:key> } ``` |  |
| add\_taxed\_goods | Adds consumption taxes on a good to a country | ``` add_taxed_goods = <goods key/scope> ``` | goods |
| add\_technology\_progress | Add technology progress | ``` add_technology_progress = {   progress = <script_value>   technology = <technology key> } ``` |  |
| add\_technology\_researched | Research the specified technology in a country scope | ``` add_technology_researched = technology ``` |  |
| add\_treasury | Add/remove money from a country | ``` add_treasury = fixed point ``` |  |
| annex | Annexes a country | ``` annex = scope ``` | country |
| annex\_as\_civil\_war | Annexes a country with all the inheritance effects of a victorious side in a civil war | ``` annex_as_civil_war = scope ``` | country |
| annex\_with\_incorporation | Annexes a country, inheriting incorporation of their states | ``` annex_with_incorporation = scope ``` | country |
| call\_election | Sets the next election date for country in N months | ``` call_election = {   months = 6 } ``` |  |
| cancel\_enactment | Stops enacting the country's currently enacting law | ``` cancel_enactment = yes ``` |  |
| change\_infamy | Change infamy of scope country | ``` change_infamy = amount ``` |  |
| change\_institution\_investment\_level | Add/remove the investment level for the institution | ``` change_institution_investment_level = {   institution = institution_police   investment = -1 } ``` |  |
| change\_relations | Change relations between two countries | ``` change_relations = {   country = country scope/tag   value = amount } ``` |  |
| change\_subject\_type | Changes the subject type of the country in scope while retaining the current Liberty Desire value. | ``` change_subject_type = subject_type_dominion ``` |  |
| change\_tag | Change the tag for the scoped country | ``` c:GBR = { change_tag = FRA } ``` |  |
| change\_tension | Change tension between two countries | ``` change_tension = {   country = country scope/tag   value = amount } ``` |  |
| clear\_debt | Clear country loans = bool |  |  |
| clear\_enactment\_modifier | Clears all current law enactment modifiers of scope country. |  |  |
| clear\_scaled\_debt | Clears an amount of debt equal to the defined multiplier on target's max credit | ``` clear_scaled_debt = value ``` |  |
| complete\_objective\_subgoal | Completes an objective subgoal | ``` complete_objective_subgoal = <key> ``` |  |
| copy\_laws | Copies the constitution of the target country scope | ``` Warning: This stops any current enactment. copy_laws = scope ``` | country |
| create\_bidirectional\_truce | Create a bidirectional truce between two countries | ``` create_bidirectional_truce = {  country = country scope/tag  months = integer } ``` |  |
| create\_character | Creates a character, any option can be omitted. | ``` create_character = {  name = loc_key or alternatively first_name and last_name separately  culture = culture_tag  religion = religion scope (if omitted, it's defined by the character's culture religion)  female = bool or character scope (gets the same value from the character)  noble = bool or character scope (gets the same value from the character)  ruler = bool  heir = bool  historical = bool  age = integer, range, or character scope (gets the age from a character)  ideology = ideology key or scope  interest_group = interest group key or scope  template = base template to generate the character from  on_created = effect  save_scope_as = scope name  trait_generation = effect  hq = HQ scope or strategic region scope } ``` |  |
| create\_diplomatic\_catalyst | Creates a new diplomatic catalyst | ``` create_diplomatic_catalyst = {  type = catalyst_relations_level_increased  arget = <country scope> } ``` |  |
| create\_diplomatic\_pact | Create a diplomatic pact between two countries, with scope country as initiator | ``` create_diplomatic_pact = {  country = country scope/tag  first_state = state scope/tag  second_state = state scope/tag  type = diplomatic action type } ``` |  |
| create\_diplomatic\_play | Create a diplomatic play with the scoped object as initiator add\_initiator\_backers, add\_target\_backers, and add\_war\_goal can be included as direct effects | ``` create_diplomatic_play = {  name = loc_key  escalation = integer between 0 and 100  target_country = country scope/tag  type = diplomatic play type  annex_as_civil_war = yes/no  add_initiator_backers = { list of country scopes/tags }  add_target_backers = { list of country scopes/tags }  add_war_goal = {   holder = country scope/tag   war_goal = <war goal key>   target_state = <state scope> (if required)   target_country = <country scope> (if required)   target_region = <region scope> (if required)  } } ``` |  |
| create\_incident | Creates a diplomatic incident that generates infamy, with target country as the victim | ``` create_incident = {  country = country scope/tag  value = infamy amount } ``` |  |
| create\_military\_formation | Creates a military formation | ``` create_military_formation = {  # Optional name  name = name  # type defaults to army  type = army/fleet  hq_region = sr:region_russia  # Add as many combat_unit specifications as necessary  combat_unit = {   type = unit_type:combat_unit_type_irregular_infantry   # service_type defaults to regular and conscript is not applicable for fleets   service_type = regular/conscript   state_region = s:STATE_MOSCOW   count = 5  }  # mobilization_options are not applicable for fleets  mobilization_options = {   mobilization_option:mobilization_option_basic_supplies   mobilization_option:mobilization_option_truck_transport  } } ``` |  |
| create\_political\_lobby | Creates a new political lobby | ``` create_political_lobby = {  type = lobby_pro_country  arget = <country scope>  add_interest_group = <ig scope 1>  add_interest_group = <ig scope 2>  add_interest_group = <ig scope 3> } ``` |  |
| create\_political\_movement | Creates a political movement of the specified type in the country, culture/religion optional | ``` create_political_movement = {  movement_type = x  religion = <scope> (if relevant)  culture = <scope> (if relevant) } ``` |  |
| create\_power\_bloc | Creates a power bloc with the scoped object as leader | ``` create_power_bloc = {  name = loc_key  map_color = { R G B } or hsv{ H S V } founding_date = yyyy.mm.dd, optional  identity = power bloc identity key  principle = power bloc principle key, can be repeated  member = country scope, can be repeated } ``` |  |
| create\_unidirectional\_truce | Create a unidirectional truce for one country towards another | ``` create_unidirectional_truce = {  country = country scope/tag  months = integer } ``` |  |
| deactivate\_law | Deactivates a law for a country |  | law\_type |
| deactivate\_parties | Deactivates parties in scoped country. | ``` deactivate_parties = yes ``` |  |
| decrease\_autonomy | Change a country's subject type to a less autonomus one | ``` decrease_autonomy = yes ``` |  |
| end\_truce | Ends any truce betweeen two countries | ``` end_truce = country_scope ``` | country |
| every\_active\_law | Iterate through all active laws in a country | ``` every_active_law = {   limit = { <triggers> } #optional   <effects> } ``` | law |
| every\_active\_party | Iterate through all active political parties in a country | ``` every_active_party = {   limit = { <triggers> } #optional   <effects> } ``` | party |
| every\_civil\_war | Iterate through all civil wars related to the scoped country | ``` every_civil_war = {   limit = { <triggers> } #optional   <effects> } ``` | civil\_war |
| every\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` every_cobelligerent_in_diplo_play = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` every_cobelligerent_in_war = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_company | Iterate through all companies in a country | ``` every_company = {   limit = { <triggers> } #optional   <effects> } ``` | company |
| every\_diplomatic\_catalyst | Iterate through all diplomatic catalysts in the recent memory of a country | ``` every_diplomatic_catalyst = {   limit = { <triggers> } #optional   <effects> } ``` | diplomatic\_catalyst |
| every\_diplomatically\_relevant\_country | Iterate through all diplomatically relevant countries of a country scope | ``` every_diplomatically_relevant_country = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_direct\_subject | Any country directly below current in hierarchy | ``` every_direct_subject = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_enemy\_in\_diplo\_play | Iterate through all enemies of scope country in all diplomatic plays (includes wars) | ``` every_enemy_in_diplo_play = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_enemy\_in\_war | Iterate through all enemies of scope country in all wars | ``` every_enemy_in_war = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` every_harvest_condition = {   limit = { <triggers> } #optional   <effects> } ``` | harvest\_condition |
| every\_in\_hierarchy | Any country in current hierarchy, including current | ``` every_in_hierarchy = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_interest\_group | Iterate through all interest groups in a country | ``` every_interest_group = {   limit = { <triggers> } #optional   <effects> } ``` | interest\_group |
| every\_law | Iterate through all laws in a country | ``` every_law = {   limit = { <triggers> } #optional   <effects> } ``` | law |
| every\_military\_formation | Iterate through all military formations currently present at input scope | ``` every_military_formation = {   limit = { <triggers> } #optional   <effects> } ``` | military\_formation |
| every\_neighbouring\_state | Iterate through all states neighbouring current scope Note British spelling | ``` every_neighbouring_state = {   limit = { <triggers> } #optional   <effects> } ``` | state |
| every\_overlord\_or\_above | Any country above current in hierarchy | ``` every_overlord_or_above = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` every_political_lobby = {   limit = { <triggers> } #optional   <effects> } ``` | political\_lobby |
| every\_political\_movement | Iterate through all political movements in a country | ``` every_political_movement = {   limit = { <triggers> } #optional   <effects> } ``` | political\_movement |
| every\_potential\_party | Iterate through all potential political parties in a country | ``` every_potential_party = {   limit = { <triggers> } #optional   <effects> } ``` | party |
| every\_primary\_culture | Primary cultures of the scoped country or country definition | ``` every_primary_culture = {   limit = { <triggers> } #optional   <effects> } ``` | culture |
| every\_rival\_country | Any country that is being rivaled by the country in a scope | ``` every_rival_country = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_rivaling\_country | Any country that is rivaling the country in a scope | ``` every_rivaling_country = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` every_scope_admiral = {   limit = { <triggers> } #optional   <effects> } ``` | character |
| every\_scope\_ally | Iterate through all allies to a: country | ``` every_scope_ally = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_scope\_building | Iterate through all buildings in a: state, country | ``` every_scope_building = {   limit = { <triggers> } #optional   <effects> } ``` | building |
| every\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` every_scope_character = {   limit = { <triggers> } #optional   <effects> } ``` | character |
| every\_scope\_culture | Iterate through all cultures in the scope | ``` every_scope_culture = {   limit = { <triggers> } #optional   <effects> } ``` | culture |
| every\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` every_scope_diplomatic_pact = {   limit = { <triggers> } #optional   <effects> } ``` | diplomatic\_pact |
| every\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` every_scope_general = {   limit = { <triggers> } #optional   <effects> } ``` | character |
| every\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` every_scope_held_interest_marker = {   limit = { <triggers> } #optional   <effects> } ``` | interest\_marker |
| every\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` every_scope_interest_marker = {   limit = { <triggers> } #optional   <effects> } ``` | interest\_marker |
| every\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` every_scope_politician = {   limit = { <triggers> } #optional   <effects> } ``` | character |
| every\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` every_scope_pop = {   limit = { <triggers> } #optional   <effects> } ``` | pop |
| every\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` every_scope_state = {   limit = { <triggers> } #optional   <effects> } ``` | state |
| every\_scope\_theater | Iterate through all theaters in a: country | ``` every_scope_theater = {   limit = { <triggers> } #optional   <effects> } ``` | theater |
| every\_scope\_treaty | Iterate through in force treaties binding the scoped country | ``` every_scope_treaty = {   limit = { <triggers> } #optional   <effects> } ``` | treaty |
| every\_scope\_violate\_sovereignty\_interested\_parties | Iterate through all countries that would be interested if country in scope has their sovereignty violated | ``` every_scope_violate_sovereignty_interested_parties = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_scope\_violate\_sovereignty\_wars | Iterate through all relevant wars if target country had their sovereignty violated by scoped country | ``` every_scope_violate_sovereignty_wars = {   limit = { <triggers> } #optional   <effects> } ``` | war |
| every\_scope\_war | Iterate through all wars related to the scope | ``` every_scope_war = {   limit = { <triggers> } #optional   <effects> } ``` | war |
| every\_strategic\_objective | Iterate through all Strategic Objective states from the scoped Country | ``` every_strategic_objective = {   limit = { <triggers> } #optional   <effects> } ``` | state |
| every\_subject\_of\_subject | Any country below direct subjects in hierarchy | ``` every_subject_of_subject = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_subject\_or\_below | Any country below current in hierarchy | ``` every_subject_or_below = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` every_valid_mass_migration_culture = {   limit = { <triggers> } #optional   <effects> } ``` | culture |
| increase\_autonomy | Change a country's subject type to a more autonomus one | ``` increase_autonomy = yes ``` |  |
| join\_power\_bloc | Scoped country joins the power bloc of the target scoped country | ``` join_power_bloc = c:USA ``` | country |
| kill\_population | Kills a number of individuals in the population in the scoped country. | ``` All parameters except percent are optional. Pop type and strata cannot be used at the same time. kill_population = {  value = <integer value>  culture = <scope/cu:key>  religion = <scope/rel:key>  interest_group = <scope/ig:key>  pop_type = <scope/pop_type:key>  strata = <key> } ``` |  |
| kill\_population\_percent | Kills a percentage of the population in the scoped country. | ``` All parameters except percent are optional. Pop type and strata cannot be used at the same time. kill_population_percent = {  percent = <decimal value>  culture = <scope/cu:key>  religion = <scope/rel:key>  interest_group = <scope/ig:key>  pop_type = <scope/pop_type:key>  strata = <key> } ``` |  |
| liberate\_slaves | Frees all slaves in the country/state | ``` liberate_slaves = yes ``` |  |
| liberate\_slaves\_in\_incorporated\_states | Frees all slaves in the country's incorporated states | ``` liberate_slaves_in_incorporated_states = yes ``` |  |
| liberate\_slaves\_in\_unincorporated\_states | Frees all slaves in the country's unincorporated states | ``` liberate_slaves_in_unincorporated_states = yes ``` |  |
| make\_independent | Makes a country independent. | ``` make_independent = bool ``` |  |
| ordered\_active\_law | Iterate through all active laws in a country | ``` ordered_active_law = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | law |
| ordered\_active\_party | Iterate through all active political parties in a country | ``` ordered_active_party = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | party |
| ordered\_civil\_war | Iterate through all civil wars related to the scoped country | ``` ordered_civil_war = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | civil\_war |
| ordered\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` ordered_cobelligerent_in_diplo_play = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` ordered_cobelligerent_in_war = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_company | Iterate through all companies in a country | ``` ordered_company = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | company |
| ordered\_diplomatic\_catalyst | Iterate through all diplomatic catalysts in the recent memory of a country | ``` ordered_diplomatic_catalyst = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | diplomatic\_catalyst |
| ordered\_diplomatically\_relevant\_country | Iterate through all diplomatically relevant countries of a country scope | ``` ordered_diplomatically_relevant_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_direct\_subject | Any country directly below current in hierarchy | ``` ordered_direct_subject = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_enemy\_in\_diplo\_play | Iterate through all enemies of scope country in all diplomatic plays (includes wars) | ``` ordered_enemy_in_diplo_play = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_enemy\_in\_war | Iterate through all enemies of scope country in all wars | ``` ordered_enemy_in_war = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` ordered_harvest_condition = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | harvest\_condition |
| ordered\_in\_hierarchy | Any country in current hierarchy, including current | ``` ordered_in_hierarchy = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_interest\_group | Iterate through all interest groups in a country | ``` ordered_interest_group = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | interest\_group |
| ordered\_law | Iterate through all laws in a country | ``` ordered_law = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | law |
| ordered\_military\_formation | Iterate through all military formations currently present at input scope | ``` ordered_military_formation = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | military\_formation |
| ordered\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` ordered_neighbouring_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state |
| ordered\_overlord\_or\_above | Any country above current in hierarchy | ``` ordered_overlord_or_above = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` ordered_political_lobby = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | political\_lobby |
| ordered\_political\_movement | Iterate through all political movements in a country | ``` ordered_political_movement = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | political\_movement |
| ordered\_potential\_party | Iterate through all potential political parties in a country | ``` ordered_potential_party = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | party |
| ordered\_primary\_culture | Primary cultures of the scoped country or country definition | ``` ordered_primary_culture = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | culture |
| ordered\_rival\_country | Any country that is being rivaled by the country in a scope | ``` ordered_rival_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_rivaling\_country | Any country that is rivaling the country in a scope | ``` ordered_rivaling_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` ordered_scope_admiral = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | character |
| ordered\_scope\_ally | Iterate through all allies to a: country | ``` ordered_scope_ally = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_scope\_building | Iterate through all buildings in a: state, country | ``` ordered_scope_building = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | building |
| ordered\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` ordered_scope_character = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | character |
| ordered\_scope\_culture | Iterate through all cultures in the scope | ``` ordered_scope_culture = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | culture |
| ordered\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` ordered_scope_diplomatic_pact = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | diplomatic\_pact |
| ordered\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` ordered_scope_general = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | character |
| ordered\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` ordered_scope_held_interest_marker = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | interest\_marker |
| ordered\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` ordered_scope_interest_marker = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | interest\_marker |
| ordered\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` ordered_scope_politician = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | character |
| ordered\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` ordered_scope_pop = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | pop |
| ordered\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` ordered_scope_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state |
| ordered\_scope\_theater | Iterate through all theaters in a: country | ``` ordered_scope_theater = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | theater |
| ordered\_scope\_treaty | Iterate through in force treaties binding the scoped country | ``` ordered_scope_treaty = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | treaty |
| ordered\_scope\_violate\_sovereignty\_interested\_parties | Iterate through all countries that would be interested if country in scope has their sovereignty violated | ``` ordered_scope_violate_sovereignty_interested_parties = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_scope\_violate\_sovereignty\_wars | Iterate through all relevant wars if target country had their sovereignty violated by scoped country | ``` ordered_scope_violate_sovereignty_wars = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | war |
| ordered\_scope\_war | Iterate through all wars related to the scope | ``` ordered_scope_war = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | war |
| ordered\_strategic\_objective | Iterate through all Strategic Objective states from the scoped Country | ``` ordered_strategic_objective = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state |
| ordered\_subject\_of\_subject | Any country below direct subjects in hierarchy | ``` ordered_subject_of_subject = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_subject\_or\_below | Any country below current in hierarchy | ``` ordered_subject_or_below = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` ordered_valid_mass_migration_culture = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | culture |
| play\_as | Change which country scoped country's player will play as | ``` play_as = <scope> ``` | country |
| random\_active\_law | Iterate through all active laws in a country | ``` random_active_law = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | law |
| random\_active\_party | Iterate through all active political parties in a country | ``` random_active_party = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | party |
| random\_civil\_war | Iterate through all civil wars related to the scoped country | ``` random_civil_war = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | civil\_war |
| random\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` random_cobelligerent_in_diplo_play = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` random_cobelligerent_in_war = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_company | Iterate through all companies in a country | ``` random_company = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | company |
| random\_diplomatic\_catalyst | Iterate through all diplomatic catalysts in the recent memory of a country | ``` random_diplomatic_catalyst = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | diplomatic\_catalyst |
| random\_diplomatically\_relevant\_country | Iterate through all diplomatically relevant countries of a country scope | ``` random_diplomatically_relevant_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_direct\_subject | Any country directly below current in hierarchy | ``` random_direct_subject = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_enemy\_in\_diplo\_play | Iterate through all enemies of scope country in all diplomatic plays (includes wars) | ``` random_enemy_in_diplo_play = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_enemy\_in\_war | Iterate through all enemies of scope country in all wars | ``` random_enemy_in_war = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` random_harvest_condition = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | harvest\_condition |
| random\_in\_hierarchy | Any country in current hierarchy, including current | ``` random_in_hierarchy = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_interest\_group | Iterate through all interest groups in a country | ``` random_interest_group = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | interest\_group |
| random\_law | Iterate through all laws in a country | ``` random_law = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | law |
| random\_military\_formation | Iterate through all military formations currently present at input scope | ``` random_military_formation = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | military\_formation |
| random\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` random_neighbouring_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state |
| random\_overlord\_or\_above | Any country above current in hierarchy | ``` random_overlord_or_above = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` random_political_lobby = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | political\_lobby |
| random\_political\_movement | Iterate through all political movements in a country | ``` random_political_movement = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | political\_movement |
| random\_potential\_party | Iterate through all potential political parties in a country | ``` random_potential_party = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | party |
| random\_primary\_culture | Primary cultures of the scoped country or country definition | ``` random_primary_culture = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | culture |
| random\_rival\_country | Any country that is being rivaled by the country in a scope | ``` random_rival_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_rivaling\_country | Any country that is rivaling the country in a scope | ``` random_rivaling_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` random_scope_admiral = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | character |
| random\_scope\_ally | Iterate through all allies to a: country | ``` random_scope_ally = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_scope\_building | Iterate through all buildings in a: state, country | ``` random_scope_building = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | building |
| random\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` random_scope_character = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | character |
| random\_scope\_culture | Iterate through all cultures in the scope | ``` random_scope_culture = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | culture |
| random\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` random_scope_diplomatic_pact = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | diplomatic\_pact |
| random\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` random_scope_general = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | character |
| random\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` random_scope_held_interest_marker = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | interest\_marker |
| random\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` random_scope_interest_marker = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | interest\_marker |
| random\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` random_scope_politician = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | character |
| random\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` random_scope_pop = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | pop |
| random\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` random_scope_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state |
| random\_scope\_theater | Iterate through all theaters in a: country | ``` random_scope_theater = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | theater |
| random\_scope\_treaty | Iterate through in force treaties binding the scoped country | ``` random_scope_treaty = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | treaty |
| random\_scope\_violate\_sovereignty\_interested\_parties | Iterate through all countries that would be interested if country in scope has their sovereignty violated | ``` random_scope_violate_sovereignty_interested_parties = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_scope\_violate\_sovereignty\_wars | Iterate through all relevant wars if target country had their sovereignty violated by scoped country | ``` random_scope_violate_sovereignty_wars = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | war |
| random\_scope\_war | Iterate through all wars related to the scope | ``` random_scope_war = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | war |
| random\_strategic\_objective | Iterate through all Strategic Objective states from the scoped Country | ``` random_strategic_objective = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state |
| random\_subject\_or\_below | Any country below current in hierarchy | ``` random_subject_or_below = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` random_valid_mass_migration_culture = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | culture |
| recalculate\_pop\_ig\_support | Recalculates and updates a country's pop IG memberships = bool |  |  |
| regime\_change | Executes a regime change by the scope country in the target country. | ``` regime_change = scope:upstart_country ``` | country |
| remove\_active\_objective\_subgoal | Removes an active objective subgoal | ``` remove_active_objective_subgoal = <key> ``` |  |
| remove\_banned\_goods | Removes a total ban of a good from a country | ``` remove_banned_goods = <goods key/scope> ``` | goods |
| remove\_company | Removes company of specified type from a country's companies | ``` remove_company = company_type:key ``` | company\_type |
| remove\_diplomatic\_pact | Removes a diplomatic pact between two countries, with scope country as initiator | ``` remove_diplomatic_pact = {  country = country scope/tag  type = diplomatic action type } ``` |  |
| remove\_enactment\_modifier | Removes an enactment-related timed modifier effect to object in scope |  |  |
| remove\_modifier | Removes a timed modifier effect to object in scope | ``` remove_modifier = static_modifier_name ``` |  |
| remove\_monopoly | removes a monopoly in a country scope for a specific building | ``` remove_monopoly = bt:building_textile_mills ``` | building\_type |
| remove\_primary\_culture | Removes a culture from the primary cultures of a country | ``` remove_primary_culture = <culture> ``` | culture |
| remove\_taxed\_goods | Removes consumption taxes on a good from a country | ``` remove_taxed_goods = <goods key/scope> ``` | goods |
| seize\_investment\_pool | Seize investment pool for the treasury and transfer all private construction queue elements to the government queue = bool |  |  |
| set\_capital | Set capital state in a country scope | ``` set_capital = <state_region key> ``` |  |
| set\_country\_type | Sets the type of country for a country, for history |  |  |
| set\_diplomats\_expelled | Expels diplomats from target country in scoped country | ``` set_diplomats_expelled = scope:target_country ``` | country |
| set\_export\_tariff\_level | Sets export tariff level for a good in scoped country | ``` set_export_tariff_level = { goods = g:iron level = max_tariffs } ``` |  |
| set\_government\_wage\_level | Sets the government wage level of scoped country | ``` set_government_wage_level = very_low/low/medium/high/very_high ``` |  |
| set\_heir | Sets the heir of the scoped country to the character scope specified | ``` set_heir = scope_victoria ``` | character |
| set\_immune\_to\_revolutions | Makes a country immune to revolutions or removes such immunity. | ``` set_immune_to_revolutions = yes/no ``` |  |
| set\_import\_tariff\_level | Sets import tariff level for a good in scoped country | ``` set_import_tariff_level = { goods = g:iron level = max_tariffs } ``` |  |
| set\_institution\_investment\_level | Sets the investment level for an institution | ``` set_institution_investment_level = {  institution = <key>  level = x } ``` |  |
| set\_market\_capital | Set market capital in a country scope | ``` set_market_capital = <state_region key> ``` |  |
| set\_military\_wage\_level | Sets the military wage level of scoped country | ``` set_military_wage_level = very_low/low/medium/high/very_high ``` |  |
| set\_mutual\_secret\_goal | Set mutual secret AI goal for scope country and target country | ``` set_mutual_secret_goal = {  country = country scope/tag  secret_goal = secret goal type } ``` |  |
| set\_next\_election\_date | Set next election date for country | ``` set_next_election_date = year.month.day ``` |  |
| set\_only\_legal\_party\_from\_ig | Sets the only party that is legal in a country, used for single-party state law. | ``` set_only_legal_party_from_ig = ruler.interest_group ``` | interest\_group |
| set\_owes\_obligation\_to | Set whether a country owes another a obligation | ``` set_owes_obligation = {  country = country scope/tag  setting = yes/no } ``` |  |
| set\_relations | Set relations between two countries | ``` set_relations = {  country = country scope/tag  value = amount } ``` |  |
| set\_ruling\_interest\_groups | Creates a government for the country in scope from a set of interest groups | ``` set_ruling_interest_groups = { ig_tag1 ig_tag2 } ``` |  |
| set\_secret\_goal | Set a secret AI goal for scope country towards another country | ``` set_secret_goal = {  country = country scope/tag  secret_goal = secret goal type } ``` |  |
| set\_social\_hierarchy | Sets the social hierarchy the scoped country | ``` set_social_hierarchy = <key> ``` |  |
| set\_state\_religion | Changes the state religion of the country to the specified religion | ``` set_state_religion = <religion_scope ``` | religion |
| set\_strategy | Set AI strategy for scope country | ``` set_strategy = <key> ``` |  |
| set\_tax\_level | Sets the overall tax level of scoped country | ``` set_tax_level = very_low/low/medium/high/very_high ``` |  |
| set\_tension | Set tension between two countries | ``` set_tension = {  country = country scope/tag  value = amount } ``` |  |
| start\_enactment | Starts enacting the specified law type for the country in scope | ``` start_enactment = law_type:law_multicultural ``` | law\_type |
| start\_national\_awakening | Starts a cultural awakening | ``` start_national_awakening = {  culture = cu:british                  # the culture that will have a national awakening  months = 12                           # the number of months the awakening will last for    state_region = s:STATE_HOME_COUNTIES  # optional, if not specified the state region with the highest literacy rate of the culture is used } ``` |  |
| start\_research\_random\_technology | Scoped country starts research of any random technology they can | ``` start_research_random_technology = yes ``` |  |
| take\_on\_scaled\_debt | Transfers an amount of debt equal to the defined multiplier on target's max credit | ``` take_on_scaled_debt = {  who = <country scope>  value = <0-1 value> } ``` |  |
| try\_form\_government\_with | Tries to form a new govt with provided IGs, If not possible with legitimacy provided will try and add as many IGs into the govt as possible | ``` try_form_government_with = {  value = 30  interest_group_type = ig_armed_forces  interest_group_type = ig_devout  interest_group_type = ig_landowners } ``` |  |
| unset\_only\_legal\_party | Returns the country to a non single-party state state, where multiple parties can exist if they are allowed by other laws | ``` unset_only_legal_party = yes ``` |  |
| update\_party\_support | Updates party support in scoped country. | ``` update_party_support = yes ``` |  |
| validate\_subsidies | Validates subsidies across a country's buildings. No base game uses | ``` validate_subsidies = bool ``` |  |
| violate\_sovereignty\_join | Scope country joins war on side of violator or target | ``` violate_sovereignty_accept = {  violator = <country scope>  target = <country scope>  join_violator = yes/no } ``` |  |

List of country triggers

| Trigger | Description | Example | Targets |
| additional\_war\_exhaustion | Compares the additional war exhaustion the scoped country has accumulated from scripted events in the target diplomatic play | ``` additional_war_exhaustion = {  target = scope:war.diplomatic_play  value > 1.0 } ``` | value |
| aggressive\_diplomatic\_plays\_permitted | True if country is independent or permitted to start their own Diplomatic Plays | ``` aggressive_diplomatic_plays_permitted = bool ``` | boolean |
| any\_active\_law | Iterate through all active laws in a country | ``` any_active_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | law |
| any\_active\_party | Iterate through all active political parties in a country | ``` any_active_party = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | party |
| any\_civil\_war | Iterate through all civil wars related to the scoped country | ``` any_civil_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | civil\_war |
| any\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` any_cobelligerent_in_diplo_play = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` any_cobelligerent_in_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_company | Iterate through all companies in a country | ``` any_company = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | company |
| any\_diplomatic\_catalyst | Iterate through all diplomatic catalysts in the recent memory of a country | ``` any_diplomatic_catalyst = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_catalyst |
| any\_diplomatically\_relevant\_country | Iterate through all diplomatically relevant countries of a country scope | ``` any_diplomatically_relevant_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_direct\_subject | Any country directly below current in hierarchy | ``` any_direct_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_enemy\_in\_diplo\_play | Iterate through all enemies of scope country in all diplomatic plays (includes wars) | ``` any_enemy_in_diplo_play = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_enemy\_in\_war | Iterate through all enemies of scope country in all wars | ``` any_enemy_in_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` any_harvest_condition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | harvest\_condition |
| any\_in\_hierarchy | Any country in current hierarchy, including current | ``` any_in_hierarchy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_interest\_group | Iterate through all interest groups in a country | ``` any_interest_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | interest\_group |
| any\_law | Iterate through all laws in a country | ``` any_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | law |
| any\_military\_formation | Iterate through all military formations currently present at input scope | ``` any_military_formation = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | military\_formation |
| any\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` any_neighbouring_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state |
| any\_overlord\_or\_above | Any country above current in hierarchy | ``` any_overlord_or_above = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` any_political_lobby = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | political\_lobby |
| any\_political\_movement | Iterate through all political movements in a country | ``` any_political_movement = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | political\_movement |
| any\_potential\_party | Iterate through all potential political parties in a country | ``` any_potential_party = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | party |
| any\_primary\_culture | Primary cultures of the scoped country or country definition | ``` any_primary_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture |
| any\_rival\_country | Any country that is being rivaled by the country in a scope | ``` any_rival_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_rivaling\_country | Any country that is rivaling the country in a scope | ``` any_rivaling_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` any_scope_admiral = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character |
| any\_scope\_ally | Iterate through all allies to a: country | ``` any_scope_ally = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_scope\_building | Iterate through all buildings in a: state, country | ``` any_scope_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | building |
| any\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` any_scope_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character |
| any\_scope\_culture | Iterate through all cultures in the scope | ``` any_scope_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture |
| any\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` any_scope_diplomatic_pact = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_pact |
| any\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` any_scope_general = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character |
| any\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` any_scope_held_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | interest\_marker |
| any\_scope\_interest\_marker | Iterate through all interest markers in a: country, strategic region | ``` any_scope_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | interest\_marker |
| any\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` any_scope_politician = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character |
| any\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` any_scope_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | pop |
| any\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` any_scope_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state |
| any\_scope\_theater | Iterate through all theaters in a: country | ``` any_scope_theater = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | theater |
| any\_scope\_treaty | Iterate through in force treaties binding the scoped country | ``` any_scope_treaty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty |
| any\_scope\_violate\_sovereignty\_interested\_parties | Iterate through all countries that would be interested if country in scope has their sovereignty violated | ``` any_scope_violate_sovereignty_interested_parties = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_scope\_violate\_sovereignty\_wars | Iterate through all relevant wars if target country had their sovereignty violated by scoped country | ``` any_scope_violate_sovereignty_wars = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war |
| any\_scope\_war | Iterate through all wars related to the scope | ``` any_scope_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war |
| any\_strategic\_objective | Iterate through all Strategic Objective states from the scoped Country | ``` any_strategic_objective = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state |
| any\_subject\_of\_subject | Any country below direct subjects in hierarchy | ``` any_subject_of_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_subject\_or\_below | Any country below current in hierarchy | ``` any_subject_or_below = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` any_valid_mass_migration_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture |
| approaching\_bureaucracy\_shortage | Check if Institutions in the country will incur a Bureaucracy shortage eventually |  | boolean |
| arable\_land\_country | Compare arable land in \*all\* states | ``` arable_land_country > 10 ``` | value |
| army\_mobilization\_option\_fraction | Checks that a countries army has a certain percentage of units with a specific monbilization option | ``` scope:country = {  army_mobilization_option_fraction = {  target = mobilization_option:key  value >= 0.2  } } ``` | value |
| army\_power\_projection | Compare to a country's total army power projection | ```  scope:example_country = { army_power_projection < root.army_power_projection } ``` | value |
| authority | Compares the available authority of the scoped country |  | value |
| authority\_usage | Compares the consumed authority of the scoped country |  | value |
| average\_country\_infrastructure | Check average infrastructure in all states owned by scope country | ``` average_country_infrastructure = 3 ``` | value |
| average\_incorporated\_country\_infrastructure | Check average infrastructure in incorporated states owned by the scope country | ``` average_incorporated_country_infrastructure = 3 ``` | value |
| average\_sol\_for\_culture | Compares the average standard of living for the target culture in the country | ``` average_sol_for_culture = {  target = cu:polish  value > 10 } ``` | value |
| average\_sol\_for\_primary\_cultures | Compare average standard of living for primary cultures |  | value |
| average\_sol\_for\_religion | Compares the average standard of living for the target religion in the country | ``` average_sol_for_religion = {  target = rel:catholic  value > 10 } ``` | value |
| average\_sol\_for\_slaves | Compare average standard of living for enslaved pops |  | value |
| bureaucracy | Compares the available bureaucracy of the scoped country |  | value |
| bureaucracy\_usage | Compares the consumed bureaucracy of the scoped country |  | value |
| can\_afford\_diplomatic\_action | Checks if the country in scope can afford the Influence for the specified diplomatic action (pact or ongoing) | ``` can_afford_diplomatic_action = {  target = <country scope>  type = <diplomatic action key> } ``` |  |
| can\_break\_diplomatic\_pact | Checks if there is a diplomatic pact of the specified type with target country that can be broken by scope country | ``` can_break_diplomatic_pact = {   target = <country scope>   type = <action type key>   first_state = <state scope, optional>   second_state = <state scope, optional> } ``` |  |
| can\_create\_diplomatic\_pact | Checks if a diplomatic pact is valid to create with another country | ``` can_create_diplomatic_pact = {   target = <country scope>   type = <action type key>   first_state = <state scope, optional>   second_state = <state scope, optional> } ``` |  |
| can\_decrease\_autonomy | Check if a subject country is able to become a less autonomous subject type | ``` can_increase_autonomy = yes ``` | boolean |
| can\_establish\_company | Check if the country can establish a new company |  | boolean |
| can\_form\_nation | Check if the target country is able to potentially form a nation | ``` can_form_nation = <tag> ``` |  |
| can\_have\_as\_subject | Checks if a country can have another country as a particular type of subject | ``` can_have_as_subject = {  who = <country scope>  type = <subject type key> } ``` |  |
| can\_have\_subjects | Check if the country is able to have subjects of its own |  | boolean |
| can\_increase\_autonomy | Check if a subject country is able to become a more autonomous subject type | ``` can_increase_autonomy = yes ``` | boolean |
| can\_leave\_power\_bloc | Checks if the country in scope can leave its current Power Bloc (returns false if country is not in a Power Bloc) | ``` can_leave_power_bloc = yes ``` | boolean |
| can\_lobbies\_target | Checks if target country is a valid target for lobbies in the scoped country | ``` can_lobbies_target = <target country scope> ``` | country |
| can\_own\_autonomy\_be\_decreased | Check if scoped country can have it's autonomy decreased | ``` can_own_autonomy_be_decreased = yes/no ``` | boolean |
| can\_research | True if a country can research an technology | ``` can_research = technology ``` |  |
| can\_send\_diplomatic\_action | Checks if a diplomatic action is valid to send by scope country to target country | ``` can_send_diplomatic_action = {   target = <country scope>   type = <action type key>   first_state = <state scope, optional>   second_state = <state scope, optional> } ``` |  |
| can\_take\_on\_scaled\_debt | Checks if scoped country can take on a certain amount of scaled debt from another country | ``` can_take_on_scaled_debt = {  who = <country scope>  value = <0-1 value> } ``` |  |
| can\_trigger\_event | Check if country can trigger the specified event | ``` can_trigger_event = key ``` |  |
| check\_area | Compares areas of object to another object |  |  |
| construction\_queue\_duration | Compares the maximum of all the very roughly approximated weeks remaining to finish the constructions in any queue | ``` construction_queue_duration < 52 ``` | value |
| construction\_queue\_government\_duration | Compares the very roughly approximated weeks remaining to finish the constructions in the government queue | ``` construction_queue_government_duration < 52 ``` | value |
| construction\_queue\_num\_queued\_government\_levels | Compares the number of government constructed building levels in the construction queue |  | value |
| construction\_queue\_num\_queued\_levels | Compares the number of building levels in the construction queue |  | value |
| construction\_queue\_num\_queued\_private\_levels | Compares the number of privately constructed building levels in the construction queue |  | value |
| construction\_queue\_private\_duration | Compares the very roughly approximated weeks remaining to finish the constructions in the private queue | ``` construction_queue_private_duration < 52 ``` | value |
| country\_army\_unit\_type\_fraction | Checks that a country has a certain percentage of a specific army unit type | ``` scope:example_formation = {  country_military_unit_type_fraction = {   target = unit_type:key   value >= 0.2  } } ``` | value |
| country\_average\_cultural\_acceptance | Compares the average acceptance of a culture that is present in a country against a value | ``` country_average_cultural_acceptance = {  target = cu:french  value >= 50 } ``` | value |
| country\_average\_religious\_acceptance | Compares the average acceptance of a religion that is present in a country against a value | ``` country_average_religious_acceptance = {  target = rel:catholic  value >= 50 } ``` | value |
| country\_can\_have\_mass\_migration\_to | Checks if the scoped country can have mass migration to target country | ``` can_have_mass_migration_to = c:country ``` | country |
| country\_fervor\_primary\_culture | Compares with the hightest fervor of a country's primary cultures | ``` country_fervor_primary_culture > 0.2 ``` | value |
| country\_has\_building\_group\_levels | Checks the sum of building levels for a building group in a country | ```  country_has_building_group_levels = {  type = bg_heavy_industry  value >= 100 } ``` | value |
| country\_has\_building\_levels | Checks the sum of building levels for a country | ``` country_has_building_levels >= 10 ``` | value |
| country\_has\_building\_type\_levels | Checks the sum of building levels for a building type in a country | ```  country_has_building_type_levels = {  target = bt:building_barracks  value >= 100 } ``` | value |
| country\_has\_building\_type\_monopoly | Check if the scoped country has a monopoly of the specified building type | ``` country_has_building_type_monopoly = bt:building_food_industry ``` | building\_type |
| country\_has\_country\_monopoly | Check if the scoped country has any country monopolies |  | boolean |
| country\_has\_primary\_culture | Checks if a culture is one of the primary cultures in the country | ``` country_has_primary_culture = <culture> ``` | culture |
| country\_has\_state\_religion | Checks if a religion is the state religion in the country | ``` country_has_accepted_religion = <religion> ``` | religion |
| country\_innovation | Checks the amount of weekly innovation a country produces | ``` country_innovation <= 200 ``` | value |
| country\_navy\_unit\_type\_fraction | Checks that a country has a certain percentage of a specific navy unit type | ``` scope:example_formation = {  country_navy_unit_type_fraction = {   target = unit_type:key   value >= 0.2  } } ``` | value |
| country\_or\_subject\_owns\_entire\_state\_region | Checks whether the scoped country or any of its subjects owns the entire specified state region | ``` country_or_subject_owns_entire_state_region = key ``` |  |
| country\_rank | Compares a Country's Power Ranking | ``` country_rank < rank_value:major_power ``` | value |
| country\_tier | Compare tier of country tag | ``` country_tier = x ``` |  |
| country\_turmoil | Compares the country's population weighted turmoil | ``` country_turmoil > 0.2 ``` | value |
| cultural\_acceptance\_base | Compares the acceptance from shared cultural traits of a culture in the scoped country against an acceptence value | ``` cultural_acceptance_base = {  target = cu:french  value > 50 } ``` | value |
| culture\_percent\_country | Checks that a country's population has a certain percentage of a specific culture | ``` scope:example_country = {  culture_percent_country = {   target = cu:dixie   value >= 0.2  } } ``` | value |
| discriminates\_religion | Checks if the scoped country discriminates the given religion (key) | ``` discriminates_religion = <religion key/scope> ``` | religion |
| economic\_dependence | Compares the degree of dependence the country in scope has to the target country. **Note: This is an expensive trigger** | ``` economic_dependence = {  target = scope:other_country  value > 2.2 } ``` | value |
| empty\_agitator\_slots | Checks number of empty agitator slots in a country | ``` empty_agitator_slots >= 1 ``` | value |
| enacting\_any\_law | Checks if the country is enacting any law. | ``` enacting_any_law = bool ``` | boolean |
| enactment\_chance | Compares the current enactment chance in scope country, including values from enactment modifiers |  | value |
| enactment\_chance\_for\_law | Compares the enactment chance in scope country for given law, including values from enactment modifiers | ``` enactment_chance_for_law = {  target = scope:my_lawtype  value > 0.2 } ``` | value |
| enactment\_chance\_for\_law\_without\_enactment\_modifier | Compares the enactment chance in scope country for given law, excluding values from enactment modifiers | ``` enactment_chance_for_law_without_enactment_modifier = {  target = scope:my_lawtype  value > 0.2 } ``` | value |
| enactment\_chance\_without\_enactment\_modifier | Compares the current enactment chance in scope country, excluding values from enactment modifiers |  | value |
| enactment\_phase | Compares the current law enactment phase in scope country. |  | value |
| enactment\_setback\_count | Compares the current enactment setback count in scope country. |  | value |
| enemy\_contested\_wargoals | Determines the fraction of wargoals that enemies in the war are currently contesting | ``` enemy_contested_wargoals = {  target = scope:war  value > 0.4 } ``` | value |
| enemy\_occupation | Determines the (weighted) enemy occupation score of a country | ``` enemy_occupation > 0.2 ``` | value |
| expanding\_institution | Checks if the institution is expanding | ``` expanding_institution = <scope/key> ``` |  |
| gdp\_ownership\_ratio | Compares the ratio of GDP the specified country owns in the scoped country | ``` gdp_ownership_ratio = {  target = scope:owner_country  value > 0.1 } ``` | value |
| gdp\_per\_capita\_ranking | Compares a Country's GDP per Capita Ranking (position) | ``` gdp_per_capita_ranking > 42 ``` | value |
| global\_country\_ranking | Compares a Country's Power Ranking (position) | ``` global_country_ranking > 42 ``` | value |
| gold\_reserves | Does the country have the required gold reserves | ``` gold_reserves > 500 ``` | value |
| gold\_reserves\_limit | Compares the country's gold reserves limit | ``` gold_reserves > gold_reserves_limit ``` | value |
| goods\_production\_rank | Compare to a country's production leaderboard rank of a good | ``` "goods_production_rank(g:luxury_clothes)" < 10 ``` | value |
| government\_legitimacy | Compare Legitimacy |  | value |
| government\_transfer\_of\_power | Checks country's government's transfer of power | ``` government_transfer_of_power = key ``` | value |
| government\_wage\_level | Compares the government wage level of scoped country. `very_low, low, medium, high, very_high`; returns same number as government\_wage\_level\_value trigger | ``` government_wage_level = <level_term> ``` | value |
| government\_wage\_level\_value | Compares the government wage level value of scoped country. `0, 1, 2, 3, 4` | ``` government_wage_level_value = <level_num> ``` | value |
| has\_active\_peace\_deal | True if the country is in a war where there is a proposed peace deal | ``` has_active_peace_deal = bool ``` | boolean |
| has\_any\_law\_commitment | Checks if a country has a commitment to enact any law | ``` has_any_law_commitment = yes ``` | boolean |
| has\_any\_secessionists\_broken\_out | Check if the country has secessionists broken out |  | boolean |
| has\_any\_secessionists\_growing | Check if the country has any secessionists growing |  | boolean |
| has\_any\_subventions\_on | Check if the scoped country has any level of subventions on a goods | ``` scope:country = {  has_any_subventions_on = <goods scope> } ``` | goods |
| has\_any\_tariffs\_on | Check if the scoped country has any level of tariffs on a goods | ``` scope:country = {  has_any_tariffs_on = <goods scope> } ``` | goods |
| has\_attitude | Checks if scoped country has a particular attitude towards another country | ``` has_attitude = {  who = <country scope>  attitude = <attitude key> } ``` |  |
| has\_building | True if a state/market/state region/country has a building type | ``` has_building = building ``` |  |
| has\_civil\_war\_from\_movement\_type | Checks if a country is having a civil war started by a particular movement type | ``` has_civil_war_from_movement_type = <political_movement_type scope> ``` | political\_movement\_type |
| has\_claim | Checks if country in scope has a claim on state/state region/country | ``` has_claim = <scope> ``` |  |
| has\_company | Checks if a company of the specified type exists in scope country | ``` has_company = <company_type scope> ``` | company\_type |
| has\_completed\_subgoal | Checks if the scoped country has completed a certain subgoal | ``` has_completed_subgoal = subgoal_key ``` |  |
| has\_consumption\_tax | Checks if the country is taxing the target good. | ``` c:FRA = { has_consumption_tax = <goods scope> } ``` | goods |
| has\_convoys\_being\_sunk | Check if the country has convoys being sunk through convoy raiding |  | boolean |
| has\_decreasing\_interests | Checks if the country has decreasing interest levels |  | boolean |
| has\_diplomatic\_pact | Checks if two countries have an active diplomatic pact of type | ``` has_diplomatic_pact = {  who = <country scope>  type = <diplomatic action key>  is_initiator = yes/no } is_initiator is optional parameter that checks to see if scope country is the original initiator/target of the pact ``` |  |
| has\_diplomatic\_relevance | Checks if target country is diplomatically relevant for scope country | ``` has_diplomatic_relevance = <scope> ``` | country |
| has\_diplomats\_expelled | Checks if country in scope has recently expelled diplomats of event target | ``` has_diplomats_expelled = country ``` | country |
| has\_famine | Check if state or country has famine | ``` has_famine = yes/no ``` | boolean |
| has\_free\_government\_reform | Check if the country has a free (of radicals) government reform | ``` has_free_government_reform = <yes/no> ``` | boolean |
| has\_global\_highest\_gdp | Checks if the scoped country has the highest GDP | ``` has_global_highest_gdp = yes/no ``` | boolean |
| has\_global\_highest\_innovation | Checks if the scoped country has the highest weekly innovation | ``` has_global_highest_innovation = yes/no ``` | boolean |
| has\_government\_clout | Does the country's government have the necessary total Clout |  | value |
| has\_government\_type | Is the country's government type as specified | ``` has_government_type = key ``` |  |
| has\_healthy\_economy | Check if the country has a healthy economy |  | boolean |
| has\_inactive\_journal\_entry | Check if the country has at least one inactive journal entry of the specified type | ``` has_inactive_journal_entry = key ``` |  |
| has\_institution | Checks if scope country has a particular type of institution | ``` has_institution = <scope/key> ``` |  |
| has\_insurrectionary\_interest\_groups | Check if the country has Interest Groups that are insurrectionary |  | boolean |
| has\_interest\_marker\_in\_region | True if scope country has an interest marker in target region | ``` has_interest_marker_in_region = region scope/tag ``` |  |
| has\_journal\_entry | Check if the country has at least one active journal entry of the specified type | ``` has_journal_entry = key ``` |  |
| has\_law | Checks if a country has a certain law active |  | law\_type |
| has\_law\_commitment | Checks if a country has a commitment to enact a certain law |  | law\_type |
| has\_law\_imposition\_rights | Checks if the scoped country has the necessary permits to demand another country enacts a certain law | ``` has_law_imposition_rights = {  target_country = <country scope>  type = <law type scope> } ``` |  |
| has\_law\_or\_variant | Checks if a country has a certain law or one its variant laws active |  | law\_type |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |
| has\_objective | Checks if the scoped country has a certain objective type | ``` has_objective = objective_type_key ``` |  |
| has\_overlapping\_interests | Checks if country in scope has an overlapping interest marker with any of target country's interests | ``` has_overlapping_interests = <scope> ``` | country |
| has\_port | Check if state has at least one port | ``` has_port = yes/no ``` | boolean |
| has\_possible\_decisions | Check if a country has any possible Decisions | ``` has_possible_decisions = yes ``` | boolean |
| has\_potential\_to\_form\_country | Check if the target country could ever be able to form a nation | ``` has_potential_to_form_country = <tag> ``` |  |
| has\_power\_struggle | Checks if scope Power Bloc has a power struggle | ``` has_power_struggle = yes/no ``` | boolean |
| has\_researchable\_technology | Check if the country has any researchable technology left. |  | boolean |
| has\_revolution | Check if the country has revolutionary uprising |  | boolean |
| has\_ruling\_interest\_group | Does the country's government include the named IG |  |  |
| has\_ruling\_interest\_group\_count | Does the country's government consist of the specified number of IGs |  | value |
| has\_secret\_goal | Checks if scoped country has a particular secret goal towards another country | ``` has_secret_goal = {  who = <country scope>  secret_goal = <secret_goal key> } ``` |  |
| has\_social\_hierarchy | Checks if the scoped country has adopted a specific social hierarchy | ``` has_social_hierarchy = <key> ``` |  |
| has\_state\_in\_state\_region | Check if country has a state in the state region | ``` has_state_in_state_region = key ``` |  |
| has\_strategic\_adjacency | Checks if country in scope has a strategic adjacency (direct/coastal/wargoal adjacency) to target state/country | ``` has_strategic_adjacency = <scope> ``` |  |
| has\_strategic\_land\_adjacency | Checks if country in scope has a strategic adjacency (direct land border or wargoal adjacency only) to target state/country | ``` has_strategic_adjacency = <scope> ``` |  |
| has\_strategy | Checks if country in scope has a particular AI strategy | ``` has_strategy = <key> ``` |  |
| has\_subject\_relation\_with | Checks if country in scope is subject or overlord of event target | ``` has_subject_relation_with = country ``` | country |
| has\_sufficient\_construction\_capacity\_for\_investment | Check if country has enough construction capacity to be spending all of its incoming investment pool funds. |  | boolean |
| has\_technology\_progress | Does the country have the required progress for an technology | ``` has_technology_progress = {  technology = <technology key>  progress = <0-1 value> } ``` | value |
| has\_technology\_researched | True if a country has researched an technology | ``` has_technology_researched = <scope/key> ``` |  |
| has\_treaty\_port\_in\_market | Checks if the scoped country has a treaty port in target market | ``` c:POR = { has_treaty_port_in_market = c:CHI.market } ``` | market |
| has\_truce\_with | Check if a country has a truce with a different target country | ``` has_truce_with = c:GBR ``` | country |
| has\_war\_with | Checks if country in scope is at war with event target | ``` has_war_with = country ``` | country |
| has\_wasted\_construction | Check if country is wasting any of its produced construction. |  | boolean |
| highest\_secession\_progress | Compares the highest secession progress of any secession movement in a given country | ``` highest_secession_progress > 0.7 ``` | value |
| in\_default | Check if the country is currently in default |  | boolean |
| in\_election\_campaign | Check if the country is in election campaign period | ``` in_election_campaign = <yes/no> ``` | boolean |
| influence | Compares the available influence of the scoped country |  | value |
| influence\_usage | Compares the consumed influence of the scoped country |  | value |
| institution\_investment\_level | Compares the level of investment in an institution | ``` institution_investment_level = {  institution = <key>  value = <comparator value> } ``` | value |
| investment\_pool | Does the country have this amount of money saved in its investment pool | ``` investment_pool > 1000 ``` | value |
| investment\_pool\_gross\_income | Does the country have this amount of gross income (income before expenses) for its investment pool | ``` investment_pool_gross_income > 1000 ``` | value |
| investment\_pool\_net\_income | Does the country have this amount of net income (income after expenses) for its investment pool | ``` investment_pool_net_income > 1000 ``` | value |
| is\_adjacent\_to\_country | Checks if country in scope is adjacent to a target country | ``` is_adjacent_to_country = <scope> ``` | country |
| is\_adjacent\_to\_state | Checks if country in scope is adjacent to a target state | ``` is_adjacent_to_state = <state scope> ``` | state |
| is\_ai | True if country scope is controlled by an AI | ``` is_ai = bool ``` | boolean |
| is\_at\_war | Check if the country is at war |  | boolean |
| is\_banning\_goods | Check if a country is banning a good | ``` is_banning_goods = <goods key/scope> ``` |  |
| is\_considered\_adjacent\_due\_to\_wargoals | Checks if the scoped country is considered adjacent to the target country by virtue of the scoped country having war goals that are adjacent to the target country in a committed diplomatic play | ``` is_considered_adjacent_due_to_wargoals = <target country scope> ``` | country |
| is\_construction\_paused | Check if construction in a state is paused. |  | boolean |
| is\_country\_alive | Checks if the scoped country is alive, i.e. if it has at least one state on the map and can be interacted with | ``` is_country_alive = yes/no ``` | boolean |
| is\_country\_type | Checks the countrys type | ``` is_country_type = country type ``` |  |
| is\_diplomatic\_play\_ally\_of | Checks if country in scope is in a diplomatic play together with event target | ``` is_diplomatic_play_ally_of = country ``` | country |
| is\_diplomatic\_play\_committed\_participant | True if country is a committed participant of any diplomatic play | ``` is_diplomatic_play_participant = bool ``` | boolean |
| is\_diplomatic\_play\_enemy\_of | Checks if country in scope is in a diplomatic play against event target | ``` is_diplomatic_play_enemy_of = country ``` | country |
| is\_diplomatic\_play\_initiator | True if country is the initiator of any diplomatic play | ``` is_diplomatic_play_initiator = bool ``` | boolean |
| is\_diplomatic\_play\_involved\_with | Checks if country in scope is involved in the same diplomatic play as event target | ``` is_diplomatic_play_involved_with = country ``` | country |
| is\_diplomatic\_play\_participant\_with | Checks if country in scope is a committed participant in the same diplomatic play as event target | ``` is_diplomatic_play_participant_with = country ``` | country |
| is\_diplomatic\_play\_target | True if country is the target of any diplomatic play | ``` is_diplomatic_play_target = bool ``` | boolean |
| is\_diplomatic\_play\_undecided\_participant | True if country is a undecided participant of any diplomatic play | ``` is_diplomatic_play_participant = bool ``` | boolean |
| is\_direct\_subject\_of | Checks if country in scope is a direct subject (not subject-of-subject) of event target | ``` is_direct_subject_of = country ``` | country |
| is\_enacting\_law | Checks if the scoped country is enacting a specific law type. | ``` is_enacting_law = law_type:law_conscription ``` | law\_type |
| is\_expanding\_institution | Are you expanding an institution | ``` is_expanding_institution = <yes>/<no> ``` | boolean |
| is\_forced\_to\_join\_plays | Checks if the scoped country is forced to join the target country's Diplomatic Plays | ``` is_forced_to_join_plays = c:country ``` | country |
| is\_home\_country\_for | Checks if a country is the home country for target country |  | country |
| is\_immune\_to\_revolutions | Checks if the country has been set to be immune to revolutions via set\_immune\_to\_revolutions | ``` Warning: This does not check if the country is naturally immune to revolutions due to for example being a revolutionary country itself, only for the effects of set_immune_to_revolutions.  is_immune_to_revolutions = yes/no ``` | boolean |
| is\_in\_customs\_union | Check if the country is part of a customs union |  | boolean |
| is\_in\_customs\_union\_with | Check if the country is in a customs union with scoped country | ``` is_in_customs_union_with = c:FRA ``` | country |
| is\_in\_power\_bloc | Checks if the country is in a Power Bloc | ``` is_in_power_bloc = yes/no ``` | boolean |
| is\_in\_same\_power\_bloc | Checks if the scoped country is in the same power bloc as the target scoped country | ``` is_in_same_power_bloc = c:GBR ``` | country |
| is\_in\_war\_together | Checks if country in scope is in war on the same side as event target | ``` is_in_war_together = country ``` | country |
| is\_indirect\_subject\_of | Checks if country in scope is an indirect subject (subject-of-subject) of event target | ``` is_indirect_subject_of = country ``` | country |
| is\_insurrectionary | Check if country, movement or IG is insurrectionary |  | boolean |
| is\_junior\_in\_customs\_union | True if country is a junior country in a customs custom | ``` is_junior_in_customs_union = bool ``` | boolean |
| is\_local\_player | True if country scope is a player | ``` is_local_player = bool ``` | boolean |
| is\_losing\_power\_rank | Check if the country is in the process of dropping in power ranking |  | boolean |
| is\_market\_reachable\_for\_trade | Check if the scope country can reach the specified market scope for purposes of trade | ``` is_market_reachable_for_trade = scope:my_market_scope ``` | market |
| is\_mass\_migration\_origin | Checks if the scoped country is the origin of mass migration | ``` is_mass_migration_origin = yes ``` | boolean |
| is\_mass\_migration\_origin\_of\_culture | Checks if the scoped country origin of mass migration of specific culture | ``` is_mass_migration_origin_of_culture = cu:example_culture ``` | culture |
| is\_owed\_obligation\_by | Checks if the scoped country is owed a obligation by the target country | ``` is_owed_obligation_by = c:FRA ``` | country |
| is\_player | True if country scope is a player | ``` is_player = bool ``` | boolean |
| is\_power\_bloc\_leader | Checks if the country is a leader of a Power Bloc | ``` is_power_bloc_leader = yes/no ``` | boolean |
| is\_researching\_technology | Check if the country is actively researching a tech | ``` is_researching_technology = <scope/key/any> ``` |  |
| is\_researching\_technology\_category | Check if the country is actively researching a tech category | ``` is_researching_technology_category = <key/any> ``` |  |
| is\_revolutionary | Check if the country, movement or interest group is revolutionary |  | boolean |
| is\_secessionist | Check if the country, movement or interest group is secessionist |  | boolean |
| is\_subject | True if country is a subject | ``` is_subject = bool ``` | boolean |
| is\_subject\_of | Checks if country in scope is subject (or subject-of-subject) of event target | ``` is_subject_of = country ``` | country |
| is\_subject\_type | Checks the country's subject type | ``` is_subject_type = subject type ``` |  |
| is\_supporting\_unification\_candidate | Check if scope country is supporting a unification candidate for a specific country formation | ``` is_supporting_unification_candidate = {  who = c:PRU  country_formation = GER } ``` |  |
| is\_taxing\_goods | Check if a country is taxing a good | ``` has_embargo = <goods key/scope> ``` |  |
| is\_unification\_candidate | Check if scope country is a unification candidate for country tag | ``` is_unification_candidate = GER ``` |  |
| is\_violating\_sovereignty\_of | Check if the scoped country is violating the sovereignty of a target country | ``` is_violating_sovereignty_of = c:GBR ``` | country |
| isolated\_states | Compare number of Isolated States |  | value |
| leading\_producer\_of | Checks if country is producing the most of a certain good | ``` leading_producer_of = g:luxury_clothes ``` | goods |
| leads\_customs\_union | Check if any other country is part of this country's customs union | ``` leads_customs_union = bool ``` | boolean |
| liberty\_desire | Compare trigger for the Liberty Desire value in a scoped country. | ``` liberty_desire > 50 ``` | value |
| liberty\_desire\_weekly\_progress | Compare trigger for the weekly Liberty Desire progress value in a scoped country. | ``` liberty_desire_weekly_progress > 0 ``` | value |
| liberty\_desire\_weekly\_progress\_from\_support\_independence | Compare trigger for the weekly Liberty Desire progress value from the scoped country having their independence supported. | ``` liberty_desire_weekly_progress_from_support_independence > 0 ``` | value |
| literacy\_rate | Checks if a pop, state or country has a certain amount of literacy | ``` literacy = value ``` | value |
| loyalist\_fraction | Compares loyalist fraction in pops in state or country, all parameters except value are optional | ``` loyalist_fraction = {  value = <script_value>  pop_type = <key>  strata = <key>  culture = <key/scope>  religion = <key/scope> } ``` | value |
| max\_law\_enactment\_setbacks | Compares to the max number of law enactment setbacks a country can suffer before the law fails |  | value |
| max\_num\_companies | The limit of how many companies the scoped country is allowed to have | ``` num_num_companies > 0 ``` | value |
| max\_num\_declared\_interests | Compares the maximum number of declared interests of scoped country | ``` max_num_declared_interests = <value> ``` | value |
| military\_wage\_level | Compares the military wage level of scoped country. `very_low, low, medium, high, very_high`; returns same number as military\_wage\_level\_value trigger | ``` military_wage_level = <level_term> ``` | value |
| military\_wage\_level\_value | Compares the military wage level value of scoped country. `0, 1, 2, 3, 4` | ``` military_wage_level_value = <level_num> ``` | value |
| nationalization\_cost | Compares the total cost of nationalizing all buildings in scope country owned by the government or pops of target country | ``` nationalization_cost = {  target = scope:other_country  value > 100000 } ``` | value |
| naval\_power\_projection | Compare to a country's total navy power projection | ``` scope:example_country = { naval_power_projection < root.naval_power_projection } ``` | value |
| neighbors\_any\_power\_bloc | Checks if the scoped country neighbors any power bloc. Note: the scoped country is not considered to be neighboring the power bloc it belongs to (if any) | ``` neighbors_any_power_bloc = yes/no ``` | boolean |
| neighbors\_member\_of\_same\_power\_bloc | Checks if the scoped country neighbors any other country belonging to the same power bloc | ``` neighbors_member_of_same_power_bloc = yes/no ``` | boolean |
| neighbors\_power\_bloc | Checks if the scoped country neighbors the target power bloc. Note: the scoped country is not considered to be neighboring the power bloc it belongs to (if any) | ``` neighbors_power_bloc = c:PRU.power_bloc ``` | power\_bloc |
| num\_companies | How many companies the scoped country has | ``` num_companies > 0 ``` | value |
| num\_declared\_interests | Compares the number of declared interests of scoped country | ``` num_declared_interests = <value> ``` | value |
| num\_diplomatic\_pacts | Compare to a country's number of diplomatic pacts of the specified type | ``` num_diplomatic_pacts = {  type = <key>  value < 10 } ``` | value |
| num\_investments\_of\_type | Checks the number of buildings levels of a given type the scoped country has outside their own country. | ```  num_investments_of_type = {  type = building_oil_rig  value > 5 } ``` | value |
| num\_political\_lobbies | Compare to number of political lobbies in scoped country or interest group | ``` num_political_lobbies > 0 ``` | value |
| num\_subjects | Compares the number of subjects of scoped country | ``` num_subjects = <value> ``` | value |
| num\_taxed\_goods | Compares the number of consumption taxed goods of scoped country | ``` num_taxed_goods = <value> ``` | value |
| number\_of\_claims | The number of claims on foreign states the country has | ``` number_of_claims > 0 ``` | value |
| number\_of\_possible\_decisions | The number of possible decisions a Country can take | ``` number_of_possible_decisions > 0 ``` | value |
| overlord\_can\_decrease\_subject\_autonomy | Check if an overlord can decrease a subject autonomy | ``` overlord_can_decrease_subject_autonomy = bool ``` | boolean |
| owes\_obligation\_to | Checks if country in scope owes a obligation to event target | ``` owes_obligation_to = country ``` | country |
| owns\_entire\_state\_region | Check if country owns entire region | ``` owns_entire_state_region = key ``` |  |
| owns\_treaty\_port\_in | Does country own the treaty port in assigned state region | ``` owns_treaty_port_in = key ``` |  |
| play\_participant\_has\_war\_goal\_of\_type\_against | Checks if scope country holds a wargoal of a specific type targeting a specific country in any diplomatic play | ``` play_participant_has_war_goal_of_type_against = {  type = <wargoal type key>  target = <country scope> } ``` |  |
| play\_side\_has\_war\_goal\_of\_type\_against | Checks if any country on the same side as scope country in any diplomatic play holds a wargoal of a specific type targeting a specific country | ``` play_side_has_war_goal_of_type_against = {  type = <wargoal type key>  target = <country scope> } ``` |  |
| politically\_involved\_ratio | Compares the percentage of politically involved population in a country | ``` politically_involved_ratio > 0.25 ``` | value |
| pop\_type\_percent\_country | Checks whether the scoped country has <percent> of its population belonging to the specified pop type | ``` scope:example_country = {  pop_type_percent_country = {   pop_type = <pop_type>   percent <compare operator (<,>,= and so on)> <percent>  } } ``` | value |
| potential\_diplomatic\_play\_power\_ratio | Check the expected power ratio between scope country side and target country side in a potential diplomatic play | ``` Attempts to predict which sides involved participants will take (if any) so doesn't just check 'starting strengths' potential_diplomatic_play_power_ratio = {  type = dp_open_market  target = c:BEL  state = c:BEL.capital  value > 1.0 } state and type are optional, will default to dp_open_market on target capital ``` | value |
| power\_bloc\_share\_gdp | Compare the share of GDP of the country in scope against all its Power Bloc current members, returns -1 if not in a Power Bloc | ``` power_bloc_share_gdp > 0.2 ``` | value |
| power\_bloc\_share\_gdp\_with | Compare the share of GDP of the country in scope against all its Power Bloc members plus an additional country, returns -1 if not in a Power Bloc | ``` "power_bloc_share_gdp_with(scope:country) > 0.2" ``` | value |
| power\_bloc\_share\_gdp\_without | Compare the share of GDP of the country in scope against all its Power Bloc members minus one of the members, returns -1 if not in a Power Bloc | ``` "power_bloc_share_gdp_without(scope:country) > 0.2" ``` | value |
| power\_bloc\_share\_power\_projection | Compare the share of Power Projection of the country in scope against all its Power Bloc members, returns -1 if not in a Power Bloc | ``` power_bloc_share_power_projection > 0.2 ``` | value |
| power\_bloc\_share\_power\_projection\_with | Compare the share of Power Projection of the country in scope against all its Power Bloc members plus an additional country, returns -1 if not in a Power Bloc | ``` "power_bloc_share_power_projection_with(scope:country) > 0.2" ``` | value |
| power\_bloc\_share\_power\_projection\_without | Compare the share of Power Projection of the country in scope against all its Power Bloc members minus one of the members, returns -1 if not in a Power Bloc | ``` "power_bloc_share_power_projection_without(scope:country) > 0.2" ``` | value |
| power\_bloc\_share\_prestige | Compare the share of Prestige of the country in scope against all its Power Bloc members, returns -1 if not in a Power Bloc | ``` power_bloc_share_prestige > 0.2 ``` | value |
| power\_bloc\_share\_prestige\_with | Compare the share of Prestige of the country in scope against all its Power Bloc members plus an additional country, returns -1 if not in a Power Bloc | ``` "power_bloc_share_prestige_with(scope:country) > 0.2" ``` | value |
| power\_bloc\_share\_prestige\_without | Compare the share of Prestige of the country in scope against all its Power Bloc members minus one of the members, returns -1 if not in a Power Bloc | ``` "power_bloc_share_prestige_without(scope:country) > 0.2" ``` | value |
| prestige | Compare prestige |  | value |
| primary\_cultures\_percent\_country | Checks that a country's population has a certain percentage of the country's primary cultures | ``` scope:example_country = {  primary_cultures_percent_country >= 0.2 } ``` | value |
| produced\_authority | Compares the produced authority of the scoped country |  | value |
| produced\_bureaucracy | Compares the produced bureaucracy of the scoped country |  | value |
| produced\_influence | Compares the produced influence of the scoped country |  | value |
| radical\_fraction | Compares radical fraction in pops in state or country, all parameters except value are optional | ``` radical_fraction = {  value = <script_value>  pop_type = <key>  strata = <key>  culture = <key/scope>  religion = <key/scope> } ``` | value |
| radical\_population\_fraction | Compares the fraction of the population that are radicals in a given country | ``` radical_population_fraction > 0.2 ``` | value |
| relative\_authority | Compares the relative production to usage of bureaucracy for the scoped country |  | value |
| relative\_bureaucracy | Compares relative production to usage of bureaucracy for the scoped country |  | value |
| relative\_influence | Compares relative production to usage of influence for the scoped country |  | value |
| religion\_percent\_country | Checks that a country's population has a certain percentage of a specific religion | ``` scope:example_country = {  religion_percent_country = {   target = rel:catholic   value <= 0.8  } } ``` | value |
| ruler\_can\_have\_command | Checks if the country's government type allows its ruler to have command | ``` ruler_can_have_command = yes/no ``` | boolean |
| scaled\_debt | Compare value to a country's debt relative to debt ceiling | ``` scaled_debt = value ``` | value |
| scaled\_gold\_reserves | Compare value to a country's gold reserves relative to reserves limit | ``` scaled_gold_reserves = value ``` | value |
| should\_set\_wargoal | Check if the country is lacking a primary wargoal in any diplomatic play it is part of |  | boolean |
| shrinking\_institution | Checks if the institution is shrinking | ``` expanding_institution = <scope/key> ``` |  |
| size\_weighted\_lost\_battles\_fraction | Determines the fraction of battles the target country has lost in the target war, weighted by manpower size of all battles in the war | ``` size_weighted_lost_battles_fraction = {  target = scope:war  value > 0.3 } add = "size_weighted_lost_battles_fraction(scope:war)" ``` | value |
| sol\_ranking | Compares a Country's Standard of Living Ranking (position) | ``` sol_ranking > 42 ``` | value |
| subject\_can\_increase\_autonomy | Check if a subject can increase its autonomy | ``` subject_can_increase_autonomy = bool ``` | boolean |
| supply\_network\_strength | Compares the country's supply network strength (can exceed 1) | ``` supply_network_strength > 1.1 ``` | value |
| taking\_loans | Check if the country is currently running a weekly deficit and taking loans to compensate |  | boolean |
| tax\_level | Compares the overall tax level of scoped country. `very_low, low, medium, high, very_high`; returns same number as tax\_level\_value trigger | ``` tax_level = <level_term> ``` | value |
| tax\_level\_value | Compares the overall tax level integer value of scoped country. `0, 1, 2, 3, 4` | ``` income_tax_level_value = <level_num> ``` | value |
| tenure\_in\_current\_power\_bloc\_days | Compare the number of days the country in scope has been a member of their current Power Bloc | ``` tenure_in_current_power_bloc_days > 720 ``` | value |
| tenure\_in\_current\_power\_bloc\_months | Compare the number of (whole) months the country in scope has been a member of their current Power Bloc | ``` tenure_in_current_power_bloc_months > 20 ``` | value |
| tenure\_in\_current\_power\_bloc\_weeks | Compare the number of (whole) weeks the country in scope has been a member of their current Power Bloc | ``` tenure_in_current_power_bloc_weeks > 12 ``` | value |
| tenure\_in\_current\_power\_bloc\_years | Compare the number of (whole) years the country in scope has been a member of their current Power Bloc | ``` tenure_in_current_power_bloc_years > 5 ``` | value |
| total\_population | Compares the total population of a given country | ``` total_population > 100000 ``` | value |
| total\_population\_including\_subjects | Compares the total population in the scope country and its subjects | ``` total_population_including_subjects > 40000000 ``` | value |
| total\_population\_including\_subjects\_share | Compares the total population in the scope country and its subjects' share of the global population | ``` total_population_including_subjects_share > 0.4 ``` | value |
| total\_population\_share | Compares the total population of a given country's share of the global population | ``` total_population_share > 0.02 ``` | value |
| transfer\_money\_gross\_income | Does the country have this amount of gross income (income before expenses) from money transfer treaties | ``` transfer_money_gross_income > 1000 ``` | value |
| transfer\_money\_net\_income | Does the country have this amount of net income (income after expenses) from money transfer treaties | ``` transfer_money_net_income > 1000 ``` | value |
| war\_participant\_has\_war\_goal\_of\_type\_against | Checks if scope country holds a wargoal of a specific type targeting a specific country in any war | ``` war_participant_has_war_goal_of_type_against = {  type = <wargoal type key>  target = <country scope> } ``` |  |
| war\_side\_has\_war\_goal\_of\_type\_against | Checks if any country on the same side as scope country in any war holds a wargoal of a specific type targeting a specific country | ``` war_side_has_war_goal_of_type_against = {  type = <wargoal type key>  target = <country scope> } ``` |  |
| was\_formed\_from | Check if a formed country previously had a specific definition | ``` was_formed_from = <tag> ``` |  |
| would\_accept\_diplomatic\_action | Checks if a country would accept a diplomatic action proposed by another country | ``` would_accept_diplomatic_action = {  actor = <country scope>  type = <action type key>  first_state = <state scope, optional>  second_state = <state scope, optional>  modify_acceptance = <script value, optional> } if set, modify_acceptance will be added to their acceptance score, to allow for checking if they would accept with an obligation, etc ``` |  |

List of country event targets

| Event target | Description | To scope |
| active\_law | Scope to the scoped country's active law in the named law group (active\_law:lawgroup\_trade\_policy) | law |
| ai\_army\_comparison | Scope to comparative army strength between two countries (example: value = ai\_army\_comparison:root) | value |
| ai\_gdp\_comparison | Scope to comparative GDP between two countries (example: value = ai\_army\_comparison:root) | value |
| ai\_ideological\_opinion | Scope to AI ideological opinion of scope country on target country (example: value = ai\_ideological\_opinion:root) | value |
| ai\_navy\_comparison | Scope to comparative navy strength between two countries (example: value = ai\_navy\_comparison:root) | value |
| ai\_subject\_value | Scope to AI desire of target country to have scope country as a subject (example: value = ai\_subject\_value:root) | value |
| ai\_transit\_rights\_value | Scope to AI desire of to have transit rights through target country (example: value = ai\_transit\_rights\_value:root) | value |
| ai\_treaty\_fairness | Scope to AI evaluation of how fair (to both sides) it considers existing treaty articles with the target country to be (example: value = ai\_treaty\_fairness\_score:root) | value |
| ai\_treaty\_value | Scope to AI evaluation of how favorable to itself it considers existing treaty articles with the target country to be (example: value = ai\_treaty\_value:root) | value |
| army\_size | Number of battalions of scope country, excluding currently raised conscripts. | value |
| army\_size\_including\_conscripts | Number of battalions of scope country, including currently raised conscripts. | value |
| army\_size\_including\_raised\_conscripts | Number of battalions of scope country, including currently raised conscripts but excluding unraised conscripts. | value |
| average\_expected\_sol | Get the average expected Standard of Living of the scope | value |
| average\_sol | Get the average Standard of Living of the scope | value |
| building\_levels | Get the total number of non-subsistence building levels of the scoped country | value |
| cached\_ai\_coastal\_population | Scope to total coastal population recorded in AI spending variables (example: value = cached\_ai\_coastal\_population) | value |
| cached\_ai\_incorporated\_coastal\_population | Scope to total incorporated coastal population recorded in AI spending variables (example: value = cached\_ai\_incorporated\_coastal\_population) | value |
| cached\_ai\_incorporated\_population | Scope to total incorporated population recorded in AI spending variables (example: value = cached\_ai\_incorporated\_population) | value |
| cached\_ai\_overseas\_subject\_population | Scope to total population in direct non-adjacent subjects recorded in AI spending variables (example: value = cached\_ai\_overseas\_subject\_population) | value |
| cached\_ai\_subject\_population | Scope to total population in direct subjects recorded in AI spending variables (example: value = cached\_ai\_subject\_population) | value |
| cached\_ai\_total\_population | Scope to total population recorded in AI spending variables (example: value = cached\_ai\_total\_population) | value |
| cached\_ai\_unincorporated\_coastal\_population | Scope to total unincorporated coastal population recorded in AI spending variables (example: value = cached\_ai\_unincorporated\_coastal\_population) | value |
| cached\_ai\_unincorporated\_population | Scope to total unincorporated population recorded in AI spending variables (example: value = cached\_ai\_unincorporated\_population) | value |
| capital | Scope to the capital state of a country | state |
| civil\_war\_origin\_country | Scope to the origin country of a civil war country | country |
| colonial\_growth\_per\_colony | Scope to the country's colonial growth per colony value (example: colonial\_growth\_per\_colony > 0) | value |
| company | Scope to the scoped country's company of the named company type (company:company\_rheinmetall) | company |
| country\_definition | Scope to country's definition | country\_definition |
| credit | Scope to the current amount of max credit the country can take | value |
| currently\_enacting\_law | Scope from a country to the law that they're currently enacting | law |
| diplomatic\_pact\_expense\_ratio | Scope to the ratio of diplomatic pact expenses to income for this country, clamped 0-1 (example: value = diplomatic\_pact\_expense\_ratio) | value |
| flagship | Get the flagship of the scoped country | ship |
| gdp | Get the scoped country's yearly predicted GDP | value |
| get\_ruler\_for | Scopes from country to a character that would be ruler, under the given transfer of power type  - get\_ruler\_for:parliamentary\_elective = { effects... } | character |
| government\_size | Get the scoped country's current number of Parties & independent IGs in government | value |
| heir | Scope to the heir of a country | character |
| ig | Scope to the interest group of specified key belonging to the country, example: ig:ig\_armed\_forces | interest\_group |
| imposed\_law | Scope from a country to the law currently imposed on them (enacting or not) | law |
| imposer\_of\_law | Scope from a country to the country currently imposing a law on them | country |
| income | Get the current weekly income of the scoped country | value |
| income\_transfer\_expenses | Scope to the amount of money scope country is transferring to other countries via treaties & pacts (example:income\_transfer\_expenses >= 100) | value |
| income\_transfer\_relative\_expenses | Scope to the fraction of their income country is transferring to other countries via treaties & pacts (example:income\_transfer\_relative\_expenses >= 0.2) | value |
| infamy | Scope to infamy of scope country (example: infamy >= 2) | value |
| institution | Scope to a country's institution from its name (institution:institution\_health\_system) | institution |
| investment\_pool\_income | Get the current weekly investment pool income of the scoped country | value |
| je | Scope to the journal entry of specified key belonging to the country, example: je:je\_antarctica | journal\_entry |
| legitimacy | Scope to the current amount of legitimacy in country | value |
| lobby\_foreign\_anti\_clout | Scope to the total clout of all anti-country foreign policy lobbies targeting a specific country (lobby\_foreign\_anti\_clout:root >= 0.2) | value |
| lobby\_foreign\_pro\_clout | Scope to the total clout of all pro-country foreign policy lobbies targeting a specific country (lobby\_foreign\_pro\_clout:root >= 0.2) | value |
| lobby\_in\_government\_foreign\_anti\_clout | Scope to the total clout of all anti-country foreign policy lobbies in government targeting a specific country (lobby\_in\_government\_foreign\_anti\_clout:root >= 0.2) | value |
| lobby\_in\_government\_foreign\_pro\_clout | Scope to the total clout of all pro-country foreign policy lobbies in government targeting a specific country (lobby\_in\_government\_foreign\_pro\_clout:root >= 0.2) | value |
| lobby\_war\_opposition | Scope to the total clout of all lobbies that oppose the scoped war (lobby\_war\_opposition:root >= 0.2) | value |
| lobby\_war\_support | Scope to the total clout of all lobbies that support the scoped war (lobby\_war\_support:root >= 0.2) | value |
| market | Scope to the market of the object | market |
| market\_capital | Scope to the market capital of a country | state |
| migration\_pull | Get the migration pull for a state or the mass migration pull for a country. | value |
| military\_expenses | Get the current military expenses (slaves, wages and goods) of the scoped country | value |
| military\_expenses\_share | Get the current share of military expenses (slaves, wages and goods) relative to the total expenses of the scoped country | value |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | boolean, value |
| mutual\_trade\_value\_with\_country | Scope to the total base value of goods traded in trade routes between the two markets (example: mutual\_trade\_value\_with\_country:root >= 1000) | value |
| naval\_combat\_power | Scope to the country's navy combat power (example: naval\_combat\_power > 100) | value |
| naval\_hostility\_average\_damage\_dealt | Scope to average damage dealt by this country in naval hostilities it initiated over the lookback period. Returns -1 if no hostilities found. | value |
| naval\_hostility\_damage | Scope to damage points inflicted by this country against another in active naval hostilities (example: naval\_hostility\_damage:root >= 50) | value |
| naval\_vulnerability | Scope to a country's naval vulnerability score based on trade reliance and coastal GDP share, capped at a define maximum | value |
| navy\_size | Number of flotillas of scope country. | value |
| num\_active\_interests | Scope to the number of active interests a country has num\_active\_interests > 5 | value |
| num\_active\_natural\_interests | Scope to the number of active natural interests a country has num\_active\_natural\_interests > 5 | value |
| num\_active\_plays | Get the current number of active Diplomatic Plays the scoped country started | value |
| num\_active\_ships | Get the number of active ships for a country, commander or military formation OR Get the number of active ships for military formations in the province that are allied to the specified country | value |
| num\_active\_ships\_in\_battle | Get the number of active ships in battle for a country, commander or military formation OR Get the number of active ships in battle for military formations in the province that are allied to the specified country | value |
| num\_active\_ships\_not\_in\_battle | Get the number of active ships not in battle for a country, commander or military formation OR Get the number of active ships not in battle for military formations in the province that are allied to the specified country | value |
| num\_admirals | Scope to the country's number of admirals | value |
| num\_alliances | Get the total number of alliances of the scoped country (example: num\_alliances:root >= 2) | value |
| num\_alliances\_and\_defensive\_pacts\_with\_allies | Scope to the number of alliances target country has with allies of scope country (example: num\_alliances\_and\_defensive\_pacts\_with\_allies:root >= 2) | value |
| num\_alliances\_and\_defensive\_pacts\_with\_rivals | Scope to the number of alliances & defensive pacts target country has with rivals of scope country (example: num\_alliances\_and\_defensive\_pacts\_with\_rivals:root >= 2) | value |
| num\_characters | Scope to the country's number of characters | value |
| num\_colony\_projects | Get the scoped country's current number of incomplete / in progress colony projects | value |
| num\_commanders | Scope to the country's number of commanders | value |
| num\_defensive\_pacts | Scope to the number of defensive pacts target country has in total (example: num\_defensive\_pacts >= 2) | value |
| num\_generals | Scope to the country's number of generals | value |
| num\_income\_transfer\_pacts | Scope to the number of income-transferring (to others) pacts target country has in total (example: num\_income\_transfer\_pacts >= 2) | value |
| num\_income\_transfer\_treaty\_articles | Scope to the number of income-transferring (to others) treaty articles target country has in total (example: num\_income\_transfer\_treaty\_articles >= 2) | value |
| num\_income\_transfers | Scope to the number of income-transferring (to others) pacts and treaty articles target country has in total (example: num\_income\_transfers >= 2) | value |
| num\_incorporated\_states | Get the scoped country's current number of incorporated states | value |
| num\_interests | Scope to the number of interests a country has (including inactive) num\_interests > 5 | value |
| num\_natural\_interests | Scope to the number of natural interests a country has (including inactive)  - num\_natural\_interests > 5 | value |
| num\_non\_destroyed\_ships | Get the number of non-destroyed ships for a country, commander or military formation OR Get the number of non-destroyed ships for military formations in the province that are allied to the specified country | value |
| num\_non\_destroyed\_ships\_in\_battle | Get the number of non-destroyed ships in battle for a country, commander or military formation OR Get the number of non-destroyed ships in battle for military formations in the province that are allied to the specified country | value |
| num\_non\_destroyed\_ships\_not\_in\_battle | Get the number of non-destroyed ships not in battle for a country, commander or military formation OR Get the number of non-destroyed ships not in battle for military formations in the province that are allied to the specified country | value |
| num\_obligations\_earned | Scope from a country to the number of obligations others owe them (=which they have earned) | value |
| num\_pending\_events | Scope to the number of pending events in scope country, generally or for a specified category  - num\_pending\_events > 0 - num\_pending\_events:enactment > 0 | value |
| num\_politicians | Scope to the country's number of politicians | value |
| num\_positive\_relations | Get the current number of countries with positive Relation with the scoped country | value |
| num\_queued\_constructions | Scope to the number of queued constructions target country has in total (example: num\_queued\_constructions >= 2) | value |
| num\_queued\_government\_constructions | Scope to the number of queued government constructions target country has in total (example: num\_queued\_government\_constructions >= 2) | value |
| num\_queued\_private\_constructions | Scope to the number of queued private constructions target country has in total (example: num\_queued\_private\_constructions >= 2) | value |
| num\_rivals | Scope to the number of rivals target country has in total (example: num\_rivals >= 2) | value |
| num\_ruling\_igs | Get the scoped country's current number of IGs in government | value |
| num\_shared\_rivals | Scope to the number of shared rivals scope country has with target country (example: num\_shared\_rivals:root >= 2) | value |
| num\_ships | Get the number of ships for a country, commander or military formation OR Get the number of ships for military formations in the province that are allied to the specified country | value |
| num\_ships\_in\_battle | Get the number of ships in battle for a country, commander or military formation OR Get the number of ships in battle for military formations in the province that are allied to the specified country | value |
| num\_ships\_not\_in\_battle | Get the number of ships not in battle for a country, commander or military formation OR Get the number of ships not in battle for military formations in the province that are allied to the specified country | value |
| num\_ships\_of\_group | Number of ships of the provided ship group in the scoped country or military formation | value |
| num\_states | Get the scoped country's current number of states | value |
| num\_unincorporated\_states | Get the scoped country's current number of unincorporated states | value |
| overlord | Scope to the direct overlord of the country in scope | country |
| owner | Scope to the owner country of object | country |
| owning\_company | Scope to the company owning the scoped country | company |
| pirated\_trade\_value\_by | Scope to the average weekly base value of goods pilfered from this country by a target country (example: pirated\_trade\_value\_by:root >= 50) | value |
| power\_bloc | Scope to the power bloc for the scoped country | power\_bloc |
| principal | Get the current debt principal of the country | value |
| py | Scope to the active party of specified key belonging to the country, example: py:communist\_party | party |
| relations | Scope to relations between two countries (example: relations:root >= 2) | value |
| relations\_change\_rate | Scope to daily change in relations progress between two countries (example: relations\_change\_rate:root > 0) | value |
| religion | Scope to country or country definition's primary religion or pop religion | religion |
| ruler | Scope to the ruler of a country | character |
| strait\_trade\_importance\_by | Scope to the trade importance of goods this country is trading through straits controlled by a target country. Accumulated value is multiplied by STRAIT\_FULL\_CONTROL\_TRADE\_IMPORTANCE\_MULT for straits where the controller controls both sides (example: strait\_trade\_importance\_by:root >= 100) | value |
| technology\_being\_researched | Scope to the current technology a country is researching | technology |
| techs\_researched | Scope to the current amount of techs researched of a country | value |
| tension | Scope to tension between two countries (example: tension:root >= 2) | value |
| top\_overlord | Scope to the top overlord of the country in scope | country |
| total\_crew\_needed | Get the total crew needed by all ships of a country | value |
| total\_export\_value | Scope to the total value of scope country's exports to the world market (example: total\_export\_value >= 1000) | value |
| total\_import\_value | Scope to the total value of scope country's imports from the world market (example: total\_import\_value >= 1000) | value |
| total\_marine\_capacity | Get the total marine capacity across all fleets of a country | value |
| total\_trade\_value | Scope to the total value of scope country's trade with the world market (example: total\_trade\_value >= 1000) | value |

### Country modifier types
`country_` [modifier types](./Modifier types.md) apply their effects to countries.

For reasons of length, the culture-based modifier types `country_[culture]_cultural_acceptance_add` and `country_fervor_target_[culture]_add` are excluded.

List of modifier types

| Modifier type | Localization | Type | Format | Notes |
| country\_academics\_pol\_str\_mult | Political Strength of Academics | multiplicative | percent, neutral |  |
| country\_academics\_voting\_power\_add | Political Strength from the Votes of Academics | additive | neutral | - Object-based - Enables elections |
| country\_acceptance\_homeland\_add | Acceptance from Homeland | additive | good |  |
| country\_acceptance\_no\_shared\_heritage\_trait\_add | Acceptance from no shared Heritage Traits | additive | good |  |
| country\_acceptance\_no\_shared\_language\_trait\_add | Acceptance from no shared Language Traits | additive | good |  |
| country\_acceptance\_no\_shared\_religious\_trait\_add | Acceptance from no shared Religious Traits | additive | good |  |
| country\_acceptance\_no\_shared\_tradition\_trait\_add | Acceptance from no shared Tradition Traits | additive | good |  |
| country\_acceptance\_not\_homeland\_add | Acceptance from not Homeland | additive | good |  |
| country\_acceptance\_primary\_culture\_add | Acceptance from Primary Culture | additive | good |  |
| country\_acceptance\_shared\_heritage\_trait\_add | Acceptance from Heritage Trait | additive | good |  |
| country\_acceptance\_shared\_heritage\_trait\_group\_add | Acceptance from Heritage Trait Group | additive | good |  |
| country\_acceptance\_shared\_language\_trait\_add | Acceptance from Language Trait | additive | good |  |
| country\_acceptance\_shared\_language\_trait\_group\_add | Acceptance from Language Trait Group | additive | good |  |
| country\_acceptance\_shared\_religious\_trait\_add | Acceptance from Religious Traits | additive | good |  |
| country\_acceptance\_shared\_religious\_trait\_group\_add | Acceptance from Religious Trait Groups | additive | good |  |
| country\_acceptance\_shared\_tradition\_trait\_add | Acceptance from Tradition Trait | additive | good |  |
| country\_acceptance\_state\_religion\_add | Acceptance from State Religion | additive | good |  |
| country\_admiral\_rank\_impact\_mult | Admiral Rank Impact | multiplicative | percent, good |  |
| country\_agitator\_slots\_add | Potential Agitators | additive | good |  |
| country\_ahead\_of\_time\_research\_penalty\_mult | Ahead of Time Penalty | multiplicative | percent, bad |  |
| country\_all\_buildings\_protected\_bool | Disallow Downsizing All Buildings | boolean | bad |  |
| country\_allow\_assimilation\_cultural\_erasure\_bool | Allows Assimilation for the Cultural Erasure Status | boolean | neutral |  |
| country\_allow\_assimilation\_full\_acceptance\_bool | Allows Assimilation for the Full Acceptance Status | boolean | neutral |  |
| country\_allow\_assimilation\_open\_prejudice\_bool | Allows Assimilation for the Open Prejudice Status | boolean | neutral |  |
| country\_allow\_assimilation\_second\_rate\_citizen\_bool | Allows Assimilation for the Second-class Citizen Status | boolean | neutral |  |
| country\_allow\_assimilation\_violent\_hostility\_bool | Allows Assimilation for the Violent Hostility Status | boolean | neutral |  |
| country\_allow\_conversion\_cultural\_erasure\_bool | Allows Conversion for the Cultural Erasure Status | boolean | neutral |  |
| country\_allow\_conversion\_full\_acceptance\_bool | Allows Conversion for the Full Acceptance Status | boolean | neutral |  |
| country\_allow\_conversion\_open\_prejudice\_bool | Allows Conversion for the Open Prejudice Status | boolean | neutral |  |
| country\_allow\_conversion\_second\_rate\_citizen\_bool | Allows Conversion for the Second-class Citizen Status | boolean | neutral |  |
| country\_allow\_conversion\_violent\_hostility\_bool | Allows Conversion for the Violent Hostility Status | boolean | neutral |  |
| country\_allow\_enacting\_decrees\_in\_subject\_bool | Allow enacting Decrees on Subject States | boolean | good |  |
| country\_allow\_multiple\_alliances\_bool | Allow Multiple Alliances | boolean | good |  |
| country\_allow\_voting\_cultural\_erasure\_bool | Gives Voting Rights to the Cultural Erasure Status | boolean | neutral |  |
| country\_allow\_voting\_full\_acceptance\_bool | Gives Voting Rights to the Full Acceptance Status | boolean | neutral |  |
| country\_allow\_voting\_open\_prejudice\_bool | Gives Voting Rights to the Open Prejudice Status | boolean | neutral |  |
| country\_allow\_voting\_second\_rate\_citizen\_bool | Gives Voting Rights to the Second-class Citizen Status | boolean | neutral |  |
| country\_allow\_voting\_violent\_hostility\_bool | Gives Voting Rights to the Violent Hostility Status | boolean | neutral |  |
| country\_amenability\_add | Country Amenability | additive | good |  |
| country\_aristocrats\_pol\_str\_mult | Political Strength of Aristocrats | multiplicative | percent, neutral |  |
| country\_aristocrats\_voting\_power\_add | Political Strength from the Votes of Aristocrats | additive | neutral | - Object-based - Enables elections |
| country\_assimilation\_cultural\_erasure\_mult | Assimilation for the Cultural Erasure Status | multiplicative | percent, neutral |  |
| country\_assimilation\_delta\_threshold\_add | Cultural Assimilation Threshold | additive | good |  |
| country\_assimilation\_full\_acceptance\_mult | Assimilation for the Full Acceptance Status | multiplicative | percent, neutral |  |
| country\_assimilation\_open\_prejudice\_mult | Assimilation for the Open Prejudice Status | multiplicative | percent, neutral |  |
| country\_assimilation\_second\_rate\_citizen\_mult | Assimilation for the Second-class Citizen Status | multiplicative | percent, neutral |  |
| country\_assimilation\_violent\_hostility\_mult | Assimilation for the Violent Hostility Status | multiplicative | percent, neutral |  |
| country\_authority\_add | Authority | additive | good |  |
| country\_authority\_mult | Authority | multiplicative | percent, good |  |
| country\_authority\_per\_subject\_add | Authority per Subject | additive | good |  |
| country\_bg\_manufacturing\_require\_subsidies\_bool | Forced Subsidies for Manufacturing | boolean | bad |  |
| country\_block\_government\_reform\_bool | Blocks Government Reform | boolean | neutral |  |
| country\_bolster\_attraction\_factor | Bolstered impact on Political Movement attraction |  | percent, neutral |  |
| country\_bolster\_cost\_mult | Bolstering cost | multiplicative | percent, bad |  |
| country\_brahmins\_acceptance\_min\_add | Minimum Acceptance for the Brahmins Social Class | additive | good |  |
| country\_brahmins\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Brahmins Social Class for Brahmins | multiplicative | percent, good |  |
| country\_brahmins\_qualification\_growth\_same\_class\_mult | Qualification Growth within Brahmins Social Class | multiplicative | percent, good |  |
| country\_bureaucracy\_add | Bureaucracy | additive | good |  |
| country\_bureaucracy\_investment\_cost\_factor\_mult | Bureaucracy Institution Cost Multiplier | multiplicative | percent, bad |  |
| country\_bureaucracy\_mult | Bureaucracy | multiplicative | percent, good |  |
| country\_bureaucrats\_pol\_str\_mult | Political Strength of Bureaucrats | multiplicative | percent, neutral |  |
| country\_bureaucrats\_voting\_power\_add | Political Strength from the Votes of Bureaucrats | additive | neutral | - Object-based - Enables elections |
| country\_can\_form\_construction\_company\_bool | Can form Construction type Companies | boolean | neutral |  |
| country\_can\_impose\_same\_lawgroup\_army\_model\_in\_power\_bloc\_bool | **Impose** same Army Model Law on Bloc Members | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_church\_and\_state\_in\_power\_bloc\_bool | **Impose** same Church and State Law on Bloc Members | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_citizenship\_in\_power\_bloc\_bool | **Impose** same Citizenship Law on Bloc Members | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_colonization\_in\_power\_bloc\_bool | **Impose** same Colonization Law on Bloc Members | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_distribution\_of\_power\_in\_power\_bloc\_bool | **Impose** same Distribution of Power Law on Bloc Members | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_education\_system\_in\_power\_bloc\_bool | **Impose** same Education System Law on Bloc Members | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_governance\_principles\_in\_power\_bloc\_bool | **Impose** same Governance Principles Law on Bloc Members | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_policing\_in\_power\_bloc\_bool | **Impose** same Policing Law on Bloc Members | boolean | good |  |
| country\_can\_only\_conscript\_peasants\_bool | Allows only Infantry Conscript Battalions | boolean | good |  |
| country\_cannot\_be\_subjugated\_bool | Cannot be Subjugated | boolean | neutral |  |
| country\_cannot\_be\_target\_for\_law\_imposition\_bool | Cannot be targeted for Law Imposition | boolean | good |  |
| country\_cannot\_cancel\_law\_enactment\_bool | Disallow}} Cancel Law Enactment | boolean | bad |  |
| country\_cannot\_enact\_laws\_bool | Disallow}} Enacting Laws | boolean | bad |  |
| country\_cannot\_join\_power\_bloc\_bool | Cannot join Power Blocks | boolean | neutral |  |
| country\_cannot\_start\_law\_enactment\_bool | Disallow}} Start Law Enactment | boolean | bad |  |
| country\_capitalists\_pol\_str\_mult | Political Strength of Capitalists | multiplicative | percent, neutral |  |
| country\_capitalists\_voting\_power\_add | Political Strength from the Votes of Capitalists | additive | neutral | - Object-based - Enables elections |
| country\_clergymen\_pol\_str\_mult | Political Strength of Clergymen | multiplicative | percent, neutral |  |
| country\_clergymen\_voting\_power\_add | Political Strength from the Votes of Clergymen | additive | neutral | - Object-based - Enables elections |
| country\_clerks\_pol\_str\_mult | Political Strength of Clerks | multiplicative | percent, neutral |  |
| country\_clerks\_voting\_power\_add | Political Strength from the Votes of Clerks | additive | neutral | - Object-based - Enables elections |
| country\_company\_construction\_efficiency\_bonus\_add | Company Construction Bonus | additive | percent, good |  |
| country\_company\_throughput\_bonus\_add | Company Throughput Bonus | additive | percent, good |  |
| country\_construction\_add | Construction | additive | good |  |
| country\_construction\_goods\_cost\_mult | Construction Goods Cost | multiplicative | percent, bad |  |
| country\_consumption\_tax\_cost\_mult | Consumption Tax Cost | multiplicative | percent, bad |  |
| country\_conversion\_delta\_threshold\_add | Religious Conversion Threshold | additive | good |  |
| country\_coup\_resistance\_add | Coup Resistance | additive | neutral |  |
| country\_coup\_resistance\_mult | Coup Resistance | multiplicative | percent, neutral |  |
| country\_dalit\_acceptance\_max\_add | Maximum Acceptance for the Dalit Social Class | additive | bad |  |
| country\_dalit\_cultural\_acceptance\_mult | Cultural Acceptance for the Dalit Social Class | multiplicative | percent, good |  |
| country\_dalit\_education\_access\_add | Education Access for the Dalit Social Class | additive | good |  |
| country\_dalit\_education\_access\_mult | Education Access for the Dalit Social Class | multiplicative | percent, good |  |
| country\_dalit\_qualification\_growth\_add | Qualification Growth for the Dalit Social Class | additive | good |  |
| country\_dalit\_qualification\_growth\_mult | Qualification Growth for the Dalit Social Class | multiplicative | percent, good |  |
| country\_dalit\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Dalit Social Class for Dalit | multiplicative | percent, good |  |
| country\_dalit\_qualification\_growth\_same\_class\_mult | Qualification Growth within Dalit Social Class | multiplicative | percent, good |  |
| country\_damage\_relations\_speed\_mult | Damage Relations Speed | multiplicative | percent, good |  |
| country\_diplomatic\_play\_maneuvers\_add | Maneuvers per Diplomatic Play | additive | good |  |
| country\_diplomatic\_play\_maneuvers\_mult | Maneuvers per Diplomatic Play | multiplicative | percent, good |  |
| country\_diplomatic\_reputation\_add | Diplomatic Reputation | additive | good |  |
| country\_disable\_investment\_pool\_bool | Disable Investment Pool (except for Companies) | boolean | bad |  |
| country\_disable\_nationalization\_bool | Disable Nationalization | boolean | bad |  |
| country\_disable\_nationalization\_without\_compensation\_bool | Disable Nationalization without compensation | boolean | bad |  |
| country\_disable\_non\_company\_privatization\_bool | Disable Privatization (except for Companies) | boolean | bad |  |
| country\_disallow\_aggressive\_plays\_bool | Disallow Aggressive Diplomatic Plays | boolean | neutral |  |
| country\_disallow\_agitator\_invites\_bool | Disallowed from inviting Exiles | boolean | neutral |  |
| country\_disallow\_government\_work\_cultural\_erasure\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Cultural Erasure Status | boolean | neutral |  |
| country\_disallow\_government\_work\_full\_acceptance\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Full Acceptance Status | boolean | neutral |  |
| country\_disallow\_government\_work\_open\_prejudice\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Open Prejudice Status | boolean | neutral |  |
| country\_disallow\_government\_work\_second\_rate\_citizen\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Second-class Citizen Status | boolean | neutral |  |
| country\_disallow\_government\_work\_violent\_hostility\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Violent Hostility Status | boolean | neutral |  |
| country\_disallow\_law\_no\_colonial\_affairs\_bool | Disallow No Colonial Affairs | boolean | bad |  |
| country\_disallow\_law\_no\_police\_bool | Disallow No Police | boolean | bad |  |
| country\_disallow\_law\_no\_schools\_bool | Disallow No Schools | boolean | bad |  |
| country\_disallow\_military\_work\_cultural\_erasure\_bool | Disallow work in Military Buildings for the Cultural Erasure Status | boolean | neutral |  |
| country\_disallow\_military\_work\_full\_acceptance\_bool | Disallow work in Military Buildings for the Full Acceptance Status | boolean | neutral |  |
| country\_disallow\_military\_work\_open\_prejudice\_bool | Disallow work in Military Buildings for the Open Prejudice Status | boolean | neutral |  |
| country\_disallow\_military\_work\_second\_rate\_citizen\_bool | Disallow work in Military Buildings for the Second-class Citizen Status | boolean | neutral |  |
| country\_disallow\_military\_work\_violent\_hostility\_bool | Disallow work in Military Buildings for the Violent Hostility Status | boolean | neutral |  |
| country\_disallow\_trade\_bool | Disable Trade Centers | boolean | bad |  |
| country\_disallow\_trade\_outside\_canton\_bool | Disable Trade Centers outside Western Guangdong | boolean | bad | - Script-only |
| country\_disallow\_trade\_outside\_kyushu\_bool | Disable Trade Centers outside Kyushu | boolean | bad |  |
| country\_economic\_dependence\_on\_overlord\_add | Economic Dependence on Overlord | additive | bad |  |
| country\_education\_fervor\_add | Education Institution Fervor | additive | neutral |  |
| country\_electoral\_confidence\_impact\_mult | Electoral Confidence Impact | multiplicative | percent, neutral |  |
| country\_electoral\_confidence\_over\_time | Monthly Electoral Confidence Change |  | percent, good |  |
| country\_enactment\_success\_chance\_law\_anarchy\_add | Enactment Success chance for Anarchy | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_autocracy\_add | Enactment Success chance for Autocracy | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_oligarchy\_add | Enactment Success chance for Oligarchy | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_public\_schools\_add | Enactment Success chance for Public Schools | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_single\_party\_state\_add | Enactment Success chance for Single-Party State | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_technocracy\_add | Enactment Success chance for Technocracy | additive | percent, good |  |
| country\_enactment\_time\_law\_anarchy\_mult | country\_enactment\_time\_law\_anarchy\_mult | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_autocracy\_mult | country\_enactment\_time\_law\_autocracy\_mult | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_oligarchy\_mult | country\_enactment\_time\_law\_oligarchy\_mult | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_public\_schools\_mult | Enactment Time for Public Schools | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_single\_party\_state\_mult | country\_enactment\_time\_law\_single\_party\_state\_mult | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_technocracy\_mult | Enactment Time for Technocracy | multiplicative | percent, bad |  |
| country\_engineers\_pol\_str\_mult | Political Strength of Engineers | multiplicative | percent, neutral |  |
| country\_engineers\_voting\_power\_add | Political Strength from the Votes of Engineers | additive | neutral | - Object-based - Enables elections |
| country\_expedition\_events\_explorer\_mult | Expedition Opportunity | multiplicative | percent, good |  |
| country\_expenses\_add | Government Expenses | additive | bad |  |
| country\_farmers\_pol\_str\_mult | Political Strength of Farmers | multiplicative | percent, neutral |  |
| country\_farmers\_voting\_power\_add | Political Strength from the Votes of Farmers | additive | neutral | - Object-based - Enables elections |
| country\_financial\_districts\_buy\_farms\_likelihood | Financial Districts investment into Plantations, Ranches, and Agriculture |  | percent, good |  |
| country\_flagship\_interest\_gain\_mult | Flagship Involvement Gain | multiplicative | percent, good |  |
| country\_forbid\_electoral\_fraud\_bool | Forbid Electoral Manipulation | boolean | neutral |  |
| country\_forbid\_monopoly\_bool | Forbid Monopolies | boolean | bad |  |
| country\_force\_privatization\_bool | Force Privatization | boolean | neutral |  |
| country\_foreign\_collectivization\_bool | Foreign Collectivization | boolean | neutral |  |
| country\_frankenstein\_company\_bool | Experimental Modules Operational | boolean | neutral |  |
| country\_free\_charters\_add | Free Company Charters | additive | good |  |
| country\_general\_rank\_impact\_mult | General Rank Impact | multiplicative | percent, good |  |
| country\_gold\_reserve\_limit\_mult | Gold reserve limit | multiplicative | percent, good |  |
| country\_government\_buildings\_protected\_bool | Disallow Downsizing Government Buildings | boolean | bad |  |
| country\_government\_dividends\_efficiency\_add | Government Dividends Efficiency | additive | percent, good |  |
| country\_government\_dividends\_reinvestment\_add | Government Dividends Reinvestment | additive | percent, neutral |  |
| country\_government\_dividends\_waste\_add | Government Dividends Waste | additive | percent, bad |  |
| country\_government\_wages\_mult | Government Wages | multiplicative | percent, neutral |  |
| country\_higher\_diplomatic\_acceptance\_same\_religion\_bool | Higher Diplomatic Proposal Acceptance for Countries with same Religion | boolean | good |  |
| country\_higher\_leverage\_from\_economic\_dependence\_bool | Increased Leverage from Economic Dependence | boolean | good |  |
| country\_improve\_relations\_speed\_mult | Improve Relations Speed | multiplicative | percent, good |  |
| country\_infamy\_decay\_mult | Infamy Decay | multiplicative | percent, good |  |
| country\_infamy\_generation\_against\_unrecognized\_mult | Infamy Generation against Unrecognized Powers | multiplicative | percent, bad |  |
| country\_infamy\_generation\_mult | Infamy Generation | multiplicative | percent, bad |  |
| country\_influence\_add | Influence | additive | good |  |
| country\_influence\_mult | Influence | multiplicative | percent, good |  |
| country\_initiator\_war\_goal\_maneuver\_cost\_mult | War Goal Maneuver cost for the Diplomatic Play Initiator | multiplicative | percent, bad |  |
| country\_institution\_colonial\_affairs\_max\_investment\_add | Max Colonial Affairs Institution Investment | additive | good |  |
| country\_institution\_cost\_institution\_colonial\_affairs\_mult | Bureaucracy Cost of Colonial Affairs | multiplicative | percent, bad |  |
| country\_institution\_cost\_institution\_health\_system\_mult | Bureaucracy Cost of Health System | multiplicative | percent, bad |  |
| country\_institution\_cost\_institution\_police\_mult | Bureaucracy Cost of Law Enforcement | multiplicative | percent, bad |  |
| country\_institution\_cost\_institution\_schools\_mult | Bureaucracy Cost of Education | multiplicative | percent, bad |  |
| country\_institution\_cost\_institution\_social\_security\_mult | Bureaucracy Cost of Social Security | multiplicative | percent, bad |  |
| country\_institution\_health\_system\_max\_investment\_add | Max Health System Institution Investment | additive | good |  |
| country\_institution\_home\_affairs\_max\_investment\_add | Max Home Affairs Institution Investment | additive | good |  |
| country\_institution\_impact\_institution\_health\_system\_mult | Impact of Health System | multiplicative | percent, good |  |
| country\_institution\_police\_max\_investment\_add | Max Law Enforcement Institution Investment | additive | good |  |
| country\_institution\_schools\_max\_investment\_add | Max Education Institution Investment | additive | good |  |
| country\_institution\_size\_change\_speed\_institution\_colonial\_affairs\_mult | Institution Size Change Speed for Colonial Affairs | multiplicative | percent, good |  |
| country\_institution\_size\_change\_speed\_institution\_police\_mult | Institution Size Change Speed for Law Enforcement | multiplicative | percent, good |  |
| country\_institution\_size\_change\_speed\_institution\_schools\_mult | Institution Size Change Speed for Education | multiplicative | percent, good |  |
| country\_institution\_size\_change\_speed\_mult | Institution Size Change Speed | multiplicative | percent, good |  |
| country\_institution\_social\_security\_max\_investment\_add | Max Social Security Institution Investment | additive | good |  |
| country\_institution\_workplace\_safety\_max\_investment\_add | Max Workplace Safety Office Institution Investment | additive | good |  |
| country\_je\_korea\_action\_cost | country\_je\_korea\_action\_cost |  | percent, bad |  |
| country\_join\_power\_bloc\_member\_in\_defensive\_plays\_bool | Can call Power Bloc members with the Call Ally Sway in **defensive** Diplomatic Plays | boolean | neutral |  |
| country\_join\_power\_bloc\_member\_in\_plays\_bool | Can call Power Bloc members with the Call Ally Sway in **all** Diplomatic Plays | boolean | neutral |  |
| country\_kshatriyas\_acceptance\_max\_add | Maximum Acceptance for the Kshatriyas Social Class | additive | bad |  |
| country\_kshatriyas\_acceptance\_min\_add | Minimum Acceptance for the Kshatriyas Social Class | additive | good |  |
| country\_kshatriyas\_cultural\_acceptance\_mult | Cultural Acceptance for the Kshatriyas Social Class | multiplicative | percent, good |  |
| country\_kshatriyas\_education\_access\_add | Education Access for the Kshatriyas Social Class | additive | good |  |
| country\_kshatriyas\_education\_access\_mult | Education Access for the Kshatriyas Social Class | multiplicative | percent, good |  |
| country\_kshatriyas\_qualification\_growth\_add | Qualification Growth for the Kshatriyas Social Class | additive | good |  |
| country\_kshatriyas\_qualification\_growth\_mult | Qualification Growth for the Kshatriyas Social Class | multiplicative | percent, good |  |
| country\_kshatriyas\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Kshatriyas Social Class for Kshatriyas | multiplicative | percent, good |  |
| country\_kshatriyas\_qualification\_growth\_same\_class\_mult | Qualification Growth within Kshatriyas Social Class | multiplicative | percent, good |  |
| country\_laborers\_pol\_str\_mult | Political Strength of Laborers | multiplicative | percent, neutral |  |
| country\_laborers\_voting\_power\_add | Political Strength from the Votes of Laborers | additive | neutral | - Object-based - Enables elections |
| country\_law\_enactment\_imposition\_success\_add | Imposed Enactment Success Chance | additive | percent, good |  |
| country\_law\_enactment\_max\_setbacks\_add | Maximum Law Enactment Setbacks | additive | good |  |
| country\_law\_enactment\_stall\_add | Enactment Stall Chance | additive | percent, bad |  |
| country\_law\_enactment\_stall\_mult | Enactment Stall Chance | multiplicative | percent, bad |  |
| country\_law\_enactment\_success\_add | Enactment Success Chance | additive | percent, good |  |
| country\_law\_enactment\_time\_mult | Enactment Time | multiplicative | percent, bad |  |
| country\_leader\_has\_law\_enactment\_success\_mult | Power Bloc Legal Synergy | multiplicative | percent, good |  |
| country\_legitimacy\_base\_add | Legitimacy | additive | good |  |
| country\_legitimacy\_govt\_leader\_clout\_add | Legitimacy based on Government Leader Clout | additive | good |  |
| country\_legitimacy\_govt\_size\_add | Government size allowance | additive | good |  |
| country\_legitimacy\_govt\_total\_clout\_add | Legitimacy based on Government Clout | additive | good |  |
| country\_legitimacy\_govt\_total\_votes\_add | Legitimacy based on Votes | additive | good |  |
| country\_legitimacy\_headofstate\_add | Legitimacy from including the Head of State In Government | additive | good |  |
| country\_legitimacy\_ideological\_incoherence\_mult | Legitimacy penalty from Ideological Incompatibility | multiplicative | percent, bad |  |
| country\_legitimacy\_min\_add | Minimum Legitimacy | additive | neutral |  |
| country\_leverage\_generation\_add | Leverage Generation | additive | good |  |
| country\_leverage\_generation\_mult | Leverage Generation | multiplicative | percent, good |  |
| country\_leverage\_resistance\_add | Leverage Resistance | additive | neutral |  |
| country\_leverage\_resistance\_mult | Leverage Resistance | multiplicative | percent, neutral |  |
| country\_liberty\_desire\_add | Weekly Liberty Desire | additive | neutral |  |
| country\_liberty\_desire\_decrease\_mult | Weekly Liberty Desire Decrease | multiplicative | percent, neutral |  |
| country\_liberty\_desire\_increase\_mult | Weekly Liberty Desire Increase | multiplicative | percent, neutral |  |
| country\_liberty\_desire\_of\_subjects\_add | Weekly Liberty Desire for all Subjects | additive | neutral |  |
| country\_limit\_officers\_qualifications\_to\_upper\_strata | Officers qualifications limited to Upper Strata | boolean | neutral |  |
| country\_loan\_interest\_rate\_add | Loan interest rate | additive | percent, bad |  |
| country\_loan\_interest\_rate\_mult | Loan interest rate | multiplicative | percent, bad |  |
| country\_lobby\_leverage\_generation\_mult | Leverage Generation from Political Lobbies | multiplicative | percent, good |  |
| country\_lobby\_support | Lobby Support |  | good |  |
| country\_loyalism\_increases\_cultural\_erasure\_mult | Loyalism increases for the Cultural Erasure Status | multiplicative | percent, good |  |
| country\_loyalism\_increases\_full\_acceptance\_mult | Loyalism increases for the Full Acceptance Status | multiplicative | percent, good |  |
| country\_loyalism\_increases\_open\_prejudice\_mult | Loyalism increases for the Open Prejudice Status | multiplicative | percent, good |  |
| country\_loyalism\_increases\_second\_rate\_citizen\_mult | Loyalism increases for the Second-class Citizen Status | multiplicative | percent, good |  |
| country\_loyalism\_increases\_violent\_hostility\_mult | Loyalism increases for the Violent Hostility Status | multiplicative | percent, good |  |
| country\_loyalists\_from\_legitimacy\_mult | Loyalists from high Legitimacy | multiplicative | percent, good |  |
| country\_machinists\_pol\_str\_mult | Political Strength of Machinists | multiplicative | percent, neutral |  |
| country\_machinists\_voting\_power\_add | Political Strength from the Votes of Machinists | additive | neutral | - Object-based - Enables elections |
| country\_mass\_migration\_attraction\_mult | Mass Migration Attraction | multiplicative | percent, good |  |
| country\_max\_companies\_add | Max Number of Companies | additive | good |  |
| country\_max\_unassigned\_admirals\_add | Maximum Idle Admirals | additive | good |  |
| country\_max\_unassigned\_generals\_add | Maximum Idle Generals | additive | good |  |
| country\_max\_weekly\_construction\_progress\_add | Max Weekly Construction Progress | additive | good |  |
| country\_migration\_restrictiveness\_add | Migration Restrictiveness | additive | neutral |  |
| country\_military\_goods\_cost\_mult | Military Goods Cost | multiplicative | percent, bad |  |
| country\_military\_tech\_research\_speed\_mult | Military Research Speed | multiplicative | percent, good |  |
| country\_military\_tech\_spread\_mult | Technology Spread for Military | multiplicative | percent, good |  |
| country\_military\_wages\_mult | Military Wages | multiplicative | percent, neutral |  |
| country\_minting\_add | Minting | additive | good |  |
| country\_minting\_mult | Minting | multiplicative | percent, good |  |
| country\_must\_have\_movement\_to\_enact\_laws\_bool | Must have Political Movement to Enact Laws | boolean | bad |  |
| country\_nationalization\_cost\_non\_members\_mult | Cost for Nationalization | multiplicative | percent, bad |  |
| country\_navy\_goods\_cost\_mult | Navy Goods Cost | multiplicative | percent, bad |  |
| country\_no\_advantage\_loss\_from\_lack\_of\_interest\_bool | Ignores Trade Advantage penalty from Interests | boolean | good |  |
| country\_non\_state\_religion\_wages\_mult | Wages for Non-State Religion Pops | multiplicative | percent, neutral |  |
| country\_officers\_pol\_str\_mult | Political Strength of Officers | multiplicative | percent, neutral |  |
| country\_officers\_voting\_power\_add | Political Strength from the Votes of Officers | additive | neutral | - Object-based - Enables elections |
| country\_opposition\_ig\_approval\_add | Opposition Interest Group Approval | additive | good |  |
| country\_overlord\_income\_transfer\_mult | Overlord Income Transfer | multiplicative | percent, bad |  |
| country\_pact\_leverage\_generation\_add | Leverage Generation from Diplomatic Pact | additive | good |  |
| country\_pact\_leverage\_generation\_mult | Leverage Generation from Diplomatic Pact | multiplicative | percent, good |  |
| country\_party\_whip\_impact\_add | Party Whip Impact on Ideological Incoherence | additive | percent, good |  |
| country\_peasants\_pol\_str\_mult | Political Strength of Peasants | multiplicative | percent, neutral |  |
| country\_peasants\_voting\_power\_add | Political Strength from the Votes of Peasants | additive | neutral | - Object-based - Enables elections |
| country\_piracy\_income\_add | Piracy Income | additive | percent, good |  |
| country\_political\_strength\_cultural\_erasure\_mult | Political Strength for the Cultural Erasure Status | multiplicative | percent, good |  |
| country\_political\_strength\_full\_acceptance\_mult | Political Strength for the Full Acceptance Status | multiplicative | percent, good |  |
| country\_political\_strength\_open\_prejudice\_mult | Political Strength for the Open Prejudice Status | multiplicative | percent, good |  |
| country\_political\_strength\_second\_rate\_citizen\_mult | Political Strength for the Second-class Citizen Status | multiplicative | percent, good |  |
| country\_political\_strength\_violent\_hostility\_mult | Political Strength for the Violent Hostility Status | multiplicative | percent, good |  |
| country\_port\_connection\_cost\_mult | Merchant Marine Cost of Port Connections | multiplicative | percent, bad |  |
| country\_prestige\_add | Prestige | additive | good |  |
| country\_prestige\_from\_army\_power\_projection\_mult | Prestige from Army Power Projection | multiplicative | percent, good |  |
| country\_prestige\_from\_navy\_power\_projection\_mult | Prestige from Navy Power Projection | multiplicative | percent, good |  |
| country\_prestige\_mult | Prestige | multiplicative | percent, good |  |
| country\_primary\_culture\_fervor\_from\_laws\_add | Primary Culture Fervor from Laws | additive | neutral |  |
| country\_private\_construction\_allocation\_mult | Private Construction Allocation | multiplicative | percent, neutral |  |
| country\_production\_tech\_research\_speed\_mult | Production Research Speed | multiplicative | percent, good |  |
| country\_production\_tech\_spread\_mult | Technology Spread for Production | multiplicative | percent, good |  |
| country\_qualification\_growth\_cultural\_erasure\_mult | Qualifications advancement for the Cultural Erasure Status | multiplicative | percent, good |  |
| country\_qualification\_growth\_full\_acceptance\_mult | Qualifications advancement for the Full Acceptance Status | multiplicative | percent, good |  |
| country\_qualification\_growth\_open\_prejudice\_mult | Qualifications advancement for the Open Prejudice Status | multiplicative | percent, good |  |
| country\_qualification\_growth\_second\_rate\_citizen\_mult | Qualifications advancement for the Second-class Citizen Status | multiplicative | percent, good |  |
| country\_qualification\_growth\_violent\_hostility\_mult | Qualifications advancement for the Violent Hostility Status | multiplicative | percent, good |  |
| country\_radicalism\_increases\_cultural\_erasure\_mult | Radicalism increases for the Cultural Erasure Status | multiplicative | percent, bad |  |
| country\_radicalism\_increases\_full\_acceptance\_mult | Radicalism increases for the Full Acceptance Status | multiplicative | percent, bad |  |
| country\_radicalism\_increases\_open\_prejudice\_mult | Radicalism increases for the Open Prejudice Status | multiplicative | percent, bad |  |
| country\_radicalism\_increases\_second\_rate\_citizen\_mult | Radicalism increases for the Second-class Citizen Status | multiplicative | percent, bad |  |
| country\_radicalism\_increases\_violent\_hostility\_mult | Radicalism increases for the Violent Hostility Status | multiplicative | percent, bad |  |
| country\_radicals\_from\_conquest\_mult | Radicals from Conquest | multiplicative | percent, bad |  |
| country\_radicals\_from\_legitimacy\_mult | Radicals from low Legitimacy | multiplicative | percent, bad |  |
| country\_reduced\_liberty\_desire\_same\_religion\_bool | Reduced Liberty Desire for Same Religion | boolean | good |  |
| country\_resource\_depletion\_chance\_mult | Resource Depletion Chance | multiplicative | percent, bad |  |
| country\_resource\_discovery\_chance\_mult | Resource Discovery Chance | multiplicative | percent, good |  |
| country\_revolution\_clock\_time\_add | Revolution Clock Time | additive | neutral |  |
| country\_revolution\_progress\_add | Revolution Progression Speed | additive | percent, bad |  |
| country\_revolution\_progress\_mult | Revolution Progression Speed | multiplicative | percent, bad |  |
| country\_sailors\_max\_add | Max Sailors | additive | good |  |
| country\_secession\_clock\_time\_add | Secession Clock Time | additive | neutral |  |
| country\_secession\_progress\_add | Secession Progression Speed | additive | percent, bad |  |
| country\_secession\_progress\_mult | Secession Progression Speed | multiplicative | percent, bad |  |
| country\_ship\_construction\_add | Ship Construction | additive | good |  |
| country\_ship\_construction\_efficiency\_add | Ship Construction Efficiency | additive | percent, good |  |
| country\_ship\_construction\_goods\_cost\_mult | Ship Construction Goods Cost | multiplicative | percent, bad |  |
| country\_ship\_construction\_progress\_max\_add | Max Ship Construction Progress | additive | good |  |
| country\_ship\_group\_capital\_ships\_construction\_efficiency\_add | Capital Ships Construction Efficiency | additive | percent, good |  |
| country\_ship\_group\_capital\_ships\_construction\_progress\_max\_add | Capital Ships Max Construction Progress | additive | good |  |
| country\_ship\_group\_capital\_ships\_construction\_progress\_max\_mult | Capital Ships Max Construction Progress | multiplicative | percent, good |  |
| country\_ship\_group\_cruisers\_construction\_efficiency\_add | Cruisers Construction Efficiency | additive | percent, good |  |
| country\_ship\_group\_cruisers\_construction\_progress\_max\_add | Cruisers Max Construction Progress | additive | good |  |
| country\_ship\_group\_cruisers\_construction\_progress\_max\_mult | Cruisers Max Construction Progress | multiplicative | percent, good |  |
| country\_ship\_group\_supply\_ships\_construction\_efficiency\_add | Supply Ships Construction Efficiency | additive | percent, good |  |
| country\_ship\_group\_torpedo\_craft\_construction\_efficiency\_add | Torpedo Craft Construction Efficiency | additive | percent, good |  |
| country\_ship\_group\_torpedo\_craft\_construction\_progress\_max\_add | Torpedo Craft Max Construction Progress | additive | good |  |
| country\_ship\_group\_torpedo\_craft\_construction\_progress\_max\_mult | Torpedo Craft Max Construction Progress | multiplicative | percent, good |  |
| country\_ship\_type\_armored\_cruiser\_construction\_efficiency\_add | Armored Cruiser Construction Efficiency | additive | percent, good |  |
| country\_ship\_type\_light\_cruiser\_construction\_efficiency\_add | Light Cruiser Construction Efficiency | additive | percent, good |  |
| country\_ship\_type\_protected\_cruiser\_construction\_efficiency\_add | Protected Cruiser Construction Efficiency | additive | percent, good |  |
| country\_ship\_type\_troop\_ship\_construction\_efficiency\_add | Troopship Construction Efficiency | additive | percent, good |  |
| country\_shopkeepers\_pol\_str\_mult | Political Strength of Shopkeepers | multiplicative | percent, neutral |  |
| country\_shopkeepers\_voting\_power\_add | Political Strength from the Votes of Shopkeepers | additive | neutral | - Object-based - Enables elections |
| country\_shudras\_acceptance\_max\_add | Maximum Acceptance for the Shudras Social Class | additive | bad |  |
| country\_shudras\_cultural\_acceptance\_mult | Cultural Acceptance for the Shudras Social Class | multiplicative | percent, good |  |
| country\_shudras\_education\_access\_add | Education Access for the Shudras Social Class | additive | good |  |
| country\_shudras\_education\_access\_mult | Education Access for the Shudras Social Class | multiplicative | percent, good |  |
| country\_shudras\_qualification\_growth\_add | Qualification Growth for the Shudras Social Class | additive | good |  |
| country\_shudras\_qualification\_growth\_mult | Qualification Growth for the Shudras Social Class | multiplicative | percent, good |  |
| country\_shudras\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Shudras Social Class for Shudras | multiplicative | percent, good |  |
| country\_shudras\_qualification\_growth\_same\_class\_mult | Qualification Growth within Shudras Social Class | multiplicative | percent, good |  |
| country\_slaves\_voting\_power\_add | Political Strength from the Votes of Slaves | additive | neutral | - Object-based - Enables elections |
| country\_society\_tech\_research\_speed\_mult | Society Research Speed | multiplicative | percent, good |  |
| country\_society\_tech\_spread\_mult | Technology Spread for Society | multiplicative | percent, good |  |
| country\_soldiers\_pol\_str\_mult | Political Strength of Servicemen | multiplicative | percent, neutral |  |
| country\_soldiers\_voting\_power\_add | Political Strength from the Votes of Servicemen | additive | neutral | - Object-based - Enables elections |
| country\_standard\_of\_living\_cultural\_erasure\_add | Standard of Living for the Cultural Erasure Status | additive | good |  |
| country\_standard\_of\_living\_full\_acceptance\_add | Standard of Living for the Full Acceptance Status | additive | good |  |
| country\_standard\_of\_living\_open\_prejudice\_add | Standard of Living for the Open Prejudice Status | additive | good |  |
| country\_standard\_of\_living\_second\_rate\_citizen\_add | Standard of Living for the Second-class Citizen Status | additive | good |  |
| country\_standard\_of\_living\_violent\_hostility\_add | Standard of Living for the Violent Hostility Status | additive | good |  |
| country\_state\_religion\_wages\_mult | Wages for State Religion Pops | multiplicative | percent, neutral |  |
| country\_strata\_commoners\_peasants\_acceptance\_max\_add | Maximum Acceptance for the Hyakushō Social Class | additive | bad |  |
| country\_strata\_commoners\_peasants\_acceptance\_min\_add | Minimum Acceptance for the Hyakushō Social Class | additive | good |  |
| country\_strata\_commoners\_peasants\_cultural\_acceptance\_mult | Cultural Acceptance for the Hyakushō Social Class | multiplicative | percent, good |  |
| country\_strata\_commoners\_peasants\_education\_access\_add | Education Access for the Hyakushō Social Class | additive | good |  |
| country\_strata\_commoners\_peasants\_education\_access\_mult | Education Access for the Hyakushō Social Class | multiplicative | percent, good |  |
| country\_strata\_commoners\_peasants\_qualification\_growth\_add | Qualification Growth for the Hyakushō Social Class | additive | good |  |
| country\_strata\_commoners\_peasants\_qualification\_growth\_mult | Qualification Growth for the Hyakushō Social Class | multiplicative | percent, good |  |
| country\_strata\_commoners\_peasants\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Hyakushō Social Class for Hyakushō | multiplicative | percent, good |  |
| country\_strata\_commoners\_peasants\_qualification\_growth\_same\_class\_mult | Qualification Growth within Hyakushō Social Class | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_acceptance\_max\_add | Maximum Acceptance for the Chōnin Social Class | additive | bad |  |
| country\_strata\_commoners\_townspeople\_acceptance\_min\_add | Minimum Acceptance for the Chōnin Social Class | additive | good |  |
| country\_strata\_commoners\_townspeople\_cultural\_acceptance\_mult | Cultural Acceptance for the Chōnin Social Class | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_education\_access\_add | Education Access for the Chōnin Social Class | additive | good |  |
| country\_strata\_commoners\_townspeople\_education\_access\_mult | Education Access for the Chōnin Social Class | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_qualification\_growth\_add | Qualification Growth for the Chōnin Social Class | additive | good |  |
| country\_strata\_commoners\_townspeople\_qualification\_growth\_mult | Qualification Growth for the Chōnin Social Class | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Chōnin Social Class for Chōnin | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_qualification\_growth\_same\_class\_mult | Qualification Growth within Chōnin Social Class | multiplicative | percent, good |  |
| country\_strata\_outcastes\_acceptance\_max\_add | Maximum Acceptance for the Eta-Hinin Social Class | additive | bad |  |
| country\_strata\_outcastes\_acceptance\_min\_add | Minimum Acceptance for the Eta-Hinin Social Class | additive | good |  |
| country\_strata\_outcastes\_cultural\_acceptance\_mult | Cultural Acceptance for the Eta-Hinin Social Class | multiplicative | percent, good |  |
| country\_strata\_outcastes\_education\_access\_add | Education Access for the Eta-Hinin Social Class | additive | good |  |
| country\_strata\_outcastes\_education\_access\_mult | Education Access for the Eta-Hinin Social Class | multiplicative | percent, good |  |
| country\_strata\_outcastes\_qualification\_growth\_add | Qualification Growth for the Eta-Hinin Social Class | additive | good |  |
| country\_strata\_outcastes\_qualification\_growth\_mult | Qualification Growth for the Eta-Hinin Social Class | multiplicative | percent, good |  |
| country\_strata\_outcastes\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Eta-Hinin Social Class for Eta-Hinin | multiplicative | percent, good |  |
| country\_strata\_outcastes\_qualification\_growth\_same\_class\_mult | Qualification Growth within Eta-Hinin Social Class | multiplicative | percent, good |  |
| country\_strata\_religious\_acceptance\_max\_add | Maximum Acceptance for the Jisha Social Class | additive | bad |  |
| country\_strata\_religious\_acceptance\_min\_add | Minimum Acceptance for the Jisha Social Class | additive | good |  |
| country\_strata\_religious\_cultural\_acceptance\_mult | Cultural Acceptance for the Jisha Social Class | multiplicative | percent, good |  |
| country\_strata\_religious\_education\_access\_add | Education Access for the Jisha Social Class | additive | good |  |
| country\_strata\_religious\_education\_access\_mult | Education Access for the Jisha Social Class | multiplicative | percent, good |  |
| country\_strata\_religious\_qualification\_growth\_add | Qualification Growth for the Jisha Social Class | additive | good |  |
| country\_strata\_religious\_qualification\_growth\_mult | Qualification Growth for the Jisha Social Class | multiplicative | percent, good |  |
| country\_strata\_religious\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Jisha Social Class for Jisha | multiplicative | percent, good |  |
| country\_strata\_religious\_qualification\_growth\_same\_class\_mult | Qualification Growth within Jisha Social Class | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_acceptance\_max\_add | Maximum Acceptance for the Upper Samurai Social Class | additive | bad |  |
| country\_strata\_samurai\_high\_acceptance\_min\_add | Minimum Acceptance for the Upper Samurai Social Class | additive | good |  |
| country\_strata\_samurai\_high\_cultural\_acceptance\_mult | Cultural Acceptance for the Upper Samurai Social Class | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_education\_access\_add | Education Access for the Upper Samurai Social Class | additive | good |  |
| country\_strata\_samurai\_high\_education\_access\_mult | Education Access for the Upper Samurai Social Class | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_qualification\_growth\_add | Qualification Growth for the Upper Samurai Social Class | additive | good |  |
| country\_strata\_samurai\_high\_qualification\_growth\_mult | Qualification Growth for the Upper Samurai Social Class | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Upper Samurai Social Class for Upper Samurai | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_qualification\_growth\_same\_class\_mult | Qualification Growth within Upper Samurai Social Class | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_acceptance\_max\_add | Maximum Acceptance for the Lower Samurai Social Class | additive | bad |  |
| country\_strata\_samurai\_low\_acceptance\_min\_add | Minimum Acceptance for the Lower Samurai Social Class | additive | good |  |
| country\_strata\_samurai\_low\_cultural\_acceptance\_mult | Cultural Acceptance for the Lower Samurai Social Class | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_education\_access\_add | Education Access for the Lower Samurai Social Class | additive | good |  |
| country\_strata\_samurai\_low\_education\_access\_mult | Education Access for the Lower Samurai Social Class | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_qualification\_growth\_add | Qualification Growth for the Lower Samurai Social Class | additive | good |  |
| country\_strata\_samurai\_low\_qualification\_growth\_mult | Qualification Growth for the Lower Samurai Social Class | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Lower Samurai Social Class for Lower Samurai | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_qualification\_growth\_same\_class\_mult | Qualification Growth within Lower Samurai Social Class | multiplicative | percent, good |  |
| country\_subject\_income\_transfer\_heathen\_mult | Income transfer from Heathen Subjects | multiplicative | percent, good |  |
| country\_subject\_income\_transfer\_mult | Income transfer from Subjects | multiplicative | percent, good |  |
| country\_supply\_ship\_construction\_progress\_max\_add | Supply Ship Max Construction Progress | additive | good |  |
| country\_supply\_ship\_construction\_progress\_max\_mult | Supply Ship Max Construction Progress | multiplicative | percent, good |  |
| country\_supply\_ship\_construction\_ratio\_add | Supply Ship Construction Ratio | additive | percent, good |  |
| country\_support\_independence\_weekly\_liberty\_desire\_add | Support Independence weekly Liberty Desire | additive | neutral |  |
| country\_support\_separatism\_resistance\_mult | Support Separatism Resistance | multiplicative | percent, good |  |
| country\_support\_separatism\_strength\_mult | Support Separatism Strength | multiplicative | percent, good |  |
| country\_suppression\_attraction\_factor | Suppression impact on Political Movement attraction |  | percent, bad |  |
| country\_suppression\_cost\_mult | Suppression cost | multiplicative | percent, bad |  |
| country\_tax\_income\_add | Tax Income | additive | good |  |
| country\_tech\_group\_research\_speed\_mult | Technology Research Speed as a group | multiplicative | percent, good |  |
| country\_tech\_research\_speed\_mult | Technology Research Speed | multiplicative | percent, good |  |
| country\_tech\_spread\_add | Technology Spread | additive | good |  |
| country\_tech\_spread\_mult | Technology Spread | multiplicative | percent, good |  |
| country\_tension\_decay\_mult | Tension Decay | multiplicative | percent, good |  |
| country\_tobacco\_export\_tariffs\_rate\_add | country\_tobacco\_export\_tariffs\_rate\_add | additive | percent, neutral |  |
| country\_tobacco\_max\_export\_tariffs\_level\_add | country\_tobacco\_max\_export\_tariffs\_level\_add | additive | neutral |  |
| country\_tobacco\_min\_export\_tariffs\_level\_add | country\_tobacco\_min\_export\_tariffs\_level\_add | additive | neutral |  |
| country\_treaty\_leverage\_generation\_add | Leverage Generation from Treaty | additive | good |  |
| country\_treaty\_leverage\_generation\_mult | Leverage Generation from Treaty | multiplicative | percent, good |  |
| country\_two\_spains\_conservative\_drift\_add | **The Two Spains** Conservative Progress | additive | good |  |
| country\_two\_spains\_liberal\_drift\_add | **The Two Spains** Liberal Progress | additive | good |  |
| country\_vaishyas\_acceptance\_max\_add | Maximum Acceptance for the Vaishyas Social Class | additive | bad |  |
| country\_vaishyas\_acceptance\_min\_add | Minimum Acceptance for the Vaishyas Social Class | additive | good |  |
| country\_vaishyas\_cultural\_acceptance\_mult | Cultural Acceptance for the Vaishyas Social Class | multiplicative | percent, good |  |
| country\_vaishyas\_education\_access\_add | Education Access for the Vaishyas Social Class | additive | good |  |
| country\_vaishyas\_education\_access\_mult | Education Access for the Vaishyas Social Class | multiplicative | percent, good |  |
| country\_vaishyas\_qualification\_growth\_add | Qualification Growth for the Vaishyas Social Class | additive | good |  |
| country\_vaishyas\_qualification\_growth\_mult | Qualification Growth for the Vaishyas Social Class | multiplicative | percent, good |  |
| country\_vaishyas\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Vaishyas Social Class for Vaishyas | multiplicative | percent, good |  |
| country\_vaishyas\_qualification\_growth\_same\_class\_mult | Qualification Growth within Vaishyas Social Class | multiplicative | percent, good |  |
| country\_voting\_power\_base\_add | Political Strength per Vote | additive | neutral | - Hardcoded - Enables elections |
| country\_voting\_power\_cultural\_erasure\_mult | Voting contribution of Political Strength for the Cultural Erasure Status | multiplicative | percent, neutral |  |
| country\_voting\_power\_from\_literacy\_add | Political Strength from Literate Pops' Votes | additive | neutral | - Hardcoded - Enables elections |
| country\_voting\_power\_full\_acceptance\_mult | Voting contribution of Political Strength for the Full Acceptance Status | multiplicative | percent, neutral |  |
| country\_voting\_power\_mult | Political Strength per Vote | multiplicative | percent, neutral |  |
| country\_voting\_power\_open\_prejudice\_mult | Voting contribution of Political Strength for the Open Prejudice Status | multiplicative | percent, neutral |  |
| country\_voting\_power\_second\_rate\_citizen\_mult | Voting contribution of Political Strength for the Second-class Citizen Status | multiplicative | percent, neutral |  |
| country\_voting\_power\_violent\_hostility\_mult | Voting contribution of Political Strength for the Violent Hostility Status | multiplicative | percent, neutral |  |
| country\_voting\_power\_wealth\_threshold\_add | Wealth Threshold for Voting | additive | neutral | - Hardcoded - Enables elections |
| country\_wage\_cultural\_erasure\_mult | Wage for the Cultural Erasure Status | multiplicative | percent, good |  |
| country\_wage\_full\_acceptance\_mult | Wage for the Full Acceptance Status | multiplicative | percent, good |  |
| country\_wage\_open\_prejudice\_mult | Wage for the Open Prejudice Status | multiplicative | percent, good |  |
| country\_wage\_second\_rate\_citizen\_mult | Wage for the Second-class Citizen Status | multiplicative | percent, good |  |
| country\_wage\_violent\_hostility\_mult | Wage for the Violent Hostility Status | multiplicative | percent, good |  |
| country\_war\_exhaustion\_casualties\_mult | War Exhaustion from Casualties | multiplicative | percent, bad |  |
| country\_weekly\_innovation\_add | Innovation | additive | good |  |
| country\_weekly\_innovation\_max\_add | Maximum Innovation Investment | additive | good |  |
| country\_weekly\_innovation\_mult | Innovation | multiplicative | percent, good |  |
| country\_yankee\_and\_dixie\_cultures\_obsessed\_with\_guns | Yankee and Dixie Cultures gain an Obsession with Small Arms | boolean | neutral |  |

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • Countries • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
