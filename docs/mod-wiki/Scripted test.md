# Scripted test

Scripted tests are utility files used to check how often a defined game state is achieved. They do not affect gameplay in any way.

## Definition
Scripted tests are defined in /tools/scripted\_tests/.

They take the form like the following:

```
last_date = "1900.1.1"

tests = {
    GER_forms = {
        acceptable_fail_rate = 0.0
        success = {
            exists = c:GER 
        }
        fail = {
            game_date > "1890.1.1"
        }
    }
    another_test = {
        ...
    }
    ...
}
```

### Elements
A scripted test file contains a number of elements, most required. Each file can contain any number of tests. All tests are contained within the `tests = { }` block.

- `last_date` determines how long tests in the file are valid. If that date passes, the tests are no longer checked. If neither trigger returned true, the test is marked as "skipped".
- `success` is a [trigger](./Trigger.md) block that marks the test as "passed" if it returns true before the fail trigger and before the `last_date`.
- `fail` is a trigger block that marks the test as "failed" if it returns true before the success trigger returns true and before the `last_date`. Both triggers are checked daily and if they both return true on the same day, the test is marked as "passed".
- `acceptable_fail_rate` is a decimal percent value used for metadata analysis. It does not impact the test behavior at all. It defaults to 0 if not defined.
- `run_count` is an integer value that defines the number of times a test is run. Only runs that either fail or pass are counted. A value less than 0 causes the test to run indefinitely, that is until the `last_date`. Only the final run is recorded for the output. It defaults to 1 if not defined.

## Usage
Scripted tests can be enabled through a command line argument or console command.

There are three command lines arguments related to scripted tests:

- `-run_tests` / `-scripted_tests` – This enables the scripted tests
- `-no_save_after_failed_test` – This disables creating saves the day after a failed test; otherwise enabled by default
- `-save_before_failed_test` – This disables creating saves the day after a test fails. This is very slow and not generally recommended.

There is one console command for scripted tests `scripted_tests`. It can take an optional argument to create saves before, after (default), or not at all

- `scripted_tests` – Save is created after the tests
- `scripted_tests before` – Save is created before the tests
- `scripted_tests none` – No save is created

If scripted tests are active, entering the command again disables the tests.

## Output
At the end of the tests, a text file with the results is created in the Documents folder. Additionally, an XML file is created in the game's binaries folder.

## References
- Information adapted from /Victoria 3/game/tools/scripted\_tests/scripted\_tests.md

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • [GUI script](./GUI script.md) • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](./Event images.md) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • Scripted tests • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
