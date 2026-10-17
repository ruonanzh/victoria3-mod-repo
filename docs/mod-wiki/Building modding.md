# Building modding

[Buildings](https://vic3.paradoxwikis.com/Buildings) are one of the foundational pillars of Victoria 3. Thus plenty of mods will want to add new buildings to the game. Further, production methods are integral to the functioning of a building, and as such this page also contains an explanation on how to mod those.

## Building groups
Each building belongs to a *building group*. Building groups are defined in /Victoria 3/game/common/building\_groups and follow the following basic format:

```
[building_group]= {
	category = [urban/rural/development]
	
	economy_of_scale = [yes/no]
	
	cash_reserves_max = [integer]
	
	should_auto_expand = { 
		[trigger]
	}
	
	economy_of_scale_ai_factor = [float]
}
```

Each building group needs its own unique script name; by convention this is `bg_[script_name]`. Building groups can also have parent groups, from which they inherit and can also overwrite characteristics. So for example:

```
bg_manufacturing = {
	category = urban

	always_possible = yes
	
	economy_of_scale = yes
	
	cash_reserves_max = 25000
	
	should_auto_expand = { 
		default_auto_expand_rule = yes
	}
	
	economy_of_scale_ai_factor = 4.0
}

bg_light_industry = {
	parent_group = bg_manufacturing

	lens = light_industry
	
	urbanization = 20
	infrastructure_usage_per_level = 2
}
```

Child groups inherit all values from their parents, but can also define more characteristics themselves and will overwrite their parents' characteristics. Buildings themselves can further overwrite even their category values.

Building group characteristics

| Characteristic | Default value | Description | Example vanilla group |
| parent\_group = [parent\_group\_key] | unset | This group is considered a child of the specified group. | Most |
| category = urban/rural/development | unset | Which part of the UI the building appears in | Top level groups |
| always\_possible = yes/no | no | Buildings in this group are always permitted regardless of resources in state. | Manufacturing, government buildings |
| economy\_of\_scale = yes/no | no | Non-subsistence buildings in this group get an economy of scale throughput modifier for each level. | Most |
| is\_subsistence = yes/no | no | Buildings in this group are considered subsistence buildings that follow special rules. | Subsistence farms |
| is\_government\_funded = yes/no | no | Buildings in this group have their expenses paid for by the government. | Government buildings, Ports |
| default\_building = [building\_type\_key] | unset | Specifies the default building type that will be built unless the state specifies a different one. | Most rural buildings |
| lens = [lens\_key] | unset | Determines the lens buildings in this group will be sorted under. | Everything |
| auto\_place\_buildings = yes/no | no | Buildings in this group are created automatically | Urban centers, gold fields, subsistance |
| capped\_by\_resources = yes/no | no | Buildings in this group are capped based on state resources. See: [Resource caps and farm types](./Building modding.md#Resource_caps_and_farm_types) | Resource buildings like oil derricks, whaling stations, rubber plantations, logging camps etc |
| discoverable\_resource = yes/no | no | Buildings in this group use the discoverable resource entry in a state. See: [Resource caps and farm types](./Building modding.md#Resource_caps_and_farm_types) | Oil derricks, rubber, gold fields |
| depletable\_resource = yes/no | no | Buildings in this group use the depletion entry in a state. See: [Resource caps and farm types](./Building modding.md#Resource_caps_and_farm_types) | Gold fields |
| can\_use\_slaves = yes/no | no | Buildings in this group can "hire" slaves | Agriculture, mines, construction |
| land\_usage = urban/rural | unset | Which type of state resource the building uses: urban = Urbanization, rural = Arable Land. | Urban centers use urban, agriculture uses arable land |
| cash\_reserves\_max = [integer] | 0 | Maximum amount of £ (per level) that buildings in this group can store into their cash reserves. If set to 0, uses the value from the parent group. | Every non-government building |
| inheritable\_construction =  yes/no | no | A construction of this building group will survive a state changing hands or a split state merging | Monuments and canals |
| stateregion\_max\_level = yes/no | no | Any building types in this group with the has\_max\_level property consider its level restrictions on state-region rather than state level | Public infrastructure |
| urbanization = [integer] | 0 | The amount of urbanization buildings in this group provides per level | Rural is 5, urban industry and admin is 20, mines are 10, canals are 100 |
| should\_auto\_expand = [trigger] | unset | Conditions when buildings in this group should auto-expand if auto-expand is toggled on (trigger on more specific group or building type overrides) If this trigger has any contents at all, the game will think the building is potentially auto-expandable, so do not write triggers that can never evaluate to true here | Nearly everything uses the scripted trigger "default\_auto\_expand\_rule = yes" |
| min/max\_hiring\_rate = [float] | define valueNDefines::NEconomy::DEFAULT\_MIN\_HIRING\_RATE/DEFAULT\_MAX\_HIRING\_RATE | How much of the building's staffing level can be hired in a single week | Ownership buildings use "hiring\_rate = 1.0" |
| proportionality\_limit = [float] | define valueNDefines::NEconomy::EMPLOYMENT\_PROPORTIONALITY\_LIMIT | How high is the building's tolerance for pop types being out of proportion? | Ownership buildings use "proportionality\_limit = 1.0" |
| hires\_unemployed\_only = yes/no | no | Buildings in this group may only hire from the unemployment pool. | Subsistance |
| fired\_pops\_become\_radical = no | yes | Fired pops (e.g. from downgrading) won't become radicals. Used in buildings which auto-downgrade like Subsistence farms. | Conscription Centers, Subsistence |
| is\_military = yes | no | Buildings in this group are considered military | Military buildings |
| subsidized = yes | no | buildings of this group will by default start the game subsidized (has no effect after campaign start) | Private infrastructure |
| ignores\_productivity\_when\_hiring = yes | no | Used for subsistence agriculture and ownership buildings, allows hiring even without productivity | Subsistence Agriculture, ownership buildings |
| economy\_of\_scale\_ai\_factor = 1.5 | unset | Influences how much the AI will value grouping buildings of this group in the same state to get a high economy of scale bonus | Various resources have 2.0, others 1.5, government has 5.0 |
| foreign\_investment\_ai\_factor = 1.5 | unset | Influence how much the AI will value investing into buildings of this group in other countries | Resources average 1.0; others average 0.5 |

## Buildings
Buildings are defined in /Victoria 3/game/common/buildings and follow the basic format below:

```
[building] = {
	building_group = [building_group]
	icon = [path]
	city_type = none
	levels_per_mesh = 5

	production_method_groups = {
		[production_method_groups]
	}

	required_construction = [int]
	
}
```

Each building needs its own unique script name; by convention this is `building_[script_name]`. Most buildings have several more characteristics.

Building characteristics

| Characteristic | Default value | Description | Example vanilla building |
| building\_group = [bg\_key] | unset | Reference to building group, building groups define common properties of similar buildings | Everything |
| icon = "path/to/texture" | unset | Building icon | Everything |
| buildable = yes/no | yes | Can this building be manually built | Gold fields, monuments, urban centers, etc. all have "no" |
| expandable = yes/no | yes | Can this building be manually expanded | Gold fields, monuments, urban centers |
| downsizeable = yes/no | yes | Can this building be manually downsized | Gold fields, monuments, urban centers |
| unique = yes/no | no | Only one level of this building type can be built in the world and never by private investors | Monuments |
| has\_max\_level = yes/no | no | A modifier must be defined to determine max level | Ports, construction industry, military |
| ignore\_stateregion\_max\_level = yes | no | If the building's building group has stateregion\_max\_level = yes, override it for this building type. Used in ports to have each owner of a split state have their own limit. | Ports |
| enable\_air\_connection = yes/no | no | The region with that building built is considered for air travel. Only used for aesthetic zeppelins | Skyscraper |
| port = yes/no | no | The building can connect different market areas | Port |
| unlocking\_technologies = { [technology] } | unset | List of required (any) technologies to be able to build this building | Synthetics Plant, and basically everything |
| can\_build\_government = { [trigger] } | unset | Custom trigger (state scope) for building requirements by the government | Only Opium plantations (checks if opium is banned or not) |
| can\_build\_private = { [trigger] } | unset | Custom trigger (state scope) for building requirements by private investors | Only Opium plantations (checks if opium is banned or not) |
| construction\_points = [int32] | unset | Number of construction points required for construction. For easy reference, can use pre-made variable names found in /Victoria 3/game/common/script\_values/building\_values.txt | construction\_cost\_high, construction\_cost\_very\_low, construction\_cost\_medium, etc. |
| construction\_modifier = { [modifier\_definition] } | unset | Applied to the construction camp at a scale of weekly construction output / construction\_points. Commonly used to add an additional cost of construction that will be consumed over the duration of construction | Unused |
| owners = [pop\_type\_key] | unset | Dividends and investment pool, if not set determined by building group or production methods | Unused |
| ownership\_type = no\_ownership/self/other | unset | type of the building ownership, no\_ownership - can't own other buildings, dividends if any are paid to the state; self - can own only itself, pays dividends to the owning buildings; other - building can own other buildings, pays dividends only to own pops | Most use self |
| economic\_contribution = 0.0-1.0 | 1.0 | Multiplier for taxes/gdp from this building, 0.0 for no taxes/gdp | Unused |
| min\_raise\_to\_hire = [fixed\_point] | define valueNEconomy.MIN\_RAISE\_TO\_HIRE | Minimum required increase in salary for an employee to switch to working at this workplace | Subsistence farms |
| naval = yes/no | no | Navy or army, default no, only applicable to military buildings, which is determined by building group | Naval Base |
| canal = [canal\_type\_key] | unset | Reference to canal type, if set, marks the building as a canal | Canals |
| ai\_value = [script\_value] | define valueNAI.BUILDING\_BASE\_VALUE or NAI.GOVERNMENT\_BUILDING\_BASE\_VALUE | AI value | Tool workshops, railways, gold mines |
| ai\_subsidies\_weight = [script\_value] | 1.0 | How important the AI considers subsidizing this building to be | Unused |
| slaves\_role = [pop\_type\_key] | define valueNPops.DEFAULT\_POP\_TYPE | Defines which profession slaves can replace. | Subsistence farms (other buildings have it set in their category) |
| production\_methods = { [production\_method\_groups] } | unset | Which production method groups the building has. See [Production methods](./Building modding.md#Production_methods) section | Everything |
| possible = { [trigger] } | unset | Condition to decide if a building should be possible to be build. | Fishing ports check if coastal, industry checking if not enacted industry ban law |
| should\_auto\_expand = { [trigger] } | unset | Under which conditions we should auto-expand if auto-expand is toggled on (overrides building group if present). If this trigger has any contents at all, the game will think the building is potentially auto-expandable, so do not write triggers that can never evaluate to true here. | Government administration, railways |
| city\_type = none (city/farm/mine/port/wood) | none | Which type of hub this building affects graphically | Everything |
| generates\_residences = yes/no | yes | If the building adds graphical residencies to the city | Unused |
| terrain\_manipulator = [terrain\_manipulator\_key] | unset | Graphical terrain manipulator updated by the building | Farms, forestry, mines, ports |
| levels\_per\_mesh = [int32] | unset | How many levels is needed to add 1 extra building on the map, default 1, most use 5 | Everything |
| residence\_points\_per\_level = [int32] | 1 | How many total "residence points" this building adds to its hub to determine residential buildings created | Urban centers and barracks have 0 |
| statue = yes | no | special building type for power bloc statues | Power bloc statues |
| meshes = { [meshes] } | unset | List of meshes used for dynamic terrain placement | Unused |
| entity\_not\_constructed = { [meshes] } | unset | Special buildings can show an entity while not constructed | Greenwich observatory |
| entity\_under\_construction = { [meshes] } | unset | Overwrite for under construction entity for special buildings | Various monuments such as the Hagia Sophia |
| entity\_constructed = { [meshes] } | unset | Overwrite to use constructed entity for special buildings | Various monuments such as the Hagia Sophia |
| locator = [locator\_type] | unset | Locator type for special buildings | Every monument and canal |
| lens = [infrastructure] | unset | Override for which lens the building type should appear in, otherwise specified on building group | Trade center |
| background = "path/to/texture" | unset | Background texture for building registry items |  |
| company\_headquarter = yes | unset | Building functions as headquarters for a company | Company Headquarter |

### Resource caps and farm types
Limited buildings are often capped based on [state region definitions](./State modding.md). As an example:

```
STATE_CALIFORNIA = {
    id = 326
    subsistence_building = "building_subsistence_farm"
    provinces = { list of provinces }
    traits = { "state_trait_central_valley" "state_trait_northern_california_coastal_forests" }
    city = "x5EF8F5"
    port = "x1116AA"
    farm = "x7A5DA6"
    mine = "x4C2D30"
    wood = "x607BA8"
    arable_land = 300
    arable_resources = { "building_wheat_farm" "building_livestock_ranch" "building_cotton_plantation" "building_vineyard" }
    capped_resources = {
        building_iron_mine = 33
        building_sulfur_mine = 40
        building_logging_camp = 13
        building_fishing_wharf = 14
    }
    resource = {
        type = "building_gold_field"
        depleted_type = "building_gold_mine"
        undiscovered_amount = 12
    }
    resource = {
        type = "building_oil_rig"
        undiscovered_amount = 50
    }
    naval_exit_id = 3153
}
```

The following state characteristics are relevant for buildings

| subsistence\_building | Which building will be used for the default subsistence type, must be something defined as a subsistence building. |
| arable\_land | This sets how much arable land there is available in the state. Every building with `land_usage = rural` uses and shares this cap. |
| arable\_resources | The list of buildings that can be built with this state's arable land. |
| capped\_resources | How many buildings of each type can be built, used when the building uses `capped_by_resources = yes`. |
| undiscovered\_amount | This is just like the other type of resource cap, however it is not immediately visible to the player and requires both tech and some time to be revealed. Building needs to have `discoverable_resource = yes.` |
| discovered\_amount | Like undiscovered\_amount, but discovered. Basically, how many buildings of this type can be built from game start, but for a building that has `discoverable_resource = yes.` |
| depleted\_type | For buildings with `depletable_resource = yes`. Once this resource is depleted in this state (based on various random rolls defined in [Defines](./Defines.md#Economy) or through the `force_resource_depletion` effect), replaces and deletes buildings of the initial type with the second type, with amount as new cap. |

#### Discovery and depletion
Resource discovery and depletion uses the values in the [Defines](./Defines.md) under [NEconomy](./Defines.md#Economy)

| Define | Default value | Dev comment |
| BASE\_RESOURCE\_DISCOVER\_CHANCE | 0.02 | # Per day (1.0 = 1%) |
| EMPLOYMENT\_RESOURCE\_DEPLETE\_CHANCE | 0.005 | # Multiplied by number of fully employed levels of the building |
| RESOURCE\_DISCOVER\_MIN\_FRACTION | 0.2 | # Min fraction of resources that will be discovered for each successful roll |
| RESOURCE\_DISCOVER\_MAX\_FRACTION | 0.5 | # Max fraction of resources that will be discovered for each successful roll |
| FULLY\_DISCOVERED\_RESOURCE\_DEPLETE\_CHANCE\_MULT | 1.0 | # The chance of a resource depleting is multiplied by this when all of the resource has been discovered |
| RESOURCE\_DEPLETE\_MIN\_AMOUNT | 2 | # Min amount of resources that will be depleted for each successful roll |
| RESOURCE\_DEPLETE\_MAX\_AMOUNT | 5 | # Max amount of resources that will be depleted for each successful roll |
While they are mostly self-explanatory, a lot of the very specifics of discovery and depletion are still hidden in the game. Here is some additional info for context, some of it coming from testing.[But more testing or information is needed]

As soon as a nation has discovers a technology that allows the construction of a building that uses `discoverable_resource = yes`, the game will start rolling discovery of that resource for each state of that nation with still some "undiscovered building" left. That roll is happening every day, and uses the `BASE_RESOURCE_DISCOVER_CHANCE` value, which by default means a 0.02% chance per day per state. If the roll is successful, between 20% to 50% of all remaining `undiscovered_amount` will be available to be build. Further, every other nation with a declared interest in that state gets a notification.

There are also some events related to discovery, that use the command `force_resource_discovery`. For example, after a nation researches  Pumpjacks, that nation automatically gets a free and instant discovery of oil in one of its states. Similarly, the (relatively common) Rubber event forces rubber discovery in your state or an adjacent state.

If the building has `depletable_resource = yes`, the game will roll for depletion of that building in every state. The base chance is 0.005% per day multiplied by each fully employed level. So, if a Gold Field has 8 levels and is fully employed, that means that building has a 0.04% chance every day to succeed at the depletion roll. If it succeeds, between 2-5 level caps of that building will be removed and replaced with the same amount of levels of the relevant building in that resource's `depleted_type` entry.

## Production methods
### Production method groups
Production method groups are sets of mutually exclusive production methods a building has access to, e.g. Bakeries, Sweeteners, Baking Powder.

Production method groups are defined in /Victoria 3/game/common/production\_method\_groups and follow the basic format below:

```
[production_method_group] = {
	texture = [path]
	production_methods = {
		[production_method]
	}
}
```

Each production method group needs its own unique script name; by convention this is `pmg_[script_name]`. There can be any number of production methods within a group, but only one can be active at a time.

Characteristics

| Characteristic | Default value | Description |
| is\_hidden\_when\_unavailable = yes/no | no | Whether PMs in this group are visible at all if they cannot currently be switched to. Used for monuments. |
| ai\_selection = most\_productive | most\_profitable | Affects how the AI chooses between PMs. Current options: most\_profitable, most\_productive. Most productive useful for things like government admin or ports. |
| texture = "path/to/texture" | unset | Icon used in the Buildings tab when multiple of the same kind of building have different PMs, e.g.  mixed automation |

### Production methods
Production methods set the input and output for buildings, and thus are highly impactful for the game. Production methods are defined in /Victoria 3/game/common/production\_methods and follow the basic format below:

```
[production_method] = {
	texture = [path]
	
	building_modifiers = {
		workforce_scaled = {
			[modifiers]
		}

		level_scaled = {
			[modifiers]
		}
	}
}
```

Each production method needs its own unique script name; by convention this is commonly `pm_[script_name]` and often includes the building name to distinguish related variants. The above is just the most common set-up, but there are many characteristics and options.

Production Methods characteristics

| Characteristic | Default value | Description | Example |
| texture = [path] | unset | Icon |  |
| is\_default = yes/no | no | Is this the default pm for its group? If no pm in a group is designated as the default, the first defined pm is considered the default. PRCAL-9862: certain functions consider the pm with the name `pm_default` or `default` as the default. |  |
| required\_input\_goods = [key] | unset | The listed goods need to be locally available to activate this pm. Used to check if local good exists locally. | Every PM that uses Electricity has `required_input_goods = electricity` |
| unlocking\_laws = { [laws] } | unset | List of (any of) laws required to be able to activate this pm | Worker Cooperative Ownership  ``` unlocking_laws = { 	law_cooperative_ownership } ``` |
| disallowing\_laws = { [laws] } | unset | Laws that block the usage of this pm. | Publicly Traded  ``` disallowing_laws = { 	law_command_economy 	law_cooperative_ownership } ``` |
| unlocking\_technologies = { [technologies] } | unset | List of (any of) technologies required to be able to activate this pm. Most PMs are unlocked through this. | Publicly Traded  ``` unlocking_technologies = { 	mutual_funds } ``` |
| unlocking\_production\_methods = { [production\_methods] } | unset | List of (any of) PMs required to be able to activate this pm. These must refer to pm keys on the same building. Primarily used for automation methods to require also more advanced "primary" production. | Artillery Foundry's Publicly Traded  ``` 	unlocking_production_methods = { 		pm_smoothbores 		pm_breech_loaders 		pm_recoiled_barrels 	} ``` |
| unlocking\_global\_technologies = { [technologies] } | unset | List of (any of) technologies that need to be invented in the world to be able to activate this pm. | Unused in vanilla |
| unlocking\_principles = { [principles] } | unset | List of (any of) power bloc principles required to activate this pm. | Efficient Canning Practices |
| unlocking\_identity = [power\_bloc\_identity] | unset | Power bloc identity that enables this pm | Power bloc statue methods |
| replacement\_if\_valid = [production\_method] | unset | Automatically switches from current method to the listed production method if that one is valid | Vacuum Packaging |
| is\_hidden\_when\_unavailable = yes | no | Hides production method while it is not selectable | Efficient Canning Practices |
| ai\_weight = [integer] | 1.0 | Base AI weight | Unused in vanilla |
| pollution\_generation = [float] | 0 | How much pollution does this building add to its state region while this pm is active (total pollution in state region is scaled by arable land) | Every "production" pm uses this, from agriculture to industry. Most PMs start at 5 and increase to 10 and then 15 with more advanced PMs. Most agriculture sits around 5, most industry 10-15, with some like oil refinery power generation is at a whopping 75 pollution. |

Production method effects are generally expressed through [modifiers](./Modifier types.md), these can apply to the country, state, or building, and can be scaled by the building level, employment percentage, or unscaled.

Production Methods modifiers

| Characteristic | Description | Example |
| country\_modifiers = { [modifiers] } | These modifiers are applied to the country if this pm is active. | Government Administration's Vertical Filing Cabinets  ``` country_modifiers = { 	workforce_scaled = { 		country_bureaucracy_add = 65 	} } ``` |
| state\_modifiers = { [modifiers] } | These modifiers are applied to the state if this pm is active. | Railroads' Steam Trains  ``` state_modifiers = { 	workforce_scaled = { 		state_infrastructure_add = 25 	} } ``` |
| building\_modifiers = { [modifiers] } | These modifiers are applied to the building if this pm is active. This is the most common modifier, because it is here where goods input and output are commonly housed. | Government Administration's Vertical Filing Cabinets  ``` building_modifiers = { 	workforce_scaled = { 		goods_input_paper_add = 20 	}	  	level_scaled = { 		building_employment_clerks_add = 4000 	} }	 ``` |
| timed\_modifiers = { [scripted modifiers] } | These scripted modifiers are applied to the building after pm is changed. Duration is BUILDING\_TIMED\_MODIFIER\_WEEKS. Most commonly and exclusively used for shifting military PMs to cause a temporary debuff. | Barracks' Squad Infantry  ``` timed_modifiers = { 	pm_offense_defense_readjustment_minor } ```  Unused since patch 1.5. |
| workforce\_scaled = { [modifiers] } | These modifiers are multiplied by the building level, then scaled by the employment level of the building as a percentage. This is most commonly used with goods input and output. | Furniture Industry's Precision Tools  ``` workforce_scaled = { 	# input goods 	goods_input_hardwood_add = 25 	goods_input_tools_add = 10 	goods_input_wood_add = -25  	# output goods 	goods_output_furniture_add = -55 	goods_output_luxury_furniture_add = 55 } ``` |
| level\_scaled = { [modifiers] } | These modifiers are multiplied by the level of the building. Most commonly used with employment level. | Furniture Industry's Precision Tools  ``` level_scaled = { 	building_employment_shopkeepers_add = 1000 }	 ``` |
| unscaled = { [modifiers] } | These modifiers remain static for any level or employment percentage. Used primarily for things like ownership shares, or for mortality. | Mines' Nitroglycerin  ``` unscaled = { 	building_laborers_mortality_mult = 0.3 	building_machinists_mortality_mult = 0.2 	building_engineers_mortality_mult = 0.1 } ``` |

For how to implement new custom goods as input and output, see [Goods modding#Building use](./Goods modding.md#Building_use). A similar process applies to add other new effects such as custom professions.

## Map models
Feel that something is missing in this article?  
[+ Add it to this article](https://vic3.paradoxwikis.com/index.php?title=Building_modding&action=edit) and help other players!  
Please note the style guidelines.

## Building script documentation
### Building scope
The following [effects](./Effect.md), [event targets](./Event target.md), and [triggers](./Trigger.md) can be used in building scope.

List of building effects

| Effect | Description | Example | Targets |
| add\_modifier | Adds a timed modifier effect to object in scope | ``` add_modifier = {   name = static_modifier_name   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } add_modifier = static_modifier_name #set as permanent modifier with no multiplier or decay ``` |  |
| every\_combat\_unit | Iterate through all combat units of input scope | ``` every_combat_unit = {   limit = { <triggers> } #optional   <effects> } ``` | new\_combat\_unit |
| ordered\_combat\_unit | Iterate through all combat units of input scope | ``` ordered_combat_unit = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | new\_combat\_unit |
| random\_combat\_unit | Iterate through all combat units of input scope | ``` random_combat_unit = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | new\_combat\_unit |
| remove\_modifier | Removes a timed modifier effect to object in scope | ``` remove_modifier = static_modifier_name ``` |  |
| set\_subsidized | Sets whether a building is subsidized | ``` set_subsidized = yes/no ``` |  |

List of building triggers

| Trigger | Description | Example | Targets |
| any\_combat\_unit | Iterate through all combat units of input scope | ``` any_combat_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | new\_combat\_unit |
| building\_has\_goods\_shortage | Check if building has a shortage of any of its inputs | ``` building_has_goods_shortage = yes/no ``` | boolean |
| can\_queue\_building\_levels | Checks if the building's owner could queue the provided number of additional levels without hitting a level or resource potential cap | ``` can_queue_building_levels = number ``` |  |
| cash\_reserves\_available | Evaluates a production building's available cash reserves | ``` cash_reserves_available > 25000 ``` | value |
| cash\_reserves\_ratio | Evaluates a production building's available cash reserve ratio compared to its maximum Returns 1 if the building has no maximum cash reserves | ``` cash_reserves_ratio > 0.2 ``` | value |
| country\_ownership\_fraction | Compares the fraction of this building's levels that are owned by a country | ```  country_ownership_fraction > 0.5 ``` | value |
| earnings | Compare a building's current annual earnings per employee | ``` earnings >= 10 ``` | value |
| fraction\_of\_levels\_owned\_by\_country | Compares the fraction of total levels of a building a country or investors in that country owns | ``` fraction_of_levels_owned_by_country = {  target = c:GBR  value > 0.5 } ``` | value |
| has\_active\_production\_method | Checks if a scoped building has the specified production method active | ``` has_active_production_method = key ``` |  |
| has\_deployed\_units | Check if a building supports any units which have been deployed outside of home HQ | ``` has_deployed_units = yes/no ``` | boolean |
| has\_employee\_slots\_filled | Checks whether the amount of employees of a certain poptype are above or below a given percentage of the total amount the building can currently hire. I.e. if a building is at 80% (given as 0.8) of its current hiring capacity for Shopkeepers, for example. | ``` has_employee_slots_filled = {  pop_type = <pop type>  percent = <0-1 value> } ``` |  |
| has\_failed\_hires | Checks if a building failed to hire someone last week | ``` has_failed_hires = yes/no ``` | boolean |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |
| is\_buildable | Check if a building is buildable = yes (default) | ``` is_buildable = yes/no ``` | boolean |
| is\_building\_group | True if scope is a building of given group | ``` building_group = building ``` |  |
| is\_building\_type | True if scope is a building of given type | ``` is_building_type = building ``` |  |
| is\_government\_funded | Check if a building is is\_government\_funded | ``` is_government_funded = yes/no ``` | boolean |
| is\_subsidized | Check if a building is being subsidized | ``` is_subsidized = yes/no ``` | boolean |
| is\_subsistence\_building | Check if a building is a subsistence building | ``` is_subsistence_building = yes/no ``` | boolean |
| is\_under\_construction | Checks if building is under construction | ``` is_under_construction = bool ``` | boolean |
| levels\_owned\_by\_country | Compares how many levels a country or investors in that country own in a building | ```  levels_owned_by_country = {  target = c:GBR  value >= 1 } ``` | value |
| occupancy | Evaluates a building's current occupancy | ``` occupancy < 0.25 ``` | value |
| private\_ownership\_fraction | Compares the fraction of this building's levels that are privately owned | ```  private_ownership_fraction > 0.5 ``` | value |
| self\_ownership\_fraction | Compares the fraction of this building's levels that are owned by the building itself | ```  self_ownership_fraction > 0.5 ``` | value |
| weekly\_profit | Checks whether the profits the building has made this week are above or below a given value | ``` weekly_profit >= 20.0 ``` | value |

List of building event targets

| Event target | Description | To scope |
| group | Scope from a building object or type to its group | building\_group |
| level | Scope to the level of a building | value |
| level\_after\_queued\_constructions | Scope to the level of a building after all queued constructions finish | value |
| market | Scope to the market of the object | market |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | boolean, value |
| owner | Scope to the owner country of object | country |
| region | Scope to the strategic region of the object! | strategic\_region |
| state | Scope to the state of the object | state |
| training\_rate | Scope to the current maximum weekly training rate of a building | value |
| type | Scope from an object to its type | amendment\_type, building\_type, company\_type, diplomatic\_play\_type, harvest\_condition\_type, institution\_type, interest\_group\_type, law\_type, political\_movement\_type, ship\_type, strait\_type |

### Building modifier types
`building_` [modifier types](./Modifier types.md) apply their effects to buildings. When applied to a country, they affect all buildings owned by that country; likewise when applied to a state, they apply to all buildings in the state.

List of modifier types

| Modifier type | Localization | Type | Format | Notes |
| building\_academics\_job\_attractiveness\_mult | Job Attractiveness for Academics | multiplicative | percent, good |  |
| building\_academics\_mortality\_mult | Mortality of Academics | multiplicative | percent, bad |  |
| building\_academics\_shares\_add | Academics Pop Ownership Shares | additive | neutral |  |
| building\_academics\_standard\_of\_living\_add | Standard of Living for Academics | additive | good |  |
| building\_aristocrats\_job\_attractiveness\_mult | Job Attractiveness for Aristocrats | multiplicative | percent, good |  |
| building\_aristocrats\_shares\_add | Aristocrats Pop Ownership Shares | additive | neutral |  |
| building\_aristocrats\_standard\_of\_living\_add | Standard of Living for Aristocrats | additive | good |  |
| building\_arms\_industry\_throughput\_add | Arms Industries building Throughput | additive | percent, good |  |
| building\_art\_academy\_throughput\_add | Arts Academy building Throughput | additive | percent, good |  |
| building\_artillery\_foundry\_throughput\_add | Artillery Foundry building Throughput | additive | percent, good |  |
| building\_automotive\_industry\_throughput\_add | Automotive Industries building Throughput | additive | percent, good |  |
| building\_barrack\_throughput\_add | Barracks building Throughput | additive | percent, good |  |
| building\_bureaucrats\_job\_attractiveness\_mult | Job Attractiveness for Bureaucrats | multiplicative | percent, good |  |
| building\_bureaucrats\_shares\_add | Bureaucrats Pop Ownership Shares | additive | neutral |  |
| building\_bureaucrats\_standard\_of\_living\_add | Standard of Living for Bureaucrats | additive | good |  |
| building\_capitalists\_job\_attractiveness\_mult | Job Attractiveness for Capitalists | multiplicative | percent, good |  |
| building\_capitalists\_shares\_add | Capitalists Pop Ownership Shares | additive | neutral |  |
| building\_capitalists\_standard\_of\_living\_add | Standard of Living for Capitalists | additive | good |  |
| building\_cash\_reserves\_mult | Maximum Cash Reserves | multiplicative | percent, good |  |
| building\_chemical\_plant\_throughput\_add | Fertilizer Plants building Throughput | additive | percent, good |  |
| building\_clergymen\_job\_attractiveness\_mult | Job Attractiveness for Clergymen | multiplicative | percent, good |  |
| building\_clergymen\_shares\_add | Clergymen Pop Ownership Shares | additive | neutral |  |
| building\_clergymen\_standard\_of\_living\_add | Standard of Living for Clergymen | additive | good |  |
| building\_clerks\_job\_attractiveness\_mult | Job Attractiveness for Clerks | multiplicative | percent, good |  |
| building\_clerks\_shares\_add | Clerks Pop Ownership Shares | additive | neutral |  |
| building\_clerks\_standard\_of\_living\_add | Standard of Living for Clerks | additive | good |  |
| building\_coal\_mine\_throughput\_add | Coal Mines building Throughput | additive | percent, good |  |
| building\_coffee\_plantation\_throughput\_add | Coffee Plantations building Throughput | additive | percent, good |  |
| building\_company\_government\_dividends\_add | Company Government Dividends | additive | percent, neutral |  |
| building\_company\_worker\_dividends\_add | Company Workforce Dividends | additive | percent, neutral |  |
| building\_construction\_sector\_throughput\_add | Construction Sector building Throughput | additive | percent, good |  |
| building\_cotton\_plantation\_throughput\_add | Cotton Plantations building Throughput | additive | percent, good |  |
| building\_dye\_plantation\_throughput\_add | Dye Plantations building Throughput | additive | percent, good |  |
| building\_economy\_of\_scale\_level\_cap\_add | Economy of Scale Building Level Cap | additive | good |  |
| building\_electrics\_industry\_throughput\_add | Electrics Industries building Throughput | additive | percent, good |  |
| building\_employment\_academics\_add | Academics Per Level | additive | neutral |  |
| building\_employment\_aristocrats\_add | Aristocrats Per Level | additive | neutral |  |
| building\_employment\_bureaucrats\_add | Bureaucrats Per Level | additive | neutral |  |
| building\_employment\_capitalists\_add | Capitalists Per Level | additive | neutral |  |
| building\_employment\_clergymen\_add | Clergymen Per Level | additive | neutral |  |
| building\_employment\_clerks\_add | Clerks Per Level | additive | neutral |  |
| building\_employment\_engineers\_add | Engineers Per Level | additive | neutral |  |
| building\_employment\_farmers\_add | Farmers Per Level | additive | neutral |  |
| building\_employment\_laborers\_add | Laborers Per Level | additive | neutral |  |
| building\_employment\_machinists\_add | Machinists Per Level | additive | neutral |  |
| building\_employment\_officers\_add | Officers Per Level | additive | neutral |  |
| building\_employment\_peasants\_add | Peasants Per Level | additive | neutral |  |
| building\_employment\_shopkeepers\_add | Shopkeepers Per Level | additive | neutral |  |
| building\_employment\_slaves\_add | Slaves Per Level | additive | neutral |  |
| building\_employment\_soldiers\_add | Servicemen Per Level | additive | neutral |  |
| building\_engineers\_job\_attractiveness\_mult | Job Attractiveness for Engineers | multiplicative | percent, good |  |
| building\_engineers\_mortality\_mult | Mortality of Engineers | multiplicative | percent, bad |  |
| building\_engineers\_shares\_add | Engineers Pop Ownership Shares | additive | neutral |  |
| building\_engineers\_standard\_of\_living\_add | Standard of Living for Engineers | additive | good |  |
| building\_explosives\_factory\_throughput\_add | Explosives Factory building Throughput | additive | percent, good |  |
| building\_farmers\_job\_attractiveness\_mult | Job Attractiveness for Farmers | multiplicative | percent, good |  |
| building\_farmers\_standard\_of\_living\_add | Standard of Living for Farmers | additive | good |  |
| building\_fishing\_wharf\_throughput\_add | Fishing Wharves building Throughput | additive | percent, good |  |
| building\_food\_industry\_throughput\_add | Food Industries building Throughput | additive | percent, good |  |
| building\_furniture\_manufactory\_throughput\_add | Furniture Manufacturies building Throughput | additive | percent, good |  |
| building\_glassworks\_throughput\_add | Glassworks building Throughput | additive | percent, good |  |
| building\_gold\_field\_throughput\_add | Gold Fields building Throughput | additive | percent, good |  |
| building\_gold\_mine\_throughput\_add | Gold Mines building Throughput | additive | percent, good |  |
| building\_goods\_input\_mult | Goods Input | multiplicative | percent, bad |  |
| building\_government\_administration\_throughput\_add | Government Administration building Throughput | additive | percent, good |  |
| building\_iron\_mine\_throughput\_add | Iron Mines building Throughput | additive | percent, good |  |
| building\_job\_attractiveness\_mult | Job Attractiveness | multiplicative | percent, good |  |
| building\_laborers\_job\_attractiveness\_mult | Job Attractiveness for Laborers | multiplicative | percent, good |  |
| building\_laborers\_mortality\_mult | Mortality of Laborers | multiplicative | percent, bad |  |
| building\_laborers\_shares\_add | Laborers Pop Ownership Shares | additive | neutral |  |
| building\_laborers\_standard\_of\_living\_add | Standard of Living for Laborers | additive | good |  |
| building\_lead\_mine\_throughput\_add | Lead Mines building Throughput | additive | percent, good |  |
| building\_level\_bureaucracy\_cost\_add | Building Level Bureaucracy Cost | additive | bad |  |
| building\_livestock\_ranch\_throughput\_add | Livestock Ranches building Throughput | additive | percent, good |  |
| building\_machinists\_job\_attractiveness\_mult | Job Attractiveness for Machinists | multiplicative | percent, good |  |
| building\_machinists\_mortality\_mult | Mortality of Machinists | multiplicative | percent, bad |  |
| building\_machinists\_shares\_add | Machinists Pop Ownership Shares | additive | neutral |  |
| building\_machinists\_standard\_of\_living\_add | Standard of Living for Machinists | additive | good |  |
| building\_maize\_farm\_throughput\_add | Maize Farms building Throughput | additive | percent, good |  |
| building\_millet\_farm\_throughput\_add | Millet Farms building Throughput | additive | percent, good |  |
| building\_minimum\_incorporated\_subsistence\_employment\_add | Protected Subsistence Employment in Incorporated States | additive | percent, neutral |  |
| building\_minimum\_wage\_mult | Building Wage Target | multiplicative | percent, neutral |  |
| building\_mobilization\_cost\_mult | Mobilization Goods Requirements | multiplicative | percent, bad |  |
| building\_motor\_industry\_throughput\_add | Motor Industries building Throughput | additive | percent, good |  |
| building\_munition\_plant\_throughput\_add | Munition Plants building Throughput | additive | percent, good |  |
| building\_nationalization\_cost\_mult | Nationalization Compensation | multiplicative | percent, bad |  |
| building\_nationalization\_investment\_return\_add | Nationalization Investment Return | additive | percent, good |  |
| building\_nationalization\_radicals\_mult | Radicals from Nationalization | multiplicative | percent, bad |  |
| building\_naval\_administration\_hiring\_rate\_mult | Naval Administration Hiring Speed | multiplicative | percent, good |  |
| building\_naval\_administration\_throughput\_add | Naval Administration building Throughput | additive | percent, good |  |
| building\_naval\_administration\_training\_rate\_add | Naval Administration Training Rate | additive | good |  |
| building\_naval\_administration\_training\_rate\_mult | Naval Administration Training Rate | multiplicative | percent, good |  |
| building\_officers\_job\_attractiveness\_mult | Job Attractiveness for Officers | multiplicative | percent, good |  |
| building\_officers\_shares\_add | Officers Pop Ownership Shares | additive | neutral |  |
| building\_officers\_standard\_of\_living\_add | Standard of Living for Officers | additive | good |  |
| building\_opium\_plantation\_throughput\_add | Opium Plantations building Throughput | additive | percent, good |  |
| building\_paper\_mill\_throughput\_add | Paper Mills building Throughput | additive | percent, good |  |
| building\_peasants\_job\_attractiveness\_mult | Job Attractiveness for Peasants | multiplicative | percent, good |  |
| building\_peasants\_standard\_of\_living\_add | Standard of Living for Peasants | additive | good |  |
| building\_port\_throughput\_add | Port building Throughput | additive | percent, good |  |
| building\_power\_plant\_throughput\_add | Power Plants building Throughput | additive | percent, good |  |
| building\_railway\_throughput\_add | Railway building Throughput | additive | percent, good |  |
| building\_rice\_farm\_throughput\_add | Rice Farms building Throughput | additive | percent, good |  |
| building\_rubber\_plantation\_throughput\_add | Rubber Plantations building Throughput | additive | percent, good |  |
| building\_rye\_farm\_throughput\_add | Rye Farms building Throughput | additive | percent, good |  |
| building\_self\_investment\_chance\_add | Building Self-Investment Chance | additive | percent, neutral |  |
| building\_shipyard\_throughput\_add | Shipyards building Throughput | additive | percent, good |  |
| building\_shopkeepers\_job\_attractiveness\_mult | Job Attractiveness for Shopkeepers | multiplicative | percent, good |  |
| building\_shopkeepers\_shares\_add | Shopkeepers Pop Ownership Shares | additive | neutral |  |
| building\_shopkeepers\_standard\_of\_living\_add | Standard of Living for Shopkeepers | additive | good |  |
| building\_silk\_plantation\_throughput\_add | Silk Plantations building Throughput | additive | percent, good |  |
| building\_slaves\_mortality\_mult | Mortality of Slaves | multiplicative | percent, bad |  |
| building\_slaves\_standard\_of\_living\_add | Standard of Living for Slaves | additive | good |  |
| building\_soldiers\_job\_attractiveness\_mult | Job Attractiveness for Servicemen | multiplicative | percent, good |  |
| building\_soldiers\_shares\_add | Servicemen Pop Ownership Shares | additive | neutral |  |
| building\_soldiers\_standard\_of\_living\_add | Standard of Living for Servicemen | additive | good |  |
| building\_steel\_mill\_throughput\_add | Steel Mills building Throughput | additive | percent, good |  |
| building\_subsistence\_farm\_throughput\_add | Subsistence Farms building Throughput | additive | percent, good |  |
| building\_subsistence\_output\_add | Subsistence Output | additive | neutral |  |
| building\_subsistence\_output\_mult | Subsistence Output | multiplicative | percent, neutral |  |
| building\_sugar\_plantation\_throughput\_add | Sugar Plantations building Throughput | additive | percent, good |  |
| building\_sulfur\_mine\_throughput\_add | Sulfur Mines building Throughput | additive | percent, good |  |
| building\_synthetics\_plant\_throughput\_add | Synthetics Plants building Throughput | additive | percent, good |  |
| building\_tea\_plantation\_throughput\_add | Tea Plantations building Throughput | additive | percent, good |  |
| building\_textile\_mill\_throughput\_add | Textile Mills building Throughput | additive | percent, good |  |
| building\_throughput\_add | Throughput | additive | percent, good |  |
| building\_tobacco\_plantation\_throughput\_add | Tobacco Plantations building Throughput | additive | percent, good |  |
| building\_tooling\_workshop\_throughput\_add | Tooling Workshops building Throughput | additive | percent, good |  |
| building\_trade\_center\_throughput\_add | Trade Center building Throughput | additive | percent, good |  |
| building\_training\_rate\_add | Training Rate | additive | good |  |
| building\_training\_rate\_mult | Training Rate | multiplicative | percent, good |  |
| building\_unincorporated\_subsistence\_output\_mult | Subsistence Output in Unincorporated States | multiplicative | percent, good |  |
| building\_unincorporated\_throughput\_add | Throughput in Unincorporated States | additive | percent, good |  |
| building\_university\_throughput\_add | University building Throughput | additive | percent, good |  |
| building\_urban\_center\_throughput\_add | Urban Center building Throughput | additive | percent, good |  |
| building\_vineyard\_throughput\_add | Vineyards building Throughput | additive | percent, good |  |
| building\_whaling\_station\_throughput\_add | Whaling Stations building Throughput | additive | percent, good |  |
| building\_wheat\_farm\_throughput\_add | Wheat Farms building Throughput | additive | percent, good |  |
| building\_working\_conditions\_mult | Dangerous Working Conditions | multiplicative | percent, bad |  |

### Building group modifier types
`building_group_` [modifier types](./Modifier types.md) apply their effects to all buildings in the group. When applied to a country, they affect all buildings in that group owned by that country; likewise when applied to a state, they apply to all buildings in that group in the state.

List of modifier types

| Modifier type | Localization | Type | Format | Notes |
| building\_group\_bg\_agriculture\_allowed\_collectivization\_add | Minimum Worker-Owned Agriculture Building Levels | additive | percent, good |  |
| building\_group\_bg\_agriculture\_construction\_efficiency\_add | Agriculture Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_agriculture\_employee\_mult | Agriculture Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_farmers\_mortality\_mult | Mortality of Farmers employed in Agriculture | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_infrastructure\_usage\_mult | Infrastructure Usage of Agriculture buildings | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_laborers\_mortality\_mult | Mortality of Laborers employed in Agriculture | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_mortality\_mult | Agriculture Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_self\_investment\_chance\_add | Agriculture Building Self-Investment Chance | additive | percent, neutral |  |
| building\_group\_bg\_agriculture\_standard\_of\_living\_add | Agriculture Employee Standard of Living | additive | good |  |
| building\_group\_bg\_agriculture\_tax\_mult | Agriculture Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_agriculture\_throughput\_add | Agriculture Throughput | additive | percent, good |  |
| building\_group\_bg\_arts\_allowed\_collectivization\_add | Minimum Worker-Owned Arts Buildings Building Levels | additive | percent, good |  |
| building\_group\_bg\_arts\_throughput\_add | Arts Buildings Throughput | additive | percent, good |  |
| building\_group\_bg\_construction\_infrastructure\_usage\_mult | Infrastructure Usage of Construction Sector buildings | multiplicative | percent, bad |  |
| building\_group\_bg\_construction\_laborers\_mortality\_mult | Mortality of Laborers employed in Construction | multiplicative | percent, bad |  |
| building\_group\_bg\_extraction\_allowed\_collectivization\_add | Minimum Worker-Owned Extraction Building Levels | additive | percent, good |  |
| building\_group\_bg\_extraction\_construction\_efficiency\_add | Extraction Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_extraction\_self\_investment\_chance\_add | Extraction Building Self-Investment Chance | additive | percent, neutral |  |
| building\_group\_bg\_extraction\_throughput\_add | Extraction Throughput | additive | percent, good |  |
| building\_group\_bg\_fishing\_employee\_mult | Fishing Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_engineers\_mortality\_mult | Mortality of Engineers employed in Fishing Wharves | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_laborers\_mortality\_mult | Mortality of Laborers employed in Fishing Wharves | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_machinists\_mortality\_mult | Mortality of Machinists employed in Fishing Wharves | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_mortality\_mult | Fishing Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_standard\_of\_living\_add | Fishing Employee Standard of Living | additive | good |  |
| building\_group\_bg\_fishing\_tax\_mult | Fishing Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_fishing\_throughput\_add | Fishing Industry Throughput | additive | percent, good |  |
| building\_group\_bg\_government\_construction\_efficiency\_add | Government Structures Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_government\_employee\_mult | Government Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_government\_mortality\_mult | Government Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_government\_standard\_of\_living\_add | Government Employee Standard of Living | additive | good |  |
| building\_group\_bg\_government\_tax\_mult | Government Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_government\_throughput\_add | Government Structures Throughput | additive | percent, good |  |
| building\_group\_bg\_heavy\_industry\_allowed\_collectivization\_add | Minimum Worker-Owned Heavy Industries Building Levels | additive | percent, good |  |
| building\_group\_bg\_heavy\_industry\_construction\_efficiency\_add | Heavy Industries Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_heavy\_industry\_engineers\_mortality\_mult | Mortality of Engineers employed in Heavy Industry | multiplicative | percent, bad |  |
| building\_group\_bg\_heavy\_industry\_laborers\_mortality\_mult | Mortality of Laborers employed in Heavy Industry | multiplicative | percent, bad |  |
| building\_group\_bg\_heavy\_industry\_machinists\_mortality\_mult | Mortality of Machinists employed in Heavy Industry | multiplicative | percent, bad |  |
| building\_group\_bg\_heavy\_industry\_mortality\_mult | Heavy Industry Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_heavy\_industry\_throughput\_add | Heavy Industries Throughput | additive | percent, good |  |
| building\_group\_bg\_infrastructure\_construction\_efficiency\_add | Infrastructure Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_infrastructure\_employee\_mult | Infrastructure Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_engineers\_mortality\_mult | Mortality of Engineers employed in Infrastructure | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_laborers\_mortality\_mult | Mortality of Laborers employed in Infrastructure | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_machinists\_mortality\_mult | Mortality of Machinists employed in Infrastructure | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_mortality\_mult | Infrastructure Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_self\_investment\_chance\_add | Infrastructure Building Self-Investment Chance | additive | percent, neutral |  |
| building\_group\_bg\_infrastructure\_standard\_of\_living\_add | Infrastructure Employee Standard of Living | additive | good |  |
| building\_group\_bg\_infrastructure\_tax\_mult | Infrastructure Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_infrastructure\_throughput\_add | Infrastructure Throughput | additive | percent, good |  |
| building\_group\_bg\_light\_industry\_allowed\_collectivization\_add | Minimum Worker-Owned Light Industries Building Levels | additive | percent, good |  |
| building\_group\_bg\_light\_industry\_construction\_efficiency\_add | Light Industries Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_light\_industry\_laborers\_mortality\_mult | Mortality of Laborers employed in Light Industry | multiplicative | percent, bad |  |
| building\_group\_bg\_light\_industry\_machinists\_mortality\_mult | Mortality of Machinists employed in Light Industry | multiplicative | percent, bad |  |
| building\_group\_bg\_light\_industry\_throughput\_add | Light Industries Throughput | additive | percent, good |  |
| building\_group\_bg\_logging\_employee\_mult | Logging Industry Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_engineers\_mortality\_mult | Mortality of Engineers employed in Logging | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_laborers\_mortality\_mult | Mortality of Laborers employed in Logging | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_machinists\_mortality\_mult | Mortality of Machinists employed in Logging | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_mortality\_mult | Logging Industry Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_slaves\_mortality\_mult | Mortality of Slaves employed in Logging | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_standard\_of\_living\_add | Logging Industry Employee Standard of Living | additive | good |  |
| building\_group\_bg\_logging\_tax\_mult | Logging Industry Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_logging\_throughput\_add | Logging Industry Throughput | additive | percent, good |  |
| building\_group\_bg\_logging\_unincorporated\_throughput\_add | Forestries Throughput in Unincorporated States | additive | percent, good |  |
| building\_group\_bg\_manor\_houses\_aristocrats\_standard\_of\_living\_add | Standard of Living of Aristocrats employed in Manor Houses | additive | good |  |
| building\_group\_bg\_manufacturing\_allowed\_collectivization\_add | Minimum Worker-Owned Manufacturing Industries Building Levels | additive | percent, good |  |
| building\_group\_bg\_manufacturing\_employee\_mult | Manufacturing Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_engineers\_mortality\_mult | Mortality of Engineers employed in Manufacturing | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_engineers\_standard\_of\_living\_add | Standard of Living of Engineers employed in Manufacturing | additive | good |  |
| building\_group\_bg\_manufacturing\_laborers\_mortality\_mult | Mortality of Laborers employed in Manufacturing | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_laborers\_standard\_of\_living\_add | Standard of Living of Laborers employed in Manufacturing | additive | good |  |
| building\_group\_bg\_manufacturing\_machinists\_mortality\_mult | Mortality of Machinists employed in Manufacturing | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_machinists\_standard\_of\_living\_add | Standard of Living of Machinists employed in Manufacturing | additive | good |  |
| building\_group\_bg\_manufacturing\_mortality\_mult | Manufacturing Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_self\_investment\_chance\_add | Manufacturing Industries Building Self-Investment Chance | additive | percent, neutral |  |
| building\_group\_bg\_manufacturing\_standard\_of\_living\_add | Manufacturing Employee Standard of Living | additive | good |  |
| building\_group\_bg\_manufacturing\_tax\_mult | Manufacturing Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_manufacturing\_throughput\_add | Manufacturing Industries Throughput | additive | percent, good |  |
| building\_group\_bg\_manufacturing\_unincorporated\_throughput\_add | Manufacturing Industries Throughput in Unincorporated States | additive | percent, good |  |
| building\_group\_bg\_military\_construction\_efficiency\_add | Military Buildings Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_military\_industry\_allowed\_collectivization\_add | Minimum Worker-Owned Military Industries Building Levels | additive | percent, good |  |
| building\_group\_bg\_military\_industry\_construction\_efficiency\_add | Military Industries Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_military\_industry\_engineers\_mortality\_mult | Mortality of Engineers employed in Military Industry | multiplicative | percent, bad |  |
| building\_group\_bg\_military\_industry\_laborers\_mortality\_mult | Mortality of Laborers employed in Military Industry | multiplicative | percent, bad |  |
| building\_group\_bg\_military\_industry\_machinists\_mortality\_mult | Mortality of Machinists employed in Military Industry | multiplicative | percent, bad |  |
| building\_group\_bg\_military\_industry\_mortality\_mult | Military Industry Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_military\_industry\_throughput\_add | Military Industries Throughput | additive | percent, good |  |
| building\_group\_bg\_military\_throughput\_add | Military Buildings Throughput | additive | percent, good |  |
| building\_group\_bg\_mining\_allowed\_collectivization\_add | Minimum Worker-Owned Mines Building Levels | additive | percent, good |  |
| building\_group\_bg\_mining\_employee\_mult | Mining Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_engineers\_mortality\_mult | Mortality of Engineers employed in Mines | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_engineers\_standard\_of\_living\_add | Standard of Living of Engineers employed in Mines | additive | good |  |
| building\_group\_bg\_mining\_laborers\_mortality\_mult | Mortality of Laborers employed in Mines | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_laborers\_standard\_of\_living\_add | Standard of Living of Laborers employed in Mines | additive | good |  |
| building\_group\_bg\_mining\_machinists\_mortality\_mult | Mortality of Machinists employed in Mines | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_machinists\_standard\_of\_living\_add | Standard of Living of Machinists employed in Mines | additive | good |  |
| building\_group\_bg\_mining\_mortality\_mult | Mining Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_slaves\_mortality\_mult | Mortality of Slaves employed in Mines | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_standard\_of\_living\_add | Mining Employee Standard of Living | additive | good |  |
| building\_group\_bg\_mining\_tax\_mult | Mining Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_mining\_throughput\_add | Mines Throughput | additive | percent, good |  |
| building\_group\_bg\_mining\_unincorporated\_throughput\_add | Mines Throughput in Unincorporated States | additive | percent, good |  |
| building\_group\_bg\_oil\_extraction\_employee\_mult | Oil Industry Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_engineers\_mortality\_mult | Mortality of Engineers employed in Oil Extraction | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_laborers\_mortality\_mult | Mortality of Laborers employed in Oil Extraction | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_machinists\_mortality\_mult | Mortality of Machinists employed in Oil Extraction | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_mortality\_mult | Oil Industry Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_standard\_of\_living\_add | Oil Industry Employee Standard of Living | additive | good |  |
| building\_group\_bg\_oil\_extraction\_tax\_mult | Oil Industry Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_oil\_extraction\_throughput\_add | Oil Extractors Throughput | additive | percent, good |  |
| building\_group\_bg\_plantations\_allowed\_collectivization\_add | Minimum Worker-Owned Plantations Building Levels | additive | percent, good |  |
| building\_group\_bg\_plantations\_construction\_efficiency\_add | Plantations Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_plantations\_employee\_mult | Plantation Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_farmers\_mortality\_mult | Mortality of Farmers employed on Plantations | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_infrastructure\_usage\_mult | Infrastructure Usage of Plantations | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_laborers\_mortality\_mult | Mortality of Laborers employed on Plantations | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_mortality\_mult | Plantation Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_self\_investment\_chance\_add | Plantations Building Self-Investment Chance | additive | percent, neutral |  |
| building\_group\_bg\_plantations\_slaves\_mortality\_mult | Mortality of Slaves employed in Plantations | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_standard\_of\_living\_add | Plantation Employee Standard of Living | additive | good |  |
| building\_group\_bg\_plantations\_tax\_mult | Plantation Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_plantations\_throughput\_add | Plantations Throughput | additive | percent, good |  |
| building\_group\_bg\_plantations\_unincorporated\_throughput\_add | Plantations Throughput in Unincorporated States | additive | percent, good |  |
| building\_group\_bg\_power\_allowed\_collectivization\_add | Minimum Worker-Owned Power Plants Building Levels | additive | percent, good |  |
| building\_group\_bg\_power\_self\_investment\_chance\_add | Power Plants Building Self-Investment Chance | additive | percent, neutral |  |
| building\_group\_bg\_private\_infrastructure\_allowed\_collectivization\_add | Minimum Worker-Owned Private Infrastructure Building Levels | additive | percent, good |  |
| building\_group\_bg\_ranching\_allowed\_collectivization\_add | Minimum Worker-Owned Ranches Building Levels | additive | percent, good |  |
| building\_group\_bg\_ranching\_construction\_efficiency\_add | Ranches Construction Efficiency | additive | percent, good |  |
| building\_group\_bg\_ranching\_farmers\_mortality\_mult | Mortality of Farmers employed in Ranching | multiplicative | percent, bad |  |
| building\_group\_bg\_ranching\_infrastructure\_usage\_mult | Infrastructure Usage of Ranches | multiplicative | percent, bad |  |
| building\_group\_bg\_ranching\_laborers\_mortality\_mult | Mortality of Laborers employed in Ranching | multiplicative | percent, bad |  |
| building\_group\_bg\_ranching\_mortality\_mult | Ranching Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_ranching\_self\_investment\_chance\_add | Ranches Building Self-Investment Chance | additive | percent, neutral |  |
| building\_group\_bg\_ranching\_standard\_of\_living\_add | Ranching Employee Standard of Living | additive | good |  |
| building\_group\_bg\_ranching\_tax\_mult | Ranching Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_ranching\_throughput\_add | Ranches Throughput | additive | percent, good |  |
| building\_group\_bg\_rubber\_employee\_mult | Rubber Industry Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_rubber\_laborers\_mortality\_mult | Mortality of Laborers employed on Rubber Plantations | multiplicative | percent, bad |  |
| building\_group\_bg\_rubber\_mortality\_mult | Rubber Industry Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_rubber\_slaves\_mortality\_mult | Mortality of Slaves employed on Rubber Plantations | multiplicative | percent, bad |  |
| building\_group\_bg\_rubber\_standard\_of\_living\_add | Rubber Industry Employee Standard of Living | additive | good |  |
| building\_group\_bg\_rubber\_tax\_mult | Rubber Industry Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_rubber\_throughput\_add | Rubber Plantations Throughput | additive | percent, good |  |
| building\_group\_bg\_rubber\_unincorporated\_throughput\_add | Rubber Plantations Throughput in Unincorporated States | additive | percent, good |  |
| building\_group\_bg\_service\_employee\_mult | Urban Center Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_service\_mortality\_mult | Urban Center Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_service\_standard\_of\_living\_add | Urban Center Employee Standard of Living | additive | good |  |
| building\_group\_bg\_service\_tax\_mult | Urban Center Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_service\_throughput\_add | Service Industries Throughput | additive | percent, good |  |
| building\_group\_bg\_subsistence\_agriculture\_allowed\_collectivization\_add | Minimum Worker-Owned Subsistence Agriculture Building Levels | additive | percent, good |  |
| building\_group\_bg\_subsistence\_agriculture\_peasants\_standard\_of\_living\_add | Standard of Living of Peasants employed in Subsistence Agriculture | additive | good |  |
| building\_group\_bg\_subsistence\_ranching\_allowed\_collectivization\_add | Minimum Worker-Owned Subsistence Ranching Building Levels | additive | percent, good |  |
| building\_group\_bg\_subsistence\_ranching\_peasants\_standard\_of\_living\_add | Standard of Living of Peasants employed in Subsistence Ranching | additive | good |  |
| building\_group\_bg\_whaling\_employee\_mult | Whaling Employees | multiplicative | percent, bad |  |
| building\_group\_bg\_whaling\_laborers\_mortality\_mult | Mortality of Laborers employed in Whaling Stations | multiplicative | percent, bad |  |
| building\_group\_bg\_whaling\_machinists\_mortality\_mult | Mortality of Machinists employed in Whaling Stations | multiplicative | percent, bad |  |
| building\_group\_bg\_whaling\_mortality\_mult | Whaling Employee Mortality | multiplicative | percent, bad |  |
| building\_group\_bg\_whaling\_standard\_of\_living\_add | Whaling Employee Standard of Living | additive | good |  |
| building\_group\_bg\_whaling\_tax\_mult | Whaling Tax Income | multiplicative | percent, neutral |  |
| building\_group\_bg\_whaling\_throughput\_add | Whaling Industry Throughput | additive | percent, good |  |

## Localization
*Main article: [Localization](./Localization.md)*

Each building group, building, production method group and production method must be localized in a .yml file in the localization folder within your mod.

```
[building]: "X"
[building]_lens_option: "Expand X"
[building_group]: "X"
[production_method_group]: "X"
[production_method]: "X"
```

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | Buildings • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
