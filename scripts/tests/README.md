# Tool and semantic tests

Two by-hand checks, captured from the review session that introduced `mod-semantics`:

```bash
node scripts/test-semantics.mjs
node scripts/test-tools.mjs
```

Both print one `ok` or `not ok` line per case, then a count. A failed case sets the exit code to 1. Neither writes outside the OS temporary directory, and neither reads the player's Documents directory or the real game install.

Node 22.18+ or Node 24 runs the TypeScript sources in `.pi/` by type stripping. `tests/hooks.mjs` adds the two resolutions that the sources need. The bare `typebox` import maps to a local stub, and a relative import without an extension resolves to the `.ts` file.

## What each file covers

| File | Covers |
| --- | --- |
| `scripts/test-semantics.mjs` | Every committed error case under `tests/fixtures/`, the missing-mirror and missing-dump paths, `reference/example_mod/`, and a smoke run over `game-scripts/workshop/` when that mirror exists. The fixtures use the committed dumps and `tests/vanilla/`, so they need no mirror. |
| `scripts/test-tools.mjs` | All nine tools: registration, the no-state errors, `set_game_dir`, `try_set_game_dir`, `check_game_paths`, `get_game_info`, `sync_game_scripts`, `validate_mod`, `install_mod`, `check_runtime`, and `install_runtime`. |
| `tests/expectations.mjs` | The exact warnings that each fixture must produce. A new warning, a missing warning, or a silently skipped check fails the case. |
| `tests/fixtures/` | The error cases. One group covers C1 missing target, `TRY_`, `_OR_CREATE`, `INJECT:` on a scripted effect, and C3 missing localization keys. Another covers C2 near misses, the C2 output cap, BOM, CRLF, tabs, and localization filename shapes. The C2 cases cover a scope path, an `if` or `custom_tooltip` body, a `when_taken` body, and a top-level scripted effect body. |
| `tests/helpers.mjs` | Module loading, tool invocation, assertions, and the small suite runner. |
| `tests/vanilla/` | The minimal vanilla mirror that the fixtures read: one empty directory for each `common/<class>` a fixture uses, and one scripted effect that the `INJECT:` case targets. The fixtures copy the committed dumps and this mirror into a temporary repository, so **`game-scripts/` is not needed** and a fresh clone passes. |

## What needs the real mirror

Only the Workshop smoke test reads `game-scripts/workshop/`, which `sync_game_scripts` writes and git ignores. That test is skipped when the mirror is absent, so a fresh clone passes 26 of 26 cases with the smoke test skipped. Run `sync_game_scripts` first when you want the smoke test.

## The Workshop smoke test

`scripts/test-semantics.mjs` reads every directory under `game-scripts/workshop/`, which `sync_game_scripts` writes and git ignores. The test is skipped when that mirror is absent. On the ten mirrored mods, it requires the two known true positives:

- `make_indepedent` in `2988303719` (the real effect is `make_independent`).
- `INJECT:pmg_train_automation_building_hydroponic` in `3472248460` (no such target exists).

Any other warning fails the test. Notes are allowed, because a name-level note is informational. When a new true positive is found, add it to `KNOWN_WORKSHOP_WARNINGS` in the test.

## Two cases that guard a fixed defect

Two defects of the C2 scan have their own fixture, so they cannot come back:

- `c2-scope-path`: `scope:<name> = { … }` is a scope path, not a game name. The fixture proves that the path is not reported, and that the body of the scope block is still scanned.
- `c2-if-block`: an effect inside `if`, and one inside `custom_tooltip`, are scanned.

The boolean operators `not`, `or`, `and`, `nor`, and `nand` are **not** containers on purpose. A real Workshop mod writes `AND = { … }` as a country-definition block, so scanning that body reports the fields of the definition as near misses.
