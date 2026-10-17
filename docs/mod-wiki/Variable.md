# Variable

**Variables** are scriptable [event targets](./Event target.md) that can hold values or scopes. Many [effects](./Effect.md) and [triggers](./Trigger.md) can use variables as a target in place of a directly scripted object or value. Variables can also be used as [scopes](./Scope.md).

## Variable types
There are three types of variables: "regular", global, and local.

| Variable type | Scoped | Persistent | Event target |
| "regular" |  |  | var: |
| global |  |  | global\_var: |
| local |  |  | local\_var: |

Outside variable specific effects and triggers, variables must be referenced with the event target prefix of their type. Variable specific effects and triggers generally use just the variable key.

### Variable usage
Once a variable has been set, its value can be used in many effects and triggers. Any script term where a [scope](./Scope.md) or [script value](./Script value.md) can be used can generally accept a variable as well.

Variables can hold a numerical or Boolean value, a game object as a scope, or a localization key. A variable that holds a scope can be used to set scope to that object as well.

Regular variables are set in the currently scoped game object and can only be referenced from that object's scope. Global and local variables are set in no scope and can be referenced from anywhere.

Local variables are temporary and are automatically removed at the end of the effect or event chain that created them. Regular and global variables are persistent and are not removed unless specifically scripted to.

#### Setting and changing numerical variables
While numerical variables can get changed by using specific effects like `change_variable` or `clamp_variable` those effects can sometimes create issues.

Therefore it is often easier to use `set_variable` to change a numerical variable. This is possible by using script math. This example shows, how a variable can get changed by a certain value:

```
 set_variable = {
	name = foo
	value = {
		if = {
			limit = { has_variable = foo }
			value = var:foo
		}
		add = 5
	}
}
```

This effect checks if the variable foo exists. If it already exists, the new value is set to the current value. If it does not exist yet, the value gets set to 0. Then 5 is added to the value. This means the variable is set, even if it does not yet exist and changes its current value by 5.
If this effect is used a lot, it might be a good idea to create a scripted effect with [parameters](./Macro.md#Parameters) for it. This is an example for such a scripted effect:

```
 prefix_change_variable_effect = {
	set_variable = {
		name = $NAME$
		value = {
			if = {
				limit = { has_variable = $NAME$ }
				value = var:$NAME$
			}
			add = $AMOUNT$
			$ADDITIONAL_SCRIPT_MATH$
		}
	}
}
```

This effect does the same as the effect further up but it is more versatile and can easily get reused. An example for its usage might look like this:

```
 prefix_change_variable_effect = {
	NAME = foo
	AMOUNT = -3
	ADDITIONAL_SCRIPT_MATH = "min = 0 max = 100"
}
```

This usage would change the variable `foo` by `-3` and would additionally limit the variable to a minimum of 0 and a maximum of 100. Note that `ADDITIONAL_SCRIPT_MATH` could be used for even more script math.

### Flag and variables
Variables can hold [localization](./Localization.md) keys by setting the value with `flag:loc_key`. This is useful for [interface modding](./Interface modding.md) and localization as the function `GetFlagName` returns the key's localized string.

The following script snippets illustrate how flag variables work. Given a localization key and string and variable set to that key.

```
 foo: "bar"
```

```
set_variable = {
  name = test
  value = flag:foo
}
```

The [GUI script](./GUI script.md) function `[Var('test').GetFlagName]` returns the string "bar".

Variables can also be compared for equality against flags, so that `var:test = flag:foo` would return true in the above example.

The variable itself does not contain the localized string, just the key.

## Variable lists
Variable lists are custom [iterator](https://vic3.paradoxwikis.com/Iterator) lists, whose elements are all specifically added and removed by effect. In every other way, variable lists are the same as any other iterator.

## Variable effects
*See also: [Effect](./Effect.md)*

List of variable effects

| Effect | Description | Example | Scopes | Targets |
| add\_to\_global\_variable\_list | Adds the event target to a global variable list for the given duration | ``` add_to_global_variable_list = {   name = <variable name>   target = <event target>   days/weeks/months/years = <script_value> } ``` | none |  |
| add\_to\_local\_variable\_list | Adds the event target to a local variable list for the given duration | ``` add_to_local_variable_list = {   name = <variable name>   target = <event target>   days/weeks/months/years = <script_value> } ``` | none |  |
| add\_to\_variable\_list | Adds the event target to a variable list for the given duration | ``` add_to_variable_list = {   name = <variable name>   target = <event target>   days/weeks/months/years = <script_value> } ``` | none |  |
| change\_global\_variable | Changes the value of a numeric global variable | ``` change_global_variable = {   name = <global variable>   <operation type> = <value> } The valid operations are add, subtract, multiply, divide, modulo, min and max ``` | none |  |
| change\_local\_variable | Changes the value of a numeric local variable | ``` change_local_variable = {   name = <local variable>   <operation type> = <value> } The valid operations are add, subtract, multiply, divide, modulo, min and max ``` | none |  |
| change\_variable | Changes the value of a numeric variable | ``` change_variable = {   name = <variable name>   <operation type> = <value> } The valid operations are add, subtract, multiply, divide, modulo, min and max ``` | none |  |
| clamp\_global\_variable | Clamps a global variable the specified max and min | ``` clamp_global_variable = {  name = <global variable>  max = <value>  min = <value> } ``` | none |  |
| clamp\_local\_variable | Clamps a local variable the specified max and min | ``` clamp_local_variable = {  name = <local variable>  max = <value>  min = <value> } ``` | none |  |
| clamp\_variable | Clamps a variable the specified max and min | ``` clamp_variable = {  name = <variable name>  max = <value>  min = <value> } ``` | none |  |
| clear\_global\_variable\_list | Empties the list | ``` clear_global_variable_list = variable_name ``` | none |  |
| clear\_local\_variable\_list | Empties the list | ``` clear_local_variable_list = variable_name ``` | none |  |
| clear\_variable\_list | Empties the list | ``` clear_variable_list = variable_name ``` | none |  |
| every\_in\_global\_list | Iterate through all items in global list. | ``` every_in_global_list = {   list = name or variable = name   limit = { <triggers> } (optional)   <effects> } Use "list" for lists created by add_to_(temporary)_list Use "variable" for lists created by add_to_(global/local)_variable_list ``` | none |  |
| remove\_global\_variable | Removes a global variable | ``` remove_global_variable = variable_name ``` | none |  |
| remove\_list\_global\_variable | Removes the target from a global variable list | ``` remove_list_global_variable = {  name = <global variable>  target = <event target> } ``` | none |  |
| remove\_list\_local\_variable | Removes the target from a local variable list | ``` remove_list_local_variable = {  name = <local variable>  target = <event target> } ``` | none |  |
| remove\_list\_variable | Removes the target from a variable list | ``` remove_list_variable = {  name = <variable name>  target = <event target> } ``` | none |  |
| remove\_variable | Removes a variable | ``` remove_variable = variable_name ``` | none |  |
| round\_global\_variable | Rounds a global variable to the nearest specified value | ``` round_global_variable = {  name = <global variable>  nearest = <script_value> } ``` | none |  |
| round\_local\_variable | Rounds a local variable to the nearest specified value | ``` round_local_variable = {  name = <local variable>  nearest = <script_value> } ``` | none |  |
| round\_variable | Rounds a variable to the nearest specified value | ``` round_variable = {  name = <variable name>  nearest = <script_value> } ``` | none |  |
| set\_global\_variable | Sets a global variable | ``` set_global_variable = {  name = <global variable>  value = <event target>/<script_value>/<flag>  days/weeks/months/years = <script_value> (optional) } This variable will be accessible with global_var:<variable name>.  Can also be used as set_global_variable = X (equivalent to set_global_variable = { name = X value = yes }) ``` | none |  |
| set\_local\_variable | Sets a local variable | ``` set_local_variable = {  name = <local variable>  value = <event target>/<script_value>/<flag>  days/weeks/months/years = <script_value> (optional) } This variable will be accessible with local_var:<variable name>, until the end of the current effect or event chain.  Can also be used as set_local_variable = X (equivalent to set_local_variable = { name = X value = yes }) ``` | none |  |
| set\_variable | Sets a variable | ``` set_variable = {  name = <variable name>  value = <event target>/<script_value>/<flag>  days/weeks/months/years = <script_value> (optional) } This variable will be accessible from the scope where it is set with var:<variable name>.  Can also be used as set_variable = X (equivalent to set_variable = { name = X value = yes }) ``` | none |  |
| sort\_global\_variable\_list | Sorts a global variable list | ``` sort_global_variable_list = {  name = <global variable>  order = <math script> } ``` | none |  |
| sort\_local\_variable\_list | Sorts a local variable list | ``` sort_local_variable_list = {  name = <local variable>  order = <math script> } ``` | none |  |
| sort\_variable\_list | Sorts a variable list | ``` sort_variable_list = {  name = <variable name>  order = <math script> } ``` | none |  |

## Variable triggers
*See also: [Trigger](./Trigger.md)*

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

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • Variables |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
