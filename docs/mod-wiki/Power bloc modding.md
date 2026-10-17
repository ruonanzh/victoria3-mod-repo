# Power bloc modding

*See also: [Power bloc](https://vic3.paradoxwikis.com/Power_bloc)*

[Power blocs](https://vic3.paradoxwikis.com/Power_bloc) represent international organizations, associations, and empires. Each power bloc has a *central identity* and a number of *principles*. Modding power blocs and principles typically involves modifying several related concepts.

## DLC-locked features
Power blocs have a number of DLC-locked features. These include most unmodified identities and principles, as well as the ability to add more than one principle to a power bloc. Mods may not unlock DLC-locked content, so any mod features that modify or replicate DLC-locked power bloc content **must** include the trigger `has_dlc_feature = power_bloc_features` to enable those features. Certain principles or central identities may also or alternately by locked by a specific DLC with a trigger such as `has_dlc_feature = ep3_content`

Entirely new identities, principles, or other new content related to power blocs do not require this trigger unless they replicate or depend on an existing DLC-locked feature.

 Trade League and its primary principles  External Trade and  Internal Trade are *not* DLC-locked, and so can be modified freely.

| DLCs that unlock power block features |
| **Sphere of Influence** |

## Central identity definition
Power bloc identities define the type of power bloc, and include base modifiers and values such as cohesion.

Central identities are defined in /Victoria 3/game/common/power\_bloc\_identities. The basic definition is a script name, icon, background, and a number of triggers, modifiers, and script values. For example:

```
identity_trade_league = {
	power_bloc_modifier = {
		power_bloc_customs_union_bool = yes
		power_bloc_mandate_progress_per_great_power_member_add = 10
		power_bloc_mandate_progress_per_major_power_member_add = 5
		power_bloc_mandate_progress_per_minor_power_member_add = 2
		power_bloc_mandate_progress_per_unrecognized_major_power_member_add = 2
		power_bloc_mandate_progress_per_unrecognized_regional_power_member_add = 1
		power_bloc_cohesion_per_member_add = -1
		power_bloc_invite_acceptance_great_power_add = -15
	}

	leader_modifier = {
		country_trade_route_quantity_mult = 0.1
	}
	
	non_leader_modifier = {
		country_convoy_contribution_to_market_owner_add = 0.2
	}

	member_modifier = {
	}

	can_leave = {
		OR = {
			is_power_bloc_leader = yes
			power_bloc = {
				leverage_advantage = {
					target = root
					value <= 30
				}
			}
		}
	}
	
	possible = {
		# NOT = { has_law = law_type:law_isolationism }
	}

	icon = "gfx/interface/icons/central_identity_pillars_icons/trade_league.dds"
	background = "gfx/interface/power_blocs/backgrounds/pb_background_generic.dds"

	mandate_progress = power_bloc_mandate_progress_by_rank
	
	on_created = { relations_hit_with_power_bloc_leaders = yes }
	
	cohesion = {
		[script value]
		add = {
			add = 0.15
			multiply = define:NPowerBlocs|COHESION_TARGET_MAX
			desc = POWER_BLOC_COHESION_BASE
		}
	}
	
	ai_weight = {
		[script value]
	}
}
```

Script names can be anything and the script name also generates [localization](./Localization.md) keys: `[script name]` and `[script_name]_desc`. The identity is used for triggers, so a clear, but unique name is good to use.

The follow characteristics can be scripted for each identity:

| Characteristic | Description |
| icon | Icon that represents the identity |
| background | Background image for the power bloc screen when using this identity |
| visible | Trigger block that must return true for this identity to be visible |
| possible | Trigger block that must return true for this identity to be selectable |
| can\_leave | Trigger block that must return true for a country to voluntarily leave the power bloc |
| on\_created | Effect block that occurs when this power bloc is first formed |
| power\_bloc\_modifier | Modifiers that affect the power bloc directly |
| leader\_modifier | Modifiers that affect the power bloc leader only |
| non\_leader\_modifier | Modifiers that affect only the non-leader members of the power bloc |
| member\_modifier | Modifiers that affect all members of the power bloc |
| mandate\_progress | Script value that determines how quickly mandates are gained |
| cohesion | Script value that determines the cohesion target of the bloc |
| ai\_weight | Script value that determines which identity an AI values most |

## Principle group definition
Power bloc principles are grouped such that each group represents a principle with each level defined within. Principle groups are defined in /Victoria 3/game/common/power\_bloc\_principle\_groups. Each principle group requires a script name and a `levels` block which lists one or more principles. Additionally, they can include the following characteristics:

| Characteristic | Description |
| unlocking\_identity | Identity required to select this principle group |
| blocking\_identity | Identity which cannot select this principle group |
| primary\_for\_identity | This principle group is a primary principle for the given identity |

Like identities, the script name can be anything and generates the localization keys `[script_name]` and `[script_name]_desc`

Unmodified Victoria 3 always and only uses three levels for each group, but this is not a strict requirement. Each entry is consider a level higher than the previous, which affects the number of mandates required to change to that principle.

Example principle group:

```
principle_group_internal_trade = {
	primary_for_identity = identity_trade_league
	unlocking_identity = identity_trade_league
	
	levels = {
		principle_internal_trade_1
		principle_internal_trade_2
		principle_internal_trade_3
	}
}
```

## Principle definition
Principles are defined in /Victoria 3/game/common/power\_bloc\_principles. Each principle has certain required elements and a number of optional elements. A basic definition requires the following: a script name, an icon, a background, and an ai\_weight trigger block.

```
principle_internal_trade_1 = {
	icon = "gfx/interface/icons/principles_icons/internal_trade.dds"
	background = "gfx/interface/icons/principles_icons/principle_tier_1.dds"
	
	member_modifier = {
		# Members get a bonus to Company throughput
		country_company_throughput_bonus_add = 0.1
		# More convoy going to the market owner, effect scaling upwards with principle levels
		country_convoy_contribution_to_market_owner_add = 0.2
	}
	
	ai_weight = {
		value = 200 # Good for trade leagues to have
		if = {
			limit = { 
				OR = {
					has_law = law_type:law_mercantilism 
					has_law = law_type:law_command_economy
				}
			}
			add = 100
		}	

		if = {
			limit = { 
				power_bloc ?= { has_principle_group = principle_group:principle_group_external_trade }
			}
			multiply = 0.5
		}
	}	
}
```

Principles inherit the localization of their principle group, but still generate a new desc `[script_name]_desc`. In unmodified Victoria 3, the principle descriptions are set to reuse the principle group description, but they can have their own distinct description localization if desired.

Principles have the following characteristics:

| Element | Description |
| icon | Icon that represents the principle |
| background | Background image for the principle level |
| visible | Trigger block that must return true for this principle to be visible |
| possible | Trigger block that must return true for this principle to be selectable |
| power\_bloc\_modifier | Modifiers that affect the power bloc directly |
| leader\_modifier | Modifiers that affect the power bloc leader only |
| non\_leader\_modifier | Modifiers that affect only the non-leader members of the power bloc |
| member\_modifier | Modifiers that affect all members of the power bloc |
| ai\_weight | Script value that determines which principle an AI values most |
| institution | [institution](./Institution modding.md) affected by the principle |
| institution\_modifier | a modifier block added to the institution by the principle |

### Principle slots
Principle slots are governed by scripted rules in /Victoria 3/game/common/scripted\_rules/00\_scripted\_rules.txt. There are two rules for each slot `unlock_power_bloc_principle_slot_#` and `unlock_power_bloc_formation_principle_slot_#`. Each of these takes a trigger block to determine whether a given slot can be used. It is unclear whether additional slots can be added (note that this would require graphical modifications as well). Note that use of slots beyond the first are a DLC-locked feature, and thus require `has_dlc_feature = power_bloc_features` as a necessary trigger to enable more slots.

## Power bloc script values
The file /Victoria 3/game/common/script\_values/01\_power\_bloc\_values.txt contains a number of defined script values related to power blocs. For example, the script values for leverage and mandate gain are both defined here as well as the AI acceptance for joining a power bloc.

## Other effects
Power bloc identities and principles can enable effects or actions in other files by referencing the identity or principle. Production methods are one such example, with certain principles enabling alternate production methods.

## Power bloc defines
Several [defines](./Defines.md) govern the mechanics of power blocs in addition to the scriptable characteristics.

| Define | Default Value | Dev Comment |
| MAX\_PRINCIPLES | 4 | # Max number of principles that a Power Bloc can have |
| INITIAL\_PRINCIPLE\_LEVELS | 1 | # Max total levels of principles that a Power Bloc can have during formation |
| FORMATION\_COOLDOWN\_MONTHS | 24 | # Cooldown in months between the attempts to form Power Blocs |
| JOIN\_COOLDOWN\_MONTHS | 6 | # If a Country leaves a Power Bloc they cannot re-join before X months |
| LEAVE\_COOLDOWN\_MONTHS | 6 | # If a Country joins a Power Bloc they cannot leave within X months |
| MIN\_MEMBERS | 2 | # This is the minimum number of members that the bloc needs to have to be considered active. Members include the leader. |
| LEVERAGE\_LOBBY\_CLOUT\_FACTOR | 500 | # Leverage gain is increased or decreased by the Lobby's total Clout \* this factor |
| INVITE\_ACTION\_NAME | "invite\_to\_power\_bloc" |  |
| JOIN\_ACTION\_NAME | "join\_power\_bloc" |  |
| MAX\_MANDATE\_PROGRESS | 2000 | # When mandate progress reaches this value, the power bloc gains one mandate |
| MAX\_MANDATES | 3 | # This is the maximum number of mandates that can be accumulated at once |
| PRINCIPLE\_SELECTION\_COOLDOWN\_DAYS | 90 | # Once a principle is selected, it cannot be changed for this many days. Upgrading is unaffected by the cooldown, but resets it. |
| POWER\_STRUGGLE\_PRESTIGE\_THRESHOLD\_START | 1.2 | # If a power bloc member has more prestige than leader's prestige X this - power struggle starts with the member becoming contender |
| POWER\_STRUGGLE\_PRESTIGE\_THRESHOLD\_FAIL | 1.15 | # If a contender has less prestige than leader's prestige X this - power struggle fails |
| POWER\_STRUGGLE\_DURATION\_SUCCESS\_MONTHS | 12 | # Power struggle succeeds after this months |
| POWER\_STRUGGLE\_DURATION\_FACTOR\_FOR\_FOUNDER | 0.75 | # Power struggle succeeds after this X POWER\_STRUGGLE\_DURATION\_SUCCESS\_MONTHS if the contender is the founder of the power bloc |
| COHESION\_WEEKLY\_DRIFT\_MAX | 1 | # At most, Cohesion will drift by +/- this value each week |
| COHESION\_TARGET\_MAX | 100 | # The highest value Cohesion can reach |
| POWER\_BLOC\_INFLUENCE\_COST | 500 | # Cost in Influence to form / be the leader of a Power Bloc |
| MAX\_LEVERAGE | 1000 | # How much "raw" Leverage can be split between parties (the country itself + each Power Bloc) |
| LEVERAGE\_WEEKLY\_DRIFT\_FACTOR | 0.02 | # The delta between current Leverage and Target Leverage will be multiplied by this to determine the weekly Leverage drift |
| LEVERAGE\_WEEKLY\_DRIFT\_MIN | 1 | # At minimum, Leverage will drift by +/- this value each week, up/down to the target |
| COUNTRY\_POPULATION\_LEVERAGE\_RESISTANCE\_MODIFIER\_DIVISOR | 1000000 | # Population divided by this is multiplied by country\_leverage\_resistance\_per\_population to give a certain amount of leverage per million people |
| COUNTRY\_POPULATION\_LEVERAGE\_RESISTANCE\_MODIFIER\_MAX\_MULTIPLIER | 100 | # Max multiplier given by population. With the value above at 1 000 000, this means the cap for leverage resistance is at 100 000 000. |
## Power bloc emblems
*Main article: [Flag modding](./Flag modding.md#Power_bloc_emblems)*

Power bloc emblems are scripted in the same way as flag coats of arms. The primary difference being a square width-to-height ratio (1:1) rather than rectangular one that flags have (3:2)

The base game definition is:

```
    template_power_bloc_1 = {
        pattern = "pattern_solid.tga"
        color1 = { 0.0 0.0 0.0 0.0 }

        # If we ever change the order of layers here, remember to also update them
        # in NGraphics::NPowerBlocCoa::PIECE_LAYERS_ORDER.
        colored_emblem = {
            texture = list "power_bloc_shield"
            color1 = list "power_bloc_colors"
            color2 = list "power_bloc_colors"
            instance = { scale = { 0.72 0.72 } position = { 0.49 0.6 } }  # when changing this remember to update NPowerBlocCoa in 00_defines.txt
        }

        textured_emblem = {
            texture = list "power_bloc_top"
            instance = { scale = { 0.7 0.7 } position = { 0.5 0.19 } }  # when changing this remember to update NPowerBlocCoa in 00_defines.txt
        }

        textured_emblem = {
            texture = list "power_bloc_frame"
            instance = { scale = { 0.9 0.9 } position = { 0.5 0.6 } }  # when changing this remember to update NPowerBlocCoa in 00_defines.txt
        }

        colored_emblem = {
            texture = list "power_bloc_center"
            color1 = list "power_bloc_colors"
            instance = { scale = { 0.45 0.45 } position = { 0.49 0.54 } }  # when changing this remember to update NPowerBlocCoa in 00_defines.txt
        }

        textured_emblem = {
            texture = list "power_bloc_side"
            instance = { scale = { 0.65 0.65 } position = { 0.155 0.55 } }  # when changing this remember to update NPowerBlocCoa in 00_defines.txt
        }

        textured_emblem = {
            texture = list "power_bloc_side"
            instance = { scale = { -0.65 0.65 } position = { 0.82 0.55 } }  # when changing this remember to update NPowerBlocCoa in 00_defines.txt
        }
    }
```

The lists are defined in /Victoria 3/game/common/coat\_of\_arms/template\_lists. As the comments note, these values are also referred to in the [defines](./Defines.md).

Power bloc *shields* (346×346px) and *centers* (220×220px) are colored emblems in the same folder as flag colored emblems, though with a file prefix of `pb_`, rather than `ce_`. Similarly, the tops (346×346px), frames (432×432px), and sides (360×360px) are textured emblems. Note the second (right) side is flipped horizontally by inverting its X scaling factor.

Players with the  Sphere of Influence DLC enabled can customize their power bloc emblem from the available elements, while players without can only use randomized or prescripted emblems.

Prescripted power bloc emblems are created scripting the emblem as above, then assigned by giving a very high weight to that scripted emblem in the list of random power bloc emblems in /Victoria 3/game/common/coat\_of\_arms/template\_lists/coa\_templates.txt, as is done for the base game starting power blocs.

## Power bloc names
Power blocs have a selection of names that can be used for randomized and AI-led bloc names. These are scripted in /common/power\_bloc\_names/. Each name is a block with a trigger determining when it is valid for use as a random name.

```
power_bloc_name = {
	trigger = {	
		# Trigger evaluated in leader scope
		# scope:selected_identity - the identity that is selected in the power bloc formation panel
	}
}
```

A name can be always available, for example, by simply scripting `always = yes`, more complex triggers are possible as well, such as names available only for certain countries or blocs whose leader owns a certain state.

## Power bloc script documentation
The following [effects](./Effect.md), [event targets](./Event target.md), and [triggers](./Trigger.md) can be used in power bloc scope.

List of power bloc effects

| Effect | Description | Example | Targets |
| add\_cohesion\_number | Adds a specific amount of Cohesion to the Power Bloc in scope | ``` add_cohesion_number = 100 (adds 100 points to Cohesion) ``` |  |
| add\_cohesion\_percent | Adds a percentage-based amount of Cohesion to the Power Bloc in scope | ``` add_cohesion_percent = -0.2 (reduces Cohesion by 20% of its maximum value) ``` |  |
| add\_leverage | Adds the specified amount of leverage for the Power Bloc in scope on the country specified | ``` If the value is positive, also reduces the amount of Leverage of all other Blocs proportionally to match add_leverage = {   target = country_scope   value = script_value } ``` |  |
| add\_modifier | Adds a timed modifier effect to object in scope | ``` add_modifier = {   name = static_modifier_name   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } add_modifier = static_modifier_name #set as permanent modifier with no multiplier or decay ``` |  |
| add\_principle | Adds principle to powerbloc | ``` power_bloc = {   add_principle = test_principle_group_A_1 } ``` |  |
| every\_power\_bloc\_member | Iterate through all members of the scoped power bloc including the leader | ``` every_power_bloc_member = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| ordered\_power\_bloc\_member | Iterate through all members of the scoped power bloc including the leader | ``` ordered_power_bloc_member = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| random\_power\_bloc\_member | Iterate through all members of the scoped power bloc including the leader | ``` random_power_bloc_member = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| remove\_modifier | Removes a timed modifier effect to object in scope | ``` remove_modifier = static_modifier_name ``` |  |
| remove\_principle | Removes principle from power bloc | ``` power_bloc = {  remove_principle = test_principle_group_A_1 } ``` |  |

List of power bloc triggers

| Trigger | Description | Example | Targets |
| any\_power\_bloc\_member | Iterate through all members of the scoped power bloc including the leader | ``` any_power_bloc_member = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| can\_invite\_any\_country | Checks whether is possible to invite any country to the scoped Power Bloc. | ``` can_invite_any_country = yes/no ``` | boolean |
| current\_cohesion\_number | Compare the current Cohesion as a numeric value | ``` current_cohesion_number > 50 ``` | value |
| current\_cohesion\_percentage | Compare the current Cohesion as a percentage of the maximum of a Power Bloc in scope | ``` current_cohesion_percentage > 0.5 ``` | value |
| free\_principle\_slots | Compare a power bloc's free principle slot count | ``` power_bloc = {   free_principle_slots >= 2 } ``` | value |
| has\_identity | Checks if the scoped power bloc has certain central identity | ``` has_identity = identity:key ``` | power\_bloc\_identity |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |
| has\_principle | Checks if the scoped power bloc has certain principle | ``` has_principle = principle:key ``` | power\_bloc\_principle |
| has\_principle\_group | Checks if the scoped power bloc has a principle in the specified group | ``` has_principle_group = principle_group:key ``` | power\_bloc\_principle\_group |
| leverage\_advantage | Checks that the leverage advantage between power bloc and target country meets condition | ``` power_bloc = {  leverage_advantage = {   target = c:BEL   value > 0  } } ``` | value |
| num\_power\_bloc\_members | Compare the number of members in a power bloc against a value | ``` num_power_bloc_members >= 2 ``` | value |
| num\_power\_bloc\_states | Compare the number of states in a power bloc against a value | ``` num_power_bloc_states >= 2 ``` | value |
| power\_bloc\_rank | Compare a power bloc's rank | ``` power_bloc = {   power_bloc_rank <= 2 } ``` | value |
| power\_bloc\_total\_leading\_goods\_producers | Compare how many members are among the leading producers for all goods worldwide weighted by their position in the ranking. The top producer is weighted by MIN\_SPOT\_PRESTIGE\_AWARD and then each subsequent position is weighted by one less until. By default this means 1st counts as 3, 2nd as 2 and 3rd as 1. Any other positions as 0. | ``` power_bloc_total_leading_goods_producers > 15 ``` | value |
| power\_bloc\_total\_leading\_goods\_producers\_with | Compare how many members are among the leading producers for all goods worldwide weighted by their position in the ranking, plus one additional country not currently in the power bloc. The top producer is weighted by MIN\_SPOT\_PRESTIGE\_AWARD and then each subsequent position is weighted by one less until. By default this means 1st counts as 3, 2nd as 2 and 3rd as 1. Any other positions as 0. | ``` "power_bloc_total_leading_goods_producers_with(scope:target) > 15" ``` | value |
| power\_bloc\_total\_leading\_goods\_producers\_without | Compare how many members are among the leading producers for all goods worldwide weighted by their position in the ranking, minus one country that is currently in the power bloc. The top producer is weighted by MIN\_SPOT\_PRESTIGE\_AWARD and then each subsequent position is weighted by one less until. By default this means 1st counts as 3, 2nd as 2 and 3rd as 1. Any other positions as 0. | ``` "power_bloc_total_leading_goods_producers_without(scope:target) > 15" ``` | value |
| power\_bloc\_worst\_economic\_dependence | If used in a power bloc scope, compare the member with the lowest economic dependence on the leader. | ``` power_bloc_worst_economic_dependence > 2.2 ``` | value |
| power\_bloc\_worst\_economic\_dependence\_with | If used in a power bloc scope, compare the member with the lowest economic dependence on the leader. | ``` power_bloc_worst_economic_dependence > 2.2 ``` | value |
| power\_bloc\_worst\_economic\_dependence\_without | If used in a power bloc scope, compare the member with the lowest economic dependence on the leader. | ``` power_bloc_worst_economic_dependence > 2.2 ``` | value |
| power\_bloc\_worst\_infamy | If used in a power bloc scope, compare the Infamy value of the member country with the worst (highest) Infamy | ``` power_bloc_worst_infamy > 50 ``` | value |
| power\_bloc\_worst\_infamy\_with | If used in a power bloc scope, compare the Infamy value of the member country with the worst (highest) Infamy | ``` power_bloc_worst_infamy > 50 ``` | value |
| power\_bloc\_worst\_infamy\_without | If used in a power bloc scope, compare the Infamy value of the member country with the worst (highest) Infamy | ``` power_bloc_worst_infamy > 50 ``` | value |
| power\_bloc\_worst\_leader\_relations | If used in a power bloc scope, compare the Relations value to the power bloc leader for the member country with the worst (lowest) Relations | ``` power_bloc_worst_leader_relations > 10 ``` | value |
| power\_bloc\_worst\_leader\_relations\_with | If used in a power bloc scope, compare the Relations value to the power bloc leader for the member country with the worst (lowest) Relations | ``` power_bloc_worst_leader_relations > 10 ``` | value |
| power\_bloc\_worst\_leader\_relations\_without | If used in a power bloc scope, compare the Relations value to the power bloc leader for the member country with the worst (lowest) Relations | ``` power_bloc_worst_leader_relations > 10 ``` | value |
| power\_bloc\_worst\_leader\_religion\_population\_fraction | If used in a power bloc scope, compare the lowest population fraction in a member country that follows the leader's religion. | ``` power_bloc_worst_leader_religion_population_fraction > 10 ``` | value |
| power\_bloc\_worst\_leader\_religion\_population\_fraction\_with | If used in a power bloc scope, compare the lowest population fraction in a member country that follows the leader's religion. | ``` power_bloc_worst_leader_religion_population_fraction > 10 ``` | value |
| power\_bloc\_worst\_leader\_religion\_population\_fraction\_without | If used in a power bloc scope, compare the lowest population fraction in a member country that follows the leader's religion. | ``` power_bloc_worst_leader_religion_population_fraction > 10 ``` | value |
| power\_bloc\_worst\_liberty\_desire | If used in a power bloc scope, compare the Liberty Desire value of the member country with the worst (highest) Liberty Desire | ``` power_bloc_worst_liberty_desire > 75 ``` | value |
| power\_bloc\_worst\_liberty\_desire\_with | If used in a power bloc scope, compare the Liberty Desire value of the member country with the worst (highest) Liberty Desire | ``` power_bloc_worst_liberty_desire > 75 ``` | value |
| power\_bloc\_worst\_liberty\_desire\_without | If used in a power bloc scope, compare the Liberty Desire value of the member country with the worst (highest) Liberty Desire | ``` power_bloc_worst_liberty_desire > 75 ``` | value |
| power\_bloc\_worst\_progressiveness\_difference\_government\_type | If used in a power bloc scope, compare the total Progressiveness value difference for the member country with the worst (highest) difference in progressiveness between their Governance Principles and Distribution of Power Laws compared to the power bloc leader | ``` power_bloc_worst_progressiveness_compatibility_government_type > 100 ``` | value |
| power\_bloc\_worst\_progressiveness\_difference\_government\_type\_with | If used in a power bloc scope, compare the total Progressiveness value difference for the member country with the worst (highest) difference in progressiveness between their Governance Principles and Distribution of Power Laws compared to the power bloc leader | ``` power_bloc_worst_progressiveness_compatibility_government_type > 100 ``` | value |
| power\_bloc\_worst\_progressiveness\_difference\_government\_type\_without | If used in a power bloc scope, compare the total Progressiveness value difference for the member country with the worst (highest) difference in progressiveness between their Governance Principles and Distribution of Power Laws compared to the power bloc leader | ``` power_bloc_worst_progressiveness_compatibility_government_type > 100 ``` | value |
| predicted\_cohesion\_percentage\_with | Predicts the cohesion of a Power Bloc (as a fraction of 1) if it included target country as a member | ``` predicted_cohesion_percentage_with, = {  target = scope:other_country  value > 0.9 } ``` | value |
| target\_cohesion\_number | Compare the target Cohesion as a numeric value | ``` target_cohesion_number > 50 ``` | value |
| target\_cohesion\_percentage | Compare the target Cohesion as a percentage of the maximum of a Power Bloc in scope | ``` target_cohesion_percentage > 0.5 ``` | value |
| total\_used\_principle\_levels | Compare a power bloc's total number of active principle levels | ``` power_bloc = {  total_used_principle_levels >= 10 } ``` | value |
| used\_principle\_slots | Compare a power bloc's used principle slot count | ``` power_bloc = {   used_principle_slots >= 2 } ``` | value |

List of power bloc event targets

| Event target | Description | To scope |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | boolean, value |
| num\_mandates | Scope to the number of available mandates of the scoped power bloc (power\_bloc.num\_mandates > 0) | value |
| power\_bloc\_leader | Scope to the leader country of the scoped power bloc | country |
| power\_struggle\_contender | Scope to the contender country if there is a power struggle | country |

### Power bloc modifier types
`power_bloc_` [modifier types](./Modifier types.md) apply their effects to power blocs.

List of modifier types

| Modifier type | Localization | Type | Format | Notes |
| power\_bloc\_allow\_foreign\_investment\_lower\_rank\_bool | Foreign Investment Rights in Power Bloc Member with lower Rank | boolean | good |  |
| power\_bloc\_allow\_port\_access\_bool | Allows port access between Power Bloc members | boolean | good |  |
| power\_bloc\_allow\_wider\_migration\_area\_bool | Allow Migration within a Power Bloc | boolean | good |  |
| power\_bloc\_cohesion\_add | Power Bloc Cohesion | additive | good |  |
| power\_bloc\_cohesion\_mult | Power Bloc Cohesion | multiplicative | percent, good |  |
| power\_bloc\_cohesion\_per\_member\_add | Power Bloc Cohesion per Power Bloc Member | additive | good |  |
| power\_bloc\_customs\_union\_bool | Customs Union | boolean | neutral |  |
| power\_bloc\_disallow\_embargo\_bool | Cannot}} place Embargo on another Power Bloc member | boolean | neutral |  |
| power\_bloc\_disallow\_war\_bool | Cannot}} start or join wars amongst Power Bloc members | boolean | neutral |  |
| power\_bloc\_income\_transfer\_to\_leader\_factor | Income Transfer to Power Bloc Leader |  | neutral |  |
| power\_bloc\_invite\_acceptance\_add | Power Bloc Invitation Acceptance Chance | additive | good |  |
| power\_bloc\_invite\_acceptance\_great\_power\_add | Great Power Power Bloc Invitation Acceptance Chance | additive | good |  |
| power\_bloc\_invite\_acceptance\_major\_power\_add | Major Power Power Bloc Invitation Acceptance Chance | additive | good |  |
| power\_bloc\_invite\_acceptance\_minor\_power\_add | Minor Power Power Bloc Invitation Acceptance Chance | additive | good |  |
| power\_bloc\_invite\_acceptance\_unrecognized\_major\_power\_add | Unrecognized Major Power Power Bloc Invitation Acceptance Chance | additive | good |  |
| power\_bloc\_invite\_acceptance\_unrecognized\_regional\_power\_add | Unrecognized Regional Power Power Bloc Invitation Acceptance Chance | additive | good |  |
| power\_bloc\_leader\_can\_add\_wargoal\_bool | Allows free War Goal | boolean | neutral |  |
| power\_bloc\_leader\_can\_force\_state\_religion\_bool | Allows Impose State Religion | boolean | neutral |  |
| power\_bloc\_leader\_can\_make\_subjects\_bool | Can **Subjugate** Power Bloc Member | boolean | neutral |  |
| power\_bloc\_leader\_can\_regime\_change\_bool | Allows Force Regime Change | boolean | neutral |  |
| power\_bloc\_leader\_can\_spread\_culture\_to\_pb\_bool | Allows Spread Primary Culture in Power Bloc Members | boolean | neutral |  |
| power\_bloc\_leverage\_generation\_mult | Leverage Generation | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_mult | Weekly Mandate Progress | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_great\_power\_member\_add | Mandate Progress per Great Power | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_great\_power\_member\_mult | Mandate Progress per Great Power | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_insignificant\_power\_member\_add | Mandate Progress per Insignificant Power | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_insignificant\_power\_member\_mult | Mandate Progress per Insignificant Power | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_major\_power\_member\_add | Mandate Progress per Major Power | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_major\_power\_member\_mult | Mandate Progress per Major Power | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_minor\_power\_member\_add | Mandate Progress per Minor Power | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_minor\_power\_member\_mult | Mandate Progress per Minor Power | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_major\_power\_member\_add | Mandate Progress per Unrecognized Major Power | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_major\_power\_member\_mult | Mandate Progress per Unrecognized Major Power | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_power\_member\_add | Mandate Progress per Unrecognized Power | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_power\_member\_mult | Mandate Progress per Unrecognized Power | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_regional\_power\_member\_add | Mandate Progress per Unrecognized Regional Power | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_regional\_power\_member\_mult | Mandate Progress per Unrecognized Regional Power | multiplicative | percent, good |  |
| power\_bloc\_target\_sway\_cost\_mult | Sway Maneuver cost for the Diplomatic Play Target | multiplicative | percent, bad |  |
| power\_bloc\_trade\_advantage\_add | Trade Advantage within Power Bloc | additive | good |  |

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • Power blocs • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
