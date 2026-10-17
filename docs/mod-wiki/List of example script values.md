# List of example script values

This article is timeless and should be accurate for any version of the game.

*Main article: [Script value](./Script value.md)*

These [script value](./Script value.md) formulas and accomanying [effects](./Effect.md) or [triggers](./Trigger.md) may be useful or interesting for modders. Feel free to add your own. Please add some commentary on how the formula works and why it might be useful or interesting.

## Fibonacci sequence
This formula replicates the [Fibonacci sequence](http://en.wikipedia.org/wiki/en:Fibonacci_sequence "wikipedia:en:Fibonacci sequence")[[wp 1]](#cite_note-en_wiki-1) by setting the value of two variables and then calculating the next value in the sequence. It makes use of scripted effects to set the variables.

**Scripted effect**

```
initialize_sequence = {
  set_variable = { name = first_value value = 0 }
  set_variable = { name = second_value value = 1 }
}
increment_sequence = {
  set_local_variable = { name = current_value value = fibonacci }
  set_variable = { name = first_value value = var:second_value }
  set_variable = { name = second_value value = local_var:current_value }
}
```

**Script value**

```
fibonacci = {
  value = var:first_value
  add = var:second_value
}
```

The variables are initialized with the first two values of the Fibonacci sequence, 0 and 1. Then they are summed and the values are shifted, so the second value becomes the first, and the sum becomes the second, using a local (temporary) variable to store the sum.

This is an example of how to increment variable values iteratively with the same script value formula.

## Pseudo-random ordering
Using the `ordered_` [iterators](https://vic3.paradoxwikis.com/Iterators), a pseudo-random ordering can be obtained by using a script such as the following:

```
ordered_country = {
 order_by = {
  value = gdp
  modulo = { int int }
 }
 max = int
 <effects>
}
```

This works by ordering every country by a random modulo of its current GDP. This can be used to replace multiple calls for `random_` iterators.

This can work for any iterator where a sufficiently unique value can be used. For example, `state_population` or `gdp` for states

## HHI Index
Using iterative math, a dynamic value representing [market concentration](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) can be obtained by using a script such as the following:

```
if = {
  limit = {
    num_companies > 0
  }
  add = {
    add = {
      every_company = {
        add = {
          value = company_employed_levels
          multiply = company_employed_levels
        }
      }
    }
    divide = {
      value = {
        every_company = {
          add = company_employed_levels
        }
      }
      multiply = {
        every_company = {
          add = company_employed_levels
        }
      }
    }
    subtract = {
      value = 1
      divide = num_companies
    }
    multiply = 8.9  #Adjust to scale, results in a value of 1 if a company owns 50% of all company-owned building levels, and a value of 7.1 if you have just one company.
  }
}
```

This script calculates the level of market consolidation by comparing the size of each company (via company\_employed\_levels) to the total market sum of company buildings. By squaring the individual market shares, it disproportionately weighs larger companies, making it an ideal trigger for mechanics involving monopolies or corporate competition.

The subtraction of 1 / num\_companies serves as a "normalization" step: if every company in the market has an identical number of building levels, the result will be exactly **0**, regardless of how many companies exist. As one company grows larger than its peers, the value increases, allowing for a smooth scaling effect for political progress or economic modifiers.

**Failed to parse (SVG (MathML can be enabled via browser plugin): Invalid response ("Math extension cannot connect to Restbase.") from server "https://en.wikipedia.org/api/rest\_v1/":): {\displaystyle \left ( \dfrac{\sum^\text{Co's}\text{employed levels}^2}{(\sum^\text{Co's}\text{employed levels}) \cdot (\sum^\text{Co's}\text{employed levels})} - \frac{1}{\text{number of Co's}} \right ) \cdot C }**

## References
---

Wikipedia link references:

1. [↑](#cite_ref-en_wiki_1-0) Links to English Wikipedia article

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
