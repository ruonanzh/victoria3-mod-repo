# Scope

**Scopes** are game objects used with most [effects](./Effect.md) and [triggers](./Trigger.md). Scopes generally use the format `scope = { contents }` or `script_function = scope`. Scopes are set in a few ways. Most scripted content sets a certain scope, such as `country` or `state` as the base or **root** scope. Within effects and triggers, [iterators](#iterators) and [event targets](./Event target.md) also can set scopes.

Most scopes are a particular instance of a game object, determined when the scope is called. Certain scopes refer to game object *types* instead; these generally have the word type in their script name.

## Scopes and scripting
Most scripting is done "in scope" meaning that an effect or trigger must be run in a relevant scoped object in order to correctly check or affect the gamestate. For example, an effect that changes a character's ideology only functions if it is in a character scope. Similarly, a trigger that checks national debt does not function outside of a country scope.

Some effects and triggers work in multiple scope types, and others do not require a specific scope at all, meaning they can be used nearly anywhere. Scopeless script is sometimes referred to as "global", "any", or "none" scope. In the [effect](./Effect.md), [trigger](./Trigger.md), and [event target](./Event target.md) tables, script that does not require a specific scope is noted with `none`.

### Objects and types
Scopes are generally objects, instances of a type. Types are global definitions, setting the base characteristics of their objects, such as default primary cultures and capital in a country definition. For example, an individual building is an object, and the definition of that builind is a type. Most types have limited or no scoping available. Some objects do not have a distinct type or are themselves a type, such as cultures and religions. Types generally have a limited set of effects and triggers that can be run in their scope, and they generally cannot hold variables or static modifiers.

## Base scope
Each scripted element in the game files that runs effects or triggers may contain a base scope, which is typically callable with `root`. Some may contain additional scopes, typically as a saved scope.

## Iterators
**Iterators** – also called lists – are [effects](./Effect.md) or [triggers](./Trigger.md) which iterate through all eligible scopes of a certain type, returning them for checking triggers or executing effects.

There are four types of iterators, one for triggers and three for effects.

| Prefix | Description |
| any\_<name> | - Trigger scope, checks that any returned scope returns true for contained triggers.   - Can use `count op value` or `percent op value` to check a specified amount or ratio   - With `count = all` or `percent = 1`, it requires all scopes to return true   - Can use `filter = { <triggers> }` with `count` or `percent` to limit returned scopes |
| every\_<name> | - Effect scope, executes effects on all returned scopes   - Can use `limit = { <triggers> }` to narrow the scopes returned |
| ordered\_<name> | - Effect scope, executes effects on returned scopes, by default only first scope in ordering is returned   - Uses `order_by = value` to determine the ordering, ordered from most positive to most negative   - Can use `limit = { <triggers> }` to narrow the scopes returned   - Can use `position = int` to select a different position in order, 0-indexed   - Can use `min = int` and `max = value` to limit which and how many scopes are returned in the ordering   - Can use `check_range_bounds = no` to prevent error logging if the number of returned scopes is less than the range betweem min and max |
| random\_<name> | - Effect scope, executes effects on a single random returned scope   - Can use `limit = { <triggers> }` to narrow the scopes returned   - Can use `weight = { mtth_blocks }` to weight the random selection |

### Trigger iterators
*See also: [Trigger](./Trigger.md)*

List of iterator triggers

| Trigger | Description | Example | Scopes | Targets |
| any\_active\_law | Iterate through all active laws in a country | ``` any_active_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | law |
| any\_active\_party | Iterate through all active political parties in a country | ``` any_active_party = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | party |
| any\_character | Iterate through all characters globally | ``` any_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | character |
| any\_character\_in\_exile\_pool | Iterate through characters in the exile pool | ``` any_character_in_exile_pool = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | character |
| any\_character\_in\_void | Iterate through characters in the void | ``` any_character_in_void = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | character |
| any\_civil\_war | Iterate through all civil wars related to the scoped country | ``` any_civil_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | civil\_war |
| any\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` any_cobelligerent_in_diplo_play = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` any_cobelligerent_in_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_combat\_unit | Iterate through all combat units of input scope | ``` any_combat_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | battle, building, front, hq, military\_formation | new\_combat\_unit |
| any\_company | Iterate through all companies in a country | ``` any_company = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | company |
| any\_country | Iterate through all countries globally | ``` any_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_country\_in\_<georegion\_short\_name> | Iterate through all countries in the specified geographic region | ``` any_country_in_<georegion_short_name> = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_decentralized\_country | Iterate through all countries that are decentralized | ``` any_decentralized_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_diplomatic\_catalyst | Iterate through all diplomatic catalysts in the recent memory of a country | ``` any_diplomatic_catalyst = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | diplomatic\_catalyst |
| any\_diplomatic\_play | Iterate through all diplomatic plays globally | ``` any_diplomatic_play = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | diplomatic\_play |
| any\_diplomatically\_relevant\_country | Iterate through all diplomatically relevant countries of a country scope | ``` any_diplomatically_relevant_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_direct\_subject | Any country directly below current in hierarchy | ``` any_direct_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_enemy\_in\_diplo\_play | Iterate through all enemies of scope country in all diplomatic plays (includes wars) | ``` any_enemy_in_diplo_play = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_enemy\_in\_war | Iterate through all enemies of scope country in all wars | ``` any_enemy_in_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` any_harvest_condition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state, state\_region, strategic\_region | harvest\_condition |
| any\_in\_global\_list | Iterate through all items in global list. | ``` any_in_global_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_hierarchy | Any country in current hierarchy, including current | ``` any_in_hierarchy = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_in\_list | Iterate through all items in list. | ``` any_in_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_local\_list | Iterate through all items in local list. | ``` any_in_local_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_influenced\_interest\_group | Iterate through all interest groups influenced by a political movement | ``` any_influenced_interest_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | political\_movement | interest\_group |
| any\_interest\_group | Iterate through all interest groups in a country | ``` any_interest_group = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | interest\_group |
| any\_law | Iterate through all laws in a country | ``` any_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | law |
| any\_lobby\_member | Iterate through all interest group members of a lobby | ``` any_lobby_member = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | political\_lobby | interest\_group |
| any\_market | Iterate through all markets globally | ``` any_market = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | market |
| any\_market\_goods | Iterate through all active (market) goods in a market | ``` any_market_goods = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market | market\_goods |
| any\_member | Iterate through all interest group members of a party | ``` any_member = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | party | interest\_group |
| any\_military\_formation | Iterate through all military formations currently present at input scope | ``` any_military_formation = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, hq | military\_formation |
| any\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` any_neighbouring_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state, state\_region, strategic\_region | state |
| any\_overlord\_or\_above | Any country above current in hierarchy | ``` any_overlord_or_above = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_participant | Any of two participants of the diplomatic pact in a scope | ``` any_participant = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_pact | country |
| any\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` any_political_lobby = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, interest\_group | political\_lobby |
| any\_political\_movement | Iterate through all political movements in a country | ``` any_political_movement = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | political\_movement |
| any\_possible\_amendment\_type | Iterate through amendment types that could be added to the scoped law | ``` any_possible_amendment_type = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | law | amendment\_type |
| any\_potential\_party | Iterate through all potential political parties in a country | ``` any_potential_party = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | party |
| any\_power\_bloc | Iterate through all power blocs | ``` any_power_bloc = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | power\_bloc |
| any\_power\_bloc\_member | Iterate through all members of the scoped power bloc including the leader | ``` any_power_bloc_member = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | power\_bloc | country |
| any\_preferred\_law | Iterate through all active and possible laws in an interest group's country, ordered by how much they prefer that law | ``` any_preferred_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | interest\_group | law |
| any\_primary\_culture | Primary cultures of the scoped country or country definition | ``` any_primary_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, country\_definition | culture |
| any\_province | Iterate through all Provinces in the scoped State | ``` any_province = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state | province |
| any\_province\_in\_<georegion\_short\_name> | Iterate through all provinces in the specified geographic region | ``` any_province_in_<georegion_short_name> = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | province |
| any\_rival\_country | Any country that is being rivaled by the country in a scope | ``` any_rival_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_rivaling\_country | Any country that is rivaling the country in a scope | ``` any_rivaling_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` any_scope_admiral = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_ally | Iterate through all allies to a: country | ``` any_scope_ally = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_scope\_amendment | Iterate through amendments of the scoped law | ``` any_scope_amendment = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | law | amendment |
| any\_scope\_article | Iterate through articles of the scoped treaty | ``` any_scope_article = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty | treaty\_article |
| any\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` any_scope_article_option = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty, treaty\_options | treaty\_article\_options |
| any\_scope\_building | Iterate through all buildings in a: state, country | ``` any_scope_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state | building |
| any\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` any_scope_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, strategic region) | ``` any_scope_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market, state\_region, strategic\_region | country |
| any\_scope\_culture | Iterate through all cultures in the scope | ``` any_scope_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state | culture |
| any\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` any_scope_diplomatic_pact = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | diplomatic\_pact |
| any\_scope\_front | Iterate through all Fronts related to the scoped War | ``` any_scope_front = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | front |
| any\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` any_scope_general = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` any_scope_held_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | interest\_marker |
| any\_scope\_initiator\_ally | Iterate through all allies to an initiator in a: diplomatic play | ``` any_scope_initiator_ally = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_play | country |
| any\_scope\_interest\_marker | Iterate through all interest markers in a: country, strategic region | ``` any_scope_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state\_region, strategic\_region | interest\_marker |
| any\_scope\_je\_involved | Iterate through all involved in a journal entry | ``` any_scope_je_involved = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | journal\_entry | country |
| any\_scope\_play\_involved | Iterate through all involved in a: diplomatic play | ``` any_scope_play_involved = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_play | country |
| any\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` any_scope_politician = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` any_scope_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, culture, interest\_group, state | pop |
| any\_scope\_regional\_hqs | Iterate through regional HQs of the scoped company | ``` any_scope_regional_hqs = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | company | building |
| any\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` any_scope_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, state\_region, strategic\_region, theater | state |
| any\_scope\_target\_ally | Iterate through all allies to a target in a: diplomatic play | ``` any_scope_target_ally = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_play | country |
| any\_scope\_theater | Iterate through all theaters in a: country | ``` any_scope_theater = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | theater |
| any\_scope\_treaty | Iterate through in force treaties binding the scoped country | ``` any_scope_treaty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | treaty |
| any\_scope\_violate\_sovereignty\_interested\_parties | Iterate through all countries that would be interested if country in scope has their sovereignty violated | ``` any_scope_violate_sovereignty_interested_parties = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_scope\_violate\_sovereignty\_wars | Iterate through all relevant wars if target country had their sovereignty violated by scoped country | ``` any_scope_violate_sovereignty_wars = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | war |
| any\_scope\_war | Iterate through all wars related to the scope | ``` any_scope_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | war |
| any\_sea\_node\_adjacent\_state | Iterate through all states that share a sea node with a state | ``` any_sea_node_adjacent_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state | state |
| any\_state | Iterate through all states globally | ``` any_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | state |
| any\_state\_in\_<georegion\_short\_name> | Iterate through all states in the specified geographic region | ``` any_state_in_<georegion_short_name> = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | state |
| any\_state\_region | Iterate through all state regions | ``` any_state_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | state\_region |
| any\_state\_region\_in\_<georegion\_short\_name> | Iterate through all state regions in the specified geographic region | ``` any_state_region_in_<georegion_short_name> = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | state\_region |
| any\_strategic\_objective | Iterate through all Strategic Objective states from the scoped Country | ``` any_strategic_objective = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | state |
| any\_strategic\_region\_in\_<georegion\_short\_name> | Iterate through all strategic regions in the specified geographic region | ``` any_strategic_region_in_<georegion_short_name> = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | strategic\_region |
| any\_subject\_of\_subject | Any country below direct subjects in hierarchy | ``` any_subject_of_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_subject\_or\_below | Any country below current in hierarchy | ``` any_subject_or_below = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_supporting\_character | Iterate through all characters that support the scoped political movement | ``` any_supporting_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | political\_movement | character |
| any\_treaty | Iterate through treaties (both in force and drafts) | ``` any_treaty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | treaty |
| any\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` any_valid_mass_migration_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_war\_participant | Iterate through all participants in a war | ``` any_war_participant = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | country |

Trigger iterators all start with `any_` and return true if any scope meets the contained triggers. This behavior can be changed with the parameter `count op int value` or `percent op value [0-1]` when then requires at least the specified number or percent of the scope to meet the contained triggers. These use the usual [comparison operators](./Trigger.md#Comparison_triggers).

If `count` or `percent` are used, another parameter `filter` can be used to limit which scopes are considered.

When negated, trigger iterators behave like `count = all` is set by default, such that it returns true if no scope meets the contained triggers; actually setting `count = all`, however, inverts the behavior back to returning true if any scope does not meet the contained triggers.

### Effect iterators
*See also: [Effect](./Effect.md)*

List of iterator effects

| Effect | Description | Example | Scopes | Targets |
| every\_active\_law | Iterate through all active laws in a country | ``` every_active_law = {   limit = { <triggers> } #optional   <effects> } ``` | country | law |
| every\_active\_party | Iterate through all active political parties in a country | ``` every_active_party = {   limit = { <triggers> } #optional   <effects> } ``` | country | party |
| every\_character | Iterate through all characters globally | ``` every_character = {   limit = { <triggers> } #optional   <effects> } ``` | none | character |
| every\_character\_in\_exile\_pool | Iterate through characters in the exile pool | ``` every_character_in_exile_pool = {   limit = { <triggers> } #optional   <effects> } ``` | none | character |
| every\_character\_in\_void | Iterate through characters in the void | ``` every_character_in_void = {   limit = { <triggers> } #optional   <effects> } ``` | none | character |
| every\_civil\_war | Iterate through all civil wars related to the scoped country | ``` every_civil_war = {   limit = { <triggers> } #optional   <effects> } ``` | country | civil\_war |
| every\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` every_cobelligerent_in_diplo_play = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` every_cobelligerent_in_war = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_combat\_unit | Iterate through all combat units of input scope | ``` every_combat_unit = {   limit = { <triggers> } #optional   <effects> } ``` | battle, building, front, hq, military\_formation | new\_combat\_unit |
| every\_company | Iterate through all companies in a country | ``` every_company = {   limit = { <triggers> } #optional   <effects> } ``` | country | company |
| every\_country | Iterate through all countries globally | ``` every_country = {   limit = { <triggers> } #optional   <effects> } ``` | none | country |
| every\_country\_in\_<georegion\_short\_name> | Iterate through all countries in the specified geographic region | ``` every_country_in_<georegion_short_name> = {   limit = { <triggers> } #optional   <effects> } ``` | none | country |
| every\_decentralized\_country | Iterate through all countries that are decentralized | ``` every_decentralized_country = {   limit = { <triggers> } #optional   <effects> } ``` | none | country |
| every\_diplomatic\_catalyst | Iterate through all diplomatic catalysts in the recent memory of a country | ``` every_diplomatic_catalyst = {   limit = { <triggers> } #optional   <effects> } ``` | country | diplomatic\_catalyst |
| every\_diplomatic\_play | Iterate through all diplomatic plays globally | ``` every_diplomatic_play = {   limit = { <triggers> } #optional   <effects> } ``` | none | diplomatic\_play |
| every\_diplomatically\_relevant\_country | Iterate through all diplomatically relevant countries of a country scope | ``` every_diplomatically_relevant_country = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_direct\_subject | Any country directly below current in hierarchy | ``` every_direct_subject = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_enemy\_in\_diplo\_play | Iterate through all enemies of scope country in all diplomatic plays (includes wars) | ``` every_enemy_in_diplo_play = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_enemy\_in\_war | Iterate through all enemies of scope country in all wars | ``` every_enemy_in_war = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` every_harvest_condition = {   limit = { <triggers> } #optional   <effects> } ``` | country, state, state\_region, strategic\_region | harvest\_condition |
| every\_in\_global\_list | Iterate through all items in global list. | ``` every_in_global_list = {   list = name or variable = name   limit = { <triggers> } (optional)   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| every\_in\_hierarchy | Any country in current hierarchy, including current | ``` every_in_hierarchy = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_in\_list | Iterate through all items in list. | ``` every_in_list = {   list = name or variable = name   limit = { <triggers> } (optional)   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| every\_in\_local\_list | Iterate through all items in local list. | ``` every_in_local_list = {   list = name or variable = name   limit = { <triggers> } (optional)   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| every\_influenced\_interest\_group | Iterate through all interest groups influenced by a political movement | ``` every_influenced_interest_group = {   limit = { <triggers> } #optional   <effects> } ``` | political\_movement | interest\_group |
| every\_interest\_group | Iterate through all interest groups in a country | ``` every_interest_group = {   limit = { <triggers> } #optional   <effects> } ``` | country | interest\_group |
| every\_law | Iterate through all laws in a country | ``` every_law = {   limit = { <triggers> } #optional   <effects> } ``` | country | law |
| every\_lobby\_member | Iterate through all interest group members of a lobby | ``` every_lobby_member = {   limit = { <triggers> } #optional   <effects> } ``` | political\_lobby | interest\_group |
| every\_market | Iterate through all markets globally | ``` every_market = {   limit = { <triggers> } #optional   <effects> } ``` | none | market |
| every\_market\_goods | Iterate through all active (market) goods in a market | ``` every_market_goods = {   limit = { <triggers> } #optional   <effects> } ``` | market | market\_goods |
| every\_member | Iterate through all interest group members of a party | ``` every_member = {   limit = { <triggers> } #optional   <effects> } ``` | party | interest\_group |
| every\_military\_formation | Iterate through all military formations currently present at input scope | ``` every_military_formation = {   limit = { <triggers> } #optional   <effects> } ``` | country, front, hq | military\_formation |
| every\_neighbouring\_state | Iterate through all states neighbouring current scope Note British spelling | ``` every_neighbouring_state = {   limit = { <triggers> } #optional   <effects> } ``` | country, state, state\_region, strategic\_region | state |
| every\_overlord\_or\_above | Any country above current in hierarchy | ``` every_overlord_or_above = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_participant | Any of two participants of the diplomatic pact in a scope | ``` every_participant = {   limit = { <triggers> } #optional   <effects> } ``` | diplomatic\_pact | country |
| every\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` every_political_lobby = {   limit = { <triggers> } #optional   <effects> } ``` | country, interest\_group | political\_lobby |
| every\_political\_movement | Iterate through all political movements in a country | ``` every_political_movement = {   limit = { <triggers> } #optional   <effects> } ``` | country | political\_movement |
| every\_possible\_amendment\_type | Iterate through amendment types that could be added to the scoped law | ``` every_possible_amendment_type = {   limit = { <triggers> } #optional   <effects> } ``` | law | amendment\_type |
| every\_potential\_party | Iterate through all potential political parties in a country | ``` every_potential_party = {   limit = { <triggers> } #optional   <effects> } ``` | country | party |
| every\_power\_bloc | Iterate through all power blocs | ``` every_power_bloc = {   limit = { <triggers> } #optional   <effects> } ``` | none | power\_bloc |
| every\_power\_bloc\_member | Iterate through all members of the scoped power bloc including the leader | ``` every_power_bloc_member = {   limit = { <triggers> } #optional   <effects> } ``` | power\_bloc | country |
| every\_preferred\_law | Iterate through all active and possible laws in an interest group's country, ordered by how much they prefer that law | ``` every_preferred_law = {   limit = { <triggers> } #optional   <effects> } ``` | interest\_group | law |
| every\_primary\_culture | Primary cultures of the scoped country or country definition | ``` every_primary_culture = {   limit = { <triggers> } #optional   <effects> } ``` | country, country\_definition | culture |
| every\_province | Iterate through all Provinces in the scoped State | ``` every_province = {   limit = { <triggers> } #optional   <effects> } ``` | province | state |
| every\_province\_in\_<georegion\_short\_name> | Iterate through all Provinces in the specified geographic region | ``` every_province_in_<georegion_short_name> = {   limit = { <triggers> } #optional   <effects> } ``` | none | province |
| every\_rival\_country | Any country that is being rivaled by the country in a scope | ``` every_rival_country = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_rivaling\_country | Any country that is rivaling the country in a scope | ``` every_rivaling_country = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` every_scope_admiral = {   limit = { <triggers> } #optional   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| every\_scope\_ally | Iterate through all allies to a: country | ``` every_scope_ally = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_scope\_amendment | Iterate through amendments of the scoped law | ``` every_scope_amendment = {   limit = { <triggers> } #optional   <effects> } ``` | law | amendment |
| every\_scope\_article | Iterate through articles of the scoped treaty | ``` every_scope_article = {   limit = { <triggers> } #optional   <effects> } ``` | treaty | treaty\_article |
| every\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` every_scope_article_option = {   limit = { <triggers> } #optional   <effects> } ``` | treaty, treaty\_options | treaty\_article\_options |
| every\_scope\_building | Iterate through all buildings in a: state, country | ``` every_scope_building = {   limit = { <triggers> } #optional   <effects> } ``` | country, state | building |
| every\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` every_scope_character = {   limit = { <triggers> } #optional   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| every\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, state\_region, strategic region) | ``` every_scope_country = {   limit = { <triggers> } #optional   <effects> } ``` | market, state\_region, strategic\_region | country |
| every\_scope\_culture | Iterate through all cultures in the scope | ``` every_scope_culture = {   limit = { <triggers> } #optional   <effects> } ``` | country, state | culture |
| every\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` every_scope_diplomatic_pact = {   limit = { <triggers> } #optional   <effects> } ``` | country | diplomatic\_pact |
| every\_scope\_front | Iterate through all Fronts related to the scoped War | ``` every_scope_front = {   limit = { <triggers> } #optional   <effects> } ``` | war | front |
| every\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` every_scope_general = {   limit = { <triggers> } #optional   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| every\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` every_scope_held_interest_marker = {   limit = { <triggers> } #optional   <effects> } ``` | country | interest\_marker |
| every\_scope\_initiator\_ally | Iterate through all allies to an initiator in a: diplomatic play | ``` every_scope_initiator_ally = {   limit = { <triggers> } #optional   <effects> } ``` | diplomatic\_play | country |
| every\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` every_scope_interest_marker = {   limit = { <triggers> } #optional   <effects> } ``` | country, state\_region, strategic\_region | interest\_marker |
| every\_scope\_je\_involved | Iterate through all involved in a journal entry | ``` every_scope_je_involved = {   limit = { <triggers> } #optional   <effects> } ``` | journal\_entry | country |
| every\_scope\_play\_involved | Iterate through all involved in a: diplomatic play | ``` every_scope_play_involved = {   limit = { <triggers> } #optional   <effects> } ``` | diplomatic\_play | country |
| every\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` every_scope_politician = {   limit = { <triggers> } #optional   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| every\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` every_scope_pop = {   limit = { <triggers> } #optional   <effects> } ``` | country, culture, interest\_group, state | pop |
| every\_scope\_regional\_hqs | Iterate through regional HQs of the scoped company | ``` every_scope_regional_hqs = {   limit = { <triggers> } #optional   <effects> } ``` | company | building |
| every\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` every_scope_state = {   limit = { <triggers> } #optional   <effects> } ``` | country, front, state\_region, strategic\_region, theater | state |
| every\_scope\_target\_ally | Iterate through all allies to a target in a: diplomatic play | ``` every_scope_target_ally = {   limit = { <triggers> } #optional   <effects> } ``` | diplomatic\_play | country |
| every\_scope\_theater | Iterate through all theaters in a: country | ``` every_scope_theater = {   limit = { <triggers> } #optional   <effects> } ``` | country | theater |
| every\_scope\_treaty | Iterate through in force treaties binding the scoped country | ``` every_scope_treaty = {   limit = { <triggers> } #optional   <effects> } ``` | country | treaty |
| every\_scope\_violate\_sovereignty\_interested\_parties | Iterate through all countries that would be interested if country in scope has their sovereignty violated | ``` every_scope_violate_sovereignty_interested_parties = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_scope\_violate\_sovereignty\_wars | Iterate through all relevant wars if target country had their sovereignty violated by scoped country | ``` every_scope_violate_sovereignty_wars = {   limit = { <triggers> } #optional   <effects> } ``` | country | war |
| every\_scope\_war | Iterate through all wars related to the scope | ``` every_scope_war = {   limit = { <triggers> } #optional   <effects> } ``` | country | war |
| every\_sea\_node\_adjacent\_state | Iterate through all states that share a sea node with a state | ``` every_sea_node_adjacent_state = {   limit = { <triggers> } #optional   <effects> } ``` | state | state |
| every\_state | Iterate through all states globally | ``` every_state = {   limit = { <triggers> } #optional   <effects> } ``` | none | state |
| every\_state\_in\_<georegion\_short\_name> | Iterate through all states in the specified geographic region | ``` every_state_in_<georegion_short_name> = {   limit = { <triggers> } #optional   <effects> } ``` | none | state |
| every\_state\_region | Iterate through all state regions | ``` every_state_region = {   limit = { <triggers> } #optional   <effects> } ``` | none | state\_region |
| every\_state\_region\_<georegion\_short\_name> | Iterate through all state regions in the specified geographic region | ``` every_state_region_<georegion_short_name> = {   limit = { <triggers> } #optional   <effects> } ``` | none | state\_region |
| every\_strategic\_objective | Iterate through all Strategic Objective states from the scoped Country | ``` every_strategic_objective = {   limit = { <triggers> } #optional   <effects> } ``` | country | state |
| every\_strategic\_region\_in\_<georegion\_short\_name> | Iterate through all strategic regions in the specified geographic region | ``` every_strategic_region_in_<georegion_short_name> = {   limit = { <triggers> } #optional   <effects> } ``` | none | strategic\_region |
| every\_subject\_of\_subject | Any country below direct subjects in hierarchy | ``` every_subject_of_subject = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_subject\_or\_below | Any country below current in hierarchy | ``` every_subject_or_below = {   limit = { <triggers> } #optional   <effects> } ``` | country | country |
| every\_supporting\_character | Iterate through all characters that support the scoped political movement | ``` every_supporting_character = {   limit = { <triggers> } #optional   <effects> } ``` | political\_movement | character |
| every\_treaty | Iterate through treaties (both in force and drafts) | ``` every_treaty = {   limit = { <triggers> } #optional   <effects> } ``` | none | treaty |
| every\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` every_valid_mass_migration_culture = {   limit = { <triggers> } #optional   <effects> } ``` | country | culture |
| every\_war\_participant | Iterate through all participants in a war | ``` every_war_participant = { limit = { <triggers> } <effects> } ``` | war | country |
| ordered\_active\_law | Iterate through all active laws in a country | ``` ordered_active_law = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | law |
| ordered\_active\_party | Iterate through all active political parties in a country | ``` ordered_active_party = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | party |
| ordered\_character | Iterate through all characters globally | ``` ordered_character = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | character |
| ordered\_character\_in\_exile\_pool | Iterate through characters in the exile pool | ``` ordered_character_in_exile_pool = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | character |
| ordered\_character\_in\_void | Iterate through characters in the void | ``` ordered_character_in_void = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | character |
| ordered\_civil\_war | Iterate through all civil wars related to the scoped country | ``` ordered_civil_war = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | civil\_war |
| ordered\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` ordered_cobelligerent_in_diplo_play = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` ordered_cobelligerent_in_war = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_combat\_unit | Iterate through all combat units of input scope | ``` ordered_combat_unit = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | battle, building, front, hq, military\_formation | new\_combat\_unit |
| ordered\_company | Iterate through all companies in a country | ``` ordered_company = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | company |
| ordered\_country | Iterate through all countries globally | ``` ordered_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | country |
| ordered\_country\_in\_<georegion\_short\_name> | Iterate through all countries in the specified geographic region | ``` ordered_country_in_<georegion_short_name> = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | country |
| ordered\_decentralized\_country | Iterate through all countries that are decentralized | ``` ordered_decentralized_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | country |
| ordered\_diplomatic\_catalyst | Iterate through all diplomatic catalysts in the recent memory of a country | ``` ordered_diplomatic_catalyst = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | diplomatic\_catalyst |
| ordered\_diplomatic\_play | Iterate through all diplomatic plays globally | ``` ordered_diplomatic_play = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | diplomatic\_play |
| ordered\_diplomatically\_relevant\_country | Iterate through all diplomatically relevant countries of a country scope | ``` ordered_diplomatically_relevant_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_direct\_subject | Any country directly below current in hierarchy | ``` ordered_direct_subject = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_enemy\_in\_diplo\_play | Iterate through all enemies of scope country in all diplomatic plays (includes wars) | ``` ordered_enemy_in_diplo_play = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_enemy\_in\_war | Iterate through all enemies of scope country in all wars | ``` ordered_enemy_in_war = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` ordered_harvest_condition = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, state, state\_region, strategic\_region | harvest\_condition |
| ordered\_in\_global\_list | Iterate through all items in global list. list = name or variable = name | ``` ordered_in_global_list	= {   list = name or variable = name   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; minimum value of ordering comparison to consider   max = script_value #optional, default inf; maximum value of ordering comparison to consider   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| ordered\_in\_hierarchy | Any country in current hierarchy, including current | ``` ordered_in_hierarchy = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_in\_list | Iterate through all items in list. | ``` ordered_in_list	= {   list = name or variable = name   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; minimum value of ordering comparison to consider   max = script_value #optional, default inf; maximum value of ordering comparison to consider   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| ordered\_in\_local\_list | Iterate through all items in local list. list = name or variable = name | ``` ordered_in_local_list	= {   list = name or variable = name   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; minimum value of ordering comparison to consider   max = script_value #optional, default inf; maximum value of ordering comparison to consider   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| ordered\_influenced\_interest\_group | Iterate through all interest groups influenced by a political movement | ``` ordered_influenced_interest_group = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | political\_movement | interest\_group |
| ordered\_interest\_group | Iterate through all interest groups in a country | ``` ordered_interest_group = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | interest\_group |
| ordered\_law | Iterate through all laws in a country | ``` ordered_law = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | law |
| ordered\_lobby\_member | Iterate through all interest group members of a lobby | ``` ordered_lobby_member = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | political\_lobby | interest\_group |
| ordered\_market | Iterate through all markets globally | ``` ordered_market = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | market |
| ordered\_market\_goods | Iterate through all active (market) goods in a market | ``` ordered_market_goods = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | market | market\_goods |
| ordered\_member | Iterate through all interest group members of a party | ``` ordered_member = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | party | interest\_group |
| ordered\_military\_formation | Iterate through all military formations currently present at input scope | ``` ordered_military_formation = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, front, hq | military\_formation |
| ordered\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` ordered_neighbouring_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, state, state\_region, strategic\_region | state |
| ordered\_overlord\_or\_above | Any country above current in hierarchy | ``` ordered_overlord_or_above = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_participant | Any of two participants of the diplomatic pact in a scope | ``` ordered_participant = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | diplomatic\_pact | country |
| ordered\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` ordered_political_lobby = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, interest\_group | political\_lobby |
| ordered\_political\_movement | Iterate through all political movements in a country | ``` ordered_political_movement = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | political\_movement |
| ordered\_possible\_amendment\_type | Iterate through amendment types that could be added to the scoped law | ``` ordered_possible_amendment_type = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | law | amendment\_type |
| ordered\_potential\_party | Iterate through all potential political parties in a country | ``` ordered_potential_party = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | party |
| ordered\_power\_bloc | Iterate through all power blocs | ``` ordered_power_bloc = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | power\_bloc |
| ordered\_power\_bloc\_member | Iterate through all members of the scoped power bloc including the leader | ``` ordered_power_bloc_member = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | power\_bloc | country |
| ordered\_preferred\_law | Iterate through all active and possible laws in an interest group's country, ordered by how much they prefer that law | ``` ordered_preferred_law = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | interest\_group | law |
| ordered\_primary\_culture | Primary cultures of the scoped country or country definition | ``` ordered_primary_culture = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, country\_definition | culture |
| ordered\_province | Iterate through all Provinces in the scoped State | ``` ordered_province = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state | province |
| ordered\_province\_in\_<georegion\_short\_name> | Iterate through all Provinces in the specified geographic region | ``` ordered_province_in_<georegion_short_name> = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | province |
| ordered\_rival\_country | Any country that is being rivaled by the country in a scope | ``` ordered_rival_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_rivaling\_country | Any country that is rivaling the country in a scope | ``` ordered_rivaling_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` ordered_scope_admiral = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| ordered\_scope\_ally | Iterate through all allies to a: country | ``` ordered_scope_ally = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_scope\_amendment | Iterate through amendments of the scoped law | ``` ordered_scope_amendment = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | law | amendment |
| ordered\_scope\_article | Iterate through articles of the scoped treaty | ``` ordered_scope_article = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | treaty | treaty\_article |
| ordered\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` ordered_scope_article_option = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | treaty, treaty\_options | treaty\_article\_options |
| ordered\_scope\_building | Iterate through all buildings in a: state, country | ``` ordered_scope_building = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, state | building |
| ordered\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` ordered_scope_character = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| ordered\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, state\_region, strategic region) | ``` ordered_scope_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | market, state\_region, strategic\_region | country |
| ordered\_scope\_culture | Iterate through all cultures in the scope | ``` ordered_scope_culture = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, state | culture |
| ordered\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` ordered_scope_diplomatic_pact = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | diplomatic\_pact |
| ordered\_scope\_front | Iterate through all Fronts related to the scoped War | ``` ordered_scope_front = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | war | front |
| ordered\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` ordered_scope_general = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| ordered\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` ordered_scope_held_interest_marker = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | interest\_marker |
| ordered\_scope\_initiator\_ally | Iterate through all allies to an initiator in a: diplomatic play | ``` ordered_scope_initiator_ally = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | diplomatic\_play | country |
| ordered\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` ordered_scope_interest_marker = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, state\_region, strategic\_region | interest\_marker |
| ordered\_scope\_je\_involved | Iterate through all involved in a journal entry | ``` ordered_scope_je_involved = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | journal\_entry | country |
| ordered\_scope\_play\_involved | Iterate through all involved in a: diplomatic play | ``` ordered_scope_play_involved = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | diplomatic\_play | country |
| ordered\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` ordered_scope_politician = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| ordered\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` ordered_scope_pop = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, culture, interest\_group, state | pop |
| ordered\_scope\_regional\_hqs | Iterate through regional HQs of the scoped company | ``` ordered_scope_regional_hqs = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | company | building |
| ordered\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` ordered_scope_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country, front, state\_region, strategic\_region, theater | state |
| ordered\_scope\_target\_ally | Iterate through all allies to a target in a: diplomatic play | ``` ordered_scope_target_ally = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | diplomatic\_play | country |
| ordered\_scope\_theater | Iterate through all theaters in a: country | ``` ordered_scope_theater = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | theater |
| ordered\_scope\_treaty | Iterate through in force treaties binding the scoped country | ``` ordered_scope_treaty = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | treaty |
| ordered\_scope\_violate\_sovereignty\_interested\_parties | Iterate through all countries that would be interested if country in scope has their sovereignty violated | ``` ordered_scope_violate_sovereignty_interested_parties = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_scope\_violate\_sovereignty\_wars | Iterate through all relevant wars if target country had their sovereignty violated by scoped country | ``` ordered_scope_violate_sovereignty_wars = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | war |
| ordered\_scope\_war | Iterate through all wars related to the scope | ``` ordered_scope_war = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | war |
| ordered\_sea\_node\_adjacent\_state | Iterate through all states that share a sea node with a state | ``` ordered_sea_node_adjacent_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state | state |
| ordered\_state | Iterate through all states globally | ``` ordered_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | state |
| ordered\_state\_in\_<georegion\_short\_name> | Iterate through all states in the specified geographic region | ``` ordered_state_in_<georegion_short_name> = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | state |
| ordered\_state\_region | Iterate through all state regions | ``` ordered_state_region = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | state\_region |
| ordered\_state\_region\_in\_<georegion\_short\_name> | Iterate through all state regions in the specified geographic region | ``` ordered_state_region_in_<georegion_short_name> = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | state\_region |
| ordered\_strategic\_objective | Iterate through all Strategic Objective states from the scoped Country | ``` ordered_strategic_objective = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | state |
| ordered\_strategic\_region\_in\_<georegion\_short\_name> | Iterate through all strategic regions in the specified geographic region | ``` ordered_state_region_in_<georegion_short_name> = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | strategic\_region |
| ordered\_subject\_of\_subject | Any country below direct subjects in hierarchy | ``` ordered_subject_of_subject = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_subject\_or\_below | Any country below current in hierarchy | ``` ordered_subject_or_below = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | country |
| ordered\_supporting\_character | Iterate through all characters that support the scoped political movement | ``` ordered_supporting_character = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | political\_movement | character |
| ordered\_treaty | Iterate through treaties (both in force and drafts) | ``` ordered_treaty = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | none | treaty |
| ordered\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` ordered_valid_mass_migration_culture = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country | culture |
| ordered\_war\_participant | Iterate through all participants in a war | ``` ordered_war_participant = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | war | country |
| random\_active\_law | Iterate through all active laws in a country | ``` random_active_law = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | law |
| random\_active\_party | Iterate through all active political parties in a country | ``` random_active_party = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | party |
| random\_character | Iterate through all characters globally | ``` random_character = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | character |
| random\_character\_in\_exile\_pool | Iterate through characters in the exile pool | ``` random_character_in_exile_pool = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | character |
| random\_character\_in\_void | Iterate through characters in the void | ``` random_character_in_void = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | character |
| random\_civil\_war | Iterate through all civil wars related to the scoped country | ``` random_civil_war = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | civil\_war |
| random\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` random_cobelligerent_in_diplo_play = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` random_cobelligerent_in_war = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_combat\_unit | Iterate through all combat units of input scope | ``` random_combat_unit = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | battle, building, front, hq, military\_formation | new\_combat\_unit |
| random\_company | Iterate through all companies in a country | ``` random_company = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | company |
| random\_country | Iterate through all countries globally | ``` random_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | country |
| random\_country\_in\_<georegion\_short\_name> | Iterate through all countries in the specified geographic region | ``` random_country_in_<georegion_short_name> = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | country |
| random\_decentralized\_country | Iterate through all countries that are decentralized | ``` random_decentralized_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | country |
| random\_diplomatic\_catalyst | Iterate through all diplomatic catalysts in the recent memory of a country | ``` random_diplomatic_catalyst = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | diplomatic\_catalyst |
| random\_diplomatic\_play | Iterate through all diplomatic plays globally | ``` random_diplomatic_play = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | diplomatic\_play |
| random\_diplomatically\_relevant\_country | Iterate through all diplomatically relevant countries of a country scope | ``` random_diplomatically_relevant_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_direct\_subject | Any country directly below current in hierarchy | ``` random_direct_subject = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_enemy\_in\_diplo\_play | Iterate through all enemies of scope country in all diplomatic plays (includes wars) | ``` random_enemy_in_diplo_play = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_enemy\_in\_war | Iterate through all enemies of scope country in all wars | ``` random_enemy_in_war = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` random_harvest_condition = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, state, state\_region, strategic\_region | harvest\_condition |
| random\_in\_global\_list | Iterate through all items in global list. | ``` random_in_global_list = {   list = name or variable = name   limit = { <triggers> } (optional)   weight = { mtth } (optional)   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| random\_in\_hierarchy | Any country in current hierarchy, including current | ``` random_in_hierarchy = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_in\_list | Iterate through all items in list. | ``` random_in_list = {   list = name or variable = name   limit = { <triggers> } (optional)   weight = { mtth } (optional)   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| random\_in\_local\_list | Iterate through all items in local list. | ``` random_in_local_list = {   list = name or variable = name   limit = { <triggers> } (optional)   weight = { mtth } (optional)   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| random\_influenced\_interest\_group | Iterate through all interest groups influenced by a political movement | ``` random_influenced_interest_group = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | political\_movement | interest\_group |
| random\_interest\_group | Iterate through all interest groups in a country | ``` random_interest_group = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | interest\_group |
| random\_law | Iterate through all laws in a country | ``` random_law = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | law |
| random\_lobby\_member | Iterate through all interest group members of a lobby | ``` random_lobby_member = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | political\_lobby | interest\_group |
| random\_market | Iterate through all markets globally | ``` random_market = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | market |
| random\_market\_goods | Iterate through all active (market) goods in a market | ``` random_market_goods = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | market | market\_goods |
| random\_member | Iterate through all interest group members of a party | ``` random_member = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | party | interest\_group |
| random\_military\_formation | Iterate through all military formations currently present at input scope | ``` random_military_formation = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, front, hq | military\_formation |
| random\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` random_neighbouring_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, state, state\_region, strategic\_region | state |
| random\_overlord\_or\_above | Any country above current in hierarchy | ``` random_overlord_or_above = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_participant | Any of two participants of the diplomatic pact in a scope | ``` random_participant = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | diplomatic\_pact | country |
| random\_political\_lobby | Iterate through all political lobbies in a country or interest group | ``` random_political_lobby = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, interest\_group | political\_lobby |
| random\_political\_movement | Iterate through all political movements in a country | ``` random_political_movement = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | political\_movement |
| random\_possible\_amendment\_type | Iterate through amendment types that could be added to the scoped law | ``` random_possible_amendment_type = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | law | amendment\_type |
| random\_potential\_party | Iterate through all potential political parties in a country | ``` random_potential_party = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | party |
| random\_power\_bloc | Iterate through all power blocs | ``` random_power_bloc = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | power\_bloc |
| random\_power\_bloc\_member | Iterate through all members of the scoped power bloc including the leader | ``` random_power_bloc_member = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | power\_bloc | country |
| random\_preferred\_law | Iterate through all active and possible laws in an interest group's country, ordered by how much they prefer that law | ``` random_preferred_law = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | interest\_group | law |
| random\_primary\_culture | Primary cultures of the scoped country or country definition | ``` random_primary_culture = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, country\_definition | culture |
| random\_province | Iterate through all Provinces in the scoped State | ``` random_province = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state | province |
| random\_province\_in\_<georegion\_short\_name> | Iterate through all Provinces in the specified geographic region | ``` random_province_in_<georegion_short_name>' = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | province |
| random\_rival\_country | Any country that is being rivaled by the country in a scope | ``` random_rival_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_rivaling\_country | Any country that is rivaling the country in a scope | ``` random_rivaling_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_scope\_admiral | Iterate through all admirals in a: country, interest group, or military formation | ``` random_scope_admiral = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| random\_scope\_ally | Iterate through all allies to a: country | ``` random_scope_ally = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_scope\_amendment | Iterate through amendments of the scoped law | ``` random_scope_amendment = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | law | amendment |
| random\_scope\_article | Iterate through articles of the scoped treaty | ``` random_scope_article = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | treaty | treaty\_article |
| random\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` random_scope_article_option = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | treaty, treaty\_options | treaty\_article\_options |
| random\_scope\_building | Iterate through all buildings in a: state, country | ``` random_scope_building = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, state | building |
| random\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` random_scope_character = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| random\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, state\_region, strategic region) | ``` random_scope_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | market, state\_region, strategic\_region | country |
| random\_scope\_culture | Iterate through all cultures in the scope | ``` random_scope_culture = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, state | culture |
| random\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` random_scope_diplomatic_pact = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | diplomatic\_pact |
| random\_scope\_front | Iterate through all Fronts related to the scoped War | ``` random_scope_front = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | war | front |
| random\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` random_scope_general = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| random\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` random_scope_held_interest_marker = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | interest\_marker |
| random\_scope\_initiator\_ally | Iterate through all allies to an initiator in a: diplomatic play | ``` random_scope_initiator_ally = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | diplomatic\_play | country |
| random\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` random_scope_interest_marker = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, state\_region, strategic\_region | interest\_marker |
| random\_scope\_je\_involved | Iterate through all involved in a journal entry | ``` random_scope_je_involved = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | journal\_entry | country |
| random\_scope\_play\_involved | Iterate through all involved in a: diplomatic play | ``` random_scope_play_involved = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | diplomatic\_play | country |
| random\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` random_scope_politician = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, front, interest\_group, military\_formation | character |
| random\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` random_scope_pop = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, culture, interest\_group, state | pop |
| random\_scope\_regional\_hqs | Iterate through regional HQs of the scoped company | ``` random_scope_regional_hqs = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | company | building |
| random\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` random_scope_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country, front, state\_region, strategic\_region, theater | state |
| random\_scope\_target\_ally | Iterate through all allies to a target in a: diplomatic play | ``` random_scope_target_ally = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | diplomatic\_play | country |
| random\_scope\_theater | Iterate through all theaters in a: country | ``` random_scope_theater = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | theater |
| random\_scope\_treaty | Iterate through in force treaties binding the scoped country | ``` random_scope_treaty = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | treaty |
| random\_scope\_violate\_sovereignty\_interested\_parties | Iterate through all countries that would be interested if country in scope has their sovereignty violated | ``` random_scope_violate_sovereignty_interested_parties = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_scope\_violate\_sovereignty\_wars | Iterate through all relevant wars if target country had their sovereignty violated by scoped country | ``` random_scope_violate_sovereignty_wars = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | war |
| random\_scope\_war | Iterate through all wars related to the scope | ``` random_scope_war = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | war |
| random\_sea\_node\_adjacent\_state | Iterate through all states that share a sea node with a state | ``` random_sea_node_adjacent_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state | state |
| random\_state | Iterate through all states globally | ``` random_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | state |
| random\_state\_in\_<georegion\_short\_name> | Iterate through all states in the specified geographic region | ``` random_state_in_<georegion_short_name> = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | state |
| random\_state\_region | Iterate through all state regions | ``` random_state_region = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | state\_region |
| random\_state\_region\_in\_<georegion\_short\_name> | Iterate through all state regions in the specified geographic region | ``` random_state_region_in_<georegion_short_name> = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | state\_region |
| random\_strategic\_objective | Iterate through all Strategic Objective states from the scoped Country | ``` random_strategic_objective = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | state |
| random\_strategic\_region\_in\_<georegion\_short\_name> | Iterate through all strategic regions in the specified geographic region | ``` random_strategic_region_in_<georegion_short_name> = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | strategic\_region |
| random\_subject\_or\_below | Any country below current in hierarchy | ``` random_subject_or_below = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | country |
| random\_supporting\_character | Iterate through all characters that support the scoped political movement | ``` random_supporting_character = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | political\_movement | character |
| random\_treaty | Iterate through treaties (both in force and drafts) | ``` random_treaty = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | none | treaty |
| random\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` random_valid_mass_migration_culture = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country | culture |
| random\_war\_participant | Iterate through all participants in a war | ``` random_war_participant = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | war | country |

Effect iterators begin with `every_`, `ordered_`, and `random_`. `every_` iterators apply their effects to all returned scopes, `ordered_` iterators order their returned scopes by a value comparison and apply their effects to the first in the ordering, and `random_` iterators apply their effects to a single random returned scope.

All three can use the parameter `limit` to apply triggers that limit which scopes are returned. If the limit triggers are specific enough, such that they return only a single scope, all three types of iterator are effectively identical.

`ordered_` iterators can return a scope besides the first by using the parameter `position = int` which is 0-indexed. Additionally, the parameters `min = int` and `max = value` can be used to limit how many and which scopes are returned in the ordering. `min` sets the "top" position, using the same 0-indexing as `position`, while `max` determines the number of scopes to return, from the floored value given. If not specified, `min = 0` and `max = 1`. Setting `min` without setting `max` considers `max` as equal to the iterator's list size. Use `check_range_bounds = no` to prevent error logging when using min or max, otherwise using a min or max higher than the list size gives and error.

`random_` iterators can weight the returned scopes so that certain scopes are more likely to be selected. This uses `weight = { <mtth blocks> }`. Without a modified weighting, all returned scopes are equally weighted.

#### Multiple random scopes
Often it is useful to return multiple random or semi-random scopes. This can be implemented in a few different ways. The most straightforward is multiple uses of a `random_` iterator. To ensure that the same scope is not returned twice, set a variable on each scope as part of its effects and check that the variable has not been set in order to return the next scope.

```
random_country = {
    limit = {
        NOT = { has_variable = blocker_var }
        <other limit triggers>
    }
    set_variable = blocker_var
    <effects>
}
<repeat above as desired>
```

This style can be made more succinct by using a [scripted effect](./Macro.md) or a [while](./Effect.md#while) loop, so that the actual effect only needs to be defined once.

An alternative approach uses a single `ordered_` iterator with a semi-random ordering. This ensures each returned scope is unique without having to check for variables, as well as keeping the amount of script used to a minimum. It makes use of the [script value](./Script value.md) function `modulo` to give a semi-random ordering.

```
ordered_country = {
    limit = { } # if desired
    order_by = {
        value = gdp
        modulo = { 1 10 }
    }
    max = 10
    <effects>
}
```

This example returns 10 countries which are ordered by a randomized modulo of GDP. The `modulo` range can be set to any values desired and can also used `fixed_range` or `integer_range` in order to make use of other scripted values, and other values can be used as the basis, such as total population, prestige, or any typically unique value set.

## Event targets
*Main article: [Event target](./Event target.md)*

List of contextual scope event targets

| Event target | Description | From scope | To scope |
| active\_law | Scope to the scoped country's active law in the named law group (active\_law:lawgroup\_trade\_policy) | country | law |
| ai\_army\_comparison | Scope to comparative army strength between two countries (example: value = ai\_army\_comparison:root) | country | value |
| ai\_colonization\_value | Scope to target country AI desire to colonize a strategic region (example: value = ai\_colonization\_value:root) | strategic\_region | value |
| ai\_gdp\_comparison | Scope to comparative GDP between two countries (example: value = ai\_army\_comparison:root) | country | value |
| ai\_ideological\_opinion | Scope to AI ideological opinion of scope country on target country (example: value = ai\_ideological\_opinion:root) | country | value |
| ai\_navy\_comparison | Scope to comparative navy strength between two countries (example: value = ai\_navy\_comparison:root) | country | value |
| ai\_state\_value | Scope to target country AI desire to own scope state (example: value = ai\_state\_value:root) | state | value |
| ai\_subject\_value | Scope to AI desire of target country to have scope country as a subject (example: value = ai\_subject\_value:root) | country | value |
| ai\_transit\_rights\_value | Scope to AI desire of to have transit rights through target country (example: value = ai\_transit\_rights\_value:root) | country | value |
| ai\_treaty\_export\_value | Scope to target country AI desire to export scoped market good (example: value = ai\_market\_export\_value:root) | market\_goods | value |
| ai\_treaty\_fairness | Scope to AI evaluation of how fair (to both sides) it considers existing treaty articles with the target country to be (example: value = ai\_treaty\_fairness\_score:root) | country | value |
| ai\_treaty\_import\_value | Scope to target country AI desire to import scoped market good through treaties (example: value = ai\_market\_import\_value:root) | market\_goods | value |
| ai\_treaty\_port\_value | Scope to target country AI desire to have a treaty port in scope state (example: value = ai\_treaty\_port\_value:root) | state | value |
| ai\_treaty\_trade\_value | Scope to target country AI desire to import and export scoped market good (example: value = ai\_market\_trade\_value:root) | market\_goods | value |
| ai\_treaty\_value | Scope to AI evaluation of how favorable to itself it considers existing treaty articles with the target country to be (example: value = ai\_treaty\_value:root) | country | value |
| amended\_treaty | Scope to the treaty the scoped treaty is amending | treaty, treaty\_options | treaty |
| army\_size | Number of battalions of scope country, excluding currently raised conscripts. | country | value |
| army\_size\_including\_conscripts | Number of battalions of scope country, including currently raised conscripts. | country | value |
| army\_size\_including\_raised\_conscripts | Number of battalions of scope country, including currently raised conscripts but excluding unraised conscripts. | country | value |
| attached\_law | Links from an amendment scope to the law the amendment is attached to | amendment | law |
| attacker\_side | Scope from a battle to the BattleSide corresponding to the attacker | battle | battle\_side |
| attacker\_warleader | Scope to the attacker warleader of a war | war | country |
| average\_defense | Returns the average defense of units on Front on the same side as Country | front | value |
| average\_expected\_sol | Get the average expected Standard of Living of the scope | country, state | value |
| average\_offense | Returns the average offense of units on Front on the same side as Country | front | value |
| average\_progressiveness | Get the average progressiveness of the scoped character or interest group | character, interest\_group | value |
| average\_sol | Get the average Standard of Living of the scope | country, state | value |
| b | Scope to the building of specified key in the state, example: b:building\_port | state | building |
| base\_price | Get the base price of the scoped good | goods | value |
| battle | Scope from a battle side to the battle itself | battle\_side | battle |
| binding\_period | Get the original binding period in days when the treaty was signed for the scoped treaty | treaty, treaty\_options | value |
| building | Scope to the related building | new\_combat\_unit | building |
| building\_levels | Get the total number of non-subsistence building levels of the scoped country | country | value |
| cached\_ai\_coastal\_population | Scope to total coastal population recorded in AI spending variables (example: value = cached\_ai\_coastal\_population) | country | value |
| cached\_ai\_incorporated\_coastal\_population | Scope to total incorporated coastal population recorded in AI spending variables (example: value = cached\_ai\_incorporated\_coastal\_population) | country | value |
| cached\_ai\_incorporated\_population | Scope to total incorporated population recorded in AI spending variables (example: value = cached\_ai\_incorporated\_population) | country | value |
| cached\_ai\_overseas\_subject\_population | Scope to total population in direct non-adjacent subjects recorded in AI spending variables (example: value = cached\_ai\_overseas\_subject\_population) | country | value |
| cached\_ai\_subject\_population | Scope to total population in direct subjects recorded in AI spending variables (example: value = cached\_ai\_subject\_population) | country | value |
| cached\_ai\_total\_population | Scope to total population recorded in AI spending variables (example: value = cached\_ai\_total\_population) | country | value |
| cached\_ai\_unincorporated\_coastal\_population | Scope to total unincorporated coastal population recorded in AI spending variables (example: value = cached\_ai\_unincorporated\_coastal\_population) | country | value |
| cached\_ai\_unincorporated\_population | Scope to total unincorporated population recorded in AI spending variables (example: value = cached\_ai\_unincorporated\_population) | country | value |
| capital | Scope to the capital state of a country | country | state |
| civil\_war | Scope to the civil war started by the scoped (revolutionary) political movement. | political\_movement | civil\_war |
| civil\_war\_origin\_country | Scope to the origin country of a civil war country | country | country |
| colonial\_growth\_per\_colony | Scope to the country's colonial growth per colony value (example: colonial\_growth\_per\_colony > 0) | country | value |
| combat\_width | Scope to combat width multiplier of scope province | province | value |
| command\_limit\_num\_units | Get the baseline number of units from their military formation a commander would normally get, depending on their command limit | character | value |
| commander | Scope from a military formation to its commander character | military\_formation | character |
| commander\_military\_formation | Scope to the Military Formation of a Character. | character | military\_formation |
| company | Scope to the scoped country's company of the named company type (company:company\_rheinmetall) | country | company |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | varies | value |
| compare\_value | A comparison trigger that will return its value in the context it is used eg: root.gold | varies | value |
| controller | Scope to the controller of the object | province, state | country |
| country | Scope to the country of a military formation or ship | military\_formation, ship | country |
| country\_definition | Scope to country's definition | country | country\_definition |
| credit | Scope to the current amount of max credit the country can take | country | value |
| culture | Scope to pop's or character's culture | character, new\_combat\_unit, political\_movement, pop | culture |
| current\_hq | Returns the current HQ of the scoped military formation (may not be valid if the formation is not currently stationed in an HQ) | military\_formation | hq |
| currently\_active\_law\_in\_group | Scope from a law to the currently active law in that group | law | law |
| currently\_enacting\_law | Scope from a country to the law that they're currently enacting | country | law |
| decree\_cost | Scope to a state's cost for a certain decree authority > decree\_cost:decree\_road\_maintaintenance | state | value |
| defender\_side | Scope from a battle to the BattleSide corresponding to the defender | battle | battle\_side |
| defender\_warleader | Scope to the defender warleader of a war | war | country |
| defense | Returns the unit's defense rating (including impact from their commander) | new\_combat\_unit | value |
| demoralized | Returns the unit's number of demoralized manpower | new\_combat\_unit | value |
| detection | Links from a fleet scope to the total detection of the ships in the fleet | military\_formation | value |
| diplomatic\_pact\_expense\_ratio | Scope to the ratio of diplomatic pact expenses to income for this country, clamped 0-1 (example: value = diplomatic\_pact\_expense\_ratio) | country | value |
| diplomatic\_pact\_other\_country | Scope to the other country of the diplomatic pact in scope, example: diplomatic\_pact\_other\_country(root) | diplomatic\_pact | country |
| diplomatic\_play | Scope from a war to its diplomatic play | war | diplomatic\_play |
| enforced\_on\_country | Scope to the enforced\_on\_country of an enforced treaty | treaty | country |
| enforcer\_country | Scope to the enforcer\_country of an enforced treaty | treaty | country |
| executive | Scope from a company to its executive character | company | character |
| first\_country | Scope to the first\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | diplomatic\_pact, treaty, treaty\_article, treaty\_article\_options, treaty\_options | country |
| flagship | Get the flagship of the scoped country | country | ship |
| front | Scope to a front from various scopes  - From a battle to the front where it takes place - From a character to the front where they are at or travelling towards - From a military formation to the front it is currently at - From a province to the front that contains it - From an invasion to the invasion front | battle, character, invasion, military\_formation, province | front |
| front\_length | Returns the number of provinces in Front | front | value |
| gdp | Get the scoped country's yearly predicted GDP | country, state | value |
| get\_ruler\_for | Scopes from country to a character that would be ruler, under the given transfer of power type  - get\_ruler\_for:parliamentary\_elective = { effects... } | country | character |
| goal\_value | Scope to the journal entry's goal value | journal\_entry | value |
| goods | Scope to the goods traded by a trade route | market\_goods, state\_goods | goods |
| government\_size | Get the scoped country's current number of Parties & independent IGs in government | country | value |
| group | Scope from a building object or type to its group | building, building\_type | building\_group |
| heir | Scope to the heir of a country | country | character |
| home\_country | Scopes to the home country of an exile | character, pop | country |
| home\_hq | Returns the home HQ of the scoped military formation | military\_formation | hq |
| ideology | Dual use  1. Scope to a ideology from its name (ideology:ideology\_anarchist) 2. Scope to the ideology of the scoped character | character, none | ideology |
| ig | Scope to the interest group of specified key belonging to the country, example: ig:ig\_armed\_forces | country, political\_movement | interest\_group |
| imposed\_law | Scope from a country to the law currently imposed on them (enacting or not) | country | law |
| imposer\_of\_law | Scope from a country to the country currently imposing a law on them | country, law | country |
| income | Get the current weekly income of the scoped country | country | value |
| income\_transfer\_expenses | Scope to the amount of money scope country is transferring to other countries via treaties & pacts (example:income\_transfer\_expenses >= 100) | country | value |
| income\_transfer\_relative\_expenses | Scope to the fraction of their income country is transferring to other countries via treaties & pacts (example:income\_transfer\_relative\_expenses >= 0.2) | country | value |
| infamy | Scope to infamy of scope country (example: infamy >= 2) | country | value |
| initiator | Scope to the initiator of the object | diplomatic\_play | country |
| input\_building\_type | Scope to the building type input in a treaty article | treaty\_article, treaty\_article\_options | building\_type |
| input\_company | Scope to the company input in a treaty article | treaty\_article, treaty\_article\_options | company |
| input\_country | Scope to the country input in a treaty article | treaty\_article, treaty\_article\_options | country |
| input\_goods | Scope to the goods input in a treaty article | treaty\_article, treaty\_article\_options | goods |
| input\_law | Scope to the law input in a treaty article | treaty\_article, treaty\_article\_options | law\_type |
| input\_market\_goods | Scope to the market goods input in a treaty article (example: input\_market\_goods:root) | treaty\_article, treaty\_article\_options | market\_goods |
| input\_quantity | Scope to the quantity input in a treaty article | treaty\_article, treaty\_article\_options | value |
| input\_ship | Scope to the ship input in a treaty article | treaty\_article, treaty\_article\_options | ship |
| input\_state | Scope to the state input in a treaty article | treaty\_article, treaty\_article\_options | state |
| input\_strategic\_region | Scope to the strategic region input in a treaty article | treaty\_article, treaty\_article\_options | strategic\_region |
| institution | Scope to a country's institution from its name (institution:institution\_health\_system) | country | institution |
| interest\_group | Scope to the interest group of the character! | character | interest\_group |
| interest\_group\_type | Scope to the type of the scoped character's interest group | character | interest\_group\_type |
| invasion | Returns the invasion of the scoped front if any | front | invasion |
| invasion\_attacker | If used in an invasion scope, scope to the country executing the invasion. | invasion | country |
| invasion\_defender | If used in an invasion scope, scope to the country the attacked state is controlled by. | invasion | country |
| investment | Scope to current investment level in an institution (example: investment < investment\_max) | institution | value |
| investment\_max | Scope to the country's current maximum investment level in an institution (example: investment < investment\_max) | institution | value |
| investment\_pool\_income | Get the current weekly investment pool income of the scoped country | country | value |
| is\_setup | Scope to true/false if gamestate is being initialized! | none | boolean |
| je | Scope to the journal entry of specified key belonging to the country, example: je:je\_antarctica | country | journal\_entry |
| je\_tutorial | Scope to the active tutorial lesson's journal entry (do not use this outside tutorial) | none | journal\_entry |
| land\_controller\_hq | Returns the province or state controller land HQ | province, state | hq |
| land\_hq | Returns the province or state owner local land HQ | province, state | hq |
| largest\_exporting\_market | Scope to the largest exporting market for the scope market good to the local market | market\_goods | market |
| largest\_importing\_market | Scope to the largest importing market for the scope market good from the local market | market\_goods | market |
| law\_type | Scope to a law type from its name (law\_type:law\_protected\_speech) or from a scoped law | law, none | law\_type |
| leader | Scope to the leader of the interest group | interest\_group | character |
| legitimacy | Scope to the current amount of legitimacy in country | country | value |
| level | Scope to the level of a building | building | value |
| level\_after\_queued\_constructions | Scope to the level of a building after all queued constructions finish | building | value |
| lobby\_foreign\_anti\_clout | Scope to the total clout of all anti-country foreign policy lobbies targeting a specific country (lobby\_foreign\_anti\_clout:root >= 0.2) | country | value |
| lobby\_foreign\_pro\_clout | Scope to the total clout of all pro-country foreign policy lobbies targeting a specific country (lobby\_foreign\_pro\_clout:root >= 0.2) | country | value |
| lobby\_in\_government\_foreign\_anti\_clout | Scope to the total clout of all anti-country foreign policy lobbies in government targeting a specific country (lobby\_in\_government\_foreign\_anti\_clout:root >= 0.2) | country | value |
| lobby\_in\_government\_foreign\_pro\_clout | Scope to the total clout of all pro-country foreign policy lobbies in government targeting a specific country (lobby\_in\_government\_foreign\_pro\_clout:root >= 0.2) | country | value |
| lobby\_join\_weight | Scope to the join weight of an interest group to a particular lobby (lobby\_join\_weight:root >= 5) | interest\_group | value |
| lobby\_war\_opposition | Scope to the total clout of all lobbies that oppose the scoped war (lobby\_war\_opposition:root >= 0.2) | country | value |
| lobby\_war\_support | Scope to the total clout of all lobbies that support the scoped war (lobby\_war\_support:root >= 0.2) | country | value |
| manpower | Returns the unit's manpower | new\_combat\_unit | value |
| market | Scope to the market of the object | building, country, market, market\_goods, province, state, state\_goods, state\_region | market |
| market\_capital | Scope to the market capital of a country | country | state |
| market\_export\_cap | Get the maximum amount of goods the market can export based on it's production of the scoped MarketGoods | market\_goods | value |
| market\_import\_cap | Get the maximum amount of goods the market can import based on it's consumption of the scoped MarketGoods | market\_goods | value |
| mass\_migration\_culture | Scope to the mass migration target culture of a state | state | culture |
| mg | Scope from a market to the MarketGoods with the specified key, (example: mg:tools) | market | market\_goods |
| migration\_pull | Get the migration pull for a state or the mass migration pull for a country. | country, state | value |
| military\_expenses | Get the current military expenses (slaves, wages and goods) of the scoped country | country | value |
| military\_expenses\_share | Get the current share of military expenses (slaves, wages and goods) relative to the total expenses of the scoped country | country | value |
| mobilization | Returns the unit's mobilization value between 0 and 1 | new\_combat\_unit | value |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | battle\_side, building, character, country, interest\_group, market, power\_bloc, state | boolean, value |
| momentum | Get the scoped party's raw momentum | party | value |
| morale | Returns the unit's morale | new\_combat\_unit | value |
| most\_desired\_law | Scope to the law type that political movement most desires to be enacted (if any). | political\_movement | law\_type |
| mutual\_trade\_value\_with\_country | Scope to the total base value of goods traded in trade routes between the two markets (example: mutual\_trade\_value\_with\_country:root >= 1000) | country | value |
| named\_script\_value | A script value that will calculate and returns its value in the context it is used | none | color, value |
| national\_awakening\_state\_region | Links from a culture scope to the state region with an active national awakening for that culture | culture | state\_region |
| naval\_combat\_power | Scope to the country's navy combat power (example: naval\_combat\_power > 100) | country | value |
| naval\_controller\_hq | Returns the province or state controller navy HQ | province | hq |
| naval\_hostility\_average\_damage\_dealt | Scope to average damage dealt by this country in naval hostilities it initiated over the lookback period. Returns -1 if no hostilities found. | country | value |
| naval\_hq | Returns the province or state owner local navy HQ | province | hq |
| naval\_vulnerability | Scope to a country's naval vulnerability score based on trade reliance and coastal GDP share, capped at a define maximum | country | value |
| navy\_size | Number of flotillas of scope country. | country | value |
| nf | Scope to a Decree of specified key applied to the state, example: nf:decree\_road\_maintaintenance | state | decree |
| num\_active\_interests | Scope to the number of active interests a country has num\_active\_interests > 5 | country | value |
| num\_active\_natural\_interests | Scope to the number of active natural interests a country has num\_active\_natural\_interests > 5 | country | value |
| num\_active\_plays | Get the current number of active Diplomatic Plays the scoped country started | country | value |
| num\_active\_ships | Get the number of active ships for a country, commander or military formation OR Get the number of active ships for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_active\_ships\_in\_battle | Get the number of active ships in battle for a country, commander or military formation OR Get the number of active ships in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_active\_ships\_not\_in\_battle | Get the number of active ships not in battle for a country, commander or military formation OR Get the number of active ships not in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_admirals | Scope to the country's number of admirals | country | value |
| num\_alliances | Get the total number of alliances of the scoped country (example: num\_alliances:root >= 2) | country | value |
| num\_alliances\_and\_defensive\_pacts\_with\_allies | Scope to the number of alliances target country has with allies of scope country (example: num\_alliances\_and\_defensive\_pacts\_with\_allies:root >= 2) | country | value |
| num\_alliances\_and\_defensive\_pacts\_with\_rivals | Scope to the number of alliances & defensive pacts target country has with rivals of scope country (example: num\_alliances\_and\_defensive\_pacts\_with\_rivals:root >= 2) | country | value |
| num\_battalions | Returns the number of active battalions under a commander | character | value |
| num\_characters | Scope to the country's number of characters | country | value |
| num\_colony\_projects | Get the scoped country's current number of incomplete / in progress colony projects | country | value |
| num\_commanderless\_units | Number of units in a MilitaryFormation which currently don't have a commander due to commanders Command Limit.  - Obs: defeated commanders do not command units, i.e., the more defeated commanders, the more commanderless units. | military\_formation | value |
| num\_commanders | Scope to the country's number of commanders | country | value |
| num\_defending\_battalions | Returns the total number of units in battle on Front on the same side as Country, example: num\_defending\_battalions(root) | front | value |
| num\_defensive\_pacts | Scope to the number of defensive pacts target country has in total (example: num\_defensive\_pacts >= 2) | country | value |
| num\_garrison\_units | Returns the number of units garrisoned in a HQ | hq | value |
| num\_generals | Scope to the country's number of generals | country | value |
| num\_income\_transfer\_pacts | Scope to the number of income-transferring (to others) pacts target country has in total (example: num\_income\_transfer\_pacts >= 2) | country | value |
| num\_income\_transfer\_treaty\_articles | Scope to the number of income-transferring (to others) treaty articles target country has in total (example: num\_income\_transfer\_treaty\_articles >= 2) | country | value |
| num\_income\_transfers | Scope to the number of income-transferring (to others) pacts and treaty articles target country has in total (example: num\_income\_transfers >= 2) | country | value |
| num\_incorporated\_states | Get the scoped country's current number of incorporated states | country | value |
| num\_interests | Scope to the number of interests a country has (including inactive) num\_interests > 5 | country | value |
| num\_mandates | Scope to the number of available mandates of the scoped power bloc (power\_bloc.num\_mandates > 0) | power\_bloc | value |
| num\_mobilized\_battalions | Returns the number of fully mobilized units under a General | character | value |
| num\_natural\_interests | Scope to the number of natural interests a country has (including inactive)  - num\_natural\_interests > 5 | country | value |
| num\_non\_destroyed\_ships | Get the number of non-destroyed ships for a country, commander or military formation OR Get the number of non-destroyed ships for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_non\_destroyed\_ships\_in\_battle | Get the number of non-destroyed ships in battle for a country, commander or military formation OR Get the number of non-destroyed ships in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_non\_destroyed\_ships\_not\_in\_battle | Get the number of non-destroyed ships not in battle for a country, commander or military formation OR Get the number of non-destroyed ships not in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_obligations\_earned | Scope from a country to the number of obligations others owe them (=which they have earned) | country | value |
| num\_pending\_events | Scope to the number of pending events in scope country, generally or for a specified category  - num\_pending\_events > 0 - num\_pending\_events:enactment > 0 | country | value |
| num\_politicians | Scope to the country's number of politicians | country | value |
| num\_positive\_relations | Get the current number of countries with positive Relation with the scoped country | country | value |
| num\_provinces | Get the scoped entity's current number of provinces | front, state, state\_region | value |
| num\_queued\_constructions | Scope to the number of queued constructions target country has in total (example: num\_queued\_constructions >= 2) | country | value |
| num\_queued\_government\_constructions | Scope to the number of queued government constructions target country has in total (example: num\_queued\_government\_constructions >= 2) | country | value |
| num\_queued\_private\_constructions | Scope to the number of queued private constructions target country has in total (example: num\_queued\_private\_constructions >= 2) | country | value |
| num\_rivals | Scope to the number of rivals target country has in total (example: num\_rivals >= 2) | country | value |
| num\_ruling\_igs | Get the scoped country's current number of IGs in government | country | value |
| num\_shared\_rivals | Scope to the number of shared rivals scope country has with target country (example: num\_shared\_rivals:root >= 2) | country | value |
| num\_ships | Get the number of ships for a country, commander or military formation OR Get the number of ships for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_ships\_in\_battle | Get the number of ships in battle for a country, commander or military formation OR Get the number of ships in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_ships\_not\_in\_battle | Get the number of ships not in battle for a country, commander or military formation OR Get the number of ships not in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_states | Get the scoped country's current number of states | country | value |
| num\_total\_battalions | Returns the total number of units on Front on the same side as Country, example: num\_total\_battalions(root) | front | value |
| num\_unincorporated\_states | Get the scoped country's current number of unincorporated states | country | value |
| num\_units | Get the number of active units for a commander or military formation Get the number of active units for military formations in the province that are allied to the specified country | character, military\_formation, province | value |
| num\_units\_in\_battle | Get the number of active units in battle for a commander or military formation Get the number of active units in battle for military formations in the province that are allied to the specified country | character, military\_formation, province | value |
| num\_units\_not\_in\_battle | Get the number of active units not in battle for a commander or military formation Get the number of active units not in battle for military formations in the province that are allied to the specified country | character, military\_formation, province | value |
| num\_units\_share | Share of units a commander has considering his command limit. Example: if the character has 30 Command Limit, the fleet has 60 total Command Limit, and the formation has 50 total flotillas, then the character should get 25 flotillas for their battle) | character | value |
| num\_world\_market\_hub\_trade\_center\_levels | Get the total number of trade center levels associated with scope world market hub state | state | value |
| offense | Returns the unit's offense rating (including impact from their commander) | new\_combat\_unit | value |
| opposing\_commander | Scope from a character in battle to the character on the other side of the battle | character | character |
| opposite\_battle\_side | Scope from a battle side to its opposite | battle\_side | battle\_side |
| overlord | Scope to the direct overlord of the country in scope | country | country |
| owner | Scope to the owner country of object | building, character, company, country, decree, institution, interest\_group, interest\_marker, journal\_entry, law, market, market\_goods, military\_formation, new\_combat\_unit, political\_movement, pop, province, state | country |
| owning\_company | Scope to the company owning the scoped country | country | company |
| parent\_law\_type | Links from an amendment scope to the law type that is considered the amendment's parent | amendment | law\_type |
| participants | Get the total number of participating countries in the scoped market | market | value |
| party | Scope to the party that an IG is supporting | interest\_group | party |
| pirated\_trade\_value\_by | Scope to the average weekly base value of goods pilfered from this country by a target country (example: pirated\_trade\_value\_by:root >= 50) | country | value |
| player\_owed\_obligation\_days\_left | Scope to number of days left on an obligation in diplomatic relations scope (example: obligation\_days\_left >= 2) | diplomatic\_relations | value |
| political\_movement | - If used in a character scope, scope to the political movement that character supports. - If used in a revolution civil war scope, scope to the movement that started the revolution. - If used in an interest group scope, scope to the group's dominant movement. | character, civil\_war | political\_movement |
| pop\_weight\_modifier\_scale | Get the Pop's weight modifier scale multiplier | pop | value |
| popularity | Get the scoped character's popularity, normally ranging between -100 and +100 | character | value |
| population\_below\_expected\_sol | Scope to the current percentage of the state's population that are below their expected standard of living (0-1) | state | value |
| power\_bloc | Scope to the power bloc for the scoped country | country | power\_bloc |
| power\_bloc\_leader | Scope to the leader country of the scoped power bloc | power\_bloc | country |
| power\_projection | Get the power projection value of the scoped formation, unit, or ship | military\_formation, new\_combat\_unit, ship | value |
| power\_struggle\_contender | Scope to the contender country if there is a power struggle | power\_bloc | country |
| prev | The previous scope | none | varies |
| principal | Get the current debt principal of the country | country | value |
| prosperity | Scope to the amount of prosperity for scope company (example: prosperity >= 2) | company | value |
| province | Scope from a battle side to the province in which the battle is being fought | battle\_side | province |
| py | Scope to the active party of specified key belonging to the country, example: py:communist\_party | country | party |
| region | Scope to the strategic region of the object! | building, diplomatic\_play, hq, interest\_marker, province, state, state\_region | strategic\_region |
| region\_state | Scope to the state owned by the target country, (example: region\_state:BIC) | state\_region | state |
| relations | Scope to relations between two countries (example: relations:root >= 2) | country | value |
| relations\_change\_rate | Scope to daily change in relations progress between two countries (example: relations\_change\_rate:root > 0) | country | value |
| religion | Scope to country or country definition's primary religion or pop religion | character, country, country\_definition, political\_movement, pop | religion |
| remaining\_binding\_period | Get the current remaining binding period in days for the scoped treaty | treaty, treaty\_options | value |
| required\_construction | Get the required amount of construction for scope building type | building\_type | value |
| root | The head of the current top scope eg: receiver of an event, taker of a decision | none | varies |
| ruler | Scope to the ruler of a country | country | character |
| scope\_relations | Scope to relations value in diplomatic relations scope (example: scope\_relations >= 2) | diplomatic\_relations | value |
| scope\_tension | Scope to tension value in diplomatic relations scope (example: scope\_tension >= 2) | diplomatic\_relations | value |
| screening | Links from a fleet scope to the total screening of the ships in the fleet | military\_formation | value |
| second\_country | Scope to the second\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | diplomatic\_pact, treaty, treaty\_article, treaty\_article\_options, treaty\_options | country |
| sg | Scope from a state to the StateGoods with the specified key, example: sg:wood | state | state\_goods |
| ship\_fleet | Links from a ship scope to the ship fleet | ship | military\_formation |
| ship\_group | Scope from a ship to its group or Scope to a ship group from its name (ship\_group:ship\_group\_capital\_ships) | none, ship | ship\_group |
| shipping\_lane | Scope to the shipping lane for the military formation, or treaty article (goods transfer) | military\_formation, treaty\_article | shipping\_lanes |
| slaves\_role | Scope from building type to its slaves role pop type | building\_type | pop\_type |
| source\_country | Scope to the source\_country of any of:  1. treaty article (for directed article types only) 2. treaty article options (for directed article types only) | treaty\_article, treaty\_article\_options | country |
| sponsor | Links from an amendment scope to the interest group that sponsored the amendment | amendment | interest\_group |
| state | Scope to the state of the object | building, market, pop, province | state |
| state\_region | Scope to the state region of a state | state | state\_region |
| target | Scope to the target of the object | diplomatic\_catalyst, diplomatic\_play, journal\_entry, political\_lobby | varies |
| target\_country | Scope to the target\_country of any of:  1. treaty article (for directed article types only) 2. treaty article options (for directed article types only) | treaty\_article, treaty\_article\_options | country |
| technology\_being\_researched | Scope to the current technology a country is researching | country | technology |
| techs\_researched | Scope to the current amount of techs researched of a country | country | value |
| tension | Scope to tension between two countries (example: tension:root >= 2) | country | value |
| theater | Scope from a BattleSide or State to its theater | battle\_side, state | theater |
| this | The current scope | none | varies |
| top\_overlord | Scope to the top overlord of the country in scope | country | country |
| total\_crew\_needed | Get the total crew needed by all ships of a country | country | value |
| total\_export\_value | Scope to the total value of scope country's exports to the world market (example: total\_export\_value >= 1000) | country | value |
| total\_import\_value | Scope to the total value of scope country's imports from the world market (example: total\_import\_value >= 1000) | country | value |
| total\_marine\_capacity | Get the total marine capacity across all fleets of a country | country | value |
| total\_pirated\_trade\_value | Scope to the total average weekly base value of goods pilfered via piracy between two countries in a diplomatic relations scope (example: total\_pirated\_trade\_value >= 100) | diplomatic\_relations | value |
| total\_trade\_value | Scope to the total value of scope country's trade with the world market (example: total\_trade\_value >= 1000) | country | value |
| trade\_center | Scope to the trade center state of the market! | market | state |
| training\_rate | Scope to the current maximum weekly training rate of a building | building | value |
| treaty | Scope to the treaty a treaty article belongs to | treaty\_article | treaty |
| treaty\_exports | Get the current number of treaty (NOT world market) exports of the good to the market of the scoped MarketGoods | market\_goods | value |
| treaty\_imports | Get the current number of treaty (NOT world market) imports of the good to the market of the scoped MarketGoods | market\_goods | value |
| type | Scope from an object to its type | amendment, building, company, diplomatic\_catalyst, diplomatic\_play, harvest\_condition\_area, institution, interest\_group, law, political\_lobby, political\_movement, ship, strait | amendment\_type, building\_type, company\_type, diplomatic\_play\_type, harvest\_condition\_type, institution\_type, interest\_group\_type, law\_type, political\_movement\_type, ship\_type, strait\_type |
| value | A numeric literal value eg: 1, 5.2, -6 | none | value |
| var | Reference a previous set variable in scope via its name eg: var:mortal\_enemy | varies | varies |
| visibility | Links from a fleet scope to the total visibility of the ships in the fleet | military\_formation | value |
| vulnerability | Links from a fleet scope to the total vulnerability of the ships in the fleet | military\_formation | value |
| war | Scope from a diplomatic play to its war | diplomatic\_play | war |
| weekly\_prosperity\_change | Scope to the weekly prosperity change for scope company (example: weekly\_prosperity\_change >= 2) | company | value |
| workplace | Scope to the workplace of a pop | pop | building |
| world\_market\_hub | Scope to the world market hub state associated with the scoped state | state | state |

List of specified scope event targets

| Event target | Description | From scope | To scope |
| active\_law | Scope to the scoped country's active law in the named law group (active\_law:lawgroup\_trade\_policy) | country | law |
| ai\_army\_comparison | Scope to comparative army strength between two countries (example: value = ai\_army\_comparison:root) | country | value |
| ai\_colonization\_value | Scope to target country AI desire to colonize a strategic region (example: value = ai\_colonization\_value:root) | strategic\_region | value |
| ai\_gdp\_comparison | Scope to comparative GDP between two countries (example: value = ai\_army\_comparison:root) | country | value |
| ai\_ideological\_opinion | Scope to AI ideological opinion of scope country on target country (example: value = ai\_ideological\_opinion:root) | country | value |
| ai\_navy\_comparison | Scope to comparative navy strength between two countries (example: value = ai\_navy\_comparison:root) | country | value |
| ai\_state\_value | Scope to target country AI desire to own scope state (example: value = ai\_state\_value:root) | state | value |
| ai\_subject\_value | Scope to AI desire of target country to have scope country as a subject (example: value = ai\_subject\_value:root) | country | value |
| ai\_transit\_rights\_value | Scope to AI desire of to have transit rights through target country (example: value = ai\_transit\_rights\_value:root) | country | value |
| ai\_treaty\_export\_value | Scope to target country AI desire to export scoped market good (example: value = ai\_market\_export\_value:root) | market\_goods | value |
| ai\_treaty\_fairness | Scope to AI evaluation of how fair (to both sides) it considers existing treaty articles with the target country to be (example: value = ai\_treaty\_fairness\_score:root) | country | value |
| ai\_treaty\_import\_value | Scope to target country AI desire to import scoped market good through treaties (example: value = ai\_market\_import\_value:root) | market\_goods | value |
| ai\_treaty\_port\_value | Scope to target country AI desire to have a treaty port in scope state (example: value = ai\_treaty\_port\_value:root) | state | value |
| ai\_treaty\_trade\_value | Scope to target country AI desire to import and export scoped market good (example: value = ai\_market\_trade\_value:root) | market\_goods | value |
| ai\_treaty\_value | Scope to AI evaluation of how favorable to itself it considers existing treaty articles with the target country to be (example: value = ai\_treaty\_value:root) | country | value |
| amendment\_type | Scope to an amendment type from its name (amendment\_type:key) | none | amendment\_type |
| array\_define | Reference the value of a numeric value in an array define: array\_define:Namespace|Name|Index. Index is 0-based. | none | value |
| average\_defense | Returns the average defense of units on Front on the same side as Country | front | value |
| average\_offense | Returns the average offense of units on Front on the same side as Country | front | value |
| b | Scope to the building of specified key in the state, example: b:building\_port | state | building |
| bg | Scope to a building group from its name (bg:bg\_logging) | none | building\_group |
| bt | Scope to a building type, example: bt:building\_tooling\_workshops | none | building\_type |
| c | Scope to the country with specified tag, example: c:GBR | none | country |
| catalyst\_type | Scope to a diplomatic catalyst type from its name (catalyst\_type:catalyst\_relations\_level\_improved) | none | diplomatic\_catalyst\_type |
| cd | Scope to the country definition with specified tag, example: cd:FRA | none | country\_definition |
| company | Scope to the scoped country's company of the named company type (company:company\_rheinmetall) | country | company |
| company\_type | Scope to a company type from its name (company\_type:company\_rheinmetall) | none | company\_type |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | varies | value |
| cu | Scope to the culture with specified key, example: cu:welsh | none | culture |
| decree\_cost | Scope to a state's cost for a certain decree authority > decree\_cost:decree\_road\_maintaintenance | state | value |
| define | Reference the value of a numeric or color define: define:Namespace|Name | none | value |
| diplomatic\_pact\_other\_country | Scope to the other country of the diplomatic pact in scope, example: diplomatic\_pact\_other\_country(root) | diplomatic\_pact | country |
| flag | A localization key, ex. flag:the\_boss | none | flag |
| g | Scope to the goods with specified key, example: g:iron | none | goods |
| get\_ruler\_for | Scopes from country to a character that would be ruler, under the given transfer of power type  - get\_ruler\_for:parliamentary\_elective = { effects... } | country | character |
| global\_productivity | Scope to global productivity values (example: global\_productivity:high\_threshold) | none | value |
| global\_var | Reference a previous set global variable via its name eg: global\_var:important\_thing | none | varies |
| harvest\_condition\_type | Scope to a harvest condition type from its name (harvest\_condition\_type:drought) | none | harvest\_condition\_type |
| i | Scope to ideology specified by key, example: i:ideology\_patriarchal | none | ideology |
| identity | Scope to the power bloc identity from its name (identity:key) | none | power\_bloc\_identity |
| ideology | Dual use  1. Scope to a ideology from its name (ideology:ideology\_anarchist) 2. Scope to the ideology of the scoped character | character, none | ideology |
| ig | Scope to the interest group of specified key belonging to the country, example: ig:ig\_armed\_forces | country, political\_movement | interest\_group |
| ig\_trait | Scope to the Interest Group trait with specified key, example: ig\_trait:ig\_trait\_xenophobia | none | interest\_group\_trait |
| ig\_type | Scope to an interest group type, example: ig\_type:ig\_landowners | none | interest\_group\_type |
| infamy\_threshold | Scope to infamy level threshold for comparison purposes (infamy\_threshold:infamous) | none | value |
| input\_market\_goods | Scope to the market goods input in a treaty article (example: input\_market\_goods:root) | treaty\_article, treaty\_article\_options | market\_goods |
| institution | Scope to a country's institution from its name (institution:institution\_health\_system) | country | institution |
| je | Scope to the journal entry of specified key belonging to the country, example: je:je\_antarctica | country | journal\_entry |
| law\_type | Scope to a law type from its name (law\_type:law\_protected\_speech) or from a scoped law | law, none | law\_type |
| lobby\_foreign\_anti\_clout | Scope to the total clout of all anti-country foreign policy lobbies targeting a specific country (lobby\_foreign\_anti\_clout:root >= 0.2) | country | value |
| lobby\_foreign\_pro\_clout | Scope to the total clout of all pro-country foreign policy lobbies targeting a specific country (lobby\_foreign\_pro\_clout:root >= 0.2) | country | value |
| lobby\_in\_government\_foreign\_anti\_clout | Scope to the total clout of all anti-country foreign policy lobbies in government targeting a specific country (lobby\_in\_government\_foreign\_anti\_clout:root >= 0.2) | country | value |
| lobby\_in\_government\_foreign\_pro\_clout | Scope to the total clout of all pro-country foreign policy lobbies in government targeting a specific country (lobby\_in\_government\_foreign\_pro\_clout:root >= 0.2) | country | value |
| lobby\_join\_weight | Scope to the join weight of an interest group to a particular lobby (lobby\_join\_weight:root >= 5) | interest\_group | value |
| lobby\_type | Scope to a political lobby type from its name (lobby\_type:lobby\_pro\_country) | none | political\_lobby\_type |
| lobby\_war\_opposition | Scope to the total clout of all lobbies that oppose the scoped war (lobby\_war\_opposition:root >= 0.2) | country | value |
| lobby\_war\_support | Scope to the total clout of all lobbies that support the scoped war (lobby\_war\_support:root >= 0.2) | country | value |
| local\_var | Reference a previous set local variable via its name eg: local\_var:person\_of\_interest | none | varies |
| mg | Scope from a market to the MarketGoods with the specified key, (example: mg:tools) | market | market\_goods |
| mobilization\_option | Scope to a mobilization option from its name (mobilization\_option:key) | none | mobilization\_option |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | battle\_side, building, character, country, interest\_group, market, power\_bloc, state | boolean, value |
| movement\_type | Scope to a political movement type from its name (movement\_type:movement\_religious\_majority) | none | political\_movement\_type |
| mutual\_trade\_value\_with\_country | Scope to the total base value of goods traded in trade routes between the two markets (example: mutual\_trade\_value\_with\_country:root >= 1000) | country | value |
| naval\_hostility\_damage | Scope to damage points inflicted by this country against another in active naval hostilities (example: naval\_hostility\_damage:root >= 50) | country | value |
| nf | Scope to a Decree of specified key applied to the state, example: nf:decree\_road\_maintaintenance | state | decree |
| num\_active\_ships | Get the number of active ships for a country, commander or military formation OR Get the number of active ships for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_active\_ships\_in\_battle | Get the number of active ships in battle for a country, commander or military formation OR Get the number of active ships in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_active\_ships\_not\_in\_battle | Get the number of active ships not in battle for a country, commander or military formation OR Get the number of active ships not in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_alliances | Get the total number of alliances of the scoped country (example: num\_alliances:root >= 2) | country | value |
| num\_alliances\_and\_defensive\_pacts\_with\_allies | Scope to the number of alliances target country has with allies of scope country (example: num\_alliances\_and\_defensive\_pacts\_with\_allies:root >= 2) | country | value |
| num\_alliances\_and\_defensive\_pacts\_with\_rivals | Scope to the number of alliances & defensive pacts target country has with rivals of scope country (example: num\_alliances\_and\_defensive\_pacts\_with\_rivals:root >= 2) | country | value |
| num\_defending\_battalions | Returns the total number of units in battle on Front on the same side as Country, example: num\_defending\_battalions(root) | front | value |
| num\_non\_destroyed\_ships | Get the number of non-destroyed ships for a country, commander or military formation OR Get the number of non-destroyed ships for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_non\_destroyed\_ships\_in\_battle | Get the number of non-destroyed ships in battle for a country, commander or military formation OR Get the number of non-destroyed ships in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_non\_destroyed\_ships\_not\_in\_battle | Get the number of non-destroyed ships not in battle for a country, commander or military formation OR Get the number of non-destroyed ships not in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_pending\_events | Scope to the number of pending events in scope country, generally or for a specified category  - num\_pending\_events > 0 - num\_pending\_events:enactment > 0 | country | value |
| num\_shared\_rivals | Scope to the number of shared rivals scope country has with target country (example: num\_shared\_rivals:root >= 2) | country | value |
| num\_ships | Get the number of ships for a country, commander or military formation OR Get the number of ships for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_ships\_in\_battle | Get the number of ships in battle for a country, commander or military formation OR Get the number of ships in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_ships\_not\_in\_battle | Get the number of ships not in battle for a country, commander or military formation OR Get the number of ships not in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province | value |
| num\_ships\_of\_group | Number of ships of the provided ship group in the scoped country or military formation | country, military\_formation | value |
| num\_total\_battalions | Returns the total number of units on Front on the same side as Country, example: num\_total\_battalions(root) | front | value |
| num\_units | Get the number of active units for a commander or military formation Get the number of active units for military formations in the province that are allied to the specified country | character, military\_formation, province | value |
| num\_units\_in\_battle | Get the number of active units in battle for a commander or military formation Get the number of active units in battle for military formations in the province that are allied to the specified country | character, military\_formation, province | value |
| num\_units\_not\_in\_battle | Get the number of active units not in battle for a commander or military formation Get the number of active units not in battle for military formations in the province that are allied to the specified country | character, military\_formation, province | value |
| p | Scope to province specified by hex key, example: p:x1A6E5B | none | province |
| pirated\_trade\_value\_by | Scope to the average weekly base value of goods pilfered from this country by a target country (example: pirated\_trade\_value\_by:root >= 50) | country | value |
| play\_type | Scope to a diplomatic play type from its name (play\_type:dp\_default\_treaty\_article) | none | diplomatic\_play\_type |
| pop\_type | Scope to a pop type from its name (pop\_type:laborers) | none | pop\_type |
| principle | Scope to the power bloc principle from its name (principle:key) | none | power\_bloc\_principle |
| principle\_group | Scope to the power bloc principle group from its name (principle\_group:key) | none | power\_bloc\_principle\_group |
| py | Scope to the active party of specified key belonging to the country, example: py:communist\_party | country | party |
| rank\_value | Scope to rank value of a particular country rank (rank\_value:great\_power) | none | value |
| region\_state | Scope to the state owned by the target country, (example: region\_state:BIC) | state\_region | state |
| rel | Scope to the religion with specified key, example: rel:catholic | none | religion |
| relations | Scope to relations between two countries (example: relations:root >= 2) | country | value |
| relations\_change\_rate | Scope to daily change in relations progress between two countries (example: relations\_change\_rate:root > 0) | country | value |
| relations\_threshold | Scope to relations threshold level for comparison purposes (relations\_threshold:warm) | none | value |
| s | Scope to state region specified by key, example: s:STATE\_UTAH | none | state\_region |
| scope | Reference a previously saved scope via its name eg: scope:target | none | varies |
| sg | Scope from a state to the StateGoods with the specified key, example: sg:wood | state | state\_goods |
| ship\_group | Scope from a ship to its group or Scope to a ship group from its name (ship\_group:ship\_group\_capital\_ships) | none, ship | ship\_group |
| ship\_type | Scope to a ship type from its name (ship\_type:ship\_type\_frigate) | none | ship\_type |
| sr | Scope to the strategic region of specified key, example: sr:region\_persia | none | strategic\_region |
| strait\_trade\_importance\_by | Scope to the trade importance of goods this country is trading through straits controlled by a target country. Accumulated value is multiplied by STRAIT\_FULL\_CONTROL\_TRADE\_IMPORTANCE\_MULT for straits where the controller controls both sides (example: strait\_trade\_importance\_by:root >= 100) | country | value |
| strait\_type | Scope to a strait type from its name (strait\_type:key) | none | strait\_type |
| tension | Scope to tension between two countries (example: tension:root >= 2) | country | value |
| tension\_threshold | Scope to tension level threshold for comparison purposes (tension\_threshold:warm) | none | value |
| unit\_type | Scope to a combat unit type from its name (unit\_type:key) | none | combat\_unit\_type |
| var | Reference a previous set variable in scope via its name eg: var:mortal\_enemy | varies | varies |

**Event targets** are scope identifiers that return a specific scope from context or specification. Event targets can be used to set the scope or as the target of an effect or trigger. When setting the scope, event targets can be used either for triggers or for effects, unlike iterators which are specified only for triggers or effects, but not both.

Scope event targets come in two types, contextual or specified;

- Contextual event targets almost always must be used in a relevant scope, as they refer to scopes relevant to the current scope, such as the capital state or ruler of a country.
- Specified event targets are often scopeless as they refer to a specific object. Some specified event targets still require a certain scope as they refer to an instance of a type, rather than a unique object.

Specified scope event targets typically use a colon `:` followed by a script key, such as a building type, country tag, or state region. A few use parentheses instead.

### Dot chains
While event targets can be used to create trigger or event blocks, i.e. `event_target = { }`, they can also be used in a "dot chain" of scopes. This allows quickly changing through scopes without having to create a new block for each scope level. Dot chains are not available for iterators.

For example, to check if any country has a capital in a certain strategic region, either of the following methods return the same result:

Without dot chaining

```
any_country = {
    capital = {
        region = sr:<region_name>
    }
}
```

With dot chaining

```
any_country = {
    capital.region = sr:<region_name>
}
```

### Scope assertion
When using event targets for scope, it is good practice to use the assertion operator `?=` which checks that the left side object exists before changing scope or testing equality. With the assertion operator, `X ?= foo` is roughly equivalent to the following script:

```
(trigger_)if = {
    limit = { exists = X }
    X = foo
}
(trigger_)else = {
    always = no
}
```

`foo` can be another object, to check equality, or a script block with further triggers or effects. If X does not exist, the game ignores everything, and for triggers returns false. Without the assertion, the game may throw errors and behave unexpectedly.

While using `X ?= foo` is best practice in most cases, when debugging, it is better *not* to use it, as then errors are thrown when the expected object does not exist.

## Common scope examples
WIP

## Scope types
|  | Please help improve this article or section by [**expanding it**](https://vic3.paradoxwikis.com/index.php?title=Scope&action=edit) with: definitions and examples. |

- battle
- battle\_side
- boolean
- building
- building\_type
- character
- civil\_war
- color
- combat\_unit\_type
- company
- company\_type
- country
- country\_definition
- culture
- decree
- diplomatic\_catalyst
- diplomatic\_catalyst\_type
- diplomatic\_catalyst
- diplomatic\_pact
- diplomatic\_play
- diplomatic\_play\_type
- diplomatic\_relations
- flag
- front
- goods
- harvest\_condition\_area
- harvest\_condition\_type
- hq
- ideology
- institution
- institution\_type
- interest\_group
- interest\_group\_trait
- interest\_group\_type
- interest\_marker
- invasion
- journal\_entry
- law
- law\_type
- market
- market\_goods
- military\_formation
- mobilization\_option
- new\_combat\_unit
- none
- party
- political\_lobby
- political\_lobby\_type
- political\_movement
- political\_movement\_type
- pop
- pop\_type
- power\_bloc
- power\_bloc\_identity
- power\_bloc\_principle
- power\_bloc\_principle\_group
- province
- religion
- shipping\_lanes
- state
- state\_goods
- state\_region
- strategic\_region
- technology
- theater
- treaty
- treaty\_article
- treaty\_article
- treaty\_article\_options
- treaty\_options
- value
- war

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • Scopes • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
