# Political movement modding

Political movements represent pops and interest group desire for political change, as well as secessionist and nationalist movements.

## Example
The political\_movemant.md from the game files

```
movement_example = {
	# The movement's category, which determines factors such as whether it has a cultural/religious identity
	# Movement categories are defined in their own database
	category = x
	
	# The core ideology of the movement - this will determine which laws they inherently support/oppose
	ideology = x
	
	# A list of character ideologies that this movement can potentially assign to leaders of IGs they are pressuring
	character_ideologies = {}
	
	# Trigger that must evaluate true for this movement type to be created
	# Root = country
	creation_trigger = {}
	
	# The weight for this movement type to be picked for creation over other movement types that are valid at the same instance
	# Root = country
	creation_weight = {
		value = 100
	}
	
	# Effect that is executed when a movement of this type is created
	# Root = political movement
	on_created = {}
	
	# Trigger that must evaluate true for a culture to be picked as the cultural identity for this movement type, selected among cultures present in the country
	# root = culture
	# scope:country = the country the movement would be created in
	culture_selection_trigger = {}		
	
	# Weight for a culture to be picked as the cultural identity for this movement type, compared to other cultures present in the country that are valid for the movement type
	# root = culture
	# scope:country = the country the movement would be created in
	culture_selection_weight = {}		
	
	# Trigger that must evaluate true for a religion to be picked as the religious identity for this movement type, selected among religions present in the country
	# root = religion
	# scope:country = the country the movement would be created in
	religion_selection_trigger = {}		
	
	# Weight for a religion to be picked as the religious identity for this movement type, compared to other religions present in the country that are valid for the movement type
	# root = religion
	# scope:country = the country the movement would be created in
	religion_selection_weight = {}		
	
	# Trigger that must evaluate true for an agitator to be able to support movements of this type
	# Root = character
	# scope:culture = The cultural identity of the movement, if any
	# scope:religion = The religious identity of the movement, if any
	# scope:interest_group = The interest group in the movement's country matching the character's IG - use this instead of character's actual IG so that it works for exiled agitators
	character_support_trigger = {}
	
	# The weight for an agitator to support movements of this type, compared to other movements that are valid for them to support
	# Root = character
	# scope:culture = The cultural identity of the movement, if any
	# scope:religion = The religious identity of the movement, if any
	character_support_weight = {}
	
	# Trigger that must evaluate true for a movement to be able to pressure an Interest Group (this is in addition to the required supporting clout)
	# Root = interest group
	can_pressure_interest_group = {}
	
	# Trigger that must evaluate true for individuals in a pop to be able to support movements of this type
	# Root = pop
	# scope:culture = The cultural identity of the movement, if any
	# scope:religion = The religious identity of the movement, if any
	pop_support_trigger = {
		culture = {
			is_primary_culture_of = root.owner
		}
	}

	# These are the pop support factors that will be displayed in the UI for this movement - does not actually have any gameplay impact
	# Pop support factors are defined in their own database
	pop_support_factors = {}

	# The weight for individuals in a pop to support movements of this type, compared to other movements that are valid for them to support
	# Root = pop
	# scope:culture = The cultural identity of the movement, if any
	# scope:religion = The religious identity of the movement, if any
	pop_support_weight = {}	
	
	# Data for which types of civil wars this movement type can start
	# If a type isn't explicitly scripted here, it won't be valid for the movement type
	revolution/secession = {
		# Trigger for whether this civil war type is possible for this movement type
		# Root = political movement
		# scope:clout = combined clout of IGs that would become insurrectionary
		possible = {}
		
		# Trigger for whether an interest group can join a civil war started by the movement
		# Root = interest group
		# scope:political_movement = political movement
		interest_group_can_join = {}	
		
		# Weight for whether this civil war type should be selected over others
		# Root = political movement
		# scope:clout = combined clout of IGs that would become insurrectionary
		weight = {}

		# Optional, can be used to force a movement of this type to adopt a specific tag when rebelling
		forced_tags = {
			TAG = { # The country definition/tag that should be used
				# Trigger for whether this tag is valid to used
				# root = political movement
				trigger = {
					owner ?= { has_journal_entry = je_acw_countdown }
				}
				# The weight for this tag to be picked over other valid option
				weight = x
			}
		}
	
		# Weight for which states should tend to join the civil war side - if this is 0, the state will always be loyalist
		# Note that there are more factors that will affect this, especially for movements with cultural/religious identities
		state_weight = {
			value = 1

			if = {
				limit = {
					is_homeland_of_country_cultures = owner
				}
				add = 50
			}
		}

		# The target fraction of states in the country that should join on the civil war side
		# If not set, default defines will decide this
		target_fraction_of_states = {}		
	}
	
	# Multiplies the impact law enactment has on the activism of this movement type
	law_enactment_radicalism_multiplier = x
	
	# Multiplies the impact active laws have on the activism of this movement type
	active_law_radicalism_multiplier = x
	
	# Bespoke factors for increasing/decreasing the activism of movements of this type
	additional_radicalism_factors = {}	
}
```

## References
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
