// Module hooks that let plain Node run the TypeScript extensions in `.pi/`.
//
// Two gaps stand between Node and the extension source:
//   1. the bare `typebox` import has no node_modules copy in this repository;
//   2. the extensions import sibling modules without a file extension (`./game-paths`), and Node's
//      ESM resolver does not add `.ts`.
//
// The hooks fix both. Call `installHooks()` before the first dynamic import of an extension or a
// lib module. Node strips the TypeScript types itself (Node 22.18+ / 24).
import { registerHooks } from "node:module";

const STUB_URL = new URL("./typebox-stub.mjs", import.meta.url).href;

export function installHooks() {
  registerHooks({
    resolve(specifier, context, nextResolve) {
      if (specifier === "typebox") return { url: STUB_URL, shortCircuit: true };
      try {
        return nextResolve(specifier, context);
      } catch (error) {
        // Only a relative import can name a repository TypeScript file without its extension.
        if (specifier.startsWith(".") && !/\.[cm]?[jt]s$/.test(specifier)) {
          try {
            return nextResolve(`${specifier}.ts`, context);
          } catch {
            /* Fall through to the original error. */
          }
        }
        throw error;
      }
    },
  });
}
