# Tool and semantic tests

Two by-hand checks, captured from the review session that introduced `mod-semantics`:

```bash
node scripts/test-semantics.mjs
node scripts/test-tools.mjs
```

Both print one `ok` or `not ok` line per case, then a count. A failed case sets the exit code to 1.
Neither writes outside the OS temporary directory, and neither reads the player's Documents
directory or the real game install.

Node 22.18+ or Node 24 runs the TypeScript sources in `.pi/` by type stripping. `tests/hooks.mjs`
adds the two resolutions that the sources need: the bare `typebox` import maps to a local stub, and
a relative import without an extension resolves to the `.ts` file.

## What each file covers

| File | Covers |
| --- | --- |
| `scripts/test-semantics.mjs` | Every committed error case under `tests/fixtures/`, the missing-mirror and missing-dump paths, `reference/example_mod/`, and a smoke run over `game-scripts/workshop/`. |
| `scripts/test-tools.mjs` | All nine tools: registration, the no-state errors, `set_game_dir`, `try_set_game_dir`, `check_game_paths`, `get_game_info`, `sync_game_scripts`, `validate_mod`, `install_mod`, `check_runtime`, and `install_runtime`. |
| `tests/expectations.mjs` | The exact warnings that each fixture must produce. A new warning, a missing warning, or a silently skipped check fails the case. |
| `tests/fixtures/` | The error cases: C1 missing target, `TRY_`, `_OR_CREATE`, `INJECT:` on a scripted effect, C2 near misses, C3 missing localization keys, the C2 output cap, BOM, CRLF, tabs, and localization filename shapes. |
| `tests/helpers.mjs` | Module loading, tool invocation, assertions, and the small suite runner. |

## The Workshop smoke test

`scripts/test-semantics.mjs` reads every directory under `game-scripts/workshop/`, which
`sync_game_scripts` writes and git ignores. The test is skipped when that mirror is absent. On the
ten mirrored mods, it requires the two known true positives:

- `make_indepedent` in `2988303719` (the real effect is `make_independent`).
- `INJECT:pmg_train_automation_building_hydroponic` in `3472248460` (no such target exists).

Any other warning fails the test. Notes are allowed, because a name-level note is informational.
When a new true positive is found, add it to `KNOWN_WORKSHOP_WARNINGS` in the test.

## Known gaps, not yet fixtures

Two defects found by the same review are not committed as fixtures, because they would fail today:

- `scope:<name> = {` is read as an effect name, so a valid scope path produces a false near-miss
  warning.
- A near miss inside `if`, `else_if`, `while`, or `custom_tooltip` is not scanned.

Add a case for each one after the fix, so the gap cannot return.
