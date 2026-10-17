# Decision modding

[Decisions](https://vic3.paradoxwikis.com/Decision) are scripted effects that can be taken in certain circumstances. Decisions are defined in /Victoria 3/game/common/decisions.

## Example decision
Decisions have two scripted [trigger](./Trigger.md) blocks, a scripted [effect](./Effect.md) block, and an AI chance script value block.

Example:

```
#Internal reference name of the decision
example_decision = {

	#Trigger block that determines whether the decision is shown to the player as a potential option
	is_shown = {
		this = c:ABC
		
		#A variable is often used to make sure the decision is not repeatable
		NOT = { has_variable = example_decision_taken }
	}

	#Trigger block that determines when a shown decision can actually be selected
	possible = {
		has_technology_researched = organized_sports
	}
	
	#The effects that are executed once the decision is taken
	when_taken = {
		trigger_event = {
			id = example_events.1
			popup = yes
		}
		
		#The variable referenced in the is_shown trigger/section
		set_variable = {
			name = example_decision_taken
		} 	
	}	
	
	#The chance/weight that the ai will take the decision, defaults to 1 if not specified. If chance is 0, the AI will not use the decision
	ai_chance = {
		value = 100
		<script_value>
	}
}
```

### Decision elements
| Element | Description | Scope |
| decision script name | The internal script name/identifier for the decision, must be unique | N/A |
| `is_shown = { }` | A [trigger](./Trigger.md) block that determines whether a decision appears in the list of potential decisions for a country | Country |
| `possible = { }` | A [trigger](./Trigger.md) block that determines when shown decisions can be used | Country |
| `when_taken = { }` | An [effect](./Effect.md) block that is fired when the decision is clicked | Country |
| `ai_chance = { }` | A [script value](./Script value.md) block that gives a weight for this decision to AI countries using this decision when available | Country |

## Localization
Decisions have the following [localization](./Localization.md) keys:

- <decision\_script\_name>: The name/title of the decision
- <decision\_script\_name>\_desc: The description/flavor of the decision
- <decision\_script\_name>\_tooltip: A tooltip header for the decision; by default the tooltip includes the `possible` triggers and `when_taken` effects of the decision; this localization key adds a header to those parts.

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | Decisions • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
