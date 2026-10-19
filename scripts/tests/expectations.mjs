// The expected result of every committed error case.
//
// `warnings` is exact: the runner matches every listed item once, then fails on any extra item.
// `count` repeats an item, for a fixture whose point is the output cap.
// `checked` names the semantic classes that the case must exercise, so a silently skipped check
// fails the test instead of passing with no warnings.
export const CASES = [
  {
    dir: "c1-missing",
    checked: ["C1", "C2"],
    warnings: [
      { code: "c1-missing-target", level: "warn", includes: "REPLACE:no_such_decision_xyz" },
    ],
  },
  {
    dir: "c1-try",
    checked: ["C1", "C2"],
    warnings: [
      { code: "c1-missing-target", level: "note", includes: "TRY_REPLACE:no_such_decision_xyz" },
    ],
  },
  {
    dir: "c1-orcreate",
    checked: ["C1", "C2"],
    warnings: [],
  },
  {
    dir: "c1-inject-scripted",
    checked: ["C1", "C2"],
    warnings: [
      { code: "c1-inject-scripted", level: "warn", includes: "common/scripted_effects" },
    ],
  },
  {
    dir: "c2-add_devastaton",
    checked: ["C2"],
    warnings: [
      { code: "c2-near-miss", level: "warn", includes: "'add_devastaton'" },
    ],
  },
  {
    dir: "c2-add_fervr",
    checked: ["C2"],
    warnings: [
      { code: "c2-near-miss", level: "warn", includes: "Did you mean 'add_fervor'" },
    ],
  },
  {
    dir: "c2-add_amendmentt",
    checked: ["C2"],
    warnings: [
      { code: "c2-near-miss", level: "warn", includes: "Did you mean 'add_amendment'" },
    ],
  },
  {
    // A scope path is not a game name, and the body of the scope block is still scanned.
    dir: "c2-scope-path",
    checked: ["C2"],
    warnings: [
      { code: "c2-near-miss", level: "warn", includes: "'add_devastaton'" },
    ],
  },
  {
    // An effect inside an `if` and one inside a `custom_tooltip` are both scanned.
    dir: "c2-if-block",
    checked: ["C2"],
    warnings: [
      { code: "c2-near-miss", level: "warn", includes: "'add_devastaton'" },
      { code: "c2-near-miss", level: "warn", includes: "'add_fervr'" },
    ],
  },
  {
    // The body of `when_taken` is an effect list.
    dir: "c2-decision-block",
    checked: ["C2", "C3"],
    warnings: [
      { code: "c2-near-miss", level: "warn", includes: "'add_devastaton'" },
    ],
  },
  {
    // The body of a top-level scripted effect is an effect list, and the definition name is not a name.
    dir: "c2-scripted-body",
    checked: ["C2"],
    warnings: [
      { code: "c2-near-miss", level: "warn", includes: "'add_devastaton'" },
    ],
  },
  {
    dir: "c2-clean",
    checked: ["C2"],
    warnings: [],
  },
  {
    dir: "c2-trunc",
    checked: ["C2"],
    warnings: [
      { code: "c2-near-miss", level: "warn", count: 20 },
      { code: "c2-truncated", level: "note", includes: "more near-miss name(s)" },
    ],
  },
  {
    dir: "c3-clean",
    checked: ["C2", "C3"],
    warnings: [],
  },
  {
    dir: "c3-missing-loc",
    checked: ["C2", "C3"],
    warnings: [
      { code: "c3-missing-loc", level: "warn", includes: "'my_test_decision_xyz'" },
      { code: "c3-missing-loc", level: "warn", includes: "'my_test_decision_xyz_desc'" },
    ],
  },
  {
    dir: "c3-group",
    checked: ["C2", "C3"],
    warnings: [
      { code: "c3-missing-loc", level: "warn", includes: "journal_entry_groups" },
    ],
  },
  {
    // The current rule: C3 checks the base language only, and English is the base when present.
    dir: "c3-lang",
    checked: ["C2", "C3"],
    warnings: [
      { code: "c3-missing-loc", level: "warn", includes: "localization/english/" },
      { code: "c3-missing-loc", level: "warn", includes: "localization/english/" },
    ],
  },
  {
    dir: "x-bom-crlf",
    checked: ["C1", "C2"],
    warnings: [
      { code: "c1-missing-target", level: "warn", includes: "no_such_decision_xyz" },
    ],
  },
  {
    dir: "x-tab",
    checked: ["C1", "C2"],
    warnings: [
      { code: "c1-missing-target", level: "warn", includes: "no_such_decision_xyz" },
    ],
  },
  {
    dir: "x-exact",
    checked: ["C2"],
    warnings: [],
  },
  {
    dir: "x-locname",
    checked: ["C2", "C3"],
    warnings: [
      { code: "c3-missing-loc", level: "warn", includes: "'dec_x'" },
      { code: "c3-missing-loc", level: "warn", includes: "'dec_x_desc'" },
    ],
  },
  {
    dir: "x-traits",
    checked: ["C2", "C3"],
    warnings: [
      { code: "c3-missing-loc", level: "warn", includes: "character_traits" },
      { code: "c3-missing-loc", level: "warn", includes: "character_traits" },
      { code: "c3-missing-loc", level: "warn", includes: "journal_entries" },
      { code: "c3-missing-loc", level: "warn", includes: "journal_entries" },
    ],
  },
  {
    dir: "x-trigger",
    checked: ["C2", "C3"],
    warnings: [
      { code: "c2-near-miss", level: "warn", includes: "has_technology_researchedd" },
      { code: "c3-missing-loc", level: "warn", includes: "'my_dec_x'" },
      { code: "c3-missing-loc", level: "warn", includes: "'my_dec_x_desc'" },
    ],
  },
];
