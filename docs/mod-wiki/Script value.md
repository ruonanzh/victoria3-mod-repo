# Script value

*See also: [Macro](./Macro.md)*

**Script values** are mathematical calculations that allow creating dynamic values based on game values during gameplay.

Script values can be used in most scripts that accept numeric values, namely [effects](./Effect.md), [triggers](./Trigger.md), and [variables](./Variable.md), as well as for many AI behavior calculations.

A script value is calculated every time it is used. This is generally useful; however, in cases where the value might be invoked frequently – such as in localization or a GUI, it is often better to save the value to a variable and display or use that, updating the variable only as needed.

Script values can be defined immediately in an effect or trigger, or they can be defined as an easily reusable named script value.

## Named values and inline values
Named values are defined in .txt files contained in common/script\_values/. Inline values are defined directly at their use with an effect, trigger, or other use. In most cases, named values and inline values are interchangeable.

Script values cannot use more than 5 decimal places. If more precision is required in a calculation, first multiply by some power of 10. The largest possible value (most positive) is 92233720368547.75807, while the smallest possible value (most negative) is -92233720368547.75808; exceeding these values can result in over/underflow.[[1]](#cite_note-1)

Be careful of value loops. A value should never depend on itself directly.

### Static values
The simplest script value is just a literal value. This is most useful to ensure a common value is the same for all uses. A static script value is simply a script name with a literal number value following, such as `construction_cost_medium = 400`.

## Formulae and operators
Most script values are a formula, made up of one or more operators. Below are the operators that can be used in script values[[2]](#cite_note-2). Most function in the usual mathematical sense for the given term. Operators are evaluated in linear order, left-to-right, top-to-bottom; there is no order of operations such as PEMDAS/BEDMAS. The right side of most operators can be any numerical value: a literal number, an [event target](./Event target.md) that returns a value, or even another script value. This allows for more complex formulas, and event targets allow using dynamic game values.

| Operator | Description |
| value | Sets script value to this (overwrites any previous value) |
| add | Adds this value to script value |
| subtract | Subtracts this value from the script value |
| multiply | Multiplies the script value by this value |
| divide | Divides the script value by this value |
| modulo | Gets the remainder after dividing the script value by this value |
| max | Sets the script value to this if the script value is larger (more positive) |
| min | Sets the script value to this if the script value is smaller (more negative) |
| round | Rounds script value to an integer; right side is boolean |
| ceiling | Rounds script value up to an integer (more positive); right side is boolean |
| floor | Rounds script value down to an integer (more negative); right side is boolean |
| round\_to | Rounds script value to nearest multiple of this value |
| fixed\_range | Sets script value to a random fixed-point value within range set by contained min and max; right side is a block |
| integer\_range | Sets script value to a random integer value within range set by contained min and max; right side is a block |
| pow | Raises the value to the specified exponent; accepts decimal and negative values; does not return exact value in most cases |

Formulas can also use conditional values with `if`, `else_if`, and `else`, which operate in their usual script manner.

### Examples
A basic formula just uses a number of operators to calculate a final value.

```
example_value = {
  #values start at null/0
  add = 5         #value is 5
  multiply = 4    #value is 20
  max = 10        #value is 10
  subtract = 3    #value is 7
  value = 13      #value is 13
}
```

It is also possible to use inline formulas for the value of an operator; this is equivalent to defining a separate named value and using it as the value for the operator.

```
first_example = {
  add = 6         #value is 6
  multiply = {
    value = 3
    divide = 2
  }               #same as multiply by 1.5, value is now 9
  max = 10        #value is 9
  subtract = 3    #value is 6
}

second_example = {
  add = 6                 #value is 6
  multiply = sub_value    #value is now 9
  max = 10                #value is 9
  subtract = 3            #value is 6
}
sub_value = {
  value = 3
  divide = 2
}
```

[Event targets](./Event target.md) that return a value can also be used as the value of an operator. Keep in mind that many [triggers](./Trigger.md) can be used as an event target, as long as they compare a value.

```
half_expenses = {
  value = expenses    #sets value to current weekly government expenses
  divide = 2          #divides it by two
}
```

## Script values and scope
Script values are typically calculated in the [scope](./Scope.md) where they are called. This matters greatly when using [event targets](./Event target.md), conditional values, and iterators, as most of those depend on certain scopes. For example, the effect `c:GBR = { add_treasury = half_expenses }` calculates its value from the scope of GBR, while `c:FRA = { add_treasury = half_expenses }` does so from the scope of France. Depending on the gamestate and formula of `half_expenses`, these could be very different values.

There are two ways of setting a specific scope for a script value:

1. When calling a script value, the script value can be dot scoped with event targets. For example, `c:FRA = { add_treasury = c:GBR.half_expenses }` gives the same value as `c:GBR = { add_treasury = half_expenses }`, because `half_expenses` is calculated in GBR's scope both times.
2. When defining a formula, the values in the formula can be scoped with event targets or iterators. As `half_expenses` uses the event target `expenses`, using `c:GBR.expenses` always uses the value from GBR's scope, regardless of where `half_expenses` is called.

These methods can be mixed as well, so that some values may always refer to a defined scope while others refer to the current scope.

## Conditionals
Using the conditionals `if`, `else_if`, and `else` allows formulas to vary in controlled ways depending on game state. For example, the following formula results in different values depending on what technologies have been researched:

```
tech_scaled_income = {
  value = income    #sets value to current weekly government income
  if = {
    limit = { has_technology_researched = currency_standards }
    multiply = 1.05 #increase by 5%
  }
  if = {
    limit = { has_technology_researched = banking }
    multiply = 1.05 #increase by another 5%
  }
  if = {
    limit = { has_technology_researched = central_banking }
    multiply = 1.1  #increase by another 10%
  }
}
```

Note that these are cumulative, exclusive conditions can be defined as well. In this example, only the most advanced technology is considered.

```
tech_scaled_income = {
  value = income     #sets value to current weekly government income
  if = {
    limit = { has_technology_researched = central_banking }
    multiply = 1.1   #increase by 10%
  }
  else_if = {
    limit = { has_technology_researched = banking }
    multiply = 1.075 #increase by 7.5%
  }
  else_if = {
    limit = { has_technology_researched = currency_standards }
    multiply = 1.05  #increase by 5%
  }
}
```

## Iterators
[Iterators](https://vic3.paradoxwikis.com/Iterators), or lists, can be used within formulas to run the same set of operators multiple times. Note that iterators typically change scope, so event targets may require scoping to get the desired value. A common use for iterators is a total sum from some object set, such as owned states.

This example sums up the total infrastructure in a country, by adding the infrastructure from each owned state:

```
total_infrastructure = {
  every_scope_state = {
    add = infrastructure
  }
}
```

Conditionals and iterator parameters can be used as well to narrow the range of objects used. The following sums the infrastructure only from incorporated states.

```
total_incorporated_infrastructure = {
  every_scope_state = {
    limit = { is_incorporated = yes }
    add = infrastructure
  }
}
```

Iterators can be nested also, with the correct scoping, as for example:

```
number_of_steel_mills_of_allies = {
    every_scope_ally = {
        every_scope_building = {
            limit = { is_building_type = building_steel_mills }
            add = level
        }
    }
}
```

This formula iterates over every ally of the country, then iterates over each of *their* buildings, and adds the level of the buildings that are steel mills. In short, it returns the total number of levels of steel mills in the allies of the country in question.

While `every_` iterators are generally the most useful for formulas, `ordered_` and `random_` have their uses as well.

Be mindful of putting operators inside or outside the iterator's block. For example, to get the average infrastructure of owned states, the division needs to be outside the state scope.

```
average_infrastructure = {
  every_scope_state = {
    add = infrastructure
  }
  divide = num_states
}
```

If the division happened inside the state scope, with a valid value, it would be run on each value, rather than the sum value.

## Localization
*Main article: [Localization](./Localization.md)*

Script values can be displayed in localization with the function `ScriptValue('named_script_value')`. See the localization page for more information about how to use and format functions.

In some uses, an operator can be given a description using `desc = loc_key`. The operator must use a block in order to do so. The description is then shown alongside the current value in game. This is commonly used in scripted progress bars for journal entries and for diplomatic acceptance.

When a `desc` is available, the value itself can be given custom formatting by using `format = loc_key`. The format localization uses two special terms, but otherwise can be formatted like any localization. The special terms are `$VALUE$` which is the value and `$KEY$` which is the `desc` key. These can be ordered however wished and additional text can be added as well. Finally, `$VALUE$` can use [Function formatting](./Localization.md#Function_formatting) such as `$VALUE|=$`.

## Temporary Values
A temporary value can be saved using `save_temporary_value_as`. This can be used to save values that will be used frequently within the same script.

Saved temporary values can be retrieved using the event target `scope:`.

```
coal_synergy = {
    every_scope_building = {
        limit = { is_building_type = building_steel_mills }
        add = level
    }
    save_temporary_value_as = number_of_steel_mills

    # "Reset" the value
    value = 0

    every_scope_building = {
        limit = { is_building_type = building_coal_mine }
        add = level
    }
    save_temporary_value_as = number_of_coal_mines

    value = 0

    if = {
        limit = {
            scope:number_of_coal_mines > scope:number_of_steel_mills
        }
        value = scope:number_of_coal_mines
        multiply = scope:number_of_steel_mills
    }
    else = {
        value = scope:number_of_coal_mines
        add = scope:number_of_steel_mills
    }
}
```

In this example code, if you have more coal mines than steel mills, the value is equal to the number of coal mines × number of steel mills. Otherwise, the value is equal to the number of coal mines + number of steel mills.

## List of example script values
*Main article: [List of example script values](./List of example script values.md)*

This page holds examples of script values that may be useful or interesting to use or learn from. Feel free to add your own.

## @ values
*Not to be confused with the [localization](./Localization.md) @ function for texticons*

An **@ value** (or at value) is a more limited version of a script value. An @ value can only be used within the same file and can only be defined in a pure mathematical formula or a literal string, without reference to gamestate. An @ value is thus always constant. @ values can be used in most files – including script values – and are used extensively in gui and graphics related files. Their main purpose is standardization and easy changing of related values.

An @ value can be defined as a simple number, a mathematical formula, a literal string, or another @ value, then whenever that @ value is used, the file replaces its value in place.

Example @ value definitions:

```
@pi = 3.1416
@third = @[1/3]
@sub_YUC_hoist_scale = @[third*2]
@canton_scale_cross_x = @[ ( 333 / 768 ) + 0.001 ]
@birthrate_at_growth_max = @[(pop_growth_max_sol-pop_growth_transition_sol)*((min_birthrate-birthrate_at_transition)/(pop_growth_stable_sol-pop_growth_transition_sol))+birthrate_at_transition]
@this_is_you = "this_is_you.dds"
@default_window_file = "gui/notifications/jomini_message.gui"
@default_window_name = "jomini_message"
@tex_star_position = @sixth
```

An @ formula is always wrapped in `@[ ]` and any @ values used within a formula do not use their @. @ formulas can use addition `+`, subtraction `-`, multiplication `*`, and division `/`. These formulas **do** follow PEMDAS/BEDMAS order of operations, and parentheses can be used to group additions and subtractions that should be performed before multiplications or divisions. Spaces can be used or not used freely to separate elements of a formula. Unary negation can be performed with `-` as well: `@[-1]` is equal to `@[0 - 1]`, `@[-1/2]` is equal to `@[1/-2]`.

An @ formula can be use in place of a defined @ value as well; for example, `width = @[1/3]` gives the same result as `width = @third`, using the definition above.

When using an @ value outside a formula, it must be called with the @; for example, `max_width = @texture_importer_output_text_width`. In all other ways, it can be used anywhere a literal number or string could be used.

## References
1. [↑](#cite_ref-1) Script values are 64bit with 5 decimal places
2. [↑](#cite_ref-2) Adapted from /Victoria 3/game/common/script\_values/script\_values.md

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • Script value • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
