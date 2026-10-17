# Interest group modding

*See also: Interest groups*

**Interest groups** (often abbreviated as IG) represent common socio-political interests. Each interest group has a number of ideologies, three traits, and a number of other characteristics.

## Example definition
Interest groups are defined in common/interest\_groups.

Example interest group definition: 

```
ig_example = {
	color = hsv{ 0.09 0.29 0.39 } # HSV for IG icon
	texture = "gfx/interface/icons/ig_icons/armed_forces.dds" # Texture for IG icon
	layer = "revolution_dynamic_armed_forces" #refers to map graphics for revolutions
    index = 0 #relative ordering of IG, 0-indexed should be unique
    
	ideologies = { # Base ideologies for this IG
		ideology_jingoist
		ideology_loyalist
		ideology_patriotic
	}

	character_ideologies = { #default ideologies avaiable to characters affiliated with this IG
		ideology_moderate
		ideology_orleanist
		ideology_bonapartist
	}
    
	enable = {  #Country scope, checks monthly, enables IG when true, disables it when false
		# enable allows for setting a condition to enable an IG for specific countries and under certain condition
		# 
		# by default it is set to always = yes for all IGs in basegame.
		#
		# A note about triggers is that any trigger which is a dynamic condition (such as army_size = 10)
		# will not be checked until the first month of the game ends.
		#
		# Some of your IGs may thus be missing at game-start.
		# 
		always = yes
	}
    
	# Deprecated; use on_enable effect to assign traits instead
	traits = {  # IG traits provide a bonus or malus depending on the IG approval. Definitions go in common/interest_group_traits
		ig_trait_patriotic_fervor
		ig_trait_veteran_consultation
		ig_trait_materiel_waste
	}	
	
	on_enable = {} #Country scope, fires when an IG is enabled
	on_disable = {} #Country scope, fires when an IG is no longer enabled, because the enable trigger evaluated to false.
    
	priority_cultures = { #sets cultures for generated characters affiliated with this IG, defaults to primary cultures of country otherwise
		rule = { #Repeat block for each set of rules (different culture lists)
			trigger = { #Country scope
				<triggers>
			}
			cultures = {
				<list of culture keys>
			}
		}
	}
    
	on_character_ig_membership = { # Triggered when a major character becomes an IG member.
		change_character_religion = scope:interest_group.owner.religion
	} 
	
	pop_potential = { #Pop scope, Defines which pops are ALLOWED TO join the IG
		OR = {
			is_pop_type = soldiers
			is_pop_type = officers
			is_pop_type = aristocrats
			pop_is_discriminated = no
		}		
	}
	
	pop_weight = { #Pop scope, defines the likelihood (weight) certain pops are to join the IG; uses script values
		value = 0
		
		add = {
			desc = "POP_NOT_DISCRIMINATED"
			if = {
				limit = { 
					pop_is_discriminated = no
				}
				value = 25
			}
		}		
		
		add = {
			desc = "POP_SOLDIERS"
			if = {
				limit = { 
					is_pop_type = soldiers
				}
				value = 100
			}
		}
		
		add = {
			desc = "POP_ARISTOCRATS"
			if = {
				limit = { 
					is_pop_type = aristocrats
				}
				value = 50
			}
		}		
	
		add = {
			desc = "POP_OFFICERS"
			if = {
				limit = { 
					is_pop_type = officers
				}
				value = 200
			}
		}
					
		multiply = {
			desc = "LEADER_POPULARITY"
			scope:interest_group = {
				leader = {
					value = popularity
					multiply = 0.0025
					add = 1
					max = 1.25
					min = 0.75
				}
			}
		}	
	}
	
    # Character weights are the likelihood (weight, multiplied by clout) that this type of character is affiliated with the IG; uses script values
	monarch_weight = { #IG scope, for monarch or heir
		value = 0.25
	}
	
	commander_weight = { #? scope, for general or admiral
		value = 5.0
	}

	agitator_weight = { #Character scope
		value = 0.0
	}
    
	executive_weight = { #? scope
		value = 0.0
	}
	
	noble_chance = { #chance that character uses a noble name rather than a common name
		value = 0.5
	}
	
	female_commander_chance = { #chance of female character in this role
		value = 0.0
	}
	
	female_politician_chance = { #chance of female character in this role
		value = 0.0
	}

	female_executive_chance = { #chance of female character in this role
		value = 0.0
	}
	
	# The chance that a commander belonging to this IG takes over leadership when it changes
	# scope:character is the most popular commander in the IG
	commander_leader_chance = {
		value = 0.75
		if = {
			limit = {
				exists = scope:character
			}
			multiply = {
				value = 1
				add = scope:character.popularity
				min = 0
			}
		}
	}
    # The chance that a executive belonging to this IG takes over leadership when it changes
	# scope:character is the most popular executive in the IG
	executive_leader_chance = {
		value = 0.1
	}
}
```

## Interest group traits
Interest group traits are defined in common/interest\_group\_traits. They consist of a script name, an icon, a minimum approval, and a [modifier](./Modifier types.md) block.

```
ig_trait_patriotic_fervor = {
	icon = "gfx/interface/icons/ig_trait_icons/patriotic_fervor.dds"
	min_approval = loyal

	modifier = {
		unit_offense_mult = 0.1
		unit_defense_mult = 0.1
	}
}

ig_trait_veteran_consultation = {
	icon = "gfx/interface/icons/ig_trait_icons/veteran_consultation.dds"
	min_approval = happy

	modifier = {
		country_military_tech_research_speed_mult = 0.1
	}
}

ig_trait_materiel_waste = {
	icon = "gfx/interface/icons/ig_trait_icons/materiel_waste.dds"
	max_approval = unhappy

	modifier = {
		country_military_goods_cost_mult = 0.15
	}
}
```

## Interest group script documentation
The following [effects](./Effect.md), [event targets](./Event target.md), and [triggers](./Trigger.md) can be used in interest group scope.

List of interest group effects

| Effect | Description | Example | Targets |
| abandon\_revolution | Removes interest group from revolution | ``` abandon_revolution = yes/no ``` |  |
| add\_ideology | Adds an ideology to scoped interest group | ``` add_ideology = ideology:<ideology key> ``` |  |
| add\_modifier | Adds a timed modifier effect to object in scope | ``` add_modifier = {   name = static_modifier_name   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } add_modifier = static_modifier_name #set as permanent modifier with no multiplier or decay ``` |  |
| add\_ruling\_interest\_group | Adds interest group to government | ``` add_ruling_interest_group = yes/no ``` |  |
| every\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` every_political_lobby = {   limit = { <triggers> } #optional   <effects> } ``` | political\_lobby |
| every\_preferred\_law | Iterate through all active and possible laws in an interest group's country, ordered by how much they prefer that law | ``` every_preferred_law = {   limit = { <triggers> } #optional   <effects> } ``` | law |
| every\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` every_scope_admiral = {   limit = { <triggers> } #optional   <effects> } ``` | character |
| every\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` every_scope_character = {   limit = { <triggers> } #optional   <effects> } ``` | character |
| every\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` every_scope_general = {   limit = { <triggers> } #optional   <effects> } ``` | character |
| every\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` every_scope_politician = {   limit = { <triggers> } #optional   <effects> } ``` | character |
| every\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` every_scope_pop = {   limit = { <triggers> } #optional   <effects> } ``` | pop |
| join\_revolution | Adds interest group to ongoing revolution | ``` join_revolution = yes/no ``` |  |
| ordered\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` ordered_political_lobby = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | political\_lobby |
| ordered\_preferred\_law | Iterate through all active and possible laws in an interest group's country, ordered by how much they prefer that law | ``` ordered_preferred_law = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | law |
| ordered\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` ordered_scope_admiral = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | character |
| ordered\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` ordered_scope_character = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | character |
| ordered\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` ordered_scope_general = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | character |
| ordered\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` ordered_scope_politician = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | character |
| ordered\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` ordered_scope_pop = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | pop |
| random\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` random_political_lobby = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | political\_lobby |
| random\_preferred\_law | Iterate through all active and possible laws in an interest group's country, ordered by how much they prefer that law | ``` random_preferred_law = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | law |
| random\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` random_scope_admiral = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | character |
| random\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` random_scope_character = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | character |
| random\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` random_scope_general = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | character |
| random\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` random_scope_politician = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | character |
| random\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` random_scope_pop = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | pop |
| remove\_ideology | Removes an ideology from scoped interest group | ``` remove_ideology = ideology:<ideology key> ``` |  |
| remove\_modifier | Removes a timed modifier effect to object in scope | ``` remove_modifier = static_modifier_name ``` |  |
| remove\_ruling\_interest\_group | Removes interest group in scope from government | ``` remove_ruling_interest_group = yes/no ``` |  |
| set\_ig\_trait | Adds a trait to the Interest Group, or replaces their current trait with the same approval level | ``` set_ig_trait = ig_trait:ig_trait_engines_of_progress ``` | interest\_group\_trait |
| set\_interest\_group\_name | Renames interest group to the specified loc key | ``` set_interest_group_name = x ``` |  |

List of interest group triggers

| Trigger | Description | Example | Targets |
| any\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` any_political_lobby = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | political\_lobby |
| any\_preferred\_law | Iterate through all active and possible laws in an interest group's country, ordered by how much they prefer that law | ``` any_preferred_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | law |
| any\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` any_scope_admiral = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character |
| any\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` any_scope_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character |
| any\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` any_scope_general = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character |
| any\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` any_scope_politician = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character |
| any\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` any_scope_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | pop |
| has\_ideology | Check if scoped character or interest group has ideology |  |  |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |
| has\_party | True if IG scope has a party | ``` has_party = bool ``` | boolean |
| ig\_approval | Compare to scoped interest group approval | ``` Usages: ig_approval > 2, ig_approval < happy ``` | value |
| ig\_clout | Compare to scoped interest group's clout | ``` ig_clout >= 0.2 ``` | value |
| ig\_government\_power\_share | Compare to scoped interest group's political strength divided by total government political strength | ``` ig_government_power_share >= 0.5 ``` | value |
| interest\_group\_population | Compares population number in an interest group | ``` interest_group_population > 1000 ``` | value |
| interest\_group\_population\_percentage | Compares percentage of population in an interest group | ``` interest_group_population_percentage > 0.2 ``` | value |
| interest\_group\_supports\_political\_movement | Checks whether the scoped interest group supports a political movement | ``` interest_group_supports_political_movement = yes/no ``` | boolean |
| is\_in\_government | True if IG scope is in the government | ``` is_in_government = bool ``` | boolean |
| is\_insurrectionary | Check if country, movement or IG is insurrectionary |  | boolean |
| is\_interest\_group\_type | Checks if Interest Group is of a certain type Can also be used on characters directly | ``` is_interest_group_type = x ``` |  |
| is\_marginal | True if IG scope is marginal | ``` is_marginal = bool ``` | boolean |
| is\_member\_of\_any\_lobby | Checks if interest group is member of any lobby | ``` is_member_of_any_lobby = yes ``` | boolean |
| is\_member\_of\_lobby | Checks if interest group is member of a certain lobby type | ``` is_member_of_lobby = lobby_type:pro_country_lobby ``` | political\_lobby\_type |
| is\_member\_of\_party | Checks if Interest Group is a member of target party | ``` is_member_of_party = <party> ``` | party |
| is\_powerful | True if IG scope is influential | ``` is_powerful = bool ``` | boolean |
| is\_revolutionary | Check if the country, movement or interest group is revolutionary |  | boolean |
| is\_same\_interest\_group\_type | Checks if Interest Group is of the same IG type as target | ``` is_interest_group_type = scope:neighbor_leading_ig ``` | interest\_group |
| is\_secessionist | Check if the country, movement or interest group is secessionist |  | boolean |
| is\_strongest\_ig\_in\_government | Checks whether the scoped interest group has the most clout out of all interest groups in government | ``` is_strongest_ig_in_government = yes/no ``` | boolean |
| law\_enactment\_stance | Compares the stance of the scoped character, movement or interest group has about enactment of the specified law compared to the current active law in the same group |  |  |
| law\_stance | Compares the base stance of the scoped character, movement or interest group has about the specified law, ignoring the current active law in the same group |  |  |
| most\_powerful\_strata | Compares an interest groups most powerful strata |  |  |
| num\_political\_lobbies | Compare to number of political lobbies in scoped country or interest group | ``` num_political_lobbies > 0 ``` | value |
| prefers\_law | Checks if the scoped interest group prefers the specified law to the comparison law |  |  |

List of interest group event targets

| Event target | Description | To scope |
| average\_progressiveness | Get the average progressiveness of the scoped character or interest group | value |
| leader | Scope to the leader of the interest group | character |
| lobby\_join\_weight | Scope to the join weight of an interest group to a particular lobby (lobby\_join\_weight:root >= 5) | value |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | boolean, value |
| owner | Scope to the owner country of object | country |
| party | Scope to the party that an IG is supporting | party |
| type | Scope from an object to its type | amendment\_type, building\_type, company\_type, diplomatic\_play\_type, harvest\_condition\_type, institution\_type, interest\_group\_type, law\_type, political\_movement\_type, ship\_type, strait\_type |

### Interest group modifier types
`interest_group_` [modifier types](./Modifier types.md) apply their effects to interest groups. When applied to a country, it applies to all interest groups in the country.

List of modifier types

| Modifier type | Localization | Type | Format | Notes |
| interest\_group\_amenability\_add | Interest Group Amenability | additive | good |  |
| interest\_group\_approval\_add | Interest Group Approval | additive | good |  |
| interest\_group\_ig\_armed\_forces\_approval\_add | Armed Forces Approval | additive | good |  |
| interest\_group\_ig\_armed\_forces\_pol\_str\_mult | Armed Forces Political Strength | multiplicative | percent, neutral |  |
| interest\_group\_ig\_armed\_forces\_pop\_attraction\_mult | Armed Forces Pop Attraction | multiplicative | percent, neutral |  |
| interest\_group\_ig\_devout\_approval\_add | Devout Approval | additive | good |  |
| interest\_group\_ig\_devout\_pol\_str\_mult | Devout Political Strength | multiplicative | percent, neutral |  |
| interest\_group\_ig\_devout\_pop\_attraction\_mult | Devout Pop Attraction | multiplicative | percent, neutral |  |
| interest\_group\_ig\_industrialists\_approval\_add | Industrialists Approval | additive | good |  |
| interest\_group\_ig\_industrialists\_pol\_str\_mult | Industrialists Political Strength | multiplicative | percent, neutral |  |
| interest\_group\_ig\_industrialists\_pop\_attraction\_mult | Industrialists Pop Attraction | multiplicative | percent, neutral |  |
| interest\_group\_ig\_intelligentsia\_approval\_add | Intelligentsia Approval | additive | good |  |
| interest\_group\_ig\_intelligentsia\_pol\_str\_mult | Intelligentsia Political Strength | multiplicative | percent, neutral |  |
| interest\_group\_ig\_intelligentsia\_pop\_attraction\_mult | Intelligentsia Pop Attraction | multiplicative | percent, neutral |  |
| interest\_group\_ig\_landowners\_approval\_add | Landowners Approval | additive | good |  |
| interest\_group\_ig\_landowners\_pol\_str\_mult | Landowners Political Strength | multiplicative | percent, neutral |  |
| interest\_group\_ig\_landowners\_pop\_attraction\_mult | Landowners Pop Attraction | multiplicative | percent, neutral |  |
| interest\_group\_ig\_petty\_bourgeoisie\_approval\_add | Petite Bourgeoisie Approval | additive | good |  |
| interest\_group\_ig\_petty\_bourgeoisie\_pol\_str\_mult | Petite Bourgeoisie Political Strength | multiplicative | percent, neutral |  |
| interest\_group\_ig\_petty\_bourgeoisie\_pop\_attraction\_mult | Petite Bourgeoisie Pop Attraction | multiplicative | percent, neutral |  |
| interest\_group\_ig\_rural\_folk\_approval\_add | Rural Folk Approval | additive | good |  |
| interest\_group\_ig\_rural\_folk\_pol\_str\_mult | Rural Folk Political Strength | multiplicative | percent, neutral |  |
| interest\_group\_ig\_rural\_folk\_pop\_attraction\_mult | Rural Folk Pop Attraction | multiplicative | percent, neutral |  |
| interest\_group\_ig\_trade\_unions\_approval\_add | Trade Unions Approval | additive | good |  |
| interest\_group\_ig\_trade\_unions\_pol\_str\_mult | Trade Unions Political Strength | multiplicative | percent, neutral |  |
| interest\_group\_ig\_trade\_unions\_pop\_attraction\_mult | Trade Unions Pop Attraction | multiplicative | percent, neutral |  |
| interest\_group\_in\_government\_approval\_add | Government Interest Group Approval | additive | good |  |
| interest\_group\_in\_government\_attraction\_mult | Attraction of Interest Groups In Government | multiplicative | percent, neutral |  |
| interest\_group\_in\_opposition\_agitator\_popularity\_add | Popularity of Agitators In Opposition | additive | good |  |
| interest\_group\_in\_opposition\_approval\_add | Opposition Interest Group Approval | additive | good |  |
| interest\_group\_pol\_str\_factor | Interest Group Political Strength |  | percent, good |  |
| interest\_group\_pol\_str\_mult | Interest Group Political Strength | multiplicative | percent, neutral |  |
| interest\_group\_pop\_attraction\_mult | Interest Group Pop Attraction | multiplicative | percent, neutral |  |

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • Interest groups • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
