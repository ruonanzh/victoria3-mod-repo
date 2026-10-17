# Save-game editing

## Format of a save-file
By default save-files consist of a zipped file with the extension '.v3'. It containes two files: one called 'meta' the other 'gamestate'. The gamestate file is in a **binary format**.

By editing the file `"pdx_settings.json"` under `"~/Documents/Paradox Interactive/Victoria 3/"` and changing "save\_file\_format": "zip\_binary\_all" to "text" save-files are saved in a **[simple text](http://en.wikipedia.org/wiki/simple_text "wikipedia:simple text")-format**.

## Structure of a save-file
```
provinces={
	0={
	}

	1={
		state=4
	}
…
	40923={
	}

	40924={
	}

}

pops={
	database={
2113929216={						# ID of this POP
	type="laborers"					# the profession of this POP
	size_wa=498					# number of individuals that are workers
	size_dn=1500					# number of individuals that are dependants
	location=119					# location, 119 equals STATE_SVEALAND
	interest_group_support={ 0.14669 0.18189 0 0 0 0 0 0.17652 }	# support for IGs, Σ < literates
	culture=19							# culture, 19 equals danish
	workplace=2068							# building this POP is employed at, if this line is missing, the POP is unemployed; the ID of the workplace corresponds to a building somewhere else in the save-file
	religion="mahayana"						# religion
	assimilation_culture=18						# individual workers are in the process of being transfered to a different POP, whith this culture
	conversion_religion="protestant"				# individual workers are in the process of being transfered to a different POP, whith this religion
	literate=10							# number of individuals that are literate (only workers count!)
	qualifications={ 15 0=1.64121 2=2.76406 4=1.32237 5=6.92633 6=0.49763 7=6.73474 9=6.9817 10=0.07121 12=1.42598 }  # number of individuals that qualify to work as a different profession 0 equals academics
	wealth=9							# current wealth level 1–100
	previous_quality_of_life=9					# previous wealth level 1–100
	loyalists_and_radicals=2					# a positive number equals loyalists, a negative number equals radicals
	weekly_budget={ 1.62679 0 0.87451 0 0 0 -1.67994 0 -0.28468 -0.27778 0 -0.12786 }	# something to do with buying packages
	partial_growth_wa=0.31659					# goes towards the default relation of wa to dn
	partial_growth_dn=0.08076					# goes towards the default relation of wa to dn
}
…
states={
	database={
0={
	capital=23186
	country=3
	arable_land=60
	incorporation=1
	migration_cache={
		standard_of_living=10.88086
		migration_pull=17.44632
	}
	market=26
	infrastructure=35.07777
	infrastructure_usage=36.8
	pop_needs={
		12={
			pop_need_entry_data={ {
					weights={
						9=2.12331
						12=2.87664
					}
				}
 {
					weights={
						10=2.48246
						13=2.51749
					}
				}
 {
					weights={
						7=3.43085
						8=0.1909
						11=0.6884
						36=0.2389
						37=0.10595
					}
				}
 {
					weights={
						9=2.15615
						10=2.84375
						17=0
						23=0.00005
						28=0
					}
				}
 {
					weights={
						13=3.96885
						14=0.17575
						31=0.67955
					}
				}
 {
					weights={
						12=1
					}
				}
 {
					weights={
						15=1
					}
				}
 {
					weights={
						38=3
						43=0.343
						44=0
					}
				}
 {
					weights={
						39=3
						40=1.80325
						41=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						45=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						46=0.549
					}
				}
 {
					weights={
						11=2
						36=1.60365
						37=0.71115
						42=0.1873
					}
				}
 {
					weights={
						35=1.86588
						47=0
						48=1.05142
						49=2
					}
				}
 {
					weights={
						15=0.238
						51=0.2393
					}
				}
 }
		}

		45={
			pop_need_entry_data={ {
					weights={
						9=2.12331
						12=2.87664
					}
				}
 {
					weights={
						10=2.48246
						13=2.51749
					}
				}
 {
					weights={
						7=3.43085
						8=0.1909
						11=0.6884
						36=0.2389
						37=0.10595
					}
				}
 {
					weights={
						9=2.15615
						10=2.84375
						17=0
						23=0.00005
						28=0
					}
				}
 {
					weights={
						13=3.96885
						14=0.17575
						31=0.67955
					}
				}
 {
					weights={
						12=1
					}
				}
 {
					weights={
						15=1
					}
				}
 {
					weights={
						38=3
						43=0.343
						44=0
					}
				}
 {
					weights={
						39=3
						40=1.80325
						41=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						45=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						46=0.549
					}
				}
 {
					weights={
						11=2
						36=1.60365
						37=0.71115
						42=0.1873
					}
				}
 {
					weights={
						35=1.86588
						47=0
						48=1.05142
						49=2
					}
				}
 {
					weights={
						15=0.238
						51=0.2393
					}
				}
 }
		}

		46={
			pop_need_entry_data={ {
					weights={
						9=2.12331
						12=2.87664
					}
				}
 {
					weights={
						10=2.48246
						13=2.51749
					}
				}
 {
					weights={
						7=3.43085
						8=0.1909
						11=0.6884
						36=0.2389
						37=0.10595
					}
				}
 {
					weights={
						9=2.15615
						10=2.84375
						17=0
						23=0.00005
						28=0
					}
				}
 {
					weights={
						13=3.96885
						14=0.17575
						31=0.67955
					}
				}
 {
					weights={
						12=1
					}
				}
 {
					weights={
						15=1
					}
				}
 {
					weights={
						38=3
						43=0.343
						44=0
					}
				}
 {
					weights={
						39=3
						40=1.80325
						41=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						45=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						46=0.549
					}
				}
 {
					weights={
						11=2
						36=1.60365
						37=0.71115
						42=0.1873
					}
				}
 {
					weights={
						35=1.86588
						47=0
						48=1.05142
						49=2
					}
				}
 {
					weights={
						15=0.238
						51=0.2393
					}
				}
 }
		}

		49={
			pop_need_entry_data={ {
					weights={
						9=2.12331
						12=2.87664
					}
				}
 {
					weights={
						10=2.48246
						13=2.51749
					}
				}
 {
					weights={
						7=3.43085
						8=0.1909
						11=0.6884
						36=0.2389
						37=0.10595
					}
				}
 {
					weights={
						9=2.15615
						10=2.84375
						17=0
						23=0.00005
						28=0
					}
				}
 {
					weights={
						13=3.96885
						14=0.17575
						31=0.67955
					}
				}
 {
					weights={
						12=1
					}
				}
 {
					weights={
						15=1
					}
				}
 {
					weights={
						38=3
						43=0.343
						44=0
					}
				}
 {
					weights={
						39=3
						40=1.80325
						41=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						45=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						46=0.549
					}
				}
 {
					weights={
						11=2
						36=1.60365
						37=0.71115
						42=0.1873
					}
				}
 {
					weights={
						35=1.86588
						47=0
						48=1.05142
						49=2
					}
				}
 {
					weights={
						15=0.238
						51=0.2393
					}
				}
 }
		}

		50={
			pop_need_entry_data={ {
					weights={
						9=2.12331
						12=2.87664
					}
				}
 {
					weights={
						10=2.48246
						13=2.51749
					}
				}
 {
					weights={
						7=3.43085
						8=0.1909
						11=0.6884
						36=0.2389
						37=0.10595
					}
				}
 {
					weights={
						9=2.15615
						10=2.84375
						17=0
						23=0.00005
						28=0
					}
				}
 {
					weights={
						13=3.96885
						14=0.17575
						31=0.67955
					}
				}
 {
					weights={
						12=1
					}
				}
 {
					weights={
						15=1
					}
				}
 {
					weights={
						38=3
						43=0.343
						44=0
					}
				}
 {
					weights={
						39=3
						40=1.80325
						41=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						45=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						46=0.549
					}
				}
 {
					weights={
						11=2
						36=1.60365
						37=0.71115
						42=0.1873
					}
				}
 {
					weights={
						35=1.86588
						47=0
						48=1.05142
						49=2
					}
				}
 {
					weights={
						15=0.238
						51=0.2393
					}
				}
 }
		}

		51={
			pop_need_entry_data={ {
					weights={
						9=2.12331
						12=2.87664
					}
				}
 {
					weights={
						10=2.48246
						13=2.51749
					}
				}
 {
					weights={
						7=3.43085
						8=0.1909
						11=0.6884
						36=0.2389
						37=0.10595
					}
				}
 {
					weights={
						9=2.15615
						10=2.84375
						17=0
						23=0.00005
						28=0
					}
				}
 {
					weights={
						13=3.96885
						14=0.17575
						31=0.67955
					}
				}
 {
					weights={
						12=1
					}
				}
 {
					weights={
						15=1
					}
				}
 {
					weights={
						38=3
						43=0.343
						44=0
					}
				}
 {
					weights={
						39=3
						40=1.80325
						41=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						45=0
					}
				}
 {
					weights={
						15=0.4
						16=0
						46=0.549
					}
				}
 {
					weights={
						11=2
						36=1.60365
						37=0.71115
						42=0.1873
					}
				}
 {
					weights={
						35=1.86588
						47=0
						48=1.05142
						49=2
					}
				}
 {
					weights={
						15=0.238
						51=0.2393
					}
				}
 }
		}

	}
	building_budget={
		expenses=9386.85014
		incomes=2712.47848
		gov_goods_expenses={ 44 43=3424.69036 }
		gov_salaries_expenses={ 82 43=4290.60418 81=319.76043 }
		construction_goods_expenses={ 82 81=1351.79517 }
		income_taxes={ 82 1=105.02579 2=84.02338 15=35.60285 39=80.41243 43=300.34225 67=95.93336 76=182.25525 81=22.38317 }
		poll_taxes={ 77 76=1806.5 }
	}
	variables={
	}
	region="STATE_MINSK"
	provinces={
		provinces={ 23168 20 }
	}
	pop_statistics={
		lower_strata_pops=928279			# number of individuals working in those professions
		middle_strata_pops=100695			# number of individuals working in those professions
		upper_strata_pops=40285				# number of individuals working in those professions
		radicals=138187					# number of individuals that are radicals
		loyalists=33611					# number of individuals that are loyalists
		total_political=317176				# number of individuals that are eligible to engage in politics, i.e. support IGs
		salaried_working_adults=172656
		subsisting_working_adults=144520
		government_working_adults=50000
		laborer_working_adults=77350
		pop_by_strata={ 3 0=928279 1=100695 2=40285 }
		pop_by_type={ 15 0=1 1=35155 2=17158 3=5130 4=58565 5=148018 6=3344 7=5475 8=254556 9=33003 10=5 11=487191 12=21622 14=36 }
		pop_workforce_by_type={ 15 1=8870 2=5000 3=1500 4=17386 5=44100 6=1000 7=1600 8=77350 9=9750 11=144520 12=6100 }
		qualifications={ 15 0=39325 1=15033 2=36039 3=12249 4=32289 5=75572 6=15956 7=85946 8=317176 9=36652 10=6566 11=317176 12=96708 13=317176 14=317176 }
		employable_qualifications={ 15 0=1418 1=666 2=1747 3=718 4=880 5=5998 6=485 7=15822 8=144520 9=1311 10=232 11=144520 12=6505 13=144520 14=144520 }
	}
	last_week_pop_migration_statistics={
		immigration=240
		immigration_states={ 725 728 745 749 750 755 756 757 759 760 761 762 763 764 768 770 771 772 773 775 776 777 843 845 847 848 }
	}
	base_pop_bureaucracy_cost=21.38518
}
…
laws={
	database={
0={
	law=law_chiefdom	country=1		# 1 equals United Kingdom
}
1={
	law=law_monarchy	country=1
	active=yes
	activation_date=1836.1.1
}
2={
	law=law_presidential_republic	country=1
}
481={
	law=law_laissez_faire	country=9
	random_seed=85341819			# unknown
	enactment_start_date=1854.3.23.18
	progress=0.53856			# % of time passed since enactment start. Change this to 0.99999 to accelerate
	enactment_scope={
		root={
			type=ctry
			identity=9
		}
		seed=145384830			# unknown
	}
}
```

IGs: ig\_armed\_forces ig\_devout ig\_industrialists ig\_intelligentsia ig\_landowners ig\_petty\_bourgeoisie ig\_rural\_folk ig\_trade\_unions

qualifications:
0 academics
1 aristocrats
2 bureaucrats
3 capitalists
4 clergymen
5 clerks
6 engineers
7 farmers
9 machinists
10 officers
12 shopkeepers

8 laborers, seems to always be 100%
11 soldiers (servicemen), seems to always be 100%

## Using Vim
When using [Vim](http://en.wikipedia.org/wiki/vim "wikipedia:vim"), before saving, a ":set binary" command must be given, so that no extra EOF is added to the saved file.

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • Save-game editing • [State modding guide](./State modding guide.md) |
