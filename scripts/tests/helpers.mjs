// Shared helpers for the two test entry points.
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

/** The repository root: this file is at `<root>/scripts/tests/helpers.mjs`. */
export const repoRoot = resolve(import.meta.dirname, "..", "..");
/** The committed error cases. */
export const fixtureRoot = join(import.meta.dirname, "fixtures");

/** Imports a repository module by its repository-relative path. */
export async function loadModule(relativePath) {
  return import(pathToFileURL(join(repoRoot, relativePath)).href);
}

/** Imports one extension and returns the tool that it registers. */
export async function loadTool(relativePath) {
  const mod = await loadModule(relativePath);
  let tool;
  mod.default({
    registerTool(registered) {
      tool = registered;
    },
  });
  if (!tool) throw new Error(`${relativePath} registered no tool`);
  return tool;
}

/**
 * Calls a tool the way the agent host does. A tool error is returned, not thrown, so a test can
 * assert on the error path without a try/catch around every call.
 */
export async function runTool(relativePath, params = {}, cwd = repoRoot) {
  const tool = await loadTool(relativePath);
  try {
    const result = await tool.execute("test", params, undefined, undefined, { cwd });
    return {
      name: tool.name,
      text: result.content.map((item) => item.text ?? "").join("\n"),
      details: result.details,
      threw: false,
      error: null,
    };
  } catch (error) {
    return {
      name: tool.name,
      text: "",
      details: null,
      threw: true,
      error: String(error instanceof Error ? error.message : error),
    };
  }
}

export function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

export function assertIncludes(haystack, needle, label) {
  if (!String(haystack).includes(needle)) {
    throw new Error(`${label}: expected to find ${JSON.stringify(needle)} in:\n${haystack}`);
  }
}

/** A compact one-line description of semantic warnings, for a failure message. */
export function summarizeWarnings(warnings) {
  if (warnings.length === 0) return "(none)";
  return warnings
    .map((warning) => `${warning.level}:${warning.code}:${warning.message.slice(0, 120)}`)
    .join(" | ");
}

/**
 * Runs the test functions in order and reports every result. Each function gets a fresh scope; a
 * thrown error becomes a failed test and does not stop the run.
 */
export async function runSuite(title, tests) {
  console.log(title);
  const failures = [];
  for (const [name, fn] of tests) {
    try {
      await fn();
      console.log(`ok - ${name}`);
    } catch (error) {
      failures.push({ name, error });
      console.log(`not ok - ${name}`);
      console.log(`  ${String(error instanceof Error ? error.message : error).split("\n").join("\n  ")}`);
    }
  }
  console.log("");
  if (failures.length > 0) {
    console.log(`${failures.length} of ${tests.length} failed`);
    process.exitCode = 1;
  } else {
    console.log(`all ${tests.length} passed`);
  }
  return failures.length === 0;
}
