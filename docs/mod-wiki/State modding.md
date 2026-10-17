# State modding

[States](https://vic3.paradoxwikis.com/States), or more properly state regions, are defined parts of the game map which contain pops and buildings, and are the primary layer for interactions on the map. State regions are defined in map\_data/state\_regions.

## Example state region
State regions are defined as a list of 'provinces', along with several characteristics.

```
STATE_SVEALAND = {
    id = 1
    subsistence_building = "building_subsistence_pastures"
    provinces = { "x0974E5" "x216569" "x24A2F1" "x298E7B" "x317138" "x36F523" "x3844C0" "x3E2C22" "x404643" "x41C729" "x432E07" "x45B6EF" "x4628A5" "x4836F2" "x4B02EB" "x4C9918" "x4FA424" "x604060" "x62D0D4" "x656512" "x6CF949" "x6E95C2" "x6F40EC" "x823263" "x8AC21D" "x90845E" "x93C3BC" "x93C76C" "x9686A5" "x9BBBE3" "xA001A0" "xA08021" "xA6C31B" "xA82FF7" "xA86C50" "xA9078A" "xB3F1FB" "xB90566" "xB9391F" "xBC0288" "xC0C0E0" "xC480A5" "xC8AEAF" "xCBFD28" "xCF16B1" "xD155CE" "xD702F7" "xD96FB9" "xE6C5FC" "xE7A6D6" "xE9B084" "xEA6A0F" "xEB5D5F" "xEFA14D" "xF08323" "xF48646" "xF8E400" "xFCCAFA" }
    traits = { "state_trait_bergslagen" "state_trait_scandinavian_forests" "state_trait_natural_harbors" }
    city = "x9686A5"
    port = "x93C3BC"
    farm = "xF48646"
    mine = "x6F40EC"
    wood = "x4C9918"
    arable_land = 30
    arable_resources = { "bg_rye_farms" "bg_livestock_ranches" }
    capped_resources = {
        bg_iron_mining = 36
        bg_lead_mining = 18
        bg_logging = 23
        bg_fishing = 11
    }
    resource = {
        type = "bg_oil_extraction"
        undiscovered_amount = 5
    }
    naval_exit_id = 3000
}
```

## Base characteristics
Each state region is defined with its unique script name and unique ID number. The script name also acts as a [localization](./Localization.md) key.

All state regions must contain one or more 'provinces' tiles from the `provinces.png` map image. Provinces are defined by the six-digit [hex color](http://en.wikipedia.org/wiki/Web_colors#Hex_triplet "wikipedia:Web colors") in that image, each prefixed by the letter `x` and optionally enclosed in double quotes.

Naval state regions (which define [sea nodes](./Naval warfare.md#Sea_nodes)) contain precisely these characteristics and no more.

Example naval state region:

```
STATE_BALTIC_SEA = {
    id = 3000
    provinces = { "x08FAFA" }
}
```

## Additional characteristics
Land regions have a number of other characteristics.

### Impassable and prime land
States can have a list of impassable and prime land provinces. Both are relevant for split states as they affect the proportion of resources allocated to each state. Impassable provinces are not counted for the split state proportion and additionally block military fronts from forming. Prime land provinces give five times the weight for the split state proportion[[1]](#cite_note-1).

Both lists should only include provinces defined for the state region and should not include provinces from each other.

Example:

```
    provinces = { "x029E85" "x04BB3B" "x1C7417" "x2A3D46" "x42973E" "x4408AB" "x445D59" "x477680" "x4DD36E" "x56FE77" "x60FDC2" "x638173" "x6D4CDF" "x706E00" "x71D428" "x76E306" "x7FFBF0" "x8A69A7" "x939612" "x9910E9" "xA5A916" "xA67A6E" "xA6D36E" "xA91194" "xAD54BC" "xB7B05B" "xBC374E" "xC29C28" "xCF4105" "xD735DB" "xE02CB6" "xE3C4F2" "xF37396" "xF8375D" "xF9BDCB" "xFCFD83" "xFF8539" "xFFE074" }
    impassable = { "xA5A916" "xBC374E" "x04BB3B" "x9910E9" "xCF4105" "x477680" "x56FE77" }
    prime_land = { "xE02CB6" "x60FDC2" "x42973E" }
```

### Hubs
Hubs are defined provinces that represent a city within the state region. Visually, each type of hub appears and grows based on the number of buildings related to its type in the state region. Most hubs have no game mechanic interaction aside from updating the road/rail network by their presence or absence; port hubs define the location of  treaty ports.

| Hub | Buildings |
| City | Everything not included in other hubs |
| Farm | All agriculture and plantations |
| Mine | All mines and oil rigs |
| Port | - Shipyards and Military Shipyards - Fishing and Whaling Industries - Ports and Naval Bases |
| Wood | Logging Camps |

Hubs can overlap, such that the same province is two or more hubs, and not every state region has every type of hub, notably inland states have no port hub.
Each hub is defined by listing the province which is used for that hub.

### State traits
Some state regions have a defined [state trait](https://vic3.paradoxwikis.com/State_trait). These are listed in a block `traits` with each trait listed in quotes with its script name. State traits are defined in common/state\_traits.

A state trait is defined with a unique script name – which also acts as a localization key, an icon, and typically a modifier. State traits can also have a disabling technology, which suppresses its modifier or a technology required for colonization, which prevents colonization of state regions with the trait until that technology is researched.

Example state trait:

```
state_trait_severe_malaria = {
    icon = "gfx/interface/icons/state_trait_icons/severe_malaria.dds"
	
	required_techs_for_colonization = { "quinine" }
	disabling_technologies = { "malaria_prevention" }
	
	modifier = {
		state_non_homeland_colony_growth_speed_mult = -0.95
		state_non_homeland_mortality_mult = 0.25
	}
}
```

Effects can also add or remove state traits to state regions during gameplay.

### Resources
Resources in a state region come in a few types: arable land and resources, capped resources, and individual resources. In all cases, the resources are defined as [buildings](./Building modding.md) and many of the resource characteristics are defined by the building's characteristics.

#### Arable land
Arable land is defined simply as an integer, along with a list of buildings that use arable land in the state region.

Example:

```
    arable_land = 30
    arable_resources = { "building_rye_farm" "building_livestock_ranch" }
```

Unutilized arable land is always taken up by a subsistence building, which is defined for each state region as the specific type of building, for example `subsistence_building = "building_subsistence_pastures"`.

The amount of arable land available can be changed by effect during gampeplay.

#### Capped resources
Capped resources are a block of buildings with a maximum level defined for each. These resources are always visible from the start of the game.

Example:

```
    capped_resources = {
        building_iron_mine = 36
        building_lead_mine = 18
        building_logging_camp = 23
        building_fishing_wharf = 11
    }
```

The amount or presence of a capped resource in a state region can be changed during gameplay.

#### Individual resources
Individual resources are similar to capped resources, but each one is defined in its own block. Most often these are used for discoverable resources, which are not immediately visible in game, and instead are revealed periodically once the state's owner has the required technology researched. Additionally, if a building is set as depletable, this block can define which building replaces it when it is depleted.

Example:

```
    resource = {
        type = "building_gold_field"
        depleted_type = "building_gold_mine"
        undiscovered_amount = 12
    }
    resource = {
        type = "building_rubber_plantation"
        discovered_amount = 10
        undiscovered_amount = 6
    }
    resource = {
        type = "building_oil_rig"
        undiscovered_amount = 5
    }
```

### Naval exit
Coastal state regions should have a `naval_exit_id`, which is simply the state region ID of a sea region. This defines which sea region/sea node is adjacent to this state region, for the purposes of shipping lanes and naval invasions.

## State history
*See also: [New state modding](https://vic3.paradoxwikis.com/New_state_modding)*

Starting state ownership is defined in common/history/states. Unmodified Victoria 3 puts all state history in the file `00_states.txt`, but it can be split into separate files for mods.

State history files use a block `STATES` which includes a number of state regions.

```
STATES = {
	s:STATE_LOWER_EGYPT = {
		create_state = {
			country = c:EGY
			owned_provinces = { x409060 x2050A0 x7ABE4B x50D0E0 x5011E0 x48E2A5 x6F13AD xD050E0 xF47AAA xA0D020 xC09060 xC37990 }
		}
		
		add_homeland = cu:misri
	}
    s:STATE_IONIAN_ISLANDS = {
		create_state = {
			country = c:ION
			owned_provinces = { x4B79CA x405060 }
		}	
		# Homelands and claims are defined on the state region, not for individual states
		add_homeland = cu:greek
		add_claim = c:GRE
	}
    s:STATE_BALUCHISTAN = {
		create_state = {
			country = c:OMA
			owned_provinces = { "xB7B2BD" }
		}
		create_state = {
			country = c:KAL
			owned_provinces = { "x0279A0" "x0BAF8C" "x1161D9" "x1D0224" "x2B7441" "x35754E" "x3C9B5F" "x43F4B8" "x4529BD" "x4B2EAD" "x4DC3FF" "x4F800F" "x556C63" "x56CF62" "x5CBA3C" "x61D696" "x626396" "x62BEAA"  "x6D6D6B" "x782112" "x7D60E7" "x8DC922" "x954C12" "x97C017" "xA3655B" "xB2AAA7" "xBAE3D2" "xBB836E" "xC6D9E8" "xCD77FD" "xD4EC50" "xD6DD8A" "xDEE571" "xDF30A0"  "xE7A309" "xE92A58" "xEC696F" "xF78D0D"  "x1EF53E" }
		}
		create_state = {
			country = c:MAK
			owned_provinces = { "x978421" "x4E09C5" "xF9577D" "x45F2DD" "x113E0B" "x7FE584" "xC070E0" "xC6E602" "xB0F79E" "x407060" "x951063" "x8ED831" "x2E7961" "xE87BBF" "x968562" "x675BCE" "x2FF46D" }
		}
		create_state = {
			country = c:KAN
			owned_provinces = { "xE712E1" "xF1414C" "x17D8AB" "x3EFD1E" "x109CC0" "x4070E0" "x9EED5C" "xA55509" "xD575B0" }
		}
		
		add_homeland = cu:baluchi
		add_homeland = cu:pashtun
	}
}
```

State regions are called with `s:<state region name>` and can be given homelands and country claims. Each state region must have at least one state created from it.

Each created state is defined from a state region with the effect `create_state`, which requires the owning country and a list of provinces. The list of provinces can be part or all of the state region. The state can also be defined with a `state_type`, states are incorporated by default, but can be defined as `unincorporated`. Note that a country's capital state is automatically and immediately incorporated, regardless of the state history.

Countries that start the game with  Colonial Affairs also start with colonies in every owned state region that also contains a neighboring decentralized nation. These initial colonies ignore colonial claims.

The states defined in common/history/states are referenced in common/history/buildings and common/history/pops, so take care to update all relevant files when changing the starting setup.

## State script documentation
The following [effects](./Effect.md), [event targets](./Event target.md), and [triggers](./Trigger.md) can be used in either state or state region scope. A few can be used in either scope.

### State scope
List of state effects

| Effect | Description | Example | Targets |
| activate\_building | Activate a building in a state | ``` activate_building = { building = building_key } ``` |  |
| activate\_production\_method | Activates the named production method for buildings of a certain type in country/state | ``` activate_production_method = {   building_type = building_key   production_method = production_method_key } ``` |  |
| add\_acceptance | Adds an acceptance delta for a culture in a state | ``` add_acceptance = { culture = cu:romanian value = -10 } ``` |  |
| add\_cultural\_community | Adds a cultural community for the target culture in the scoped state. | ``` scope:some_state = { add_cultural_community = cu:zulu } ``` | culture |
| add\_culture\_standard\_of\_living\_modifier | Apply a standard of living modifier in the scoped state for the given culture. Other than the required culture argument, this effect has the same syntax as add\_modifier. | ``` add_culture_standard_of_living_modifier = {   culture = culture_scope   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } ``` |  |
| add\_loyalists\_in\_state | Adds loyalists to pops in the scoped state. All parameters except value are optional. | ``` value is the percentage of each pop that will move towards loyalism. if interest_group is specified pops gain loyalists based on their ig membership. pop type and strata are mutually exclusive. add_radicals_in_state = {   value = 0.2   interest_group = <scope/ig:key>   pop_type = <scope/pop_type:key>   strata = <key>   culture = <scope/cu:key>   religion = <scope/rel:key> } ``` |  |
| add\_modifier | Adds a timed modifier effect to object in scope | ``` add_modifier = {   name = static_modifier_name   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } add_modifier = static_modifier_name #set as permanent modifier with no multiplier or decay ``` |  |
| add\_radicals\_in\_state | Adds radicals to pops in the scoped state. All parameters except value are optional. | ``` value is the percentage of each pop that will move towards radicalism. if interest_group is specified pops gain radicals based on their ig membership. pop type and strata are mutually exclusive. add_radicals_in_state = {   value = 0.2   interest_group = <scope/ig:key>   pop_type = <scope/pop_type:key>   strata = <key>   culture = <scope/cu:key>   religion = <scope/rel:key> } ``` |  |
| add\_religion\_standard\_of\_living\_modifier | Apply a standard of living modifier in the scoped state for the given religion. Other than the required religion argument, this effect has the same syntax as add\_modifier. | ``` add_religion_standard_of_living_modifier = {   religion = religion_scope   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } ``` |  |
| cede\_treaty\_port | Cedes a treaty port in scope state to target country | ``` cede_treaty_port = scope/country ``` | country |
| convert\_population | Changes X% of the different religion population to the specified religion. | ``` convert_population = { target = rel:catholic value = 0.5 } ``` |  |
| create\_building | Creates a building in the scoped state. Supported values are: | ```  building = <building>  activate_production_methods = { <production_methods> }  subsidized = yes/no  reserves = [0..1] (percentage of cash reserves the building should be created with)  add_ownership = { (mutually exclusive with level)   country = { (give ownership levels to a specific country)    country = s:GBR (country script target)    levels = 5   }   country = { (give ownership levels to a specific building)    type = building_financial_district (building type that will get ownership levels, should be self or other ownership type)    region = STATE_SINAI (region where owning building is placed)    country = s:GBR (country script target for a region)    levels = 3   }  }  level = arable_land/integer(mutually exclusive with add_ownership)  If level is arable_land, the building will be of the necessary level to exhaust all available arable land in the state. If level is an integer, the building will be of that level  Please note: this effect works a little differently if there already is a building of the specified type in the state. If that happens:  1. the level will be the maximum between the scripted level and the level of the existing building  2. the cash reserves will be the maximum between the scripted value and the existing cash reserves ``` |  |
| create\_mass\_migration | Initiates mass migration of a specific culture from a origin country to a scoped state | ``` create_mass_migration = {  origin = c:GBR  culture = cu:english } ``` |  |
| create\_pop | Creates a pop in the scoped state |  |  |
| deactivate\_building | Deactivate a building in a state | ``` deactivate_building = { building = building_key } ``` |  |
| every\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` every_harvest_condition = {   limit = { <triggers> } #optional   <effects> } ``` | harvest\_condition |
| every\_neighbouring\_state | Iterate through all states neighbouring current scope Note British spelling | ``` every_neighbouring_state = {   limit = { <triggers> } #optional   <effects> } ``` | state |
| every\_scope\_building | Iterate through all buildings in a: state, country | ``` every_scope_building = {   limit = { <triggers> } #optional   <effects> } ``` | building |
| every\_scope\_culture | Iterate through all cultures in the scope | ``` every_scope_culture = {   limit = { <triggers> } #optional   <effects> } ``` | culture |
| every\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` every_scope_pop = {   limit = { <triggers> } #optional   <effects> } ``` | pop |
| every\_sea\_node\_adjacent\_state | Iterate through all states that share a sea node with a state | ``` every_sea_node_adjacent_state = {   limit = { <triggers> } #optional   <effects> } ``` | state |
| force\_resource\_depletion | Forces a resource depletion in state | ``` force_resource_depletion = bg_gold_mining ``` |  |
| force\_resource\_discovery | Forces a resource discovery in state | ``` force_resource_discovery = bg_gold_mining ``` |  |
| kill\_population\_percent\_in\_state | Kills a percentage of the population in the scoped state. | ``` All parameters except percent are optional. Pop type and strata cannot be used at the same time. kill_population_percent = {  percent = <decimal value>  culture = <scope/cu:key>  religion = <scope/rel:key>  interest_group = <scope/ig:key>  pop_type = <scope/pop_type:key>  strata = <key> } ``` |  |
| liberate\_slaves | Frees all slaves in the country/state | ``` liberate_slaves = yes ``` |  |
| ordered\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` ordered_harvest_condition = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | harvest\_condition |
| ordered\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` ordered_neighbouring_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state |
| ordered\_province | Iterate through all Provinces in the scoped State | ``` ordered_province = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | province |
| ordered\_scope\_building | Iterate through all buildings in a: state, country | ``` ordered_scope_building = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | building |
| ordered\_scope\_culture | Iterate through all cultures in the scope | ``` ordered_scope_culture = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | culture |
| ordered\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` ordered_scope_pop = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | pop |
| ordered\_sea\_node\_adjacent\_state | Iterate through all states that share a sea node with a state | ``` ordered_sea_node_adjacent_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state |
| random\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` random_harvest_condition = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | harvest\_condition |
| random\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` random_neighbouring_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state |
| random\_province | Iterate through all Provinces in the scoped State | ``` random_province = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | province |
| random\_scope\_building | Iterate through all buildings in a: state, country | ``` random_scope_building = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | building |
| random\_scope\_culture | Iterate through all cultures in the scope | ``` random_scope_culture = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | culture |
| random\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` random_scope_pop = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | pop |
| random\_sea\_node\_adjacent\_state | Iterate through all states that share a sea node with a state | ``` random_sea_node_adjacent_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state |
| remove\_building | Remove all levels of a building in the scope state | ``` remove_building = building_key ``` |  |
| remove\_modifier | Removes a timed modifier effect to object in scope | ``` remove_modifier = static_modifier_name ``` |  |
| reset\_hub\_names | Resets the names of all hubs in a scoped state | ``` reset_hub_names = yes ``` |  |
| reset\_state\_name | Resets the name of a scoped state | ``` reset_state_name = yes ``` |  |
| set\_available\_for\_autonomous\_investment | Sets a building type as available for autonomous investment in the current scoped State | ``` set_available_for_autonomous_investment = building type scope ``` | building\_type |
| set\_devastation | Set devastation to a state region or state |  |  |
| set\_hub\_name | Sets the name of a hub in a scoped state to a localization string | ``` set_state_name = {  type = city ( can be any hub type city/port/farm/mine/wood )  name = HUB_NAME_STATE_KIEV_city_ukrainian } ``` |  |
| set\_hub\_names | Sets the names of all the hubs in a scoped state to localization strings based on the name of the state region, the type of hub and a specified suffix | ``` set_hub_names = ukrainian ``` |  |
| set\_state\_name | Sets the name of a scoped state to a localization string | ``` set_state_name = STATE_KIEV_ukrainian ``` |  |
| set\_state\_owner | Set State Owner | ``` set_state_owner = scope ``` | country |
| set\_state\_type | Sets a state to a certain type (incorporated, unincorporated, treaty\_port) |  |  |
| start\_building\_construction | Start constructing a building in a scoped state as a government construction | ``` start_building_construction = building_barracks ``` |  |
| start\_privately\_funded\_building\_construction | Start constructing a building in a scoped state as a private construction | ``` start_privately_funded_building_construction = building_barracks ``` |  |
| unset\_available\_for\_autonomous\_investment | Sets a building type as unavailable for autonomous investment in the current scoped State | ``` unset_available_for_autonomous_investment = building type scope ``` | building\_type |

List of state triggers

| Trigger | Description | Example | Targets |
| any\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` any_harvest_condition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | harvest\_condition |
| any\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` any_neighbouring_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state |
| any\_province | Iterate through all Provinces in the scoped State | ``` any_province = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | province |
| any\_scope\_building | Iterate through all buildings in a: state, country | ``` any_scope_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | building |
| any\_scope\_culture | Iterate through all cultures in the scope | ``` any_scope_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | culture |
| any\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` any_scope_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | pop |
| any\_sea\_node\_adjacent\_state | Iterate through all states that share a sea node with a state | ``` any_sea_node_adjacent_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state |
| arable\_land | Check arable land in state | ``` arable_land > 10 ``` | value |
| available\_jobs | Checks the state's number of available jobs in non-subsistence buildings | ``` available_jobs > 10000 ``` | value |
| blockade\_level | Compare to state's blockade level | ``` blockade_level > 0.1 ``` | value |
| can\_activate\_production\_method | Checks if the building of a particular type in scoped state is able to active the specified production method | ``` can_activate_production_method = {  building_type = <key>  production_method = <key> } ``` |  |
| can\_construct\_building | Checks if 1 level of <building\_type> can be constructed in a scoped state | ``` can_construct_building = <building_type> ``` |  |
| check\_area | Compares areas of object to another object |  |  |
| cultural\_acceptance\_delta | Compare the current local delta (modification) to a culture's acceptance in the scoped state | ``` cultural_acceptance_delta = {  target = cu:romanian  value < -10 } ``` | value |
| culture\_percent\_state | Checks that a state's population has a certain percentage of a specific culture | ``` scope:example_state = {  culture_percent_state = {   target = cu:dixie   value >= 0.2  } } ``` | value |
| devastation | Compares the devastation of a given state | ``` devastation > 5 ``` | value |
| free\_arable\_land | Check free arable land in state | ``` free_arable_land > 0 ``` | value |
| has\_active\_building | True if a state has an active building type | ``` has_active_building = building ``` |  |
| has\_assimilating\_pops | Check if a state has any pops currently in the process of assimilating. |  | boolean |
| has\_building | True if a state/market/state region/country has a building type | ``` has_building = building ``` |  |
| has\_claim\_by | Checks if a state is claimed by a country | ``` any_state = {  owner = root  has_claim_by = c:MEX } ``` | country |
| has\_converting\_pops | Check if a state has any pops currently in the process of converting. |  | boolean |
| has\_cultural\_community | Checks if a culture has a cultural community in the scoped state. | ``` has_cultural_community = <culture> ``` |  |
| has\_decree | Checks if scope state has a particular type of decree | ``` has_decree = <key> ``` |  |
| has\_famine | Check if state or country has famine | ``` has_famine = yes/no ``` | boolean |
| has\_mobilizing\_unit | Checks if any Building in a scoped State maintains any Combat Units that are currently mobilizing | ``` has_mobilizing_unit = bool ``` | boolean |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |
| has\_port | Check if state has at least one port | ``` has_port = yes/no ``` | boolean |
| has\_potential\_resource | Checks if the specificed building group is allowed in the scoped state. Used to check if a state can potentially produce a resource | ``` has_potential_resource = bg_rubber_plantations ``` | building\_group |
| has\_state\_trait | Checks if scoped state has a certain trait | ``` has_state_trait = key ``` |  |
| ig\_state\_pol\_strength\_share | True if IG in scope has scripted political strength in state | ``` ig_state_pol_strength_share = {  target = scope:target_ig  value = 0.3 } ``` | value |
| incorporation\_progress | Check incorporation progress in state | ``` incorporation_progress > 0.25 ``` | value |
| infrastructure | Compares the infrastructure value of a given state | ``` infrastructure > 10 ``` | value |
| infrastructure\_delta | Compares the infrastructure balance of a given state | ``` infrastructure_delta > 0 ``` | value |
| infrastructure\_usage | Compares the infrastructure usage value of a given state | ``` infrastructure_usage > 10 ``` | value |
| is\_blockaded\_by | Checks if a state is blockaded by a country |  | country |
| is\_capital | Check if state is the capital of the owner = bool |  | boolean |
| is\_coastal | Check if state borders a (non-impassable) sea region | ``` is_coastal = yes/no ``` | boolean |
| is\_homeland\_of\_country\_cultures | Checks if state is homeland of any of the target country's primary cultures | ``` is_homeland_of_country_cultures = <country> ``` | country |
| is\_in\_revolt | Check if a state has any chance to split off into a revolutionary or seceding country | ``` is_in_revolt = yes/no. ``` | boolean |
| is\_incorporated | Check if state is incorporated = bool |  | boolean |
| is\_isolated\_from\_market | Check if a state is isolated from its market |  | boolean |
| is\_largest\_state\_in\_region | Check if state is the largest in the state region = bool |  | boolean |
| is\_mass\_migration\_target | Mass migration target is state. | ``` is_mass_migration_target = yes ``` | boolean |
| is\_mass\_migration\_target\_for\_culture | Scoped state is a mass migration target for the specified culture. | ``` is_mass_migration_target_for_culture = scope:my_culture ``` | culture |
| is\_potential\_treaty\_port | Checks if the scoped state has the potential to become a treaty port for target country | ``` is_potential_treaty_port = c:FRA ``` | country |
| is\_production\_method\_active | Checks if the building of a particular type in scoped state has the specified production method active | ``` is_production_method_active = {  building_type = <key>  production_method = <key> } ``` |  |
| is\_sea\_adjacent | Check if state borders a sea region (regular or impassable) | ``` is_sea_adjacent = yes/no ``` | boolean |
| is\_slave\_state | Check if a state employs or has the potential to employ slaves. |  | boolean |
| is\_split\_state | Checks if the scoped state is a split state. | ``` scope:example_state = { is_split_state = yes } ``` | boolean |
| is\_strategic\_objective | Checks if the scoped State is a Strategic Objective of a Country | ``` is_strategic_objective = <country> ``` | country |
| is\_target\_of\_wargoal | Checks if state is target of any wargoal in wars involving a specific country | ``` has_war_goal = <country> ``` | country |
| is\_treaty\_port | Checks if the scoped state is a treaty port | ``` is_treaty_port = yes/no ``` | boolean |
| is\_under\_colonization | Check if state is under colonization | ``` is_under_colonization = yes/no ``` | boolean |
| is\_world\_market\_hub | Check if state is a world market hub | ``` is_world_market_hub = yes ``` | boolean |
| literacy\_rate | Checks if a pop, state or country has a certain amount of literacy | ``` literacy = value ``` | value |
| loyalist\_fraction | Compares loyalist fraction in pops in state or country, all parameters except value are optional | ``` loyalist_fraction = {  value = <script_value>  pop_type = <key>  strata = <key>  culture = <key/scope>  religion = <key/scope> } ``` | value |
| loyalty | Compares the loyalty in a given state, i.e. the fraction of Loyalists | ``` loyalty > 0.2 ``` | value |
| market\_access | Checks the market access of the scoped state | ``` market_access > 0.8 ``` | value |
| most\_prominent\_revolting\_interest\_group | Checks if the most prominent revolting interest group in the scoped state has the given interest group type. Evaluates false if the scoped state is not in revolt. | ``` most_prominent_revolting_interest_group = ig_landowners ``` |  |
| num\_cultural\_communities | Check cultural communities in state | ``` num_cultural_communities > 5 ``` | value |
| obstinance | Compares state obstinance | ``` obstinance > 0.5 ``` | value |
| pollution\_generation | Compare total pollution generation across all buildings in the state |  | value |
| pop\_type\_percent\_state | Checks that a state's population has a certain percentage of a specific pop type | ``` scope:example_state = {  pop_type_percent_state = {   target = pop_type:laborer   value <= 0.8  } } ``` | value |
| population\_by\_culture | Compare the current population of a target culture in the scoped state | ``` population_by_culture = {  target = cu:romanian  value > 2500 } ``` | value |
| primary\_cultures\_percent\_state | Checks that a state's population has a certain percentage of the country's primary cultures | ``` scope:example_state = {  primary_cultures_percent_state >= 0.2 } ``` | value |
| radical\_fraction | Compares radical fraction in pops in state or country, all parameters except value are optional | ``` radical_fraction = {  value = <script_value>  pop_type = <key>  strata = <key>  culture = <key/scope>  religion = <key/scope> } ``` | value |
| relative\_infrastructure | Compares the infrastructure to infrastructure usage of a state | ``` relative_infrastructure > 1.1 ``` | value |
| religion\_percent\_state | Checks that a state's population has a certain percentage of a specific religion | ``` scope:example_state = {  religion_percent_state = {   target = rel:catholic   value <= 0.8  } } ``` | value |
| state\_cultural\_acceptance | Checks how accepted a pop of the target culture is in the scoped state | ```  state_cultural_acceptance = {  target = cu:french  value >= 50 ``` | value |
| state\_exports | Compare total units of exports from scope to target state (if set) or world state in general (if no state specified) | ``` state_exports = {  target = state scope (optional)  goods = key (optional)  value >= 100 } ``` | value |
| state\_has\_building\_group\_levels | Checks the sum of building levels for a building group in a state | ```  state_has_building_group_levels = {  type = bg_heavy_industry  value >= 100 } ``` | value |
| state\_has\_building\_levels | Checks the sum of building levels for a state | ``` state_has_building_levels >= 10 ``` | value |
| state\_has\_building\_type\_levels | Checks the sum of building levels for a building type in a state | ```  state_has_building_type_levels = {  target = bt:building_barracks  value >= 100 } ``` | value |
| state\_has\_goods\_shortage | Check if state has a shortage on any of its building inputs | ``` state_has_goods_shortage = yes/no ``` | boolean |
| state\_has\_national\_awakening | Checks if the scoped state is in a state region with an active national awakening map marker | ``` state_has_national_awakening = yes/no ``` | boolean |
| state\_imports | Compare total units of imports from target to scope state | ``` state_imports = {  target = state scope (optional)  goods = key (optional)  value >= 100 } ``` | value |
| state\_is\_eligible\_as\_mass\_migration\_target | Check if state can receive a mass migration at all. | ``` any_state = { state_is_eligible_as_mass_migration_target = yes } ``` | boolean |
| state\_population | Checks the total population of the scoped state | ``` state_population <= 250000 ``` | value |
| state\_religious\_acceptance | Checks how accepted a pop of the given religion is in the the scoped state | ```  state_religious_acceptance = {  target = rel:catholic  value >= 50 ``` | value |
| state\_trade | Compare total units of goods traded between scope state and target state (if set) or world state in general (if no state specified) | ``` state_trade = {  target = state scope (optional)  goods = key (optional)  value >= 100 } ``` | value |
| state\_unemployment\_rate | Checks the unemployment rate (percentage) in the scoped state | ``` state_unemployment_rate > 0.1 ``` | value |
| tax\_capacity | Checks the taxation capacity of the scoped state | ``` tax_capacity > 50 ``` | value |
| tax\_capacity\_usage | Checks the taxation capacity usage of the scoped state | ``` tax_capacity_usage > 50 ``` | value |
| total\_urbanization | Compares the total urbanization of a given state | ``` total_urbanization > 5 ``` | value |
| turmoil | Compares the turmoil in a given state, i.e. the fraction of Radicals | ``` turmoil > 0.2 ``` | value |
| world\_market\_access | Checks the world market access of the scoped state | ``` world_market_access > 0.8 ``` | value |

List of state event targets

| Event target | Description | To scope |
| ai\_state\_value | Scope to target country AI desire to own scope state (example: value = ai\_state\_value:root) | value |
| ai\_treaty\_port\_value | Scope to target country AI desire to have a treaty port in scope state (example: value = ai\_treaty\_port\_value:root) | value |
| average\_expected\_sol | Get the average expected Standard of Living of the scope | value |
| average\_sol | Get the average Standard of Living of the scope | value |
| b | Scope to the building of specified key in the state, example: b:building\_port | building |
| controller | Scope to the controller of the object | country |
| decree\_cost | Scope to a state's cost for a certain decree authority > decree\_cost:decree\_road\_maintaintenance | value |
| gdp | Get the scoped country's yearly predicted GDP | value |
| land\_controller\_hq | Returns the province or state controller land HQ | hq |
| land\_hq | Returns the province or state owner local land HQ | hq |
| market | Scope to the market of the object | market |
| mass\_migration\_culture | Scope to the mass migration target culture of a state | culture |
| migration\_pull | Get the migration pull for a state or the mass migration pull for a country. | value |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | boolean, value |
| nf | Scope to a Decree of specified key applied to the state, example: nf:decree\_road\_maintaintenance | decree |
| num\_provinces | Get the scoped entity's current number of provinces | value |
| num\_world\_market\_hub\_trade\_center\_levels | Get the total number of trade center levels associated with scope world market hub state | value |
| owner | Scope to the owner country of object | country |
| population\_below\_expected\_sol | Scope to the current percentage of the state's population that are below their expected standard of living (0-1) | value |
| region | Scope to the strategic region of the object! | strategic\_region |
| sg | Scope from a state to the StateGoods with the specified key, example: sg:wood | state\_goods |
| state\_region | Scope to the state region of a state | state\_region |
| theater | Scope from a BattleSide or State to its theater | theater |
| world\_market\_hub | Scope to the world market hub state associated with the scoped state | state |

### State region scope
List of state region effects

| Effect | Description | Example | Targets |
| add\_arable\_land | Add/remove arable land from a state region |  |  |
| add\_claim | Adds scoped state region as a claim for target country | ``` add_claim = scope/country ``` | country |
| add\_devastation | Add/remove devastation from a state region |  |  |
| add\_homeland | Adds scoped state region as Homeland for target culture | ``` add_homeland = cu:culture ``` | culture |
| add\_pollution | Increase/decrease pollution level in a scoped state region | ``` add_pollution = 10 ``` |  |
| add\_state\_trait | add state trait in a scoped state region | ``` add_state_trait = <state_trait_name> ``` |  |
| create\_state | creates a state in a state region |  |  |
| every\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` every_harvest_condition = {   limit = { <triggers> } #optional   <effects> } ``` | harvest\_condition |
| every\_neighbouring\_state | Iterate through all states neighbouring current scope Note British spelling | ``` every_neighbouring_state = {   limit = { <triggers> } #optional   <effects> } ``` | state |
| every\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, state\_region, strategic region) | ``` every_scope_country = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` every_scope_interest_marker = {   limit = { <triggers> } #optional   <effects> } ``` | interest\_marker |
| every\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` every_scope_state = {   limit = { <triggers> } #optional   <effects> } ``` | state |
| finish\_harvest\_condition | Finish a harvest condition of type in the scoped state region | ``` finish_harvest_condition = <key> ``` |  |
| ordered\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` ordered_harvest_condition = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | harvest\_condition |
| ordered\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` ordered_neighbouring_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state |
| ordered\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, state\_region, strategic region) | ``` ordered_scope_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` ordered_scope_interest_marker = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | interest\_marker |
| ordered\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` ordered_scope_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state |
| random\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` random_harvest_condition = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | harvest\_condition |
| random\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` random_neighbouring_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state |
| random\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, state\_region, strategic region) | ``` random_scope_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` random_scope_interest_marker = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | interest\_marker |
| random\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` random_scope_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state |
| remove\_claim | Removes scoped state region as a claim for target country | ``` add_claim = scope/country ``` | country |
| remove\_homeland | Removes scoped state region as Homeland for target culture | ``` remove_homeland = cu:culture ``` | culture |
| remove\_state\_trait | remove state trait in a scoped state region | ``` remove_state_trait = <state_trait_name> ``` |  |
| set\_devastation | Set devastation to a state region or state |  |  |
| set\_owner\_of\_provinces | Gives a set of provinces in a state region to a specific country | ``` set_owner_of_provinces = {  country = <scope>  provinces = { <province list> } } ``` |  |
| start\_harvest\_condition | Start a harvest condition of type (or refresh it if already exists) in the scoped state region | ``` start_harvest_condition = <key> ``` |  |

List of state region triggers

| Trigger | Description | Example | Targets |
| any\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` any_harvest_condition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | harvest\_condition |
| any\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` any_neighbouring_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state |
| any\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, strategic region) | ``` any_scope_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_scope\_interest\_marker | Iterate through all interest markers in a: country, strategic region | ``` any_scope_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | interest\_marker |
| any\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` any_scope_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state |
| check\_area | Compares areas of object to another object |  |  |
| contains\_capital\_of | Checks if scoped state region contains the capital of target tag | ``` contains_capital_of = country scope/tag ``` |  |
| has\_building | True if a state/market/state region/country has a building type | ``` has_building = building ``` |  |
| has\_harvest\_condition | Check if the scoped state region has a harvest condition of type | ``` has_harvest_condition = drought ``` |  |
| infrastructure | Compares the infrastructure value of a given state | ``` infrastructure > 10 ``` | value |
| infrastructure\_delta | Compares the infrastructure balance of a given state | ``` infrastructure_delta > 0 ``` | value |
| infrastructure\_usage | Compares the infrastructure usage value of a given state | ``` infrastructure_usage > 10 ``` | value |
| is\_homeland | Checks if scoped state region is a homeland of target culture | ``` is_homeland = culture scope/name ``` |  |
| is\_state\_region\_land | Check if the state region is on land |  | boolean |
| pollution\_amount | Compare state region pollution |  | value |
| remaining\_undepleted | Check remaining amount of resource, like gold mines in a state | ``` remaining_undepleted = {  type = bg_gold_mining  amount > 1 } ``` | value |

List of state region event targets

| Event target | Description | To scope |
| market | Scope to the market of the object | market |
| num\_provinces | Get the scoped entity's current number of provinces | value |
| region | Scope to the strategic region of the object! | strategic\_region |
| region\_state | Scope to the state owned by the target country, (example: region\_state:BIC) | state |

### State modifier types
`state_` modifier types apply their effects to states. When applied to a country, they affect all states owned by that country; likewise when applied to a state region, they apply to all states in the region.

For reasons of length, this table does not include the set of modifier types for culture or religion based standard of living, `state_[type]_standard_of_living_add`.

List of modifier types

| Modifier type | Localization | Type | Format | Notes |
| state\_academics\_investment\_pool\_contribution\_add | Academics Investment Pool contribution | additive | percent, good |  |
| state\_academics\_investment\_pool\_efficiency\_mult | Academics Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_academics\_mortality\_mult | Mortality of Academics | multiplicative | percent, bad |  |
| state\_allow\_assimilation\_in\_homeland\_bool | Assimilation in Homeland States Allowed | boolean | good |  |
| state\_allow\_assimilation\_without\_presence\_bool | Assimilation to Primary Culture Always Allowed | boolean | good |  |
| state\_allow\_conversion\_without\_presence\_bool | Conversion to State Religion Always Allowed | boolean | good |  |
| state\_aristocrats\_investment\_pool\_contribution\_add | Aristocrats Investment Pool contribution | additive | percent, good |  |
| state\_aristocrats\_investment\_pool\_efficiency\_mult | Aristocrats Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_aristocrats\_mortality\_mult | Mortality of Aristocrats | multiplicative | percent, bad |  |
| state\_assimilation\_mult | Assimilation | multiplicative | percent, good |  |
| state\_birth\_rate\_mult | Birth Rate | multiplicative | percent, good |  |
| state\_blockade\_resistance\_add | Blockade Resistance | additive | good |  |
| state\_building\_barrack\_max\_level\_add | Barracks Max Level | additive | good |  |
| state\_building\_conscription\_center\_max\_level\_add | Maximum Conscription Limit | additive | good |  |
| state\_building\_construction\_sector\_max\_level\_add | Construction Sector Max Level | additive | good |  |
| state\_building\_naval\_fortification\_max\_level\_add | Naval Fortification Max Level | additive | good |  |
| state\_bureaucracy\_population\_base\_cost\_factor\_mult | Bureaucracy Population Cost Multiplier | multiplicative | percent, bad |  |
| state\_bureaucrats\_investment\_pool\_contribution\_add | Bureaucrats Investment Pool contribution | additive | percent, good |  |
| state\_bureaucrats\_investment\_pool\_efficiency\_mult | Bureaucrats Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_buy\_orders\_ammunition\_add | Ammunition Buy Orders | additive | neutral |  |
| state\_buy\_orders\_artillery\_add | Artillery Buy Orders | additive | neutral |  |
| state\_buy\_orders\_small\_arms\_add | Small Arms Buy Orders | additive | neutral |  |
| state\_capitalists\_investment\_pool\_contribution\_add | Capitalists Investment Pool contribution | additive | percent, good |  |
| state\_capitalists\_investment\_pool\_efficiency\_mult | Capitalists Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_clergymen\_investment\_pool\_contribution\_add | Clergymen Investment Pool contribution | additive | percent, good |  |
| state\_clergymen\_investment\_pool\_efficiency\_mult | Clergymen Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_clerks\_investment\_pool\_contribution\_add | Clerks Investment Pool contribution | additive | percent, good |  |
| state\_clerks\_investment\_pool\_efficiency\_mult | Clerks Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_colony\_growth\_creation\_factor | Colonial Growth Generation |  | good |  |
| state\_colony\_growth\_speed\_mult | Colony Growth Speed | multiplicative | percent, good |  |
| state\_conscription\_rate\_add | Conscription Rate | additive | percent, good |  |
| state\_conscription\_rate\_mult | Conscriptable Battalions | multiplicative | percent, good |  |
| state\_construction\_mult | State Construction Efficiency | multiplicative | percent, good |  |
| state\_contiguous\_incorporation\_speed\_mult | Contiguous Incorporation Speed | multiplicative | percent, good |  |
| state\_control\_strait\_bool | Control Strait | boolean | good |  |
| state\_conversion\_mult | Conversion | multiplicative | percent, good |  |
| state\_decree\_cost\_mult | Decree Cost | multiplicative | percent, bad |  |
| state\_dependent\_political\_participation\_add | Dependent Enfranchisement | additive | percent, good |  |
| state\_dependent\_wage\_add | Yearly Dependents Income | additive | good |  |
| state\_dependent\_wage\_mult | Dependents Income | multiplicative | percent, good |  |
| state\_devastation\_decay\_mult | Devastation Recovery | multiplicative | percent, good |  |
| state\_disallow\_incorporation\_bool | State Incorporation Disallowed | boolean | bad |  |
| state\_education\_access\_add | Education Access | additive | percent, good |  |
| state\_education\_access\_wealth\_add | Education Access (Wealth-based) | additive | percent, good |  |
| state\_engineers\_investment\_pool\_contribution\_add | Engineers Investment Pool contribution | additive | percent, good |  |
| state\_engineers\_investment\_pool\_efficiency\_mult | Engineers Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_expected\_sol\_from\_literacy | Minimum Expected Standard of Living from Literacy |  | bad |  |
| state\_expected\_sol\_mult | Minimum Expected Standard of Living | multiplicative | percent, bad |  |
| state\_export\_advantage\_mult | Trade Advantage for Exports | multiplicative | percent, good |  |
| state\_farmers\_investment\_pool\_contribution\_add | Farmers Investment Pool contribution | additive | percent, good |  |
| state\_farmers\_investment\_pool\_efficiency\_mult | Farmers Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_farmers\_mortality\_mult | Mortality of Farmers | multiplicative | percent, bad |  |
| state\_food\_security\_add | Food Security | additive | percent, good |  |
| state\_fortification\_bombardment\_resistance\_add | Naval Fortification Bombardment Resistance | additive | good |  |
| state\_fortification\_naval\_battle\_mult | Naval Fortification Battle Defense | multiplicative | percent, good |  |
| state\_fortification\_naval\_invasion\_add | Naval Fortification Invasion Defense | additive | good |  |
| state\_free\_state\_pop\_support\_movement\_anti\_slavery\_mult | Abolitionist Movement Pop Attraction in non-Slave States | multiplicative | percent, neutral |  |
| state\_harvest\_condition\_disease\_outbreak\_duration\_mult | Disease Outbreak Harvest Condition Duration | multiplicative | percent, bad |  |
| state\_harvest\_condition\_disease\_outbreak\_impact\_mult | Disease Outbreak Harvest Condition Impact | multiplicative | percent, bad |  |
| state\_harvest\_condition\_drought\_duration\_mult | Drought Harvest Condition Duration | multiplicative | percent, bad |  |
| state\_harvest\_condition\_drought\_impact\_mult | Drought Harvest Condition Impact | multiplicative | percent, bad |  |
| state\_harvest\_condition\_earthquake\_duration\_mult | Earthquake Harvest Condition Duration | multiplicative | percent, bad |  |
| state\_harvest\_condition\_earthquake\_impact\_mult | Earthquake Harvest Condition Impact | multiplicative | percent, bad |  |
| state\_harvest\_condition\_extreme\_winds\_duration\_mult | Extreme Winds Harvest Condition Duration | multiplicative | percent, bad |  |
| state\_harvest\_condition\_extreme\_winds\_impact\_mult | Extreme Winds Harvest Condition Impact | multiplicative | percent, bad |  |
| state\_harvest\_condition\_flood\_duration\_mult | Flood Harvest Condition Duration | multiplicative | percent, bad |  |
| state\_harvest\_condition\_flood\_impact\_mult | Flood Harvest Condition Impact | multiplicative | percent, bad |  |
| state\_harvest\_condition\_hailstorm\_duration\_mult | state\_harvest\_condition\_hailstorm\_duration\_mult | multiplicative | percent, bad |  |
| state\_harvest\_condition\_hailstorm\_impact\_mult | state\_harvest\_condition\_hailstorm\_impact\_mult | multiplicative | percent, bad |  |
| state\_harvest\_condition\_heatwave\_duration\_mult | Heatwave Harvest Condition Duration | multiplicative | percent, bad |  |
| state\_harvest\_condition\_heatwave\_impact\_mult | Heatwave Harvest Condition Impact | multiplicative | percent, bad |  |
| state\_harvest\_condition\_torrential\_rains\_duration\_mult | state\_harvest\_condition\_torrential\_rains\_duration\_mult | multiplicative | percent, bad |  |
| state\_harvest\_condition\_torrential\_rains\_impact\_mult | state\_harvest\_condition\_torrential\_rains\_impact\_mult | multiplicative | percent, bad |  |
| state\_harvest\_condition\_tsunami\_duration\_mult | Tsunami Harvest Condition Duration | multiplicative | percent, bad |  |
| state\_harvest\_condition\_tsunami\_impact\_mult | Tsunami Harvest Condition Impact | multiplicative | percent, bad |  |
| state\_harvest\_condition\_wildfire\_duration\_mult | Wildfire Harvest Condition Duration | multiplicative | percent, bad |  |
| state\_harvest\_condition\_wildfire\_impact\_mult | Wildfire Harvest Condition Impact | multiplicative | percent, bad |  |
| state\_import\_advantage\_mult | Trade Advantage for Imports | multiplicative | percent, good |  |
| state\_incorporation\_speed\_mult | Incorporation Speed | multiplicative | percent, good |  |
| state\_infrastructure\_add | Infrastructure | additive | good |  |
| state\_infrastructure\_from\_automobiles\_consumption\_add | Infrastructure from Pop Automobiles Consumption | additive | good |  |
| state\_infrastructure\_from\_population\_add | Infrastructure per 100.0K Population | additive | good |  |
| state\_infrastructure\_from\_population\_max\_add | Maximum Infrastructure from Population | additive | good |  |
| state\_infrastructure\_from\_population\_max\_mult | Maximum Infrastructure from Population | multiplicative | percent, good |  |
| state\_infrastructure\_from\_population\_mult | Infrastructure per 100.0K Population | multiplicative | percent, good |  |
| state\_infrastructure\_mult | Infrastructure | multiplicative | percent, good |  |
| state\_institution\_impact\_add | Impact of Institutions | additive | percent, good |  |
| state\_laborers\_investment\_pool\_contribution\_add | Laborers Investment Pool contribution | additive | percent, good |  |
| state\_laborers\_investment\_pool\_efficiency\_mult | Laborers Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_laborers\_mortality\_mult | Mortality of Laborers | multiplicative | percent, bad |  |
| state\_literacy\_growth\_add | Literacy Growth | additive | percent, good |  |
| state\_lower\_strata\_expected\_sol\_add | Minimum Expected Standard of Living for the Lower Strata | additive | neutral |  |
| state\_loyalism\_increases\_cultural\_erasure\_mult | Loyalism increases for the Cultural Erasure Status | multiplicative | percent, good |  |
| state\_loyalism\_increases\_full\_acceptance\_mult | Loyalism increases for the Full Acceptance Status | multiplicative | percent, good |  |
| state\_loyalism\_increases\_open\_prejudice\_mult | Loyalism increases for the Open Prejudice Status | multiplicative | percent, good |  |
| state\_loyalism\_increases\_second\_rate\_citizen\_mult | Loyalism increases for the Second-class Citizen Status | multiplicative | percent, good |  |
| state\_loyalism\_increases\_violent\_hostility\_mult | Loyalism increases for the Violent Hostility Status | multiplicative | percent, good |  |
| state\_loyalists\_from\_political\_movements\_mult | Loyalists from Political Movements | multiplicative | percent, good |  |
| state\_machinists\_investment\_pool\_contribution\_add | Machinists Investment Pool contribution | additive | percent, good |  |
| state\_machinists\_investment\_pool\_efficiency\_mult | Machinists Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_machinists\_mortality\_mult | Mortality of Machinists | multiplicative | percent, bad |  |
| state\_market\_access\_price\_impact | Market Access Price Impact |  | percent, neutral |  |
| state\_max\_trade\_advantage\_from\_capacity\_add | Maximum Trade Advantage from Capacity | additive | percent, good |  |
| state\_middle\_strata\_expected\_sol\_add | Minimum Expected Standard of Living for the Middle Strata | additive | neutral |  |
| state\_migration\_pull\_add | Migration Attraction | additive | good |  |
| state\_migration\_pull\_mult | Migration Attraction | multiplicative | percent, good |  |
| state\_migration\_pull\_unincorporated\_mult | Migration Attraction in Unincorporated States | multiplicative | percent, good |  |
| state\_migration\_quota\_mult | Migration Quota | multiplicative | percent, neutral |  |
| state\_minimum\_incorporated\_subsistence\_arable\_land\_add | Minimum Subsistence Land Share in Incorporated States | additive | percent, neutral |  |
| state\_mortality\_mult | Mortality | multiplicative | percent, bad |  |
| state\_mortality\_turmoil\_mult | Mortality per Turmoil | multiplicative | percent, bad |  |
| state\_mortality\_wealth\_mult | Mortality per Wealth | multiplicative | percent, bad |  |
| state\_non\_contiguous\_incorporation\_speed\_mult | Non-Contiguous Incorporation Speed | multiplicative | percent, good |  |
| state\_non\_homeland\_colony\_growth\_speed\_mult | Colony Growth Speed in non-Homeland States | multiplicative | percent, good |  |
| state\_non\_homeland\_mortality\_mult | Mortality in non-Homeland States | multiplicative | percent, bad |  |
| state\_officers\_investment\_pool\_contribution\_add | Officers Investment Pool contribution | additive | percent, good |  |
| state\_officers\_investment\_pool\_efficiency\_mult | Officers Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_peasants\_consumption\_multiplier\_add | Goods consumption for Peasants | additive | percent, bad |  |
| state\_peasants\_education\_access\_add | Education Access for Peasants | additive | percent, good |  |
| state\_peasants\_internal\_migration\_disallowed\_bool | Disallowed Internal Migration for Peasants | boolean | bad |  |
| state\_peasants\_mass\_migration\_disallowed\_bool | Disallowed Mass Migration for Peasants | boolean | bad |  |
| state\_peasants\_mortality\_mult | Mortality of Peasants | multiplicative | percent, bad |  |
| state\_political\_strength\_from\_wealth\_mult | Political Strength from Wealth | multiplicative | percent, neutral |  |
| state\_political\_strength\_from\_welfare\_mult | Political Strength when receiving Welfare | multiplicative | percent, neutral |  |
| state\_pollution\_generation\_add | Generated Pollution | additive | bad |  |
| state\_pollution\_reduction\_health\_mult | Pollution Health Effects Reduction | multiplicative | percent, bad |  |
| state\_pop\_pol\_str\_add | Universal Pop Political Strength | additive | neutral |  |
| state\_pop\_pol\_str\_mult | Universal Pop Political Strength | multiplicative | percent, neutral |  |
| state\_pop\_qualifications\_mult | Qualifications | multiplicative | percent, good |  |
| state\_pop\_support\_movement\_anarchist\_add | Anarchist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_anarchist\_mult | Anarchist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_anti\_slavery\_add | Abolitionist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_anti\_slavery\_mult | Abolitionist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_bonapartist\_add | Bonapartist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_bonapartist\_mult | Bonapartist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_carlist\_add | Carlist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_carlist\_mult | Carlist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_communist\_add | Communist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_communist\_mult | Communist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_corporatist\_add | Corporatist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_corporatist\_mult | Corporatist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_cultural\_majority\_add | Cultural Majority Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_cultural\_majority\_mult | Cultural Majority Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_cultural\_minority\_add | Cultural Minority Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_cultural\_minority\_mult | Cultural Minority Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_fascist\_add | Fascist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_fascist\_mult | Fascist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_feminist\_add | Feminist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_feminist\_mult | Feminist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_german\_national\_add | German National Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_german\_national\_mult | German National Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_india\_pan\_national\_add | Indian National Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_india\_pan\_national\_mult | Indian National Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_italian\_national\_add | Italian National Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_italian\_national\_mult | Italian National Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_labor\_add | Labor Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_labor\_mult | Labor Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_land\_reform\_add | Peasant Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_land\_reform\_mult | Peasant Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_legitimist\_add | Legitimist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_legitimist\_mult | Legitimist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_liberal\_add | Liberal Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_liberal\_mult | Liberal Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_miguelist\_add | Miguelist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_miguelist\_mult | Miguelist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_modernizer\_add | Modernization Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_modernizer\_mult | Modernization Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_nihilist\_add | Nihilist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_nihilist\_mult | Nihilist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_orleanist\_add | Orleanist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_orleanist\_mult | Orleanist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_positivist\_add | Positivist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_positivist\_mult | Positivist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_pro\_slavery\_add | Pro-Slavery Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_pro\_slavery\_mult | Pro-Slavery Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_radical\_add | Radical Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_radical\_mult | Radical Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_reactionary\_add | Reactionary Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_reactionary\_mult | Reactionary Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_religious\_majority\_add | Religious Majority Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_religious\_majority\_mult | Religious Majority Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_religious\_minority\_add | Religious Minority Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_religious\_minority\_mult | Religious Minority Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_royalist\_absolutist\_add | Absolutist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_royalist\_absolutist\_mult | Absolutist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_royalist\_constitutional\_add | Royalist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_royalist\_constitutional\_mult | Royalist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_slave\_revolt\_add | Slave Revolt Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_slave\_revolt\_mult | Slave Revolt Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_socialist\_add | Socialist Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_socialist\_mult | Socialist Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_utilitarian\_add | Utilitarian Movement Pop Attraction | additive | neutral |  |
| state\_pop\_support\_movement\_utilitarian\_mult | Utilitarian Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_yugoslav\_national\_add | state\_pop\_support\_movement\_yugoslav\_national\_add | additive | neutral |  |
| state\_pop\_support\_movement\_yugoslav\_national\_mult | German National Movement Pop Attraction | multiplicative | percent, neutral |  |
| state\_radicalism\_increases\_cultural\_erasure\_mult | Radicalism increases for the Cultural Erasure Status | multiplicative | percent, bad |  |
| state\_radicalism\_increases\_full\_acceptance\_mult | Radicalism increases for the Full Acceptance Status | multiplicative | percent, bad |  |
| state\_radicalism\_increases\_open\_prejudice\_mult | Radicalism increases for the Open Prejudice Status | multiplicative | percent, bad |  |
| state\_radicalism\_increases\_second\_rate\_citizen\_mult | Radicalism increases for the Second-class Citizen Status | multiplicative | percent, bad |  |
| state\_radicalism\_increases\_violent\_hostility\_mult | Radicalism increases for the Violent Hostility Status | multiplicative | percent, bad |  |
| state\_radicals\_and\_loyalists\_from\_sol\_change\_mult | Radicals and Loyalists from Standard of Living changes | multiplicative | percent, neutral |  |
| state\_radicals\_from\_political\_movements\_mult | Radicals from Political Movements | multiplicative | percent, bad |  |
| state\_sell\_orders\_ammunition\_add | Ammunition Sell Orders | additive | neutral |  |
| state\_sell\_orders\_artillery\_add | Artillery Sell Orders | additive | neutral |  |
| state\_sell\_orders\_grain\_add | Grain Sell Orders | additive | neutral |  |
| state\_sell\_orders\_small\_arms\_add | Small Arms Sell Orders | additive | neutral |  |
| state\_shopkeepers\_investment\_pool\_contribution\_add | Shopkeepers Investment Pool contribution | additive | percent, good |  |
| state\_shopkeepers\_investment\_pool\_efficiency\_mult | Shopkeepers Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_slave\_import\_mult | Slave Imports | multiplicative | percent, good |  |
| state\_slaves\_mortality\_mult | Mortality of Slaves | multiplicative | percent, bad |  |
| state\_soldiers\_investment\_pool\_contribution\_add | Servicemen Investment Pool contribution | additive | percent, good |  |
| state\_soldiers\_investment\_pool\_efficiency\_mult | Servicemen Investment Pool contribution efficiency | multiplicative | percent, good |  |
| state\_soldiers\_mortality\_mult | Mortality of Servicemen | multiplicative | percent, bad |  |
| state\_standard\_of\_living\_add | Standard of Living | additive | good |  |
| state\_subvention\_export\_add | Maximum Subventions on Exports | additive | percent, neutral |  |
| state\_subvention\_import\_add | Maximum Subventions on Imports | additive | percent, neutral |  |
| state\_tariff\_export\_add | Maximum Tariffs on Exports | additive | percent, neutral |  |
| state\_tariff\_import\_add | Maximum Tariffs on Imports | additive | percent, neutral |  |
| state\_tax\_capacity\_add | Taxation Capacity | additive | good |  |
| state\_tax\_capacity\_mult | Taxation Capacity | multiplicative | percent, good |  |
| state\_tax\_collection\_mult | Tax Collection | multiplicative | percent, neutral |  |
| state\_tax\_waste\_add | Tax Waste | additive | percent, bad |  |
| state\_trade\_advantage\_from\_capacity\_add | Trade Advantage from Capacity | additive | percent, good |  |
| state\_trade\_advantage\_mult | Trade Advantage | multiplicative | percent, good |  |
| state\_trade\_advantage\_same\_religion\_add | Trade Advantage with Co-Religionists | additive | good |  |
| state\_trade\_capacity\_add | Trade Capacity | additive | good |  |
| state\_trade\_capacity\_mult | Trade Capacity | multiplicative | percent, good |  |
| state\_trade\_center\_max\_limit\_add | Trade Center Max Level | additive | good |  |
| state\_trade\_quantity\_mult | Traded Quantity | multiplicative | percent, good |  |
| state\_turmoil\_effects\_mult | State Penalties from Turmoil | multiplicative | percent, bad |  |
| state\_unincorporated\_starting\_wages\_mult | Starting Wages in Unincorporated States | multiplicative | percent, neutral |  |
| state\_upper\_strata\_expected\_sol\_add | Minimum Expected Standard of Living for the Upper Strata | additive | neutral |  |
| state\_urbanization\_per\_level\_add | Urbanization per Urban Center | additive | neutral |  |
| state\_urbanization\_per\_level\_mult | Urbanization per Urban Center | multiplicative | percent, bad |  |
| state\_weekly\_trades\_add | Weekly Trades | additive | good |  |
| state\_welfare\_payments\_add | Welfare Payments | additive | percent, neutral |  |
| state\_welfare\_payments\_mult | Welfare Payments Multiplier | multiplicative | percent, neutral |  |
| state\_working\_adult\_ratio\_add | Workforce Ratio | additive | percent, good |  |

## Strategic region
Strategic regions are collections of state regions. They provide the basis for both diplomatic interests and military HQs. Strategic regions are defined in common/strategic\_regions.

Each strategic region is defined as a unique script name, which also acts as a localization key, a capital province, percentage RGB map color, list of states, and optionally a graphical culture.

Example:

```
strategic_region_name = {
	capital_province = province_id	# The province ID for the capital of the state, determines where the UI panel for the interest markers present appears
	map_color = { R% G% B% }		# The percentage of R G B colour for this region for the diplomatic map mode
	states = { state_key_list }		# The states included in this strategic region specified by key
	graphical_culture = "script_name" # Defines which style is used for on-map building models, "European/Western" is the "default" style and left undefined
}
```

Each state can be included in only one strategic region. Naval state regions are also included in strategic regions, one per state. These naval strategic regions do not have a capital province, map color, or graphical culture.

Example naval strategic region:

```
region_baltic_sea = {
	states = { STATE_BALTIC_SEA }
}
```

### Effects, event targets, and triggers
The following are effects, event targets, and triggers that can be used in strategic region scope.

List of strategic region effects

| Effect | Description | Example | Targets |
| every\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` every_harvest_condition = {   limit = { <triggers> } #optional   <effects> } ``` | harvest\_condition |
| every\_neighbouring\_state | Iterate through all states neighbouring current scope Note British spelling | ``` every_neighbouring_state = {   limit = { <triggers> } #optional   <effects> } ``` | state |
| every\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, state\_region, strategic region) | ``` every_scope_country = {   limit = { <triggers> } #optional   <effects> } ``` | country |
| every\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` every_scope_interest_marker = {   limit = { <triggers> } #optional   <effects> } ``` | interest\_marker |
| every\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` every_scope_state = {   limit = { <triggers> } #optional   <effects> } ``` | state |
| ordered\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` ordered_harvest_condition = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | harvest\_condition |
| ordered\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` ordered_neighbouring_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state |
| ordered\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, state\_region, strategic region) | ``` ordered_scope_country = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | country |
| ordered\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` ordered_scope_interest_marker = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | interest\_marker |
| ordered\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` ordered_scope_state = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | state |
| random\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` random_harvest_condition = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | harvest\_condition |
| random\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` random_neighbouring_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state |
| random\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, state\_region, strategic region) | ``` random_scope_country = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | country |
| random\_scope\_interest\_marker | Iterate through all interest markers in a: country, state\_region, strategic region | ``` random_scope_interest_marker = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | interest\_marker |
| random\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` random_scope_state = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | state |

List of strategic region triggers

| Trigger | Description | Example | Targets |
| any\_harvest\_condition | Iterate through all harvest conditions affecting a state, state region, strategic region, or country | ``` any_harvest_condition = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | harvest\_condition |
| any\_neighbouring\_state | Iterate through all states neighbouring a state region | ``` any_neighbouring_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state |
| any\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, strategic region) | ``` any_scope_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country |
| any\_scope\_interest\_marker | Iterate through all interest markers in a: country, strategic region | ``` any_scope_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | interest\_marker |
| any\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, or front | ``` any_scope_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | state |
| can\_have\_declared\_interest\_here | Check if the target country scope fulfills the rules for conditions for having a declared interest in the strategic region in scope. Does not check for availability of declared interests. | ``` can_have_declared_interest_here = c:SWE ``` | country |
| check\_area | Compares areas of object to another object |  |  |
| has\_diplomatic\_play | Check if strategic region has a diplomatic play or not |  | boolean |

List of strategic region event targets

| Event target | Description | To scope |
| ai\_colonization\_value | Scope to target country AI desire to colonize a strategic region (example: value = ai\_colonization\_value:root) | value |

## References
1. [↑](#cite_ref-1) Based on the define `SPLIT_STATE_PRIME_LAND_WEIGHT`

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • States |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
