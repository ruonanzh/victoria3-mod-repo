# Needs

**Needs** represent the consumption of [goods](./Goods.md) by pops. The type and amount of needed goods vary based on each pop's wealth level. Most needs are fulfilled by a range of different goods, so there is some flexibility for pops to deal with surpluses and shortages.

In order to fulfill their needs, pops purchase goods until the volume of purchased goods multiplied with their [base cost](./Goods.md) reaches a value that is set per need type for each wealth level. As a consequence, goods with a higher base price are needed in lower amounts to fulfill the same need – for example, 10 units of meat (base price of 30→ 30 \* 10 = 300 need fulfilled) satisfy the same amount of food need as 15 units of grain (base price of 20→ 20 \* 15 = 300 need fulfilled).

While the total amount of goods purchased depends on the base price, pops never consider either the base price or market price of goods in choosing which goods to purchase in what amounts.

## Need types
Different goods often have different weights. These weights, together with market supply, are used by pops to make decisions on the split of purchases between different goods within a need type. Weights and max share in the table below are taken from the game files[[1]](#cite_note-1).

If a good is not sold in a market, it is not purchased by pops unless that good has a minimum supply share. If no good for a need category is sold in a market, pops purchase the default good.

Unless noted, all items below are weighted equally at 1, and have max supply share of 1 and a minimum of 0. The default good in each category is **bolded**.

Pop needs

| Need | Wealth level | | | | | | | | | | | | |
| Destitute | Struggling | | Impoverished | Middling | Secure | Prosperous | Affluent | | Wealthy | | Lavish | Opulent |
| 1 – 4 | 5 | 6 – 9 | 10 – 14 | 15 – 19 | 20 – 24 | 25 – 29 | 30 | 31 – 39 | 40 – 44 | 45 – 49 | 50 – 59 | 60 + |
| Basic Food | - **Grain** (20, weight ×0.85, max 0.9) - Fish (20, max 0.9) - Meat (30, max 0.9) - Fruit (30, max 0.9) - Groceries (30, weight ×1.15, max 0.9) | | | | | | | — | | | | | |
| Luxury Food | — | | | | | - **Meat** (30, weight ×1.25, min 0.1, max 0.75) - Fruit (30, weight ×0.75, min 0.1, max 0.75) - Groceries (30, weight ×1.5) - Sugar (30, weight ×0.5, max 0.5) | | | | | | | |
| Simple Clothing | - **Fabric** (20, max 0.5) - Clothes (30, weight ×2) | | | | — | | | | | | | | |
| Standard Clothing | — | | | **Clothes** (30) | | | | | | — | | | |
| Crude Items | — | - **Wood** (20, max 0.5) - Furniture (30, weight ×2) | | | — | | | | | | | | |
| Household Items | — | | | - **Furniture** (30, min 0.1, max 0.75) - Glass (40, max 0.5) - Paper (30, weight ×0.5, max 0.5) | | | | | | | — | | |
| Luxury Items | — | | | | - **Silk** (40, weight ×0.5, min 0.1, max 0.25) - Luxury Clothes (60, min 0.1, max 0.5) - Luxury Furniture (60, min 0.1, max 0.5) - Porcelain (70, min 0.1, max 0.5) - Radios (80, max 0.5) | | | | | | | | |
| Heating | - **Wood** (20, weight ×0.75, max 0.5) - Fabric (20, weight ×0.25, max 0.25) - Coal (30, weight ×2, max 0.8) - Oil (40, weight ×3) - Electricity (30, weight ×3) | | | | | | | | | | | | |
| Intoxicants | - **Liquor** (30, max 0.75) - Tobacco (40, weight ×0.9, max 0.75) - Opium (50, weight ×0.75, max 0.75) - Wine (50, weight ×0.25, max 0.25) | | | | | | | | | | | | |
| Stimulants | — | | - **Sugar** (30, max 0.75) - Tea (50, weight ×0.95, max 0.75) - Coffee (50, weight ×0.95, max 0.75) - Tobacco (40, weight ×0.8, max 0.75) | | | | | | — | | | | |
| Luxury Drinks | — | | | | - **Tea** (50, max 0.75) - Coffee (50, max 0.75) - Wine (50, weight ×0.45, max 0.33) | | | | | | | | |
| Services | — | | | **Services** (30) | | | | | | | | | |
| Free Movement | — | | | - **Transportation** (30, max 0.75) - Automobiles (100, weight ×1.25) | | | | | | | | | |
| Communication | — | | | | | - **Transportation** (30, max 0.75) - Telephones (70, weight ×2) | | | | | | | |
| Leisure | — | | | | | - **Services** (30, weight ×0.1) - Fine Art (200, weight ×4) - Small Arms (60, weight ×0.75, max 0.25) - Aeroplanes (80, max 0.2) - Automobiles (100, max 0.25) - Radios (80, max 0.2) - Opium (50, weight ×0.5, max 0.5) - Clippers (60, max 0.25) - Steamers (70, weight ×0.75, max 0.25) | | | | | | | |
| Need | 1 – 4 | 5 | 6 – 9 | 10 – 14 | 15 – 19 | 20 – 24 | 25 – 29 | 30 | 31 – 39 | 40 – 44 | 45 – 49 | 50 – 59 | 60 + |
| Destitute | Struggling | | Impoverished | Middling | Secure | Prosperous | Affluent | | Wealthy | | Lavish | Opulent |
| Wealth level | | | | | | | | | | | | |

## Buy packages
The total number of goods that a pop consumes is dependent on its wealth level, its size and workforce-dependent ratio, and the weight factor on each [good](./Goods.md) that can be substituted.

Each wealth level decides the pop's *buy packages*, which are defined as the base price cost that 10,000 working adults need to spend for each category of needs. This information is listed in /Victoria 3/game/common/buy\_packages/00\_buy\_packages.txt (also see [Needs#Standard pop needs packages](./Needs.md#Standard_pop_needs_packages)). For example, the buy package for wealth 10 is as follows, with added comments on how many units of the default good satisfies each need for the standard 10,000 working adults.

```
wealth_10 = {
	political_strength = 0.75
	goods = {
		popneed_simple_clothing = 41		# 2.05 units of fabric
		popneed_crude_items = 41		# 2.05 units of wood
		popneed_basic_food = 131		# 6.55 units of grain
		popneed_heating = 26			# 1.3 units of wood
		popneed_household_items = 7		# 0.23 units of furniture
		popneed_standard_clothing = 7		# 0.23 units of clothes
		popneed_services = 23			# 0.77 units of services
		popneed_intoxicants = 50		# 1.67 units of liquor
		popneed_free_movement = 3		# 0.1 units of transportation
		popneed_stimulants = 26			# 0.87 units of sugar
	}
}
```

Buy packages are scaled by pop size, thus a pop with 20,000 working adults buys twice as much worth as a pop with 10,000 working adults. Note that dependents count as only half a working adult for needs, and so a pop with a total size of 10,000 normally purchases less than the standard buy package.

For needs with no substitution – such as Standard Clothing, pops simply purchase enough units of each good to fulfill their buy packages each week.

### Substitution
*This section provides simplified examples. For detailed formulas, see [Formulas](#Formulas)*

For needs with substitution, the primary factor for how much of each good pops purchase for a need is the relative amount of sell orders of those goods on the national market, the *market share*. Additionally, some goods have different defined weights and a maximum or minimum share for a need. Finally, goods with a higher base price fulfill the buy package with fewer units. For example, in the heating need at wealth 10, either 1.3 units of wood or 0.65 units of oil would fulfill the need as oil has twice the base price of wood. Comparisons between goods need to account for these factors.

As a basic example, take the Luxury Drinks need below. Its three goods have the same base price and defined weight. For a market with 200 sell orders of tea, 100 of wine, and 100 of coffee, we expect pops to purchase the three goods in similar proportion, at 2:1:1, so at wealth 22, which requires 100 worth of Luxury Drinks, a pop would purchase 1 tea, 0.5 wine, and 0.5 coffee, scaled by the pop size. As each good has a max share of 75%, their market weights are capped at 0.75, thus if the sell orders were 400 tea, 50 wine, and 50 coffee, the expected purchases would be ~1.58 units of tea and ~0.21 units of wine and coffee each – rather than 1.6 and 0.2 each. However, if only one type of Luxury Drinks good was sold in the market, it would be purchased exclusively as none of the goods has a minimum share. Similarly, if none of the goods are sold in the market, the default good – tea – would be purchased exclusively.

```
popneed_luxury_drinks = {
	default = tea
	entry = {
		goods = tea
		weight = 1
		max_supply_share = 0.75
		min_supply_share = 0.0
	}
	entry = {
		goods = coffee
		weight = 1
		max_supply_share = 0.75
		min_supply_share = 0.0
	}
	entry = {
		goods = wine
		weight = 1
		max_supply_share = 0.75
		min_supply_share = 0.0
	}
}
```

When goods have different defined weights, that multiplies with the market share, so for example in a market with 200 sell orders of fabric and 100 of clothes, pops would purchase the two goods in equal proportion for the Simple Clothing need, as clothes has a ×2 weight in that category. However, as clothes also have a higher base price, fewer units would be purchased. Note however, that fabric cannot have a higher weight than 0.5, so in actuality, a higher proportion of clothes would be purchased

Goods with a minimum share, such as luxury furniture in Luxury Items, are always purchased even if that good is not sold on the market.

Relative substitution can change each week, but this change is capped between 1% and 10% per week[[2]](#cite_note-2). This means a large shift in the market share of a good is not immediately reflected in pop consumption.

#### Obsessions and taboos
[Cultural *obsessions*](https://vic3.paradoxwikis.com/Culture#Obsessions) and [religious *taboos*](https://vic3.paradoxwikis.com/Religion#Taboos) affect a pop's weighting for the given good. Obsessions set the minimum weight of a good to 1 and multiply its total weight by ×2; taboos multiply the demand for a good by ×0.5. Additionally, both obsessions and taboos affect the total value of needs that contain that good by ±25%. For example, if a culture has an obsession for services, then at wealth 10 pops of that culture purchase 30 value of services, rather than the base 24. Similarly, if a religion has a taboo against services, pops of that religion purchase 18 value instead of 24. This modified value is taken from or distributed to other needs' values so that the total buy package for a wealth level remains the same.

There is a small chance of cultures developing new obsessions during the course of a game. This requires the culture to have at least 50,000 people in a [market](https://vic3.paradoxwikis.com/Market) where the supply of the good is at least 50% of the demand for it and the market demands at least £500 of the good (calculated as 

number of units
∗

base price
{\displaystyle {\text{number of units}}\*{\text{base price}}}
). The chance is increased by increased supply (up to 3 times the demand) and market size. Trade routes can be used to try to get other cultures to develop obsessions for products produced in the player's country. Certain events may also create or remove obsessions.

In contrast, taboos are always set and do not change.

### Prestige goods
Prestige goods increase the weight of the good type in direct proportion to their share of the market. For example, if a prestige good is 50% of the market share, it has 50% increased weight.

### Peasants
 Peasants purchase only 5% of buy package amounts.[[3]](#cite_note-3) This is meant to represent their subsistence lifestyle, where they instead get paid in a good package, called subsistance Output, that does not interact with the broader economy.

### Dependents
In order to calculate a given pop's needs, it is always necessary to know the size of its workforce and dependents separately, not just the total size of the pop. Dependents consume half as much as working adults. The default dependents to workforce ratio is 3:1 (75% dependents, 25% working adults),[[4]](#cite_note-4) though this is modified by laws and other factors in game. Thus as an example, a pop with 10,000 individuals would have a baseline of 2,500 working adults and 7,500 dependents[[5]](#cite_note-5). For purposes of needs, this would be equivalent to a pop containing 6,250 working adults and no dependents. In this example, working adults count for 40% of needs while dependents count for 60% of needs.

### Formulas
The precise formulas for buy packages and substitution are as follows:

num of units purchased
=

buy package value
base price of good
⋅

purchase weight of good

∑

purchase weight of all goods
⋅

workforce size
+

dependent size
⋅
0.5
10000
{\displaystyle {\text{num of units purchased}}={\frac {\text{buy package value}}{\text{base price of good}}}\cdot {\frac {\text{purchase weight of good}}{\sum {\text{purchase weight of all goods}}}}\cdot {\frac {{\text{workforce size}}+{\text{dependent size}}\cdot 0.5}{10000}}}

Purchase weight is the relative proportion a good fulfills for a need; this is not a percentage but a direct value. The minimum and maximum supply shares are limits on the market share such that market share has no effect if goes outside their range. The final purchase percentages are based on the total weight for all goods in the buy package.

purchase weight of good
=

weight
⋅
(

min supply share
<

market share of good
<

max supply share
)
{\displaystyle {\text{purchase weight of good}}={\text{weight}}\cdot ({\text{min supply share}}<{\text{market share of good}}<{\text{max supply share}})}

Market share is determined by the number of sell orders minus half of the non-pop buy orders[[6]](#cite_note-6).

market share of good
=

sell orders of good
−
(

non-pop buy orders
⋅

0.5
)

∑
(

sell orders of all goods for need
−
(

non-pop buy orders
⋅

0.5
)
)
{\displaystyle {\text{market share of good}}={\dfrac {{\text{sell orders of good}}-({\text{non-pop buy orders}}\cdot {0.5})}{\sum ({\text{sell orders of all goods for need}}-({\text{non-pop buy orders}}\cdot {0.5}))}}}

Local-only goods receive an additional weight equal to 

0.25
⋅
(
1
−

State's percentage of market GDP
)
{\displaystyle 0.25\cdot (1-{\text{State's percentage of market GDP}})}
. For example, in a state that has 20% of the market's GDP, local goods receive an additional 0.2 weight.

## Standard pop needs packages
Needs can be graphed based on pop wealth. In general, they fall into one of three categories: *Temporary Needs*, *Constant Needs*, and *Exponential Needs*.

### Temporary needs
Temporary needs mapped to wealth 1 - 60

Temporary needs appear at some wealth level, grow to a certain degree (often linearly) and then either decrease until they are gone or suddenly disappear.

Temporary needs are:

- **Basic Food** (starts at 90 at wealth 1, reaches maximum of 168 at wealth 19, disappears after wealth 29)
- **Simple Clothing** (starts at 23 at wealth 1, reaches maximum of 43 at wealth 9, disappears after wealth 14)
- **Standard Clothing** (starts at 7 at wealth 10, reaches maximum of 161 at wealth 25-39, disappears after wealth 39)
- **Crude Items** (starts at 13 at wealth 5, reaches maximum of 43 at wealth 9, disappears after wealth 14)
- **Household Items** (starts at 7 at wealth 10, reaches maximum of 238 at wealth 31-44, disappears after wealth 44)
- **Stimulants** (starts at 7 at wealth 6, reaches maximum of 56 at wealth 23, disappears after wealth 30)

### Constant needs
Constant needs mapped to wealth 1 - 60

Constant needs appear at some wealth level, grow to a certain degree (rather linearly) and then remain at their maximum for all further increasing wealth levels.

Constant needs are:

- **Heating** (reaches constant 26 at wealth 10 after brief peak at wealth 9)
- **Intoxicants** (reaches constant 216 at wealth 30)

### Exponential needs
Exponential needs mapped to wealth 1 - 60

Exponential needs appear at some wealth level and grow continuously, slowly at first and then faster and faster (i.e. exponentially).

Exponential needs are:

- **Luxury Food** (starts with 8 at wealth 20, reaches 3,859 at wealth 60)
- **Luxury Items** (starts with 11 at wealth 15, reaches 9,648 at wealth 60)
- **Luxury Drinks** (starts with 21 at wealth 15, reaches 3,859 at wealth 60)
- **Services** (starts with 24 at wealth 10, reaches 6,561 at wealth 60)
- **Free Movement** (starts with 3 at wealth 10, reaches 3,859 at wealth 60)
- **Communication** (starts with 16 at wealth 20, reaches 3,859 at wealth 60)
- **Leisure** (starts with 16 at wealth 20, reaches 9,648 at wealth 60)

## References
1. [↑](#cite_ref-1) /Victoria 3/game/common/pop\_needs/00\_pop\_needs.txt
2. [↑](#cite_ref-2) See `MAX_DEMAND_ADJUSTMENT_BASE_AMOUNT`, `MAX_DEMAND_ADJUSTMENT_SCALED_AMOUNT`, and `MAX_DEMAND_ADJUSTMENT_SCALE` in /Victoria 3/game/common/defines/00\_defines.txt.
3. [↑](#cite_ref-3) `consumption_mult` at /Victoria 3/game/common/pop\_types/peasants.txt
4. [↑](#cite_ref-4) `WORKING_ADULT_RATIO_BASE` at /Victoria 3/game/common/defines/00\_defines.txt
5. [↑](#cite_ref-5) `DEPENDENT_CONSUMPTION_RATIO` at /Victoria 3/game/common/defines/00\_defines.txt
6. [↑](#cite_ref-6) The 'non-pop buy orders' aspect of the formula was discovered by Reddit user banjo\_martian [Reddit Post by u/banjo\_martian in November '22](https://www.reddit.com/r/victoria3/comments/yudc80/pop_needs_consumer_good_substitution_and_why_oil/)

**Game concepts**

| Pops | Pops • [Acceptance](https://vic3.paradoxwikis.com/Acceptance) • [Culture](https://vic3.paradoxwikis.com/Culture) • [Migration](https://vic3.paradoxwikis.com/Migration) • Needs • [Professions](https://vic3.paradoxwikis.com/Profession) • [Religion](https://vic3.paradoxwikis.com/Religion) • Standard of living |

| Government | [Government](https://vic3.paradoxwikis.com/Government) • [Capacities](https://vic3.paradoxwikis.com/Capacity) • [Characters](https://vic3.paradoxwikis.com/Character) • [Decrees](https://vic3.paradoxwikis.com/Decrees) • [Institutions](https://vic3.paradoxwikis.com/Institutions) • [Laws](https://vic3.paradoxwikis.com/Laws) • [Technology](https://vic3.paradoxwikis.com/Technology) |

| Politics | [Elections](https://vic3.paradoxwikis.com/Elections) • [Ideology](https://vic3.paradoxwikis.com/Ideology) • Interest group • [Political lobby](https://vic3.paradoxwikis.com/Political_lobby) • Political movement • [Political party](https://vic3.paradoxwikis.com/Political_party) • [Revolution](https://vic3.paradoxwikis.com/Revolution) |

| Economy | [Buildings](https://vic3.paradoxwikis.com/Building) • [Goods](./Goods.md) • Harvest condition • [Infrastructure](https://vic3.paradoxwikis.com/Infrastructure) • [Market](https://vic3.paradoxwikis.com/Market) • [Production methods](https://vic3.paradoxwikis.com/Production_methods) • [State](https://vic3.paradoxwikis.com/State) • [Treasury](https://vic3.paradoxwikis.com/Treasury) |

| Diplomacy | [Diplomacy](https://vic3.paradoxwikis.com/Diplomacy) • [Diplomatic action](https://vic3.paradoxwikis.com/Diplomatic_action) • [Diplomatic play](https://vic3.paradoxwikis.com/Diplomatic_play) • [Power bloc](https://vic3.paradoxwikis.com/Power_bloc) • [Ranks](./Rank.md) • [Subjects](https://vic3.paradoxwikis.com/Subject) • [Treaties](https://vic3.paradoxwikis.com/Treaty) |

| Warfare | [Warfare](https://vic3.paradoxwikis.com/Warfare_overview) • [Land warfare](https://vic3.paradoxwikis.com/Land_warfare) • [Naval warfare](./Naval warfare.md) • [Wargoals](https://vic3.paradoxwikis.com/Wargoal) • [Conscription](https://vic3.paradoxwikis.com/Conscription) |

| Others | [Countries](https://vic3.paradoxwikis.com/Countries) • [Decisions](https://vic3.paradoxwikis.com/Decision) • [Events](https://vic3.paradoxwikis.com/Events) • [Journal](https://vic3.paradoxwikis.com/Journal) • [Objectives](https://vic3.paradoxwikis.com/Objective) • [Vickypedia](https://vic3.paradoxwikis.com/Vickypedia) |
