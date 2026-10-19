// A do-nothing `typebox` module.
//
// The extensions use `Type.Object({...})` only to declare their parameter schema. The tests call
// `execute` directly, so the schema value is never read. This stub lets the tests import an
// extension without installing a dependency or writing a node_modules directory into the repo.
const node = () => new Proxy(function () {}, { get: () => node(), apply: () => node() });

export const Type = node();
export default { Type };
