# Technology modding

[Technologies](https://vic3.paradoxwikis.com/Technologies) represent material, social, and political inventions. Each technology can unlock various other mechanics, provide direct [modifier](./Modifier types.md) effects, or a mixture of both.

## Example technology
Technology definitions always include an era, a category, a texture, and an AI weight. Most technologies also include a list of prerequisite unlocking technologies and may include a list of modifiers.

```
nitroglycerin = {
	# Unlocks Nitroglycerin PM in Coal, Iron, Lead, Sulfur Mines
	# Unlocks Ammonia-Soda Process PM in Chemical Industries
	# Countries get a +25% chance of discovering new resources
	era = era_2
	texture = "gfx/interface/icons/invention_icons/nitroglycerin.dds"
	category = production
	
	modifier = {
		country_resource_discovery_chance_mult = 0.25
	}
	
	unlocking_technologies = {	
		intensive_agriculture
		prospecting
	}
	
	ai_weight = {
		value = 1
	}
}
```

## Technology eras
Technology eras define the base cost of each technology. Technology eras are defined in /Victoria 3/game/common/technology/eras. Each era is a simple listing of a unique script name as a block and a technology cost. The cost is how many points of  innovation are required to research the technology with no modifiers to the cost.

```
era_1 = { #Pre-1836
	technology_cost = 7500 # for progress bonuses, use an approximate third: 2500
}
```

Era script names are also used with the effect `add_era_researched` which unlocks all technologies of that era.

## Technology item
Technologies are defined in /Victoria 3/game/common/technology/technologies. Each technology is defined as a block with a unique script name, which also acts a [localization](./Localization.md) key, within that block, the technology must have a defined era, texture, category, and AI weight. Technologies may also have a modifier block and a list of unlocking technologies – prerequisites that must be researched before this technology can be researched. Technologies that unlock buildings, laws, or other such things do not include those unlocks in their definition, but instead are listed in the definition of the item or mechanic they unlock. Technologies can also be hidden from the technology screen by adding `can_research = no`, which makes the technology obtainable only by effect and shown only when researched.

| Element | Values | Required |
| `era` | era script names |  |
| `texture` | path to image file |  |
| `category` | `production`, `military`, or `society` |  |
| `ai_weight = { }` | [script value](./Script value.md) |  |
| `modifier = { }` | list of [modifier types](./Modifier types.md) |  |
| `unlocking_technologies = { }` | list of technologies |  |
| `can_research` | `yes` or `no` |  |

## Walkthrough guide
### Define eras
Within your /<mod>/common/technology/eras folder, create a .txt file of any name, e.g. "01\_my\_eras.txt"

Within "01\_my\_eras.txt", create a new era block with its technology cost:

```
cool_era = { #Post-1936
	technology_cost = 20000 # for progress bonuses, use an approximate third: 7000
}
```

Eras are read in by the game based on their order and the containing files' order. So 01\_my\_eras.txt would come after the vanilla 00\_eras.txt and thus the new era is added after the vanilla eras as "era 6" or "VI" in game. The technology\_cost does not need to increase linearly and can be set at any desired amount.

If you are sticking to the vanilla eras, you can ignore this step, but remember to add the correct era to any technologies you add.

### Define a technology
In the /<mod>/common/technology/technologies folder, make a new .txt file of any name, e.g. "40\_my\_techs.txt"

If you want to modify any vanilla technology, copy its entry to your new file and make any changes. If your file comes after the vanilla files in ASCII sorting, your modified entry will overwrite the vanilla entry. This makes compatibility with other mods easier as well as makes updating for new patch easier as your changes are limited to only technologies you modify.

To create a new technology, simply add a new entry to your file, remember that technologies that unlock other features, such as production methods, have to be added to those features. Remember that the technology's era should be equal to or later than all prerequisite technologies, otherwise it can cause issue with technology costs.

```
technicolor = {
	era = cool_era
	texture = "gfx/interface/icons/invention_icons/<new icon>.dds"
	category = society
	
	modifier = {
		country_prestige_mult = 0.1 #color film is awesome!
	}
    
	unlocking_technologies = {	
		mass_propaganda
	}
	
	ai_weight = {
		value = 1
	}
}
```

## References
**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • Technology • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
