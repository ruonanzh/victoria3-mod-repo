# On action

**On actions** are effects called by specific circumstances. Common examples are pulses which happen on a regular period, such as monthly or yearly. Other examples include various game occurrences such as starting or ending a war, gaining a new ruler, or a character dying.

## On action structure
On actions have the following structure with several optional blocks. Most on actions have a specified root scope, some have additional scopes as well.

```
on_action_name = {
	trigger = {			# On_actions can have triggers. If an on_action fires and its trigger returns false, nothing happens
		trigger_conditions = yes
	}

	weight_multiplier = {	# Used to manipulate the weight of this on_action if it is a candidate in a random_on_actions list (see below)
		base = 1
		modifier = {
			add = 1
			trigger_conditions = yes
		}
	}

	events = {		# Events listed in "events" brackets will always fire as long as their trigger evaluates to true
		event_id.1
		delay = { days = 365 }		# A delay will mean that all events listed after it will only be fired after the delay has passed. NOTE: For performance reasons, an event will only successfully fire if it is valid both when the on_action is executed AND once the delay is complete. All firing entries support delays, whether for events or on_actions.
		event_id.2
		delay = { months = { 6 12 } }	# Setting a new delay overrides a previous delay. Delays support random ranges
		event_id.3
	}
	
	random_events = {	# A single event will be picked to fire
		chance_to_happen = 25	# A percentage chance determining whether the events involved will be evaluated at all
		chance_of_no_event = { 	# An entry that can be formatted as a script value (and therefore have conditional entries). Separated from "chance_to_happen" for performance reasons. Will only be evaluated if chance_to_happen is true.
			value = 0
			if = {
				limit = { trigger_conditions = yes }
				add = 10
			}
		}

		100 = event_id.1 	# The number is the weight for picking a specific event. The weight is factored by the event's weight_multiplier entry. (If no weight_multiplier is defined for the event, it is 1)
		200 = event_id.2
		100 = 0		# Having a "0" entry means that there is a chance no event fires, even if there are other valid events. Good for making sure that rare events don't always fire just because every other possible event is invalid.
	}

	first_valid = {		# Pick the first event for which the trigger returns true
		event_id.1
		event_id.2
		fallback_event_without_trigger
	}

	on_actions = {	# An on_action can fire other on_actions, following the same rules as with events
		on_action_1
		on_action_2
		on_action_3
	}

	random_on_actions = {	# Same as with events. On_actions are also factored by their weight_multipliers, which defaults to 1
		100 = on_action_1
		200 = on_action_2
		100 = 0
	}

	first_valid_on_action = {
		on_action_1
		on_action_2
	}

	effect = { 	# An on_action can run effects. It can access the same default or saved scopes as the script chain/code functionality it was fired from. Note that it happens concurrently to events triggered by the on_action, NOT before. Effects run here create a separate chain than events the on_action fires, so you can for example not manipulate values in the effect, and then reliably access those in an event that was fired at the same time. Scopes or local variables set in the effect here will not carry over to any event fired by the on_action.
		effects = yes
	}

	fallback = another_on_action 	# on_actions can define a fallback on_action. If no events/on_actions are run by the on_action, the fallback gets called instead. Avoid creating infinite fallback loops, or the game may be prevented from advancing time!
}
```

On action parameters

| Block | Description |
| trigger | [Triggers](./Trigger.md) that determine if the on action can fire when called |
| events | List of [events](./Event modding.md) that are called when the on action fires |
| random\_event | A single valid event is called from the list, selected by weighted random |
| first\_valid | The first valid event is called from the list, determined by the triggers of the called events |
| on\_actions | List of on actions that are called when the on action fires |
| random\_on\_actions | A single valid on action is called from the list, selected by weighted random |
| first\_valid\_on\_action | The first valid on action is called from the list, determined by the triggers of the called on\_actions |
| effect | [Effects](./Effect.md) that are fired with the on action |
| weight\_multiplier | A MTTH block that modifies the weight of the on action for use with a random\_on\_actions block |
| fallback | A single on action that is called if no effects, events, or on actions are fired by this this on action |

Each block can have any number of `delay` blocks. Any events, on actions, or effects after the delay waits until the delay passes.

On actions can also be called with the effect `trigger_event` as such:

```
	trigger_event = {
		on_action = on_action_name
		days/months/years = X  	# Optional, to delay the firing time
	}
```

### Modding on actions
On actions can easily modded by calling a new scripted on action from a hardcoded on action. Only a new `on_actions` block can be added to existing on actions. Adding other blocks to an existing on action causes errors.

For example, to add new effects to the monthly country pulse, use the following template in a new file in the mod's common/on\_actions folder:

```
on_monthly_pulse_country = {
	on_actions = {
    	new_on_action #the name should be unique, but does not need to follow any strict pattern
    }
}
new_on_action = {
	effect = {
		newly added effects
	}
}
```

This makes the vanilla on-action call the modded on-action whenever it fires.

## List of on actions
The given scope is root unless otherwise indicated

| Name | Given scope | Description / Notes |
| on\_acquired\_technology | - Root = The applicable country - scope:technology = The technology type they started to research | If called by effect, call from `country` scope |
| on\_ally\_capitulated\_notification | country |  |
| on\_amendment\_repealed | - Root = country - scope:amendment = amendment being repealed |  |
| on\_battle\_ended | - Root = attacker or defender country - scope:enemy\_country = enemy of root - scope:battle = battle - scope:attacker = attacking commander - scope:defender = defending commander - scope:state = location state |  |
| on\_battle\_lost |  |
| on\_battle\_started |  |
| on\_battle\_won | If called by effect, call from `country` scope |
| on\_become\_independent | - Root = newly independent country - scope:overlord = former overlord |  |
| on\_become\_subject | - Root = newly subject country - scope:overlord = new overlord |  |
| on\_building\_built | building |  |
| on\_building\_expanded | building |  |
| on\_capitulation | - Root = Capitulating country - scope:diplomatic\_play = diplomatic play |  |
| on\_character\_creation | character |  |
| on\_character\_death | character |  |
| on\_character\_recruitment | character |  |
| on\_civil\_war\_won | country |  |
| on\_claim\_added | - Root = Country (that owns a state in the state region) - scope:actor = Claimant country - scope:region = State Region |  |
| on\_colony\_created | state |  |
| on\_company\_disbanded | - Root = Country (in which the company is disbanded) - scope:company = The company that was disbanded |  |
| on\_company\_established | - Root = Country (in which the company is established) - scope:company = The company that was established |  |
| on\_country\_broke\_treaty | - Root = Treaty - scope:withdrawing\_country = Withdrawing Country - scope:non\_withdrawing\_country = Non-Withdrawing Country | Fires instead of on\_country\_withdrawn\_from\_treaty when the binding period is still active |
| on\_country\_default | country |  |
| on\_country\_formed | country |  |
| on\_country\_no\_longer\_default | country |  |
| on\_country\_released\_as\_company\_subject | - Root = Releasing Country - scope:target = Released Country |  |
| on\_country\_released\_as\_independent | - Root = Releasing Country - scope:target = Released Country |  |
| on\_country\_released\_as\_overlord\_subject | - Root = Releasing Country - scope:target = Released Country |  |
| on\_country\_released\_as\_own\_subject | - Root = Releasing Country - scope:target = Released Country |  |
| on\_country\_swayed | - Root = diplomatic\_play - scope:actor = swaying country - scope:target = target of sway - scope:recipient = swayed country - scope:notification\_target = notified country |  |
| on\_country\_withdrawn\_from\_treaty | - Root = Treaty - scope:withdrawing\_country = Withdrawing Country - scope:non\_withdrawing\_country = Non-Withdrawing Country | Fires when the binding period is not active |
| on\_create\_market | market |  |
| on\_deactivate\_link |  |  |
| on\_decade\_pulse\_character | character |  |
| on\_decade\_pulse\_country | country | If called by effect, call from `country` scope |
| on\_decade\_pulse\_country\_elections | country | Only fires if elections are enabled |
| on\_decade\_pulse\_state | state |  |
| on\_demobilized\_army | military\_formation |  |
| on\_demobilized\_general | chracter |  |
| on\_diplo\_play\_abandon\_side | diplomatic\_play |  |
| on\_diplo\_play\_back\_down | - Root = diplomatic\_play - scope:actor = country backing down - scope:notification\_target = notified country |  |
| on\_diplo\_play\_back\_down\_involved | - Root = diplomatic\_play - scope:actor = country backing down - scope:target = leader of opposing side - scope:notification\_target = notified country |  |
| on\_diplo\_play\_declare\_neutrality | - Root = diplomatic\_play - scope:actor = country declaring neutrality - scope:initiator = initiator of diploplay - scope:target = target of diploplay - scope:notification\_target = notified country |  |
| on\_diplo\_play\_join\_side | - Root = diplomatic\_play - scope:actor = joining country - scope:target = target of joined play - scope:recipient = joined country - scope:notification\_target = notified country |  |
| on\_diplo\_play\_start | - Root = diplomatic\_play - scope:actor = initiator of play - scope:notification\_target = notified country |  |
| on\_diplo\_play\_start\_third\_party | diplomatic\_play |  |
| on\_diplo\_play\_subject\_released | diplomatic\_play |  |
| on\_diplo\_play\_subject\_released\_overlord | diplomatic\_play |  |
| on\_diplo\_play\_switch\_sides | - Root = Diplomatic Play - scope:country = Country switched to - scope:previous = Country switched from |  |
| on\_diplo\_play\_war\_start | - Root = diplomatic\_play - scope:actor = initiator of play - scope:target = target of play |  |
| on\_diplomatic\_action | - Root = diplomatic\_action - scope:actor = country performing action - scope:recipient = target of action - scope:notification\_target = notified country |  |
| on\_diplomatic\_action\_break |  |
| on\_diplomatic\_action\_overlord\_decrease\_autonomy | diplomatic\_action |  |
| on\_diplomatic\_action\_overlord\_increase\_autonomy | diplomatic\_action |  |
| on\_diplomatic\_action\_subject\_increase\_own\_autonomy | diplomatic\_action |  |
| on\_diplomatic\_action\_third\_party | diplomatic\_action |  |
| on\_diplomatic\_action\_third\_party\_accepted | diplomatic\_action |  |
| on\_diplomatic\_action\_third\_party\_break | diplomatic\_action |  |
| on\_diplomatic\_action\_third\_party\_break\_accepted | diplomatic\_action |  |
| on\_diplomatic\_action\_third\_party\_break\_declined | diplomatic\_action |  |
| on\_diplomatic\_action\_third\_party\_declined | diplomatic\_action |  |
| on\_diplomatic\_demand | - Root = diplomatic\_demand - scope:actor = country performing demand - scope:recipient = target of demand - scope:notification\_target = notified country |  |
| on\_diplomatic\_demand\_accepted | diplomatic\_demand |  |
| on\_diplomatic\_demand\_rejected | - Root = diplomatic\_demand - scope:recipient = target of demand - scope:notification\_target = notified country |  |
| on\_diplomatic\_incident | - Root = Strategic Region - scope:actor = Aggressor country - scope:target = Target country |  |
| on\_diplomatic\_pact\_auto\_break | - Root = diplomatic\_action - scope:country = first country of pact - scope:target\_country = second country of pact - scope:notification\_target = notified country |  |
| on\_diplomatic\_pact\_third\_party\_auto\_break | diplomatic\_action |  |
| on\_diplomatic\_play\_started | - root = The diplomatic play that has been started - scope:initiator = Initiator of the play - scope:target = Target of the play |  |
| on\_diplomatic\_proposal | - root = diplomatic\_action - scope:actor = proposer country - scope:recipient = proposed country - scope:notification\_target = notified country |  |
| on\_diplomatic\_proposal\_accepted |  |
| on\_diplomatic\_proposal\_break | diplomatic\_action |  |
| on\_diplomatic\_proposal\_break\_accepted | diplomatic\_action |  |
| on\_diplomatic\_proposal\_break\_call\_in\_obligation | diplomatic\_action |  |
| on\_diplomatic\_proposal\_break\_declined | diplomatic\_action |  |
| on\_diplomatic\_proposal\_break\_owe\_obligation | diplomatic\_action |  |
| on\_diplomatic\_proposal\_call\_in\_obligation | diplomatic\_action |  |
| on\_diplomatic\_proposal\_declined | - root = diplomatic\_action - scope:actor = proposer country - scope:recipient = proposed country - scope:notification\_target = notified country |  |
| on\_diplomatic\_proposal\_owe\_obligation | diplomatic\_action |  |
| on\_diplomats\_expelled | diplomatic\_action |  |
| on\_election\_campaign\_end | country |  |
| on\_election\_campaign\_start | country |  |
| on\_empty\_battle\_lost | - Root = attacker or defender country - scope:enemy\_country = enemy of root - scope:battle = battle - scope:attacker = attacking commander - scope:defender = defending commander - scope:state = location state | When one side has no units at end |
| on\_empty\_battle\_won | When one side has no units at end |
| on\_enemy\_capitulated\_notification | - Root = notified country - scope:target = capitulating country - scope:diplomatic\_play = diplomatic play |  |
| on\_enemy\_convoys\_raided | - Root = Country - scope:region = the sea region where the raid happened |  |
| on\_five\_year\_pulse\_character | character |  |
| on\_five\_year\_pulse\_country | country | If called by effect, call from `country` scope |
| on\_five\_year\_pulse\_country\_elections | country | Only fires if elections are enabled |
| on\_five\_year\_pulse\_state | state |  |
| on\_game\_started | none | Immediately after history, but before country selection (no players) |
| on\_game\_started\_after\_lobby | none | Immediately on load after country selection |
| on\_government\_reformed | country |  |
| on\_half\_yearly\_pulse\_character | character |  |
| on\_half\_yearly\_pulse\_country | country | If called by effect, call from `country` scope |
| on\_half\_yearly\_pulse\_country\_elections | country | Only fires if elections are enabled |
| on\_half\_yearly\_pulse\_state | state | If called by effect, call from `state` scope |
| on\_harvest\_condition\_started\_in\_country | - Root = country - scope:area = harvest condition area - scope:state = affected state with the highest intensity - scope:duration = duration of the harvest condition in days - scope:num\_states = the number of affected states in the country - scope:intensity = the highest intensity of the affected states |  |
| on\_heir\_born | character |  |
| on\_ig\_resigned\_government | interest\_group |  |
| on\_impose\_law | - Root = country being imposed upon - scope:initiator = country doing the imposition - scope:law = law being imposed | This on-action is triggered in cases where there is no overriding on\_impose effect on a law type. In case an on\_impose effect exists on the law type, this will NOT be executed. |
| on\_investment\_decreased | institution |  |
| on\_investment\_increased | institution |  |
| on\_journal\_entry\_activated | journal\_entry |  |
| on\_journal\_entry\_completed | journal\_entry |  |
| on\_journal\_entry\_deactivated | journal\_entry |  |
| on\_journal\_entry\_failed | journal\_entry |  |
| on\_law\_activated | law | Cannot use `currently_enacting_law` |
| on\_law\_checkpoint\_advance | country | - If called by effect, call from `country` scope - Can use `currently_enacting_law` |
| on\_law\_checkpoint\_debate | country |
| on\_law\_checkpoint\_stall | country |
| on\_law\_checkpoint\_success | country | Can use `currently_enacting_law` |
| on\_law\_enactment\_ended | country |
| on\_law\_enactment\_fail | country |
| on\_law\_enactment\_pass | country |
| on\_law\_enactment\_started | country |
| on\_merge\_markets | - Root = From Market - scope:market = Market merging into - scope:trade\_center = Trade Center state of root |  |
| on\_migration\_target\_created | - Root = state - scope:country = source country of migration - scope:notification\_target = notified country |  |
| on\_migration\_target\_created\_other |  |
| on\_military\_formation\_created | military\_formation |  |
| on\_mobilized\_army | military\_formation |  |
| on\_mobilized\_general | character |  |
| on\_monthly\_pulse | none |  |
| on\_monthly\_pulse\_character | character |  |
| on\_monthly\_pulse\_country | country | If called by effect, call from `country` scope |
| on\_monthly\_pulse\_country\_elections | country | If called by effect, call from `country` scope Only fires if elections are enabled |
| on\_monthly\_pulse\_state | state |  |
| on\_national\_awakening\_started | - Root = Culture - scope:region = state region where the awakening started - scope:culture = culture that had an awakening |  |
| on\_native\_uprising | - Root = Colonizing country - scope:actor = Uprising country |  |
| on\_new\_culture\_obsession | - Root = culture - scope:goods = obsession goods |  |
| on\_new\_interest\_group\_leader | character |  |
| on\_new\_ruler | - Root = character - scope:previous = previous ruler |  |
| on\_objective\_completed | objective |  |
| on\_obligation\_owed\_by\_us\_expired | country |  |
| on\_obligation\_owed\_to\_us\_expired | country |  |
| on\_our\_convoys\_raided | - Root = Country - scope:region - the sea region where the raid happened |  |
| on\_party\_created | - Root = Country - scope:target = Party created |  |
| on\_party\_disbanded | - Root = Country - scope:target = Party disbanded |  |
| on\_peace\_agreement\_signed\_non\_participant | country |  |
| on\_peace\_agreement\_signed\_war\_leader | country |  |
| on\_peace\_agreement\_signed\_war\_participant | country |  |
| on\_political\_movement\_disbanded | political\_movement |  |
| on\_political\_movement\_formed | political\_movement |  |
| on\_political\_movement\_supported\_law\_cancelled | political\_movement |  |
| on\_power\_bloc\_struggle\_ended | - Root = Power Bloc whose leadership position is being fought over - scope:successful\_contender = country that won the Power Struggle - scope:failed\_contender = country that lost the Power Struggle |  |
| on\_power\_bloc\_struggle\_started | country | Root = Country that started the Power Struggle |
| on\_production\_method\_changed | building |  |
| on\_rank\_changed | country |  |
| on\_repudiate\_obligation | country |  |
| on\_research\_technology\_started | - Root = The applicable country - scope:technology = The technology type they started to research |  |
| on\_resource\_depleted | state | If called by effect, call from `state` scope |
| on\_resource\_discovered | - Root = state - scope:target = building type | If called by effect, call from `state` scope |
| on\_retarget\_link | state |  |
| on\_reverse\_sway\_offer | diplomatic\_play |  |
| on\_reverse\_sway\_offer\_accepted | diplomatic\_play |  |
| on\_reverse\_sway\_offer\_rejected | diplomatic\_play |  |
| on\_revolution\_checkpoint\_reached | country | If called by effect, call from `country` scope |
| on\_revolution\_end | - Root = Country - scope:target = Uprising country |  |
| on\_revolution\_start | - Root = Country - scope:target = Uprising country | Can be used to apply effects to a newly-created revolting country. |
| on\_secession\_checkpoint\_reached | country | If called by effect, call from `country` scope |
| on\_secession\_country\_helped\_by\_home\_country | - Root = Home Country - scope:target = Secession country |  |
| on\_secession\_country\_not\_helped\_by\_home\_country | - Root = Home Country - scope:target = Secession country |  |
| on\_secession\_end | - Root = Country - scope:target = Uprising country |  |
| on\_secession\_start | - Root = Country - scope:target = Uprising country | Can be used to apply effects to a newly-created secessionist country. |
| on\_self\_capitulated\_notification | - Root = country - scope:target = capitulating country - scope:diplomatic\_play = diplomatic play |  |
| on\_spreading\_technology | - Root = The applicable country - scope:technology = The technology type they started to research |  |
| on\_start\_expanding\_building | building |  |
| on\_start\_supporting\_unification | country |  |
| on\_state\_created | state |  |
| on\_state\_incorporation | state |  |
| on\_state\_owner\_change | state |  |
| on\_stop\_supporting\_unification | country |  |
| on\_sub\_objective\_completed | objective |  |
| on\_sub\_objective\_failed | objective |  |
| on\_sway\_offer | - Root = diplomatic\_play - scope:actor = swaying country - scope:target = target of sway - scope:recipient = swayed country - scope:notification\_target = notified country |  |
| on\_sway\_offer\_accepted | - Root = diplomatic\_play - scope:target = target of sway - scope:recipient = swayed country - scope:notification\_target = notified country |  |
| on\_sway\_offer\_rejected | diplomatic\_play |  |
| on\_travel\_deploy\_to\_sea\_node\_cancelled | - Root = Military Formation - scope:province = Sea Node we were going to - scope:target = current target travel location - HQ or Province (Sea Node) |  |
| on\_travel\_station\_in\_hq\_cancelled | - Root = Military Formation - scope:hq = HQ we were going to - scope:target = current target travel location - HQ or Province (Sea Node) |  |
| on\_travel\_to\_front\_cancelled | - Root = Military Formation - scope:front = front we were going to - scope:target = current target travel location - HQ or Province (Sea Node) |  |
| on\_travel\_track\_formation\_cancelled | - Root = Military Formation - scope:formation = Formation we were tracking - scope:target = current target travel location - HQ or Province (Sea Node) |  |
| on\_treaty\_article\_removed | - Root = Treaty - scope:article = Treaty Article |  |
| on\_treaty\_dissolved | treaty |  |
| on\_treaty\_enforced | treaty | Fires in addition to on\_treaty\_entered\_into\_force for treaties enforced by plays, etc |
| on\_treaty\_entered\_into\_force | treaty |  |
| on\_treaty\_proposal\_declined | - Root = treaty - scope:declining\_country = declining country - scope:proposing\_country = proposing country |  |
| on\_treaty\_proposed | - root = treaty - scope:actor = proposing country - scope:recipient = receiving country - scope:first\_country = proposing country - scope:second\_country = receiving country |  |
| on\_unification\_candidate\_added | country |  |
| on\_unification\_candidate\_removed | country |  |
| on\_war\_end | - Root = Diplomatic Play - scope:actor = Initiator country - scope:target = Target country |  |
| on\_wargoal\_added | - Root = Diplomatic Play - scope:actor = War Goal Owner - scope:war\_goal = war goal |  |
| on\_wargoal\_enforced | - Root = Country - scope:target = the country the wargoal was enforced against - scope:diplomatic\_play = the relevant diplomatic play - scope:wargoal\_impact = the impact of the wargoal enforced |  |
| on\_wargoal\_removed | - Root = Diplomatic Play - scope:actor = War Goal Owner |  |
| on\_yearly\_pulse | none |  |
| on\_yearly\_pulse\_character | character |  |
| on\_yearly\_pulse\_country | country | If called by effect, call from `country` scope |
| on\_yearly\_pulse\_country\_elections | country | Only fires if elections are enabled |
| on\_yearly\_pulse\_state | state | If called by effect, call from `state` scope |

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
