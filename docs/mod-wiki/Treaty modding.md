# Treaty modding

*See also: [Treaty](https://vic3.paradoxwikis.com/Treaty)*

**Treaties** are diplomatic agreements between two countries. They can be negotiated diplomatically, or imposed by war. Each treaty is made up of one or more articles.

## Treaty defines
Politics defines

| Define | Default Value | Dev Comment |
| LAW\_ENACTMENT\_LAW\_COMMITMENT\_EFFECT | 0.05 | # Committing to enacting a law via treaty adds this much to pass chance, scaled by the number of ranks the country the comittee has on the committer |
Diplomacy defines

| Define | Default Value | Dev Comment |
| TREATY\_PROPOSAL\_PENDING\_APPROVAL\_DAYS | 30 | # Number of days before a pending treaty proposal is auto-declined |
| TREATY\_ARTICLE\_COST\_LOBBY\_CLOUT\_MULT | 0.01 | # Each point of clout from pro/anti-country lobbies reduces or increases the influence cost multiplier of maintaining treaty articles with them by this amount |
| TREATY\_ARTICLE\_COST\_LOBBY\_CLOUT\_MAX | 0.5 | # Cost multiplier impact of pro/anti-country lobbies cannot be greater than this |
| MAX\_TREATY\_OBLIGATIONS\_DELAY\_DAYS | 3650 | # obligations promised as part of treaties take effect on binding period end, or once this amount of days has passed since the treaty was originally signed, whichever comes first [>= 0] |
| BINDING\_PERIOD\_THRESHOLD\_TO\_EFFECTUATE\_TREATY\_OBLIGATIONS\_DAYS | 30 | # When binding period is this many days or less, obligations are effectuated |
| TREATY\_ARTICLE\_MONEY\_TRANSFER\_ARTICLE\_TYPE | "money\_transfer" |  |
| TREATY\_ARTICLE\_TREATY\_PORT\_ARTICLE\_TYPE | "treaty\_port" |  |
| TREATY\_ARTICLE\_INVESTMENT\_RIGHTS\_ARTICLE\_TYPE | "foreign\_investment\_rights" |  |
| TREATY\_ARTICLE\_LAW\_COMMITMENT\_ARTICLE\_TYPE | "law\_commitment" |  |
| DEFAULT\_WAR\_REPARATIONS\_MONEY\_TRANSFER | 0.1 |  |
| TREATY\_PROPOSAL\_COOLDOWN\_DAYS | 7 | # The number of days before you can send another treaty proposal after having one rejected |
| TREATY\_DEFAULT\_BINDING\_DURATION\_YEARS | 5 |  |
| TREATY\_THREATEN\_HOSTILITIES\_DURATION\_DAYS | 365 |
| THREATEN\_NAVAL\_HOSTILITIES\_COOLDOWN\_DAYS | 1825 | # 5 years before you can threaten naval hostilities against the same country again |
| NAVAL\_HOSTILITIES\_POINTS\_MAX | 100 | # Maximum damage points that can be inflicted in a single instance of naval hostilities |
| NAVAL\_VULNERABILITY\_MAX | 1.0 | # Maximum naval vulnerability score. This is used to determine how afraid a country should be of naval hostilities. |
| NAVAL\_VULNERABILITY\_TRADE\_MULTIPLIER | 0.75 | # Vulnerability from trade: this value \* (trade base cost / GDP) = vulnerability points |
| NAVAL\_VULNERABILITY\_COASTAL\_GDP\_MULTIPLIER | 0.5 | # Vulnerability from coastal GDP: this value \* (coastal GDP / GDP) = vulnerability points |
| NAVAL\_VULNERABILITY\_PRESTIGE\_MULTIPLIER | 1.0 | # Vulnerability from naval prestige: this value \* (navy prestige / total prestige) = vulnerability points |
| NAVAL\_HOSTILITIES\_POINTS\_SHIPS\_SUNK\_AT\_FULL\_FLEET | 500 | # Damage points awarded when 100% of a country's fleet construction cost is sunk |
| NAVAL\_HOSTILITIES\_POINTS\_BLOCKADE\_GDP\_WEEKLY | 20 | # Damage points per week when 100% of a country's GDP is blockaded |
| NAVAL\_HOSTILITIES\_POINTS\_PIRACY\_GDP\_WEEKLY | 20 | # Damage points per week when 100% of a country's GDP in goods is seized via piracy |
| NAVAL\_HOSTILITIES\_POINTS\_BOMBARDMENT\_DEVASTATION | 20 | # Damage points per unit of devastation added, scaled by state GDP / victim GDP |
| NAVAL\_HOSTILITIES\_POINTS\_BOMBARDMENT\_BUILDING\_DESTROYED | 10 | # Fixed damage points per building level destroyed by bombardment |
| PAST\_TEMPORARY\_HOSTILITIES\_KEEP\_YEARS | 20 | # Number of years to keep temporary hostilities data after expiry |
| PIRACY\_DAMAGE\_TRACKING\_WEEKS | 26 | # Number of weeks of piracy damage history to keep for averaging |
AI defines

| Define | Default Value | Dev Comment |
| DIPLO\_PROPOSAL\_DAYS\_LEFT\_MAX | 28 | # AI will not answer a proposal when it has more than this amount of days left (should map to DIPLOMATIC\_ACTION\_PENDING\_APPROVAL\_DAYS) |
| DIPLO\_PROPOSAL\_DAYS\_LEFT\_MIN | 20 | # AI will always answer a proposal when it has this or less amount of days left (should map to DIPLOMATIC\_ACTION\_PENDING\_APPROVAL\_DAYS) |
| DIPLO\_PROPOSAL\_ANSWER\_CHANCE | 5 | # Chance per tick of AI answering a proposal (1 = 1%) |
| DIPLO\_PROPOSAL\_TO\_PLAYER\_COOLDOWN\_MONTHS | 120 | # Do not make the same exact proposal to the player for this amount of months |
| DIPLO\_PROPOSAL\_LIKELY\_NON\_ACCEPTED\_COOLDOWN\_MONTHS | 120 | # When AI rolls the dice on whether or not to attempt a proposal it thinks will be rejected, don't try again for this time |
| DIPLO\_PROPOSAL\_LIKELY\_NON\_ACCEPTED\_TREATY\_COOLDOWN\_MONTHS | 12 | # When AI fails to propose a treaty to another AI, wait this long before trying again with the same country |
| DIPLO\_PROPOSAL\_NO\_OBLIGATION\_COOLDOWN\_MONTHS | 120 | # If the AI decides not to offer an obligation for a proposal, remember that decision for this many months |
| DIPLO\_PROPOSAL\_ACCEPT\_THRESHOLD | 1 | # At this or more acceptance on a diplomatic action without uses\_random\_approval flag, AI says yes to a proposal. Each point above it increases chance to accept a uses\_random\_approval or treaty proposal |
| DIPLO\_PROPOSAL\_HALFWAY\_RANDOM\_ACCEPTANCE\_THRESHOLD | 10 | # At this or more acceptance on a diplomatic action with uses\_random\_approval flag or treaty proposal, the AI has 50% chance to accept it and considers it to be accepted for the purpose of proposing it |
| DIPLO\_PROPOSAL\_GUARANTEED\_RANDOM\_ACCEPTANCE\_THRESHOLD | 30 | # At this or more acceptance on a diplomatic action or treaty proposal with uses\_random\_approval flag, the AI will always accept it |
| DIPLO\_PROPOSAL\_BREAK\_THRESHOLD | -100 | # At this or less acceptance, AI breaks off an existing pact |
| DIPLO\_PROPOSAL\_TRANSFER\_PACT\_RELUCTANCE | 25 | # Add this to acceptance value for existing pact in transfer-pact proposals |
| INFLUENCE\_DEFICIT\_RECOVER\_INFLUENCE\_BASE\_VALUE | 50 | # Added to score for the treaty or pact we're breaking to recover influence |
| INFLUENCE\_DEFICIT\_RECOVER\_INFLUENCE\_RANDOM\_FACTOR | 1.0 | # The higher this is, the more random AI pact/treaty breaking due to influence deficit will be |
| TRADE\_VALUE\_DELTA\_FACTOR | 3.0 | # When calculating treaty trade value, the delta between production/consumption counts for this much more than base production/consumption values |
| TRADE\_VALUE\_BASE\_MULTIPLIER | 0.001 | # Base multiplier applied to the value for treaty trade based purely on production & consumption |
| TRADE\_VALUE\_RELATIVE\_MULTIPLIER | 100 | # Relative multiplier applied to the value for treaty trade and divided by the total value in the market |
| TREATY\_FAIRNESS\_BASE\_SCORE | 10 | # The base score for treaty fairness before country acceptances are considered, treaties with an acceptance delta smaller than this will be considered fair to both parts |
| REJECTED\_TREATY\_MEMORY\_DURATION\_DAYS | 365 | # For how many days does the AI remember a rejected treaty and refuse any treaties that aren't a significant enough improvement on it |
| REJECTED\_TREATY\_MIN\_ACCEPTANCE\_IMPROVEMENT\_FOR\_NEW\_PROPOSAL | 10 | # For the AI to have a chance to accept a treaty proposal after recently having rejected a treaty, the new proposal must be this much better than the old one |
| REJECTED\_TREATY\_UNDER\_MIN\_ACCEPTANCE\_IMPROVEMENT\_PENALTY | -1000 | # Added to accepance when a treaty proposal isn't sufficiently improved upon within the rejected treaty memory duration |
| ``` # Treaties ``` | | |
| TREATIES\_RANDOM\_FACTOR | 1.0 | # How random should the AI be regarding article selection when composing treaties? |
| TREATIES\_CHECK\_CATEGORIES\_WHEN\_COMPOSING\_TREATY | no | # Does the AI care about categories when composing a treaty after gathering the initial article? |
| TREATIES\_NUMBER\_CHECKED\_CATEGORIES\_TREATY\_COMPOSER | 3 | # How many categories does the AI try to gather to check against when composing a treaty |
| TREATIES\_MINIMUM\_ACCEPTANCE\_TO\_PROPOSE | 15 | # How much acceptance does the AI require the other side to have for it to try sending a proposal? 0 = never accept, 30 = always accept, in between = random chance |
| TREATIES\_MINIMUM\_OWN\_ACCEPTANCE\_TO\_PROPOSE | 10 | # How much own acceptance does the AI require to have itself for it to send a proposal? |
| TREATIES\_MAX\_NUMBER\_ARTICLES | 6 | # How many articles in a treaty the AI will consider at most |
| TREATIES\_ACCEPTANCE\_BASE | 0 | # Base Acceptance for Treaties |
| TREATIES\_ACCEPTANCE\_WITHDRAW\_THRESHOLD | -50 | # Threshold at or under which AI will withdraw from treaties outside of their binding period |
| TREATIES\_ACCEPTANCE\_WITHDRAW\_BINDING\_PERIOD\_THRESHOLD | -10000 | # Threshold at or under which AI will withdraw from treaties while they are still binding |
| TREATIES\_DEFAULT\_LENGTH\_YEARS | 5 | # How long treaties the AI will propose |
| TREATY\_OBLIGATION\_WE\_OWE\_THEM\_ACCEPTANCE | -40 | # How country A's acceptance of a treaty changes if A would owe B an obligation as part of the treaty. Note: "WE" is the country doing the evaluation, not the player |
| TREATY\_OBLIGATION\_THEY\_OWE\_US\_ACCEPTANCE | 30 | # How country A's acceptance of a treaty changes if A would be owed an obligation by B as part of the treaty. Note: "US" is the country doing the evaluation, not the player |
| TREATY\_OBLIGATION\_THEY\_OWE\_US\_RECENTLY\_REPUDIATED\_ACCEPTANCE | 15 | # Same as above, but use this if B has recently repudiated an obligation (A values it less because B's word is not worth as much) |
| TREATY\_OBLIGATION\_THEY\_CALL\_US\_IN\_ACCEPTANCE | 30 | # How country A's acceptance of a treaty changes if B is calling in an obligation that A owes B. Note: "US" is the country doing the evaluation, not the player |
| TREATY\_OBLIGATION\_THEY\_CALL\_US\_IN\_RECENTLY\_REPUDIATED\_ACCEPTANCE | 15 | # Same as above, but use this if B has recently repudiated an obligation (A values it less because they're less inclined to follow honor agreements that B is willing to ignore) |
Signing location defines

| Define | Default Value | Dev Comment |
| ``` # selection for the signing location of a treaty happens in two steps # 1. a state is randomly selected among up to 6, those 6 being: #    - the capital (1) #    - the state with higest gdp (1) #    - the state with the second highest gdp (0 or 1) #    - for both treaty participants #    - single-state countries don't have a second highest gdp state # 2. once a state is randomly selected, a hub is randomly selected in the #    state region that the state belongs to (if it applies, e.g. no ports #    in landlocked state regions) # every random selection is weighted via the following weights ``` | | |
| TREATY\_SIGNING\_STATE\_WEIGHT\_CAPITAL | 1 | # weight that states have when randomly chosing a signing place for a treaty [>= 1] |
| TREATY\_SIGNING\_STATE\_WEIGHT\_HIGHEST\_GDP | 1 | # as above, for the state with the highest gdp [>=1] |
| TREATY\_SIGNING\_STATE\_WEIGHT\_SECOND\_HIGHEST\_GDP | 1 | # as above, for the state with the second highest gdp [>=1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_CITY | 5 | # weight that city hubs have when randomly chosing a signing place for a treaty [>= 1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_PORT | 3 | # as above, for port hubs [>= 1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_FARM | 2 | # as above, for farm hubs [>= 1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_MINE | 1 | # as above, for mine hubs [>= 1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_WOOD | 1 | # as above, for wood hubs [>= 1] |
## Treaty article definition
Treaty articles allow for deeper diplomatic interaction, and more importantly, allows modders to add wargoals. Each treaty article is defined in common/treaty\_articles.

The basic elements in this definition are:

| Element | Options | Example | Description |
| kind | - `directed` - `mutual` | `kind = directed` | Kind of treaty article |
| cost | `value` | `cost = 100` | Influence cost to maintain (must be non-negative) |
| relations\_progress\_per\_day | `value` | `relations_progress_per_day = 1` | Relations progress between the two countries (can be negative) |
| relations\_improvement\_max | `value` | `relations_improvement_max = 100` | Max value relations can reach from this article alone (must be non-negative) |
| relations\_improvement\_min | `value` | `relations_improvement_min = 100` | Min value relations can reach from this article alone (must be non-negative) |
| icon | `path` | `icon = "gfx/interface/icons/diplomatic_treaties_articles_icons/alliance_treaties.dds"` | Path to the treaty article icon |
| maintenance\_paid\_by | - `source_country` - `target_country` | `maintenance_paid_by = target_country` | Who spends the influence to maintain this treaty article (ignore if mutual) |
| usage\_limit | - `once_per_side` - `once_per_treaty` - `once_per_side_with_same_inputs` | `usage_limit = once_per_side` | Restrictions on how many times this article can be used. `once_per_side` is once per country, although keep in mind there can be other restrictions |
| flags | - `is_alliance` - `is_defensive_pact` - `is_gurantee_independence` - `is_support_independence` - `is_investment_rights` - `is_trade_privilege` - `is_military_access` - `is_transit_rights` - `is_non_colonization_agreement` - `is_goods_transfer` - `is_money_transfer` - `is_monopoly_for_company` - `is_prohibit_goods_trade_with_world_market` - `is_no_tariffs` - `is_no_subventions` - `is_treaty_port` - `is_law_commitment` - `can_be_renegotiated` - `can_be_enforced` - `causes_state_transfer` - `friendly` - `hostile` - `giftable` | ``` flags = {     is_transit_rights     can_be_enforced     can_be_renegotiated     giftable     friendly } ``` | These are code flags that can be applied to treaty articles, and will likely result in the respective behaviour being applied for most of the `is` flags |
| mutual\_exclusions | `article type` | ``` mutual_exclusions = {     alliance     defensive_pact     guarantee_independence } ``` | This treaty article cannot be used with the ones included |
| unlocked\_by\_technologies | `technology` | ``` unlocked_by_technologies = {     international_trade } ``` | What technology should unlock the use of this treaty article. [[1]](#cite_note-1) |
| automatically\_support | `diplomatic play types` | ``` automatically_support = {     dp_independence     dp_increase_autonomy     dp_annex_subject } ``` | What diplomatic plays the source country will automatically support the target country in |
| source\_modifier | `modifier types` | ``` source_modifier = {     country_treaty_leverage_generation_add = 300 } ``` | Modifiers applied to the source country (must be empty for mutual articles) |
| target\_modifier | `modifier types` | ``` target_modifier = {     unit_experience_gain_mult = 0.5     building_training_rate_mult = 0.2     country_military_goods_cost_mult = -0.1     country_military_tech_spread_mult = 0.1 } ``` | Modifiers applied to the target country (must be empty for mutual articles) |
| mutual\_modifier | `modifier types` | ``` mutual_modifier = {     country_treaty_leverage_generation_add = 400 } ``` | Modifiers applied to both countries |

### Validation
These parameters determine when an article can be used.

#### Visible
The `visible` trigger block controls whether the article should be visible to the country at all. It is checked for both countries.

It has the following scopes:

- `root`

#### Possible
The `possible` trigger block controls whether it is possible to consider between two countries. It also automatically runs the `visible` trigger.

It has the following scopes:

- `root`
- `other_country`

#### Maintain
The `requirement_to_maintain` trigger block is a repeatable block that determines if an article is possible as well as to be maintained.

It has the following scopes:

- `root`
- `article`
- `treaty`

Only for mutual articles:

- `first_country`
- `second_country`

Only for directed articles:

- `source_country`
- `target_country`

#### Can ratify
The `can_ratify` trigger block controls whether the two countries are able to ratify a treaty that contains this article type. It runs the `visible` and `possible` triggers automatically.

It has the following scopes:

- `root`
- `article`
- `treaty`

Only for mutual articles:

- `first_country`
- `second_country`

Only for directed articles:

- `source_country`
- `target_country`

### On entry into force
This effect block happens as soon as the treaty with this article is ratified, either diplomatically or by war.

It has the scope `article_options` which contains the parameters of the article, such as `source_country`, `target_country` and `input_state`

### On enforced
This effect block happens as soon as the treaty with this article is enforced by war.

It has the scope `article_options` which contains the parameters of the article, such as `source_country`, `target_country` and `input_state`

### Non-fulfillment
The non-fulfillment block describes how a country can fail their end of the treaty and what should happen when the source country of an article is not fulfilling their end of the agreement.

#### Conditions
The conditions block checks when a country is in contravention with the following time intervals available:

- `weekly`
- `monthly`
- `yearly`

And has the following scopes available:

- `root`
- `article`

For example:

```
conditions = {
weekly = {
    scope:article = { source_country = { in_default = yes } }
}
}
```

#### Consequences
The consequences parameter can be the following:

| Consequence | Description |
| none | nothing |
| withdraw | The contravening party automatically unilaterally withdraws from the treaty, becoming subject to any penalty that might apply |
| freeze | Causes the contravening party to have to keep up their end of the agreement, while the other party sees their obligations lifted, turning the treaty into a one-sided deal until the contravening party is able to fulfill their end of the agreement again |

#### Contraventions
An option for the maximum number of contraventions allowed before consequences applied is also provided:

- `max_consecutive_contraventions`

This limits how many times the country can meet the non-fulfillment conditions in a row before being in non-fulfillment.

### Article inputs
Articles can take inputs of the following kind:

- `quantity`
- `goods`
- `state`
- `strategic_region`
- `company`
- `building_type`
- `law_type`
- `country`

However, the implementation of these is not clearly documented in game files and some don't work without specific article flags. For example, the localization of choosing a strategic\_region is only for non-colonization agreements, despite the treaty article not being that. If they are in unmodified Victoria 3, they probably work.

#### Article input triggers
Each input type has a `valid_trigger` block:

- `goods_valid_trigger = {}`
- `state_valid_trigger = {}`
- `strategic_region_valid_trigger = {}`
- `company_valid_trigger = {}`
- `building_type_valid_trigger = {}`
- `law_type_valid_trigger = {}`
- `country_valid_trigger = {}`

The valid triggers have the following scopes available:

| Scope | Description |
| `root` | Source country for the article |
| `article` | The article itself. (Note that not all inputs have been set at this point) |
| `input` | The specific input being checked |
| `other_country` | The other country |

And specifically for the goods valid trigger:

| Scope | Description |
| `goods` | The goods input being checked |
| `market_goods` | The same goods but as market goods for the source country market |

#### Quantity min and max
To set the minimum and maximum of an input, use:

- `quantity_min_value = {}`
- `quantity_max_value = {}`

Each one should include a [script value](./Script value.md) block.

### Withdrawal
#### Can withdraw
The `can_withdraw` trigger block determines if a country is allowed to withdraw from a treaty.
It has the following scopes:

- `withdrawing_country`
- `non_withdrawing_country`

For mutual articles, also:

- `first_country`
- `second_country`

For directed articles, also:

- `source_country`
- `target_country`

#### On withdrawal
The `on_withdrawal` effect block applies when a party withdraws from a treaty, immediately before the withdrawal takes effect.

It has the following scopes:

- `treaty_options`
- `article`
- `withdrawing_country`
- `non_withdrawing_country`

#### On break
The `on_break` effect block additionally applies when a party withdraws from a treaty before the binding period has ended, immediately before the withdrawal takes effect.

It has the following scopes:

- `treaty_options`
- `article`
- `withdrawing_country`
- `non_withdrawing_country`

### AI
The AI block contains information on how the AI should use and value this article.

#### Treaty categories
Here you can set the categories of the treaty article. The following are provided:

- `economy`
- `trade`
- `military`
- `military_defense`
- `ideology`
- `expansion`
- `power_bloc`
- `other`
- `none`

#### Article usage
How the AI will use the article. Can be multiple. The following are provided:

- `none`
- `will_offer`
- `will_request`

#### Acceptance
The following are provided to limit acceptance gained. These take integers:

- `combined_acceptance_cap_max`
- `combined_acceptance_cap_min`

`inherent_accept_score` and `contextual_accept_score` are added together to create the final acceptance value but maths conducted in one script value does not apply to the other and vice versa.

##### Inherent acceptance
The `inherent_accept_score` block is a script value that does **not** get re-evaluated every time the AI tries to add an article.
It has the following scopes:

- `root`
- `article`

Only for mutual articles:

- `first_country`
- `second_country`

Only for directed articles:

- `source_country`
- `target_country`

##### Contextual acceptance
The `contextual_accept_score` block is a script value that has access to the treaty itself and so can check for other articles.
It has the following scopes:

- `root`
- `article`
- `treaty`

Only for mutual articles:

- `first_country`
- `second_country`

Only for directed articles:

- `source_country`
- `target_country`

##### Wargoal multiplier
The `wargoal_score_multiplier` is a script value. A multiplier added to the AI acceptance determining how likely it is to pursue this article as a wargoal.
It has the following scopes:

- `root`
- `article`

Only for mutual articles:

- `first_country`
- `second_country`

Only for directed articles:

- `source_country`
- `target_country`

### Wargoal data
#### Execution priority
An integer. Higher priority wargoals are executed first.

#### Contestion type
How the wargoal can be 'controlled'. The following are available:

- `control_target_state`
- `control_target_country_capital`
- `control_any_target_country_state`
- `control_own_state`
- `control_own_capital`
- `control_all_own_states`
- `control_all_target_country_claims`

#### Maneuvers and infamy
Both the `maneuvers` and `infamy` blocks are script values. These determine the maneuver cost and infamy gain from using this article as a war goal.

They have the following scopes:

- `root`
- `target_country`

And the following scopes depending on relevant inputs:

- `quantity`
- `country`
- `company`
- `state`
- `region`
- `building`
- `law`
- `goods`
- `market_goods`

## Treaty script documentation
The following [effects](./Effect.md), [event targets](./Event target.md), and [triggers](./Trigger.md) can be used in treaty scopes.

### Treaty scope
List of treaty effects

| Effect | Description | Example | Targets |
| every\_scope\_article | Iterate through articles of the scoped treaty | ``` every_scope_article = {   limit = { <triggers> } #optional   <effects> } ``` | treaty\_article |
| every\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` every_scope_article_option = {   limit = { <triggers> } #optional   <effects> } ``` | treaty\_article\_options |
| ordered\_scope\_article | Iterate through articles of the scoped treaty | ``` ordered_scope_article = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | treaty\_article |
| ordered\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` ordered_scope_article_option = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | treaty\_article\_options |
| random\_scope\_article | Iterate through articles of the scoped treaty | ``` random_scope_article = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | treaty\_article |
| random\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` random_scope_article_option = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | treaty\_article\_options |
| withdraw | Withdraws a country from a treaty | ``` scope:treaty = {  withdraw = {   country = <country scope> # must be valid and must be bound by the treaty   apply_break_penalties = yes/no	# optional, default no. If yes, break effects and on-actions apply when treaty is in binding time    } } ``` |  |
List of treaty triggers

| Trigger | Description | Example | Targets |
| any\_scope\_article | Iterate through articles of the scoped treaty | ``` any_scope_article = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty\_article |
| any\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` any_scope_article_option = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty\_article\_options |
| binds | Checks if the scoped treaty or treaty\_options binds the given country | ``` scope:some_treaty = {  if = {   limit = {    binds = c:FRA    binds = c:BEL   }  } } ``` | country |
| is\_enforced | Checks if the scoped treaty is enforced on either party | ``` scope:some_treaty = {  if = {   limit = { is_enforced = yes }  } } ``` | boolean |
| is\_equal\_exchange | Checks if the scoped treaty has the same articles on both sides | ``` scope:some_treaty = {  if = {   limit = { is_equal_exchange = yes }  } } ``` | boolean |
| is\_fulfilled\_by | Check if the scoped treaty is fulfilled by the given country | ``` scope:treaty = {  is_fulfilled_by = c:FRA } ``` | country |
| is\_historical\_treaty | Checks if the scoped treaty was signed before the game start date | ``` is_historical_treaty = yes/no ``` | boolean |
| is\_renegotiation | Checks if the scoped treaty is amending an existing treaty | ``` scope:some_treaty = {  if = {   limit = { is_renegotiation = yes }  } } ``` | boolean |
| was\_coerced\_with\_naval\_threat | Check if the scoped treaty was accepted through threatening naval hostilities | ``` was_coerced_with_naval_threat = yes/no ``` | boolean |

List of treaty event targets

| Event target | Description | To scope |
| amended\_treaty | Scope to the treaty the scoped treaty is amending | treaty |
| binding\_period | Get the original binding period in days when the treaty was signed for the scoped treaty | value |
| enforced\_on\_country | Scope to the enforced\_on\_country of an enforced treaty | country |
| enforcer\_country | Scope to the enforcer\_country of an enforced treaty | country |
| first\_country | Scope to the first\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |
| remaining\_binding\_period | Get the current remaining binding period in days for the scoped treaty | value |
| second\_country | Scope to the second\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |

### Treaty article scope
List of treaty article effects

| Effect | Description | Example | Targets |

List of treaty article triggers

| Trigger | Description | Example | Targets |
| has\_type | Checks if the scoped object has the type identified by the given string | ``` scope:some_object = {  has_type = defensive_pact } ``` |  |
| is\_treaty\_article\_in\_danger | Checks if treaty article is in danger of breaking | ``` is_treaty_article_in_danger = yes ``` | boolean |
| max\_contraventions | Check the maximum contraventions for the article type of the scoped article or article\_options | ``` scope:treaty_article = {  max_contraventions >= 1 } ``` | value |
| num\_contraventions | Check if the scoped article has the given number of contravention from the given country | ``` scope:treaty_article = {  num_contraventions = {   target = c:FRA   value > 0  } } ``` | value |

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

### Treaty options scope
List of treaty options effects

| Effect | Description | Example | Targets |
| every\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` every_scope_article_option = {   limit = { <triggers> } #optional   <effects> } ``` | treaty\_article\_options |
| ordered\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` ordered_scope_article_option = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | treaty\_article\_options |
| random\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` random_scope_article_option = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | treaty\_article\_options |

List of treaty options triggers

| Trigger | Description | Example | Targets |
| any\_scope\_article\_option | Iterate through article\_options of the scoped treaty or treaty\_options | ``` any_scope_article_option = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | treaty\_article\_options |
| binds | Checks if the scoped treaty or treaty\_options binds the given country | ``` scope:some_treaty = {  if = {   limit = {    binds = c:FRA    binds = c:BEL   }  } } ``` | country |
| is\_equal\_exchange | Checks if the scoped treaty has the same articles on both sides | ``` scope:some_treaty = {  if = {   limit = { is_equal_exchange = yes }  } } ``` | boolean |
| is\_historical\_treaty | Checks if the scoped treaty was signed before the game start date | ``` is_historical_treaty = yes/no ``` | boolean |
| is\_renegotiation | Checks if the scoped treaty is amending an existing treaty | ``` scope:some_treaty = {  if = {   limit = { is_renegotiation = yes }  } } ``` | boolean |

List of treaty options event targets

| Event target | Description | To scope |
| amended\_treaty | Scope to the treaty the scoped treaty is amending | treaty |
| binding\_period | Get the original binding period in days when the treaty was signed for the scoped treaty | value |
| first\_country | Scope to the first\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |
| remaining\_binding\_period | Get the current remaining binding period in days for the scoped treaty | value |
| second\_country | Scope to the second\_country of any of:  1. diplomatic pact 2. treaty 3. treaty options 4. treaty article's treaty 5. treaty article options (for mutual article types only) | country |

### Treaty article options scope
List of treaty article options effects

| Effect | Description | Example | Targets |

List of treaty article options triggers

| Trigger | Description | Example | Targets |
| has\_type | Checks if the scoped object has the type identified by the given string | ``` scope:some_object = {  has_type = defensive_pact } ``` |  |
| max\_contraventions | Check the maximum contraventions for the article type of the scoped article or article\_options | ``` scope:treaty_article = {  max_contraventions >= 1 } ``` | value |

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

## References
1. [↑](#cite_ref-1) May be bugged and does not block articles

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • Treaties • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
