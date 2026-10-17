# Script localization

This article has been verified for the current version (1.13) of the game.

**Script localization** can be used to localize [effects](./Effect.md) and [triggers](./Trigger.md) such that they display different localization depending on the context. For example, an effect might display “Switzerland gains 3 foos” when it is used on the root country but could display “The country gains 3 foos” if it is used in a country scope with other effects.

Script localization also allows displaying values, such as from scripted effects with parameters.

## Setting up script localization
### Custom description
To use script localization you need a `custom_description` block encompassing the effect or trigger that should be localized. Various additional elements can be added depending on how the script localization should look in the end.

- `text`: The `text` links to a definition in the common/effect\_localization or common/trigger\_localization folder. It defines which localization string should be used in which situation.

- `subject` (optional): The `subject` requires a scope and can be referenced in the localization string. It usually indicates a country, character, etc. which is the subject of the effect or trigger.
- `object` (optional): The `object` is similar to the subject, as it requires a scope and can be referenced in the localization string. Note that the subject and object can be different types. The subject could be a country while the object could be a character for example.
- `value` (optional): If the effect or trigger uses a `value` like a variable or a parameter it can be referenced in the localization string if it is defined in the value.

The localization string “Switzerland steals 10 Foo from Sweden” uses these references: “`subject` steals `value` Foo from `object`”

An example for a custom description usage in a scripted effect could look like this:

```
steal_x_foo_example_effect = {
	custom_description = {
		text = "steal_x_foo_example_effect"
		subject = this
		object = $TARGET$
		value = $AMOUNT$

		change_variable = {
			name = foo
			add = $AMOUNT$
		}
		$TARGET$ = {
			change_variable = {
				name = foo
				subtract = $AMOUNT$
			}
		}
	}
}
```

In this effect the subject (`this`) gains `AMOUNT` more foo, while the object (`TARGET`) loses the same amount.

### Localization definitions
The script localization file links the usage of the effect to certain localization strings. Multiple strings can be linked depending on how and where the effect is used.

An effect localization definition could look like this:

```
steal_x_foo_example_effect = {
	global = STEAL_X_FOO_EXAMPLE_EFFECT_POSITIVE
	global_neg = STEAL_X_FOO_EXAMPLE_EFFECT_NEGATIVE
	first = STEAL_X_FOO_EXAMPLE_EFFECT_FIRST_POSITIVE
	first_neg = STEAL_X_FOO_EXAMPLE_EFFECT_FIRST_NEGATIVE
	third = STEAL_X_FOO_EXAMPLE_EFFECT_THIRD_POSITIVE
	third_neg = STEAL_X_FOO_EXAMPLE_EFFECT_THIRD_NEGATIVE
}
```

`global`, `first` and `third` define the string used for the following situations:

- `first`: The effect is used for the root country.
- `third`: The effect is used for another country but only one effect is executed in the other country’s scope.
- `global`: The effect is used for another country and multiple effects are executed for that country.

The suffix `_neg` is used when the effect is negative. For effects, this is mostly the case, when a value is used and the value is negative.

The examples in the screenshots show how the different effect localizations look in the game.

`STEAL_X_FOO_EXAMPLE_EFFECT_POSITIVE`

`STEAL_X_FOO_EXAMPLE_EFFECT_NEGATIVE`

`STEAL_X_FOO_EXAMPLE_EFFECT_FIRST_POSITIVE`

`STEAL_X_FOO_EXAMPLE_EFFECT_FIRST_NEGATIVE`

`STEAL_X_FOO_EXAMPLE_EFFECT_THIRD_POSITIVE` and `STEAL_X_FOO_EXAMPLE_EFFECT_THIRD_NEGATIVE`

### Localization strings
The localization strings which are defined in the script localization definition must localized as well. The Wiki page about [localization](./Localization.md) can help to understand and format the localization strings.

The strings for the `steal_x_foo_example_effect` look like this:

```
 STEAL_X_FOO_EXAMPLE_EFFECT_POSITIVE: "The Country steals $VALUE|0+$ [concept_foo] from [TARGET_COUNTRY.GetName]"
 STEAL_X_FOO_EXAMPLE_EFFECT_NEGATIVE: "The Country loses $VALUE|0-$ [concept_foo] to [TARGET_COUNTRY.GetName]"
 STEAL_X_FOO_EXAMPLE_EFFECT_FIRST_POSITIVE: "[COUNTRY.GetNameNoFlag] steals $VALUE|0+$ [concept_foo] from [TARGET_COUNTRY.GetName]"
 STEAL_X_FOO_EXAMPLE_EFFECT_FIRST_NEGATIVE: "[COUNTRY.GetNameNoFlag] loses $VALUE|0-$ [concept_foo] to [TARGET_COUNTRY.GetName]"
 STEAL_X_FOO_EXAMPLE_EFFECT_THIRD_POSITIVE: "[COUNTRY.GetName] steals $VALUE|0+$ [concept_foo] from [TARGET_COUNTRY.GetName]"
 STEAL_X_FOO_EXAMPLE_EFFECT_THIRD_NEGATIVE: "[COUNTRY.GetName] loses $VALUE|0-$ [concept_foo] to [TARGET_COUNTRY.GetName]"
```

Note that `COUNTRY` is the reference to the `subject` country, while `TARGET_COUNTRY` is the reference to the `object` country. Depending on the type of the object and subject other GUI promotes are necessary. For example, a character would require `CHARACTER`. The `object` is always referenced by using the `TARGET_` prefix along with the GUI promote.

`$VALUE$` is a hardcoded engine localization key that returns the value of the `value` parameter in the custom description.

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • Script localization |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
