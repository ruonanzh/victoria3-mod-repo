# War goal modding

*See also: [War goals](https://vic3.paradoxwikis.com/War_goals)*

**War goals** are diplomatic demands that one country can make on another. The definitions are found in `common/war_goal_types`

## War Goal Definition
### Basic
| Block | Description |
| `icon` | path to the icon |
| `execution_priority` | higher value gets executed first |

### Kind
"Kind" here refers to pre-defined execution behaviour and pre-defined checks. All of the vanilla war goals are associated with a kind, and that's pretty much as far as it goes. For no pre-defined effects or checks, use `custom`.

The following can be used:

- `annex_country`
- `ban_slavery`
- `colonization_rights`
- `conquer_state`
- `contain_threat`
- `enforce_treaty_article`
- `force_nationalization`
- `foreign_investment_rights`
- `humiliation`
- `increase_autonomy`
- `independence`
- `join_power_bloc`
- `leave_power_bloc`
- `liberate_country`
- `liberate_subject`
- `make_dominion`
- `make_protectorate`
- `make_tributary`
- `open_market`
- `reduce_autonomy`
- `regime_change`
- `return_state`
- `revoke_all_claims`
- `revoke_claim`
- `secession`
- `take_treaty_port`
- `transfer_subject`
- `unification`
- `unification_leadership`
- `custom`

### Settings
#### Validation
You can set flags in your war goal settings to mark them for validation.

| Setting | Description |
| `annexes_entire_state` | marks the wargoal with expected behaviour. used to calculate conflicts |
| `annexes_entire_country` |
| `country_creation` |
| `turns_into_subject` |

| Setting | Description |
| `conflicts_with_annex_state` | marks the wargoal as potentially conflicting with respective type wargoals |
| `conflicts_with_annex_country` |
| `conflicts_with_make_subject` |
| `conflicts_with_existing_subject` |
| `conflicts_with_country_creation` |

You can then set your war goal to validate for certain things, or conflicts with other war goals depending on their settings.

| Setting | Description |
| `validate_subject_relation` | checks if the resulting subject relation of this war goal is valid |
| `validate_formation_candidate_self` | check to make sure the goal holder is a formation candidate |
| `validate_formation_candidate_target` | check to make sure the goal target is a formation candidate |
| `validate_sole_formation_candidate` | check to make sure the goal holder is the only formation candidate |
| `validate_target_not_treaty_port` | check to make sure the target state is not a treaty port |
| `validate_join_power_bloc` | special validation for respective wargoal kind |
| `validate_colonization_rights` |
| `validate_force_nationalization` |
| `validate_foreign_investment_rights` |
| `validate_regime_change` |
| `validate_contain_threat` |
| `validate_revoke_claims` |
| `validate_increase_autonomy` |
| `validate_take_treaty_port` |
| `validate_independence` |
| `validate_conflicts_war_goals_holder` | validate conflicts with war goals of the same type from holder |
| `validate_conflicts_war_goals_all` | validate conflicts with war goals of the same type from all participating countries |
| `validate_conflicts_conquer_state` | validates conflicts with wargoal types that have the respective conflict flag |
| `validate_conflicts_annex_country` |
| `validate_conflicts_make_subject` |
| `validate_conflicts_existing_subject` |

#### Other
These are just more settings to use.

| Setting | Description |
| `require_target_be_part_of_war` | can't target neutral countries |
| `can_add_for_other_country` | allows adding the goal for other participating countries |
| `overlord_is_stakeholder` | if the stakeholder of the war goal should be the overlord |
| `can_target_decentralized` | if the war goal can target decentralized countries |
| `has_other_stakeholder` | if the war goal has a different stakeholder than the target |
| `skip_build_list` | if the war goal can be picked in the war goal menu |
| `targets_enemy_subject` | if the war goal should target an enemy subject specifically |
| `targets_enemy_claims` | if the war goal should target the claims of a country |
| `requires_interest` | if the war goal requires you to have an interest in the relevant strategic region |

### Contestion Type
Sets what counts as "controlling" the war goal.

The following can be used:

- `control_target_state`
- `control_target_country_capital`
- `control_any_target_country_state`
- `control_any_target_incorporated_state`
- `control_own_state`
- `control_own_capital`
- `control_all_own_states`
- `control_all_target_country_claims`
- `control_any_releasable_state`

### Target Type
Sets what type of object the war goal targets.

These can be:

- `country` (loops over enemy countries to generate war goal alternatives)
- `state` (loops over states belonging to enemy countries)
- `treaty_article` (loops over article types and then enemy countries)

### Validation Triggers
These are trigger blocks which determine whether your war goal can be used.
The following scopes are available:

- `root` (holder country)
- `creator_country`
- `diplomatic_play`
- `target_country`
- `target_state`
- `stakeholder`
- `target_region`
- `article_options`

| Trigger | Description |
| `possible` | determines if the war goal is listed when selecting war goals in a diplomatic play |
| `valid` | determines if the war goal is valid from a script perspective |

### Infamy & Maneuvers
These blocks set how much infamy and maneuvers it will take to select a war goal (before modifiers). Both take a script value.

The following scopes are available:

- `root` (holder country)
- `creator_country`
- `diplomatic_play`
- `target_country`
- `target_state`
- `stakeholder`
- `target_region`
- `article_options`

### On Enforced
The `on_enforced` block is where you put script you want the war goal to execute. This is separate from behaviour defined in the `kind` block.

The following scopes are available:

- `root` (holder country)
- `creator_country`
- `diplomatic_play`
- `target_country`
- `target_state`
- `stakeholder`
- `target_region`
- `article_options`

### AI
There is one setting in the AI block.

| Setting | Values | Description |
| `is_significant_demand` | yes/no | I flag that determines how important AI considers this war goal to be |

## Example War goal
```
conquer_state = {
	icon = "gfx/interface/icons/war_goals/conquer_state.dds"

	kind = conquer_state

	settings = {
		require_target_be_part_of_war
		annexes_entire_state
		can_add_for_other_country
		requires_interest

		# Validation
		validate_target_not_treaty_port
		validate_conflicts_conquer_state

		conflicts_with_country_creation
		conflicts_with_annex_state
	}

	execution_priority = 69

	contestion_type = control_target_state

	target_type = state

	possible = {
		# trigger to determine if a goal with its target data is listed when selecting a war goal in the diplo play panel
		# scopes: root = holder, creator_country, diplomatic_play, target_country, target_state, stakeholder, target_region, article_options
	}

	valid = {
		# trigger in addition to some basic validation code-side
		# scopes: root = holder, creator_country, diplomatic_play, target_country, target_state, stakeholder, target_region, article_options
		scope:target_state = {
			owner = scope:target_country
			NOT = { has_claim_by = root }
		}
	}

	maneuvers = {
		value = 0

		add = {
			desc = "MANEUVERS_BASE_VALUE"
			value = 10
		}

		multiply = {
			desc = "MANEUVERS_TARGET_STATE_POPULATION_FACTOR"
			value = scope:target_state.state_population
			divide = define:NDiplomacy|SWAY_OFFER_WARGOAL_MANEUVERS_COST_POPULATION_SCALING_FACTOR
			multiply = define:NDiplomacy|SWAY_OFFER_WARGOAL_MANEUVERS_COST_POPULATION_SCALING_MULTIPLIER
			max = define:NDiplomacy|SWAY_OFFER_WARGOAL_MANEUVERS_COST_POPULATION_SCALING_MULTIPLIER_MAX_PER_STATE
		}
	}

	infamy = {
		value = 0

		add = {
			desc = "INFAMY_BASE_VALUE"
			value = 5
		}

		multiply = {
			desc = "INFAMY_STATE_POPULATION_FACTOR"
			value = scope:target_state.state_population
			divide = define:NDiplomacy|WAR_GOAL_INFAMY_POPULATION_SCALING_FACTOR
			multiply = define:NDiplomacy|WAR_GOAL_INFAMY_POPULATION_SCALING_MULTIPLIER
			add = 1
			max = define:NDiplomacy|WAR_GOAL_INFAMY_POPULATION_SCALING_MULTIPLIER_MAX_PER_STATE
		}

		multiply = {
			desc = "country_infamy_generation_against_unrecognized_mult"
			value = 1
			if = {
				limit = {
					scope:target_country = {
						is_country_type = unrecognized
					}
				}
				add = modifier:country_infamy_generation_against_unrecognized_mult
			}
		}

		multiply = {
			desc = "IG_OTHER_FACTORS_HEADER"
			value = 1

			if = {
				limit = {
					scope:target_state = {
						is_homeland_of_country_cultures = root
					}
				}
				add = define:NDiplomacy|WAR_GOAL_INFAMY_HOMELAND_FACTOR
			}

			if = {
				limit = {
					scope:target_state = {
						is_incorporated = no
					}
				}
				add = define:NDiplomacy|WAR_GOAL_INFAMY_UNINCORPORATED_FACTOR
			}
		}

		min = 5
	}

	on_enforced = {
		# script effect on top of the predefined code effect
	}

	ai = {
		is_significant_demand = yes
	}
}
```

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • War goals |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
