# Console commands

|  | Please help improve this article or section by [**expanding it**](https://vic3.paradoxwikis.com/index.php?title=Console_commands&action=edit) with: Updated console commands information. |

Victoria 3 offers a debug mode **(disabled by default)** that allows the inputting of console commands. This page lists the codes that may be input into the Console Window, a special debugging window that may be accessed in non-ironman games while in debug mode. Debug mode must be toggled on before starting the game. Then the console commands window can be accessed by pressing Shift+2, ALT+2+1, Shift+3,`§`, `~`, `^`, `°`, `²`, or `` ` `` (key varies based upon keyboard layout). For QWERTY keyboards, the key is `` ` ``. Otherwise, Shift + Alt + C may work if the prior combinations did not. Press the up or down arrow keys to traverse through previously executed commands. Press `⇆Tab` after entering the beginning of a command to autocomplete it or display which commands contain the entered sequence. Many codes can be turned off by repeating the command, but sometimes reloading the save or exiting the game is necessary.

## Debug mode
Debug mode is a set of game tools that allows the modification of game behavior outside of normal means. It includes:

- Console Window (accepts console commands)
- Debug Menus (including the GUI Editor, Script explorer and others)
- [Debug Info](#Debug_info)
- Ctrl + clicking on a country on the map takes control of the country
- Ctrl + alt + clicking on a state on the map takes the state
- File watcher that automatically reloads changed files (including mods) into memory

### Enabling debug mode
Debug mode can be enabled before launching the game and/or toggled in the game using mods. It can be disabled from the console, but can't be re-enabled after it's closed (unless with mods).

How to enable it:

#### Mods
There are a number of mods, like [Free Console Access](https://steamcommunity.com/sharedfiles/filedetails/?id=2879839709), which allow the toggling of debug mode between on and off, making it convenient to use the console and play, but this doesn't enable instant reloading of files. For modding, it's better to use both a mod and launch options.

#### Launcher
In the game Launcher:

1. Switch to Game Settings on the left
2. Scroll down to "Open game in Debug Mode" section and click Launch

#### Steam
On Steam:

1. Right-click the game, open Properties
2. Add `-debug_mode` to the Launch Options at the bottom
3. Start the game

#### Windows
Without Steam, on Windows:

1. Go to your Victoria 3 directory, "binaries" folder
2. Right-click victoria3.exe and create a shortcut
3. Right-click the shortcut, open Properties
4. In the Target field add `-debug_mode` at the end (so it looks like this `"...\victoria3.exe" -debug_mode`)
5. Launch the game using the shortcut

### Disabling debug mode
To activate achievements again, disable all active mods and remove -debug\_mode from launch options. After launching the game, make sure you have the [correct checksum](https://vic3.paradoxwikis.com/Patches). It can be found in the right corner in the Main Menu.

### Debug info
When debug mode is activated, some tooltips (especially on the map) will show debug info which is normally hidden during normal gameplay.

## List of console commands
| Command | Description |
| 3dstats | Toggles 3D Stats |
| 3dstats.EnableGfxZoneStats | Toggles 3D Gfx Zone Stats |
| Adjacencies.Rebuild | Rebuild all adjacencies |
| Application.ChangeResolution | Change the resolution through the console |
| Browser.OpenURL [<url>] | Opens up a browser with the provided URL |
| Camera.Debug | Prints out camera debug information |
| Camera.Load | Load camera position |
| Camera.Save | Save camera position |
| Checksum.Log | Log the game state checksums to the game log. |
| CrashReporter.DeleteCrashData | Delete local crash dumps older than X days. |
| CrashReporter.SimulateCrash | Simulates a crash (resulting in the game exiting). |
| Complete\_journal\_entry [<journal entry type>] | Completes a specific journal entry for the player country |
| Debug.Achievements.Lock [<key>] | Locks an achievement again |
| Debug.Achievements.ResetAll | Locks all achievements again |
| Debug.Achievements.ToggleDebug [<value>] | Puts the achievements system in debug mode |
| Debug.Achievements.Unlock [<key>] | Unlocks an achievements given the key |
| Debug.TextureMode [Name of debug mode] | Enables a texture mode for debugging |
| Dockables.Create [Dockable name] | Create dockable |
| Dockables.CreateUserLayout [Dockable layout name] | Create a new user layout copy of current layout, with new name. |
| Dockables.DeleteUserLayout [Dockable layout name] | Delete layout as user layout |
| Dockables.HideLayout | Hide any shown dockable layout |
| Dockables.SaveUserLayout | Save current layout to disk as user layout, optionally under a new name. |
| Dockables.ShowLayout [Dockable layout name] | Show an existing (user) layout, hide current layout |
| Dockables.ShowManager | Show dockable layout manager |
| GUI.AnimationTimeline.LogStats | Dump stats of the GUI Animation Timeline system to the debug log. |
| GUI.ClearWidgets | Clear dummy widget |
| GUI.CreateDockable [File name] [Widget name] [Dockable id. If doesn't exist, it will be registered] | Create dummy dockable widget. With 0 arguments the file name will be gui/test\_gui.gui, and the widget name will be test\_window |
| GUI.CreateWidget | Create dummy widget. With 0 arguments the file name will be gui/test\_gui.gui, and the widget name will be test\_window |
| GenerateCoastalRegionNavalExits |  |
| Graphics.CapFramerate |  |
| Graphics.DumpMemoryInformation |  |
| Localization.ToggleIncludeKeyInLocOutput | Includes the loc key in localization output |
| Localization.ToggleOnlyKeyInLocOutput | Shows only the loc key in localization output |
| Localization.ToggleSkipDataSystemInLocOutput | Don't run the data system at all in loc |
| Log.ClearAll | Clears all logs |
| Log.ClearErrorLog | Clears out the error log and resets the error count |
| Map.SavePNG [<map mode>] [<file name>] [<yes/no> Should render flat (optional)] | Save a PNG screenshot of the map for a specific map mode. The only map mode which is known to work is "countries". |
| MapObjects.Debug | Prints out map object debug information |
| MapObjects.GenerateGameLocators [<type>] [<filename> (optional)] | Generates locators for the game's map objects |
| MapObjects.Painter.AddPosition | Place a map object under the cursor |
| ModifierNode.Graph | Open a graph view of the tick tasks |
| ModifierNode.List | Open a graph view of the tick tasks |
| Music.PauseFactor | Shows or sets the current pause\_factor of the music system |
| Music.PlayTrack [<track name>] | Plays the specified track |
| Music.Reset | Resets the music system |
| Music.StopTrack | Stops the currently playing track |
| PopsFileStorage.Sync | Sync POP File Storage |
| Portrait.ClearCache | Clears the portrait cache. Forces all portraits to refresh |
| Print.EventDebug | Print event debug statistics, needs to set Debug.Events to collect statistics |
| RandomLog | Toggles random logging |
| RandomLog.Dump [Frame count to dump, or \* to dump all available frames (defaults to \*)] [Target filename (defaults to random.log)] | Dump random log data to a file. |
| SDL.EventLogging |  |
| ScriptProfiling.Dump |  |
| SplineNetwork.AppendAssets |  |
| SplineNetwork.ClearAssets |  |
| SplineNetwork.Database.Reload |  |
| SplineNetwork.Graphics.AddAllSplines |  |
| SplineNetwork.Graphics.ClearAllSplines |  |
| SplineNetwork.SetAssetGenerationMode | Sets mode for spline strips and anchors generation <naval/default> |
| SplineNetwork.ValidateSplines | Validate the integrity of in-game spline system |
| Terrain.Regenerate | Regenerates terrain bitmap |
| Terrain.Save |  |
| Threading.TaskThreadCount [The number of task threads] | Set or get the number of task threads |
| TickTask.Graph | Open a graph view of the tick tasks |
| TickTask.List | Open a graph view of the tick tasks |
| add\_approval [[interest group name](./Console commands.md#Console_command_arguments)] [amount] [time] | Adds an approval timed modifier to a given interest group, [amount] is optional (default=1), [time] in months and optional (default=1), e.g: add\_approval ig\_armed\_forces 20(approval) 20(months) find group name in game/common/interest\_groups |
| add\_clout [[interest group name](./Console commands.md#Console_command_arguments)] [amount] [time] | Adds or removes clout of the interest group by changing their political strength with timed modifier, [amount] is optional (default=1), [time] in months and optional (default=1) |
| add\_ideology [[interest group name](./Console commands.md#Console_command_arguments)] [Ideology to add.] | Add an ideology to a given interest group |
| add\_loyalists [culture] [amount] | Adds loyalists to culture by fraction of population |
| add\_mandates [amount] | Adds mandates to current power bloc |
| add\_radicals [culture] [amount] | Adds radicals to culture by fraction of population |
| add\_relations [<country tag>] [amount] | Changes relations with country by a given value |
| add\_supply\_ships [amount] | Adds a specific quantity of supply ships immediately. |
| add\_war\_support [country\_tag] [amount] | Alters wars support of country in ALL of their wars by amount |
| add\_liberty\_desire [country\_tag] [amount] | Changes liberty desire with country by a given value |
| ai.debug [tag] | dumps debug info for country |
| ai.goal [tag] [goal type] | Checks ai goal. The ai goals do not refer to the secret goals in ai\_strategies but the ai\_goals obtained via using ai.debug. |
| ai\_evaluate\_autonomous\_construction [<building key> <state region key>] | Prints AI debug data for selected state & building type. |
| ai\_evaluate\_company [<company type key>] | Prints AI debug data for selected company. |
| ai\_evaluate\_government\_construction [<building key> <state region key>] | Prints AI debug data for selected state & building type. |
| ai\_evaluate\_interest [<strategic region key>] | Prints AI debug data for selected strategic region declared interest. |
| ai\_evaluate\_mobilization | Prints AI debug data for mobilization. |
| ai\_evaluate\_privatization [<building key> <state region key>] | Prints AI debug data for selected state & building type. |
| ai\_evaluate\_production\_method [<building key> <pm key> <state region key>] | Prints AI debug data for selected production method in state for building type. |
| ai\_evaluate\_state [<state region key> <country tag>] | Prints AI strategic value for selected state. |
| ai\_evaluate\_subject [<country tag>] | Prints AI debug data for selected subject. |
| ai\_evaluate\_trade\_route [<goods key> <country tag>] | Prints AI debug data for selected goods & country trade partner. |
| ai\_evaluate\_treaty\_port [<state region key> <country tag>] | Prints AI treaty port score. |
| ai\_evaluate\_wargoal [<wargoal type> <country tag> <state region key>] | Prints AI debug data for wargoal. |
| annex [<country tag/id>] | Annexes a country |
| annex\_all | Annexes all other countries |
| audio.cpu\_info | Shows current cpu usage |
| audio.list\_events | List audio event |
| audio.play\_event [audio event] | Play audio event |
| callstack | Print the callstack |
| change\_law | Changes a Law to the specified key (like "law\_monarchy", etc) |
| changestatepop [state\_id] [pop\_type / all] [factor] | Changes the pop size of the given pop type ( can be 'all' ) by at most the given factor. **Will be capped by max employment for each pop**. |
| check\_pollution\_level [state region tag] | Print out pollution for specified state region |
| check\_save | Checks that saving and loading is consistent |
| clearlines | Clear lines |
| clearspawnedentities | Clears entities spawned with spawnentity command |
| coa\_preview\_window | Open the Coat of Arms Preview Window |
| compound\_nodeeditor | Compound Node Editor |
| conquerall [country tag] | Set all enemy provinces under our control. |
| crash | Cause the application to crash |
| create\_ai [self/all/tag] | Creates AI for country or countries |
| create\_building\_history | Creates a game-history compliant .txt file of all buildings in the world / state ID as well as their PM / subsidy configurations. |
| create\_country [country definition] [country type] [culture] [state id] | Creates a country |
| create\_political\_movement [<movement type key>] | Creates a political movement |
| create\_pop\_history | Creates a dump in debug.log with a complete pop history |
| create\_state\_region\_data | Creates a game-database compliant .txt file of all state regions in the world and their provinces/resources |
| cthulhu | ? |
| data\_types\_explorer | Opens the data types explorer dockable |
| data\_wrappers\_stats [Filter] | Prints statistics about data wrappers |
| date [date in format yyyy.mm.dd.hh] | Changes current date |
| debug [arguments] | Various debugging actions. See [console command arguments](./Console commands.md#Console_command_arguments). |
| debug\_lens\_option | toggles the cheat mode debug\_lens\_option |
| debug\_mode | Toggles debug mode |
| debugcharacters | Creates a semi-colon delimited logfile with debug info regarding all characters. |
| debugcountrybudgets | Creates a semi-colon delimited logfile with debug info regarding all countries and their budgets. |
| debugemployment | Creates and appends a comma-delimited logfile with debug info regarding employment in the specified state ID. |
| debugmarkets | Creates a semi-colon delimited logfile with debug info regarding all goods and markets. |
| debugpopconsumption | Creates a semi-colon delimited logfile with debug info regarding all pops' consumption |
| debugpopwealth | Creates a semi-colon delimited logfile of the current wealth status of all pops. |
| debugstates | Write a semi-colon delimited logfile with debug info regarding all states. |
| debugterrainweights | Prints out the number of |
| debugtheaters | Write a semi-colon delimited logfile with debug info regarding all theaters. |
| deiron | Disables Ironman mode |
| disable\_ai [all/tag] | Disables AI |
| disable\_pop\_growth | toggles the cheat mode disable\_pop\_growth |
| disable\_retooling | toggles the cheat mode disable\_retooling |
| drawcmdsviewer | Draw Cmds Viewer |
| dump\_data\_types | dumps the registered data types |
| dump\_ref\_lookup\_memory\_report |  |
| enable\_ai [all/tag] | Enables AI |
| entity\_editor | Entity Editor Dockable |
| escalate [<amount>] | Adds escalation to player diplomatic plays. |
| event [event name] [<country\_tag/province\_id>] | Executes an event |
| explorer | Shows an object explorer window |
| exportbuildings | Write a semi-colon delimited logfile with all building type info |
| fastbattle | toggles the cheat mode fastbattle (battles take one tick)**(affects AI)** |
| fastbuild | toggles the cheat mode fastbuild (makes all constructions instant) **(affects AI)** |
| fastbuildships | Produces ships immediately. |
| fastcivilwars | toggles the cheat mode fastcivilwars |
| fastcolonize | toggles the cheat mode fastcolonize **(affects AI)** |
| fastenact | toggles the cheat mode fastenact (enactment of policies is instant) |
| fasthire | toggles the cheat mode fasthire |
| fastincorporate | toggles the cheat mode fastincorporate (makes incorporation of states take 1 day) |
| fastinstitutions | toggles the cheat mode fastinstitutions |
| fastinterests | toggles the cheat mode fastinterests |
| fastlobbies | toggles the cheat mode fastlobbies |
| fastmobilize | toggles the cheat mode fastmobilize |
| fastmovements | toggles the cheat mode fastmovements |
| fastresearch | toggles the cheat mode fastresearch |
| fastrevolution | toggles the cheat mode fastrevolution |
| fastsecession | toggles the cheat mode fastsecession |
| fastsecretgoals | toggles the cheat mode fastsecretgoals |
| fasttravels | toggles the cheat mode fasttravels |
| find\_unemployed | Find and report all unemployed pops with an optional cutoff |
| fix\_state\_regions | Fix state regions. |
| force\_oos | Make this client go out of sync in multiplayer |
| generate\_province\_center\_objects | generates a file with meshes in the center of each province |
| gfx.reloadtexture | Reload textures |
| gfx.skin | select active gfx skin |
| gfx.texture\_limit | Set texture video memory limit in megabytes |
| gui\_animation\_editor | GUI Animation Timeline Dockable |
| gui\_editor | Spawns gui editor (removed in 1.9) |
| help [command name] | Print out all console commands or a specific command description. |
| hq\_show\_id | toggles the cheat mode hq\_show\_id |
| ignore\_government\_support | toggles the cheat mode ignore\_government\_support |
| ignore\_power\_bloc\_requirements | toggles the cheat mode ignore\_power\_bloc\_requirements (leverage requirements to leave and join) |
| invalidate\_character [character id] | Invalidate the modifier on the character with the specified ID |
| invalidate\_country [country id] | Invalidate the modifier on the country with the specified ID |
| invalidate\_ig [interest group id] | Invalidate the modifier on the interest group with the specified ID |
| invalidate\_state [state id] | Invalidate the modifier on the state with the specified ID |
| io\_stats | Toggles IO Stats |
| io\_stats.Reset | Resets IO Stats |
| kill\_character [character name] | kills the named character |
| log\_status | Log Status Dockable |
| log\_ticktask\_performance | Start outputing ticktask performance data to profiling.log |
| log\_viewer | Log Viewer Dockable |
| map\_editor | Toggle map editor |
| mapmode [mapmode] | Switches to a given mapmode |
| measure\_frame\_time ["start" or "stop" measuring] | Measures avg/min/max frame time and prints the result to debug.log once stopped |
| memory\_stats | Toggles Memory Stats |
| memory\_stats.Reset | Resets Memory Stats |
| minidump [file path] | Creates a minidump |
| money [amount] | Adds specified amount of money |
| net\_debuginfo | Print debug info about the networking layer |
| net\_stats | Toggles Net Stats |
| net\_stats.Reset | Resets Net Stats |
| norevolution | toggles the cheat mode norevolution |
| nosecession | toggles the cheat mode nosecession |
| nosupportloss | Prevent countries from losing war support |
| noshortages | Prevents penalties for supply shortages in buildings |
| observe | start observing the game |
| own [province id/state region tag] [country tag] | Change the owner of specified province or state region. The state region tags can be found in the [list of state regions](https://vic3.paradoxwikis.com/List_of_state_regions) |
| particleeditor | Particle Node Editor |
| permitmarginalizedingovernment | toggles the cheat mode permitmarginalizedingovernment |
| pops\_account\_disconnect\_steam | Disconnect Paradox account from Steam |
| pops\_account\_login [email] [password] | Login to a POPS Account |
| pops\_account\_logout | Logout from a POPS Account |
| pops\_account\_status | Show whether you are currently logged into POPS or not. |
| popstat | Prints out amount of active pops. |
| portrait\_editor | Open the portrait editor |
| print\_gamestate\_modifiers | Prints Gamestate Modifiers |
| province\_borders [true/false] | Toggles showing of province borders |
| pseudoLoc | Enable/Disable Pseudo Localization on Text Widgets |
| recalc\_cached\_data | Recalculate cached gamestate data. |
| release\_mode | Toggles release mode |
| reload [file name] | Reloads assets |
| rendertype | Reports what render backend is used |
| research | Acquire technologies |
| save\_game\_analyzer | Open the save game analyzer |
| savegames.delete\_all | Deletes all local save games |
| savegames.delete\_cloud | Deletes all cloud save games |
| screenshot | Take screenshot |
| script\_docs | Prints script documentation |
| set\_devastation\_level [state region tag] [amount] | Set devastation level in specified state region |
| set\_cohesion [committee] [value] | sets cohesion to value for committee |
| set\_pollution\_level [state region tag] [amount] | Set pollution level in specified state region |
| settings | Spawns a settings GUI with an optional argument for an initially selected category |
| shader\_debug |  |
| shader\_editor | Shader Editor Dockable |
| show\_goals | Show AI goals. |
| skip\_migration | toggles the cheat mode skip\_migration |
| sleep | Sleep for specified amount of milliseconds |
| social\_addfriend [Context Index] [Account ID] | Add a friend to friends list |
| social\_debuginfo | Print debug info about the social layer |
| social\_joinroom [Context Index] [Room Name] [Nick Name] | Join a chat room using the given social context |
| social\_sendmessage [Context Index] [Room Name] [Message] | Send a message to a chat room. |
| spawnentity [<entity name>] [<state> (optional)] | Spawns specified entity at cursor position |
| spawnentity\_at [<entity name>] [x] [y] [<state> (optional)] | Spawns specified entity at xy-position |
| spawnline [<line name>] [<start position 'x,y,z'> (no spaces)] [<end position x,y,z> (no spaces)] | Spawns specified line between 2 positions |
| spawnnotification [notificationtype] [<scopeindex>] | Spawns notification of specified type. |
| swapchain.buffers | Query/Set swapchain buffers |
| switchlanguage [language name] | Reload localization files and switch language |
| tag [country\_tag] | Switch control to another country |
| testaipacts | Test whether AI would dissolve current pacts |
| testevent [event name] [<country\_tag/province\_id>] | Tests an event |
| testobjective [<subgoal key (optional)>] | Tests objective triggered effects |
| texturelist | Texture List |
| textureviewer | Texture Viewer |
| time | What time is it? |
| tools.skins | Skin Editor |
| treatyport [<state region tag>] | Takes treaty port in state region |
| tweak | Spawns a tweaker GUI |
| update\_distribution | Updates garrison unit distribution in HQ of specified State ID |
| update\_employment | Transfers employees between buildings in the specified state ID. |
| validate\_employment | Print out unemployment in states. |
| validate\_hubs |  |
| validate\_income | Print out countries with income deficits. |
| validate\_naval\_exits |  |
| validate\_pops | Ensures all pops have valid params and prints them to the error log otherwise. |
| version | Shows current build information, put 1 as second parameter for long version |
| vsync | Toggle main swapchains vsync |
| wagerate [building\_id] [value] | Get or Set a building's wage rate |
| yesmen | AI will agree to all diplomatic proposals & sway offers from players |

### Console command arguments
| Argument | Value | Description |
| Interest Group Name | ig\_armed\_forces | Armed Forces |
| ig\_devout | Devout |
| ig\_industrialists | Industrialists |
| ig\_intelligentsia | Intelligentsia |
| ig\_landowners | Landowners |
| ig\_petty\_bourgeoisie | Petite Bourgeoisie |
| ig\_rural\_folk | Rural Folk |
| ig\_trade\_unions | Trade Unions |
| Debug Mode | ai |  |
| allmoney |  |
| alwaysdiplo |  |
| alwaysreform |  |
| alwaysupgradecolony |  |
| artisanchange |  |
| assert |  |
| cb\_use |  |
| color |  |
| demotiondesc |  |
| eco |  |
| focusai |  |
| fow |  |
| influence |  |
| info |  |
| lines |  |
| market |  |
| minzoom |  |
| pops |  |
| profile |  |
| promotiondesc |  |
| render |  |
| textures |  |
| tooltips |  |
| wireframe |  |
| yesmen |

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • Console commands • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
