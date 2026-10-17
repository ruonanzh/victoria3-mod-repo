# New country modding

*See also: [Country modding](./Country modding.md)*

This guide covers how to add a new country into the game so that it exists at the start of the game in 1836.

Important starting notes:

- It is recommended to do text editing with a better editor than plain Notepad. My recommendations are Notepad++ (which is what this guide will use), Visual Studio Code, and Sublime.
- All .txt files in the game must have the encoding UTF8-BOM. They may not work properly if they don't have that. If you don't know how to set the encoding, just copy an existing file and change its contents.
- Everything after a `#` in a text file is "commented out", meaning the game ignores what's written after the #.
- This guide is done in the context of a mod that is already set up and working properly, so make sure you've got that important step done first.

## Defining the country
You can find the country definitions in /Victoria 3/game/common/country\_definitions.

By "defining" we mean two things:

- A human meaning of "deciding where the country will be and what it will look like"
- A code meaning of telling the game information about our country so that it knows what the country is

So first of all, think about what country you want, and especially where it will be located. The country in this guide will be called Cyrenaica and will be located here in Tripolitania's land. It will own the whole of the Libyan Desert state.

- The new example country will be here
- The Libyan Desert state

Now it is time to decide on a tag (a three-character short script name for the country). CYR makes sense as a tag for Cyrenaica, but anything could be used. Make sure that CYR isn't already used in the base game by using Notepad++'s *Find in Files* function to see whether CYR shows up in the base game country definition files anywhere. And if it doesn't, great! Otherwise, just pick something else. Now go to the mod's country definition folder and add a definition for it.

- Make sure the path points at the Vic3 country definition folder and put your desired tag, then hit Find All
- This is the path that the country definition file must be in

  Country definition code

As can be seen, there are some important parts to a country definition. For a full list of country definition parameters, see [Country modding § Country definition](./Country modding.md#Country_definition).

It starts with the tag, then add a colour (this can be in HSV360, HSV decimal, or RGB255 format). Use an online RGB color picking tool, or image editing software to find the desired colour.

After that, choose what type of country it will be:

- recognized - Mostly used for "western" countries
- unrecognized - Used for "non-western" countries, akin to Vic2's "uncivilized"
- decentralized - For countries without a central system of government, usually used for indigenous people
- colonial - For countries that are colonies or former colonies of recognized countries

Then state its tier, which is essentially the size of the country, as well as controlling in part whether it can form another country

- city\_state
- principality
- grand\_principality
- kingdom
- empire
- hegemony

After that, input the primary cultures. The in-game spellings are usually the same as the code spellings, but not always. Double check in the base game's /Victoria 3/game/common/cultures folder if unsure.

Finally, define the default capital state. As above, this is normally the same as what's written in game, except that spaces are always underscores, which is why CYR's state capital is STATE\_LIBYAN\_DESERT instead of Libyan Desert. A state will always be something like STATE\_(NAME). If unsure, check in /Victoria 3/game/map\_data/state\_regions or /Victoria 3/game/common/history/states.

Make sure there is a closing bracket, too. Most fancier word processors like Notepad++, Visual Studio Code and Sublime have some way of doing this. Proper bracketing is very important!

## The essential history files
History files location: /Victoria 3/game/common/history

History files required for editing: states, pops, buildings, countries

Now that the country is defined, it is time to make it show up in the game. Right now, the game only knows that CYR is a possible country, but it hasn't been told that it should exist. To do this, the history folder is needed, and specifically these three folders, as well as the countries folder.

- These three history folders are the most important ones
- Here's the countries history folder

Remember to change TRI to CYR in the POPS history

And in BUILDINGS, too

The order of editing doesn't matter, but this guide begins with states. Files in this folder tell the game who owns what states (or what provinces in the state) at the start of the game, as well as information about what cultures consider the state to be their homeland. Note that the state history files must use a `STATES = { }` block to enclose all state data. Navigate to STATE\_LIBYAN\_DESERT:

As seen from the highlighted section, TRI (Tripolitania) currently controls the state. Let's change that:

- State history with TRI as the owner
- Now changed to CYR being the owner

If you launch the game now, CYR controls the state, but it's missing information about population and buildings, so it is not yet ready to play. So next is the pops folder, and once again find STATE\_LIBYAN\_DESERT, and there, too, change TRI to CYR. And do the same in the buildings folder. There are no defined buildings in the state. That makes sense, considering it's mostly desert and has a very small population, but remember that subsistence buildings are added automatically.

Copy another country's file in /Victoria 3/game/common/history/countries and paste in your mod's countries folder rename it `cyr - cyrenaica.txt`. You can change the content later.

And with that, the history folder entries are done for now.

## Localization
*See also: [Localization](./Localization.md)*

The country is now playable, but in game it is still called CYR instead of a proper country name. That's where localization comes in.

Here's where the localization file is. The path is more important than the name of the file.

Localization is the way that code is translated into human languages like English. Time to go to our mod's localization folder.

New localization files can have any name as long as it fits a certain pattern. The file must:

- be a `.yml` file
- have `_l_english` at the end of the file name (if your localization is English, otherwise use the language's script name, typically its English name)
- start with `l_english:` in the contents of the file

It is suggested just to copy a localization file from another mod or the base game and empty it (except for the `l_english:` part).

Example localization

The localization is pretty simple, as shown here:

```
TAG: "country name"
TAG_ADJ: "country adjective"
```

`TAG` stands in here for the country's tag, i.e. CYR in this case.

Now the country works properly and the name looks acceptable.

The country works, but maybe a custom flag and ruler would be better

## Population history
Example population history entry

An quite optional file to do: Population history. Not to be confused with the Pops history, the population folder in the history folder gives information about the people who live in the country, specifically their wealth and their literacy. It typically uses two scripted effects, but can use any set of relevant effects. These modify the starting characteristics of a country's population, but the main effect depends on other factors, such as the buildings and production methods present at start for wealth, and technology and education institution for literacy. That is, even a country with `effect_starting_pop_literacy_very_high = yes` will be mostly illiterate if no education institution is present.

Wealth: (defined in /Victoria 3/game/common/scripted\_effects/00\_starting\_pop\_wealth.txt)

- effect\_starting\_pop\_wealth\_low
- effect\_starting\_pop\_wealth\_medium
- effect\_starting\_pop\_wealth\_high
- effect\_starting\_pop\_wealth\_very\_high

Literacy (defined in /Victoria 3/game/common/scripted\_effects/00\_starting\_pop\_literacy.txt)

- effect\_starting\_pop\_literacy\_baseline
- effect\_starting\_pop\_literacy\_very\_low
- effect\_starting\_pop\_literacy\_low
- effect\_starting\_pop\_literacy\_middling
- effect\_starting\_pop\_literacy\_high
- effect\_starting\_pop\_literacy\_very\_high

This is a good idea for helping with the initial balance of the country, and will have important effects on the country over time.

## Characters
*See also: [Character modding](./Character modding.md)*

Plenty to talk about for this!

If one prefers a ruler and flag which are not automatically generated, those, too, can be defined.

To have a specific character to be the country's ruler – or any other role, the country needs an entry in a file in the character history folder (/Victoria 3/game/common/history/characters). Again, it is recommended to go through the base game and/or a mod and copying information and files from there. Possible settings for characters can be found in the base game's common folder, look for folders mentioning character.

Cyrenaica's script is here. There is a first name and a family name. **Important note:** If your names are not already localized because they exist as character or culture names, you must add separate localization for them. In Cyrenaica's case, both names were already localized by something, great! If it is necessary to localize them, the localization can be put into any file (generally speaking, localization is only organized so that people can find where things are more easily).

If it is necessary to localize the name, it's pretty much the same as above with the country localization:

```
Name: "Localized name"
```

So if Cyrenaica's leader's family name needed new localization, it would have looked like this:

```
al-Idrisi: "al-Idrisi"
```

On the left is the script key of "al-Idrisi" and on the right is the English localization of "al-Idrisi." This may seem like extra steps, but it is important. If the game doesn't detect localization for a name, it won't use the name supplied and will instead use a random name.

Next is the birthdate, so age can be calculated.

Yahya is supposed to be the country's ruler, so the script for that `ruler = yes`. There are other roles, such as `heir`. See other character files in the base game or a mod to find out more. The UK has many of characters, for example. It is possible to set the ruler to be a general at the game start, but in Cyrenaica's case that's unnecessary. It has been commented it out so that the game ignores it, but the curious can see what it looks like.

Then one must define what Interest Group the character belongs to or represents. This character is a member of the Sunni Ulema, the Muslim devout interest group. Next is an ideology. These are found in /Victoria 3/game/common/ideologies/00\_leader\_ideologies. Since Cyrenaica is not very urbanized and primarily survives on subsistence, I think the Traditionalist ideology fits best. Finally, a couple of traits, which are in the /Victoria 3/game/common/character\_traits folder.

Here's what I've got!

There Yahya is, working like a charm!

## Flag
*See also: [Flag modding](./Flag modding.md)*

This will look great

The new flag will take inspiration from the flag of the Ottoman eyalet of Tripolitania and have some small changes.

To make a basic flag in Vic3, all that is needed is an entry for it in a file in /Victoria 3/game/common/coat\_of\_arms/coat\_of\_arms. Flags can put in as plain images, but it takes up a bit more space than writing them in script and isn't as flexible. Here is the script for Cyrenaica:

A brief explanation: All flags need a basic pattern to be based on. These are located in /Victoria 3/game/gfx/coat\_of\_arms/patterns. It's important that all flag components be put in quotes and include the file extension (.tga, .dds) for them to work.

What follows is `color1`, which refers to the first colour that can be used in the flag item. In Cyrenaica's case, `pattern_solid.tga` only has one colour, so that's all that is need. More colours can be added if the user would like to refer to them later with upcoming items (so instead of having `color1 = "yellow"` in all three of the crescents, the code could have been written as `color1 = color2` with `color2 = "yellow"` underneath my pattern's `color1`. This would be a quick way to change the colours of all three crescents without needing to change "yellow" to a different colour three times.

There are the three crescents which came from the files in /Victoria 3/game/gfx/coat\_of\_arms/colored\_emblems, and they are all the same emblem. A coloured emblem's colour needs to be specified, as mentioned above, but also you don't want the default size and in the center of the flag, it is necessary to tell the game that "this instance should be of this size and the center of the emblem should be located here", which is what the *instances* in Cyrenaica's flag are doing. The scale refers to the x and y axis distortion, so if distortion is not desired, just put the same number for both. This flag has shrunk both axes by half, so these crescents are a quarter of their default size. The first crescent has been placed at `{ 0.25 0.3 }`, which means that 0.25 is a quarter of the way from the left side to the right side (0 is at the left edge of the flag), and that 0.3 is 30% of the way from the top of the flag to the bottom of the flag (0 is at the top). A rotation value has been set for the two later crescents to make sure they don't face the same direction as the first one.

**Another important note:** To make your life easier when making flags, it is suggested that the user open the game's command line (right click the game in the Steam library and look at Preferences, and there on the bottom) they should write *-filewatcher -debug\_mode*. The first will update some files in real time as they're saved, so it will not be necessary to restart the game to see flag adjustments, and the second makes it easier to hunt down bugs and find information in the game.

The flag is now done, as is the country as a whole.

There's the flag

## Dynamic country name and colors
Many countries have alternative names and colors for certain circumstances. For example, Nejd gets dynamic name "Saudi Arabia" when Nejd fully owns Hedjaz and Germany turns green if it has the "council republic" law. Use of dynamic country names and colors may get a better experience in your mod.

### Dynamic country name
You can define a dynamic name in /Victoria 3/game/common/dynamic\_country\_names, just add a text file in the encoding of `UTF-8 with BOM`.

For example

```
CYR = {
	dynamic_country_name = {
		name = dyn_CYR_empire #This can be just the TAG to reuse the default name
		adjective = dyn_CYR_empire_adj # This can be TAG_ADJ to reuse the default adjective
		is_main_tag_only = yes # default no, if yes then only the primary country for a definition can use this name (i.e. Poland, not a civil war revolt Poland)
		priority = 0 # default 0, if multiple names have valid triggers, higher priority is used. If same priority, first valid one in file is used
		trigger = { # Scripted trigger, country-scope
			coa_def_monarchy_flag_trigger = yes
			scope:actor = {
				owns_entire_state_region = STATE_TUNISIA
			}
		}
	}	
}
```

Then, localize the dynamic name and dynamic adjective:

```
dyn_CYR_empire:0 "Cyrenacia Empire"
dyn_CYR_empire_adj:0 "Cyrenacian"
```

### Dynamic country color
You can define the color in /Victoria 3/game/common/named\_colors, and apply the name color in /Victoria 3/game/common/dynamic\_country\_map\_colors. Dynamic colors apply the first color that have a valid trigger.

In `named_colors`

```
colors = {	
	cyrenacia_empire_red = rgb { 1.0 0.15 0.15 } #This is "decimal" RGB, this value is similar to RBG 255 38 38 or hexcode ff2626
}
```

In `dynamic_country_map_colors`:

```
cyrenacia_empire_red = {
	color = "cyrenacia_empire_red"

	possible = {
		OR = {
			AND = {
				exists = c:CYR
				THIS = c:CYR
			}
			AND = {
				exists = c:TRI # dynamic color can be applied in other country
				THIS = c:TRI
			}
		}
		owns_entire_state_region = STATE_LIBYAN_DESERT
		owns_entire_state_region = STATE_TUNISIA
	}
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

| Guides | [Mod translation](./Mod translation.md) • New country modding • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
