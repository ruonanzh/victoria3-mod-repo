# Modifier types

*See also: [Modifier modding](./Modifier modding.md)*

**Modifier types** are game script which modify various game statistics or allow or block certain actions. A *static modifier* may include multiple modifier types. Modifier types are also used in many other game objects, such as [laws](./Law modding.md), [institutions](./Institution modding.md), and [technologies](./Technology modding.md), among others.

## Behavior of modifier types
Modifier types can hold a numerical or Boolean value. Identical numerical modifier types affecting the same scope sum together to provide the final effect. Boolean modifier types can return only `yes` or `no`.

There are three categories of modifier types: hardcoded, object-based, and script-only.

- Hardcoded modifier types are defined based on game code and are only minimally moddable.
- Object-based modifier types are defined based on a mix game code and game objects, and new modifier types can be defined for new game objects.
- Script-only modifier types are defined entirely by script and do not have a direct effect on gameplay.

Modifier types have a default value of `0` for numerical types and `no` for Boolean types.

### Modifier blocks
A **modifier block** is an script element that accepts modifier types. A common example is a **static modifier** defined in common/static\_modifiers. Some static modifiers are defined in code, generally those in in /Victoria 3/game/common/static\_modifiers/00\_code\_static\_modifiers.txt, but most are "event" modifiers, applied with the [effect](./Effect.md) `add_modifier`.

A static modifier generally looks like this:

```
unification_prestige = {
	icon = gfx/interface/icons/timed_modifier_icons/modifier_statue_positive.dds
	country_prestige_add = 25
}
```

This includes a modifier icon and a number of modifier types. A static modifier does not need a modifier type, in which case it is mainly cosmetic or indicative of some other mechanic.

Other examples of modifier blocks include [laws](./Law modding.md), [technologies](./Technology modding.md), and [state traits](./State modding.md#State_traits). In most cases, the modifier block is explicitly labeled with the term `modifier` or a similar variation.

### Modifier type flow
Modifier types "flow" from the object where they are applied to the object type they affect. For example, if a modifier block is applied to a country (say by a law) and contains a `state` modifier type, that modifier type affects all states owned by the country.

Static modifiers apply to the scope that they are added to, while other modifier blocks have their behavior determined by game code.

List of modifier type flow connections[[1]](#cite_note-1)

| From scope | Flows to | Flow Prefix | Notes |
| Battle | Unit | `battle_` | Non-combat unit modifiers flow but do nothing |
| Building | Goods | `building_` |  |
| Character | - Battle - Unit | `character_` | Non-combat unit modifiers flow but do nothing |
| Country | - Battle - Building - Goods - Interest Group - Military Formation - Political Movement - State - Tax - Unit | `country_` |  |
| Goods |  | `goods_` | - `_add` modifier types only work in production method building modifiers - `_mult` modifier types work anywhere that can flow to buildings |
| Interest group |  | `interest_group_` |  |
| Market |  | `market_` |  |
| Military formation | - Character - Unit | `military_formation_` |  |
| Political movement |  | `political_movement_` |  |
| Power Bloc |  | `power_bloc_` |  |
| State | - Battle (for battles in state) - Building - Building Group - Unit (for battles in state) | `state_` | Non-combat unit modifiers flow but do nothing |
| Tax |  | `tax_` |  |
| Unit |  | `unit_` |  |

Other connections do not work, so a `battle` modifier type applied to a military formation will not flow through to affect a battle. Note that some flows do not appear to work even if they *should*, such as applying building employment or goods input or output modifier types outside of production methods.

Modifier types can generally "flow through" scopes, so for example a building modifier type applied to a country flows through the country's states and to the states' buildings.

Script-only modifiers flow through if they start with the same pattern as hardcoded or object-based modifiers. So a script-only modifier starting with `building_` should flow through from country to state to building just as others would.

`Unit_` modifiers can flow through either Military Formation or Battle to get to Units. They get to Units from either scope, but not all work when applied from Battle. This appears to be based on whether the modifier applies effects in combat (eg. offense, kill rate) or out of combat (eg. advancement speed, convoy raiding). Note that experience gain modifiers work while in combat, but experience is only added on the weekly tick. If the battle starts and ends without crossing into a new week, they won't do anything. This may not match the expected behaviour.

### Modifier type values in script
The [event target](./Event target.md) `modifier` returns the summed value of the given modifier type. This value can be used in [script values](./Script value.md) as well as [triggers](./Trigger.md) and [effects](./Effect.md) that accept script values. For example, a trigger can check if a country has more or less than a certain value of a given modifier type, or an effect can scale its impact by a given modifier type. Boolean modifiers return `yes` or `no` which can be used in direct comparisons or for certain triggers.

## Defining modifier types
All modifier types are defined in common/modifier\_type\_definitions. Each modifier type is scripted as its own block and may contain a number of parameters:

| Parameter | Description |
| decimals | Defines how many decimals are used in displaying the modifier type's value Unmodified Victoria 3 only uses 0, 1, and 2 |
| color | Defines how the value is colored: neutral, good, or bad `neutral` is always black; `good` uses green for positive, red for negative; `bad` is the opposite. |
| percent | If set to `yes`, displays value as a percentage This multiplies the displayed value by 100 |
| boolean | If set to `yes`, defines the modifier as Boolean instead of numerical |
| prefix | Determines which localization key should be prefixed when displaying the values for entries of this type |
| suffix | Determines which localization key should be suffixed when displaying the values for entries of this type |
| script\_only | If set to `yes`, flags the modifier as not interacting with any game mechanics directly; the modifier type value still flows as normal |
| game\_data | Used for internal handling, described in `modifier_types.md` as:  ``` # the value to the AI of having this modifier, multiplied by the value to determine the chance the AI will go after static modifiers of this type; only implemented for certain modifier types ai_value = 0 # the alternate modifier definition this type should be treated as in bespoke regions of code. Not generically applicable, used for applying the same effect in contextually appropriate situations translate = battle_offense_add # the modifier typesets this type belongs to, used in code to perform bespoke operations (such as updating cultural community acceptance deltas when a country enacts a law with a modifier entry of this type) type_set = { cultural_acceptance } ``` |
Hardcoded and object-based modifier types must use the exact script name or pattern expected, while script-only modifier types can use any script name.

### Localization
Each modifier type generates two [localization](./Localization.md) keys, `<name>` and `<name>_desc`

## Object-based modifiers
Object-based modifiers can be extended for mods that add new types for each object category. Unmodified Victoria 3 contains many, but not all possible modifier types for the game's objects. Some object-based modifiers refer to two objects, while most refer to only one.

| Category | Description | Definition folder |
| $AcceptanceStatus$ | Acceptance status | common/acceptance\_statuses |
| $BuildingGroup$ | Building group | common/building\_groups |
| $BuildingType$ | Building type | common/buildings |
| $Culture$ | Culture | common/cultures |
| $Goods$ | Good type | common/goods |
| $Institution$ | Institution | common/institutions |
| $Law$ | Law | common/laws |
| $InterestGroup$ | Interest Group | common/interest\_groups |
| $PoliticalMovement$ | Political movement | common/political\_movements |
| $PopType$ | Profession | common/pop\_types |
| $Religion$ | Religion | common/religions |
| $SocialClass$ | Social class | common/social\_classes |

List of modifier types

| Modifier type | Description | Category | Type |
| $BuildingType$\_throughput\_add | Adds throughput to $BuildingType$ | building | additive |
| building\_$PopType$\_fertility\_mult | Multiplies birth rate of $PopType$ employed in building | building | multiplicative |
| building\_$PopType$\_job\_attractiveness\_mult | Multiplies attractiveness of jobs for $PopType$ in building | building | multiplicative |
| building\_$PopType$\_mortality\_mult | Multiplies mortality of $PopType$ employed in building | building | multiplicative |
| building\_$PopType$\_shares\_add | Adds ownership shares for $PopType$ employed in building | building | additive |
| building\_$PopType$\_shares\_mult | Multiplies ownership shares for $PopType$ employed in building | building | multiplicative |
| building\_$PopType$\_standard\_of\_living\_add | Adds standard of living for $PopType$ employed in building | building | additive |
| building\_employment\_$PopType$\_add | Adds number of $PopType$ employed in building | building | additive |
| building\_employment\_$PopType$\_mult | Multiplies number of $PopType$ employed in building | building | multiplicative |
| building\_group\_$BuildingGroup$\_$PopType$\_fertility\_mult | Multiplies birth rate of $PopType$ employed in $BuildingGroup$ | building\_group | multiplicative |
| building\_group\_$BuildingGroup$\_$PopType$\_mortality\_mult | Multiplies mortality of $PopType$ employed in $BuildingGroup$ | building\_group | multiplicative |
| building\_group\_$BuildingGroup$\_$PopType$\_standard\_of\_living\_add | Adds standard of living to $PopType$ employed in $BuildingGroup$ | building\_group | additive |
| building\_group\_$BuildingGroup$\_allowed\_collectivization\_add | Increases collectivization percent of $BuildingGroup$ | building\_group | additive |
| building\_group\_$BuildingGroup$\_construction\_efficiency\_add | Increases construction efficiency for $BuildingGroup$ Requires building group to have `construction_efficiency_modifier = yes` | building\_group | additive |
| building\_group\_$BuildingGroup$\_employee\_mult | Multiplies number of all pops employed in $BuildingGroup$ | building\_group | multiplicative |
| building\_group\_$BuildingGroup$\_fertility\_mult | Multiplies birth rate of all pops employed in $BuildingGroup$ | building\_group | multiplicative |
| building\_group\_$BuildingGroup$\_infrastructure\_usage\_mult | Multiplies infrastructure usage of $BuildingGroup$ | building\_group | multiplicative |
| building\_group\_$BuildingGroup$\_mortality\_mult | Multiplies mortality of all pops employed in $BuildingGroup$ | building\_group | multiplicative |
| building\_group\_$BuildingGroup$\_self\_investment\_chance\_add | Adds chance of $BuildingGroup$ to invest in building more of itself | building\_group | additive |
| building\_group\_$BuildingGroup$\_standard\_of\_living\_add | Adds standard of living to all pops employed in $BuildingGroup$ | building\_group | additive |
| building\_group\_$BuildingGroup$\_tax\_mult | Multiplies tax paid by $BuildingGroup$ | building\_group | multiplicative |
| building\_group\_$BuildingGroup$\_throughput\_add | Adds throughput to $BuildingGroup$ | building\_group | additive |
| building\_group\_$BuildingGroup$\_unincorporated\_throughput\_add | Adds throughput to $BuildingGroup$ built in unincorporated states | building\_group | additive |
| country\_$Culture$\_cultural\_acceptance\_add | Adds acceptance for $Culture$ | country | additive |
| country\_$Institution$\_max\_investment\_add | Increase max investment level of $Institution$ | country | additive |
| country\_$PopType$\_pol\_str\_mult | Multiplies political strength of $PopType$ | country | multiplicative |
| country\_$PopType$\_voting\_power\_add | Adds voting strength to $PopType$ | country | additive |
| country\_$SocialClass$\_acceptance\_max\_add | Sets acceptance max for $SocialClass$ | country | additive |
| country\_$SocialClass$\_acceptance\_min\_add | Sets acceptance min for $SocialClass$ | country | additive |
| country\_$SocialClass$\_cultural\_acceptance\_add | Adds cultural acceptance for $SocialClass$ | country | additive |
| country\_$SocialClass$\_cultural\_acceptance\_mult | Multiplies cultural acceptance for $SocialClass$ | country | multiplicative |
| country\_$SocialClass$\_education\_access\_add | Adds education access for $SocialClass$ | country | additive |
| country\_$SocialClass$\_education\_access\_mult | Multiplies education access for $SocialClass$ | country | multiplicative |
| country\_$SocialClass$\_qualification\_growth\_add | Adds qualification growth for $SocialClass$ | country | additive |
| country\_$SocialClass$\_qualification\_growth\_mult | Multiplies qualification growth for $SocialClass$ | country | multiplicative |
| country\_$SocialClass$\_qualification\_growth\_other\_class\_mult | Multiplies qualification growth for $SocialClass$ towards other social classes | country | multiplicative |
| country\_$SocialClass$\_qualification\_growth\_same\_class\_mult | Multiplies qualification growth for $SocialClass$ towards other professions in the same social class | country | multiplicative |
| country\_allow\_assimilation\_$AcceptanceStatus$\_bool | Allows assimilation of $AcceptanceStatus$ | country | boolean |
| country\_allow\_conversion\_$AcceptanceStatus$\_bool | Allows conversion of $AcceptanceStatus$ | country | boolean |
| country\_allow\_voting\_$AcceptanceStatus$\_bool | Allows voting by $AcceptanceStatus$ | country | boolean |
| country\_assimilation\_$AcceptanceStatus$\_mult | Multiplies assimilation of $AcceptanceStatus$ | country | multiplicative |
| country\_disallow\_government\_work\_$AcceptanceStatus$\_bool | Blocks upper and middle strata $AcceptanceStatus$ from working in government-funded buildings | country | boolean |
| country\_disallow\_military\_work\_$AcceptanceStatus$\_bool | Blocks $AcceptanceStatus$ from working in military buildings | country | boolean |
| country\_enactment\_success\_chance\_$Law$\_add | Adds success chance to enact $Law$ | country | additive |
| country\_enactment\_time\_$Law$\_mult | Multiplies enactment time for $Law$ | country | multiplicative |
| country\_fervor\_target\_$Culture$\_add | Adds fervor target for $Culture$ | country | additive |
| country\_institution\_cost\_$Institution$\_add | Adds bureaucracy cost for $Institution$ | country | additive |
| country\_institution\_cost\_$Institution$\_mult | Multiplies bureaucracy cost for $Institution$ | country | multiplicative |
| country\_institution\_impact\_$Institution$\_mult | Multiplies effect of $Institution$ | country | multiplicative |
| country\_institution\_size\_change\_speed\_$Institution$\_mult | Multiplies speed of investment change for $Institution$ | country | multiplicative |
| country\_loyalism\_increases\_$AcceptanceStatus$\_mult | Multiplies loyalists gain for $AcceptanceStatus$ | country | multiplicative |
| country\_political\_strength\_$AcceptanceStatus$\_mult | Multiplies political strength for $AcceptanceStatus$ | country | multiplicative |
| country\_qualification\_growth\_$AcceptanceStatus$\_mult | Multiplies qualification growth for $AcceptanceStatus$ | country | multiplicative |
| country\_radicalism\_increases\_$AcceptanceStatus$\_mult | Multiplies radicals gain for $AcceptanceStatus$ | country | multiplicative |
| country\_standard\_of\_living\_$AcceptanceStatus$\_add | Adds standard of living to $AcceptanceStatus$ | country | additive |
| country\_voting\_power\_$AcceptanceStatus$\_mult | Multiplies voting strength for $AcceptanceStatus$ | country | multiplicative |
| country\_wage\_$AcceptanceStatus$\_mult | Multiplies wages paid to $AcceptanceStatus$ | country | multiplicative |
| goods\_input\_$Goods$\_add | Adds $Goods$ input for building/production method | goods | additive |
| goods\_input\_$Goods$\_mult | Multiplies $Goods$ input for building/production method | goods | multiplicative |
| goods\_output\_$Goods$\_add | Adds $Goods$ output for building/production method | goods | additive |
| goods\_output\_$Goods$\_mult | Multiplies $Goods$ input for building/production method | goods | multiplicative |
| goods\_trade\_advantage\_$Goods$\_mult | Multiplies trade advantage for $Goods$ | goods | multiplicative |
| interest\_group\_$InterestGroup$\_approval\_add | Adds approval for $InterestGroup$ | interest\_group | additive |
| interest\_group\_$InterestGroup$\_pol\_str\_mult | Multiplies political strength of $InterestGroup$ | interest\_group | multiplicative |
| interest\_group\_$InterestGroup$\_pop\_attraction\_mult | Multiplies pop attraction of $InterestGroup$ | interest\_group | multiplicative |
| state\_$BuildingType$\_max\_level\_add | Adds level max for $BuildingType$ | state | additive |
| state\_$Culture$\_standard\_of\_living\_add | Adds standard of living for $Culture$ | state | additive |
| state\_$PopType$\_consumption\_multiplier\_add | Adds consumption multiplier for $PopType$ | state | additive |
| state\_$PopType$\_dependent\_wage\_mult | Multiplies dependent wages for $PopType$ | state | multiplicative |
| state\_$PopType$\_internal\_migration\_disallowed\_bool | Blocks non-mass migration for $PopType$ | state | boolean |
| state\_$PopType$\_investment\_pool\_contribution\_add | Adds investment pool contribution for $PopType$ | state | additive |
| state\_$PopType$\_investment\_pool\_efficiency\_mult | Multiplies investment pool contribution by $PopType$ | state | multiplicative |
| state\_$PopType$\_mass\_migration\_disallowed\_bool | Blocks mass migration for $PopType$ | state | boolean |
| state\_$PopType$\_mortality\_mult | Multiplies mortality for $PopType$ | state | multiplicative |
| state\_$Religion$\_standard\_of\_living\_add | Adds standard of living for $Religion$ | state | additive |
| state\_buy\_orders\_$Goods$\_add | Adds local buy orders of $Goods$ in state | state | additive |
| state\_harvest\_condition\_$HarvestConditionType$\_duration\_mult | Multiplies duration of $HarvestConditionType$ | state | multiplicative |
| state\_harvest\_condition\_$HarvestConditionType$\_impact\_mult | Multiplies effect of $HarvestConditionType$ | state | multiplicative |
| state\_pop\_support\_$PoliticalMovement$\_add | Adds pop attraction for $PoliticalMovement$ | state | additive |
| state\_pop\_support\_$PoliticalMovement$\_mult | Multiplies pop attraction for $PoliticalMovement$ | state | multiplicative |
| state\_sell\_orders\_$Goods$\_add | Adds local sell orders of $Goods$ in state | state | additive |
| unit\_$CombatUnit$\_offense\_add | Adds offense for $CombatUnit$ | unit | additive |
| unit\_$CombatUnit$\_offense\_mult | Adds defense for $CombatUnit$ | unit | multiplicative |
| unit\_defense\_$TerrainKey$\_add | Adds defense in $TerrainKey$ | unit | additive |
| unit\_defense\_$TerrainKey$\_mult | Multiplies defense in $TerrainKey$ | unit | multiplicative |
| unit\_offense\_$TerrainKey$\_add | Adds offense in $TerrainKey$ | unit | additive |
| unit\_offense\_$TerrainKey$\_mult | Multiplies defense in $TerrainKey$ | unit | multiplicative |

## Script-only modifier types
Script-only modifier types do not have a direct effect on the gamestate. Instead, they act as "hooks" for other scripting. For example, the modifier type `country_disallow_law_no_schools_bool` has no effect by itself, but the law  No Schools is scripted to be blocked from enactment if this modifier type is set. Script-only modifier types can also be used with scripted values, as for example `power_bloc_mandate_progress_per_major_power_member_add` which is used in a script value to determine mandate growth for a power bloc.

The value of any modifier type can be returned with the [event target](./Event target.md) `modifier`. For example, `modifier:country_disallow_law_no_schools_bool` which returns `yes` or `no` depending on the value of the modifier type. Numerical modifiers are summed when returned with `modifier` so that separate sources add together as with hardcoded and object-based modifier types.

Finally, some script-only modifier types act only as indicators while the actual effect is implemented in another way.

## List of all defined modifier types
The following modifiers are all defined in unmodified Victoria 3 in common/modifier\_type\_definitions. This includes all hardcoded modifier types, many of the potential object-based modifier types, and all script-only modifier types used for base game mechanics. It does not include potential modifier types which are not defined.

The following defined object-based modifier types are not included in the table for sake of concision:

- `country_$Culture$_cultural_acceptance_add`
- `country_$SocialClass$_cultural_acceptance_add`
- `country_fervor_target_$Culture$_add`
- `state_$Culture$_standard_of_living_add`
- `state_$Religion$_standard_of_living_add`

These types are exhaustively defined in the base game and can be seen at [List of culture modifier types](./List of culture modifier types.md)

List of modifier types

| Modifier type | Localization | Category | Type | Format | Notes |
| battle\_casualties\_mult | Casualties Taken | battle | multiplicative | percent, bad |  |
| battle\_combat\_width\_mult | Terrain Combat Width | battle | multiplicative | percent, good |  |
| battle\_defense\_owned\_province\_mult | Home Defense | battle | multiplicative | percent, good |  |
| battle\_naval\_condition\_calm\_waters\_chance\_mult | Calm Waters Chance | battle | multiplicative | percent, neutral |  |
| battle\_naval\_condition\_cyclone\_chance\_mult | Cyclone Chance | battle | multiplicative | percent, neutral |  |
| battle\_naval\_condition\_fog\_chance\_mult | Fog Chance | battle | multiplicative | percent, neutral |  |
| battle\_naval\_condition\_ice\_chance\_mult | Ice Chance | battle | multiplicative | percent, neutral |  |
| battle\_naval\_condition\_rough\_waters\_chance\_mult | Rough Waters Chance | battle | multiplicative | percent, neutral |  |
| battle\_naval\_condition\_strong\_winds\_chance\_mult | Strong Winds Chance | battle | multiplicative | percent, neutral |  |
| battle\_naval\_condition\_tropical\_storm\_chance\_mult | Tropical Storm Chance | battle | multiplicative | percent, neutral |  |
| battle\_offense\_owned\_province\_mult | Home Offense | battle | multiplicative | percent, good |  |
| battle\_total\_combat\_width\_mult | Total Combat Width | battle | multiplicative | percent, neutral |  |
| building\_academics\_job\_attractiveness\_mult | Job Attractiveness for Academics | building | multiplicative | percent, good |  |
| building\_academics\_mortality\_mult | Mortality of Academics | building | multiplicative | percent, bad |  |
| building\_academics\_shares\_add | Academics Pop Ownership Shares | building | additive | neutral |  |
| building\_academics\_standard\_of\_living\_add | Standard of Living for Academics | building | additive | good |  |
| building\_aristocrats\_job\_attractiveness\_mult | Job Attractiveness for Aristocrats | building | multiplicative | percent, good |  |
| building\_aristocrats\_shares\_add | Aristocrats Pop Ownership Shares | building | additive | neutral |  |
| building\_aristocrats\_standard\_of\_living\_add | Standard of Living for Aristocrats | building | additive | good |  |
| building\_arms\_industry\_throughput\_add | Arms Industries building Throughput | building | additive | percent, good |  |
| building\_art\_academy\_throughput\_add | Arts Academy building Throughput | building | additive | percent, good |  |
| building\_artillery\_foundry\_throughput\_add | Artillery Foundry building Throughput | building | additive | percent, good |  |
| building\_automotive\_industry\_throughput\_add | Automotive Industries building Throughput | building | additive | percent, good |  |
| building\_barrack\_throughput\_add | Barracks building Throughput | building | additive | percent, good |  |
| building\_bureaucrats\_job\_attractiveness\_mult | Job Attractiveness for Bureaucrats | building | multiplicative | percent, good |  |
| building\_bureaucrats\_shares\_add | Bureaucrats Pop Ownership Shares | building | additive | neutral |  |
| building\_bureaucrats\_standard\_of\_living\_add | Standard of Living for Bureaucrats | building | additive | good |  |
| building\_capitalists\_job\_attractiveness\_mult | Job Attractiveness for Capitalists | building | multiplicative | percent, good |  |
| building\_capitalists\_shares\_add | Capitalists Pop Ownership Shares | building | additive | neutral |  |
| building\_capitalists\_standard\_of\_living\_add | Standard of Living for Capitalists | building | additive | good |  |
| building\_cash\_reserves\_mult | Maximum Cash Reserves | building | multiplicative | percent, good |  |
| building\_chemical\_plant\_throughput\_add | Fertilizer Plants building Throughput | building | additive | percent, good |  |
| building\_clergymen\_job\_attractiveness\_mult | Job Attractiveness for Clergymen | building | multiplicative | percent, good |  |
| building\_clergymen\_shares\_add | Clergymen Pop Ownership Shares | building | additive | neutral |  |
| building\_clergymen\_standard\_of\_living\_add | Standard of Living for Clergymen | building | additive | good |  |
| building\_clerks\_job\_attractiveness\_mult | Job Attractiveness for Clerks | building | multiplicative | percent, good |  |
| building\_clerks\_shares\_add | Clerks Pop Ownership Shares | building | additive | neutral |  |
| building\_clerks\_standard\_of\_living\_add | Standard of Living for Clerks | building | additive | good |  |
| building\_coal\_mine\_throughput\_add | Coal Mines building Throughput | building | additive | percent, good |  |
| building\_coffee\_plantation\_throughput\_add | Coffee Plantations building Throughput | building | additive | percent, good |  |
| building\_company\_government\_dividends\_add | Company Government Dividends | building | additive | percent, neutral |  |
| building\_company\_worker\_dividends\_add | Company Workforce Dividends | building | additive | percent, neutral |  |
| building\_construction\_sector\_throughput\_add | Construction Sector building Throughput | building | additive | percent, good |  |
| building\_cotton\_plantation\_throughput\_add | Cotton Plantations building Throughput | building | additive | percent, good |  |
| building\_dye\_plantation\_throughput\_add | Dye Plantations building Throughput | building | additive | percent, good |  |
| building\_economy\_of\_scale\_level\_cap\_add | Economy of Scale Building Level Cap | building | additive | good |  |
| building\_electrics\_industry\_throughput\_add | Electrics Industries building Throughput | building | additive | percent, good |  |
| building\_employment\_academics\_add | Academics Per Level | building | additive | neutral |  |
| building\_employment\_aristocrats\_add | Aristocrats Per Level | building | additive | neutral |  |
| building\_employment\_bureaucrats\_add | Bureaucrats Per Level | building | additive | neutral |  |
| building\_employment\_capitalists\_add | Capitalists Per Level | building | additive | neutral |  |
| building\_employment\_clergymen\_add | Clergymen Per Level | building | additive | neutral |  |
| building\_employment\_clerks\_add | Clerks Per Level | building | additive | neutral |  |
| building\_employment\_engineers\_add | Engineers Per Level | building | additive | neutral |  |
| building\_employment\_farmers\_add | Farmers Per Level | building | additive | neutral |  |
| building\_employment\_laborers\_add | Laborers Per Level | building | additive | neutral |  |
| building\_employment\_machinists\_add | Machinists Per Level | building | additive | neutral |  |
| building\_employment\_officers\_add | Officers Per Level | building | additive | neutral |  |
| building\_employment\_peasants\_add | Peasants Per Level | building | additive | neutral |  |
| building\_employment\_shopkeepers\_add | Shopkeepers Per Level | building | additive | neutral |  |
| building\_employment\_slaves\_add | Slaves Per Level | building | additive | neutral |  |
| building\_employment\_soldiers\_add | Servicemen Per Level | building | additive | neutral |  |
| building\_engineers\_job\_attractiveness\_mult | Job Attractiveness for Engineers | building | multiplicative | percent, good |  |
| building\_engineers\_mortality\_mult | Mortality of Engineers | building | multiplicative | percent, bad |  |
| building\_engineers\_shares\_add | Engineers Pop Ownership Shares | building | additive | neutral |  |
| building\_engineers\_standard\_of\_living\_add | Standard of Living for Engineers | building | additive | good |  |
| building\_explosives\_factory\_throughput\_add | Explosives Factory building Throughput | building | additive | percent, good |  |
| building\_farmers\_job\_attractiveness\_mult | Job Attractiveness for Farmers | building | multiplicative | percent, good |  |
| building\_farmers\_standard\_of\_living\_add | Standard of Living for Farmers | building | additive | good |  |
| building\_fishing\_wharf\_throughput\_add | Fishing Wharves building Throughput | building | additive | percent, good |  |
| building\_food\_industry\_throughput\_add | Food Industries building Throughput | building | additive | percent, good |  |
| building\_furniture\_manufactory\_throughput\_add | Furniture Manufacturies building Throughput | building | additive | percent, good |  |
| building\_glassworks\_throughput\_add | Glassworks building Throughput | building | additive | percent, good |  |
| building\_gold\_field\_throughput\_add | Gold Fields building Throughput | building | additive | percent, good |  |
| building\_gold\_mine\_throughput\_add | Gold Mines building Throughput | building | additive | percent, good |  |
| building\_goods\_input\_mult | Goods Input | building | multiplicative | percent, bad |  |
| building\_government\_administration\_throughput\_add | Government Administration building Throughput | building | additive | percent, good |  |
| building\_group\_bg\_agriculture\_allowed\_collectivization\_add | Minimum Worker-Owned Agriculture Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_agriculture\_construction\_efficiency\_add | Agriculture Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_agriculture\_employee\_mult | Agriculture Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_farmers\_mortality\_mult | Mortality of Farmers employed in Agriculture | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_infrastructure\_usage\_mult | Infrastructure Usage of Agriculture buildings | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_laborers\_mortality\_mult | Mortality of Laborers employed in Agriculture | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_mortality\_mult | Agriculture Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_agriculture\_self\_investment\_chance\_add | Agriculture Building Self-Investment Chance | building\_group | additive | percent, neutral |  |
| building\_group\_bg\_agriculture\_standard\_of\_living\_add | Agriculture Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_agriculture\_tax\_mult | Agriculture Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_agriculture\_throughput\_add | Agriculture Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_arts\_allowed\_collectivization\_add | Minimum Worker-Owned Arts Buildings Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_arts\_throughput\_add | Arts Buildings Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_construction\_infrastructure\_usage\_mult | Infrastructure Usage of Construction Sector buildings | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_construction\_laborers\_mortality\_mult | Mortality of Laborers employed in Construction | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_extraction\_allowed\_collectivization\_add | Minimum Worker-Owned Extraction Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_extraction\_construction\_efficiency\_add | Extraction Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_extraction\_self\_investment\_chance\_add | Extraction Building Self-Investment Chance | building\_group | additive | percent, neutral |  |
| building\_group\_bg\_extraction\_throughput\_add | Extraction Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_fishing\_employee\_mult | Fishing Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_engineers\_mortality\_mult | Mortality of Engineers employed in Fishing Wharves | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_laborers\_mortality\_mult | Mortality of Laborers employed in Fishing Wharves | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_machinists\_mortality\_mult | Mortality of Machinists employed in Fishing Wharves | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_mortality\_mult | Fishing Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_fishing\_standard\_of\_living\_add | Fishing Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_fishing\_tax\_mult | Fishing Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_fishing\_throughput\_add | Fishing Industry Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_government\_construction\_efficiency\_add | Government Structures Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_government\_employee\_mult | Government Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_government\_mortality\_mult | Government Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_government\_standard\_of\_living\_add | Government Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_government\_tax\_mult | Government Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_government\_throughput\_add | Government Structures Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_heavy\_industry\_allowed\_collectivization\_add | Minimum Worker-Owned Heavy Industries Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_heavy\_industry\_construction\_efficiency\_add | Heavy Industries Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_heavy\_industry\_engineers\_mortality\_mult | Mortality of Engineers employed in Heavy Industry | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_heavy\_industry\_laborers\_mortality\_mult | Mortality of Laborers employed in Heavy Industry | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_heavy\_industry\_machinists\_mortality\_mult | Mortality of Machinists employed in Heavy Industry | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_heavy\_industry\_mortality\_mult | Heavy Industry Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_heavy\_industry\_throughput\_add | Heavy Industries Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_infrastructure\_construction\_efficiency\_add | Infrastructure Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_infrastructure\_employee\_mult | Infrastructure Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_engineers\_mortality\_mult | Mortality of Engineers employed in Infrastructure | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_laborers\_mortality\_mult | Mortality of Laborers employed in Infrastructure | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_machinists\_mortality\_mult | Mortality of Machinists employed in Infrastructure | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_mortality\_mult | Infrastructure Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_infrastructure\_self\_investment\_chance\_add | Infrastructure Building Self-Investment Chance | building\_group | additive | percent, neutral |  |
| building\_group\_bg\_infrastructure\_standard\_of\_living\_add | Infrastructure Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_infrastructure\_tax\_mult | Infrastructure Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_infrastructure\_throughput\_add | Infrastructure Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_light\_industry\_allowed\_collectivization\_add | Minimum Worker-Owned Light Industries Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_light\_industry\_construction\_efficiency\_add | Light Industries Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_light\_industry\_laborers\_mortality\_mult | Mortality of Laborers employed in Light Industry | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_light\_industry\_machinists\_mortality\_mult | Mortality of Machinists employed in Light Industry | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_light\_industry\_throughput\_add | Light Industries Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_logging\_employee\_mult | Logging Industry Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_engineers\_mortality\_mult | Mortality of Engineers employed in Logging | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_laborers\_mortality\_mult | Mortality of Laborers employed in Logging | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_machinists\_mortality\_mult | Mortality of Machinists employed in Logging | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_mortality\_mult | Logging Industry Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_slaves\_mortality\_mult | Mortality of Slaves employed in Logging | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_logging\_standard\_of\_living\_add | Logging Industry Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_logging\_tax\_mult | Logging Industry Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_logging\_throughput\_add | Logging Industry Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_logging\_unincorporated\_throughput\_add | Forestries Throughput in Unincorporated States | building\_group | additive | percent, good |  |
| building\_group\_bg\_manor\_houses\_aristocrats\_standard\_of\_living\_add | Standard of Living of Aristocrats employed in Manor Houses | building\_group | additive | good |  |
| building\_group\_bg\_manufacturing\_allowed\_collectivization\_add | Minimum Worker-Owned Manufacturing Industries Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_manufacturing\_employee\_mult | Manufacturing Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_engineers\_mortality\_mult | Mortality of Engineers employed in Manufacturing | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_engineers\_standard\_of\_living\_add | Standard of Living of Engineers employed in Manufacturing | building\_group | additive | good |  |
| building\_group\_bg\_manufacturing\_laborers\_mortality\_mult | Mortality of Laborers employed in Manufacturing | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_laborers\_standard\_of\_living\_add | Standard of Living of Laborers employed in Manufacturing | building\_group | additive | good |  |
| building\_group\_bg\_manufacturing\_machinists\_mortality\_mult | Mortality of Machinists employed in Manufacturing | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_machinists\_standard\_of\_living\_add | Standard of Living of Machinists employed in Manufacturing | building\_group | additive | good |  |
| building\_group\_bg\_manufacturing\_mortality\_mult | Manufacturing Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_manufacturing\_self\_investment\_chance\_add | Manufacturing Industries Building Self-Investment Chance | building\_group | additive | percent, neutral |  |
| building\_group\_bg\_manufacturing\_standard\_of\_living\_add | Manufacturing Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_manufacturing\_tax\_mult | Manufacturing Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_manufacturing\_throughput\_add | Manufacturing Industries Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_manufacturing\_unincorporated\_throughput\_add | Manufacturing Industries Throughput in Unincorporated States | building\_group | additive | percent, good |  |
| building\_group\_bg\_military\_construction\_efficiency\_add | Military Buildings Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_military\_industry\_allowed\_collectivization\_add | Minimum Worker-Owned Military Industries Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_military\_industry\_construction\_efficiency\_add | Military Industries Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_military\_industry\_engineers\_mortality\_mult | Mortality of Engineers employed in Military Industry | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_military\_industry\_laborers\_mortality\_mult | Mortality of Laborers employed in Military Industry | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_military\_industry\_machinists\_mortality\_mult | Mortality of Machinists employed in Military Industry | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_military\_industry\_mortality\_mult | Military Industry Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_military\_industry\_throughput\_add | Military Industries Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_military\_throughput\_add | Military Buildings Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_mining\_allowed\_collectivization\_add | Minimum Worker-Owned Mines Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_mining\_employee\_mult | Mining Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_engineers\_mortality\_mult | Mortality of Engineers employed in Mines | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_engineers\_standard\_of\_living\_add | Standard of Living of Engineers employed in Mines | building\_group | additive | good |  |
| building\_group\_bg\_mining\_laborers\_mortality\_mult | Mortality of Laborers employed in Mines | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_laborers\_standard\_of\_living\_add | Standard of Living of Laborers employed in Mines | building\_group | additive | good |  |
| building\_group\_bg\_mining\_machinists\_mortality\_mult | Mortality of Machinists employed in Mines | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_machinists\_standard\_of\_living\_add | Standard of Living of Machinists employed in Mines | building\_group | additive | good |  |
| building\_group\_bg\_mining\_mortality\_mult | Mining Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_slaves\_mortality\_mult | Mortality of Slaves employed in Mines | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_mining\_standard\_of\_living\_add | Mining Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_mining\_tax\_mult | Mining Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_mining\_throughput\_add | Mines Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_mining\_unincorporated\_throughput\_add | Mines Throughput in Unincorporated States | building\_group | additive | percent, good |  |
| building\_group\_bg\_oil\_extraction\_employee\_mult | Oil Industry Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_engineers\_mortality\_mult | Mortality of Engineers employed in Oil Extraction | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_laborers\_mortality\_mult | Mortality of Laborers employed in Oil Extraction | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_machinists\_mortality\_mult | Mortality of Machinists employed in Oil Extraction | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_mortality\_mult | Oil Industry Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_oil\_extraction\_standard\_of\_living\_add | Oil Industry Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_oil\_extraction\_tax\_mult | Oil Industry Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_oil\_extraction\_throughput\_add | Oil Extractors Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_plantations\_allowed\_collectivization\_add | Minimum Worker-Owned Plantations Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_plantations\_construction\_efficiency\_add | Plantations Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_plantations\_employee\_mult | Plantation Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_farmers\_mortality\_mult | Mortality of Farmers employed on Plantations | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_infrastructure\_usage\_mult | Infrastructure Usage of Plantations | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_laborers\_mortality\_mult | Mortality of Laborers employed on Plantations | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_mortality\_mult | Plantation Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_self\_investment\_chance\_add | Plantations Building Self-Investment Chance | building\_group | additive | percent, neutral |  |
| building\_group\_bg\_plantations\_slaves\_mortality\_mult | Mortality of Slaves employed in Plantations | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_plantations\_standard\_of\_living\_add | Plantation Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_plantations\_tax\_mult | Plantation Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_plantations\_throughput\_add | Plantations Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_plantations\_unincorporated\_throughput\_add | Plantations Throughput in Unincorporated States | building\_group | additive | percent, good |  |
| building\_group\_bg\_power\_allowed\_collectivization\_add | Minimum Worker-Owned Power Plants Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_power\_self\_investment\_chance\_add | Power Plants Building Self-Investment Chance | building\_group | additive | percent, neutral |  |
| building\_group\_bg\_private\_infrastructure\_allowed\_collectivization\_add | Minimum Worker-Owned Private Infrastructure Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_ranching\_allowed\_collectivization\_add | Minimum Worker-Owned Ranches Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_ranching\_construction\_efficiency\_add | Ranches Construction Efficiency | building\_group | additive | percent, good |  |
| building\_group\_bg\_ranching\_farmers\_mortality\_mult | Mortality of Farmers employed in Ranching | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_ranching\_infrastructure\_usage\_mult | Infrastructure Usage of Ranches | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_ranching\_laborers\_mortality\_mult | Mortality of Laborers employed in Ranching | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_ranching\_mortality\_mult | Ranching Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_ranching\_self\_investment\_chance\_add | Ranches Building Self-Investment Chance | building\_group | additive | percent, neutral |  |
| building\_group\_bg\_ranching\_standard\_of\_living\_add | Ranching Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_ranching\_tax\_mult | Ranching Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_ranching\_throughput\_add | Ranches Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_rubber\_employee\_mult | Rubber Industry Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_rubber\_laborers\_mortality\_mult | Mortality of Laborers employed on Rubber Plantations | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_rubber\_mortality\_mult | Rubber Industry Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_rubber\_slaves\_mortality\_mult | Mortality of Slaves employed on Rubber Plantations | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_rubber\_standard\_of\_living\_add | Rubber Industry Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_rubber\_tax\_mult | Rubber Industry Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_rubber\_throughput\_add | Rubber Plantations Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_rubber\_unincorporated\_throughput\_add | Rubber Plantations Throughput in Unincorporated States | building\_group | additive | percent, good |  |
| building\_group\_bg\_service\_employee\_mult | Urban Center Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_service\_mortality\_mult | Urban Center Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_service\_standard\_of\_living\_add | Urban Center Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_service\_tax\_mult | Urban Center Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_service\_throughput\_add | Service Industries Throughput | building\_group | additive | percent, good |  |
| building\_group\_bg\_subsistence\_agriculture\_allowed\_collectivization\_add | Minimum Worker-Owned Subsistence Agriculture Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_subsistence\_agriculture\_peasants\_standard\_of\_living\_add | Standard of Living of Peasants employed in Subsistence Agriculture | building\_group | additive | good |  |
| building\_group\_bg\_subsistence\_ranching\_allowed\_collectivization\_add | Minimum Worker-Owned Subsistence Ranching Building Levels | building\_group | additive | percent, good |  |
| building\_group\_bg\_subsistence\_ranching\_peasants\_standard\_of\_living\_add | Standard of Living of Peasants employed in Subsistence Ranching | building\_group | additive | good |  |
| building\_group\_bg\_whaling\_employee\_mult | Whaling Employees | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_whaling\_laborers\_mortality\_mult | Mortality of Laborers employed in Whaling Stations | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_whaling\_machinists\_mortality\_mult | Mortality of Machinists employed in Whaling Stations | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_whaling\_mortality\_mult | Whaling Employee Mortality | building\_group | multiplicative | percent, bad |  |
| building\_group\_bg\_whaling\_standard\_of\_living\_add | Whaling Employee Standard of Living | building\_group | additive | good |  |
| building\_group\_bg\_whaling\_tax\_mult | Whaling Tax Income | building\_group | multiplicative | percent, neutral |  |
| building\_group\_bg\_whaling\_throughput\_add | Whaling Industry Throughput | building\_group | additive | percent, good |  |
| building\_iron\_mine\_throughput\_add | Iron Mines building Throughput | building | additive | percent, good |  |
| building\_job\_attractiveness\_mult | Job Attractiveness | building | multiplicative | percent, good |  |
| building\_laborers\_job\_attractiveness\_mult | Job Attractiveness for Laborers | building | multiplicative | percent, good |  |
| building\_laborers\_mortality\_mult | Mortality of Laborers | building | multiplicative | percent, bad |  |
| building\_laborers\_shares\_add | Laborers Pop Ownership Shares | building | additive | neutral |  |
| building\_laborers\_standard\_of\_living\_add | Standard of Living for Laborers | building | additive | good |  |
| building\_lead\_mine\_throughput\_add | Lead Mines building Throughput | building | additive | percent, good |  |
| building\_level\_bureaucracy\_cost\_add | Building Level Bureaucracy Cost | building | additive | bad |  |
| building\_livestock\_ranch\_throughput\_add | Livestock Ranches building Throughput | building | additive | percent, good |  |
| building\_machinists\_job\_attractiveness\_mult | Job Attractiveness for Machinists | building | multiplicative | percent, good |  |
| building\_machinists\_mortality\_mult | Mortality of Machinists | building | multiplicative | percent, bad |  |
| building\_machinists\_shares\_add | Machinists Pop Ownership Shares | building | additive | neutral |  |
| building\_machinists\_standard\_of\_living\_add | Standard of Living for Machinists | building | additive | good |  |
| building\_maize\_farm\_throughput\_add | Maize Farms building Throughput | building | additive | percent, good |  |
| building\_millet\_farm\_throughput\_add | Millet Farms building Throughput | building | additive | percent, good |  |
| building\_minimum\_incorporated\_subsistence\_employment\_add | Protected Subsistence Employment in Incorporated States | building | additive | percent, neutral |  |
| building\_minimum\_wage\_mult | Building Wage Target | building | multiplicative | percent, neutral |  |
| building\_mobilization\_cost\_mult | Mobilization Goods Requirements | building | multiplicative | percent, bad |  |
| building\_motor\_industry\_throughput\_add | Motor Industries building Throughput | building | additive | percent, good |  |
| building\_munition\_plant\_throughput\_add | Munition Plants building Throughput | building | additive | percent, good |  |
| building\_nationalization\_cost\_mult | Nationalization Compensation | building | multiplicative | percent, bad |  |
| building\_nationalization\_investment\_return\_add | Nationalization Investment Return | building | additive | percent, good |  |
| building\_nationalization\_radicals\_mult | Radicals from Nationalization | building | multiplicative | percent, bad |  |
| building\_naval\_administration\_hiring\_rate\_mult | Naval Administration Hiring Speed | building | multiplicative | percent, good |  |
| building\_naval\_administration\_throughput\_add | Naval Administration building Throughput | building | additive | percent, good |  |
| building\_naval\_administration\_training\_rate\_add | Naval Administration Training Rate | building | additive | good |  |
| building\_naval\_administration\_training\_rate\_mult | Naval Administration Training Rate | building | multiplicative | percent, good |  |
| building\_officers\_job\_attractiveness\_mult | Job Attractiveness for Officers | building | multiplicative | percent, good |  |
| building\_officers\_shares\_add | Officers Pop Ownership Shares | building | additive | neutral |  |
| building\_officers\_standard\_of\_living\_add | Standard of Living for Officers | building | additive | good |  |
| building\_opium\_plantation\_throughput\_add | Opium Plantations building Throughput | building | additive | percent, good |  |
| building\_paper\_mill\_throughput\_add | Paper Mills building Throughput | building | additive | percent, good |  |
| building\_peasants\_job\_attractiveness\_mult | Job Attractiveness for Peasants | building | multiplicative | percent, good |  |
| building\_peasants\_standard\_of\_living\_add | Standard of Living for Peasants | building | additive | good |  |
| building\_port\_throughput\_add | Port building Throughput | building | additive | percent, good |  |
| building\_power\_plant\_throughput\_add | Power Plants building Throughput | building | additive | percent, good |  |
| building\_railway\_throughput\_add | Railway building Throughput | building | additive | percent, good |  |
| building\_rice\_farm\_throughput\_add | Rice Farms building Throughput | building | additive | percent, good |  |
| building\_rubber\_plantation\_throughput\_add | Rubber Plantations building Throughput | building | additive | percent, good |  |
| building\_rye\_farm\_throughput\_add | Rye Farms building Throughput | building | additive | percent, good |  |
| building\_self\_investment\_chance\_add | Building Self-Investment Chance | building | additive | percent, neutral |  |
| building\_shipyard\_throughput\_add | Shipyards building Throughput | building | additive | percent, good |  |
| building\_shopkeepers\_job\_attractiveness\_mult | Job Attractiveness for Shopkeepers | building | multiplicative | percent, good |  |
| building\_shopkeepers\_shares\_add | Shopkeepers Pop Ownership Shares | building | additive | neutral |  |
| building\_shopkeepers\_standard\_of\_living\_add | Standard of Living for Shopkeepers | building | additive | good |  |
| building\_silk\_plantation\_throughput\_add | Silk Plantations building Throughput | building | additive | percent, good |  |
| building\_slaves\_mortality\_mult | Mortality of Slaves | building | multiplicative | percent, bad |  |
| building\_slaves\_standard\_of\_living\_add | Standard of Living for Slaves | building | additive | good |  |
| building\_soldiers\_job\_attractiveness\_mult | Job Attractiveness for Servicemen | building | multiplicative | percent, good |  |
| building\_soldiers\_shares\_add | Servicemen Pop Ownership Shares | building | additive | neutral |  |
| building\_soldiers\_standard\_of\_living\_add | Standard of Living for Servicemen | building | additive | good |  |
| building\_steel\_mill\_throughput\_add | Steel Mills building Throughput | building | additive | percent, good |  |
| building\_subsistence\_farm\_throughput\_add | Subsistence Farms building Throughput | building | additive | percent, good |  |
| building\_subsistence\_output\_add | Subsistence Output | building | additive | neutral |  |
| building\_subsistence\_output\_mult | Subsistence Output | building | multiplicative | percent, neutral |  |
| building\_sugar\_plantation\_throughput\_add | Sugar Plantations building Throughput | building | additive | percent, good |  |
| building\_sulfur\_mine\_throughput\_add | Sulfur Mines building Throughput | building | additive | percent, good |  |
| building\_synthetics\_plant\_throughput\_add | Synthetics Plants building Throughput | building | additive | percent, good |  |
| building\_tea\_plantation\_throughput\_add | Tea Plantations building Throughput | building | additive | percent, good |  |
| building\_textile\_mill\_throughput\_add | Textile Mills building Throughput | building | additive | percent, good |  |
| building\_throughput\_add | Throughput | building | additive | percent, good |  |
| building\_tobacco\_plantation\_throughput\_add | Tobacco Plantations building Throughput | building | additive | percent, good |  |
| building\_tooling\_workshop\_throughput\_add | Tooling Workshops building Throughput | building | additive | percent, good |  |
| building\_trade\_center\_throughput\_add | Trade Center building Throughput | building | additive | percent, good |  |
| building\_training\_rate\_add | Training Rate | building | additive | good |  |
| building\_training\_rate\_mult | Training Rate | building | multiplicative | percent, good |  |
| building\_unincorporated\_subsistence\_output\_mult | Subsistence Output in Unincorporated States | building | multiplicative | percent, good |  |
| building\_unincorporated\_throughput\_add | Throughput in Unincorporated States | building | additive | percent, good |  |
| building\_university\_throughput\_add | University building Throughput | building | additive | percent, good |  |
| building\_urban\_center\_throughput\_add | Urban Center building Throughput | building | additive | percent, good |  |
| building\_vineyard\_throughput\_add | Vineyards building Throughput | building | additive | percent, good |  |
| building\_whaling\_station\_throughput\_add | Whaling Stations building Throughput | building | additive | percent, good |  |
| building\_wheat\_farm\_throughput\_add | Wheat Farms building Throughput | building | additive | percent, good |  |
| building\_working\_conditions\_mult | Dangerous Working Conditions | building | multiplicative | percent, bad |  |
| character\_advancement\_speed\_add | General Advancement Speed | character | additive | good |  |
| character\_advancement\_speed\_mult | General Advancement Speed | character | multiplicative | percent, good |  |
| character\_battle\_condition\_aggressive\_maneuver\_mult | Aggressive Maneuver Chance | character | multiplicative | percent, neutral |  |
| character\_battle\_condition\_blunder\_mult | Blunder Chance | character | multiplicative | percent, bad |  |
| character\_battle\_condition\_broken\_supply\_line\_mult | Broken Supply Line Chance | character | multiplicative | percent, bad |  |
| character\_battle\_condition\_camouflaged\_mult | Camouflaged Chance | character | multiplicative | percent, good |  |
| character\_battle\_condition\_careful\_maneuver\_mult | Careful Maneuver Chance | character | multiplicative | percent, good |  |
| character\_battle\_condition\_charted\_terrain\_mult | Charted Terrain Chance | character | multiplicative | percent, good |  |
| character\_battle\_condition\_death\_from\_below\_mult | Death from Below Chance | character | multiplicative | percent, good |  |
| character\_battle\_condition\_dug\_in\_mult | Dug In Chance | character | multiplicative | percent, good |  |
| character\_battle\_condition\_exhausted\_mult | Exhausted Chance | character | multiplicative | percent, bad |  |
| character\_battle\_condition\_good\_visibility\_mult | Good Visibility Chance | character | multiplicative | percent, good |  |
| character\_battle\_condition\_guerilla\_ambush\_mult | Ambush Chance | character | multiplicative | percent, good |  |
| character\_battle\_condition\_logistics\_secured\_mult | Logistics Secured Chance | character | multiplicative | percent, good |  |
| character\_battle\_condition\_lost\_mult | Lost Chance | character | multiplicative | percent, bad |  |
| character\_battle\_condition\_mud\_mult | Mud Chance | character | multiplicative | percent, bad |  |
| character\_battle\_condition\_poor\_visibility\_mult | Poor Visibility Chance | character | multiplicative | percent, bad |  |
| character\_battle\_condition\_ramming\_maneuver\_mult | Ramming Maneuver Chance | character | multiplicative | percent, neutral |  |
| character\_battle\_condition\_rapid\_advance\_mult | Rapid Advance Chance | character | multiplicative | percent, good |  |
| character\_battle\_condition\_rough\_waters\_mult | Rough Waters Chance | character | multiplicative | percent, neutral |  |
| character\_battle\_condition\_strong\_winds\_mult | Strong Winds Chance | character | multiplicative | percent, neutral |  |
| character\_battle\_condition\_surprise\_maneuver\_mult | Surprise Maneuver Chance | character | multiplicative | percent, good |  |
| character\_blockade\_mult | Admiral Blockade Strength | character | multiplicative | percent, good |  |
| character\_command\_limit\_add | Command Limit | character | additive | good |  |
| character\_command\_limit\_mult | Command Limit | character | multiplicative | percent, good |  |
| character\_commander\_loyalty\_add | Commander Loyalty | character | additive | good |  |
| character\_convoy\_protection\_mult | Admiral Merchant Marine Protection | character | multiplicative | percent, good |  |
| character\_convoy\_raiding\_mult | Admiral Merchant Marine Raiding Efficiency | character | multiplicative | percent, good |  |
| character\_coup\_strength\_add | Coup Strength | character | additive | neutral |  |
| character\_coup\_strength\_mult | Coup Strength | character | multiplicative | percent, neutral |  |
| character\_expedition\_events\_explorer\_mult | Expedition Opportunity | character | multiplicative | percent, good |  |
| character\_health\_add | Character Health | character | additive | percent, good |  |
| character\_interception\_add | Admiral Interception Chance | character | additive | good |  |
| character\_loyalty\_add | Loyalty | character | additive | good |  |
| character\_loyalty\_mult | Loyalty | character | multiplicative | percent, good |  |
| character\_max\_offensive\_battles\_add | Max Offensive Battles | character | additive | good |  |
| character\_naval\_mission\_area\_add | Naval Mission Area Size | character | additive | good |  |
| character\_piracy\_goods\_capacity\_mult | Pirating Capacity | character | multiplicative | percent, good |  |
| character\_popularity\_add | Popularity | character | additive | good |  |
| character\_prominence\_add | Prominence | character | additive | neutral |  |
| character\_raid\_supply\_add | Admiral Raid Supply Chance | character | additive | good |  |
| country\_academics\_pol\_str\_mult | Political Strength of Academics | country | multiplicative | percent, neutral |  |
| country\_academics\_voting\_power\_add | Political Strength from the Votes of Academics | country | additive | neutral | - Object-based - Enables elections |
| country\_acceptance\_homeland\_add | Acceptance from Homeland | country | additive | good |  |
| country\_acceptance\_no\_shared\_heritage\_trait\_add | Acceptance from no shared Heritage Traits | country | additive | good |  |
| country\_acceptance\_no\_shared\_language\_trait\_add | Acceptance from no shared Language Traits | country | additive | good |  |
| country\_acceptance\_no\_shared\_religious\_trait\_add | Acceptance from no shared Religious Traits | country | additive | good |  |
| country\_acceptance\_no\_shared\_tradition\_trait\_add | Acceptance from no shared Tradition Traits | country | additive | good |  |
| country\_acceptance\_not\_homeland\_add | Acceptance from not Homeland | country | additive | good |  |
| country\_acceptance\_primary\_culture\_add | Acceptance from Primary Culture | country | additive | good |  |
| country\_acceptance\_shared\_heritage\_trait\_add | Acceptance from Heritage Trait | country | additive | good |  |
| country\_acceptance\_shared\_heritage\_trait\_group\_add | Acceptance from Heritage Trait Group | country | additive | good |  |
| country\_acceptance\_shared\_language\_trait\_add | Acceptance from Language Trait | country | additive | good |  |
| country\_acceptance\_shared\_language\_trait\_group\_add | Acceptance from Language Trait Group | country | additive | good |  |
| country\_acceptance\_shared\_religious\_trait\_add | Acceptance from Religious Traits | country | additive | good |  |
| country\_acceptance\_shared\_religious\_trait\_group\_add | Acceptance from Religious Trait Groups | country | additive | good |  |
| country\_acceptance\_shared\_tradition\_trait\_add | Acceptance from Tradition Trait | country | additive | good |  |
| country\_acceptance\_state\_religion\_add | Acceptance from State Religion | country | additive | good |  |
| country\_admiral\_rank\_impact\_mult | Admiral Rank Impact | country | multiplicative | percent, good |  |
| country\_agitator\_slots\_add | Potential Agitators | country | additive | good |  |
| country\_ahead\_of\_time\_research\_penalty\_mult | Ahead of Time Penalty | country | multiplicative | percent, bad |  |
| country\_all\_buildings\_protected\_bool | Disallow Downsizing All Buildings | country | boolean | bad |  |
| country\_allow\_assimilation\_cultural\_erasure\_bool | Allows Assimilation for the Cultural Erasure Status | country | boolean | neutral |  |
| country\_allow\_assimilation\_full\_acceptance\_bool | Allows Assimilation for the Full Acceptance Status | country | boolean | neutral |  |
| country\_allow\_assimilation\_open\_prejudice\_bool | Allows Assimilation for the Open Prejudice Status | country | boolean | neutral |  |
| country\_allow\_assimilation\_second\_rate\_citizen\_bool | Allows Assimilation for the Second-class Citizen Status | country | boolean | neutral |  |
| country\_allow\_assimilation\_violent\_hostility\_bool | Allows Assimilation for the Violent Hostility Status | country | boolean | neutral |  |
| country\_allow\_conversion\_cultural\_erasure\_bool | Allows Conversion for the Cultural Erasure Status | country | boolean | neutral |  |
| country\_allow\_conversion\_full\_acceptance\_bool | Allows Conversion for the Full Acceptance Status | country | boolean | neutral |  |
| country\_allow\_conversion\_open\_prejudice\_bool | Allows Conversion for the Open Prejudice Status | country | boolean | neutral |  |
| country\_allow\_conversion\_second\_rate\_citizen\_bool | Allows Conversion for the Second-class Citizen Status | country | boolean | neutral |  |
| country\_allow\_conversion\_violent\_hostility\_bool | Allows Conversion for the Violent Hostility Status | country | boolean | neutral |  |
| country\_allow\_enacting\_decrees\_in\_subject\_bool | Allow enacting Decrees on Subject States | country | boolean | good |  |
| country\_allow\_multiple\_alliances\_bool | Allow Multiple Alliances | country | boolean | good |  |
| country\_allow\_voting\_cultural\_erasure\_bool | Gives Voting Rights to the Cultural Erasure Status | country | boolean | neutral |  |
| country\_allow\_voting\_full\_acceptance\_bool | Gives Voting Rights to the Full Acceptance Status | country | boolean | neutral |  |
| country\_allow\_voting\_open\_prejudice\_bool | Gives Voting Rights to the Open Prejudice Status | country | boolean | neutral |  |
| country\_allow\_voting\_second\_rate\_citizen\_bool | Gives Voting Rights to the Second-class Citizen Status | country | boolean | neutral |  |
| country\_allow\_voting\_violent\_hostility\_bool | Gives Voting Rights to the Violent Hostility Status | country | boolean | neutral |  |
| country\_amenability\_add | Country Amenability | country | additive | good |  |
| country\_aristocrats\_pol\_str\_mult | Political Strength of Aristocrats | country | multiplicative | percent, neutral |  |
| country\_aristocrats\_voting\_power\_add | Political Strength from the Votes of Aristocrats | country | additive | neutral | - Object-based - Enables elections |
| country\_assimilation\_cultural\_erasure\_mult | Assimilation for the Cultural Erasure Status | country | multiplicative | percent, neutral |  |
| country\_assimilation\_delta\_threshold\_add | Cultural Assimilation Threshold | country | additive | good |  |
| country\_assimilation\_full\_acceptance\_mult | Assimilation for the Full Acceptance Status | country | multiplicative | percent, neutral |  |
| country\_assimilation\_open\_prejudice\_mult | Assimilation for the Open Prejudice Status | country | multiplicative | percent, neutral |  |
| country\_assimilation\_second\_rate\_citizen\_mult | Assimilation for the Second-class Citizen Status | country | multiplicative | percent, neutral |  |
| country\_assimilation\_violent\_hostility\_mult | Assimilation for the Violent Hostility Status | country | multiplicative | percent, neutral |  |
| country\_authority\_add | Authority | country | additive | good |  |
| country\_authority\_mult | Authority | country | multiplicative | percent, good |  |
| country\_authority\_per\_subject\_add | Authority per Subject | country | additive | good |  |
| country\_bg\_manufacturing\_require\_subsidies\_bool | Forced Subsidies for Manufacturing | country | boolean | bad |  |
| country\_block\_government\_reform\_bool | Blocks Government Reform | country | boolean | neutral |  |
| country\_bolster\_attraction\_factor | Bolstered impact on Political Movement attraction | country |  | percent, neutral |  |
| country\_bolster\_cost\_mult | Bolstering cost | country | multiplicative | percent, bad |  |
| country\_brahmins\_acceptance\_min\_add | Minimum Acceptance for the Brahmins Social Class | country | additive | good |  |
| country\_brahmins\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Brahmins Social Class for Brahmins | country | multiplicative | percent, good |  |
| country\_brahmins\_qualification\_growth\_same\_class\_mult | Qualification Growth within Brahmins Social Class | country | multiplicative | percent, good |  |
| country\_bureaucracy\_add | Bureaucracy | country | additive | good |  |
| country\_bureaucracy\_investment\_cost\_factor\_mult | Bureaucracy Institution Cost Multiplier | country | multiplicative | percent, bad |  |
| country\_bureaucracy\_mult | Bureaucracy | country | multiplicative | percent, good |  |
| country\_bureaucrats\_pol\_str\_mult | Political Strength of Bureaucrats | country | multiplicative | percent, neutral |  |
| country\_bureaucrats\_voting\_power\_add | Political Strength from the Votes of Bureaucrats | country | additive | neutral | - Object-based - Enables elections |
| country\_can\_form\_construction\_company\_bool | Can form Construction type Companies | country | boolean | neutral |  |
| country\_can\_impose\_same\_lawgroup\_army\_model\_in\_power\_bloc\_bool | **Impose** same Army Model Law on Bloc Members | country | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_church\_and\_state\_in\_power\_bloc\_bool | **Impose** same Church and State Law on Bloc Members | country | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_citizenship\_in\_power\_bloc\_bool | **Impose** same Citizenship Law on Bloc Members | country | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_colonization\_in\_power\_bloc\_bool | **Impose** same Colonization Law on Bloc Members | country | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_distribution\_of\_power\_in\_power\_bloc\_bool | **Impose** same Distribution of Power Law on Bloc Members | country | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_education\_system\_in\_power\_bloc\_bool | **Impose** same Education System Law on Bloc Members | country | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_governance\_principles\_in\_power\_bloc\_bool | **Impose** same Governance Principles Law on Bloc Members | country | boolean | good |  |
| country\_can\_impose\_same\_lawgroup\_policing\_in\_power\_bloc\_bool | **Impose** same Policing Law on Bloc Members | country | boolean | good |  |
| country\_can\_only\_conscript\_peasants\_bool | Allows only Infantry Conscript Battalions | country | boolean | good |  |
| country\_cannot\_be\_subjugated\_bool | Cannot be Subjugated | country | boolean | neutral |  |
| country\_cannot\_be\_target\_for\_law\_imposition\_bool | Cannot be targeted for Law Imposition | country | boolean | good |  |
| country\_cannot\_cancel\_law\_enactment\_bool | Disallow}} Cancel Law Enactment | country | boolean | bad |  |
| country\_cannot\_enact\_laws\_bool | Disallow}} Enacting Laws | country | boolean | bad |  |
| country\_cannot\_join\_power\_bloc\_bool | Cannot join Power Blocks | country | boolean | neutral |  |
| country\_cannot\_start\_law\_enactment\_bool | Disallow}} Start Law Enactment | country | boolean | bad |  |
| country\_capitalists\_pol\_str\_mult | Political Strength of Capitalists | country | multiplicative | percent, neutral |  |
| country\_capitalists\_voting\_power\_add | Political Strength from the Votes of Capitalists | country | additive | neutral | - Object-based - Enables elections |
| country\_clergymen\_pol\_str\_mult | Political Strength of Clergymen | country | multiplicative | percent, neutral |  |
| country\_clergymen\_voting\_power\_add | Political Strength from the Votes of Clergymen | country | additive | neutral | - Object-based - Enables elections |
| country\_clerks\_pol\_str\_mult | Political Strength of Clerks | country | multiplicative | percent, neutral |  |
| country\_clerks\_voting\_power\_add | Political Strength from the Votes of Clerks | country | additive | neutral | - Object-based - Enables elections |
| country\_company\_construction\_efficiency\_bonus\_add | Company Construction Bonus | country | additive | percent, good |  |
| country\_company\_throughput\_bonus\_add | Company Throughput Bonus | country | additive | percent, good |  |
| country\_construction\_add | Construction | country | additive | good |  |
| country\_construction\_goods\_cost\_mult | Construction Goods Cost | country | multiplicative | percent, bad |  |
| country\_consumption\_tax\_cost\_mult | Consumption Tax Cost | country | multiplicative | percent, bad |  |
| country\_conversion\_delta\_threshold\_add | Religious Conversion Threshold | country | additive | good |  |
| country\_coup\_resistance\_add | Coup Resistance | country | additive | neutral |  |
| country\_coup\_resistance\_mult | Coup Resistance | country | multiplicative | percent, neutral |  |
| country\_dalit\_acceptance\_max\_add | Maximum Acceptance for the Dalit Social Class | country | additive | bad |  |
| country\_dalit\_cultural\_acceptance\_mult | Cultural Acceptance for the Dalit Social Class | country | multiplicative | percent, good |  |
| country\_dalit\_education\_access\_add | Education Access for the Dalit Social Class | country | additive | good |  |
| country\_dalit\_education\_access\_mult | Education Access for the Dalit Social Class | country | multiplicative | percent, good |  |
| country\_dalit\_qualification\_growth\_add | Qualification Growth for the Dalit Social Class | country | additive | good |  |
| country\_dalit\_qualification\_growth\_mult | Qualification Growth for the Dalit Social Class | country | multiplicative | percent, good |  |
| country\_dalit\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Dalit Social Class for Dalit | country | multiplicative | percent, good |  |
| country\_dalit\_qualification\_growth\_same\_class\_mult | Qualification Growth within Dalit Social Class | country | multiplicative | percent, good |  |
| country\_damage\_relations\_speed\_mult | Damage Relations Speed | country | multiplicative | percent, good |  |
| country\_diplomatic\_play\_maneuvers\_add | Maneuvers per Diplomatic Play | country | additive | good |  |
| country\_diplomatic\_play\_maneuvers\_mult | Maneuvers per Diplomatic Play | country | multiplicative | percent, good |  |
| country\_diplomatic\_reputation\_add | Diplomatic Reputation | country | additive | good |  |
| country\_disable\_investment\_pool\_bool | Disable Investment Pool (except for Companies) | country | boolean | bad |  |
| country\_disable\_nationalization\_bool | Disable Nationalization | country | boolean | bad |  |
| country\_disable\_nationalization\_without\_compensation\_bool | Disable Nationalization without compensation | country | boolean | bad |  |
| country\_disable\_non\_company\_privatization\_bool | Disable Privatization (except for Companies) | country | boolean | bad |  |
| country\_disallow\_aggressive\_plays\_bool | Disallow Aggressive Diplomatic Plays | country | boolean | neutral |  |
| country\_disallow\_agitator\_invites\_bool | Disallowed from inviting Exiles | country | boolean | neutral |  |
| country\_disallow\_government\_work\_cultural\_erasure\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Cultural Erasure Status | country | boolean | neutral |  |
| country\_disallow\_government\_work\_full\_acceptance\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Full Acceptance Status | country | boolean | neutral |  |
| country\_disallow\_government\_work\_open\_prejudice\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Open Prejudice Status | country | boolean | neutral |  |
| country\_disallow\_government\_work\_second\_rate\_citizen\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Second-class Citizen Status | country | boolean | neutral |  |
| country\_disallow\_government\_work\_violent\_hostility\_bool | Disallow Upper and Middle Strata work in Government Buildings for the Violent Hostility Status | country | boolean | neutral |  |
| country\_disallow\_law\_no\_colonial\_affairs\_bool | Disallow No Colonial Affairs | country | boolean | bad |  |
| country\_disallow\_law\_no\_police\_bool | Disallow No Police | country | boolean | bad |  |
| country\_disallow\_law\_no\_schools\_bool | Disallow No Schools | country | boolean | bad |  |
| country\_disallow\_military\_work\_cultural\_erasure\_bool | Disallow work in Military Buildings for the Cultural Erasure Status | country | boolean | neutral |  |
| country\_disallow\_military\_work\_full\_acceptance\_bool | Disallow work in Military Buildings for the Full Acceptance Status | country | boolean | neutral |  |
| country\_disallow\_military\_work\_open\_prejudice\_bool | Disallow work in Military Buildings for the Open Prejudice Status | country | boolean | neutral |  |
| country\_disallow\_military\_work\_second\_rate\_citizen\_bool | Disallow work in Military Buildings for the Second-class Citizen Status | country | boolean | neutral |  |
| country\_disallow\_military\_work\_violent\_hostility\_bool | Disallow work in Military Buildings for the Violent Hostility Status | country | boolean | neutral |  |
| country\_disallow\_trade\_bool | Disable Trade Centers | country | boolean | bad |  |
| country\_disallow\_trade\_outside\_canton\_bool | Disable Trade Centers outside Western Guangdong | country | boolean | bad | - Script-only |
| country\_disallow\_trade\_outside\_kyushu\_bool | Disable Trade Centers outside Kyushu | country | boolean | bad |  |
| country\_economic\_dependence\_on\_overlord\_add | Economic Dependence on Overlord | country | additive | bad |  |
| country\_education\_fervor\_add | Education Institution Fervor | country | additive | neutral |  |
| country\_electoral\_confidence\_impact\_mult | Electoral Confidence Impact | country | multiplicative | percent, neutral |  |
| country\_electoral\_confidence\_over\_time | Monthly Electoral Confidence Change | country |  | percent, good |  |
| country\_enactment\_success\_chance\_law\_anarchy\_add | Enactment Success chance for Anarchy | country | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_autocracy\_add | Enactment Success chance for Autocracy | country | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_oligarchy\_add | Enactment Success chance for Oligarchy | country | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_public\_schools\_add | Enactment Success chance for Public Schools | country | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_single\_party\_state\_add | Enactment Success chance for Single-Party State | country | additive | percent, good |  |
| country\_enactment\_success\_chance\_law\_technocracy\_add | Enactment Success chance for Technocracy | country | additive | percent, good |  |
| country\_enactment\_time\_law\_anarchy\_mult | country\_enactment\_time\_law\_anarchy\_mult | country | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_autocracy\_mult | country\_enactment\_time\_law\_autocracy\_mult | country | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_oligarchy\_mult | country\_enactment\_time\_law\_oligarchy\_mult | country | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_public\_schools\_mult | Enactment Time for Public Schools | country | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_single\_party\_state\_mult | country\_enactment\_time\_law\_single\_party\_state\_mult | country | multiplicative | percent, bad |  |
| country\_enactment\_time\_law\_technocracy\_mult | Enactment Time for Technocracy | country | multiplicative | percent, bad |  |
| country\_engineers\_pol\_str\_mult | Political Strength of Engineers | country | multiplicative | percent, neutral |  |
| country\_engineers\_voting\_power\_add | Political Strength from the Votes of Engineers | country | additive | neutral | - Object-based - Enables elections |
| country\_expedition\_events\_explorer\_mult | Expedition Opportunity | country | multiplicative | percent, good |  |
| country\_expenses\_add | Government Expenses | country | additive | bad |  |
| country\_farmers\_pol\_str\_mult | Political Strength of Farmers | country | multiplicative | percent, neutral |  |
| country\_farmers\_voting\_power\_add | Political Strength from the Votes of Farmers | country | additive | neutral | - Object-based - Enables elections |
| country\_financial\_districts\_buy\_farms\_likelihood | Financial Districts investment into Plantations, Ranches, and Agriculture | country |  | percent, good |  |
| country\_flagship\_interest\_gain\_mult | Flagship Involvement Gain | country | multiplicative | percent, good |  |
| country\_forbid\_electoral\_fraud\_bool | Forbid Electoral Manipulation | country | boolean | neutral |  |
| country\_forbid\_monopoly\_bool | Forbid Monopolies | country | boolean | bad |  |
| country\_force\_privatization\_bool | Force Privatization | country | boolean | neutral |  |
| country\_foreign\_collectivization\_bool | Foreign Collectivization | country | boolean | neutral |  |
| country\_frankenstein\_company\_bool | Experimental Modules Operational | country | boolean | neutral |  |
| country\_free\_charters\_add | Free Company Charters | country | additive | good |  |
| country\_general\_rank\_impact\_mult | General Rank Impact | country | multiplicative | percent, good |  |
| country\_gold\_reserve\_limit\_mult | Gold reserve limit | country | multiplicative | percent, good |  |
| country\_government\_buildings\_protected\_bool | Disallow Downsizing Government Buildings | country | boolean | bad |  |
| country\_government\_dividends\_efficiency\_add | Government Dividends Efficiency | country | additive | percent, good |  |
| country\_government\_dividends\_reinvestment\_add | Government Dividends Reinvestment | country | additive | percent, neutral |  |
| country\_government\_dividends\_waste\_add | Government Dividends Waste | country | additive | percent, bad |  |
| country\_government\_wages\_mult | Government Wages | country | multiplicative | percent, neutral |  |
| country\_higher\_diplomatic\_acceptance\_same\_religion\_bool | Higher Diplomatic Proposal Acceptance for Countries with same Religion | country | boolean | good |  |
| country\_higher\_leverage\_from\_economic\_dependence\_bool | Increased Leverage from Economic Dependence | country | boolean | good |  |
| country\_improve\_relations\_speed\_mult | Improve Relations Speed | country | multiplicative | percent, good |  |
| country\_infamy\_decay\_mult | Infamy Decay | country | multiplicative | percent, good |  |
| country\_infamy\_generation\_against\_unrecognized\_mult | Infamy Generation against Unrecognized Powers | country | multiplicative | percent, bad |  |
| country\_infamy\_generation\_mult | Infamy Generation | country | multiplicative | percent, bad |  |
| country\_influence\_add | Influence | country | additive | good |  |
| country\_influence\_mult | Influence | country | multiplicative | percent, good |  |
| country\_initiator\_war\_goal\_maneuver\_cost\_mult | War Goal Maneuver cost for the Diplomatic Play Initiator | country | multiplicative | percent, bad |  |
| country\_institution\_colonial\_affairs\_max\_investment\_add | Max Colonial Affairs Institution Investment | country | additive | good |  |
| country\_institution\_cost\_institution\_colonial\_affairs\_mult | Bureaucracy Cost of Colonial Affairs | country | multiplicative | percent, bad |  |
| country\_institution\_cost\_institution\_health\_system\_mult | Bureaucracy Cost of Health System | country | multiplicative | percent, bad |  |
| country\_institution\_cost\_institution\_police\_mult | Bureaucracy Cost of Law Enforcement | country | multiplicative | percent, bad |  |
| country\_institution\_cost\_institution\_schools\_mult | Bureaucracy Cost of Education | country | multiplicative | percent, bad |  |
| country\_institution\_cost\_institution\_social\_security\_mult | Bureaucracy Cost of Social Security | country | multiplicative | percent, bad |  |
| country\_institution\_health\_system\_max\_investment\_add | Max Health System Institution Investment | country | additive | good |  |
| country\_institution\_home\_affairs\_max\_investment\_add | Max Home Affairs Institution Investment | country | additive | good |  |
| country\_institution\_impact\_institution\_health\_system\_mult | Impact of Health System | country | multiplicative | percent, good |  |
| country\_institution\_police\_max\_investment\_add | Max Law Enforcement Institution Investment | country | additive | good |  |
| country\_institution\_schools\_max\_investment\_add | Max Education Institution Investment | country | additive | good |  |
| country\_institution\_size\_change\_speed\_institution\_colonial\_affairs\_mult | Institution Size Change Speed for Colonial Affairs | country | multiplicative | percent, good |  |
| country\_institution\_size\_change\_speed\_institution\_police\_mult | Institution Size Change Speed for Law Enforcement | country | multiplicative | percent, good |  |
| country\_institution\_size\_change\_speed\_institution\_schools\_mult | Institution Size Change Speed for Education | country | multiplicative | percent, good |  |
| country\_institution\_size\_change\_speed\_mult | Institution Size Change Speed | country | multiplicative | percent, good |  |
| country\_institution\_social\_security\_max\_investment\_add | Max Social Security Institution Investment | country | additive | good |  |
| country\_institution\_workplace\_safety\_max\_investment\_add | Max Workplace Safety Office Institution Investment | country | additive | good |  |
| country\_je\_korea\_action\_cost | country\_je\_korea\_action\_cost | country |  | percent, bad |  |
| country\_join\_power\_bloc\_member\_in\_defensive\_plays\_bool | Can call Power Bloc members with the Call Ally Sway in **defensive** Diplomatic Plays | country | boolean | neutral |  |
| country\_join\_power\_bloc\_member\_in\_plays\_bool | Can call Power Bloc members with the Call Ally Sway in **all** Diplomatic Plays | country | boolean | neutral |  |
| country\_kshatriyas\_acceptance\_max\_add | Maximum Acceptance for the Kshatriyas Social Class | country | additive | bad |  |
| country\_kshatriyas\_acceptance\_min\_add | Minimum Acceptance for the Kshatriyas Social Class | country | additive | good |  |
| country\_kshatriyas\_cultural\_acceptance\_mult | Cultural Acceptance for the Kshatriyas Social Class | country | multiplicative | percent, good |  |
| country\_kshatriyas\_education\_access\_add | Education Access for the Kshatriyas Social Class | country | additive | good |  |
| country\_kshatriyas\_education\_access\_mult | Education Access for the Kshatriyas Social Class | country | multiplicative | percent, good |  |
| country\_kshatriyas\_qualification\_growth\_add | Qualification Growth for the Kshatriyas Social Class | country | additive | good |  |
| country\_kshatriyas\_qualification\_growth\_mult | Qualification Growth for the Kshatriyas Social Class | country | multiplicative | percent, good |  |
| country\_kshatriyas\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Kshatriyas Social Class for Kshatriyas | country | multiplicative | percent, good |  |
| country\_kshatriyas\_qualification\_growth\_same\_class\_mult | Qualification Growth within Kshatriyas Social Class | country | multiplicative | percent, good |  |
| country\_laborers\_pol\_str\_mult | Political Strength of Laborers | country | multiplicative | percent, neutral |  |
| country\_laborers\_voting\_power\_add | Political Strength from the Votes of Laborers | country | additive | neutral | - Object-based - Enables elections |
| country\_law\_enactment\_imposition\_success\_add | Imposed Enactment Success Chance | country | additive | percent, good |  |
| country\_law\_enactment\_max\_setbacks\_add | Maximum Law Enactment Setbacks | country | additive | good |  |
| country\_law\_enactment\_stall\_add | Enactment Stall Chance | country | additive | percent, bad |  |
| country\_law\_enactment\_stall\_mult | Enactment Stall Chance | country | multiplicative | percent, bad |  |
| country\_law\_enactment\_success\_add | Enactment Success Chance | country | additive | percent, good |  |
| country\_law\_enactment\_time\_mult | Enactment Time | country | multiplicative | percent, bad |  |
| country\_leader\_has\_law\_enactment\_success\_mult | Power Bloc Legal Synergy | country | multiplicative | percent, good |  |
| country\_legitimacy\_base\_add | Legitimacy | country | additive | good |  |
| country\_legitimacy\_govt\_leader\_clout\_add | Legitimacy based on Government Leader Clout | country | additive | good |  |
| country\_legitimacy\_govt\_size\_add | Government size allowance | country | additive | good |  |
| country\_legitimacy\_govt\_total\_clout\_add | Legitimacy based on Government Clout | country | additive | good |  |
| country\_legitimacy\_govt\_total\_votes\_add | Legitimacy based on Votes | country | additive | good |  |
| country\_legitimacy\_headofstate\_add | Legitimacy from including the Head of State In Government | country | additive | good |  |
| country\_legitimacy\_ideological\_incoherence\_mult | Legitimacy penalty from Ideological Incompatibility | country | multiplicative | percent, bad |  |
| country\_legitimacy\_min\_add | Minimum Legitimacy | country | additive | neutral |  |
| country\_leverage\_generation\_add | Leverage Generation | country | additive | good |  |
| country\_leverage\_generation\_mult | Leverage Generation | country | multiplicative | percent, good |  |
| country\_leverage\_resistance\_add | Leverage Resistance | country | additive | neutral |  |
| country\_leverage\_resistance\_mult | Leverage Resistance | country | multiplicative | percent, neutral |  |
| country\_liberty\_desire\_add | Weekly Liberty Desire | country | additive | neutral |  |
| country\_liberty\_desire\_decrease\_mult | Weekly Liberty Desire Decrease | country | multiplicative | percent, neutral |  |
| country\_liberty\_desire\_increase\_mult | Weekly Liberty Desire Increase | country | multiplicative | percent, neutral |  |
| country\_liberty\_desire\_of\_subjects\_add | Weekly Liberty Desire for all Subjects | country | additive | neutral |  |
| country\_limit\_officers\_qualifications\_to\_upper\_strata | Officers qualifications limited to Upper Strata | country | boolean | neutral |  |
| country\_loan\_interest\_rate\_add | Loan interest rate | country | additive | percent, bad |  |
| country\_loan\_interest\_rate\_mult | Loan interest rate | country | multiplicative | percent, bad |  |
| country\_lobby\_leverage\_generation\_mult | Leverage Generation from Political Lobbies | country | multiplicative | percent, good |  |
| country\_lobby\_support | Lobby Support | country |  | good |  |
| country\_loyalism\_increases\_cultural\_erasure\_mult | Loyalism increases for the Cultural Erasure Status | country | multiplicative | percent, good |  |
| country\_loyalism\_increases\_full\_acceptance\_mult | Loyalism increases for the Full Acceptance Status | country | multiplicative | percent, good |  |
| country\_loyalism\_increases\_open\_prejudice\_mult | Loyalism increases for the Open Prejudice Status | country | multiplicative | percent, good |  |
| country\_loyalism\_increases\_second\_rate\_citizen\_mult | Loyalism increases for the Second-class Citizen Status | country | multiplicative | percent, good |  |
| country\_loyalism\_increases\_violent\_hostility\_mult | Loyalism increases for the Violent Hostility Status | country | multiplicative | percent, good |  |
| country\_loyalists\_from\_legitimacy\_mult | Loyalists from high Legitimacy | country | multiplicative | percent, good |  |
| country\_machinists\_pol\_str\_mult | Political Strength of Machinists | country | multiplicative | percent, neutral |  |
| country\_machinists\_voting\_power\_add | Political Strength from the Votes of Machinists | country | additive | neutral | - Object-based - Enables elections |
| country\_mass\_migration\_attraction\_mult | Mass Migration Attraction | country | multiplicative | percent, good |  |
| country\_max\_companies\_add | Max Number of Companies | country | additive | good |  |
| country\_max\_unassigned\_admirals\_add | Maximum Idle Admirals | country | additive | good |  |
| country\_max\_unassigned\_generals\_add | Maximum Idle Generals | country | additive | good |  |
| country\_max\_weekly\_construction\_progress\_add | Max Weekly Construction Progress | country | additive | good |  |
| country\_migration\_restrictiveness\_add | Migration Restrictiveness | country | additive | neutral |  |
| country\_military\_goods\_cost\_mult | Military Goods Cost | country | multiplicative | percent, bad |  |
| country\_military\_tech\_research\_speed\_mult | Military Research Speed | country | multiplicative | percent, good |  |
| country\_military\_tech\_spread\_mult | Technology Spread for Military | country | multiplicative | percent, good |  |
| country\_military\_wages\_mult | Military Wages | country | multiplicative | percent, neutral |  |
| country\_minting\_add | Minting | country | additive | good |  |
| country\_minting\_mult | Minting | country | multiplicative | percent, good |  |
| country\_must\_have\_movement\_to\_enact\_laws\_bool | Must have Political Movement to Enact Laws | country | boolean | bad |  |
| country\_nationalization\_cost\_non\_members\_mult | Cost for Nationalization | country | multiplicative | percent, bad |  |
| country\_navy\_goods\_cost\_mult | Navy Goods Cost | country | multiplicative | percent, bad |  |
| country\_no\_advantage\_loss\_from\_lack\_of\_interest\_bool | Ignores Trade Advantage penalty from Interests | country | boolean | good |  |
| country\_non\_state\_religion\_wages\_mult | Wages for Non-State Religion Pops | country | multiplicative | percent, neutral |  |
| country\_officers\_pol\_str\_mult | Political Strength of Officers | country | multiplicative | percent, neutral |  |
| country\_officers\_voting\_power\_add | Political Strength from the Votes of Officers | country | additive | neutral | - Object-based - Enables elections |
| country\_opposition\_ig\_approval\_add | Opposition Interest Group Approval | country | additive | good |  |
| country\_overlord\_income\_transfer\_mult | Overlord Income Transfer | country | multiplicative | percent, bad |  |
| country\_pact\_leverage\_generation\_add | Leverage Generation from Diplomatic Pact | country | additive | good |  |
| country\_pact\_leverage\_generation\_mult | Leverage Generation from Diplomatic Pact | country | multiplicative | percent, good |  |
| country\_party\_whip\_impact\_add | Party Whip Impact on Ideological Incoherence | country | additive | percent, good |  |
| country\_peasants\_pol\_str\_mult | Political Strength of Peasants | country | multiplicative | percent, neutral |  |
| country\_peasants\_voting\_power\_add | Political Strength from the Votes of Peasants | country | additive | neutral | - Object-based - Enables elections |
| country\_piracy\_income\_add | Piracy Income | country | additive | percent, good |  |
| country\_political\_strength\_cultural\_erasure\_mult | Political Strength for the Cultural Erasure Status | country | multiplicative | percent, good |  |
| country\_political\_strength\_full\_acceptance\_mult | Political Strength for the Full Acceptance Status | country | multiplicative | percent, good |  |
| country\_political\_strength\_open\_prejudice\_mult | Political Strength for the Open Prejudice Status | country | multiplicative | percent, good |  |
| country\_political\_strength\_second\_rate\_citizen\_mult | Political Strength for the Second-class Citizen Status | country | multiplicative | percent, good |  |
| country\_political\_strength\_violent\_hostility\_mult | Political Strength for the Violent Hostility Status | country | multiplicative | percent, good |  |
| country\_port\_connection\_cost\_mult | Merchant Marine Cost of Port Connections | country | multiplicative | percent, bad |  |
| country\_prestige\_add | Prestige | country | additive | good |  |
| country\_prestige\_from\_army\_power\_projection\_mult | Prestige from Army Power Projection | country | multiplicative | percent, good |  |
| country\_prestige\_from\_navy\_power\_projection\_mult | Prestige from Navy Power Projection | country | multiplicative | percent, good |  |
| country\_prestige\_mult | Prestige | country | multiplicative | percent, good |  |
| country\_primary\_culture\_fervor\_from\_laws\_add | Primary Culture Fervor from Laws | country | additive | neutral |  |
| country\_private\_construction\_allocation\_mult | Private Construction Allocation | country | multiplicative | percent, neutral |  |
| country\_production\_tech\_research\_speed\_mult | Production Research Speed | country | multiplicative | percent, good |  |
| country\_production\_tech\_spread\_mult | Technology Spread for Production | country | multiplicative | percent, good |  |
| country\_qualification\_growth\_cultural\_erasure\_mult | Qualifications advancement for the Cultural Erasure Status | country | multiplicative | percent, good |  |
| country\_qualification\_growth\_full\_acceptance\_mult | Qualifications advancement for the Full Acceptance Status | country | multiplicative | percent, good |  |
| country\_qualification\_growth\_open\_prejudice\_mult | Qualifications advancement for the Open Prejudice Status | country | multiplicative | percent, good |  |
| country\_qualification\_growth\_second\_rate\_citizen\_mult | Qualifications advancement for the Second-class Citizen Status | country | multiplicative | percent, good |  |
| country\_qualification\_growth\_violent\_hostility\_mult | Qualifications advancement for the Violent Hostility Status | country | multiplicative | percent, good |  |
| country\_radicalism\_increases\_cultural\_erasure\_mult | Radicalism increases for the Cultural Erasure Status | country | multiplicative | percent, bad |  |
| country\_radicalism\_increases\_full\_acceptance\_mult | Radicalism increases for the Full Acceptance Status | country | multiplicative | percent, bad |  |
| country\_radicalism\_increases\_open\_prejudice\_mult | Radicalism increases for the Open Prejudice Status | country | multiplicative | percent, bad |  |
| country\_radicalism\_increases\_second\_rate\_citizen\_mult | Radicalism increases for the Second-class Citizen Status | country | multiplicative | percent, bad |  |
| country\_radicalism\_increases\_violent\_hostility\_mult | Radicalism increases for the Violent Hostility Status | country | multiplicative | percent, bad |  |
| country\_radicals\_from\_conquest\_mult | Radicals from Conquest | country | multiplicative | percent, bad |  |
| country\_radicals\_from\_legitimacy\_mult | Radicals from low Legitimacy | country | multiplicative | percent, bad |  |
| country\_reduced\_liberty\_desire\_same\_religion\_bool | Reduced Liberty Desire for Same Religion | country | boolean | good |  |
| country\_resource\_depletion\_chance\_mult | Resource Depletion Chance | country | multiplicative | percent, bad |  |
| country\_resource\_discovery\_chance\_mult | Resource Discovery Chance | country | multiplicative | percent, good |  |
| country\_revolution\_clock\_time\_add | Revolution Clock Time | country | additive | neutral |  |
| country\_revolution\_progress\_add | Revolution Progression Speed | country | additive | percent, bad |  |
| country\_revolution\_progress\_mult | Revolution Progression Speed | country | multiplicative | percent, bad |  |
| country\_sailors\_max\_add | Max Sailors | country | additive | good |  |
| country\_secession\_clock\_time\_add | Secession Clock Time | country | additive | neutral |  |
| country\_secession\_progress\_add | Secession Progression Speed | country | additive | percent, bad |  |
| country\_secession\_progress\_mult | Secession Progression Speed | country | multiplicative | percent, bad |  |
| country\_ship\_construction\_add | Ship Construction | country | additive | good |  |
| country\_ship\_construction\_efficiency\_add | Ship Construction Efficiency | country | additive | percent, good |  |
| country\_ship\_construction\_goods\_cost\_mult | Ship Construction Goods Cost | country | multiplicative | percent, bad |  |
| country\_ship\_construction\_progress\_max\_add | Max Ship Construction Progress | country | additive | good |  |
| country\_ship\_group\_capital\_ships\_construction\_efficiency\_add | Capital Ships Construction Efficiency | country | additive | percent, good |  |
| country\_ship\_group\_capital\_ships\_construction\_progress\_max\_add | Capital Ships Max Construction Progress | country | additive | good |  |
| country\_ship\_group\_capital\_ships\_construction\_progress\_max\_mult | Capital Ships Max Construction Progress | country | multiplicative | percent, good |  |
| country\_ship\_group\_cruisers\_construction\_efficiency\_add | Cruisers Construction Efficiency | country | additive | percent, good |  |
| country\_ship\_group\_cruisers\_construction\_progress\_max\_add | Cruisers Max Construction Progress | country | additive | good |  |
| country\_ship\_group\_cruisers\_construction\_progress\_max\_mult | Cruisers Max Construction Progress | country | multiplicative | percent, good |  |
| country\_ship\_group\_supply\_ships\_construction\_efficiency\_add | Supply Ships Construction Efficiency | country | additive | percent, good |  |
| country\_ship\_group\_torpedo\_craft\_construction\_efficiency\_add | Torpedo Craft Construction Efficiency | country | additive | percent, good |  |
| country\_ship\_group\_torpedo\_craft\_construction\_progress\_max\_add | Torpedo Craft Max Construction Progress | country | additive | good |  |
| country\_ship\_group\_torpedo\_craft\_construction\_progress\_max\_mult | Torpedo Craft Max Construction Progress | country | multiplicative | percent, good |  |
| country\_ship\_type\_armored\_cruiser\_construction\_efficiency\_add | Armored Cruiser Construction Efficiency | country | additive | percent, good |  |
| country\_ship\_type\_light\_cruiser\_construction\_efficiency\_add | Light Cruiser Construction Efficiency | country | additive | percent, good |  |
| country\_ship\_type\_protected\_cruiser\_construction\_efficiency\_add | Protected Cruiser Construction Efficiency | country | additive | percent, good |  |
| country\_ship\_type\_troop\_ship\_construction\_efficiency\_add | Troopship Construction Efficiency | country | additive | percent, good |  |
| country\_shopkeepers\_pol\_str\_mult | Political Strength of Shopkeepers | country | multiplicative | percent, neutral |  |
| country\_shopkeepers\_voting\_power\_add | Political Strength from the Votes of Shopkeepers | country | additive | neutral | - Object-based - Enables elections |
| country\_shudras\_acceptance\_max\_add | Maximum Acceptance for the Shudras Social Class | country | additive | bad |  |
| country\_shudras\_cultural\_acceptance\_mult | Cultural Acceptance for the Shudras Social Class | country | multiplicative | percent, good |  |
| country\_shudras\_education\_access\_add | Education Access for the Shudras Social Class | country | additive | good |  |
| country\_shudras\_education\_access\_mult | Education Access for the Shudras Social Class | country | multiplicative | percent, good |  |
| country\_shudras\_qualification\_growth\_add | Qualification Growth for the Shudras Social Class | country | additive | good |  |
| country\_shudras\_qualification\_growth\_mult | Qualification Growth for the Shudras Social Class | country | multiplicative | percent, good |  |
| country\_shudras\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Shudras Social Class for Shudras | country | multiplicative | percent, good |  |
| country\_shudras\_qualification\_growth\_same\_class\_mult | Qualification Growth within Shudras Social Class | country | multiplicative | percent, good |  |
| country\_slaves\_voting\_power\_add | Political Strength from the Votes of Slaves | country | additive | neutral | - Object-based - Enables elections |
| country\_society\_tech\_research\_speed\_mult | Society Research Speed | country | multiplicative | percent, good |  |
| country\_society\_tech\_spread\_mult | Technology Spread for Society | country | multiplicative | percent, good |  |
| country\_soldiers\_pol\_str\_mult | Political Strength of Servicemen | country | multiplicative | percent, neutral |  |
| country\_soldiers\_voting\_power\_add | Political Strength from the Votes of Servicemen | country | additive | neutral | - Object-based - Enables elections |
| country\_standard\_of\_living\_cultural\_erasure\_add | Standard of Living for the Cultural Erasure Status | country | additive | good |  |
| country\_standard\_of\_living\_full\_acceptance\_add | Standard of Living for the Full Acceptance Status | country | additive | good |  |
| country\_standard\_of\_living\_open\_prejudice\_add | Standard of Living for the Open Prejudice Status | country | additive | good |  |
| country\_standard\_of\_living\_second\_rate\_citizen\_add | Standard of Living for the Second-class Citizen Status | country | additive | good |  |
| country\_standard\_of\_living\_violent\_hostility\_add | Standard of Living for the Violent Hostility Status | country | additive | good |  |
| country\_state\_religion\_wages\_mult | Wages for State Religion Pops | country | multiplicative | percent, neutral |  |
| country\_strata\_commoners\_peasants\_acceptance\_max\_add | Maximum Acceptance for the Hyakushō Social Class | country | additive | bad |  |
| country\_strata\_commoners\_peasants\_acceptance\_min\_add | Minimum Acceptance for the Hyakushō Social Class | country | additive | good |  |
| country\_strata\_commoners\_peasants\_cultural\_acceptance\_mult | Cultural Acceptance for the Hyakushō Social Class | country | multiplicative | percent, good |  |
| country\_strata\_commoners\_peasants\_education\_access\_add | Education Access for the Hyakushō Social Class | country | additive | good |  |
| country\_strata\_commoners\_peasants\_education\_access\_mult | Education Access for the Hyakushō Social Class | country | multiplicative | percent, good |  |
| country\_strata\_commoners\_peasants\_qualification\_growth\_add | Qualification Growth for the Hyakushō Social Class | country | additive | good |  |
| country\_strata\_commoners\_peasants\_qualification\_growth\_mult | Qualification Growth for the Hyakushō Social Class | country | multiplicative | percent, good |  |
| country\_strata\_commoners\_peasants\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Hyakushō Social Class for Hyakushō | country | multiplicative | percent, good |  |
| country\_strata\_commoners\_peasants\_qualification\_growth\_same\_class\_mult | Qualification Growth within Hyakushō Social Class | country | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_acceptance\_max\_add | Maximum Acceptance for the Chōnin Social Class | country | additive | bad |  |
| country\_strata\_commoners\_townspeople\_acceptance\_min\_add | Minimum Acceptance for the Chōnin Social Class | country | additive | good |  |
| country\_strata\_commoners\_townspeople\_cultural\_acceptance\_mult | Cultural Acceptance for the Chōnin Social Class | country | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_education\_access\_add | Education Access for the Chōnin Social Class | country | additive | good |  |
| country\_strata\_commoners\_townspeople\_education\_access\_mult | Education Access for the Chōnin Social Class | country | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_qualification\_growth\_add | Qualification Growth for the Chōnin Social Class | country | additive | good |  |
| country\_strata\_commoners\_townspeople\_qualification\_growth\_mult | Qualification Growth for the Chōnin Social Class | country | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Chōnin Social Class for Chōnin | country | multiplicative | percent, good |  |
| country\_strata\_commoners\_townspeople\_qualification\_growth\_same\_class\_mult | Qualification Growth within Chōnin Social Class | country | multiplicative | percent, good |  |
| country\_strata\_outcastes\_acceptance\_max\_add | Maximum Acceptance for the Eta-Hinin Social Class | country | additive | bad |  |
| country\_strata\_outcastes\_acceptance\_min\_add | Minimum Acceptance for the Eta-Hinin Social Class | country | additive | good |  |
| country\_strata\_outcastes\_cultural\_acceptance\_mult | Cultural Acceptance for the Eta-Hinin Social Class | country | multiplicative | percent, good |  |
| country\_strata\_outcastes\_education\_access\_add | Education Access for the Eta-Hinin Social Class | country | additive | good |  |
| country\_strata\_outcastes\_education\_access\_mult | Education Access for the Eta-Hinin Social Class | country | multiplicative | percent, good |  |
| country\_strata\_outcastes\_qualification\_growth\_add | Qualification Growth for the Eta-Hinin Social Class | country | additive | good |  |
| country\_strata\_outcastes\_qualification\_growth\_mult | Qualification Growth for the Eta-Hinin Social Class | country | multiplicative | percent, good |  |
| country\_strata\_outcastes\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Eta-Hinin Social Class for Eta-Hinin | country | multiplicative | percent, good |  |
| country\_strata\_outcastes\_qualification\_growth\_same\_class\_mult | Qualification Growth within Eta-Hinin Social Class | country | multiplicative | percent, good |  |
| country\_strata\_religious\_acceptance\_max\_add | Maximum Acceptance for the Jisha Social Class | country | additive | bad |  |
| country\_strata\_religious\_acceptance\_min\_add | Minimum Acceptance for the Jisha Social Class | country | additive | good |  |
| country\_strata\_religious\_cultural\_acceptance\_mult | Cultural Acceptance for the Jisha Social Class | country | multiplicative | percent, good |  |
| country\_strata\_religious\_education\_access\_add | Education Access for the Jisha Social Class | country | additive | good |  |
| country\_strata\_religious\_education\_access\_mult | Education Access for the Jisha Social Class | country | multiplicative | percent, good |  |
| country\_strata\_religious\_qualification\_growth\_add | Qualification Growth for the Jisha Social Class | country | additive | good |  |
| country\_strata\_religious\_qualification\_growth\_mult | Qualification Growth for the Jisha Social Class | country | multiplicative | percent, good |  |
| country\_strata\_religious\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Jisha Social Class for Jisha | country | multiplicative | percent, good |  |
| country\_strata\_religious\_qualification\_growth\_same\_class\_mult | Qualification Growth within Jisha Social Class | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_acceptance\_max\_add | Maximum Acceptance for the Upper Samurai Social Class | country | additive | bad |  |
| country\_strata\_samurai\_high\_acceptance\_min\_add | Minimum Acceptance for the Upper Samurai Social Class | country | additive | good |  |
| country\_strata\_samurai\_high\_cultural\_acceptance\_mult | Cultural Acceptance for the Upper Samurai Social Class | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_education\_access\_add | Education Access for the Upper Samurai Social Class | country | additive | good |  |
| country\_strata\_samurai\_high\_education\_access\_mult | Education Access for the Upper Samurai Social Class | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_qualification\_growth\_add | Qualification Growth for the Upper Samurai Social Class | country | additive | good |  |
| country\_strata\_samurai\_high\_qualification\_growth\_mult | Qualification Growth for the Upper Samurai Social Class | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Upper Samurai Social Class for Upper Samurai | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_high\_qualification\_growth\_same\_class\_mult | Qualification Growth within Upper Samurai Social Class | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_acceptance\_max\_add | Maximum Acceptance for the Lower Samurai Social Class | country | additive | bad |  |
| country\_strata\_samurai\_low\_acceptance\_min\_add | Minimum Acceptance for the Lower Samurai Social Class | country | additive | good |  |
| country\_strata\_samurai\_low\_cultural\_acceptance\_mult | Cultural Acceptance for the Lower Samurai Social Class | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_education\_access\_add | Education Access for the Lower Samurai Social Class | country | additive | good |  |
| country\_strata\_samurai\_low\_education\_access\_mult | Education Access for the Lower Samurai Social Class | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_qualification\_growth\_add | Qualification Growth for the Lower Samurai Social Class | country | additive | good |  |
| country\_strata\_samurai\_low\_qualification\_growth\_mult | Qualification Growth for the Lower Samurai Social Class | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Lower Samurai Social Class for Lower Samurai | country | multiplicative | percent, good |  |
| country\_strata\_samurai\_low\_qualification\_growth\_same\_class\_mult | Qualification Growth within Lower Samurai Social Class | country | multiplicative | percent, good |  |
| country\_subject\_income\_transfer\_heathen\_mult | Income transfer from Heathen Subjects | country | multiplicative | percent, good |  |
| country\_subject\_income\_transfer\_mult | Income transfer from Subjects | country | multiplicative | percent, good |  |
| country\_supply\_ship\_construction\_progress\_max\_add | Supply Ship Max Construction Progress | country | additive | good |  |
| country\_supply\_ship\_construction\_progress\_max\_mult | Supply Ship Max Construction Progress | country | multiplicative | percent, good |  |
| country\_supply\_ship\_construction\_ratio\_add | Supply Ship Construction Ratio | country | additive | percent, good |  |
| country\_support\_independence\_weekly\_liberty\_desire\_add | Support Independence weekly Liberty Desire | country | additive | neutral |  |
| country\_support\_separatism\_resistance\_mult | Support Separatism Resistance | country | multiplicative | percent, good |  |
| country\_support\_separatism\_strength\_mult | Support Separatism Strength | country | multiplicative | percent, good |  |
| country\_suppression\_attraction\_factor | Suppression impact on Political Movement attraction | country |  | percent, bad |  |
| country\_suppression\_cost\_mult | Suppression cost | country | multiplicative | percent, bad |  |
| country\_tax\_income\_add | Tax Income | country | additive | good |  |
| country\_tech\_group\_research\_speed\_mult | Technology Research Speed as a group | country | multiplicative | percent, good |  |
| country\_tech\_research\_speed\_mult | Technology Research Speed | country | multiplicative | percent, good |  |
| country\_tech\_spread\_add | Technology Spread | country | additive | good |  |
| country\_tech\_spread\_mult | Technology Spread | country | multiplicative | percent, good |  |
| country\_tension\_decay\_mult | Tension Decay | country | multiplicative | percent, good |  |
| country\_tobacco\_export\_tariffs\_rate\_add | country\_tobacco\_export\_tariffs\_rate\_add | country | additive | percent, neutral |  |
| country\_tobacco\_max\_export\_tariffs\_level\_add | country\_tobacco\_max\_export\_tariffs\_level\_add | country | additive | neutral |  |
| country\_tobacco\_min\_export\_tariffs\_level\_add | country\_tobacco\_min\_export\_tariffs\_level\_add | country | additive | neutral |  |
| country\_treaty\_leverage\_generation\_add | Leverage Generation from Treaty | country | additive | good |  |
| country\_treaty\_leverage\_generation\_mult | Leverage Generation from Treaty | country | multiplicative | percent, good |  |
| country\_two\_spains\_conservative\_drift\_add | **The Two Spains** Conservative Progress | country | additive | good |  |
| country\_two\_spains\_liberal\_drift\_add | **The Two Spains** Liberal Progress | country | additive | good |  |
| country\_vaishyas\_acceptance\_max\_add | Maximum Acceptance for the Vaishyas Social Class | country | additive | bad |  |
| country\_vaishyas\_acceptance\_min\_add | Minimum Acceptance for the Vaishyas Social Class | country | additive | good |  |
| country\_vaishyas\_cultural\_acceptance\_mult | Cultural Acceptance for the Vaishyas Social Class | country | multiplicative | percent, good |  |
| country\_vaishyas\_education\_access\_add | Education Access for the Vaishyas Social Class | country | additive | good |  |
| country\_vaishyas\_education\_access\_mult | Education Access for the Vaishyas Social Class | country | multiplicative | percent, good |  |
| country\_vaishyas\_qualification\_growth\_add | Qualification Growth for the Vaishyas Social Class | country | additive | good |  |
| country\_vaishyas\_qualification\_growth\_mult | Qualification Growth for the Vaishyas Social Class | country | multiplicative | percent, good |  |
| country\_vaishyas\_qualification\_growth\_other\_class\_mult | Qualification Growth outside the Vaishyas Social Class for Vaishyas | country | multiplicative | percent, good |  |
| country\_vaishyas\_qualification\_growth\_same\_class\_mult | Qualification Growth within Vaishyas Social Class | country | multiplicative | percent, good |  |
| country\_voting\_power\_base\_add | Political Strength per Vote | country | additive | neutral | - Hardcoded - Enables elections |
| country\_voting\_power\_cultural\_erasure\_mult | Voting contribution of Political Strength for the Cultural Erasure Status | country | multiplicative | percent, neutral |  |
| country\_voting\_power\_from\_literacy\_add | Political Strength from Literate Pops' Votes | country | additive | neutral | - Hardcoded - Enables elections |
| country\_voting\_power\_full\_acceptance\_mult | Voting contribution of Political Strength for the Full Acceptance Status | country | multiplicative | percent, neutral |  |
| country\_voting\_power\_mult | Political Strength per Vote | country | multiplicative | percent, neutral |  |
| country\_voting\_power\_open\_prejudice\_mult | Voting contribution of Political Strength for the Open Prejudice Status | country | multiplicative | percent, neutral |  |
| country\_voting\_power\_second\_rate\_citizen\_mult | Voting contribution of Political Strength for the Second-class Citizen Status | country | multiplicative | percent, neutral |  |
| country\_voting\_power\_violent\_hostility\_mult | Voting contribution of Political Strength for the Violent Hostility Status | country | multiplicative | percent, neutral |  |
| country\_voting\_power\_wealth\_threshold\_add | Wealth Threshold for Voting | country | additive | neutral | - Hardcoded - Enables elections |
| country\_wage\_cultural\_erasure\_mult | Wage for the Cultural Erasure Status | country | multiplicative | percent, good |  |
| country\_wage\_full\_acceptance\_mult | Wage for the Full Acceptance Status | country | multiplicative | percent, good |  |
| country\_wage\_open\_prejudice\_mult | Wage for the Open Prejudice Status | country | multiplicative | percent, good |  |
| country\_wage\_second\_rate\_citizen\_mult | Wage for the Second-class Citizen Status | country | multiplicative | percent, good |  |
| country\_wage\_violent\_hostility\_mult | Wage for the Violent Hostility Status | country | multiplicative | percent, good |  |
| country\_war\_exhaustion\_casualties\_mult | War Exhaustion from Casualties | country | multiplicative | percent, bad |  |
| country\_weekly\_innovation\_add | Innovation | country | additive | good |  |
| country\_weekly\_innovation\_max\_add | Maximum Innovation Investment | country | additive | good |  |
| country\_weekly\_innovation\_mult | Innovation | country | multiplicative | percent, good |  |
| country\_yankee\_and\_dixie\_cultures\_obsessed\_with\_guns | Yankee and Dixie Cultures gain an Obsession with Small Arms | country | boolean | neutral |  |
| dummy\_modifier\_type | This modifier type should never be used |  |  | bad |  |
| goods\_input\_aeroplanes\_add | Aeroplanes input | goods | additive | bad |  |
| goods\_input\_ammunition\_add | Ammunition input | goods | additive | bad |  |
| goods\_input\_ammunition\_mult | Ammunition input | goods | multiplicative | percent, bad |  |
| goods\_input\_artillery\_add | Artillery input | goods | additive | bad |  |
| goods\_input\_artillery\_mult | Artillery input | goods | multiplicative | percent, bad |  |
| goods\_input\_automobiles\_add | Automobiles input | goods | additive | bad |  |
| goods\_input\_clippers\_add | Clippers input | goods | additive | bad |  |
| goods\_input\_clothes\_add | Clothes input | goods | additive | bad |  |
| goods\_input\_coal\_add | Coal input | goods | additive | bad |  |
| goods\_input\_dye\_add | Dye input | goods | additive | bad |  |
| goods\_input\_electricity\_add | Electricity input | goods | additive | bad |  |
| goods\_input\_engines\_add | Engines input | goods | additive | bad |  |
| goods\_input\_explosives\_add | Explosives input | goods | additive | bad |  |
| goods\_input\_fabric\_add | Fabric input | goods | additive | bad |  |
| goods\_input\_fertilizer\_add | Fertilizer input | goods | additive | bad |  |
| goods\_input\_fish\_add | Fish input | goods | additive | bad |  |
| goods\_input\_fruit\_add | Fruit input | goods | additive | bad |  |
| goods\_input\_glass\_add | Glass input | goods | additive | bad |  |
| goods\_input\_grain\_add | Grain input | goods | additive | bad |  |
| goods\_input\_groceries\_add | Groceries input | goods | additive | bad |  |
| goods\_input\_hardwood\_add | Hardwood input | goods | additive | bad |  |
| goods\_input\_iron\_add | Iron input | goods | additive | bad |  |
| goods\_input\_ironclads\_add | Ironclads input | goods | additive | bad |  |
| goods\_input\_lead\_add | Lead input | goods | additive | bad |  |
| goods\_input\_liquor\_add | Liquor input | goods | additive | bad |  |
| goods\_input\_manowars\_add | Man-o-Wars input | goods | additive | bad |  |
| goods\_input\_meat\_add | Meat input | goods | additive | bad |  |
| goods\_input\_merchant\_marine\_add | Merchant Marine input | goods | additive | bad |  |
| goods\_input\_oil\_add | Oil input | goods | additive | bad |  |
| goods\_input\_oil\_mult | Oil input | goods | multiplicative | percent, bad |  |
| goods\_input\_opium\_add | Opium input | goods | additive | bad |  |
| goods\_input\_paper\_add | Paper input | goods | additive | bad |  |
| goods\_input\_radios\_add | Radio input | goods | additive | bad |  |
| goods\_input\_radios\_mult | Radios input | goods | multiplicative | percent, bad |  |
| goods\_input\_rubber\_add | Rubber input | goods | additive | bad |  |
| goods\_input\_silk\_add | Fine Silk input | goods | additive | bad |  |
| goods\_input\_small\_arms\_add | Small Arms input | goods | additive | bad |  |
| goods\_input\_small\_arms\_mult | Small Arms input | goods | multiplicative | percent, bad |  |
| goods\_input\_steamers\_add | Steamers input | goods | additive | bad |  |
| goods\_input\_steel\_add | Steel input | goods | additive | bad |  |
| goods\_input\_sugar\_add | Sugar input | goods | additive | bad |  |
| goods\_input\_sulfur\_add | Sulfur input | goods | additive | bad |  |
| goods\_input\_tanks\_add | Tanks input | goods | additive | bad |  |
| goods\_input\_tanks\_mult | Tanks input | goods | multiplicative | percent, bad |  |
| goods\_input\_telephones\_add | Telephone input | goods | additive | bad |  |
| goods\_input\_tobacco\_add | Tobacco input | goods | additive | bad |  |
| goods\_input\_tools\_add | Tools input | goods | additive | bad |  |
| goods\_input\_transportation\_add | Transportation input | goods | additive | bad |  |
| goods\_input\_wine\_add | Wine input | goods | additive | bad |  |
| goods\_input\_wood\_add | Wood input | goods | additive | bad |  |
| goods\_output\_aeroplanes\_add | Aeroplanes output | goods | additive | good |  |
| goods\_output\_aeroplanes\_mult | Building Aeroplanes output | goods | multiplicative | percent, good |  |
| goods\_output\_ammunition\_add | Ammunition output | goods | additive | good |  |
| goods\_output\_ammunition\_mult | Building ammunition output | goods | multiplicative | percent, good |  |
| goods\_output\_artillery\_add | Artillery output | goods | additive | good |  |
| goods\_output\_artillery\_mult | Building Artillery output | goods | multiplicative | percent, good |  |
| goods\_output\_automobiles\_add | Automobiles output | goods | additive | good |  |
| goods\_output\_automobiles\_mult | Building Automobiles output | goods | multiplicative | percent, good |  |
| goods\_output\_clippers\_add | Clippers output | goods | additive | good |  |
| goods\_output\_clippers\_mult | Building Clippers output | goods | multiplicative | percent, good |  |
| goods\_output\_clothes\_add | Clothes output | goods | additive | good |  |
| goods\_output\_coal\_add | Coal output | goods | additive | good |  |
| goods\_output\_coffee\_add | Coffee output | goods | additive | good |  |
| goods\_output\_dye\_add | Dye output | goods | additive | good |  |
| goods\_output\_electricity\_add | Electricity output | goods | additive | good |  |
| goods\_output\_electricity\_mult | Building Electricity output | goods | multiplicative | percent, good |  |
| goods\_output\_engines\_add | Engines output | goods | additive | good |  |
| goods\_output\_engines\_mult | Building Engines output | goods | multiplicative | percent, good |  |
| goods\_output\_explosives\_add | Explosives output | goods | additive | good |  |
| goods\_output\_fabric\_add | Fabric output | goods | additive | good |  |
| goods\_output\_fabric\_mult | Building Fabric output | goods | multiplicative | percent, good |  |
| goods\_output\_fertilizer\_add | Fertilizer output | goods | additive | good |  |
| goods\_output\_fine\_art\_add | Fine Art output | goods | additive | good |  |
| goods\_output\_fish\_add | Fish output | goods | additive | good |  |
| goods\_output\_fruit\_add | Fruit output | goods | additive | good |  |
| goods\_output\_fruit\_mult | Building Fruit output | goods | multiplicative | percent, good |  |
| goods\_output\_furniture\_add | Furniture output | goods | additive | good |  |
| goods\_output\_glass\_add | Glass output | goods | additive | good |  |
| goods\_output\_gold\_add | Gold output | goods | additive | good |  |
| goods\_output\_grain\_add | Grain output | goods | additive | good |  |
| goods\_output\_groceries\_add | Groceries output | goods | additive | good |  |
| goods\_output\_hardwood\_add | Hardwood output | goods | additive | good |  |
| goods\_output\_hardwood\_mult | Building Hardwood output | goods | multiplicative | percent, good |  |
| goods\_output\_iron\_add | Iron output | goods | additive | good |  |
| goods\_output\_ironclads\_add | Ironclads output | goods | additive | good |  |
| goods\_output\_ironclads\_mult | Building Ironclads output | goods | multiplicative | percent, good |  |
| goods\_output\_lead\_add | Lead output | goods | additive | good |  |
| goods\_output\_liquor\_add | Liquor output | goods | additive | good |  |
| goods\_output\_liquor\_mult | Building Liquor output | goods | multiplicative | percent, good |  |
| goods\_output\_luxury\_clothes\_add | Luxury Clothes output | goods | additive | good |  |
| goods\_output\_luxury\_furniture\_add | Luxury Furniture output | goods | additive | good |  |
| goods\_output\_manowars\_add | Man-o-Wars output | goods | additive | good |  |
| goods\_output\_manowars\_mult | Building Man-o-Wars output | goods | multiplicative | percent, good |  |
| goods\_output\_meat\_add | Meat output | goods | additive | good |  |
| goods\_output\_merchant\_marine\_add | Merchant Marine output | goods | additive | good |  |
| goods\_output\_oil\_add | Oil output | goods | additive | good |  |
| goods\_output\_oil\_mult | Building Oil output | goods | multiplicative | percent, good |  |
| goods\_output\_opium\_add | Opium output | goods | additive | good |  |
| goods\_output\_paper\_add | Paper output | goods | additive | good |  |
| goods\_output\_porcelain\_add | Porcelain output | goods | additive | good |  |
| goods\_output\_radios\_add | Radios output | goods | additive | good |  |
| goods\_output\_radios\_mult | Building Radio output | goods | multiplicative | percent, good |  |
| goods\_output\_rubber\_add | Rubber output | goods | additive | good |  |
| goods\_output\_services\_add | Services output | goods | additive | good |  |
| goods\_output\_silk\_add | Fine Silk output | goods | additive | good |  |
| goods\_output\_silk\_mult | Building Silk output | goods | multiplicative | percent, good |  |
| goods\_output\_small\_arms\_add | Small Arms output | goods | additive | good |  |
| goods\_output\_small\_arms\_mult | Building Small Arms output | goods | multiplicative | percent, good |  |
| goods\_output\_steamers\_add | Steamers output | goods | additive | good |  |
| goods\_output\_steamers\_mult | Building Steamers output | goods | multiplicative | percent, good |  |
| goods\_output\_steel\_add | Steel output | goods | additive | good |  |
| goods\_output\_sugar\_add | Sugar output | goods | additive | good |  |
| goods\_output\_sugar\_mult | Building Sugar output | goods | multiplicative | percent, good |  |
| goods\_output\_sulfur\_add | Sulfur output | goods | additive | good |  |
| goods\_output\_tanks\_add | Tanks output | goods | additive | good |  |
| goods\_output\_tanks\_mult | Building Tanks output | goods | multiplicative | percent, good |  |
| goods\_output\_tea\_add | Tea output | goods | additive | good |  |
| goods\_output\_telephones\_add | Telephones output | goods | additive | good |  |
| goods\_output\_tobacco\_add | Tobacco output | goods | additive | good |  |
| goods\_output\_tools\_add | Tools output | goods | additive | good |  |
| goods\_output\_tools\_mult | Building Tools output | goods | multiplicative | percent, good |  |
| goods\_output\_transportation\_add | Transportation output | goods | additive | good |  |
| goods\_output\_wine\_add | Wine output | goods | additive | good |  |
| goods\_output\_wine\_mult | Building Wine output | goods | multiplicative | percent, good |  |
| goods\_output\_wood\_add | Wood output | goods | additive | good |  |
| interest\_group\_amenability\_add | Interest Group Amenability | interest\_group | additive | good |  |
| interest\_group\_approval\_add | Interest Group Approval | interest\_group | additive | good |  |
| interest\_group\_ig\_armed\_forces\_approval\_add | Armed Forces Approval | interest\_group | additive | good |  |
| interest\_group\_ig\_armed\_forces\_pol\_str\_mult | Armed Forces Political Strength | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_armed\_forces\_pop\_attraction\_mult | Armed Forces Pop Attraction | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_devout\_approval\_add | Devout Approval | interest\_group | additive | good |  |
| interest\_group\_ig\_devout\_pol\_str\_mult | Devout Political Strength | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_devout\_pop\_attraction\_mult | Devout Pop Attraction | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_industrialists\_approval\_add | Industrialists Approval | interest\_group | additive | good |  |
| interest\_group\_ig\_industrialists\_pol\_str\_mult | Industrialists Political Strength | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_industrialists\_pop\_attraction\_mult | Industrialists Pop Attraction | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_intelligentsia\_approval\_add | Intelligentsia Approval | interest\_group | additive | good |  |
| interest\_group\_ig\_intelligentsia\_pol\_str\_mult | Intelligentsia Political Strength | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_intelligentsia\_pop\_attraction\_mult | Intelligentsia Pop Attraction | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_landowners\_approval\_add | Landowners Approval | interest\_group | additive | good |  |
| interest\_group\_ig\_landowners\_pol\_str\_mult | Landowners Political Strength | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_landowners\_pop\_attraction\_mult | Landowners Pop Attraction | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_petty\_bourgeoisie\_approval\_add | Petite Bourgeoisie Approval | interest\_group | additive | good |  |
| interest\_group\_ig\_petty\_bourgeoisie\_pol\_str\_mult | Petite Bourgeoisie Political Strength | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_petty\_bourgeoisie\_pop\_attraction\_mult | Petite Bourgeoisie Pop Attraction | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_rural\_folk\_approval\_add | Rural Folk Approval | interest\_group | additive | good |  |
| interest\_group\_ig\_rural\_folk\_pol\_str\_mult | Rural Folk Political Strength | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_rural\_folk\_pop\_attraction\_mult | Rural Folk Pop Attraction | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_trade\_unions\_approval\_add | Trade Unions Approval | interest\_group | additive | good |  |
| interest\_group\_ig\_trade\_unions\_pol\_str\_mult | Trade Unions Political Strength | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_ig\_trade\_unions\_pop\_attraction\_mult | Trade Unions Pop Attraction | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_in\_government\_approval\_add | Government Interest Group Approval | interest\_group | additive | good |  |
| interest\_group\_in\_government\_attraction\_mult | Attraction of Interest Groups In Government | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_in\_opposition\_agitator\_popularity\_add | Popularity of Agitators In Opposition | interest\_group | additive | good |  |
| interest\_group\_in\_opposition\_approval\_add | Opposition Interest Group Approval | interest\_group | additive | good |  |
| interest\_group\_pol\_str\_factor | Interest Group Political Strength | interest\_group |  | percent, good |  |
| interest\_group\_pol\_str\_mult | Interest Group Political Strength | interest\_group | multiplicative | percent, neutral |  |
| interest\_group\_pop\_attraction\_mult | Interest Group Pop Attraction | interest\_group | multiplicative | percent, neutral |  |
| military\_formation\_army\_movement\_speed\_add | Army Speed | military\_formation | additive | good |  |
| military\_formation\_army\_movement\_speed\_mult | Army Speed | military\_formation | multiplicative | percent, good |  |
| military\_formation\_attrition\_risk\_add | Attrition Risk | military\_formation | additive | percent, bad |  |
| military\_formation\_attrition\_risk\_mult | Attrition Risk Multiplier | military\_formation | multiplicative | percent, bad |  |
| military\_formation\_fleet\_movement\_speed\_add | Fleet Speed | military\_formation | additive | good |  |
| military\_formation\_fleet\_movement\_speed\_mult | Fleet Speed | military\_formation | multiplicative | percent, good |  |
| military\_formation\_interest\_gain\_mult | Fleet involvement Generation | military\_formation | multiplicative | percent, good |  |
| military\_formation\_mobilization\_speed\_add | Formation Mobilization Speed | military\_formation | additive | good |  |
| military\_formation\_mobilization\_speed\_mult | Formation Mobilization Speed | military\_formation | multiplicative | percent, good |  |
| military\_formation\_organization\_gain\_add | Daily Organization Gain | military\_formation | additive | good |  |
| military\_formation\_organization\_gain\_mult | Daily Organization Gain | military\_formation | multiplicative | percent, good |  |
| political\_movement\_activism\_growth\_mult | Political Movement Activism Growth | political\_movement | multiplicative | percent, bad |  |
| political\_movement\_character\_attraction\_mult | political\_movement\_character\_attraction\_mult | political\_movement | multiplicative | percent, neutral |  |
| political\_movement\_pop\_attraction\_mult | Political Movement Pop Attraction | political\_movement | multiplicative | percent, neutral |  |
| political\_movement\_radicalism\_add | Political Movement Activism | political\_movement | additive | percent, bad |  |
| political\_movement\_radicalism\_from\_enactment\_approval\_mult | Political Movement Activism Reduction from Approved Enactment | political\_movement | multiplicative | percent, good |  |
| political\_movement\_radicalism\_from\_enactment\_disapproval\_mult | Political Movement Activism Increase from Disapproved Enactment | political\_movement | multiplicative | percent, bad |  |
| power\_bloc\_allow\_foreign\_investment\_lower\_rank\_bool | Foreign Investment Rights in Power Bloc Member with lower Rank | power\_bloc | boolean | good |  |
| power\_bloc\_allow\_port\_access\_bool | Allows port access between Power Bloc members | power\_bloc | boolean | good |  |
| power\_bloc\_allow\_wider\_migration\_area\_bool | Allow Migration within a Power Bloc | power\_bloc | boolean | good |  |
| power\_bloc\_cohesion\_add | Power Bloc Cohesion | power\_bloc | additive | good |  |
| power\_bloc\_cohesion\_mult | Power Bloc Cohesion | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_cohesion\_per\_member\_add | Power Bloc Cohesion per Power Bloc Member | power\_bloc | additive | good |  |
| power\_bloc\_customs\_union\_bool | Customs Union | power\_bloc | boolean | neutral |  |
| power\_bloc\_disallow\_embargo\_bool | Cannot}} place Embargo on another Power Bloc member | power\_bloc | boolean | neutral |  |
| power\_bloc\_disallow\_war\_bool | Cannot}} start or join wars amongst Power Bloc members | power\_bloc | boolean | neutral |  |
| power\_bloc\_income\_transfer\_to\_leader\_factor | Income Transfer to Power Bloc Leader | power\_bloc |  | neutral |  |
| power\_bloc\_invite\_acceptance\_add | Power Bloc Invitation Acceptance Chance | power\_bloc | additive | good |  |
| power\_bloc\_invite\_acceptance\_great\_power\_add | Great Power Power Bloc Invitation Acceptance Chance | power\_bloc | additive | good |  |
| power\_bloc\_invite\_acceptance\_major\_power\_add | Major Power Power Bloc Invitation Acceptance Chance | power\_bloc | additive | good |  |
| power\_bloc\_invite\_acceptance\_minor\_power\_add | Minor Power Power Bloc Invitation Acceptance Chance | power\_bloc | additive | good |  |
| power\_bloc\_invite\_acceptance\_unrecognized\_major\_power\_add | Unrecognized Major Power Power Bloc Invitation Acceptance Chance | power\_bloc | additive | good |  |
| power\_bloc\_invite\_acceptance\_unrecognized\_regional\_power\_add | Unrecognized Regional Power Power Bloc Invitation Acceptance Chance | power\_bloc | additive | good |  |
| power\_bloc\_leader\_can\_add\_wargoal\_bool | Allows free War Goal | power\_bloc | boolean | neutral |  |
| power\_bloc\_leader\_can\_force\_state\_religion\_bool | Allows Impose State Religion | power\_bloc | boolean | neutral |  |
| power\_bloc\_leader\_can\_make\_subjects\_bool | Can **Subjugate** Power Bloc Member | power\_bloc | boolean | neutral |  |
| power\_bloc\_leader\_can\_regime\_change\_bool | Allows Force Regime Change | power\_bloc | boolean | neutral |  |
| power\_bloc\_leader\_can\_spread\_culture\_to\_pb\_bool | Allows Spread Primary Culture in Power Bloc Members | power\_bloc | boolean | neutral |  |
| power\_bloc\_leverage\_generation\_mult | Leverage Generation | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_mult | Weekly Mandate Progress | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_great\_power\_member\_add | Mandate Progress per Great Power | power\_bloc | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_great\_power\_member\_mult | Mandate Progress per Great Power | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_insignificant\_power\_member\_add | Mandate Progress per Insignificant Power | power\_bloc | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_insignificant\_power\_member\_mult | Mandate Progress per Insignificant Power | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_major\_power\_member\_add | Mandate Progress per Major Power | power\_bloc | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_major\_power\_member\_mult | Mandate Progress per Major Power | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_minor\_power\_member\_add | Mandate Progress per Minor Power | power\_bloc | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_minor\_power\_member\_mult | Mandate Progress per Minor Power | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_major\_power\_member\_add | Mandate Progress per Unrecognized Major Power | power\_bloc | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_major\_power\_member\_mult | Mandate Progress per Unrecognized Major Power | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_power\_member\_add | Mandate Progress per Unrecognized Power | power\_bloc | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_power\_member\_mult | Mandate Progress per Unrecognized Power | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_regional\_power\_member\_add | Mandate Progress per Unrecognized Regional Power | power\_bloc | additive | good |  |
| power\_bloc\_mandate\_progress\_per\_unrecognized\_regional\_power\_member\_mult | Mandate Progress per Unrecognized Regional Power | power\_bloc | multiplicative | percent, good |  |
| power\_bloc\_target\_sway\_cost\_mult | Sway Maneuver cost for the Diplomatic Play Target | power\_bloc | multiplicative | percent, bad |  |
| power\_bloc\_trade\_advantage\_add | Trade Advantage within Power Bloc | power\_bloc | additive | good |  |
| ship\_accuracy\_add | Accuracy |  | additive | good |  |
| ship\_accuracy\_mult | Accuracy |  | multiplicative | percent, good |  |
| ship\_armor\_add | Ship Armor |  | additive | good |  |
| ship\_armor\_mult | Ship Armor |  | multiplicative | percent, good |  |
| ship\_battle\_against\_ship\_type\_destroyer\_accuracy\_add | Destroyer Accuracy |  | additive | percent, good |  |
| ship\_battle\_against\_ship\_type\_destroyer\_accuracy\_mult | Destroyer Accuracy |  | multiplicative | percent, good |  |
| ship\_battle\_against\_ship\_type\_dreadnought\_hull\_damage\_mult | Dreadnought Hull Attack Damage |  | multiplicative | percent, good |  |
| ship\_battle\_against\_ship\_type\_modern\_ironclad\_hull\_damage\_mult | Modern Ironclad Hull Attack Damage |  | multiplicative | percent, good |  |
| ship\_battle\_against\_ship\_type\_pre\_dreadnought\_hull\_damage\_mult | Pre-Dreadnought Hull Attack Damage |  | multiplicative | percent, good |  |
| ship\_battle\_against\_ship\_type\_submarine\_accuracy\_add | Submarine Accuracy |  | additive | percent, good |  |
| ship\_battle\_against\_ship\_type\_submarine\_accuracy\_mult | Submarine Accuracy |  | multiplicative | percent, good |  |
| ship\_battle\_against\_ship\_type\_super\_dreadnought\_hull\_damage\_mult | Super Dreadnought Hull Attack Damage |  | multiplicative | percent, good |  |
| ship\_battle\_against\_ship\_type\_torpedo\_boat\_accuracy\_add | Torpedo Boat Accuracy |  | additive | percent, good |  |
| ship\_battle\_against\_ship\_type\_torpedo\_boat\_accuracy\_mult | Torpedo Boat Accuracy |  | multiplicative | percent, good |  |
| ship\_battle\_against\_ship\_type\_torpedo\_boat\_destroyer\_accuracy\_add | Torpedo Boat Destroyer Accuracy |  | additive | percent, good |  |
| ship\_battle\_against\_ship\_type\_torpedo\_boat\_destroyer\_accuracy\_mult | Torpedo Boat Destroyer Accuracy |  | multiplicative | percent, good |  |
| ship\_battle\_condition\_accuracy\_penalty\_mult | Battle Condition Accuracy Penalty |  | multiplicative | percent, good |  |
| ship\_blockade\_strength\_add | Blockade Strength |  | additive | good |  |
| ship\_blockade\_strength\_mult | Blockade Strength |  | multiplicative | percent, good |  |
| ship\_carrying\_capacity\_add | Carrying Capacity |  | additive | good |  |
| ship\_carrying\_capacity\_mult | Carrying Capacity |  | multiplicative | percent, good |  |
| ship\_construction\_progress\_max\_add | Max Ship Construction Progress |  | additive | neutral |  |
| ship\_construction\_progress\_max\_mult | Max Ship Construction Progress |  | multiplicative | percent, good |  |
| ship\_crew\_damage\_add | Crew Attack Damage |  | additive | good |  |
| ship\_crew\_damage\_mult | Crew Attack Damage |  | multiplicative | percent, good |  |
| ship\_crew\_experience\_gain\_add | Weekly Unit Experience Gain for Ship Crew |  | additive | good |  |
| ship\_crew\_experience\_gain\_mult | Weekly Unit Experience Gain for Ship Crew |  | multiplicative | percent, good |  |
| ship\_crew\_max\_add | Ship Crew |  | additive | good |  |
| ship\_crew\_max\_mult | Ship Crew |  | multiplicative | percent, good |  |
| ship\_critical\_hit\_chance\_add | Critical Chance |  | additive | percent, good |  |
| ship\_critical\_hit\_chance\_mult | Critical Chance |  | multiplicative | percent, good |  |
| ship\_critical\_hit\_multiplier\_add | Critical Damage |  | additive | percent, good |  |
| ship\_critical\_hit\_multiplier\_mult | Critical Damage |  | multiplicative | percent, good |  |
| ship\_detection\_add | Detection |  | additive | good |  |
| ship\_detection\_mult | Detection |  | multiplicative | percent, good |  |
| ship\_hit\_points\_max\_add | Maximum Ship Hit Points |  | additive | good |  |
| ship\_hit\_points\_max\_mult | Maximum Ship Hit Points |  | multiplicative | percent, good |  |
| ship\_hull\_damage\_add | Hull Attack Damage |  | additive | good |  |
| ship\_hull\_damage\_mult | Hull Attack Damage |  | multiplicative | percent, good |  |
| ship\_interest\_gain\_add | Ship Involvement Generation |  | additive | good |  |
| ship\_interest\_gain\_mult | Ship Involvement Generation |  | multiplicative | percent, good |  |
| ship\_marine\_capacity\_add | Marine Capacity |  | additive | good |  |
| ship\_marine\_capacity\_mult | Marine Capacity |  | multiplicative | percent, good |  |
| ship\_max\_distance\_to\_port\_add | Max Distance to Port |  | additive | good |  |
| ship\_max\_distance\_to\_port\_mult | Max Distance to Port |  | multiplicative | percent, good |  |
| ship\_movement\_speed\_add | Ship Speed |  | additive | good |  |
| ship\_movement\_speed\_mult | Ship Speed |  | multiplicative | percent, good |  |
| ship\_naval\_invasion\_efficiency\_mult | Naval Invasion Efficiency |  | multiplicative | percent, good |  |
| ship\_readiness\_gain\_add | Readiness |  | additive | good |  |
| ship\_readiness\_gain\_mult | Readiness |  | multiplicative | percent, good |  |
| ship\_screening\_add | Screening |  | additive | good |  |
| ship\_screening\_mult | Screening |  | multiplicative | percent, good |  |
| ship\_ship\_type\_aircraft\_carrier\_hull\_damage\_mult | Aircraft Carrier Hull Attack Damage |  | multiplicative | percent, good |  |
| ship\_ship\_type\_submarine\_hull\_damage\_mult | Submarine Hull Attack Damage |  | multiplicative | percent, good |  |
| ship\_ship\_type\_supply\_ship\_supply\_capacity\_mult | Supply Ship Supply Capacity |  | multiplicative | percent, good |  |
| ship\_suffered\_accuracy\_mult | Suffered Accuracy |  | multiplicative | percent, bad |  |
| ship\_suffered\_crew\_damage\_mult | Suffered Crew Attack Damage |  | multiplicative | percent, bad |  |
| ship\_suffered\_crit\_chance\_mult | Suffered Critical Chance |  | multiplicative | percent, bad |  |
| ship\_suffered\_crit\_damage\_mult | Suffered Critical Damage |  | multiplicative | percent, bad |  |
| ship\_suffered\_hull\_damage\_mult | Suffered Hull Attack Damage |  | multiplicative | percent, bad |  |
| ship\_supply\_capacity\_add | Supply Capacity |  | additive | good |  |
| ship\_supply\_capacity\_mult | Supply Capacity |  | multiplicative | percent, good |  |
| ship\_supply\_efficiency\_add | Supply Efficiency |  | additive | percent, good |  |
| ship\_supply\_efficiency\_mult | Supply Efficiency |  | multiplicative | percent, good |  |
| ship\_visibility\_add | Visibility |  | additive | bad |  |
| ship\_visibility\_mult | Visibility |  | multiplicative | percent, bad |  |
| ship\_vulnerability\_add | Vulnerability |  | additive | bad |  |
| ship\_vulnerability\_mult | Vulnerability |  | multiplicative | percent, bad |  |
| state\_academics\_investment\_pool\_contribution\_add | Academics Investment Pool contribution | state | additive | percent, good |  |
| state\_academics\_investment\_pool\_efficiency\_mult | Academics Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_academics\_mortality\_mult | Mortality of Academics | state | multiplicative | percent, bad |  |
| state\_allow\_assimilation\_in\_homeland\_bool | Assimilation in Homeland States Allowed | state | boolean | good |  |
| state\_allow\_assimilation\_without\_presence\_bool | Assimilation to Primary Culture Always Allowed | state | boolean | good |  |
| state\_allow\_conversion\_without\_presence\_bool | Conversion to State Religion Always Allowed | state | boolean | good |  |
| state\_aristocrats\_investment\_pool\_contribution\_add | Aristocrats Investment Pool contribution | state | additive | percent, good |  |
| state\_aristocrats\_investment\_pool\_efficiency\_mult | Aristocrats Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_aristocrats\_mortality\_mult | Mortality of Aristocrats | state | multiplicative | percent, bad |  |
| state\_assimilation\_mult | Assimilation | state | multiplicative | percent, good |  |
| state\_birth\_rate\_mult | Birth Rate | state | multiplicative | percent, good |  |
| state\_blockade\_resistance\_add | Blockade Resistance | state | additive | good |  |
| state\_building\_barrack\_max\_level\_add | Barracks Max Level | state | additive | good |  |
| state\_building\_conscription\_center\_max\_level\_add | Maximum Conscription Limit | state | additive | good |  |
| state\_building\_construction\_sector\_max\_level\_add | Construction Sector Max Level | state | additive | good |  |
| state\_building\_naval\_fortification\_max\_level\_add | Naval Fortification Max Level | state | additive | good |  |
| state\_bureaucracy\_population\_base\_cost\_factor\_mult | Bureaucracy Population Cost Multiplier | state | multiplicative | percent, bad |  |
| state\_bureaucrats\_investment\_pool\_contribution\_add | Bureaucrats Investment Pool contribution | state | additive | percent, good |  |
| state\_bureaucrats\_investment\_pool\_efficiency\_mult | Bureaucrats Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_buy\_orders\_ammunition\_add | Ammunition Buy Orders | state | additive | neutral |  |
| state\_buy\_orders\_artillery\_add | Artillery Buy Orders | state | additive | neutral |  |
| state\_buy\_orders\_small\_arms\_add | Small Arms Buy Orders | state | additive | neutral |  |
| state\_capitalists\_investment\_pool\_contribution\_add | Capitalists Investment Pool contribution | state | additive | percent, good |  |
| state\_capitalists\_investment\_pool\_efficiency\_mult | Capitalists Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_clergymen\_investment\_pool\_contribution\_add | Clergymen Investment Pool contribution | state | additive | percent, good |  |
| state\_clergymen\_investment\_pool\_efficiency\_mult | Clergymen Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_clerks\_investment\_pool\_contribution\_add | Clerks Investment Pool contribution | state | additive | percent, good |  |
| state\_clerks\_investment\_pool\_efficiency\_mult | Clerks Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_colony\_growth\_creation\_factor | Colonial Growth Generation | state |  | good |  |
| state\_colony\_growth\_speed\_mult | Colony Growth Speed | state | multiplicative | percent, good |  |
| state\_conscription\_rate\_add | Conscription Rate | state | additive | percent, good |  |
| state\_conscription\_rate\_mult | Conscriptable Battalions | state | multiplicative | percent, good |  |
| state\_construction\_mult | State Construction Efficiency | state | multiplicative | percent, good |  |
| state\_contiguous\_incorporation\_speed\_mult | Contiguous Incorporation Speed | state | multiplicative | percent, good |  |
| state\_control\_strait\_bool | Control Strait | state | boolean | good |  |
| state\_conversion\_mult | Conversion | state | multiplicative | percent, good |  |
| state\_decree\_cost\_mult | Decree Cost | state | multiplicative | percent, bad |  |
| state\_dependent\_political\_participation\_add | Dependent Enfranchisement | state | additive | percent, good |  |
| state\_dependent\_wage\_add | Yearly Dependents Income | state | additive | good |  |
| state\_dependent\_wage\_mult | Dependents Income | state | multiplicative | percent, good |  |
| state\_devastation\_decay\_mult | Devastation Recovery | state | multiplicative | percent, good |  |
| state\_disallow\_incorporation\_bool | State Incorporation Disallowed | state | boolean | bad |  |
| state\_education\_access\_add | Education Access | state | additive | percent, good |  |
| state\_education\_access\_wealth\_add | Education Access (Wealth-based) | state | additive | percent, good |  |
| state\_engineers\_investment\_pool\_contribution\_add | Engineers Investment Pool contribution | state | additive | percent, good |  |
| state\_engineers\_investment\_pool\_efficiency\_mult | Engineers Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_expected\_sol\_from\_literacy | Minimum Expected Standard of Living from Literacy | state |  | bad |  |
| state\_expected\_sol\_mult | Minimum Expected Standard of Living | state | multiplicative | percent, bad |  |
| state\_export\_advantage\_mult | Trade Advantage for Exports | state | multiplicative | percent, good |  |
| state\_farmers\_investment\_pool\_contribution\_add | Farmers Investment Pool contribution | state | additive | percent, good |  |
| state\_farmers\_investment\_pool\_efficiency\_mult | Farmers Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_farmers\_mortality\_mult | Mortality of Farmers | state | multiplicative | percent, bad |  |
| state\_food\_security\_add | Food Security | state | additive | percent, good |  |
| state\_fortification\_bombardment\_resistance\_add | Naval Fortification Bombardment Resistance | state | additive | good |  |
| state\_fortification\_naval\_battle\_mult | Naval Fortification Battle Defense | state | multiplicative | percent, good |  |
| state\_fortification\_naval\_invasion\_add | Naval Fortification Invasion Defense | state | additive | good |  |
| state\_free\_state\_pop\_support\_movement\_anti\_slavery\_mult | Abolitionist Movement Pop Attraction in non-Slave States | state | multiplicative | percent, neutral |  |
| state\_harvest\_condition\_disease\_outbreak\_duration\_mult | Disease Outbreak Harvest Condition Duration | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_disease\_outbreak\_impact\_mult | Disease Outbreak Harvest Condition Impact | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_drought\_duration\_mult | Drought Harvest Condition Duration | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_drought\_impact\_mult | Drought Harvest Condition Impact | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_earthquake\_duration\_mult | Earthquake Harvest Condition Duration | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_earthquake\_impact\_mult | Earthquake Harvest Condition Impact | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_extreme\_winds\_duration\_mult | Extreme Winds Harvest Condition Duration | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_extreme\_winds\_impact\_mult | Extreme Winds Harvest Condition Impact | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_flood\_duration\_mult | Flood Harvest Condition Duration | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_flood\_impact\_mult | Flood Harvest Condition Impact | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_hailstorm\_duration\_mult | state\_harvest\_condition\_hailstorm\_duration\_mult | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_hailstorm\_impact\_mult | state\_harvest\_condition\_hailstorm\_impact\_mult | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_heatwave\_duration\_mult | Heatwave Harvest Condition Duration | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_heatwave\_impact\_mult | Heatwave Harvest Condition Impact | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_torrential\_rains\_duration\_mult | state\_harvest\_condition\_torrential\_rains\_duration\_mult | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_torrential\_rains\_impact\_mult | state\_harvest\_condition\_torrential\_rains\_impact\_mult | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_tsunami\_duration\_mult | Tsunami Harvest Condition Duration | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_tsunami\_impact\_mult | Tsunami Harvest Condition Impact | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_wildfire\_duration\_mult | Wildfire Harvest Condition Duration | state | multiplicative | percent, bad |  |
| state\_harvest\_condition\_wildfire\_impact\_mult | Wildfire Harvest Condition Impact | state | multiplicative | percent, bad |  |
| state\_import\_advantage\_mult | Trade Advantage for Imports | state | multiplicative | percent, good |  |
| state\_incorporation\_speed\_mult | Incorporation Speed | state | multiplicative | percent, good |  |
| state\_infrastructure\_add | Infrastructure | state | additive | good |  |
| state\_infrastructure\_from\_automobiles\_consumption\_add | Infrastructure from Pop Automobiles Consumption | state | additive | good |  |
| state\_infrastructure\_from\_population\_add | Infrastructure per 100.0K Population | state | additive | good |  |
| state\_infrastructure\_from\_population\_max\_add | Maximum Infrastructure from Population | state | additive | good |  |
| state\_infrastructure\_from\_population\_max\_mult | Maximum Infrastructure from Population | state | multiplicative | percent, good |  |
| state\_infrastructure\_from\_population\_mult | Infrastructure per 100.0K Population | state | multiplicative | percent, good |  |
| state\_infrastructure\_mult | Infrastructure | state | multiplicative | percent, good |  |
| state\_institution\_impact\_add | Impact of Institutions | state | additive | percent, good |  |
| state\_laborers\_investment\_pool\_contribution\_add | Laborers Investment Pool contribution | state | additive | percent, good |  |
| state\_laborers\_investment\_pool\_efficiency\_mult | Laborers Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_laborers\_mortality\_mult | Mortality of Laborers | state | multiplicative | percent, bad |  |
| state\_literacy\_growth\_add | Literacy Growth | state | additive | percent, good |  |
| state\_lower\_strata\_expected\_sol\_add | Minimum Expected Standard of Living for the Lower Strata | state | additive | neutral |  |
| state\_loyalism\_increases\_cultural\_erasure\_mult | Loyalism increases for the Cultural Erasure Status | state | multiplicative | percent, good |  |
| state\_loyalism\_increases\_full\_acceptance\_mult | Loyalism increases for the Full Acceptance Status | state | multiplicative | percent, good |  |
| state\_loyalism\_increases\_open\_prejudice\_mult | Loyalism increases for the Open Prejudice Status | state | multiplicative | percent, good |  |
| state\_loyalism\_increases\_second\_rate\_citizen\_mult | Loyalism increases for the Second-class Citizen Status | state | multiplicative | percent, good |  |
| state\_loyalism\_increases\_violent\_hostility\_mult | Loyalism increases for the Violent Hostility Status | state | multiplicative | percent, good |  |
| state\_loyalists\_from\_political\_movements\_mult | Loyalists from Political Movements | state | multiplicative | percent, good |  |
| state\_machinists\_investment\_pool\_contribution\_add | Machinists Investment Pool contribution | state | additive | percent, good |  |
| state\_machinists\_investment\_pool\_efficiency\_mult | Machinists Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_machinists\_mortality\_mult | Mortality of Machinists | state | multiplicative | percent, bad |  |
| state\_market\_access\_price\_impact | Market Access Price Impact | state |  | percent, neutral |  |
| state\_max\_trade\_advantage\_from\_capacity\_add | Maximum Trade Advantage from Capacity | state | additive | percent, good |  |
| state\_middle\_strata\_expected\_sol\_add | Minimum Expected Standard of Living for the Middle Strata | state | additive | neutral |  |
| state\_migration\_pull\_add | Migration Attraction | state | additive | good |  |
| state\_migration\_pull\_mult | Migration Attraction | state | multiplicative | percent, good |  |
| state\_migration\_pull\_unincorporated\_mult | Migration Attraction in Unincorporated States | state | multiplicative | percent, good |  |
| state\_migration\_quota\_mult | Migration Quota | state | multiplicative | percent, neutral |  |
| state\_minimum\_incorporated\_subsistence\_arable\_land\_add | Minimum Subsistence Land Share in Incorporated States | state | additive | percent, neutral |  |
| state\_mortality\_mult | Mortality | state | multiplicative | percent, bad |  |
| state\_mortality\_turmoil\_mult | Mortality per Turmoil | state | multiplicative | percent, bad |  |
| state\_mortality\_wealth\_mult | Mortality per Wealth | state | multiplicative | percent, bad |  |
| state\_non\_contiguous\_incorporation\_speed\_mult | Non-Contiguous Incorporation Speed | state | multiplicative | percent, good |  |
| state\_non\_homeland\_colony\_growth\_speed\_mult | Colony Growth Speed in non-Homeland States | state | multiplicative | percent, good |  |
| state\_non\_homeland\_mortality\_mult | Mortality in non-Homeland States | state | multiplicative | percent, bad |  |
| state\_officers\_investment\_pool\_contribution\_add | Officers Investment Pool contribution | state | additive | percent, good |  |
| state\_officers\_investment\_pool\_efficiency\_mult | Officers Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_peasants\_consumption\_multiplier\_add | Goods consumption for Peasants | state | additive | percent, bad |  |
| state\_peasants\_education\_access\_add | Education Access for Peasants | state | additive | percent, good |  |
| state\_peasants\_internal\_migration\_disallowed\_bool | Disallowed Internal Migration for Peasants | state | boolean | bad |  |
| state\_peasants\_mass\_migration\_disallowed\_bool | Disallowed Mass Migration for Peasants | state | boolean | bad |  |
| state\_peasants\_mortality\_mult | Mortality of Peasants | state | multiplicative | percent, bad |  |
| state\_political\_strength\_from\_wealth\_mult | Political Strength from Wealth | state | multiplicative | percent, neutral |  |
| state\_political\_strength\_from\_welfare\_mult | Political Strength when receiving Welfare | state | multiplicative | percent, neutral |  |
| state\_pollution\_generation\_add | Generated Pollution | state | additive | bad |  |
| state\_pollution\_reduction\_health\_mult | Pollution Health Effects Reduction | state | multiplicative | percent, bad |  |
| state\_pop\_pol\_str\_add | Universal Pop Political Strength | state | additive | neutral |  |
| state\_pop\_pol\_str\_mult | Universal Pop Political Strength | state | multiplicative | percent, neutral |  |
| state\_pop\_qualifications\_mult | Qualifications | state | multiplicative | percent, good |  |
| state\_pop\_support\_movement\_anarchist\_add | Anarchist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_anarchist\_mult | Anarchist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_anti\_slavery\_add | Abolitionist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_anti\_slavery\_mult | Abolitionist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_bonapartist\_add | Bonapartist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_bonapartist\_mult | Bonapartist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_carlist\_add | Carlist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_carlist\_mult | Carlist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_communist\_add | Communist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_communist\_mult | Communist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_corporatist\_add | Corporatist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_corporatist\_mult | Corporatist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_cultural\_majority\_add | Cultural Majority Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_cultural\_majority\_mult | Cultural Majority Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_cultural\_minority\_add | Cultural Minority Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_cultural\_minority\_mult | Cultural Minority Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_fascist\_add | Fascist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_fascist\_mult | Fascist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_feminist\_add | Feminist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_feminist\_mult | Feminist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_german\_national\_add | German National Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_german\_national\_mult | German National Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_india\_pan\_national\_add | Indian National Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_india\_pan\_national\_mult | Indian National Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_italian\_national\_add | Italian National Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_italian\_national\_mult | Italian National Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_labor\_add | Labor Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_labor\_mult | Labor Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_land\_reform\_add | Peasant Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_land\_reform\_mult | Peasant Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_legitimist\_add | Legitimist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_legitimist\_mult | Legitimist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_liberal\_add | Liberal Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_liberal\_mult | Liberal Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_miguelist\_add | Miguelist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_miguelist\_mult | Miguelist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_modernizer\_add | Modernization Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_modernizer\_mult | Modernization Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_nihilist\_add | Nihilist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_nihilist\_mult | Nihilist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_orleanist\_add | Orleanist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_orleanist\_mult | Orleanist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_positivist\_add | Positivist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_positivist\_mult | Positivist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_pro\_slavery\_add | Pro-Slavery Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_pro\_slavery\_mult | Pro-Slavery Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_radical\_add | Radical Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_radical\_mult | Radical Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_reactionary\_add | Reactionary Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_reactionary\_mult | Reactionary Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_religious\_majority\_add | Religious Majority Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_religious\_majority\_mult | Religious Majority Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_religious\_minority\_add | Religious Minority Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_religious\_minority\_mult | Religious Minority Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_royalist\_absolutist\_add | Absolutist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_royalist\_absolutist\_mult | Absolutist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_royalist\_constitutional\_add | Royalist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_royalist\_constitutional\_mult | Royalist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_slave\_revolt\_add | Slave Revolt Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_slave\_revolt\_mult | Slave Revolt Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_socialist\_add | Socialist Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_socialist\_mult | Socialist Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_utilitarian\_add | Utilitarian Movement Pop Attraction | state | additive | neutral |  |
| state\_pop\_support\_movement\_utilitarian\_mult | Utilitarian Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_pop\_support\_movement\_yugoslav\_national\_add | state\_pop\_support\_movement\_yugoslav\_national\_add | state | additive | neutral |  |
| state\_pop\_support\_movement\_yugoslav\_national\_mult | German National Movement Pop Attraction | state | multiplicative | percent, neutral |  |
| state\_radicalism\_increases\_cultural\_erasure\_mult | Radicalism increases for the Cultural Erasure Status | state | multiplicative | percent, bad |  |
| state\_radicalism\_increases\_full\_acceptance\_mult | Radicalism increases for the Full Acceptance Status | state | multiplicative | percent, bad |  |
| state\_radicalism\_increases\_open\_prejudice\_mult | Radicalism increases for the Open Prejudice Status | state | multiplicative | percent, bad |  |
| state\_radicalism\_increases\_second\_rate\_citizen\_mult | Radicalism increases for the Second-class Citizen Status | state | multiplicative | percent, bad |  |
| state\_radicalism\_increases\_violent\_hostility\_mult | Radicalism increases for the Violent Hostility Status | state | multiplicative | percent, bad |  |
| state\_radicals\_and\_loyalists\_from\_sol\_change\_mult | Radicals and Loyalists from Standard of Living changes | state | multiplicative | percent, neutral |  |
| state\_radicals\_from\_political\_movements\_mult | Radicals from Political Movements | state | multiplicative | percent, bad |  |
| state\_sell\_orders\_ammunition\_add | Ammunition Sell Orders | state | additive | neutral |  |
| state\_sell\_orders\_artillery\_add | Artillery Sell Orders | state | additive | neutral |  |
| state\_sell\_orders\_grain\_add | Grain Sell Orders | state | additive | neutral |  |
| state\_sell\_orders\_small\_arms\_add | Small Arms Sell Orders | state | additive | neutral |  |
| state\_shopkeepers\_investment\_pool\_contribution\_add | Shopkeepers Investment Pool contribution | state | additive | percent, good |  |
| state\_shopkeepers\_investment\_pool\_efficiency\_mult | Shopkeepers Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_slave\_import\_mult | Slave Imports | state | multiplicative | percent, good |  |
| state\_slaves\_mortality\_mult | Mortality of Slaves | state | multiplicative | percent, bad |  |
| state\_soldiers\_investment\_pool\_contribution\_add | Servicemen Investment Pool contribution | state | additive | percent, good |  |
| state\_soldiers\_investment\_pool\_efficiency\_mult | Servicemen Investment Pool contribution efficiency | state | multiplicative | percent, good |  |
| state\_soldiers\_mortality\_mult | Mortality of Servicemen | state | multiplicative | percent, bad |  |
| state\_standard\_of\_living\_add | Standard of Living | state | additive | good |  |
| state\_subvention\_export\_add | Maximum Subventions on Exports | state | additive | percent, neutral |  |
| state\_subvention\_import\_add | Maximum Subventions on Imports | state | additive | percent, neutral |  |
| state\_tariff\_export\_add | Maximum Tariffs on Exports | state | additive | percent, neutral |  |
| state\_tariff\_import\_add | Maximum Tariffs on Imports | state | additive | percent, neutral |  |
| state\_tax\_capacity\_add | Taxation Capacity | state | additive | good |  |
| state\_tax\_capacity\_mult | Taxation Capacity | state | multiplicative | percent, good |  |
| state\_tax\_collection\_mult | Tax Collection | state | multiplicative | percent, neutral |  |
| state\_tax\_waste\_add | Tax Waste | state | additive | percent, bad |  |
| state\_trade\_advantage\_from\_capacity\_add | Trade Advantage from Capacity | state | additive | percent, good |  |
| state\_trade\_advantage\_mult | Trade Advantage | state | multiplicative | percent, good |  |
| state\_trade\_advantage\_same\_religion\_add | Trade Advantage with Co-Religionists | state | additive | good |  |
| state\_trade\_capacity\_add | Trade Capacity | state | additive | good |  |
| state\_trade\_capacity\_mult | Trade Capacity | state | multiplicative | percent, good |  |
| state\_trade\_center\_max\_limit\_add | Trade Center Max Level | state | additive | good |  |
| state\_trade\_quantity\_mult | Traded Quantity | state | multiplicative | percent, good |  |
| state\_turmoil\_effects\_mult | State Penalties from Turmoil | state | multiplicative | percent, bad |  |
| state\_unincorporated\_starting\_wages\_mult | Starting Wages in Unincorporated States | state | multiplicative | percent, neutral |  |
| state\_upper\_strata\_expected\_sol\_add | Minimum Expected Standard of Living for the Upper Strata | state | additive | neutral |  |
| state\_urbanization\_per\_level\_add | Urbanization per Urban Center | state | additive | neutral |  |
| state\_urbanization\_per\_level\_mult | Urbanization per Urban Center | state | multiplicative | percent, bad |  |
| state\_weekly\_trades\_add | Weekly Trades | state | additive | good |  |
| state\_welfare\_payments\_add | Welfare Payments | state | additive | percent, neutral |  |
| state\_welfare\_payments\_mult | Welfare Payments Multiplier | state | multiplicative | percent, neutral |  |
| state\_working\_adult\_ratio\_add | Workforce Ratio | state | additive | percent, good |  |
| tax\_consumption\_add | Consumption Tax Rate | tax | additive | percent, neutral |  |
| tax\_dividends\_add | Dividends Tax Rate | tax | additive | percent, neutral |  |
| tax\_heathen\_add | Religious Tax | tax | additive | neutral |  |
| tax\_income\_add | Income Tax Rate | tax | additive | percent, neutral |  |
| tax\_land\_add | Land Tax | tax | additive | neutral |  |
| tax\_per\_capita\_add | Per Capita Tax | tax | additive | neutral |  |
| unit\_army\_defense\_add | Army Defense | unit | additive | good | - combat |
| unit\_army\_defense\_mult | Army Defense | unit | multiplicative | percent, good | - combat |
| unit\_army\_experience\_gain\_add | Weekly Unit Experience Gain for Armies | unit | additive | good | - non-combat - combat (if in battle on weekly tick) |
| unit\_army\_experience\_gain\_mult | Weekly Unit Experience Gain for Armies | unit | multiplicative | percent, good | - non-combat - combat (if in battle on weekly tick) |
| unit\_army\_offense\_add | Army Offense | unit | additive | good | - combat |
| unit\_army\_offense\_mult | Army Offense | unit | multiplicative | percent, good | - combat |
| unit\_combat\_unit\_type\_cannon\_artillery\_offense\_mult | Cannon Artillery Offense | unit | multiplicative | percent, good |  |
| unit\_combat\_unit\_type\_heavy\_tank\_offense\_mult | Heavy Tanks Offense | unit | multiplicative | percent, good |  |
| unit\_combat\_unit\_type\_mechanized\_infantry\_offense\_add | Mechanized Infantry Offense | unit | additive | good |  |
| unit\_combat\_unit\_type\_mobile\_artillery\_offense\_mult | Mobile Artillery Offense | unit | multiplicative | percent, good |  |
| unit\_combat\_unit\_type\_shrapnel\_artillery\_offense\_mult | Shrapnel Artillery Offense | unit | multiplicative | percent, good |  |
| unit\_combat\_unit\_type\_siege\_artillery\_offense\_mult | Siege Artillery Offense | unit | multiplicative | percent, good |  |
| unit\_combat\_unit\_type\_squad\_infantry\_offense\_add | Squad Infantry Offense | unit | additive | good |  |
| unit\_combat\_unit\_type\_trench\_infantry\_offense\_add | Trench Infantry Offense | unit | additive | good |  |
| unit\_defense\_add | Defense | unit | additive | good | - combat |
| unit\_defense\_developed\_add | Defense in Flat Terrain | unit | additive | good |  |
| unit\_defense\_developed\_mult | Defense in Flat Terrain | unit | multiplicative | percent, good |  |
| unit\_defense\_elevated\_add | Defense in Elevated Terrain | unit | additive | good |  |
| unit\_defense\_elevated\_mult | Defense in Elevated Terrain | unit | multiplicative | percent, good |  |
| unit\_defense\_flat\_add | Defense in Flat Terrain | unit | additive | good |  |
| unit\_defense\_flat\_mult | Defense in Flat Terrain | unit | multiplicative | percent, good |  |
| unit\_defense\_forested\_add | Defense in Forested Terrain | unit | additive | good |  |
| unit\_defense\_forested\_mult | Defense in Forested Terrain | unit | multiplicative | percent, good |  |
| unit\_defense\_hazardous\_add | Defense in Hazardous Terrain | unit | additive | good |  |
| unit\_defense\_hazardous\_mult | Defense in Hazardous Terrain | unit | multiplicative | percent, good |  |
| unit\_defense\_mult | Defense | unit | multiplicative | percent, good | - combat |
| unit\_defense\_water\_add | Defense in Flat Terrain | unit | additive | good |  |
| unit\_defense\_water\_mult | Defense in Flat Terrain | unit | multiplicative | percent, good |  |
| unit\_devastation\_mult | Devastation | unit | multiplicative | percent, neutral | - combat |
| unit\_experience\_gain\_add | Weekly Unit Experience Gain for Armies & Navies | unit | additive | good | - non-combat - combat (if in battle on weekly tick) |
| unit\_experience\_gain\_mult | Weekly Unit Experience Gain for Armies & Navies | unit | multiplicative | percent, good | - non-combat - combat (if in battle on weekly tick) |
| unit\_kill\_rate\_add | Kill Rate | unit | additive | percent, good | - combat |
| unit\_morale\_damage\_mult | Morale Damage | unit | multiplicative | percent, good | - combat |
| unit\_morale\_loss\_add | Morale Loss | unit | additive | bad | - combat |
| unit\_morale\_loss\_mult | Morale Loss | unit | multiplicative | percent, bad | - combat |
| unit\_morale\_recovery\_mult | Morale Recovery | unit | multiplicative | percent, good | - non-combat |
| unit\_naval\_invasion\_efficiency\_mult | Naval Invasion Efficiency | unit | multiplicative | percent, good |  |
| unit\_occupation\_mult | Battle Occupation | unit | multiplicative | percent, good | - combat |
| unit\_offense\_add | Offense | unit | additive | good | - combat |
| unit\_offense\_developed\_add | Offense in Flat Terrain | unit | additive | good |  |
| unit\_offense\_developed\_mult | Offense in Flat Terrain | unit | multiplicative | percent, good |  |
| unit\_offense\_elevated\_add | Offense in Elevated Terrain | unit | additive | good |  |
| unit\_offense\_elevated\_mult | Offense in Elevated Terrain | unit | multiplicative | percent, good |  |
| unit\_offense\_flat\_add | Offense in Flat Terrain | unit | additive | good |  |
| unit\_offense\_flat\_mult | Offense in Flat Terrain | unit | multiplicative | percent, good |  |
| unit\_offense\_forested\_add | Offense in Forested Terrain | unit | additive | good |  |
| unit\_offense\_forested\_mult | Offense in Forested Terrain | unit | multiplicative | percent, good |  |
| unit\_offense\_hazardous\_add | Offense in Hazardous Terrain | unit | additive | good |  |
| unit\_offense\_hazardous\_mult | Offense in Hazardous Terrain | unit | multiplicative | percent, good |  |
| unit\_offense\_mult | Offense | unit | multiplicative | percent, good | - combat |
| unit\_offense\_water\_add | Offense in Flat Terrain | unit | additive | good |  |
| unit\_offense\_water\_mult | Offense in Flat Terrain | unit | multiplicative | percent, good |  |
| unit\_provinces\_captured\_mult | Provinces Captured | unit | multiplicative | percent, good | - combat |
| unit\_provinces\_lost\_mult | Provinces Lost | unit | multiplicative | percent, bad | - combat |
| unit\_recovery\_rate\_add | Recovery Rate | unit | additive | percent, good | - combat |
| unit\_supply\_consumption\_mult | Supply Consumption | unit | multiplicative | percent, bad | - non-combat |

## References
1. [↑](#cite_ref-1) Modifier type flow connections determined by BrokenRobot for the [Tiger validator](https://github.com/amtep/tiger)

---

- To update notes of defined modifier types, see Module:Modifier type/Notes
- To update the potential modifier types, see Module:Modifier type/Potential

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • Modifier types • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
