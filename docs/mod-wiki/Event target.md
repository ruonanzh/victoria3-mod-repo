# Event target

This article has been verified for the current version (1.13) of the game.

*This page discusses the game script element called "event targets". For pop-up narrative content events, see [Event modding](./Event modding.md); for lists and details of events that exist in Victoria 3, see [Events](https://vic3.paradoxwikis.com/Events).*

*See also: [Effect](./Effect.md), [Trigger](./Trigger.md)*

**Event targets** are object, [scope](./Scope.md), or value references used in Victoria 3's game script. Most event targets can be used as target of an [effect](./Effect.md) or [trigger](./Trigger.md) when it refers to an appropriate scope, object, or value. Similarly, event targets can be used as scopes or the left side of a value comparison.

Event targets that represent scopes can generally be used in dot chains as for example: `p:xF98DA3.state.owner.capital` which looks at the specified province, then chains to that province's state, that state's owning country, and finally to that country's capital state.

## Data event targets
These event targets require additional input, such as a scripted type or specified scope. This generally takes the form of `event_target:data`; some use the format `event_target(data)`, this type must be enclosed in quotation marks, including any dot scoped elements, e.g. `"scope:power_bloc.power_bloc_leader.market.market_number_goods_shortages_with(scope:with_country)"`.

List of data event targets

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

## Value event targets
These event targets return a numerical or boolean value. This allows them to be used in comparisons or script values.

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

## Wild card event targets
These event targets refer to a type of event target, rather than a specifically named event target. For example, the event target `compare_value` refers to any simple, inline [trigger](./Trigger.md) which checks a numerical value such as `free_arable_land`. Similarly, `named_script_value` refers to the calculated [script value](./Script value.md) by its name.

List of wild card event targets

| Event target | Description | From scope | To scope |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | varies | value |
| compare\_value | A comparison trigger that will return its value in the context it is used eg: root.gold | varies | value |
| named\_script\_value | A script value that will calculate and returns its value in the context it is used | none | color, value |
| value | A numeric literal value eg: 1, 5.2, -6 | none | value |

## Event targets by scope
The following tables list event targets by their required scope. Some event targets are repeated as they can be used in multiple scopes. Event targets that can be used in any scope are indicated with `none`.

### None scope/scopeless
List of none event targets

| Event target | Description | To scope |
| amendment\_type | Scope to an amendment type from its name (amendment\_type:key) | amendment\_type |
| array\_define | Reference the value of a numeric value in an array define: array\_define:Namespace|Name|Index. Index is 0-based. | value |
| bg | Scope to a building group from its name (bg:bg\_logging) | building\_group |
| bt | Scope to a building type, example: bt:building\_tooling\_workshops | building\_type |
| c | Scope to the country with specified tag, example: c:GBR | country |
| catalyst\_type | Scope to a diplomatic catalyst type from its name (catalyst\_type:catalyst\_relations\_level\_improved) | diplomatic\_catalyst\_type |
| cd | Scope to the country definition with specified tag, example: cd:FRA | country\_definition |
| company\_type | Scope to a company type from its name (company\_type:company\_rheinmetall) | company\_type |
| cu | Scope to the culture with specified key, example: cu:welsh | culture |
| define | Reference the value of a numeric or color define: define:Namespace|Name | value |
| flag | A localization key, ex. flag:the\_boss | flag |
| g | Scope to the goods with specified key, example: g:iron | goods |
| global\_productivity | Scope to global productivity values (example: global\_productivity:high\_threshold) | value |
| global\_var | Reference a previous set global variable via its name eg: global\_var:important\_thing | varies |
| harvest\_condition\_type | Scope to a harvest condition type from its name (harvest\_condition\_type:drought) | harvest\_condition\_type |
| i | Scope to ideology specified by key, example: i:ideology\_patriarchal | ideology |
| identity | Scope to the power bloc identity from its name (identity:key) | power\_bloc\_identity |
| ideology | Dual use  1. Scope to a ideology from its name (ideology:ideology\_anarchist) 2. Scope to the ideology of the scoped character | ideology |
| ig\_trait | Scope to the Interest Group trait with specified key, example: ig\_trait:ig\_trait\_xenophobia | interest\_group\_trait |
| ig\_type | Scope to an interest group type, example: ig\_type:ig\_landowners | interest\_group\_type |
| infamy\_threshold | Scope to infamy level threshold for comparison purposes (infamy\_threshold:infamous) | value |
| is\_setup | Scope to true/false if gamestate is being initialized! | boolean |
| je\_tutorial | Scope to the active tutorial lesson's journal entry (do not use this outside tutorial) | journal\_entry |
| law\_type | Scope to a law type from its name (law\_type:law\_protected\_speech) or from a scoped law | law\_type |
| lobby\_type | Scope to a political lobby type from its name (lobby\_type:lobby\_pro\_country) | political\_lobby\_type |
| local\_var | Reference a previous set local variable via its name eg: local\_var:person\_of\_interest | varies |
| mobilization\_option | Scope to a mobilization option from its name (mobilization\_option:key) | mobilization\_option |
| movement\_type | Scope to a political movement type from its name (movement\_type:movement\_religious\_majority) | political\_movement\_type |
| named\_script\_value | A script value that will calculate and returns its value in the context it is used | color, value |
| no | Boolean literal for false values | boolean |
| p | Scope to province specified by hex key, example: p:x1A6E5B | province |
| play\_type | Scope to a diplomatic play type from its name (play\_type:dp\_default\_treaty\_article) | diplomatic\_play\_type |
| pop\_type | Scope to a pop type from its name (pop\_type:laborers) | pop\_type |
| prev | The previous scope | varies |
| principle | Scope to the power bloc principle from its name (principle:key) | power\_bloc\_principle |
| principle\_group | Scope to the power bloc principle group from its name (principle\_group:key) | power\_bloc\_principle\_group |
| rank\_value | Scope to rank value of a particular country rank (rank\_value:great\_power) | value |
| rel | Scope to the religion with specified key, example: rel:catholic | religion |
| relations\_threshold | Scope to relations threshold level for comparison purposes (relations\_threshold:warm) | value |
| root | The head of the current top scope eg: receiver of an event, taker of a decision | varies |
| s | Scope to state region specified by key, example: s:STATE\_UTAH | state\_region |
| scope | Reference a previously saved scope via its name eg: scope:target | varies |
| ship\_group | Scope from a ship to its group or Scope to a ship group from its name (ship\_group:ship\_group\_capital\_ships) | ship\_group |
| ship\_type | Scope to a ship type from its name (ship\_type:ship\_type\_frigate) | ship\_type |
| sr | Scope to the strategic region of specified key, example: sr:region\_persia | strategic\_region |
| strait\_type | Scope to a strait type from its name (strait\_type:key) | strait\_type |
| tension\_threshold | Scope to tension level threshold for comparison purposes (tension\_threshold:warm) | value |
| this | The current scope | varies |
| unit\_type | Scope to a combat unit type from its name (unit\_type:key) | combat\_unit\_type |
| value | A numeric literal value eg: 1, 5.2, -6 | value |
| yes | Boolean literal for true values | boolean |

### Battle scope
List of battle event targets

| Event target | Description | To scope |
| attacker\_side | Scope from a battle to the BattleSide corresponding to the attacker | battle\_side |
| defender\_side | Scope from a battle to the BattleSide corresponding to the defender | battle\_side |
| front | Scope to a front from various scopes  - From a battle to the front where it takes place - From a character to the front where they are at or travelling towards - From a military formation to the front it is currently at - From a province to the front that contains it - From an invasion to the invasion front | front |

### Building scope
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

### Character scope
List of character event targets

| Event target | Description | To scope |
| average\_progressiveness | Get the average progressiveness of the scoped character or interest group | value |
| command\_limit\_num\_units | Get the baseline number of units from their military formation a commander would normally get, depending on their command limit | value |
| commander\_military\_formation | Scope to the Military Formation of a Character. | military\_formation |
| culture | Scope to pop's or character's culture | culture |
| front | Scope to a front from various scopes  - From a battle to the front where it takes place - From a character to the front where they are at or travelling towards - From a military formation to the front it is currently at - From a province to the front that contains it - From an invasion to the invasion front | front |
| home\_country | Scopes to the home country of an exile | country |
| ideology | Dual use  1. Scope to a ideology from its name (ideology:ideology\_anarchist) 2. Scope to the ideology of the scoped character | ideology |
| interest\_group | Scope to the interest group of the character! | interest\_group |
| interest\_group\_type | Scope to the type of the scoped character's interest group | interest\_group\_type |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | boolean, value |
| num\_active\_ships | Get the number of active ships for a country, commander or military formation OR Get the number of active ships for military formations in the province that are allied to the specified country | value |
| num\_active\_ships\_in\_battle | Get the number of active ships in battle for a country, commander or military formation OR Get the number of active ships in battle for military formations in the province that are allied to the specified country | value |
| num\_active\_ships\_not\_in\_battle | Get the number of active ships not in battle for a country, commander or military formation OR Get the number of active ships not in battle for military formations in the province that are allied to the specified country | value |
| num\_battalions | Returns the number of active battalions under a commander | value |
| num\_mobilized\_battalions | Returns the number of fully mobilized units under a General | value |
| num\_non\_destroyed\_ships | Get the number of non-destroyed ships for a country, commander or military formation OR Get the number of non-destroyed ships for military formations in the province that are allied to the specified country | value |
| num\_non\_destroyed\_ships\_in\_battle | Get the number of non-destroyed ships in battle for a country, commander or military formation OR Get the number of non-destroyed ships in battle for military formations in the province that are allied to the specified country | value |
| num\_non\_destroyed\_ships\_not\_in\_battle | Get the number of non-destroyed ships not in battle for a country, commander or military formation OR Get the number of non-destroyed ships not in battle for military formations in the province that are allied to the specified country | value |
| num\_ships | Get the number of ships for a country, commander or military formation OR Get the number of ships for military formations in the province that are allied to the specified country | value |
| num\_ships\_in\_battle | Get the number of ships in battle for a country, commander or military formation OR Get the number of ships in battle for military formations in the province that are allied to the specified country | value |
| num\_ships\_not\_in\_battle | Get the number of ships not in battle for a country, commander or military formation OR Get the number of ships not in battle for military formations in the province that are allied to the specified country | value |
| num\_units | Get the number of active units for a commander or military formation Get the number of active units for military formations in the province that are allied to the specified country | value |
| num\_units\_in\_battle | Get the number of active units in battle for a commander or military formation Get the number of active units in battle for military formations in the province that are allied to the specified country | value |
| num\_units\_not\_in\_battle | Get the number of active units not in battle for a commander or military formation Get the number of active units not in battle for military formations in the province that are allied to the specified country | value |
| num\_units\_share | Share of units a commander has considering his command limit. Example: if the character has 30 Command Limit, the fleet has 60 total Command Limit, and the formation has 50 total flotillas, then the character should get 25 flotillas for their battle) | value |
| opposing\_commander | Scope from a character in battle to the character on the other side of the battle | character |
| owner | Scope to the owner country of object | country |
| political\_movement | - If used in a character scope, scope to the political movement that character supports. - If used in a revolution civil war scope, scope to the movement that started the revolution. - If used in an interest group scope, scope to the group's dominant movement. | political\_movement |
| popularity | Get the scoped character's popularity, normally ranging between -100 and +100 | value |
| religion | Scope to country or country definition's primary religion or pop religion | religion |

### Country scope
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

### Diplomacy scopes
List of diplomatic play event targets

| Event target | Description | To scope |
| initiator | Scope to the initiator of the object | country |
| region | Scope to the strategic region of the object! | strategic\_region |
| target | Scope to the target of the object | varies |
| type | Scope from an object to its type | amendment\_type, building\_type, company\_type, diplomatic\_play\_type, harvest\_condition\_type, institution\_type, interest\_group\_type, law\_type, political\_movement\_type, ship\_type, strait\_type |
| war | Scope from a diplomatic play to its war | war |

List of diplomatic pact event targets

| Event target | Description | To scope |
| diplomatic\_pact\_other\_country | Scope to the other country of the diplomatic pact in scope, example: diplomatic\_pact\_other\_country(root) | country |
| first\_country | Scope to the first\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |
| second\_country | Scope to the second\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |

List of diplomatic relations event targets

| Event target | Description | To scope |
| player\_owed\_obligation\_days\_left | Scope to number of days left on an obligation in diplomatic relations scope (example: obligation\_days\_left >= 2) | value |
| scope\_relations | Scope to relations value in diplomatic relations scope (example: scope\_relations >= 2) | value |
| scope\_tension | Scope to tension value in diplomatic relations scope (example: scope\_tension >= 2) | value |
| total\_pirated\_trade\_value | Scope to the total average weekly base value of goods pilfered via piracy between two countries in a diplomatic relations scope (example: total\_pirated\_trade\_value >= 100) | value |

### Goods scopes
List of goods event targets

| Event target | Description | To scope |
| base\_price | Get the base price of the scoped good | value |

List of market goods event targets

| Event target | Description | To scope |
| ai\_treaty\_export\_value | Scope to target country AI desire to export scoped market good (example: value = ai\_market\_export\_value:root) | value |
| ai\_treaty\_import\_value | Scope to target country AI desire to import scoped market good through treaties (example: value = ai\_market\_import\_value:root) | value |
| ai\_treaty\_trade\_value | Scope to target country AI desire to import and export scoped market good (example: value = ai\_market\_trade\_value:root) | value |
| goods | Scope to the goods traded by a trade route | goods |
| largest\_exporting\_market | Scope to the largest exporting market for the scope market good to the local market | market |
| largest\_importing\_market | Scope to the largest importing market for the scope market good from the local market | market |
| market | Scope to the market of the object | market |
| market\_export\_cap | Get the maximum amount of goods the market can export based on it's production of the scoped MarketGoods | value |
| market\_import\_cap | Get the maximum amount of goods the market can import based on it's consumption of the scoped MarketGoods | value |
| owner | Scope to the owner country of object | country |
| treaty\_exports | Get the current number of treaty (NOT world market) exports of the good to the market of the scoped MarketGoods | value |
| treaty\_imports | Get the current number of treaty (NOT world market) imports of the good to the market of the scoped MarketGoods | value |

List of state goods event targets

| Event target | Description | To scope |
| goods | Scope to the goods traded by a trade route | goods |
| market | Scope to the market of the object | market |

### Law scope
List of law event targets

| Event target | Description | To scope |
| currently\_active\_law\_in\_group | Scope from a law to the currently active law in that group | law |
| imposer\_of\_law | Scope from a country to the country currently imposing a law on them | country |
| law\_type | Scope to a law type from its name (law\_type:law\_protected\_speech) or from a scoped law | law\_type |
| owner | Scope to the owner country of object | country |
| type | Scope from an object to its type | amendment\_type, building\_type, company\_type, diplomatic\_play\_type, harvest\_condition\_type, institution\_type, interest\_group\_type, law\_type, political\_movement\_type, ship\_type, strait\_type |

### Market scope
List of market event targets

| Event target | Description | To scope |
| market | Scope to the market of the object | market |
| mg | Scope from a market to the MarketGoods with the specified key, (example: mg:tools) | market\_goods |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | boolean, value |
| owner | Scope to the owner country of object | country |
| participants | Get the total number of participating countries in the scoped market | value |
| state | Scope to the state of the object | state |
| trade\_center | Scope to the trade center state of the market! | state |

### Pop scope
List of pop event targets

| Event target | Description | To scope |
| culture | Scope to pop's or character's culture | culture |
| home\_country | Scopes to the home country of an exile | country |
| owner | Scope to the owner country of object | country |
| pop\_weight\_modifier\_scale | Get the Pop's weight modifier scale multiplier | value |
| religion | Scope to country or country definition's primary religion or pop religion | religion |
| state | Scope to the state of the object | state |
| workplace | Scope to the workplace of a pop | building |

### Power bloc scope
List of power bloc event targets

| Event target | Description | To scope |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | boolean, value |
| num\_mandates | Scope to the number of available mandates of the scoped power bloc (power\_bloc.num\_mandates > 0) | value |
| power\_bloc\_leader | Scope to the leader country of the scoped power bloc | country |
| power\_struggle\_contender | Scope to the contender country if there is a power struggle | country |

### State scope
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

### Treaty scopes
List of treaty event targets

| Event target | Description | To scope |
| amended\_treaty | Scope to the treaty the scoped treaty is amending | treaty |
| binding\_period | Get the original binding period in days when the treaty was signed for the scoped treaty | value |
| enforced\_on\_country | Scope to the enforced\_on\_country of an enforced treaty | country |
| enforcer\_country | Scope to the enforcer\_country of an enforced treaty | country |
| first\_country | Scope to the first\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |
| remaining\_binding\_period | Get the current remaining binding period in days for the scoped treaty | value |
| second\_country | Scope to the second\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |

List of treaty article event targets

| Event target | Description | To scope |
| first\_country | Scope to the first\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |
| input\_building\_type | Scope to the building type input in a treaty article | building\_type |
| input\_company | Scope to the company input in a treaty article | company |
| input\_country | Scope to the country input in a treaty article | country |
| input\_goods | Scope to the goods input in a treaty article | goods |
| input\_law | Scope to the law input in a treaty article | law\_type |
| input\_market\_goods | Scope to the market goods input in a treaty article (example: input\_market\_goods:root) | market\_goods |
| input\_quantity | Scope to the quantity input in a treaty article | value |
| input\_ship | Scope to the ship input in a treaty article | ship |
| input\_state | Scope to the state input in a treaty article | state |
| input\_strategic\_region | Scope to the strategic region input in a treaty article | strategic\_region |
| second\_country | Scope to the second\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |
| shipping\_lane | Scope to the shipping lane for the military formation, or treaty article (goods transfer) | shipping\_lanes |
| source\_country | Scope to the source\_country of any of:  1. treaty article (for directed article types only) 2. treaty article options (for directed article types only) | country |
| target\_country | Scope to the target\_country of any of:  1. treaty article (for directed article types only) 2. treaty article options (for directed article types only) | country |
| treaty | Scope to the treaty a treaty article belongs to | treaty |

List of treaty article options event targets

| Event target | Description | To scope |
| first\_country | Scope to the first\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |
| input\_building\_type | Scope to the building type input in a treaty article | building\_type |
| input\_company | Scope to the company input in a treaty article | company |
| input\_country | Scope to the country input in a treaty article | country |
| input\_goods | Scope to the goods input in a treaty article | goods |
| input\_law | Scope to the law input in a treaty article | law\_type |
| input\_market\_goods | Scope to the market goods input in a treaty article (example: input\_market\_goods:root) | market\_goods |
| input\_quantity | Scope to the quantity input in a treaty article | value |
| input\_ship | Scope to the ship input in a treaty article | ship |
| input\_state | Scope to the state input in a treaty article | state |
| input\_strategic\_region | Scope to the strategic region input in a treaty article | strategic\_region |
| second\_country | Scope to the second\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |
| source\_country | Scope to the source\_country of any of:  1. treaty article (for directed article types only) 2. treaty article options (for directed article types only) | country |
| target\_country | Scope to the target\_country of any of:  1. treaty article (for directed article types only) 2. treaty article options (for directed article types only) | country |

### War scope
List of War event targets

| Event target | Description | To scope |
| attacker\_warleader | Scope to the attacker warleader of a war | country |
| defender\_warleader | Scope to the defender warleader of a war | country |
| diplomatic\_play | Scope from a war to its diplomatic play | diplomatic\_play |

## All event targets
List of event targets

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
| amendment\_type | Scope to an amendment type from its name (amendment\_type:key) | none | amendment\_type |
| army\_size | Number of battalions of scope country, excluding currently raised conscripts. | country | value |
| army\_size\_including\_conscripts | Number of battalions of scope country, including currently raised conscripts. | country | value |
| army\_size\_including\_raised\_conscripts | Number of battalions of scope country, including currently raised conscripts but excluding unraised conscripts. | country | value |
| array\_define | Reference the value of a numeric value in an array define: array\_define:Namespace|Name|Index. Index is 0-based. | none | value |
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
| bg | Scope to a building group from its name (bg:bg\_logging) | none | building\_group |
| binding\_period | Get the original binding period in days when the treaty was signed for the scoped treaty | treaty, treaty\_options | value |
| bt | Scope to a building type, example: bt:building\_tooling\_workshops | none | building\_type |
| building | Scope to the related building | new\_combat\_unit | building |
| building\_levels | Get the total number of non-subsistence building levels of the scoped country | country | value |
| c | Scope to the country with specified tag, example: c:GBR | none | country |
| cached\_ai\_coastal\_population | Scope to total coastal population recorded in AI spending variables (example: value = cached\_ai\_coastal\_population) | country | value |
| cached\_ai\_incorporated\_coastal\_population | Scope to total incorporated coastal population recorded in AI spending variables (example: value = cached\_ai\_incorporated\_coastal\_population) | country | value |
| cached\_ai\_incorporated\_population | Scope to total incorporated population recorded in AI spending variables (example: value = cached\_ai\_incorporated\_population) | country | value |
| cached\_ai\_overseas\_subject\_population | Scope to total population in direct non-adjacent subjects recorded in AI spending variables (example: value = cached\_ai\_overseas\_subject\_population) | country | value |
| cached\_ai\_subject\_population | Scope to total population in direct subjects recorded in AI spending variables (example: value = cached\_ai\_subject\_population) | country | value |
| cached\_ai\_total\_population | Scope to total population recorded in AI spending variables (example: value = cached\_ai\_total\_population) | country | value |
| cached\_ai\_unincorporated\_coastal\_population | Scope to total unincorporated coastal population recorded in AI spending variables (example: value = cached\_ai\_unincorporated\_coastal\_population) | country | value |
| cached\_ai\_unincorporated\_population | Scope to total unincorporated population recorded in AI spending variables (example: value = cached\_ai\_unincorporated\_population) | country | value |
| capital | Scope to the capital state of a country | country | state |
| catalyst\_type | Scope to a diplomatic catalyst type from its name (catalyst\_type:catalyst\_relations\_level\_improved) | none | diplomatic\_catalyst\_type |
| cd | Scope to the country definition with specified tag, example: cd:FRA | none | country\_definition |
| civil\_war | Scope to the civil war started by the scoped (revolutionary) political movement. | political\_movement | civil\_war |
| civil\_war\_origin\_country | Scope to the origin country of a civil war country | country | country |
| colonial\_growth\_per\_colony | Scope to the country's colonial growth per colony value (example: colonial\_growth\_per\_colony > 0) | country | value |
| combat\_width | Scope to combat width multiplier of scope province | province | value |
| command\_limit\_num\_units | Get the baseline number of units from their military formation a commander would normally get, depending on their command limit | character | value |
| commander | Scope from a military formation to its commander character | military\_formation | character |
| commander\_military\_formation | Scope to the Military Formation of a Character. | character | military\_formation |
| company | Scope to the scoped country's company of the named company type (company:company\_rheinmetall) | country | company |
| company\_type | Scope to a company type from its name (company\_type:company\_rheinmetall) | none | company\_type |
| compare\_complex\_value | A comparison trigger that needs a parsable string parameter that will return its value in the context it is used eg: scope:root.number\_of(armies) | varies | value |
| compare\_value | A comparison trigger that will return its value in the context it is used eg: root.gold | varies | value |
| controller | Scope to the controller of the object | province, state | country |
| country | Scope to the country of a military formation or ship | military\_formation, ship | country |
| country\_definition | Scope to country's definition | country | country\_definition |
| credit | Scope to the current amount of max credit the country can take | country | value |
| cu | Scope to the culture with specified key, example: cu:welsh | none | culture |
| culture | Scope to pop's or character's culture | character, new\_combat\_unit, political\_movement, pop | culture |
| current\_hq | Returns the current HQ of the scoped military formation (may not be valid if the formation is not currently stationed in an HQ) | military\_formation | hq |
| currently\_active\_law\_in\_group | Scope from a law to the currently active law in that group | law | law |
| currently\_enacting\_law | Scope from a country to the law that they're currently enacting | country | law |
| decree\_cost | Scope to a state's cost for a certain decree authority > decree\_cost:decree\_road\_maintaintenance | state | value |
| defender\_side | Scope from a battle to the BattleSide corresponding to the defender | battle | battle\_side |
| defender\_warleader | Scope to the defender warleader of a war | war | country |
| defense | Returns the unit's defense rating (including impact from their commander) | new\_combat\_unit | value |
| define | Reference the value of a numeric or color define: define:Namespace|Name | none | value |
| demoralized | Returns the unit's number of demoralized manpower | new\_combat\_unit | value |
| detection | Links from a fleet scope to the total detection of the ships in the fleet | military\_formation | value |
| diplomatic\_pact\_expense\_ratio | Scope to the ratio of diplomatic pact expenses to income for this country, clamped 0-1 (example: value = diplomatic\_pact\_expense\_ratio) | country | value |
| diplomatic\_pact\_other\_country | Scope to the other country of the diplomatic pact in scope, example: diplomatic\_pact\_other\_country(root) | diplomatic\_pact | country |
| diplomatic\_play | Scope from a war to its diplomatic play | war | diplomatic\_play |
| enforced\_on\_country | Scope to the enforced\_on\_country of an enforced treaty | treaty | country |
| enforcer\_country | Scope to the enforcer\_country of an enforced treaty | treaty | country |
| executive | Scope from a company to its executive character | company | character |
| first\_country | Scope to the first\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | diplomatic\_pact, treaty, treaty\_article, treaty\_article\_options, treaty\_options | country |
| flag | A localization key, ex. flag:the\_boss | none | flag |
| flagship | Get the flagship of the scoped country | country | ship |
| front | Scope to a front from various scopes  - From a battle to the front where it takes place - From a character to the front where they are at or travelling towards - From a military formation to the front it is currently at - From a province to the front that contains it - From an invasion to the invasion front | battle, character, invasion, military\_formation, province | front |
| front\_length | Returns the number of provinces in Front | front | value |
| g | Scope to the goods with specified key, example: g:iron | none | goods |
| gdp | Get the scoped country's yearly predicted GDP | country, state | value |
| get\_ruler\_for | Scopes from country to a character that would be ruler, under the given transfer of power type  - get\_ruler\_for:parliamentary\_elective = { effects... } | country | character |
| global\_gdp | Get the global yearly predicted GDP | none | value |
| global\_productivity | Scope to global productivity values (example: global\_productivity:high\_threshold) | none | value |
| global\_var | Reference a previous set global variable via its name eg: global\_var:important\_thing | none | varies |
| goal\_value | Scope to the journal entry's goal value | journal\_entry | value |
| goods | Scope to the goods traded by a trade route | market\_goods, state\_goods | goods |
| government\_size | Get the scoped country's current number of Parties & independent IGs in government | country | value |
| group | Scope from a building object or type to its group | building, building\_type | building\_group |
| harvest\_condition\_type | Scope to a harvest condition type from its name (harvest\_condition\_type:drought) | none | harvest\_condition\_type |
| heir | Scope to the heir of a country | country | character |
| home\_country | Scopes to the home country of an exile | character, pop | country |
| home\_hq | Returns the home HQ of the scoped military formation | military\_formation | hq |
| i | Scope to ideology specified by key, example: i:ideology\_patriarchal | none | ideology |
| identity | Scope to the power bloc identity from its name (identity:key) | none | power\_bloc\_identity |
| ideology | Dual use  1. Scope to a ideology from its name (ideology:ideology\_anarchist) 2. Scope to the ideology of the scoped character | character, none | ideology |
| ig | Scope to the interest group of specified key belonging to the country, example: ig:ig\_armed\_forces | country, political\_movement | interest\_group |
| ig\_trait | Scope to the Interest Group trait with specified key, example: ig\_trait:ig\_trait\_xenophobia | none | interest\_group\_trait |
| ig\_type | Scope to an interest group type, example: ig\_type:ig\_landowners | none | interest\_group\_type |
| imposed\_law | Scope from a country to the law currently imposed on them (enacting or not) | country | law |
| imposer\_of\_law | Scope from a country to the country currently imposing a law on them | country, law | country |
| income | Get the current weekly income of the scoped country | country | value |
| income\_transfer\_expenses | Scope to the amount of money scope country is transferring to other countries via treaties & pacts (example:income\_transfer\_expenses >= 100) | country | value |
| income\_transfer\_relative\_expenses | Scope to the fraction of their income country is transferring to other countries via treaties & pacts (example:income\_transfer\_relative\_expenses >= 0.2) | country | value |
| infamy | Scope to infamy of scope country (example: infamy >= 2) | country | value |
| infamy\_threshold | Scope to infamy level threshold for comparison purposes (infamy\_threshold:infamous) | none | value |
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
| lobby\_type | Scope to a political lobby type from its name (lobby\_type:lobby\_pro\_country) | none | political\_lobby\_type |
| lobby\_war\_opposition | Scope to the total clout of all lobbies that oppose the scoped war (lobby\_war\_opposition:root >= 0.2) | country | value |
| lobby\_war\_support | Scope to the total clout of all lobbies that support the scoped war (lobby\_war\_support:root >= 0.2) | country | value |
| local\_var | Reference a previous set local variable via its name eg: local\_var:person\_of\_interest | none | varies |
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
| mobilization\_option | Scope to a mobilization option from its name (mobilization\_option:key) | none | mobilization\_option |
| modifier | Scope to the value of the modifier type of specified key belonging to the current object, example: modifier:country\_influence\_add | battle\_side, building, character, country, interest\_group, market, power\_bloc, state | boolean, value |
| momentum | Get the scoped party's raw momentum | party | value |
| morale | Returns the unit's morale | new\_combat\_unit | value |
| most\_desired\_law | Scope to the law type that political movement most desires to be enacted (if any). | political\_movement | law\_type |
| movement\_type | Scope to a political movement type from its name (movement\_type:movement\_religious\_majority) | none | political\_movement\_type |
| mutual\_trade\_value\_with\_country | Scope to the total base value of goods traded in trade routes between the two markets (example: mutual\_trade\_value\_with\_country:root >= 1000) | country | value |
| named\_script\_value | A script value that will calculate and returns its value in the context it is used | none | color, value |
| national\_awakening\_state\_region | Links from a culture scope to the state region with an active national awakening for that culture | culture | state\_region |
| naval\_combat\_power | Scope to the country's navy combat power (example: naval\_combat\_power > 100) | country | value |
| naval\_controller\_hq | Returns the province or state controller navy HQ | province | hq |
| naval\_hostility\_average\_damage\_dealt | Scope to average damage dealt by this country in naval hostilities it initiated over the lookback period. Returns -1 if no hostilities found. | country | value |
| naval\_hostility\_damage | Scope to damage points inflicted by this country against another in active naval hostilities (example: naval\_hostility\_damage:root >= 50) | country | value |
| naval\_hq | Returns the province or state owner local navy HQ | province | hq |
| naval\_vulnerability | Scope to a country's naval vulnerability score based on trade reliance and coastal GDP share, capped at a define maximum | country | value |
| navy\_size | Number of flotillas of scope country. | country | value |
| nf | Scope to a Decree of specified key applied to the state, example: nf:decree\_road\_maintaintenance | state | decree |
| no | Boolean literal for false values | none | boolean |
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
| num\_ships\_of\_group | Number of ships of the provided ship group in the scoped country or military formation | country, military\_formation | value |
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
| p | Scope to province specified by hex key, example: p:x1A6E5B | none | province |
| parent\_law\_type | Links from an amendment scope to the law type that is considered the amendment's parent | amendment | law\_type |
| participants | Get the total number of participating countries in the scoped market | market | value |
| party | Scope to the party that an IG is supporting | interest\_group | party |
| pirated\_trade\_value\_by | Scope to the average weekly base value of goods pilfered from this country by a target country (example: pirated\_trade\_value\_by:root >= 50) | country | value |
| play\_type | Scope to a diplomatic play type from its name (play\_type:dp\_default\_treaty\_article) | none | diplomatic\_play\_type |
| player | Scope to the player (do not use this outside tutorial) | none | country |
| player\_owed\_obligation\_days\_left | Scope to number of days left on an obligation in diplomatic relations scope (example: obligation\_days\_left >= 2) | diplomatic\_relations | value |
| political\_movement | - If used in a character scope, scope to the political movement that character supports. - If used in a revolution civil war scope, scope to the movement that started the revolution. - If used in an interest group scope, scope to the group's dominant movement. | character, civil\_war | political\_movement |
| pop\_type | Scope to a pop type from its name (pop\_type:laborers) | none | pop\_type |
| pop\_weight\_modifier\_scale | Get the Pop's weight modifier scale multiplier | pop | value |
| popularity | Get the scoped character's popularity, normally ranging between -100 and +100 | character | value |
| population\_below\_expected\_sol | Scope to the current percentage of the state's population that are below their expected standard of living (0-1) | state | value |
| power\_bloc | Scope to the power bloc for the scoped country | country | power\_bloc |
| power\_bloc\_leader | Scope to the leader country of the scoped power bloc | power\_bloc | country |
| power\_projection | Get the power projection value of the scoped formation, unit, or ship | military\_formation, new\_combat\_unit, ship | value |
| power\_struggle\_contender | Scope to the contender country if there is a power struggle | power\_bloc | country |
| prev | The previous scope | none | varies |
| principal | Get the current debt principal of the country | country | value |
| principle | Scope to the power bloc principle from its name (principle:key) | none | power\_bloc\_principle |
| principle\_group | Scope to the power bloc principle group from its name (principle\_group:key) | none | power\_bloc\_principle\_group |
| prosperity | Scope to the amount of prosperity for scope company (example: prosperity >= 2) | company | value |
| province | Scope from a battle side to the province in which the battle is being fought | battle\_side | province |
| py | Scope to the active party of specified key belonging to the country, example: py:communist\_party | country | party |
| rank\_value | Scope to rank value of a particular country rank (rank\_value:great\_power) | none | value |
| region | Scope to the strategic region of the object! | building, diplomatic\_play, hq, interest\_marker, province, state, state\_region | strategic\_region |
| region\_state | Scope to the state owned by the target country, (example: region\_state:BIC) | state\_region | state |
| rel | Scope to the religion with specified key, example: rel:catholic | none | religion |
| relations | Scope to relations between two countries (example: relations:root >= 2) | country | value |
| relations\_change\_rate | Scope to daily change in relations progress between two countries (example: relations\_change\_rate:root > 0) | country | value |
| relations\_threshold | Scope to relations threshold level for comparison purposes (relations\_threshold:warm) | none | value |
| religion | Scope to country or country definition's primary religion or pop religion | character, country, country\_definition, political\_movement, pop | religion |
| remaining\_binding\_period | Get the current remaining binding period in days for the scoped treaty | treaty, treaty\_options | value |
| required\_construction | Get the required amount of construction for scope building type | building\_type | value |
| root | The head of the current top scope eg: receiver of an event, taker of a decision | none | varies |
| ruler | Scope to the ruler of a country | country | character |
| s | Scope to state region specified by key, example: s:STATE\_UTAH | none | state\_region |
| scope | Reference a previously saved scope via its name eg: scope:target | none | varies |
| scope\_relations | Scope to relations value in diplomatic relations scope (example: scope\_relations >= 2) | diplomatic\_relations | value |
| scope\_tension | Scope to tension value in diplomatic relations scope (example: scope\_tension >= 2) | diplomatic\_relations | value |
| screening | Links from a fleet scope to the total screening of the ships in the fleet | military\_formation | value |
| second\_country | Scope to the second\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | diplomatic\_pact, treaty, treaty\_article, treaty\_article\_options, treaty\_options | country |
| sg | Scope from a state to the StateGoods with the specified key, example: sg:wood | state | state\_goods |
| ship\_fleet | Links from a ship scope to the ship fleet | ship | military\_formation |
| ship\_group | Scope from a ship to its group or Scope to a ship group from its name (ship\_group:ship\_group\_capital\_ships) | none, ship | ship\_group |
| ship\_type | Scope to a ship type from its name (ship\_type:ship\_type\_frigate) | none | ship\_type |
| shipping\_lane | Scope to the shipping lane for the military formation, or treaty article (goods transfer) | military\_formation, treaty\_article | shipping\_lanes |
| slaves\_role | Scope from building type to its slaves role pop type | building\_type | pop\_type |
| source\_country | Scope to the source\_country of any of:  1. treaty article (for directed article types only) 2. treaty article options (for directed article types only) | treaty\_article, treaty\_article\_options | country |
| sponsor | Links from an amendment scope to the interest group that sponsored the amendment | amendment | interest\_group |
| sr | Scope to the strategic region of specified key, example: sr:region\_persia | none | strategic\_region |
| state | Scope to the state of the object | building, market, pop, province | state |
| state\_region | Scope to the state region of a state | state | state\_region |
| strait\_trade\_importance\_by | Scope to the trade importance of goods this country is trading through straits controlled by a target country. Accumulated value is multiplied by STRAIT\_FULL\_CONTROL\_TRADE\_IMPORTANCE\_MULT for straits where the controller controls both sides (example: strait\_trade\_importance\_by:root >= 100) | country | value |
| strait\_type | Scope to a strait type from its name (strait\_type:key) | none | strait\_type |
| target | Scope to the target of the object | diplomatic\_catalyst, diplomatic\_play, journal\_entry, political\_lobby | varies |
| target\_country | Scope to the target\_country of any of:  1. treaty article (for directed article types only) 2. treaty article options (for directed article types only) | treaty\_article, treaty\_article\_options | country |
| technology\_being\_researched | Scope to the current technology a country is researching | country | technology |
| techs\_researched | Scope to the current amount of techs researched of a country | country | value |
| tension | Scope to tension between two countries (example: tension:root >= 2) | country | value |
| tension\_threshold | Scope to tension level threshold for comparison purposes (tension\_threshold:warm) | none | value |
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
| unit\_type | Scope to a combat unit type from its name (unit\_type:key) | none | combat\_unit\_type |
| value | A numeric literal value eg: 1, 5.2, -6 | none | value |
| var | Reference a previous set variable in scope via its name eg: var:mortal\_enemy | varies | varies |
| visibility | Links from a fleet scope to the total visibility of the ships in the fleet | military\_formation | value |
| vulnerability | Links from a fleet scope to the total vulnerability of the ships in the fleet | military\_formation | value |
| war | Scope from a diplomatic play to its war | diplomatic\_play | war |
| weekly\_prosperity\_change | Scope to the weekly prosperity change for scope company (example: weekly\_prosperity\_change >= 2) | company | value |
| workplace | Scope to the workplace of a pop | pop | building |
| world\_market\_hub | Scope to the world market hub state associated with the scoped state | state | state |
| yes | Boolean literal for true values | none | boolean |

## References
---

- To update these tables, see Module:Script docs/Event targets

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • Event targets • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
