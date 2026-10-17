# History modding

|  | Please help improve this article or section by [**expanding it**](https://vic3.paradoxwikis.com/index.php?title=History_modding&action=edit) with: information on more history categories. |

History [effects](./Effect.md), found in common/history/, are how Victoria 3 initializes the starting state for a new game. This includes things such as countries, politics, pops, literacy, technologies, and so on.

The history folder contains sub-folders to organize the setup effects. These effects are all executed between the player selecting either the sandbox option or a country via an objective on the main menu. Note that history only involves changing the starting game state for new games. Changes to history files do not affect mechanics defined in other script files nor do they affect any games already in progress.

## History file structure
Victoria 3 executes its history effects in the following order:[[1]](#cite_note-1)

| Order | Key |
| 1 | STATES |
| 2 | COUNTRIES |
| 3 | POPS |
| 4 | DIPLOMACY |
| 5 | POPULATION |
| 6 | POWER\_BLOCS |
| 7 | INTERESTS |
| 8 | BUILDINGS |
| 9 | PRODUCTION\_METHODS |
| 10 | MILITARY\_FORMATIONS |
| 11 | AI |
| 12 | TREATIES |
| 13 | LOBBIES |
| 14 | DIPLOMATIC\_PLAYS |
| 15 | TRADE |
| 16 | GLOBAL |
| 17 | POLITICAL\_MOVEMENTS |
| 18 | CHARACTERS |
| 19 | GOVERNMENT |
| 20 | GOVERNMENT\_SETUP |
| 21 | MILITARY\_DEPLOYMENTS |

Each of the keys above creates an effect block which executes all contained effects. All of the history keys provide no scope, so all effects must be scoped correctly. File and subfolders can be named arbitrarily, only the contained history keys matter.

### Modifying history files
*See [Mod files load order](https://vic3.paradoxwikis.com/Mod_files_load_order) for more information about load order rules*

Modders should generally avoid modifying the vanilla history files unless the goal is to preempt their execution. Modifying the vanilla files, *especially the states history*, is a major compatibility torpedo since it alters the starting game state in ways that other modders cannot anticipate. Files in the `history` folders obey loading order rules, so modders can ensure their history effects are executed before or after the vanilla history as needed.

### Using history effects
The effects used in history are not unique to their history files and can be fired within other history files or during game-play as needed for your mod's setup. If needed, you can use effects downstream from their intended history files. For example, you could wait until `global` history to move or convert pops as a means to avoid touching any vanilla pop files. The majority of modders execute their history effects in `global` since it is so far downstream relative to other history files.

*Note: Using history-specific effects such as `create_state` or `create_pop` after the history execution is not supported by Paradox and can be quite buggy.*

## History file examples
The following sections show examples of how history files are used. Note that other than execution order, any effects can be run in any history key block

### States history
*See [Map modding](./Map modding.md) for more information about modifying the **province map**; [State modding](./State modding.md) for more information about modifying **state regions** and **strategic regions**; and [Overwriting states](https://vic3.paradoxwikis.com/New_state_modding#Overwriting_existing_states) for a guide on modifying state setup.*

**State history** creates both the starting states (*NOT their state regions*) and the countries that own them. This is also where homelands, claims, and incorporated status are assigned. If a country is not given a state in history, it *will not* exist at game start.

This history file involves executed related effects within the **state region** (`s:`) scope. The following example from Idaho's vanilla history shows all of these effects in action:

```
STATES = {
	s:STATE_IDAHO = {
		create_state = {
			country = c:ORG
			owned_provinces = { 
				x4B49F2 xE836AA xB94979 x2BCA5E x0667C7 x7B7595
			}
			state_type = unincorporated
		}
		create_state = {
			country = c:BNN
			owned_provinces = {
				x87941A xE65BC2 xFD9C12 xB8D005 x774CEA xD484FE xB20F44 x7355BF x017C34 x2C976D x73354E x3BC3DC x81EADA x156C47 x573B27 xA1A13A xA1C84D x40339D x4A7CD8 x744A86 x0B6D01 x3B157B x1F04CC x4690C2 xBC0AA9 x9888F6 x236126 xD00080 xEC9F6C x0FB2AA x4DBE4A x06E885 x44332A xB95EB2 x7B1E0A x233F47 x1E57E5 xC998B0
			}
		}
		create_state = {
			country = c:NZP
			owned_provinces = {
				x0682D7 x249E28 xED64F1 x9F2532 x83926D xC3178C xB5C710 x2CC6D7 x7D5812 xD06EF9 xE6E56D x9D7B0E xF11FC4 xCE1B4B x0062B6 x01C975 x073B66 x96529F x0456B2 xCC869C x402080
				xCFD016 xBFA9C4 xE6B7A4 x8C707D x25F860 x4DAA8A xD7B25C x9D92A7 x82AA18
			}
		}

		add_homeland = cu:nez_perce
		add_homeland = cu:paiute
		add_claim = c:ORG
	}
}
```

In this example, this effect block does the following:

- Creates the **states** within the Idaho **state region** along with creating the countries that own them (in this case ORG, BNN, and NZP). *The provinces included in the state region are defined in `map_data/state_regions`*
- Designates the state owned by ORG as **unincorporated**. States default to incorporated if not designated a `unincorporated` or `treaty_port`
- Adds the `nez_perce` and `paiute` cultural homelands to the Idaho state region
- Gives ORG a claim over the state region, which blocks other nations from colonizing the state region.

### Countries history
*See [Country modding](./Country modding.md) for more information on modifying countries*

**Countries history** is used to set up several general elements of a country ahead of creating pops and diplomatic relations. This is typically where the game sets up initial governments, politics, taxation policies, and laws. **Note:** At this stage, only countries and their empty states exist in the game state. There are still no pops, buildings, or goods to interact with.

The example here shows Great Britain's country history from vanilla:

```
COUNTRIES = {
	c:GBR ?= {
		set_next_election_date = 1836.2.1
		
		ig:ig_intelligentsia = {
			add_ruling_interest_group = yes
		}

		ig:ig_petty_bourgeoisie = {
			add_ruling_interest_group = yes
		}
		
		set_tariffs_export_priority = g:grain
		set_tariffs_import_priority = g:fabric
		set_tariffs_import_priority = g:wood
		set_tariffs_import_priority = g:hardwood
		
		effect_starting_technology_tier_1_tech = yes
		
		add_technology_researched = labor_movement # A relevant labour movement already existed prior to 1836
		set_tax_level = medium
		
		add_taxed_goods = g:liquor
		add_taxed_goods = g:luxury_clothes
		add_taxed_goods = g:luxury_furniture
		add_taxed_goods = g:tea

		# Laws
		activate_law = law_type:law_monarchy
		activate_law = law_type:law_wealth_voting
		activate_law = law_type:law_freedom_of_conscience
		activate_law = law_type:law_women_own_property
		activate_law = law_type:law_per_capita_based_taxation
		activate_law = law_type:law_appointed_bureaucrats
		activate_law = law_type:law_right_of_assembly
		activate_law = law_type:law_national_supremacy
		activate_law = law_type:law_protectionism # Corn Laws, babyyy
		activate_law = law_type:law_interventionism
		activate_law = law_type:law_religious_schools
		activate_law = law_type:law_per_capita_based_taxation
		activate_law = law_type:law_colonial_resettlement
		activate_law = law_type:law_poor_laws
		activate_law = law_type:law_charitable_health_system
		activate_law = law_type:law_dedicated_police
		activate_law = law_type:law_professional_army
		activate_law = law_type:law_tenant_farmers # enclosure acts
		activate_law = law_type:law_migration_controls
		
		set_institution_investment_level = {
			institution = institution_colonial_affairs
			level = 2
		}
		
		set_institution_investment_level = {
			institution = institution_schools
			level = 3
		}

		set_institution_investment_level = {
			institution = institution_police
			level = 1
		}

		add_journal_entry = { type = je_victoria }
		if = {
			limit = {
				has_dlc_feature = rp1_content
			}
			add_journal_entry = { type = je_aberdeen_act }
		}

		add_modifier = {
			name = brazilian_slave_trade_modifier
			months = 600 # 50 Years
		}

		add_company = company_type:company_gwr
		company:company_gwr = {
			set_company_establishment_date = 1833.1.21
			set_company_state_region = s:STATE_HOME_COUNTIES
		}
	}
}
```

An important note is that `add_technology_researched` is not reversible. If a country starts with a certain technology already researched, you must overwrite the vanilla history file for that country in order to prevent it starting researched.

### Pops history
*See [Pop modding](./Pop modding.md) for more information on modifying professions*

**Pops history** is how the game creates pops for each state. This is done using the `create_pop` effect within the state (*not state region*) scope. You can scope to a specific state within a state region with the following methods:

```
# Using Brackets
s:STATE_MINSK = {
	region_state:RUS = {
	}
}

# Using Dot Linkage
s:STATE_MINSK.region_state:RUS = {
}
```

This example from the vanilla files shows the many ways that you can use `create_pops`:

```
1. This is an example of all the ways in which create_pop can now be used

POPS = {
	#s:STATE_MINSK = {
	#	region_state:RUS = {
	#		create_pop = {
	#			culture = byelorussian
	#			size = 176925
	#		}
	#
	#		create_pop = {
	#			culture = ukrainian
	#			size = 24700
	#		}
	#
	#		create_pop = {
	#			culture = ashkenazi
	#			religion = jewish
	#			size = 26100
	#		}
	#
	#		create_pop = {
	#			culture = polish
	#			size = 29783
	#		}
	#
	#		create_pop = {
	#			culture = lithuanian
	#			size = 1002
	#		}
	#
	#		create_pop = {
	#			culture = russian
	#			size = 2034
	#		}
	#
	#		create_pop = {
	#			pop_type = aristocrats
	#			culture = polish
	#			religion = catholic
	#			size = 5200
	#		}
	#	}
	#}
}
```

### Diplomacy history
*See [Diplomacy modding](./Diplomacy modding.md) for more information about diplomacy.*

**Diplomacy history** is used to set up diplomatic relations, subject relationships, relations, and truces. The following are excerpts from base game script:

```
DIPLOMACY = {
	c:SPA ?= {
		create_diplomatic_pact = {
			country = c:CUB
			type = colony
		}
		create_diplomatic_pact = {
			country = c:PHI
			type = colony
		}	
	}
}
```

```
DIPLOMACY = {
	c:NET ?= {
		create_bidirectional_truce = {
			country = c:BEL
			months = 40
		}
	}	
}
```

```
DIPLOMACY = {
	c:GRE ?= {
		set_owes_obligation_to = {
			country = c:RUS
			setting = yes
		}
		set_owes_obligation_to = {
			country = c:FRA
			setting = yes
		}
		set_owes_obligation_to = {
			country = c:GBR 
			setting = yes
		}
	}
}
```

```
DIPLOMACY = {
	c:AUS ?= { 
		set_relations = { country = c:KRA value = -30 }
		set_relations = { country = c:TUR value = -30 }
		set_relations = { country = c:BAV value = 30 }
		set_relations = { country = c:BAD value = 30 }
		set_relations = { country = c:WUR value = 30 }
		set_relations = { country = c:SAR value = 10 }
		set_relations = { country = c:SIC value = 30 }
		set_relations = { country = c:MOD value = 30 }
		set_relations = { country = c:PAR value = 30 }
		set_relations = { country = c:LUC value = 30 }
		set_relations = { country = c:PAP value = 30 }
	}
}
```

```
DIPLOMACY = {
	c:RUS ?= {
		create_diplomatic_pact = {
			country = c:TUR
			type = rivalry
		}
	}
	c:TUR ?= {
		create_diplomatic_pact = {
			country = c:RUS
			type = rivalry
		}
	}
}
```

### Population history
**Population history** is used to initialize a country's starting pop wealth and literacy rate:

```
POPULATION = {
	c:MOD ?= {
		effect_starting_pop_wealth_high = yes
		effect_starting_pop_literacy_low = yes
	}
}
```

### Power bloc history
*See [Power bloc modding](./Power bloc modding.md) for more information regarding modifying power blocs.*

**Power bloc history** is used to create the starting power blocs for the game. Remember that subjects are automatically included in a country's power bloc. There is currently no effect or command to remove a country from a power bloc or dissolve a power bloc.

***Important: Failing to have any starting power blocs will cause a CTD during history execution. You MUST define at least one starting power bloc!***

```
POWER_BLOCS = {
	c:GBR = {
		create_power_bloc = {
			name = BRITISH_EMPIRE
			map_color = hsv{ 0.99  0.7  0.9 }

			founding_date = 1784.5.12 # Treaty of Paris (1783) comes into effect
			identity = identity_sovereign_empire
			principle = principle_vassalization_1

			# subjects are automatically part of the bloc
		}
		if = {
			limit = {
				has_dlc_feature = power_bloc_features
			}
			power_bloc = {
				add_principle = principle_colonial_offices_2
			}
		}
	}

	c:AUS = {
		create_power_bloc = {
			name = METTERNICH_SYSTEM

			map_color = { 219 211 157 }

			founding_date = 1815.6.9 # Final agreement of the 1814 Congress of Vienna
			identity = identity_ideological_union
			principle = principle_creative_legislature_1

			# Habsburg leaders in Italy and Italian states held up by direct Austrian intervention
			member = c:MOD
			member = c:TUS
			member = c:PAR
			member = c:SIC
		}
		if = {
			limit = {
				has_dlc_feature = power_bloc_features
			}
			power_bloc = {
				add_principle = principle_defensive_cooperation_1
			}
		}
	}
}
```

***Note: Power Blocs are a DLC feature connected to Sphere of Influence. Per Paradox policy, do not give players access to DLC features they do not own.*** Use `has_dlc_feature = power_bloc_features` to condition principles beyond the first

### Interest history
**Interest history** is used to set a country's diplomatic interests, and thus diplomatic contacts, at game start. This also impacts which markets a country is able to access at game start.

```
INTERESTS = {
	c:GBR ?= {
		add_declared_interest = region_baltic
		add_declared_interest = region_brazil
		add_declared_interest = region_rhine
		add_declared_interest = region_france
		add_declared_interest = region_south_china
		add_declared_interest = region_north_china
		add_declared_interest = region_nile_basin
		add_declared_interest = region_north_africa
		add_declared_interest = region_occitania
		add_declared_interest = region_poland
		add_declared_interest = region_russia
		add_declared_interest = region_anatolia
		add_declared_interest = region_indonesia
		add_declared_interest = region_japan
		add_declared_interest = region_andes
		add_declared_interest = region_manchuria
		add_declared_interest = region_caucasus
	}
}
```

### Building history
*See [Building modding](./Building modding.md) for more information regarding modifying buildings.*

```
BUILDINGS={
	s:STATE_DISTRICT_OF_COLUMBIA={
		region_state:USA={
			create_building={
				building="building_government_administration"
				add_ownership={
					country={
						country="c:USA"
						levels=6
					}
				}
				reserves=1
				activate_production_methods={ "pm_secular_bureaucrats" "pm_professional_bureaucrats" "pm_horizontal_drawer_cabinets" }
			}
			create_building={
				building="building_white_house"
				level=1
			}
		}
	}
	if = {
		limit = {
			has_american_buildings_dlc_trigger = yes
		}
		s:STATE_DISTRICT_OF_COLUMBIA={
			region_state:USA={
				create_building={
					building="building_capitol_hill"
					level=1
				}
			}
		}
	}
}
```

### Production method history
### Military formation history
### AI history
### Treaty history
### Lobby history
**Lobby history** is where countries' starting lobbies are created:

```
LOBBIES = {
	c:GRE = {
		create_political_lobby = {  
			type = lobby_pro_country  
			target = c:GBR
			add_interest_group = ig:ig_petty_bourgeoisie
		}
		create_political_lobby = {
			type = lobby_pro_country  
			target = c:RUS
			add_interest_group = ig:ig_landowners
			add_interest_group = ig:ig_devout
		}
		create_political_lobby = {  
			type = lobby_pro_country  
			target = c:FRA
			add_interest_group = ig:ig_intelligentsia
		}	
	}
}
```

### Diplomatic play history
### Trade history
**Trade history** is where trade routes to or from the World Market can be created.

```
TRADE = {
	s:STATE_FLANDERS={
		region_state:BEL={
			sg:dye = {
				add_imports = 10
			}
			sg:clothes = {
				add_exports = 8
			}
		}
	}
}
```

### Global history
### Political movement history
### Character history
### Government history
### Government setup history
### Military deployment history
## References
1. [↑](#cite_ref-1) As determined by Amtep of the [Tiger validator](https://github.com/amtep/tiger)

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • History • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
