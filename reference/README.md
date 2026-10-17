# Reference mods

The agent reads these to learn Victoria 3 (pdx-script) modding patterns. Do not edit these files.
Copy the pattern you need into `your_mods/<ModName>/`.

- `example_mod/` — the **minimal runnable sample**, which must pass `validate_mod` with no ERROR and
  no WARN. It holds one static modifier (`common/static_modifiers/`), a bilingual localization, and
  a `thumbnail.png`. Start here for the bare skeleton.

v1 ships no other pattern mods: the real-world Workshop mods are deliberately not copied in. Add
richer samples later, from a source whose license allows it.
