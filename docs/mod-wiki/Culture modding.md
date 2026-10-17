# Culture modding

*See also: [Religion modding](./Religion modding.md)*

[Culture](https://vic3.paradoxwikis.com/Culture) in Victoria 3 represents the abstracted ethnicity and traditions of pops and countries.

## Culture definition
Cultures are defined in /Victoria 3/game/common/cultures/. The definition is a script name, color, religion, traits, list of names, ethnicities, and graphics. For example:

```
mazanderani ={	#Script name can be anything, but best to match desired in-game localization unless it overlaps some other script term
    color= rgb{ 158 68 137 }	#either rgb (255) or hsv (decimal)

    religion = shiite	#Any defined religion; default religion for pops and countries of this culture
    heritage = heritage_iranian
    language = language_tabari
    traditions = { tradition_persianate }

    male_common_first_names={	#space or line-separated list of names, each is a localization key, and so must have no spaces
        [names]
    }
    female_common_first_names = {
	[names]
    }
    common_last_names={
	[names]
    }

    ethnicities = {	#weighted list of ethnicities, affects appearance of pop and character models
	1 = arab
    }
    graphics = arabic	#Graphical culture used for pops and countries with this culture
}
```

The script name is used as a localization key as well as for triggers and effects.

The color can be either RGB or HSV format: RGB uses 0-255 values while HSV uses decimal values.

Heritage is a single heritage trait, language a single language trait, and tradition any number of tradition traits.

Name lists are used for generating characters of that culture and should include at least `male_common_first_names`, `female_common_first_names`, and `common_last_names`. Additional lists can use `noble` and `regal` in place of `common`, e.g. `male_noble_first_names` or `regal_last_names`.

Ethnicities are a weighted list of defined ethnicities in /Victoria 3/game/common/ethnicities/. Unmodified cultures typically have one ethnicity, with a few that have two or more.

Graphics are defined in /Victoria 3/game/common/culture\_graphics/, just as a simple defined block, `arabic = {}`. This is referenced in cultures and in various graphics files.

Each culture may also have an `obsessions` block, listing one or more consumable goods that the culture starts obsessed with. Do not define more than the `MAX_NUM_OBSESSIONS` goods as starting obsessions.

Similarly, each culture may also have a `taboos` block, listing one or more consumable goods that the culture has as a taboo. It is not clear if there is a maximum number of taboos. Culture taboos override religion taboos

## Discrimination traits
Cultures and [religions](./Religion modding.md) both use discrimination traits defined in /Victoria 3/game/common/discrimination\_traits/. Each trait is defined as by a unique script name and block. Each trait has a `type` which can be `heritage`, `language`, or `tradition`. The script name is also a localization key.

For example:

```
language_germanophone = { # a language trait
	type = language
	trait_group = language_group_germanic
}

heritage_abyssinian = { # a heritage trait
	type = heritage
	trait_group = heritage_group_african
}

tradition_rumelian = {
	type = tradition
}
```

The prefixes are only for easy reference and categorization.

Nothing distinguishes a cultural trait from a religious trait besides its use in culture and religion definitions. Religions only use heritage traits, not language or tradition traits.

Heritage and language traits also have a trait group, representing a collection of similar traits.

### Trait groups
Discrimination trait groups are defined in /Victoria 3/game/common/discrimination\_trait\_groups/. Trait groups are identical to traits except that they cannot be a tradition type, nor do they have a further group.

For example

```
language_group_germanic = { # a language trait group
	type = language
}

heritage_group_african = { # a heritage trait group
	type = heritage
}
```

## Modifier Definitions
*See also: [Modifier types](./Modifier types.md), [Modifier modding](./Modifier modding.md)*

When creating a culture, you must also create two sets of [static modifiers](./Modifier modding.md), `(culture name)_standard_of_living_modifier_positive` and `(culture name)_standard_of_living_modifier_negative` and `(culture name)_cultural_acceptance_modifier_positive` and `(culture name)_cultural_acceptance_modifier_negative`. You must also create [modifier types](./Modifier types.md) named `state_(culture name)_standard_of_living_add`, which is used by the [effect](./Effect.md) add\_culture\_standard\_of\_living\_modifier and `country_(culture name)_cultural_acceptance_add` which is used with add\_culture\_acceptance\_modifier. Examples of these definitions for vanilla cultures can be found at /Victoria 3/game/common/static\_modifiers/07\_culture\_standard\_of\_living.txt and /Victoria 3/game/common/modifier\_type\_definitions/99\_todo\_sort\_into\_other\_files.txt

For example:

```
#in static_modifiers
scottish_standard_of_living_modifier_positive = {
	icon = "gfx/interface/icons/timed_modifier_icons/modifier_flag_positive.dds"
	state_scottish_standard_of_living_add = 1
}

scottish_standard_of_living_modifier_negative = {
	icon = "gfx/interface/icons/timed_modifier_icons/modifier_flag_negative.dds"
	state_scottish_standard_of_living_add = 1
}

scottish_cultural_acceptance_modifier_positive = {
	icon = "gfx/interface/icons/timed_modifier_icons/modifier_flag_positive.dds"
	country_scottish_cultural_acceptance_add = 1
}

scottish_cultural_acceptance_modifier_negative = {
	icon = "gfx/interface/icons/timed_modifier_icons/modifier_flag_negative.dds"
	country_scottish_cultural_acceptance_add = 1
}

#############################
#in modifier_types
state_scottish_standard_of_living_add = {
	decimals=1
	color=good
	game_data = {
		ai_value=0
	}
}

country_scottish_cultural_acceptance_add = {
	decimals=1
	color=good
	game_data = {
		ai_value=0
	}
}
```

## Base game cultures
*See also: [List of cultures](https://vic3.paradoxwikis.com/List_of_cultures)*

Most base game cultures use the same script name as the English localized name, except all in lowercase, and with spaces or hyphens replaced by underscores and replacing all non-ASCII characters with their closest equivalent.

The following cultures differ from this pattern and use a non-obvious script name. Some are slight respellings, others use alternate names for the culture.

| Culture | Script name |
| Franco-Provençal | francoprovencal |
| English | british |
| Sephardim | sephardic |
| Amazigh | berber |
| Kazakh | kazak |
| Kyrgyz | kirgiz |
| Oria | oriya |
| Punjabi | panjabi |
| Telugu | telegu |
| Aboriginal | aborigine |
| O’odham | oodham |
| Fluvial Bantu | fluvian\_bantu |
| Chitrali | kho |
| Szekler | szekely |

## Culture script documentation
The following [effects](./Effect.md), [event targets](./Event target.md), and [triggers](./Trigger.md) can be used in culture scope.

List of culture effects

| Effect | Description | Example | Targets |
| add\_cultural\_community\_in\_state | Adds a cultural community for the scoped culture in the target state. | ``` cu:zulu = { add_cultural_community_in_state = scope:some_state } ``` | state |
| add\_cultural\_obsession | Adds a new obsession to the culture in scope | ``` add_cultural_obsession = <goods> ``` |  |
| add\_fervor | Adds fervor to a scoped culture | ``` add_fervor = 2.6 ``` |  |
| add\_tradition\_trait | Adds a new tradition trait to the culture in scope | ``` add_tradition_trait = <tradition_trait> ``` |  |
| every\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` every_scope_pop = {   limit = { <triggers> } #optional   <effects> } ``` | pop |
| ordered\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` ordered_scope_pop = {   limit = { <triggers> } #optional   order_by = script_value #determines ordering of scopes by comparison   position = int #optional, default 0; selects scope from ordering, 0-indexed   min = int #optional, default 0; sets "top" position to return, 0-indexed   max = script_value #optional, default 1/inf; number of scopes to return, 1 if min isn't specified, inf if it is.   check_range_bounds = no #optional; If you don't want an error logged if the list is smaller than the min/max   <effects> } ``` | pop |
| random\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` random_scope_pop = {   limit = { <triggers> } #optional   weight = { <mtth blocks> } #optional   <effects> } ``` | pop |
| remove\_cultural\_obsession | Removes an obsession from the culture in scope | ``` remove_cultural_obsession = <goods> ``` |  |
| remove\_tradition\_trait | Removes a existing tradition trait to the culture in scope | ``` remove_tradition_trait = <tradition_trait> ``` |  |
| set\_fervor | Sets the fervor of a scoped culture | ``` set_fervor = 3.0 ``` |  |

List of culture triggers

| Trigger | Description | Example | Targets |
| any\_scope\_pop | Iterate through all pops in a: country, state, interest group, culture | ``` any_scope_pop = {   filter = { <triggers> } (optional)   <count=num/all> /   <percent=fixed_point> (optional)   <triggers> } ``` | pop |
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

List of culture event targets

| Event target | Description | To scope |
| national\_awakening\_state\_region | Links from a culture scope to the state region with an active national awakening for that culture | state\_region |

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • Culture • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
