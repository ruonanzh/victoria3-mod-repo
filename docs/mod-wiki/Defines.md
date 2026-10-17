# Defines

This article has been verified for the current version (1.13) of the game.

**Defines** are variables used by the engine. They regulate basic game behaviors and settings that are not opened to scripting (IG approval thresholds, camera field-of-view, etc.).

Defines are static and global: they apply to the whole game and cannot be changed dynamically.

Vanilla values are configured in the folder /Victoria 3/game/common/defines, primarily in `00_defines.txt`.

Each of the lists on this represents a section of the defines; in the defines files, these sections are all prefixed with `N`, for example `NCountry`.

## Define modding
Defines can be modified individually or in batches without overwriting an entire defines file. This better preserves compatibility and makes it easier to keep up with changes in future patches.

To modify a define, create a new file in <mod>/common/defines/ that loads after the base game files such as `01_mod_defines.txt`. In that file, add a block for each set of defines to be modified and include the modified defines in those blocks, for example

```
NCountry = {
	INCORPORATION_TIME_NO_MATCH = 100	# Base game 20 years; Years if the state's Homeland cultures have nothing in common with the country's primary cultures
}

NDiplomacy = {
	COUNTRY_TIER_HEGEMONY_PRESTIGE = 150	# Base game 50
}
```

In the case of multiple mods modifying the same define, the mod with the last loaded filename determines the final value of the define.

## 00\_defines
### Game
| Define | Default Value | Dev Comment |
| START\_DATE | "1836.1.1" |  |
| END\_DATE | "1936.1.1" |  |
| SAVE\_VERSION | 0 |  |
| MP\_LAG\_TICKS\_BOUNDS | 28 | # Host will advance up to a week ahead of players ( 7 \* 4 ) |
| DEAD\_OBJ\_UNDESTROYED\_DAYS | 22 | # number of days "killed"/removed objects will persist in memory before ultimately destroyed as they are referenced by events etc |
| MAX\_NUMBER\_OF\_AUTOSAVES | 5 | # The game will only keep the MAX\_NUMBER\_OF\_AUTOSAVES latest autosaves. |
### JominiMap
| Define | Default Value | Dev Comment |
| WORLD\_EXTENTS\_X | 8192 |  |
| WORLD\_EXTENTS\_Y | 24 | #This determines the max height of the world. Original settings = 25.5 |
| WORLD\_EXTENTS\_Z | 3615 |  |
| WATERLEVEL | 1.74 | #Original Settings 3.7 |

### Country
| Define | Default Value | Dev Comment |
| DEFAULT\_COUNTRY\_TYPE | "recognized" |  |
| COMPANY\_COUNTRY\_TYPE | "company" |  |
| COMPANY\_FALLBACK\_COUNTRY\_TYPE | "colonial" |  |
| DEFAULT\_MAX\_NUM\_COUNTRY\_FORMATION\_CANDIDATES | 3 | # If nothing is specified in the country formation, this is used |
| COUNTRY\_FORMATION\_CANDIDATE\_MIN\_RANK | 6 | # countries with a lower rank value than this cannot be formation candidates |
| MOVE\_CAPITAL\_COOLDOWN\_YEARS | 5 |  |
| MOVE\_MARKET\_CAPITAL\_COOLDOWN\_YEARS | 5 |  |
| MAX\_POWER\_EFFECT | 1.0 | # The max by which a power excess/deficiency modifier can scale |
| GREAT\_POWER\_RANK\_KEY | "great\_power" |  |
| MAJOR\_POWER\_RANK\_KEY | "major\_power" |  |
| MINOR\_POWER\_RANK\_KEY | "minor\_power" |  |
| SPLIT\_STATE\_DOMINANT\_LAND\_SHARE\_THRESHOLD | 0.5 | # States with more land share than this can use the region's name |
| SPLIT\_STATE\_PRIME\_LAND\_WEIGHT | 5.0 |  |
| CAPITAL\_CULTURE\_CORE\_WEIGHT | 10 |  |
| CAPITAL\_NON\_INCORPORATED\_WEIGHT | 0.001 |  |
| DEFAULT\_SUBSISTENCE\_BUILDING | "building\_subsistence\_farm" |  |
| CONSTRUCTION\_CAMP\_BUILDING | "building\_construction\_sector" |  |
| BARRACKS\_BUILDING | "building\_barrack" |  |
| NAVAL\_ADMINISTRATION\_BUILDING | "building\_naval\_administration" |  |
| NAVAL\_FORTIFICATION\_BUILDING | "building\_naval\_fortification" |  |
| PORT\_BUILDING | "building\_port" |  |
| URBAN\_CENTER\_BUILDING | "building\_urban\_center" |  |
| CONSCRIPTION\_CENTER\_BUILDING | "building\_conscription\_center" |  |
| NAVAL\_LOGISTICS\_CENTER\_BUILDING | "building\_naval\_logistics\_center" |  |
| LAND\_LOGISTICS\_CENTER\_BUILDING | "building\_land\_logistics\_center" |  |
| CONSCRIPTION\_CENTER\_LEVEL\_POPULATION\_DIVISOR | 1000 | # Civilian population is divded by this amount to calculate maximum conscription center level [>=1] |
| TRADE\_CENTER\_BUILDING | "building\_trade\_center" |  |
| MANOR\_HOUSE\_BUILDING | "building\_manor\_house" |  |
| FINANCIAL\_DISTRICT\_BUILDING | "building\_financial\_district" |  |
| RAILWAY\_BUILDING | "building\_railway" |  |
| POWER\_BLOC\_STATUE\_BUILDING | "building\_power\_bloc\_statue" |  |
| COMPANY\_HEADQUARTER\_BUILDING | "building\_company\_headquarter" |  |
| COMPANY\_REGIONAL\_HEADQUARTER\_BUILDING | "building\_company\_regional\_headquarter" |  |
| CONSTRUCTION\_QUEUE\_INCREMENT\_SHIFT | 5 | # Increment/Decrement used for buildings construction queue when holding down Shift |
| CONSTRUCTION\_QUEUE\_INCREMENT\_CONTROL | 10 | # Increment/Decrement used for buildings construction queue when holding down Ctrl |
| WEEKS\_TO\_STORE\_LOYALIST\_RADICAL\_STATISTICS | 52 | # Number of weeks of statistics for loyalists/radicals that is stored and shown |
| INCORPORATION\_TIME\_SAME\_CULTURE | 2 | # Years if the state is a Homeland of one of the country's primary cultures |
| INCORPORATION\_TIME\_SAME\_HERITAGE\_AND\_LANGUAGE | 5 | # Years if the state is a Homeland of a culture that matches of one of the country's primary cultures' Heritage and Language traits |
| INCORPORATION\_TIME\_SAME\_HERITAGE\_OR\_LANGUAGE | 10 | # Years if the state is a Homeland of a culture that matches of one of the country's primary cultures' Heritage traits |
| INCORPORATION\_TIME\_SAME\_TRAIT\_GROUP | 15 | # Years if the state is a Homeland of a culture with any trait in common with a country's primary cultures |
| INCORPORATION\_TIME\_NO\_MATCH | 25 | # Years if the state's Homeland cultures have nothing in common with the country's primary cultures |
| INCORPORATION\_TIME\_MIN\_MULTIPLIER | 0.1 | # Incorporation speed cannot be reduced below this by modifiers |
| JOURNAL\_ENTRY\_UPDATE\_ACTIVE | 4 | # Number of ticks between each update of Active (Possible) Journal Entries, can be overriden on journal entry type |
| JOURNAL\_ENTRY\_UPDATE\_INACTIVE | 14 | # Number of ticks between each update of Inactive Journal Entries, can be overriden on journal entry type |
| MAX\_TRADITION\_TRAITS\_PER\_CULTURE | 4 | # How many tradition traits a culture is allowed to have at most |
### Politics
| Define | Default Value | Dev Comment |
| GOVERNANCE\_PRINCIPLES\_GROUP | "lawgroup\_governance\_principles" | # Law from this group is used for the power\_bloc\_worst\_progressiveness\_difference\_government\_type trigger to represent the Governance Principle |
| DISTRIBUTION\_OF\_POWER\_GROUP | "lawgroup\_distribution\_of\_power" | # Law from this group is used for the power\_bloc\_worst\_progressiveness\_difference\_government\_type trigger to represent the Distribution of Power |
| TARIFF\_LAW\_GROUP | "lawgroup\_trade\_policy" | # Law from this group is shown to player as their tariff law |
| TAX\_LAW\_GROUP | "lawgroup\_taxation" | # Law from this group is shown to player as their tax law |
| NUM\_TIMES\_TO\_LOOP\_THROUGH\_LAWS | 3 | # When creating a law set, how many times do we loop through all law groups? This is done more than once in order to allow laws that are unlocked by other laws to be changed |
| DEFAULT\_IDEOLOGY | "ideology\_moderate" | # Used as a fallback if an ideology cannot be selected for a character |
| CHILD\_IDEOLOGY | "ideology\_child" | # Children use this ideology, which is swapped out once they turn 16 |
| MIN\_POP\_NUMBER\_JOIN\_OR\_LEAVE\_IG | 10 | # Min for maximum amount of pops/support that will change IG in a single update (overrides below max fraction) |
| MAX\_POP\_FRACTION\_JOIN\_OR\_LEAVE\_IG | 0.05 | # Maximum amount of a pop that can change IGs in a single update (for each IG) |
| MIN\_POP\_NUMBER\_JOIN\_OR\_LEAVE\_MOVEMENT | 10 | # Min for maximum amount of pops/support that will change political movements in a single update (overrides below max fraction) |
| MAX\_POP\_FRACTION\_JOIN\_OR\_LEAVE\_MOVEMENT | 0.1 | # Maximum amount of a pop that can change political movements in a single update (for each movement) |
| MOVEMENT\_POP\_SUPPORT\_ATTRACTION\_CAP | 0.01 | # The fraction of individuals in a pop that will support a movement is capped at ( movement attraction \* this ) so that movements with low attraction but no competition won't attract every single pop in the country |
| ``` # For a movement with a cultural/religious identity to spawn, the culture/religion must meet at least one of the two thresholds below: ``` | | |
| MOVEMENT\_IDENTITY\_MIN\_INDIVIDUALS\_ABSOLUTE\_THRESHOLD | 200000 | # Absolute number of individuals |
| MOVEMENT\_IDENTITY\_MIN\_INDIVIDUALS\_RELATIVE\_THRESHOLD | 0.2 | # Number of individuals relative to country population |
| MOVEMENT\_DEFAULT\_MIN\_SUPPORT\_TO\_CREATE | 0.025 | # Default support (as calculated value) required to create a political movement, can be overriden in database |
| MOVEMENT\_DEFAULT\_MIN\_SUPPORT\_TO\_MAINTAIN | 0.01 | # Default support (as actual value) required to maintain a political movement, can be overriden in database |
| MOVEMENT\_FAILED\_MOVEMENT\_DURATION\_DAYS | 365 | # For how long do we remember that a political movement failed to be created and do not try again for that exact same movement |
| MOVEMENT\_MIN\_SUPPORT\_GRACE\_MONTHS | 12 | # A political movement cannot disband due to low support for this many months after its creation |
| MOVEMENT\_AGITATOR\_STICKYNESS | 2.0 | # Agitators apply this multiplier to the score for a movement they are already backing when considering whether to switch movements |
| ``` # The three defines below should add up to 1.0 ``` | | |
| MOVEMENT\_SUPPORT\_POPULAR\_SUPPORT\_FRACTION | 0.34 | # This fraction a political movement's total support comes from its popular support |
| MOVEMENT\_SUPPORT\_MILITARY\_SUPPORT\_FRACTION | 0.33 | # This fraction a political movement's total support comes from its military support |
| MOVEMENT\_SUPPORT\_WEALTH\_SUPPORT\_FRACTION | 0.33 | # This fraction a political movement's total support comes from its wealth support |
| MOVEMENT\_WEEKLY\_RADICALISM\_CHANGE | 0.01 | # How much does a movement's radicalism change towards its calculated target each week |
| MOVEMENT\_MONTHLY\_RADICALS\_THRESHOLD | 0.5 | # At this level of radicalism, movement supporters start being radicalized each month at an amount scaled by the radicalism value |
| MOVEMENT\_MONTHLY\_RADICALS\_SCALING\_MIN | 0.005 | # The minimum % of supporters radicalized each month when above the radicalization threshold |
| MOVEMENT\_MONTHLY\_RADICALS\_SCALING\_MAX | 0.025 | # The maximum % of supporters radicalized each month when above the radicalization threshold |
| MOVEMENT\_LOYALISTS\_ON\_APPROVED\_ENACTMENT | 0.25 | # The % of supporters who become more loyal when a law the movement approves of is enacted |
| ``` # Movements with less radicalism than this do not impact law enactment chances # Additionally, movement radicalism won't drop lower than than this when enactment of a law they care about is underway, so lowered radicalism from enactment doesn't end up counterproductive ``` | | |
| MOVEMENT\_MIN\_RADICALISM\_FOR\_LAW\_ENACTMENT\_IMPACT | 0.25 |  |
| MOVEMENT\_IMMEDIATE\_RADICALISM\_FROM\_ENACTMENT | 0.5 | # This multiplier of target radicalism impact from law enactment is applied immediately on start of enactment |
| MOVEMENT\_IMMEDIATE\_RADICALISM\_FROM\_CANCELLATION | -0.5 | # This multiplierof target radicalism impact from law enactment is applied immediately on cancellation of enactment |
| MOVEMENT\_RADICALISM\_FROM\_ACTIVE\_LAW\_STANCE | -0.05 | # Multiplied by a movement's stance on each active law (positive stance = negative radicalism) |
| MOVEMENT\_RADICALISM\_FROM\_ENACTED\_LAW\_STANCE | -0.25 | # Multiplied by a movement's comparative stance on currently or recently enacted law (positive stance = negative radicalism) |
| MOVEMENT\_RADICALISM\_FROM\_RADICAL\_SUPPORTERS | 1.0 | # Scales against fraction of radicals among movement supporters |
| MOVEMENT\_RADICALISM\_FROM\_LOYALIST\_SUPPORTERS | -0.75 | # Scales against fraction of loyalists among movement supporters |
| MOVEMENT\_RADICALISM\_FROM\_SUPPRESSION | 0.0 | # Suppressed movements become this much more radical |
| MOVEMENT\_RADICALISM\_FROM\_BOLSTERING | 0.0 | # Bolstered movements become this much less radical |
| MOVEMENT\_PRESSURE\_IDEOLOGY\_FACTOR | 4.0 | # The chance for a character from an IG to pick an ideology is increased with the amount of pressure exerted from movements espousing that ideology # At 100% pressure, the weight for the ideology is multiplied by ( 1 + this ) |
| colspan=3 | ``` # The chance for the next leader of the IG to follow an ideology is increased with the total prominence of potential leaders espousing that ideology # Unlike movement pressure this effect is not applied when generating ideology for other characters from that IG # This value is also affected by role-specific weights on IGs, such as commander_leader_weight for prominence from commanders # The multiplier is ( 1 + ( this * total prominence multiplied by role weights ) ) ``` |
| CHARACTER\_PROMINENCE\_AND\_ROLE\_LEADER\_IDEOLOGY\_FACTOR | 0.04 |  |
| IG\_MAX\_INFLUENCING\_MOVEMENTS | 3 | # An interest group cannot have more than this number of influencing movements |
| IG\_SUPPORTING\_MOVEMENT\_MIN\_SUPPORTING\_CLOUT | 0.05 | # A movement must be supported by at least this % of the clout in an IG to be shown as a supporting IG for the movement |
| IG\_INFLUENCING\_MOVEMENT\_MIN\_SUPPORTING\_CLOUT | 0.10 | # A movement must be supported by at least this % of the clout in an IG to be a influencing movement for the IG |
| IG\_INFLUENCING\_MOVEMENT\_STICKYNESS | 1.25 | # Multiply supporting clout of the currently influencing movement in an IG by this for the purposes of determining whether it stays influencing |
| ``` # The values below determine how ideologically divergent an IG can be from an insurrectionary political movement and still join on the civil war side, based on their level of approval # Happy/Loyal IGs will never join civil wars ``` | | |
| IG\_MAX\_IDEOLOGICAL\_DELTA\_TO\_JOIN\_CIVIL\_WAR\_NEUTRAL | 1 |  |
| IG\_MAX\_IDEOLOGICAL\_DELTA\_TO\_JOIN\_CIVIL\_WAR\_UNHAPPY | 1.5 |  |
| IG\_MAX\_IDEOLOGICAL\_DELTA\_TO\_JOIN\_CIVIL\_WAR\_ANGRY | 2 |  |
| ``` # Laws that the IG leader's ideology has an opinion has this multiplier for their impact on ideological divergence for joining civil wars ``` | | |
| IG\_MAX\_IDEOLOGICAL\_DELTA\_TO\_JOIN\_CIVIL\_WAR\_LEADER\_FACTOR | 2.0 |  |
| BASE\_IG\_APPROVAL | 0 | # Baseline IG approval |
| MIN\_IG\_APPROVAL | -20 | # Minimum IG approval |
| MAX\_IG\_APPROVAL | 20 | # Maximum IG approval |
| MIN\_IG\_APPROVAL\_FROM\_LAWS | -5 | # IG cannot have approval lower than this as a total from laws 'on the book' |
| MAX\_IG\_APPROVAL\_FROM\_LAWS | 5 | # IG cannot have approval higher than this as a total from laws 'on the book' |
| IG\_APPROVAL\_FROM\_LOYALISTS | 15 | # If 100% of the political strength of the IG is loyalist, change approval by this amount |
| IG\_APPROVAL\_FROM\_RADICALS | -15 | # If 100% of the political strength of the IG is radical, change approval by this amount |
| IG\_LAW\_DESIRE\_RADICAL\_CHANGE\_THRESHOLD | 2 | # A difference in positions this or higher is considered radical |
| IG\_LAW\_DESIRE\_EXTREME\_CHANGE\_THRESHOLD | 3 | # A difference in positions this or higher is considered extreme |
| IG\_APPROVAL\_FROM\_LAW | 1 | # IG approval/disapproval for laws that are for/against their ideologies |
| IG\_APPROVAL\_FROM\_LAW\_STRONG\_STANCE | 2 | # IG approval/disapproval for laws that are strongly for/against their ideologies |
| IG\_APPROVAL\_FROM\_LAW\_CHANGE | 5 | # IG approval/disapproval for changing to another law |
| IG\_APPROVAL\_FROM\_RADICAL\_LAW\_CHANGE | 10 | # IG approval/disapproval for changing to another law, if the change is a major one |
| IG\_APPROVAL\_FROM\_EXTREME\_LAW\_CHANGE | 20 | # IG approval/disapproval for changing to another law, if the change is extreme |
| IG\_IN\_GOVERNMENT\_APPROVAL | 0 | # Added if IG is in government |
| IG\_IN\_OPPOSITION\_APPROVAL | 0 | # Added if IG is in opposition (and not powerful) |
| IG\_POWERFUL\_IN\_OPPOSITION\_APPROVAL | -1 | # Added if powerful IG in opposition |
| STARTUP\_MIN\_LEGITIMACY\_IG\_BARRIER | 40 | # Min legitimacy when on startup we allow to remove IGs from goverment that decrease legitimacy |
| APPROVAL\_THRESHOLD\_ANGRY | -10 | # At this or below approval, IG is considered angry |
| APPROVAL\_THRESHOLD\_UNHAPPY | -5 | # At this or below approval, IG is considered unhappy |
| APPROVAL\_THRESHOLD\_HAPPY | 5 | # At this or above approval, IG is considered happy |
| APPROVAL\_THRESHOLD\_LOYAL | 10 | # At this or above approval, IG is considered loyal |
| CHANGED\_LAW\_APPROVAL\_MONTHS | 60 | # How many months does the approval/disapproval for a law change linger after said law chain |
| ``` # If the difference in progressiveness between the currently active law and an alternative law is this, then it's considered a radical petition # Radical petitions will only happen if there isn't a less extreme alternative that the government could petition for instead ``` | | |
| GOVERNMENT\_RADICAL\_PETITION\_THRESHOLD | 100 |  |
| LAW\_ENACTMENT\_MIN\_TOTAL\_DAYS | 1 | # Minimum number of total days that an enactment checkpoint can take [>=1] |
| LAW\_ENACTMENT\_DEFAULT\_BASE\_DAYS | 100 | # Default number of base days required to reach an enactment checkpoint [>=1] |
| LAW\_ENACTMENT\_COOLDOWN\_DAYS | 730 | # When an enactment fails, or is manually stopped after at least one checkpoint, that law can't be tried to be enacted for this many days [>=0] |
| LAW\_ENACTMENT\_ADVANCE\_FACTOR | 2 | # The \_base\_ advance chance is the success chance multiplied by this factor [>=1] |
| LAW\_ENACTMENT\_RULER\_IDEOLOGY\_EFFECT | 0.05 | # Ruler ideology has this impact on a law's chance to pass or stall depending on relative approval |
| LAW\_ENACTMENT\_LAW\_COMMITMENT\_EFFECT | 0.05 | # Committing to enacting a law via treaty adds this much to pass chance, scaled by the number of ranks the country the comittee has on the committer |
| LAW\_ENACTMENT\_MOVEMENT\_SUPPORT\_PASS\_EFFECT | 1.0 | # Movement support has this impact on a law's chance to pass |
| LAW\_ENACTMENT\_MOVEMENT\_SUPPORT\_STALL\_EFFECT | 1.0 | # Movement support has this impact on a law's chance to stall |
| LAW\_ENACTMENT\_IG\_CLOUT\_STALL\_EFFECT | 1.0 | # Opposing IG clout has this base impact on a law's chance to stall |
| LAW\_ENACTMENT\_IG\_NEUTRAL\_MULT | 0.5 | # Stall effect of opposing IG is multiplied by this for neutral IGs |
| LAW\_ENACTMENT\_IG\_UNHAPPY\_MULT | 1.0 | # Stall effect of opposing IG is multiplied by this for unhappy IGs |
| LAW\_ENACTMENT\_IG\_ANGRY\_MULT | 1.5 | # Stall effect of opposing IG is multiplied by this for angry IGs |
| LAW\_ENACTMENT\_MAX\_PHASES | 3 | # Law enactment is successfully completed when it advances to this phase |
| LAW\_MIN\_SUCCESS\_CHANCE | 0.01 | # Law must have at least this minimum chance to be considered. |
| STATE\_BUREAUCRACY\_BASE\_COST | 10 | # The base cost per incorporated state |
| STATE\_BUREAUCRACY\_POP\_BASE\_COST | 4 | # The base BUR multiplier per population multiple |
| STATE\_BUREAUCRACY\_POP\_MULTIPLE | 100000 | # Number of people BUR cost is based on |
| MINIMUM\_INVESTMENT\_COST | 10 | # The absolute minimum cost in BUR per investment level |
| POWERFUL\_IG\_THRESHOLD | 0.20 | # Interest groups with more Clout than this are considered to be influential |
| POWERFUL\_IG\_CUTOFF | 0.18 | # Powerful interest groups with less Clout than this will stop being influential |
| POWERFUL\_IG\_TRAIT\_BONUS | 1 | # The effects of all trait modifiers from influential IGs are increased by this, 1 = +100% |
| IG\_TRAIT\_STICKINESS | 2 | # If an IG trait is already active, this is the amount of Approval difference required to deactivate it |
| MARGINAL\_IG\_THRESHOLD | 0.05 | # Interest Groups with Clout above this value are considered relevant while those below are marginal (if not also In Government) |
| MARGINAL\_IG\_CUTOFF | 0.04 | # Interest Groups who are already relevant will only become marginal again if they drop below this value. |
| MARGINAL\_IG\_JOIN\_PARTY\_POPULATION\_THRESHOLD | 0.025 | # Marginal IGs that are supported by at least this % of the population are able to join parties and become non-marginal |
| MIN\_AMENABILITY | 0 |  |
| MAX\_AMENABILITY | 100 |  |
| MIN\_AMENABILITY\_TENSE\_NEGOTIATION | 25 |  |
| MIN\_AMENABILITY\_NORMAL\_NEGOTIATION | 50 |  |
| MIN\_AMENABILITY\_FRIENDLY\_NEGOTIATION | 75 |  |
| RECENT\_PARTY\_DAYS | 14 | # Party is considered recently formed if activated within RECENT\_PARTY\_DAYS days range |
| MAX\_GOVERNMENT\_ALTERNATIVES\_TO\_CONSIDER\_AI | 64 | # When evaluating government reform options (for AI), only consider this many constellations (sorted by average clout, descending) [>=1] |
| MAX\_GOVERNMENT\_ALTERNATIVES\_TO\_CONSIDER\_PLAYER | 256 | # When evaluating government reform options (the 3 suggested to the player in the UI), only consider this many constellations (sorted by average clout, descending) [>=3] |
| MAX\_GOVERNMENT\_ALTERNATIVES\_OPTIONS\_WANTED\_FOR\_VALIDATION | 8 | # When evaluating government reform options during government validation stage |
| MAX\_GOVERNMENT\_ALTERNATIVES\_TO\_CONSIDER\_FOR\_VALIDATION | 256 | # When evaluating government reform options during government validation stage |
| DEFAULT\_LAW\_ACTIVATION\_DATE | "1836.1.1" |  |
| CIVIL\_WAR\_COOLDOWN\_MONTHS | 9 | # After a civil war concludes, it takes this long before another one can start |
| FAILED\_CIVIL\_WAR\_START\_COOLDOWN\_MONTHS | 3 | # If a movement fails to get any supporting states or (for revolutions) supporting army units when trying to start a civil war, wait this long before trying again |
| ``` # If there are multiple civil wars that could start, and the current active one has lower activism, it can potentially be replaced by a more viable civil war # This is the minimum delta required for another civil war to replace the active one ``` | | |
| MIN\_ACTIVISM\_DELTA\_TO\_REPLACE\_OTHER\_CIVIL\_WAR | 0.1 |  |
| ``` # The values below are used to calculate the target number of states that rise up when a civil war without an explicit target_fraction_of_states begins # This is just a target value - the end result may end up different based on state weights defined in the civil war scripting ``` | | |
| CIVIL\_WAR\_UPRISING\_STATES\_DEFAULT\_CLOUT\_FACTOR | 1.0 | # Fraction of total states in country, multiplied by revolutionary IG clout |
| CIVIL\_WAR\_UPRISING\_STATES\_DEFAULT\_POPULAR\_SUPPORT\_FACTOR | 0.5 | # Fraction of total states in country, multiplied by movement popular support |
| CIVIL\_WAR\_UPRISING\_STATES\_DEFAULT\_MILITARY\_SUPPORT\_FACTOR | 0.25 | # Fraction of total states in country, multiplied by movement military support |
| CIVIL\_WAR\_UPRISING\_STATES\_DEFAULT\_WEALTH\_SUPPORT\_FACTOR | 0.25 | # Fraction of total states in country, multiplied by movement wealth support |
| CIVIL\_WAR\_UPRISING\_STATES\_DEFAULT\_MIN\_FRACTION | 0.10 | # Min fraction of total states in country that will try to rise up |
| CIVIL\_WAR\_UPRISING\_STATES\_DEFAULT\_MAX\_FRACTION | 0.75 | # Max fraction of total states in country that will try to rise up |
| CIVIL\_WAR\_POTENTIAL\_UPRISING\_STATE\_MIN\_MULTIPLIER | 0.01 | # The weight for an uprising state cannot be reduced below this by local clout/identity share of population |
| CIVIL\_WAR\_UPRISING\_STATE\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random uprising state selection will be |
| CIVIL\_WAR\_UPRISING\_STATE\_CONNECTIONS\_FACTOR | 1.0 | # The score of an uprising state is multiplied by ( 1 + this number \* the number of other uprising states it connects to ) |
| CIVIL\_WAR\_UPRISING\_STATE\_NON\_CONNECTED\_SECESSION\_FACTOR | 0.01 | # The score of an uprising state is multiplied by this for seceding states that are not connected to any other rebel states in the same area |
| CIVIL\_WAR\_UPRISING\_ISOLATED\_STATE\_FACTOR | 100.0 | # The score of an uprising state is multiplied by this if it's isolated from the most loyalist state by uprising states |
| CIVIL\_WAR\_NON\_CONTIGUOUS\_UPRISING\_STATE\_FACTOR | 0.25 | # The score of an uprising state is multiplied by this if it would end up cutting off a number of loyalist states greater than the remaining number of states that should rebel |
| CIVIL\_WAR\_UPRISING\_ARMY\_TARGET\_DELTA\_FACTOR | 10.0 | # How heavily are states weighted towards or against rising up based on how their defection will affect the ideal number of army units that should be rebelling |
| CIVIL\_WAR\_UPRISING\_NAVY\_TARGET\_DELTA\_FACTOR | 5.0 | # How heavily are states weighted towards or against rising up based on how their defection will affect the ideal number of navy units that should be rebelling |
| ``` # Overseas areas of the country that are considered colonial will either be fully loyal or fully rebellious, as determined by the logic below ``` | | |
| CIVIL\_WAR\_UPRISING\_STATES\_OVERSEAS\_HIGH\_UNINCORPORATED\_FRACTION | 0.5 | # At this % of unincorporated states or above in non capital area, it will be considered 'colonial' even if it has a close sea adjancency to capital |
| CIVIL\_WAR\_COLONIAL\_UPRISING\_MIN\_CHANCE | 0.25 | # If the chance for a colonial area to rebel is below this, it will always stay loyal |
| CIVIL\_WAR\_COLONIAL\_UPRISING\_CHANCE\_WEALTH\_SUPPORT\_FACTOR | 2.0 | # Chance for each colonial area to rebel, multiplied by insurrectionary movement wealth support |
| CIVIL\_WAR\_COLONIAL\_UPRISING\_CHANCE\_CLOUT\_FACTOR | 1.0 | # Chance for each colonial area to rebel, multiplied by insurrectionary IG clout in the area |
| CIVIL\_WAR\_UPRISING\_STATE\_EXCESSIVE\_ARMY\_FRACTION | 0.5 | # If a state contains at least this much of the area's army |
| CIVIL\_WAR\_UPRISING\_ARMY\_FRACTION\_MILITARY\_SUPPORT\_FACTOR | 0.75 | # Target fraction of the army that should rebel, multiplied by insurrectionary movement military support |
| CIVIL\_WAR\_UPRISING\_ARMY\_FRACTION\_CLOUT\_FACTOR | 0.25 | # Target fraction of the army that should rebel, multiplied by insurrectionary IG clout in the area |
| CIVIL\_WAR\_UPRISING\_NAVY\_FRACTION\_MILITARY\_SUPPORT\_FACTOR | 0.75 | # Target fraction of the navy that should rebel, multiplied by insurrectionary movement military support |
| CIVIL\_WAR\_UPRISING\_NAVY\_FRACTION\_CLOUT\_FACTOR | 0.25 | # Target fraction of the navy that should rebel, multiplied by insurrectionary IG clout in the area |
| ``` # Insurrectionary countries receive an injection of military goods in their capital, below values control which goods and in which quantities # Multiplies are based on the states assigned to the civil war and the pre-civil war market sell & buy orders ``` | | |
| CIVIL\_WAR\_STOCKPILE\_SMALL\_ARMS\_GOODS\_TYPE | "small\_arms" |  |
| CIVIL\_WAR\_STOCKPILE\_SMALL\_ARMS\_MULTIPLIER | 0.80 |  |
| CIVIL\_WAR\_STOCKPILE\_AMMUNITION\_GOODS\_TYPE | "ammunition" |  |
| CIVIL\_WAR\_STOCKPILE\_AMMUNITION\_MULTIPLIER | 0.80 |  |
| CIVIL\_WAR\_STOCKPILE\_ARTILLERY\_GOODS\_TYPE | "artillery" |  |
| CIVIL\_WAR\_STOCKPILE\_ARTILLERY\_MULTIPLIER | 0.65 |  |
| CIVIL\_WAR\_MAX\_PROGRESS\_AT\_CHECKPOINT | 0.25 | # A civil war can advance at most this amount per checkpoint, regardless of radicalism |
| MIN\_RADICALISM\_FOR\_CIVIL\_WAR\_PROGRESSION | 0.75 | # A political movement must have this much radicalism for a civil war to start organizing |
| MIN\_RADICALISM\_FOR\_CIVIL\_WAR\_START | 1.0 | # Allow a civil war to start at this amount of radicalism or more |
| CIVIL\_WAR\_PROGRESS\_DECAY | 0.1 | # The progress of civil wars with insufficient support decays at this rate |
| CIVIL\_WAR\_PROGRESS\_RADICALISM\_WEIGHT | 0.2 | # civil wars gain progress based on the movement's radicalism, multiplied by this weight (may be affected by modifiers) |
| CIVIL\_WAR\_CHECKPOINT\_INTERVAL\_BASE\_WEEKS | 8 | # civil war progress will be updated every this many weeks (may be affected by modifiers) |
| CIVIL\_WAR\_CHECKPOINT\_INTERVAL\_MAXIMUM\_WEEKS | 52 | # This serves as a limit, to protect modifiers from reducing the progress speed to zero |
| CIVIL\_WAR\_CONSCRIPTION\_RATE\_POPULAR\_SUPPORT\_MULTIPLIER | 0.25 | # At 100% popular support, insurrectionary states gain this multiplier of civil\_war\_conscription modifier |
| CIVIL\_WAR\_CONSCRIPTION\_RATE\_CLOUT\_MULTIPLIER | 0.05 | # At 100% clout from supporting IGs, insurrectionary states gain this multiplier of civil\_war\_conscription modifier |
| CIVIL\_WAR\_CONSCRIPTION\_RATE\_MAX\_MULTIPLIER | 0.1 | # Total multiplier of civil\_war\_conscription modifier cannot exceed this number (this is intentionally much lower than the possible maximum scaling above, as movements very rarely have >10-20% popular support) |
| CIVIL\_WAR\_LOSER\_IG\_AND\_MOVEMENT\_DEBUFF\_YEARS | 20 | # Debuff duration in years for IG that looses in a revolution |
| SECESSION\_WON\_LOYALISTS\_INCREASED\_PERCENTAGE | 0.5 | # This percentage of pops in the secession country of the seceded culture will become more loyal after a secession is victorious |
| SECESSION\_START\_RADICALS\_REDUCED\_PERCENTAGE | 1.0 | # The number of radicals of pops of the seceded culture in states that seceded will decrease by this amount when a secession war begins |
| SECESSION\_LOST\_RADICALS\_REDUCED\_PERCENTAGE | 1.0 | # The number of radicals of pops of the seceded culture in states that seceded will decrease by this amount when a secession is crushed |
| REVOLUTION\_START\_REBEL\_IG\_RADICALS\_REDUCED\_PERCENTAGE | 1.0 | # The number of radicals of pops will decrease by this amount when a revolution starts (relative to membership in insurrectionist IGs) |
| REVOLUTION\_ENDED\_RADICAL\_BASE\_REMOVAL\_PERCENTAGE | 0.5 | # When a revolution ends, this base fraction of radicals is removed from all pops regardless of IG membership to represent 'civil war fatigue' |
| REVOLUTION\_LOST\_REBEL\_IG\_RADICALS\_REDUCED\_PERCENTAGE | 0.25 | # The number of radicals of pops will additionally decrease by this amount when a revolution is crushed (relative to membership in defeated IGs) |
| REVOLUTION\_WON\_LOYAL\_IG\_RADICALS\_REDUCED\_PERCENTAGE | 0.5 | # The number of radicals of pops will additionally decrease by this amount when a revolution is crushed (relative to membership in victorious IGs) |
| IG\_SUPPRESSION\_COST | 200 | # The amount of AUT it costs to Suppress an IG |
| IG\_BOLSTER\_COST | 200 | # The amount of AUT it costs to Bolster an IG |
| DEFAULT\_GOODS\_TAX\_COST | 100 | # The amount of AUT it costs to tax a good by default |
| TURMOIL\_STATE\_EFFECTS\_THRESHOLD | 0.25 | # How much turmoil a state needs to have before it gets any state-wide effects |
| TURMOIL\_STATE\_HIGH\_EFFECTS\_THRESHOLD | 0.50 | # Above this turmoil, add a harsher modifier |
| TURMOIL\_STATE\_EXTREME\_EFFECTS\_THRESHOLD | 0.75 | # Above this turmoil, add the harshest modifier |
| OBSTINANCE\_MAX | 0.2 | # Maximum amount of obstinance a state can have (when at max the state will get 100% effect of the obstinance modifier) |
| OBSTINANCE\_MOVEMENT\_REQUIRED\_RADICALISM | 0.5 | # Minimum amount of radicalism/activism required for a movement to contribute to a state's obstinance |
| MIN\_INSTITUTION\_INVESTMENT | 1 | # Lowest Investment Level for active Institutions (modifier is clamped to this) |
| MAX\_INSTITUTION\_INVESTMENT | 5 | # Highest Investment Level for active Institutions (modifier is clamped to this) |
| DAILY\_INSTITUTION\_SIZE\_CHANGE | 0.0028 | # Percent increase / decrease in Institution Size per day (0.0028 ~ 1/365) |
| INITIAL\_MOMENTUM\_MIN | 0.5 | # Minimum randomly assigned Momentum at the start of the election period |
| INITIAL\_MOMENTUM\_MAX | 1.5 | # Maximum randomly assigned Momentum at the start of the election period |
| POPULARITY\_MOMENTUM\_FACTOR | 0.005 | # How much Momentum does a party gain or lose from their leader's popularity |
| ELECTION\_INTERVAL\_YEARS | 4 | # How many years normally pass between elections |
| CAMPAIGN\_PERIOD\_MONTHS | 6 | # How long the Campaign Period before the election is |
| MIN\_AFFILIATION\_TO\_STAY\_IN\_PARTY | 0 | # An IG must have this much affiliation with a party to want to stay in it |
| MIN\_AFFILIATION\_TO\_JOIN\_PARTY | 1 | # An IG must have this much affiliation with a party to want to join it |
| MAX\_ELECTORAL\_CONFIDENCE | 1.0 | # Electoral confidence can never be higher than this |
| INITIAL\_ELECTORAL\_CONFIDENCE | 1.0 | # Starting electoral confidence at start of game or when elections are first introduced |
| REFORM\_GOVERNMENT\_PERIOD | 6 | # How many months after election you can reform government for free |
| REFORM\_GOVERNMENT\_RADICALIZATION\_RATE | 0.25 | # How many percent of a IG's supporters that will get radicalized when removed from government. |
| RADICALISM\_AGITATING\_THRESHOLD | 0.25 |  |
| RADICALISM\_PROTESTING\_THRESHOLD | 0.50 |  |
| RADICALISM\_MILITANT\_THRESHOLD | 0.75 |  |
| SUPPORT\_RELEVANT\_THRESHOLD | 0.05 |  |
| SUPPORT\_SIGNIFICANT\_THRESHOLD | 0.25 |  |
| SUPPORT\_DOMINANT\_THRESHOLD | 0.5 |  |
| SUPPORT\_UNIVERSAL\_THRESHOLD | 0.75 |  |
| INCOHERENCE\_FACTOR | 5 | # The amount to multiply the approval value with to get an incoherence score for legitimacy |
| LEGITIMACY\_PENALTY\_FOR\_EACH\_EXCESS\_ENTITY | 20 | # How much Legitimacy is lost for each group in government above the allowance determined by country\_legitimacy\_govt\_size\_add |
| SHOW\_CONFIRMATION\_BELOW\_LEGITIMACY | 25 |  |
| POLITICAL\_LOBBY\_BASELINE\_DECAY\_FACTOR\_KEY | "appeasement\_baseline\_decay" | # If changing the name of this appeasement factor in the database, it must be changed here and vice versa |
| ``` # If the number of IG members of a newly created political lobby is below POLITICAL_LOBBY_DESIRED_MEMBERS, join weight of IGs for this lobby will be multiplied by 1 + (number of members needed to reach POLITICAL_LOBBY_DESIRED_MEMBERS * POLITICAL_LOBBY_OVER_DESIRED_MEMBERS_JOIN_FACTOR) # If the number of IG members of a newly created political lobby is above POLITICAL_LOBBY_DESIRED_MEMBERS, join weight of IGs for this lobby will be divided by 1 + (number of members needed to reach POLITICAL_LOBBY_DESIRED_MEMBERS * POLITICAL_LOBBY_OVER_DESIRED_MEMBERS_JOIN_FACTOR) # Number of IG members of a newly created political lobby should never exceed POLITICAL_LOBBY_CREATION_MAX_MEMBERS # These factors are *only* applied during lobby creation ``` | | |
| POLITICAL\_LOBBY\_CREATION\_DESIRED\_MEMBERS | 2 |  |
| POLITICAL\_LOBBY\_CREATION\_DESIRED\_MEMBERS\_JOIN\_FACTOR | 0.5 |  |
| POLITICAL\_LOBBY\_CREATION\_MAX\_MEMBERS | 3 |  |
| POLITICAL\_LOBBY\_MIN\_NON\_MARGINALIZED\_MEMBERS | 1 | # At least this many non-marginalized IGs must be willing to join a lobby for it to be created |
| POLITICAL\_LOBBY\_MINIMUM\_JOIN\_WEIGHT\_THRESHOLD | 50 | # At this join weight, an IG has a chance to join a lobby when it forms |
| POLITICAL\_LOBBY\_GUARANTEED\_JOIN\_WEIGHT\_THRESHOLD | 100 | # At this join weight, an IG will always join a lobby when it forms. If below this but above POLITICAL\_LOBBY\_MINIMUM\_JOIN\_WEIGHT\_THRESHOLD, they have a random chance to join based on their join weight. |
| ``` # An interest group cannot be part of more than this number of political lobbies of the same category # If an IG wants to join a lobby but is at the limit, it may leave one of its current lobby if the new lobby scores higher on IG attraction ``` | | |
| MAX\_NUM\_POLITICAL\_LOBBIES\_OF\_SAME\_CATEGORY\_PER\_IG | 1 |  |
| ``` # If a newly created lobby has a join weight equal to or greater than the join weight of one of their current lobbies of the same type times this, they will join the new lobby and leave the old one # This only applied if they are capped on number of lobbies to join due to MAX_NUM_POLITICAL_LOBBIES_OF_SAME_TYPE_PER_IG ``` | | |
| POLITICAL\_LOBBY\_JOIN\_WEIGHT\_REPLACEMENT\_THRESHOLD | 1.25 |  |
| POLITICAL\_LOBBY\_APPEASEMENT\_APPROVAL\_AVERAGED | no | # If set to yes, approval from lobby appeasement is averaged out between lobbies instead of summed in total |
| POLITICAL\_LOBBY\_MIN\_APPEASEMENT | -10 | # Appeasement cannot be lower than this |
| POLITICAL\_LOBBY\_MAX\_APPEASEMENT | 10 | # Appeasement cannot be greater than this |
| POLITICAL\_LOBBY\_STARTING\_APPEASEMENT | 0 | # Lobbies start with this amount of appeasement |
| POLITICAL\_LOBBY\_BASELINE\_APPEASEMENT | 0 | # Appeasement will naturally decay towards this value over time |
| POLITICAL\_LOBBY\_APPEASEMENT\_DECAY\_TIME | 1025 | # It takes this many days for a lobby's appeasement value to decay by 1 towards baseline |
| POLITICAL\_LOBBY\_APPEASEMENT\_APPROVAL\_IMPACT | 1.0 | # Each point of lobby appeasement translates into this amount of approval for the IGs that are part of the lobby |
| MIN\_DECREE\_COST | 0.1 | # The cost of a decree cannot drop below this fraction of the base cost, regardless of how many modifier discounts you have |
### Economy
| Define | Default Value | Dev Comment |
| MIN\_CONSTRUCTION\_EFFICIENCY | 0.05 | # Construction efficiency cannot go below this amount |
| NUM\_TIMES\_TO\_INITIALIZE\_WEALTH | 10 | # The more times you run this the more accurate setup will be for Pop wealth compared to income |
| NUM\_TIMES\_TO\_UPDATE\_TRADE\_DURING\_INITIALIZATION | 10 | # Extra times that separate trade update step is run |
| COUNTRY\_GDP\_MODIFIER\_DIVISOR | 1000 | # Scale the country\_gdp static modifier by this GDP divisor |
| COUNTRY\_GDP\_MODIFIER\_MAX\_MULTIPLIER | 200000 | # The country\_gdp modifier multiplier cannot be higher than this |
| COUNTRY\_GDP\_CONSTRUCTION\_MODIFIER\_DIVISOR | 2000000 | # Scale the country\_gdp\_construction static modifier by this GDP divisor |
| COUNTRY\_GDP\_CONSTRUCTION\_MODIFIER\_BASE\_MULTIPLIER | 0.2 | # Always added to the country\_gdp\_construction multiplier, regardless of GDP |
| COUNTRY\_GDP\_CONSTRUCTION\_MODIFIER\_SCALED\_MULTIPLIER | 0.8 | # The country\_gdp\_construction modifier multiplier is scaled against this |
| COUNTRY\_GDP\_CONSTRUCTION\_MODIFIER\_MAX\_MULTIPLIER | 1.0 | # The country\_gdp\_construction modifier multiplier cannot be higher than this |
| ECONOMY\_OF\_SCALE\_START\_LEVEL | 1 | # Level at which buildings start getting economy of scale bonuses. Levels lower than this value provide no bonus [>=1] |
| USE\_NATIONALIZED\_ECONOMY\_OF\_SCALE\_PENALTY | no | # Whether ECONOMY\_OF\_SCALE\_NATIONALIZED\_FRACTION\_MULT should be applied to economy of scale modifier for buildings with nationalized levels |
| ECONOMY\_OF\_SCALE\_NATIONALIZED\_FRACTION\_MULT | 0.5 | # Non-government building economy of scale modifier if multiplied by (1 - the fraction of nationalized levels \* this) |
| IN\_DEFAULT\_MINIMUM\_PENALTY\_SCALE | 0.1 | # This amount of the 'in default' throughput penalty is applied right away |
| IN\_DEFAULT\_DAYS\_TO\_FULL\_PENALTY | 365 | # How many days of being in default does it take to get the full throughput penalty |
| DECLARE\_BANKRUPTCY\_PENALTY\_DURATION\_YEARS | 10 | # How many years does it take for penalties from declaring bankruptcy to fully decay |
| DECLARE\_BANKRUPTCY\_RADICALIZATION\_BASE\_FACTOR | 0.1 | # Radicalize this percentage of all pops when declaring bankruptcy |
| DECLARE\_BANKRUPTCY\_RADICALIZATION\_SHARES\_FACTOR | 0.05 | # For each per-pop shares in their building, radicalize this percentage of a pop on declaring bankruptcy |
| FIRED\_POP\_RADICALIZATION\_FRACTION | 0.1 | # This percentage of a pop becomes radicalized when they lose their job, for instance due to a building being downsized |
| ``` # When a building is nationalized, pops are radicalized in one of two ways: # 1: Pops that work in the building get radicalized based on number of levels nationalized based on fraction of levels of the building that are self-owned # 2: Pops that own shares in ownership-type building (ie, Manor Houses/Financial Districts) anywhere in the country get radicalized based on number of privately held levels nationalized and the investment score of their building towards the nationalized building type ``` | | |
| NATIONALIZE\_BUILDING\_SELF\_OWNED\_RADICALIZATION\_FACTOR | 0.25 | # Multiplied by fraction of self-owned levels |
| NATIONALIZE\_BUILDING\_PRIVATELY\_OWNED\_RADICALIZATION\_FACTOR | 0.01 | # Multiplied by number of levels owned by another building (clamped to NATIONALIZE\_BUILDING\_OWNING\_POP\_TYPE\_RADICALIZATION\_MAX\_MULTIPLIER) |
| NATIONALIZE\_BUILDING\_PRIVATELY\_OWNED\_RADICALIZATION\_MAX\_MULTIPLIER | 20 |  |
| NATIONALIZE\_BUILDING\_PRIVATELY\_OWNED\_RADICALIZATION\_SCORE\_DIVISOR | 1 | # Number of radicalized ownership-type pops is multiplied by their building's investment, then divided by this |
| NATIONALIZE\_BUILDING\_OTHER\_COUNTRY\_OWNED\_RELATIONS\_IMPACT | -2 | # Nationalizing a building that is owned by the government of another country results in this relations impact per building level nationalized |
| NATIONALIZE\_BUILDING\_OTHER\_COUNTRY\_POP\_OWNED\_RELATIONS\_IMPACT | -1 | # Nationalizing a building that is owned by the pops of another country results in this relations impact per building level nationalized |
| NATIONALIZE\_BUILDING\_NO\_COMPENSATION\_IMPACT\_MULT | 3.0 | # Multiplier to number of radicals & relations hits from nationalization if done without monetary compensation |
| AUTO\_DOWNSIZE\_BUILDING\_MIN\_EMPTY\_PRIVATE\_LEVELS | 1.0 | A (non Trade Center) building must be missing at least this many privately held levels of employment to start considering auto-downsizing (both this and the below requirement are applied) |
| AUTO\_DOWNSIZE\_BUILDING\_MIN\_EMPTY\_FRACTION | 0.1 | # A (non Trade Center) building must be missing at least this many levels of employment (in relative numbers) to start considering auto-downsizing (both this and the above requirement are applied) |
| AUTO\_DOWNSIZE\_BUILDING\_MIN\_UNUSED\_TRADE\_CAPACITY\_FRACTION | 0.1 | # A Trade Center must have at least this much unused Trade Capacity (as a fraction of the whole) to consider auto downsizing |
| AUTO\_DOWNSIZE\_BUILDING\_MIN\_UNUSED\_TRADE\_CAPACITY | 20 | # A Trade Center must have at least this much unused Trade Capacity (in absolute numbers) to consider auto downsizing |
| AUTO\_DOWNSIZE\_BUILDING\_MONTHS\_TO\_WAIT | 6 | # After a building decides to start auto-downsizing, wait this many months before actually starting to downsize, in case conditions change |
| ``` # Pollution Impact = (GeneratedPollution (StateRegion) / (DIVISOR_BASE + DIVISOR_ARABLE_LAND_MULT * SQRT(ArableLand (State Region)))/POLLUTION_MAX ``` | | |
| POLLUTION\_TARGET\_DIVISOR\_BASE | 50 | # Base value to divide total pollution generation by for calculating state region pollution target level |
| POLLUTION\_TARGET\_DIVISOR\_ARABLE\_LAND\_MULT | 1.5 | # Amount per arable land to add to pollution divisor |
| POLLUTION\_CHANGE\_SPEED | 0.255 | # Each day, pollution in state region changes by this amount towards target |
| POLLUTION\_MAX | 255 |  |
| POLLUTION\_SPREAD\_TO\_NEIGHBOR | 0.25 | # Adjacent state regions always have at least this much of their neighbor's pollution level |
| GOODS\_LEADERBOARD\_SIZE | 10 | # How many spots there are on each goods leaderboard |
| MIN\_SPOT\_PRESTIGE\_AWARD | 3 | # How many spots on the goods leaderboard get awarded Prestige |
| GOODS\_LEADERBOARD\_GLOBAL\_GDP\_SCALING | 10000000000 | # At this amount of global yearly GDP, max scaling to top goods producer prestige is applied |
| GOODS\_LEADERBOARD\_PRESTIGE\_BASE | 0.25 | # This multiplier of prestige from being top goods producer is always awarded |
| GOODS\_LEADERBOARD\_PRESTIGE\_SCALED | 2.75 | # This multiplier of prestige from being top goods producer is scaled against global GDP |
| MIN\_GOODS\_PRICE | 1 | # A good cannot have a lower base price than this |
| PRICE\_RANGE | 0.75 | # min price of a good is base \* (1 - PRICE\_RANGE), Max price is base \* (1 + PRICE\_RANGE), PRICE\_RANGE is locked to [0-1] |
| BUY\_SELL\_DIFF\_AT\_MAX\_FACTOR | 2 | # the difference between buy/consumption and sell/production at min/max pricing, e.g. if set to 4 then if buy orders are 4x sell orders price is maxed |
| GOODS\_SHORTAGE\_PENALTY\_THRESHOLD | 0.5 | # If supply / demand is lower than this, start applying output penalties, by default this should be ( 1 / BUY\_SELL\_DIFF\_AT\_MAX\_FACTOR ) |
| GOODS\_SHORTAGE\_PENALTY\_INCREASE\_SPEED | 0.01 | # Goods shortage penalty increases by this fraction of the target each day |
| GOODS\_SHORTAGE\_PENALTY\_DECREASE\_SPEED | 0.01 | # Goods shortage penalty goes down by this fraction of GOODS\_SHORTAGE\_PENALTY\_MAX each day |
| GOODS\_SHORTAGE\_PENALTY\_MIN | 0.05 | # Goods shortage penalty can't be lower than this if there is any shortage |
| GOODS\_SHORTAGE\_PENALTY\_MAX | 0.5 | # Goods shortage penalty can't be higher than this, so long as all the input goods exist in some quantity |
| GOODS\_SHORTAGE\_PENALTY\_MISSING\_INPUTS | 0.75 | # This penalty is applied when an input good is missing entirely from local supply |
| GOODS\_SHORTAGE\_PENALTY\_MILITARY\_BUILDING\_SPEED\_MULT | 5.0 | # Shortage penalties increase and decrease at this multiplier rate for military buildings |
| POP\_NEED\_BASIC\_FOOD | "popneed\_basic\_food" |  |
| MINIMUM\_GOODS\_TRADED\_QUANTITY | 0.5 | # Traded quantity for a good can never be lower than this |
| WORLD\_MARKET\_GOODS\_DEMAND\_BUFFER | 10 | # The below value exists to ensure the world market imports are seeded with 'new' goods by adding the trade quantity of the good \* times this to world market demand # This is so that it's always profitable to be the first country exporting something |
| WORLD\_MARKET\_HUB\_SCORE\_STICKYNESS | 3.0 | # If a state is a World Market Hub, another state needs to exceed its hub score by this factor to replace it as the new hub |
| WORLD\_MARKET\_HUB\_SCORE\_PORT\_FACTOR | 10 | # Applied to hub score for each level of port present |
| WORLD\_MARKET\_HUB\_SCORE\_GDP\_FACTOR\_DIVISOR | 100000 | # 1 hub score is added for each this amount of GDP in the state |
| WORLD\_MARKET\_HUB\_SCORE\_TRADE\_CAPACITY\_FACTOR | 0.1 | # Applied to hub score for each Trade Capacity in the state |
| WORLD\_MARKET\_HUB\_SCORE\_MARKET\_CAPITAL\_FACTOR | 100 | # This amount of hub score is added for the market capital |
| WORLD\_MARKET\_LOCATION | "x9137A4" | # This province is used for the purpose of determining if a state has access to the world market or not. The province itself is not exposed to the player directly. |
| NON\_TRADE\_CENTER\_STATE\_TRADE\_POTENTIAL\_UPDATE\_FREQUENCY | 30 | # How many days must pass between updating trade potential in states that do not have a Trade Center # The lower this is the more recent data the AI will have for evaluating new Trade Center construction, but performance will be impacted |
| TRADE\_CENTER\_ADVANTAGE\_PRICE\_MULTIPLIER | 0.25 | # This much of relative advantage translates into a multiplier on price # Applied to the delta between relative advantage and 1 # For example, if TRADE\_CENTER\_ADVANTAGE\_PRICE\_MULTIPLIER is 0.5 and relative advantage is 2, then the price multiplier is 1 + ( ( 2 - 1 ) \* 0.5 ) = 1.5 |
| TRADE\_CENTER\_ADVANTAGE\_BASE | 100 | # Base amount of advantage that Trade Centers have |
| TRADE\_CENTER\_ADVANTAGE\_MARKET\_AREA\_PRODUCTION\_FACTOR | 200 | # Trade Centers get this amount of export advantage for market area production (scaled against global production/consumption, multiplied by Market Access) |
| TRADE\_ADVANTAGE\_COMPANY\_CHARTER\_FACTOR | 50 | # Company charters get this amount of export advantage for market production |
| TRADE\_CENTER\_ADVANTAGE\_MARKET\_PRESTIGE\_GOOD\_FACTOR | 100 | # Trade Centers get this amount of export advantage based on the fraction of goods production in their market that is prestige goods (prestige goods have no effect on import advantage) |
| TRADE\_CENTER\_ADVANTAGE\_TRADE\_AGREEMENT\_FACTOR | 100 | # Trade Centers get this amount of export/import advantage, scaled against % of opposite-direction trade is from markets covered by trade agreements |
| TRADE\_CENTER\_ADVANTAGE\_TREATY\_PORT\_FACTOR | 200 | # Trade Centers get this amount of export/import advantage, scaled against % of opposite-direction trade from Treaty Ports owned by their parent country |
| ``` # Only one of the penalties below is ever applied, in the following priority order: Embargo, War ``` | | |
| TRADE\_CENTER\_ADVANTAGE\_EMBARGO\_FACTOR | -100 | # Trade Centers lose this amount of export/import advantage, scaled against % of opposite-direction trade is from markets where the owner is embargoed by the market controller |
| TRADE\_CENTER\_ADVANTAGE\_AT\_WAR\_FACTOR | -75 | # Trade Centers lose this amount of export/import advantage, scaled against % of opposite-direction trade is from markets where the owner is at war with the market controller |
| ``` # Weights for Trade Center preference in importing/exporting to other specific Trade Centers ``` | | |
| TRADE\_CENTER\_PREFERENCE\_BASE | 1 | # Base weight in preference for each other Trade Center |
| TRADE\_CENTER\_PREFERENCE\_SAME\_POWER\_BLOC\_MULTIPLIER | 0.5 | # Added to weight multiplier if both Trade Centers are part of the same Power Bloc |
| TRADE\_CENTER\_PREFERENCE\_TRADE\_AGREEMENT\_MULTIPLIER | 4.0 | # Added to weight multiplier for each Trade Agreement between the two countries |
| TRADE\_CENTER\_PREFERENCE\_EMBARGO\_DIVISOR | 2.0 | # Added to weight divisor for each Embargo between the two countries |
| TRADE\_CENTER\_PREFERENCE\_NO\_INTEREST\_DIVISOR | 0.25 | # Added to weight divisor for each side that lacks an Interest in the other's market |
| TRADE\_CENTER\_PREFERENCE\_DISTANCE\_DIVISOR | 0.25 | # Added to weight divisor per multiple of expected distance between the two Trade Centers' hubs |
| TRADE\_CENTER\_PREFERENCE\_TOLL\_DIVISOR | 0.05 | # Weight is divided by 1 + ( toll rate in whole percent \* this ) for strait tolls along the route between two Trade Centers' hubs |
| SEA\_DISTANCE\_EXPECTED\_TRAVEL\_DISTANCE | 1000 | # Expected sea travel distance - distances below this do not apply any scaling, distances above scale linearly |
| MAX\_TRADE\_ROUTE\_ALTERNATIVES | 3 | # Maximum number of alternate sea paths calculated between world market hubs |
| MARKET\_SHARE\_FROM\_GDP | 1.0 | # Get this many points of market share per pound of GDP in states |
| MARKET\_SHARE\_MARKET\_CONTROLLER\_FACTOR | 1.33 | # Market controller's market points count for this much more |
| MARKET\_SHARE\_MARKET\_ACCESS\_BASE | 0.5 | # How much of market points is always gained regardless of market access |
| MARKET\_SHARE\_MARKET\_ACCESS\_SCALED | 0.5 | # How much of market points is gained based on market access |
| COUNTRY\_MIN\_CREDIT\_BASE | 100000 | # Added to the total Building Cash Reserves to determine credit limit (base) |
| COUNTRY\_MIN\_CREDIT\_SCALED | 0.5 | # Added to the total Building Cash Reserves to determine credit limit (multiplied by GDP) |
| CREDIT\_RATIO\_MAX\_OVERRUN | 0.01 | # Countries can accumulate this percentage more of a debt "hole" than their credit limit when in default |
| GOLD\_RESERVE\_RATIO\_AT\_START | 0.25 | # Unless a country history's 'treasury' parameter is set to a non-zero value, countries start with this ratio of their gold reserve in gold |
| BUILDING\_INITIAL\_WAGE\_WEEKS | 2 | # A building will not adjust its wages for the first this many weeks of its existence |
| MAX\_WAGE\_STEP\_CHANGE | 0.1 | # Wage rates can change at most this much each week |
| SUBSIDIES\_MIN\_GAIN | 0 | # If a building is subsidized, it will always collect enough subsidies to ensure at least this weekly cash reserve growth |
| DEFAULT\_MIN\_HIRING\_RATE | 0.01 | # Default weekly min hiring limit applied in a building per profession as a ratio of full employment |
| DEFAULT\_MAX\_HIRING\_RATE | 0.1 | # Default weekly max hiring limit applied in a building per profession as a ratio of full employment |
| HIRING\_RANGE\_WEEKLY\_CHANGE | 0.01 | # Weekly hiring range of a building is decreased or increased by this based on whether it is failing to hire at its current rate or not |
| EMPLOYMENT\_PROPORTIONALITY\_LIMIT | 0.1 | # A building cannot have a difference of ratio of full employment between any two professions greater than this limit |
| MINIMUM\_EMPLOYEES | 10 | # If a building has fewer employees than this, it will always attempt to hire |
| BUILDING\_WAGES\_DIVIDEND\_INCOME\_FACTOR | 0.5 | # A pop with dividend income has its wealth multiplied by 1 - ( the fraction of their income that is dividends \* this ) to ensure buildings don't start wage dumping just because all employees are getting dividends |
| BUILDING\_WAGES\_WELFARE\_INCOME\_FACTOR | 0.8 | # A pop with welfare income has its wealth multiplied by 1 - ( the fraction of their income that is welfare \* this ) to ensure buildings don't start wage dumping just because all employees are getting welfare |
| BUILDING\_WAGES\_OWNERSHIP\_BUILDING\_FACTOR | 0.75 | # Buildings that own other buildings multiply their target wages by this to ensure profitability |
| BUILDING\_WAGES\_MIN\_RELEVANT\_POP\_SIZE | 50 | # Pops with less workforce than this are ignored when checking whether a profitable building should raise wages because of radicalizing workers |
| BUILDING\_WAGES\_MIN\_EMPLOYEES\_FOR\_RELEVANT\_POP\_SIZE\_CHECK | 200 | # For the BUILDING\_WAGES\_MIN\_RELEVANT\_POP\_SIZE to be checked, the buildings must have at least this many employees to avoid small buildings wage dumping |
| BUILDING\_RAISE\_WAGES\_TARGET\_WEALTH\_MULT | 0.9 | # Buildings will consider raising wages if any significant pops working in them have this or lower \* the target wealth to expected SoL ratio |
| BUILDING\_LOWER\_WAGES\_TARGET\_WEALTH\_MULT | 1.2 | # Buildings will consider lowering wages if all significant pops working in them have this or higher \* the target wealth to expected SoL ratio |
| BUILDING\_WAGES\_AVERAGE\_PRODUCTIVITY\_THRESHOLD | 0.5 | # At which ratio to average productivity does BUILDING\_WAGES\_AVERAGE\_PRODUCTIVITY\_FACTOR start kicking in (average tends to be high due to ownership buildings & trade centers, so this value should be fairly low) |
| BUILDING\_WAGES\_AVERAGE\_PRODUCTIVITY\_FACTOR | 0.5 | # How much more generous will buildings with high productivity compared to average for the building type be about wages, so long as they are turning an OK profit |
| BUILDING\_WAGES\_AVERAGE\_PRODUCTIVITY\_FACTOR\_MAX | 2.5 | # Beyond this ratio of productivity compared to average, the effects of BUILDING\_WAGES\_AVERAGE\_PRODUCTIVITY\_FACTOR will be capped |
| BUILDING\_PREFER\_LAYOFFS\_TARGET\_WEALTH\_MULT | 0.66 | # Buildings will prefer laying off pops if any significant pops working in them have this \* the target wealth to expected SoL ratio or below |
| BUILDING\_FOREIGN\_OWNERSHIP\_WAGE\_FACTOR | -0.25 | # Buildings with foreign owners will have their wage targets adjusted by this amount (multiplied by foreign owned fraction), as the owners are less likely to care about radicals generated by low wages |
| BUILDING\_DEFAULT\_MIN\_EARNINGS\_TO\_HIRE\_EMPLOYEES | 3 | # Non-subsidized buildings will not hire if it would result in their annual earnings/employee falling below this threshold (default value, can be overridden for building group) |
| BUILDING\_PROFIT\_TARGET\_TO\_RAISE\_WAGES | 0.25 | # Required profit margin to consider raising wages towards expected minimum, with BUILDING\_WEEKS\_BETWEEN\_PAY\_RAISES weeks cooldown |
| BUILDING\_PROFIT\_TARGET\_TO\_LOWER\_WAGES | 0.15 | # If profit margin is this or below, buildings should lower their wages, with BUILDING\_WEEKS\_BETWEEN\_PAY\_CHANGES weeks cooldown |
| BUILDING\_PROFIT\_TARGET\_TO\_WITHDRAW\_CASH | 0.15 | # If profit margin is this or below, buildings should withdraw money from the cash reserves to make up the difference |
| BUILDING\_PROFIT\_TARGET\_TO\_HIRE\_EMPLOYEES | 0.25 | # If profit margin is this or above, buildings should try to hire new workers |
| OWNERSHIP\_BUILDING\_PROFIT\_TARGET\_TO\_RAISE\_WAGES | 0.5 | # Overrides BUILDING\_PROFIT\_TARGET\_TO\_RAISE\_WAGES for buildings that own other buildings |
| OWNERSHIP\_BUILDING\_PROFIT\_TARGET\_TO\_LOWER\_WAGES | 0.3 | # Overrides BUILDING\_PROFIT\_TARGET\_TO\_LOWER\_WAGES for buildings that own other buildings |
| OWNERSHIP\_BUILDING\_PROFIT\_TARGET\_TO\_WITHDRAW\_CASH | 0.3 | # Overrides BUILDING\_PROFIT\_TARGET\_TO\_WITHDRAW\_CASH for buildings that own other buildings |
| OWNERSHIP\_BUILDING\_PROFIT\_TARGET\_TO\_HIRE\_EMPLOYEES | 0.5 | # Overrides BUILDING\_PROFIT\_TARGET\_TO\_HIRE\_EMPLOYEES for buildings that own other buildings |
| SUBSISTENCE\_BUILDING\_PROFIT\_TARGET\_TO\_RAISE\_WAGES | 0.7 | # Overrides BUILDING\_PROFIT\_TARGET\_TO\_RAISE\_WAGES for subsistence buildings |
| SUBSISTENCE\_BUILDING\_PROFIT\_TARGET\_TO\_LOWER\_WAGES | 0.5 | # Overrides BUILDING\_PROFIT\_TARGET\_TO\_LOWER\_WAGES for subsistence buildings |
| SUBSISTENCE\_BUILDING\_PROFIT\_TARGET\_TO\_WITHDRAW\_CASH | 0.5 | # Overrides BUILDING\_PROFIT\_TARGET\_TO\_WITHDRAW\_CASH for subsistence buildings |
| BUILDING\_MAX\_EMPLOYMENT\_FRACTION\_TO\_RAISE\_WAGES | 0.5 | # If the employment fraction of a building is above this, don't raise wages just to try and snipe employees from other buildings |
| BUILDING\_WEEKS\_BETWEEN\_PAY\_CHANGES | 0 | # Cooldown between changes in pay, so buildings don't overcompensate for a temporary change in circumstances. If the building is unprofitable it uses BUILDING\_WEEKS\_BETWEEN\_PAY\_CHANGES\_WHEN\_UNPROFITABLE instead. |
| BUILDING\_WEEKS\_BETWEEN\_PAY\_CHANGES\_WHEN\_UNPROFITABLE | 0 | # Cooldown between changes in pay, so buildings don't overcompensate for a temporary change in circumstances. Only used when unprofitable. |
| MIN\_RAISE\_TO\_HIRE | 0.10 | # The minimum required increase in wages for an employee to switch jobs (1.0 = +100% = x2) |
| MIN\_JOB\_ATTRACTIVENESS | 0.10 | # Job attractiveness cannot be lower than this from stacking modifiers |
| BASE\_RESOURCE\_DISCOVER\_CHANCE | 0.02 | # Per day (1.0 = 1%) |
| EMPLOYMENT\_RESOURCE\_DEPLETE\_CHANCE | 0.005 | # Multiplied by number of fully employed levels of the building |
| RESOURCE\_DISCOVER\_MIN\_FRACTION | 0.2 | # Min fraction of resources that will be discovered for each successful roll |
| RESOURCE\_DISCOVER\_MAX\_FRACTION | 0.5 | # Max fraction of resources that will be discovered for each successful roll |
| FULLY\_DISCOVERED\_RESOURCE\_DEPLETE\_CHANCE\_MULT | 1.0 | # The chance of a resource depleting is multiplied by this when all of the resource has been discovered |
| RESOURCE\_DEPLETE\_MIN\_AMOUNT | 2 | # Min amount of resources that will be depleted for each successful roll |
| RESOURCE\_DEPLETE\_MAX\_AMOUNT | 5 | # Max amount of resources that will be depleted for each successful roll |
| QUALITY\_OF\_LIFE\_MIN | 1 |  |
| QUALITY\_OF\_LIFE\_MAX | 100 |  |
| SUBSISTENCE\_OUTPUT\_AVERAGE\_WAGE\_RATE\_FACTOR | 150 | # Each 1.0 of subsistence output counts as this much wage rate when setting normal wages |
| PEASANT\_STARTING\_WAGE\_RATE\_FACTOR | 1.0 | # For the sake of calculating starting normal wages, treat peasants as having this pop type wage multiplier |
| STARTING\_WAGE\_RATE\_MULTIPLIER | 1.0 | # Starting wage rate is multiplied by this (for easy balancing) |
| STARTING\_WAGE\_RATE\_SUBSISTENCE\_MULTIPLIER | 0.5 | # STARTING\_WAGE\_RATE\_MULTIPLIER is further multiplied by this for subsistence buildings |
| NORMAL\_WAGE\_RATE\_FALLBACK | 500.0 | # If it's impossible to compute a normal wage rate (e.g. if every incorporated pop works in government buildings) set it to this (weekly £ per POP\_SIZE\_PACKAGE employees) |
| MINIMUM\_WAGE\_RATE | 10.0 | # The wage rate can never drop below this, no matter what (weekly £ per POP\_SIZE\_PACKAGE employees) |
| MAXIMUM\_WAGE\_RATE | 100000.0 | # The absolute maximum that a building's wage rate can be increased to. |
| CREDIT\_RATIO\_HEALTH\_THRESHOLD | 0.5 | # If the principal is smaller than this ratio of the total credit, the economy is considered to be healthy |
| GOLD\_RESERVE\_MIN | 1000 | # If Gold Reserves are computed to be lower than this, it's instead set to this |
| GOLD\_RESERVE\_LIMIT\_FACTOR | 0.2 | # The base factor of annual GDP that should be provided as a Gold Reserve |
| GOLD\_RESERVE\_RETURNS\_FACTOR | 1 | # How rapidly diminishing returns will cause gold reserves to drop off after the limit has been reached (higher value increases penalty) |
| RETOOLING\_WEEKS | 0 | # How long it takes for a building to get back up to full production after switching a production method |
| BUILDING\_TIMED\_MODIFIER\_WEEKS | 52 | # Duration of a timed modifier which is applied after switching a production method |
| BUILDING\_PAUSE\_HIRES\_CASH\_RESERVES\_THRESHOLD | 0.75 | # If cash reserves are higher than this, and employment fraction is below BUILDING\_MAX\_EMPLOYMENT\_FRACTION\_TO\_CONSIDER\_CASH\_RESERVES, then allow hiring even if profits are low |
| BUILDING\_MIN\_EMPLOYMENT\_FRACTION\_TO\_PAUSE\_HIRES | 0.1 | # If building has at least this employment, it's OK to pause hiring |
| BUILDING\_MAX\_EMPLOYMENT\_FRACTION\_TO\_CONSIDER\_CASH\_RESERVES | 0.5 | # If a building has at least this employment fraction, then ignore the cash reserves override for hiring |
| BUILDING\_MAX\_PROFIT\_TO\_PAUSE\_HIRES | 0.2 | # If building is making less than this fraction of revenue in profit, it's OK to pause hiring |
| PRICE\_REPORT\_MAX\_ENTRIES | 10 |  |
| NUM\_COIN\_ICONS | 13 |  |
| COIN\_ICON\_PRICE\_COMPARISON\_STEP | 0.12 |  |
| NUM\_PROFITABILITY\_ICONS | 13 |  |
| PROFITABILITY\_ICON\_COMPARISON\_STEP | 0.15 |  |
| EARNINGS\_RATIO\_HIGH\_THRESHOLD | 1.5 | # Buildings whose productivity exceeds this factor of the average will be considered high-productivity buildings |
| EARNINGS\_RATIO\_LOW\_THRESHOLD | 0.66 | # Buildings whose productivity is below this factor of the average will be considered low-productivity buildings |
| EARNINGS\_ABSOLUTE\_HIGH\_THRESHOLD | 30 | # Buildings whose productivity exceeds this amount will ALWAYS be considered high-productivity buildings |
| EARNINGS\_ABSOLUTE\_LOW\_THRESHOLD | 3 | # Buildings whose productivity is below this amount will ALWAYS be considered low-productivity buildings |
| SLAVE\_BASKET\_DEFAULT | 8 | # Default level of consumer goods that a building will buy for its slaves |
| SLAVE\_BASKET\_MIN | 1 | # Min level of consumer goods that a building will buy for its slaves (the highest of this and SLAVE\_BASKET\_SCALED\_MIN is used) |
| SLAVE\_BASKET\_MAX | 12 | # Max level of consumer goods that a building will buy for its slaves (the lowest of this and SLAVE\_BASKET\_SCALED\_MAX is used) |
| SLAVE\_BASKET\_SCALED\_MIN | 0.5 | # Multiplied by lowest non-slave wealth in the building |
| SLAVE\_BASKET\_SCALED\_MAX | 1 | # Multiplied by lowest non-slave wealth in the building |
| SLAVE\_BASKET\_SUBSISTENCE\_GOODS\_MULT | 0.05 | # Goods consumed for slaves in subsistence buildings are multiplied by this |
| COLONIAL\_SLAVERY\_ENSLAVEMENT\_RATE | 0.005 | # Under colonial slavery up to this much of a state's populace can be enslaved for their debts each week |
| COLONIAL\_SLAVERY\_ENSLAVEMENT\_RATE\_PER\_POP | 0.15 | # No more than this fraction of a single pop can be enslaved each week |
| COLONIAL\_SLAVERY\_ENSLAVEMENT\_RATE\_DROP\_OFF\_PER\_WEALTH | 0.01 | # Each point of wealth reduces max enslavement rate on a pop by this |
| COLONIAL\_SLAVERY\_MAX\_STATE\_SLAVE\_FRACTION | 0.25 | # If more than this % of a state's population are slaves, do not enslave any more pops under colonial slavery |
| COLONIAL\_SLAVERY\_ACCEPTANCE\_THRESHOLD | 60 | # Pops with this or more acceptance in their state do not get enslaved under colonial slavery |
| DEBT\_SLAVERY\_ENSLAVEMENT\_RATE | 0.005 | # Under debt slavery up to this much of a state's populace can be enslaved for their debts each week |
| DEBT\_SLAVERY\_ENSLAVEMENT\_RATE\_PER\_POP | 0.1 | # No more than this fraction of a single pop can be enslaved each week |
| DEBT\_SLAVERY\_ENSLAVEMENT\_RATE\_DROP\_OFF\_PER\_WEALTH | 0.01 | # Each point of wealth reduces max enslavement rate on a pop by this |
| DEBT\_SLAVERY\_MAX\_STATE\_SLAVE\_FRACTION | 0.15 | # If more than this % of a state's population are slaves, do not enslave any more pops under debt slavery |
| SLAVE\_TRADE\_MIN\_VACANCIES\_NEEDED\_TO\_IMPORT | 500 | # There needs to be at least this many (non-subsistence) vacancies in buildings that can be filled by slaves in order for slave import to happen |
| SLAVE\_TRADE\_MIN\_POPULATION\_TO\_EXPORT | 100000 | # There needs to be at least this many people in the state in order for it to be selected, or remain valid, as a slave import target |
| SLAVE\_TRADE\_FULL\_EXPORT\_POPULATION\_THRESHOLD | 250000 | # Below this amount of state population, the number of slaves exported is reduced by a multiplier scaled against SLAVE\_TRADE\_MIN\_POPULATION\_TO\_EXPORT (at the halfway point between the two numbers the multiplier is 0.5x, etc) |
| SLAVE\_TRADE\_POPULATION\_FRACTION\_WEIGHT | 100 | # Weight of slave population ratio in slave import marker selection |
| SLAVE\_TRADE\_POPULATION\_TOTAL\_WEIGHT | 0.0002 | # Weight of total population in slave import marker selection |
| SLAVE\_TRADE\_TURMOIL\_WEIGHT | 25 | # Weight of slave turmoil in slave import marker selection |
| SLAVE\_TRADE\_DISTANCE\_WEIGHT | 1 | # Inverse weight (penalty) for distance in slave import marker selection |
| SLAVE\_TRADE\_OTHER\_STATES\_WEIGHT | 2 | # Inverse weight (penalty) for having other slave import markers |
| SLAVE\_TRADE\_EXISTING\_STATE\_CULTURE\_WEIGHT\_MULT | 10 | # Total score of state is multiplied by this if importing from states whose homeland cultures are already present in this state |
| SLAVE\_TRADE\_NUMBER\_EVALUATED\_STATES | 10 | # Slave import marker is selected randomly from this many potential targets with highest weight |
| SLAVE\_TRADE\_BASE\_SLAVES\_PER\_WEEK | 100 | # Base number of slaves that will be traded per marker per week |
| SLAVE\_TRADE\_ARABLE\_LAND\_EFFECT | 1 | # Slaves traded per week is increased by this for each arable land in the importing state |
| SLAVE\_TRADE\_ARABLE\_LAND\_EFFECT\_MAX | 200 | # Maximum that arable land can increase slaves traded per week |
| SLAVE\_TRADE\_RANDOM\_MIN | 0.5 | # Slaves traded per week is multiplied by a random number, minimum of this |
| SLAVE\_TRADE\_RANDOM\_MAX | 1.5 | # Slaves traded per week is multiplied by a random number, maximum of this |
| SLAVE\_TRADE\_MIN\_MARKET\_ACCESS | 0.1 | # Minimum market access multiplier for slave trade, i.e. even at a marker with 0 market access, this fraction of the base number will be traded |
| BUILDING\_FAILED\_HIRE\_COOLDOWN\_WEEKS\_WITHOUT\_WAGE\_RAISE | 4 | # If a building fails to hire, it waits this many weeks before trying again \*unless\* it has since raised wages or adjusted its hiring rate |
| BUILDING\_LAYOFFS\_DECREASE\_BY | 0.05 | # The ratio that layoffs will reduce employment by (e.g. 0.15 means if you're currently 57% employed, reduce that to 48.45%) |
| BUILDING\_LAYOFF\_HIRING\_COOLDOWN\_WEEKS | 4 | # If a building does layoffs, don't hire anymore workers for at least this amount of weeks |
| BUILDING\_MINIMUM\_HIRING\_ADJUSTMENT\_FRACTION | 0.001 | # If a hiring or firing wouldn't result in at least this amount of the wanted employees being transfered, don't bother |
| BUILDING\_CASH\_RESERVES\_HIGH\_ROI | 0.25 | # A ROI (return on investment) at or above this value is considered "high". In this context ROI means how much more money a building makes compared to how much it spends. Must be >= BUILDING\_CASH\_RESERVES\_MED\_ROI. |
| BUILDING\_CASH\_RESERVES\_MED\_ROI | 0.15 | # A ROI (return on investment) at exactly this value is considered "medium". In this context ROI means how much more money a building makes compared to how much it spends. Must be >= BUILDING\_CASH\_RESERVES\_LOW\_ROI. |
| BUILDING\_CASH\_RESERVES\_LOW\_ROI | 0.05 | # A ROI (return on investment) at or below this value is considered "low". In this context ROI means how much more money a building makes compared to how much it spends. Must be > 0. |
| BUILDING\_CASH\_RESERVES\_FILL\_TIME\_HIGH\_ROI | 26 | # Base number of weeks to fill a building's cash reserves when ROI is high. Final number of weeks is directly interpolated if ROI is between medium and high. Must be > 0. |
| BUILDING\_CASH\_RESERVES\_FILL\_TIME\_MED\_ROI | 52 | # Base number of weeks to fill a building's cash reserves when ROI is medium. Must be > 0. |
| BUILDING\_CASH\_RESERVES\_FILL\_TIME\_LOW\_ROI | 78 | # Base number of weeks to fill a building's cash reserves when ROI is low. Final number of weeks is directly interpolated if ROI is between low and medium. Must be > 0. |
| BUILDING\_CASH\_RESERVES\_MIN\_DEPOSIT\_PERCENT | 0.25 | # The minimum percentage of weekly profits that building owners will try to deposit into a building's cash reserves. Must be >= 0. |
| BUILDING\_CASH\_RESERVES\_MAX\_DEPOSIT\_PERCENT | 0.50 | # The maximum percentace of weekly profits that building owners will try to deposit into a building's cash reserves. Must be >= BUILDING\_CASH\_RESERVES\_MIN\_DEPOSIT\_PERCENT |
| OWNERSHIP\_BUILDING\_CASH\_RESERVES\_MIN\_DEPOSIT\_PERCENT | 0.125 | # Replaces BUILDING\_CASH\_RESERVES\_MIN\_DEPOSIT\_PERCENT for buildings that own other buildings |
| OWNERSHIP\_BUILDING\_CASH\_RESERVES\_MAX\_DEPOSIT\_PERCENT | 0.25 | # Replaces BUILDING\_CASH\_RESERVES\_MAX\_DEPOSIT\_PERCENT for buildings that own other buildings |
| BUILDING\_HIGH\_CASH\_RESERVES\_THRESHOLD | 0.5 | # If cash reserves are above this fraction of max, buildings won't try to reduce expenses even if they are losing money |
| EMPLOYMENT\_DIVIDEND\_ESTIMATE\_MULT | 2.0 | # When deciding employment overestimate dividends since they vary a lot and we really dont want to move someone to a job without a dividend that then turns out worse |
| GOODS\_DEFAULT\_TRADE\_QUANTITY | 10 | # Base quantity traded by trade centers if not otherwise specified in goods type |
| MIN\_POPS\_PER\_PROFESSION | 3 | # A building can hire at least this many pops in a profession, even if it has fewer than this number of pops available |
| POPS\_PER\_PROFESSION\_LOG\_BASE | 10 | # The number of pops in a profession is calculated as logarithm of employees count with this base |
| ESTABLISH\_COLONY\_PROVIDE\_PORT | yes | # If establishing a colony should build a port for coastal colonies in order to immediately connect them to the market. |
| ESTABLISH\_COLONY\_PORT\_COST | 100000 | # How much money it costs to establish a coastal colony that builds a port |
| ESTABLISH\_COLONY\_PORT\_LEVEL | 1 | # What level port you get when establishing a coastal colony |
| SHIPPING\_LANE\_MERCHANT\_MARINE\_COST\_SCALING | 0.15 | # Added to shipping lane cost multiplier for each multiple of expected distance beyond the first |
| GOODS\_DEFAULT\_MERCHANT\_MARINE\_COST\_MULTIPLIER | 1 | # The merchant marine cost of shipping a single unit of goods (can be overridden in defines) |
| OVERSEAS\_INFRASTRUCTURE\_MERCHANT\_MARINE\_COST\_MULTIPLIER | 0.2 | # Merchant marine cost for each infrastructure usage in overseas state for port connection shipping lanes |
| MERCHANT\_MARINE\_GOODS\_KEY | "merchant\_marine" | # The goods key used for merchant marine demand |
| SUPPLY\_NETWORK\_SHORTAGE\_THRESHOLD | 0.5 | # If merchant marine sell/buy ratio is lower than this, start applying supply network strength penalties |
| SUPPLY\_NETWORK\_SHORTAGE\_INCREASE\_SPEED | 0.1 | # Supply network shortage penalty increases by this fraction of the target each week |
| SUPPLY\_NETWORK\_SHORTAGE\_DECREASE\_SPEED | 0.1 | # Supply network shortage penalty decreases by this fraction of MAX each week |
| SUPPLY\_NETWORK\_SHORTAGE\_PENALTY\_MIN | 0.05 | # Minimum supply network shortage penalty when any shortage exists |
| SUPPLY\_NETWORK\_SHORTAGE\_PENALTY\_MAX | 0.5 | # Maximum supply network shortage penalty |
| DEFAULT\_EXPORT\_TARIFFS | low\_tariffs | # The default export tariff level that is applied when nothing is set in history |
| DEFAULT\_IMPORT\_TARIFFS | low\_tariffs | # The default import tariff level that is applied when nothing is set in history |
| TARIFF\_LEVEL\_COOLDOWN\_GRACE\_PERIOD\_DAYS | 7 | # After changing a tariff level, it takes this many days before the cooldown activates (to give you a chance to change your mind) |
| TARIFF\_LEVEL\_COOLDOWN\_MONTHS | 3 | # After changing a tariff level, you must wait this long to change it again |
| TARIFF\_LEVEL\_EFFECT\_LOW | 0.25 | # The fraction of tariff rate applied at low level |
| TARIFF\_LEVEL\_EFFECT\_HIGH | 0.5 | # The fraction of tariff rate applied at high level |
| TARIFF\_LEVEL\_EFFECT\_MAXIMUM | 1.0 | # The fraction of tariff rate applied at maximum level |
| SUBVENTION\_LEVEL\_EFFECT\_LOW | 0.25 | # The fraction of subvention rate applied at low level |
| SUBVENTION\_LEVEL\_EFFECT\_HIGH | 0.5 | # The fraction of subvention rate applied at high level |
| SUBVENTION\_LEVEL\_EFFECT\_MAXIMUM | 1.0 | # The fraction of subvention rate applied at maximum level |
| REINVESTMENT\_SUBSISTENCE\_FRACTION\_REDUCTION | 0.5 | # Reinvestment from pops in ownership buildings is multiplied by ( 1 - this \* the share of levels owned that are subsistence buildings ) |
| COMPANY\_OVER\_LIMIT\_BONUS\_PENALTY\_MIN | 0.33 | # If the number of companies in the country exceeds the limit, all company bonuses get penalty. The penalty is scaled proportionally to the limit (exceeding the limit by 100% reduces bonuses by 100%) and the minimum value is this |
| COMPANY\_PRODUCTIVITY\_RATIO\_HIGH\_THRESHOLD | 1.25 | # Companies whose productivity exceeds this factor of the global average will be considered high-productivity companies |
| COMPANY\_PRODUCTIVITY\_RATIO\_LOW\_THRESHOLD | 0.75 | # Companies whose productivity is below this factor of the global average will be considered low-productivity companies |
| COMPANY\_PRODUCTIVITY\_ABSOLUTE\_HIGH\_THRESHOLD | 25 | # Companies whose productivity exceeds this amount will ALWAYS be considered high-productivity companies |
| COMPANY\_PRODUCTIVITY\_ABSOLUTE\_LOW\_THRESHOLD | 5 | # Companies whose productivity is below this amount will ALWAYS be considered low-productivity companies |
| COMPANY\_PROSPERITY\_MAX | 100 | # Company prosperity cannot be higher than this |
| COMPANY\_PROSPERITY\_BONUS\_ACTIVATION\_THRESHOLD | 100 | # At this amount of prosperity, a company will start providing its prosperity bonuses |
| COMPANY\_PROSPERITY\_BONUS\_DEACTIVATION\_THRESHOLD | 75 | # At this amount of prosperity, a company will stop providing its prosperity bonuses |
| COMPANY\_PROSPERITY\_PRODUCTIVITY\_MULTIPLIER | 50 | # Companies gain this much target prosperity from productivity of buildings compared to global average (defined value is at exactly average) |
| COMPANY\_PROSPERITY\_PRODUCTIVITY\_MAX | 100 | # Max target prosperity from productivity |
| COMPANY\_PROSPERITY\_EMPLOYED\_LEVELS\_MULTIPLIER | 1 | # Companies gain this much target prosperity from number of fully employed building levels |
| COMPANY\_PROSPERITY\_EMPLOYED\_LEVELS\_MAX | 50 | # Max target prosperity from fully employed building levels |
| COMPANY\_PROSPERITY\_POPULARITY\_MULTIPLIER | 0.1 | # Companies gain this much target prosperity, scaled by the popularity of its executive |
| COMPANY\_PROSPERITY\_POPULARITY\_MAX | 10 | # Max target prosperity from popularity |
| COMPANY\_PROSPERITY\_POPULARITY\_MIN | 0 | # Min target prosperity from popularity |
| COMPANY\_PROSPERITY\_WEEKLY\_INCREASE\_BASE | 0.2 | # Base amount of prosperity increase towards target value each week |
| COMPANY\_PROSPERITY\_WEEKLY\_INCREASE\_SCALED | 0.04 | # Prosperity increase towards target value each week, for each fully employed building level the company has |
| COMPANY\_PROSPERITY\_WEEKLY\_INCREASE\_SCALED\_MAX | 0.8 | # Max value for weekly prosperity increase from employed levels |
| COMPANY\_PROSPERITY\_WEEKLY\_DECREASE\_BASE | -1.0 | # Base amount of prosperity decrease towards target value each week |
| COMPANY\_PROSPERITY\_WEEKLY\_DECREASE\_SCALED | 0.02 | # Prosperity decrease towards target value each week, for each fully employed building level the company has |
| COMPANY\_PROSPERITY\_WEEKLY\_DECREASE\_SCALED\_MAX | 0.8 | # Min value for weekly prosperity decrease from employed levels |
| COMPANY\_COUNTRY\_CONSTRUCTION\_BONUS\_MULT | 0.2 | # Multiplier for company countries |
| NATIONALIZATION\_PER\_LEVEL\_COST | 500 | # How much it costs to nationalize one level of a building per construction point |
| PRIVATIZATION\_PER\_LEVEL\_COST | 250 | # How much it costs to privatize one level of a building per construction point |
| MIN\_FAKE\_CONSTRUCTION\_COST | 100 | # Min construction cost for the matters of nationalization and privatization |
| COMPANY\_COUNT\_OF\_REGIONAL\_HQ\_TYPES | 3 | # Count of building types in state reserved for flavored companies |
| COMPANY\_MINIMUM\_LEVELS\_PER\_HQ | 5 | # Minimum building levels per HQ required to establish or maintain a company |
| BASE\_REGIONAL\_HQS | 1 | # Base level of regional HQs available to a company after granted investment charter |
| LEVELS\_PER\_REGIONAL\_HQ | 50 | # How many levels company needs to aquire to get a new regional HQ |
| COMPANY\_ON\_ESTABLISH\_COOLDOWN\_MONTHS | 60 | # Cooldown in months after establishing a company before you can disband it |
| COMPANY\_ON\_DISBAND\_COOLDOWN\_MONTHS | 48 | # Cooldown in months after disbanding a company before you can re-establish it |
| BUILDING\_LEVEL\_BUREAUCRACY\_COST | 1 | # Cost of owning one level of the goverment building |
| COLLECTIVIZATION\_DEBT\_RATIO | 0.5 | # Ratio of the country max debt can be used for collectivizing |
| MIN\_COLLECTIVIZATION\_BUDGET | 1000000 | # Min size of a collectivizing budget |
| DYNAMIC\_INDUSTRY\_CHARTER | no | # Do we want to use dynamic industry charter instead of scripted ones |
| COMPANY\_INFLUENCE\_LEVEL\_STEPS | { 10 50 100 250 500 1000 1500 2500 5000 10000 } |  |
| COMPANY\_CHARTER\_AUTHORITY\_COST | 100 | # Cost of establishing a company charter |
| ``` # Currently only used in loc, not logic ``` | | |
| HARVEST\_CONDITION\_MIN\_INTENSITY | 0.0 | # Lowest intensity value a harvest condition can roll ( 0 <= this < max) |
| HARVEST\_CONDITION\_MAX\_INTENSITY | 9.0 | # Highest intensity value a harvest condition can roll (min < this) |
| COMPANY\_MONOPOLY\_COOLDOWN\_MONTHS | 60 | # Cooldown in months after establishing a companies monopoly before you can revoke its monopoly |
| COUNTRY\_MONOPOLY\_MAX\_COUNT | 5 | # Maximum number of country monopolies a country can have |
| COUNTRY\_MONOPOLY\_AUTHORITY\_COST | 100 | # Cost of establishing a country monopoly |
| WORLD\_MARKET\_MONOPOLY\_MIN\_SHARE | 0.5 | # For a market to be considered to have a world market monopoly, it has to control a greater share of exports than this |
| MONOPOLY\_PRICE\_IMPACT | 0.2 | # The price of a good is increased by this multiplier based on how much of its supply is considered to be under a monopoly |
| PRIVATIZATION\_DISCOUNT\_MONOPOLY | 0.2 | # The cost of privatizing a building is multiplied by this for companies with a monopoly on that building type |
| PRIVATIZATION\_DISCOUNT\_COMPANY\_ONLY | 0.1 | # The cost of a company privatizing a building is multiplied by this when non company privatization is forbidden (cumulative with PRIVATIZATION\_DISCOUNT\_MONOPOLY) |
| PRESTIGE\_GOODS\_INPUT\_THROUGHPUT\_BONUS | 0.2 | # Bonus to throughput, scaled against proportion of input goods base value that is prestige goods |
| TOLL\_RATE\_NO\_TOLLS | 0.0 | # Toll rate on No Tolls setting. Value is multiplied with goods value crossing a strait |
| TOLL\_RATE\_LOW\_TOLLS | 0.10 | # Toll rate on Low Tolls setting. Value is multiplied with goods value crossing a strait |
| TOLL\_RATE\_MEDIUM\_TOLLS | 0.20 | # Toll rate on Medium Tolls setting. Value is multiplied with goods value crossing a strait |
| TOLL\_RATE\_HIGH\_TOLLS | 0.40 | # Toll rate on High Tolls setting. Value is multiplied with goods value crossing a strait |
| TOLL\_RATE\_MULTIPLIER\_FULL\_CONTROL | 2.0 | # Multiplie on the above value if a country controls both sides of a strait |
| STRAIT\_FULL\_CONTROL\_TRADE\_IMPORTANCE\_MULT | 1.5 | # Multiplier on strait trade importance when the controller controls both sides of the strait |
| MAX\_PIRATED\_GOODS\_PER\_HUB | 0.25 | # Max % of goods that can be pirated in one Hub->Hub connection |
| PIRACY\_SHIP\_SPEED\_TO\_GOODS\_RATIO | 0.003 | # The % of goods trade quantity that are stolen per speed of a ship. |
| PIRATED\_GOODS\_SALE\_DISCOUNT | 0.5 | # How much % value goods we get when being sold and turned into income for the country |
| PIRACY\_SELL\_ORDERS\_MIN\_GOODS | 0.1 | # The total amount of a good pirated needs to be at least this much to add it to sell orders, otherwise it's 100% lost |
### Military
| Define | Default Value | Dev Comment |
| POWER\_PROJECTION\_DIVISOR | 1000 | # Average of Offense and Defense is multiplied by manpower and divided by this to determine a unit's power projection |
| INITIAL\_MANPOWER\_COST\_MULTIPLIER | 10 | # there is an extra cost for training new recruits, compared to maintenence of said recruits |
| MANPOWER\_DIVISOR | 10000 | # the strategic goods needed by soldiers are counted in sets of |
| ATTRITION\_RISK\_EXILED\_ARMY\_ADD | 0.2 | # Exiled formation has attrition risk increased by this |
| ATTRITION\_RISK\_ON\_ENEMY\_TERRITORY\_ADD | 0.3 | # Exiled formation on enemy territory has attrition risk additionally increased by this |
| MANPOWER\_LOST\_DUE\_TO\_ATTRITION\_PER\_WEEK\_MIN | 0.04 | # The minimum percentage of manpower a unit can lose each week due to attrition |
| MANPOWER\_LOST\_DUE\_TO\_ATTRITION\_PER\_WEEK\_MAX | 0.12 | # The maximum percentage of manpower a unit can lose each week due to attrition |
| ATTRITION\_RECOVERY\_RATE\_BASE | 0.7 | # Base recovery rate for units not participating in battles affected by attrition, e.g. casualties with 0.7 recovery rate would consist of 70% wounded and 30% deaths |
| ATTRITION\_RECOVERY\_RATE\_RANDOM\_RANGE | 0.1 | # Randomness range for recovery rate for units not participating in battles affected by attrition |
| MIN\_VARIABLE\_DISTRIBUTION\_PER\_POP | 0 |  |
| MAX\_VARIABLE\_DISTRIBUTION\_PER\_POP | 100 |  |
| BATTLE\_LETHALITY\_MIN | 0.001 |  |
| BATTLE\_LETHALITY\_MAX | 0.005 |  |
| BATTLE\_RAW\_MANPOWER\_INFLICTED\_CASUALTY\_RATIO | 0.5 | # applied to the number of casualties caused by raw number of troops, ie without considering Offense/Defense - increasing this makes CE less important and battles more lethal |
| BATTLE\_COMBAT\_EFFICIENCY\_INFLICTED\_CASUALTY\_RATIO | 1.5 | # applied to the number of casualties caused by troops with Offense/Defense also factored in - increasing this makes CE more important and battles more lethal |
| BATTLE\_MAX\_CASUALTY\_DISADVANTAGE\_PENALTY | 1.0 | # a limit for the battle\_casualties\_disadvantage static modifier. 1.0 means a maximum of 100% penalty is applied. |
| MAX\_CE\_ADVANTAGE | 1 |  |
| MIN\_MANPOWER\_CASUALTY\_PER\_ROUND | 5 | # Minimum manpower losses per round |
| MIN\_USABLE\_MANPOWER | 100 | # Lowest manpower engaged in a battle limit (otherwise determined by combat width) |
| COMBAT\_UNITS\_PER\_LEVEL | 1 | # Number of combat units each level of military building can support. Must be the same for all recruitable buildings (barracks/conscription centers) |
| BASE\_MORALE\_RECOVERED\_PER\_DAY | 0.03 | # Default morale recovered is 3% per day |
|  |  | # Travel related |
| COMMANDER\_TRAVEL\_PIXELS\_TO\_DAYS\_SCALE | 0.045 | # Used to convert a travel distance from pixels to days. Example: a travel of 500px becomes 500 \* 0.05 = 25 days |
| COMMANDER\_TRAVEL\_MIN | 3 | # Minimum travel time for commander to reach their new formation |
| COMMANDER\_TRAVEL\_MAX | 50 | # Limits the travel time to GENERAL\_TRAVEL\_MAX days. |
| EMBARKATION\_MAX\_DOCKED\_FLEET\_TRAVEL\_DAYS | 30 | # If the army's travel to a docked fleet's port exceeds this many days, search for a closer coastal state instead |
| FORMATION\_TRAVEL\_NETWORK\_SPEED | 15 | # (Temp) base speed of formations when they travel via the travel network |
| EMPTY\_FLEET\_MOVEMENT\_SPEED | 100 | # Movement speed of fleets with no ships, so they can still be moved |
| BATTLE\_PLAN\_ADVANCE\_PROGRESS\_TO\_LAUNCH | 100 | # required accumulated advance progress to launch |
| BATTLE\_BASE\_MIN\_PROVINCES\_TAKEN | 4 |  |
| BATTLE\_BASE\_MAX\_PROVINCES\_TAKEN | 12 |  |
| BATTLE\_PROVINCES\_TAKEN\_FRONT\_PROVINCES\_NUM\_DIVISOR | 5 | # Attacker takes (num provinces in front) divided by this as extra, clamped to BATTLE\_BASE\_MIN\_PROVINCES\_TAKEN and BATTLE\_BASE\_MAX\_PROVINCES\_TAKEN |
| BATTLE\_PROVINCES\_TAKEN\_THEATER\_PROVINCES\_NUM\_DIVISOR | 50 | # Attacker takes (num provinces in theater) divided by this as extra, clamped to BATTLE\_BASE\_MIN\_PROVINCES\_TAKEN and BATTLE\_BASE\_MAX\_PROVINCES\_TAKEN |
| BATTLE\_PROVINCES\_TAKEN\_ATTACKING\_UNIT\_SCALE | 0.02 | # Multiply provinces taken by ( 1 + this \* number of attacking units left at end of battle) |
| BATTLE\_PROVINCES\_TAKEN\_MAX\_DEPTH\_MIN | 2 | # Maximum distance from battle provinces that provinces can be taken by attacker (minimum) |
| BATTLE\_PROVINCES\_TAKEN\_MAX\_DEPTH\_MAX | 10 | # Maximum distance from battle provinces that provinces can be taken (maximum) |
| BATTLE\_PROVINCES\_TAKEN\_MAX\_DEPTH\_FRONT\_PROVINCES\_NUM\_DIVISOR | 50 | # Num provinces in front is divided by this and added to maximum depth attacker can take provinces at |
| BATTLE\_PROVINCES\_TAKEN\_MAX\_DEPTH\_THEATER\_PROVINCES\_NUM\_DIVISOR | 500 | # Num provinces in theater is divided by this and added to maximum depth attacker can take provinces at |
| DEFENSIVE\_PROVINCES\_RETAKEN\_MAX\_DEPTH | 1 | # Maximum distance from battle provinces that provinces can be retaken in defensive battle |
| BATTLE\_PROVINCES\_TAKEN\_THEATER\_UNIT\_SCALE | 2 | # Scales number of provinces captured by theater-provinces / ( units-in-theater \* this-define ) |
| BATTLE\_PROVINCES\_TAKEN\_MAX\_EXTRA | 3 | # If the selected provinces will cause split, capture the new theater as long as it has up to BATTLE\_PROVINCES\_TAKEN\_MAX\_EXTRA provinces. This might not respect the distance limit (BATTLE\_PROVINCES\_TAKEN\_MAX\_DEPTH). |
| BATTLE\_PROVINCES\_TAKEN\_THEATER\_MIN\_SCALE | 0.01 | # Number of provinces captured cannot result in a lower scaling factor than this due to BATTLE\_PROVINCES\_TAKEN\_THEATER\_UNIT\_SCALE |
| BATTLE\_PROVINCES\_TAKEN\_ABSOLUTE\_MIN | 1 | # The absolute least number of provinces that can be captured in a successful advance, after all scaling has been applied |
| CONVOY\_RAIDING\_STRENGTH\_MULT | 0.3 | # How strong each Convoy raiding point is |
| CONVOY\_RAIDING\_COOLDOWN\_DAYS\_MIN | 10 | # Min days until the next convoy raiding in the sea node |
| CONVOY\_RAIDING\_COOLDOWN\_DAYS\_MAX | 30 | # Max days until the next convoy raiding in the sea node |
| CONVOY\_RAIDING\_DAMAGE\_MIN\_RANDOM\_FACTOR | 0.5 | # Actual convoy raiding damage is scaled between CONVOY\_RAIDING\_DAMAGE\_MIN\_RANDOM\_FACTOR and CONVOY\_RAIDING\_DAMAGE\_MAX\_RANDOM\_FACTOR to provide some random variability |
| CONVOY\_RAIDING\_DAMAGE\_MAX\_RANDOM\_FACTOR | 1.0 | # Actual convoy raiding damage is scaled between CONVOY\_RAIDING\_DAMAGE\_MIN\_RANDOM\_FACTOR and CONVOY\_RAIDING\_DAMAGE\_MAX\_RANDOM\_FACTOR to provide some random variability |
| CONVOY\_RAIDING\_DEFENSE\_MULT | 0.15 | # How much is Convoy raiding strength reduced by patrolling ships ( num ships \* ce defense ) |
| CONVOY\_RAIDING\_MAX\_DEFENSE | 0.90 | # Example: the defender can never block more than 90% of the convoy damage they're currently taking |
|  |  | # Convoy recovery rate after being raided is based on a global and a local rate, using whichever is lower |
| CONVOY\_RAIDING\_GLOBAL\_RECOVERY\_RATE | 0.001 | # The rate at which damaged convoys are replaced each day, relative to total number of produced convoys in the raided country |
| CONVOY\_RAIDING\_LOCAL\_RECOVERY\_RATE | 0.01 | # The rate at which damaged convoys are replaced each day, relative to total number of convoys passing through the sea node |
| CONVOY\_RAIDING\_RECOVERY\_RATE\_PEACETIME\_FACTOR | 4 | # While a country is at peace, convoys will be restored this much faster |
| MIN\_OFFENSE\_DEFENSE | 1 | # The absolute lowest Offense or Defense a unit can have |
| INTERCEPTION\_DELAY\_BASE\_DAYS | 5 | # atleast this many days between each admiral interception attempt |
| INTERCEPTION\_DELAY\_MAX\_RANDOM\_DAYS\_FACTOR | 10 | # up to this many extra days between each admiral interception attempt |
| INTERCEPTION\_BASE\_CHANCE | 0.1 | # base chance when trying to intercept enemy admirals |
| DEMOBILIZATION\_TIME\_DAYS | 90 | # Number of days it takes to fully demobilize after a formation has returned home |
| MOBILIZATION\_INFRASTRUCTURE\_FACTOR | 0.01 | # amount of mobilization generated per point of infrastructure. one battalion takes one full point of mobilization to mobilize |
| MIN\_MOBILIZATION\_PER\_DAY | 0.05 | # minimum mobilization gained per day by each mobilizing battalion (the last unit to gain mobilization in a state might have to do with whatever is left) |
| MAX\_MOBILIZATION\_PER\_DAY | 0.20 | # maximum mobilization gained per day by each mobilizing battalion |
| FRONT\_MARKER\_ADVANTAGE\_PREDICTION\_MIN\_COMBAT\_POWER | 0.01 | # Used as a minimum value when calculating the Front Advantage |
| BATTLE\_CONDITION\_MIN\_TICKS\_BETWEEN\_UPDATE\_DEFAULT | 40 | # Unless otherwise specified on the battle condition type, battle conditions will not update until at least this many ticks has passed |
| BATTLE\_CONDITION\_CHANCE\_TO\_UPDATE\_PER\_EXTRA\_TICK | 0.01 | # For each tick that has passed since the minimum number of ticks, this chance to refresh battle conditions (i.e. 13 ticks after min, there's 13% chance of switching) |
| DEFAULT\_ORDER | "advance" | # Default order for generals |
| MILITARY\_FORMATION\_COMMAND\_LIMIT\_NO\_COMMANDER | 20 | # Default command limit if formation has no commander |
| LOW\_COMMAND\_LIMIT\_GRACE\_PERIOD\_DAYS | 30 | # How many days will it take for a formation whose units exceeds its command limit to start suffering penalties |
| INVALID\_NAVAL\_MISSION\_GRACE\_PERIOD\_DAYS | 10 | # How many days a fleet with an invalid naval mission will wait before going back to port |
| FORMATION\_AUTO\_MERGE\_GRACE\_PERIOD\_DAYS | 3 | # Only auto-merge units into formations created within this many days |
| COMMANDER\_SUFFICIENT\_CAPACITY\_MULT | 1.5 | # Commanders of a type are considered sufficient if their cumulative command limit is at least this times the total active combat units of that type |
| UNNECESSARY\_PROMOTION\_PENALTY\_YEARS | 5 | # Duration in years of the interest group approval penalty for unnecessary promotions |
| UNNECESSARY\_PROMOTION\_ARMED\_FORCES\_IG | "ig\_armed\_forces" | # Used to identify the armed forces IG, who are always upset by unnecessary promotions |
| RECENTLY\_PROMOTED\_YEARS | 5 | # Duration in years of the loyalty bonus for recently promoted commanders |
| MILITARY\_FORMATION\_ORGANIZATION\_MIN | 0 | # The minimum amount of Organization a Military Formation will always retain despite exceeding their Command Limit |
| MILITARY\_FORMATION\_ORGANIZATION\_MAX | 100 | # The maximum amount of Organization a Military Formation requires to be considered at full Organization |
| MILITARY\_FORMATION\_ORGANIZATION\_LOSS\_RATE | 0.05 | # The percentage of current Organization a Military Formation can lose in a day |
| MILITARY\_FORMATION\_ORGANIZATION\_LOSS\_MIN | 1 | # The minimum amount of Organization a Military Formation can lose in a day |
| MILITARY\_FORMATION\_ORGANIZATION\_GAIN\_MIN | 0.1 | # The minimum amount of Organization a Military Formation can gain in a day |
| MILITARY\_FORMATION\_ORGANIZATION\_SPECIAL\_UNITS\_ADD | -50 | # Military Formation with too many special units gain this Organization penalty: Target = Target + ( excess ratio \* this ) |
| MILITARY\_FORMATION\_ORGANIZATION\_EXILE\_MULT | -1 | # Exiled Military Formation has its Target Organization modified: Target = Target \* ( 1 + this ) |
| MILITARY\_FORMATION\_ORGANIZATION\_SUPPLY\_SHORTAGE\_EFFECT\_THRESHOLD | 0.25 | # Organization penalty starts when supply drops below this ratio |
| MILITARY\_FROMATION\_MAX\_RESUPPLY\_RATIO\_PER\_WEEK | 0.1 | # Each week, a military formation can resupply this fraction of its total supply need |
| MILITARY\_FORMATION\_MIN\_RESUPPLY\_PER\_WEEK | 10 | # Each week, a military formation can resupply at least this amount of its supply need |
| MOBILIZATION\_OPTION\_DIFFERENCE\_ORGANIZATION\_IMPACT | 20 | # The penalty to Organization gained for each difference by merging units between Formations with different Mobilization Options |
| FLEET\_PRESENCE\_GAIN\_PER\_DAY | 0.02 | # The amount of Presence a Fleet gains per day while in Mission Area |
| FLEET\_PRESENCE\_DECAY\_PER\_DAY | 0.02 | # The amount of Presence a Fleet decays per day while not in Mission Area |
| FLEET\_PRESENCE\_TRANSPORTING\_OR\_INVADING | 1.0 | # Sea Presence forced on fleets transporting armies or supporting a naval invasion |
| FLEET\_GUARANTEED\_BATTLE\_SIZE | 0.5 | # It's guaranteed that half of the ships arrive regardless of sea presence |
| FLEET\_SPOT\_BASE\_CHANCE | 0.005 | # Base chance (1%) to spot an enemy fleet per detection/visibility ratio |
| FLEET\_SPOT\_SCALING\_MULTIPLIER | 0.01 | # Scaling factor multiplier per total ship count when spotting a fleet |
| MILITARY\_FORMATION\_WEEKLY\_MAX\_UNIT\_UPGRADES\_ARMY | 0.1 | # Each week a mobilized army can upgrade this (0.0-1.0) fraction of its total number of units. |
| MILITARY\_FORMATION\_WEEKLY\_MAX\_UNIT\_UPGRADES\_FLEET | 0.05 | # Each week a mobilized fleet can upgrade this (0.0-1.0) fraction of its total number of units. |
| MANPOWER\_RATIO\_REQUIRED\_TO\_CLEAR\_DEFEATED\_ADMIRALS | 0.75 | # A Defeated fleet without at least this ratio of current/max manpower will remain Defeated |
| MILITARY\_FORMATION\_AUTO\_DEPLOY\_DISTANCE\_LIMIT | 250 | # Armies are not auto-deployed to fronts that are located further than this pixel-distance from the army's current position |
| BASECAMP\_WANTED\_FORMATIONS\_SCORE | 1.0 | # The more formations we need to add to the basecamp the higher the score |
| BASECAMP\_DISTANCE\_SCORE\_THRESHOLD | 100 | # Is multiplied with penalties below and then is subtracted from the basecamp score |
| BASECAMP\_DISTANCE\_PENALTY | 0.4 | # The further basecamp is from the formation the lower the score |
| BASECAMP\_DISTANCE\_TO\_HOME\_HQ\_PENALTY | 0.2 | # The further basecamp is from the formation's home HQ the lower the score |
| BASECAMP\_OWN\_COUNTRY\_SCORE | 0.2 | # Is added to the basecamp score if its state belongs to the formation's country |
| BASECAMP\_STRATEGIC\_OBJECT\_SCORE | 1.1 | # Is added to the basecamp score if it's near a strategic objective |
| BASECAMP\_NUM\_PROVINCES\_SCORE | 0.05 | # The more provinces around basecamp the higher the score |
| ``` # Defines below control how much blockade strength is required to fully blockade a state # The base target strength is equal to the state_blockade_resistance_add modifier ``` | | |
| BLOCKADE\_TARGET\_STRENGTH\_MAXIMUM | 100000 | # Required blockade strength cannot be higher than this |
| BLOCKADE\_TARGET\_STRENGTH\_PER\_TRADED\_UNIT | 0.1 | # Each base value of imports/exports in the market area increases required blockade strength by this (only for world market hubs) |
| BLOCKADE\_TARGET\_STRENGTH\_PER\_PRODUCED\_UNIT | 0.15 | # Each base value of goods produced in buildings affected by blockades (such as fisheries and shipyards) increases required blockade strength by this |
| BLOCKADE\_TARGET\_STRENGTH\_PER\_MERCHANT\_MARINE | 3 | # Each convoy passing through the state's port increases required blockade strength by this |
| BLOCKADE\_WORLD\_MARKET\_ACCESS\_IMPACT\_SCALING | 0.75 | # Reduction of world market access for blockaded world market hubs, scales against blockade level |
| BLOCKADE\_SHIPPING\_LANE\_IMPACT\_SCALING | 0.75 | # Reduction of efficiency for blockaded shipping lanes, scales against blockade level of either start or end point, whichever is most blockaded |
| BLOCKADE\_THROUGHPUT\_IMPACT\_SCALING | 0.75 | # Reduction of throughput for buildings affected by blockades, scales against blockade level |
| BLOCKADE\_SEA\_PRESENCE\_TRESHOLD | 0.5 | # At what level of sea presence is the blockade effective |
| BLOCKADE\_FORCED\_BATTLE\_LEVEL = 1.0 # A fleet undocking from a state with at least this blockade level will be forced into a battle with the blockading fleet |
|  |  | # Defines below control port bombardment effects on enemy coastal states |
| BOMBARDMENT\_DEVASTATION\_MAX | 25.0 | # Maximum devastation that can be generated by port bombardment |
| BOMBARDMENT\_DEVASTATION\_RATE | 0.20 | # Per day devastation increase, scales with effective bombardment level |
| BOMBARDMENT\_BUILDING\_DAMAGE\_BASE\_CHANCE | 0.02 | # Base daily chance to reduce the level of a random coastal building, scales with effective bombardment level |
| BOMBARDMENT\_SEA\_PRESENCE\_THRESHOLD | 0.1 | # At what level of sea presence is the port bombardment effective |
| OFFICERS\_TO\_SERVICEMEN\_RATIO\_THRESHOLD | 0.75 | # If the officer to servicemen ratio falls below this percentage from its ideal ratio for a building, the combat units provided by that building will start applying the effectiveness factor defined below. A threshold value means the effectiveness factor kicks in in later (when lacking more officers) [>= 0 and <= 1] |
| OFFICERS\_TO\_SERVICEMEN\_RATIO\_EFFECTIVENESS\_FACTOR\_MIN | -0.5 | # The effectiveness factor to offense and defense applied to units provided by a building that completely lacks officers. -1 means -100%. Total offense and defence cannot drop below MIN\_OFFENSE\_DEFENCE. [>= -1 and <= 0] |
| OFFICERS\_TO\_SERVICEMEN\_RATIO\_EFFECTIVENESS\_FACTOR\_MAX | 0 | # The effectiveness factor to offense and defense applied to units provided by a building that doesn't lack any officer. 0 means -0%, therefore units supplied by buildings that don't lack officers will fight at their full effectiveness allowed by their circumstances [>= OFFICERS\_TO\_SERVICEMEN\_RATIO\_EFFECTIVENESS\_FACTOR\_MIN and <= 0] |
| SAILORS\_PER\_ASSIGNMENT\_SLOT | 100 | # The number of sailors per ship assignment slot on Naval Administration buildings |
| SAILORS\_PER\_BUILDING\_LEVEL | 1000 | # The number of sailors per building level of Naval Administration |
| ACTIVE\_SHIP\_LIVING\_CREW\_PERCENTAGE | 0.1 | # If a ship has this percentage of living crew or less, it is rendered inactive |
| SHIP\_PARTICIPATE\_IN\_UPRISING\_CREW\_PERCENTAGE | 0.33 | # If at least this ratio of a ship's crew is from a rebelling state, the ship can participate in an uprising |
| SHIP\_MAINTENANCE\_SHIPYARD\_PREMIUM\_FACTOR | 0.2 # The profit margin shipyards get on maintenance costs (GoodsCost \* (1 + this)) |
| SHIP\_MAINTENANCE\_GOODS\_TO\_CONSTRUCTION\_GOODS\_FACTOR | 0.002 | # The ratio of maintenance goods cost to construction goods cost for ships. Used to determine how many goods are needed for maintenance paid by shipyards |
| SHIP\_UPKEEP\_GOODS\_TO\_CONSTRUCTION\_GOODS\_FACTOR | 0.002 | # The ratio of upkeep goods cost to construction goods cost for ships. Used to determine how many goods are needed for upkeep based on how many were needed for construction |
| SHIP\_UPKEEP\_GOODS\_DOCKED\_MULT | -0.8 | # If the ship is docked, its upkeep goods cost is changed by this mult value |
| SHIP\_CONSTRUCTION\_COST\_MODIFICATION\_LEVEL\_FACTOR | 1.05 | # The construction cost of a ship is multiplied by this^(total modification levels) |
| SHIP\_TEMPLATE\_DEFAULT\_MODIFICATION\_LEVEL | 2 | # Default modification level per slot used to calculate the default level cost for ship goods balancing |
| LOGISTICS\_CENTER\_SUPPLY\_PER\_LEVEL | 10 | # Spawn a new level of logistics center for each this much base supply consumption from formations using this state as a supply hub |
| SUPPLY\_SHIP\_TYPE | "ship\_type\_supply\_ship" # What ship type is code-side treated as the supply ship type. Changing this will very likely break things |
| SUPPLY\_SHIP\_MAINTENANCE\_COST\_PER\_SHIP | 1 | # Weekly maintenance cost per supply ship |
| SHIP\_CONSTRUCTION\_MAINTENANCE\_FRACTION | 0.0003 | # Fraction of a ship's total construction cost consumed weekly as construction point maintenance |
| SHIP\_CONSTRUCTION\_MAINTENANCE\_PENALTY\_THRESHOLD | 0.5 | # Fulfillment ratio at or below which the maintenance penalty reaches 100% |
| SHIP\_CONSTRUCTION\_MAINTENANCE\_MAX\_HP\_PENALTY\_FRACTION | 0.05 | # Max fraction of a ship's total HP lost per week at full maintenance penalty |
| SHIP\_CONSTRUCTION\_MAINTENANCE\_DAMAGE\_RATIO | 0.2 | # Fraction of ships randomly selected to receive maintenance damage each week (0-1) |
| SUPPLY\_SHIP\_CONSTRUCTION\_MAINTENANCE\_FRACTION | 0.0003 | # Fraction of supply ship construction cost consumed weekly as construction point maintenance |
| SUPPLY\_SHIP\_MAINTENANCE\_STOCKPILE\_REMOVAL\_FRACTION | 0.05 | # Max fraction of supply ships removed per week at full maintenance penalty |
| FLEET\_RESUPPLY\_SURPLUS | 0.25 | # How much above the maintenance rate (where delivered supply equals consumed supply) will a fleet get supplied when attempting to increase it's supply level |
| ARMY\_RESUPPLY\_SURPLUS | 0.25 | # How much above the maintenance rate (where delivered supply equals consumed supply) will an army get supplied when attempting to increase it's supply level |
| FLEET\_SUPPLY\_REPLENISH\_SHIP\_MULT | 1.1 | # How much more supply ships requested by fleets when under max supply stockpile |
| SHIP\_POWER\_PROJECTION\_HULL\_DAMAGE\_MULTIPLIER | 0.33 | # The multiplier applied to a ship's hull damage in calculating its power projection |
| SHIP\_POWER\_PROJECTION\_CREW\_DAMAGE\_MULTIPLIER | 0.33 | # The multiplier applied to a ship's crew damage in calculating its power projection |
| SHIP\_POWER\_PROJECTION\_ARMOR\_MULTIPLIER | 0.33 | # The multiplier applied to a ship's armor in calculating its power projection |
| SHIP\_POWER\_PROJECTION\_HIT\_POINTS\_MULTIPLIER | 0.1 | # The multiplier applied to a ship's max hit points in calculating its power projection |
| SHIP\_CREW\_STARTING\_VETERANCY\_EXPERIENCE | 0 | # The amount of experience crew for a ship starts with when recruited |
| SHIP\_MAX\_VETERANCY\_EXPERIENCE | 1000 | # Experience cap for a ship. Should be higher than the highest veterancy level experience threshold. |
| SHIP\_VETERANCY\_EXPERIENCE\_DECAY\_RATE | 0.01 | # Percentage of experience lost per week when not on a mission. |
| SHIP\_VETERANCY\_EXPERIENCE\_MIN\_DECAY | 1 | # Minimum amount of experience lost per week due to decay (if decay applies), regardless of current experience |
| SHIP\_VETERANCY\_BASE\_EXPERIENCE\_GAIN\_BATTLE\_VICTORY | 5 | # Base experience gain for a ship that was in a battle that was won by its side. |
| SHIP\_VETERANCY\_BASE\_EXPERIENCE\_GAIN\_BATTLE\_DEFEAT | 2 | # Base experience gain for a ship that was in a battle that was lost by its side. |
| SHIP\_VETERANCY\_BASE\_EXPERIENCE\_GAIN\_BATTLE\_SUNK\_ENEMY\_SHIP | 1 | # Base experience gain for a ship for each ship it has sunk in battle. |
| SHIP\_COMBAT\_POWER\_HULL\_DAMAGE\_MULTIPLIER | 0.75 | # The multiplier applied to a ship's hull damage in calculating its combat power |
| SHIP\_COMBAT\_POWER\_CREW\_DAMAGE\_MULTIPLIER | 0.25 | # The multiplier applied to a ship's crew damage in calculating its combat power |
| SHIP\_COMBAT\_POWER\_SPEED\_MULTIPLIER | 3.0 | # The multiplier applied to a ship's speed in calculating its combat power |
| COMBAT\_UNIT\_GROUP\_MARINES\_GROUP | "combat\_unit\_group\_marines" # Marines type |
| FLAGSHIP\_CHANGE\_COOLDOWN\_MONTHS | 60 | # After changing flagship, you have to wait this many months before changing it again |
| FLAGSHIP\_ON\_WON\_FAIR\_COMBAT\_POWER\_RATIO\_THRESHOLD | 0.5 | # The ratio between the combat power of the opposing side and the flagship's side needs to be at least this for on\_flagship\_battle\_won to trigger |
| NAVAL\_MISSION\_SUPPLY\_COST\_FACTOR\_SCALING | 0.1 | # Additional supply cost (percent, 0-1) incurred per sea region beyond the first in a naval mission |
| NAVAL\_MISSION\_BASE\_MAX\_SEA\_REGIONS | 2 | # Base max number of sea regions that can be assigned to a fleet mission (before modifiers) |
| NAVAL\_MISSION\_TYPE\_INTERCEPT | "naval\_mission\_type\_intercept" |
| NAVAL\_MISSION\_TYPE\_PROJECT\_POWER | "naval\_mission\_type\_project\_power" |
| FRIENDLY\_PORT\_MAX\_SUPPLY\_DISTANCE\_DISCOUNT | 0.5 | # Maximum supply distance discount (0-1) when a formation is near a friendly port |
| FRIENDLY\_PORT\_MAX\_DISTANCE | 2500 | # Travel network distance at which the friendly port discount reaches zero |
| AI\_FIND\_FLEET\_EXPECTED\_DISTANCE | 25000 | # Expected map distance for normalizing fleet-to-army distance scoring |
| DEFAULT\_ARMY\_COLOR | "army\_color\_6" |
| DEFAULT\_FLEET\_COLOR | "fleet\_color\_8" |

### Diplomacy
| Define | Default Value | Dev Comment |
| DEFAULT\_DIPLOMATIC\_PLAY | "dp\_default\_treaty\_article" |  |
| DEFAULT\_WAR\_GOAL\_IS\_HUMILIATION | yes | # If this is false, default war goal is instead money transfer |
| DEFAULT\_TRUCE\_MONTHS | 60 |  |
| PEACE\_DEAL\_DURATION\_IN\_DAYS | 30 |  |
| PEACE\_DEAL\_COOLDOWN\_IN\_DAYS | 120 |  |
| PACT\_REQUIRES\_APPROVAL\_MIN\_FORCED\_MONTHS | 12 | # Diplomatic pacts that require approval always have at least this cooldown period before they can be broken |
| OBLIGATION\_FORCED\_PACT\_MONTHS | 120 |  |
| SWAY\_FORCED\_PACT\_MONTHS | 120 |  |
| EXPEL\_DIPLOMATS\_MONTHS | 60 |  |
| OBLIGATION\_MONTHS | 120 |  |
| RECENTLY\_CONQUERED\_DURATION\_MONTHS | 120 |  |
| RECENTLY\_LIBERATED\_DURATION\_MONTHS | 120 |  |
| DIPLOMATIC\_DEMAND\_PENDING\_APPROVAL\_DAYS | 14 | # Number of days before a demand is auto-declined and a diplomatic play starts |
| DIPLOMATIC\_DEMAND\_TIMEOUT\_DAYS | 14 | # Number of days before an accepted or rejected demand is deleted |
| DIPLOMATIC\_ACTION\_COOLDOWN\_DAYS | 0 | # Number of days you must wait between diplomatic actions/proposals |
| DIPLOMATIC\_ACTION\_PENDING\_APPROVAL\_DAYS | 30 | # Number of days before a pending action is auto-declined |
| TREATY\_PROPOSAL\_PENDING\_APPROVAL\_DAYS | 30 | # Number of days before a pending treaty proposal is auto-declined |
| DIPLOMATIC\_PACT\_COST\_DEFAULT | 0 | # The default maintenance in Influence for a pact |
| DIPLOMATIC\_PACT\_COST\_MULT\_FROM\_INFAMOUS | 0.25 | # Maintenance cost of a pact is increased by this when at Infamous level of infamy |
| DIPLOMATIC\_PACT\_COST\_MULT\_FROM\_NOTORIOUS | 0.50 | # Maintenance cost of a pact is increased by this when at Notorious level of infamy |
| DIPLOMATIC\_PACT\_COST\_MULT\_FROM\_PARIAH | 1.00 | # Maintenance cost of a pact is increased by this when at Pariah level of infamy |
| DIPLOMATIC\_PACT\_COST\_LOBBY\_CLOUT\_MULT | 0.01 | # Each point of clout from pro/anti-country lobbies reduces or increases the influence cost multiplier of maintaining pacts with them by this amount, depending on whether the pact matches their goals |
| DIPLOMATIC\_PACT\_COST\_LOBBY\_CLOUT\_MAX | 0.5 | # Cost multiplier impact of pro/anti-country lobbies cannot be greater than this |
| TREATY\_ARTICLE\_COST\_LOBBY\_CLOUT\_MULT | 0.01 | # Each point of clout from pro/anti-country lobbies reduces or increases the influence cost multiplier of maintaining treaty articles with them by this amount |
| TREATY\_ARTICLE\_COST\_LOBBY\_CLOUT\_MAX | 0.5 | # Cost multiplier impact of pro/anti-country lobbies cannot be greater than this |
| RIVALRY\_BASE\_SCALING | 0.25 | # Rivalry always gives at least this amount of influence scaling |
| RIVALRY\_SCALING\_PER\_INTEREST\_LEVEL | 0.25 | # Rivalry gives this amount of influence scaling for each overlapping interest level |
| RIVALRY\_MAX\_SCALING | 2.0 | # Rivalry influence scaling cannot exceed this number |
| RIVALRY\_LOWER\_RANK\_SCALING\_MULT | 0.5 |  |
| RIVALRY\_SCALING\_LOBBY\_CLOUT\_MULT | 0.01 | # Each point of clout from pro/anti-country lobbies reduces or increases the influence gain from rivalry by this amount (anti increases, pro decreases) |
| RIVALRY\_SCALING\_LOBBY\_CLOUT\_MAX | 0.5 | # Rivalry influence multiplier impact of pro/anti-country lobbies cannot be greater than this |
| MIN\_RELATIONS | -100 |  |
| MAX\_RELATIONS | 100 |  |
| START\_RELATIONS | 0 |  |
| RELATIONS\_THRESHOLD\_FRIENDLY | 80 |  |
| RELATIONS\_THRESHOLD\_AMICABLE | 50 |  |
| RELATIONS\_THRESHOLD\_CORDIAL | 20 |  |
| RELATIONS\_THRESHOLD\_POOR | -20 |  |
| RELATIONS\_THRESHOLD\_COLD | -50 |  |
| RELATIONS\_THRESHOLD\_HOSTILE | -80 |  |
| REQUIRED\_IMPROVE\_RELATIONS\_PROGRESS | 100 | # How much change relations progress is needed to increase relations by 1 point |
| REQUIRED\_DAMAGE\_RELATIONS\_PROGRESS | -100 | # How much change relations progress is needed to decrease relations by 1 point |
| INITIAL\_LIBERTY\_DESIRE | 50 | # Liberty Desire value which the Diplomatic Pact gets initialized to. |
| WEEKLY\_LIBERTY\_DESIRE\_FROM\_SUPPORT\_INDEPENDENCE\_TOTAL\_MAX | 0.5 | # Maximum weekly increase in liberty desire from all Support Independence targeting the country |
| MIN\_INFAMY | 0 | # Infamy can't be lower than this |
| MAX\_INFAMY | 1000 | # Infamy can't be higher than this |
| START\_INFAMY | 0 | # This is the default amount of infamy countries start with |
| INFAMY\_THRESHOLD\_INFAMOUS | 25 | # Above this, countries are considered infamous and get related penalties |
| INFAMY\_THRESHOLD\_NOTORIOUS | 50 | # Above this, countries are considered notorious and get related penalties |
| INFAMY\_THRESHOLD\_PARIAH | 100 | # Above this, countries are considered pariah and get related penalties |
| BASE\_YEARLY\_INFAMY\_DECAY\_RATE | 5.0 | # Decay rate of infamy per year |
|  |  | # Tension is used instead of relations by colonizable countries |
| MIN\_TENSION | 0 |  |
| MAX\_TENSION | 100 |  |
| START\_TENSION | 0 |  |
| TENSION\_THRESHOLD\_UNEASY | 25 |  |
| TENSION\_THRESHOLD\_TENSE | 50 |  |
| TENSION\_THRESHOLD\_VOLATILE | 75 |  |
| TENSION\_DECAY\_RATE | 5 | # Per year |
| TENSION\_INCREASE\_MIN | 2.5 | # Tension increases by a min of this when a province is colonized |
| TENSION\_INCREASE\_MAX | 20.00 | # Tension increases by a max of this when a province is colonized |
| TENSION\_NUM\_PROVINCE\_SCALING\_BASE | 10 | # Below this amount of provinces a decentralized country gets additional tension when their provinces are colonized |
| TENSION\_NUM\_PROVINCE\_SCALING\_RATE | 2.0 | # Max multiplier increase in tension per province taken from having only a few provinces |
| TENSION\_INCREASE\_RATE\_ADJACENT | 0.5 | # Multiplied to tension increase when it is neighboring countries' provinces that are colonized |
| TENSION\_UPRISING\_CHANCE | 0.02 | # Chance of war breaking out instead of the next province being colonized (base when tension is at least TENSION\_THRESHOLD\_VOLATILE) |
| SWAY\_OFFER\_TIMEOUT\_DAYS | 14 |  |
| SWAY\_OFFER\_REJECTED\_COOLDOWN\_DAYS | 7 | # Must wait this many days before trying to sway a country that rejected your previous sway |
| SWAY\_OFFER\_CALL\_IN\_OBLIGATION\_MANEUVERS\_COST | 10 |  |
| SWAY\_OFFER\_OWE\_OBLIGATION\_MANEUVERS\_COST | 10 |  |
| SWAY\_OFFER\_CALL\_ALLY\_MANEUVERS\_COST | 20 |  |
| SWAY\_OFFER\_TRANSFER\_STATE\_MANEUVERS\_COST | 10 |  |
| SWAY\_OFFER\_TRANSFER\_SUBJECT\_MANEUVERS\_COST | 10 |  |
| SWAY\_OFFER\_BECOME\_SUBJECT\_MANEUVERS\_COST | 5 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_JOIN\_POWER\_BLOC | 10 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_LEAVE\_POWER\_BLOC | 10 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_COLONIZATION\_RIGHTS | 10 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_FORCE\_NATIONALIZATION | 10 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_HUMILIATION | 20 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_UNIFICATION\_LEADERSHIP | 30 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_OPEN\_MARKET | 20 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_REGIME\_CHANGE | 8 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_ANNEX\_COUNTRY | 10 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_LIBERATE\_COUNTRY | 30 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_MAKE\_PROTECTORATE | 8 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_REDUCE\_AUTONOMY | 5 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_INCREASE\_AUTONOMY | 10 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_MAKE\_TRIBUTARY | 8 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_MAKE\_DOMINION | 8 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_CONQUER\_STATE | 10 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_RETURN\_STATE | 10 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_REVOKE\_CLAIM | 5 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_REVOKE\_ALL\_CLAIMS | 0 | # Can't be added, only for special plays |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_CONTAIN\_THREAT | 1000 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_TRANSFER\_SUBJECT | 8 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_LIBERATE\_SUBJECT | 20 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_UNIFICATION | 100 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_INDEPENDENCE | 20 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_SECESSION | 100 |  |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_POPULATION\_SCALING\_FACTOR | 10000 | # The amount of population by which the factor below is multiplied |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_POPULATION\_SCALING\_MULTIPLIER | 0.03 | # For each SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_POPULATION\_SCALING\_FACTOR population in a country/state, multiply maneuvers cost by this |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_POPULATION\_SCALING\_MULTIPLIER\_MAX\_PER\_STATE | 2.5 | # Maneuvers population multiplier can't be higher than this for each state affected |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_POPULATION\_SCALING\_MULTIPLIER\_MAX\_TOTAL | 5 | # Maneuvers population multiplier can't be higher than this, regardless of number of states affected |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_HOMELAND\_FACTOR | -0.25 | # Maneuvers cost is adjusted by this if the states taken/puppeted etc are Homelands of the aggressor |
| SWAY\_OFFER\_WARGOAL\_MANEUVERS\_COST\_UNINCORPORATED\_FACTOR | -0.5 | # Maneuvers cost is adjusted by this if the states taken/puppeted etc are unincorporated |
| MAKE\_WARGOAL\_PRIMARY\_DEMAND\_MANEUVERS\_COST | 0.5 | # Fraction of the wargoal's base maneuver cost that it costs to turn it into a primary demand |
| MAKE\_WARGOAL\_PRIMARY\_DEMAND\_INFAMY\_AMOUNT | 0.5 | # Fraction of the wargoal's base infamy that is accured when you turn it into a primary demand |
| ALLY\_WARGOAL\_MAX\_MANEUVERS\_COST | 25 | # When an ally adds a 'free' wargoal in a play, it cannot have a maneuvers cost higher than this |
| PERSONAL\_UNION\_ACTION\_NAME | "personal\_union" |  |
| INCREASE\_AUTONOMY\_OF\_SELF\_NAME | "da\_increase\_autonomy\_of\_self" |  |
| INCREASE\_AUTONOMY\_OF\_SUBJECT\_ACTION\_NAME | "da\_increase\_autonomy\_of\_subject" |  |
| DECREASE\_AUTONOMY\_OF\_SUBJECT\_ACTION\_NAME | "da\_decrease\_autonomy" |  |
| WAR\_GOAL\_TRANSFER\_SUBJECT\_TYPE | "transfer\_subject" |  |
| WAR\_GOAL\_UNIFICATION\_TYPE | "unification" |  |
| WAR\_GOAL\_CONTAIN\_THREAT\_TYPE | "contain\_threat" |  |
| WAR\_GOAL\_INDEPENDENCE\_TYPE | "independence" |  |
| WAR\_GOAL\_HUMILIATION\_TYPE | "humiliation" |  |
| WAR\_GOAL\_ENFORCE\_TREATY\_ARTICLE\_TYPE | "enforce\_treaty\_article" |  |
| WAR\_GOAL\_CONQUER\_STATE\_TYPE | "conquer\_state" |  |
| WAR\_GOAL\_REVOKE\_ALL\_CLAIMS\_TYPE | "revoke\_all\_claims" |  |
| WAR\_GOAL\_RETURN\_STATE\_TYPE | "return\_state" |  |
| WAR\_GOAL\_OPEN\_MARKET\_TYPE | "open\_market" |  |
| WAR\_GOAL\_FOREIGN\_INVESTMENT\_RIGHTS\_TYPE | "foreign\_investment\_rights" |  |
| WAR\_GOAL\_JOIN\_POWER\_BLOC\_TYPE | "join\_power\_bloc" |  |
| WAR\_GOAL\_REPARATIONS\_MONTHS | 60 | # [>= 0] |
| WAR\_GOAL\_COLONIZATION\_RIGHTS\_PACT\_TYPE | "colonization\_rights" |  |
| WAR\_GOAL\_COLONIZATION\_RIGHTS\_MONTHS | 60 | # [>= 0] |
| WAR\_GOAL\_OPEN\_MARKET\_MONTHS | 60 | # [>= 0] |
| WAR\_GOAL\_HUMILIATION\_PACT\_TYPE | "humiliation" |  |
| WAR\_GOAL\_HUMILIATION\_MONTHS | 60 | # [>= 0] |
| WAR\_GOAL\_CONTAIN\_THREAT\_MONTHS | 60 | # [>= 0] |
| WAR\_GOAL\_MAKE\_PROTECTORATE\_SUBJECT\_TYPE | "subject\_type\_protectorate" |  |
| WAR\_GOAL\_MAKE\_TRIBUTARY\_SUBJECT\_TYPE | "subject\_type\_tributary" |  |
| WAR\_GOAL\_MAKE\_DOMINION\_SUBJECT\_TYPE | "subject\_type\_dominion" |  |
| WAR\_GOAL\_TREATY\_PORT\_BUILDING\_LEVEL | 1 |  |
| WAR\_GOAL\_LIBERATE\_COUNTRY\_LIBERATOR\_START\_RELATIONS | 50 |  |
| WAR\_GOAL\_LIBERATE\_COUNTRY\_OPPRESSOR\_START\_RELATIONS | -50 |  |
| WAR\_GOAL\_CONTAIN\_THREAT\_YEARS\_SINCE\_CONQUEST | 10 |  |
| WAR\_GOAL\_REGIME\_CHANGE\_MONTHS | 60 | # Government in country with forced regime change is locked in for this number of months [>= 0] |
| WAR\_GOAL\_REGIME\_CHANGE\_MAX\_IDEOLOGICAL\_OPINION | -5 | # If ideological opinion is above this, regime change can't be used |
| WAR\_GOAL\_REGIME\_CHANGE\_MIN\_LAW\_PROGRESSIVENESS\_DIFFERENCE | 50 | # If the difference between the target wargoal holder's laws in a law group are not at least this, don't change it as part of regime change |
| WAR\_GOAL\_INCREASE\_AUTONOMY\_MIN\_LIBERTY\_DESIRE | 75 | # A subject must have at least this much LD to use the increase autonomy wargoal |
| WAR\_GOAL\_INDEPENDENCE\_MIN\_LIBERTY\_DESIRE | 90 | # A subject must have at least this much LD to use the independence wargoal |
| WAR\_GOAL\_INFAMY\_POPULATION\_SCALING\_FACTOR | 10000 | # The amount of population by which the factor below is multiplied |
| WAR\_GOAL\_INFAMY\_POPULATION\_SCALING\_MULTIPLIER | 0.03 | # For each WAR\_GOAL\_INFAMY\_POPULATION\_SCALING\_FACTOR population in a country/state, multiply infamy by this |
| WAR\_GOAL\_INFAMY\_POPULATION\_SCALING\_MULTIPLIER\_MAX\_PER\_STATE | 5 | # Infamy population multiplier can't be higher than this for each state affected |
| WAR\_GOAL\_INFAMY\_POPULATION\_SCALING\_MULTIPLIER\_MAX\_TOTAL | 50 | # Infamy population multiplier can't be higher than this, regardless of number of states affected |
| WAR\_GOAL\_INFAMY\_HOMELAND\_FACTOR | -0.25 | # Infamy is adjusted by this if the states taken/puppeted etc are Homelands of the aggressor |
| WAR\_GOAL\_INFAMY\_UNINCORPORATED\_FACTOR | -0.5 | # Infamy is adjusted by this if the states taken/puppeted etc are unincorporated |
| WAR\_GOAL\_INFAMY\_REBELLING\_SUBJECT\_MULT | 0.25 | # Infamy is multiplied by this for wargoals targeting a rebellious subject |
| WAR\_GOAL\_INFAMY\_LOW\_LIBERTY\_DESIRE\_SUBJECT\_MULT | 0.25 | # Infamy is multiplied by this for wargoals targeting a subject whose LD is below WAR\_GOAL\_INFAMY\_LOW\_LIBERTY\_DESIRE\_THRESHOLD |
| WAR\_GOAL\_INFAMY\_LOW\_LIBERTY\_DESIRE\_THRESHOLD | 25 | # Threshold for WAR\_GOAL\_INFAMY\_LOW\_LIBERTY\_DESIRE\_SUBJECT\_MULT |
| WAR\_GOAL\_INFAMY\_RELATIONS\_TARGET\_IMPACT | -1 | # Each point of infamy generated by an incident also has this impact on relations with the target |
| WAR\_GOAL\_INFAMY\_RELATIONS\_INTEREST\_IMPACT | -0.5 | # Each point of infamy generated by an incident also has this impact on relations with countries that have an interest in the target |
| WAR\_GOAL\_INFAMY\_CONQUER\_STATE | 5.0 |  |
| WAR\_GOAL\_INFAMY\_RETURN\_STATE | 2.0 |  |
| WAR\_GOAL\_INFAMY\_MAKE\_PROTECTORATE | 2.0 |  |
| WAR\_GOAL\_INFAMY\_MAKE\_TRIBUTARY | 2.0 |  |
| WAR\_GOAL\_INFAMY\_MAKE\_DOMINION | 2.0 |  |
| WAR\_GOAL\_INFAMY\_REDUCE\_AUTONOMY | 2.0 |  |
| WAR\_GOAL\_INFAMY\_TRANSFER\_SUBJECT | 2.0 |  |
| WAR\_GOAL\_INFAMY\_ANNEX\_COUNTRY | 5.0 |  |
| WAR\_GOAL\_INFAMY\_REGIME\_CHANGE | 0.5 |  |
| WAR\_GOAL\_INFAMY\_FORCE\_NATIONALIZATION | 5.0 |  |
| WAR\_GOAL\_INFAMY\_DIPLO\_PLAY\_BACK\_DOWN\_REFUND | -0.75 | # Refund of infamy for war goals that are dropped due to one side backing down in a diplo play (applied to initiator/target) |
| WAR\_GOAL\_INFAMY\_DIPLO\_PLAY\_BACKER\_REFUND | -1.00 | # Refund of infamy for war goals that are dropped for backers in a diplo play (due to play not escalating to war or backer switching sides) |
| WAR\_GOAL\_INFAMY\_PEACE\_REFUND | -0.5 | # Refund of infamy for war goals that are dropped due to a country capitulating or negotating peace without enforcing their wargoal |
| WAR\_GOAL\_INFAMY\_REDUCTION\_FOR\_TARGET | -0.5 | # This much of a war goal's infamy value is removed from the target when target has it enforced on them |
| WAR\_OUTCOME\_MIN\_WARGOAL\_IMPACT | 10 | # Minimum impact value for a wargoal when calculating war outcomes |
| WAR\_OUTCOME\_VICTORY\_RATIO | 2.0 | # Below this ratio of enforced wargoal impact, a victory is considered to be limited. If ratio is above this but both sides still enforced wargoals, it's a victory. If one side enforced all its wargoals and the other side enforced none, it's a total victory. |
| WAR\_OUTCOME\_VICTORY\_MIN\_ENFORCEMENT\_RATIO | 0.5 | # A side must enforce at least this fraction of their total wargoal impact to qualify for a victory, otherwise it is a limited victory |
| DIPLOMATIC\_PLAY\_ABANDON\_SUPPORT\_RELATIONS\_IMPACT | 50 |  |
| DIPLOMATIC\_PLAY\_ESCALATION\_DAILY | 1 |  |
| DIPLOMATIC\_PLAY\_ESCALATION\_PAUSE\_FROM\_ACTION | 5 | # Number of days that escalation pauses when either side takes an action |
| DIPLOMATIC\_PLAY\_ESCALATION\_PAUSE\_MAX | 20 | # Escalation pause can't be longer than this no matter how many actions are taken at once |
| DIPLOMATIC\_PLAY\_OPENING\_PHASE\_END | 21 | # Before this, defender needs to set their wargoal and you can't join/sway |
| DIPLOMATIC\_PLAY\_CLOSING\_PHASE\_START | 80 | # After this, it isn't possible to join/sway further countries |
| DIPLOMATIC\_PLAY\_ESCALATION\_WAR\_BREAKOUT | 100 |  |
| COLONY\_PROVINCE\_BASE\_SCORE | 10 |  |
| COLONY\_PROVINCE\_COASTAL\_SCORE | 60 | # Replaces COLONY\_BASE\_SCORE for provinces with a coastline |
| COLONY\_PROVINCE\_ADJACENCY\_SCORE | 25 | # How much will colonies prioritize adjacency to existing provinces when growing the colony |
| COLONY\_PROVINCE\_NO\_ADJACENCY\_MULT | 0.1 | # Multiply by this if no adjacencies at all |
| COLONY\_PROVINCE\_RANDOM\_FACTOR | 1.5 | # The higher this is, the more random colonization province picking will be |
| BASE\_WAR\_SUPPORT | 100 |  |
| MAX\_WAR\_SUPPORT | 100 |  |
| MIN\_WAR\_SUPPORT | -100 |  |
| ``` # Definitions for all the diplomatic catalysts that are called from code instead of script # If these are changed, they also need to be changed in the database and vice versa ``` | | |
| DIPLOMATIC\_CATALYST\_TYPE\_HISTORICAL\_RELATIONS | "catalyst\_historical\_relationship" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_BECAME\_RELEVANT | "catalyst\_became\_relevant" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_BECAME\_IRRELEVANT | "catalyst\_became\_irrelevant" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_GAINED\_LAND\_BORDER | "catalyst\_gained\_land\_border" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_LOST\_LAND\_BORDER | "catalyst\_lost\_land\_border" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_MARKET\_OPENED | "catalyst\_market\_opened" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_RELATIONS\_INCREASED | "catalyst\_relations\_level\_increased" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_RELATIONS\_DECREASED | "catalyst\_relations\_level\_decreased" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_DIPLOMATIC\_DEMAND | "catalyst\_diplomatic\_demand" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_DIPLOMATIC\_DEMAND\_TARGET | "catalyst\_diplomatic\_demand\_target" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_DIPLOMATIC\_PLAY | "catalyst\_diplomatic\_play" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_DIPLOMATIC\_PLAY\_TARGET | "catalyst\_diplomatic\_play\_target" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_AUTONOMY\_INCREASED | "catalyst\_autonomy\_level\_increased" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_AUTONOMY\_DECREASED | "catalyst\_autonomy\_level\_decreased" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_GAINED\_INDEPENDENCE | "catalyst\_gained\_independence" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_BECAME\_SUBJECT | "catalyst\_became\_subject" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_DIPLOMATIC\_INCIDENT | "catalyst\_diplomatic\_incident" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_PACT\_FORMED | "catalyst\_pact\_formed" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_PACT\_BROKEN | "catalyst\_pact\_broken" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_ALLIANCE\_FORMED | "catalyst\_alliance\_formed" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_ALLIANCE\_BROKEN | "catalyst\_alliance\_broken" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_ALLIANCE\_FORMED\_WITH\_RIVAL | "catalyst\_alliance\_with\_rival" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_RIVAL\_OF\_RIVAL | "catalyst\_rival\_of\_rival" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_INCREASED\_RELATIONS\_WITH\_RIVAL | "catalyst\_increased\_relations\_with\_rival" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_DECREASED\_RELATIONS\_WITH\_RIVAL | "catalyst\_decreased\_relations\_with\_rival" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_OPPOSED\_IN\_PLAY | "catalyst\_opposed\_in\_play" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_ALLIES\_IN\_PLAY | "catalyst\_allies\_in\_play" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_WARGOAL\_ENFORCED | "catalyst\_wargoal\_enforced" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_STATE\_CONQUERED | "catalyst\_state\_conquered" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_DIPLOMATIC\_STRATEGY\_CHANGED | "catalyst\_diplomatic\_strategy\_changed" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_DECLARED\_BANKRUPTCY | "catalyst\_declared\_bankruptcy" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_IDEOLOGICAL\_DRIFT | "catalyst\_ideological\_drift" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_IDEOLOGICAL\_ALIGNMENT | "catalyst\_ideological\_alignment" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_JOINED\_SAME\_BLOC | "catalyst\_joined\_same\_bloc" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_JOINED\_DIFFERENT\_BLOC | "catalyst\_joined\_different\_bloc" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_LEFT\_POWER\_BLOC | "catalyst\_left\_power\_bloc" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_KICKED\_OUT\_OF\_BLOC | "catalyst\_kicked\_out\_of\_bloc" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_JOURNAL\_ENTRY | "catalyst\_journal\_entry" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_UNIFICATION\_SUPPORT\_ADDED | "catalyst\_unification\_support\_added" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_UNIFICATION\_SUPPORT\_REMOVED | "catalyst\_unification\_support\_removed" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_FRIENDLY\_LOBBY\_IN\_GOVERNMENT | "catalyst\_friendly\_lobby\_in\_government" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_HOSTILE\_LOBBY\_IN\_GOVERNMENT | "catalyst\_hostile\_lobby\_in\_government" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_NATIONALIZED\_BUILDING | "catalyst\_nationalized\_building" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_OVERTAKEN\_IN\_PRESTIGE\_RANK | "catalyst\_overtaken\_in\_prestige\_rank" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_REVOLUTION\_SUCCESSFUL | "catalyst\_revolution\_successful" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_BECAME\_RECOGNIZED | "catalyst\_became\_recognized" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_STRAIT\_TOLL\_HIGH = "catalyst\_strait\_toll\_high" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_STRAIT\_TOLL\_REDUCED = "catalyst\_strait\_toll\_reduced" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_STRAIT\_NO\_MILITARY = "catalyst\_strait\_no\_military" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_STRAIT\_CLOSED = "catalyst\_strait\_closed" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_STRAIT\_OPENED = "catalyst\_strait\_opened" |  |
| DIPLOMATIC\_CATALYST\_TYPE\_STRAIT\_PARTIALLY\_OPENED | "catalyst\_strait\_partially\_opened" |  |
| DIPLOMATIC\_CATALYST\_MIN\_SCORE\_POSITION\_FOR\_OVERTAKE | 10 | # If country's prestige/rank score position isn't at least this, don't apply any 'overtaken in rank' catalysts to it |
| DIPLOMATIC\_CATALYST\_MIN\_CHANGE\_FOR\_IDEOLOGICAL\_DRIFT | -10 | # Ideological score change between previous and new government must be at least this high to create an ideological drift catalyst |
| DIPLOMATIC\_CATALYST\_MIN\_CHANGE\_FOR\_IDEOLOGICAL\_ALIGNMENT | 10 | # Ideological score change between previous and new government must be at least this high to create an ideological alignment catalyst |
| TOP\_PRESTIGE\_RANK\_BONUS\_THRESHOLD | 10 | # Prestige rank threshold at which the prestige\_ranking\_top static modifier starts being applied |
| TOP\_PRESTIGE\_RANK\_BONUS\_SCALE | 1.0 | # At prestige rank 1, the prestige\_ranking\_top modifier is applied with ( 1 + this multiplier ), scaling down to 1x at threshold |
| COUNTRY\_TIER\_CITY\_STATE\_PRESTIGE | 0 |  |
| COUNTRY\_TIER\_PRINCIPALITY\_PRESTIGE | 5 |  |
| COUNTRY\_TIER\_GRAND\_PRINCIPALITY\_PRESTIGE | 10 |  |
| COUNTRY\_TIER\_KINGDOM\_PRESTIGE | 15 |  |
| COUNTRY\_TIER\_EMPIRE\_PRESTIGE | 25 |  |
| COUNTRY\_TIER\_HEGEMONY\_PRESTIGE | 50 |  |
| PRESTIGE\_FROM\_COUNTRY\_GDP\_DIVISOR | 1000000 |  |
| PRESTIGE\_FROM\_COUNTRY\_GDP | 3 | # Per PRESTIGE\_FROM\_COUNTRY\_GDP\_DIVISOR GDP |
| PRESTIGE\_FROM\_SUBJECT\_GDP | 1.5 | # Per PRESTIGE\_FROM\_COUNTRY\_GDP\_DIVISOR GDP in subjects |
| PRESTIGE\_FROM\_ARMY\_POWER\_PROJECTION | 0.03 | # Per point of power projection from army combat power |
| PRESTIGE\_FROM\_NAVY\_POWER\_PROJECTION | 0.006 | # Per point of power projection from navy combat power |
| PRESTIGE\_FROM\_SUBJECT\_ARMY\_POWER\_PROJECTION | 0.0005 | # Per point of power projection from army combat power in subjects |
| PRESTIGE\_FROM\_SUBJECT\_NAVY\_POWER\_PROJECTION | 0.01 | # Per point of power projection from navy combat power in subjects |
| PRESTIGE\_FROM\_PRESTIGE\_GOODS\_PRODUCTION | 3 | # Multiplier on usual prestige from goods leaderboards |
| PRESTIGE\_MIN\_NUM\_COUNTRIES | 100 | # If there's less countries using prestige than this in the game, we add some filler countries to adjust average prestige levels |
| FILLER\_COUNTRY\_PRESTIGE | 15 |  |
| DAYS\_TO\_LOSE\_POWER\_RANK | 365 |  |
| POWER\_RANK\_LOSS\_THRESHOLD | 0.9 |  |
| ARMY\_POWER\_PROJECTION\_MODIFIER\_MAX\_SCALING | 1000 | # Above this amount of army power projection, the country\_army\_power\_projection static modifier provides no further benefit |
| NAVY\_POWER\_PROJECTION\_MODIFIER\_MAX\_SCALING | 1000 | # Above this amount of army power projection, the country\_navy\_power\_projection static modifier provides no further benefit |
| DEFAULT\_STATES\_REQUIRED\_TO\_RELEASE\_COUNTRY | 0 | # Applied if nothing is specified in country\_creation |
| DEFAULT\_STATES\_REQUIRED\_TO\_FORM\_COUNTRY | 0.75 | # Applied if nothing is specified in country\_formation |
| RELEASE\_COUNTRY\_AS\_SUBJECT\_RELATIONS\_BOOST | 30 |  |
| RELEASE\_COUNTRY\_AS\_INDEPENDENT\_RELATIONS\_BOOST | 50 |  |
| INTEREST\_NUM\_DAYS\_CHANGE | 30 | INTEREST\_MAX\_INVOLVEMENT || 10000 || # Max involvement score for the interest tiers |
| INTEREST\_GROWTH\_RATIO | 0.02 | # Each week, an interest's current involvement value grows by this proportion of the difference between its current involvement and target involvement |
| INTEREST\_MIN\_GROWTH | 10 | # Each week, an interest's current involvement value grows by at least this much |
| INTEREST\_DECAY\_SPEED | 20 | # Each week, an interest's current involvement value decays by this amount |
| INTEREST\_CAPITAL\_TARGET\_INVOLVEMENT | 2500 | # Target involvement score for having your capital in a strategic region |
| INTEREST\_CAPITAL\_NEIGHBOR\_TARGET\_INVOLVEMENT | 1500 | # Target involvement score for having your capital in a neighboring strategic region |
| INTEREST\_STATE\_OR\_CLAIM\_TARGET\_INVOLVEMENT | 7500 | # Target involvement score for state or claim locality |
| INTEREST\_STATE\_OR\_CLAIM\_MIN\_TARGET\_INVOLVEMENT | 1500 | # Minimum target involvement guaranteed when having any ownership or claims in a region |
| INTEREST\_CLAIM\_LOCALITY\_WEIGHT | 0.20 | # Each claim contributes this much locality weight (equivalent to owning this fraction of the whole state region) |
| INTEREST\_GDP\_TARGET\_INVOLVEMENT | 2500 | # Target involvement score multiplier for GDP share in a region |
| INTEREST\_ARMY\_TARGET\_INVOLVEMENT | 0.33 | # How much of army offense and defense is converted into target involvement for a present country |
| INTEREST\_NAVY\_TARGET\_INVOLVEMENT | 0.33 | # How much of navy power projection is converted into target involvement for a present country |
| INTEREST\_NAVY\_MISSION\_MULTI\_REGION\_BONUS | 0.75 | # Bonus to fleet involvement generation for each strategic region covered by a naval mission |
| INTEREST\_MIN\_INVOLVEMENT\_RATIO | 0.1 | # Minimum ratio of the article and pacts max involvement per article type or diplomatic pact |
| REGION\_LOCALITY\_SHARE\_THRESHOLD | 0.25 | # If you have at least this share of a region's locality, you get the local interest in the region |
| REGION\_LOCALITY\_COUNTRY\_INCORPORATED\_SHARE\_THRESHOLD | 0.25 # If at least this share of your total incorporated states are in a region, you get the local interest in the region |
| INTEREST\_TIER\_MIN\_RELEVANT\_RANK | 2 | # Min rank of an interest tier to be considered relevant |
| INTEREST\_TIER\_MIN\_VIOLATE\_SOVEREIGNTY\_RANK | 2 | # Min interest tier rank for a country to be an "interested party" for Violate Sovereignty (receive event to join defender). Use 2 for engaged or 3 for influential; |
| INTEREST\_ARMY\_INVOLVEMENT\_CAP | 5000 | # Max involvement from army strength |
| INTEREST\_NAVY\_INVOLVEMENT\_CAP | 5000 | # Max involvement from navy strength |
| INTEREST\_TREATY\_PACT\_INVOLVEMENT\_CAP | 5000 | # Max involvement from treaties and pacts |
| INTEREST\_POWER\_BLOC\_MEMBER\_TARGET\_INVOLVEMENT | 2500 | # Involvement generated by each non-subject power bloc member for the leader |
| INTEREST\_TIER\_REDUCTION\_GRACE\_PERIOD\_DAYS | 30 | # When a country increases its interest tier, this many days must pass before the tier can be reduced |
| STRAIT\_MIN\_INTEREST\_TIER\_FOR\_CATALYST | 1 | # Minimum interest tier required for a country to get a catalyst from strait closing to military access |
| REGION\_LOCALITY\_STATES\_WEIGHT | 1 | # Weight of the proportion of states you own in a region when calculating region locality |
| REGION\_LOCALITY\_POPULATION\_WEIGHT | 1.25 | # Weight of the proportion of population you own in a region when calculating region locality |
| RELATION\_PENALTY\_OVERLORD\_KICK\_BACKER\_SUBJECT | -30 | # When an overlord joins a diplomatic play they will force any subjects of theirs to become neutral if they are supporting the other side, this is a penalty to relations between the subject and overlord when that happens |
| ECONOMIC\_DEPENDENCE\_MIN | 0 |  |
| ECONOMIC\_DEPENDENCE\_MAX | 5 |  |
| ECONOMIC\_DEPENDENCE\_GDP\_RATIO\_BY\_OTHER\_FACTOR | 5 | # Ex. if you own 15% of the other country's GDP, that works out to +0.75 |
| ECONOMIC\_DEPENDENCE\_GDP\_RATIO\_BY\_OTHER\_MIN | 0 |  |
| ECONOMIC\_DEPENDENCE\_GDP\_RATIO\_BY\_OTHER\_MAX | 5 |  |
| ECONOMIC\_DEPENDENCE\_OTHER\_GDP\_RATIO\_OWNED\_FACTOR | 20 | #More embarrassing if your subjects own your stuff than the other way round. |
| ECONOMIC\_DEPENDENCE\_OTHER\_GDP\_RATIO\_OWNED\_MIN | -5 | #This value is negative |
| ECONOMIC\_DEPENDENCE\_OTHER\_GDP\_RATIO\_OWNED\_MAX | 0 |  |
| ECONOMIC\_DEPENDENCE\_GDP\_PERCENTAGE\_FACTOR | 1 |  |
| ECONOMIC\_DEPENDENCE\_GDP\_PERCENTAGE\_MIN | 0 |  |
| ECONOMIC\_DEPENDENCE\_GDP\_PERCENTAGE\_MAX | 1 |  |
| ECONOMIC\_DEPENDENCE\_POP\_GOODS\_DEPENDENCE\_ON\_OTHER\_FACTOR | 3 | # The total % of the £ value goods supplied by the other country compared to its GDP is multiplied by this (i.e. every multiple of 25% yields +0.75 ED) |
| ECONOMIC\_DEPENDENCE\_POP\_GOODS\_DEPENDENCE\_ON\_OTHER\_MIN | 0 | # At best, a country's pop goods dependence on another can reach 0 |
| ECONOMIC\_DEPENDENCE\_POP\_GOODS\_DEPENDENCE\_ON\_OTHER\_MAX | 2 | # At worst, a country's pop goods dependence on another can reach +2 |
| ECONOMIC\_DEPENDENCE\_OTHER\_POP\_GOODS\_DEPENDENCE\_FACTOR | 3 | # The total % of the £ value goods supplied by another country by this compared to their GDP is multiplied by this |
| ECONOMIC\_DEPENDENCE\_OTHER\_POP\_GOODS\_DEPENDENCE\_MIN | -2 | # At best, another country's pop goods dependence on this can yield -2 ED |
| ECONOMIC\_DEPENDENCE\_OTHER\_POP\_GOODS\_DEPENDENCE\_MAX | 0 | # At worst, another country's pop goods dependence on this can yield 0 ED |
| ECONOMIC\_DEPENDENCE\_TRADE\_ROUTE\_DEPENDENCE\_FACTOR | 3 | # This is the factor applied when value of trade volume between countries represents 100% of GDP |
| ECONOMIC\_DEPENDENCE\_TRADE\_ROUTE\_DEPENDENCE\_MIN | 0 |  |
| ECONOMIC\_DEPENDENCE\_TRADE\_ROUTE\_DEPENDENCE\_MAX | 3 |  |
| RELATIONS\_CHANGE\_INVESTORS\_MONOPOLY\_CREATED | -10 | # Relations change towards countries with investment rights when a country creates a monopoly |
| ``` # selection for the signing location of a treaty happens in two steps # 1. a state is randomly selected among up to 6, those 6 being: #    - the capital (1) #    - the state with higest gdp (1) #    - the state with the second highest gdp (0 or 1) #    - for both treaty participants #    - single-state countries don't have a second highest gdp state # 2. once a state is randomly selected, a hub is randomly selected in the #    state region that the state belongs to (if it applies, e.g. no ports #    in landlocked state regions) # every random selection is weighted via the following weights ``` | | |
| TREATY\_SIGNING\_STATE\_WEIGHT\_CAPITAL | 1 | # weight that states have when randomly chosing a signing place for a treaty [>= 1] |
| TREATY\_SIGNING\_STATE\_WEIGHT\_HIGHEST\_GDP | 1 | # as above, for the state with the highest gdp [>=1] |
| TREATY\_SIGNING\_STATE\_WEIGHT\_SECOND\_HIGHEST\_GDP | 1 | # as above, for the state with the second highest gdp [>=1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_CITY | 5 | # weight that city hubs have when randomly chosing a signing place for a treaty [>= 1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_PORT | 3 | # as above, for port hubs [>= 1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_FARM | 2 | # as above, for farm hubs [>= 1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_MINE | 1 | # as above, for mine hubs [>= 1] |
| TREATY\_SIGNING\_HUB\_WEIGHT\_WOOD | 1 | # as above, for wood hubs [>= 1] |
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
### PowerBlocs
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
### Pops
| Define | Default Value | Dev Comment |
| NUM\_WEALTH\_LEVELS | 99 |  |
| POP\_WEIGHT\_MODIFIER\_MAX\_SCALE | 100 | # The maximum scale applied to weight modifiers on the pop portrait |
| DEFAULT\_POP\_TYPE | "laborers" | # Used by: create\_pop effects; migration; injured military leaving their outposts; slaves default employment role; etc. |
| SLAVE\_POP\_TYPE | "slaves" | # This is the type of pop that debtors will become |
| ACADEMICS\_POP\_TYPE | "academics" | # Academic pops |
| OFFICERS\_POP\_TYPE | "officers" | # This is the type of pop that is considered military officers |
| SERVICEMEN\_POP\_TYPE | "soldiers" | # This is the type of pop that is considered military servicemen |
| POP\_SIZE\_PACKAGE | 10000 | # "Normal" pop size used as a divisor on population when determining e.g. Needs to buy, wages to pay, etc |
| WEALTH\_PROGRESS\_WANTED\_BUFFER | 1.02 | # A pop wants at least as much income as this x the next level buy package costs to increase its wealth |
| WEALTH\_PROGRESS\_ACCEPTABLE\_DEFICIT | 0.98 | # A pop won't change wealth level if they can still afford this much of their current buy package costs |
| WEALTH\_PROGRESS\_INCREASE | 0.2 | # How fast wealth increases when a pop has money for higher grade buy packages. This factor is modified by how large the difference between income and cost is |
| WEALTH\_PROGRESS\_DECREASE | 0.1 | # How fast wealth decrease when a pop can no longer afford its buy package. This factor is modified by how large the difference between income and cost is |
| WEALTH\_PROGRESS\_DECREASE\_DEFICIT\_MULT | 5 |  |
| LOYALTIES\_GAIN\_GRACE\_PERIOD\_SHORT | "1837.1.1" | # Until this date, only a scaling part of the Radicals and Loyalists gained from SOL changes will be applied if the Short game rule is applied |
| LOYALTIES\_GAIN\_GRACE\_PERIOD\_LONG | "1841.1.1" | # Until this date, only a scaling part of the Radicals and Loyalists gained from SOL changes will be applied if the Long game rule is applied |
| LOYALTIES\_GAIN\_GRACE\_PERIOD\_EXTRA\_LONG | "1846.1.1" | # Until this date, only a scaling part of the Radicals and Loyalists gained from SOL changes will be applied if the Extra Long game rule is applied |
| RADICALS\_MAX\_FROM\_LOW\_SOL | 0.15 | # If pop is already this % radical, don't add more radicals from low SOL (Scales by delta between SoL and expected min SoL) |
| RADICALS\_MAX\_FROM\_DISCRIMINATION | 0.5 | # If pop is already this % radical, don't add more radicals from discrimination (Scales by literacy) |
| ``` # Radicals Monthly indicates what fraction of the pop turns radical every month while starving # Radicals max indicates at what max fraction of radicals we stop adding new ones due to starvation # Radical growth/max increases between these values as Food Security decreases ``` | | |
| RADICALS\_MONTHLY\_FROM\_STARVATION\_BASE | 0.002 | # Food Security = Mild Threshold |
| RADICALS\_MONTHLY\_FROM\_STARVATION\_MILD | 0.008 | # Food Security = Severe Threshold |
| RADICALS\_MONTHLY\_FROM\_STARVATION\_SEVERE | 0.02 | # Food Security = 0 |
| RADICALS\_MAX\_FROM\_STARVATION\_BASE | 0.15 | # Food Security = Mild Threshold |
| RADICALS\_MAX\_FROM\_STARVATION\_MILD | 0.5 | # Food Security = Severe Threshold |
| RADICALS\_MAX\_FROM\_STARVATION\_SEVERE | 0.75 | # Food Security = 0 |
| ALLOW\_ASSIMILATION\_IN\_HOMELANDS | no | # Can pops assimilate when living in their homelands? |
| ALLOW\_ASSIMILATION\_REQUIRE\_HERITAGE\_GROUP | no | # Can pops assimilate into pops of a different heritage group (weaker condition) |
| ALLOW\_ASSIMILATION\_REQUIRE\_HERITAGE\_TRAIT | no | # Can pops assimilate into pops of a different heritage trait (stronger condition) |
| ``` #in case if both are allowed, heritage trait requirement takes precedence ``` | | |
| ASSIMILATION\_RATE | 0.002 | # Percentage of pops who will Assimilate into a different Culture each month, if eligible |
| MIN\_ASSIMILATION | 1 | # If there is any assmiliation at least this many people will assimilate |
| ASSIMILATION\_IN\_HOMELAND\_MULT | 0.75 | # Assimilation rate is multiplied by this in homelands |
| CONVERSION\_RATE | 0.002 | # Percentage of pops who will Convert into a different Religion each month, if eligible |
| CONVERSION\_UNINCORPORATED\_MULT | 0.1 | # CONVERSION\_RATE is multiplied by this in unincorporated states |
| MIN\_CONVERSION | 1 | # If there is any conversion at least this many people will convert |
| DEFAULT\_OBSESSION\_DEMAND\_MIN | 0.5 | # The minimum relative demand of an obsession (overrides min demand in buy package goods categories), can be overriden in pop need |
| DEFAULT\_OBSESSION\_DEMAND\_MULT | 1.5 | # Demand of an obsession is multiplied by this, can be overriden in pop need |
| MIN\_POPS\_FOR\_NEW\_OBSESSION | 50000 | # At least this many pops of a culture must live in a market to get an obsession from its goods |
| MIN\_SUPPLY\_LEVEL\_FOR\_NEW\_OBSESSION | 0.5 | # Supply needs to be at least this times the demand |
| MIN\_DEMAND\_VALUE\_FOR\_NEW\_OBSESSION | 500 | # At this amount of (number of units \* goods base price) needs to be demanded in a market to create a new obsession |
| MAX\_NUM\_OBSESSIONS | 3 | # A culture can only have this number of obsessions at the same time |
| OBSESSION\_SPAWN\_CHANCE | 0.5 | # Per year (1.0 = 1%), multiplied by goods supply and market size mult |
| OBSESSION\_SPAWN\_CHANCE\_MAX\_SUPPLY\_MULT | 3.0 | # Supply relative to demand above this isn't factored into spawn chance |
| OBSESSION\_SPAWN\_CHANCE\_PRESTIGE\_GOODS\_MULT | 4.0 | # Chance for a new obsession to spawn is multiplied by 1 + this, scaled by fraction of the goods supply that is prestige goods |
| TABOO\_DEMAND\_MULT | 0.5 | # Demand of a taboo is multiplied by this |
| DEFAULT\_PRESTIGE\_GOODS\_DEMAND\_INCREASE | 0.5 | # Demand for goods is multiplied by ( 1 + this ), scaled by how much of the local supply is prestige goods, can be overriden in pop need |
| MAX\_DEMAND\_ADJUSTMENT\_BASE\_AMOUNT | 0.01 | # Controls how much a pop can change demand of a substituable goods in a single update (base) |
| MAX\_DEMAND\_ADJUSTMENT\_SCALED\_AMOUNT | 0.09 | # Controls how much a pop can change demand of a substituable goods in a single update (scaled) |
| MAX\_DEMAND\_ADJUSTMENT\_SCALE | 1.0 | # At this delta between target and current demand, apply max demand adjustment scale |
| PRESTIGE\_GOOD\_SOL\_BONUS\_SCALING | 0.4 | # Added multiplier to SoL, scales with % of pop buy package that is prestige goods |
| PRESTIGE\_GOOD\_SOL\_MAX\_BONUS | 0.2 | # Added multiplier to SoL from prestige goods cannot be higher than this |
| LOCAL\_GOODS\_SUBSTITUTION\_SUPPLY\_GDP\_FACTOR | 0.25 | ``` # To allow local goods to properly compete with non-local ones in large markets, we add a fraction of the market production of the local good that is equal to ( 1 - the state's GDP share ) * this # This is only done for the purposes of goods substitution supply and *not* for price calculations ``` |
| OBSESSION\_POP\_NEED\_EXPENSE\_MULT | 0.25 | # Total spent on pop needs including obsessions is changed by this (scaled by number of obsessions, money is given or taken from other needs) |
| TABOO\_POP\_NEED\_EXPENSE\_MULT | -0.25 | # Total spent on pop needs including taboos is changed by this (scaled by number of taboos, money is given or taken from other needs) |
| WORKING\_ADULT\_RATIO\_BASE | 0.25 | # Base ratio of working adults to dependents, this can be overridden by pop type definition and country modifiers. |
| WORKING\_ADULT\_RATIO\_SKEW\_MAXIMUM | 2.0 | # When the ratio of working adults to dependents is skewed, it tends to correct itself, this value clamps the maximum effect of this |
| DEPENDENT\_CONSUMPTION\_RATIO | 0.5 | # Dependents consume this multiple of Needs compared to Working Adults |
| LITERACY\_DIEOFF\_BIAS | 1.0 | # Percentage of literate pops who die of old age compared to the current literacy rate, the higher this value the faster the population becomes illiterate when literacy suffers |
| DEFAULT\_SOL\_CHANGE\_IMPACT\_FACTOR | 0.03 | # How large part of a pop become more loyalist or radical as a result of a change in standard of living, can be overriden on specific pop types |
| SOL\_CHANGE\_IMPACT\_FACTOR\_REDUCTION\_START | 15 | # Above amount of SoL, we start scaling down loyalists/radicals from SoL changes |
| SOL\_CHANGE\_IMPACT\_FACTOR\_REDUCTION\_END | 30 | # At this amount of SoL, we apply maximum scaling down of loyalists/radicals from SoL changes |
| SOL\_CHANGE\_IMPACT\_FACTOR\_REDUCTION\_SCALE | 9 | # Loyalists/radicals from SoL changes is divided by ( 1 + this ) at maximum scaling |
| SOL\_STARVING\_THRESHOLD | 5 |  |
| SOL\_STRUGGLING\_THRESHOLD | 10 |  |
| LOW\_POP\_THRESHOLD | 5000 | # If a state has less than this amount of pops per arable land, apply the low pop modifier |
| HIGH\_POP\_THRESHOLD | 100000 | # If a state has more than this amount of pops per arable land, apply the high pop modifier |
| (wiki editor's note) The following defines come after the pop migration defines but before the pop consolidation defines in `00_defines.txt`. | | |
| COLONIZATION\_RIGHTS\_GROWTH\_MULTIPLIER | 2.0 | # Colonial growth AND max colonial growth are multiplied by this if you have colonization rights |
| COMPANY\_COLONIZATION\_GROWTH\_MULTIPLIER | 1.2 | # Colonial growth AND max colonial growth are multiplied by this if you have company colonization rights |
| COLONIAL\_GROWTH\_BASE\_FACTOR | 0.00001 | # Colonial growth generated by a state is this amount per 1000 population, multiplied by the Colonial Growth modifier in the state |
| MIN\_BASE\_COLONIAL\_GROWTH | 0.005 | # Country base colonial growth from population cannot be lower than this |
| MAX\_BASE\_COLONIAL\_GROWTH | 0.1 | # Country base colonial growth from population cannot be higher than this |
| MAX\_COLONIAL\_GROWTH | 0.02 | # Colonies can grow by this much at most per day |
| COLONY\_SPEED\_PROVINCE\_SIZE\_STANDARD | 50 | # Sets a baseline for how large (in provinces) a colonizable state region is |
| COLONY\_SPEED\_PER\_PROVINCE\_DIFF\_FROM\_STANDARD | 0.02 | # For every province the state region has above or below COLONY\_SPEED\_PROVINCE\_SIZE\_STANDARD, increase or decrease colonization speed by this rate (as a percentage) |
| COLONY\_SPEED\_POPULATION\_INCREMENT | 100000 | # Determines the number of people across both colonizing and colonized states that should start slowing down the rate of colonization; set to 0 to disable |
| COLONY\_SPEED\_MALUS\_PER\_POPULATION\_INCREMENT | 0.25 | # Starting at COLONY\_SPEED\_THRESHOLD\_FROM\_POPULATION inhabitants, increase the number of days to complete by this amount proportional to population in the colony + state of province being colonized above 200K (e.g. at COLONY\_SPEED\_THRESHOLD\_FROM\_POPULATION = 200K, this set to 0.5, and at 300K total inhabitants, multiply growth by 1/1.25 = 0.8; at 600K inhabitants, multiply by 0.25) |
| INDIVIDUALS\_PER\_POP\_INFRASTRUCTURE | 100000 | # Multiply state\_infrastructure\_from\_population\_add by this to determine infra from population |
| QUALIFICATIONS\_UPDATE\_FACTOR | 0.0003 | # Calculated potential values are multiplied by this value and the workforce size of the pop before being added to the existing potentials |
| QUALIFICATIONS\_NUM\_MONTHS\_AT\_START | 60 | # How many months of qualifications should be seeded to pops at start of game? |
| INDIVIDUALS\_TAXED\_PER\_TAX\_CAPACITY | 10000 | # How many pops can be taxed efficiently for each tax capacity |
| EXPECTED\_SOL\_FROM\_LITERACY\_SUBSISTENCE\_MULT | 0.25 | # Expected SoL from literacy is multiplied by this for Pops working in subsistence buildings |
| JOB\_SATISFACTION\_BASE | -130 | # Base job satisfaction |
| JOB\_SATISFACTION\_FOR\_NEWLY\_HIRED | 1000 | # Job satisfaction gained due to having been newly hired, this state lasts until the pop's next wealth calculation |
| JOB\_SATISFACTION\_PER\_SOL\_ABOVE\_EXPECTED\_SOL | 3 | # Job satisfaction gained per level of SoL above your expected SoL |
| JOB\_SATISFACTION\_PER\_SOL\_ABOVE\_STATE\_STRATA\_SOL | 2 | # Job satisfaction gained per level of SoL above the state average for your strata |
| JOB\_SATISFACTION\_PER\_SOL\_ABOVE\_COUNTRY\_STRATA\_SOL | 1 | # Job satisfaction gained per level of SoL above the country average for your strata |
| JOB\_SATISFACTION\_PER\_PERCENT\_WAGE\_RATE\_ABOVE\_NORMAL | 1 | # Job satisfaction gained per pound of workplace wage rate (weekly wage of 10k laborers) above country normal |
| JOB\_SATISFACTION\_FROM\_CAN\_AFFORD\_EXPENSES | 1000 | # Job satisfaction gained from being able to afford your bug package (and taxes) |
| JOB\_SATISFACTION\_FROM\_CANNOT\_AFFORD\_EXPENSES | -100 | # Job satisfaction gained from not being able to afford your bug package (and taxes) |
| JOB\_SATISFACTION\_PER\_PERCENT\_HIGHER\_SOL\_QUALIFICATION | -1 | # Job satisfaction gained per percent of workforce qualified for a job with a higher base standard of living. Note that qualifications are assumed to overlap and the largest qualification is used in this calculation |
| JOB\_SATISFACTION\_FROM\_JOB\_ATTRACTIVENESS | 100 | # Job satisfaction when employed, multiplied by job attractiveness |
| JOB\_SATISFACTION\_DIVIDENDS\_MAX\_MULT | 5 | # Max multiplier from the ratio between pop dividends and wages |
| JOB\_SATISFACTION\_DIVIDENDS\_BASE | 50 | # Base value to be multiplied by the ratio between dividends and wages |
| JOB\_SATISFACTION\_LOSSES\_MIN\_MULT | -5 | # Min multiplier from the ratio between pop losses and wages (or if you will, max magnitude) |
| JOB\_SATISFACTION\_LOSSES\_BASE | 50 | # Base value to be multiplied by the ratio between losses and wages |
| JOB\_SATISFACTION\_GOVERNMENT | 50 | # Government jobs need a bit more stability |
| @starvation\_threshold | 0.4 |  |
| @starvation\_scaling\_factor | @[1/starvation\_threshold] |  |
| FOOD\_SECURITY\_MODERATE\_THRESHOLD | 0.6 | # If Food Security is lower than this, the pop is marked as having moderate food security |
| FOOD\_SECURITY\_STARVATION\_THRESHOLD | @starvation\_threshold | # If Food Security is lower than this, the pop is considered to be in a starving state |
| FOOD\_SECURITY\_SEVERE\_STARVATION\_THRESHOLD | 0.2 | # If Food Security is lower than this, the pop is considered to be in a severe starving state |
| STARVATION\_EFFECTS\_SCALING\_FACTOR | @starvation\_scaling\_factor | # Acts as a scaling factor when converting food security to starvation effects: StarvationValue = CLAMP( (StarvationThreshold - FoodSecurity) \* ScalingFactor, 0, 1) |
| FAMINE\_POPULATION\_SHARE\_IN\_STARVATION | 0.35 | # If at least this % of state population is in starvation, the state is considered to have a famine |
| FAMINE\_POPULATION\_SHARE\_IN\_SEVERE\_STARVATION | 0.15 | # If at least this % of state population is in severe starvation, the state is considered to have a famine |
#### Pop migration
| Define | Default Value | Comment |
| ``` ## General ## ``` | | |
| MIGRATION\_MIN\_STATE\_POPS | 20000 | # A state with less population than this will not get emigration |
| MIGRATION\_STATE\_POPULATION\_THRESHOLD | 100000 | # States with less pops than this have reduced market emigration numbers to avoid total depopulation |
| MIGRATION\_MAX\_PER\_STATE\_BASE | 500 | # No more than this amount of people can move from or to a state in a single week (base) |
| MIGRATION\_MAX\_PER\_STATE\_INFRASTRUCTURE | 5 | # No more than this amount of people can move from or to a state in a single week (scales with infrastructure) |
| MIGRATION\_MAX\_EMIGRATION\_AS\_POPULATION\_FRACTION | 0.005 | # Max emigration per week is clamped to this fraction of a state's population |
| MIGRATION\_MAX\_PER\_STATE\_UNEMPLOYMENT\_ORIGIN\_FRACTION | 0.05 | # The amount of unemployed workers in a state \* this value is added to how many people can move from it (after clamping from MIGRATION\_MAX\_EMIGRATION\_AS\_POPULATION\_FRACTION) |
| MIGRATION\_MAX\_PER\_STATE\_UNEMPLOYMENT\_TARGET\_FRACTION | 0.05 | # The amount of unemployed workers in a state \* this value is removed from how many people can move to it (after clamping from MIGRATION\_MAX\_EMIGRATION\_AS\_POPULATION\_FRACTION) |
| ``` # Migration Desire # ``` | | |
| MIGRATION\_DESIRE\_FROM\_JOB\_SATISFACTION\_FACTOR | -1.0 | # A pop's desire to migrate will be increased by its job satisfaction multiplied by this value. |
| ``` # Acceptance # ``` | | |
| MIN\_ACCEPTANCE\_VALUE | 0 | # It is both the minimum acceptance value a pop can have as well as the explicit threshold scripted for the first acceptance status [any signed 32 bit value] |
| MAX\_ACCEPTANCE\_VALUE | 100 | # It is both the maximum acceptance value a pop can have as well as the (implied) upper bound of the last acceptance status [> MIN\_ACCEPTANCE\_VALUE] |
| ACCEPTANCE\_FROM\_HOMELAND\_COMMUNITY | 0 | # The amount of acceptance a pop gets from living in their homeland, applied statically on their Cultural Community |
| ACCEPTANCE\_FROM\_NOT\_HOMELAND\_COMMUNITY | 0 | # The amount of acceptance a pop gets from not living in their homeland, applied statically on their Cultural Community |
| MIN\_REQUIRED\_ACCEPTANCE\_FOR\_MIGRATION | 30 | # If a pop would have less than this much acceptance in a target state, they won't mass migrate there |
| EXPECTED\_ACCEPTANCE\_INCREASE\_TO\_MIGRATE | 10 | # A pop will look to increase their acceptance by this much when mass migrating, but might accept less if mass migration attraction difference is high enough |
| MAX\_ACCEPTANCE\_RATIO\_MULT\_MIGRATION | 5 | # A difference in acceptance between source and target in mass migrations will result in at most this much increased migration |
| BUCKET\_MIGRATION\_EXPIRATION\_YEARS | 5 | # How long a migration bucket will be kept before it is removed |
| BUCKET\_MIGRATION\_THRESHOLD | 1000 | # How many pops need to be in a bucket before it is executes migration |
| BUCKET\_MIGRATION\_MIN\_LEFTOVER\_THRESHOLD | 1000 | # Minimum number of pops that can stay without being moved over to another state when a bucket migration is executed |
| MIGRATION\_PULL\_CULTURE\_VACANCIES\_MODIFIER | 0.25 | # Modifies migration pull for pop if there is vacancies available for the pop culture |
| MIGRATION\_PULL\_CULTURE\_NO\_VACANCIES\_MODIFIER | -0.5 | # Modifies migration pull for pop if there is no vacancies available for the pop culture |
| ``` # Cultural Communities # ``` | | |
| CULTURAL\_COMMUNITY\_LINGER\_TIME\_WEEKS | 3 | # When the last pop of a given culture leaves a state, the corresponding cultural community will be removed after this long |
| CULTURAL\_COMMUNITY\_MAX\_PER\_MONTH\_CHANCE | 0.04 |  |
| CULTURAL\_COMMUNITY\_ACCEPTANCE\_DELTA\_ON\_SPAWN | -0.3 | # The percentage of the maximum cultural acceptance that should be added as a delta to the cultural community when it first appears |
| CULTURAL\_COMMUNITY\_ACCEPTANCE\_DELTA\_DECAY\_PER\_MONTH | 0.25 | # The amount of acceptance delta that will decay each month |
| ``` # Cultural Fervor # ``` | | |
| CULTURAL\_FERVOR\_MAX | 100 | # The maximum value of cultural fervor |
| CULTURAL\_FERVOR\_MIN | 0 | # The minimum value of cultural fervor |
| CULTURAL\_FERVOR\_DRIFT | 0.01 | # Factor to control the monthly drift from current to target Fervor |
| CULTURAL\_FERVOR\_DRIFT\_MIN | 0.05 | # The minimum amount fervor will move towards its target (unless it would overshoot) |
| CULTURAL\_FERVOR\_LITERACY\_IMPACT | 35 | # The impact of pops literacy on the cultural fervor |
| CULTURAL\_FERVOR\_WAR\_IMPACT | 20 | # The impact of a war on the cultural fervor, unused |
| CULTURAL\_FERVOR\_CASUALTIES\_IMPACT\_MAX | 30 | # The maximum impact of casualties from war and attrition on the cultural fervor |
| CULTURAL\_FERVOR\_CASUALTIES\_RATIO\_MAX | 0.1 | # The ratio of dead to living that gives the maximum casualty impact on the cultural fervor |
| CULTURAL\_FERVOR\_ACADEMICS\_IMPACT | 0.002 | # The impact of pops education access on the cultural fervor per person |
| CULTURAL\_FERVOR\_ACADEMICS\_IMPACT\_CAP | 25 | # Cap for the academics impact |
| CULTURAL\_FERVOR\_ACCEPTANCE\_IMPACT | -0.05 | # The impact of a pops acceptance on the cultural fervor |
| CULTURAL\_FERVOR\_NATIONALISM\_IMPACT | 5 | # The impact of nationalism on the cultural fervor, if all pops of a culture lives under nationalsim, then the cultural fervor will increase by this amount, else a fraction of it |
| CULTURAL\_FERVOR\_PAN\_NATIONALISM\_IMPACT | 5 | # The impact of pan-nationalism on the cultural fervor, if all pops of a culture lives under pannationalsim, then the cultural fervor will increase by this amount, else a fraction of it |
| CULTURAL\_FERVOR\_PUBLIC\_SCHOOLS\_IMPACT | 10 | # The impact of public schools on the cultural fervor, if all pops of a culture lives under public schools, then the cultural fervor will increase by this amount, else a fraction of it |
| CULTURAL\_FERVOR\_OTHER\_CULTURES\_RELEASED\_IMPACT | 10 | # The impact on non-primary cultures in country where a culture gets released |
| CULTURAL\_FERVOR\_NATIONAL\_AWAKENING\_THRESHOLD | 25 | # The fervor threshold over which it is possible for a culture to have a national awakening |
| CULTURAL\_NATIONAL\_AWAKENING\_CHANCE\_INCREASE\_PER\_FERVOR | 0.01 | # The increase in chance per point of fervor of a national awakening happening once fervor is above the awakening threshold |
| CULTURAL\_FERVOR\_NATIONAL\_AWAKENING\_IMPACT | 20 | # The impact on fervor from having a national awakening |
| CULTURAL\_FERVOR\_NATIONAL\_AWAKENING\_DEFAULT\_LENGTH\_MONTHS | 120 | # The default length of a national awakening in months |
| CULTURAL\_FERVOR\_ASSIMILATIOM\_EFFECT | 0.01 | # The effect cultural fervor has on assimilation, it makes it this much harder to assimilate with higher fervor |
| CULTURAL\_FERVOR\_WAR\_SUPPORT\_EFFECT | 0.01 | # The effect cultural fervor has on war support |
| CULTURAL\_FERVOR\_CONQUEST\_RADICILIZATION\_IMPACT | -0.005 | # This modifies the radicialization of pops in a state when it is conquered by a country with a primary culture the same as the pops |
| ``` # Slavery # ``` | | |
| MIGRATION\_MIN\_POP\_AMOUNT | 1 | # No less than this amount of a pop can migrate each week (if any migration at all should happen) |
| ``` # UX/UI Labeling # ``` | | |
| MIGRATION\_PULL\_HIGH\_THRESHOLD | 1.25 | # State must have a migration pull of at least market average \* this to get market immigration |
| MIGRATION\_PULL\_LOW\_THRESHOLD | 0.75 | # State must have a migration pull of less or equal than market average \* this to get full amount of emigration |
| ``` # Treaty Ports # ``` | | |
| TREATY\_PORT\_INITIAL\_MIGRATION | 1000 | # This is the amount of people of the taker country's first primary culture to migrate to a treaty port upon establishment |
| ``` ## Migration Attraction ## ``` | | |
| MIGRATION\_PULL\_EMPTY\_STATE | 100 | # If a state has no pops at all, give it a huge migration pull |
| MIGRATION\_PULL\_FROM\_LIVING\_STANDARD | 2 | # Migration pull from each point of average living standard in target state |
| MIGRATION\_PULL\_FROM\_AVAILABLE\_EMPLOYMENT | 30 | # Migration pull is increased by for each 10k available non subsistence jobs |
| MIGRATION\_PULL\_FROM\_AVAILABLE\_EMPLOYMENT\_MAX | 30 | # Migration pull is increased by the % of available non subsistence jobs compared to employed non subsistence pops, multiplied by this |
| MIGRATION\_PULL\_FROM\_AVAILABLE\_SUBSISTENCE\_EMPLOYMENT | 2 | # Migration pull is increased by the % of available subsistence jobs compared to employed non subsistence pops, multiplied by this |
| MIGRATION\_PULL\_FROM\_AVAILABLE\_SUBSISTENCE\_EMPLOYMENT\_MAX | 10 | # Migration pull from available subsistence jobs cannot exceed this |
| MIGRATION\_PULL\_REDUCTION\_FROM\_UNEMPLOYMENT | 50 | # Migration pull is reduced by the % of unemployed pops compared to employed pops, multiplied by this |
| MIGRATION\_PULL\_REDUCTION\_FROM\_UNEMPLOYMENT\_MAX | 50 | # Migration pull reduction from unemployment cannot exceed this |
| ``` ## Market Migrations ## ``` | | |
| ``` # Market Migration Processing # ``` | | |
| MARKET\_MIGRATION\_STATE\_ATTRACTION\_FRACTION | 0.75 | # States with at least this fraction of the most attractive state's migration attraction will receive migration |
| MARKET\_MIGRATION\_PER\_WEEK\_FACTOR | 5 | # This number of individuals will migrate for each point of difference in migration pull |
| MARKET\_MIGRATION\_PER\_WEEK\_PER\_TOTAL\_POPULATION | 100000 | # Additionally, one more individual will migrate per this number of population for each point of difference in migration pull |
| MARKET\_MIGRATION\_MIN\_DIFFERENCE\_IN\_MIGRATION\_ATTRACTION\_TO\_MOVE | 5 | # Pops will not migrate if their best option is to a state with a lower delta in migration pull than this number |
| MARKET\_MIGRATION\_MIN\_POP\_FRACTION\_TO\_MOVE | 0.05 | # If the people wanting to migrate constitues less than this fraction of a pop, no new pop will be created and they won't migrate. |
| MIGRATION\_PULL\_MULT\_FROM\_NO\_DISCRIMINATION | 0.5 | # Migration pull multiplier increased by this if pop is moving from discrimination to no discrimination (not applied to mass migration targets) |
| MIGRATION\_PULL\_MULT\_FROM\_HOMELANDS | 0.2 | # Migration pull multiplier increased by this if pop is moving to cultural homelands (not applied to mass migration targets) |
| ``` ## Mass Migrations ## # Mass Migration Setup # ``` | | |
| MASS\_MIGRATION\_MIN\_TRADE\_VALUE\_BETWEEN\_MARKETS | 1 | # At least this much monetary value of trade must be happening between two markets for mass migration to occur between them. This counts both world market trade and treaty trade. |
| MASS\_MIGRATION\_ORIGIN\_MIN\_TURMOIL | 0.15 | # Must have at least this much turmoil in cultural homelands to create a migration target |
| MASS\_MIGRATION\_ORIGIN\_MIN\_EMIGRANTS | 100000 | # A country must have at least this many possible migrants to trigger a mass migration |
| MASS\_MIGRATION\_TARGET\_MAX\_TURMOIL | 0.30 | # Must have this or less turmoil among the culture for a country to be picked as a mass migration target |
| MASS\_MIGRATION\_TARGET\_MIN\_ARABLE\_LAND | 10 | # A state must have at least this much arable land to be a mass migration target |
| MASS\_MIGRATION\_STATE\_MIN\_MARKET\_ACCESS | 0.7 | # A state must have at least this much market access to their market to be a mass migration target or origin state |
| MASS\_MIGRATION\_SPAWN\_CHANCE | 2 | # Per week for each potential mass migration, scales with turmoil (1 = 1%) |
| MASS\_MIGRATION\_SPAWN\_CHANCE\_STRUGGLING\_FACTOR | 0.2 | # Chance increases by this for each point of SoL below 10 for a culture in a country |
| MASS\_MIGRATION\_SPAWN\_CHANCE\_STARVING\_FACTOR | 1 | # Chance increases by this for each point of SoL below 5 for a culture in a country (added on top of struggling factor) |
| MASS\_MIGRATION\_TARGET\_COUNTRY\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random the selection of mass migration country targets will be |
| MASS\_MIGRATION\_TARGET\_STATE\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random the selection of mass migration state targets in the target country will be |
| MASS\_MIGRATION\_DURATION\_MONTHS | 12 | # How long does a mass migration last in months |
| MASS\_MIGRATION\_COOLDOWN\_MONTHS | 48 | # How many months before the same culture can mass migrate from a country again |
| MASS\_MIGRATION\_NUM\_TARGET\_STATES\_FOR\_NO\_PENALTY | 4 | # Countries with at least this number of possible target states do not receive any penalty to their mass migration target score |
| MASS\_MIGRATION\_FEW\_TARGET\_STATES\_PENALTY | 0.2 | # Mass migration target score is reduced by a fraction of itself equal to this times number of possible target states less than MASS\_MIGRATION\_NUM\_TARGET\_STATES\_FOR\_NO\_PENALTY. Or Score = Score - Score \* this \* PossibleStatesDiff |
| ``` # Mass Migration Processing # ``` | | |
| MASS\_MIGRATION\_PER\_WEEK\_FACTOR | 10 |  |
| MASS\_MIGRATION\_PER\_WEEK\_PER\_TOTAL\_POPULATION | 100000 |  |
| MASS\_MIGRATION\_MIN\_DIFFERENCE\_IN\_MIGRATION\_ATTRACTION\_TO\_MOVE | 10 |  |
|  |  | # The below factors are applied \*after\* migration pull threshold checks, so they only impact how large a share of migration a state gets |
| MIGRATION\_PULL\_MULT\_FROM\_MASS\_MIGRATION\_TARGET | 1.5 | # Migration pull multiplied by this from target state being a mass migration target |
| MIGRATION\_PULL\_MULT\_FROM\_MASS\_MIGRATION\_TARGET\_ADJACENCY | 1.1 | # Migration pull multiplied by this from target state being next to a mass migration target |
| MIGRATION\_MAX\_PER\_STATE\_MASS\_EMIGRATION\_MULT | 3.0 | # Weekly emigration caps are multiplied by this amount by this for mass migrations (after clamping from MIGRATION\_MAX\_EMIGRATION\_AS\_POPULATION\_FRACTION) |
| MIGRATION\_MAX\_PER\_STATE\_MASS\_IMMIGRATION\_MULT | 5.0 | # Weekly immigration caps are multiplied by this amount by this for mass migrations (after clamping from MIGRATION\_MAX\_EMIGRATION\_AS\_POPULATION\_FRACTION) |
| MASS\_MIGRATION\_NEIGHBORING\_TARGET\_STATE\_LIMIT\_FRACTION | 0.5 | # Fraction of the limit a neighboring state gets compared to the main target state in a mass migration |
#### Pop consolidation
These defines relate to the game rule for pop consolidation.

| Define | Default Value | Comment |
| ``` ### Pop Consolidation defines # Pop Consolidation identifies pops so small their impact on the economy and politics is insignificant, and merges them into other pops in the same building or state. #  # POP_MERGE_MAX_WORKFORCE_*: determines how small the pop needs to be in terms of Workforce in order to qualify to be merged with others in their same building or the unemployment pool # POP_MERGE_MIN_NUM_POPS_SAME_PROFESSION_*: employed pops will not get merged with others in their same building if there aren't at least this many pops of the same type in the building # WORKFORCE_RATIO_MAX_UNEMPLOYMENT_FACTOR_*: unemployed Pops with less than POP_MERGE_MAX_WORKFORCE and a Workforce:Dependent ratio that's this much worse than the ideal will be all turned into Dependents and merged back into pops in the same state #  # The tail of the define name corresponds to a Pop Consolidation Game Rule with the same name.  # When that Game Rule is active, the defined values for POP_MERGE_MAX_WORKFORCE and WORKFORCE_RATIO_MAX_UNEMPLOYMENT_FACTOR represent the minimum values, while the maximum are that of the level above it. # POP_MERGE_START_POP and POP_MERGE_MAX_TARGET_POP determines how high to scale the values towards the level above it. # For example, at Moderate Consolidation, POP_MERGE_START_POP = 50000 and POP_MERGE_MAX_TARGET_POP = 100000, and a global population of 87560 pops: # POP_MERGE_MAX_WORKFORCE will effectively be 45 (75% of the way from 30 to 50) and WORKFORCE_RATIO_MAX_UNEMPLOYMENT_FACTOR will effectively be 1.6244 (75% of the way from 2 to 1.5) ``` | | |
| POP\_MERGE\_MAX\_WORKFORCE\_MINOR\_CONSOLIDATION | 10 |  |
| POP\_MERGE\_MIN\_NUM\_POPS\_SAME\_PROFESSION\_MINOR\_CONSOLIDATION | 5 |  |
| WORKFORCE\_RATIO\_MAX\_UNEMPLOYMENT\_FACTOR\_MINOR\_CONSOLIDATION | 2.5 |  |
| POP\_MERGE\_MAX\_WORKFORCE\_MODERATE\_CONSOLIDATION | 30 |  |
| POP\_MERGE\_MIN\_NUM\_POPS\_SAME\_PROFESSION\_MODERATE\_CONSOLIDATION | 4 |  |
| WORKFORCE\_RATIO\_MAX\_UNEMPLOYMENT\_FACTOR\_MODERATE\_CONSOLIDATION | 2 |  |
| POP\_MERGE\_MAX\_WORKFORCE\_AGGRESSIVE\_CONSOLIDATION | 50 |  |
| POP\_MERGE\_MIN\_NUM\_POPS\_SAME\_PROFESSION\_AGGRESSIVE\_CONSOLIDATION | 3 |  |
| WORKFORCE\_RATIO\_MAX\_UNEMPLOYMENT\_FACTOR\_AGGRESSIVE\_CONSOLIDATION | 1.5 |  |
| POP\_MERGE\_MAX\_WORKFORCE\_MAX\_CONSOLIDATION | 100 |  |
| WORKFORCE\_RATIO\_MAX\_UNEMPLOYMENT\_FACTOR\_MAX\_CONSOLIDATION | 1 |  |
| POP\_MERGE\_START\_POPS | 50000 |  |
| POP\_MERGE\_MAX\_TARGET\_POPS | 100000 |  |
| ``` ### Pop Weights for Dependents Distribution # Format: { lower strata, middle strata, upper strata } # These impact the weight assigned to potential target pops for receiving dependents as a result of battlefield injuries # For example, we want injuried and widowed soldier pop individuals to be mostly merged to lower strata pops ``` | | |
| DEFAULT\_DEPENDENTS\_DISTRIBUTION\_WEIGHTS | { 1.0 0.5 0.1 } | # For when merging small pops |
| LOWER\_STRATA\_CASUALTY\_DEPENDENTS\_DISTRIBUTION\_WEIGHTS | { 1.0 0.1 0.0 } | # For when soldiers are wounded |
| MIDDLE\_STRATA\_CASUALTY\_DEPENDENTS\_DISTRIBUTION\_WEIGHTS | { 0.25 1.0 0.1 } | For when officers are wounded |
| UPPER\_STRATA\_CASUALTY\_DEPENDENTS\_DISTRIBUTION\_WEIGHTS | { 1.0 0.5 0.1 } | Not used, for modding, enjoy |

#### Pop growth
Pop growth defines use a number of defined and derived variables.

| Variable | Default Value | Comment |
| ``` ## Base Values per month ``` | | |
| @min\_birthrate | 0.00060 | # Minimum base birthrate per month (at POP\_GROWTH\_STABLE\_SOL) |
| @max\_birthrate | 0.00450 | # Maximum base birthrate per month (at SOL = 0) |
| @min\_mortality | 0.00045 | # Minimum base mortality per month (at POP\_GROWTH\_STABLE\_SOL) |
| @max\_mortality | 0.00550 | # Maximum base mortality per month (at SOL = 0) |
| ``` ## SoL Thresholds ``` | | |
| @pop\_growth\_equilibrium\_sol | 5 | # Equilibrium is pops stop starving and where growth first becomes positive |
| @pop\_growth\_transition\_sol | 10 | # Transition determines how long birthrate "lags" behind mortality before starting to drop. Setting to same as equilibrium leads to no "lag" (only matters for birthrate) |
| @pop\_growth\_max\_sol | 15 | # Growth Max is where net growth generally is at it's highest (only matters for mortality) |
| @pop\_growth\_stable\_sol | 25 | # Stable is where birthrate and mortality stop changing and hit their minimum values |
| ``` ## Others ``` | | |
| @transition\_birthrate\_mult | 1 | # If you want the birthrate "lag" to go to a higher or lower value than max\_birthrate. (you can also just change it directly below) |
| @max\_growth\_mortality\_mult | 0.35 | # What proportion of birthrate\_at\_growth\_max mortality should be at. Higher means lower growth |
| ``` ### Pop Growth Derived values # Generally, for each one of these derived values below we're really just doing one of three operations (or combination of them): # - Calculate a Point: sol * slope + start_value (x_at_y) # - Calculate a Slope: (start_value - end_value) / number_of_steps (x_slope) # - Calculate an Intercept: -slope*sol + end_value (x_intercept) # Intercepts are only needed for line segments that don't start at 0 SoL ``` | | |
| @birthrate\_at\_transition | @[max\_birthrate\*transition\_birthrate\_mult] |  |
| @rate\_at\_equilibrium | @[pop\_growth\_equilibrium\_sol\*((birthrate\_at\_transition-max\_birthrate)/pop\_growth\_transition\_sol)+max\_birthrate] | # determines both mortality and birthrate |
| ``` ## Mortality from 0 to pop_growth_equilibrium_sol ``` | | |
| @mortality\_starving\_slope | @[(rate\_at\_equilibrium-max\_mortality)/pop\_growth\_equilibrium\_sol] |  |
| ``` ## Birthrate from 0 to pop_growth_transition_sol || ``` | | |
| @birthrate\_pretransition\_slope | @[(birthrate\_at\_transition-rate\_at\_equilibrium)/pop\_growth\_transition\_sol] |  |
| ``` ## Mortality from pop_growth_equilibrium_sol to pop_growth_max_sol ``` | | |
| @birthrate\_at\_growth\_max | @[(pop\_growth\_max\_sol-pop\_growth\_transition\_sol)\*((min\_birthrate-birthrate\_at\_transition)/(pop\_growth\_stable\_sol-pop\_growth\_transition\_sol))+birthrate\_at\_transition] |  |
| @mortality\_at\_growth\_max | @[birthrate\_at\_growth\_max\*max\_growth\_mortality\_mult] |  |
| @mortality\_equilibrium\_to\_growth\_max\_slope | @[(mortality\_at\_growth\_max-rate\_at\_equilibrium)/(pop\_growth\_max\_sol-pop\_growth\_equilibrium\_sol)] |  |
| @mortality\_equilibrium\_to\_growth\_max\_intercept | @[-mortality\_equilibrium\_to\_growth\_max\_slope\*pop\_growth\_equilibrium\_sol+rate\_at\_equilibrium] |  |
| ``` ## Birthrate from pop_growth_transition_sol to pop_growth_stable_sol ``` | | |
| @birthrate\_transition\_slope | @[(min\_birthrate-birthrate\_at\_transition)/(pop\_growth\_stable\_sol-pop\_growth\_transition\_sol)] |  |
| @birthrate\_transition\_intercept | @[-birthrate\_transition\_slope\*pop\_growth\_stable\_sol+min\_birthrate] |  |
| ``` ## Mortality from pop_growth_max_sol to pop_growth_stable_sol ``` | | |
| @mortality\_growth\_max\_to\_stable\_slope | @[(min\_mortality-mortality\_at\_growth\_max)/(pop\_growth\_stable\_sol-pop\_growth\_max\_sol)] |  |
| @mortality\_growth\_max\_to\_stable\_intercept | @[-mortality\_growth\_max\_to\_stable\_slope\*pop\_growth\_stable\_sol+min\_mortality] |  |
| ``` ### Pseudo algorithm to determine base Mortality / Birthrate ``` | | |
| ``` ## Mortality # if (sol < POP_GROWTH_EQUILIBRIUM_SOL) # { mortality = sol * POP_GROWTH_MORTALITY_STARVING_SLOPE + POP_GROWTH_MAX_MORTALITY } # else if (sol < POP_GROWTH_MAX_SOL) # { mortality = sol * POP_GROWTH_MORTALITY_EQUILIBRIUM_TO_GROWTH_MAX_SLOPE + POP_GROWTH_MORTALITY_EQUILIBRIUM_TO_GROWTH_MAX_INTERCEPT } # else if (sol < POP_GROWTH_STABLE_SOL) # { mortality = sol * POP_GROWTH_MORTALITY_GROWTH_MAX_TO_STABLE_SLOPE + POP_GROWTH_MORTALITY_GROWTH_MAX_TO_STABLE_INTERCEPT } # else { mortality = POP_GROWTH_MIN_MORTALITY } ``` | | |
| ``` ## Birthrate # if (sol < POP_GROWTH_EQUILIBRIUM_SOL) # { birthrate = sol * POP_GROWTH_BIRTHRATE_PRETRANSITION_SLOPE + POP_GROWTH_MAX_BIRTHRATE } # else if (sol < POP_GROWTH_TRANSITION_SOL) # { birthrate = sol * POP_GROWTH_BIRTHRATE_PRETRANSITION_SLOPE + POP_GROWTH_MAX_BIRTHRATE } # else if (sol < POP_GROWTH_STABLE_SOL) # { birthrate = sol * POP_GROWTH_BIRTHRATE_TRANSITION_SLOPE + POP_GROWTH_BIRTHRATE_TRANSITION_INTERCEPT } # else { birthrate = POP_GROWTH_MIN_BIRTHRATE } ``` | | |
| Define | Default Value | Comment |
| ``` ## Birthrate ``` | | |
| POP\_GROWTH\_BIRTHRATE\_PRETRANSITION\_SLOPE | @birthrate\_pretransition\_slope |  |
| POP\_GROWTH\_BIRTHRATE\_TRANSITION\_SLOPE | @birthrate\_transition\_slope |  |
| POP\_GROWTH\_BIRTHRATE\_TRANSITION\_INTERCEPT | @birthrate\_transition\_intercept |  |
| ``` ## Mortality ``` | | |
| POP\_GROWTH\_MORTALITY\_STARVING\_SLOPE | @mortality\_starving\_slope |  |
| POP\_GROWTH\_MORTALITY\_EQUILIBRIUM\_TO\_GROWTH\_MAX\_SLOPE | @mortality\_equilibrium\_to\_growth\_max\_slope |  |
| POP\_GROWTH\_MORTALITY\_EQUILIBRIUM\_TO\_GROWTH\_MAX\_INTERCEPT | @mortality\_equilibrium\_to\_growth\_max\_intercept |  |
| POP\_GROWTH\_MORTALITY\_GROWTH\_MAX\_TO\_STABLE\_SLOPE | @mortality\_growth\_max\_to\_stable\_slope |  |
| POP\_GROWTH\_MORTALITY\_GROWTH\_MAX\_TO\_STABLE\_INTERCEPT | @mortality\_growth\_max\_to\_stable\_intercept |  |
| ``` ## Base Values ``` | | |
| POP\_GROWTH\_MIN\_BIRTHRATE | @min\_birthrate | # Minimum base birthrate per month (at POP\_GROWTH\_STABLE\_SOL) |
| POP\_GROWTH\_MAX\_BIRTHRATE | @max\_birthrate | # Maximum base birthrate per month (at SOL = 0) |
| POP\_GROWTH\_MIN\_MORTALITY | @min\_mortality | # Minimum base mortality per month (at POP\_GROWTH\_STABLE\_SOL) |
| POP\_GROWTH\_MAX\_MORTALITY | @max\_mortality | # Maximum base mortality per month (at SOL = 0) |
| ``` ## SoL Thresholds ``` | | |
| POP\_GROWTH\_EQUILIBRIUM\_SOL | @pop\_growth\_equilibrium\_sol | # Equilibrium is pops stop starving and where growth first becomes positive |
| POP\_GROWTH\_TRANSITION\_SOL | @pop\_growth\_transition\_sol | # Transition determines how long birthrate "lags" behind mortality before starting to drop. Setting to same as equilibrium leads to no "lag" (only matters for birthrate) |
| POP\_GROWTH\_MAX\_SOL | @pop\_growth\_max\_sol | # Growth Max is where net growth generally is at it's highest (only matters for mortality) |
| POP\_GROWTH\_STABLE\_SOL | @pop\_growth\_stable\_sol | # Stable is where birthrate and mortality stop changing and hit their minimum values |
### Events
| Define | Default Value | Dev Comment |
| DEFAULT\_MONTHS\_VALID | -1 | # months until it disappears, -1 = infinite |
| DEFAULT\_GUI\_WINDOW\_TYPE | "event\_window" | #Default gui window type for events |
| NUM\_DAYS\_TO\_AUTO\_OPEN\_EVENT | 30 | # number of days before timeout to pop up the event window |
### Technology
| Define | Default Value | Dev Comment |
| TECH\_SPREAD\_RANDOM\_RANGE | 0.5 | # How much can distribution of tech spread vary each week |
| TECH\_AHEAD\_OF\_TIME\_PENALTY\_FACTOR | 0.25 | # For every tech in a previous era not already researched in this category, take this multiple of the cost as an additional penalty (multiplied by number of eras between the techs) |
| NATIONALISM\_TECHNOLOGY\_TYPE | "nationalism" | # Technology type for nationalism techs |
| PAN\_NATIONALISM\_TECHNOLOGY\_TYPE | "pan-nationalism" | # Technology type for pan-nationalism techs |
### Characters
| Define | Default Value | Dev Comment |
| NUM\_RANDOM\_NAME\_TRIES\_FOR\_UNIQUENESS | 3 | # When generating random names for characters, try this many times to find a unique name within the country [>=1] |
| SET\_RULER\_NUM\_OPTIONS | 3 | # The number of potential rulers to generate for a country at game start |
| SET\_RULER\_POOL\_SIZE | 7 | # The max number of potential rulers to generate for a country at game start |
| RULER\_MIN\_AGE\_FOR\_HEIR | 20 | # Before this age, don't randomly generate heirs for rulers |
| RULER\_AGE\_FOR\_HEIR\_CHANCE\_BOOST | 30 | # A year after this age start boosting chance of heir generation |
| RULER\_HEIR\_GENERATION\_CHANCE | 0.001 | # Per day |
| RULER\_HEIR\_CHANCE\_BOOST\_SCALE | 0.001 | # Added to RULER\_HEIR\_CHANCE\_BOOST for each year after RULER\_AGE\_FOR\_HEIR\_CHANCE\_BOOST |
| AGE\_GENERATION\_STARTVAL | 20 |  |
| AGE\_GENERATION\_DICE\_ROLL\_MAGNITUDE | 6 |  |
| AGE\_GENERATION\_NUM\_DICE\_ROLLS | 5 |  |
| RECRUIT\_COMMANDER\_NUM\_OPTIONS | 3 |  |
| RECRUIT\_COMMANDER\_POOL\_SIZE | 3 |  |
| RECRUIT\_COMMANDER\_VALUE\_MARGINAL | -50 |  |
| RECRUIT\_COMMANDER\_VALUE\_HISTORICAL | 50 | # Prioritize showing historical commanders |
| RECRUIT\_COMMANDER\_VALUE\_AGE\_MULT | 0.5 |  |
| RECRUIT\_COMMANDER\_VALUE\_SAME\_IGS | -40 |  |
| RECRUIT\_COMMANDER\_REMOVE\_AGE | 55 | # removed from the recruit pool when they reach 55 years |
| COMMANDER\_START\_RANK | 1 |  |
| HIGHEST\_PROMOTION\_RANK | 5 |  |
| RULER\_COMMANDER\_START\_RANK | 6 |  |
| MIN\_POPULARITY | -100 |  |
| MAX\_POPULARITY | 100 |  |
| POPULARITY\_HATED\_THRESHOLD | -50 |  |
| POPULARITY\_DISLIKED\_THRESHOLD | -25 |  |
| POPULARITY\_LIKED\_THRESHOLD | 25 |  |
| POPULARITY\_LOVED\_THRESHOLD | 50 |  |
| POPULARITY\_AUTHORITY\_FACTOR | 1 | # Popularity of ruler is multiplied by this when turned into Authority |
| ROLE\_RULER | "character\_role\_ruler" | # Role that is assigned to ruler characters |
| ROLE\_HEIR | "character\_role\_heir" | # Role that is assigned to heir characters |
| ROLE\_IG\_LEADER | "character\_role\_ig\_leader" | # Role that is assigned to IG leader characters |
| DEFAULT\_CHARACTER\_ROLE | "character\_role\_politician" | # If set, characters that are generated without a role will get this role by default. Leave empty to have no default role. |
| DEFAULT\_TITLE\_PREPOSITION | "PREP\_IN" | # If no title preposition is defined, this one is used |
| CHARACTER\_HOME\_STATE\_HOMELAND\_MIN\_WEIGHT | 1000 | # A homeland state is always counted as having at least this amount of people of the culture when picking home states for characters |
| CHARACTER\_HOME\_STATE\_TRY\_EXCLUDE\_STATE\_WEIGHT | 0.001 | # States that we actively try to exclude when selecting a home state (for instance due to already being represented by a magnate when we are generating a new magnate) have their chance multiplied by this value |
| CHARACTER\_HOME\_STATE\_CAPITAL\_WEIGHT | 10.0 | # The capital's chance of being selected as the home state for a character is multiplied by this value |
| CHARACTER\_TEMPLATE\_CULTURE\_ACCEPTED\_THRESHOLD | 60 | # Minimum culture acceptance for a culture to be considered 'accepted' when using random\_accepted |
| CHARACTER\_TEMPLATE\_RELIGION\_ACCEPTED\_THRESHOLD | 15 | # Minimum religion acceptance contribution for a religion to be considered 'accepted' when using random\_accepted |
| MAX\_LOYALTY | 100 |
| LOYALTY\_FROM\_IG\_APPROVAL | 5 | # Characters loyalty from IG approval scales against this |
| LOYALTY\_FROM\_IG\_APPROVAL\_MIN | -50 | # Loyalty impact from IG approval cannot be below this |
| LOYALTY\_FROM\_IG\_APPROVAL\_MAX | 50 | # Loyalty impact from IG approval cannot be above this |
| LOYALTY\_FROM\_IDEOLOGY\_ENACTED | 25 | # Character loyalty gain/loss from enacting law scales against this |
| LOYALTY\_FROM\_IDEOLOGY\_ENACTING | 25 | # Character loyalty gain/loss from enacted laws scales against this |
| LOYALTY\_FROM\_IDEOLOGY\_MIN | -50 | # Loyalty impact from personal ideology cannot be below this |
| LOYALTY\_FROM\_IDEOLOGY\_MAX | 50 | # Loyalty impact from personal ideology cannot be above this |
| LOYALTY\_UNCERTAIN\_THRESHOLD | 25 |
| LOYALTY\_NEUTRAL\_THRESHOLD | 50 |
| LOYALTY\_RELIABLE\_THRESHOLD | 75 |
| LOYALTY\_FAITHFUL\_THRESHOLD | 100 |
| MAX\_PROMINENCE | 100 |
| PROMINENCE\_FROM\_POPULARITY | 0.25 | # This much of popularity is converted into prominence |
| PROMINENCE\_NOTEWORTHY\_THRESHOLD | 10 |
| PROMINENCE\_SIGNIFICANT\_THRESHOLD | 25 |
| PROMINENCE\_IMPORTANT\_THRESHOLD | 50 |
| PROMINENCE\_EMINENT\_THRESHOLD | 75 |
| PROMINENCE\_PREEMINENT\_THRESHOLD | 100 |
| PROMINENCE\_IG\_MIN\_MULTIPLIER | 0.05 | # If the multiplier from a character's prominence on prominence\_ig\_modifier is lower than this, set it to this |
| HISTORICAL\_CHARACTER\_IDEOLOGY\_LEADER\_FACTOR | 2.0 # When selecting IG leaders, multiply the weight from prominence for historical characters by this so they tend to get selected over randomly generated ones |
| HOLDING\_TYPE\_RANDOM\_FACTOR | 1.0 # The higher this is, the more random holding type selection for magnates will be |
| HOLDING\_REVENUE\_SCALING\_GDP\_DIVISOR | 1250 # Country GDP is divided by this for purposes of scaling against the holding's revenue and applying the character\_holding\_revenue static modifier |
| HOLDING\_REVENUE\_SCALING\_MIN | 0.2 | # Holding revenue scaling is never less than this |
| HOLDING\_REVENUE\_SCALING\_MAX | 1.0 | # Holding revenue scaling is never more than this |
| AGITATOR\_MOVEMENT\_SUPPORT\_LITERACY\_WEIGHT | 0.75 | # The fraction of the agitator's added support that is scaled by the literacy rating of the pop |
| AGITATOR\_MOVEMENT\_SUPPORT\_IG\_MEMBERSHIP\_WEIGHT | 0.75 | # The fraction of the agitator's added support that is scaled against fraction of members of the same IG in the pop |
| AGITATOR\_MOVEMENT\_SUPPORT\_BASE\_FACTOR | 15 | # Agitators add this much attraction to their movements (scaled by literacy/ig membership, base) |
| AGITATOR\_MOVEMENT\_SUPPORT\_POPULARITY\_FACTOR | 0.15 | # Agitators add this much attraction to their movements (scaled by literacy/ig membership and multiplied by popularity) |
| MIN\_YEARS\_OF\_SERVICE\_FOR\_COMMANDER\_IG\_LEADER | 5 | # Commanders with less years of service than this will not be considered for IG leadership |
| ``` # The below values are used to control when new politicians should be randomly generated into the character pool # The target value is the number of 'unemployed' politicians we want to hang around as potential new IG leaders # If the number of politician bums is below the target, we will try to create a new politician with an unrepresented ideology valid for the IG # Politicians generated from templates count towards but are not capped by these values ``` | | |
| TARGET\_NUM\_POOL\_POLITICIANS\_POWERFUL\_IG | 3 |  |
| TARGET\_NUM\_POOL\_POLITICIANS\_INFLUENTIAL\_IG | 2 |  |
| TARGET\_NUM\_POOL\_POLITICIANS\_MARGINAL\_IG | 0 |  |
| CHILD\_TRAIT | "trait\_child" | # This personality trait is used for characters below the age of 16 |
| ADULT\_AGE | 16 | # Characters under this age have more limited options. For example they cannot become military leaders [>= 0] |
| OLD\_AGE | 60 | # Characters above this age may get some specific traits and events [>= ADULT\_AGE] |
| VOIDED\_CHARACTER\_DEFAULT\_DURATION | 12 | # Default months a character will be in the void before being deleted |
| INHERIT\_RECESSIVE\_GENE\_CHANCE | 0.25 | # Probability of a recessive gene being picked as an heir's dominant/recessive gene. Only used for portraits. |
| AGITATOR\_EXPECTED\_SPAWN\_INTERVAL\_0\_LITERACY | 12 | # At 0% literacy, a new agitator is expected to spawn in a given country once every this many years. (supports decimal values) |
| AGITATOR\_EXPECTED\_SPAWN\_INTERVAL\_100\_LITERACY | 2 | # At 100% literacy, a new agitator is expected to spawn in a given country once every this many years. (supports decimal values) |
| ``` ### TRAIT GENERATION # Every week, a character's Expected Trait Value meter increases by the specified amount below depending on their role and what they're doing (Commanders also gain the Activity Level from their Orders) # Every week, a percentile die is rolled against ( Expected Trait Value meter - Current Trait Value . If the die rolls under the current value, a new random trait will be added, if a valid one exists. ``` | | |
| WEEKLY\_CONDITION\_CHANCE | 0.03 | # The chance that a character will get a condition each week (1 = 1%) |
| MAX\_EXPECTED\_TRAIT\_VALUE | 12.0 | # The maximum amount of Trait Value a character can develop normally (note: not adhered to by add\_trait effect) |
| MAX\_TRAITS\_PERSONALITY | 2 | # The max amount of Personality Traits a character can develop normally (note: not adhered to by add\_trait effect) |
| MAX\_TRAITS\_SKILL | 2 | # The max amount of Skill Traits a character can develop normally (note: not adhered to by add\_trait effect) |
| MAX\_TRAITS\_CONDITION | 2 | # The max amount of Condition Traits a character can develop normally (note: not adhered to by add\_trait effect) |
| TRAIT\_GAIN\_DIVISOR | 100.0 | # Final trait gain is always divided by this so we don't have to use all the decimals |
| DEFAULT\_TRAIT\_GAIN | 0.25 | # Every character's Expected Traits meter increases by this much per week by default |
| TRAIT\_GAIN\_POLITICIAN\_POWERFUL | 0.1 | # Powerful Politicians Expected Traits meter increases by this much \*extra\* each week |
| TRAIT\_GAIN\_RULER | 0.1 | # Rulers Expected Traits meter increases by this much \*extra\* each week |
| TRAIT\_GAIN\_COMMANDER\_RECRUITABLE | 0.05 | # Recruitable offer commanders Expected Traits meter increases by this much per week, overrides all other factors |
| TRAIT\_GAIN\_IN\_EXILE\_POOL | 0.1 | # Characters in the exile pool Expected Traits meter increases by this much per week, overrides all other factors |
| TRAIT\_GAIN\_VOIDED | 0.0 | # Voided characters Expected Traits meter increases by this much per week, overrides all other factors |
| ``` # The following parameters determine how character life expectancy is calculated. The calculation is based on a normal distribution with parameters: # µ = CHARACTER_LIFE_EXPECTANCY_BASE_YEARS # σ = CHARACTER_LIFE_EXPECTANCY_STDDEV_YEARS # # While the mean of the distribution is fixed, the result is modified by the health value of the character. # The way character health affects the life expectancy is given by the formula ((h / bh) - 1) * d, where: # - h is the character health # - bh is the baseline health # - d is the value of CHARACTER_LIFE_EXPECTANCY_DELTA_YEARS # # (h / bh) - 1 is the "distance to baseline health" of the character. For each point of distance away from baseline, a character will live CHARACTER_LIFE_EXPECTANCY_DELTA_YEARS more or less. # # Since the domain of the normal distribution is [-∞; +∞], we establish a hard cutoff defined by CHARACTER_LIFE_EXPECTANCY_CUTOFF. This value is expressed in σ, or standard deviations away from the mean. # It is recommended to leave that value to 3, as 99.73% of values of the ditribution fall in the range [-3σ; +3σ]. # Because of the above, with default values a character with 0 health will die between the ages of 50 and 80, while a character with 2 health will die between the ages of 70 and 100. # # NOTE: due to some performance optimizations, changing these values will either have no effect or unexpected behaviour until the game is restarted, even if they are hot reloaded. ``` | | |
| MIN\_CHARACTER\_HEALTH | 0.0 | # Baseline is 1.0 (meaning 100%), defined in the base\_values modifier. 0.0 means -100% from baseline. [any value] |
| MAX\_CHARACTER\_HEALTH | 2.0 | # Baseline is 1.0 (meaning 100%), defined in the base\_values modifier. 2.0 means +100% from baseline. [>= MIN\_CHARACTER\_HEALTH] |
| CHARACTER\_LIFE\_EXPECTANCY\_BASE\_YEARS | 75 | # The median life expecancy in years at baseline health. It's the µ parameter of the normal distribution [> 0] |
| CHARACTER\_LIFE\_EXPECTANCY\_STDDEV | 5 | # The standard deviation for the life expectancy distribution. It's the σ parameter [> 0] |
| CHARACTER\_LIFE\_EXPECTANCY\_CUTOFF | 3 | # We clamp the distribution between this amount of σ in both directions. A range of [-3σ; +3σ] accounts for 99.73% of values. [> 0] |
| CHARACTER\_LIFE\_EXPECTANCY\_DELTA\_YEARS\_BELOW\_BASELINE | 30 | # Random base for years that life expectancy is decreased by, for every point of distance below baseline health [>= 0] |
| CHARACTER\_LIFE\_EXPECTANCY\_DELTA\_YEARS\_ABOVE\_BASELINE | 15 | # Random base for years that life expectancy is increased by, for every point of distance above baseline health [>= 0] |
| ``` # Random base for life expectancy delta yearsis multiplied by a random range of lerp(CHARACTER_LIFE_EXPECTANCY_DELTA_LERP_LOWER_BOUND, CHARACTER_LIFE_EXPECTANCY_DELTA_LERP_UPPER_BOUND) ``` | | |
| CHARACTER\_LIFE\_EXPECTANCY\_DELTA\_LERP\_LOWER\_BOUND | 0.5 |  |
| CHARACTER\_LIFE\_EXPECTANCY\_DELTA\_LERP\_UPPER\_BOUND | 1.5 |  |
| GUARANTEED\_SURVIVABILITY\_DAYS\_MIN | 30 | # A character that stops being immortal and that should have died when it happens will instead live at least this amount of days, to avoid situations like a character dieing immediately upon finishing an expedition [>= 0] |
| GUARANTEED\_SURVIVABILITY\_DAYS\_MAX | 180 | # As above, but the upper limit of the range [>= GUARANTEED\_SURVIVABILITY\_DAYS\_MIN] |
|  |  | ## Interactions |
| INTERACTION\_INVITE\_EXILE | "invite\_exile" |  |
|  |  | ## Career Length |
| HISTORICAL\_CAREER\_LENGTH\_MULT | 1.5 | # Historical characters have this multiplier on career length |
### Battle
| Define | Default Value | Dev Comment |
| CASUALTY\_MAJORITY\_CULTURE\_WEIGHT | 1.5 | # Majority culture pops will be weighted to take 1.5x more casualties |
| CASUALTY\_ROLL\_MIN | 50 | # min ... |
| CASUALTY\_ROLL\_MAX | 200 | # max amount of casualties a unit can take each roll when applying casualties to units |
| SURVIVAL\_RATE | 0.66 |  |
| DEPENDENTS\_ROLL\_MIN\_PERCENT | 0.1 | # min ... |
| DEPENDENTS\_ROLL\_MAX\_PERCENT | 0.3 | # max percentage of Pops Size it can take as Dependents each roll |
| MIN\_DEPENDENTS\_PER\_ROLL | 25 | # Minimum amount of dependents to added to a random pop |
| ESCAPE\_PROGRESS\_REQUIRED\_MIN | 10.0 | # How much progress is needed for a formation to escape from battle |
| ESCAPE\_PROGRESS\_REQUIRED\_PER\_MANPOWER | 0.001 | # 1 battalion or ship increases the needed progress to escape by this |
| ESCAPE\_PROGRESS\_GAIN\_BASE | 1.0 | # How much progress is increased per each battle round as base value |
| ESCAPE\_PROGRESS\_GAIN\_RANDOM\_FACTOR | 2.5 | # The higher this is, the more random progress changer will be per round |
| CHANCE\_OF\_POPULARITY\_NARROW\_VICTORY | 0.5 | # The chance (0-1) to be affected by popularity for a narrow victory (start with numeric advantage, end with numeric disadvantage) |
| CHANCE\_OF\_POPULARITY\_NORMAL\_VICTORY | 0.1 | # The chance (0-1) to be affected by popularity for a normal victory (any victory that's not narrow or heroic) |
| CHANCE\_OF\_POPULARITY\_HEROIC\_VICTORY | 1.0 | # The chance (0-1) to be affected by popularity for a heroic victory (start with numeric disadvantage against a more prestigious nation) |
| POPULARITY\_GAIN\_NARROW\_VICTORY | 10 | # Multiple of commander\_battle\_end\_victory modifier the winner should get for a narrow victory if the random chance roll is true |
| POPULARITY\_GAIN\_NORMAL\_VICTORY | 5 | # Multiple of commander\_battle\_end\_victory modifier the winner should get for a normal victory if the random chance roll is true |
| POPULARITY\_GAIN\_HEROIC\_VICTORY | 20 | # Multiple of commander\_battle\_end\_victory modifier the winner should get for a heroic victory if the random chance roll is true |
| POPULARITY\_GAIN\_NARROW\_LOSS | -10 | # Multiple of commander\_battle\_end\_loss modifier the loser should get for a narrow victory for the other side if the random chance roll is true |
| POPULARITY\_GAIN\_NORMAL\_LOSS | -5 | # Multiple of commander\_battle\_end\_loss modifier the loser should get for a normal victory for the other side if the random chance roll is true |
| POPULARITY\_GAIN\_HEROIC\_LOSS | -20 | # Multiple of commander\_battle\_end\_loss modifier the loser should get for a heroic victory for the other side if the random chance roll is true |
| POPULARITY\_DECAY\_MONTHS | 30 | # The number of months battle popularity modifiers decay over |
| SHIP\_BATTLE\_DAYS\_BETWEEN\_UPDATES | 5 | # The number of days between updates of a naval battle involving individual ships |
| SHIP\_BATTLE\_DESTROYED\_SHIP\_RATIO\_RESIGN\_THRESHOLD | 0.5 | # The ratio of destroyed to originally active ships before a fleet resigns, when using individual ships |
| SHIP\_REQUIRED\_READINESS\_TO\_ACT | 100.0 | # How much readiness a ship needs to get up to before it can e.g. attack or withdraw |
| SHIP\_DEFAULT\_READINESS\_GAIN | 10 | # Default gain if not specified on template |
| SHIP\_INITIAL\_READINESS | 0.0 | # What readiness a ship has at the start of combat |
| SHIP\_ATTACK\_BASE\_MISS\_CHANCE | 0.2 | # Base chance for a ship to miss its attack against another ship. This is further modified by a ship's accuracy |
| SHIP\_ATTACK\_MIN\_MISS\_CHANCE | 0.01 | # Minimum miss chance when a ship attacks |
| SHIP\_WITHDRAW\_BASE\_CHANCE | 0.5 | # Base chance for a ship to successfully escape. The ship's speed is added to this. |
| SHIP\_WITHDRAW\_SPEED\_FACTOR | 1.0 | # Factor on speed when it's modifying withdraw chance. |
| ``` ###### Withdraw Desire Calculation ###### ## Withdraw desire = ( Damage Desire + Zero Damage Hit Ratio Desire ) * ( 1 + Overwhelming Odds Desire + Exposed Desire + Raiding Desire ) # given that each term is applicable ``` | | |
| SHIP\_LIGHT\_DAMAGE | 0.8 | # Damage thresholds on ships for different behaviors |
| SHIP\_MODERATE\_DAMAGE | 0.5 |  |
| SHIP\_SEVERE\_DAMAGE | 0.25 |  |
| SHIP\_WITHDRAW\_DESIRE\_LIGHT\_DAMAGE | 0.05 | # Chance for the ship to attempt withdrawing from a battle based on damage taken |
| SHIP\_WITHDRAW\_DESIRE\_MODERATE\_DAMAGE | 0.20 |  |
| SHIP\_WITHDRAW\_DESIRE\_SEVERE\_DAMAGE | 0.80 |  |
| OVERWHELMING\_ODDS\_POWER\_RATIO | 0.5 | # Power Ratio = Our Power / Enemy Power. If Power Ratio is below this threshold, the battle is considered to have overwhelming odds for the enemy and makes ships more likely to withdraw from battle |
| SHIP\_WITHDRAW\_DESIRE\_OVERWHELMING\_ODDS\_BASE | 0.1 | # If our power ratio is lower than OVERWHELMING\_ODDS\_POWER\_RATIO, we start adding this much to the ship's desire to withdraw. As the power ratio gets lower, we lerp the added withdraw desire up to SHIP\_WITHDRAW\_DESIRE\_OVERWHELMING\_ODDS\_MAX |
| SHIP\_WITHDRAW\_DESIRE\_OVERWHELMING\_ODDS\_MAX | 0.5 | # The maximum added withdraw desire at a theoretical 0 power ratio |
| PRIORITY\_SHIPS\_EXPOSED\_THRESHOLD | 0.5 | # If the battle side's ratio of total vulnerability / total screening is less than this, the side is considered to have it's priority ships exposed |
| PRIORITY\_SHIP\_WITHDRAW\_DESIRE\_MULT\_PRIORITY\_SHIPS\_EXPOSED | 0.2 | # If our priority ships are exposed, multiply the desire to withdraw by this for our priority ships |
| SCREENING\_SHIP\_WITHDRAW\_DESIRE\_MULT\_PRIORITY\_SHIPS\_EXPOSED | -0.2 # If our priority ships are exposed, multiply the desire to withdraw by this for our screening ships |
| PRIORITY\_SHIPS\_EXPOSED\_FOR\_RAIDING\_THRESHOLD | 0.25 | # For raiding fleets, if the enemy's ratio of total vulnerability / total screening is less than this, the side is considered exposed. |
| RAIDING\_SHIP\_WITHDRAW\_DESIRE\_MULT\_PRIORITY\_SHIPS\_EXPOSED | 0.25 | # For raiding fleets, if the enemy is not exposed, multiply the desire to withdraw by this |
| ZERO\_DAMAGE\_HIT\_RATIO\_THRESHOLD | 0.5 | # For each side of the battle, if the number of hits that deal zero damage through the total number of hits ratio exceeds this threshold, we apply a bonus to the withdrawal chance |
| MIN\_ATTACKS\_ZERO\_DAMAGE\_HIT\_PENALTY | 50 | ) |
| SHIP\_WITHDRAW\_DESIRE\_HIGH\_ZERO\_DAMAGE\_HIT\_RATIO | 0.1 | # If too many zero damage hits are being dealt by our side, add this much to the withdraw desire |
| FLEET\_UNCONNECTED\_MISSION\_AREA\_TIMEOUT\_DAYS | 30 | # Number of days that a mission area is allowed to be invalid/unconnected before it gets cleaned up |
| FLEET\_INTERCEPT\_CHANCE\_BASE | 10.0 | # The chance (0-100) that a fleet will intercept as a base |
| FLEET\_RAID\_SUPPLY\_CHANCE\_BASE | 10.0 | # The chance (0-100) that a fleet will raid supply as a base |
| NAVAL\_BATTLE\_LOG\_INITIAL\_SIZE\_FACTOR | 8 | # Initial reserved log size factor. This is multiplied by the number of ships in a battle to estimate number of entries needed. Too large a value and you allocate too much data, too little and you need to expand the array multiple times which is slow. |
| NAVAL\_BATTLE\_LOG\_ENTRIES\_PER\_PAGE | 20 | # Number of naval battle log entries shown per page in the battle log UI. |
| NAVAL\_BATTLE\_CONDITION\_DAMAGE\_RANGE | 0.25 | # When a naval battle condition applies damage to a ship, the actual damage will be in a range from (1 - this) \* damage to (1 + this) \* damage |
| DEFAULT\_NAVAL\_BATTLE\_CONDITION\_TYPE | "naval\_condition\_calm\_waters" | # If a naval battle is not able to select a valid condition due to all weights being 0 or something, it will override the selection to use this battle condition. This is a backup though and ideally all battle conditions should have a non-zero weight and there should always be at least one possible condition |
| HIGHLIGHTED\_EVENT\_INTERVAL\_TURNS | 8 | # Battle turns between highlighted event re-evaluations |
| HIGHLIGHTED\_EVENT\_LOOKBACK\_COUNT | 10 | # Max number of new log entries to consider per evaluation |
| HIGHLIGHTED\_EVENT\_WEIGHT\_DAMAGE | 1.0 | # Weight multiplied by total damage (hull + crew) when scoring log entries |
| HIGHLIGHTED\_EVENT\_WEIGHT\_FLAGSHIP | 500.0 | # Bonus weight added if a flagship is involved in the log entry |
| HIGHLIGHTED\_EVENT\_WEIGHT\_SINK | 100.0 | # Bonus weight added if a ship was sunk in the log entry |
### War
| Define | Default Value | Dev Comment |
| DEVASTATION\_MAX | 100.0 |  |
| DEVASTATION\_INCREASE\_RATE | 0.1 | # Per day, scales with level of occupation |
| DEVASTATION\_DECAY\_RATE | -0.0.25 | # Per day, when there are no occupations |
| DEVASTATION\_FROM\_BATTLES | 0.1 | # For each battle |
| AUTO\_CAPITULATE\_WAR\_SUPPORT | -100 | # When war support is this low, the country will auto capitulate |
| DAYS\_BETWEEN\_WAR\_EXHAUSTION | 7 | # Every this many days war support will be reduced by the war exhaustion formula |
| WAR\_EXHAUSTION\_BASE | 0.2 |  |
| WAR\_EXHAUSTION\_KIA\_FACTOR | 4.0 | # Scaled by casualties compared to total manpower |
| WAR\_EXHAUSTION\_KIA\_BASE\_MULTIPLIER | 0.25 | # War Exhaustion from casualties is always multiplied by at least this |
| WAR\_EXHAUSTION\_KIA\_BATTLES\_LOST\_MULTIPLIER | 0.75 | # At 100% of battles lost by our side, War Exhaustion from casualties is further multiplied by this |
| WAR\_EXHAUSTION\_TURMOIL\_FACTOR | 1.5 | # At 100% turmoil |
| WAR\_EXHAUSTION\_CONTESTED\_ENEMY\_WARGOALS | 1.0 |  |
| WAR\_EXHAUSTION\_ANTI\_WAR\_LOBBY\_CLOUT\_FACTOR | 1.0 | # At 100% lobby clout opposed to the war |
| WAR\_EXHAUSTION\_PRO\_WAR\_LOBBY\_CLOUT\_FACTOR | -1.0 | # At 100% lobby clout supporting to the war |
| WAR\_EXHAUSTION\_MAX | 100 | # War Exhaustion can never exceed this |
| WAR\_EXHAUSTION\_MIN | 0 | # War Exhaustion can never go below this |
| OCCUPATION\_STATE\_BASE\_WEIGHT | 1 |  |
| OCCUPATION\_STATE\_POP\_WEIGHT | 1 |  |
| OCCUPATION\_STATE\_INCORPORATED\_WEIGHT | 10 |  |
| OCCUPATION\_STATE\_DEFENSIVE\_BATTLE\_VICTORY\_SCORE | 50 | # How many occupation "points" each country receives after winning a defensive battle |
| OCCUPATION\_STATE\_CLEAR\_OCCUPATION\_FRACTION | 0.5 | # Fraction of occupation score dedicated to clear occupation from your own States (if any). |
| LAND\_INVASION\_TRAVEL\_TIME\_LIMIT\_DAYS | 30 | # How many days formation can travel at most for a land invasion |
| LAND\_INVASION\_PREPARATION\_DURATION\_DAYS | 14 | # How many days should pass since the first army arrived to the invasion front to start advancing it |
| NAVAL\_INVASION\_PREPARATION\_DURATION\_DAYS | 14 | # How many days should pass since the first army arrived to the naval invasion front to start advancing it without the sea node being blocked by enemy fleet |
| LAND\_INVASION\_MAX\_LAND\_BATTLE\_DEFEATS\_AT\_ZERO\_OCCUPATION | 3 | # At this number of land defeats with zero occupation you fail the invasion |
| NAVAL\_INVASION\_MAX\_LAND\_BATTLE\_DEFEATS\_AT\_ZERO\_OCCUPATION | 3 | # At this number of land defeats with zero occupation you fail the naval invasion. |
| NAVAL\_INVASION\_MIN\_POWER\_PROJECTION\_RATIO\_TO\_BLOCK\_LANDING | 0.25 | # How powerful a fleet must be to be considered as "blocking" a naval invading flee |
| STATE\_CONQUEST\_HOMELAND\_AND\_CLAIM\_RADICALIZATION | 0.1 |  |
| STATE\_CONQUEST\_HOMELAND\_AND\_CLAIM\_DEMILITARIZATION | 0.25 |  |
| STATE\_CONQUEST\_HOMELAND\_OR\_CLAIM\_RADICALIZATION | 0.3 |  |
| STATE\_CONQUEST\_HOMELAND\_OR\_CLAIM\_DEMILITARIZATION | 0.5 |  |
| STATE\_CONQUEST\_DEFAULT\_RADICALIZATION | 0.5 |  |
| STATE\_CONQUEST\_DEFAULT\_DEMILITARIZATION | 0.75 |  |
| STATE\_PEACEFUL\_ANNEXATION\_RADICALIZATION\_FACTOR | 0.25 | # If the state was annexed due to an accepted diplomatic demand by the overlord, multiply by this |
| STATE\_CONQUEST\_KEEP\_ALL | 0.0 |  |
| NUM\_PROVINCES\_FOR\_ADVANCEMENT\_SELECTION | 5 | # After having computed weights for possible advancement provinces using front\_battle\_province\_weight, filter out all but the X top weighted provinces. This is done to prevent randomly selecting an element that had a low weight. |
### TravelNetwork
| Define | Default Value | Dev Comment |
| ARMY\_CONNECTION\_UNDEVELOPED\_COST\_MULT | 2.0 | # Travel cost multiplier for undeveloped land connections |
| ARMY\_CONNECTION\_UNDEVELOPED\_HARSH\_COST\_MULT | 4.0 | # Travel cost multiplier for undeveloped land connections in harsh environments (deserts, mountains, etc) |
| ARMY\_CONNECTION\_DIRT\_ROAD\_COST\_MULT | 1.5 | # Travel cost multiplier for dirt road land connections |
| ARMY\_CONNECTION\_HARDENED\_ROAD\_COST\_MULT | 1.25 | # Travel cost multiplier for hardened road land connections |
| ARMY\_CONNECTION\_RAILWAY\_COST\_MULT | 1.0 | # Travel cost multiplier for railway land connections |
| ARMY\_CONNECTION\_CHARTED\_COST\_MULT | 1.0 | # Travel cost multiplier for ocean/coastal water connections |
| ARMY\_CONNECTION\_CANAL\_COST\_MULT | 1.0 | # Travel cost multiplier for channel water connections |
| ARMY\_CONNECTION\_STRAIT\_CROSSING\_COST\_MULT | 4.0 | # Travel cost multiplier for strait-crossing connection |
| ARMY\_DIRECT\_CONNECTION\_COST\_MULT | 10.0 | # Travel cost multiplier for traveling in a direct line from/to a position on the map (without a travel node connection) |
| ARMY\_CONNECTION\_DOCKING\_COST | 300 | # Fixed docking/undocking cost for going from a harbor node to a port node (overrides docking connection length) |
| ARMY\_CONNECTION\_STRAIT\_CROSSING\_COST | 100 | # Fixed additional cost for crossing a strait connection |
| FLEET\_CONNECTION\_UNDEVELOPED\_COST\_MULT | 100.0 | # Travel cost multiplier for undeveloped land connections (unused by fleets) |
| FLEET\_CONNECTION\_UNDEVELOPED\_HARSH\_COST\_MULT | 100.0 | # Travel cost multiplier for undeveloped land connections in harsh environments (deserts, mountains, etc) (unused by fleets) |
| FLEET\_CONNECTION\_DIRT\_ROAD\_COST\_MULT | 100.0 | # Travel cost multiplier for dirt road land connections (unused by fleets) |
| FLEET\_CONNECTION\_HARDENED\_ROAD\_COST\_MULT | 100.0 | # Travel cost multiplier for hardened road land connections (unused by fleets) |
| FLEET\_CONNECTION\_RAILWAY\_COST\_MULT | 100.0 | # Travel cost multiplier for railway land connections (unused by fleets) |
| FLEET\_CONNECTION\_CHARTED\_COST\_MULT | 1.0 | # Travel cost multiplier for ocean/coastal water connections |
| FLEET\_CONNECTION\_CANAL\_COST\_MULT | 1.0 | # Travel cost multiplier for channel water connections |
| FLEET\_CONNECTION\_STRAIT\_CROSSING\_COST\_MULT | 100.0 | # Travel cost multiplier for strait-crossing connection (unused by fleets) |
| FLEET\_DIRECT\_CONNECTION\_COST\_MULT | 4.0 | # Travel cost multiplier for traveling in a direct line from/to a position on the map (without a travel node connection) |
| FLEET\_CONNECTION\_DOCKING\_COST | 10 | # Fixed docking/undocking cost for going from a harbor node to a port node (overrides docking connection length) |
| FLEET\_CONNECTION\_STRAIT\_CROSSING\_COST | 100 | # Fixed additional cost for crossing a strait connection (unused by fleets) |
| DIRECT\_CONNECTION\_NODE\_MAX\_NODES | 10 | # Only search the closest X travel nodes for direct line map travel |
| DIRECT\_CONNECTION\_NODE\_SEARCH\_DISTANCE | 1200 | # Default distance allowed to pathfind in a direct line from a (start/target) map point to a travel node (if no valid are found, it is expanded) |
| DIRECT\_CONNECTION\_MAP\_MAX\_DISTANCE | 200 | # Maximum distance allowed to pathfind in a direct line between start and target map points directly |
| STRAIT\_CROSSING\_NODE\_CREATION\_DISTANCE | 5 | # Minimum distance between travel nodes, when considering to insert a new travel node for strait-connection |
| FORMATION\_REPATH\_MAX\_DAYS\_EXTRA | 60 | # Maximum nr of days an automatic formation re-pathing may take (when travel access changes in ongoing travel) |
| HARSH\_ENVIRONMENT\_TERRAIN\_LABEL | "label\_travel\_harsh\_environment" | # Terrain label which marks nodes in them as being in harsh environment, triggering 'UNDEVELOPED\_HARSH' connection type |
| PAVED\_ROAD\_TECH | "paved\_roads" | # Technology required for paved roads |
| PAVED\_ROAD\_MIN\_INFRASTRUCTURE | 500.0 | # Minimum infrastructure for paved roads |
### HarvestConditions
| Define | Default Value | Dev Comment |
| HARVEST\_CONDITION\_CHANCE\_THRESHOLD | 0.2 | # If the rolled value is higher than that we early out and skip the chance calculations |
| HARVEST\_CONDITION\_PERIOD | 3 | # At what period in months do we check each state to spawn harvest conditions. 1 = all states are checked every month, 3 = all states are checked over three months |
### Text
| Define | Default Value | Dev Comment |
| DURATION\_SHOW\_YEARS\_THRESHOLD | 1105 | # Duration will show as years if it's at least this many days |
| DURATION\_SHOW\_MONTHS\_THRESHOLD | 100 | # Duration will show as months if it's at least this many days |
| DURATION\_SHOW\_WEEKS\_THRESHOLD | 15 | # Duration will show as weeks if it's at least this many days |
### Debug
| Define | Default Value | Dev Comment |
| CASUALTY\_LOG\_EXPIRE\_TIME\_DAYS | 30 | # Casualty log for units and buildings will be cleaned after this amount of days |
| CASUALTY\_LOG\_NUM\_LAST\_ENTRIES\_VISIBLE | 10 | # Max amount of casualty events that are shown in casualty log lists |
| OCCUPATION\_TOOL\_DELTA | 0.25 | # How much occupation percentage is increased/decreased by OccupationTool |
## 00\_ai
### AI
Defines affecting AI behavior.

| Define | Default Value | Dev Comment |
| DEFAULT\_STRATEGY\_STRING | "ai\_strategy\_default" |  |
| STRATEGY\_RANDOM\_FACTOR | 20.0 | # The higher this is, the more random AI strategy selection will be |
| TICKS\_FOR\_FULL\_SPENDING\_VARIABLES\_UPDATE | 100 | # The higher this is, the less often AIs will fully refresh their spending variables |
| NUM\_FAILED\_MONEY\_SPENDING\_ATTEMPTS\_FOR\_UPDATE | 50 | # After this many failed attempts to change money spending/construct government buildings, force an update of money spending priorities |
| NUM\_FAILED\_AUTHORITY\_SPENDING\_ATTEMPTS\_FOR\_UPDATE | 20 | # After this many failed attempts to change authority spending, force an update of authority spending priorities |
| ``` # When a potential AI building spending has its state calculcated, add a randomly set number of ticks between these two values for when to update it again # Before this amount of ticks has passed, unless there is a specific reason to update the state, we only update the score and keep the state the same ``` | | |
| MIN\_TICKS\_TO\_UPDATE\_BUILDING\_SPENDING\_STATE | 100 |  |
| MAX\_TICKS\_TO\_UPDATE\_BUILDING\_SPENDING\_STATE | 200 |  |
| MIN\_SUBJECT\_TYPE\_VALUE | 1 | # ai\_value for a subject type is never below this |
| GOVERNMENT\_MONEY\_SPENDING\_ENABLED | yes | # If this is set to no, the AI for government money spending will be disabled |
| GOVERNMENT\_AUTHORITY\_SPENDING\_ENABLED | yes | # If this is set to no, the AI for authority spending will be disabled |
| TAX\_LEVEL\_CHANGES\_ENABLED | yes | # If this is set to no, the AI will not change its tax levels (but might still use consumption taxes if GOVERNMENT\_AUTHORITY\_SPENDING\_ENABLED = yes) |
| PRODUCTION\_BUILDING\_CONSTRUCTION\_ENABLED | yes | # If this is set to no, the country-level AI will not construct any production buildings |
| AUTONOMOUS\_INVESTMENT\_CONSTRUCTION\_ENABLED | yes | # If this is set to no, the autonomous investment AI won't construct anything even if the game rule for it is enabled |
| CHANGE\_STRATEGY\_THRESHOLD | 100 | # At this threshold of 'change points', the AI will roll a new strategy |
| CHANGE\_STRATEGY\_INCREASE\_WEEKLY\_CHANCE | 20 | # Chance per week of AI gaining a 'change point' towards rolling a new strategy (1 = 1%) |
| CHANGE\_STRATEGY\_POLITICAL\_NEW\_RULER | 100 | # How many 'change points' are added to each strategy when a country gets a new ruler |
| CHANGE\_STRATEGY\_POLITICAL\_REGIME\_CHANGE | 100 | # How many 'change points' are added to each strategy when a country is the target of a regime change |
| CHANGE\_STRATEGY\_POLITICAL\_LAW\_ENACTED | 25 | # How many 'change points' are added to politics strategy when a law is enacted |
| CHANGE\_STRATEGY\_DIPLOMATIC\_STATE\_GAINED\_OR\_LOST | 10 | # How many 'change points' are added to diplomatic strategy when a state is acquired or lost |
| CHANGE\_STRATEGY\_DIPLOMATIC\_UNIFICATION\_CANDIDATE | 100 | # How many 'change points' are added to diplomatic strategy when we become or stop being a unification candidate |
| CHANGE\_STRATEGY\_DIPLOMATIC\_LIBERTY\_DESIRE\_CHANGE | 2 | # How many 'change points' are added to diplomatic strategy when liberty desire changes (multiplied by size of the change) |
| COUNTRY\_GOAL\_STRATEGIC\_UPDATE\_COUNT | 5 | # How many AIs have their protector scores set every day |
| COUNTRY\_GOAL\_ADJUSTMENT\_UPDATE\_COUNT | 50 | # How many AIs have their antagonize/befriend/threat scores, neighbor/relevance status and attitude adjusted each day |
| DECLARE\_BANKRUPTCY\_MIN\_DAYS\_IN\_DEFAULT | 30 | # After this many days in default, the AI will declare bankruptcy |
| DECLARE\_BANKRUPTCY\_COOLDOWN\_DAYS | 365 | # If AI declares bankruptcy, don't do it again for this many days as chain bankruptcies will radicalize everyone |
| BASE\_AGGRESSION | 0.25 | # Base chance that AI will consider starting a diplo play each time the goal is checked (1 = 1%) |
| UNIFICATION\_AGGRESSION\_MULT\_HIGHER\_TIER | 20 | # AI aggression is multiplied by this for calculating whether they should try to start a unification/leadership play, if the country would end up forming a nation of a higher tier |
| UNIFICATION\_AGGRESSION\_MULT\_SAME\_TIER | 0.1 | # AI aggression is multiplied by this for calculating whether they should try to start a unification/leadership play, if the country would end up forming a nation of the same tier |
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
| OBLIGATION\_RECENTLY\_REPUDIATED\_DESIRE\_MULT | 0.1 | # Multiply AI's desire for an obligation by this if the offering country has recently repudiated another obligation |
| DIPLO\_ACCEPTANCE\_CALL\_IN\_OBLIGATION | 50 | # Add this acceptance to diplo action when calling in an obligation |
| DIPLO\_ACCEPTANCE\_CALL\_IN\_OBLIGATION\_RECENTLY\_REPUDIATED | 25 | # Add this acceptance instead of the above to diplo action when calling in an obligation if we've recently repudiated another obligation |
| DIPLO\_BREAK\_PACT\_WEIGHT | 1000 |  |
| DIPLOMATIC\_DEMAND\_ALWAYS\_ACCEPT\_THRESHOLD | 100 | # At this amount of acceptance, the AI will always give in to diplomatic demands. If it's less than this but above 0, there is a scaled random chance of accepting. |
| DIPLOMATIC\_DEMAND\_DAYS\_LEFT\_MAX | 13 | # AI will not answer a demand when it has more than this amount of days left (should map to DIPLOMATIC\_DEMAND\_PENDING\_APPROVAL\_DAYS) |
| DIPLOMATIC\_DEMAND\_DAYS\_LEFT\_MIN | 7 | # AI will always answer a demand when it has this or less amount of days left (should map to DIPLOMATIC\_DEMAND\_PENDING\_APPROVAL\_DAYS) |
| DIPLOMATIC\_DEMAND\_ANSWER\_CHANCE | 10 | # Chance per tick of AI answering a demand (1 = 1%) |
| DIPLOMATIC\_DEMAND\_ACCEPTANCE\_BASE | -50 |  |
| DIPLOMATIC\_DEMAND\_ACCEPTANCE\_WARGOAL\_IMPACT | -1 | # Scales with maneuver cost of demanded wargoal |
| DIPLOMATIC\_DEMAND\_ACCEPTANCE\_MILITARY\_POWER\_SCALE | 4.0 | # At this amount of relative expected military power, max/min value of DIPLOMATIC\_DEMAND\_ACCEPTANCE\_MILITARY\_POWER\_FACTOR is applied |
| DIPLOMATIC\_DEMAND\_ACCEPTANCE\_MILITARY\_POWER\_FACTOR | 100 | # Scales with relative expected military power of the demanding country in a potential play, maximum is this value and minimum is this value \* -1 |
| DIPLOMATIC\_DEMAND\_ACCEPTANCE\_INCORPORATED\_STATE\_FACTOR | -25 | # Added to acceptance if the wargoal is demanding they cede an incorporated state |
| DIPLOMATIC\_DEMAND\_ACCEPTANCE\_SUBJUGATION\_FACTOR | 0.5 | # Multiplied by country's desire to become a subject of the specified type if the wargoal is demanding subjugation |
| DIPLOMATIC\_DEMAND\_ACCEPTANCE\_ANNEXATION\_FACTOR | -75 | # Added to acceptance if the wargoal is demanding their full annexation |
| DIPLOMATIC\_DEMAND\_ACCEPTANCE\_LOYAL\_SUBJECT\_FACTOR | 75 | # Added to acceptance for demands by overlords against loyal subjects |
| INFLUENCE\_DEFICIT\_RECOVER\_INFLUENCE\_BASE\_VALUE | 50 | # Added to score for the treaty or pact we're breaking to recover influence |
| INFLUENCE\_DEFICIT\_RECOVER\_INFLUENCE\_RANDOM\_FACTOR | 1.0 | # The higher this is, the more random AI pact/treaty breaking due to influence deficit will be |
| INFLUENCE\_DEFICIT\_RECOVER\_INFLUENCE\_OVER\_SPENDING\_LIMIT\_MULT | 0.1 | # AI multiplies the value of pacts that are over their action-type spending limit by this when in an Influence deficit |
| MIN\_AVAILABLE\_LABOR\_FOR\_NEW\_BUILDING | 5000 | # If state has less than this in available labor, we should be much less likely to build something (multiplied by 1 + number of ongoing constructions) |
| ``` # Formations with fewer units than whichever is smaller of these three values should not have a commander recruited for them ``` | | |
| MIN\_COMBAT\_UNITS\_FOR\_COMMANDER\_ABSOLUTE | 5 | # Absolute number of combat units |
| MIN\_COMBAT\_UNITS\_FOR\_COMMANDER\_ABSOLUTE\_MARINES | 3 | # Absolute number of combat units in a marine-tagged formation, less than or equal to the above |
| MIN\_COMBAT\_UNITS\_FOR\_COMMANDER\_RELATIVE | 0.2 | # Number of combat units relative to total army size |
| ``` # Formations with at least the number of units than whichever is smaller of these two values should always have at least two commanders, so they can be dynamically split to cover multiple fronts ``` | | |
| MIN\_COMBAT\_UNITS\_FOR\_MULTIPLE\_COMMANDERS\_ABSOLUTE | 10 | # Absolute number of combat units |
| MIN\_COMBAT\_UNITS\_FOR\_MULTIPLE\_COMMANDERS\_RELATIVE | 0.5 | # Number of combat units relative to total army size |
| RETIRE\_COMMANDER\_INTERACTION\_KEY | "retire\_commander" | The AI will use this character interaction to retire excessive commanders |
| COMMANDER\_DESIRED\_RANK\_DISPARITY\_IN\_ARMY | 1 | # Prefer promoting over recruiting new commanders if there isn't at least this rank disparity between any two generals in an army |
| COMMANDER\_DESIRED\_RANK\_DISPARITY\_IN\_FLEET | 1 | # Prefer promoting over recruiting new commanders if there isn't at least this rank disparity between any two admirals in a fleet |
| RECRUITABLE\_COMMANDER\_BASE\_SCORE | 100 | # The base score assigned to each recruitable commander in the pool |
| RECRUITABLE\_COMMANDER\_RANDOM\_FACTOR | 3.0 | # The higher this is, the more random AI recruitment selection will be |
| RECRUITABLE\_COMMANDER\_SKILL\_TRAIT\_SCORE | 25 | # A recruitable commander's total value of skill traits is multiplied by this |
| RECRUITABLE\_COMMANDER\_PERSONALITY\_TRAIT\_SCORE | 0 | # A recruitable commander's total value of personality traits is multiplied by this |
| RECRUITABLE\_COMMANDER\_CONDITION\_TRAIT\_SCORE | -25 | # A recruitable commander's total value of condition traits is multiplied by this |
| RECRUITABLE\_COMMANDER\_FAVORED\_IG\_FACTOR | 1.5 | # If a recruitable commander comes from an IG the AI likes, multiply score by this |
| RECRUITABLE\_COMMANDER\_DISFAVORED\_IG\_FACTOR | 0.5 | # If a recruitable commander comes from an IG the AI dislikes, multiply score by this |
| MOBILIZATION\_OPTION\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random AI is about which mobilization options to activate |
| MOBILIZATION\_OPTION\_MONEY\_COST\_FACTOR | 20 | # When checking whether the AI should activate a mobilization option, the monetary cost of activation is multiplied by this and compared against AI value to determine if it's worth it |
| MOBILIZATION\_OPTION\_NUM\_ACTIVE\_OPTIONS\_DIVISOR | 0.25 | # Divide the value of each non-activated mobilization option by ( 1 + number of already active options \* this ) |
| MOBILIZATION\_OPTION\_GOODS\_SHORTAGE\_MULT | 0.0 | # Multiply value of mobilization option by this if there is a goods shortage of any of its input goods |
| MOBILIZATION\_BASE\_DESIRED\_RATIO\_TO\_ENEMY | 0.5 | # AI wants to have a total amount of mobilized army power that is equal to enemy mobilized army power \* this |
| MOBILIZATION\_MAIN\_ATTACKER\_ADDED\_RATIO | 1.0 | # Add this to desired ratio for the main attacker in the war |
| MOBILIZATION\_MAIN\_DEFENDER\_ADDED\_RATIO | 1.0 | # Add this to desired ratio for the main defender in the war |
| MOBILIZATION\_LOYAL\_SUBJECT\_OF\_MAIN\_PARTICIPANT\_ADDED\_RATIO | 0.75 | # Add this to desired ratio for loyal subjects of main attacker/defender in the war |
| MOBILIZATION\_PEACE\_NEGOTIATOR\_ADDED\_RATIO | 0.5 | # Add this to desired ratio for any country that is or would become a peace negotiator (but isn't main attacker or defender) |
| MOBILIZATION\_LOCAL\_FRONTS\_ADDED\_RATIO | 0.5 | # Add this to desired ratio for any country that has least one local front |
| MOBILIZATION\_UNINCORPORATED\_OCCUPATION\_ADDED\_RATIO | 0.5 | # Add this to desired ratio for any country whose unincorporated states are being occupied |
| MOBILIZATION\_INCORPORATED\_OCCUPATION\_ADDED\_RATIO | 1.0 | # Add this to desired ratio for any country whose incorporated states are being occupied (overrides multiplier for unincorporated occupation) |
| MOBILIZATION\_EXISTENTIAL\_WAR\_FACTOR | 2.0 | # If the AI is in an existential war/diplo play (could cease to exist after peace), add this to its desired mobilization ratio |
| MOBILIZATION\_MINOR\_ALLY\_MAX\_RELATIVE\_POWER | 0.15 | # To be counted as a minor ally, a country must have equal or less than this amount of the alliance's total combat power. It must also have no fronts. |
| MOBILIZATION\_MINOR\_ALLY\_ADVANTAGE\_TO\_NOT\_MOBILIZE | 2.0 | # If a minor ally's side in the conflict has at least this army power advantage when their forces are not counted in, don't bother mobilizing |
| MOBILIZATION\_MIN\_ESCALATION\_START | 50 | # Before this amount of escalation in a play, AI will only mobilize as a response to the enemy mobilizing (base) |
| MOBILIZATION\_MIN\_ESCALATION\_BOLDNESS\_FACTOR | 0.2 | # Boldness is multiplied by this and subtracted from MOBILIZATION\_MIN\_MOBILIZATION\_ESCALATION\_START |
| MOBILIZATION\_MIN\_MOBILIZATION\_PEACE\_NEGOTIATOR | 0.15 | # AI will always mobilize at least this amount of forces if they are or would become a peace negotiator |
| MOBILIZATION\_MIN\_MOBILIZATION\_LOYAL\_SUBJECT\_OF\_MAIN\_PARTICIPANT | 0.15 | # AI will always mobilize at least this amount of forces if they are a loyal subject of main attacker/defender |
| MOBILIZATION\_MIN\_MOBILIZATION\_TERRITORIAL\_RISK | 0.15 | # AI will always mobilize at least this amount of forces if they might lose territory from the war/play |
| MOBILIZATION\_MIN\_MOBILIZATION\_UNINCORPORATED\_OCCUPATION | 0.25 | # AI will always mobilize at least this amount of forces if their unincorporated states are occupied |
| MOBILIZATION\_MIN\_MOBILIZATION\_INCORPORATED\_OCCUPATION | 0.5 | # AI will always mobilize at least this amount of forces if their incorporated states are occupied (overrides the multiplier for unincorporated occupation) |
| MOBILIZATION\_MIN\_MOBILIZATION\_LOCAL\_FRONTS | 0.25 | # AI will always mobilize at least this amount of forces if they have any local fronts |
| MOBILIZATION\_MIN\_MOBILIZATION\_CONTAINMENT\_WAR | 1.0 | # AI will always mobilize at least this amount of forces if fighting in a containment war |
| CONSCRIPTION\_INSUFFICIENT\_FORCES\_FACTOR | 1 | # For each 1% of mobilization the AI isn't able to meet, raise a base of 1% \* this conscripts |
| CONSCRIPTION\_RELATIVE\_CONSCRIPTED\_COMBAT\_POWER\_DIVISOR | 1 | # Conscripted forces fraction of combat power is multiplied by this, then the result of CONSCRIPTION\_INSUFFICIENT\_FORCES\_FACTOR is divided by (1 + the result) |
| CONSCRIPTION\_SMALL\_STANDING\_ARMY\_THRESHOLD | 0.75 | # An AI whose conscripted combat power is above this fraction of total combat power is affected by the below factor |
| CONSCRIPTION\_SMALL\_STANDING\_ARMY\_MIN\_CONSCRIPTS\_FACTOR | 0.02 | # For each 1% the conscripted combat power fraction above CONSCRIPTION\_SMALL\_STANDING\_ARMY\_THRESHOLD, always raise at last this fraction of conscripts |
| MIN\_GOVERNMENT\_LEGITIMACY | 25 | # If legitimacy is below this, consider adding IGs we don't really like to the government |
| DESIRED\_GOVERNMENT\_LEGITIMACY | 50 | # Apply a bonus to the score of governments which have at least this much legitimacy |
| REFORM\_GOVERNMENT\_MONTHS\_BETWEEN\_CHANGES | 30 | # If the AI doesn't have elections, it won't consider changing government composition more often than this to avoid lots of radicals |
| REFORM\_GOVERNMENT\_NUM\_OPTIONS\_TO\_CHECK | 5 | # How many top legitimacy possible government constellations will the AI consider |
| REFORM\_GOVERNMENT\_STICKINESS | 1.25 | # Multiply score of the current government by this when checking whether to reform the government |
| REFORM\_GOVERNMENT\_PRO\_IG\_CLOUT\_FACTOR | 1.0 | # When scoring IGs for putting in government, add to the score multiplier (scaled by clout) |
| REFORM\_GOVERNMENT\_ANTI\_IG\_CLOUT\_FACTOR | 10.0 | # When scoring IGs for putting in government, add to the score divisor (scaled by clout) |
| REFORM\_GOVERNMENT\_ABOVE\_DESIRED\_LEGITIMACY\_FACTOR | 1.5 | # Multiply score of governments that meet the desired legitimacy threshold by this |
| REFORM\_GOVERNMENT\_BELOW\_MIN\_LEGITIMACY\_FACTOR | 0.1 | # If a government option has less than MIN\_GOVERNMENT\_LEGITIMACY, multiply its score by this |
| MAX\_CANDIDATES\_TO\_COMBINE\_FOR\_GOVERNMENT\_ALTERNATIVES | 8 | # Max number of interest groups or parties to combine when checking government alternatives. 8 will give 2^8=256 possible governments. Higher values will affect performance exponentially |
| REGIME\_CHANGE\_NUM\_GOVERNMENT\_OPTIONS\_TO\_CHECK | 100 | # Replaces REFORM\_GOVERNMENT\_NUM\_OPTIONS\_TO\_CHECK when attempting to form a government during a regime change - it's fine for this value to be very high as it's executed rarely |
| REGIME\_CHANGE\_MIN\_GOVERNMENT\_LEGITIMACY | 5 | # Replaces MIN\_GOVERNMENT\_LEGITIMACY when scoring IGs for government in a regime change |
| REGIME\_CHANGE\_REFORM\_GOVERNMENT\_STICKINESS | 0.1 | # Replaces REFORM\_GOVERNMENT\_STICKINESS when scoring IGs for government in a regime change |
| REGIME\_CHANGE\_REFORM\_GOVERNMENT\_CLOUT\_FACTOR\_MULTIPLIER | 100.0 | # When scoring IGs for government in a regime change, multiply pro/anti AI clout factors by this |
| IDEOLOGICAL\_OPINION\_ACCEPTABLE\_PROGRESSIVENESS\_DIFFERENCE | 25 | # If progressiveness difference between two countries is this or less, add positive ideological opinion, otherwise add negative |
| IDEOLOGICAL\_OPINION\_CURRENT\_PROGRESSIVENESS\_SAME\_FACTOR | 2.5 | # Applied for each law group where current progressiveness difference is less than or equal to IDEOLOGICAL\_OPINION\_ACCEPTABLE\_PROGRESSIVENESS\_DIFFERENCE |
| IDEOLOGICAL\_OPINION\_CURRENT\_PROGRESSIVENESS\_DIFF\_FACTOR | -0.05 | # Progressiveness difference of currently enacted law in each group is weighted by this amount for ideological opinion where current progressiveness difference is above IDEOLOGICAL\_OPINION\_ACCEPTABLE\_PROGRESSIVENESS\_DIFFERENCE |
| IDEOLOGICAL\_OPINION\_IDEAL\_PROGRESSIVENESS\_SAME\_FACTOR | 2.5 | # Applied for each law group where current progressiveness difference is less than or equal to IDEOLOGICAL\_OPINION\_ACCEPTABLE\_PROGRESSIVENESS\_DIFFERENCE |
| IDEOLOGICAL\_OPINION\_IDEAL\_PROGRESSIVENESS\_DIFF\_FACTOR | -0.05 | # Progressiveness difference of government's ideal law in each group is weighted by this amount for ideological opinion where ideal progressiveness difference is above IDEOLOGICAL\_OPINION\_ACCEPTABLE\_PROGRESSIVENESS\_DIFFERENCE |
| UNIFICATION\_MIN\_SUPPORT\_SCORE | 50 | # Support for one country-formation candidate needs to be at least this much above all competitors to support unification |
| UNIFICATION\_BASE\_VALUE | 0 |  |
| UNIFICATION\_SUPPORT\_INVALID\_TARGET\_FACTOR | -1000 | # Unification support factor when country isn't a valid target for the unification play |
| UNIFICATION\_SUPPORTER\_DEFAULT\_RANK\_VALUE | 4 | # Rank value is compared to this value for computing supporter rank factor |
| UNIFICATION\_SUPPORTER\_RANK\_FACTOR | -10 | # Multiplied by rank value delta to supporter default rank |
| UNIFICATION\_CANDIDATE\_DEFAULT\_RANK\_VALUE | 6 | # Rank value is compared to this value for computing candidate rank factor |
| UNIFICATION\_CANDIDATE\_RANK\_FACTOR | 10 | # Multiplied by rank value delta to candidate default rank |
| UNIFICATION\_RELATIONS\_HOSTILE\_FACTOR | -50 |  |
| UNIFICATION\_RELATIONS\_COLD\_FACTOR | -25 |  |
| UNIFICATION\_RELATIONS\_POOR\_FACTOR | -10 |  |
| UNIFICATION\_RELATIONS\_CORDIAL\_FACTOR | 10 |  |
| UNIFICATION\_RELATIONS\_AMICABLE\_FACTOR | 25 |  |
| UNIFICATION\_RELATIONS\_FRIENDLY\_FACTOR | 50 |  |
| UNIFICATION\_ATTITUDE\_DISINTERESTED\_FACTOR | -25 |  |
| UNIFICATION\_ATTITUDE\_CAUTIOUS\_FACTOR | -25 |  |
| UNIFICATION\_ATTITUDE\_CONCILIATORY\_FACTOR | 0 |  |
| UNIFICATION\_ATTITUDE\_COOPERATIVE\_FACTOR | 25 |  |
| UNIFICATION\_ATTITUDE\_GENIAL\_FACTOR | 50 |  |
| UNIFICATION\_ATTITUDE\_WARY\_FACTOR | -50 |  |
| UNIFICATION\_ATTITUDE\_BELLIGERENT\_FACTOR | -100 |  |
| UNIFICATION\_ATTITUDE\_ANTAGONISTIC\_FACTOR | -100 |  |
| UNIFICATION\_ATTITUDE\_LOYAL\_FACTOR | 100 |  |
| UNIFICATION\_ATTITUDE\_ALOOF\_FACTOR | 25 |  |
| UNIFICATION\_ATTITUDE\_DEFIANT\_FACTOR | -50 |  |
| UNIFICATION\_ATTITUDE\_REBELLIOUS\_FACTOR | -100 |  |
| UNIFICATION\_ATTITUDE\_PROTECTIVE\_FACTOR | -50 |  |
| UNIFICATION\_ATTITUDE\_DOMINEERING\_FACTOR | -100 |  |
| UNIFICATION\_POWER\_BLOC\_FACTOR | 25 | # Added to the unification support if both countries are in the same power bloc |
| STRATEGIC\_REGION\_STANCES\_RANDOM\_FACTOR | 1 |  |
| STRATEGIC\_REGION\_STANCES\_STICKINESS | 2 | # Multiplied by current stance score when checking whether to change stance |
| CHANGE\_TAX\_START\_OF\_GAME\_DAYS\_TO\_WAIT | 30 | # Don't change any tax levels for this amount of days after bookmark initialization, so that economic state has a chance to stabilize |
| CHANGE\_TAX\_SIGNIFICANT\_DEBT\_THRESHOLD | 0.1 | # At this amount of debt to max credit ratio, the logic for 'significant debt' outlined below kicks in |
| RAISE\_TAX\_TO\_DESIRED\_INCOME\_THRESHOLD | 1.25 | # If income to expenses ratio is this or below, and tax level is below desired level, raise taxes |
| RAISE\_TAX\_ABOVE\_DESIRED\_INCOME\_MAX\_GOLD\_RESERVES\_THRESHOLD | 0.1 | # If gold reserves are at least this full, don't raise taxes above desired level |
| RAISE\_TAX\_ABOVE\_DESIRED\_INCOME\_NO\_DEBT\_THRESHOLD | 0.9 | # If income to expenses ratio is this or below, there is no or little debt, and tax level is at or above desired level, raise taxes |
| RAISE\_TAX\_ABOVE\_DESIRED\_INCOME\_WITH\_DEBT\_THRESHOLD | 1.1 | # If income to expenses ratio is this or below, there is significant debt, and tax level is at or above desired level, raise taxes |
| LOWER\_TAX\_TO\_DESIRED\_INCOME\_NO\_DEBT\_THRESHOLD | 1.25 | # If income to expenses ratio is this or above, there is no or little debt, and tax level is at or above desired level, raise taxes |
| LOWER\_TAX\_TO\_DESIRED\_INCOME\_WITH\_DEBT\_THRESHOLD | 1.5 | # If income to expenses ratio is this or above, there is significant debt, and tax level is at or above desired level, raise taxes |
| LOWER\_TAX\_BELOW\_DESIRED\_INCOME\_THRESHOLD | 2.0 | # If income to expenses ratio is this or above and tax level below desired level, raise taxes |
| RAISE\_TAX\_HIGH\_DEBT\_OVERRIDE\_RATIO | 0.5 | # At this amount of debt, any level of tax is OK to deal with it |
| CONSTRUCTION\_MAX\_NUM\_PRODUCTION\_BUILDING\_CONSTRUCTIONS\_BASE | 1 | # If country has this number of production building constructions queued, don't add anymore (base) |
| CONSTRUCTION\_MAX\_NUM\_PRODUCTION\_BUILDING\_CONSTRUCTIONS\_SCALED | 0.05 | # If country has this number of production building constructions queued, don't add anymore (scaled by construction production) |
| CONSTRUCTION\_MAX\_NUM\_PRODUCTION\_BUILDING\_CONSTRUCTIONS\_SCALED\_MAX | 999 | # CONSTRUCTION\_MAX\_NUM\_PRODUCTION\_BUILDING\_CONSTRUCTIONS\_SCALED can't be higher than this |
| CONSTRUCTION\_MAX\_NUM\_GOVERNMENT\_BUILDING\_CONSTRUCTIONS\_BASE | 1 | # If country has this number of government building constructions queued, don't add anymore (base) |
| CONSTRUCTION\_MAX\_NUM\_GOVERNMENT\_BUILDING\_CONSTRUCTIONS\_SCALED | 0.05 | # If country has this number of government building constructions queued, don't add anymore (scaled by construction production) |
| CONSTRUCTION\_MAX\_NUM\_GOVERNMENT\_BUILDING\_CONSTRUCTIONS\_SCALED\_MAX | 99 | # CONSTRUCTION\_MAX\_NUM\_GOVERNMENT\_BUILDING\_CONSTRUCTIONS\_SCALED can't be higher than this |
| CONSTRUCTION\_RESERVES\_NEW\_CONSTRUCTIONS | 0.1 | # If gold reserves are less than this after adding the cost of a new construction, don't queue it |
| CONSTRUCTION\_DEBT\_RESUME | 0.2 | # If constructions are paused, resume once debt is this low relative to ceiling |
| CONSTRUCTION\_DEBT\_PAUSE | 0.4 | # If in this much relative debt to debt ceiling, pause all non-critical constructions |
| CONSTRUCTION\_DEBT\_RESUME\_CRITICAL\_CONSTRUCTION | 0.95 | # If critical constructions are paused, resume once debt is this low relative to ceiling |
| CONSTRUCTION\_DEBT\_PAUSE\_CRITICAL\_CONSTRUCTION | 0.99 | # If in this much relative debt to debt ceiling, pause all critical constructions |
| CONTAINMENT\_PLAY\_PARTICIPATION\_RANK | 7 | # Ranks of this value or above should be keen on joining containment plays to beat down threats |
| START\_DIPLO\_PLAY\_RANDOM\_FACTOR | 2.0 | # The higher this is, the more random AI will be on where to target when starting diplo plays |
| START\_DIPLO\_PLAY\_ALLY\_STRENGTH\_WEIGHT | 0.75 | # Consider participants that will for sure join a side with this amount of their forces |
| START\_DIPLO\_PLAY\_LIKELY\_ALLY\_STRENGTH\_WEIGHT | 0.5 | # Consider participants that will likely to join a side with this amount of their forces |
| DIPLO\_PLAY\_BACK\_DOWN\_CHANCE\_THRESHOLD | 0 | # If ( confidence + boldness ) is less than this, consider backing down |
| DIPLO\_PLAY\_BACK\_DOWN\_CHANCE\_ESCALATION | 30 | # Above this escalation, AI will consider backing down |
| DIPLO\_PLAY\_BACK\_DOWN\_INCREASE\_CHANCE\_THRESHOLD | -50 | # If ( confidence + boldness ) is less than this, increase the chance of backing down |
| DIPLO\_PLAY\_BACK\_DOWN\_INCREASE\_CHANCE\_MULTIPLIER | 4.0 | # If ( confidence + boldness ) is less than DIPLO\_PLAY\_BACK\_DOWN\_INCREASE\_CHANCE\_THRESHOLD, increase the chance of backing down by this factor |
| DIPLO\_PLAY\_BACK\_DOWN\_GUARANTEED\_THRESHOLD | -75 | # If ( confidence + boldness ) is less than this, always back down before the play goes to war |
| DIPLO\_PLAY\_BACK\_DOWN\_GUARANTEED\_ESCALATION | 95 | # Above this escalation, AI will always back down if it's supposed to |
| DIPLO\_PLAY\_BACK\_DOWN\_CHANCE\_LOW\_ESCALATION | 0.4 | # 1.0 = 1% (chance each day) - used before countdown to war starts |
| DIPLO\_PLAY\_BACK\_DOWN\_CHANCE\_HIGH\_ESCALATION | 2.0 | # 1.0 = 1% (chance each day) - used after countdown to war starts |
| DIPLO\_PLAY\_BACK\_DOWN\_CHANCE\_WAR\_LOSSES\_MULT | 1.5 | # Multiply chance of backing down due to additional wargoal demands by 1 + ( impact of additional wargoals / impact of original wargoal \* this ) |
| DIPLO\_PLAY\_BACK\_DOWN\_CHANCE\_WAR\_LOSSES\_MAX | 3.0 | # Max multiplier for impact of additional wargoal demands (including the base of 1) |
| DIPLO\_PLAY\_FREELY\_ADD\_WARGOALS\_ESCALATION\_THRESHOLD | 70 | # After this amount of escalation, the AI will freely add wargoals instead of reserving manuevers for swaying |
| DIPLO\_PLAY\_ADD\_WARGOALS\_THRESHOLD | 0.5 | # If AI doesn't have at least this much military strength compared to enemy, don't add more wargoals for themselves after the first |
| DIPLO\_PLAY\_FORCE\_DIPLOMATIC\_PLAY\_THRESHOLD | 2.0 | # If the AI believes it will have this much military strength compared to enemy and wants multiple things from them, then don't bother sending a diplomatic demand |
| DIPLO\_PLAY\_SWAY\_THRESHOLD | 2.0 | # If AI has this much military strength compared to enemy, don't bother trying to sway anyone |
| DIPLO\_PLAY\_REVERSE\_SWAY\_THRESHOLD | 2.0 | # If AI has this much military strength compared to enemy, consider reverse sways to have less value |
| DIPLO\_PLAY\_SWAY\_LEANING\_SIDE\_MILITARY\_STRENGTH\_MULT | 0.25 | # When determining strength compared to enemy, add in undecided countries leaning towards a side with this part of their strength |
| DIPLO\_PLAY\_DECIDE\_ON\_SUPPORT\_ESCALATION | 30 | # Above this escalation, AI will potentially start taking sides (or declare neutrality) even if not swayed |
| DIPLO\_PLAY\_TAKE\_SIDES\_MIN\_BOLDNESS | 25 | # Boldness must be at least this for AI to want to take a side with no gain (ignored for Great Powers in containment plays) |
| DIPLO\_PLAY\_TAKE\_SIDES\_CHANCE | 0.004 | # Multiplied by boldness for chance of taking sides each tick |
| DIPLO\_PLAY\_DECLARE\_NEUTRALITY\_ESCALATION\_MIN\_BASE | 80 | # Lowest escalation at which AI can declare neutrality, AIs with a preference will never declare neutrality before countdown to war |
| DIPLO\_PLAY\_DECLARE\_NEUTRALITY\_IMPACT\_OF\_NEUTRALITY\_SCORE | 0.5 | # AI's neutrality score \* this is subtracted from DIPLO\_PLAY\_DECLARE\_NEUTRALITY\_ESCALATION\_MIN\_BASE |
| DIPLO\_PLAY\_DECLARE\_NEUTRALITY\_IMPACT\_OF\_NEUTRALITY\_SCORE\_MAX | 50 | # DIPLO\_PLAY\_DECLARE\_NEUTRALITY\_IMPACT\_OF\_NEUTRALITY\_SCORE cannot be higher than this |
| DIPLO\_PLAY\_DECLARE\_NEUTRALITY\_ESCALATION\_MAX | 99 | # Highest escalation at which AI can declare neutrality |
| DIPLO\_PLAY\_ABANDON\_SUPPORT\_CHANCE | 0.1 | # Multiplied with negative support score |
| DIPLO\_PLAY\_SWAY\_COUNTRIES\_ESCALATION | 10 | # Above this escalation, AI will potentially start swaying countries |
| DIPLO\_PLAY\_REVERSE\_SWAY\_COUNTRIES\_CHANCE\_SCALED | 0.02 | # Chance each day that the AI will try to reverse-sway (scaled by boldness) |
| DIPLO\_PLAY\_REVERSE\_SWAY\_COUNTRIES\_CHANCE\_MAX | 0.5 | # Max chance each day that the AI will try to reverse-sway |
| DIPLO\_PLAY\_REVERSE\_SWAY\_LEANING\_MULT | 5.0 | # Applied to both scaled and max chance if the swaying country is already leaning towards a side |
| DIPLO\_PLAY\_SWAY\_COUNTRIES\_CHANCE\_SCALED | 20 | # Chance each day that the AI will try to sway someone (scaled by relative strength of the two sides, 1 = 1%) |
| DIPLO\_PLAY\_SWAY\_COUNTRIES\_CHANCE\_MAX | 75 | # Max chance each day that the AI will try to sway someone |
| DIPLO\_PLAY\_TIMED\_WEIGHT\_DURATION | 12 | # When AI randomly determines sympathy for one side of a diplo play, how long does that weight stay |
| DIPLO\_PLAY\_PREFERENCE\_THRESHOLD | 25 | # At this delta, an AI country is considered to have a preference for that side of the diplo play |
| DIPLO\_PLAY\_WEAK\_ABANDON\_SUPPORT\_THRESHOLD | -25 | # If support for the side an AI country is backing drops below this, consider abandoning it |
| DIPLO\_PLAY\_STRONG\_ABANDON\_SUPPORT\_THRESHOLD | -50 | # If support for the side an AI country is backing drops below this, abandon it immediately |
| DIPLO\_PLAY\_ABANDON\_ALLY\_OR\_SUBJECT\_MIN\_ENEMY\_STRENGTH | 0.75 | # If the enemy doesn't have at least this amount of troops compared to our side, never abandon an ally or subject |
| DIPLO\_PLAY\_ABANDON\_ALLY\_RELUCTANCE | 50 | # Added to support score when considering whether to abandon an ally |
| DIPLO\_PLAY\_ABANDON\_SUBJECT\_RELUCTANCE | 100 | # Added to support score when considering whether to abandon a subject |
| DIPLO\_PLAY\_SWAY\_DAYS\_LEFT\_MAX | 12 | # AI will not answer a sway offer when it has more than this amount of days left (should map to SWAY\_OFFER\_TIMEOUT\_DAYS) |
| DIPLO\_PLAY\_SWAY\_DAYS\_LEFT\_MIN | 8 | # AI will always answer a sway offer when it has this or less amount of days left (should map to SWAY\_OFFER\_TIMEOUT\_DAYS) |
| DIPLO\_PLAY\_SWAY\_ANSWER\_CHANCE | 75 | # Chance per day of AI answering a sway offer (1 = 1%) |
| DIPLO\_PLAY\_WEAK\_ARMY\_THRESHOLD | 0.5 | # If our army strength compared to the average for each country involved in the play is less than this, weak army effects will apply |
| DIPLO\_PLAY\_STRONG\_ARMY\_THRESHOLD | 1.0 | # If our army strength compared to the average for each country involved in the play is at least than this, strong army effects will start to apply |
| DIPLO\_PLAY\_STRONG\_ARMY\_MAX | 3.0 | # Maximum strong army effects apply at this threshold |
| DIPLO\_PLAY\_FORCE\_BALANCE\_SCALE | 4.0 | # At this military-strength-to-enemies ratio, max effects from the balance of the two sides' militaries is applied |
| DIPLO\_PLAY\_FORCE\_BALANCE\_NAVY\_FACTOR | 0.1 | # Naval power projection counts for this much compared to army power projection when determining military strength to enemies |
| DIPLO\_PLAY\_FORCE\_BALANCE\_MOBILIZATION\_FACTOR | 1.0 | # A country's military forces are considered to be ( 1 + this \* fully mobilized unit ratio ) much stronger in a play for purposes of confidence, etc |
| DIPLO\_PLAY\_STATE\_STABILITY\_UNINCORPORATED\_WEIGHT\_MULT | 0.25 | # Weight for devastation, radicals & loyalists in unincorporated states is multiplied by this |
| DIPLO\_PLAY\_CONTAINMENT\_PLAY\_FACTOR | 100 | # Added to preference for initiator in a containment play if the country is a Great Power |
| DIPLO\_PLAY\_SWAY\_LOW\_IMPACT\_FACTOR | -100 | # Maximum effect applied to acceptance of a reverse-sway if a country has little to lose from the enemy side's wargoals |
| DIPLO\_PLAY\_SWAY\_LOW\_IMPACT\_THRESHOLD | 50 | # At this total enemy wargoal impact or below, acceptance is reduced by up to DIPLO\_PLAY\_SWAY\_LOW\_IMPACT\_FACTOR (at 0 impact) |
| DIPLO\_PLAY\_SWAY\_NON\_PRIMARY\_DEMAND\_IMPACT\_MULT | 0.5 | # Secondary demands have their impact multiplied by this factor for the purpose of measuring the low impact factor above |
| DIPLO\_PLAY\_SWAY\_SUBJECT\_IMPACT\_VALUE\_DIVISOR | 500 | # Wargoals on subjects have their impact multiplied by (the subject's value for overlord divided by this) for the purpose of measuring the low impact factor above (clamped to 0-1) |
| DIPLO\_PLAY\_SWAY\_INCOME\_TRANSFER\_PACTS\_OF\_SAME\_TYPE\_FACTOR | -30 | # Added to acceptance score for each income transfer pact the target country has of the same type (where they are the receiver of the money) |
| DIPLO\_PLAY\_SWAY\_TOO\_LOW\_SUPPORT\_DESIRE\_THRESHOLD | -100 | # If a country has this or less support desire, don't bother evaluating sways against them |
| DIPLO\_PLAY\_UNWANTED\_SWAY\_OFFER\_MEMORY\_DURATION\_DAYS | 10 | # The AI will remember another country not being interested in a particular sway offer for this many days |
| DIPLO\_PLAY\_CALL\_ALLY\_PREFERENCE\_SCORE = 1000 # When determining which sway the AI wants to offer, score Call Ally this highly |
|  |  | # AI uses these values to determine how 'impactful' a wargoal is, ie how much they would like to avoid having it enforced on them etc |
| DIPLO\_PLAY\_WAR\_GOAL\_IMPACT\_MANEUEVERS\_MULT | 1 | # Maneuvers cost of a wargoal is multiplied by this and added to impact |
| DIPLO\_PLAY\_WAR\_GOAL\_IMPACT\_INFAMY\_MULT | 0.5 | # Infamy generation of a wargoal is multiplied by this and added to impact |
| DIPLO\_PLAY\_WAR\_GOAL\_IMPACT\_CONQUEST\_MULT | 2.0 | # Wargoals that outright conquer states or annex whole countries have their overall impact multiplied by this |
| ``` # Boldness determines the confidence threshold at which the AI will back down in a play # Each individual boldness factor is multiplied a dice roll range of (x0 to x1) for actual boldness value in each play - boldness can end up negative! # Boldness also plays a role for determining whether undecided countries will join a play unprompted # Base boldness is set by the country's AI strategies ``` | | |
| DIPLO\_PLAY\_BOLDNESS\_FROM\_RANK | 3 | # Multiplied by country's rank value and added to boldness range |
| DIPLO\_PLAY\_BOLDNESS\_WEAK\_ARMY\_FACTOR | -25 | # Scaled by our relative forces compared to DIPLO\_PLAY\_WEAK\_ARMY\_THRESHOLD |
| DIPLO\_PLAY\_BOLDNESS\_CONTAINMENT\_PLAY | 100 | # Add this boldness if in a containment play |
| ``` # The below is a special boldness factor in diplomatic plays that is always calculated on the spot, not randomized and added to saved boldness score, as the amount of primary demands can grow ``` | | |
| DIPLO\_PLAY\_BOLDNESS\_PRIMARY\_DEMANDS | 1 | # Add this amount of non-randomized boldness for each wargoal impact point of primary demands against our side |
|  |  | # Confidence is added to boldness to determine whether the AI is willing to back down |
| DIPLO\_PLAY\_CONFIDENCE\_FORCE\_BALANCE\_FACTOR | 75 | # Confidence level if force balance to the enemy is at DIPLO\_PLAY\_FORCE\_BALANCE\_SCALE, scaled down if lower |
| DIPLO\_PLAY\_CONFIDENCE\_STRONG\_ARMY\_FACTOR | 15 | # Scaled by our relative forces compared to DIPLO\_PLAY\_STRONG\_ARMY\_MAX |
| DIPLO\_PLAY\_CONFIDENCE\_CIVIL\_WAR\_OR\_UPRISING | 75 | # Add this confidence to both sides in a civil war or native uprising |
| DIPLO\_PLAY\_CONFIDENCE\_EXISTENTIAL\_PLAY | 50 | # Add this confidence if backing down would result in annexation |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_TURMOIL | -15 | # At 100% turmoil across the country (weighted by state population), subtract this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_LOYALISTS | 15 | # At 100% turmoil across the country (weighted by state population), add this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_DEVASTATION | -15 | # At 100% devastation, subtract this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_DEBT\_LEVEL | -25 | # At 100% debt level, subtract this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_BANKRUPTCY | -25 | # Subtract this amount of confidence when bankrupt |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_GOLD\_RESERVES | 15 | # At 100% gold reserves, add this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_OWN\_CONFLICTS | -25 | # If we are in another conflict where military strength compared to our enemies is equal to or above DIPLO\_PLAY\_FORCE\_BALANCE\_SCALE, subtract this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_ENEMY\_TURMOIL | 10 | # At 100% turmoil across the enemy country (weighted by state population), add this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_ENEMY\_DEVASTATION | 10 | # At 100% devastation for enemy, add this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_ENEMY\_DEBT\_LEVEL | 10 | # At 100% debt level for enemy, add this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_ENEMY\_BANKRUPTCY | 10 | # If enemy is bankrupt, add this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_FROM\_ENEMY\_CONFLICTS | 25 | # If the other side is in another conflict where military strength compared to their enemies is equal to or above DIPLO\_PLAY\_FORCE\_BALANCE\_SCALE, add this amount of confidence |
| DIPLO\_PLAY\_CONFIDENCE\_VERY\_LOW\_THRESHOLD | -50 | # If confidence is this or below, show it as very low |
| DIPLO\_PLAY\_CONFIDENCE\_LOW\_THRESHOLD | -25 | # If confidence is this or below, show it as low |
| DIPLO\_PLAY\_CONFIDENCE\_HIGH\_THRESHOLD | 25 | # If confidence is this or above, show it as high |
| DIPLO\_PLAY\_CONFIDENCE\_VERY\_HIGH\_THRESHOLD | 50 | # If confidence is this or above, show it as very high |
| ``` # Below data is used to determine which side the AI wants to join a diplo play, if any # Neutrality is a calculated value that determines how much a country wants to stay out of a diplo play # In order for a country to join, their side preference score must beat out both the enemy's side preference score AND the neutrality score # Base neutrality is set by the country's AI strategies ``` | | |
| DIPLO\_PLAY\_NEUTRALITY\_MIN | 0 |  |
| DIPLO\_PLAY\_NEUTRALITY\_PREFERENCE\_DELTA\_THRESHOLD | 50 | # If the preference delta between the two sides is less than this, add the difference between the delta and this value to neutrality score |
| DIPLO\_PLAY\_NEUTRALITY\_FROM\_DEBT\_LEVEL | 100 | # At 100% debt level, add this amount of neutrality score |
| DIPLO\_PLAY\_NEUTRALITY\_FROM\_BANKRUPTCY | 100 | # When bankrupt, add this amount of neutrality score |
| DIPLO\_PLAY\_NEUTRALITY\_FROM\_DEVASTATION\_LEVEL | 100 | # At 100% devastation across the country (weighted by state population), add this amount of neutrality score |
| DIPLO\_PLAY\_NEUTRALITY\_FROM\_TURMOIL | 100 | # At 100% turmoil across the country (weighted by state population), add this amount of neutrality score |
| DIPLO\_PLAY\_NEUTRALITY\_IN\_SUBJECT\_CONFLICT | -50 | # If either side in the play is a subject, subtract this amount of neutrality score |
| DIPLO\_PLAY\_NEUTRALITY\_IN\_NATIVE\_UPRISING | 50 | # Added to neutrality score for native uprising type conflicts |
| DIPLO\_PLAY\_NEUTRALITY\_FROM\_ONGOING\_CONFLICTS | 200 | # If in a conflict where military strength compared to the enemy is equal to or above DIPLO\_PLAY\_FORCE\_BALANCE\_SCALE, add this amount of neutrality score |
| DIPLO\_PLAY\_NEUTRALITY\_FROM\_LOWER\_RANK | 5 | # For each rank value difference between us and the lowest ranked participant in the play, if we're higher rank than them |
| DIPLO\_PLAY\_NEUTRALITY\_FROM\_NO\_ARMY | 1000 | # If we have no army at all, add this to neutrality score |
| DIPLO\_PLAY\_NEUTRALITY\_WEAK\_ARMY\_FACTOR | 100 | # Scaled by our relative forces compared to DIPLO\_PLAY\_WEAK\_ARMY\_THRESHOLD |
| DIPLO\_PLAY\_NEUTRALITY\_TRUCE\_FACTOR | 50 | # If we have a truce with either primary participant and no alliance or subject relationship, and it's not a civil war |
| ``` # Sympathy is added together and then multiplied by a dice roll range of (DIPLO_PLAY_SYMPATHY_RANGE_MIN to DIPLO_PLAY_SYMPATHY_RANGE_MAX) to give the AI a random preference for each side in a particular play # Sympathy above 0 is added directly to the willingness to join that side in the play # Sympathy for a side can be below 0, but has no additional effect other than acting as a buffer against sympathy increases ``` | | |
| DIPLO\_PLAY\_SYMPATHY\_RANGE\_MIN | 0.1 | # The minimum range for the initial sympathy random roll (additions during play are fully random) |
| DIPLO\_PLAY\_SYMPATHY\_RANGE\_MAX | 1.0 | # The maximum range for the initial sympathy random roll (additions during play are fully random) |
| DIPLO\_PLAY\_SYMPATHY\_BASE\_INITIATOR | 20 | # The base size of the random sympathy range for attacker in diplomatic play |
| DIPLO\_PLAY\_SYMPATHY\_BASE\_TARGET | 40 | # The base size of the random sympathy range for defender in diplomatic play |
| DIPLO\_PLAY\_SYMPATHY\_ENEMY\_OF\_SUBJECT\_INITIATOR | -100 | # Subtracted from sympathy range for enemies of our subjects if the enemy is the attacker |
| DIPLO\_PLAY\_SYMPATHY\_ENEMY\_OF\_SUBJECT\_TARGET | -50 | # Subtracted from sympathy range for enemies of our subjects if the enemy is the defender |
| DIPLO\_PLAY\_SYMPATHY\_ENEMY\_OF\_ALLY\_INITIATOR | -100 | # Subtracted from sympathy range for enemies of our allies if the enemy is the attacker |
| DIPLO\_PLAY\_SYMPATHY\_ENEMY\_OF\_ALLY\_TARGET | -50 | # Subtracted from sympathy range for enemies of our allies if the enemy is the defender |
| DIPLO\_PLAY\_SYMPATHY\_ENEMY\_OF\_INFAMOUS\_COUNTRY | 15 | # Added to sympathy range for enemy of infamous country |
| DIPLO\_PLAY\_SYMPATHY\_ENEMY\_OF\_NOTORIOUS\_COUNTRY | 30 | # Added to sympathy range for enemy of notorious country |
| DIPLO\_PLAY\_SYMPATHY\_ENEMY\_OF\_PARIAH\_COUNTRY | 100 | # Added to sympathy range for enemy of pariah country |
| DIPLO\_PLAY\_SYMPATHY\_LENIENT\_AI\_GAME\_RULE | 25 | # Added to sympathy range for player when using lenient AI game rule |
| DIPLO\_PLAY\_SYMPATHY\_HARSH\_AI\_GAME\_RULE | -25 | # Subtracted to sympathy range for player when using harsh AI game rule |
| DIPLO\_PLAY\_SYMPATHY\_FROM\_INITIAL\_WARGOAL | 0.75 | # Initial sympathy for target is increased by up to this amount \* accured infamy on the primary wargoal |
| DIPLO\_PLAY\_SYMPATHY\_INCREASE\_NEW\_WARGOAL | 1 | # Sympathy is increased by up to this amount \* accured infamy for enemy of a side which adds a new wargoal |
| DIPLO\_PLAY\_SYMPATHY\_INCREASE\_SWAYED\_WITH\_WARGOAL | 0.75 | # Sympathy is increased by up to this amount \* accured infamy for enemy of a side which adds a new wargoal through swaying |
| DIPLO\_PLAY\_SWITCH\_SIDES\_FACTOR | -10 | # If AI has already picked a side, add reluctance to accept further sway offers |
| DIPLO\_PLAY\_IDEOLOGICAL\_OPINION\_POSITIVE\_FACTOR | 0.2 | # Positive ideological opinion is multiplied by this and added to acceptance to join a side |
| DIPLO\_PLAY\_IDEOLOGICAL\_OPINION\_NEGATIVE\_FACTOR | 1 | # Negative ideological opinion is multiplied by this and added to acceptance to join a side |
| DIPLO\_PLAY\_IDEOLOGICAL\_OPINION\_REVOLUTION\_MULT | 3 | # DIPLO\_PLAY\_IDEOLOGICAL\_OPINION\_FACTOR is multiplied by this in a revolution play |
| DIPLO\_PLAY\_SECESSION\_OWN\_SECESSION\_RISK\_FACTOR | -100 | # Add this amount of reluctance for AI to back a secession of a culture that has enough pops in their own country to secede |
| DIPLO\_PLAY\_NON\_ALLY\_UNRECOGNIZED\_BASE\_FACTOR | -25 | # Add this amount of reluctance for AI to back a non-allied unrecognized power against a recognized one |
| DIPLO\_PLAY\_NON\_ALLY\_UNRECOGNIZED\_INCONSEQUENTAL\_ENEMY\_DEMANDS\_FACTOR | -50 | # Add this amount of reluctance for AI to back a non-allied unrecognized power against a recognized power that isn't demanding significant territorial concessions (conquer/make subject etc) |
| DIPLO\_PLAY\_NON\_ALLY\_UNRECOGNIZED\_CONSEQUENTAL\_DEMANDS\_FACTOR | -100 | # Add this amount of reluctance for AI to back significant demands from a non-allied unrecognized power |
| DIPLO\_PLAY\_ALLY\_INITIATOR\_FACTOR | 25 | # Added to desire for ally of initiator to join their side |
| DIPLO\_PLAY\_ALLY\_TARGET\_FACTOR | 50 | # Added to desire for ally of target to join their side |
| DIPLO\_PLAY\_GUARANTEE\_TARGET\_FACTOR | 50 | # Added to desire for guarantor of target to join their side |
| DIPLO\_PLAY\_OVERLORD\_INITIATOR\_FACTOR | 25 | # Added to desire for overlord of initiator to join their side |
| DIPLO\_PLAY\_OVERLORD\_TARGET\_FACTOR | 50 | # Added to desire for overlord of target to join their side |
| DIPLO\_PLAY\_SAME\_POWER\_BLOC\_INITIATOR\_FACTOR | 15 | # Added to desire for fellow power bloc member of initiator to join their side |
| DIPLO\_PLAY\_SAME\_POWER\_BLOC\_TARGET\_FACTOR | 25 | # Added to desire for fellow power bloc member of target to join their side |
| ``` # Diplo play scoring for relations levels ``` | | |
| DIPLO\_PLAY\_RELATIONS\_HOSTILE\_FACTOR | -50 |  |
| DIPLO\_PLAY\_RELATIONS\_COLD\_FACTOR | -25 |  |
| DIPLO\_PLAY\_RELATIONS\_POOR\_FACTOR | -10 |  |
| DIPLO\_PLAY\_RELATIONS\_CORDIAL\_FACTOR | 10 |  |
| DIPLO\_PLAY\_RELATIONS\_AMICABLE\_FACTOR | 25 |  |
| DIPLO\_PLAY\_RELATIONS\_FRIENDLY\_FACTOR | 50 |  |
| ``` # Diplo play scoring for attitudes (with scoring against both primary and backers) ``` | | |
| DIPLO\_PLAY\_ATTITUDE\_DISINTERESTED\_FACTOR | 0 |  |
| DIPLO\_PLAY\_ATTITUDE\_DISINTERESTED\_BACKER\_FACTOR | 0 |  |
| DIPLO\_PLAY\_ATTITUDE\_CAUTIOUS\_FACTOR | 0 |  |
| DIPLO\_PLAY\_ATTITUDE\_CAUTIOUS\_BACKER\_FACTOR | 0 |  |
| DIPLO\_PLAY\_ATTITUDE\_CONCILIATORY\_FACTOR | 10 |  |
| DIPLO\_PLAY\_ATTITUDE\_CONCILIATORY\_BACKER\_FACTOR | 5 |  |
| DIPLO\_PLAY\_ATTITUDE\_COOPERATIVE\_FACTOR | 15 |  |
| DIPLO\_PLAY\_ATTITUDE\_COOPERATIVE\_BACKER\_FACTOR | 5 |  |
| DIPLO\_PLAY\_ATTITUDE\_GENIAL\_FACTOR | 25 |  |
| DIPLO\_PLAY\_ATTITUDE\_GENIAL\_BACKER\_FACTOR | 10 |  |
| DIPLO\_PLAY\_ATTITUDE\_WARY\_FACTOR | -10 |  |
| DIPLO\_PLAY\_ATTITUDE\_WARY\_BACKER\_FACTOR | -5 |  |
| DIPLO\_PLAY\_ATTITUDE\_BELLIGERENT\_FACTOR | -50 |  |
| DIPLO\_PLAY\_ATTITUDE\_BELLIGERENT\_BACKER\_FACTOR | -25 |  |
| DIPLO\_PLAY\_ATTITUDE\_ANTAGONISTIC\_FACTOR | -50 |  |
| DIPLO\_PLAY\_ATTITUDE\_ANTAGONISTIC\_BACKER\_FACTOR | -25 |  |
| DIPLO\_PLAY\_ATTITUDE\_LOYAL\_FACTOR | 100 |  |
| DIPLO\_PLAY\_ATTITUDE\_LOYAL\_BACKER\_FACTOR | 25 |  |
| DIPLO\_PLAY\_ATTITUDE\_ALOOF\_FACTOR | 25 |  |
| DIPLO\_PLAY\_ATTITUDE\_ALOOF\_BACKER\_FACTOR | 10 |  |
| DIPLO\_PLAY\_ATTITUDE\_DEFIANT\_FACTOR | -25 |  |
| DIPLO\_PLAY\_ATTITUDE\_DEFIANT\_BACKER\_FACTOR | -10 |  |
| DIPLO\_PLAY\_ATTITUDE\_REBELLIOUS\_FACTOR | -100 |  |
| DIPLO\_PLAY\_ATTITUDE\_REBELLIOUS\_BACKER\_FACTOR | -50 |  |
| DIPLO\_PLAY\_ATTITUDE\_PROTECTIVE\_FACTOR | 25 |  |
| DIPLO\_PLAY\_ATTITUDE\_PROTECTIVE\_BACKER\_FACTOR | 10 |  |
| DIPLO\_PLAY\_ATTITUDE\_DOMINEERING\_FACTOR | -10 |  |
| DIPLO\_PLAY\_ATTITUDE\_DOMINEERING\_BACKER\_FACTOR | 0 |  |
| DIPLO\_PLAY\_SWAY\_RANDOM\_FACTOR | 1.0 | # The higher this is, the more random the AI will be about which countries it tries to sway first |
| DIPLO\_PLAY\_SWAY\_UNWANTED\_OFFER | -1000 | # For being offered something they don't want |
| DIPLO\_PLAY\_SWAY\_CALL\_IN\_OBLIGATION | 100 | # When calling in an obligation |
| DIPLO\_PLAY\_SWAY\_MINIMUM\_OBLIGATION\_VALUE | 10 | # Obligations worth less than this are rejected |
| DIPLO\_PLAY\_SWAY\_CALL\_ALLY\_FACTOR | 25 | # Added to acceptance for Call Ally sway |
| DIPLO\_PLAY\_SWAY\_MINIMUM\_PREFERENCE\_FOR\_SUBJUGATION | 1 | # The AI will not sway or reverse-sway with 'become subject' unless the supporter's preference for the supported is at least this |
| DIPLO\_PLAY\_SWAY\_WARGOAL\_WEAK\_SWAYER\_CONFIDENT\_IN\_OWN\_ARMY\_FACTOR | 0.25 | # This much of the penalty for a 'weak' sway offer is removed if the target believes they can achieve the wargoal themselves |
| DIPLO\_PLAY\_SWAY\_WARGOAL\_FACTOR | 1.0 | # Multiplied by wargoal value |
| DIPLO\_PLAY\_SWAY\_WARGOAL\_THRESHOLD | 10 | # A wargoal needs at least this base value to be wanted as part of sway offer |
| DIPLO\_PLAY\_SWAY\_WARGOAL\_MINIMUM\_SWAYER\_MULTIPLIER\_INITIATOR | 0.2 | # If a wargoal sway offer from initiator is less than this fraction of its base value due to weakness of the swayer, consider it an unwanted wargoal |
| DIPLO\_PLAY\_SWAY\_WARGOAL\_MINIMUM\_SWAYER\_MULTIPLIER\_TARGET | 0.05 | # If a wargoal sway offer from target is less than this fraction of its base value due to weakness of the swayer, consider it an unwanted wargoal |
| DIPLO\_PLAY\_SWAY\_LEANING\_PLAYER\_FACTOR | 100 | # Added to acceptance for players leaning towards a side to make AI more likely to sway them |
| DIPLO\_PLAY\_SWAY\_BECOME\_SUBJECT\_VALUE\_FACTOR | 1.0 | # Multiplies AI desire for the swaying country to become their subject |
| DIPLO\_PLAY\_SWAY\_TRANSFER\_SUBJECT\_VALUE\_FACTOR | 1.0 | # Multiplies AI desire for the swaying country's offered transfer of subject to become their subject |
| DIPLO\_PLAY\_SWAY\_STATE\_DESIRE\_FACTOR | 2.0 | # Multiplies AI strategy value for a state to determine if AI wants a transfer state sway |
| DIPLO\_PLAY\_SWAY\_DIPLOMATIC\_PACT\_DESIRE\_FACTOR | 1.0 | # Multiplies diplomatic acceptance score for the diplomatic action to determine if AI wants a diplomatic action sway |
| ``` # Determines how much the AI values a reverse-sway based on the military power it would add to their side  # If that power would make up the full difference between no military at all and DIPLO_PLAY_REVERSE_SWAY_THRESHOLD, use the full value, otherwise scale it against the amount of the difference made up # For example, if the new supporter would bring military power compared to enemy from 1.0x to 2.0x, and DIPLO_PLAY_REVERSE_SWAY_THRESHOLD is 2.0, we would apply half this value ``` | | |
| DIPLO\_PLAY\_REVERSE\_SWAY\_ADDED\_MILITARY\_POWER\_FACTOR | 50 |
| DIPLO\_PLAY\_REVERSE\_SWAY\_MIN\_ADDED\_MILITARY\_POWER | 5 | # If the added military power value is below this, consider the country's help to not be worth anything and reject the offer |
| ``` # Multiply added military power factor by the amount they are currently outmatched against the enemy # IE; at 0x enemy military power this full modifier gets applied, at 0.5x military power half of it is applied, and at 1x+ none of it is ``` | | |
| DIPLO\_PLAY\_REVERSE\_SWAY\_ADDED\_MILITARY\_POWER\_OUTMATCHED\_MULT | 4.0 |  |
| DIPLO\_PLAY\_REVERSE\_SWAY\_OUTMATCHING\_FACTOR | -25.0 | # If the AI's side is outmatching the enemy by more than DIPLO\_PLAY\_REVERSE\_SWAY\_THRESHOLD, the difference between their military power ratio and DIPLO\_PLAY\_REVERSE\_SWAY\_THRESHOLDis multiplied by this and added to acceptance |
| DIPLO\_PLAY\_REVERSE\_SWAY\_BASE\_FACTORS\_MULT | 0.5 | # Apply basic factors such as relations, attitude, ideological opinion etc to reverse-sway with this multiplier |
| DIPLO\_PLAY\_REVERSE\_SWAY\_WARGOAL\_VALUE\_FACTOR | -2.0 | # Multiply by how much the AI wants a requested wargoal themselves if they were the holder and apply to reverse-sway acceptance |
| DIPLO\_PLAY\_REVERSE\_SWAY\_WARGOAL\_IMPACT\_FACTOR | -0.5 | # Multiply by wargoal maneuvers cost (to determine how impactful it is) and apply to reverse-sway acceptance for a requested wargoal |
| DIPLO\_PLAY\_REVERSE\_SWAY\_WARGOAL\_INFAMY\_FACTOR | -0.5 | # Multiply by infamy impact and apply to reverse-sway acceptance for a requested wargoal |
| DIPLO\_PLAY\_REVERSE\_SWAY\_OFFER\_OBLIGATION\_MIN\_VALUE | 5 | # AI value for an obligation is never lower than this when it's considering whether to accept a reverse-sway |
| DIPLO\_PLAY\_REVERSE\_SWAY\_OFFER\_OBLIGATION\_FACTOR | -6.0 | # Multiply by how much the AI would value the obligation if it was the country offering support and apply to reverse-sway acceptance for an obligation |
| DIPLO\_PLAY\_REVERSE\_SWAY\_CALL\_IN\_OBLIGATION\_FACTOR | -3.0 | # Multiply by how much the AI values the obligation it holds and apply to reverse-sway acceptance for calling in obligation |
| DIPLO\_PLAY\_REVERSE\_SWAY\_STATE\_VALUE\_FACTOR | -2.0 | # Multiplied by AI strategy value for owned state to determine reluctance to cede it in a reverse-sway |
| DIPLO\_PLAY\_REVERSE\_SWAY\_BECOME\_SUBJECT\_VALUE\_FACTOR | 1.0 | # Multiplied by how much the AI wants to become a subject of the sway target |
| DIPLO\_PLAY\_REVERSE\_SWAY\_TRANSFER\_SUBJECT\_VALUE\_FACTOR | -1.0 | # Multiplied by how much the AI values the subject they're offering to transfer to the sway target |
| DIPLO\_PLAY\_REVERSE\_SWAY\_CALL\_ALLY\_DESIRE | 25 | # Added to AI scoring for reverse sway call ally even though call ally isn't actually valid for reverse-sways, so they can score it against other sway types |
| DIPLO\_PLAY\_ADD\_WARGOAL\_MIN\_SCORE | 20 | # A wargoal needs at least this value for AI to add it to the play |
| LOW\_AGGRESSION\_BASE\_EFFECT\_MULT | 0.5 | # The impact of low ai aggression game rule on how often the AI starts diplomatic plays |
| HIGH\_AGGRESSION\_BASE\_EFFECT\_MULT | 2.0 | # The impact of high ai aggression game rule on how often the AI starts diplomatic plays |
| LOW\_AGGRESSION\_INFAMY\_ACCEPTANCE\_MULT | 0.5 | # The amount of infamy the AI considers undesirable/unacceptable is multiplied by this for low aggression AI |
| HIGH\_AGGRESSION\_INFAMY\_ACCEPTANCE\_MULT | 1.5 | # The amount of infamy the AI considers undesirable/unacceptable is multiplied by this for low aggression AI |
| AI\_AGGRESSION\_MAX\_ACCEPTABLE\_INFAMY | 100 | # Undesirable/unacceptable infamy will not be set above this from high aggression |
| ``` # Below data is used to determine which wargoals the AI will pick ``` | | |
| WAR\_GOAL\_RANDOM\_FACTOR | 2.0 | # The higher this is, the more random AI wargoal selection will be |
| WAR\_GOAL\_UNDESIRABLE\_INFAMY\_FACTOR | 0.5 | # Wargoal value is multiplied by this if it would bring the country above undesirable infamy levels |
| WAR\_GOAL\_UNACCEPTABLE\_INFAMY\_FACTOR | 0 | # Wargoal value is multiplied by this if it would bring the country above unacceptable infamy levels |
| WAR\_GOAL\_NOT\_PRIMARY\_DEMAND\_FACTOR | 0.5 | # Wargoal value for sway offers is multiplied by this if it would not be added as a primary demand |
| ``` # Stickness factors for the different strait settings. Higher values means the AI is more likely to stick to their existing setting. ``` | | |
| STRAIT\_ACCESS\_STATUS\_STICKYNESS | 1.25 |  |
| STRAIT\_ACCESS\_PERMISSIONS\_STICKYNESS | 1.25 |  |
| STRAIT\_TOLL\_RATES\_STICKYNESS | 1.25 |  |
| WAR\_GOAL\_MAKE\_PRIMARY\_DEMAND\_SCORE\_MULT | 0.75 | # Multiply score of an existing wargoal by this when determining whether to make it into a primary demand instead of adding a new wargoal |
| WAR\_GOAL\_MAKE\_PRIMARY\_DEMAND\_RETURN\_STATE\_SCORE\_MULT | 1.25 | # Overrides WAR\_GOAL\_MAKE\_PRIMARY\_DEMAND\_SCORE\_MULT for return state wargoals |
| WAR\_GOAL\_MIN\_SCORE\_TO\_MAKE\_PRIMARY\_DEMAND | 30 | # A wargoal needs to have at least this much score (before applying WAR\_GOAL\_MAKE\_PRIMARY\_DEMAND\_SCORE\_MULT) for AI to make it a primary demand |
| ``` # Below data is used to determine which techs the AI will research ``` | | |
| TECH\_RANDOM\_FACTOR | 1.0 | # The higher this is, the more random AI tech research will be |
| TECH\_COST\_PENALTY\_FACTOR | 5.0 | # AI tendency to research a tech is divided by ( 1 + this \* ahead of time penalty / era base cost ) |
| INCORPORATE\_STATE\_MAX\_YEARS | 8.5 | # Max years that incorporation is allowed to take for the AI to incorporate a state |
| INCORPORATE\_STATE\_MIN\_POPULATION | 200000 | # Below data is used to determine which states the AI should incorporate # Min population in a homeland state for the AI to incorporate it |
| ``` # Below data is used to determine which states are most important to defend ``` | | |
| DEFEND\_STATE\_BARRACKS\_WEIGHT | 1 | # Per level of barracks |
| DEFEND\_STATE\_BARRACKS\_MAX\_WEIGHT | 20 | # Per state |
| DEFEND\_STATE\_NAVAL\_ADMINISTRATION\_WEIGHT | 0.5 | # Per level of naval admin |
| DEFEND\_STATE\_NAVAL\_ADMINISTRATION\_MAX\_WEIGHT | 10 | # Per state |
| DEFEND\_STATE\_CAPITAL\_WEIGHT | 25 |  |
| DEFEND\_STATE\_CAPITAL\_WAR\_NEGOTIATOR\_WEIGHT | 100 |  |
| DEFEND\_STATE\_OWN\_CAPITAL\_WEIGHT\_MULT | 5 |  |
| DEFEND\_STATE\_WARGOAL\_WEIGHT | 100 |  |
| DEFEND\_STATE\_INCORPORATED\_WEIGHT\_MULT | 1.5 |  |
| ``` # Below data is used to determine which states are most important to invade ``` | | |
| INVADE\_STATE\_BARRACKS\_WEIGHT | 1 | # Per level of barracks |
| INVADE\_STATE\_BARRACKS\_MAX\_WEIGHT | 20 | # Per state |
| INVADE\_STATE\_NAVAL\_ADMINISTRATION\_WEIGHT | 0.5 | # Per level of naval admin |
| INVADE\_STATE\_NAVAL\_ADMINISTRATION\_MAX\_WEIGHT | 10 | # Per state |
| INVADE\_STATE\_CAPITAL\_WEIGHT | 25 |  |
| INVADE\_STATE\_CAPITAL\_WAR\_NEGOTIATOR\_WEIGHT | 100 |  |
| INVADE\_STATE\_OWN\_CAPITAL\_WEIGHT\_MULT | 5 |  |
| INVADE\_STATE\_WARGOAL\_WEIGHT | 100 |  |
| INVADE\_STATE\_INCORPORATED\_WEIGHT\_MULT | 1.5 |  |
| ``` # Below data is used for invasions: ``` | | |
| LAND\_INVASION\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random AI land invasion theater selection will be |
| LAND\_INVASION\_MIN\_RELATIVE\_LOCAL\_ARMY\_STRENGTH | 0.5 | # AI wants at least this fraction of defending army strength to risk at a land invasion |
| LAND\_INVASION\_MIN\_SCORE | 100 | # AI won't bother launching land invasions against theaters with a lower total state score than this |
| LAND\_INVASION\_MAX\_LOCAL\_FRONT\_SCORE | 100 | # Don't launch a land invasion if there is a local front of at least this total score for the army |
| LAND\_INVASION\_MAX\_TRAVEL\_TIME\_DAYS | 30 | # Don't invade with an army that is this far away from the state |
| LAND\_INVASION\_TRAVEL\_TIME\_PENALTY | 0.5 | # The further army is from the state, the lower the score: total = combat power \* (1 - this \* (travel time / LAND\_INVASION\_MAX\_TRAVEL\_TIME\_DAYS)) |
| LAND\_INVASION\_MAX\_AVAILABLE\_ARMY\_FRACTION | 0.5 | # No more than this fraction of available armies can be used in land invasions at the same time |
| LAND\_INVASION\_CANCEL\_SCORE\_THRESHOLD | 50 | # Cancel invasion if its score is less than this |
| NAVAL\_INVASION\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random AI naval invasion theater selection will be |
| NAVAL\_INVASION\_MIN\_RELATIVE\_LOCAL\_ARMY\_STRENGTH | 0.25 | # AI wants at least this fraction of defending army strength to risk a naval invasion |
| NAVAL\_INVASION\_MIN\_RELATIVE\_LOCAL\_NAVY\_STRENGTH | 0.5 | # AI wants at least this fraction of defending naval strength to risk a naval invasion |
| NAVAL\_INVASION\_MIN\_RELATIVE\_GLOBAL\_NAVY\_STRENGTH\_ATTACKER | 0.25 | # AI wants at least this fraction of naval strength in the overall war to risk a naval invasion as the attacking war side |
| NAVAL\_INVASION\_MIN\_RELATIVE\_GLOBAL\_NAVY\_STRENGTH\_DEFENDER | 0.5 | # AI wants at least this fraction of naval strength in the overall war to risk a naval invasion as the defending war side |
| NAVAL\_INVASION\_COOLDOWN\_DAYS | 20 | # After launching a naval invasion, the AI will wait at least this long before launching another |
| NAVAL\_INVASION\_MIN\_SCORE | 100 | # AI won't bother launching naval invasions against theaters with a lower total state score than this |
| NAVAL\_INVASION\_INVADE\_STATE\_WARGOAL\_WEIGHT | 500 | # Wargoal state weight for naval invasion target selection (higher than front-based INVADE\_STATE\_WARGOAL\_WEIGHT) |
| NAVAL\_INVASION\_MAX\_TARGET\_CANDIDATES | 5 | # Number of candidate target states to consider per invasion (tries in score order until one passes garrison checks) |
| NAVAL\_INVASION\_HIGH\_VALUE\_STATE\_THRESHOLD | 100 | # If target state importance is at least this, always send regular army support alongside marines |
| NAVAL\_INVASION\_MAX\_LOCAL\_FRONT\_SCORE | 100 | # Don't launch a naval invasion if there is a local front of at least this total score for the general |
| NAVAL\_INVASION\_CANCEL\_SCORE\_THRESHOLD | 50 | # Cancel invasion if its score is less than this |
| NAVAL\_INVASION\_MAX\_AVAILABLE\_ARMY\_FRACTION | 0.5 | # No more than this fraction of available armies can be used in naval invasions at the same time |
| NAVAL\_INVASION\_MAX\_AVAILABLE\_FLEET\_FRACTION | 0.5 | # No more than this fraction of available fleets can be used in naval invasions at the same time |
| SUPPLY\_SHIP\_STRAIN\_START\_RATIO | 0.75 | # Supply ship usage ratio where scoring penalty begins (0.99x mult) |
| SUPPLY\_SHIP\_STRAIN\_MAX\_RATIO | 2.0 | # Supply ship usage ratio where max scoring penalty applies (0.05x mult) |
| SUPPLY\_SHIP\_STRAIN\_MULT\_AT\_START | 0.99 | # Score multiplier at start ratio |
| SUPPLY\_SHIP\_STRAIN\_MULT\_AT\_FULL | 0.75 | # Score multiplier at 100% supply ship usage |
| SUPPLY\_SHIP\_STRAIN\_MULT\_AT\_MAX | 0.05 | # Score multiplier at max ratio |
| MARINE\_FORMATION\_TAG\_MIN\_FRACTION | 0.5 | # Min fraction of marine units to tag a formation as Marine |
|  |  | # Shipbuilding defines |
| SHIP\_TEMPLATE\_CREATION\_MIN\_SCORE\_FACTOR | 1.5 | # AI will only create a new ship template if its modification score is at least this many times better than the best existing template of the same type |
| SHIP\_RETROFIT\_MIN\_SCORE\_FACTOR | 2.0 | # AI will only retrofit ships if the target template's total score is at least this many times the current template's score |
| FLEET\_RECALL\_HULL\_RATIO\_WAR | 0.75 | # At war or in a diplomatic play, recall fleets with average hull at or below this ratio |
| FLEET\_RECALL\_HULL\_RATIO\_PEACE | 1.0 | # At peace, recall fleets with average hull below this ratio (1.0 = recall any damaged fleet) |
| FLEET\_RECALL\_CREW\_RATIO\_WAR | 0.75 | # At war or in a diplomatic play, recall fleets with average crew at or below this ratio |
| FLEET\_RECALL\_CREW\_RATIO\_PEACE | 1.0 | # At peace, recall fleets with average crew below this ratio (1.0 = recall any undermanned fleet) |
| FLEET\_RECALL\_MIN\_MISSION\_SCORE | 0.5 | # Recall fleets whose best mission score is below this threshold |
| SHIP\_DESIGN\_MODIFICATION\_RANDOM\_FACTOR | 0.25 | # Random factor applied to AI modification weights when designing ships, creating per-country variance |
| SHIP\_CONSTRUCTION\_WANTED\_SHIPS\_TO\_BUILD\_COST\_FACTOR | 1.0 | # This is multiplied by the cost of the ships the AI wants to build to determine how much the AI wants to build them. The higher this is, the more the AI is willing to spend on wanted ships |
| SHIP\_CONSTRUCTION\_WANTED\_BUILT\_SHIPS\_COST\_FACTOR | 0.3 | # This is multiplied by the cost of the existing ships, so that it allocates extra construction points for repairs/retrofitting |
| SHIP\_CONSTRUCTION\_DEBT\_RESUME | 0.1 | # If ship constructions are paused, resume once debt is this low relative to ceiling |
| SHIP\_CONSTRUCTION\_DEBT\_PAUSE | 0.3 | # If in this much relative debt to debt ceiling, pause all ship constructions |
| MIN\_SHIPS\_TO\_TRANSFER | 5 | # AI will not transfer ships between fleets unless at least this many are being transferred |
| SHIP\_TRANSFER\_BASE\_VALUE\_PER\_CONSTRUCTION\_POINT | 150 | # Base £ per construction point used for AI ship valuation (e.g. ship\_transfer treaty acceptance). Above the empirical ~£40/CP replacement cost so that target-side acceptance scores clear int32 truncation for mid-tier capital ships at multi-year bindings. |
| DISBAND\_OBSOLETE\_SHIP\_DAYS | 3650 | # If a ship has been marked obsolete by the AI for at least this many days (~10 years) and hasn't been sold/transferred away, the AI decommissions it outright. Paired with ship\_transfer: ships will ideally be sold before this threshold fires. |
| DISBAND\_OBSOLETE\_SHIP\_CREW\_RATIO | 0.8 | # If the ratio of crew needed to max available sailors exceeds this value, the AI will immediately decommission obsolete ships regardless of how long they've been obsolete |
| SHIP\_CONSTRUCTION\_BLOCK\_CREW\_RATIO | 1.0 | # If the ratio of crew needed to max available sailors is at or above this value, the AI will not queue new ship constructions |
| SUPPLY\_SHIP\_ALLOCATION\_HIGH\_RATIO | 0.5 | # If current supply ships are below this ratio of wanted, AI uses High supply construction allocation |
| SUPPLY\_SHIP\_ALLOCATION\_LOW\_RATIO | 1.0 | # If current supply ships are above this ratio of wanted, AI uses Low supply construction allocation |
| SUPPLY\_SHIP\_ALLOCATION\_VERY\_LOW\_RATIO | 1.5 | # If current supply ships are above this ratio of wanted, AI uses Very Low supply construction allocation |
| ``` # Below data is used for General Orders: ``` | | |
| HQ\_DEFENSE\_MIN\_THEATER\_SCORE | 100 | # Theater of local HQ must have at least this importance score to have a minimum garrison |
| NUM\_DAYS\_TO\_REMEMBER\_FAILED\_FRONT\_OR\_HQ\_ASSIGNMENT | 10 | # For how many days should the AI remember failing to assign a general to a front or HQ (and thus not try with that front again) |
| NUM\_DAYS\_TO\_REMEMBER\_FAILED\_SUPPLY\_ROUTE | 30 | # For how many days should the AI remember that a formation failed to find a supply route to a target |
| NUM\_DAYS\_TO\_REMEMBER\_FAILED\_NAVAL\_INVASION | 100 | # For how many days should the AI remember that a regular formation failed to launch a naval invasion |
| FRONT\_OR\_HQ\_IMPORTANCE\_MIN\_SCORE | 50 | # If a front is worth less than this, the AI will not assign any generals to it |
| ``` # Below data is for evaluating Commander Orders ``` | | |
| FRONT\_IMPORTANCE\_OWN\_FRONT\_WEIGHT\_MULT | 2.0 | # Fronts that we 'own' have the importance of their states multiplied by this |
| HQ\_STATIONING\_IMPORTANCE\_NOT\_OWN\_HQ\_WEIGHT\_MULT | 0.25 | # HQs of allies have their importance multiplied by this as the AI prefers stationing in its own HQs |
| HQ\_OR\_FRONT\_UNDEFENDED\_ASSIGNMENT\_WEIGHT | 2.0 | # Undefended HQs and Fronts are given preference by this multiplier for assignment of formations there |
| HQ\_OR\_FRONT\_SPLIT\_FORCE\_BASE\_FRACTION | 1.0 | # If splitting a force to cover undefended HQs/fronts, this is the fraction of the source formation that is sent when the two locations have an equal disparity in needed forces IF the army considered for splitting was not present |
| HQ\_OR\_FRONT\_SPLIT\_FORCE\_MIN\_FRACTION | 0.1 | # If splitting a force to cover undefended HQs/fronts, never send or leave behind less than this fraction of the source formation |
| HQ\_OR\_FRONT\_SPLIT\_FORCE\_DEFENDED\_LOCATION\_MIN\_FRACTION\_TO\_SEND | 0.33 | # If splitting a force to cover undefended HQs/fronts, don't send splinter armies to already defended fronts if the split of the source formation ends up smaller than this |
| # If no fleet can carry an entire army for naval transport, the AI will split the army if the best fleet can carry at least this fraction of the army |
| TRANSPORT\_SPLIT\_MIN\_FLEET\_CAPACITY\_FRACTION | 0.2 |  |
| UNITS\_PERCENTAGE\_TO\_BE\_CONSIDERED\_IN\_DISADVANTAGE | 0.50 | # A percentage [0.0, 1.0] representing how many AI units are on a front out of the total (AI's + Enemy's) units, used to determine when to start applying FRONT\_IMPORTANCE\_WEIGHT\_WHEN\_IN\_DISADVANTAGE. |
| ``` # When considering whether to move a general to a particular location, the disparity between wanted and current units of the new location is divided 1 + any relevant values below  # This is done to prevent the AI from making costly moves that would only result in small efficiency increases ``` | | |
| FRONT\_OR\_HQ\_UNIT\_DISPARITY\_FOR\_MOVE\_TRAVEL\_TIME\_FACTOR | 0.02 | # Each day of travel time adds this much to the divisor |
| FRONT\_OR\_HQ\_ACTIVE\_WAR\_MOVE\_FACTOR | 1.0 | # If a general is in an active war front, add this value to the divisor |
| ``` # The values below are all applied *after* FRONT_IMPORTANCE_MIN_SCORE is checked, so a front/HQ isn't going to be qualified or disqualified for AI actually caring about it by these multipliers ``` | | |
| FRONT\_CAPITAL\_HQ\_IMPORTANCE\_MULT | 2.0 | # Fronts that threaten the AI's own capital HQ have their importance multiplied by this |
| FRONT\_NON\_WAR\_ZONE\_IMPORTANCE\_MULT | 1.0 | # Fronts that are not being contested by the enemy have their importance multiplied by this |
| FRONT\_WAR\_ZONE\_IMPORTANCE\_MULT | 1.5 | # Fronts that \*are\* being contested by the enemy have their importance multiplied by this |
| HQ\_LANDLOCKED\_IMPORTANCE\_MULT | 0.0 | # Friendly HQs without a coast have their importance multiplied by this |
| HQ\_COASTAL\_NON\_WAR\_ZONE\_IMPORTANCE\_MULT | 0.5 | # Friendly HQs with a coast that are not under naval invasion have their importance multiplied by this |
| HQ\_COASTAL\_WAR\_ZONE\_IMPORTANCE\_MULT | 3.0 | # Friendly HQs that \*are\* under naval invasion have their importance multiplied by this |
| FRONT\_IN\_DISADVANTAGE\_FACTOR | 10.0 | # If a general is in an active war front with disadvantage, add this value to the divisor |
| ``` # At what fraction of combat strength and morale/org will the AI attack ``` | | |
| FRONT\_MIN\_OVERALL\_STRENGTH\_FACTOR\_TO\_ATTACK | 0.8 | # Must have at least this multiplier of overall power projection on the front compared to the enemy's to want to attack |
| FRONT\_MIN\_INDIVIDUAL\_ARMY\_STRENGTH\_FACTOR\_TO\_ATTACK | 0.95 | # Must have at least this multiplier of average power projection of allied formations on the front to want to attack |
| FRONT\_MIN\_MORALE\_TO\_ATTACK | 0.8 | # As a fraction of max morale (1) |
| FRONT\_MIN\_ORGANIZATION\_TO\_ATTACK | 0.4 | # As a fraction of formation's max organization |
| FRONT\_NO\_WARGOAL\_MIN\_STRENGTH\_FACTOR\_TO\_ATTACK | 4.0 | # If no explicit wargoal states remain uncaptured in enemy theater, require at least this strength multiplier to advance |
| ``` # Below data is used for Admiral Orders: ``` | | |
| BLOCKADE\_STATE\_TRADE\_VOLUME\_MILITARY\_GOODS\_WEIGHT | 5.0 | # Score weight for state blockade based on the trade volume of military goods in the state |
| BLOCKADE\_STATE\_TRADE\_VOLUME\_OTHER\_GOODS\_WEIGHT | 1.0 | # Score weight for state blockade based on the trade volume of other goods in the state |
| BLOCKADE\_STATE\_WEIGHT | 1 | # Score weight for state blockade based on the total score. The higher this is the more likely AI will choose to blockade the state rather than other offensive orders in the sea node |
| BLOCKADE\_ORDER\_LEVEL\_DELTA\_WEIGHT | 100 | # Score weight for admiral order based on how much blockade level this admiral provides |
| BLOCKADE\_ORDER\_NAVY\_STRENGTH\_RATIO\_MULT | 1 | # Navy strength ratio increases the blockade order score by this: score = score \* (1 + navy strength ratio \* this) |
| FLEET\_MISSION\_INTERCEPT\_WEIGHT | 1.5 | # Score weight for interception (defend HQ coasts) among other tasks in the sea province |
| FLEET\_MISSION\_PROJECT\_POWER\_WEIGHT | 1.0 | # Score weight for project power task among other tasks in the sea province |
| FLEET\_MISSION\_BLOCKADE\_WEIGHT | 3.0 | # Score weight for blockade among other tasks in the sea province |
| FLEET\_MISSION\_RAID\_SUPPLY\_WEIGHT | 3.0 | # Score weight for raid military supply among other tasks in the sea province |
| FLEET\_MISSION\_PROTECT\_SUPPLY\_WEIGHT | 2.0 | # Score weight for escorting military supply among other tasks in the sea province |
| FLEET\_MISSION\_PORT\_BOMBARDMENT\_WEIGHT | 1.0 | # Score weight for port bombardment among other tasks in the sea province |
| FLEET\_MISSION\_PIRACY\_WEIGHT | 1.0 | # Score weight for commercial raiding against neutrals & hostiles in the sea province |
| FLEET\_MISSION\_PRIVATEER\_WEIGHT | 1.0 | # Score weight for commercial raiding against hostiles in the sea province |
| FLEET\_MISSION\_HUNT\_PIRATES\_WEIGHT | 1.0 | # Score weight for defending against commercial raiding in the sea province |
| FLEET\_MISSION\_DEFEND\_COAST\_WEIGHT | 5.0 | # Score weight for defending the coast against naval invasion & blockades |
| FLEET\_TASK\_ASSIGNMENT\_RANDOM\_SPICE | 0.5 | # Random factor for fleet mission selection, also determines stickiness to prevent flip-flopping |
| FLEET\_SEA\_PROVINCE\_ASSIGNMENT\_STICKINESS | 1.5 | # Fleet-to-sea-province score is multiplied by this when the fleet is already assigned to that province |
| FLEET\_SEA\_PROVINCE\_SETTLING\_DAYS | 60 | # Days for the settling stickiness multiplier to decay from max to 1x |
| FLEET\_SEA\_PROVINCE\_SETTLING\_STICKINESS\_MULT | 4.0 | # Extra stickiness multiplier for recently assigned fleets (at day 0), linearly decays to 1x over SETTLING\_DAYS |
| FLEET\_SEA\_PROVINCE\_HOME\_HQ\_SCORE | 0.5 | # The higher this is the more likely fleets would defend their home HQs |
| FLEET\_SEA\_PROVINCE\_DISTANCE\_SCORE | 1 | # The higher this is the more the distance to the sea province matters for fleet task score |
| FLEET\_SEA\_PROVINCE\_DISTANCE\_SCORE\_MAX\_DISTANCE | 5000 | # Distance score is calculated linearly from 0 to this using effective supply distance (pathfinding with friendly port discount) |
| FLEET\_RAID\_CONVOYS\_TASK\_SCORE\_FROM\_STRENGTH | 2 | # The higher this is the more likely fleets with high convoy raiding strength would do the convoy raiding task |
| FLEET\_ESCORT\_CONVOYS\_TASK\_SCORE\_FROM\_DEFENSE | 2 | # The higher this is the more likely fleets with high convoy escorting strength would do the convoy escorting task |
| FLEET\_PROJECT\_INTEREST\_TASK\_SCORE\_FROM\_INTEREST\_PROJECTION | 2 | # The higher this is the more likely fleets with high project interest strength would do the project interest task |
| FLEET\_DEFEND\_FROM\_CONVOY\_RAID\_TASK\_SCORE\_FROM\_PROTECTION | 2 | # Is scaled by the amount of convoys that the fleet would protect and counts towards the fleet score for the task |
| FLEET\_DEFEND\_FROM\_NAVAL\_INVASION\_TASK\_SCORE\_FROM\_PROJECTION | 0.5 | # The higher this is the more likely fleets with high power projection would defend from naval invasion and block enemies from landing |
| FLEET\_DEFEND\_FROM\_NAVAL\_INVASION\_TASK\_SCORE\_FROM\_SHIPS | 0.1 | # Is scaled by the amount of ships that the fleet has and counts towards the fleet score for the task |
| FLEET\_DEFEND\_FROM\_BLOCKADE\_TASK\_SCORE\_FROM\_STRENGTH | 1.5 | # The higher this is the more likely fleets with stronger ships would defend from enemy blockades |
| FLEET\_BLOCKADE\_TASK\_SCORE\_FROM\_STRENGTH | 1.5 | # The higher this is the more likely fleets with high blockade strength would blockade enemy states |
| FLEET\_BLOCKADE\_TASK\_SCORE\_NO\_HOSTILES | 0.5 | # Gives a boost to priority if there are no hostiles present |
| FLEET\_BLOCKADE\_TASK\_SCORE\_STRENGTH\_RATIO\_FACTOR | 1.5 # How much the strength ratio between hostiles/friendlies affect the weighting |
| FLEET\_PORT\_BOMBARDMENT\_TASK\_SCORE\_NO\_HOSTILES | 0.5 | # Gives a boost to priority if there are no hostiles present |
| FLEET\_PORT\_BOMBARDMENT\_TASK\_SCORE\_STRENGTH\_RATIO\_FACTOR | 1.5 # How much the strength ratio between hostiles/friendlies affect the weighting |
| FLEET\_INTERCEPT\_TASK\_SCORE\_STRENGTH\_RATIO\_FACTOR | 3.0 # How much the strength ratio between hostiles/friendlies affect the weighting |
| FLEET\_MISSION\_MAX\_SEA\_REGIONS | 3 | # Max sea regions a fleet mission can be assigned to by the AI |
| RAID\_CONVOYS\_ORDER\_SCORE | 30 | # Score for admiral order to raid convoys |
| INTERCEPT\_ORDER\_SCORE | 40 | # Score for admiral order to intercept |
| SEA\_NODE\_OFFENSIVE\_FLEET\_SHIPPING\_LANES\_WEIGHT | 0.5 | # Score weight for sea node based on the total score for AI to raid convoys. The higher this is the higher AI will prioritize sea nodes with enemy convoys to raid |
| SEA\_NODE\_OFFENSIVE\_FLEET\_STATE\_BLOCKADE\_WEIGHT | 0.5 | # Score weight for sea node based on the total score for AI to blockade states. The higher this is the higher AI will prioritize sea nodes with potential states to blockade |
| RAID\_CONVOYS\_LANE\_SIZE\_FACTOR | 0.5 | # Multiplied by the number of convoys that the target shipping lane uses |
| ESCORT\_CONVOYS\_ABSOLUTE\_LANE\_SIZE\_FACTOR | 0.1 | # Apply this score per actual convoy used by the route |
| ESCORT\_CONVOYS\_LANE\_SIZE\_FACTOR\_MAX | 200 | # Total lane size factor cannot be above this |
| ESCORT\_CONVOYS\_PORT\_CONNECTION\_WAR\_MULT | 0.1 | # Score for shipping lanes supporting overseas ports multiplied by this while at war |
| ESCORT\_CONVOYS\_PORT\_CONNECTION\_PEACE\_MULT | 1.0 | # Score for shipping lanes supporting overseas ports multiplied by this while not at war |
| ``` # Below data is used to determine which states should be colonized first ``` | | |
| NUM\_GROWING\_COLONIES\_BASE | 1 | # How many colonies will the AI keep growing at once (base amount) |
| NUM\_GROWING\_COLONIES\_SCALED | 0.01 | # 1 extra colony at once per this amount of colonial growth points |
| NUM\_GROWING\_COLONIES\_MAX | 5 | # No more than this amount of growing colonies at once, regardless of amount of colonial growth points |
| COLONY\_BASE\_WEIGHT | 50 |  |
| COLONY\_POPULATION\_WEIGHT | 0.2 | # Per 10000 pops |
| COLONY\_ARABLE\_LAND\_WEIGHT | 10 |  |
| COLONY\_ADJACENT\_WEIGHT\_MULT | 10.0 |  |
| COLONY\_UNCONTESTED\_WEIGHT\_MULT | 3.0 |  |
| COLONY\_RANDOM\_FACTOR | 2 |  |
| ``` # This determines how much of their potential conscripts' needed military goods the AI will try to supply even when those conscripts are not raised ``` | | |
| CONSCRIPTION\_CENTER\_MILITARY\_SPENDING\_TARGET\_BASE | 0.05 | # Multiplied by the country's ratio of conscripts to regular troops |
| CONSCRIPTION\_CENTER\_MILITARY\_SPENDING\_TARGET\_MAX | 0.25 | # Spending target cannot exceed this amount |
| ``` # Below data is used to determine how the AI invests into institution ``` | | |
| INSTITUTION\_INVESTMENT\_RANDOM\_FACTOR | 1.0 | # The higher this is, the more random AI institution selection will be |
| INSTITUTION\_CURRENT\_INVESTMENT\_DIVISOR | 0.25 | # Score for institution is divided by 1 + ( current levels after the first \* this ) |
| MAX\_INSTITUTION\_SPENDING\_BASE | 0.015 | # AI will not spend more BUR than this on institutions (scaled by weekly GDP) |
| MAX\_INSTITUTION\_SPENDING\_PER\_INSTITUTION | 0.005 | # Added to MAX\_INSTITUTION\_SPENDING\_BASE for each institution a country has |
| INSTITUTION\_SPENDING\_INCREASE\_SPENDING\_RATIO | 1.0 | # If current + additional institution spending is equal or less than max spending \* this, try to improve some institutions |
| INSTITUTION\_SPENDING\_DECREASE\_SPENDING\_RATIO | 2.0 | # If current institution spending is at least max spending \* this, try to degrade some institutions |
| ``` # Below data is used to calculate how much weight the AI places on different things it can spend its weekly money income on ``` | | |
| MONEY\_SPENDING\_RANDOM\_FACTOR | 2.0 | # The higher this is, the more random new AI money spending will be |
| MONEY\_SPENDING\_MAX\_RATIO\_TO\_REMOVE\_SHOULD\_HAVE | 1.05 | # How low of a income-to-expenses ratio does the AI need to have to consider reducing spending on a 'should-have' |
| MONEY\_SPENDING\_MAX\_RATIO\_TO\_REMOVE\_WANTS\_TO\_HAVE | 1.10 | # How low of a income-to-expenses ratio does the AI need to have to consider reducing spending on a 'wants-to-have' |
| MONEY\_SPENDING\_MAX\_RATIO\_TO\_REMOVE\_NICE\_TO\_HAVE | 1.20 | # How low of a income-to-expenses ratio does the AI need to have to consider reducing spending on a 'nice-to-have' |
| MONEY\_SPENDING\_MIN\_RATIO\_TO\_ADD\_SHOULD\_HAVE | 1.2 | # How much of a income-to-expenses ratio does AI want to have after increasing spending for a 'should-have' project |
| MONEY\_SPENDING\_MIN\_RATIO\_TO\_ADD\_WANTS\_TO\_HAVE | 1.3 | # How much of a income-to-expenses ratio does AI want to have after increasing spending for a 'wants-to-have' project |
| MONEY\_SPENDING\_MIN\_RATIO\_TO\_ADD\_NICE\_TO\_HAVE | 1.4 | # How much of a income-to-expenses ratio does AI want to have after increasing spending for a 'nice-to-have' project |
| MONEY\_SPENDING\_MIN\_SURPLUS\_TO\_ADD\_SHOULD\_HAVE | 2000 | # How much of a surplus in absolute money does AI want to have after increasing spending for a 'should-have' project |
| MONEY\_SPENDING\_MIN\_SURPLUS\_TO\_ADD\_WANTS\_TO\_HAVE | 5000 | # How much of a surplus in absolute money does AI want to have after increasing spending for a 'wants-to-have' project |
| MONEY\_SPENDING\_MIN\_SURPLUS\_TO\_ADD\_NICE\_TO\_HAVE | 10000 | # How much of a surplus in absolute money does AI want to have after increasing spending for a 'nice-to-have' project |
| MONEY\_SPENDING\_MIN\_SURPLUS\_TO\_IGNORE\_RATIO\_FOR\_SHOULD\_HAVE | 15000 | # If AI has this surplus in absolute money, it's always fine to increase spending on a 'should-have' project, regardless of income ratio |
| MONEY\_SPENDING\_MIN\_SURPLUS\_TO\_IGNORE\_RATIO\_FOR\_WANTS\_TO\_HAVE | 30000 | # If AI has this surplus in absolute money, it's always fine to increase spending on a 'wants-to-have' project, regardless of income ratio |
| MONEY\_SPENDING\_MIN\_SURPLUS\_TO\_IGNORE\_RATIO\_FOR\_NICE\_TO\_HAVE | 50000 | # If AI has this surplus in absolute money, it's always fine to increase spending on a 'nice-to-have' project, regardless of income ratio |
| MONEY\_SPENDING\_ACCEPTABLE\_WAR\_DEBT | 0.5 | # If the AI has less than this % debt to ceiling, avoid doing cost-cutting at war for 'wants to have' and above |
| MONEY\_SPENDING\_MIN\_RATIO\_TO\_CONSIDER\_GOLD\_RESERVES | 0.8 | # How low of a income-to-expenses ratio does the AI need to have to try to cut spending regardless of how plentiful its gold reserves are (when at peace) |
| MONEY\_SPENDING\_MIN\_WEEKS\_OF\_GOLD\_RESERVES\_TO\_NOT\_REMOVE\_SHOULD\_HAVE | 20 | # If we have enough gold reserves to maintain our current spending for this long, don't decrease spending on a 'should-have' |
| MONEY\_SPENDING\_MIN\_WEEKS\_OF\_GOLD\_RESERVES\_TO\_NOT\_REMOVE\_WANTS\_TO\_HAVE | 40 | # If we have enough gold reserves to maintain our current spending for this long, don't decrease spending on a 'wants-to-have' |
| MONEY\_SPENDING\_MIN\_GOLD\_RESERVE\_FRACTION\_TO\_ADD\_SHOULD\_HAVE | 0.1 | If we don't have at least this fraction of gold reserves, don't increase spending on a 'should-have' |
| MONEY\_SPENDING\_MIN\_GOLD\_RESERVE\_FRACTION\_TO\_ADD\_WANTS\_TO\_HAVE | 0.2 | # If we don't have at least this fraction of gold reserves, don't increase spending on a 'wants-to-have' |
| MONEY\_SPENDING\_MIN\_GOLD\_RESERVE\_FRACTION\_TO\_ADD\_NICE\_TO\_HAVE | 0.3 | # If we don't have at least this fraction of gold reserves, don't increase spending on a 'nice-to-have' |
| MONEY\_SPENDING\_LAND\_THREAT\_THRESHOLD | 0.25 | # If a hostile country has a more than this much larger army than AI does, it wants to increase military spending |
| MONEY\_SPENDING\_NAVY\_THREAT\_THRESHOLD | 0.50 | # If a hostile country has a more than this much larger navy than AI does, it wants to increase military spending |
| MONEY\_SPENDING\_PRESTIGE\_RIVAL\_THRESHOLD | 0.5 | # If a rival has this much more prestige than AI does, it wants to increase spending on art academies |
| MONEY\_SPENDING\_BELOW\_CRITICAL\_THRESHOLD\_MULTIPLIER | 5.0 | # Increase scoring for money spending of certain items that are below critical thresholds by this (as specified by CRITICAL\_THRESHOLD defines below) |
| MONEY\_SPENDING\_MILITARY\_CRITICAL\_THRESHOLD | 0.5 | # If actual-to-wanted number of barracks is below this, AI will not consider downsizing them further |
| MONEY\_SPENDING\_MILITARY\_EXCESSIVE\_THRESHOLD | 2.0 | # If actual-to-wanted number of barracks is above this, AI considers it a target for cutting spending when needed |
| MONEY\_SPENDING\_MILITARY\_WRONG\_UNIT\_TYPE\_MULTIPLIER | 0.01 | # Score multiplier for decreasing spending on barracks that lack combat units of the type we want to disband |
| MONEY\_SPENDING\_FORTIFICATIONS\_CRITICAL\_THRESHOLD | 0.5 | # If actual-to-wanted number of fortifications is below this, AI increases priority to construct them |
| MONEY\_SPENDING\_CONSTRUCTION\_TOO\_LARGE\_INVESTMENT\_POOL\_FACTOR | 0.75 | # The higher this is, the more the AI will invest into construction when their investment pool has grown too large for their construction capacity (capped at 1) |
| MONEY\_SPENDING\_CONSTRUCTION\_CRITICAL\_THRESHOLD | 0.75 | If actual-to-wanted construction production is below this, AI considers it very important to get more |
| MONEY\_SPENDING\_CONSTRUCTION\_EXCESSIVE\_THRESHOLD | 1.05 | # If actual-to-wanted construction production is at least this, AI considers it nice to have |
| MONEY\_SPENDING\_SHIP\_CONSTRUCTION\_CRITICAL\_THRESHOLD | 0.75 | # If actual-to-wanted ship construction production is below this, AI considers it very important to get more |
| MONEY\_SPENDING\_SHIP\_CONSTRUCTION\_EXCESSIVE\_THRESHOLD | 1.05 | # If actual-to-wanted ship construction production is at least this, AI considers it nice to have |
| MONEY\_SPENDING\_INNOVATION\_DESIRED\_THRESHOLD | 1.0 | # If innovation production compared to cap is worse than this, AI considers it important to improve |
| MONEY\_SPENDING\_INNOVATION\_EXCESSIVE\_THRESHOLD | 1.25 | CONSUMPTION\_TAX\_MAX\_NUM\_TAXED\_GOODS\_PER\_MISSING\_TAX\_TYPE# If innovation production compared to cap is at least this, AI considers it nice to have |
| MONEY\_SPENDING\_SUPPLY\_NETWORK\_CRITICAL\_THRESHOLD | 0.75 | # If supply network is worse than this, AI considers it critical to improve it |
| MONEY\_SPENDING\_SUPPLY\_NETWORK\_DESIRED\_THRESHOLD | 1.25 | # If supply network is worse than this, AI wants to improve it |
| MONEY\_SPENDING\_BUREAUCRACY\_CRITICAL\_THRESHOLD | 1.0 | # If bureaucracy income to expenses is worse than this, AI considers it critical to improve it |
| MONEY\_SPENDING\_BUREAUCRACY\_DESIRED\_THRESHOLD | 1.20 | # If bureaucracy income to expenses is worse than this, AI wants to improve it |
| MONEY\_SPENDING\_BUREAUCRACY\_EXCESSIVE\_THRESHOLD | 1.30 | # If bureaucracy income to expenses is better than this, AI will not improve it |
| MONEY\_SPENDING\_INFRASTRUCTURE\_CRITICAL\_THRESHOLD | 0.80 | # If infra production to usage is worse than this, AI considers it critical to improve it |
| MONEY\_SPENDING\_INFRASTRUCTURE\_DESIRED\_THRESHOLD | 1.20 | # If infra production to usage is worse than this, AI wants to improve it |
| ``` # Below data is used to calculate how much weight the AI places on specific government buildings ``` | | |
| GOVERNMENT\_BUILDING\_BASE\_VALUE | 1000 | # If no ai\_value is scripted in the building |
| GOVERNMENT\_BUILDING\_FAVORED\_GOODS\_FACTOR | 0.25 | # Total weight is multiplied by ( 1 + this ) for each building output that the AI favors for either import or export |
| GOVERNMENT\_BUILDING\_DISFAVORED\_GOODS\_FACTOR | -0.10 | # Total weight is multiplied by ( 1 + this ) for each building output good that the AI disfavors |
| GOVERNMENT\_BUILDING\_NO\_AVAILABLE\_WORKFORCE\_FACTOR | 0.01 | # Total weight is multiplied by this if the state lacks enough workforce to staff the building |
|  |  | # Below data is used to calculate where the AI will locate new government buildings |
| GOVERNMENT\_BUILDING\_STATE\_CAPITAL\_FACTOR | 250 | # Add this score for certain types of government buildings in the capital |
| GOVERNMENT\_BUILDING\_STATE\_MARKET\_CAPITAL\_FACTOR | 250 | # Add this score for certain types of government buildings in the market capital |
| GOVERNMENT\_BUILDING\_STATE\_ARMY\_NON\_ACCEPTED\_POP\_FACTOR | -250 | # Multiply this score by fraction of discriminated Pops in the state |
| GOVERNMENT\_BUILDING\_STATE\_ARMY\_ACCEPTED\_POP\_FACTOR | 250 | # Multiply this score by fraction of accepted Pops in the state |
| GOVERNMENT\_BUILDING\_STATE\_NAVY\_NON\_ACCEPTED\_POP\_FACTOR | -250 | # Multiply this score by fraction of discriminated Pops in the state |
| GOVERNMENT\_BUILDING\_STATE\_NAVY\_ACCEPTED\_POP\_FACTOR | 250 | # Multiply this score by fraction of accepted Pops in the state |
| GOVERNMENT\_BUILDING\_STATE\_UNINCORPORATED\_MULT | 0.25 | # Multiply score by this if the state is unincorporated |
| GOVERNMENT\_BUILDING\_STATE\_MISSING\_QUALIFICATIONS\_MULT | 0.10 | # Multiply score by this if there's not enough qualifications to staff the building |
| GOVERNMENT\_BUILDING\_STATE\_MISSING\_INFRASTRUCTURE\_DIV | 0.50 | # Divide score by ( 1 + this \* number of missing infrastructure after adding this building ) |
| GOVERNMENT\_BUILDING\_STATE\_POP\_CONSTRUCTION\_SECTOR\_IMPORTANCE\_THRESHOLD | 250000 | # Above this amount of state population, AI considers it important to have a construction sector in the state |
| GOVERNMENT\_BUILDING\_STATE\_POP\_CONSTRUCTION\_SECTOR\_IMPORTANCE\_MULT | 1.5 | # Multiply score by this if state GDP is at least the above value for purposes of scoring the first level of construction sector |
| ``` # Below data is used to calculate how much weight the AI places on specific subsidies ``` | | |
| SUBSIDIZE\_BASE\_VALUE | 1000 |  |
| SUBSIDIZE\_SHARE\_OF\_INFRA\_FACTOR | 4000 | # How highly is subsidization of a building valued if it provides 100% of the infrastructure in the state region |
| SUBSIDIZE\_SHARE\_OF\_SUPPLY\_FACTOR | 2000 | # How highly is subsidization of a building valued if it provides 100% of the sell orders for a good in the market |
| SUBSIDIZE\_FAVORED\_GOODS\_MULT | 1.5 | # Share of supply factor is multiplied by this for a good that the AI wants a high supply of |
| SUBSIDIZE\_DISFAVORED\_GOODS\_MULT | 0.75 | # Share of supply factor is multiplied by this for a good that the AI disfavors |
| ``` # Below data is used to calculate how much weight the AI places on different things it can spend its authority on ``` | | |
| AUTHORITY\_SPENDING\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random new AI authority spending will be |
| COMPANY\_CHARTER\_AUTHORITY\_SPENDING\_PERCENTAGE | 0.15 | #Ratio of authority expenses that we want country to spend on authority |
| PROMOTION\_BASE\_VALUE | 50 | # Below data is used to calculate how much weight the AI places on promoting an IG |
| SUPPRESSION\_BASE\_VALUE | 75 | # Below data is used to calculate how much weight the AI places on suppressing an IG |
| ``` # Below data is used to calculate how much weight the AI places on consumption taxes ``` | | |
| CONSUMPTION\_TAX\_INCOME\_VALUE | 10 | # Per percent of state expenses in taxable value (this is then multiplied by relative authority cost of the good) |
| CONSUMPTION\_TAX\_STAPLE\_MULT | 0.5 | # Multiply desire to tax staple goods by this |
| CONSUMPTION\_TAX\_LUXURY\_MULT | 2.0 | # Multiply desire to tax luxury goods by this |
| CONSUMPTION\_TAX\_LOW\_INCOME\_THRESHOLD | 1.25 | # Income-to-expenses threshold below which consumption taxes are a must-have |
| CONSUMPTION\_TAX\_HIGH\_INCOME\_THRESHOLD | 1.5 | # Income-to-expenses threshold at which consumption taxes should be removed (if removal would not put us below this) |
| CONSUMPTION\_TAX\_MAX\_NUM\_TAXED\_GOODS\_BASE | 0 | # Base max number of goods AI wants to tax |
| CONSUMPTION\_TAX\_MAX\_NUM\_TAXED\_GOODS\_PER\_MISSING\_TAX\_TYPE | 2 | # Added to max number of goods AI wants to tax for each other type of tax it does not collect |
| ``` # GDP limiters on where the AI will construct Trade Centers - note that decreasing these can adversely affect performance! ``` | | |
| TRADE\_CENTER\_MINIMUM\_GDP\_MARKET\_CAPITAL | 100000 | # For market capital states, yearly GDP |
| TRADE\_CENTER\_MINIMUM\_GDP\_NON\_MARKET\_CAPITAL | 500000 | # For all other states, yearly GDP |
| TRADE\_CENTER\_MINIMUM\_GDP\_NON\_COASTAL\_MULT | 2.0 | # Multiplies the GDP threshold for non-coastal states (additive) |
| TRADE\_CENTER\_MINIMUM\_GDP\_UNRECOGNIZED\_MULT | 2.0 | # Multiplies the GDP threshold for unrecognized countries (additive) |
| TRADE\_CENTER\_MINIMUM\_GDP\_PASSED\_YEARS\_MULT | 0.02 | # Above values are multiplied by 1 + ( number of years since game start \* this ) (additive) |
| ``` # Below data is used to calculate how much weight the AI places on a production building ``` | | |
| PRODUCTION\_BUILDING\_RANDOM\_FACTOR | 10.0 | # The higher this is, the more random AI construction will be |
| PRODUCTION\_BUILDING\_STATE\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random AI state selection for building types will be |
| PRODUCTION\_BUILDING\_STATE\_NO\_AVAILABLE\_WORKFORCE\_FACTOR | 0.05 | # Score for states with no available workforce is multiplied by this when selecting a state to build in |
| PRODUCTION\_BUILDING\_BASE\_VALUE | 1000 | # If no ai\_value is scripted in the building |
| PRODUCTION\_BUILDING\_NO\_AVAILABLE\_WORKFORCE\_FACTOR | 0.25 | # Total weight is multiplied by this if the state lacks enough workforce to staff the building |
| PRODUCTION\_BUILDING\_GOODS\_PROFIT\_FACTOR | 5000 | # Per pound of predicted building profit (divided by employee count per level) |
| PRODUCTION\_BUILDING\_GOODS\_DEFICIT\_FACTOR | 10000 | # Per pound of predicted building deficit (divided by employee count per level and multiplies a negative value) |
| PRODUCTION\_BUILDING\_GOODS\_DEFICIT\_SUBSIDIZE\_FACTOR | 5000 | # Overrides PRODUCTION\_BUILDING\_GOODS\_DEFICIT\_FACTOR for subsidized buildings |
| PRODUCTION\_BUILDING\_PRODUCED\_VALUE\_FACTOR | 0.25 | # Per pound of produced goods in base value |
| PRODUCTION\_BUILDING\_PRODUCED\_TRADE\_CAPACITY\_FACTOR | 10000 | # Per produced trade capacity, multiplied by the available potential for trade in the state and divided by state GDP |
| PRODUCTION\_BUILDING\_PRODUCED\_TRADE\_CAPACITY\_GDP\_ADDED\_FOR\_DIVISOR | 10000 | # Added to state GDP when dividing PRODUCTION\_BUILDING\_PRODUCED\_TRADE\_CAPACITY\_FACTOR |
| PRODUCTION\_BUILDING\_PRODUCED\_TRADE\_CAPACITY\_EXPECTED\_REVENUE\_PER\_UNIT | 25 | # Each trade capacity is loosely expected to generate about this much revenue, used when predicting revenue from new TCs |
| PRODUCTION\_BUILDING\_INCORPORATED\_INFRASTRUCTURE\_USAGE\_FACTOR | 0.05 | # Total weight is divided by ( 1 + this \* building infrastructure usage ) in incorporated states |
| PRODUCTION\_BUILDING\_UNINCORPORATED\_INFRASTRUCTURE\_USAGE\_FACTOR | 1.0 | # Total weight is divided by ( 1 + this \* building infrastructure usage ) in unincorporated states |
| PRODUCTION\_BUILDING\_INPUT\_NO\_LOCAL\_PRODUCTION\_FACTOR | -0.5 | # Add this value to a building for each unit of money worth of goods consumed that are not produced in the state but \*are\* produced by buildings in the market |
| PRODUCTION\_BUILDING\_OUTPUT\_NO\_LOCAL\_CONSUMPTION\_FACTOR | -0.5 | # Add this value to a building for each unit of money worth of goods produced that are not consumed in the state but \*are\* consumed by buildings in the market |
| PRODUCTION\_BUILDING\_OUTPUT\_HIGH\_PRICE\_THRESHOLD | 1.25 | # Lower threshold multiplier of base price for applying 'high price' modifier below |
| PRODUCTION\_BUILDING\_OUTPUT\_HIGH\_PRICE\_FACTOR | 0.25 | # Add this value to a building for each unit of money worth of goods above high price threshold that this building produces |
| PRODUCTION\_BUILDING\_OUTPUT\_HIGH\_PRICE\_WANTS\_HIGH\_SUPPLY\_FACTOR | 0.75 | # Add this value to a building for each unit of money worth of goods above high price threshold that this building produces and which we want a high supply of |
| PRODUCTION\_BUILDING\_OUTPUT\_HIGH\_PRICE\_LOCAL\_CONSUMPTION\_MULTIPLIER | 2.0 | # All factors for high prices are multiplied by this value if any buildings in the state consume the good in question |
| PRODUCTION\_BUILDING\_OUTPUT\_LOW\_PRICE\_THRESHOLD | 0.75 | # Upper threshold multiplier of base price for applying 'low price' modifier below |
| PRODUCTION\_BUILDING\_OUTPUT\_LOW\_PRICE\_FACTOR | -0.5 | # Add this value to a building for each unit of money worth of goods below low price threshold that this building produces |
| PRODUCTION\_BUILDING\_SUBSIDIZE\_PRICE\_FACTOR\_MULT | 1.25 | # Multiply the effects of price factors on buildings that the AI will consider subsidizing |
| PRODUCTION\_BUILDING\_OUTPUT\_NEW\_GOODS\_FACTOR | 100.0 | # Add this value to a building for each unit of money worth of goods that currently isn't available in our market but the AI wants to prioritize |
| PRODUCTION\_BUILDING\_OUTPUT\_NEW\_GOODS\_STATE\_INCORPORATED\_POPULATION\_THRESHOLD | 250000 | # When the AI prioritizes 'new goods' in a state rather than a market (because of local goods) it only cares about incorporated states with at least this much population |
| PRODUCTION\_BUILDING\_OUTPUT\_NEW\_GOODS\_STATE\_UNINCORPORATED\_POPULATION\_THRESHOLD | 1000000 | # When the AI prioritizes 'new goods' in a state rather than a market (because of local goods) it only cares about unincorporated states with at least this much population |
| PRODUCTION\_BUILDING\_OUTPUT\_WANTED\_INDUSTRIAL\_GOODS\_FACTOR | 0.25 | # Add this value to a building for each unit of money worth of industrial goods that aren't overproduced in the country and are used by buildings |
| PRODUCTION\_BUILDING\_OUTPUT\_WANTED\_MILITARY\_GOODS\_FACTOR | 0.25 | # Add this value to a building for each unit of money worth of military goods that aren't overproduced in the country and are used by buildings |
| PRODUCTION\_BUILDING\_OUTPUT\_NEEDED\_INDUSTRIAL\_GOODS\_FACTOR | 0.5 | # Add this value to a building for each unit of money worth of industrial goods that are underproduced in the country and are used by buildings |
| PRODUCTION\_BUILDING\_OUTPUT\_NEEDED\_MILITARY\_GOODS\_FACTOR | 0.5 | # Add this value to a building for each unit of money worth of military goods that are underproduced in the country and are used by buildings |
| PRODUCTION\_BUILDING\_FAVORED\_GOODS\_FACTOR | 0.5 | # Add this value to a building for each unit of money worth of building goods output that the AI favors |
| PRODUCTION\_BUILDING\_DISFAVORED\_GOODS\_FACTOR | -0.25 | # Add this value to a building for each unit of money worth of building goods output that the AI disfavors |
| PRODUCTION\_BUILDING\_MISSING\_QUALIFICATIONS\_MULT | 0.50 | # Multiply score by this if there's not enough qualifications to staff the building (disabled for now) |
| PRODUCTION\_BUILDING\_DESIRED\_INFRASTRUCTURE\_SURPLUS | 2 | # If infrastructure 'surplus' in state is less than this, AI wants to improve it |
| PRODUCTION\_BUILDING\_FREE\_INFRASTRUCTURE\_TARGET\_WHEN\_LACKING\_WORKFORCE | 5 | # When lacking workforce, the AI will stop building in the state once available infrastructure is this or less |
| PRODUCTION\_BUILDING\_EXCESSIVE\_INFRASTRUCTURE\_SURPLUS | 10 | # If infra 'surplus' in state is at least this, AI doesn't want to improve it |
| PRODUCTION\_BUILDING\_REDUCE\_SHORTAGE\_MULT | 5 | # Multiply score by this if we're reducing the state region's shortages |
| PRODUCTION\_BUILDING\_INCREASE\_SHORTAGE\_MULT | 0.01 | # Multiply score by this if we're increasing the state region's shortages |
| PRODUCTION\_BUILDING\_OTHER\_BUILDING\_TYPES\_UNDER\_CONSTRUCTION\_DIV | 0.5 | # Divide score by (1 + this \* number of other building types queued in the state) |
| PRODUCTION\_BUILDING\_LONG\_CONSTRUCTION\_TIME\_THRESHOLD | 40 |  |
| PRODUCTION\_BUILDING\_LONG\_CONSTRUCTION\_TIME\_MULT | 0.5 | # Multiply score by this if construction time would take more than PRODUCTION\_BUILDING\_LONG\_CONSTRUCTION\_TIME\_THRESHOLD weeks at full construction industry usage (ignores MAX\_WEEKLY\_CONSTRUCTION\_PROGRESS) |
| PRODUCTION\_BUILDING\_VERY\_LONG\_CONSTRUCTION\_TIME\_THRESHOLD | 60 |  |
| PRODUCTION\_BUILDING\_VERY\_LONG\_CONSTRUCTION\_TIME\_MULT | 0.25 | # Multiply score by this if construction time would take more than PRODUCTION\_BUILDING\_VERY\_LONG\_CONSTRUCTION\_TIME\_THRESHOLD weeks at full construction industry usage (ignores MAX\_WEEKLY\_CONSTRUCTION\_PROGRESS) |
| PRODUCTION\_BUILDING\_FOREIGN\_INVESTMENT\_HAS\_RECENT\_NATIONALIZATION\_MULT | 0.1 | # Multiply score by this if the construction is a foreign investment into a country that has recently nationalized buildings held by investor country |
| PRODUCTION\_BUILDING\_FOREIGN\_INVESTMENT\_COMPANY\_MULT | 1.5 | # Multiply score by this if the construction is a foreign investment by the country that has at least one established company for the building type |
| ``` # Government construction applies this multiplier to domestic states when determining where to construct ``` | | |
| GOVERNMENT\_CONSTRUCTION\_DOMESTIC\_INVESTMENT\_BIAS | 2.0 |  |
| GOVERNMENT\_CONSTRUCTION\_SUBJECT\_INVESTMENT\_BIAS | 1.5 |  |
| ``` # The AI is much more likely to select a state that fulfills the ai_construction_targets criteria for the next company it's planning to form # For example, when trying to form company_lkab it is much more likely to select Norrland as the # Values below determine the exact weight for this for government vs private investment # There are two sets of weights: One applied for the building type as a whole (when compared to other building types), and a second applied only when selecting the state for the building type ``` | | |
| GOVERNMENT\_COMPANY\_TARGET\_BUILDING\_TYPE\_CONSTRUCTION\_FACTOR | 5 |  |
| GOVERNMENT\_COMPANY\_TARGET\_STATE\_NO\_BUILDING\_CONSTRUCTION\_FACTOR | 20 | # Applied when the state does not already have the target building type |
| GOVERNMENT\_COMPANY\_TARGET\_STATE\_WITH\_BUILDING\_CONSTRUCTION\_FACTOR | 50 | # Applied when the state \*does\* already have the target building type |
| AUTONOMOUS\_INVESTMENT\_COMPANY\_TARGET\_BUILDING\_TYPE\_CONSTRUCTION\_FACTOR | 5 |  |
| AUTONOMOUS\_INVESTMENT\_COMPANY\_TARGET\_STATE\_NO\_BUILDING\_CONSTRUCTION\_FACTOR | 20 | # Applied when the state does not already have the target building type |
| AUTONOMOUS\_INVESTMENT\_COMPANY\_TARGET\_STATE\_WITH\_BUILDING\_CONSTRUCTION\_FACTOR | 50 | # Applied when the state \*does\* already have the target building type |
| ``` # This much of collectivization fraction translates into self-investment chance for a building # Under total collectivization self investment chance is always 100% ``` | | |
| AUTONOMOUS\_INVESTMENT\_SELF\_INVESTMENT\_CHANCE\_FROM\_COLLECTIVIZATION | 0.5 |  |
| PRODUCTION\_BUILDING\_TREATY\_PORT\_TRADE\_CENTER\_FACTOR | 5.0 | # Score for Trade Center buildings in Treaty Ports is multiplied by this when selecting state for a construction |
| PRODUCTION\_BUILDING\_TREATY\_PORT\_NON\_TRADE\_CENTER\_FACTOR | 0.10 | # Score for non Trade Center buildings in Treaty Ports is multiplied by this when selecting state for a construction |
| ``` # The factors below are only applied to government constructions ``` | | |
| PRODUCTION\_BUILDING\_GOVERNMENT\_CONSTRUCTION\_MONOPOLY\_MULT | 1.5 | # Multiply score by this if we have a government monopoly for the buildng type |
| PRODUCTION\_BUILDING\_LOW\_EMPLOYMENT\_THRESHOLD | 0.8 | # The AI will not expand buildings with less than this employment unless those buildings hired last week |
| ``` # The factors below are only applied to autonomous investments ``` | | |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_COMPANY\_MULT | 2.0 | # Multiply score by 1 + this if we have at least one established company for the building type, scales by fraction of investment pool coming from companies compared to historical amount of investment by companies |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_COMPANY\_MONOPOLY\_MULT | 3.0 | # Replaces PRODUCTION\_BUILDING\_COMPANY\_MULT for buildings on which a company has a monopoly |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_COMPANY\_CHARTERED\_COUNTRY\_MULT | 2.0 | # Additional multiplier to company weights above if the investment is targeting a company's chartered country |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_WANTED\_COST\_COVERAGE | 1 | # If investment pool has less money than this in it, don't do any autonomous construction |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_CONSTRUCTION\_COST\_DIVISOR\_SCALING | 0.001 | # Value for autonomous investment pool constructions is divided by ( 1 + construction point cost \* this ) |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_RANDOM\_FACTOR\_MULT | 2.0 | # Multiplies PRODUCTION\_BUILDING\_RANDOM\_FACTOR for autonomous investment pool constructions |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_STATE\_RANDOM\_FACTOR\_MULT | 1.5 | # Multiplies PRODUCTION\_BUILDING\_RANDOM\_FACTOR for autonomous investment pool constructions |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_PROFIT\_FACTOR\_MULT | 1.5 | # Multiplies PRODUCTION\_BUILDING\_GOODS\_PROFIT\_FACTOR for autonomous investment pool constructions |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_PROFIT\_PRIVATIZE\_FACTOR\_MULT | 5.0 | # Multiplies PRODUCTION\_BUILDING\_GOODS\_PROFIT\_FACTOR for autonomous investment pool constructions, gives higher weight to buildings that have levels to privatize |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_PRODUCED\_VALUE\_FACTOR\_MULT | 1.25 | # Multiplies PRODUCTION\_BUILDING\_PRODUCED\_VALUE\_FACTOR for autonomous investment pool constructions |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_PRODUCED\_VALUE\_PRIVATIZE\_FACTOR\_MULT | 0.5 | # Multiplies PRODUCTION\_BUILDING\_PRODUCED\_VALUE\_FACTOR for autonomous investment pool constructions, gives higher weight to buildings that have levels to privatize |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_PRODUCED\_TRADE\_CAPACITY\_FACTOR\_MULT | 1.5 | # Multiplies value from produced trade capacity for autonomous investment pool constructions |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_PRODUCED\_MODIFIER\_FACTOR\_MULT | 0.75 | # Multiplies value from produced modifiers for autonomous investment pool constructions |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_PRICE\_COMPENSATION\_FACTOR\_MULT | 1.0 | # Multiplies high/low price compensation factors for autonomous investment pool constructions |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_BELOW\_DESIRED\_INFRASTRUCTURE\_FACTOR\_MULT | 0.25 | # Multiplies PRODUCTION\_BUILDING\_BELOW\_DESIRED\_INFRASTRUCTURE\_FACTOR for autonomous investment pool constructions |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_LOW\_INVESTMENT\_RESET\_TIME | 12 | # Every this number of months, reset the historical construction values for each pop type to ensure system can handle significant economic changes over time |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_MILITARY\_GOODS\_FACTOR\_MULT | 1.5 | # Multiplies PRODUCTION\_BUILDING\_OUTPUT\_NEEDED\_MILITARY\_GOODS\_FACTOR & PRODUCTION\_BUILDING\_OUTPUT\_WANTED\_MILITARY\_GOODS\_FACTOR for autonomous investment pool constructions |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_INDUSTRIAL\_GOODS\_FACTOR\_MULT | 4.0 | # Multiplies PRODUCTION\_BUILDING\_OUTPUT\_NEEDED\_INDUSTRIAL\_GOODS\_FACTOR & PRODUCTION\_BUILDING\_OUTPUT\_WANTED\_INDUSTRIAL\_GOODS\_FACTOR for autonomous investment pool constructions |
| ``` # When the amount of saved value for foreign investment exceeds saved value for domestic investment, we start applying this bias to score for domestic autonomous constructions # This is calculated as 1 + ( ( foreign investment / domestic investment - 1 ) * AUTONOMOUS_INVESTMENT_DOMESTIC_INVESTMENT_BIAS ) # The resulting multiplier is capped at AUTONOMOUS_INVESTMENT_DOMESTIC_INVESTMENT_BIAS_MAX ``` | | |
| AUTONOMOUS\_INVESTMENT\_DOMESTIC\_INVESTMENT\_BIAS | 2.0 |  |
| AUTONOMOUS\_INVESTMENT\_DOMESTIC\_INVESTMENT\_BIAS\_MAX | 10.0 |  |
| ``` # Every this number of months, the saved values for domestic/foreign investment are reset to 0  # This is to ensure that a prolonged period of domestic investment early game doesn't produce such high saved numbers that anything that comes after it doesn't matter ``` | | |
| AUTONOMOUS\_INVESTMENT\_DOMESTIC\_INVESTMENT\_BIAS\_RESET\_TIME\_IN\_MONTHS | 60 |  |
| ``` # For each this amount of money going into the investment pool, we execute one autonomous investment update per tick (minimum of 1) # This is to ensure that even very large investment pools can be properly utilized # Be careful with this value as setting it too low can badly impact performance ``` | | |
| AUTONOMOUS\_INVESTMENT\_UPDATE\_COUNT\_DIVISOR | 500000 |  |
| PRODUCTION\_BUILDING\_AUTONOMOUS\_INVESTMENT\_PROFIT\_PRIVATIZE\_SELF\_OWNED\_BUILDING\_MULT | 0.75 | # Multiply the total score for privatizing self-owned building levels by this |
| AUTONOMOUS\_INVESTMENT\_NUM\_FAILED\_INVESTMENTS\_FOR\_REFRESH\_BASE | 150 | # If a country's investment pool fails to execute for this number of ticks, we force a refresh of all autonomous investment priorities to ensure investment pool isn't permanently stuck |
| AUTONOMOUS\_INVESTMENT\_NUM\_FAILED\_INVESTMENTS\_FOR\_REFRESH\_DYNAMIC | 50 | # A random amount of this is added to the above to spread out refreshes |
| AUTONOMOUS\_INVESTMENT\_NUM\_FAILED\_INVESTMENTS\_FOR\_REFRESH\_PLAYER | 20 | # Replaces above defines for player controlled countries |
| ``` # The AI for autonomous investment weights alters the weights for buildings based on how much of the investment pool originates from a certain ownership type building # For example, if a high proportion of investment pool income is from Manor Houses, the building groups that manor houses have high investment weights for are weighted up # Here we clamp the bounds for this effect, ie how low/high is the weight allowed to get ``` | | |
| AUTONOMOUS\_INVESTMENT\_MIN\_PROPORTIONAL\_INVESTMENT\_WEIGHT | 0.25 |  |
| AUTONOMOUS\_INVESTMENT\_MAX\_PROPORTIONAL\_INVESTMENT\_WEIGHT | 1.0 |  |
| ``` # When scoring an ownership building for a new investment, always consider them to be contributing a minimum of this amount of the investment pool # This is to ensure that financial centers can appear in countries that lack them, etc ``` | | |
| AUTONOMOUS\_INVESTMENT\_MIN\_OWNERSHIP\_BUILDING\_INVESTMENT\_SHARE | 0.25 |  |
| AUTONOMOUS\_INVESTMENT\_PREVIOUS\_INVESTMENT\_LOG\_SIZE | 20 | # Maximum number of previous investments that a country will have in its investment log at the same time |
| AUTONOMOUS\_INVESTMENT\_PREVIOUS\_INVESTMENT\_DURATION\_DAYS | 365 | # Number of days before a previous investment is removed from the log |
| BUILDING\_PRIVATIZATION\_CHANCE | 50.0 | # Chance for ai to do privatization instead of building a new building level when evaluating an existing building |
| ``` # Investment AI owner building location selection weights and multipliers ``` | | |
| OWNER\_BUILDING\_LOCATION\_BASE\_SCORE | 1 | # Base score for selecting state as owner building location |
| OWNER\_BUILDING\_LOCATION\_POPULATION\_SCORE | 1 | # For each 10000 population, increase score for selecting state as owner building location by this |
| OWNER\_BUILDING\_LOCATION\_GDP\_SCORE | 1 | # For each INVESTMENT\_LOCATION\_GDP\_DIVISOR yearly state gdp, increase score for selecting state as owner building location by this |
| OWNER\_BUILDING\_LOCATION\_GDP\_DIVISOR | 100000 |  |
| OWNER\_BUILDING\_LOCATION\_HAS\_OWNER\_BUILDING\_MULT | 2.0 | # Multiply owner building location score by this for any state which already has the requisite owner building type |
| OWNER\_BUILDING\_LOCATION\_CAPITAL\_MULT | 2.0 | # Multiply owner building location score by this for our capital |
| OWNER\_BUILDING\_LOCATION\_SAME\_STATE\_MULT | 4.0 | # Multiply owner building location score by this for the same state we're building/privatizing in |
| OWNER\_BUILDING\_LOCATION\_NOT\_HOMELANDS\_MULT | 0.5 | # Multiply owner building location score by this if the state isn't a homeland of the country's primary cultures |
| OWNER\_BUILDING\_LOCATION\_LOWER\_GDP\_MULT | 0.25 | # Multiply owner building location score by this for any state that has lower GDP than the state we're building/privatizing in |
| OWNER\_BUILDING\_LOCATION\_NO\_AVAILABLE\_WORKFORCE\_MULT | 0.1 | # Multiply owner building location score by this if the state lacks workers |
| OWNER\_BUILDING\_LOCATION\_NO\_AVAILABLE\_INFRASTRUCTURE\_MULT | 0.1 | # Multiply owner building location score by this if the state lacks infrastructure |
| OWNER\_BUILDING\_LOCATION\_UNINCORPORATED\_MULT | 0.01 | # Multiply owner building location score by this if the state is unincorporated |
| OWNER\_COMPANY\_EXPANSION\_CHANCE\_MULTIPLIER | 0.5 | # Base chance for a company to be selected as the owner of a new investment of one of their relevant building types, scales by fraction of investment pool coming from companies compared to historical amount of investment by companies |
| OWNER\_COMPANY\_PRIVATIZATION\_CHANCE\_MULTIPLIER | 0.75 | # Used instead of OWNER\_COMPANY\_EXPANSION\_CHANCE for privatization, uses the same scaling |
| OWNER\_COMPANY\_OWN\_STATE\_MULT | 100.0 | # Multiply the chance for a company to be selected as the owner of a building (compared to other companies) if it's being built/invested in their HQ state |
| ``` # Below data is used to calculate how much weight the AI places on enacting/revoking a law ``` | | |
| CHANGE\_LAW\_RANDOM\_FACTOR | 1.0 | # The higher this is, the more random AI law enactment will be |
| CHANGE\_LAW\_PRO\_IG\_IDEOLOGIES\_FACTOR | 100 | # For enacting laws, per ideology match for IGs we approve of |
| CHANGE\_LAW\_ANTI\_IG\_IDEOLOGIES\_FACTOR | -25 | # For enacting laws, per ideology match for IGs we disapprove of |
| CHANGE\_LAW\_POLITICAL\_MOVEMENT\_FACTOR | 1000 | # Scales against ( support \* radicalism ) for each movement that would increase the law's chance to be enacted |
| CHANGE\_LAW\_POTENTIAL\_CIVIL\_WAR\_THRESHOLD | 0.70 | # If a political movement to preserve would have at least this much radicalism, AI considers it a potential civil war cause |
| CHANGE\_LAW\_POTENTIAL\_CIVIL\_WAR\_ENACT\_CHANCE | 100 | # Base chance that the AI will proceed with a law change that could cause a civil war - revolution aversion is subtracted from this value for final chance (1 = 1%) |
| CHANGE\_LAW\_POTENTIAL\_CIVIL\_WAR\_MEMORY\_DURATION | 24 | # Number of months after deciding not to enact a law due to civil war risk that the AI should remember and stick to this decision |
| CHANGE\_LAW\_CIVIL\_WAR\_BOLDNESS\_RANGE | 100 | # AI boldness (the score that revolution aversion must beat to cancel enactment) for a particular law is set on a random range of 0 - this |
| CHANGE\_LAW\_CIVIL\_WAR\_BOLDNESS\_TIMED\_WEIGHT\_DURATION | 24 | # When the AI randomly sets its boldness for a particular law, how many months does that timed weight last |
| CHANGE\_LAW\_CIVIL\_WAR\_AVERSION\_MOVEMENT\_SUPPORT\_FACTOR | 0.005 | # Chance that the AI will stop enacting a law to avoid a civil war is multiplied by ( 1 + highest revolutionary movement support \* this ) |
| CHANGE\_LAW\_CIVIL\_WAR\_AVERSION\_SUBJECT\_MULTIPLIER | 5 | # Chance that AI stops enacting a law to avoid a civil war is multiplied by this for subjects |
| CHANGE\_LAW\_CIVIL\_WAR\_AVERSION\_LAW\_DIRECTION\_FLEXIBILITY | 2 | # Revolution aversion is multiplied by this and added to the max progressiveness/regressiveness the AI is willing to stomach to avoid a revolution |
| DID\_NOT\_NEGOTIATE\_WITH\_IG\_COOLDOWN\_MONTHS | 24 | # If the AI decided not to negotiate with an IG for a law enactment, remember that decision for this many months |
| ``` # Below data is used to calculate how much weight the AI places on a production method ``` | | |
| PRODUCTION\_METHOD\_BASE\_VALUE | 1000 |  |
| PRODUCTION\_METHOD\_PROFIT\_FACTOR | 1 | # Per pound of profit the produced goods would generate |
| PRODUCTION\_METHOD\_DEFICIT\_FACTOR | 1.5 | # Per pound of deficit the produced goods would generate (multiplies a negative value) |
| PRODUCTION\_METHOD\_PRODUCED\_VALUE\_FACTOR | 0.25 | # Per pound of produced goods in base value |
| PRODUCTION\_METHOD\_EMPLOYMENT\_CHANGE\_FACTOR | 2.0 | # The total score of a PM will be multiplied or divided by 1 + ( this \* the proportion of labor that is added or saved by the change ) |
| PRODUCTION\_METHOD\_REDUCE\_OUTPUT\_PENALTY\_FACTOR | 10 | # Multiply method score by this if we're reducing the building's output penalties |
| PRODUCTION\_METHOD\_INCREASE\_OUTPUT\_PENALTY\_FACTOR | 0.01 | # Multiply method score by this if we're increasing the building's output penalties |
| PRODUCTION\_METHOD\_FAVORED\_GOODS\_FACTOR | 0.25 | # Per base cost \* units of goods produced that the AI favors (for non military goods) |
| NATIONALIZATION\_DESIRE\_NATIONALIZE\_THRESHOLD | 1.0 | # At this amount or above of Nationalization Desire (set in ai strategies & building type), the AI will want to nationalize production buildings |
| NATIONALIZATION\_DESIRE\_PRIVATIZE\_THRESHOLD | 0.0 | # At this amount or below of Nationalization Desire (set in ai strategies & building type), the AI will want to privatize production buildings |
| ``` # At this % of radicals in the country after a nationalization, AI will avoid further nationalization # Ignored when the state is recently liberated/conquered ``` | | |
| NATIONALIZATION\_RADICALS\_THRESHOLD\_TO\_AVOID\_NATIONALIZATION | 0.3 |  |
| NATIONALIZATION\_RADICALS\_THRESHOLD\_TO\_ALWAYS\_COMPENSATE | 0.1 | # At this % of radicals in the country after a nationalization, AI always uses compensated nationalization |
| ``` # Added to nationalization desire when a state has the recently_liberated_state/recently_conquered_state modifiers # Only applied to foreign-owned buildings and not considered for privatization ``` | | |
| NATIONALIZATION\_DESIRE\_FROM\_RECENTLY\_LIBERATED | 2.0 |  |
| NATIONALIZATION\_DESIRE\_FROM\_RECENTLY\_CONQUERED | 1.0 |  |
| NATIONALIZATION\_GOLD\_RESERVES\_THRESHOLD | 0.5 | # AI will want at least this much of its gold reserves remaining (as a percentage) after nationalizing if using compensation |
| NATIONALIZATION\_MAX\_LEVELS\_PER\_UPDATE | 5 | # The max number of building levels the AI will nationalize of each building in a single update |
| PRODUCTION\_METHOD\_FAVORED\_MILITARY\_GOODS\_FACTOR | 0.5 | # Per base cost \* units of goods produced that the AI favors (for military goods) |
| PRODUCTION\_METHOD\_DISFAVORED\_GOODS\_FACTOR | -0.25 | # Per base cost \* units of goods produced that the AI disfavors |
| PRODUCTION\_METHOD\_UNDESIRABLE\_GOODS\_PRICE\_THRESHOLD | 1.5 | # If a PM using the 'most productive' logic makes use of a good whose price is above ( base \* this ), reduce the score |
| PRODUCTION\_METHOD\_UNDESIRABLE\_GOODS\_PRICE\_FACTOR\_TRADEABLE | -0.05 | # Per base cost \* units of goods whose price is above undesirable price threshold (when the goods can be imported from the world market) |
| PRODUCTION\_METHOD\_UNDESIRABLE\_GOODS\_PRICE\_FACTOR\_UNTRADEABLE | -0.25 | # Per base cost \* units of goods whose price is above undesirable price threshold (when the goods cannot be imported from the world market) |
| PRODUCTION\_METHOD\_STICKINESS\_UPGRADE | 0.95 | # Score of non-current method is multiplied by this when it produces more goods base value in total |
| PRODUCTION\_METHOD\_STICKINESS\_DOWNGRADE | 0.75 | # Score of non-current method is multiplied by this when it produces less (or equal) goods base value in total |
| PRODUCTION\_METHOD\_CHANCE\_TO\_CHANGE | 0.1 | # Chance that the AI will consider changing a production method when evaluating methods |
| PRODUCTION\_METHOD\_LOW\_POP\_THRESHOLD | 50000 | # If a state's population is less than this, use the scoring factor below for low-pop PMs |
| PRODUCTION\_METHOD\_LOW\_POP\_FACTOR | 100000 | # If a state's population is less than PRODUCTION\_METHOD\_LOW\_POP\_THRESHOLD, add this score for low-pop PMs |
| ``` # Below data is used to calculate AI's desire for peace ``` | | |
| AI\_PEACE\_AGREEMENT\_BASE\_VALUE | -10 |  |
| AI\_PEACE\_AGREEMENT\_WHITE\_PEACE\_BASE | 10 | # If no wargoals are being enforced on either side |
| AI\_PEACE\_AGREEMENT\_WHITE\_PEACE\_WAR\_DURATION | 2 | # For each month the war goes on add this to the acceptance for a white peace |
| AI\_PEACE\_AGREEMENT\_WAR\_SUPPORT\_FACTOR | -1 |  |
| AI\_PEACE\_AGREEMENT\_UNACCEPTABLE\_WARGOAL\_VALUE | -1000 | # Fixed wargoal value that will be added to peace acceptance if an unacceptable wargoal (such as cut down to size) is being enforced on us |
| AI\_PEACE\_AGREEMENT\_WARGOAL\_VALUE\_BASE | 10 | # How much does the AI value each wargoal (base) |
| AI\_PEACE\_AGREEMENT\_WARGOAL\_VALUE\_MIN | -1000 | # Wargoal value cannot be lower than this |
| AI\_PEACE\_AGREEMENT\_WARGOAL\_VALUE\_MAX | 1000 | # Wargoal value cannot be higher than this |
| AI\_PEACE\_AGREEMENT\_WARGOAL\_VALUE\_SCALED | 0.5 | # How much does the AI value each wargoal (scaled with maneuver cost) |
| AI\_PEACE\_AGREEMENT\_ALLY\_WARGOAL\_MULT | 1 | # For each wargoal that our allies are pressing, apply wargoal value \* this |
| AI\_PEACE\_AGREEMENT\_SELF\_WARGOAL\_MULT | 3 | # For each wargoal we have that's being pressed, apply wargoal value \* this |
| AI\_PEACE\_AGREEMENT\_ENEMY\_WARGOAL\_SELF\_MULT | -8 | # For each wargoal that the enemy is pressing against us, apply wargoal value \* this |
| AI\_PEACE\_AGREEMENT\_ENEMY\_WARGOAL\_ALLY\_MULT | -1 | # For each wargoal that's being pressed against our allies, apply wargoal value \* this |
| AI\_PEACE\_AGREEMENT\_NON\_CONTESTED\_ENEMY\_WARGOAL\_MULT | 5 | # Value of wargoals held by enemy that aren't being contested is multiplied by this |
| AI\_PEACE\_AGREEMENT\_ACHIEVABLE\_ALLY\_WARGOAL | -1.5 | # For each wargoal our side holds that isn't being pressed where the target will run out of war support before the holder does (multiplies self/ally wargoal value) |
| AI\_PEACE\_AGREEMENT\_ACHIEVABLE\_ENEMY\_WARGOAL | -0.9 | # For each wargoal the enemy side holds (pressed or not) where the target will run out of war support before the holder does (multiplies self/ally enemy wargoal value) |
| AI\_PEACE\_AGREEMENT\_WAR\_SUPPORT\_TO\_HOLD\_ON\_TO\_ACHIEVABLE\_WARGOALS | 0 | # Below this war support an AI will be much more open to ceding achievable wargoals to the enemy in a peace deal |
| AI\_PEACE\_AGREEMENT\_PEACE\_DESIRE\_FACTOR | 1.0 | # Peace desire is multiplied by this when added to peace agreement acceptance score |
| AI\_CAPITULATE\_COMPLETELY\_DEFEATED | 1000 | # If entire allied side is 100% occupied |
| AI\_CAPITULATE\_BASE\_VALUE | -25 |  |
| AI\_CAPITULATE\_WAR\_LEADER\_FACTOR | -25 | # If warleader |
| AI\_CAPITULATE\_WAR\_SUPPORT\_FACTOR | -1 |  |
| AI\_CAPITULATE\_SELF\_WARGOAL\_FACTOR | -5 | # For each wargoal we hold in the war |
| AI\_CAPITULATE\_ENEMY\_WARGOAL\_FACTOR | -20 | # For each wargoal targeting us in the war |
| AI\_CAPITULATE\_PEACE\_DESIRE\_FACTOR | 0.5 | # Peace desire is multiplied by this when added to capitulation score |
| AI\_MONTHS\_OF\_REDUCED\_PEACE\_DESIRE | 10 | # Before this amount of months, reduce AI peace desire |
| AI\_PEACE\_DESIRE\_FROM\_SHORT\_WAR | -10 | # Subtract this amount of peace desire for the above number of months (multiplied by AI\_MONTHS\_OF\_REDUCED\_PEACE\_DESIRE - months of war duration) |
| AI\_PEACE\_DESIRE\_FROM\_TURMOIL | 25 | # Add this amount of peace desire at 100% radicals |
| AI\_PEACE\_DESIRE\_FROM\_DEVASTATION | 50 | # Add this amount of peace desire at 100% devastation |
| AI\_PEACE\_DESIRE\_FROM\_LOYALISTS | -25 | # Subtract this amount of peace desire at 100% loyalists |
| AI\_PEACE\_DESIRE\_FROM\_DEBT\_LEVEL | 200 | # Add this amount of peace desire at 100% debt level |
| AI\_PEACE\_DESIRE\_FROM\_BANKRUPTCY | 200 | # Add this amount of peace desire when bankrupt |
| AI\_PEACE\_DESIRE\_FROM\_GOLD\_RESERVES | -25 | # Subtract this amount of peace desire at 100% gold reserves |
| AI\_PEACE\_DESIRE\_FROM\_FORCE\_BALANCE | 50 | # Up to this amount is added or subtracted from war support based on DIPLO\_PLAY\_FORCE\_BALANCE\_SCALE of the two sides |
| AI\_PEACE\_DESIRE\_FACTOR\_FROM\_ANNEXATION | 0.5 | # If peace will cause the country to be annexed then all positive peace desire factors will be multiplied by this value |
| ``` # AI country-specific goal data ``` | | |
| SECRET\_GOAL\_STICKINESS | 2.0 | # The higher this is, the less likely the AI is to change an established secret goal during recalculation |
| ATTITUDE\_STRONG\_GOAL\_SCORE\_THRESHOLD | 100 |  |
| ATTITUDE\_WEAK\_GOAL\_SCORE\_THRESHOLD | 50 |  |
| GOAL\_THREAT\_INFAMOUS\_FACTOR | 25 |  |
| GOAL\_THREAT\_NOTORIOUS\_FACTOR | 50 |  |
| GOAL\_THREAT\_PARIAH\_FACTOR | 1000 |  |
| GOAL\_THREAT\_NEIGHBOR\_FACTOR | 25 |  |
| GOAL\_THREAT\_SP\_MAX\_MULT | 2 |  |
| GOAL\_THREAT\_CUSTOMS\_UNION\_MULT | 0.5 | # Reduce neighbor threat score by this if in a customs union |
| GOAL\_ANTAGONIZE\_POOR\_RELATIONS\_FACTOR | 25 |  |
| GOAL\_ANTAGONIZE\_COLD\_RELATIONS\_FACTOR | 50 |  |
| GOAL\_ANTAGONIZE\_HOSTILE\_RELATIONS\_FACTOR | 100 |  |
| GOAL\_ANTAGONIZE\_LIBERTY\_DESIRE\_FACTOR | 1 | # Multiplied by liberty desire for subjects against their overlords |
| GOAL\_ANTAGONIZE\_CONQUER\_SCORE\_MULT | 1.0 | # Multiplied by the total score of the states we want to take from them |
| GOAL\_ANTAGONIZE\_CONQUER\_SCORE\_MAX | 200 | # Total score of territory we want to take cannot exceed this |
| GOAL\_ANTAGONIZE\_TREATY\_PORT\_SCORE\_MULT | 0.5 | # Multiplied by the total score of the treaty ports we want to take from them |
| GOAL\_ANTAGONIZE\_TREATY\_PORT\_SCORE\_MAX | 100 | # Total score of treaty ports we want to take cannot exceed this |
| GOAL\_ANTAGONIZE\_DOMINATE\_SCORE\_MULT | 1.0 | # Multiplied by the total score of make-subject wargoals we want to enforce on them |
| GOAL\_ANTAGONIZE\_DOMINATE\_SCORE\_MAX | 200 |  |
| GOAL\_ANTAGONIZE\_RIVAL\_FACTOR | 100 |  |
| GOAL\_ANTAGONIZE\_WAR\_FACTOR | 1000 |  |
| GOAL\_ANTAGONIZE\_NATURAL\_ENEMY\_FACTOR | 75 |  |
| GOAL\_BEFRIEND\_CORDIAL\_RELATIONS\_FACTOR | 25 |  |
| GOAL\_BEFRIEND\_AMICABLE\_RELATIONS\_FACTOR | 50 |  |
| GOAL\_BEFRIEND\_FRIENDLY\_RELATIONS\_FACTOR | 100 |  |
| GOAL\_BEFRIEND\_PROTECTOR\_THRESHOLD | 15 |  |
| GOAL\_BEFRIEND\_PROTECTOR\_FACTOR | 1.0 |  |
| GOAL\_BEFRIEND\_PROTECTOR\_RIVAL\_MULT | 2.0 | # Score multiplied by this if they can protect against our rival |
| GOAL\_BEFRIEND\_PROTECTOR\_MAX\_FACTOR | 100 |  |
| GOAL\_BEFRIEND\_PROTECTOR\_SP\_MAX\_MULT | 2 |  |
| GOAL\_BEFRIEND\_SUBJECT\_FACTOR | 25 |  |
| GOAL\_BEFRIEND\_ALLIANCE\_FACTOR | 50 |  |
| GOAL\_BEFRIEND\_NATURAL\_ALLY\_FACTOR | 75 |  |
| GOAL\_BEFRIEND\_RECONCILE\_FACTOR | 500 |  |
| GOAL\_BEFRIEND\_WAR\_ALLY\_FACTOR | 1000 |  |
| GOAL\_BEFRIEND\_WANTS\_TO\_PROTECT\_FACTOR | 100 |  |
| FRIENDLY\_AI\_JOIN\_DIPLO\_PLAY\_FACTOR | 100 |  |
| VIOLATE\_SOVEREIGNTY\_ACTION\_NAME | "violate\_sovereignty" |  |
| VIOLATE\_SOVEREIGNTY\_MIN\_RELATIVE\_STRENGTH | 2.0 | # We must have their army x this in SP to want to violate their sovereignty |
| VIOLATE\_SOVEREIGNTY\_RANDOM\_FACTOR | 2.0 | # The higher this is, the more random the AI will be about who it violates the sovereignty of |
| VIOLATE\_SOVEREIGNTY\_MIN\_THEATER\_IMPORTANCE | 150 | # A theater must have at least this much war value for AI to consider violating sovereignty to get access to it |
| VIOLATE\_SOVEREIGNTY\_COOLDOWN\_DAYS | 100 |  |
| EXPEL\_DIPLOMATS\_ACTION\_NAME | "expel\_diplomats" |  |
| AUTONOMOUS\_TRADE\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random autonomous trade will be in goods selection |
| AUTONOMOUS\_TRADE\_STICKYNESS | 2.0 | # A new trade has to generate at least this many times more revenue to replace an older trade when trade capacity is fully used up |
| AUTONOMOUS\_TRADE\_WEEKS\_BEFORE\_TRADE\_REDUCTION | 8 | # For this many weeks after increasing trade in a good, a state won't reduce the trade volume for that same good, so that effects such as goods substitution have time to kick in |
| AUTONOMOUS\_TRADE\_MIN\_DESIRABILITY\_PER\_QUANTITY\_TO\_MAINTAIN\_TRADE | 25 | # If a current trade has lower desirability than this per base traded quantity, decrease trade volume |
| AUTONOMOUS\_TRADE\_MIN\_DESIRABILITY\_PER\_QUANTITY\_TO\_INCREASE\_TRADE | 50 | # If a new trade has lower desirability than this per base traded quantity, don't increase trade volume |
| AUTONOMOUS\_TRADE\_MIN\_DESIRABILITY\_INITIALIZATION\_MULTIPLIER | 0.75 | # During bookmark initialization, desirability requirements for trade are multiplied by this |
| AUTONOMOUS\_TRADE\_POTENTIAL\_REVENUE\_BASE\_COST\_FACTOR | 0.25 | # When determining trade potential for a good in a state, the revenue per unit is normalized against the good base cost \* this, to account for the fact that revenue will drop as trades increase |
| ``` # Factors that impact desirability for trades # The base desirability of a trade is equal to revenue per traded quantity after tariffs and subventions ``` | | |
| AUTONOMOUS\_TRADE\_DESIRE\_SUBVENTIONS\_FACTOR | 100 | # Desire for a trade is increased by ( subventions as percentage \* this ), this is an additional factor on top of the impact on revenue. This is also applied in reverse for subventions in the opposite direction (ie, export subventions reduce desire for imports) |
| AUTONOMOUS\_TRADE\_DESIRE\_SUBVENTIONS\_FACTOR\_NEW\_GOODS\_MULT | 20.0 | # The subventions impact on desire for a trade is multiplied by this for importing goods that don't exist in the market |
| AUTONOMOUS\_TRADE\_DESIRE\_TARIFFS\_FACTOR | 25 | # Desire for a trade is decreased by ( tariffs as percentage \* this ), this is an additional factor on top of the impact on revenue |
| AUTONOMOUS\_TRADE\_DESIRE\_OPPOSITE\_MARKET\_SHARE\_FACTOR | -1000 | # Desire for a trade is changed by this \* the share of opposite-direction trade in the world market coming from the country |
| AUTONOMOUS\_TRADE\_DESIRE\_SHORTAGE\_FACTOR | 300 | # Desire to import goods in shortage is increased by this, scaled by the severity of the shortage penalty |
| ``` # Whenever a Trade Center successfully excecutes a trade, it uses up one of its weekly trades # Whenever it *fails* to execute a trade, it uses up this fraction of its total amount of weekly trades # This is so that Trade Centers with hundreds of weekly trades do not try and trade over and over again, using up tons of performance for no gain ``` | | |
| AUTONOMOUS\_TRADE\_WEEKLY\_TRADES\_FRACTION\_USED\_FOR\_FAILED\_TRADE = 0.2 |
| TRADE\_VALUE\_DELTA\_FACTOR | 3.0 | # When calculating treaty trade value, the delta between production/consumption counts for this much more than base production/consumption values |
| TRADE\_VALUE\_BASE\_MULTIPLIER | 0.001 | # Base multiplier applied to the value for treaty trade based purely on production & consumption |
| TRADE\_VALUE\_RELATIVE\_MULTIPLIER | 100 | # Relative multiplier applied to the value for treaty trade and divided by the total value in the market |
| TRADE\_VALUE\_FAVORED\_GOODS\_DIRECTION\_MULT | 1.25 | # Potential for trading a good is multiplied by this when determining AI trade value, if the trade direction matches the AI's goods stance |
| TRADE\_VALUE\_DISFAVORED\_GOODS\_DIRECTION\_MULT | 0.25 | # Potential for trading a good is multiplied by this when determining AI trade value, if the trade direction is opposite of the AI's goods stance |
| UNUSED\_CAPPED\_RESOURCE\_RATIO\_TO\_START\_DISCOURAGING\_EXPORT | 0.5 | # If the untapped potential production of a resource-capped good in the country is not at least market buy orders \* this, switch to punitive export tariffs |
| UNUSED\_CAPPED\_RESOURCE\_RATIO\_TO\_STOP\_DISCOURAGING\_EXPORT | 1.0 | # If the untapped potential production of a resource-capped good in the country is at least market buy orders \* this, stop applying punitive export tariffs |
| COMPANY\_TYPE\_DEFAULT\_BASE\_WEIGHT | 1 | # Base weight for companies, can be overriden by ai\_weight in database |
| COMPANY\_TYPE\_RANDOM\_FACTOR | 1 | # The higher this is, the more random AI selection of companies will be |
| COMPANY\_TYPE\_STICKYNESS | 3 | # The weight for the company the AI is already planning to create is multiplied by this |
| COMPANY\_TYPE\_STICKYNESS\_DURATION\_MONTHS | 60 | # After this many months, the stickyness for the company the AI is planning to form is removed |
| COMPANY\_TYPE\_FORMABLE\_FACTOR | 1.25 | # Increase weight for a company by this if it's instantly formable |
| COMPANY\_TYPE\_FORMABLE\_MULTIPLE\_FREE\_SLOTS\_FACTOR | 5.0 | # Replaces COMPANY\_TYPE\_FORMABLE\_FACTOR if the country has more than one free company slot |
| COMPANY\_TYPE\_PRODUCTIVITY\_FACTOR | 0.25 | # Multiplier for AI weight of companies is increased by ( this \* predicted building productivity ) |
| COMPANY\_TYPE\_PRODUCTIVITY\_MAX | 4.0 | # Effects of COMPANY\_TYPE\_PRODUCTIVITY\_FACTOR cannot be higher than this |
| COMPANY\_TYPE\_BUILDING\_LEVELS\_FACTOR | 0.1 | # Multiplier for AI weight of companies is increased by ( this \* num building levels ) |
| COMPANY\_TYPE\_BUILDING\_LEVELS\_MAX | 2.0 | # Effects of COMPANY\_TYPE\_NUM\_BUILDING\_LEVELS\_FACTOR cannot be higher than this |
| COMPANY\_TYPE\_COMPETITION\_FACTOR | 2 | # Divisor for AI weight of companies is increased by 1 + ( number of building types on existing companies that compete \* this ) |
| COMPANY\_TYPE\_BUILDING\_GROUP\_WEIGHT\_IMPACT | 1.5 | # The AI's average strategy weight mult for the building groups associated with this company is modulated towards 1 by this value and applied to AI preference for the company (ie; if this is 0.5, then the difference between the average AI preference and 1 is halved - 1.5 becomes 1.25, 0.5 becomes 0.75 etc) |
| MILITARY\_UNITS\_PER\_FORMATION\_ARMY | 50 | # The AI aims to have armies of roughly this size, and will create new formations in land HQs accordingly |
| MILITARY\_UNITS\_PER\_FORMATION\_FLEET | 100 | # The AI aims to have fleets of roughly this size, and will create new formations in naval HQs accordingly |
| MILITARY\_UNITS\_MIN\_FOR\_GARRISON\_FORMATION | 15 | # If a land HQ has at least this number of units we set the minimum number of formations to 2, so that there will be a garrison formation present |
| MILITARY\_UNITS\_MIN\_FOR\_GARRISON\_FORMATION\_IN\_CAPITAL\_HQ | 5 | # Overrides MILITARY\_UNITS\_MIN\_FOR\_GARRISON\_FORMATION for the capital land HQ, since not leaving the capital undefended is extremely critical |
| MILITARY\_UNITS\_GARRISON\_BATTALION\_MULT | 0.33 | # The garrison formation in each HQ should receive this portion of its total number of battalions |
| MILITARY\_UNITS\_MIN\_DELTA\_TO\_TRANSFER\_UNITS | 0.05 | # There must be at least this delta between the fraction of a HQ's units that a formation wants and the fraction that it has to bother with transfering units to/from it |
| MIN\_RANK\_TO\_FORM\_POWER\_BLOC | 6 | # AIs with a lower rank value than this will never try to form power blocs |
| POWER\_BLOC\_IDENTITY\_RANDOM\_FACTOR | 1 | # The higher this is, the more random AI selection of power bloc identities will be |
| POWER\_BLOC\_PRINCIPLE\_RANDOM\_FACTOR | 1 | # The higher this is, the more random AI selection of power bloc principles will be |
| POWER\_BLOC\_STATUE\_RANDOM\_FACTOR | 1 | # The higher this is, the more random AI selection of power bloc statues will be |
| LEAVE\_POWER\_BLOC\_SCORE\_THRESHOLD | -100 | # Leave the power bloc if score is less than this. Score is the acceptance value for 'invite\_to\_power\_bloc' diplomatic action |
| POWER\_BLOC\_KICK\_MEMBER\_LOW\_COHESION\_THRESHOLD | 40 | # If current cohesion is less than this consider it low and add the corresponding score |
| POWER\_BLOC\_KICK\_MEMBER\_LOW\_COHESION\_SCORE | 5 | # Score to kick a member (which is anyone) if current cohesion is low (multiplied by delta between cohesion and threshold) |
| POWER\_BLOC\_KICK\_MEMBER\_COHESION\_CHANGE\_SCORE | 2 | # Score to kick the member if cohesion change is high enough (multiplied by cohesion chance) |
| POWER\_BLOC\_KICK\_MEMBER\_LEVERAGE\_ADVANTAGE\_SCORE | -0.1 | # Score to kick the member if active leverage on them is high enough (multiplied by active leverage) |
| POWER\_BLOC\_KICK\_MEMBER\_POOR\_RELATIONS\_SCORE | 25 | # Score to kick the member if relations with the member are Poor, x2 if Cold, x3 if Hostile |
| POWER\_BLOC\_KICK\_MEMBER\_HOSTILE\_ATTITUDE\_SCORE | 25 | # Score to kick the member if attitude towards them is Hostile, x2 if Very Hostile |
| POWER\_BLOC\_KICK\_MEMBER\_MARKET\_SHARE\_SCORE | -50 | # Score to kick the member based on their market share in the bloc (if PB has a unified market) |
| POWER\_BLOC\_KICK\_MEMBER\_HIGH\_ARMY\_MILITARY\_STRENGTH\_SCORE | -25 | # Score to kick the member if their army strength is above average (if PB is a military alliance) |
| POWER\_BLOC\_KICK\_MEMBER\_HIGH\_NAVY\_MILITARY\_STRENGTH\_SCORE | -15 | # Score to kick the member if their navy strength is above average (if PB is a military alliance) |
| POWER\_BLOC\_KICK\_MEMBER\_SCORE\_THRESHOLD | 100 | # Kick the member if the total score is less than this |
| POWER\_BLOC\_KICK\_MEMBER\_RANDOM\_FACTOR | 0.5 | # The higher this is, the more random AI will be about which member to kick from the power bloc |
| IMPOSE\_LAW\_NO\_POTENTIAL\_LAW\_COOLDOWN\_MONTHS | 24 | # If the AI doesn't find any law with at least a chance to be imposed on a target, don't check them again for this number of months |
| IMPOSE\_LAW\_RANDOM\_FACTOR | 1 | # The higher this is, the more random the AI is about which country to try and impose a law on |
| IMPOSE\_LAW\_MAX\_IDEOLOGICAL\_OPINION | 25 | # The AI's ideological opinion of a country must be this or below to consider imposing a law on them |
| IMPOSE\_LAW\_MAX\_LIBERTY\_DESIRE | 50 | # The AI will not impose laws on subjects with LD higher than this |
| IMPOSE\_LAW\_MIN\_ENACTMENT\_CHANCE | 0.2 | # The AI will not impose laws on subjects if the enactment chance is less than this |
| EXILE\_INTERACTION\_FAILED\_COOLDOWN\_MONTHS | 24 | # If a character interaction was invalid against an exiled character, don't check them again for this amount of months |
| AI\_INTERACTION\_PROMINENCE\_CHANCE\_FACTOR | 1.0 | # Each point of prominence gives this % chance of being considered for character interactions |
| AI\_INTERACTION\_MIN\_PROMINENCE\_CHANCE | 10 | # Minimum % chance of being considered regardless of prominence |
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
| COLONIZATION\_VALUE\_BASE | 25 | # Base AI value for a region they are able to colonize |
| COLONIZATION\_VALUE\_HAS\_COLONY\_MULTIPLIER | 2.0 | # Colonization value is multiplied by this if the AI has a growing colony in the region |
| COLONIZATION\_VALUE\_NO\_PRESENCE\_MULTIPLIER | 0.2 | # Colonization value is multiplied by this if the AI has no presence in the region or adjacent regions |
| TRANSIT\_RIGHTS\_BASE\_DESIRE | 100 | # Base desire for Transit Rights, only applied if they would actually help connect a market area for the receiving country |
| TREATY\_OBLIGATION\_WE\_OWE\_THEM\_ACCEPTANCE | -40 | # How country A's acceptance of a treaty changes if A would owe B an obligation as part of the treaty. Note: "WE" is the country doing the evaluation, not the player |
| TREATY\_OBLIGATION\_THEY\_OWE\_US\_ACCEPTANCE | 30 | # How country A's acceptance of a treaty changes if A would be owed an obligation by B as part of the treaty. Note: "US" is the country doing the evaluation, not the player |
| TREATY\_OBLIGATION\_THEY\_OWE\_US\_RECENTLY\_REPUDIATED\_ACCEPTANCE | 15 | # Same as above, but use this if B has recently repudiated an obligation (A values it less because B's word is not worth as much) |
| TREATY\_OBLIGATION\_THEY\_CALL\_US\_IN\_ACCEPTANCE | 30 | # How country A's acceptance of a treaty changes if B is calling in an obligation that A owes B. Note: "US" is the country doing the evaluation, not the player |
| TREATY\_OBLIGATION\_THEY\_CALL\_US\_IN\_RECENTLY\_REPUDIATED\_ACCEPTANCE | 15 | # Same as above, but use this if B has recently repudiated an obligation (A values it less because they're less inclined to follow honor agreements that B is willing to ignore) |
| PIRACY\_HEAT\_GAIN\_PER\_GOODS | 0.01 | # Multiplied with the trade quantity of pirated goods to determine how "hot" a shipping lane is |
| PIRACY\_HEAT\_DECAY | 0.01 | # How many percent the piracy heat decays with each ai update |
| RAID\_HEAT\_GAIN\_PER\_LOST\_SUPPLY\_SHIP | 0.01 | # Multiplied with the amount of supply ships lost in a supply path |
| RAID\_HEAT\_DECAY | 0.01 | # How many percent the piracy heat decays with each ai update |
| PROTECT\_SUPPLY\_OWN\_PATH\_SCORE\_MULT | 2.0 | # 1 + [Mult] is multiplied with the supply path score if it belongs to you |
| RAID\_SUPPLY\_SCORING\_FLEET\_AVG\_SPEED\_MULT | 0.05 | # Is multiplied with the average speed of the fleet when |
| RAID\_SUPPLY\_SCORING\_FLEET\_DETECTION\_VISIBILITY\_RATIO\_MULT | 1.5 # Is multiplied with the ratio between detection and visibility for the fleet |
| RAID\_SUPPLY\_SCORING\_FLEET\_SIZE\_MULT | 2.0 | # Will calculate this value / num ships and add to the scoring mult, so more ships means less scoring |
| RAID\_SUPPLY\_SCORING\_FLEET\_STRENGTH\_RATIO\_MULT | 3.0 | # How much we multiply the ratio of strength between hostile/friendly presence |
| PROTECT\_SUPPLY\_SCORING\_FLEET\_SCREENING\_RATIO\_MULT | 2.0 # We want to primarily use fleets with high screening |
| PROTECT\_SUPPLY\_SCORING\_FLEET\_SIZE\_MULT | 0.005 | # How much we multiply the size of the fleet with for scoring |
| PROTECT\_SUPPLY\_SCORING\_FLEET\_RAID\_HEAT\_MULT | 0.01 | # How much we multiply the accumulated raid heat in the sea province for scoring |
| PROTECT\_SUPPLY\_SCORING\_FLEET\_STRENGTH\_RATIO\_MULT | 3.0 | # How much we multiply the ratio of strength between hostile/friendly presence |
| HUNT\_PIRATES\_SCORING\_FLEET\_PIRACY\_HEAT\_MULT | 0.01 | # How much accumulated piracy heat in the sea province boosts hunt pirates scoring |
| HUNT\_PIRATES\_SCORING\_FLEET\_DETECTION\_RATIO\_MULT | 2.0 | # Favor fleets with high detection for hunting pirates |
| HUNT\_PIRATES\_SCORING\_FLEET\_SCREENING\_RATIO\_MULT | 1.0 | # Favor fleets with high screening ratio for pirate hunting patrols |
| HUNT\_PIRATES\_MIN\_HOSTILITY\_MULT | 0.25 | # Minimum multiplier for hunt pirates scoring during hostilities. Prevents AI from completely abandoning pirate hunting during war. |
| HUNT\_PIRATES\_AT\_WAR\_MULT | 0.25 | # Additional multiplier applied to hunt pirates scoring when at war |
| PIRACY\_SCORING\_FLEET\_SPEED\_VISIBILITY\_RATIO\_ADJUSTER | 1.0 | # If the score seems to end up being too high for piracy, lower this oen |
| PIRACY\_SCORING\_FLEET\_SPEED\_VISIBILITY\_RATIO\_MULT | 2.0 | # Favor fleets with as much goods per visibility for pirates |
| PIRACY\_NO\_HOSTILITIES\_MULT | 1.0 | # Multiplied with shipping lane score when we have no hostilities currently |
| PIRACY\_HOSTILITIES\_MULT | 0.5 | # Multiplied with shipping lane score when we have hostilities currently |
| PRIVATEER\_SCORING\_FLEET\_SPEED\_VISIBILITY\_RATIO\_ADJUSTER | 1.0 | # If the score seems to end up being too high for privateer, lower this oen |
| PRIVATEER\_SCORING\_FLEET\_SPEED\_VISIBILITY\_RATIO\_MULT | 2.0 | # Favor fleets with as much goods per visibility for privateers |
| PORT\_BOMBARDMENT\_NAVAL\_HOSTILITIES\_MULT | 2.0 | # Multiplied with coast score when we are in naval hostilities with coast owner |
| PORT\_BOMBARDMENT\_FULL\_HOSTILITIES\_MULT | 0.5 | # Multiplied with coast score when we are in full hostilities with coast owner |
| BLOCKADE\_WORLD\_MARKET\_HUB\_MULT | 2.0 | # Multiplied with coast score for world market hub |
| BLOCKADE\_NOT\_WORLD\_MARKET\_HUB\_MULT | 0.25 | # Multiplied with coast score for non-world market hub |
| ``` # The AI calculates an "Outclassed ratio" to determien how screwed it is on the naval engagement. # The outclassed ratio will be multiplied with this and added to the mult when scoring what naval mission to pick # So if this below is negative it means it will avoid doing those missions, positive it will prioritize those. ``` |
| INTERCEPT\_OUTCLASSED\_MULT | -4.0 |
| POWER\_PROJECTION\_OUTCLASSED\_MULT | -1.0 |
| POWER\_PROJECTION\_HOSTILE\_NAVAL\_RATIO\_MAX | 0.25 | # Hostile-to-friendly naval strength ratio at which power projection score is fully suppressed. At 0 ratio there is no penalty, linearly scales to 0x score at this ratio. |
| INTERCEPT\_HOSTILE\_NAVAL\_RATIO\_FOR\_FULL\_SCORE | 0.25 | # Hostile-to-friendly naval strength ratio at which intercept and defend coast reach full score. Below this ratio the scores are scaled down linearly. |
| INTERCEPT\_ACCEPTABLE\_DISTANCE | 1000 | # Effective supply distance below which there is no distance penalty. Above this, score is divided by (distance / acceptable\_distance). |
| POWER\_PROJECTION\_ACCEPTABLE\_DISTANCE | 2500 |
| BLOCKADE\_ACCEPTABLE\_DISTANCE | 1000 |
| RAID\_SUPPLY\_ACCEPTABLE\_DISTANCE | 1000 |
| PROTECT\_SUPPLY\_ACCEPTABLE\_DISTANCE | 1000 |
| PORT\_BOMBARDMENT\_ACCEPTABLE\_DISTANCE | 1000 |
| HUNT\_PIRATES\_ACCEPTABLE\_DISTANCE | 1000 |
| DEFEND\_COAST\_ACCEPTABLE\_DISTANCE | 1000 |
| RAID\_SUPPLY\_OUTCLASSED\_MULT | 2.0 |
| PROTECT\_SUPPLY\_OUTCLASSED\_MULT | -1.0 |
| DEFEND\_COAST\_OUTCLASSED\_MULT | -4.0 |
| BLOCKADE\_OUTCLASSED\_MULT | -4.0 |
| PORT\_BOMBARDMENT\_OUTCLASSED\_MULT | -4.0 |
| PROTECT\_SUPPLY\_DOMINANCE\_PENALTY | 0.75 | # How much to reduce protect supply scoring when dominating the enemy navy. At full dominance, score is reduced by this amount (e.g. 0.9 means score goes to 10% at full dominance). |
| PROTECT\_SUPPLY\_MIN\_DOMINANCE\_MULT | 0.1 | # Minimum multiplier for protect supply during naval dominance. Prevents AI from completely ignoring supply protection. |
| BLOCKADE\_DOMINANCE\_BOOST | 3.0 | # How much to boost blockade scoring when dominating the enemy navy. Added as a multiplier (e.g. 3.0 means score can reach 4.0x at full dominance). |
| PORT\_BOMBARDMENT\_DOMINANCE\_BOOST | 3.0 | # How much to boost port bombardment scoring when dominating the enemy navy. |
| COMFORTABLE\_HQ\_NAVY\_SIZE | 10 | # What the AI will want to at least station in an HQ to consider the HQ vital |
| NAVAL\_HQ\_IMPORTANCE\_MIN\_SCORE | 2 | # Any naval HQ with score less than this gets ignored |
## 00\_audio
### Audio
| Define | Default Value | Dev Comment |
| DEFAULT\_SELECT | "event:/SFX/UI/Global/select" |  |
| MAXIMAP\_ACTIVATION | "event:/SFX/UI/MaxiMap/activate" |  |
| MAXIMAP\_DEACTIVATION | "event:/SFX/UI/MaxiMap/deactivate" |  |
| MAP\_LENS\_political\_lens | "event:/SFX/UI/MapLenses/political" |  |
| MAP\_LENS\_production\_lens | "event:/SFX/UI/MapLenses/production" |  |
| MAP\_LENS\_diplomatic\_lens | "event:/SFX/UI/MapLenses/diplomatic" |  |
| MAP\_LENS\_military\_lens | "event:/SFX/UI/MapLenses/military" |  |
| MAP\_CLICKSOUND | "event:/SFX/UI/Global/map\_click" |  |
| MAP\_HOVERSOUND | "event:/SFX/UI/Global/map\_hover" |  |
| MAP\_INTERACTION\_INVALID\_CLICKSOUND | "" |  |
| MAP\_INTERACTION\_HOVERSOUND | "event:/SFX/UI/Global/map\_hover\_interact" |  |
| DIPLOMATIC\_ACTION\_CONFIRMATION | "event:/SFX/UI/Global/confirm" |  |
| DIPLOMATIC\_ACTION\_REQUEST | "event:/SFX/UI/MapInteraction/diplomatic\_action\_request" |  |
| DIPLOMATIC\_ACTION\_HOSTILE | "event:/SFX/UI/MapInteraction/diplomatic\_action\_hostile" |  |
| DIPLOMATIC\_ACTION\_BENIGN | "event:/SFX/UI/MapInteraction/diplomatic\_action\_benign" |  |
| DIPLOMATIC\_PLAY | "event:/SFX/UI/MapInteraction/diplomatic\_play" |  |
| DIPLOMATIC\_PLAY\_EPIC | "event:/SFX/UI/MapInteraction/diplomatic\_play\_epic" |  |
| INFORMATION\_PANEL\_HIDE | "event:/SFX/UI/Global/panel\_hide" |  |
| MILITARY\_FORMATION\_DRAG\_SELECTION\_ADDED | "event:/SFX/UI/Global/increment" |  |
| MILITARY\_FORMATION\_DRAG\_SELECTION\_REMOVED | "event:/SFX/UI/Global/decrement" |  |
| DEFAULT\_NOTIFICATION\_SOUND | "event:/SFX/UI/Alerts/Toasts/\_transient" |  |
| POSITIVE\_GAMEOVER\_SOUND | "event:/MUSIC/Stingers/game\_over/positive" |  |
| NEGATIVE\_GAMEOVER\_SOUND | "event:/MUSIC/Stingers/game\_over/negative" |  |

## 00\_graphics
### MapMode
| Define | Default Value | Dev Comment |
| ``` # Use opacity 1 as the default for colors and control the final opacity directly in the # Map Modes (or make a very specific call to step away from this for a very specific reasons) @opacity = 1 ### INTERACTIVE MAP MODE ### ``` | | |
| MAP\_PAINTING\_TEXTURE\_TILING | 50 | # Tiling of mapmodes textures |
| MAP\_PAINTING\_FLATMAP\_TEXTURE\_TILING | 30 | # Tiling of mapmodes textures in flatmap |
| ``` # Construction scales its opacity based on predicted earnings # This is the lowest scalar value (lowest predicted earnigns) to avoid full transparency ``` | | |
| MAP\_PAINTING\_CONSTRUCTION\_LOW\_OPACITY | 0.4 |  |
| ``` ### HEAT MAP MAP MODE ### ``` | | |
| HEAT\_MAP\_COLOR\_FROM | { 0.9 0.9 0.1 0.3 } |  |
| HEAT\_MAP\_COLOR\_TO | { 0.1 0.4 0.2 1.5 } |  |
| HEAT\_MAP\_MIN\_ALPHA | 0.4 | # Used in the Interest Group and Market Map Mode |
| ``` ### HIGHLIGHT ### ``` | | |
| HIGHLIGHT\_COLOR | { 1 1 1 0.5 } | # White |
| HIGHLIGHT\_INTERACTION\_COLOR | { 1 0.57 0.15 0.5 } | # Golden |
| CAMERA\_HEIGHT\_START\_FADING\_HIGHLIGHT | 800 | # At what camera height should we start fading out the highlight? |
| CAMERA\_HEIGHT\_FULLY\_FADED\_HIGHLIGHT | 0 | # At what camera height should it be fully faded? |
| HIGHLIGHT\_ALPHA | 0.2 | # Used for the Civil War highlight |
| ``` ### DECENTRALIZED ### ``` | | |
| COLOR\_DECENTRALIZED\_COUNTRY | { 0.88 0.83 0.72 1.0 } | # Alpha can control blend with country color |
| ``` ### IMPASSABLE TERRAIN ### ``` | | |
| COLOR\_IMPASSABLE\_TERRAIN | { 0.0 0.0 0.0 0.5 } | # Alpha can control blend with terrain color |
| IMPASSABLE\_TERRAIN\_TILING | 100 | # Tiling of texture |
| IMPASSABLE\_TERRAIN\_HEIGHT | 8 | # Height of parallax effect |
| ``` ### CLOSE DISTANCE FADE ### # Used for borders and impassable terrain ``` | | |
| DISTANCE\_FADE\_START | 100.0f | # Height at which to start fading out when zooming in |
| DISTANCE\_FADE\_END | 30.0f | # Height at which to be fully faded out |
| ``` ### WAR / DIPLOMACY ### ``` | | |
| COLOR\_WAR\_SELF | { 0.11 0.46 0.05 @opacity } | # Green |
| COLOR\_WAR\_ENEMY | { 0.5 0.04 0.02 @opacity } | # Red |
| COLOR\_WAR\_ALLY | { 0 0.2 0.5 @opacity } | # Blue |
| COLOR\_WAR\_NEUTRAL | { 0 0 0 0 } | # No color |
| COLOR\_DIPLO\_PLAY\_ALLY | { 0 0.2 0.5 0.25 } | # Very faded Blue |
| COLOR\_DIPLO\_PLAY\_ENEMY | { 0.5 0.04 0.02 0.25 } | # Very faded Red |
| COLOR\_DIPLO\_PLAY\_UNDECIDED | { 0.85 0.85 0.08 0.1 } | # Extremely faded Yellow |
| ``` # MISC ``` | | |
| STATE\_REGION\_COLOR\_STRENGTH | 0.2 | # In the Production Lens, how much should the color of the State be based of the State Color? |
| MAP\_COLOR\_SATURATION\_LOW | 0.25 | # Push up the saturation of Map Colors if below 25% |
| MAP\_COLOR\_SATURATION\_HIGH | 0.75 | # Push down the saturation of Map Colors if above 75% |
| COLOR\_COUNTRY\_CREATE\_IN | { 0.11 0.46 0.05 1 } | # Green highlight States on the map when hovering it to release |
| COLOR\_COUNTRY\_CREATE\_NOT\_IN | { 0.5 0.04 0.02 1 } | # Red highlight States on the map when hovering it to release |
| ``` # DIPLOMACY ``` | | |
| COLOR\_RELATIONS\_MIN | { 0.5 0.04 0.02 @opacity } | # Red (full alpha, use for heatmap) |
| COLOR\_RELATIONS\_MAX | { 0.11 0.46 0.05 @opacity } | # Green (full alpha, use for heatmap) |
| COLOR\_INFAMY\_MIN | { 0.5 0.04 0.02 0 } | # Red (no alpha) |
| COLOR\_INFAMY\_MAX | { 0.5 0.04 0.02 @opacity } | # Red (full alpha, use for heatmap) |
| ``` # AI ATTITUDE MAP COLORS @full = 1 @slightly = 0.75 @very_slightly = 0.5 ``` | | |
| COLOR\_DIPLOMACY\_SELF | { 0 0.2 0.5 @slightly} | # Blue |
| COLOR\_BELLIGERENT | { 0.5 0.04 0.02 @full } | # Red |
| COLOR\_DOMINEERING | { 0.5 0.04 0.02 @full } | # Red |
| COLOR\_ANTAGONISTIC | { 0.5 0.04 0.02 @slightly } | # Slightly Red |
| COLOR\_REBELLIOUS | { 0.5 0.04 0.02 @full } | # Red |
| COLOR\_WARY | { 0.5 0.04 0.02 @very\_slightly } | # Very little red |
| COLOR\_DISINTERESTED | { 1 1 1 0 } | # No color |
| COLOR\_CAUTIOUS | { 0.85 0.85 0.08 0.5 } | # Yellow |
| COLOR\_CONCILIATORY | { 0.11 0.46 0.05 @very\_slightly } | # Very little green |
| COLOR\_COOPERATIVE | { 0.11 0.46 0.05 @very\_slightly } | # Very little green |
| COLOR\_LOYAL | { 0.11 0.46 0.05 @slightly } | # Slightly Green |
| COLOR\_PROTECTIVE | { 0.11 0.46 0.05 @slightly } | # Slightly Green |
| COLOR\_GENIAL | { 0.11 0.46 0.05 @full } | # Green |
| COLOR\_DEFIANT | { 0.11 0.46 0.05 @full } | # Green |
| COLOR\_ALOOF | { 0.85 0.85 0.08 0.5 } | # Yellow |
| ``` # HEAT MAP THAT CAN BE PLACED ON A GOOD - BAD SCALE ``` | | |
| HEAT\_MAP\_BAD | { 0.5 0.04 0.02 1 } | # Red |
| HEAT\_MAP\_GOOD | { 0.11 0.46 0.05 1 } | # Green |
| HEAT\_MAP\_NEUTRAL | { 0.75 0.75 0.75 1 } | # White |
| ``` # LOCAL PRICES ``` | | |
| LOCAL\_PRICE\_MAP\_HIGH | { 1.000 0.674 0.454 2 } | # Gold |
| LOCAL\_PRICE\_MAP\_LOW | { 0.410 0.670 0.740 2 } | # Blue |
| LOCAL\_PRICE\_MAP\_MID | { 0.75 0.75 0.75 1 } | # White |
| ``` # COLORS FOR RADICALS AND LOYALISTS HEAT MAP ``` | | |
| RADICALS\_HEAT\_BASE | { 0.5 0.04 0.02 0 } | # Red, but zero alpha |
| RADICALS\_HEAT\_MAX | { 0.5 0.04 0.02 1 } | # Red |
| RADICAL\_PERCENTAGE\_OF\_POPULATION | 0.25 | # In the Radicals Map Mode, if the amount of radicals in a state is above X the state will be colored with RADICALS\_HEAT\_MAX |
| LOYALISTS\_HEAT\_BASE | { 0.11 0.46 0.05 0 } | # Green, but zero alpha |
| LOYALISTS\_HEAT\_MAX | { 0.11 0.46 0.05 1 } | # Green |
| LOYALIST\_PERCENTAGE\_OF\_POPULATION | 0.25 | # In the Loyalists Map Mode, if the amount of loyalists in a state is above X the state will be colored with LOYALISTS\_HEAT\_MAX |
| ``` #RELIGION/CULTURE MAPMODE PARAMETERS ``` | | |
| RELIGION\_SECOND\_COLOR\_CUTOFF | 0.3 | # Ratio of Rel2 / (Rel1+Rel2) has to be at least this much to be shown |
| RELIGION\_THIRD\_COLOR\_CUTOFF | 0.1 | # Ratio of Rel3 / (Rel1+Rel2+Rel3) has to be at least this much to be shown |
| RELIGION\_SECOND\_COLOR\_SCALING | 0.6 | # Ratio of Rel2 / (Rel1+Rel2) is scaled by this when lerping Color1 to Color2 |
| RELIGION\_THIRD\_COLOR\_SCALING | 0.5 | # Ratio of Rel3 / (Rel1+Rel2+Rel3) is scaled by this much when lerping Color1+2 to Color 3 |
| CULTURE\_SECOND\_COLOR\_CUTOFF | 0.4 | # Ratio of Cult2 / (Cult1+Cult2) has to be at least this much to be shown |
| CULTURE\_THIRD\_COLOR\_CUTOFF | 0.2 | # Ratio of Cult3 / (Cult1+Cult2+Cult3) has to be at least this much to be shown |
| CULTURE\_SECOND\_COLOR\_SCALING | 0.6 | # Ratio of Cult2 / (Cult1+Cult2) is scaled by this when lerping Color1 to Color2 |
| CULTURE\_THIRD\_COLOR\_SCALING | 0.5 | # Ratio of Cult3 / (Cult1+Cult2+Cult3) is scaled by this much when lerping Color1+2 to Color 3 |
| RELIGION\_MINORITY\_COLOR\_CUTOFF | 0.334 | # Ratio of Minority / (Majority+Minority) has to be at least this much to be shown |
| CULTURE\_MINORITY\_COLOR\_CUTOFF | 0.334 | # Ratio of Minority / (Majority+Minority) has to be at least this much to be shown |
| ``` #COLORS FOR POLLUTION HEAT MAP ``` | | |
| POLLUTION\_HEAT\_BASE | { 0.3 0.25 0.16 0 } |
| POLLUTION\_HEAT\_MAX | { 0.3 0.25 0.16 1 } |
| POLLUTION\_COLOR\_CEILING\_VALUE | 0.6 | # In the Pollution map mode a state will reach POLLUTION\_HEAT\_MAX at this fraction of POLLUTION\_MAX |
| ``` #COLORS FOR OBSTINANCE HEAT MAP ``` | | |
| OBSTINANCE\_HEAT\_BASE | { 0.0 0.0 1.0 0 } |  |
| OBSTINANCE\_HEAT\_MAX | { 0.0 0.0 1.0 1 } |  |
| OBSTINANCE\_COLOR\_CEILING\_VALUE | 0.6 | # In the Obstinance map mode a state will reach OBSTINANCE\_HEAT\_MAX at this fraction of OBSTINANCE\_MAX |
| ``` # Harvest condition map mode ``` | | |
| HARVEST\_CONDITION\_COLOR\_MIN\_ALPHA | 0.4 | # Min color of the province is the color of the harvest condition type (max color) with this alpha |
| ``` # The color of the province affected by a harvest condition is scaled based on the max intensity in the area.  # This value defines how many different colors a harvest condition area can have inside.  # E.g. 4 will give the following brackets: 0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1 ``` | | |
| HARVEST\_CONDITION\_NUM\_COLOR\_BRACKETS | 5 |  |
| HARVEST\_CONDITION\_FADE\_DURATION | 0.4 | # Fade duration of the harvest condition map mode when changing highlighted types |
| ``` #Colors for the starvation map mode ``` | | |
| STARVATION\_HEAT\_BASE | { 0.6 0.25 0.08 0 } | #Base color for starvation map mode |
| STARVATION\_ADDITIONAL\_BASE\_ALPHA | { 0.0 0.0 0.0 0.2 } | #After the population blending we add this much alpha to the color so low % states are more visible |
| MILD\_STARVATION\_HEAT\_MAX | { 0.741 0.301 0.082 1} | #Max color for Mild Starvation |
| MILD\_STARVATION\_HEAT\_WEIGHT | 1 | #Weight used when blending Mild and Severe starvation colors |
| SEVERE\_STARVATION\_HEAT\_MAX | { 0.69 0.08 0.06 1 } | #Max color for Severe Starvation |
| SEVERE\_STARVATION\_HEAT\_WEIGHT | 3 | #Weight used when blending Mild and Severe starvation colors |
| STARVATION\_COLOR\_CEILING\_VALUE | 0.8 | #At what % of state population starving do we reach the max color |

### MapName
| Define | Default Value | Dev Comment |
| NAME\_DRAW\_DISTANCE | 4000.0 | # Remove names beyond this distance |
| NAME\_FONT\_NAME | "PlayfairDisplay" | # Font used for drawing the map names |
| NAME\_FONT\_SIZE | 80 | # Font size used for drawing the map names |
| FADE\_SPEED | 2.0 | # How fast names fade in/out |
| MAX\_OPACITY | 0.8 |  |
| MIN\_OPACITY | 0.0 | # minimum opacity. Names hidden by draw distance will still fade to 0 |
| MIN\_PROVINCES | 3 | # minimum number of provinces for a name to be generated |
| ZOOM\_STEPS\_VISIBLE\_SCALES | ``` { 	0.0	0.0	# 0 	0.0	0.0 # 1 	0.0	0.0	# 2 	0.0	0.0	# 3 	0.0	0.05	# 4 	0.0	0.1	# 5 	0.0	0.2	# 6 	0.0	1.0	# 7 	Terrain map 	0.0	1.0	# 8 	0.0	2.0	# 9 	0.0	5.0	# 10	Flatmap 	0.0	5.0	# 11 	0.0	5.0	# 12 	0.0	5.0	# 13	No 2D UI on Map 	0.0	5.0	# 14 	0.0	5.0	# 15 } ``` | ``` # Each map-name has a scale. This list contains min-max values for each zoom step. If a name's scale is outside that range it will not be visible # min (hides names that are too small) # max (hides names when they get to large) ``` | | |
### JominiMapGraphics
| Define | Default Value | Dev Comment |
| MAP\_OBJECT\_CELL\_COUNT | 100 |  |
| MAP\_OBJECT\_FADE\_SPEED | 5.0 |  |
| COUNTRY\_NAMES\_TEST\_LINES\_SPACING | 3.0 |  |
| COUNTRY\_NAMES\_SCALE | 0.6 |  |
| COUNTRY\_NAMES\_SCALE\_CAP\_WIDTH | 0.9 |  |
| COUNTRY\_NAMES\_SCALE\_CAP\_HEIGHT | 0.6 |  |
| COUNTRY\_NAMES\_NUM\_LINE\_TESTS | 1 |  |
| COUNTRY\_NAMES\_MAX\_STRETCH\_FACTOR | 1.6 |  |
| COUNTRY\_NAMES\_STRIDE\_SIZE | 8 |  |
| COUNTRY\_NAMES\_LOD\_FACTOR | 0.05 | # As a form of AA, Names get blurrier as the texel/pixel ratio increases. Blur amount will be lod factor \* texel/pixel ratio |
| COUNTRY\_NAMES\_THICKNESS\_BIAS | 0.0 | # More bias = thicker map names. Can be used to solve artifacts caused by thin areas |
### JominiGraphics
| Define | Default Value | Dev Comment |
| BLOOM\_ITERATIONS | 6 | # Overwritten by environment.txt |
| NULL\_ENTITY | "test\_object\_entity" |  |
| NULL\_MESH | "test\_object\_mesh" |  |

### JominiEars
| Define | Default Value | Dev Comment |
| RANGE\_MIN | 10.0 |  |
| RANGE\_MAX | 2000.0 |  |

### Graphics
| Define | Default Value | Dev Comment |
| ``` # Gradient Borders ``` | | |
| PROVINCE\_BORDER\_FADE\_NEAR | 200 |  |
| PROVINCE\_BORDER\_FADE\_FAR | 2000 |  |
| STATE\_BORDER\_FADE\_NEAR | 200 |  |
| STATE\_BORDER\_FADE\_FAR | 2000 |  |
| IMPASSABLE\_BORDER\_FADE\_NEAR | 500 |  |
| IMPASSABLE\_BORDER\_FADE\_FAR | 600 |  |
| DRAW\_SHADOWS\_CUTOFF | 400 |  |
| DRAW\_SHADOWS\_FADE\_LENGTH | 50 |  |
| ``` # Tweaks the papermap shoreline stripes ``` | | |
| SHORELINE\_MASK\_BLUR | 4.5 | # Recommended Range [1.0 - 10.0] The terrain/sea mask, blurrier mask can make the lines extend more |
| SHORELINE\_EXTENT\_STR | 8.0 | # Recommended Range [0.0 - 10.0] Simple strength of the lines |
| SHORELINE\_ALPHA | 0.6 | # Recommended Range [0.0 - 5.0] Simple alpha tweaking |
| SHORELINE\_UV\_SCALE | 40 | # Recommended Range [10 - 100] (integer) Larger UV scale gives tighter lines |
| ``` # Overlay details ``` | | |
| FLATMAP\_FOLDS\_COLOR | { 1.0 1.0 1.0 0.12 } | # Color and Alpha of Folds [ Red channel ] |
| FLATMAP\_LINES\_COLOR | { 0.0 0.0 0.0 0.4 } | # Color and Alpha of Lines [ Green channel ] |
| FLATMAP\_FOLDS\_COLOR | { 0.0 0.0 0.0 1.0 } | # Opacity of flatmap details on land |
| FLATMAP\_OVERLAY\_LAND\_OPACITY | 0.45 |  |
| FLATMAP\_EQUATOR\_POSITION | 0.58 | # Position offset from top [ 0.0 - 1.0 ] |
| FLATMAP\_EQUATOR\_TILING | 24.0 | # Tiling scale of equator texture (Effectively size) |
| ``` # Bottom mesh tint gradient	(Applied globally to all meshes) ``` | | |
| MESHTINT\_HEIGHT\_MIN | 0.0 | # Tint begin (from bottom) |
| MESHTINT\_HEIGHT\_MAX | 0.07 | # Tint end |
| MESHTINT\_COLOR | { 0.20 0.14 0.06 1.0 } | # Tint Alpha and Color (effectitvely disabled with alpha 0.0) |
| ``` # SSAO modifiers ``` | | |
| SSAO\_TREE\_ALPHA | 0.2 | # AO Alpha on trees |
| SSAO\_TERRAIN\_ALPHA | 0.85 | # AO Alpha on the terrain under trees and buildings |
| SSAO\_MESH\_COLOR | { 0.20 0.14 0.06 0.0 } | # AO Alpha and color on buildings (alpha unused) |
| ``` # Fog camera modifiers ``` | | |
| FOG\_CLOSE\_OFFSET | 10 | # Fog center offset at close zoom level |
| FOG\_FAR\_OFFSET | 260 | # Fog center offset at far zoom level |
| FOG\_WIDTH\_SCALE | 1.6 | # Fog width scaling |
| ``` # Piechart colors ``` | | |
| PIE\_CHART\_TIMER\_UNFILLED\_COLOR | { 0.4 0.4 0.4 1.0 } |  |
| PIE\_CHART\_TIMER\_FILLED\_COLOR | { 0.85 0.72 0.44 1.0 } |  |
| ``` # Map markers ``` | | |
| MAP\_MARKER\_MERGE\_DISTANCE\_FOR\_STACK | 10 | # The max screen distance in pixels between map markers (center points) for them to form a stack |
| MAP\_MARKER\_MERGE\_PROVINCES | 800.0 |  |
| MAP\_MARKER\_MERGE\_STATES | 1600.0 |  |
| MAP\_MARKER\_MERGE\_PROVINCES\_STRATEGIC\_REGION | 1600.0 |  |
| MAP\_MARKER\_FULL\_UPDATE\_FREQUENCY | 1.0 | #Do the heavy parts of the map markers only every X seconds |
| FRONT\_MARKER\_ADVANTAGE\_HIGH | 60 |  |
| FRONT\_MARKER\_ADVANTAGE\_LOW | 25 |  |
| ``` # Error adjustment ``` | | |
| MINIMUM\_PROVINCE\_SIZE\_IN\_PIXELS | 0 | # Provinces that are smaller than that are just making the game unplayable. It doesn't affect the game, just informs in the error.log |
| ``` # Flat map specific ``` | | |
| FLAT\_MAP\_HEIGHT | 3.92 |  |
| FLAT\_MAP\_FADE\_SPEED | 5.0 | # How fast to fade to/from flat map state |
| FLAT\_MAP\_ZOOM\_STEP | 10 | # At which zoom step to fade to flat map |
| ``` # Water fixes ``` | | |
| WATER\_SHADOW\_MULTIPLIER | 0.75 | # Controls water shadow brightness ( multiplies the environment cubemap by this value and adds it to the shadow as light ) |
| ``` # Goods colors ``` | | |
| GOOD\_CATEGORY\_MILITARY | { 0.29 0.16 0.17 1 } |  |
| GOOD\_CATEGORY\_STAPLE | { 0.18 0.28 0.24 1 } |  |
| GOOD\_CATEGORY\_INDUSTRIAL | { 0.29 0.24 0.16 1 } |  |
| GOOD\_CATEGORY\_LUXURY | { 0.33 0.2 0.32 1 } |  |
| ``` # Morale colors ``` | | |
| MORALE\_HIGH | { 0.14 0.60 0.2 1 } |  |
| MORALE\_MEDIUM | { 0.7 0.5 0.1 1 } |  |
| MORALE\_LOW | { 0.65 0.1 0.1 1 } |  |
| ``` # Organization colors ``` | | |
| ORGANIZATION\_HIGH | { 0.14 0.60 0.2 1 } |  |
| ORGANIZATION\_MEDIUM | { 0.7 0.5 0.1 1 } |  |
| ORGANIZATION\_LOW | { 0.65 0.1 0.1 1 } |  |
| ``` # Loyalty colors ``` | | |
| LOYALTY\_LOYALIST | { 0.39 0.67 0.33 1 } |  |
| LOYALTY\_RADICAL | { 0.88 0.34 0.34 1 } |  |
| LOYALTY\_NEUTRAL | { 0.7 0.7 0.7 1 } |  |
| UNIMPORTANT\_ELEMENT\_ALPHA | 0.3 |  |
| ``` # Devastation texture ``` | | |
| DEVASTATION\_MATERIAL\_NAME | "DYNAMIC-Devastation\_Mud\_01" | # Material name from materials.settings |
| POLLUTION\_MATERIAL\_NAME | "DYNAMIC-Pollution\_01" | # Material name from materials.settings |
| ``` # Revolution layer ``` | | |
| REVOLUTION\_MAP\_OBJECT\_LAYER | "revolution\_dynamic" |  |
| REVOLUTION\_MAP\_OBJECT\_UPDATE\_PROVINCES\_PER\_FRAME | 16 | # Max number of provinces that may be updated per frame. |
| REVOLUTION\_MAP\_OBJECT\_UPDATE\_MAX\_TIME\_PER\_FRAME | 0.002 | # Max time per frame to spend on dynamic terrain updates in seconds. |
| ``` # Night map objects ``` | | |
| NIGHT\_MAP\_OBJECT\_LAYERS | { "night\_dynamic" "night\_effects" } | # Layers that activate at night |
| DAY\_MAP\_OBJECT\_LAYERS | { "day\_dynamic" "day\_effects" } | # Layers that activate at day |
| ``` # Dynamic map objects ``` | | |
| HIDDEN\_MAP\_OBJECT\_LAYERS | { "mines\_dynamic" "farms\_dynamic" "forestry\_dynamic" } | # These layers are hidden by default when the game starts |
| DYNAMIC\_MAP\_OBJECT\_LAYERS | { "semidynamic" "semidynamic\_medium" "semidynamic\_high" "mines\_dynamic" "farms\_dynamic" "forestry\_dynamic" } | # These layers are cut by city growth and roads |
| DYNAMIC\_MAP\_OBJECT\_MASK\_THRESHOLD\_SHOW | 0.1 | # When dynamic objects are being shown/hidden they use the material mask. This value determines the point at which the mask will make the objects to show/hide. |
| DYNAMIC\_MAP\_OBJECT\_MASK\_THRESHOLD\_HIDE | 0.05 |  |
| DYNAMIC\_TERRAIN\_ROAD\_WIDTH | 2.5 | # Controls how wide roads are considered to be when clearing map objects |
| DYNAMIC\_TERRAIN\_LAZY\_UPDATE\_PROVINCES\_PER\_FRAME | 16 | # Max number of provinces that may be updated per frame. |
| DYNAMIC\_TERRAIN\_LAZY\_UPDATE\_MAX\_TIME\_PER\_FRAME | 0.0012 | # Max time per frame to spend on dynamic terrain updates in seconds. |
| ``` # Route Spline fix ``` | | |
| ROUTE\_GENERATION\_NAV\_MESH\_DENSITY | 0.375 | # Controls the density of vertexes in the navmesh used to generate the road system |
| ``` # Flags ``` | | |
| FLAG\_TEXT\_ICON\_FONT\_SIZE | 16 |  |
| FLAG\_TEXT\_ICON\_SIZE | { 21 14 } |  |
| FLAG\_TEXT\_ICON\_RESOLUTION | { 48 32 } |  |
| FLAG\_TEXT\_ICON\_OFFSET | { 0 1 } |  |
| POWER\_BLOC\_COA\_TEXT\_ICON\_FONT\_SIZE | 16 |
| POWER\_BLOC\_COA\_TEXT\_ICON\_SIZE | { 22 22 } | # same height as country flags text icons here. |
| POWER\_BLOC\_COA\_TEXT\_ICON\_RESOLUTION | { 128 128 } | # somewhat high resolution here, so it doesn't get blurry in large text nor with GUI scaling. |
| POWER\_BLOC\_COA\_TEXT\_ICON\_OFFSET | { 0 4 } |  |
| COA\_FLAGS\_FRAMES\_BETWEEN\_UPDATES | 30 | # Update country and power bloc Coat of Arms every this number of frames |
| COA\_FLAGS\_UPDATES\_BETWEEN\_CLEANUP | 20 | # Remove unused Coat of Arms every this number of updates |
| ALERTS\_FRAMES\_BETWEEN\_UPDATES | 5 |  |
| ``` # Coa ``` | | |
| COUNTRY\_COLOR\_LIST\_NAME | "country\_color\_list" | # The Coat-of-Arms list to use when generating dynamic country map colors |
| ``` # Scaled Distance Roughness ``` | | |
| DISTANCE\_ROUGHNESS\_POSITION | 1.8 | # Position to start blend |
| DISTANCE\_ROUGHNESS\_BLEND | 80.0 | # Blend range |
| DISTANCE\_ROUGHNESS\_SCALE | 0.5 | # Roughness multiplier scale |
| ``` # Grid cell scores used for cities ``` | | |
| CELL\_SCORE\_BASE | 1.0 | # A cell that is 100% within the province will get the full base score. A cell outside the province will get 0. A 50/50 cell will get approximately half base score. |
| CELL\_SCORE\_UNDER\_WATER\_PENALTY | 10.0 | # penalty per depth-units under water. Added for each corner of the cell |
| CELL\_SCORE\_SLOPE\_MIN | 0.075 | # amount of slope allowed before penalty kicks in. value corresponds to the slope's 'k' in f(x)=kx+m |
| CELL\_SCORE\_SLOPE\_PENALTY | 6 | # penalty per 'k' above the limit. Does not scale linearly with slope angle so might be tricky to tweak |
| CELL\_SCORE\_RIVER\_PENALTY | 10.0 | # Penalty per "to-close-to-river"-units (distance-from-cell-center-to-river-edge - bias) |
| CELL\_SCORE\_ROAD\_PENALTY | 10.0 |
| ``` # Front entities graphics ``` | | |
| FRONT\_ENTITIES\_CUTOFF | 300 | # Zoom at which we hide all front entities |
| FRONT\_DIORAMA\_GRID\_WIDTH | 20 | # Grid width of a diorama inside a province |
| FRONT\_DIORAMA\_GRID\_HEIGHT | 20 | # Grid height of a diorama inside a province |
| FRONT\_DIORAMA\_GRID\_SCALE | 1.1 | # Grid cell scale of a diorama inside a province |
| FRONT\_DIORAMA\_STATE\_DEFAULT | "idle" | # Animation state name for entities when they do nothing (before war) |
| FRONT\_DIORAMA\_STATE\_NO\_GENERAL | "defend" | # Animation state name for entities without a general's order |
| FRONT\_DIORAMA\_FLAT\_MAP\_ENTITY | "generic\_flatmap\_unit\_entity" | # The entity that is visible in the flat map mode instead of front entities |
| ``` # Battle entities graphics ``` | | |
| BATTLE\_ENTITIES\_CUTOFF | 300 | # Zoom at which we hide all battle entities |
| BATTLE\_DIORAMA\_GRID\_WIDTH | 30 | # Grid width of a diorama inside a province |
| BATTLE\_DIORAMA\_GRID\_HEIGHT | 40 | # Grid height of a diorama inside a province |
| BATTLE\_DIORAMA\_GRID\_SCALE | 1.1 | # Grid cell scale of a diorama inside a province |
| BATTLE\_DIORAMA\_ATTACKER\_STATE | "advance" | # Animation state name for the attacker side |
| BATTLE\_DIORAMA\_DEFENDER\_STATE | "defend" | # Animation state name for the defender side |
| BATTLE\_DIORAMA\_DEFEAT\_STATE | "defeat" | # Animation state name for defeated entities during the battle |
| BATTLE\_DIORAMA\_VICTORY\_SIDE\_STATE | "victory" | # Animation state name for entities on the winning battle side after the battle |
| BATTLE\_DIORAMA\_DEFEATED\_SIDE\_STATE | "idle" | # Animation state name for entities on the defeated battle side after the battle |
| BATTLE\_DIORAMA\_DESTRUCTION\_DELAY | 5 | # How many seconds we show diorama entities after the battle is over |
| BATTLE\_DIORAMA\_VFX\_START\_TIME | 0 | # After how many seconds we show VFX on battle sides after the battle is over (must be <= BATTLE\_DIORAMA\_DESTRUCTION\_DELAY) |
| BATTLE\_DIORAMA\_VFX\_VICTORY\_SIDE | "battle\_diorama\_victory\_entity" | # Entity that spawns after BATTLE\_DIORAMA\_VFX\_START\_TIME seconds after the battle end on the victory side |
| BATTLE\_DIORAMA\_VFX\_DEFEATED\_SIDE | "battle\_diorama\_defeat\_entity" | # Entity that spawns after BATTLE\_DIORAMA\_VFX\_START\_TIME seconds after the battle end on the defeated side |
| DAYS\_AFTER\_BATTLE\_TO\_SHOW\_ENTITY | 7 | # For how long to show battle environment entities after the battle |
| MILITARY\_ENTITIES\_FLYING\_ENTITY\_HEIGHT | 1 | # If entity locator is higher than this value, then the entity is considered as flying i.e. doesn't occupy a cell and doesn't hide map objects beneath |
| MILITARY\_ENTITIES\_TOGGLE\_MAP\_OBJECTS\_IN\_RADIUS | 2 | # How many cells around entities should be used for hiding map objects (trees) |
| MILITARY\_ENTITIES\_DITHER\_DURATION | 1.0 | # How many seconds it takes for diorama entities to gradually appear or disappear. Applies to all dioramas: front, land battle, fleet, and naval battle dioramas |
| OCCUPATION\_ENTITY | "military\_occupation\_flag\_entity" | # Entity that appears on occupied territory by occupying nation |
| OCCUPATION\_ENTITY\_DIRECTION | { 0.0 0.0 -1.0 } | # Direction of occupation entity |
| COUNTRY\_COLOR\_BUFFER\_TEXTURE\_RESERVE\_SIZE | 700 | # How many countries buffer data is allocated for initially. If more countries are created, the buffer will be resized to accommodate them. |
| POWER\_BLOC\_BUFFER\_TEXTURE\_RESERVE\_SIZE | 50 | # How many power blocs buffer data is allocated for initially. If more power blocs are created, the buffer will be resized to accommodate them. |
| POWER\_BLOC\_COLOR\_UPDATE\_NUM\_FRAMES\_BETWEEN | 30 | # Number of frames to wait between powerbloc mapcolor updates |
| ``` # Harvest condition graphics ``` | | |
| HARVEST\_CONDITION\_ENTITIES\_CUTOFF | 600 | # Zoom at which we hide all harvest condition entities |
| HARVEST\_CONDITION\_ENTITIES\_INTERVAL | 50 | # Interval between entities on areas affected by harvest conditions |
| HARVEST\_CONDITION\_ENTITY | "harvest\_condition\_sound\_entity" | # Entity that spawns on areas affected by harvest conditions |
| HARVEST\_CONDITION\_INTENSITY\_MAX | 10 |  |
| ``` # Earthquake camera shake ``` | | |
| EARTHQUAKE\_SHAKE\_AMPLITUDE | 0.25 | # Amplitude multiplier |
| EARTHQUAKE\_SHAKE\_DURATION | 10.0 | # Duration in seconds |
| EARTHQUAKE\_SHAKE\_DISTANCE\_RADIUS | 250 | # Distance radius in game units |
| EARTHQUAKE\_SHAKE\_FREQUENCY | 2 | # Frequency multiplier |
| EARTHQUAKE\_SHAKE\_EASE\_IN\_PORTION | 0.5 | # Portion of the earthquake duration used for easing in |
| EARTHQUAKE\_SHAKE\_EASE\_OUT\_PORTION | 0.5 | # Portion of the earthquake duration used for easing out |
| EARTHQUAKE\_SHAKE\_MIN\_ZOOM\_STEP | 0 | # The earthquake will not affect the camera if zoomed in closer than this zoom step |
| EARTHQUAKE\_SHAKE\_MAX\_ZOOM\_STEP | 800 | # The earthquake will not affect the camera if zoomed out further than this zoom step |
| EARTHQUAKE\_SHAKE\_SMOOTHSTEP\_A | 3.0 | # Smoothstep power for easing in and out |
| EARTHQUAKE\_SHAKE\_SMOOTHSTEP\_B | 2.0 | # Smoothstep power for easing in and out |
| EARTHQUAKE\_SHAKE\_PHASE\_SPEED\_X | 28.0 | # Speed of phase movement in X direction |
| EARTHQUAKE\_SHAKE\_PHASE\_SPEED\_Y | 22.0 | # Speed of phase movement in Y direction |
### Frontend
| Define | Default Value | Dev Comment |
| CAMERA\_START\_X | 4150.0 | # Initial position in main menu |
| CAMERA\_START\_Y | 1500 | # Y is height |
| CAMERA\_START\_Z | 2700.0 |  |

### Camera
| Define | Default Value | Dev Comment |
| FOV | 55 | # Field-of-View |
| ZNEAR | 1 |  |
| ZFAR | 50000 |  |
| EDGE\_SCROLLING\_PIXELS | 10 | # how many pixels from window edge that will trigger edge scrolling |
| SCROLL\_SPEED | 0.045 | # higher values = faster camera. NOTE that this is tweakables from settings as well |
| ZOOM\_RATE | 0.2 | # Zoom when right-mouse down |
|  | # 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 |  |
| ZOOM\_STEPS | { 24 32 40 50 75 100 200 300 400 600 800 1000 1200 1500 2500 4500 } |  |
| ZOOM\_STEPS\_TILT | { 35 40 45 48.5 50 52.5 55 60 65 70 75 80 80 85 85 85 } |  |
| ZOOM\_STEPS\_MIN\_TILT | { 35 35 35 35 35 38 40 40 45 50 50 50 50 50 50 50 } |  |
| ZOOM\_STEPS\_MAX\_TILT | { 89 89 89 89 89 89 89 89 89 89 89 89 89 89 89 89 } |  |
| MAX\_PAN\_TO\_ZOOM\_STEP\_EXTRA\_CLOSE | 1 | # The camera will lower to this height (but only if above it) when panning to characters/provinces etc. |
| MAX\_PAN\_TO\_ZOOM\_STEP\_CLOSE | 7 |  |
| MAX\_PAN\_TO\_ZOOM\_STEP\_FAR | 10 |  |
| MAX\_PAN\_TO\_ZOOM\_STEP\_EXTRA\_FAR | 14 |  |
| ``` # Debug defines ``` | | |
| DEBUG\_GAMEPAD\_LOWSPEED | 25.0 |  |
| DEBUG\_GAMEPAD\_NORMALSPEED | 100.0 |  |
| DEBUG\_GAMEPAD\_HIGHSPEED | 300.0 |  |
| DEBUG\_GAMEPAD\_SENSITIVITY | 2.0 |  |

### Cities
| Define | Default Value | Dev Comment |
| ``` #Select a province and use the "Cities.DrawDebugLines" for easy tweaking ``` | | |
| NUM\_GRID\_LAYOUTS | 16 | # How many different grid layouts are available for a city to choose. Grid layouts are randomly generated and cities select them randomly |
| GRID\_SCALE | 1.1 |  |
| MESH\_SCALE | 1.0 | #scale all meshes by this |
| MAX\_ACTIVE\_SOUND\_EFFECTS | 5 |  |
| CITY\_RIVER\_DISTANCE\_BIAS | 0.75 | # Higher values = more river avoidance |
| FARM\_RIVER\_DISTANCE\_BIAS | 0.75 |  |
| MINE\_RIVER\_DISTANCE\_BIAS | 0.75 |  |
| PORT\_RIVER\_DISTANCE\_BIAS | 0.75 |  |
| WOOD\_RIVER\_DISTANCE\_BIAS | 0.75 |  |
| CITY\_ROAD\_DISTANCE\_BIAS | -1.00 |  |
| FARM\_ROAD\_DISTANCE\_BIAS | 0.25 |  |
| MINE\_ROAD\_DISTANCE\_BIAS | 0.25 |  |
| PORT\_ROAD\_DISTANCE\_BIAS | -1.00 |  |
| WOOD\_ROAD\_DISTANCE\_BIAS | 0.25 |  |
| RICH\_SOL | 20.0 | # Buildings above this average SoL use the rich model |
| MID\_SOL | 10.0 | # Buildings above this average SoL use the middleclass model |
| RESIDENTIAL\_CHANGE\_DELAY | 5.0 | # Time between updating the residential buildings of a city ( + 0-1 second for some random variance ) |
| RESIDENTIAL\_PROMOTE\_ENTITY | "residential\_promotion\_entity" | # Entity that is spawned on a residential building that is promoted due to demographics changes |
| RESIDENTIAL\_DEMOTE\_ENTITY | "residential\_demotion\_entity" | # Entity that is spawned on a residential building that is demoted due to demographics changes |
| CITY\_VFX\_MAX\_ENTITIES | 128 | # The limit of how many VFX instances can exist at the same time |
| CITY\_VFX\_ZOOM\_CUTOFF | 250 | # zoom at which we hide all city VFXes |
| CITY\_PARTICLES\_ZOOM\_CUTOFF | 200 | # zoom at which we hide all city particle effects (for example chimney smoke) |
| ``` # For each camera distance to the city there is a cut-off factor for the amount of visible buildings in the city # if the distance is lower than the first step, then the factor is 0, i.e. all buildings are visible # if the distance is higher than the last step, then the factor from the last step is taken # if the distance is between steps, then the factor is calculated linearly ``` | | |
| CITY\_BUILDINGS\_CUTOFF\_DISTANCES | { 300 400 600 } | # steps of distances from camera to city to which apply corresponding cut-off factors, must be sorted from low to high |
| CITY\_BUILDINGS\_CUTOFF\_FACTORS | { 0 0.7 0.95 } | # which share of buildings to cut off at a certain distance step, must be sorted from low to high |
| NIGHT\_LIGHT\_COLOR\_DEFAULT | { 1.0 0.16 0.035 6.5 } | # Lights color, Alpha is max intensity |
| NIGHT\_LIGHT\_FADE\_TIME | 0.35 | # Time for indiviual lights to fade in/out from when they activate |
| NIGHT\_LIGHT\_ACTIVATE\_BEGIN | 0.3 | # Time at which lights start to activate, on a 0.0 - 1.0 cycle where day is at 0.0 and 0.5 is the midpoint between day and night |
| NIGHT\_LIGHT\_ACTIVATE\_END | 0.75 | # Time at which lights finish activating |
### Fortifications
| Define | Default Value | Dev Comment |
| GAME\_OBJECT\_LOCATOR | "fortification" | # Key of the locator used for fortification entities |
| CONSTRUCTION\_ENTITY | "building\_construction\_2x2\_entity" | # Entity that spawns on provinces with fortification construction in progress |
| ENTITY\_DEFAULT | "strait\_fortification\_tower\_european\_entity" | # Default fortification entity to use if the culture-specific one is not found |
| ENTITY\_FORMAT | "strait\_fortification\_tower\_{}\_entity" | # Format of the fortification entities, with {} being replaced by the graphical culture name (european, arabic, asian, african, latin) |
| TOGGLE\_MAP\_OBJECTS\_IN\_RADIUS | 2 | # How many cells around fortification entities should be used for hiding map objects (trees) |
### Routes
| Define | Default Value | Dev Comment |
| DIRTROAD\_BRIDGES | { "dirtroad\_bridge\_01" } |  |
| RAILROAD\_1\_BRIDGES | { "railroad\_bridge\_01" "railroad\_bridge\_02" } |  |
| BRIDGE\_SIZES | ``` { 	"_small_mesh" 	"_medium_mesh" 	"_large_mesh" } ``` |  |
| CARAVAN\_DISTANCE\_OPACITY\_THRESHOLD | 0.75 | # Ratio of the caravan distance to camera and cut-off distance at which its entities start to become transparent |
| LAND\_ENTITIES\_CUTOFF | 300 | # Distance to camera at which land route entities hide |
| NAVAL\_ENTITIES\_CUTOFF | 650 | # Distance to camera at which naval route entities hide |
| AIR\_ENTITIES\_CUTOFF | 450 | # Zoom at which air route entities hide |
| LAND\_ENTITIES\_UPDATE\_DISTANCE\_RATIO | 0.0005 | # Ratio of traveled distance of the caravan and the distance to camera which defines the update frequency of caravan entities. The higher it is the less frequently they update |
| NAVAL\_ENTITIES\_UPDATE\_DISTANCE\_RATIO | 0.00025 | # Ratio of traveled distance of the caravan and the distance to camera which defines the update frequency of caravan entities. The higher it is the less frequently they update |
### Portrait
| Define | Default Value | Dev Comment |
| GRACEFUL\_AGING\_START | 25 | # After this age, added life expectancy will make a character look younger than they are; the effect grows the further past this point one goes |
| GRACEFUL\_AGING\_END | 70 | # This is the apparent age at which life expectancy stops slowing down visual aging (each year onwards ages you visually 1 year) |
| MAX\_AGE | 100.0 | # At this age portraits will use the special age gene at full strength |
| PORTRAIT\_MALE\_ADULT\_AGE | 18 | # The boy -> male portrait change happens at this age |
| PORTRAIT\_FEMALE\_ADULT\_AGE | 18 | # The girl -> female portrait change happens at this age |
### ProvinceHighlight
| Define | Default Value | Dev Comment |
| TEXTURE\_WIDTH | 2048 |  |
| TEXTURE\_HEIGHT | 1024 |  |
| ``` # Province highlights use poisson disc sampling to create a gradient # Poisson disc allows for a wider sample are with fewer samples ``` | | |
| KERNEL\_SCALE | 8 | # Size of the sample area, in world space |
| SAMPLE\_COUNT | 16 | # How many samples to use (max 16) |
### TravelNetwork
| Define | Default Value | Dev Comment |
| FORMATION\_CATCHUP\_DISTANCE | 40.0 | # If a military formation 3D caravan is this distance behind where it is supposed to be, accelerate with catch-up speed |
| FORMATION\_CATCHUP\_SPEED\_MULTIPLIER | 1.5 | # Accelerate averaged speed by this multiplied when 'catching up' |
| FORMATION\_CATCHUP\_MIN\_SPEED | 15.0 | # Minimum speed for catching up |
| FORMATION\_CATCHUP\_MAX\_SPEED | 250.0 | # Maximum speed for catching up |
| FORMATION\_SMOOTHING\_STEP\_COUNT | 5 | # For smoothing visual movement speed, military formation speed is measured as a rolling average over X steps |
| FORMATION\_SMOOTHING\_STEP\_TIME | 1.0 | # Each step for the military formation speed smoothing is this long |
| FORMATION\_SMOOTHING\_SPEED\_MULTIPLIER | 1.2 | # General speed multiplier applied to the smoothing measurement (it's better to be "ahead" than "behind") |
| FORMATION\_ARROW\_SAMPLING\_STEP | 7.0 | # Size of the sampling step (in "map pixels") of the spline network, used when creating arrows |
| FORMATION\_ARROW\_SAMPLING\_STEP\_FLATMAP | 30.0 | # Size of the sampling step (in "map pixels") of the spline network, used when creating arrows, when zoomed out ("flatmap") |
### PowerBlocCoa
| Define | Default Value | Dev Comment |
| PREVIEW\_BACKGROUND\_PATTERN | "pattern\_solid.tga" | # Pattern to use as background in coat of arms previews |
| PREVIEW\_BACKGROUND\_COLOR | { 0.0 0.0 0.0 0.0 } | # First color for the background pattern |
| PREVIEW\_SHIELD\_PATTERN\_COLOR\_1 | "red" | # First color for shield patterns |
| PREVIEW\_SHIELD\_PATTERN\_COLOR\_2 | "black" | # Second color for shield patterns |
| PREVIEW\_CENTER\_COLOR\_1 | "yellow" | # First color for the center piece |
| PREVIEW\_CENTER\_COLOR\_2 | "black" | # Second color for the center piece |
| COLOR\_LIST\_NAME | "power\_bloc\_colors" | # Which list to get colors from when randomly creating a power bloc. Lists are located in common/coat\_of\_arms/template\_lists/color\_lists.txt |
| ``` # Positions and scales for each piece type. When updating these make sure to update them in 03_random_power_bloc.txt ``` | | |
| SHIELD\_PATTERN\_SCALE | { 0.72 0.72 } |  |
| SHIELD\_FRAME\_SCALE | { 0.9 0.9 } |  |
| CENTER\_SCALE | { 0.45 0.45 } |  |
| LEFT\_SIDE\_SCALE | { 0.65 0.65 } |  |
| RIGHT\_SIDE\_SCALE | { 0.65 0.65 } |  |
| TOP\_SCALE | { 0.7 0.7 } |  |
| SHIELD\_PATTERN\_POSITION | { 0.49 0.6 } |  |
| SHIELD\_FRAME\_POSITION | { 0.5 0.6 } |  |
| CENTER\_POSITION | { 0.49 0.54 } |  |
| LEFT\_SIDE\_POSITION | { 0.155 0.55 } |  |
| RIGHT\_SIDE\_POSITION | { 0.82 0.55 } |  |
| TOP\_POSITION | { 0.5 0.19 } |  |
| ``` # Layers from bottom to top. If we ever change this, remember to also update `game/common/coat_of_arms/coat_of_arms/03_random_power_bloc.txt` ``` | | |
| PIECE\_LAYERS\_ORDER | { "shield\_pattern" "top" "shield\_frame" "center" "side" "side" } |  |
| PIECE\_LAYER\_INDEX\_TO\_FLIP | 5 |  |

### PowerBlocStatueCamera
| Define | Default Value | Dev Comment |
| CAMERA\_START\_ROTATION | -2.7 |  |
| CAMERA\_MIN\_DISTANCE | 15.0 |  |
| CAMERA\_MAX\_DISTANCE | 30 |  |
| CAMERA\_START\_DISTANCE | 23.0 |  |
| CAMERA\_ANGLE | 0.3925 | # in radians, 0.3925 is PI/8 |
| CAMERA\_ROTATION\_SPEED | 0.15 |  |
| CAMERA\_DISTANCE\_SPEED | 0.7 |  |

### Navy
| Define | Default Value | Dev Comment |
| FLEET\_DIORAMA\_INTERVAL | 20 | # Interval between fleet dioramas in a sea node |
| FLEET\_DIORAMA\_CUTOFF | 600 | # Zoom at which we hide all fleet entities |
| FLEET\_DIORAMA\_TERRAIN\_OPACITY\_BLEND\_SPEED | 4.0 | # Speed at which terrain opacity blends when showing/hiding fleet diorama entities |
| DIORAMA\_SELECTION\_DITHER\_DURATION | 0.5 | # How many seconds it takes for diorama entities to gradually appear or disappear from selection change. Applies to dioramas: fleet and naval battle dioramas |
| DIORAMA\_LAND\_HEIGHT\_OFFSET | 0.5 | # Height offset to consider a ship on land in the diorama |
| WATER\_ENTITY\_HEIGHT | 0.25 | # Height above water |
| SHIP\_ENTITY\_STATE\_IDLE | "idle" | # Ship is idling, e.g. stationed in a sea node or after battle victory/defeat |
| SHIP\_ENTITY\_STATE\_MOVE | "move" | # Ship is moving in a battle |
| SHIP\_ENTITY\_STATE\_MOVE\_LOCAL | "move\_local" | # Ship is moving on map routes |
| SHIP\_ENTITY\_STATE\_MOVE\_SHIP\_VIEWER | "move\_ship\_viewer" | # Ship is moving in the ship viewer |
| SHIP\_ENTITY\_STATE\_DISENGAGED | "disengaged" | # Weapon entities are in default orientation |
| SHIP\_ENTITY\_STATE\_COMBAT | "combat" | # Weapon entities rotate to fire angle |
| SHIP\_ENTITY\_STATE\_FIRE | "fire" | # Ship fires during battle |
| SHIP\_ENTITY\_STATE\_MISS | "miss" | # Ship evaded the enemy shot during battle |
| SHIP\_ENTITY\_STATE\_DAMAGE | "damage" | # Ship takes damage during battle |
| SHIP\_ENTITY\_STATE\_DAMAGE\_CRITICAL | "damage\_critical" | # Ship takes critical damage during battle |
| SHIP\_ENTITY\_STATE\_DAMAGE\_WEAK | "damage\_weak" | # Ship takes weak damage during battle |
| SHIP\_ENTITY\_STATE\_UNDAMAGED | "undamaged" | # Ship has no damage VFX |
| SHIP\_ENTITY\_STATE\_DAMAGED\_LIGHT | "damaged\_light" | # Ship is lightly damaged |
| SHIP\_ENTITY\_STATE\_DAMAGED\_LIGHT\_LOCAL | "damaged\_light\_local" | # Ship is lightly damaged on map routes |
| SHIP\_ENTITY\_STATE\_DAMAGED\_HEAVY | "damaged\_heavy" | # Ship is heavily damaged |
| SHIP\_ENTITY\_STATE\_DAMAGED\_HEAVY\_LOCAL | "damaged\_heavy\_local" | # Ship is heavily damaged on map routes |
| SHIP\_ENTITY\_STATE\_DESTROYED | "destroyed" | # Ship is destroyed during battle, but not yet sunk |
| SHIP\_ENTITY\_STATE\_SINK | "sink" | # Ship is sinking after being destroyed during battle |
| SHIP\_DAMAGE\_LIGHT\_THRESHOLD | 0.25 | # Damage ratio at which ship is considered lightly damaged |
| SHIP\_DAMAGE\_HEAVY\_THRESHOLD | 0.6 | # Damage ratio at which ship is considered heavily damaged |
| SHIP\_DAMAGE\_DESTROYED\_THRESHOLD | 1.0 | # Damage ratio at which ship is considered destroyed |
| SHIP\_SCALE\_GENERAL\_FACTOR | 0.5 | # All ship entities at the diorama's expanded state are scaled with this factor |
| SHIP\_MIN\_SCALE | 0.2 | # Minimum scale for ship entities in fleet dioramas, e.g. ship scale at the diorama's shrunken state start |
| SHIP\_MAIN\_ENTITY\_SCALE | 3.0 | # Scale for the main ship entity in fleet dioramas at the diorama's shrunken state |
| SHIP\_ANIMATION\_SPEED\_EXPAND | 1.0 | # Speed multiplier for ship expanding animation when fleet diorama zooms in |
| SHIP\_ANIMATION\_SPEED\_SHRINK | 2.0 | # Speed multiplier for ship shrinking animation when fleet diorama zooms out |
| SHIP\_ANIMATION\_SCALE\_DURATION | 0.8 | # Duration in seconds of ship scaling animation when fleet diorama zooms in/out |
| SHIP\_ANIMATION\_ZOOM\_STEP\_EXPAND | 4 | # Zoom step at which fleet entities should play expanding animation, e.g. at zoom steps <= 6 |
| SHIP\_ANIMATION\_ZOOM\_STEP\_SHRINK | 5 | # Zoom step at which fleet entities should play shrinking animation, e.g. at zoom steps >= 8 |
| SHIP\_ANIMATION\_ROTATE\_ON\_MOVEMENT\_PROGRESS | 0.5 | # Progress of ship movement (0.0 - 1.0) at which ship starts rotating towards the target direction |
| SHIP\_ANIMATION\_MOVE\_ON\_ROTATION\_PROGRESS | 0.5 | # Progress of ship movement (0.0 - 1.0) at which ship starts rotating towards the target direction |
| SHIP\_ANIMATION\_MOVE\_SPEED | 4.5 | # Speed multiplier for ship movement in fleet dioramas |
| SHIP\_ANIMATION\_ROTATE\_SPEED | 1.5 | # Speed multiplier for ship rotation in fleet dioramas |
| SHIP\_ANIMATION\_DISTANCE\_FOR\_FULL\_OPACITY | 5.0 | # Distance to the main ship at which ship entities are fully opaque |
| SHIP\_ANIMATION\_DISTANCE\_FOR\_FULL\_SCALE | 1.5 | # Distance to the main ship at which ship entities are fully scaled |
| SHIP\_ANIMATION\_HEAVE\_SPEED | 1.5 | # Speed of the heave animation for ship entities |
| SHIP\_ANIMATION\_HEAVE\_AMPLITUDE | 0.04 | # Amplitude of the heave animation for ship entities |
| SHIP\_STATE\_FIRE\_TIME\_RANGE | { 10.0 20.0 } | # Range of time interval between fire animations |
| SHIP\_STATE\_FIRE\_SHOT\_TRAVEL\_TIME | 0.2 | # Delay in seconds between a ship firing and the target receiving the hit/miss effect |
| SHIP\_STATE\_FIRE\_TIME | 2.0 | # Duration in seconds of the shoot animation |
| SHIP\_STATE\_FIRE\_IMPACT | 1.0 | # Base impact multiplier for the shoot animation intensity |
| SHIP\_STATE\_FIRE\_ROLL\_PEAK | 3.0 | # Peak roll angle in degrees for the shoot animation, scaled by impact |
| SHIP\_STATE\_FIRE\_BUMP\_PEAK | 0.2 | # Normalized time (0-1) at which the roll bump peaks during the shoot animation |
| SHIP\_STATE\_FIRE\_HEAVE\_AMPLITUDE | 0.02 | # Depth dip amplitude for the shoot heave animation, scaled by impact |
| SHIP\_STATE\_FIRE\_HEAVE\_PEAK | 0.15 | # Normalized time (0-1) at which the heave dip peaks during the shoot animation |
| SHIP\_WEAPON\_ENGAGE\_SPEED | 45.0 | # Speed in degrees per second at which the ship's weapon engages |
| SHIP\_IDLE\_ROLL\_AMPLITUDE | 2.0 | # Roll amplitude in degrees for idle ship animation |
| SHIP\_IDLE\_ROLL\_SPEED | 1.2 | # Speed of the idle roll oscillation |
| SHIP\_IDLE\_HEAVE\_AMPLITUDE | 0.04 | # Vertical heave amplitude for idle ship animation |
| SHIP\_IDLE\_HEAVE\_SPEED | 1.5 | # Speed of the idle heave oscillation |
| SHIP\_MOVE\_PITCH\_AMPLITUDE | 1.0 | # Pitch amplitude in degrees for move ship animation |
| SHIP\_MOVE\_PITCH\_SPEED | 1.0 | # Speed of the move pitch oscillation |
| SHIP\_MOVE\_ROLL\_AMPLITUDE | 4.0 | # Roll amplitude in degrees for move ship animation |
| SHIP\_MOVE\_ROLL\_SPEED | 1.2 | # Speed of the move roll oscillation |
| SHIP\_MOVE\_HEAVE\_AMPLITUDE | 0.06 | # Vertical heave amplitude for move ship animation |
| SHIP\_MOVE\_HEAVE\_SPEED | 1.5 | # Speed of the move heave oscillation |
| BATTLE\_DIORAMA\_CIRCLING\_TIME\_RANGE | { 3.0 5.0 } | # Range of random time in seconds that ships spend circling around |
| BATTLE\_DIORAMA\_CRUISING\_ANGLE | 45.0 | # How long in angle degrees ships cruise in the diorama |
| BATTLE\_DIORAMA\_SINKING\_ANGLE | 90.0 | # Angle offset in degrees for calculating defeat target position (half circle for smooth approach) |
| BATTLE\_DIORAMA\_SINK\_ON\_DEFEAT\_PROGRESS | 0.75 | # Progress of the defeat state (0.0 - 1.0f) at which ship starts to sink |
| BATTLE\_DIORAMA\_SINK\_TIME | 5.0 | # Time in seconds it takes for ship entities to sink in naval battle diorama after they are defeated |
| BATTLE\_DIORAMA\_SINK\_ROLL\_TARGET | 120.0 | # Target roll angle in degrees for sinking animation in naval battle diorama |
| BATTLE\_DIORAMA\_SINK\_DEPTH\_TARGET | 0.0 | # Target depth to which Y-coordinate of ship entities should sink in naval battle diorama |
| BATTLE\_DIORAMA\_DESTOY\_TIME | 4.0 | # Time it takes for ship entities to be destroyed after sinking in naval battle diorama |
| BATTLE\_DIORAMA\_DESTOY\_DEPTH\_TARGET | 1.0 | # Target depth to which Y-coordinate of ship entities should sink in naval battle diorama |
| BATTLE\_DIORAMA\_CURVE\_B1\_MULT | 0.4 | # Multiplier for the B1 curve parameter used for ship movement animation in naval battle dioramas, which defines the curvature of the movement path |
| BATTLE\_DIORAMA\_CURVE\_B2\_MULT | 0.3 | # Multiplier for the B2 curve parameter used for ship movement animation in naval battle dioramas, which defines the curvature of the movement path |
| BATTLE\_DIORAMA\_SHIP\_ANGULAR\_SPEED | 0.1 | # Speed multiplier for ship rotation during naval battle diorama animations |
| BATTLE\_DIORAMA\_SHIP\_SCALE | 1.0 | # Scale for ship entities during naval battle diorama animations |
| BATTLE\_DIORAMA\_RADIUS\_DEFAULT | 10.0 | # Default radius of the circle on which ships are positioned, in other words distance from the center of the diorama |
| BATTLE\_DIORAMA\_RADIUS\_RATIO\_OUTER | 1.2 | # Ratio for the outer radius of the circle on which ships are positioned |
| BATTLE\_DIORAMA\_RADIUS\_RATIO\_INNER | 0.7 | # Ratio for the inner radius of the circle on which ships are positioned |
| BATTLE\_DIORAMA\_RADIUS\_RATIO\_DEFEAT | 0.3 | # Ratio for the defeat radius - ships move to this reduced radius when defeated |
| BATTLE\_DIORAMA\_RETREAT\_ANGLE\_DELTA | 45.0 | # How long in angle degrees ships retreat in the diorama |
| BATTLE\_DIORAMA\_RETREAT\_RADIUS\_RATIO | 2.0 | # Ratio for the retreat radius - ships move to this outer radius when retreating |
| BATTLE\_DIORAMA\_LENGTH\_PER\_SHIP | 3.0 | # Length of a ship which is used to locate ships the circle to avoid intersections |
| BATTLE\_DIORAMA\_ANGLE\_PER\_SIDE | 120.0 | # Angle in degrees that each battle side occupies in the diorama |
| BATTLE\_DIORAMA\_ROTATION\_BLEND\_SPEED | 6.0 | # Speed of rotation blending when transitioning between circling and cruising states. Higher = snappier, lower = smoother |
| BATTLE\_DIORAMA\_TERRAIN\_OPACITY\_BLEND\_SPEED | 2.0 | # Speed at which terrain opacity blends when showing/hiding battle diorama entities |
| BATTLE\_DIORAMA\_DITHER\_DURATION | 3 | # For how many seconds we show diorama entities after the battle is over |
| BATTLE\_DIORAMA\_ROUTE\_ENTITY\_FADE\_RANGE | 3.5 | # Distance in world units beyond the diorama radius over which route entity ships fade out when near a naval battle diorama |
| SHIP\_LENGTH\_DEFAULT | 3.0 | # Default length of a ship, used for calculating spacing between ships in route graphics |
| ROUTE\_SHIPS\_MAX | 10 | # Max number of ship graphics that can be visible on map routes for one fleet |
| ROUTE\_SHIPS\_INTERVAL | 2.0 | # Interval between ship graphics on map routes |
| ROUTE\_SHIPS\_INTERVAL\_RANDOM | 1.0 | # Random variation added to the interval between ship graphics on map routes |
| SHIP\_PROPULSION\_LEVEL\_PARAMETER | "propulsion\_level" | # Name of the sound parameter that is attached to the ship base entity for the propulsion sound |
| SHIP\_PROPULSION\_MODIFICATION\_SLOT | "ship\_mod\_slot\_propulsion" | # Name of the propulsion modification slot on the ship entity, which is used to determine the propulsion level of the ship and set the sound parameter accordingly |
### ShipViewer
| Define | Default Value | Dev Comment |
| AUDIO\_DISTANCE\_SCALE\_FACTOR | 0.6 | # The distance between the camera and the entity is multiplied by this factor for calculating the distance-based audio attenuation for the listener. The lower this is the closer the listener is to the look-at position |
| CAMERA\_PITCH\_RANGE | { 20.0 45.0 } | # In degrees |
| CAMERA\_DISTANCE\_RANGE | { 15.0 75.0 } |  |
| CAMERA\_START\_LOOK\_AT | { 0.0 2.75 0.0 } |  |
| CAMERA\_START\_YAW | -145.0 | # in degrees |
| CAMERA\_START\_PITCH | 24.35 | # in degrees |
| CAMERA\_START\_DISTANCE | 45.0 |  |
| CAMERA\_ROTATION\_SPEED | 0.001 |  |
| CAMERA\_ROTATION\_DAMPING | 15.0 |  |
| CAMERA\_ZOOM\_SPEED | 2.0 |  |
| CAMERA\_ZOOM\_DAMPING | 12.0 |  |
| CAMERA\_PAN\_SPEED | 0.01 |  |
| CAMERA\_PAN\_RANGE | { 2.5 1.5 2.5 } | # Max distance from the starting offset { X, Y, Z } |
| CAMERA\_RESET\_TIME | 0.2 | # Time it takes for the camera to return to default position |
| WATER\_ENTITY | "ship\_viewer\_water\_entity" |  |
| WATER\_ENTITY\_SPEED\_DEFAULT | 17.0 | # Default speed for water animation in ship viewer, i.e. ships with this speed have visual speed | 1.0 |
| BATTLE\_VIEWPORT\_CAMERA\_ATTACKER\_YAW | -31.0 | # The yaw of the camera in the attacker viewport in degrees |
| BATTLE\_VIEWPORT\_CAMERA\_DEFENDER\_YAW | 149.9 | # The yaw of the camera in the defender viewport in degrees |
| BATTLE\_VIEWPORT\_CAMERA\_PITCH | 40.0 | # The pitch of the camera in both battle viewports in degrees |
| BATTLE\_VIEWPORT\_CAMERA\_DISTANCE | 74.0 | # The distance of the camera to the ships in both battle viewports |
| BATTLE\_VIEWPORT\_CAMERA\_ATTACKER\_TRANSLATION | { 2.0 0.0 -2.0 } | # The amount to translate the camera target by in the attacker viewport |
| BATTLE\_VIEWPORT\_CAMERA\_DEFENDER\_TRANSLATION | { -0.5 0.0 2.5 } | # The amount to translate the camera target by in the defender viewport |
## 00\_interfaces
### Lenses
| Define | Default Value | Dev Comment |
| MAP\_MARKER\_ZOOM\_THRESHHOLD\_NEAR | 100 |  |
| MAP\_MARKER\_ZOOM\_THRESHHOLD\_FAR | 900 |  |
| MAP\_MARKER\_ZOOM\_THRESHHOLD\_MAX | 4000 |  |
| MAP\_MARKER\_ZOOM\_CITIES\_ALL\_THRESHHOLD | 70 |  |
| MAP\_MARKER\_ZOOM\_CITIES\_REGION\_CAPITALS\_THRESHHOLD | 250 |  |
| MAP\_MARKER\_ZOOM\_CITIES\_STATE\_CAPITALS\_THRESHHOLD | 500 |  |
| MAP\_MARKER\_HEIGHT\_OFFSET | 1.6 | # Move Map Markers "up" in 3D space |
| LINE\_HEIGHT\_OFFSET | 0.0 | # Potentially move the Lines up the same amount, right now they go to exactly to the ground |
| NUM\_CONSTRUCTIONS\_BEFORE\_SUMMARY | 1 |  |

### Trend
| Define | Default Value | Dev Comment |
| SMALL\_ARROW\_RELATIVE\_THRESHOLD | 0.001 | # [0..1] relative changes less than this will not have a small arrow |
| BIG\_ARROW\_RELATIVE\_THRESHOLD | 0.005 | # [0..1] relative changes less than this will not have a big arrow |
### Saves
| Define | Default Value | Dev Comment |
| EXIT\_SAVE\_NAME | "autosave\_exit" |  |

### GUI
**Note**: this category is split into several sections in the file, rather than one contiguous section.

| Define | Default Value | Dev Comment |
| ANCHORED\_TOOLTIP\_THRESHOLD | 150 |  |
| TABS | 4 | # Number of spaces for tabs in ui |
| NUM\_INDENTS | 3 |  |
| MAX\_BREAKDOWN\_ITEMS | 10 |  |
| MAX\_BREAKDOWN\_ITEMS\_SHORT\_LIST | 5 |  |
| MAX\_LENGTH\_OF\_ENTERED\_TEXT | 50 | # The max allowed text length when checking for validity |
| MAX\_CONSTRUCTION\_BREAKDOWN\_ITEMS | 24 |  |
| MAX\_PAGES\_IN\_PAGED\_LIST | 10 |  |
| MAX\_CURRENTLY\_CONSTRUCTING\_ELEMENTS\_SHOWN | 10 | # active construction queue elements widget is capped to this number of items |
| TUTORIAL\_STEP\_INSTRUCTION\_BUTTON\_ID | "next" |  |
| DISMISS\_TOAST\_SHORTCUT\_ACTION | "dismiss\_toast" |  |
| CLOSE\_WINDOW\_SHORTCUT\_ACTION | "close\_window" |  |
| CENTER\_CAPITAL\_SHORTCUT\_ACTION | "center\_capital" |  |
| LESS\_THAN\_PERCENTAGE\_COLLECT\_AS\_OTHER | 0.05 | # In long lists, make items that with less than 5% appear under a special "Other" item at the end of the list (Pop Types and IG support atm) |
| CONSTRUCTION\_QUEUE\_MAX\_SHOWN\_ELEMENTS | 12 |  |
| MAX\_SUBJECTS\_SHOWN\_IN\_TOOLTIP | 5 |  |
| PROMINENT\_IG\_REQUIRED\_MEMBERSHIP | 0.1 | # In order to be displayed as a prominent Interest Group in Pop details, at least this fraction of the politically engaged population must support the IG |
| IG\_MEMBER\_ATTRACTION\_SAMPLES | 100 | # The max number of supporting Pops that will be sampled (in order of membership size) to determine the reasons they're attracted to this IG |
| MIN\_FRACTION\_BELOW\_EXPECTED\_SOL\_TO\_SHOW | 0.01 |  |
| MIN\_FRACTION\_WELFARE\_TO\_SHOW | 0.01 |  |
| LENS\_TOOLBAR\_ITEM\_WIDTH | 100 | # The width of each item in the Lens Toolbar |
| LENS\_TOOLBAR\_MARGIN\_LEFT | 53 | # The width of the side panel |
| SCROLLBAR\_WIDTH | 8 | # The width of the scroll bar |
| LENS\_TOOLBAR\_MARGIN\_RIGHT | 45; | # LENS\_TOOLBAR\_MARGIN\_LEFT - SCROLLBAR\_WIDTH |
| RADICALS\_LOYALISTS\_BREAKDOWN\_NUM\_ITEMS | 3 | # How many numbers to show in the breakdown for Radicals/Loyalists before collecting the rest as "other" |
| POP\_NEEDS\_SUMMARY\_ITEMS | 3 | # How many items from the Pop Needs tooltip to show one level above the breakdown |
| RADICALS\_LOYALISTS\_SUMMARY\_ITEMS | 2 |  |
| MIN\_LOYALTY\_CHART\_FRACTION | 0.01; | # A non-zero loyalty fraction below this value will still appear as this value in the loyalty pie chart |
| STATE\_OWNER\_PIECHART\_ALPHA | 0.5; |  |
| MIN\_TRADE\_QUANTITY\_TO\_SHOW | 0.1 | # Exporters/importers to a state/market with less volume than this are consolidated into 'additional exports/imports' |
| TREATY\_GOODS\_ARTICLE\_DEFAULT\_QUANTITY | 0.25 | # Used for predicting acceptance of goods transfer articles, when a good is selected the quantity is also set to this (as a multiplier of max, clamped by min) |
| PLACEHOLDER\_ICON | "gfx/interface/icons/war\_goals/unused/placeholder.dds" |  |
| STRAIT\_ACCESS\_OPEN\_ICON | "gfx/interface/icons/straits\_icons/straits\_access.dds" |  |
| STRAIT\_ACCESS\_NO\_MILITARY\_ICON | "gfx/interface/icons/straits\_icons/straits\_no\_military.dds" |  |
| STRAIT\_ACCESS\_CLOSED\_ICON | "gfx/interface/icons/straits\_icons/straits\_no\_access.dds" |  |
| STRAIT\_TOLL\_NO\_TOLLS\_ICON | "gfx/interface/icons/straits\_icons/straits\_no\_tolls.dds" |  |
| STRAIT\_TOLL\_LOW\_ICON | "gfx/interface/budget/budget\_set\_very\_low.dds" |  |
| STRAIT\_TOLL\_MEDIUM\_ICON | "gfx/interface/budget/budget\_set\_medium.dds" |  |
| STRAIT\_TOLL\_HIGH\_ICON | "gfx/interface/budget/budget\_set\_very\_high.dds" |  |
| STRAIT\_ALLOWED\_NO\_ENEMIES\_ICON | "gfx/interface/icons/generic\_icons/capitulate.dds" |  |
| STRAIT\_ALLOWED\_ONLY\_ALLIES\_ICON | "gfx/interface/icons/lens\_toolbar\_icons/alliance.dds" |  |
| NO\_STARVATION\_ICON | "gfx/interface/icons/map\_mode\_icons/harvest\_conditions.dds" |  |
| MILD\_STARVATION\_ICON | "gfx/interface/icons/famine\_icons/mild\_starvation.dds" |  |
| SEVERE\_STARVATION\_ICON | "gfx/interface/icons/famine\_icons/severe\_starvation.dds" |  |
| ``` # Colors for the starvation pie chart which contains population ratios in different starvation types: no, mild, severe ``` | | |
| NO\_STARVATION\_COLOR | { 0.7 0.7 0.7 1 } |  |
| MILD\_STARVATION\_COLOR | { 0.741 0.404 0.082 1 } | # Orange |
| SEVERE\_STARVATION\_COLOR | { 0.69 0.08 0.06 1 } | # Red |
| ALERT\_COLOR\_GREEN | { 0.54 0.78 0.33 1 } | # Green |
| ALERT\_COLOR\_YELLOW | { 0.97 0.77 0.33 1 } | # Yellow |
| ALERT\_COLOR\_RED | { 0.78 0.25 0.25 1 } | # Red |
| MESSAGE\_COLOR\_GOOD | { 0.54 0.78 0.33 1 } | # Green |
| MESSAGE\_COLOR\_NEUTRAL | { 1 1 1 1 } | # Yellow |
| MESSAGE\_COLOR\_BAD | { 0.78 0.25 0.25 1 } | # Red |
| MILITARY\_COLOR\_YOU | { 0.11 0.46 0.05 1 } | # Green |
| MILITARY\_COLOR\_ALLY | { 0 0.2 0.5 1 } | # Blue |
| MILITARY\_COLOR\_ENEMY | { 0.5 0.04 0.02 1 } | # Red |
| MILITARY\_COLOR\_NEUTRAL | { 0.5 0.5 0.5 1 } | # Gray |
| BIG\_SWAY\_VALUE | 100 | # The score adjustment the AI could possibly get for a generous sway, for coloring the numeric preference values in Diplomatic Play popup |
| LIBERTY\_DESIRE\_TREND\_INDICATOR\_LIMIT | 0.05 |  |
| BUILDING\_CONSIDERED\_FULLY\_EMPLOYED | 0.95 | # Hide Employment bar for Building if more than 95% employed |
| OUTLINER\_ENTRY\_DOUBLE\_CLICK\_TIME | 0.5 | # Time in seconds before we allow the interpretation of the second left click as a close of the panel. This is unfortunately not synced with OS/platform double click setting used for the creation of the doubleclick event, but 0.5 s should work for the vast majority of people even when they have a different doubleclick time. |
| ``` # these values need to correspond with the atlas defined in coat_of_arms/options ``` | | |
| FLAG\_FRAME\_WIDTH\_LARGE | 384 |  |
| FLAG\_FRAME\_HEIGHT\_LARGE | 256 |  |
| FLAG\_FRAME\_WIDTH\_MEDIUM | 96 |  |
| FLAG\_FRAME\_HEIGHT\_MEDIUM | 64 |  |
| FLAG\_FRAME\_WIDTH\_SMALL | 48 |  |
| FLAG\_FRAME\_HEIGHT\_SMALL | 32 |  |
| FLAG\_FRAME\_WIDTH\_MESH\_ATLAS | 192 | # Atlas used for mesh flags only |
| FLAG\_FRAME\_HEIGHT\_MESH\_ATLAS | 128 | # Atlas used for mesh flags only |
| ``` # Power Bloc CoAs are squares ``` | | |
| POWER\_BLOC\_COA\_FRAME\_VERY\_LARGE | 512 |  |
| POWER\_BLOC\_COA\_FRAME\_LARGE | 256 |  |
| POWER\_BLOC\_COA\_FRAME\_MEDIUM | 128 |  |
| POWER\_BLOC\_COA\_FRAME\_SMALL | 50 |  |
| POWER\_BLOC\_COA\_FRAME\_VERY\_SMALL | 32 |  |
| TECH\_TREE\_PRODUCTION\_INITIAL\_POSITION | { -600 30 } |  |
| TECH\_TREE\_MILITARY\_INITIAL\_POSITION | { 150 30 } |  |
| TECH\_TREE\_SOCIETY\_INITIAL\_POSITION | { -400 30 } |  |
| TECH\_TREE\_INITIAL\_ZOOM | 0.3 |  |
| TECH\_TREE\_MAX\_UNLOCK\_DISPLAY\_COUNT | 5 |  |
| TECH\_TREE\_MODIFIER\_UNLOCK\_ICON | "gfx/interface/tech\_tree/modifiers\_generic\_icon.dds" |  |
| TECH\_TREE\_RESEARCH\_QUEUE\_DISPLAY\_COUNT | 5 |  |
| SWAY\_OFFER\_DEFAULT\_ICON | "gfx/interface/icons/sways/obligation.dds" |  |
| SWAY\_OFFER\_OBLIGATION\_ICON | "gfx/interface/icons/sways/obligation.dds" |  |
| SWAY\_OFFER\_WARGOAL\_ICON | "gfx/interface/icons/sways/wargoal.dds" |  |
| SWAY\_OFFER\_ALLY\_ICON | "gfx/interface/icons/sways/call\_ally.dds" |  |
| SWAY\_OFFER\_BECOME\_SUBJECT\_ICON | "gfx/interface/icons/sways/subject.dds" |  |
| SWAY\_OFFER\_TRANSFER\_SUBJECT\_ICON | "gfx/interface/icons/sways/subject.dds" |  |
| SWAY\_OFFER\_TRANSFER\_STATE\_ICON | "gfx/interface/icons/sways/state.dds" |  |
| SWAY\_OFFER\_DIPLOMATIC\_PACT\_ICON | "gfx/interface/icons/sways/diplomatic\_pact.dds" |  |
| DRAG\_SENSITIVITY | 0.01 | ``` # this value is in terms of pixels/resolution, i.e. a value of 1 means the whole length of the screen # a larger value means that a larger movement is allowed during a click ``` |
| MESSAGE\_FEED\_DELAY | 1 | # Number of seconds between the feed systems wait before adding another message if there's a queue |
| MESSAGE\_FEED\_MAX\_SHOWN | 10 | # Maximum number of messages shown simultaneously in the feed |
| MESSAGE\_FEED\_NUMBER\_OF\_DAYS\_SHOWN | 14 | # Number of days we show the Notifications in the feed, needs to be lower than DEAD\_OBJ\_UNDESTROYED\_DAYS in order to not risk notifications regarding dead people etc returning null\_objs. |
| MESSAGE\_FEED\_DELETE\_NOTIFICATION\_ADVANCE | 0 | # Number of days that a notification message will be marked to be deleted in advance of the notification being deleted in order to make time for message feed animations |
| TOAST\_MESSAGE\_TIME\_SHOWN | 11.0 | # Duration in seconds for how long to show a toast. Use < 0 to require manual dismissal. |
| TOAST\_MESSAGE\_POST\_HOVER\_DELAY | 1.0 | # When a message is hovered it doesn't disappear, but the above timeout still runs. When leaving with the mouse and the time has run out, leave the message on the screen for TOAST\_MESSAGE\_POST\_HOVER\_DELAY seconds. |
| MAP\_TOOLTIP\_MOUSE\_OFFSET | { 20 20 } |  |
| TIME\_INTERVAL\_BETWEEN\_MAP\_NOTIFICATIONS | 4.5 | # Delay when a notification is blocked by being too close to another one |
| DISTANCE\_BETWEEN\_MAP\_NOTIFICATIONS | 25 | # Min distance between notifications to avoid their intersections |
| MAP\_NOTIFICATIONS\_MAX\_ZOOM | 200 | # Max camera height to show on-map notifications unless otherwise specified in the map notification database |
| JOURNAL\_ENTRY\_ICON\_DEFAULT | "gfx/interface/icons/event\_icons/event\_default.dds" | # Default icon for Journal Entries (journal and outliner) |
| SITUATION\_EVENT\_ICON\_DEFAULT | "gfx/interface/icons/event\_icons/event\_default.dds" | # Default icon for Situation Events (map marker and outliner) |
| LAND\_BATTLE\_ICON | "gfx/interface/map\_markers/battle\_icon.dds" | # Icon for Land Battle map markers |
| NAVAL\_BATTLE\_ICON | "gfx/interface/map\_markers/naval\_battle\_icon.dds" | # Icon for Naval Battle map markers |
| SOL\_MODIFIER\_POSITIVE | "gfx/interface/icons/timed\_modifier\_icons/modifier\_flag\_positive.dds" | # Icon for dynamically generated standard of living modifier for cultures/religion, positive version |
| SOL\_MODIFIER\_NEGATIVE | "gfx/interface/icons/timed\_modifier\_icons/modifier\_flag\_negative.dds" | # Icon for dynamically generated standard of living modifier for cultures/religion, negative version |
| NUMBER\_OF\_POP\_PORTRAITS\_STATE | 3 | # Number of pops sampled from all the pops on a state |
| NUMBER\_OF\_POP\_PORTRAITS\_BUILDING | 3 | # Number of pops sampled from all the pops on a building |
| GAME\_CONCEPT\_ICON\_DEFAULT | "gfx/interface/icons/generic\_icons/generic\_concept\_icon.dds" | # Default icon for Game Concepts |
| ``` # These dictate how the options in the map list panels that appear when a map interaction is active are sorted. #Lower numbers are sorted on top of higher numbers. The minimum is 0. Multiple entries can have the same sort order ``` | | |
| MAP\_LIST\_PANEL\_INTERACTION\_SORT\_ORDER\_CAN\_ACTIVATE | 0 |  |
| MAP\_LIST\_PANEL\_INTERACTION\_SORT\_ORDER\_CAN\_ACTIVATE\_MORE | 0 |  |
| MAP\_LIST\_PANEL\_INTERACTION\_SORT\_ORDER\_CAN\_DEACTIVATE | 1 |  |
| MAP\_LIST\_PANEL\_INTERACTION\_SORT\_ORDER\_CANNOT\_ACTIVATE | 2 |  |
| MAP\_LIST\_PANEL\_INTERACTION\_SORT\_ORDER\_CANNOT\_DEACTIVATE | 3 |  |
| MAP\_LIST\_PANEL\_INTERACTION\_SORT\_ORDER\_DOES\_NOT\_APPLY | 4 |  |
| NUM\_RANKING\_LEADERBOARD\_ITEMS | 10 |  |
| POP\_LIST\_POPS\_SHOWN\_PER\_TYPE | 256 |  |
| NUM\_TOP\_CONSUMPTION\_GOODS\_SHOWN | 5 |  |
| NUM\_TOP\_ASSETS\_SHOWN\_LONG | 6 |  |
| NUM\_TOP\_ASSETS\_SHOWN\_SHORT | 3 |  |
| NUM\_TOP\_OWNERS\_SHOWN\_LONG | 8 |  |
| NUM\_TOP\_OWNERS\_SHOWN\_SHORT | 5 |  |
| POLITICAL\_MOVEMENT\_SUPPORTING\_AGITATORS\_TOP\_DATAMODEL\_COUNT | 2 |  |
| ARMY\_FORMATION\_FLAG\_COLOR\_PREFIX | "army\_color\_" |  |
| FLEET\_FORMATION\_FLAG\_COLOR\_PREFIX | "fleet\_color\_" |  |
| BUILDING\_OWNERSHIP\_COLOR\_PLAYER\_GOVERNMENT | { 1 0.674 0.454 1 } |  |
| BUILDING\_OWNERSHIP\_COLOR\_PLAYER\_POPS | { 0.41 0.67 0.74 1 } |  |
| BUILDING\_OWNERSHIP\_COLOR\_PLAYER\_COMPANY | { 0.41 0.67 0.74 1 } |  |
| BUILDING\_OWNERSHIP\_COLOR\_NON\_PLAYER\_COMPANY | { 0.41 0.67 0.74 1 } |  |
| BUILDING\_OWNERSHIP\_COLOR\_LOCAL\_NON\_PLAYER\_GOVERNMENT | { 0.95 0.95 0.95 1 } |  |
| BUILDING\_OWNERSHIP\_COLOR\_LOCAL\_NON\_PLAYER\_POPS | { 0.95 0.95 0.95 1 } |  |
| BUILDING\_OWNERSHIP\_COLOR\_OTHER\_COUNTRIES\_GOVERNMENT | { 0.9 0.9 0.4 1 } |  |
| BUILDING\_OWNERSHIP\_COLOR\_OTHER\_COUNTRIES\_POPS | { 0.9 0.9 0.4 1 } |  |
| OUTLINER\_NUM\_VISIBLE\_NONEXPANDABLE\_SUBENTRIES | 1 | # Num outliner entries that can be visible when the parent entry is not expanded |
| SOCIETY\_PANEL\_DESIRED\_REPRESENTATIVE\_POPS | 3 | # Try to get this many pop portraits (not possible if there are only 1 or 2 pops...) |
| ``` # Thresholds for when the corresponding loc keys are used. If remaining duration >= defined value, we use that key # Below VERY_LOW we use the LOWEST loc key # VERY HIGH is set to 999 essentially as an unused threshold in case we need more in the future, it still works the same though # Values are in number of days ``` | | |
| HARVEST\_CONDITION\_DURATION\_LABEL\_VERY\_LOW | 60 |  |
| HARVEST\_CONDITION\_DURATION\_LABEL\_LOW | 120 |  |
| HARVEST\_CONDITION\_DURATION\_LABEL\_MODERATE | 240 |  |
| HARVEST\_CONDITION\_DURATION\_LABEL\_HIGH | 480 |  |
| HARVEST\_CONDITION\_DURATION\_LABEL\_VERY\_HIGH | 999 |  |
| COMPANY\_TYPE\_ICON\_FONT | 230 |  |
| COMPANY\_TYPE\_ICON\_OFFSET | { 0 40 } |  |
| MILITARY\_FORMATION\_FLAG\_ICON\_FONT | 95 |  |
| MILITARY\_FORMATION\_FLAG\_ICON\_OFFSET | { 0 30 } |  |
| IDEOLOGY\_ICON\_FONT | 230 |  |
| IDEOLOGY\_ICON\_OFFSET | { 0 40 } |  |
| ARTICLE\_TYPE\_ICON\_FONT | 90 |  |
| ARTICLE\_TYPE\_ICON\_OFFSET | { 0 20 } |  |
| WAR\_GOAL\_TYPE\_ICON\_FONT | 120 |  |
| WAR\_GOAL\_TYPE\_ICON\_OFFSET | { 0 32 } |  |
| NAVAL\_BATTLE\_CONDITION\_TYPE\_ICON\_FONT | 120 |  |
| NAVAL\_BATTLE\_CONDITION\_TYPE\_ICON\_OFFSET | { 0 64 } |  |
| RELIGION\_ICON\_FONT | 180 |  |
| RELIGION\_ICON\_OFFSET | { 0 60 } |  |
| INTEREST\_TIER\_TYPE\_SMALL\_ICON\_FONT | 50 |  |
| INTEREST\_TIER\_TYPE\_SMALL\_ICON\_OFFSET | { 0 12 } |  |
| INTEREST\_TIER\_TYPE\_ICON\_FONT | 90 |  |
| INTEREST\_TIER\_TYPE\_ICON\_OFFSET | { 0 20 } |  |
| AI\_STRATEGIC\_REGION\_STANCE\_TYPE\_ICON\_FONT | 230 |  |
| AI\_STRATEGIC\_REGION\_STANCE\_TYPE\_ICON\_OFFSET | { 0 40 } |  |
| SHIP\_VETERANCY\_LEVEL\_ICON\_FONT | 40 |  |
| SHIP\_VETERANCY\_LEVEL\_ICON\_OFFSET | { 0 10 } |  |

## 00\_shaders
### ShadersCommon
| Define | Default Value | Dev Comment |
| PARALLAX\_HEIGHT | 8 | # Height of parallax effects |
### MapCoa
| Define | Default Value | Dev Comment |
| ANGLE | 0.0 | # Rotation of the coat of arms on the map. In radians |
| SIZE | 25.0 | # Size of one CoA on the map. In world-units |
| SIZE\_FLATMAP | 50.0 |  |
| BLEND | 0.65f | # Minimum blend value. Final blend value will be the minimum of this and whatever the gradient borders use |
| BLEND\_FLATMAP | 0.8f |  |
| BLEND\_STRIPES | 0.8f | # Blend/Opacity of occupation stripes |
| BLEND\_STRIPES\_FLATMAP | 1.0f |  |
| ROW\_HORIZONTAL\_OFFSET | 0.25 | # Each row of coat of arms can be offset horizontally. This controls by how much in percentages |
| ROW\_COUNT | 4 | # How many rows to offset before starting over with an offset of 0s |
| STRIPE\_SCALE | 1.0 | # Scale of occupation stripes |
| STRIPE\_SCALE\_FLATMAP | 1.0 |  |

### MapmodeStripes
| Define | Default Value | Dev Comment |
| STRIPE\_ROTATION | -2.0 | # Rotation of the stripes ( Technically a sheer of the UVs, so it affects the width as well ) |
| STRIPE\_TILING | 120.0 | # Tiling of the stripes |
| STRIPE\_WIDTH | 0.2 | # Width of the stripes |
| STRIPE\_EDGE\_WIDTH | 0.075 | # Width of stripe edges |
| STRIPE\_EDGE\_COLOR | 0.75 | # Color multiplier of the stripe edges ( 1.0 = same color as stripe, 0.0 = black ) |
| STRIPE\_HEIGHT\_STEPS | 1200.0f | # The stripe tiling will start from this height and halve every time the height doubles ( Avoid starting lower than the flatmap height ) |
### EdgeOfWorld
| Define | Default Value | Dev Comment |
| ``` # Cloudfield at the edge of map top/bottom # For papermap table bokehfield, see shader file ``` | | |
| BASETILE | 20.0f |  |
| BASESCROLL | { 0.0055 0.00325 } |  |
| BASESTRENGTH | 1.0f |  |
| BASEPOSITION | 0.728 |  |
| BASECONTRAST | 1.08 |  |
| CLOUD1TILE | 2.0 |  |
| CLOUD1SCROLL | { 0.0015 -0.0015 } |  |
| CLOUD1STRENGTH | 1.0 |  |
| CLOUD1POSITION | 0.538 |  |
| CLOUD1CONTRAST | 1.0 |  |
| CLOUD2TILE | 3.0 |  |
| CLOUD2SCROLL | { -0.0075 0.00055 } |  |
| CLOUD2STRENGTH | 1.0 |  |
| CLOUD2POSITION | 0.158 |  |
| CLOUD2CONTRAST | 1.202 |  |
| HIGHCLOUDCOLOR | { 0.8 0.8 1.0 1.0 } |  |
| LOWCLOUDCOLOR | { 0.03 0.03 0.03 1.0 } |  |
| COLORMULTIPLY | 0.015 |  |
| FADEDISTANCE | 50 |  |

### GuiFlag
| Define | Default Value | Dev Comment |
| SMALL\_WAVE\_SCALE | 7.0 |  |
| WAVE\_SCALE | 0.95 |  |
| ANIMATION\_SPEED | 0.9 |  |

## References
**[Modding](./Modding.md)**

| Documentation | Defines • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
