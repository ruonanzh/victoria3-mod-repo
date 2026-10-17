# Scripted gui

Scripted GUIs are used to execute effects after clicking a button in the UI, setting validity/visibility of a button or a UI element via trigger code usually used in events and common folders. They are stored as .txt files in game/common/scripted\_guis and cannot be reloaded from the game, unlike the .gui files, you will have to restart your game to have them take effect/load.

Scripted Gui is a bridge between GUI and code, here naming the code in `/common/` `code in code` and the codes in `/gui/` is `code in GUI`.

The codes in code actually registered, they cannot effects unless raised them in code in GUI. Scripted GUI provides an effect context and serval trigger contexts to be raised in GUI.

## Examples
### Buttons:
Let's say we want to create a button that adds a journal entry to the player who clicked the button.

#### Firstly, our file in game/common/scripted\_guis will look like this:
```
give_journal_entry_scriptedgui = {
    # remember that every code below just register multiple context TO BE USED in GUI. If GUI code not use them, they never effects
	scope = country 		# the root scope, i.e. the target of the effects
	saved_scopes = {
        saved_gdp
    } 		# any additional targets
    # These are scope, it should be added in GUI to effect.
	is_shown = {
        always = yes
    } 		# is it visible on the UI?
	ai_is_valid = {
        always = yes
    } 		# is the AI allowed to use it? Disabled by default.
	is_valid = {
        always = yes
    } 		# can the player use it?
    # Three trigger context, you can use them as you like whatever it used for vaild or shown
    effect = {			# what it does
		custom_tooltip = "I am the tooltip"	# adds a tooltip
        add_treasury = scope:saved_gdp
	}
}
```

#### Secondly, our button in the GUI file will look like this:
```
button = {
	using = default_button_action
    datacontext = "[GetScriptedGui('give_journal_entry_scriptedgui')]"
    visible = "[ScriptedGui.IsShown( GuiScope.SetRoot( GetPlayer.MakeScope ).End)]"
    enabled = "[ScriptedGui.IsValid( GuiScope.SetRoot( GetPlayer.MakeScope ).End)]"
    # you can use some code like visible = "[ScriptedGui.IsValid( GuiScope.SetRoot( GetPlayer.MakeScope ).End)]"， it's OK.
	size = { 250 50 }
	position = { 0 123 }
	text = "HIDE_AND_SEEK_BTN"
    tooltip = "[ScriptedGui.BuildTooltip( GuiScope.SetRoot( GetPlayer.MakeScope ).End)]"
	onclick = "[ScriptedGui.Execute( GuiScope.SetRoot( GetPlayer.MakeScope ).AddScope('saved_gdp', MakeScopeValue(GetPlayer.GetGDP)).End )]"
}

button = {
    using = default_button_action
    visible = "[GetScriptedGui('give_journal_entry_scriptedgui').IsValid( GuiScope.SetRoot( GetPlayer.MakeScope ).End)]"
    # you can use its 'is_vaild' context directly as you like
    size = { 250 50 }
	position = { 0 123 }
	text = "I_AM_ANOTHER_BTN"
}
```

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • Scripted gui |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
