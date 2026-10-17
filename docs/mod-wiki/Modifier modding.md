# Modifier modding

*See also: [Modifier types](./Modifier types.md)*

**Modifiers** are containers of values that affect gameplay. Modifiers use [modifier types](./Modifier types.md) to define their effects. Modifiers can be defined as *static modifiers*, sometimes called *event modifiers*, or in various scripted types, such as [technologies](./Technology modding.md), [laws](./Law modding.md), and more.

## Static modifiers
Static modifiers are defined in /common/static\_modifiers, for example:

```
splendid_coastal_state = { # This is the static modifier
    icon = gfx/interface/icons/timed_modifier_icons/modifier_gear_positive.dds # This is an icon, and it is optional
    state_infrastructure_add = 20 # This is a modifier type
    character_popularity_add = 100 # You can add whatever modifier types you want, but be mindful of the scope
}
```

Any number of [modifier types](./Modifier types.md) can be used in a static modifier, but note the *flow* of each modifier type, as they may have no effect if the static modifier is applied to the wrong scope.

### Static modifier effects and triggers
To apply a static modifier, use the [effect](./Effect.md) `add_modifier`:

```
add_modifier = { # Applies a modifier to the current scope
    name = splendid_coastal_state # the static modifier you want
    multiplier = -3 # Optional, multiply modifier type values by a number, script value, or math block
    is_decaying = no # Optional, if yes, it will decay over its lifetime, default is no
    months = 3 # Optional, if it is not set or negative, the modifier is permanent. Can also use days, weeks, or years instead.
}
```

The multiplier value adjusts the base values of the static modifier. This allows inverting or scaling a static modifier's effects.

A short form, `add_modifier = static_modifier_name`, can be used as well, which is the equivalent of

```
add_modifier = {
    name = static_modifier_name
    multiplier = 1 #i.e., no multiplier
    is_decaying = no
    months = -1 #i.e., permanent
}
```

The effect `remove_modifier = static_modifier_name` removes the specified static modifier from the current scope.

List of modifier effects

| Effect | Description | Example | Scopes | Targets |
| add\_culture\_acceptance\_modifier | Apply a cultural acceptance modifier in the scoped country for the given culture. Other than the required culture argument, this effect has the same syntax as add\_modifier. | ``` add_culture_acceptance_modifier = {   culture = culture_scope   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } ``` | country |  |
| add\_culture\_standard\_of\_living\_modifier | Apply a standard of living modifier in the scoped state for the given culture. Other than the required culture argument, this effect has the same syntax as add\_modifier. | ``` add_culture_standard_of_living_modifier = {   culture = culture_scope   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } ``` | state |  |
| add\_enactment\_modifier | Adds an enactment-related timed modifier effect to object in scope | ``` add_enactment_modifier = {   name = modifier_key } ``` | country |  |
| add\_fervor\_target\_modifier | Apply a fervor target modifier in the scoped country for the given culture. Other than the required culture argument, this effect has the same syntax as add\_modifier. | ``` add_fervor_target_modifier = {   culture = culture_scope   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } ``` | country |  |
| add\_modifier | Adds a timed modifier effect to object in scope | ``` add_modifier = {   name = static_modifier_name   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } add_modifier = static_modifier_name #set as permanent modifier with no multiplier or decay ``` | building, character, country, institution, interest\_group, journal\_entry, political\_movement, power\_bloc, state |  |
| add\_religion\_standard\_of\_living\_modifier | Apply a standard of living modifier in the scoped state for the given religion. Other than the required religion argument, this effect has the same syntax as add\_modifier. | ``` add_religion_standard_of_living_modifier = {   religion = religion_scope   days/weeks/months/years = value (optional) #can use scripted values, negative values are permanent   multiplier = value (optional) #multiplies the values of the static modifier   is_decaying = yes (optional) #sets modifier to decay in strength over its duration } ``` | state |  |
| clear\_enactment\_modifier | Clears all current law enactment modifiers of scope country. |  | country |  |
| remove\_enactment\_modifier | Removes an enactment-related timed modifier effect to object in scope |  | country |  |
| remove\_modifier | Removes a timed modifier effect to object in scope | ``` remove_modifier = static_modifier_name ``` | building, character, country, institution, interest\_group, journal\_entry, political\_movement, power\_bloc, state |  |

The [trigger](./Trigger.md) `has_modifier = static_modifier_name` checks for the presence of the specified static modifier in the current scope.

The scripted values that the game uses are defined in /Victoria 3/game/common/script\_values/event\_values.txt

## Modifier blocks
Many scripted types may contain one or more modifier blocks. These are typically defined as a block `modifier = { }` or similar. These work identically to static modifiers, except that they apply automatically to a certain scope, rather than being added by effect.

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • Modifiers • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
