# Trigger

This article has been verified for the current version (1.13) of the game.

*See also: [Effect](./Effect.md), [Event target](./Event target.md)*

Triggers act as conditions by reading the current game state – such as the ideology of a character, the ownership of a state, and much else.

Triggers come in two basic types, inline and block. Inline triggers take a simple target, such as a scope, script value, or defined type. Block triggers are more complex and often take multiple targets, such as a scope and script value.

All triggers require a certain [scope](./Scope.md). Some triggers can be used in any scope (noted as "none" in the following tables), others only function when in the correct scope. Some triggers change the current scope.

The tables below are generated from the script documentation (*script\_docs* console command).

## Comparison triggers
Comparisons are a common type of trigger, comparing two numerical values or game objects. Many triggers in the tables below are a comparison trigger (indicated with target `value`), but comparisons can also be made directly between values or objects using [script values](./Script value.md), [variables](./Variable.md), and [event targets](./Event target.md).

Comparisons use one of the comparison operators:

| Operator | Meaning | Inverted meaning | Use |
| `<` | (Strict) less than | Greater than or equals | Left side is strictly less than right side |
| `<=` | Less than or equals | (Strict) greater than | Left side is less than or equal to right side |
| `=` | (Strict) equals | Not equals | Left side is exactly equal to the right side (usable with non-numerical values) |
| `!=` | Not equals | (Strict) equals | Left side is not equal to the right side (usable with non-numerical values) |
| `>` | (Strict) greater than | Less than or equals | Left side if strictly greater than the right side |
| `>=` | Greater than or equals | (Strict) less than | Left side is greater than or equal to the right side. |

If a comparison is used inside a negative block (e.g. `NOT = { }`), it uses its inverted meaning.

Note that `=` is also used as the operator for non-comparison triggers, effects, and blocks. In these cases, the `=` represents an assignment rather than a comparison.

### Event targets as triggers
*Main article: [Event target](./Event target.md)*

Event targets can be used as either the left or right side of a comparison trigger. For example, `army_size > c:FRA.army_size` returns true if the army size of the current scope is larger than the army size of France. For event targets that return a scope, only equality can be checked, while event targets that return a value can be used with inequality comparisons, too.

List of value event targets

| Event target | Description | From scope |
| ai\_army\_comparison | Scope to comparative army strength between two countries (example: value = ai\_army\_comparison:root) | country |
| ai\_colonization\_value | Scope to target country AI desire to colonize a strategic region (example: value = ai\_colonization\_value:root) | strategic\_region |
| ai\_gdp\_comparison | Scope to comparative GDP between two countries (example: value = ai\_army\_comparison:root) | country |
| ai\_ideological\_opinion | Scope to AI ideological opinion of scope country on target country (example: value = ai\_ideological\_opinion:root) | country |
| ai\_navy\_comparison | Scope to comparative navy strength between two countries (example: value = ai\_navy\_comparison:root) | country |
| ai\_state\_value | Scope to target country AI desire to own scope state (example: value = ai\_state\_value:root) | state |
| ai\_subject\_value | Scope to AI desire of target country to have scope country as a subject (example: value = ai\_subject\_value:root) | country |
| ai\_transit\_rights\_value | Scope to AI desire of to have transit rights through target country (example: value = ai\_transit\_rights\_value:root) | country |
| ai\_treaty\_export\_value | Scope to target country AI desire to export scoped market good (example: value = ai\_market\_export\_value:root) | market\_goods |
| ai\_treaty\_fairness | Scope to AI evaluation of how fair (to both sides) it considers existing treaty articles with the target country to be (example: value = ai\_treaty\_fairness\_score:root) | country |
| ai\_treaty\_import\_value | Scope to target country AI desire to import scoped market good through treaties (example: value = ai\_market\_import\_value:root) | market\_goods |
| ai\_treaty\_port\_value | Scope to target country AI desire to have a treaty port in scope state (example: value = ai\_treaty\_port\_value:root) | state |
| ai\_treaty\_trade\_value | Scope to target country AI desire to import and export scoped market good (example: value = ai\_market\_trade\_value:root) | market\_goods |
| ai\_treaty\_value | Scope to AI evaluation of how favorable to itself it considers existing treaty articles with the target country to be (example: value = ai\_treaty\_value:root) | country |
| army\_size | Number of battalions of scope country, excluding currently raised conscripts. | country |
| army\_size\_including\_conscripts | Number of battalions of scope country, including currently raised conscripts. | country |
| army\_size\_including\_raised\_conscripts | Number of battalions of scope country, including currently raised conscripts but excluding unraised conscripts. | country |
| array\_define | Reference the value of a numeric value in an array define: array\_define:Namespace|Name|Index. Index is 0-based. | none |
| average\_defense | Returns the average defense of units on Front on the same side as Country | front |
| average\_expected\_sol | Get the average expected Standard of Living of the scope | country, state |
| average\_offense | Returns the average offense of units on Front on the same side as Country | front |
| average\_progressiveness | Get the average progressiveness of the scoped character or interest group | character, interest\_group |
| average\_sol | Get the average Standard of Living of the scope | country, state |
| base\_price | Get the base price of the scoped good | goods |
| binding\_period | Get the original binding period in days when the treaty was signed for the scoped treaty | treaty, treaty\_options |
| building\_levels | Get the total number of non-subsistence building levels of the scoped country | country |
| cached\_ai\_coastal\_population | Scope to total coastal population recorded in AI spending variables (example: value = cached\_ai\_coastal\_population) | country |
| cached\_ai\_incorporated\_coastal\_population | Scope to total incorporated coastal population recorded in AI spending variables (example: value = cached\_ai\_incorporated\_coastal\_population) | country |
| cached\_ai\_incorporated\_population | Scope to total incorporated population recorded in AI spending variables (example: value = cached\_ai\_incorporated\_population) | country |
| cached\_ai\_overseas\_subject\_population | Scope to total population in direct non-adjacent subjects recorded in AI spending variables (example: value = cached\_ai\_overseas\_subject\_population) | country |
| cached\_ai\_subject\_population | Scope to total population in direct subjects recorded in AI spending variables (example: value = cached\_ai\_subject\_population) | country |
| cached\_ai\_total\_population | Scope to total population recorded in AI spending variables (example: value = cached\_ai\_total\_population) | country |
| cached\_ai\_unincorporated\_coastal\_population | Scope to total unincorporated coastal population recorded in AI spending variables (example: value = cached\_ai\_unincorporated\_coastal\_population) | country |
| cached\_ai\_unincorporated\_population | Scope to total unincorporated population recorded in AI spending variables (example: value = cached\_ai\_unincorporated\_population) | country |
| colonial\_growth\_per\_colony | Scope to the country's colonial growth per colony value (example: colonial\_growth\_per\_colony > 0) | country |
| combat\_width | Scope to combat width multiplier of scope province | province |
| command\_limit\_num\_units | Get the baseline number of units from their military formation a commander would normally get, depending on their command limit | character |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | varies |
| compare\_value | A comparison trigger that will return its value in the context it is used eg: root.gold | varies |
| credit | Scope to the current amount of max credit the country can take | country |
| decree\_cost | Scope to a state's cost for a certain decree authority > decree\_cost:decree\_road\_maintaintenance | state |
| defense | Returns the unit's defense rating (including impact from their commander) | new\_combat\_unit |
| define | Reference the value of a numeric or color define: define:Namespace|Name | none |
| demoralized | Returns the unit's number of demoralized manpower | new\_combat\_unit |
| detection | Links from a fleet scope to the total detection of the ships in the fleet | military\_formation |
| diplomatic\_pact\_expense\_ratio | Scope to the ratio of diplomatic pact expenses to income for this country, clamped 0-1 (example: value = diplomatic\_pact\_expense\_ratio) | country |
| front\_length | Returns the number of provinces in Front | front |
| gdp | Get the scoped country's yearly predicted GDP | country, state |
| global\_productivity | Scope to global productivity values (example: global\_productivity:high\_threshold) | none |
| goal\_value | Scope to the journal entry's goal value | journal\_entry |
| government\_size | Get the scoped country's current number of Parties & independent IGs in government | country |
| income | Get the current weekly income of the scoped country | country |
| income\_transfer\_expenses | Scope to the amount of money scope country is transferring to other countries via treaties & pacts (example:income\_transfer\_expenses >= 100) | country |
| income\_transfer\_relative\_expenses | Scope to the fraction of their income country is transferring to other countries via treaties & pacts (example:income\_transfer\_relative\_expenses >= 0.2) | country |
| infamy | Scope to infamy of scope country (example: infamy >= 2) | country |
| infamy\_threshold | Scope to infamy level threshold for comparison purposes (infamy\_threshold:infamous) | none |
| input\_quantity | Scope to the quantity input in a treaty article | treaty\_article, treaty\_article\_options |
| investment | Scope to current investment level in an institution (example: investment < investment\_max) | institution |
| investment\_max | Scope to the country's current maximum investment level in an institution (example: investment < investment\_max) | institution |
| investment\_pool\_income | Get the current weekly investment pool income of the scoped country | country |
| legitimacy | Scope to the current amount of legitimacy in country | country |
| level | Scope to the level of a building | building |
| level\_after\_queued\_constructions | Scope to the level of a building after all queued constructions finish | building |
| lobby\_foreign\_anti\_clout | Scope to the total clout of all anti-country foreign policy lobbies targeting a specific country (lobby\_foreign\_anti\_clout:root >= 0.2) | country |
| lobby\_foreign\_pro\_clout | Scope to the total clout of all pro-country foreign policy lobbies targeting a specific country (lobby\_foreign\_pro\_clout:root >= 0.2) | country |
| lobby\_in\_government\_foreign\_anti\_clout | Scope to the total clout of all anti-country foreign policy lobbies in government targeting a specific country (lobby\_in\_government\_foreign\_anti\_clout:root >= 0.2) | country |
| lobby\_in\_government\_foreign\_pro\_clout | Scope to the total clout of all pro-country foreign policy lobbies in government targeting a specific country (lobby\_in\_government\_foreign\_pro\_clout:root >= 0.2) | country |
| lobby\_join\_weight | Scope to the join weight of an interest group to a particular lobby (lobby\_join\_weight:root >= 5) | interest\_group |
| lobby\_war\_opposition | Scope to the total clout of all lobbies that oppose the scoped war (lobby\_war\_opposition:root >= 0.2) | country |
| lobby\_war\_support | Scope to the total clout of all lobbies that support the scoped war (lobby\_war\_support:root >= 0.2) | country |
| manpower | Returns the unit's manpower | new\_combat\_unit |
| market\_export\_cap | Get the maximum amount of goods the market can export based on it's production of the scoped MarketGoods | market\_goods |
| market\_import\_cap | Get the maximum amount of goods the market can import based on it's consumption of the scoped MarketGoods | market\_goods |
| migration\_pull | Get the migration pull for a state or the mass migration pull for a country. | country, state |
| military\_expenses | Get the current military expenses (slaves, wages and goods) of the scoped country | country |
| military\_expenses\_share | Get the current share of military expenses (slaves, wages and goods) relative to the total expenses of the scoped country | country |
| mobilization | Returns the unit's mobilization value between 0 and 1 | new\_combat\_unit |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | battle\_side, building, character, country, interest\_group, market, power\_bloc, state |
| momentum | Get the scoped party's raw momentum | party |
| morale | Returns the unit's morale | new\_combat\_unit |
| mutual\_trade\_value\_with\_country | Scope to the total base value of goods traded in trade routes between the two markets (example: mutual\_trade\_value\_with\_country:root >= 1000) | country |
| named\_script\_value | A script value that will calculate and returns its value in the context it is used | none |
| naval\_combat\_power | Scope to the country's navy combat power (example: naval\_combat\_power > 100) | country |
| naval\_hostility\_average\_damage\_dealt | Scope to average damage dealt by this country in naval hostilities it initiated over the lookback period. Returns -1 if no hostilities found. | country |
| naval\_hostility\_damage | Scope to damage points inflicted by this country against another in active naval hostilities (example: naval\_hostility\_damage:root >= 50) | country |
| naval\_vulnerability | Scope to a country's naval vulnerability score based on trade reliance and coastal GDP share, capped at a define maximum | country |
| navy\_size | Number of flotillas of scope country. | country |
| num\_active\_interests | Scope to the number of active interests a country has num\_active\_interests > 5 | country |
| num\_active\_natural\_interests | Scope to the number of active natural interests a country has num\_active\_natural\_interests > 5 | country |
| num\_active\_plays | Get the current number of active Diplomatic Plays the scoped country started | country |
| num\_active\_ships | Get the number of active ships for a country, commander or military formation OR Get the number of active ships for military formations in the province that are allied to the specified country | character, country, military\_formation, province |
| num\_active\_ships\_in\_battle | Get the number of active ships in battle for a country, commander or military formation OR Get the number of active ships in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province |
| num\_active\_ships\_not\_in\_battle | Get the number of active ships not in battle for a country, commander or military formation OR Get the number of active ships not in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province |
| num\_admirals | Scope to the country's number of admirals | country |
| num\_alliances | Get the total number of alliances of the scoped country (example: num\_alliances:root >= 2) | country |
| num\_alliances\_and\_defensive\_pacts\_with\_allies | Scope to the number of alliances target country has with allies of scope country (example: num\_alliances\_and\_defensive\_pacts\_with\_allies:root >= 2) | country |
| num\_alliances\_and\_defensive\_pacts\_with\_rivals | Scope to the number of alliances & defensive pacts target country has with rivals of scope country (example: num\_alliances\_and\_defensive\_pacts\_with\_rivals:root >= 2) | country |
| num\_battalions | Returns the number of active battalions under a commander | character |
| num\_characters | Scope to the country's number of characters | country |
| num\_colony\_projects | Get the scoped country's current number of incomplete / in progress colony projects | country |
| num\_commanderless\_units | Number of units in a MilitaryFormation which currently don't have a commander due to commanders Command Limit.  - Obs: defeated commanders do not command units, i.e., the more defeated commanders, the more commanderless units. | military\_formation |
| num\_commanders | Scope to the country's number of commanders | country |
| num\_defending\_battalions | Returns the total number of units in battle on Front on the same side as Country, example: num\_defending\_battalions(root) | front |
| num\_defensive\_pacts | Scope to the number of defensive pacts target country has in total (example: num\_defensive\_pacts >= 2) | country |
| num\_garrison\_units | Returns the number of units garrisoned in a HQ | hq |
| num\_generals | Scope to the country's number of generals | country |
| num\_income\_transfer\_pacts | Scope to the number of income-transferring (to others) pacts target country has in total (example: num\_income\_transfer\_pacts >= 2) | country |
| num\_income\_transfer\_treaty\_articles | Scope to the number of income-transferring (to others) treaty articles target country has in total (example: num\_income\_transfer\_treaty\_articles >= 2) | country |
| num\_income\_transfers | Scope to the number of income-transferring (to others) pacts and treaty articles target country has in total (example: num\_income\_transfers >= 2) | country |
| num\_incorporated\_states | Get the scoped country's current number of incorporated states | country |
| num\_interests | Scope to the number of interests a country has (including inactive) num\_interests > 5 | country |
| num\_mandates | Scope to the number of available mandates of the scoped power bloc (power\_bloc.num\_mandates > 0) | power\_bloc |
| num\_mobilized\_battalions | Returns the number of fully mobilized units under a General | character |
| num\_natural\_interests | Scope to the number of natural interests a country has (including inactive)  - num\_natural\_interests > 5 | country |
| num\_non\_destroyed\_ships | Get the number of non-destroyed ships for a country, commander or military formation OR Get the number of non-destroyed ships for military formations in the province that are allied to the specified country | character, country, military\_formation, province |
| num\_non\_destroyed\_ships\_in\_battle | Get the number of non-destroyed ships in battle for a country, commander or military formation OR Get the number of non-destroyed ships in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province |
| num\_non\_destroyed\_ships\_not\_in\_battle | Get the number of non-destroyed ships not in battle for a country, commander or military formation OR Get the number of non-destroyed ships not in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province |
| num\_obligations\_earned | Scope from a country to the number of obligations others owe them (=which they have earned) | country |
| num\_pending\_events | Scope to the number of pending events in scope country, generally or for a specified category  - num\_pending\_events > 0 - num\_pending\_events:enactment > 0 | country |
| num\_politicians | Scope to the country's number of politicians | country |
| num\_positive\_relations | Get the current number of countries with positive Relation with the scoped country | country |
| num\_provinces | Get the scoped entity's current number of provinces | front, state, state\_region |
| num\_queued\_constructions | Scope to the number of queued constructions target country has in total (example: num\_queued\_constructions >= 2) | country |
| num\_queued\_government\_constructions | Scope to the number of queued government constructions target country has in total (example: num\_queued\_government\_constructions >= 2) | country |
| num\_queued\_private\_constructions | Scope to the number of queued private constructions target country has in total (example: num\_queued\_private\_constructions >= 2) | country |
| num\_rivals | Scope to the number of rivals target country has in total (example: num\_rivals >= 2) | country |
| num\_ruling\_igs | Get the scoped country's current number of IGs in government | country |
| num\_shared\_rivals | Scope to the number of shared rivals scope country has with target country (example: num\_shared\_rivals:root >= 2) | country |
| num\_ships | Get the number of ships for a country, commander or military formation OR Get the number of ships for military formations in the province that are allied to the specified country | character, country, military\_formation, province |
| num\_ships\_in\_battle | Get the number of ships in battle for a country, commander or military formation OR Get the number of ships in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province |
| num\_ships\_not\_in\_battle | Get the number of ships not in battle for a country, commander or military formation OR Get the number of ships not in battle for military formations in the province that are allied to the specified country | character, country, military\_formation, province |
| num\_ships\_of\_group | Number of ships of the provided ship group in the scoped country or military formation | country, military\_formation |
| num\_states | Get the scoped country's current number of states | country |
| num\_total\_battalions | Returns the total number of units on Front on the same side as Country, example: num\_total\_battalions(root) | front |
| num\_unincorporated\_states | Get the scoped country's current number of unincorporated states | country |
| num\_units | Get the number of active units for a commander or military formation Get the number of active units for military formations in the province that are allied to the specified country | character, military\_formation, province |
| num\_units\_in\_battle | Get the number of active units in battle for a commander or military formation Get the number of active units in battle for military formations in the province that are allied to the specified country | character, military\_formation, province |
| num\_units\_not\_in\_battle | Get the number of active units not in battle for a commander or military formation Get the number of active units not in battle for military formations in the province that are allied to the specified country | character, military\_formation, province |
| num\_units\_share | Share of units a commander has considering his command limit. Example: if the character has 30 Command Limit, the fleet has 60 total Command Limit, and the formation has 50 total flotillas, then the character should get 25 flotillas for their battle) | character |
| num\_world\_market\_hub\_trade\_center\_levels | Get the total number of trade center levels associated with scope world market hub state | state |
| offense | Returns the unit's offense rating (including impact from their commander) | new\_combat\_unit |
| participants | Get the total number of participating countries in the scoped market | market |
| pirated\_trade\_value\_by | Scope to the average weekly base value of goods pilfered from this country by a target country (example: pirated\_trade\_value\_by:root >= 50) | country |
| player\_owed\_obligation\_days\_left | Scope to number of days left on an obligation in diplomatic relations scope (example: obligation\_days\_left >= 2) | diplomatic\_relations |
| pop\_weight\_modifier\_scale | Get the Pop's weight modifier scale multiplier | pop |
| popularity | Get the scoped character's popularity, normally ranging between -100 and +100 | character |
| population\_below\_expected\_sol | Scope to the current percentage of the state's population that are below their expected standard of living (0-1) | state |
| power\_projection | Get the power projection value of the scoped formation, unit, or ship | military\_formation, new\_combat\_unit, ship |
| principal | Get the current debt principal of the country | country |
| prosperity | Scope to the amount of prosperity for scope company (example: prosperity >= 2) | company |
| rank\_value | Scope to rank value of a particular country rank (rank\_value:great\_power) | none |
| relations | Scope to relations between two countries (example: relations:root >= 2) | country |
| relations\_change\_rate | Scope to daily change in relations progress between two countries (example: relations\_change\_rate:root > 0) | country |
| relations\_threshold | Scope to relations threshold level for comparison purposes (relations\_threshold:warm) | none |
| remaining\_binding\_period | Get the current remaining binding period in days for the scoped treaty | treaty, treaty\_options |
| required\_construction | Get the required amount of construction for scope building type | building\_type |
| scope\_relations | Scope to relations value in diplomatic relations scope (example: scope\_relations >= 2) | diplomatic\_relations |
| scope\_tension | Scope to tension value in diplomatic relations scope (example: scope\_tension >= 2) | diplomatic\_relations |
| screening | Links from a fleet scope to the total screening of the ships in the fleet | military\_formation |
| strait\_trade\_importance\_by | Scope to the trade importance of goods this country is trading through straits controlled by a target country. Accumulated value is multiplied by STRAIT\_FULL\_CONTROL\_TRADE\_IMPORTANCE\_MULT for straits where the controller controls both sides (example: strait\_trade\_importance\_by:root >= 100) | country |
| techs\_researched | Scope to the current amount of techs researched of a country | country |
| tension | Scope to tension between two countries (example: tension:root >= 2) | country |
| tension\_threshold | Scope to tension level threshold for comparison purposes (tension\_threshold:warm) | none |
| total\_crew\_needed | Get the total crew needed by all ships of a country | country |
| total\_export\_value | Scope to the total value of scope country's exports to the world market (example: total\_export\_value >= 1000) | country |
| total\_import\_value | Scope to the total value of scope country's imports from the world market (example: total\_import\_value >= 1000) | country |
| total\_marine\_capacity | Get the total marine capacity across all fleets of a country | country |
| total\_pirated\_trade\_value | Scope to the total average weekly base value of goods pilfered via piracy between two countries in a diplomatic relations scope (example: total\_pirated\_trade\_value >= 100) | diplomatic\_relations |
| total\_trade\_value | Scope to the total value of scope country's trade with the world market (example: total\_trade\_value >= 1000) | country |
| training\_rate | Scope to the current maximum weekly training rate of a building | building |
| treaty\_exports | Get the current number of treaty (NOT world market) exports of the good to the market of the scoped MarketGoods | market\_goods |
| treaty\_imports | Get the current number of treaty (NOT world market) imports of the good to the market of the scoped MarketGoods | market\_goods |
| value | A numeric literal value eg: 1, 5.2, -6 | none |
| visibility | Links from a fleet scope to the total visibility of the ships in the fleet | military\_formation |
| vulnerability | Links from a fleet scope to the total vulnerability of the ships in the fleet | military\_formation |
| weekly\_prosperity\_change | Scope to the weekly prosperity change for scope company (example: weekly\_prosperity\_change >= 2) | company |

## Iterator triggers
Iterators examine all relevant scopes and output one or more. By default, iterators examine only one of the relevant scopes, but can be forced to examine more with the `count` or `percent` parameters

List of iterator triggers

| Trigger | Description | Example | Scopes | Targets |
| any\_active\_law | Iterate through all active laws in a country | ``` any_active_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | law |
| any\_active\_party | Iterate through all active political parties in a country | ``` any_active_party = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | party |
| any\_character | Iterate through all characters globally | ``` any_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | character |
| any\_character\_in\_exile\_pool | Iterate through characters in the exile pool | ``` any_character_in_exile_pool = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | character |
| any\_character\_in\_void | Iterate through characters in the void | ``` any_character_in_void = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | character |
| any\_character\_role | Iterate through all roles of the scoped character | ``` any_character_role = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character\_role |
| any\_civil\_war | Iterate through all civil wars related to the scoped country | ``` any_civil_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | civil\_war |
| any\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` any_cobelligerent_in_diplo_play = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` any_cobelligerent_in_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_combat\_unit | Iterate through all combat units of input scope | ``` any_combat_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | battle, building, front, hq, military\_formation | new\_combat\_unit |
| any\_company | Iterate through all companies in a country | ``` any_company = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | company |
| any\_country | Iterate through all countries globally | ``` any_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_country\_in\_<georegion\_short\_name> | Iterate through all countries in the specified geographic region | ``` any_country_in_<georegion_short_name> = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_country\_strategic\_region | Iterate through all strategic regions containing states owned by the scoped country | ``` any_country_strategic_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | strategic\_region |
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
| any\_owned\_country | Iterate through all countries owned by the scoped company | ``` any_owned_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | company | country |
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
| any\_scope\_army | Iterate through all armies currently present at input scope | ``` any_scope_army = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, hq | military\_formation |
| any\_scope\_article | Iterate through articles of the scoped treaty | ``` any_scope_article = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty | treaty\_article |
| any\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` any_scope_article_option = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty, treaty\_options | treaty\_article\_options |
| any\_scope\_building | Iterate through all buildings in a: state, country | ``` any_scope_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state | building |
| any\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` any_scope_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, strategic region) | ``` any_scope_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market, state\_region, strategic\_region | country |
| any\_scope\_culture | Iterate through all cultures in the scope | ``` any_scope_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state | culture |
| any\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` any_scope_diplomatic_pact = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | diplomatic\_pact |
| any\_scope\_fleet | Iterate through all fleets currently present at input scope | ``` any_scope_fleet = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, hq | military\_formation |
| any\_scope\_front | Iterate through all Fronts related to the scoped War | ``` any_scope_front = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | front |
| any\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` any_scope_general = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` any_scope_held_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | interest\_marker |
| any\_scope\_homeland\_state | Iterate through all states that are a homeland for the scoped culture, or a homeland of any primary culture of the scoped country | ``` any_scope_homeland_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character, country | state |
| any\_scope\_initiator\_ally | Iterate through all allies to an initiator in a: diplomatic play | ``` any_scope_initiator_ally = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_play | country |
| any\_scope\_interest\_marker | Iterate through all interest markers in a: country, strategic region | ``` any_scope_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state\_region, strategic\_region | interest\_marker |
| any\_scope\_je\_involved | Iterate through all involved in a journal entry | ``` any_scope_je_involved = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | journal\_entry | country |
| any\_scope\_play\_involved | Iterate through all involved in a: diplomatic play | ``` any_scope_play_involved = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_play | country |
| any\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` any_scope_politician = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` any_scope_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, culture, interest\_group, state | pop |
| any\_scope\_regional\_hqs | Iterate through regional HQs of the scoped company | ``` any_scope_regional_hqs = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | company | building |
| any\_scope\_ship | Iterate through all ships in a country or military formation | ``` any_scope_ship = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, military\_formation | ship |
| any\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, front, or strait | ``` any_scope_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, state\_region, strait, strategic\_region, theater | state |
| any\_scope\_strait | Iterate through all straits with a land endpoint in the scoped state or country | ``` any_scope_strait = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state | strait |
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
| any\_strategic\_region | Iterate through all strategic regions globally | ``` any_strategic_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | strategic\_region |
| any\_strategic\_region\_in\_<georegion\_short\_name> | Iterate through all strategic regions in the specified geographic region | ``` any_strategic_region_in_<georegion_short_name> = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | strategic\_region |
| any\_subject\_of\_subject | Any country below direct subjects in hierarchy | ``` any_subject_of_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_subject\_or\_below | Any country below current in hierarchy | ``` any_subject_or_below = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_supporting\_character | Iterate through all characters that support the scoped political movement | ``` any_supporting_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | political\_movement | character |
| any\_treaty | Iterate through treaties (both in force and drafts) | ``` any_treaty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | treaty |
| any\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` any_valid_mass_migration_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_war\_participant | Iterate through all participants in a war | ``` any_war_participant = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | country |

## Flow triggers
Flow triggers control how other triggers are used. This includes conditionals and loops as well as tooltips. They can always be used in any scope

List of flow triggers

| Trigger | Description | Example | Scopes | Targets |
| all\_false | true if all contained triggers are false (equivalent to NOR) |  | none |  |
| and | true if all contained triggers are true Returns false if at first false sub-trigger |  | none |  |
| any\_false | true if any contained trigger is false (equivalent to NAND) |  | none |  |
| calc\_true\_if | Returns true if the specified number of sub-triggers return true | ``` calc_true_if = {  amount = 2  <trigger>  <trigger>  <trigger> } ``` | none |  |
| custom\_description | Wraps triggers that get a custom description instead of the auto-generated one | ``` custom_description = {  text = <trigger_localization_key>  subject = <optional subject scope> #defaults to current scope  object = <optional object scope>  value = <optional script value>  ... triggers ... } ``` | none |  |
| custom\_tooltip | Replaces the tooltips for the enclosed triggers with a custom text | ``` custom_tooltip = {  text = <text>  subject = <scope> (optional)  <trigger> } ``` | none |  |
| hidden\_trigger | Enclosed triggers are not shown in tooltips | ``` hidden_trigger = { <more triggers> } ``` | none |  |
| nand | a negated AND trigger Returns false if all contained triggers return true; returns true at first false sub-trigger |  | none |  |
| nor | a negated OR trigger Returns true if all contained triggers return false; returns false at first true trigger |  | none |  |
| not | negates content of trigger Returns true if all contained triggers return false |  | none |  |
| or | false if all contained triggers are false Returns true at first true sub-trigger |  | none |  |
| switch | Switch on a trigger for the evaluation of another trigger with an optional fallback trigger. | ``` switch = {  trigger = simple_assign_trigger  case_1 = { <triggers> }  case_2 = { <triggers> }  case_n = { <triggers> }  fallback = { <triggers> } ``` | none |  |
| trigger\_else | Evaluates the display\_triggers if the triggers of preceding 'trigger\_if' or 'trigger\_else\_if' are not met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else = { <display_triggers> } ``` | none |  |
| trigger\_else\_if | Evaluates the display\_triggers if the triggers of the preceding `trigger\_if` or `trigger\_else\_if` are not met and its own trigger of the limit is met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else_if = {  limit = { <triggers> }  <display_triggers> } ``` | none |  |
| trigger\_if | Evaluates the display\_triggers if the triggers of the limit are met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } ``` | none |  |
| weighted\_calc\_true\_if | Returns true if the sum of weights of fulfilled sub-triggers amount to the specified sum | ``` weighted_calc_true_if = {  amount = 10  5 = { <trigger> }  15 = { <trigger> }  7 = { <trigger> } } ``` | none |  |

## Log triggers
Log triggers output a message for testing and debugging purposes. They can always be used in any scope.

List of log triggers

| Trigger | Description | Example | Scopes | Targets |
| assert\_if | Conditionally cause an assert during run time | ``` assert_if = {  limit = { <triggers> }  text = <string> (optional) } ``` | none |  |
| assert\_read | Conditionally cause an assert during read time | ``` assert_read = yes / <string> ``` | none |  |
| debug\_log | Log whether the parent trigger succeeded or failed |  | none |  |
| debug\_log\_details | Log whether the parent trigger succeeded or failed. Log which children succeeded or failed |  | none |  |

## Variable triggers
Variable triggers check a [variable](./Variable.md). They can always be used in any scope, but may require a certain scope to read the correct variable.

List of variable triggers

| Trigger | Description | Example | Scopes | Targets |
| add\_to\_temporary\_list | Saves a temporary target for use during the trigger execution | ``` This is used to build lists in triggers. If used within an any-trigger, placement within the trigger is quite important. The game will iterate through every instance of the any-trigger until it finds a single instance that fulfills the requirements, and then it will stop. In order to add every instance of a scope that fulfills certain conditions, use "count = all" while also placing this "effect" at the very end of the any-trigger so that every condition is evaluated for every iteration. ``` | none |  |
| any\_in\_global\_list | Iterate through all items in global list. | ``` any_in_global_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_list | Iterate through all items in list. | ``` any_in_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| any\_in\_local\_list | Iterate through all items in local list. | ``` any_in_local_list = {  list = name / variable = name  <count=num/all> / <percent=fixed_point>  <triggers> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| global\_variable\_list\_size | Checks the size of a global variable list | ``` global_variable_list_size = {  name = <variable name>  target >= <value> } ``` | none |  |
| has\_global\_variable | Checks whether the current scope has the specified global variable set | ``` has_global_variable = name ``` | none |  |
| has\_global\_variable\_list | Checks whether the current scope has the specified global variable list set | ``` has_global_variable_list = name ``` | none |  |
| has\_local\_variable | Checks whether the current scope has the specified local variable set | ``` has_local_variable = name ``` | none |  |
| has\_local\_variable\_list | Checks whether the current scope has the specified local variable list set | ``` has_local_variable_list = name ``` | none |  |
| has\_variable | Checks whether the current scope has the specified variable set | ``` has_variable = name ``` | none |  |
| has\_variable\_list | Checks whether the current scope has the specified variable list set | ``` has_variable_list = name ``` | none |  |
| is\_in\_list | Checks if a target in in a list |  | none |  |
| is\_target\_in\_global\_variable\_list | Checks if a target is in a global variable list | ``` is_target_in_global_variable_list = {  name = <variable name>  target = <event target> } ``` | none |  |
| is\_target\_in\_local\_variable\_list | Checks if a target is in a local variable list | ``` is_target_in_local_variable_list = {  name = <variable name>  target = <event target> } ``` | none |  |
| is\_target\_in\_variable\_list | Checks if a target is in a variable list | ``` is_target_in_variable_list = {  name = <variable name>  target = <event target> } ``` | none |  |
| list\_size | Checks the size of a list | ``` list_size = {  name = <list name>  value >= <value> } ``` | none | value |
| local\_variable\_list\_size | Checks the size of a local variable list | ``` local_variable_list_size = {  name = <variable name>  target >= <value> } ``` | none |  |
| variable\_list\_size | Checks the size of a variable list | ``` variable_list_size = {  name = <variable name>  target >= <value> } ``` | none |  |

## Triggers by scope
The following tables list triggers by their required scope. Less commonly used scopes and scopes with few specific effects are omitted and can be found in the [full list of triggers](#All_triggers). Iterators are omitted and can be found [above](#Iterator_triggers) or below. Some triggers are repeated as they can be used in multiple scopes.

### None/any scope
List of none triggers

| Trigger | Description | Example | Targets |
| active\_lens | Checks if the specified lens is open | ``` active_lens = lens ``` |  |
| active\_lens\_option | Checks if the specified lens option is activated | ``` active_lens_option = lens_option_key ``` |  |
| add\_to\_temporary\_list | Saves a temporary target for use during the trigger execution | ``` This is used to build lists in triggers. If used within an any-trigger, placement within the trigger is quite important. The game will iterate through every instance of the any-trigger until it finds a single instance that fulfills the requirements, and then it will stop. In order to add every instance of a scope that fulfills certain conditions, use "count = all" while also placing this "effect" at the very end of the any-trigger so that every condition is evaluated for every iteration. ``` |  |
| all\_false | true if all contained triggers are false (equivalent to NOR) |  |  |
| always | checks if the assigned yes/no value is true | ``` always = yes # always succeeds always = no # always fails always = scope:a_boolean_value # evaluated at runtime ``` | boolean |
| and | true if all contained triggers are true Returns false if at first false sub-trigger |  |  |
| any\_false | true if any contained trigger is false (equivalent to NAND) |  |  |
| assert\_if | Conditionally cause an assert during run time | ``` assert_if = {  limit = { <triggers> }  text = <string> (optional) } ``` |  |
| assert\_read | Conditionally cause an assert during read time | ``` assert_read = yes / <string> ``` |  |
| calc\_true\_if | Returns true if the specified number of sub-triggers return true | ``` calc_true_if = {  amount = 2  <trigger>  <trigger>  <trigger> } ``` |  |
| can\_create\_treaty | Checks if a treaty between countries can be created | ``` can_create_treaty = {  first_country = <country>   # (default: none) must _not_ be specified if the created treaty is an amendment  second_country = <country>   # (default: none) must _not_ be specified if the created treaty is an amendment  amends = <treaty>     # (default: none) if specified, the created treaty will be an amendment to the specified treaty   is_draft = yes | no     # (default: yes) must be yes if this treaty is an amendement to an existing treaty  entered_into_force_on = <date>  # (default: none) means "today" if not specified (for non-drafts). Must _not_ be specified for drafts. Cannot be in the future  binding_period = {    # (default: 0) must be a nonnegative number, fractional parts will be ignored (truncation)   days = <nonnegative number>   | weeks = <nonnegative number>   | months = <nonnegative number>   | years = <nonnegative number>  }   articles_to_create = {   # (default: empty) non-amendments must have at least one article to create   {    article = <key>    # (default: empty) the type of article (determined by script)    source_country = <country> # (default: none) directed articles _must_ specify this value, mutual articles _must not_ specify this value    target_country = <country> # (default: none) directed articles _must_ specify this value, mutual articles _must not_ specify this value     inputs = {    # (default: empty) list of inputs values as required by the article     {      quantity = <positive number>      | good = <good>      | state = <state>      | strategic_region = <strategic region>      | company = <company> # TODO: or company type?      | building = <building> # TODO: or building type?      | law = <law> # TODO: or law type?      | country = <country>     }      { ... }     # one input per required input of the corresponding article type    }   }    # some examples of valid articles   { article = alliance }   # mutual, no inputs   {    article = resource_transfer # directed    source_country = c:FRA  # because directed    target_country = c:GBR   # because directed     inputs = {     { quantity = 250 }  # because resource_transfer has required_inputs = { quantity good }     { good = g:coal }  # because resource_transfer has required_inputs = { quantity good }    }   }  } } ``` |  |
| can\_start\_tutorial\_lesson | Can the specified tutorial lesson be started? | ``` can_start_tutorial_lesson = reactive_advice_succession ``` |  |
| current\_tooltip\_depth | Returns the number of tooltips currently open on screen |  | value |
| custom\_description | Wraps triggers that get a custom description instead of the auto-generated one | ``` custom_description = {  text = <trigger_localization_key>  subject = <optional subject scope> #defaults to current scope  object = <optional object scope>  value = <optional script value>  ... triggers ... } ``` |  |
| custom\_tooltip | Replaces the tooltips for the enclosed triggers with a custom text | ``` custom_tooltip = {  text = <text>  subject = <scope> (optional)  <trigger> } ``` |  |
| day\_value | Day value |  | value |
| daynight\_value | DayNight value |  | value |
| debug\_log | Log whether the parent trigger succeeded or failed |  |  |
| debug\_log\_details | Log whether the parent trigger succeeded or failed. Log which children succeeded or failed |  |  |
| exists | Checks whether the specified scope target exists (check for not being the null object) | ``` exists = from.owner.var:cool_var.mother ``` |  |
| game\_date | Compare to current game date | ``` game_date = 1837.1.1 ``` | value |
| global\_population | Compares the global population | ``` global_population > 2000000000 ``` | value |
| global\_variable\_list\_size | Checks the size of a global variable list | ``` global_variable_list_size = {  name = <variable name>  target >= <value> } ``` |  |
| has\_account\_item | Does the player have the item in the account | ``` has_account_item = <key> ``` |  |
| has\_cosmetic\_dlc | Does the client have this cosmetic DLC |  |  |
| has\_dlc\_feature | Does the host have DLC that enables this particular feature |  |  |
| has\_game\_rule | Is the given game rule setting enabled? | ``` has_game_rule = faster_conversion ``` |  |
| has\_game\_started | True if game has started | ``` has_game_started = bool ``` | boolean |
| has\_gameplay\_dlc | Does the host have this gameplay DLC |  |  |
| has\_global\_variable | Checks whether the current scope has the specified global variable set | ``` has_global_variable = name ``` |  |
| has\_global\_variable\_list | Checks whether the current scope has the specified global variable list set | ``` has_global_variable_list = name ``` |  |
| has\_local\_variable | Checks whether the current scope has the specified local variable set | ``` has_local_variable = name ``` |  |
| has\_local\_variable\_list | Checks whether the current scope has the specified local variable list set | ``` has_local_variable_list = name ``` |  |
| has\_map\_interaction | Checks if the map interaction type is active | ``` has_map_interaction = key ``` |  |
| has\_map\_interaction\_diplomatic\_action | Checks if our current map interaction is a specific diplomatic action | ``` has_map_interaction_diplomatic_action = <key> ``` |  |
| has\_reached\_end\_date | True if the end date (NDefines::NGame::END\_DATE) has been reached | ``` has_reached_end_date = yes ``` | boolean |
| has\_unification\_candidate | Check if there is at least one unification candidate for country tag | ``` has_country_unification_candidate = GER ``` |  |
| has\_variable | Checks whether the current scope has the specified variable set | ``` has_variable = name ``` |  |
| has\_variable\_list | Checks whether the current scope has the specified variable list set | ``` has_variable_list = name ``` |  |
| hidden\_trigger | Enclosed triggers are not shown in tooltips | ``` hidden_trigger = { <more triggers> } ``` |  |
| is\_building\_type\_expanded | Checks if the CProductionMethodsPanelEntry for a particular CBuildingType is expanded | ``` is_building_type_expanded = <scope/key> ``` |  |
| is\_game\_paused | Checks if the game is paused | ``` is_game_paused = yes/no ``` | boolean |
| is\_gamestate\_tutorial\_active | Is the gamestate tutorial active? See save\_progress\_in\_gamestate in tutorial\_lesson\_chains documentation. |  | boolean |
| is\_in\_list | Checks if a target in in a list |  |  |
| is\_lens\_open | Checks if a certain lens is open, specified as a lens key. Specify an optional named tab to check if this tab is open. | ``` is_lens_open = {  lens = lens_key  tab_name = tab_key } ``` |  |
| is\_objective\_completed | Is the objective completed for the country in scope? | ``` is_objective_completed = yes ``` | boolean |
| is\_panel\_open | Checks if a certain infopanel is open, specified as an event target (target) or as a string (panel\_name). Specify an optional named tab (tab\_name) to check if this tab is open. | ``` is_panel_open = {  target = <scope> OR panel_name = panel_name  tab_name = tab_name } ``` |  |
| is\_popup\_open | Checks if the specified popup panel is open | ``` is_popup_open = popup ``` |  |
| is\_rightclick\_menu\_open | Checks if the specified rightclick menu is open | ``` is_rightclick_menu_open = <menu_key> ``` |  |
| is\_set | Checks whether the specified scope target has been set (includes being the null object) | ``` is_set = from.owner.var:cool_var.mother ``` |  |
| is\_target\_in\_global\_variable\_list | Checks if a target is in a global variable list | ``` is_target_in_global_variable_list = {  name = <variable name>  target = <event target> } ``` |  |
| is\_target\_in\_local\_variable\_list | Checks if a target is in a local variable list | ``` is_target_in_local_variable_list = {  name = <variable name>  target = <event target> } ``` |  |
| is\_target\_in\_variable\_list | Checks if a target is in a variable list | ``` is_target_in_variable_list = {  name = <variable name>  target = <event target> } ``` |  |
| is\_template\_used | Checks if character template has already been used | ``` is_template_used = template_key ``` |  |
| is\_theme\_selected | Does the player have the theme selected in settings | ``` is_theme_selected = <key> ``` |  |
| is\_tutorial\_active | Is the tutorial active? |  | boolean |
| is\_tutorial\_lesson\_active | Is this the current tutorial lesson? | ``` is_tutorial_lesson_active = reactive_advice_succession ``` |  |
| is\_tutorial\_lesson\_chain\_completed | Has the tutorial lesson chain with the specified key been finished? |  |  |
| is\_tutorial\_lesson\_completed | has the tutorial lesson with the specified name been finished? |  |  |
| is\_tutorial\_lesson\_step\_completed | Has the tutorial lesson step been finished? | ``` is_tutorial_lesson_step_completed = lesson_key:step_key ``` |  |
| list\_size | Checks the size of a list | ``` list_size = {  name = <list name>  value >= <value> } ``` | value |
| local\_variable\_list\_size | Checks the size of a local variable list | ``` local_variable_list_size = {  name = <variable name>  target >= <value> } ``` |  |
| month | Compare to current game date month (Jan: 0, Dec: 11) | ``` month > 10 ``` | value |
| nand | a negated AND trigger Returns false if all contained triggers return true; returns true at first false sub-trigger |  |  |
| night\_value | Night value |  | value |
| nor | a negated OR trigger Returns true if all contained triggers return false; returns false at first true trigger |  |  |
| not | negates content of trigger Returns true if all contained triggers return false |  |  |
| or | false if all contained triggers are false Returns true at first true sub-trigger |  |  |
| real\_month | Compare to current real date month (Jan: 1, Dec: 12) | ``` real_month > 10 ``` | value |
| save\_temporary\_scope\_as | Saves current scope as a temporary target for use during the trigger execution. Cannot overwrite already saved scopes | ``` save_temporary_scope_as = <string> ``` |  |
| save\_temporary\_scope\_value\_as | Saves a numerical or bool value as an arbitrarily-named temporary target to be referenced later in the same trigger. Cannot overwrite already saved scope values | ``` save_temporary_scope_value_as = {  name = <string>  value = <script_value> } ``` |  |
| should\_show\_nudity | can nudity be shown? | ``` should_show_nudity = yes/no ``` | boolean |
| switch | Switch on a trigger for the evaluation of another trigger with an optional fallback trigger. | ``` switch = {  trigger = simple_assign_trigger  case_1 = { <triggers> }  case_2 = { <triggers> }  case_n = { <triggers> }  fallback = { <triggers> } ``` |  |
| trigger\_else | Evaluates the display\_triggers if the triggers of preceding 'trigger\_if' or 'trigger\_else\_if' are not met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else = { <display_triggers> } ``` |  |
| trigger\_else\_if | Evaluates the display\_triggers if the triggers of the preceding `trigger\_if` or `trigger\_else\_if` are not met and its own trigger of the limit is met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else_if = {  limit = { <triggers> }  <display_triggers> } ``` |  |
| trigger\_if | Evaluates the display\_triggers if the triggers of the limit are met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } ``` |  |
| variable\_list\_size | Checks the size of a variable list | ``` variable_list_size = {  name = <variable name>  target >= <value> } ``` |  |
| weighted\_calc\_true\_if | Returns true if the sum of weights of fulfilled sub-triggers amount to the specified sum | ``` weighted_calc_true_if = {  amount = 10  5 = { <trigger> }  15 = { <trigger> }  7 = { <trigger> } } ``` |  |
| year | Compares the current year of the game | ``` year > 1850 ``` | value |

### Building scope
List of building triggers

| Trigger | Description | Example | Targets |
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

### Character scope
List of character triggers

| Trigger | Description | Example | Targets |
| age | Compares the character age | ``` age > 20 ``` | value |
| can\_agitate | Check if the scope character can agitate the target country | ``` can_agitate = <scope/c:TAG> ``` | country |
| character\_acceptance | Compares the acceptance of the scoped character in the target country against an acceptance value | ``` character_acceptance = {  target = c:FRA  value > 50 } ``` | value |
| character\_supports\_political\_movement | Checks whether the scoped character supports a political movement | ``` character_supports_political_movement = yes/no ``` | boolean |
| commander\_is\_available | Check if a commander is not busy | ``` commander_is_available = bool ``` | boolean |
| commander\_rank | Compares the commanders rank | ``` commander_rank > 2 ``` | value |
| could\_support\_political\_movement | Check if a character could potentially support a political movement | ``` could_support_political_movement = <scope> ``` |  |
| experience\_level | Compares the character experience level | ``` experience_level > 1 ``` | value |
| has\_commander\_order | Checks whether the scoped character is following the given order | ``` has_commander_order = order type key/order type scope ``` |  |
| has\_culture | Checks characters culture | ``` has_culture = culture scope or character scope ``` |  |
| has\_ideology | Check if scoped character or interest group has ideology |  |  |
| has\_military\_formation | Checks if character has a Military Formation | ``` has_military_formation = bool ``` | boolean |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |
| has\_religion | Checks characters religion | ``` has_religion = religion/character scope ``` |  |
| has\_role | Checks if character has specific role | ``` has_role = role ``` |  |
| has\_role\_of\_type | Checks if character has a role of the specified archetype | ``` has_role_of_type = archetype ``` |  |
| has\_template | Checks if character was made from the specified template | ``` has_template = template_key ``` |  |
| has\_trait | Checks if character has specific trait | ``` has_trait = trait ``` |  |
| is\_adult | Check if character is an adult | ``` is_adult = bool ``` | boolean |
| is\_advancing\_on\_front | Checks if a commander is advancing on a front | ``` is_advancing_on_front = <front scope> ``` | front |
| is\_attacker\_in\_battle | Checks if a Commander or Ship is attacker in a battle | ``` is_attacker_in_battle = bool ``` | boolean |
| is\_busy | Check if character is busy | ``` is_busy = bool ``` | boolean |
| is\_character\_alive | Checks if the scoped character is alive | ``` is_character_alive = bool ``` | boolean |
| is\_defender\_in\_battle | Checks if a Commander or ship is defender in a battle | ``` is_defender_in_battle = bool ``` | boolean |
| is\_female | Check if character is female | ``` is_female = bool ``` | boolean |
| is\_heir\_of\_own\_country | Checks whether the scoped character is the heir in the country they live in | ``` is_heir_of_own_country = yes / no ``` | boolean |
| is\_historical | Check if character is historical | ``` is_historical = yes/no ``` | boolean |
| is\_immortal | checks if the scoped character is immortal | ``` scope:abbath = { is_immortal = yes } ``` | boolean |
| is\_in\_battle | Checks if a Commander or ship is engaged in battle | ``` is_in_battle = bool ``` | boolean |
| is\_in\_exile\_pool | Checks whether the scoped character is in the exile pool | ``` is_in_exile_pool = yes/no ``` | boolean |
| is\_in\_void | Check if character is in the void | ``` is_in_void = bool ``` | boolean |
| is\_interest\_group\_leader | Checks if character is the leader of their interest group | ``` is_interest_group_leader = yes/no ``` | boolean |
| is\_interest\_group\_type | Checks if Interest Group is of a certain type Can also be used on characters directly | ``` is_interest_group_type = x ``` |  |
| is\_monarch | Checks if character is a monarch of a country with hereditary succession | ``` is_monarch = bool ``` | boolean |
| is\_noble | Check if character is a noble | ``` is_noble = bool ``` | boolean |
| is\_on\_front | Checks if a character or military formation has been assigned to a Front and has arrived there | ``` is_on_front = yes/no ``` | boolean |
| is\_ruler\_of\_any\_country | Checks if character is a ruler/head of state of any country | ``` is_ruler_of_any_country = bool ``` | boolean |
| is\_ruler\_of\_other\_country | Checks if character is a ruler/head of state of any country they don't live in | ``` is_ruler_of_other_country = bool ``` | boolean |
| is\_ruler\_of\_own\_country | Checks if character is a ruler/head of state of the country they live in | ``` is_ruler_of_own_country = bool ``` | boolean |
| law\_enactment\_stance | Compares the stance of the scoped character, movement or interest group has about enactment of the specified law compared to the current active law in the same group |  |  |
| law\_stance | Compares the base stance of the scoped character, movement or interest group has about the specified law, ignoring the current active law in the same group |  |  |
| lifetime\_piracy\_income | Compares the lifetime piracy income of a character | ``` lifetime_piracy_income >= 1000000 ``` | value |
| loyalty | Compares the character loyalty | ``` loyalty > 1 ``` | value |
| primary\_role | Checks if the character's primary role is the specified role | ``` primary_role = role ``` |  |
| prominence | Compares the character prominence | ``` prominence > 1 ``` | value |
| remaining\_career\_length | Checks if the character's remaining career length meets a duration threshold. Role can be a specific database role, a role type, or omitted to use the role furthest from career end. | ``` remaining_career_length = {  role = general  years = 5 } ``` | value |
| role\_priority | Compares the priority of the character role | ``` role_priority >= 10 ``` | value |
| trait\_value | Compares the character's total trait value | ``` trait_value < experience_level ``` | value |
| was\_exiled | Checks whether the scoped character was exiled | ``` was_exiled = yes/no ``` | boolean |
| years\_of\_service | Compares the commander's years of service | ``` years_of_service > 1 ``` | value |

### Company scope
List of company triggers

| Trigger | Description | Example | Targets |
| can\_potentially\_produce\_prestige\_goods | Checks if scope company can potentially produce target prestige good type | ``` can_potentially_produce_prestige_good = pg:prestige_good_generic_clothes ``` |  |
| company\_employed\_levels | Check the number of employed building levels of the scoped company | ``` company_employed_levels > 1.5 ``` | value |
| company\_global\_productivity\_comparison | Check the average global productivity of buildings matching this company's buildings, scaled by owned levels for each type | ``` company_global_productivity_comparison > 1.0 ``` | value |
| company\_has\_building\_type\_monopoly | Check if the scoped company has a monopoly of the specified building type | ``` company_has_building_type_monopoly = bt:building_food_industry ``` | building\_type |
| company\_has\_monopoly | Check if the scoped company has any monopoly | ```  company_has_monopoly = yes ``` | boolean |
| company\_is\_prosperous | Check if a company is considered to be prosperous |  | boolean |
| company\_owned\_levels | Check the number of owned building levels of the scoped company | ``` company_owned_levels > 1.5 ``` | value |
| company\_productivity | Check the productivity of the scoped company | ``` company_productivity > 1.0 ``` | value |
| company\_prosperity | Check the prosperity of a company | ``` company_prosperity > 0 ``` | value |
| is\_company\_type | Checks if scoped company is of the specified type | ``` is_company_type = <company_type scope> ``` | company\_type |
| is\_producing\_prestige\_goods | Checks if scope company is producing prstige goods | ``` is_producing_prestige_goods = yes ``` | boolean |

### Country scope
List of country triggers

| Trigger | Description | Example | Targets |
| additional\_war\_exhaustion | Compares the additional war exhaustion the scoped country has accumulated from scripted events in the target diplomatic play | ``` additional_war_exhaustion = {  target = scope:war.diplomatic_play  value > 1.0 } ``` | value |
| aggressive\_diplomatic\_plays\_permitted | True if country is independent or permitted to start their own Diplomatic Plays | ``` aggressive_diplomatic_plays_permitted = bool ``` | boolean |
| ai\_ship\_value | AI valuation of a ship in £, equal to the current template-version construction cost times NAI::SHIP\_TRANSFER\_BASE\_VALUE\_PER\_CONSTRUCTION\_POINT | ``` ai_ship_value >= 5000 ``` | value |
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
| country\_or\_subject\_owns\_entire\_state\_region | Checks whether the scoped country or any of its subjects owns the entire specified state region | ``` country_or_subject_owns_entire_state_region = key ``` |  |
| country\_rank | Compares a Country's Power Ranking | ``` country_rank < rank_value:major_power ``` | value |
| country\_ship\_type\_fraction | Checks that a country has a certain percentage of a specific ship type | ``` scope:example_formation = {  country_ship_type_fraction = {   target = unit_type:key   value >= 0.2  } } ``` | value |
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
| has\_any\_naval\_only\_hostilities | Check if the country has naval hostilities with any country it is not also at war with | ``` has_any_naval_only_hostilities = yes ``` | boolean |
| has\_any\_secessionists\_broken\_out | Check if the country has secessionists broken out |  | boolean |
| has\_any\_secessionists\_growing | Check if the country has any secessionists growing |  | boolean |
| has\_any\_strait\_control | Check if the scoped country owns a strait province with naval fortification | ``` has_any_strait_control = yes ``` | boolean |
| has\_any\_strait\_province | Check if the scoped country owns any strait province | ``` has_any_strait_province = yes ``` | boolean |
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
| has\_port\_country | Check if scoped country has at least one port | ``` has_port_country = yes/no ``` | boolean |
| has\_possible\_decisions | Check if a country has any possible Decisions | ``` has_possible_decisions = yes ``` | boolean |
| has\_potential\_to\_form\_country | Check if the target country could ever be able to form a nation | ``` has_potential_to_form_country = <tag> ``` |  |
| has\_power\_struggle | Checks if scope Power Bloc has a power struggle | ``` has_power_struggle = yes/no ``` | boolean |
| has\_region\_stance | Checks if the scoped country's AI has the specified stance for a strategic region | ``` region_stance = { 	region = sr:some_region   	stance = <conquer_region>   } ``` |  |
| has\_researchable\_technology | Check if the country has any researchable technology left. |  | boolean |
| has\_revolution | Check if the country has revolutionary uprising |  | boolean |
| has\_ruling\_interest\_group | Does the country's government include the named IG |  |  |
| has\_ruling\_interest\_group\_count | Does the country's government consist of the specified number of IGs |  | value |
| has\_secret\_goal | Checks if scoped country has a particular secret goal towards another country | ``` has_secret_goal = {  who = <country scope>  secret_goal = <secret_goal key> } ``` |  |
| has\_social\_hierarchy | Checks if the scoped country has adopted a specific social hierarchy | ``` has_social_hierarchy = <key> ``` |  |
| has\_state\_in\_state\_region | Check if country has a state in the state region | ``` has_state_in_state_region = key ``` |  |
| has\_strategic\_adjacency | Checks if country in scope has a strategic adjacency (direct/coastal/wargoal adjacency) to target state/country | ``` has_strategic_adjacency = <scope> ``` |  |
| has\_strategic\_land\_adjacency | Checks if country in scope has a strategic adjacency (direct land border or wargoal adjacency only) to target state/country | ``` has_strategic_adjacency = <scope> ``` |  |
| has\_strategic\_region\_interest\_tier | Checks the scoped country's interest tier rank in a specific strategic region | ``` has_strategic_region_interest_tier = {     strategic_region = sr:target_region       value >= 3   } ``` |  |
| has\_strategy | Checks if country in scope has a particular AI strategy | ``` has_strategy = <key> ``` |  |
| has\_subject\_relation\_with | Checks if country in scope is subject or overlord of event target | ``` has_subject_relation_with = country ``` | country |
| has\_sufficient\_construction\_capacity\_for\_investment | Check if country has enough construction capacity to be spending all of its incoming investment pool funds. |  | boolean |
| has\_technology\_progress | Does the country have the required progress for an technology | ``` has_technology_progress = {  technology = <technology key>  progress = <0-1 value> } ``` | value |
| has\_technology\_researched | True if a country has researched an technology | ``` has_technology_researched = <scope/key> ``` |  |
| has\_treaty\_port\_in\_market | Checks if the scoped country has a treaty port in target market | ``` c:POR = { has_treaty_port_in_market = c:CHI.market } ``` | market |
| has\_truce\_with | Check if a country has a truce with a different target country | ``` has_truce_with = c:GBR ``` | country |
| has\_war\_with | Checks if country in scope is at war with event target | ``` has_war_with = country ``` | country |
| has\_wasted\_construction | Check if country is wasting any of its produced construction. |  | boolean |
| highest\_overlapping\_interest\_tier | Compares the highest interest tier rank (scope country) among strategic regions where both countries have an interest. | ``` highest_overlapping_interest_tier = {  target = c:GBR  value >= 2 } ``` | value |
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
| military\_ship\_maintenance\_fulfillment | Compares the military ship maintenance fulfillment ratio of a country | ``` military_ship_maintenance_fulfillment = <value> ``` | value |
| military\_wage\_level | Compares the military wage level of scoped country. `very_low, low, medium, high, very_high`; returns same number as military\_wage\_level\_value trigger | ``` military_wage_level = <level_term> ``` | value |
| military\_wage\_level\_value | Compares the military wage level value of scoped country. `0, 1, 2, 3, 4` | ``` military_wage_level_value = <level_num> ``` | value |
| nationalization\_cost | Compares the total cost of nationalizing all buildings in scope country owned by the government or pops of target country | ``` nationalization_cost = {  target = scope:other_country  value > 100000 } ``` | value |
| naval\_power\_projection | Compare to a country's total navy power projection | ``` scope:example_country = { naval_power_projection < root.naval_power_projection } ``` | value |
| neighbors\_any\_power\_bloc | Checks if the scoped country neighbors any power bloc. Note: the scoped country is not considered to be neighboring the power bloc it belongs to (if any) | ``` neighbors_any_power_bloc = yes/no ``` | boolean |
| neighbors\_member\_of\_same\_power\_bloc | Checks if the scoped country neighbors any other country belonging to the same power bloc | ``` neighbors_member_of_same_power_bloc = yes/no ``` | boolean |
| neighbors\_power\_bloc | Checks if the scoped country neighbors the target power bloc. Note: the scoped country is not considered to be neighboring the power bloc it belongs to (if any) | ``` neighbors_power_bloc = c:PRU.power_bloc ``` | power\_bloc |
| num\_companies | How many companies the scoped country has | ``` num_companies > 0 ``` | value |
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
| political\_strength\_share | Checks the political strength share of a pop type, religion or culture in a country or state. Exactly one of pop\_type, religion or culture must be specified. | ``` political_strength_share = { 	pop_type/religion/culture = <key/scope>   	value <compare operator> <value>   } ``` | value |
| politically\_involved\_ratio | Compares the percentage of politically involved population in a country | ``` politically_involved_ratio > 0.25 ``` | value |
| pop\_type\_percent\_country | Checks whether the scoped country has <percent> of its population belonging to the specified pop type | ``` scope:example_country = {  pop_type_percent_country = {   pop_type = <pop_type>   percent <compare operator (<,>,= and so on)> <percent>  } } ``` | value |
| potential\_diplomatic\_play\_power\_ratio | Check the expected power ratio between scope country side and target country side in a potential diplomatic play | ``` Attempts to predict which sides involved participants will take (if any) so doesn't just check 'starting strengths' potential_diplomatic_play_power_ratio = {  type = dp_open_market  target = c:BEL  state = c:BEL.capital  value > 1.0 } state and type are optional, will default to dp_open_market on target capital ``` | value |
| potential\_income | Compare the potential income of the country (weekly income plus tax waste) | ``` potential_income > 1000 ``` | value |
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
| region\_score | Compares the aggregated AI strategy region score for the specified strategic region in country scope Returns 0 in case the country is player controled | ``` region_score = {  strategic_region = sr:region_key  value >= 300 }   "region_score(sr:region_key)" >= 300 ``` | value |
| relative\_authority | Compares the unused fraction of authority for the scoped country |  | value |
| relative\_bureaucracy | Compares the unused fraction of bureaucracy for the scoped country |  | value |
| relative\_influence | Compares the unused fraction of influence for the scoped country |  | value |
| religion\_percent\_country | Checks that a country's population has a certain percentage of a specific religion | ``` scope:example_country = {  religion_percent_country = {   target = rel:catholic   value <= 0.8  } } ``` | value |
| ruler\_can\_have\_command | Checks if the country's government type allows its ruler to have command | ``` ruler_can_have_command = yes/no ``` | boolean |
| scaled\_debt | Compare value to a country's debt relative to debt ceiling | ``` scaled_debt = value ``` | value |
| scaled\_gold\_reserves | Compare value to a country's gold reserves relative to reserves limit | ``` scaled_gold_reserves = value ``` | value |
| ship\_modification\_market\_demand\_ratio | Goods-weighted buy/sell ratio for the construction goods of the target ship modification, evaluated against the country-scope's market. | ``` "ship_modification_market_demand_ratio(scope:ship_modification_type) > 1.25" ``` | value |
| should\_set\_wargoal | Check if the country is lacking a primary wargoal in any diplomatic play it is part of |  | boolean |
| shrinking\_institution | Checks if the institution is shrinking | ``` expanding_institution = <scope/key> ``` |  |
| size\_weighted\_lost\_battles\_fraction | Determines the fraction of battles the target country has lost in the target war, weighted by manpower size of all battles in the war | ``` size_weighted_lost_battles_fraction = {  target = scope:war  value > 0.3 } add = "size_weighted_lost_battles_fraction(scope:war)" ``` | value |
| sol\_ranking | Compares a Country's Standard of Living Ranking (position) | ``` sol_ranking > 42 ``` | value |
| subject\_can\_increase\_autonomy | Check if a subject can increase its autonomy | ``` subject_can_increase_autonomy = bool ``` | boolean |
| supply\_network\_strength | Compares the country's supply network strength (can exceed 1) | ``` supply_network_strength > 1.1 ``` | value |
| supply\_ship\_maintenance\_fulfillment | Compares the supply ship maintenance fulfillment ratio of a country | ``` supply_ship_maintenance_fulfillment < 1 ``` | value |
| taking\_loans | Check if the country is currently running a weekly deficit and taking loans to compensate |  | boolean |
| tax\_level | Compares the overall tax level of scoped country. `very_low, low, medium, high, very_high`; returns same number as tax\_level\_value trigger | ``` tax_level = <level_term> ``` | value |
| tax\_level\_value | Compares the overall tax level integer value of scoped country. `0, 1, 2, 3, 4` | ``` income_tax_level_value = <level_num> ``` | value |
| tax\_waste | Compare the tax waste of the country | ``` tax_waste > 100 ``` | value |
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
| wealth\_share | Checks the wealth political strength share of a pop type, religion or culture in a country or state. Exactly one of pop\_type, religion or culture must be specified. | ``` wealth_share = { 	pop_type/religion/culture = <key/scope>   	value <compare operator> <value>   } ``` | value |
| would\_accept\_diplomatic\_action | Checks if a country would accept a diplomatic action proposed by another country | ``` would_accept_diplomatic_action = {  actor = <country scope>  type = <action type key>  first_state = <state scope, optional>  second_state = <state scope, optional>  modify_acceptance = <script value, optional> } if set, modify_acceptance will be added to their acceptance score, to allow for checking if they would accept with an obligation, etc ``` |  |

### Culture scope
List of culture triggers

| Trigger | Description | Example | Targets |
| culture\_can\_have\_mass\_migration\_to\_country | Checks if the scoped culture can have mass migration to target country | ``` can_have_mass_migration_to_country = c:country ``` | country |
| culture\_current\_fervor | Compares the current fervor for a given culture | ``` culture_current_fervor > 0.2 ``` | value |
| culture\_has\_community\_in\_state | Checks if the scoped culture has a cultural community in a state. | ``` culture_has_community_in_state = <state> ``` |  |
| culture\_has\_national\_awakening | Checks if the scoped culture has an active national awakening | ``` culture_has_national_awakening = yes / no ``` | boolean |
| culture\_national\_awakening\_occurred | Checks if the scoped culture has ever had a national awakening started | ``` culture_national_awakening_occurred = yes / no ``` | boolean |
| culture\_secession\_progress | Checks the culture's progress percentage towards secession in a country. 0 if no secession movement is active for the culture. | ``` culture_secession_progress = {  target = scope:example_country  value > 0.5 } ``` | value |
| culture\_target\_fervor | Compares the target fervor for a given culture | ``` culture_target_fervor > 0.2 ``` | value |
| has\_cultural\_obsession | Checks if a culture has a certain goods as obsession | ``` has_cultural_obsession = <goods key> ``` |  |
| has\_culture\_graphics | Checks if a culture has a certain culture\_graphics | ``` has_culture_graphics = <culture graphics key> ``` |  |
| has\_discrimination\_trait | Checks if scoped culture or religion has the given discrimination trait | ``` has_trait = trait ``` |  |
| has\_homeland | Checks if scoped culture has a homeland in target state or state region | ``` has_homeland = state/state region ``` |  |
| is\_primary\_culture\_of | Checks if culture is any of a country's primary cultures | ``` is_primary_culture_of = <country> ``` | country |
| shares\_heritage\_trait\_group\_with\_any\_primary\_culture | Checks if culture shares any trait group marked as 'heritage' with any of a country's primary cultures | ``` shares_heritage_trait_group_with_any_primary_culture = <country> ``` | country |
| shares\_heritage\_trait\_group\_with\_culture | Checks if culture shares any trait group marked as 'heritage' with another culture | ``` shares_heritage_trait_group_with_culture = <culture> ``` | culture |
| shares\_heritage\_trait\_group\_with\_state\_religion | Checks if the religion shares any heritage trait group with a country's state religion | ``` shares_heritage_trait_group_with_state_religion = <country> ``` | country |
| shares\_heritage\_trait\_with\_any\_primary\_culture | Checks if culture shares any trait marked as 'heritage' with any of a country's primary cultures | ``` shares_heritage_trait_with_any_primary_culture = <country> ``` | country |
| shares\_heritage\_trait\_with\_culture | Checks if culture shares any trait marked as 'heritage' with another culture | ``` shares_heritage_trait_with_culture = <culture> ``` | culture |
| shares\_language\_trait\_group\_with\_any\_primary\_culture | Checks if culture shares any trait group marked as 'language' with any of a country's primary cultures | ``` shares_language_trait_group_with_any_primary_culture = <country> ``` | country |
| shares\_language\_trait\_group\_with\_culture | Checks if culture shares any trait group marked as 'language' with another culture | ``` shares_language_trait_group_with_culture = <culture> ``` | culture |
| shares\_language\_trait\_with\_any\_primary\_culture | Checks if culture shares any trait marked as 'language' with any of a country's primary cultures | ``` shares_language_trait_with_any_primary_culture = <country> ``` | country |
| shares\_language\_trait\_with\_culture | Checks if culture shares any trait marked as 'language' with another culture | ``` shares_language_trait_with_culture = <culture> ``` | culture |
| shares\_tradition\_trait\_with\_any\_primary\_culture | Checks if culture shares any trait marked as 'tradition' with any of a country's primary cultures | ``` shares_language_trait_with_any_primary_culture = <country> ``` | country |
| shares\_tradition\_trait\_with\_culture | Checks if culture shares any trait marked as 'tradition' with another culture | ``` shares_language_trait_with_culture = <culture> ``` | culture |

### Diplomatic play scope
List of diplomatic play triggers

| Trigger | Description | Example | Targets |
| escalation | Checks whether escalation has passed a certain threshold | ``` escalation > -58 ``` | value |
| has\_play\_goal | Checks if diplomatic play has a certain war goal type | ``` has_play_goal = return_state ``` |  |
| initiator\_is | Checks who the initiator of a diplomatic play is | ``` initiator_is = country ``` | country |
| is\_diplomatic\_play\_type | Checks diplomatic play is of a certain type | ``` is_diplomatic_play_type = play type ``` |  |
| is\_war | True if the diplomatic play has escalated into war | ``` is_war = bool ``` | boolean |
| target\_is | Checks who the target of a diplomatic play is | ``` target_is = country ``` | country |

### Interest group scope
List of interest group triggers

| Trigger | Description | Example | Targets |
| has\_ideology | Check if scoped character or interest group has ideology |  |  |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |
| has\_party | True if IG scope has a party | ``` has_party = bool ``` | boolean |
| ig\_approval | Compare to scoped interest group approval | ``` ig_approval > 2 ig_approval < happy ``` | value |
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

### Institution scope
List of institution triggers

| Trigger | Description | Example | Targets |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |

### Journal entry scope
List of journal entry triggers

| Trigger | Description | Example | Targets |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |
| is\_goal\_complete | Check if the journal entry's goal has been met | ``` is_goal_complete = yes/no ``` | boolean |
| is\_progressing | Check if the journal entry is progressing | ``` is_progressing = yes/no ``` | boolean |
| journal\_entry\_age | Return the age of the journal entry (since activation) in days | ``` journal_entry_age > 720 ``` | value |
| scripted\_bar\_progress | Determines the progress of a scripted progress bar | ``` scripted_bar_progress = {  name = progress_bar_tag  value > 0.4 } ``` | value |

### Market scope
List of market triggers

| Trigger | Description | Example | Targets |
| check\_area | Compares areas of object to another object |  |  |
| has\_active\_building | True if a state has an active building type | ``` has_active_building = building ``` |  |
| has\_building | True if a state/market/state region/country has a building type | ``` has_building = building ``` |  |
| has\_port\_market | Check if scoped market has at least one port | ``` has_port_market = yes/no ``` | boolean |
| market\_consumption\_share | Compare fraction of scope market consumption coming from target country | ``` market_consumption_share = {  target = <country scope>  goods = key (optional)  value > 0.5 } ``` | value |
| market\_exports | Compare total units of exports from scope to target market (if set) or world market in general (if no market specified) | ``` market_exports = {   target = market scope (optional)   goods = key (optional)   value > 100 } ``` | value |
| market\_exports\_reliance | Compare fraction of buy orders in scope market that are due to exports to target market (if set) or world market in general (if no market specified) | ``` market_exports_reliance = {   target = market scope (optional)   goods = key (optional)   value > 0.5 } ``` | value |
| market\_has\_goods\_shortage | Check if market has a shortage on any of its building inputs | ``` market_has_goods_shortage = yes/no ``` | boolean |
| market\_imports | Compare total units of imports from target to scope market | ``` market_imports = {   target = market scope (optional)   goods = key (optional)   value > 100 } ``` | value |
| market\_imports\_reliance | Compare fraction of buy orders in scope market that are due to imports from target market (if set) or world market in general (if no market specified) | ``` market_imports_reliance = {   target = market scope (optional)   goods = key (optional)   value > 0.5 } ``` | value |
| market\_number\_goods\_shortages | Check how many shortages a market has on any of its building inputs | ``` market_number_goods_shortages >= 2 ``` | value |
| market\_number\_goods\_shortages\_with | Check how many shortages a market has on any of its building inputs, plus the ones from the target country | ``` "market_number_goods_shortages_with(scope:target)" >= 2 ``` | value |
| market\_number\_goods\_shortages\_without | Check how many shortages a market has on any of its building inputs, subtracting the ones from the target country | ``` "market_number_goods_shortages_without(scope:target)" >= 2 ``` | value |
| market\_production\_share | Compare fraction of scope market production coming from target country | ``` market_production_share = {  target = <country scope>  goods = key (optional)  value > 0.5 } ``` | value |
| market\_trade | Compare total units of goods traded between scope market and target market (if set) or world market in general (if no market specified) | ``` market_trade = {   target = market scope (optional)   goods = key (optional)   value > 100 } ``` | value |
| market\_trade\_reliance | Compare fraction of buy and sell orders in scope market that are due to trade with target market (if set) or world market in general (if no market specified) | ``` market_trade_reliance = {   target = market scope (optional)   goods = key (optional)   value > 0.5 } ``` | value |

### Military formation scope
List of military formation triggers

| Trigger | Description | Example | Targets |
| formation\_army\_unit\_type\_fraction | Checks that a formation has a certain percentage of a specific army unit type | ``` scope:example_formation = {  country_military_unit_type_fraction = {   target = unit_type:key   value >= 0.2  } } ``` | value |
| formation\_ship\_type\_fraction | Checks that a formation has a certain fraction of a specific ship type | ``` formation_ship_type_fraction = {   target = ship_type:key   value >= 0.2 } ``` | value |
| has\_high\_attrition | Checks if a Military Formation's attrition risk is higher than the base value for their type | ``` has_high_attrition = bool ``` | boolean |
| has\_mobilization\_option | Checks that a formation has a specific mobilization option | ``` has_mobilization_option = mobilization_option:key ``` | mobilization\_option |
| has\_ship\_outside\_max\_port\_distance | Checks if a Fleet has any ship that is beyond its maximum distance to port |  | boolean |
| is\_army | Checks if a military formation is Army | ``` is_army = bool ``` | boolean |
| is\_doing\_piracy\_in\_region | Checks if a Fleet is doing piracy in the specified strategic region | ``` is_doing_piracy_in_region = sr:region_baltic_sea ``` | strategic\_region |
| is\_fleet | Checks if a military formation is Fleet | ``` is_fleet = bool ``` | boolean |
| is\_fully\_mobilized | Checks if the Military Formation is fully mobilized | ``` is_fully_mobilized = bool ``` | boolean |
| is\_invalid\_naval\_mission\_grace\_period\_active | Checks if a Fleet is in the grace period from having an invalid naval mission | ``` is_invalid_naval_mission_grace_period_active = yes/no ``` | boolean |
| is\_mobilized | Checks if the military formation is mobilized | ``` is_mobilized = bool ``` | boolean |
| is\_on\_front | Checks if a character or military formation has been assigned to a Front and has arrived there | ``` is_on_front = yes/no ``` | boolean |
| organization | Compares the Organization of the Military Formation in scope | ``` organization <= define:NMilitary|MILITARY_FORMATION_ORGANIZATION_MIN ``` | value |
| organization\_target | Compares the target Organization of the Military Formation in scope | ``` organization_target < define:NMilitary|MILITARY_FORMATION_ORGANIZATION_MAX ``` | value |

### Party scope
List of party triggers

| Trigger | Description | Example | Targets |
| election\_momentum | Compare election momentum of the scoped party against a value | ``` election_momentum = 0.75 ``` | value |
| has\_party\_member | Checks if the target interest group is a member of scope party | ``` has_party_member = <ig> ``` | interest\_group |
| is\_party | Checks if the target party is same as scoped party. Will only work on exact same party object, meaning you can't compare across countries. | ``` is_party = <party> ``` | party |
| is\_party\_type | Checks if the scoped party's type is the specified one | ``` is_party_type = party_type_database_key ``` |  |
| is\_same\_party\_type | Checks if Party is of the same party type as target | ``` is_same_party_type_as = scope:neighboring_party ``` | party |

### Political lobby scope
List of political lobby triggers

| Trigger | Description | Example | Targets |
| appeasement | Compares the appeasement of a political lobby. |  | value |
| is\_political\_lobby\_type | Checks political lobby is of a certain lobby type | ``` is_political_lobby_type = political lobby type ``` |  |
| lobby\_clout | Compare to total clout of scoped lobby's interest groups | ``` lobby_clout >= 0.2 ``` | value |
| lobby\_formation\_reason | Check scope diplomatic catalyst or political lobby scope for lobby formation reason | ``` lobby_formation_reason = diplomacy ``` |  |

### Political movement scope
List of political movement triggers

| Trigger | Description | Example | Targets |
| has\_character\_ideology | Check if scoped political movement has character ideology |  |  |
| has\_core\_ideology | Check if scoped political movement has core ideology |  |  |
| has\_ideology | Check if scoped character or interest group has ideology |  |  |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` |  |
| is\_being\_bolstered | Check if scoped movement is being bolstered | ``` is_being_bolstered = <yes>/<no> ``` | boolean |
| is\_being\_suppressed | Check if scoped movement is being suppressed | ``` is_being_suppressed = <yes>/<no> ``` | boolean |
| is\_insurrectionary | Check if country, movement or IG is insurrectionary |  | boolean |
| is\_political\_movement\_type | Check if a political movement is a particular type | ``` is_political_movement_type = movement_to_enact ``` |  |
| is\_revolutionary | Check if the country, movement or interest group is revolutionary |  | boolean |
| is\_secessionist | Check if the country, movement or interest group is secessionist |  | boolean |
| law\_enactment\_stance | Compares the stance of the scoped character, movement or interest group has about enactment of the specified law compared to the current active law in the same group |  |  |
| law\_stance | Compares the base stance of the scoped character, movement or interest group has about the specified law, ignoring the current active law in the same group |  |  |
| movement\_can\_cause\_obstinance | Check if the political movement can generate obstinance in states | ``` movement_can_cause_obstinance = yes ``` | boolean |
| movement\_is\_causing\_obstinance | Check if the political movement is causing obstinance in any state | ``` movement_is_causing_obstinance = no ``` | boolean |
| movement\_pressure | Compares the pressure of the scoped movement on the target IG | ``` "movement_pressure(ig:ig_intelligentsia)" > 0.1 ``` | value |
| political\_movement\_identity\_support | Compare pop with correct culture/religion identity support of political movement | ``` political_movement_identity_support > 0.5 ``` | value |
| political\_movement\_military\_support | Compare military support of political movement | ``` political_movement_military_support > 0.5 ``` | value |
| political\_movement\_popular\_support | Compare popular support of political movement | ``` political_movement_popular_support > 0.5 ``` | value |
| political\_movement\_radicalism | Compare radicalism of political movement | ``` political_movement_radicalism > 50 ``` | value |
| political\_movement\_support | Compare support of political movement | ``` political_movement_support > 0.5 ``` | value |
| political\_movement\_wealth\_support | Compare wealth support of political movement | ``` political_movement_wealth_support > 0.5 ``` | value |

### Pop scope
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

### Power bloc scope
List of power bloc triggers

| Trigger | Description | Example | Targets |
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
| power\_bloc\_rank | Compare a power bloc's rank | ``` power_bloc_rank <= 2 ``` | value |
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

### Ship scope
List of ship triggers

| Trigger | Description | Example | Targets |
| armor | Compare a ship's armor | ``` armor >= 10 ``` | value |
| crew | Compare a ship's current crew | ``` crew >= 10 ``` | value |
| crew\_percent | Compare a ship's current crew percentage | ``` crew_percent >= 0.1 ``` | value |
| days\_obsolete | Compare the number of days since a ship was first marked obsolete by the AI. Returns 0 if the ship has never been marked. | ``` days_obsolete >= 1825 ``` | value |
| hit\_points | Compare a ship's current hit points | ``` hit_points >= 10 ``` | value |
| hit\_points\_percent | Compare a ship's current hit point percentage | ``` hit_points_percent >= 0.1 ``` | value |
| is\_attacker\_in\_battle | Checks if a Commander or Ship is attacker in a battle | ``` is_attacker_in_battle = bool ``` | boolean |
| is\_damaged | Checks if a ship is damaged | ``` is_damaged = bool ``` | boolean |
| is\_defender\_in\_battle | Checks if a Commander or ship is defender in a battle | ``` is_defender_in_battle = bool ``` | boolean |
| is\_flagship | Checks if the scoped ship is assigned as the flagship | ``` is_flagship = bool ``` | boolean |
| is\_in\_battle | Checks if a Commander or ship is engaged in battle | ``` is_in_battle = bool ``` | boolean |
| is\_in\_port | Checks if a ship is in port | ``` is_in_port = bool ``` | boolean |
| is\_ship\_type | Checks if scoped ship is of the specified type | ``` is_ship_type = ship_type:ship_type_frigate ``` | ship\_type |
| power\_projection\_value | Compare a ship's power projection | ``` power_projection_value >= 10 ``` | value |
| speed | Compare a ship's speed | ``` speed >= 10 ``` | value |

### State scope
List of state triggers

| Trigger | Description | Example | Targets |
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
| has\_port\_state | Check if scoped state has at least one port | ``` has_port = yes/no ``` | boolean |
| has\_potential\_resource | Checks if the specificed building group is allowed in the scoped state. Used to check if a state can potentially produce a resource | ``` has_potential_resource = bg_rubber_plantations ``` | building\_group |
| has\_state\_trait | Checks if scoped state has a certain trait | ``` has_state_trait = key ``` |  |
| ig\_state\_pol\_strength\_share | True if IG in scope has scripted political strength in state | ``` ig_state_pol_strength_share = {  target = scope:target_ig  value = 0.3 } ``` | value |
| incorporation\_progress | Check incorporation progress in state | ``` incorporation_progress > 0.25 ``` | value |
| infrastructure | Compares the infrastructure value of a given state | ``` infrastructure > 10 ``` | value |
| infrastructure\_delta | Compares the infrastructure balance of a given state | ``` infrastructure_delta > 0 ``` | value |
| infrastructure\_usage | Compares the infrastructure usage value of a given state | ``` infrastructure_usage > 10 ``` | value |
| is\_being\_bombarded | Checks if a state is currently being port bombarded by a hostile fleet |  | boolean |
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
| loyalists | Compares the loyalty in a given state, i.e. the fraction of Loyalists | ``` loyalists > 0.2 ``` | value |
| market\_access | Checks the market access of the scoped state | ``` market_access > 0.8 ``` | value |
| most\_prominent\_revolting\_interest\_group | Checks if the most prominent revolting interest group in the scoped state has the given interest group type. Evaluates false if the scoped state is not in revolt. | ``` most_prominent_revolting_interest_group = ig_landowners ``` |  |
| num\_cultural\_communities | Check cultural communities in state | ``` num_cultural_communities > 5 ``` | value |
| obstinance | Compares state obstinance | ``` obstinance > 0.5 ``` | value |
| political\_strength\_share | Checks the political strength share of a pop type, religion or culture in a country or state. Exactly one of pop\_type, religion or culture must be specified. | ``` political_strength_share = { 	pop_type/religion/culture = <key/scope>   	value <compare operator> <value>   } ``` | value |
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
| wealth\_share | Checks the wealth political strength share of a pop type, religion or culture in a country or state. Exactly one of pop\_type, religion or culture must be specified. | ``` wealth_share = { 	pop_type/religion/culture = <key/scope>   	value <compare operator> <value>   } ``` | value |
| world\_market\_access | Checks the world market access of the scoped state | ``` world_market_access > 0.8 ``` | value |

### State goods scope
List of state goods triggers

| Trigger | Description | Example | Targets |
| export\_advantage | Compare to state goods export advantage | ``` export_advantage >= 100 ``` | value |
| export\_tariff\_level | Checks if state goods has a particular export tariff level set | ``` export_tariff_level = max_tariffs ``` |  |
| has\_potential\_supply | Check if the market goods or state goods has a potential supply, either though local production or theoretical import |  | boolean |
| import\_advantage | Compare to state goods import advantage | ``` import_advantage >= 100 ``` | value |
| import\_tariff\_level | Checks if state goods has a particular import tariff level set | ``` import_tariff_level = max_tariffs ``` |  |
| relative\_export\_advantage | Compare to state goods relative export advantage | ``` relative_export_advantage > 0.1 ``` | value |
| relative\_import\_advantage | Compare to state goodsrelative import advantage | ``` relative_import_advantage > 0.1 ``` | value |
| state\_goods\_cheaper | Checks if state goods is at least the specified percentage cheaper than base price | ``` state_goods_cheaper > <value> ``` | value |
| state\_goods\_consumption | Checks if state goods has the specified number of total consumption | ``` state_goods_consumption < <value> ``` | value |
| state\_goods\_delta | Checks if state has the specified goods delta (production - consumption) | ``` state_goods_delta < <value> ``` | value |
| state\_goods\_has\_local\_goods\_shortage | Check if state goods has a shortage in a state, but NOT in the whole market | ``` state_goods_has_local_goods_shortage = yes/no ``` | boolean |
| state\_goods\_pricier | Checks if state goods is at least the specified percentage more expensive than base price | ``` state_goods_pricier > <value> ``` | value |
| state\_goods\_production | Checks if state goods has the specified number of total production | ``` state_goods_production < <value> ``` | value |

### State region scope
List of state region triggers

| Trigger | Description | Example | Targets |
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

### Treaty scope
List of treaty triggers

| Trigger | Description | Example | Targets |
| binds | Checks if the scoped treaty or treaty\_options binds the given country | ``` scope:some_treaty = {  if = {   limit = {    binds = c:FRA    binds = c:BEL   }  } } ``` | country |
| is\_enforced | Checks if the scoped treaty is enforced on either party | ``` scope:some_treaty = {  if = {   limit = { is_enforced = yes }  } } ``` | boolean |
| is\_equal\_exchange | Checks if the scoped treaty has the same articles on both sides | ``` scope:some_treaty = {  if = {   limit = { is_equal_exchange = yes }  } } ``` | boolean |
| is\_fulfilled\_by | Check if the scoped treaty is fulfilled by the given country | ``` scope:treaty = {  is_fulfilled_by = c:FRA } ``` | country |
| is\_historical\_treaty | Checks if the scoped treaty was signed before the game start date | ``` is_historical_treaty = yes/no ``` | boolean |
| is\_renegotiation | Checks if the scoped treaty is amending an existing treaty | ``` scope:some_treaty = {  if = {   limit = { is_renegotiation = yes }  } } ``` | boolean |
| was\_coerced\_with\_naval\_threat | Check if the scoped treaty was accepted through threatening naval hostilities | ``` was_coerced_with_naval_threat = yes/no ``` | boolean |

### War scope
List of war triggers

| Trigger | Description | Example | Targets |
| has\_war\_exhaustion | Checks the war exhaustion of the target country in the scoped war | ``` has_war_exhaustion = {  target = c:GBR  value > 50 } ``` | value |
| has\_war\_goal | Checks if war has a certain war goal type | ``` has_war_goal = return_state ``` |  |
| has\_war\_support | Checks the war support of the target country in the scoped war | ``` has_war_support = {  target = c:GBR  value > 50 } ``` | value |
| is\_holder\_of\_wargoal\_in\_war | Checks if the specified country is the holder of any wargoal in the scoped war | ``` is_holder_of_wargoal_in_war = <country> ``` | country |
| is\_war\_participant | Check if the target country is participant in a war |  | country |
| is\_warleader | Check if country is warleader in war |  | country |
| num\_casualties | Checks the number of total casualties in the scoped war | ``` num_casualties >= 5000 ``` | value |
| num\_country\_casualties | Checks the number of casualties for the target country in the scoped war | ``` num_country_casualties = {  target = country  value < 5000 } ``` | value |
| num\_country\_dead | Checks the number of dead for the target country in the scoped war | ``` num_country_dead = {  target = country  value < 5000 } ``` | value |
| num\_country\_wounded | Checks the number of wounded for the target country in the scoped war | ``` num_country_wounded = {  target = country  value < 5000 } ``` | value |
| num\_dead | Checks the number of total dead in the scoped war | ``` num_dead >= 5000 ``` | value |
| num\_wounded | Checks the number of total wounded in the scoped war | ``` num_wounded >= 5000 ``` | value |
| war\_exhaustion\_from\_acceptance\_of\_dead | Determines the war exhaustion a country gets from their degree of cultural acceptance of manpower killed in the war, regardless of what side they were on | ``` war_exhaustion_from_acceptance_of_dead = {  target = root  value >= 0.4 } ``` | value |
| war\_has\_active\_peace\_deal | True if the war has a proposed peace deal | ``` war_has_active_peace_deal = bool ``` | boolean |

## All triggers
Use this table to search for all triggers.

List of triggers

| Trigger | Description | Example | Scopes | Targets |
| active\_lens | Checks if the specified lens is open | ``` active_lens = lens ``` | none |  |
| active\_lens\_option | Checks if the specified lens option is activated | ``` active_lens_option = lens_option_key ``` | none |  |
| add\_to\_temporary\_list | Saves a temporary target for use during the trigger execution | ``` This is used to build lists in triggers. If used within an any-trigger, placement within the trigger is quite important. The game will iterate through every instance of the any-trigger until it finds a single instance that fulfills the requirements, and then it will stop. In order to add every instance of a scope that fulfills certain conditions, use "count = all" while also placing this "effect" at the very end of the any-trigger so that every condition is evaluated for every iteration. ``` | none |  |
| additional\_war\_exhaustion | Compares the additional war exhaustion the scoped country has accumulated from scripted events in the target diplomatic play | ``` additional_war_exhaustion = {  target = scope:war.diplomatic_play  value > 1.0 } ``` | country | value |
| age | Compares the character age | ``` age > 20 ``` | character | value |
| aggressive\_diplomatic\_plays\_permitted | True if country is independent or permitted to start their own Diplomatic Plays | ``` aggressive_diplomatic_plays_permitted = bool ``` | country | boolean |
| ai\_ship\_value | AI valuation of a ship in £, equal to the current template-version construction cost times NAI::SHIP\_TRANSFER\_BASE\_VALUE\_PER\_CONSTRUCTION\_POINT | ``` ai_ship_value >= 5000 ``` | country | value |
| all\_false | true if all contained triggers are false (equivalent to NOR) |  | none |  |
| always | checks if the assigned yes/no value is true | ``` always = yes # always succeeds always = no # always fails always = scope:a_boolean_value # evaluated at runtime ``` | none | boolean |
| amendment\_can\_be\_repealed | Check if the amendment can be repealed | ``` amendment_can_be_repealed = yes/no ``` | amendment | boolean |
| amendment\_count | Compares the number of amendments in scope law | ``` amendment_count >= 2 ``` | law | value |
| amendment\_stance | Compares the stance of the scoped character, movement or interest group has on the specified amendment type, assuming the amendment type has a parent law | ``` amendment_stance = {  amendment = <scope>  value = <stance> } ``` | character, interest\_group, political\_movement |  |
| and | true if all contained triggers are true Returns false if at first false sub-trigger |  | none |  |
| any\_active\_law | Iterate through all active laws in a country | ``` any_active_law = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | law |
| any\_active\_party | Iterate through all active political parties in a country | ``` any_active_party = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | party |
| any\_character | Iterate through all characters globally | ``` any_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | character |
| any\_character\_in\_exile\_pool | Iterate through characters in the exile pool | ``` any_character_in_exile_pool = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | character |
| any\_character\_in\_void | Iterate through characters in the void | ``` any_character_in_void = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | character |
| any\_character\_role | Iterate through all roles of the scoped character | ``` any_character_role = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character | character\_role |
| any\_civil\_war | Iterate through all civil wars related to the scoped country | ``` any_civil_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | civil\_war |
| any\_cobelligerent\_in\_diplo\_play | Iterate through all co-belligerents of scope country in all diplomatic plays (includes wars) | ``` any_cobelligerent_in_diplo_play = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_cobelligerent\_in\_war | Iterate through all co-belligerents of scope country in all wars | ``` any_cobelligerent_in_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_combat\_unit | Iterate through all combat units of input scope | ``` any_combat_unit = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | battle, building, front, hq, military\_formation | new\_combat\_unit |
| any\_company | Iterate through all companies in a country | ``` any_company = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | company |
| any\_country | Iterate through all countries globally | ``` any_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_country\_in\_<georegion\_short\_name> | Iterate through all countries in the specified geographic region | ``` any_country_in_<georegion_short_name> = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_country\_strategic\_region | Iterate through all strategic regions containing states owned by the scoped country | ``` any_country_strategic_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | strategic\_region |
| any\_decentralized\_country | Iterate through all countries that are decentralized | ``` any_decentralized_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | country |
| any\_diplomatic\_catalyst | Iterate through all diplomatic catalysts in the recent memory of a country | ``` any_diplomatic_catalyst = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | diplomatic\_catalyst |
| any\_diplomatic\_play | Iterate through all diplomatic plays globally | ``` any_diplomatic_play = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | diplomatic\_play |
| any\_diplomatically\_relevant\_country | Iterate through all diplomatically relevant countries of a country scope | ``` any_diplomatically_relevant_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_direct\_subject | Any country directly below current in hierarchy | ``` any_direct_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_enemy\_in\_diplo\_play | Iterate through all enemies of scope country in all diplomatic plays (includes wars) | ``` any_enemy_in_diplo_play = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_enemy\_in\_war | Iterate through all enemies of scope country in all wars | ``` any_enemy_in_war = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_false | true if any contained trigger is false (equivalent to NAND) |  | none |  |
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
| any\_owned\_country | Iterate through all countries owned by the scoped company | ``` any_owned_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | company | country |
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
| any\_scope\_army | Iterate through all armies currently present at input scope | ``` any_scope_army = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, hq | military\_formation |
| any\_scope\_article | Iterate through articles of the scoped treaty | ``` any_scope_article = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty | treaty\_article |
| any\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` any_scope_article_option = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty, treaty\_options | treaty\_article\_options |
| any\_scope\_building | Iterate through all buildings in a: state, country | ``` any_scope_building = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state | building |
| any\_scope\_character | Iterate through all characters in a: country, interest group, or front | ``` any_scope_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_country | Iterate through all countries with a presence in the supported scope (currently: market, strategic region) | ``` any_scope_country = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | market, state\_region, strategic\_region | country |
| any\_scope\_culture | Iterate through all cultures in the scope | ``` any_scope_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state | culture |
| any\_scope\_diplomatic\_pact | Any diplomatic pact of the country in a scope | ``` any_scope_diplomatic_pact = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | diplomatic\_pact |
| any\_scope\_fleet | Iterate through all fleets currently present at input scope | ``` any_scope_fleet = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, hq | military\_formation |
| any\_scope\_front | Iterate through all Fronts related to the scoped War | ``` any_scope_front = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | front |
| any\_scope\_general | Iterate through all generals in a: country, interest group, front, or military formation | ``` any_scope_general = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_held\_interest\_marker | Iterate through all interest markers held by a country | ``` any_scope_held_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | interest\_marker |
| any\_scope\_homeland\_state | Iterate through all states that are a homeland for the scoped culture, or a homeland of any primary culture of the scoped country | ``` any_scope_homeland_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | character, country | state |
| any\_scope\_initiator\_ally | Iterate through all allies to an initiator in a: diplomatic play | ``` any_scope_initiator_ally = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_play | country |
| any\_scope\_interest\_marker | Iterate through all interest markers in a: country, strategic region | ``` any_scope_interest_marker = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state\_region, strategic\_region | interest\_marker |
| any\_scope\_je\_involved | Iterate through all involved in a journal entry | ``` any_scope_je_involved = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | journal\_entry | country |
| any\_scope\_play\_involved | Iterate through all involved in a: diplomatic play | ``` any_scope_play_involved = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | diplomatic\_play | country |
| any\_scope\_politician | Iterate through all politicians in a: country or interest group | ``` any_scope_politician = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, interest\_group, military\_formation | character |
| any\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` any_scope_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, culture, interest\_group, state | pop |
| any\_scope\_regional\_hqs | Iterate through regional HQs of the scoped company | ``` any_scope_regional_hqs = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | company | building |
| any\_scope\_ship | Iterate through all ships in a country or military formation | ``` any_scope_ship = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, military\_formation | ship |
| any\_scope\_state | Iterate through all states including provinces from a: country, state\_region, theater, front, or strait | ``` any_scope_state = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, front, state\_region, strait, strategic\_region, theater | state |
| any\_scope\_strait | Iterate through all straits with a land endpoint in the scoped state or country | ``` any_scope_strait = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country, state | strait |
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
| any\_strategic\_region | Iterate through all strategic regions globally | ``` any_strategic_region = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | strategic\_region |
| any\_strategic\_region\_in\_<georegion\_short\_name> | Iterate through all strategic regions in the specified geographic region | ``` any_strategic_region_in_<georegion_short_name> = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | strategic\_region |
| any\_subject\_of\_subject | Any country below direct subjects in hierarchy | ``` any_subject_of_subject = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_subject\_or\_below | Any country below current in hierarchy | ``` any_subject_or_below = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | country |
| any\_supporting\_character | Iterate through all characters that support the scoped political movement | ``` any_supporting_character = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | political\_movement | character |
| any\_treaty | Iterate through treaties (both in force and drafts) | ``` any_treaty = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | none | treaty |
| any\_valid\_mass\_migration\_culture | Lists for cultures in the scoped country that are valid for mass migration | ``` any_valid_mass_migration_culture = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | country | culture |
| any\_war\_participant | Iterate through all participants in a war | ``` any_war_participant = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | war | country |
| appeasement | Compares the appeasement of a political lobby. |  | political\_lobby | value |
| approaching\_bureaucracy\_shortage | Check if Institutions in the country will incur a Bureaucracy shortage eventually |  | country | boolean |
| arable\_land | Check arable land in state | ``` arable_land > 10 ``` | state | value |
| arable\_land\_country | Compare arable land in \*all\* states | ``` arable_land_country > 10 ``` | country | value |
| armor | Compare a ship's armor | ``` armor >= 10 ``` | ship | value |
| army\_mobilization\_option\_fraction | Checks that a countries army has a certain percentage of units with a specific monbilization option | ``` scope:country = {  army_mobilization_option_fraction = {  target = mobilization_option:key  value >= 0.2  } } ``` | country | value |
| army\_power\_projection | Compare to a country's total army power projection | ```  scope:example_country = { army_power_projection < root.army_power_projection } ``` | country | value |
| assert\_if | Conditionally cause an assert during run time | ``` assert_if = {  limit = { <triggers> }  text = <string> (optional) } ``` | none |  |
| assert\_read | Conditionally cause an assert during read time | ``` assert_read = yes / <string> ``` | none |  |
| authority | Compares the available authority of the scoped country |  | country | value |
| authority\_usage | Compares the consumed authority of the scoped country |  | country | value |
| available\_jobs | Checks the state's number of available jobs in non-subsistence buildings | ``` available_jobs > 10000 ``` | state | value |
| average\_country\_infrastructure | Check average infrastructure in all states owned by scope country | ``` average_country_infrastructure = 3 ``` | country | value |
| average\_incorporated\_country\_infrastructure | Check average infrastructure in incorporated states owned by the scope country | ``` average_incorporated_country_infrastructure = 3 ``` | country | value |
| average\_sol\_for\_culture | Compares the average standard of living for the target culture in the country | ``` average_sol_for_culture = {  target = cu:polish  value > 10 } ``` | country | value |
| average\_sol\_for\_primary\_cultures | Compare average standard of living for primary cultures |  | country | value |
| average\_sol\_for\_religion | Compares the average standard of living for the target religion in the country | ``` average_sol_for_religion = {  target = rel:catholic  value > 10 } ``` | country | value |
| average\_sol\_for\_slaves | Compare average standard of living for enslaved pops |  | country | value |
| binds | Checks if the scoped treaty or treaty\_options binds the given country | ``` scope:some_treaty = {  if = {   limit = {    binds = c:FRA    binds = c:BEL   }  } } ``` | treaty, treaty\_options | country |
| blockade\_level | Compare to state's blockade level | ``` blockade_level > 0.1 ``` | state | value |
| building\_has\_goods\_shortage | Check if building has a shortage of any of its inputs | ``` building_has_goods_shortage = yes/no ``` | building | boolean |
| bureaucracy | Compares the available bureaucracy of the scoped country |  | country | value |
| bureaucracy\_usage | Compares the consumed bureaucracy of the scoped country |  | country | value |
| calc\_true\_if | Returns true if the specified number of sub-triggers return true | ``` calc_true_if = {  amount = 2  <trigger>  <trigger>  <trigger> } ``` | none |  |
| can\_activate\_production\_method | Checks if the building of a particular type in scoped state is able to active the specified production method | ``` can_activate_production_method = {  building_type = <key>  production_method = <key> } ``` | state |  |
| can\_afford\_diplomatic\_action | Checks if the country in scope can afford the Influence for the specified diplomatic action (pact or ongoing) | ``` can_afford_diplomatic_action = {  target = <country scope>  type = <diplomatic action key> } ``` | country |  |
| can\_agitate | Check if the scope character can agitate the target country | ``` can_agitate = <scope/c:TAG> ``` | character | country |
| can\_be\_enacted | Checks if a law could be enacted by its country, considering its current situation | ``` can_be_enacted = yes ``` | law | boolean |
| can\_break\_diplomatic\_pact | Checks if there is a diplomatic pact of the specified type with target country that can be broken by scope country | ``` can_break_diplomatic_pact = {   target = <country scope>   type = <action type key>   first_state = <state scope, optional>   second_state = <state scope, optional> } ``` | country |  |
| can\_construct\_building | Checks if 1 level of <building\_type> can be constructed in a scoped state | ``` can_construct_building = <building_type> ``` | state |  |
| can\_create\_diplomatic\_pact | Checks if a diplomatic pact is valid to create with another country | ``` can_create_diplomatic_pact = {   target = <country scope>   type = <action type key>   first_state = <state scope, optional>   second_state = <state scope, optional> } ``` | country |  |
| can\_create\_treaty | Checks if a treaty between countries can be created | ``` can_create_treaty = {  first_country = <country>   # (default: none) must _not_ be specified if the created treaty is an amendment  second_country = <country>   # (default: none) must _not_ be specified if the created treaty is an amendment  amends = <treaty>     # (default: none) if specified, the created treaty will be an amendment to the specified treaty   is_draft = yes | no     # (default: yes) must be yes if this treaty is an amendement to an existing treaty  entered_into_force_on = <date>  # (default: none) means "today" if not specified (for non-drafts). Must _not_ be specified for drafts. Cannot be in the future  binding_period = {    # (default: 0) must be a nonnegative number, fractional parts will be ignored (truncation)   days = <nonnegative number>   | weeks = <nonnegative number>   | months = <nonnegative number>   | years = <nonnegative number>  }   articles_to_create = {   # (default: empty) non-amendments must have at least one article to create   {    article = <key>    # (default: empty) the type of article (determined by script)    source_country = <country> # (default: none) directed articles _must_ specify this value, mutual articles _must not_ specify this value    target_country = <country> # (default: none) directed articles _must_ specify this value, mutual articles _must not_ specify this value     inputs = {    # (default: empty) list of inputs values as required by the article     {      quantity = <positive number>      | good = <good>      | state = <state>      | strategic_region = <strategic region>      | company = <company> # TODO: or company type?      | building = <building> # TODO: or building type?      | law = <law> # TODO: or law type?      | country = <country>     }      { ... }     # one input per required input of the corresponding article type    }   }    # some examples of valid articles   { article = alliance }   # mutual, no inputs   {    article = resource_transfer # directed    source_country = c:FRA  # because directed    target_country = c:GBR   # because directed     inputs = {     { quantity = 250 }  # because resource_transfer has required_inputs = { quantity good }     { good = g:coal }  # because resource_transfer has required_inputs = { quantity good }    }   }  } } ``` | none |  |
| can\_decrease\_autonomy | Check if a subject country is able to become a less autonomous subject type | ``` can_increase_autonomy = yes ``` | country | boolean |
| can\_establish\_company | Check if the country can establish a new company |  | country | boolean |
| can\_form\_nation | Check if the target country is able to potentially form a nation | ``` can_form_nation = <tag> ``` | country |  |
| can\_have\_as\_subject | Checks if a country can have another country as a particular type of subject | ``` can_have_as_subject = {  who = <country scope>  type = <subject type key> } ``` | country |  |
| can\_have\_subjects | Check if the country is able to have subjects of its own |  | country | boolean |
| can\_increase\_autonomy | Check if a subject country is able to become a more autonomous subject type | ``` can_increase_autonomy = yes ``` | country | boolean |
| can\_invite\_any\_country | Checks whether is possible to invite any country to the scoped Power Bloc. | ``` can_invite_any_country = yes/no ``` | power\_bloc | boolean |
| can\_leave\_power\_bloc | Checks if the country in scope can leave its current Power Bloc (returns false if country is not in a Power Bloc) | ``` can_leave_power_bloc = yes ``` | country | boolean |
| can\_lobbies\_target | Checks if target country is a valid target for lobbies in the scoped country | ``` can_lobbies_target = <target country scope> ``` | country | country |
| can\_own\_autonomy\_be\_decreased | Check if scoped country can have it's autonomy decreased | ``` can_own_autonomy_be_decreased = yes/no ``` | country | boolean |
| can\_potentially\_produce\_prestige\_goods | Checks if scope company can potentially produce target prestige good type | ``` can_potentially_produce_prestige_good = pg:prestige_good_generic_clothes ``` | company |  |
| can\_queue\_building\_levels | Checks if the building's owner could queue the provided number of additional levels without hitting a level or resource potential cap | ``` can_queue_building_levels = number ``` | building |  |
| can\_research | True if a country can research an technology | ``` can_research = technology ``` | country |  |
| can\_send\_diplomatic\_action | Checks if a diplomatic action is valid to send by scope country to target country | ``` can_send_diplomatic_action = {   target = <country scope>   type = <action type key>   first_state = <state scope, optional>   second_state = <state scope, optional> } ``` | country |  |
| can\_start\_tutorial\_lesson | Can the specified tutorial lesson be started? | ``` can_start_tutorial_lesson = reactive_advice_succession ``` | none |  |
| can\_take\_on\_scaled\_debt | Checks if scoped country can take on a certain amount of scaled debt from another country | ``` can_take_on_scaled_debt = {  who = <country scope>  value = <0-1 value> } ``` | country |  |
| can\_transfer\_subject | Check if the target country can be transferred as a subject to the scoped country | ``` scope:country = {  can_transfer_subject = c:FRA } ``` | country | country |
| can\_trigger\_event | Check if country can trigger the specified event | ``` can_trigger_event = key ``` | country |  |
| cash\_reserves\_available | Evaluates a production building's available cash reserves | ``` cash_reserves_available > 25000 ``` | building | value |
| cash\_reserves\_ratio | Evaluates a production building's available cash reserve ratio compared to its maximum Returns 1 if the building has no maximum cash reserves | ``` cash_reserves_ratio > 0.2 ``` | building | value |
| character\_acceptance | Compares the acceptance of the scoped character in the target country against an acceptance value | ``` character_acceptance = {  target = c:FRA  value > 50 } ``` | character | value |
| character\_supports\_political\_movement | Checks whether the scoped character supports a political movement | ``` character_supports_political_movement = yes/no ``` | character | boolean |
| check\_area | Compares areas of object to another object |  | country, market, province, state, state\_region, strategic\_region, theater |  |
| civil\_war\_progress | Compare progress of civil war | ``` civil_war_progress > 0.50 ``` | civil\_war | value |
| commander\_is\_available | Check if a commander is not busy | ``` commander_is_available = bool ``` | character | boolean |
| commander\_rank | Compares the commanders rank | ``` commander_rank > 2 ``` | character | value |
| company\_employed\_levels | Check the number of employed building levels of the scoped company | ``` company_employed_levels > 1.5 ``` | company | value |
| company\_global\_productivity\_comparison | Check the average global productivity of buildings matching this company's buildings, scaled by owned levels for each type | ``` company_global_productivity_comparison > 1.0 ``` | company | value |
| company\_has\_building\_type\_monopoly | Check if the scoped company has a monopoly of the specified building type | ``` company_has_building_type_monopoly = bt:building_food_industry ``` | company | building\_type |
| company\_has\_monopoly | Check if the scoped company has any monopoly | ```  company_has_monopoly = yes ``` | company | boolean |
| company\_is\_prosperous | Check if a company is considered to be prosperous |  | company | boolean |
| company\_owned\_levels | Check the number of owned building levels of the scoped company | ``` company_owned_levels > 1.5 ``` | company | value |
| company\_productivity | Check the productivity of the scoped company | ``` company_productivity > 1.0 ``` | company | value |
| company\_prosperity | Check the prosperity of a company | ``` company_prosperity > 0 ``` | company | value |
| construction\_queue\_duration | Compares the maximum of all the very roughly approximated weeks remaining to finish the constructions in any queue | ``` construction_queue_duration < 52 ``` | country | value |
| construction\_queue\_government\_duration | Compares the very roughly approximated weeks remaining to finish the constructions in the government queue | ``` construction_queue_government_duration < 52 ``` | country | value |
| construction\_queue\_num\_queued\_government\_levels | Compares the number of government constructed building levels in the construction queue |  | country | value |
| construction\_queue\_num\_queued\_levels | Compares the number of building levels in the construction queue |  | country | value |
| construction\_queue\_num\_queued\_private\_levels | Compares the number of privately constructed building levels in the construction queue |  | country | value |
| construction\_queue\_private\_duration | Compares the very roughly approximated weeks remaining to finish the constructions in the private queue | ``` construction_queue_private_duration < 52 ``` | country | value |
| contains\_capital\_of | Checks if scoped state region contains the capital of target tag | ``` contains_capital_of = country scope/tag ``` | state\_region |  |
| controls\_treaty\_port\_province | Checks if the scoped state controls the treaty port province in the state region | ``` controls_treaty_port_province = yes/no ``` | state | boolean |
| could\_support\_political\_movement | Check if a character could potentially support a political movement | ``` could_support_political_movement = <scope> ``` | character |  |
| country\_army\_unit\_type\_fraction | Checks that a country has a certain percentage of a specific army unit type | ``` scope:example_formation = {  country_military_unit_type_fraction = {   target = unit_type:key   value >= 0.2  } } ``` | country | value |
| country\_average\_cultural\_acceptance | Compares the average acceptance of a culture that is present in a country against a value | ``` country_average_cultural_acceptance = {  target = cu:french  value >= 50 } ``` | country | value |
| country\_average\_culture\_and\_religion\_pop\_acceptance | Average acceptance of country pops of a specific culture and religion. | ``` country_average_culture_and_religion_pop_acceptance = {  culture = cu:polish  religion = rel:catholic  value >=60 } ``` | country | value |
| country\_average\_culture\_pop\_acceptance | Average acceptance of country pops of a specific culture. | ``` country_average_culture_pop_acceptance = {  culture = cu:polish value  >=60 } ``` | country | value |
| country\_average\_religion\_pop\_acceptance | Average acceptance of country pops of a specific religion. | ``` country_average_religion_pop_acceptance = {  religion = rel:catholic  value >=60 } ``` | country | value |
| country\_average\_religious\_acceptance | Compares the average acceptance of a religion that is present in a country against a value | ``` country_average_religious_acceptance = {  target = rel:catholic  value >= 50 } ``` | country | value |
| country\_can\_have\_mass\_migration\_to | Checks if the scoped country can have mass migration to target country | ``` can_have_mass_migration_to = c:country ``` | country | country |
| country\_definition\_has\_culture | Checks if a culture is one of the cultures of the country definition | ``` country_definition_has_culture = <culture> ``` | country\_definition | culture |
| country\_fervor\_primary\_culture | Compares with the hightest fervor of a country's primary cultures | ``` country_fervor_primary_culture > 0.2 ``` | country | value |
| country\_has\_building\_group\_levels | Checks the sum of building levels for a building group in a country | ```  country_has_building_group_levels = {  type = bg_heavy_industry  value >= 100 } ``` | country | value |
| country\_has\_building\_levels | Checks the sum of building levels for a country | ``` country_has_building_levels >= 10 ``` | country | value |
| country\_has\_building\_type\_levels | Checks the sum of building levels for a building type in a country | ```  country_has_building_type_levels = {  target = bt:building_barracks  value >= 100 } ``` | country | value |
| country\_has\_building\_type\_monopoly | Check if the scoped country has a monopoly of the specified building type | ``` country_has_building_type_monopoly = bt:building_food_industry ``` | country | building\_type |
| country\_has\_country\_monopoly | Check if the scoped country has any country monopolies |  | country | boolean |
| country\_has\_local\_shortage | Whether the scoped market goods are in shortage in the target country | ``` country_has_local_shortage = scope:example_country ``` | market\_goods | country |
| country\_has\_primary\_culture | Checks if a culture is one of the primary cultures in the country | ``` country_has_primary_culture = <culture> ``` | country | culture |
| country\_has\_state\_religion | Checks if a religion is the state religion in the country | ``` country_has_accepted_religion = <religion> ``` | country | religion |
| country\_innovation | Checks the amount of weekly innovation a country produces | ``` country_innovation <= 200 ``` | country | value |
| country\_or\_subject\_owns\_entire\_state\_region | Checks whether the scoped country or any of its subjects owns the entire specified state region | ``` country_or_subject_owns_entire_state_region = key ``` | country |  |
| country\_ownership\_fraction | Compares the fraction of this building's levels that are owned by a country | ```  country_ownership_fraction > 0.5 ``` | building | value |
| country\_rank | Compares a Country's Power Ranking | ``` country_rank < rank_value:major_power ``` | country | value |
| country\_ship\_type\_fraction | Checks that a country has a certain percentage of a specific ship type | ``` scope:example_formation = {  country_ship_type_fraction = {   target = unit_type:key   value >= 0.2  } } ``` | country | value |
| country\_tier | Compare tier of country tag | ``` country_tier = x ``` | country |  |
| country\_turmoil | Compares the country's population weighted turmoil | ``` country_turmoil > 0.2 ``` | country | value |
| crew | Compare a ship's current crew | ``` crew >= 10 ``` | ship | value |
| crew\_percent | Compare a ship's current crew percentage | ``` crew_percent >= 0.1 ``` | ship | value |
| cultural\_acceptance\_base | Compares the acceptance from shared cultural traits of a culture in the scoped country against an acceptence value | ``` cultural_acceptance_base = {  target = cu:french  value > 50 } ``` | country | value |
| cultural\_acceptance\_delta | Compare the current local delta (modification) to a culture's acceptance in the scoped state | ``` cultural_acceptance_delta = {  target = cu:romanian  value < -10 } ``` | state | value |
| culture\_can\_have\_mass\_migration\_to\_country | Checks if the scoped culture can have mass migration to target country | ``` can_have_mass_migration_to_country = c:country ``` | culture | country |
| culture\_current\_fervor | Compares the current fervor for a given culture | ``` culture_current_fervor > 0.2 ``` | culture | value |
| culture\_has\_community\_in\_state | Checks if the scoped culture has a cultural community in a state. | ``` culture_has_community_in_state = <state> ``` | culture |  |
| culture\_has\_national\_awakening | Checks if the scoped culture has an active national awakening | ``` culture_has_national_awakening = yes / no ``` | culture | boolean |
| culture\_national\_awakening\_occurred | Checks if the scoped culture has ever had a national awakening started | ``` culture_national_awakening_occurred = yes / no ``` | culture | boolean |
| culture\_percent\_country | Checks that a country's population has a certain percentage of a specific culture | ``` scope:example_country = {  culture_percent_country = {   target = cu:dixie   value >= 0.2  } } ``` | country | value |
| culture\_percent\_state | Checks that a state's population has a certain percentage of a specific culture | ``` scope:example_state = {  culture_percent_state = {   target = cu:dixie   value >= 0.2  } } ``` | state | value |
| culture\_secession\_progress | Checks the culture's progress percentage towards secession in a country. 0 if no secession movement is active for the culture. | ``` culture_secession_progress = {  target = scope:example_country  value > 0.5 } ``` | culture | value |
| culture\_target\_fervor | Compares the target fervor for a given culture | ``` culture_target_fervor > 0.2 ``` | culture | value |
| current\_cohesion\_number | Compare the current Cohesion as a numeric value | ``` current_cohesion_number > 50 ``` | power\_bloc | value |
| current\_cohesion\_percentage | Compare the current Cohesion as a percentage of the maximum of a Power Bloc in scope | ``` current_cohesion_percentage > 0.5 ``` | power\_bloc | value |
| current\_law\_enactment\_score | Check what the scoped country's AI enactment score is for the currently enacting law |  | country | value |
| current\_manpower | Compares the current manpower of a battle side | ``` manpower > 10000 ``` | battle\_side | value |
| current\_tooltip\_depth | Returns the number of tooltips currently open on screen |  | none | value |
| custom\_description | Wraps triggers that get a custom description instead of the auto-generated one | ``` custom_description = {  text = <trigger_localization_key>  subject = <optional subject scope> #defaults to current scope  object = <optional object scope>  value = <optional script value>  ... triggers ... } ``` | none |  |
| custom\_tooltip | Replaces the tooltips for the enclosed triggers with a custom text | ``` custom_tooltip = {  text = <text>  subject = <scope> (optional)  <trigger> } ``` | none |  |
| day\_value | Day value |  | none | value |
| daynight\_value | DayNight value |  | none | value |
| days\_obsolete | Compare the number of days since a ship was first marked obsolete by the AI. Returns 0 if the ship has never been marked. | ``` days_obsolete >= 1825 ``` | ship | value |
| debug\_log | Log whether the parent trigger succeeded or failed |  | none |  |
| debug\_log\_details | Log whether the parent trigger succeeded or failed. Log which children succeeded or failed |  | none |  |
| dependents | Compares the dependents size of the scoped pop | ``` dependents >= 2000 ``` | pop | value |
| devastation | Compares the devastation of a given state | ``` devastation > 5 ``` | state | value |
| discriminates\_religion | Checks if the scoped country discriminates the given religion (key) | ``` discriminates_religion = <religion key/scope> ``` | country | religion |
| earnings | Compare a building's current annual earnings per employee | ``` earnings >= 10 ``` | building | value |
| economic\_dependence | Compares the degree of dependence the country in scope has to the target country. **Note: This is an expensive trigger** | ``` economic_dependence = {  target = scope:other_country  value > 2.2 } ``` | country | value |
| election\_momentum | Compare election momentum of the scoped party against a value | ``` election_momentum = 0.75 ``` | party | value |
| electoral\_confidence | Compares the electoral confidence of scope country | ``` electoral_confidence > 0.1 ``` | country | value |
| empty\_agitator\_slots | Checks number of empty agitator slots in a country | ``` empty_agitator_slots >= 1 ``` | country | value |
| enacting\_any\_law | Checks if the country is enacting any law. | ``` enacting_any_law = bool ``` | country | boolean |
| enactment\_chance | Compares the current enactment chance in scope country, including values from enactment modifiers |  | country | value |
| enactment\_chance\_for\_law | Compares the enactment chance in scope country for given law, including values from enactment modifiers | ``` enactment_chance_for_law = {  target = scope:my_lawtype  value > 0.2 } ``` | country | value |
| enactment\_chance\_for\_law\_without\_enactment\_modifier | Compares the enactment chance in scope country for given law, excluding values from enactment modifiers | ``` enactment_chance_for_law_without_enactment_modifier = {  target = scope:my_lawtype  value > 0.2 } ``` | country | value |
| enactment\_chance\_without\_enactment\_modifier | Compares the current enactment chance in scope country, excluding values from enactment modifiers |  | country | value |
| enactment\_phase | Compares the current law enactment phase in scope country. |  | country | value |
| enactment\_setback\_count | Compares the current enactment setback count in scope country. |  | country | value |
| enemy\_contested\_wargoals | Determines the fraction of wargoals that enemies in the war are currently contesting | ``` enemy_contested_wargoals = {  target = scope:war  value > 0.4 } ``` | country | value |
| enemy\_occupation | Determines the (weighted) enemy occupation score of a country | ``` enemy_occupation > 0.2 ``` | country | value |
| escalation | Checks whether escalation has passed a certain threshold | ``` escalation > -58 ``` | diplomatic\_play | value |
| exists | Checks whether the specified scope target exists (check for not being the null object) | ``` exists = from.owner.var:cool_var.mother ``` | none |  |
| expanding\_institution | Checks if the institution is expanding | ``` expanding_institution = <scope/key> ``` | country |  |
| experience\_level | Compares the character experience level | ``` experience_level > 1 ``` | character | value |
| export\_advantage | Compare to state goods export advantage | ``` export_advantage >= 100 ``` | state\_goods | value |
| export\_tariff\_level | Checks if state goods has a particular export tariff level set | ``` export_tariff_level = max_tariffs ``` | state\_goods |  |
| fixed\_expenses | Does the country have this amount of weekly fixed expenses | ``` fixed_expenses > 1000 ``` | country | value |
| fixed\_income | Does the country have this amount of weekly fixed income | ``` fixed_income > 1000 ``` | country | value |
| food\_security | Checks if a pop has a certain amount of food security | ``` food_security = value ``` | pop | value |
| formation\_army\_unit\_type\_fraction | Checks that a formation has a certain percentage of a specific army unit type | ``` scope:example_formation = {  country_military_unit_type_fraction = {   target = unit_type:key   value >= 0.2  } } ``` | military\_formation | value |
| formation\_ship\_type\_fraction | Checks that a formation has a certain fraction of a specific ship type | ``` formation_ship_type_fraction = {   target = ship_type:key   value >= 0.2 } ``` | military\_formation | value |
| fraction\_of\_levels\_owned\_by\_country | Compares the fraction of total levels of a building a country or investors in that country owns | ``` fraction_of_levels_owned_by_country = {  target = c:GBR  value > 0.5 } ``` | building | value |
| free\_arable\_land | Check free arable land in state | ``` free_arable_land > 0 ``` | state | value |
| free\_principle\_slots | Compare a power bloc's free principle slot count | ``` power_bloc = {   free_principle_slots >= 2 } ``` | power\_bloc | value |
| game\_date | Compare to current game date | ``` game_date = 1837.1.1 ``` | none | value |
| gdp\_ownership\_ratio | Compares the ratio of GDP the specified country owns in the scoped country | ``` gdp_ownership_ratio = {  target = scope:owner_country  value > 0.1 } ``` | country | value |
| gdp\_per\_capita\_ranking | Compares a Country's GDP per Capita Ranking (position) | ``` gdp_per_capita_ranking > 42 ``` | country | value |
| gdp\_ranking | Compares a Country's GDP Ranking (position) | ``` gdp_ranking > 42 ``` | country | value |
| global\_country\_ranking | Compares a Country's Power Ranking (position) | ``` global_country_ranking > 42 ``` | country | value |
| global\_population | Compares the global population | ``` global_population > 2000000000 ``` | none | value |
| global\_variable\_list\_size | Checks the size of a global variable list | ``` global_variable_list_size = {  name = <variable name>  target >= <value> } ``` | none |  |
| gold\_reserves | Does the country have the required gold reserves | ``` gold_reserves > 500 ``` | country | value |
| gold\_reserves\_limit | Compares the country's gold reserves limit | ``` gold_reserves > gold_reserves_limit ``` | country | value |
| goods\_production\_rank | Compare to a country's production leaderboard rank of a good | ``` "goods_production_rank(g:luxury_clothes)" < 10 ``` | country | value |
| government\_legitimacy | Compare Legitimacy |  | country | value |
| government\_transfer\_of\_power | Checks country's government's transfer of power | ``` government_transfer_of_power = key ``` | country | value |
| government\_wage\_level | Compares the government wage level of scoped country. `very_low, low, medium, high, very_high`; returns same number as government\_wage\_level\_value trigger | ``` government_wage_level = <level_term> ``` | country | value |
| government\_wage\_level\_value | Compares the government wage level value of scoped country. `0, 1, 2, 3, 4` | ``` government_wage_level_value = <level_num> ``` | country | value |
| harvest\_condition\_intensity | With a harvest condition scope, compare the intensity of the harvest condition in a given country (since the state region can span multiple countries) | ``` harvest_condition_intensity = {  target = scope:my_country_scope  value > 0.5 } ``` | harvest\_condition | value |
| has\_account\_item | Does the player have the item in the account | ``` has_account_item = <key> ``` | none |  |
| has\_active\_building | True if a state has an active building type | ``` has_active_building = building ``` | market, state |  |
| has\_active\_peace\_deal | True if the country is in a war where there is a proposed peace deal | ``` has_active_peace_deal = bool ``` | country | boolean |
| has\_active\_production\_method | Checks if a scoped building has the specified production method active | ``` has_active_production_method = key ``` | building |  |
| has\_amendment | Check if scoped law has an amendment of the given type | ``` has_amendment = <amendment type scope> ``` | law | amendment\_type |
| has\_any\_law\_commitment | Checks if a country has a commitment to enact any law | ``` has_any_law_commitment = yes ``` | country | boolean |
| has\_any\_naval\_only\_hostilities | Check if the country has naval hostilities with any country it is not also at war with | ``` has_any_naval_only_hostilities = yes ``` | country | boolean |
| has\_any\_secessionists\_broken\_out | Check if the country has secessionists broken out |  | country | boolean |
| has\_any\_secessionists\_growing | Check if the country has any secessionists growing |  | country | boolean |
| has\_any\_strait\_control | Check if the scoped country owns a strait province with naval fortification | ``` has_any_strait_control = yes ``` | country | boolean |
| has\_any\_strait\_province | Check if the scoped country owns any strait province | ``` has_any_strait_province = yes ``` | country | boolean |
| has\_any\_subventions\_on | Check if the scoped country has any level of subventions on a goods | ``` scope:country = {  has_any_subventions_on = <goods scope> } ``` | country | goods |
| has\_any\_tariffs\_on | Check if the scoped country has any level of tariffs on a goods | ``` scope:country = {  has_any_tariffs_on = <goods scope> } ``` | country | goods |
| has\_assimilating\_pops | Check if a state has any pops currently in the process of assimilating. |  | state | boolean |
| has\_attitude | Checks if scoped country has a particular attitude towards another country | ``` has_attitude = {  who = <country scope>  attitude = <attitude key> } ``` | country |  |
| has\_battle\_condition | True if the battle side currently has a condition with the given key | ``` has_battle_condition = battle_condition_key ``` | battle\_side |  |
| has\_building | True if a state/market/state region/country has a building type | ``` has_building = building ``` | country, market, state, state\_region |  |
| has\_character\_ideology | Check if scoped political movement has character ideology |  | political\_movement |  |
| has\_civil\_war\_from\_movement\_type | Checks if a country is having a civil war started by a particular movement type | ``` has_civil_war_from_movement_type = <political_movement_type scope> ``` | country | political\_movement\_type |
| has\_claim | Checks if country in scope has a claim on state/state region/country | ``` has_claim = <scope> ``` | country |  |
| has\_claim\_by | Checks if a state is claimed by a country | ``` any_state = {  owner = root  has_claim_by = c:MEX } ``` | state | country |
| has\_commander\_order | Checks whether the scoped character is following the given order | ``` has_commander_order = order type key/order type scope ``` | character |  |
| has\_company | Checks if a company of the specified type exists in scope country | ``` has_company = <company_type scope> ``` | country | company\_type |
| has\_completed\_subgoal | Checks if the scoped country has completed a certain subgoal | ``` has_completed_subgoal = subgoal_key ``` | country |  |
| has\_consumption\_tax | Checks if the country is taxing the target good. | ``` c:FRA = { has_consumption_tax = <goods scope> } ``` | country | goods |
| has\_converting\_pops | Check if a state has any pops currently in the process of converting. |  | state | boolean |
| has\_convoys\_being\_sunk | Check if the country has convoys being sunk through convoy raiding |  | country | boolean |
| has\_core\_ideology | Check if scoped political movement has core ideology |  | political\_movement |  |
| has\_cosmetic\_dlc | Does the client have this cosmetic DLC |  | none |  |
| has\_cosmetic\_dlc\_feature | Does the client have DLC that enables this particular cosmetic feature |  | none |  |
| has\_cultural\_community | Checks if a culture has a cultural community in the scoped state. | ``` has_cultural_community = <culture> ``` | state |  |
| has\_cultural\_obsession | Checks if a culture has a certain goods as obsession | ``` has_cultural_obsession = <goods key> ``` | culture |  |
| has\_culture | Checks characters culture | ``` has_culture = culture scope or character scope ``` | character |  |
| has\_culture\_graphics | Checks if a culture has a certain culture\_graphics | ``` has_culture_graphics = <culture graphics key> ``` | culture |  |
| has\_decree | Checks if scope state has a particular type of decree | ``` has_decree = <key> ``` | state |  |
| has\_deployed\_units | Check if a building supports any units which have been deployed outside of home HQ | ``` has_deployed_units = yes/no ``` | building | boolean |
| has\_diplomatic\_pact | Checks if two countries have an active diplomatic pact of type | ``` has_diplomatic_pact = {  who = <country scope>  type = <diplomatic action key>  is_initiator = yes/no } is_initiator is optional parameter that checks to see if scope country is the original initiator/target of the pact ``` | country |  |
| has\_diplomatic\_play | Check if strategic region has a diplomatic play or not |  | strategic\_region | boolean |
| has\_diplomatic\_relevance | Checks if target country is diplomatically relevant for scope country | ``` has_diplomatic_relevance = <scope> ``` | country | country |
| has\_diplomats\_expelled | Checks if country in scope has recently expelled diplomats of event target | ``` has_diplomats_expelled = country ``` | country | country |
| has\_discrimination\_trait | Checks if scoped culture or religion has the given discrimination trait | ``` has_trait = trait ``` | culture, religion |  |
| has\_discrimination\_trait\_group | Checks if scoped culture or religion has the given discrimination trait group | ``` has_discrimination_trait_group = trait_group ``` | culture, religion |  |
| has\_dlc\_feature | Does the host have DLC that enables this particular feature |  | none |  |
| has\_employee\_slots\_filled | Checks whether the amount of employees of a certain poptype are above or below a given percentage of the total amount the building can currently hire. I.e. if a building is at 80% (given as 0.8) of its current hiring capacity for Shopkeepers, for example. | ``` has_employee_slots_filled = {  pop_type = <pop type>  percent = <0-1 value> } ``` | building |  |
| has\_failed\_hires | Checks if a building failed to hire someone last week | ``` has_failed_hires = yes/no ``` | building | boolean |
| has\_famine | Check if state or country has famine | ``` has_famine = yes/no ``` | country, state | boolean |
| has\_free\_government\_reform | Check if the country has a free (of radicals) government reform | ``` has_free_government_reform = <yes/no> ``` | country | boolean |
| has\_game\_rule | Is the given game rule setting enabled? | ``` has_game_rule = faster_conversion ``` | none |  |
| has\_game\_started | True if game has started | ``` has_game_started = bool ``` | none | boolean |
| has\_gameplay\_dlc | Does the host have this gameplay DLC |  | none |  |
| has\_global\_highest\_gdp | Checks if the scoped country has the highest GDP | ``` has_global_highest_gdp = yes/no ``` | country | boolean |
| has\_global\_highest\_innovation | Checks if the scoped country has the highest weekly innovation | ``` has_global_highest_innovation = yes/no ``` | country | boolean |
| has\_global\_variable | Checks whether the current scope has the specified global variable set | ``` has_global_variable = name ``` | none |  |
| has\_global\_variable\_list | Checks whether the current scope has the specified global variable list set | ``` has_global_variable_list = name ``` | none |  |
| has\_government\_clout | Does the country's government have the necessary total Clout |  | country | value |
| has\_government\_type | Is the country's government type as specified | ``` has_government_type = key ``` | country |  |
| has\_harvest\_condition | Check if the scoped state region has a harvest condition of type | ``` has_harvest_condition = drought ``` | state\_region |  |
| has\_healthy\_economy | Check if the country has a healthy economy |  | country | boolean |
| has\_high\_attrition | Checks if a Military Formation's attrition risk is higher than the base value for their type | ``` has_high_attrition = bool ``` | military\_formation | boolean |
| has\_homeland | Checks if scoped culture has a homeland in target state or state region | ``` has_homeland = state/state region ``` | culture |  |
| has\_identity | Checks if the scoped power bloc has certain central identity | ``` has_identity = identity:key ``` | power\_bloc | power\_bloc\_identity |
| has\_ideology | Check if scoped character or interest group has ideology |  | character, interest\_group, political\_movement |  |
| has\_inactive\_journal\_entry | Check if the country has at least one inactive journal entry of the specified type | ``` has_inactive_journal_entry = key ``` | country |  |
| has\_institution | Checks if scope country has a particular type of institution | ``` has_institution = <scope/key> ``` | country |  |
| has\_insurrectionary\_interest\_groups | Check if the country has Interest Groups that are insurrectionary |  | country | boolean |
| has\_interest\_marker\_in\_region | True if scope country has an interest marker in target region | ``` has_interest_marker_in_region = region scope/tag ``` | country |  |
| has\_journal\_entry | Check if the country has at least one active journal entry of the specified type | ``` has_journal_entry = key ``` | country |  |
| has\_label | Check if the scope object has the specified label | ``` has_label = label_key ``` | province |  |
| has\_law | Checks if a country has a certain law active |  | country | law\_type |
| has\_law\_commitment | Checks if a country has a commitment to enact a certain law |  | country | law\_type |
| has\_law\_imposition\_rights | Checks if the scoped country has the necessary permits to demand another country enacts a certain law | ``` has_law_imposition_rights = {  target_country = <country scope>  type = <law type scope> } ``` | country |  |
| has\_law\_or\_variant | Checks if a country has a certain law or one its variant laws active |  | country | law\_type |
| has\_local\_variable | Checks whether the current scope has the specified local variable set | ``` has_local_variable = name ``` | none |  |
| has\_local\_variable\_list | Checks whether the current scope has the specified local variable list set | ``` has_local_variable_list = name ``` | none |  |
| has\_map\_interaction | Checks if the map interaction type is active | ``` has_map_interaction = key ``` | none |  |
| has\_map\_interaction\_diplomatic\_action | Checks if our current map interaction is a specific diplomatic action | ``` has_map_interaction_diplomatic_action = <key> ``` | none |  |
| has\_military\_formation | Checks if character has a Military Formation | ``` has_military_formation = bool ``` | character | boolean |
| has\_mobilization\_option | Checks that a formation has a specific mobilization option | ``` has_mobilization_option = mobilization_option:key ``` | military\_formation | mobilization\_option |
| has\_mobilizing\_unit | Checks if any Building in a scoped State maintains any Combat Units that are currently mobilizing | ``` has_mobilizing_unit = bool ``` | state | boolean |
| has\_modifier | Check if a supported scope has a certain timed modifier | ``` has_modifier = <key> ``` | building, character, country, institution, interest\_group, journal\_entry, political\_movement, power\_bloc, state |  |
| has\_naval\_mission\_with\_invalid\_area | Checks if a Fleet has a naval mission with an invalid area |  | military\_formation | boolean |
| has\_negotiated | Checks whether the interest group has finished negotiation: has\_negotiated = yes/no |  | interest\_group | boolean |
| has\_objective | Checks if the scoped country has a certain objective type | ``` has_objective = objective_type_key ``` | country |  |
| has\_ongoing\_assimilation | Checks if the scoped pop has ongoing cultural assimilation | ``` has_ongoing_assimilation = yes ``` | pop | boolean |
| has\_ongoing\_conversion | Checks if the scoped pop has ongoing religious conversion | ``` has_ongoing_conversion = yes ``` | pop | boolean |
| has\_overlapping\_interests | Checks if country in scope has an overlapping interest marker with any of target country's interests | ``` has_overlapping_interests = <scope> ``` | country | country |
| has\_parent\_law | Check if the amendment type has a parent law | ``` has_parent_law = yes/no ``` | amendment\_type | boolean |
| has\_party | True if IG scope has a party | ``` has_party = bool ``` | interest\_group | boolean |
| has\_party\_member | Checks if the target interest group is a member of scope party | ``` has_party_member = <ig> ``` | party | interest\_group |
| has\_play\_goal | Checks if diplomatic play has a certain war goal type | ``` has_play_goal = return_state ``` | diplomatic\_play |  |
| has\_pop\_culture | Checks if pop has specific culture | ``` has_pop_culture = culture ``` | pop |  |
| has\_pop\_religion | Checks if pop has specific religion | ``` has_pop_religion = religion ``` | pop |  |
| has\_port\_country | Check if scoped country has at least one port | ``` has_port_country = yes/no ``` | country | boolean |
| has\_port\_market | Check if scoped market has at least one port | ``` has_port_market = yes/no ``` | market | boolean |
| has\_port\_state | Check if scoped state has at least one port | ``` has_port = yes/no ``` | state | boolean |
| has\_possible\_decisions | Check if a country has any possible Decisions | ``` has_possible_decisions = yes ``` | country | boolean |
| has\_potential\_resource | Checks if the specificed building group is allowed in the scoped state. Used to check if a state can potentially produce a resource | ``` has_potential_resource = bg_rubber_plantations ``` | state | building\_group |
| has\_potential\_supply | Check if the market goods or state goods has a potential supply, either though local production or theoretical import |  | market\_goods, state\_goods | boolean |
| has\_potential\_to\_form\_country | Check if the target country could ever be able to form a nation | ``` has_potential_to_form_country = <tag> ``` | country |  |
| has\_power\_struggle | Checks if scope Power Bloc has a power struggle | ``` has_power_struggle = yes/no ``` | country | boolean |
| has\_principle | Checks if the scoped power bloc has certain principle | ``` has_principle = principle:key ``` | power\_bloc | power\_bloc\_principle |
| has\_principle\_group | Checks if the scoped power bloc has a principle in the specified group | ``` has_principle_group = principle_group:key ``` | power\_bloc | power\_bloc\_principle\_group |
| has\_reached\_end\_date | True if the end date (NDefines::NGame::END\_DATE) has been reached | ``` has_reached_end_date = yes ``` | none | boolean |
| has\_region\_stance | Checks if the scoped country's AI has the specified stance for a strategic region | ``` region_stance = { 	region = sr:some_region   	stance = <conquer_region>   } ``` | country |  |
| has\_religion | Checks characters religion | ``` has_religion = religion/character scope ``` | character |  |
| has\_religious\_taboo | Checks if a religion has a certain goods as taboo | ``` has_religious_taboo = <goods key> ``` | religion |  |
| has\_researchable\_technology | Check if the country has any researchable technology left. |  | country | boolean |
| has\_revolution | Check if the country has revolutionary uprising |  | country | boolean |
| has\_role | Checks if character has specific role | ``` has_role = role ``` | character |  |
| has\_role\_of\_type | Checks if character has a role of the specified archetype | ``` has_role_of_type = archetype ``` | character |  |
| has\_ruling\_interest\_group | Does the country's government include the named IG |  | country |  |
| has\_ruling\_interest\_group\_count | Does the country's government consist of the specified number of IGs |  | country | value |
| has\_secret\_goal | Checks if scoped country has a particular secret goal towards another country | ``` has_secret_goal = {  who = <country scope>  secret_goal = <secret_goal key> } ``` | country |  |
| has\_ship\_outside\_max\_port\_distance | Checks if a Fleet has any ship that is beyond its maximum distance to port |  | military\_formation | boolean |
| has\_social\_class | Checks if the scoped pop belongs to a specific social class | ``` has_social_class = <key> ``` | pop |  |
| has\_social\_hierarchy | Checks if the scoped country has adopted a specific social hierarchy | ``` has_social_hierarchy = <key> ``` | country |  |
| has\_state\_in\_state\_region | Check if country has a state in the state region | ``` has_state_in_state_region = key ``` | country |  |
| has\_state\_religion | Check if the Pop has the state religion |  | pop | boolean |
| has\_state\_trait | Checks if scoped state has a certain trait | ``` has_state_trait = key ``` | state |  |
| has\_strategic\_adjacency | Checks if country in scope has a strategic adjacency (direct/coastal/wargoal adjacency) to target state/country | ``` has_strategic_adjacency = <scope> ``` | country |  |
| has\_strategic\_land\_adjacency | Checks if country in scope has a strategic adjacency (direct land border or wargoal adjacency only) to target state/country | ``` has_strategic_adjacency = <scope> ``` | country |  |
| has\_strategic\_region\_interest\_tier | Checks the scoped country's interest tier rank in a specific strategic region | ``` has_strategic_region_interest_tier = {     strategic_region = sr:target_region       value >= 3   } ``` | country |  |
| has\_strategy | Checks if country in scope has a particular AI strategy | ``` has_strategy = <key> ``` | country |  |
| has\_subject\_relation\_with | Checks if country in scope is subject or overlord of event target | ``` has_subject_relation_with = country ``` | country | country |
| has\_sufficient\_construction\_capacity\_for\_investment | Check if country has enough construction capacity to be spending all of its incoming investment pool funds. |  | country | boolean |
| has\_technology\_progress | Does the country have the required progress for an technology | ``` has_technology_progress = {  technology = <technology key>  progress = <0-1 value> } ``` | country | value |
| has\_technology\_researched | True if a country has researched an technology | ``` has_technology_researched = <scope/key> ``` | country |  |
| has\_template | Checks if character was made from the specified template | ``` has_template = template_key ``` | character |  |
| has\_terrain | Check if the province has the specified terrain type | ``` has_terrain = terrain_key ``` | province |  |
| has\_trait | Checks if character has specific trait | ``` has_trait = trait ``` | character |  |
| has\_treaty\_port\_in\_market | Checks if the scoped country has a treaty port in target market | ``` c:POR = { has_treaty_port_in_market = c:CHI.market } ``` | country | market |
| has\_truce\_with | Check if a country has a truce with a different target country | ``` has_truce_with = c:GBR ``` | country | country |
| has\_type | Checks if the scoped object has the type identified by the given string | ``` scope:some_object = {  has_type = defensive_pact } ``` | treaty\_article, treaty\_article\_options |  |
| has\_unification\_candidate | Check if there is at least one unification candidate for country tag | ``` has_country_unification_candidate = GER ``` | none |  |
| has\_unit\_type | Checks if a Combat Unit is of the specified type | ``` has_unit_type = unit_type:key ``` | new\_combat\_unit | combat\_unit\_type |
| has\_variable | Checks whether the current scope has the specified variable set | ``` has_variable = name ``` | none |  |
| has\_variable\_list | Checks whether the current scope has the specified variable list set | ``` has_variable_list = name ``` | none |  |
| has\_war\_exhaustion | Checks the war exhaustion of the target country in the scoped war | ``` has_war_exhaustion = {  target = c:GBR  value > 50 } ``` | war | value |
| has\_war\_goal | Checks if war has a certain war goal type | ``` has_war_goal = return_state ``` | war |  |
| has\_war\_support | Checks the war support of the target country in the scoped war | ``` has_war_support = {  target = c:GBR  value > 50 } ``` | war | value |
| has\_war\_with | Checks if country in scope is at war with event target | ``` has_war_with = country ``` | country | country |
| has\_wasted\_construction | Check if country is wasting any of its produced construction. |  | country | boolean |
| hidden\_trigger | Enclosed triggers are not shown in tooltips | ``` hidden_trigger = { <more triggers> } ``` | none |  |
| highest\_overlapping\_interest\_tier | Compares the highest interest tier rank (scope country) among strategic regions where both countries have an interest. | ``` highest_overlapping_interest_tier = {  target = c:GBR  value >= 2 } ``` | country | value |
| highest\_secession\_progress | Compares the highest secession progress of any secession movement in a given country | ``` highest_secession_progress > 0.7 ``` | country | value |
| hit\_points | Compare a ship's current hit points | ``` hit_points >= 10 ``` | ship | value |
| hit\_points\_percent | Compare a ship's current hit point percentage | ``` hit_points_percent >= 0.1 ``` | ship | value |
| ig\_approval | Compare to scoped interest group approval | ``` ig_approval > 2 ig_approval < happy ``` | interest\_group | value |
| ig\_clout | Compare to scoped interest group's clout | ``` ig_clout >= 0.2 ``` | interest\_group | value |
| ig\_government\_power\_share | Compare to scoped interest group's political strength divided by total government political strength | ``` ig_government_power_share >= 0.5 ``` | interest\_group | value |
| ig\_state\_pol\_strength\_share | True if IG in scope has scripted political strength in state | ``` ig_state_pol_strength_share = {  target = scope:target_ig  value = 0.3 } ``` | state | value |
| import\_advantage | Compare to state goods import advantage | ``` import_advantage >= 100 ``` | state\_goods | value |
| import\_tariff\_level | Checks if state goods has a particular import tariff level set | ``` import_tariff_level = max_tariffs ``` | state\_goods |  |
| in\_default | Check if the country is currently in default |  | country | boolean |
| in\_election\_campaign | Check if the country is in election campaign period | ``` in_election_campaign = <yes/no> ``` | country | boolean |
| income\_transfer | Compares the base income transfer of the diplomatic pact | ``` income_transfer > 0.05 ``` | diplomatic\_pact | value |
| incorporation\_progress | Check incorporation progress in state | ``` incorporation_progress > 0.25 ``` | state | value |
| influence | Compares the available influence of the scoped country |  | country | value |
| influence\_usage | Compares the consumed influence of the scoped country |  | country | value |
| infrastructure | Compares the infrastructure value of a given state | ``` infrastructure > 10 ``` | state, state\_region | value |
| infrastructure\_delta | Compares the infrastructure balance of a given state | ``` infrastructure_delta > 0 ``` | state, state\_region | value |
| infrastructure\_usage | Compares the infrastructure usage value of a given state | ``` infrastructure_usage > 10 ``` | state, state\_region | value |
| initiator\_is | Checks who the initiator of a diplomatic play is | ``` initiator_is = country ``` | diplomatic\_play | country |
| institution\_investment\_level | Compares the level of investment in an institution | ``` institution_investment_level = {  institution = <key>  value = <comparator value> } ``` | country | value |
| interest\_group\_population | Compares population number in an interest group | ``` interest_group_population > 1000 ``` | interest\_group | value |
| interest\_group\_population\_percentage | Compares percentage of population in an interest group | ``` interest_group_population_percentage > 0.2 ``` | interest\_group | value |
| interest\_group\_supports\_political\_movement | Checks whether the scoped interest group supports a political movement | ``` interest_group_supports_political_movement = yes/no ``` | interest\_group | boolean |
| invasion\_has\_marines | Checks if any combat unit in the scoped invasion's armies is a marine | ``` invasion_has_marines = bool ``` | invasion | boolean |
| investment\_pool | Does the country have this amount of money saved in its investment pool | ``` investment_pool > 1000 ``` | country | value |
| investment\_pool\_gross\_income | Does the country have this amount of gross income (income before expenses) for its investment pool | ``` investment_pool_gross_income > 1000 ``` | country | value |
| investment\_pool\_net\_income | Does the country have this amount of net income (income after expenses) for its investment pool | ``` investment_pool_net_income > 1000 ``` | country | value |
| is\_adjacent\_to\_country | Checks if country in scope is adjacent to a target country | ``` is_adjacent_to_country = <scope> ``` | country | country |
| is\_adjacent\_to\_market | Checks if market in scope is adjacent to a target market | ``` is_adjacent_to_market = <market scope> ``` | market | market |
| is\_adjacent\_to\_state | Checks if country in scope is adjacent to a target state | ``` is_adjacent_to_state = <state scope> ``` | country | state |
| is\_adult | Check if character is an adult | ``` is_adult = bool ``` | character | boolean |
| is\_advancing\_on\_front | Checks if a commander is advancing on a front | ``` is_advancing_on_front = <front scope> ``` | character | front |
| is\_ai | True if country scope is controlled by an AI | ``` is_ai = bool ``` | country | boolean |
| is\_army | Checks if a military formation is Army | ``` is_army = bool ``` | military\_formation | boolean |
| is\_at\_war | Check if the country is at war |  | country | boolean |
| is\_attacker\_in\_battle | Checks if a Commander or Ship is attacker in a battle | ``` is_attacker_in_battle = bool ``` | character, ship | boolean |
| is\_auto\_assigned | Checks if the character role is auto assigned | ``` is_auto_assigned = bool ``` | character\_role | boolean |
| is\_banning\_goods | Check if a country is banning a good | ``` is_banning_goods = <goods key/scope> ``` | country |  |
| is\_being\_bolstered | Check if scoped movement is being bolstered | ``` is_being_bolstered = <yes>/<no> ``` | political\_movement | boolean |
| is\_being\_bombarded | Checks if a state is currently being port bombarded by a hostile fleet |  | state | boolean |
| is\_being\_suppressed | Check if scoped movement is being suppressed | ``` is_being_suppressed = <yes>/<no> ``` | political\_movement | boolean |
| is\_blockaded\_by | Checks if a state is blockaded by a country |  | state | country |
| is\_buildable | Check if a building is buildable = yes (default) | ``` is_buildable = yes/no ``` | building | boolean |
| is\_building\_group | True if scope is a building of given group | ``` building_group = building ``` | building |  |
| is\_building\_type | True if scope is a building of given type | ``` is_building_type = building ``` | building |  |
| is\_building\_type\_expanded | Checks if the CProductionMethodsPanelEntry for a particular CBuildingType is expanded | ``` is_building_type_expanded = <scope/key> ``` | none |  |
| is\_busy | Check if character is busy | ``` is_busy = bool ``` | character | boolean |
| is\_capital | Check if state is the capital of the owner = bool |  | state | boolean |
| is\_character\_alive | Checks if the scoped character is alive | ``` is_character_alive = bool ``` | character | boolean |
| is\_character\_role | Checks if the scoped character role is a specific role | ``` is_character_role = role ``` | character\_role |  |
| is\_character\_role\_type | Checks if the character role is auto assigned | ``` is_character_role_type = archetype ``` | character\_role |  |
| is\_civil\_war\_type | Checks if the scoped character role is of a specific archetype | ``` is_civil_war_type = revolution / secession ``` | civil\_war |  |
| is\_coastal | Check if state borders a (non-impassable) sea region | ``` is_coastal = yes/no ``` | state | boolean |
| is\_company\_type | Checks if scoped company is of the specified type | ``` is_company_type = <company_type scope> ``` | company | company\_type |
| is\_considered\_adjacent\_due\_to\_wargoals | Checks if the scoped country is considered adjacent to the target country by virtue of the scoped country having war goals that are adjacent to the target country in a committed diplomatic play | ``` is_considered_adjacent_due_to_wargoals = <target country scope> ``` | country | country |
| is\_construction\_paused | Check if construction in a state is paused. |  | country | boolean |
| is\_consumed\_by\_government\_buildings | Check if the market goods is instrumental in running the bureaucratic machine |  | market\_goods | boolean |
| is\_consumed\_by\_military\_buildings | Check if the goods is instrumental in running the war machine |  | market\_goods | boolean |
| is\_country\_alive | Checks if the scoped country is alive, i.e. if it has at least one state on the map and can be interacted with | ``` is_country_alive = yes/no ``` | country | boolean |
| is\_country\_type | Checks the countrys type | ``` is_country_type = country type ``` | country |  |
| is\_damaged | Checks if a ship is damaged | ``` is_damaged = bool ``` | ship | boolean |
| is\_defender\_in\_battle | Checks if a Commander or ship is defender in a battle | ``` is_defender_in_battle = bool ``` | character, ship | boolean |
| is\_desired\_by | Check if the scoped article or article\_options has positive inherent acceptance with the target country | ``` scope:treaty_article = {  is_desired_by = c:FRA } ``` | treaty\_article, treaty\_article\_options | country |
| is\_diplomatic\_action\_type | Checks diplomatic pact is of a certain action type | ``` is_diplomatic_action_type = diplomatic action type ``` | diplomatic\_pact |  |
| is\_diplomatic\_catalyst\_type | Checks diplomatic catalyst is of a certain catalyst type | ``` is_diplomatic_catalyst_type = diplomatic catalyst type ``` | diplomatic\_catalyst |  |
| is\_diplomatic\_pact\_in\_danger | Checks if diplomatic pact is in danger of breaking | ``` is_diplomatic_pact_in_danger = yes ``` | diplomatic\_pact | boolean |
| is\_diplomatic\_play\_ally\_of | Checks if country in scope is in a diplomatic play together with event target | ``` is_diplomatic_play_ally_of = country ``` | country | country |
| is\_diplomatic\_play\_committed\_participant | True if country is a committed participant of any diplomatic play | ``` is_diplomatic_play_participant = bool ``` | country | boolean |
| is\_diplomatic\_play\_enemy\_of | Checks if country in scope is in a diplomatic play against event target | ``` is_diplomatic_play_enemy_of = country ``` | country | country |
| is\_diplomatic\_play\_initiator | True if country is the initiator of any diplomatic play | ``` is_diplomatic_play_initiator = bool ``` | country | boolean |
| is\_diplomatic\_play\_involved\_with | Checks if country in scope is involved in the same diplomatic play as event target | ``` is_diplomatic_play_involved_with = country ``` | country | country |
| is\_diplomatic\_play\_participant\_with | Checks if country in scope is a committed participant in the same diplomatic play as event target | ``` is_diplomatic_play_participant_with = country ``` | country | country |
| is\_diplomatic\_play\_target | True if country is the target of any diplomatic play | ``` is_diplomatic_play_target = bool ``` | country | boolean |
| is\_diplomatic\_play\_type | Checks diplomatic play is of a certain type | ``` is_diplomatic_play_type = play type ``` | diplomatic\_play |  |
| is\_diplomatic\_play\_undecided\_participant | True if country is a undecided participant of any diplomatic play | ``` is_diplomatic_play_participant = bool ``` | country | boolean |
| is\_direct\_subject\_of | Checks if country in scope is a direct subject (not subject-of-subject) of event target | ``` is_direct_subject_of = country ``` | country | country |
| is\_doing\_piracy\_in\_region | Checks if a Fleet is doing piracy in the specified strategic region | ``` is_doing_piracy_in_region = sr:region_baltic_sea ``` | military\_formation | strategic\_region |
| is\_employed | Check if the pop is employed |  | pop | boolean |
| is\_enacting\_law | Checks if the scoped country is enacting a specific law type. | ``` is_enacting_law = law_type:law_conscription ``` | country | law\_type |
| is\_enforced | Checks if the scoped treaty is enforced on either party | ``` scope:some_treaty = {  if = {   limit = { is_enforced = yes }  } } ``` | treaty | boolean |
| is\_equal\_exchange | Checks if the scoped treaty has the same articles on both sides | ``` scope:some_treaty = {  if = {   limit = { is_equal_exchange = yes }  } } ``` | treaty, treaty\_options | boolean |
| is\_exchanging\_obligations | Checks if the scoped treaty is exchanging any obligations, | ``` scope:some_treaty = {  is_exchanging_obligations= yes } ``` | treaty, treaty\_options | boolean |
| is\_expanding\_institution | Are you expanding an institution | ``` is_expanding_institution = <yes>/<no> ``` | country | boolean |
| is\_exported\_to | Whether the scoped market goods are being exported to the target market by the local market | ``` is_exported_to = <market scope> ``` | market\_goods | market |
| is\_female | Check if character is female | ``` is_female = bool ``` | character | boolean |
| is\_flagship | Checks if the scoped ship is assigned as the flagship | ``` is_flagship = bool ``` | ship | boolean |
| is\_fleet | Checks if a military formation is Fleet | ``` is_fleet = bool ``` | military\_formation | boolean |
| is\_forced\_pact | Check if a diplomatic pact has a forced duration due to reasons such as a sway or obligation |  | diplomatic\_pact | boolean |
| is\_forced\_to\_join\_plays | Checks if the scoped country is forced to join the target country's Diplomatic Plays | ``` is_forced_to_join_plays = c:country ``` | country | country |
| is\_fulfilled\_by | Check if the scoped treaty is fulfilled by the given country | ``` scope:treaty = {  is_fulfilled_by = c:FRA } ``` | treaty | country |
| is\_fully\_mobilized | Checks if the Military Formation is fully mobilized | ``` is_fully_mobilized = bool ``` | military\_formation | boolean |
| is\_game\_paused | Checks if the game is paused | ``` is_game_paused = yes/no ``` | none | boolean |
| is\_gamestate\_tutorial\_active | Is the gamestate tutorial active? See save\_progress\_in\_gamestate in tutorial\_lesson\_chains documentation. |  | none | boolean |
| is\_giftable\_to | Check if the scoped article or article\_options is giftable to target country | ``` scope:treaty_article = {  is_giftable_to = c:FRA } ``` | treaty\_article, treaty\_article\_options | country |
| is\_goal\_complete | Check if the journal entry's goal has been met | ``` is_goal_complete = yes/no ``` | journal\_entry | boolean |
| is\_government\_funded | Check if a building is is\_government\_funded | ``` is_government_funded = yes/no ``` | building | boolean |
| is\_heir\_of\_own\_country | Checks whether the scoped character is the heir in the country they live in | ``` is_heir_of_own_country = yes / no ``` | character | boolean |
| is\_historical | Check if character is historical | ``` is_historical = yes/no ``` | character | boolean |
| is\_historical\_treaty | Checks if the scoped treaty was signed before the game start date | ``` is_historical_treaty = yes/no ``` | treaty, treaty\_options | boolean |
| is\_holder\_of\_wargoal\_in\_war | Checks if the specified country is the holder of any wargoal in the scoped war | ``` is_holder_of_wargoal_in_war = <country> ``` | war | country |
| is\_home\_country\_for | Checks if a country is the home country for target country |  | country | country |
| is\_homeland | Checks if scoped state region is a homeland of target culture | ``` is_homeland = culture scope/name ``` | state\_region |  |
| is\_homeland\_of\_country\_cultures | Checks if state is homeland of any of the target country's primary cultures | ``` is_homeland_of_country_cultures = <country> ``` | state | country |
| is\_immortal | checks if the scoped character is immortal | ``` scope:abbath = { is_immortal = yes } ``` | character | boolean |
| is\_immune\_to\_revolutions | Checks if the country has been set to be immune to revolutions via set\_immune\_to\_revolutions | ``` Warning: This does not check if the country is naturally immune to revolutions due to for example being a revolutionary country itself, only for the effects of set_immune_to_revolutions.  is_immune_to_revolutions = yes/no ``` | country | boolean |
| is\_imported\_from | Whether the scoped market goods are being imported from the Target market by the local market | ``` is_imported_from = <market scope> ``` | market\_goods | market |
| is\_in\_battle | Checks if a Commander or ship is engaged in battle | ``` is_in_battle = bool ``` | character, ship | boolean |
| is\_in\_customs\_union | Check if the country is part of a customs union |  | country | boolean |
| is\_in\_customs\_union\_with | Check if the country is in a customs union with scoped country | ``` is_in_customs_union_with = c:FRA ``` | country | country |
| is\_in\_exile\_pool | Checks whether the scoped character is in the exile pool | ``` is_in_exile_pool = yes/no ``` | character | boolean |
| is\_in\_geographic\_region | Checks if a scoped object is in a specific geographic region | ``` is_in_geographic_region = <geographic_region scope> ``` | country, state, state\_region, strategic\_region | geographic\_region |
| is\_in\_government | True if IG scope is in the government | ``` is_in_government = bool ``` | interest\_group | boolean |
| is\_in\_list | Checks if a target in in a list |  | none |  |
| is\_in\_mild\_starvation | Check if the pop is in mild starvation | ``` is_in_mild_starvation = yes ``` | pop | boolean |
| is\_in\_port | Checks if a ship is in port | ``` is_in_port = bool ``` | ship | boolean |
| is\_in\_power\_bloc | Checks if the country is in a Power Bloc | ``` is_in_power_bloc = yes/no ``` | country | boolean |
| is\_in\_revolt | Check if a state has any chance to split off into a revolutionary or seceding country | ``` is_in_revolt = yes/no. ``` | state | boolean |
| is\_in\_same\_market\_area | Checks if scope state is in the same market area as target state | ``` is_in_same_market_area = <state scope> ``` | state | state |
| is\_in\_same\_power\_bloc | Checks if the scoped country is in the same power bloc as the target scoped country | ``` is_in_same_power_bloc = c:GBR ``` | country | country |
| is\_in\_severe\_starvation | Check if the pop is in severe starvation | ``` is_in_severe_starvation = yes ``` | pop | boolean |
| is\_in\_starvation | Check if the pop is in starvation (mild or severe) | ``` is_in_starvation = yes ``` | pop | boolean |
| is\_in\_void | Check if character is in the void | ``` is_in_void = bool ``` | character | boolean |
| is\_in\_war\_together | Checks if country in scope is in war on the same side as event target | ``` is_in_war_together = country ``` | country | country |
| is\_incorporated | Check if state is incorporated = bool |  | state | boolean |
| is\_indirect\_subject\_of | Checks if country in scope is an indirect subject (subject-of-subject) of event target | ``` is_indirect_subject_of = country ``` | country | country |
| is\_insurrectionary | Check if country, movement or IG is insurrectionary |  | country, interest\_group, political\_movement | boolean |
| is\_interest\_group\_leader | Checks if character is the leader of their interest group | ``` is_interest_group_leader = yes/no ``` | character | boolean |
| is\_interest\_group\_type | Checks if Interest Group is of a certain type Can also be used on characters directly | ``` is_interest_group_type = x ``` | character, interest\_group |  |
| is\_invalid\_naval\_mission\_grace\_period\_active | Checks if a Fleet is in the grace period from having an invalid naval mission | ``` is_invalid_naval_mission_grace_period_active = yes/no ``` | military\_formation | boolean |
| is\_invasion\_stalled | Checks if the invasion is stalled due to wrong commander orders | ``` is_invasion_stalled = bool ``` | invasion | boolean |
| is\_involved\_in\_journal\_entry | Check if the country is involved in a specific journal entry | ``` is_involved_in_journal_entry = key ``` | country |  |
| is\_isolated\_from\_market | Check if a state is isolated from its market |  | state | boolean |
| is\_junior\_in\_customs\_union | True if country is a junior country in a customs custom | ``` is_junior_in_customs_union = bool ``` | country | boolean |
| is\_land\_theater | Checks if a theater is a land theater | ``` is_land_theater = bool ``` | theater | boolean |
| is\_largest\_state\_in\_region | Check if state is the largest in the state region = bool |  | state | boolean |
| is\_lens\_open | Checks if a certain lens is open, specified as a lens key. Specify an optional named tab to check if this tab is open. | ``` is_lens_open = {  lens = lens_key  tab_name = tab_key } ``` | none |  |
| is\_local\_player | True if country scope is a player | ``` is_local_player = bool ``` | country | boolean |
| is\_losing\_power\_rank | Check if the country is in the process of dropping in power ranking |  | country | boolean |
| is\_major\_formation | Checks if a country formation is a major formation | ``` is_major_formation = yes ``` | country\_formation | boolean |
| is\_marginal | True if IG scope is marginal | ``` is_marginal = bool ``` | interest\_group | boolean |
| is\_market\_reachable\_for\_trade | Check if the scope country can reach the specified market scope for purposes of trade | ``` is_market_reachable_for_trade = scope:my_market_scope ``` | country | market |
| is\_mass\_migration\_origin | Checks if the scoped country is the origin of mass migration | ``` is_mass_migration_origin = yes ``` | country | boolean |
| is\_mass\_migration\_origin\_of\_culture | Checks if the scoped country origin of mass migration of specific culture | ``` is_mass_migration_origin_of_culture = cu:example_culture ``` | country | culture |
| is\_mass\_migration\_target | Mass migration target is state. | ``` is_mass_migration_target = yes ``` | state | boolean |
| is\_mass\_migration\_target\_for\_culture | Scoped state is a mass migration target for the specified culture. | ``` is_mass_migration_target_for_culture = scope:my_culture ``` | state | culture |
| is\_member\_of\_any\_lobby | Checks if interest group is member of any lobby | ``` is_member_of_any_lobby = yes ``` | interest\_group | boolean |
| is\_member\_of\_lobby | Checks if interest group is member of a certain lobby type | ``` is_member_of_lobby = lobby_type:pro_country_lobby ``` | interest\_group | political\_lobby\_type |
| is\_member\_of\_party | Checks if Interest Group is a member of target party | ``` is_member_of_party = <party> ``` | interest\_group | party |
| is\_mobilized | Checks if the military formation is mobilized | ``` is_mobilized = bool ``` | military\_formation | boolean |
| is\_monarch | Checks if character is a monarch of a country with hereditary succession | ``` is_monarch = bool ``` | character | boolean |
| is\_naval\_invasion | Checks if the scoped invasion is a naval invasion | ``` is_naval_invasion = bool ``` | invasion | boolean |
| is\_negotiating | Check if the scoped country or interest group is currently negotiating. |  | country, interest\_group | boolean |
| is\_noble | Check if character is a noble | ``` is_noble = bool ``` | character | boolean |
| is\_not\_in\_geographic\_region | Checks if a scoped object is NOT in a specific geographic region | ``` is_not_in_geographic_region = <geographic_region scope> ``` | country, state, state\_region, strategic\_region | geograpic\_region |
| is\_objective\_completed | Is the objective completed for the country in scope? | ``` is_objective_completed = yes ``` | none | boolean |
| is\_on\_front | Checks if a character or military formation has been assigned to a Front and has arrived there | ``` is_on_front = yes/no ``` | character, military\_formation | boolean |
| is\_owed\_obligation\_by | Checks if the scoped country is owed a obligation by the target country | ``` is_owed_obligation_by = c:FRA ``` | country | country |
| is\_panel\_open | Checks if a certain infopanel is open, specified as an event target (target) or as a string (panel\_name). Specify an optional named tab (tab\_name) to check if this tab is open. | ``` is_panel_open = {  target = <scope> OR panel_name = panel_name  tab_name = tab_name } ``` | none |  |
| is\_party | Checks if the target party is same as scoped party. Will only work on exact same party object, meaning you can't compare across countries. | ``` is_party = <party> ``` | party | party |
| is\_party\_type | Checks if the scoped party's type is the specified one | ``` is_party_type = party_type_database_key ``` | party |  |
| is\_player | True if country scope is a player | ``` is_player = bool ``` | country | boolean |
| is\_political\_lobby\_type | Checks political lobby is of a certain lobby type | ``` is_political_lobby_type = political lobby type ``` | political\_lobby |  |
| is\_political\_movement\_type | Check if a political movement is a particular type | ``` is_political_movement_type = movement_to_enact ``` | political\_movement |  |
| is\_pop\_type | Checks if pop is of specified type | ``` is_pop_type = poptype ``` | pop |  |
| is\_popup\_open | Checks if the specified popup panel is open | ``` is_popup_open = popup ``` | none |  |
| is\_potential\_treaty\_port | Checks if the scoped state has the potential to become a treaty port for target country | ``` is_potential_treaty_port = c:FRA ``` | state | country |
| is\_power\_bloc\_leader | Checks if the country is a leader of a Power Bloc | ``` is_power_bloc_leader = yes/no ``` | country | boolean |
| is\_powerful | True if IG scope is influential | ``` is_powerful = bool ``` | interest\_group | boolean |
| is\_primary\_culture\_of | Checks if culture is any of a country's primary cultures | ``` is_primary_culture_of = <country> ``` | culture | country |
| is\_producing\_prestige\_goods | Checks if scope company is producing prstige goods | ``` is_producing_prestige_goods = yes ``` | company | boolean |
| is\_production\_method\_active | Checks if the building of a particular type in scoped state has the specified production method active | ``` is_production_method_active = {  building_type = <key>  production_method = <key> } ``` | state |  |
| is\_progressing | Check if the journal entry is progressing | ``` is_progressing = yes/no ``` | journal\_entry | boolean |
| is\_province\_land | Check if the province is on land |  | province | boolean |
| is\_reasonable\_law\_for\_petition | Checks if a law is considered reasonable for a government petition to enact it | ``` is_reasonable_law_for_petition = yes ``` | law | boolean |
| is\_renegotiation | Checks if the scoped treaty is amending an existing treaty | ``` scope:some_treaty = {  if = {   limit = { is_renegotiation = yes }  } } ``` | treaty, treaty\_options | boolean |
| is\_researching\_technology | Check if the country is actively researching a tech | ``` is_researching_technology = <scope/key/any> ``` | country |  |
| is\_researching\_technology\_category | Check if the country is actively researching a tech category | ``` is_researching_technology_category = <key/any> ``` | country |  |
| is\_revolutionary | Check if the country, movement or interest group is revolutionary |  | country, interest\_group, political\_movement | boolean |
| is\_rightclick\_menu\_open | Checks if the specified rightclick menu is open | ``` is_rightclick_menu_open = <menu_key> ``` | none |  |
| is\_ruler\_of\_any\_country | Checks if character is a ruler/head of state of any country | ``` is_ruler_of_any_country = bool ``` | character | boolean |
| is\_ruler\_of\_other\_country | Checks if character is a ruler/head of state of any country they don't live in | ``` is_ruler_of_other_country = bool ``` | character | boolean |
| is\_ruler\_of\_own\_country | Checks if character is a ruler/head of state of the country they live in | ``` is_ruler_of_own_country = bool ``` | character | boolean |
| is\_same\_interest\_group\_type | Checks if Interest Group is of the same IG type as target | ``` is_interest_group_type = scope:neighbor_leading_ig ``` | interest\_group | interest\_group |
| is\_same\_law\_group\_as | Checks if scope law type is in the same group as the target law type scope | ``` is_same_law_group_as = <law type scope> ``` | law\_type | law\_type |
| is\_same\_party\_type | Checks if Party is of the same party type as target | ``` is_same_party_type_as = scope:neighboring_party ``` | party | party |
| is\_sea\_adjacent | Check if state borders a sea region (regular or impassable) | ``` is_sea_adjacent = yes/no ``` | state | boolean |
| is\_secessionist | Check if the country, movement or interest group is secessionist |  | country, interest\_group, political\_movement | boolean |
| is\_set | Checks whether the specified scope target has been set (includes being the null object) | ``` is_set = from.owner.var:cool_var.mother ``` | none |  |
| is\_ship\_type | Checks if scoped ship is of the specified type | ``` is_ship_type = ship_type:ship_type_frigate ``` | ship | ship\_type |
| is\_slave\_state | Check if a state employs or has the potential to employ slaves. |  | state | boolean |
| is\_split\_state | Checks if the scoped state is a split state. | ``` scope:example_state = { is_split_state = yes } ``` | state | boolean |
| is\_state\_region\_land | Check if the state region is on land |  | state\_region | boolean |
| is\_state\_religion | Checks if the religion is the state religion in a country | ``` is_accepted_religion = <country> ``` | religion | country |
| is\_strategic\_objective | Checks if the scoped State is a Strategic Objective of a Country | ``` is_strategic_objective = <country> ``` | state | country |
| is\_strongest\_ig\_in\_government | Checks whether the scoped interest group has the most clout out of all interest groups in government | ``` is_strongest_ig_in_government = yes/no ``` | interest\_group | boolean |
| is\_subject | True if country is a subject | ``` is_subject = bool ``` | country | boolean |
| is\_subject\_of | Checks if country in scope is subject (or subject-of-subject) of event target | ``` is_subject_of = country ``` | country | country |
| is\_subject\_type | Checks the country's subject type | ``` is_subject_type = subject type ``` | country |  |
| is\_subsidized | Check if a building is being subsidized | ``` is_subsidized = yes/no ``` | building | boolean |
| is\_subsistence\_building | Check if a building is a subsistence building | ``` is_subsistence_building = yes/no ``` | building | boolean |
| is\_supporting\_unification\_candidate | Check if scope country is supporting a unification candidate for a specific country formation | ``` is_supporting_unification_candidate = {  who = c:PRU  country_formation = GER } ``` | country |  |
| is\_target\_in\_global\_variable\_list | Checks if a target is in a global variable list | ``` is_target_in_global_variable_list = {  name = <variable name>  target = <event target> } ``` | none |  |
| is\_target\_in\_local\_variable\_list | Checks if a target is in a local variable list | ``` is_target_in_local_variable_list = {  name = <variable name>  target = <event target> } ``` | none |  |
| is\_target\_in\_variable\_list | Checks if a target is in a variable list | ``` is_target_in_variable_list = {  name = <variable name>  target = <event target> } ``` | none |  |
| is\_target\_of\_wargoal | Checks if state is target of any wargoal in wars involving a specific country | ``` has_war_goal = <country> ``` | state | country |
| is\_target\_of\_wargoal\_in\_war | Checks if the specified country is the target of any war goal in the scoped war | ``` is_target_of_wargoal_in_war = <country> ``` | war | country |
| is\_taxing\_goods | Check if a country is taxing a good | ``` has_embargo = <goods key/scope> ``` | country |  |
| is\_template\_used | Checks if character template has already been used | ``` is_template_used = template_key ``` | none |  |
| is\_theme\_selected | Does the player have the theme selected in settings | ``` is_theme_selected = <key> ``` | none |  |
| is\_tradeable | Check if a goods or market goods is tradeable | ``` is_tradeable = yes/no ``` | goods, market\_goods | boolean |
| is\_treaty\_article\_in\_danger | Checks if treaty article is in danger of breaking | ``` is_treaty_article_in_danger = yes ``` | treaty\_article | boolean |
| is\_treaty\_port | Checks if the scoped state is a treaty port | ``` is_treaty_port = yes/no ``` | state | boolean |
| is\_tutorial\_active | Is the tutorial active? |  | none | boolean |
| is\_tutorial\_lesson\_active | Is this the current tutorial lesson? | ``` is_tutorial_lesson_active = reactive_advice_succession ``` | none |  |
| is\_tutorial\_lesson\_chain\_completed | Has the tutorial lesson chain with the specified key been finished? |  | none |  |
| is\_tutorial\_lesson\_completed | has the tutorial lesson with the specified name been finished? |  | none |  |
| is\_tutorial\_lesson\_step\_completed | Has the tutorial lesson step been finished? | ``` is_tutorial_lesson_step_completed = lesson_key:step_key ``` | none |  |
| is\_under\_colonization | Check if state is under colonization | ``` is_under_colonization = yes/no ``` | state | boolean |
| is\_under\_construction | Checks if building is under construction | ``` is_under_construction = bool ``` | building | boolean |
| is\_unification\_candidate | Check if scope country is a unification candidate for country tag | ``` is_unification_candidate = GER ``` | country |  |
| is\_violating\_sovereignty\_of | Check if the scoped country is violating the sovereignty of a target country | ``` is_violating_sovereignty_of = c:GBR ``` | country | country |
| is\_vulnerable\_front | Whether the scoped Front doesn't have any Battalions nor Generals on target side, and the enemy has at least one General. | ``` is_vulnerable_front = scope:example_country ``` | front | country |
| is\_war | True if the diplomatic play has escalated into war | ``` is_war = bool ``` | diplomatic\_play | boolean |
| is\_war\_participant | Check if the target country is participant in a war |  | war | country |
| is\_warleader | Check if country is warleader in war |  | war | country |
| is\_world\_market\_hub | Check if state is a world market hub | ``` is_world_market_hub = yes ``` | state | boolean |
| isolated\_states | Compare number of Isolated States |  | country | value |
| journal\_entry\_age | Return the age of the journal entry (since activation) in days | ``` journal_entry_age > 720 ``` | journal\_entry | value |
| law\_approved\_by | Checks whether the scoped law is approved by an interest group | ``` law_approved_by = ig_rural_folk ``` | law |  |
| law\_enactment\_stance | Compares the stance of the scoped character, movement or interest group has about enactment of the specified law compared to the current active law in the same group |  | character, interest\_group, political\_movement |  |
| law\_is\_available | Checks if a law is available for its country, considering its current situation. Like can\_be\_enacted, but ignores government support | ``` law_is_available = yes ``` | law | boolean |
| law\_progressiveness\_difference | Compares the progressiveness of the scoped law type to the target law type, higher value means greater difference | ``` "law_progressiveness_difference(scope:target_law)" > 50 ``` | law\_type | value |
| law\_stance | Compares the base stance of the scoped character, movement or interest group has about the specified law, ignoring the current active law in the same group |  | character, interest\_group, political\_movement |  |
| leading\_producer\_of | Checks if country is producing the most of a certain good | ``` leading_producer_of = g:luxury_clothes ``` | country | goods |
| leads\_customs\_union | Check if any other country is part of this country's customs union | ``` leads_customs_union = bool ``` | country | boolean |
| levels\_owned\_by\_country | Compares how many levels a country or investors in that country own in a building | ```  levels_owned_by_country = {  target = c:GBR  value >= 1 } ``` | building | value |
| leverage\_advantage | Checks that the leverage advantage between power bloc and target country meets condition | ``` power_bloc = {  leverage_advantage = {   target = c:BEL   value > 0  } } ``` | power\_bloc | value |
| liberty\_desire | Compare trigger for the Liberty Desire value in a scoped country. | ``` liberty_desire > 50 ``` | country | value |
| liberty\_desire\_weekly\_progress | Compare trigger for the weekly Liberty Desire progress value in a scoped country. | ``` liberty_desire_weekly_progress > 0 ``` | country | value |
| liberty\_desire\_weekly\_progress\_from\_support\_independence | Compare trigger for the weekly Liberty Desire progress value from the scoped country having their independence supported. | ``` liberty_desire_weekly_progress_from_support_independence > 0 ``` | country | value |
| lifetime\_piracy\_income | Compares the lifetime piracy income of a character | ``` lifetime_piracy_income >= 1000000 ``` | character | value |
| list\_size | Checks the size of a list | ``` list_size = {  name = <list name>  value >= <value> } ``` | none | value |
| literacy\_rate | Checks if a pop, state or country has a certain amount of literacy | ``` literacy = value ``` | country, pop, state | value |
| lobby\_clout | Compare to total clout of scoped lobby's interest groups | ``` lobby_clout >= 0.2 ``` | political\_lobby | value |
| lobby\_formation\_reason | Check scope diplomatic catalyst or political lobby scope for lobby formation reason | ``` lobby_formation_reason = diplomacy ``` | diplomatic\_catalyst, political\_lobby |  |
| local\_variable\_list\_size | Checks the size of a local variable list | ``` local_variable_list_size = {  name = <variable name>  target >= <value> } ``` | none |  |
| loyalist\_fraction | Compares loyalist fraction in pops in state or country, all parameters except value are optional | ``` loyalist_fraction = {  value = <script_value>  pop_type = <key>  strata = <key>  culture = <key/scope>  religion = <key/scope> } ``` | country, state | value |
| loyalists | Compares the loyalty in a given state, i.e. the fraction of Loyalists | ``` loyalists > 0.2 ``` | state | value |
| loyalty | Compares the character loyalty | ``` loyalty > 1 ``` | character | value |
| market\_access | Checks the market access of the scoped state | ``` market_access > 0.8 ``` | state | value |
| market\_consumption\_share | Compare fraction of scope market consumption coming from target country | ``` market_consumption_share = {  target = <country scope>  goods = key (optional)  value > 0.5 } ``` | market | value |
| market\_exports | Compare total units of exports from scope to target market (if set) or world market in general (if no market specified) | ``` market_exports = {   target = market scope (optional)   goods = key (optional)   value > 100 } ``` | market | value |
| market\_exports\_reliance | Compare fraction of buy orders in scope market that are due to exports to target market (if set) or world market in general (if no market specified) | ``` market_exports_reliance = {   target = market scope (optional)   goods = key (optional)   value > 0.5 } ``` | market | value |
| market\_goods\_buy\_orders | Checks if market goods has the specified number of buy orders | ``` market_goods_buy_orders < <value> ``` | market\_goods | value |
| market\_goods\_cheaper | Checks if market goods is at least the specified percentage cheaper than base price | ``` market_goods_cheaper > <value> ``` | market\_goods | value |
| market\_goods\_consumption | Checks if market goods has the specified number of total consumption | ``` market_goods_consumption < <value> ``` | market\_goods | value |
| market\_goods\_delta | Checks if market has the specified goods delta (production + imports) - (consumption + exports) | ``` market_goods_delta < <value> ``` | market\_goods | value |
| market\_goods\_export\_share | Checks if market goods exports are the specified fraction of world market exports | ``` market_goods_export_share < <value> ``` | market\_goods | value |
| market\_goods\_exports | Checks if market goods has the specified number of exports | ``` market_goods_exports < <vaue> ``` | market\_goods | value |
| market\_goods\_has\_goods\_shortage | Check if market goods has a shortage in the market | ``` market_goods_has_goods_shortage = yes/no ``` | market\_goods | boolean |
| market\_goods\_import\_share | Checks if market goods imports are the specified fraction of world market imports | ``` market_goods_import_share < <value> ``` | market\_goods | value |
| market\_goods\_imports | Checks if market goods has the specified number of imports | ``` market_goods_imports < <value> ``` | market\_goods | value |
| market\_goods\_pricier | Checks if market goods is at least the specified percentage more expensive than base price | ``` market_goods_pricier > <value> ``` | market\_goods | value |
| market\_goods\_production | Checks if market goods has the specified number of total production | ``` market_goods_production < <value> ``` | market\_goods | value |
| market\_goods\_sell\_orders | Checks if market goods has the specified number of sell orders | ``` market_goods_sell_orders < <value> ``` | market\_goods | value |
| market\_goods\_shortage\_ratio | Compares the shortage ratio of a market goods in its market | ``` market_goods_shortage_ratio > 0.33 ``` | market\_goods | value |
| market\_has\_goods\_shortage | Check if market has a shortage on any of its building inputs | ``` market_has_goods_shortage = yes/no ``` | market | boolean |
| market\_imports | Compare total units of imports from target to scope market | ``` market_imports = {   target = market scope (optional)   goods = key (optional)   value > 100 } ``` | market | value |
| market\_imports\_reliance | Compare fraction of buy orders in scope market that are due to imports from target market (if set) or world market in general (if no market specified) | ``` market_imports_reliance = {   target = market scope (optional)   goods = key (optional)   value > 0.5 } ``` | market | value |
| market\_number\_goods\_shortages | Check how many shortages a market has on any of its building inputs | ``` market_number_goods_shortages >= 2 ``` | market | value |
| market\_number\_goods\_shortages\_with | Check how many shortages a market has on any of its building inputs, plus the ones from the target country | ``` "market_number_goods_shortages_with(scope:target)" >= 2 ``` | market | value |
| market\_number\_goods\_shortages\_without | Check how many shortages a market has on any of its building inputs, subtracting the ones from the target country | ``` "market_number_goods_shortages_without(scope:target)" >= 2 ``` | market | value |
| market\_prestige\_goods\_buy\_orders | Compare the buy orders of a specific prestige good type in the market | ``` market_prestige_goods_buy_orders = {   type = <prestige_good_type>   value >= <amount> } ``` | market\_goods | value |
| market\_prestige\_goods\_consumption | Compare the consumption value of a specific prestige good type in the market | ``` market_prestige_goods_consumption = {   type = <prestige_good_type>   value >= <amount> } ``` | market\_goods | value |
| market\_prestige\_goods\_delta | Compare the delta (sell orders - buy orders) of a specific prestige good type in the market | ``` market_prestige_goods_delta = {   type = <prestige_good_type>   value >= <amount> } ``` | market\_goods | value |
| market\_prestige\_goods\_export\_share | Compare the world market expore share of a specific prestige good type in the market | ``` market_prestige_goods_export_share = {   type = <prestige_good_type>   value >= <amount> } ``` | market\_goods | value |
| market\_prestige\_goods\_exports | Compare the export value of a specific prestige good type in the market | ``` market_prestige_goods_exports = {   type = <prestige_good_type>   value >= <amount> } ``` | market\_goods | value |
| market\_prestige\_goods\_import\_share | Compare the world market export share of a specific prestige good type in the market | ``` market_prestige_goods_import_share = {   type = <prestige_good_type>   value >= <amount> } ``` | market\_goods | value |
| market\_prestige\_goods\_imports | Compare the import value of a specific prestige good type in the market | ``` market_prestige_goods_imports = {   type = <prestige_good_type>   value >= <amount> } ``` | market\_goods | value |
| market\_prestige\_goods\_production | Compare the production value of a specific prestige good type in the market | ``` market_prestige_goods_production = {   type = <prestige_good_type>   value >= <amount> } ``` | market\_goods | value |
| market\_prestige\_goods\_sell\_orders | Compare the sell orders of a specific prestige good type in the market | ``` market_prestige_goods_sell_orders = {   type = <prestige_good_type>   value >= <amount> } ``` | market\_goods | value |
| market\_production\_share | Compare fraction of scope market production coming from target country | ``` market_production_share = {  target = <country scope>  goods = key (optional)  value > 0.5 } ``` | market | value |
| market\_trade | Compare total units of goods traded between scope market and target market (if set) or world market in general (if no market specified) | ``` market_trade = {   target = market scope (optional)   goods = key (optional)   value > 100 } ``` | market | value |
| market\_trade\_reliance | Compare fraction of buy and sell orders in scope market that are due to trade with target market (if set) or world market in general (if no market specified) | ``` market_trade_reliance = {   target = market scope (optional)   goods = key (optional)   value > 0.5 } ``` | market | value |
| max\_contraventions | Check the maximum contraventions for the article type of the scoped article or article\_options | ``` scope:treaty_article = {  max_contraventions >= 1 } ``` | treaty\_article, treaty\_article\_options | value |
| max\_law\_enactment\_setbacks | Compares to the max number of law enactment setbacks a country can suffer before the law fails |  | country | value |
| max\_num\_companies | The limit of how many companies the scoped country is allowed to have | ``` num_num_companies > 0 ``` | country | value |
| military\_ship\_maintenance\_fulfillment | Compares the military ship maintenance fulfillment ratio of a country | ``` military_ship_maintenance_fulfillment = <value> ``` | country | value |
| military\_wage\_level | Compares the military wage level of scoped country. `very_low, low, medium, high, very_high`; returns same number as military\_wage\_level\_value trigger | ``` military_wage_level = <level_term> ``` | country | value |
| military\_wage\_level\_value | Compares the military wage level value of scoped country. `0, 1, 2, 3, 4` | ``` military_wage_level_value = <level_num> ``` | country | value |
| month | Compare to current game date month (Jan: 0, Dec: 11) | ``` month > 10 ``` | none | value |
| most\_powerful\_strata | Compares an interest groups most powerful strata |  | interest\_group |  |
| most\_prominent\_revolting\_interest\_group | Checks if the most prominent revolting interest group in the scoped state has the given interest group type. Evaluates false if the scoped state is not in revolt. | ``` most_prominent_revolting_interest_group = ig_landowners ``` | state |  |
| movement\_can\_cause\_obstinance | Check if the political movement can generate obstinance in states | ``` movement_can_cause_obstinance = yes ``` | political\_movement | boolean |
| movement\_is\_causing\_obstinance | Check if the political movement is causing obstinance in any state | ``` movement_is_causing_obstinance = no ``` | political\_movement | boolean |
| movement\_pressure | Compares the pressure of the scoped movement on the target IG | ``` "movement_pressure(ig:ig_intelligentsia)" > 0.1 ``` | political\_movement | value |
| nand | a negated AND trigger Returns false if all contained triggers return true; returns true at first false sub-trigger |  | none |  |
| nationalization\_cost | Compares the total cost of nationalizing all buildings in scope country owned by the government or pops of target country | ``` nationalization_cost = {  target = scope:other_country  value > 100000 } ``` | country | value |
| naval\_power\_projection | Compare to a country's total navy power projection | ``` scope:example_country = { naval_power_projection < root.naval_power_projection } ``` | country | value |
| neighbors\_any\_power\_bloc | Checks if the scoped country neighbors any power bloc. Note: the scoped country is not considered to be neighboring the power bloc it belongs to (if any) | ``` neighbors_any_power_bloc = yes/no ``` | country | boolean |
| neighbors\_member\_of\_same\_power\_bloc | Checks if the scoped country neighbors any other country belonging to the same power bloc | ``` neighbors_member_of_same_power_bloc = yes/no ``` | country | boolean |
| neighbors\_power\_bloc | Checks if the scoped country neighbors the target power bloc. Note: the scoped country is not considered to be neighboring the power bloc it belongs to (if any) | ``` neighbors_power_bloc = c:PRU.power_bloc ``` | country | power\_bloc |
| net\_fixed\_income | Does the country have this amount of income after expenses (counting only fixed income & expenses) | ``` net_fixed_income > 1000 ``` | country | value |
| net\_total\_income | Does the country have this amount of income after expenses (counting all income & expenses) | ``` net_total_income > 1000 ``` | country | value |
| night\_value | Night value |  | none | value |
| nor | a negated OR trigger Returns true if all contained triggers return false; returns false at first true trigger |  | none |  |
| not | negates content of trigger Returns true if all contained triggers return false |  | none |  |
| num\_casualties | Checks the number of total casualties in the scoped war | ``` num_casualties >= 5000 ``` | war | value |
| num\_companies | How many companies the scoped country has | ``` num_companies > 0 ``` | country | value |
| num\_contraventions | Check if the scoped article has the given number of contravention from the given country | ``` scope:treaty_article = {  num_contraventions = {   target = c:FRA   value > 0  } } ``` | treaty\_article | value |
| num\_country\_casualties | Checks the number of casualties for the target country in the scoped war | ``` num_country_casualties = {  target = country  value < 5000 } ``` | war | value |
| num\_country\_dead | Checks the number of dead for the target country in the scoped war | ``` num_country_dead = {  target = country  value < 5000 } ``` | war | value |
| num\_country\_wounded | Checks the number of wounded for the target country in the scoped war | ``` num_country_wounded = {  target = country  value < 5000 } ``` | war | value |
| num\_cultural\_communities | Check cultural communities in state | ``` num_cultural_communities > 5 ``` | state | value |
| num\_dead | Checks the number of total dead in the scoped war | ``` num_dead >= 5000 ``` | war | value |
| num\_diplomatic\_pacts | Compare to a country's number of diplomatic pacts of the specified type | ``` num_diplomatic_pacts = {  type = <key>  value < 10 } ``` | country | value |
| num\_front\_casualties | Checks the number of casualties for the target country in the scoped front | ``` num_front_casualties = {  target = country  value < 5000 } ``` | front | value |
| num\_front\_dead | Checks the number of dead for the target country in the scoped front | ``` num_front_dead = {  target = country  value < 5000 } ``` | front | value |
| num\_front\_wounded | Checks the number of wounded for the target country in the scoped front | ``` num_front_wounded = {  target = country  value < 5000 } ``` | front | value |
| num\_investments\_of\_type | Checks the number of buildings levels of a given type the scoped country has outside their own country. | ```  num_investments_of_type = {  type = building_oil_rig  value > 5 } ``` | country | value |
| num\_mobilized\_units\_in\_theater | Determines the number of mobilized units belonging to the scoped theater's owner or their allies, in fronts intersecting the scoped theater | ``` num_mobilized_units_in_theater > 25 ``` | theater | value |
| num\_political\_lobbies | Compare to number of political lobbies in scoped country or interest group | ``` num_political_lobbies > 0 ``` | country, interest\_group | value |
| num\_potential\_resources | Checks the amount of the specified building type allowed in the state. Will return an error if used on building types that are not level capped | ``` "num_potential_resources(building_rubber_plantation)" > 0 ``` | state | value |
| num\_power\_bloc\_members | Compare the number of members in a power bloc against a value | ``` num_power_bloc_members >= 2 ``` | power\_bloc | value |
| num\_power\_bloc\_states | Compare the number of states in a power bloc against a value | ``` num_power_bloc_states >= 2 ``` | power\_bloc | value |
| num\_provinces\_in\_theater | Determines the number provinces in the scoped theater | ``` num_provinces_in_theater > 10 ``` | theater | value |
| num\_subjects | Compares the number of subjects of scoped country | ``` num_subjects = <value> ``` | country | value |
| num\_taxed\_goods | Compares the number of consumption taxed goods of scoped country | ``` num_taxed_goods = <value> ``` | country | value |
| num\_wounded | Checks the number of total wounded in the scoped war | ``` num_wounded >= 5000 ``` | war | value |
| number\_of\_claims | The number of claims on foreign states the country has | ``` number_of_claims > 0 ``` | country | value |
| number\_of\_possible\_decisions | The number of possible decisions a Country can take | ``` number_of_possible_decisions > 0 ``` | country | value |
| obstinance | Compares state obstinance | ``` obstinance > 0.5 ``` | state | value |
| occupancy | Evaluates a building's current occupancy | ``` occupancy < 0.25 ``` | building | value |
| or | false if all contained triggers are false Returns true at first true sub-trigger |  | none |  |
| organization | Compares the Organization of the Military Formation in scope | ``` organization <= define:NMilitary|MILITARY_FORMATION_ORGANIZATION_MIN ``` | military\_formation | value |
| organization\_target | Compares the target Organization of the Military Formation in scope | ``` organization_target < define:NMilitary|MILITARY_FORMATION_ORGANIZATION_MAX ``` | military\_formation | value |
| overlord\_can\_decrease\_subject\_autonomy | Check if an overlord can decrease a subject autonomy | ``` overlord_can_decrease_subject_autonomy = bool ``` | country | boolean |
| owes\_obligation\_to | Checks if country in scope owes a obligation to event target | ``` owes_obligation_to = country ``` | country | country |
| owns\_entire\_state\_region | Check if country owns entire region | ``` owns_entire_state_region = key ``` | country |  |
| owns\_treaty\_port\_in | Does country own the treaty port in assigned state region | ``` owns_treaty_port_in = key ``` | country |  |
| play\_participant\_has\_war\_goal\_of\_type\_against | Checks if scope country holds a wargoal of a specific type targeting a specific country in any diplomatic play | ``` play_participant_has_war_goal_of_type_against = {  type = <wargoal type key>  target = <country scope> } ``` | country |  |
| play\_side\_has\_war\_goal\_of\_type\_against | Checks if any country on the same side as scope country in any diplomatic play holds a wargoal of a specific type targeting a specific country | ``` play_side_has_war_goal_of_type_against = {  type = <wargoal type key>  target = <country scope> } ``` | country |  |
| political\_movement\_identity\_support | Compare pop with correct culture/religion identity support of political movement | ``` political_movement_identity_support > 0.5 ``` | political\_movement | value |
| political\_movement\_military\_support | Compare military support of political movement | ``` political_movement_military_support > 0.5 ``` | political\_movement | value |
| political\_movement\_popular\_support | Compare popular support of political movement | ``` political_movement_popular_support > 0.5 ``` | political\_movement | value |
| political\_movement\_radicalism | Compare radicalism of political movement | ``` political_movement_radicalism > 50 ``` | political\_movement | value |
| political\_movement\_support | Compare support of political movement | ``` political_movement_support > 0.5 ``` | political\_movement | value |
| political\_movement\_wealth\_support | Compare wealth support of political movement | ``` political_movement_wealth_support > 0.5 ``` | political\_movement | value |
| political\_strength\_share | Checks the political strength share of a pop type, religion or culture in a country or state. Exactly one of pop\_type, religion or culture must be specified. | ``` political_strength_share = { 	pop_type/religion/culture = <key/scope>   	value <compare operator> <value>   } ``` | country, state | value |
| politically\_involved\_ratio | Compares the percentage of politically involved population in a country | ``` politically_involved_ratio > 0.25 ``` | country | value |
| pollution\_amount | Compare state region pollution |  | state\_region | value |
| pollution\_generation | Compare total pollution generation across all buildings in the state |  | state | value |
| pop\_acceptance | Compares the scoped pop's acceptance against an acceptance value | ``` pop_acceptance > 50 ``` | pop | value |
| pop\_employment\_building | Checks if pop is working in a specific building type | ``` pop_employment_building = building ``` | pop |  |
| pop\_employment\_building\_group | Checks if pop is working in a specific building type | ``` pop_employment_building = building ``` | pop |  |
| pop\_has\_primary\_culture | Checks if pop's culture is primary | ``` pop_has_primary_culture = bool ``` | pop | boolean |
| pop\_loyalist\_fraction | Compares the number of Radicals in a pop to its total size | ``` pop_loyalty_fraction < 0.5 ``` | pop | value |
| pop\_neutral\_fraction | Compares the number of Neutrals (not Radical, not Loyalist) in a pop to its total size | ``` pop_neutral_fraction > 0.95 ``` | pop | value |
| pop\_radical\_fraction | Compares the number of Radicals in a pop to its total size | ``` pop_radical_fraction > 0.25 ``` | pop | value |
| pop\_type\_percent\_country | Checks whether the scoped country has <percent> of its population belonging to the specified pop type | ``` scope:example_country = {  pop_type_percent_country = {   pop_type = <pop_type>   percent <compare operator (<,>,= and so on)> <percent>  } } ``` | country | value |
| pop\_type\_percent\_state | Checks that a state's population has a certain percentage of a specific pop type | ``` scope:example_state = {  pop_type_percent_state = {   target = pop_type:laborer   value <= 0.8  } } ``` | state | value |
| population\_by\_culture | Compare the current population of a target culture in the scoped state | ``` population_by_culture = {  target = cu:romanian  value > 2500 } ``` | state | value |
| potential\_diplomatic\_play\_power\_ratio | Check the expected power ratio between scope country side and target country side in a potential diplomatic play | ``` Attempts to predict which sides involved participants will take (if any) so doesn't just check 'starting strengths' potential_diplomatic_play_power_ratio = {  type = dp_open_market  target = c:BEL  state = c:BEL.capital  value > 1.0 } state and type are optional, will default to dp_open_market on target capital ``` | country | value |
| potential\_income | Compare the potential income of the country (weekly income plus tax waste) | ``` potential_income > 1000 ``` | country | value |
| power\_bloc\_rank | Compare a power bloc's rank | ``` power_bloc_rank <= 2 ``` | power\_bloc | value |
| power\_bloc\_share\_gdp | Compare the share of GDP of the country in scope against all its Power Bloc current members, returns -1 if not in a Power Bloc | ``` power_bloc_share_gdp > 0.2 ``` | country | value |
| power\_bloc\_share\_gdp\_with | Compare the share of GDP of the country in scope against all its Power Bloc members plus an additional country, returns -1 if not in a Power Bloc | ``` "power_bloc_share_gdp_with(scope:country) > 0.2" ``` | country | value |
| power\_bloc\_share\_gdp\_without | Compare the share of GDP of the country in scope against all its Power Bloc members minus one of the members, returns -1 if not in a Power Bloc | ``` "power_bloc_share_gdp_without(scope:country) > 0.2" ``` | country | value |
| power\_bloc\_share\_power\_projection | Compare the share of Power Projection of the country in scope against all its Power Bloc members, returns -1 if not in a Power Bloc | ``` power_bloc_share_power_projection > 0.2 ``` | country | value |
| power\_bloc\_share\_power\_projection\_with | Compare the share of Power Projection of the country in scope against all its Power Bloc members plus an additional country, returns -1 if not in a Power Bloc | ``` "power_bloc_share_power_projection_with(scope:country) > 0.2" ``` | country | value |
| power\_bloc\_share\_power\_projection\_without | Compare the share of Power Projection of the country in scope against all its Power Bloc members minus one of the members, returns -1 if not in a Power Bloc | ``` "power_bloc_share_power_projection_without(scope:country) > 0.2" ``` | country | value |
| power\_bloc\_share\_prestige | Compare the share of Prestige of the country in scope against all its Power Bloc members, returns -1 if not in a Power Bloc | ``` power_bloc_share_prestige > 0.2 ``` | country | value |
| power\_bloc\_share\_prestige\_with | Compare the share of Prestige of the country in scope against all its Power Bloc members plus an additional country, returns -1 if not in a Power Bloc | ``` "power_bloc_share_prestige_with(scope:country) > 0.2" ``` | country | value |
| power\_bloc\_share\_prestige\_without | Compare the share of Prestige of the country in scope against all its Power Bloc members minus one of the members, returns -1 if not in a Power Bloc | ``` "power_bloc_share_prestige_without(scope:country) > 0.2" ``` | country | value |
| power\_bloc\_total\_leading\_goods\_producers | Compare how many members are among the leading producers for all goods worldwide weighted by their position in the ranking. The top producer is weighted by MIN\_SPOT\_PRESTIGE\_AWARD and then each subsequent position is weighted by one less until. By default this means 1st counts as 3, 2nd as 2 and 3rd as 1. Any other positions as 0. | ``` power_bloc_total_leading_goods_producers > 15 ``` | power\_bloc | value |
| power\_bloc\_total\_leading\_goods\_producers\_with | Compare how many members are among the leading producers for all goods worldwide weighted by their position in the ranking, plus one additional country not currently in the power bloc. The top producer is weighted by MIN\_SPOT\_PRESTIGE\_AWARD and then each subsequent position is weighted by one less until. By default this means 1st counts as 3, 2nd as 2 and 3rd as 1. Any other positions as 0. | ``` "power_bloc_total_leading_goods_producers_with(scope:target) > 15" ``` | power\_bloc | value |
| power\_bloc\_total\_leading\_goods\_producers\_without | Compare how many members are among the leading producers for all goods worldwide weighted by their position in the ranking, minus one country that is currently in the power bloc. The top producer is weighted by MIN\_SPOT\_PRESTIGE\_AWARD and then each subsequent position is weighted by one less until. By default this means 1st counts as 3, 2nd as 2 and 3rd as 1. Any other positions as 0. | ``` "power_bloc_total_leading_goods_producers_without(scope:target) > 15" ``` | power\_bloc | value |
| power\_bloc\_worst\_economic\_dependence | If used in a power bloc scope, compare the member with the lowest economic dependence on the leader. | ``` power_bloc_worst_economic_dependence > 2.2 ``` | power\_bloc | value |
| power\_bloc\_worst\_economic\_dependence\_with | If used in a power bloc scope, compare the member with the lowest economic dependence on the leader. | ``` power_bloc_worst_economic_dependence > 2.2 ``` | power\_bloc | value |
| power\_bloc\_worst\_economic\_dependence\_without | If used in a power bloc scope, compare the member with the lowest economic dependence on the leader. | ``` power_bloc_worst_economic_dependence > 2.2 ``` | power\_bloc | value |
| power\_bloc\_worst\_infamy | If used in a power bloc scope, compare the Infamy value of the member country with the worst (highest) Infamy | ``` power_bloc_worst_infamy > 50 ``` | power\_bloc | value |
| power\_bloc\_worst\_infamy\_with | If used in a power bloc scope, compare the Infamy value of the member country with the worst (highest) Infamy | ``` power_bloc_worst_infamy > 50 ``` | power\_bloc | value |
| power\_bloc\_worst\_infamy\_without | If used in a power bloc scope, compare the Infamy value of the member country with the worst (highest) Infamy | ``` power_bloc_worst_infamy > 50 ``` | power\_bloc | value |
| power\_bloc\_worst\_leader\_relations | If used in a power bloc scope, compare the Relations value to the power bloc leader for the member country with the worst (lowest) Relations | ``` power_bloc_worst_leader_relations > 10 ``` | power\_bloc | value |
| power\_bloc\_worst\_leader\_relations\_with | If used in a power bloc scope, compare the Relations value to the power bloc leader for the member country with the worst (lowest) Relations | ``` power_bloc_worst_leader_relations > 10 ``` | power\_bloc | value |
| power\_bloc\_worst\_leader\_relations\_without | If used in a power bloc scope, compare the Relations value to the power bloc leader for the member country with the worst (lowest) Relations | ``` power_bloc_worst_leader_relations > 10 ``` | power\_bloc | value |
| power\_bloc\_worst\_leader\_religion\_population\_fraction | If used in a power bloc scope, compare the lowest population fraction in a member country that follows the leader's religion. | ``` power_bloc_worst_leader_religion_population_fraction > 10 ``` | power\_bloc | value |
| power\_bloc\_worst\_leader\_religion\_population\_fraction\_with | If used in a power bloc scope, compare the lowest population fraction in a member country that follows the leader's religion. | ``` power_bloc_worst_leader_religion_population_fraction > 10 ``` | power\_bloc | value |
| power\_bloc\_worst\_leader\_religion\_population\_fraction\_without | If used in a power bloc scope, compare the lowest population fraction in a member country that follows the leader's religion. | ``` power_bloc_worst_leader_religion_population_fraction > 10 ``` | power\_bloc | value |
| power\_bloc\_worst\_liberty\_desire | If used in a power bloc scope, compare the Liberty Desire value of the member country with the worst (highest) Liberty Desire | ``` power_bloc_worst_liberty_desire > 75 ``` | power\_bloc | value |
| power\_bloc\_worst\_liberty\_desire\_with | If used in a power bloc scope, compare the Liberty Desire value of the member country with the worst (highest) Liberty Desire | ``` power_bloc_worst_liberty_desire > 75 ``` | power\_bloc | value |
| power\_bloc\_worst\_liberty\_desire\_without | If used in a power bloc scope, compare the Liberty Desire value of the member country with the worst (highest) Liberty Desire | ``` power_bloc_worst_liberty_desire > 75 ``` | power\_bloc | value |
| power\_bloc\_worst\_progressiveness\_difference\_government\_type | If used in a power bloc scope, compare the total Progressiveness value difference for the member country with the worst (highest) difference in progressiveness between their Governance Principles and Distribution of Power Laws compared to the power bloc leader | ``` power_bloc_worst_progressiveness_compatibility_government_type > 100 ``` | power\_bloc | value |
| power\_bloc\_worst\_progressiveness\_difference\_government\_type\_with | If used in a power bloc scope, compare the total Progressiveness value difference for the member country with the worst (highest) difference in progressiveness between their Governance Principles and Distribution of Power Laws compared to the power bloc leader | ``` power_bloc_worst_progressiveness_compatibility_government_type > 100 ``` | power\_bloc | value |
| power\_bloc\_worst\_progressiveness\_difference\_government\_type\_without | If used in a power bloc scope, compare the total Progressiveness value difference for the member country with the worst (highest) difference in progressiveness between their Governance Principles and Distribution of Power Laws compared to the power bloc leader | ``` power_bloc_worst_progressiveness_compatibility_government_type > 100 ``` | power\_bloc | value |
| power\_projection\_value | Compare a ship's power projection | ``` power_projection_value >= 10 ``` | ship | value |
| predicted\_cohesion\_percentage\_with | Predicts the cohesion of a Power Bloc (as a fraction of 1) if it included target country as a member | ``` predicted_cohesion_percentage_with, = {  target = scope:other_country  value > 0.9 } ``` | power\_bloc | value |
| prefers\_law | Checks if the scoped interest group prefers the specified law to the comparison law |  | interest\_group |  |
| prestige | Compare prestige |  | country | value |
| primary\_cultures\_percent\_country | Checks that a country's population has a certain percentage of the country's primary cultures | ``` scope:example_country = {  primary_cultures_percent_country >= 0.2 } ``` | country | value |
| primary\_cultures\_percent\_state | Checks that a state's population has a certain percentage of the country's primary cultures | ``` scope:example_state = {  primary_cultures_percent_state >= 0.2 } ``` | state | value |
| primary\_role | Checks if the character's primary role is the specified role | ``` primary_role = role ``` | character |  |
| private\_ownership\_fraction | Compares the fraction of this building's levels that are privately owned | ```  private_ownership_fraction > 0.5 ``` | building | value |
| produced\_authority | Compares the produced authority of the scoped country |  | country | value |
| produced\_bureaucracy | Compares the produced bureaucracy of the scoped country |  | country | value |
| produced\_influence | Compares the produced influence of the scoped country |  | country | value |
| progressiveness | Compare the progressiveness of the law type in scope | ``` law_type:law_isolationism.progressiveness > 50 ``` | law\_type | value |
| prominence | Compares the character prominence | ``` prominence > 1 ``` | character | value |
| quality\_of\_life | Compares the quality of life of the given pop | ``` quality_of_life > 10 ``` | pop | value |
| radical\_fraction | Compares radical fraction in pops in state or country, all parameters except value are optional | ``` radical_fraction = {  value = <script_value>  pop_type = <key>  strata = <key>  culture = <key/scope>  religion = <key/scope> } ``` | country, state | value |
| radical\_population\_fraction | Compares the fraction of the population that are radicals in a given country | ``` radical_population_fraction > 0.2 ``` | country | value |
| real\_month | Compare to current real date month (Jan: 1, Dec: 12) | ``` real_month > 10 ``` | none | value |
| region\_score | Compares the aggregated AI strategy region score for the specified strategic region in country scope Returns 0 in case the country is player controled | ``` region_score = {  strategic_region = sr:region_key  value >= 300 }   "region_score(sr:region_key)" >= 300 ``` | country | value |
| relative\_authority | Compares the unused fraction of authority for the scoped country |  | country | value |
| relative\_bureaucracy | Compares the unused fraction of bureaucracy for the scoped country |  | country | value |
| relative\_export\_advantage | Compare to state goods relative export advantage | ``` relative_export_advantage > 0.1 ``` | state\_goods | value |
| relative\_import\_advantage | Compare to state goodsrelative import advantage | ``` relative_import_advantage > 0.1 ``` | state\_goods | value |
| relative\_influence | Compares the unused fraction of influence for the scoped country |  | country | value |
| relative\_infrastructure | Compares the infrastructure to infrastructure usage of a state | ``` relative_infrastructure > 1.1 ``` | state | value |
| religion\_percent\_country | Checks that a country's population has a certain percentage of a specific religion | ``` scope:example_country = {  religion_percent_country = {   target = rel:catholic   value <= 0.8  } } ``` | country | value |
| religion\_percent\_state | Checks that a state's population has a certain percentage of a specific religion | ``` scope:example_state = {  religion_percent_state = {   target = rel:catholic   value <= 0.8  } } ``` | state | value |
| remaining\_career\_length | Checks if the character's remaining career length meets a duration threshold. Role can be a specific database role, a role type, or omitted to use the role furthest from career end. | ``` remaining_career_length = {  role = general  years = 5 } ``` | character | value |
| remaining\_undepleted | Check remaining amount of resource, like gold mines in a state | ``` remaining_undepleted = {  type = bg_gold_mining  amount > 1 } ``` | state\_region | value |
| role\_priority | Compares the priority of the character role | ``` role_priority >= 10 ``` | character | value |
| ruler\_can\_have\_command | Checks if the country's government type allows its ruler to have command | ``` ruler_can_have_command = yes/no ``` | country | boolean |
| save\_temporary\_scope\_as | Saves current scope as a temporary target for use during the trigger execution. Cannot overwrite already saved scopes | ``` save_temporary_scope_as = <string> ``` | none |  |
| save\_temporary\_scope\_value\_as | Saves a numerical or bool value as an arbitrarily-named temporary target to be referenced later in the same trigger. Cannot overwrite already saved scope values | ``` save_temporary_scope_value_as = {  name = <string>  value = <script_value> } ``` | none |  |
| scaled\_debt | Compare value to a country's debt relative to debt ceiling | ``` scaled_debt = value ``` | country | value |
| scaled\_gold\_reserves | Compare value to a country's gold reserves relative to reserves limit | ``` scaled_gold_reserves = value ``` | country | value |
| scripted\_bar\_progress | Determines the progress of a scripted progress bar | ``` scripted_bar_progress = {  name = progress_bar_tag  value > 0.4 } ``` | journal\_entry | value |
| self\_ownership\_fraction | Compares the fraction of this building's levels that are owned by the building itself | ```  self_ownership_fraction > 0.5 ``` | building | value |
| shares\_heritage\_trait\_group\_with\_any\_primary\_culture | Checks if culture shares any trait group marked as 'heritage' with any of a country's primary cultures | ``` shares_heritage_trait_group_with_any_primary_culture = <country> ``` | culture | country |
| shares\_heritage\_trait\_group\_with\_culture | Checks if culture shares any trait group marked as 'heritage' with another culture | ``` shares_heritage_trait_group_with_culture = <culture> ``` | culture | culture |
| shares\_heritage\_trait\_group\_with\_religion | Checks if the religion shares any heritage trait group with another religion | ``` shares_heritage_trait_group_with_religion = <religion> ``` | religion | religion |
| shares\_heritage\_trait\_group\_with\_state\_religion | Checks if the religion shares any heritage trait group with a country's state religion | ``` shares_heritage_trait_group_with_state_religion = <country> ``` | culture | country |
| shares\_heritage\_trait\_with\_any\_primary\_culture | Checks if culture shares any trait marked as 'heritage' with any of a country's primary cultures | ``` shares_heritage_trait_with_any_primary_culture = <country> ``` | culture | country |
| shares\_heritage\_trait\_with\_culture | Checks if culture shares any trait marked as 'heritage' with another culture | ``` shares_heritage_trait_with_culture = <culture> ``` | culture | culture |
| shares\_heritage\_trait\_with\_religion | Checks if religion shares any trait marked as 'heritage' with another religion | ``` shares_heritage_trait_with_religion = <religion> ``` | religion | religion |
| shares\_heritage\_trait\_with\_state\_religion | Checks if the religion shares any heritage with a country's religion | ``` shares_heritage_trait_with_state_religion = <country> ``` | religion | country |
| shares\_language\_trait\_group\_with\_any\_primary\_culture | Checks if culture shares any trait group marked as 'language' with any of a country's primary cultures | ``` shares_language_trait_group_with_any_primary_culture = <country> ``` | culture | country |
| shares\_language\_trait\_group\_with\_culture | Checks if culture shares any trait group marked as 'language' with another culture | ``` shares_language_trait_group_with_culture = <culture> ``` | culture | culture |
| shares\_language\_trait\_with\_any\_primary\_culture | Checks if culture shares any trait marked as 'language' with any of a country's primary cultures | ``` shares_language_trait_with_any_primary_culture = <country> ``` | culture | country |
| shares\_language\_trait\_with\_culture | Checks if culture shares any trait marked as 'language' with another culture | ``` shares_language_trait_with_culture = <culture> ``` | culture | culture |
| shares\_tradition\_trait\_with\_any\_primary\_culture | Checks if culture shares any trait marked as 'tradition' with any of a country's primary cultures | ``` shares_language_trait_with_any_primary_culture = <country> ``` | culture | country |
| shares\_tradition\_trait\_with\_culture | Checks if culture shares any trait marked as 'tradition' with another culture | ``` shares_language_trait_with_culture = <culture> ``` | culture | culture |
| ship\_modification\_market\_demand\_ratio | Goods-weighted buy/sell ratio for the construction goods of the target ship modification, evaluated against the country-scope's market. | ``` "ship_modification_market_demand_ratio(scope:ship_modification_type) > 1.25" ``` | country | value |
| should\_set\_wargoal | Check if the country is lacking a primary wargoal in any diplomatic play it is part of |  | country | boolean |
| should\_show\_nudity | can nudity be shown? | ``` should_show_nudity = yes/no ``` | none | boolean |
| shrinking\_institution | Checks if the institution is shrinking | ``` expanding_institution = <scope/key> ``` | country |  |
| size\_weighted\_lost\_battles\_fraction | Determines the fraction of battles the target country has lost in the target war, weighted by manpower size of all battles in the war | ``` size_weighted_lost_battles_fraction = {  target = scope:war  value > 0.3 } add = "size_weighted_lost_battles_fraction(scope:war)" ``` | country | value |
| sol\_ranking | Compares a Country's Standard of Living Ranking (position) | ``` sol_ranking > 42 ``` | country | value |
| spawns\_characters\_to\_pool | Checks if the character role spawns characters to the pool | ``` spawns_characters_to_pool = yes/no ``` | character\_role | boolean |
| speed | Compare a ship's speed | ``` speed >= 10 ``` | ship | value |
| stall\_chance | Compares the current enactment stall chance in scope country (including values from enactment modifier) |  | country | value |
| stall\_chance\_for\_law | Compares the enactment stall chance in scope country for given law (including values from enactment modifier) | ``` stall_chance_for_law = {  target = scope:my_lawtype  value > 0.2  } ``` | country | value |
| stall\_chance\_for\_law\_without\_enactment\_modifier | Compares the enactment stall chance in scope country for given law but excludes values from enactment modifier | ``` stall_chance_for_law_without_enactment_modifier = {  target = scope:my_lawtype  value > 0.2 } ``` | country | value |
| stall\_chance\_without\_enactment\_modifier | Compares the current enactment stall chance in scope country but excludes values from enactment modifier |  | country | value |
| standard\_of\_living | Compares the standard of living of a given pop | ``` standard_of_living > 10 ``` | pop | value |
| starting\_manpower | Compares the starting manpower of a battle side | ``` starting_manpower > 25000 ``` | battle\_side | value |
| state\_average\_culture\_and\_religion\_pop\_acceptance | Average acceptance of state pops of a specific culture and religion. | ``` state_average_culture_and_religion_pop_acceptance = {  culture = cu:polish  religion = rel:catholic  value >=60 } ``` | state | value |
| state\_average\_culture\_pop\_acceptance | Average acceptance of state pops of a specific culture. | ``` state_average_culture_pop_acceptance = {  culture = cu:polish value  >=60 } ``` | state | value |
| state\_average\_religion\_pop\_acceptance | Average acceptance of state pops of a specific religion. | ``` state_average_religion_pop_acceptance = {  religion = rel:catholic  value >=60 } ``` | state | value |
| state\_cultural\_acceptance | Checks how accepted a pop of the target culture is in the scoped state | ```  state_cultural_acceptance = {  target = cu:french  value >= 50 ``` | state | value |
| state\_exports | Compare total units of exports from scope to target state (if set) or world state in general (if no state specified) | ``` state_exports = {  target = state scope (optional)  goods = key (optional)  value >= 100 } ``` | state | value |
| state\_goods\_cheaper | Checks if state goods is at least the specified percentage cheaper than base price | ``` state_goods_cheaper > <value> ``` | state\_goods | value |
| state\_goods\_consumption | Checks if state goods has the specified number of total consumption | ``` state_goods_consumption < <value> ``` | state\_goods | value |
| state\_goods\_delta | Checks if state has the specified goods delta (production - consumption) | ``` state_goods_delta < <value> ``` | state\_goods | value |
| state\_goods\_has\_local\_goods\_shortage | Check if state goods has a shortage in a state, but NOT in the whole market | ``` state_goods_has_local_goods_shortage = yes/no ``` | state\_goods | boolean |
| state\_goods\_pricier | Checks if state goods is at least the specified percentage more expensive than base price | ``` state_goods_pricier > <value> ``` | state\_goods | value |
| state\_goods\_production | Checks if state goods has the specified number of total production | ``` state_goods_production < <value> ``` | state\_goods | value |
| state\_has\_building\_group\_levels | Checks the sum of building levels for a building group in a state | ```  state_has_building_group_levels = {  type = bg_heavy_industry  value >= 100 } ``` | state | value |
| state\_has\_building\_levels | Checks the sum of building levels for a state | ``` state_has_building_levels >= 10 ``` | state | value |
| state\_has\_building\_type\_levels | Checks the sum of building levels for a building type in a state | ```  state_has_building_type_levels = {  target = bt:building_barracks  value >= 100 } ``` | state | value |
| state\_has\_goods\_shortage | Check if state has a shortage on any of its building inputs | ``` state_has_goods_shortage = yes/no ``` | state | boolean |
| state\_has\_national\_awakening | Checks if the scoped state is in a state region with an active national awakening map marker | ``` state_has_national_awakening = yes/no ``` | state | boolean |
| state\_imports | Compare total units of imports from target to scope state | ``` state_imports = {  target = state scope (optional)  goods = key (optional)  value >= 100 } ``` | state | value |
| state\_is\_eligible\_as\_mass\_migration\_target | Check if state can receive a mass migration at all. | ``` any_state = { state_is_eligible_as_mass_migration_target = yes } ``` | state | boolean |
| state\_population | Checks the total population of the scoped state | ``` state_population <= 250000 ``` | state | value |
| state\_religious\_acceptance | Checks how accepted a pop of the given religion is in the the scoped state | ```  state_religious_acceptance = {  target = rel:catholic  value >= 50 ``` | state | value |
| state\_trade | Compare total units of goods traded between scope state and target state (if set) or world state in general (if no state specified) | ``` state_trade = {  target = state scope (optional)  goods = key (optional)  value >= 100 } ``` | state | value |
| state\_unemployment\_rate | Checks the unemployment rate (percentage) in the scoped state | ``` state_unemployment_rate > 0.1 ``` | state | value |
| strata | Checks the strata of the scoped pop | ``` strata >= upper/middle/lower ``` | pop | value |
| subject\_can\_increase\_autonomy | Check if a subject can increase its autonomy | ``` subject_can_increase_autonomy = bool ``` | country | boolean |
| supply\_network\_strength | Compares the country's supply network strength (can exceed 1) | ``` supply_network_strength > 1.1 ``` | country | value |
| supply\_ship\_maintenance\_fulfillment | Compares the supply ship maintenance fulfillment ratio of a country | ``` supply_ship_maintenance_fulfillment < 1 ``` | country | value |
| switch | Switch on a trigger for the evaluation of another trigger with an optional fallback trigger. | ``` switch = {  trigger = simple_assign_trigger  case_1 = { <triggers> }  case_2 = { <triggers> }  case_n = { <triggers> }  fallback = { <triggers> } ``` | none |  |
| taking\_loans | Check if the country is currently running a weekly deficit and taking loans to compensate |  | country | boolean |
| target\_cohesion\_number | Compare the target Cohesion as a numeric value | ``` target_cohesion_number > 50 ``` | power\_bloc | value |
| target\_cohesion\_percentage | Compare the target Cohesion as a percentage of the maximum of a Power Bloc in scope | ``` target_cohesion_percentage > 0.5 ``` | power\_bloc | value |
| target\_is | Checks who the target of a diplomatic play is | ``` target_is = country ``` | diplomatic\_play | country |
| tax\_capacity | Checks the taxation capacity of the scoped state | ``` tax_capacity > 50 ``` | state | value |
| tax\_capacity\_usage | Checks the taxation capacity usage of the scoped state | ``` tax_capacity_usage > 50 ``` | state | value |
| tax\_level | Compares the overall tax level of scoped country. `very_low, low, medium, high, very_high`; returns same number as tax\_level\_value trigger | ``` tax_level = <level_term> ``` | country | value |
| tax\_level\_value | Compares the overall tax level integer value of scoped country. `0, 1, 2, 3, 4` | ``` income_tax_level_value = <level_num> ``` | country | value |
| tax\_waste | Compare the tax waste of the country | ``` tax_waste > 100 ``` | country | value |
| tenure\_in\_current\_power\_bloc\_days | Compare the number of days the country in scope has been a member of their current Power Bloc | ``` tenure_in_current_power_bloc_days > 720 ``` | country | value |
| tenure\_in\_current\_power\_bloc\_months | Compare the number of (whole) months the country in scope has been a member of their current Power Bloc | ``` tenure_in_current_power_bloc_months > 20 ``` | country | value |
| tenure\_in\_current\_power\_bloc\_weeks | Compare the number of (whole) weeks the country in scope has been a member of their current Power Bloc | ``` tenure_in_current_power_bloc_weeks > 12 ``` | country | value |
| tenure\_in\_current\_power\_bloc\_years | Compare the number of (whole) years the country in scope has been a member of their current Power Bloc | ``` tenure_in_current_power_bloc_years > 5 ``` | country | value |
| total\_expenses | Does the country have this amount of expenses, including from temporary sources | ``` total_expenses > 1000 ``` | country | value |
| total\_income | Does the country have this amount of income, including from temporary sources | ``` total_income > 1000 ``` | country | value |
| total\_population | Compares the total population of a given country | ``` total_population > 100000 ``` | country | value |
| total\_population\_including\_subjects | Compares the total population in the scope country and its subjects | ``` total_population_including_subjects > 40000000 ``` | country | value |
| total\_population\_including\_subjects\_share | Compares the total population in the scope country and its subjects' share of the global population | ``` total_population_including_subjects_share > 0.4 ``` | country | value |
| total\_population\_share | Compares the total population of a given country's share of the global population | ``` total_population_share > 0.02 ``` | country | value |
| total\_size | Compares the total size of the scoped pop | ``` total_size >= 3000 ``` | pop | value |
| total\_urbanization | Compares the total urbanization of a given state | ``` total_urbanization > 5 ``` | state | value |
| total\_used\_principle\_levels | Compare a power bloc's total number of active principle levels | ``` power_bloc = {  total_used_principle_levels >= 10 } ``` | power\_bloc | value |
| trait\_value | Compares the character's total trait value | ``` trait_value < experience_level ``` | character | value |
| transfer\_money\_gross\_income | Does the country have this amount of gross income (income before expenses) from money transfer treaties | ``` transfer_money_gross_income > 1000 ``` | country | value |
| transfer\_money\_net\_income | Does the country have this amount of net income (income after expenses) from money transfer treaties | ``` transfer_money_net_income > 1000 ``` | country | value |
| trigger\_else | Evaluates the display\_triggers if the triggers of preceding 'trigger\_if' or 'trigger\_else\_if' are not met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else = { <display_triggers> } ``` | none |  |
| trigger\_else\_if | Evaluates the display\_triggers if the triggers of the preceding `trigger\_if` or `trigger\_else\_if` are not met and its own trigger of the limit is met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } trigger_else_if = {  limit = { <triggers> }  <display_triggers> } ``` | none |  |
| trigger\_if | Evaluates the display\_triggers if the triggers of the limit are met | ``` trigger_if = {  limit = { <triggers> }  <display_triggers> } ``` | none |  |
| turmoil | Compares the turmoil in a given state, i.e. the fraction of Radicals | ``` turmoil > 0.2 ``` | state | value |
| unit\_formation\_has\_commander | Checks if the formation of the scoped combat unit has the provided character as one of its commanders | ``` unit_formation_has_commander = <character> ``` | new\_combat\_unit | character |
| used\_principle\_slots | Compare a power bloc's used principle slot count | ``` power_bloc = {   used_principle_slots >= 2 } ``` | power\_bloc | value |
| variable\_list\_size | Checks the size of a variable list | ``` variable_list_size = {  name = <variable name>  target >= <value> } ``` | none |  |
| war\_exhaustion\_from\_acceptance\_of\_dead | Determines the war exhaustion a country gets from their degree of cultural acceptance of manpower killed in the war, regardless of what side they were on | ``` war_exhaustion_from_acceptance_of_dead = {  target = root  value >= 0.4 } ``` | war | value |
| war\_has\_active\_peace\_deal | True if the war has a proposed peace deal | ``` war_has_active_peace_deal = bool ``` | war | boolean |
| war\_participant\_has\_war\_goal\_of\_type\_against | Checks if scope country holds a wargoal of a specific type targeting a specific country in any war | ``` war_participant_has_war_goal_of_type_against = {  type = <wargoal type key>  target = <country scope> } ``` | country |  |
| war\_side\_has\_war\_goal\_of\_type\_against | Checks if any country on the same side as scope country in any war holds a wargoal of a specific type targeting a specific country | ``` war_side_has_war_goal_of_type_against = {  type = <wargoal type key>  target = <country scope> } ``` | country |  |
| was\_coerced\_with\_naval\_threat | Check if the scoped treaty was accepted through threatening naval hostilities | ``` was_coerced_with_naval_threat = yes/no ``` | treaty | boolean |
| was\_exiled | Checks whether the scoped character was exiled | ``` was_exiled = yes/no ``` | character | boolean |
| was\_formed\_from | Check if a formed country previously had a specific definition | ``` was_formed_from = <tag> ``` | country |  |
| wealth | Checks if a pop has a certain amount of wealth | ``` wealth = value ``` | pop | value |
| wealth\_share | Checks the wealth political strength share of a pop type, religion or culture in a country or state. Exactly one of pop\_type, religion or culture must be specified. | ``` wealth_share = { 	pop_type/religion/culture = <key/scope>   	value <compare operator> <value>   } ``` | country, state | value |
| weekly\_profit | Checks whether the profits the building has made this week are above or below a given value | ``` weekly_profit >= 20.0 ``` | building | value |
| weighted\_calc\_true\_if | Returns true if the sum of weights of fulfilled sub-triggers amount to the specified sum | ``` weighted_calc_true_if = {  amount = 10  5 = { <trigger> }  15 = { <trigger> }  7 = { <trigger> } } ``` | none |  |
| workforce | Compares the workforce size of the scoped pop | ``` workforce >= 1000 ``` | pop | value |
| world\_market\_access | Checks the world market access of the scoped state | ``` world_market_access > 0.8 ``` | state | value |
| world\_market\_delta | Checks if goods has the specified number of exports minus imports in the world market | ``` world_market_delta < <value> ``` | goods | value |
| world\_market\_exports | Checks if goods has the specified number of exports in the world market | ``` world_market_exports < <value> ``` | goods | value |
| world\_market\_imports | Checks if goods has the specified number of imports in the world market | ``` world_market_imports < <value> ``` | goods | value |
| would\_accept\_diplomatic\_action | Checks if a country would accept a diplomatic action proposed by another country | ``` would_accept_diplomatic_action = {  actor = <country scope>  type = <action type key>  first_state = <state scope, optional>  second_state = <state scope, optional>  modify_acceptance = <script value, optional> } if set, modify_acceptance will be added to their acceptance score, to allow for checking if they would accept with an obligation, etc ``` | country |  |
| would\_sponsor\_amendment | Check if scoped IG would sponsor an amendment of a given type | ``` would_sponsor_amendment = <amendment type scope> ``` | interest\_group | amendment\_type |
| year | Compares the current year of the game | ``` year > 1850 ``` | none | value |
| years\_of\_service | Compares the commander's years of service | ``` years_of_service > 1 ``` | character | value |
| years\_to\_incorporate | Checks how many years it would take for target country to incorporate scope state | ``` years_to_incorporate = {  target = c:FRA  value > 5 } ``` | state | value |

## References
---

- To update these tables, see Module:Script docs/Triggers

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • Triggers  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
