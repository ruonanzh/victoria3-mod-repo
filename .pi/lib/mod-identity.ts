/**
 * The mod identity check. mod-lint and mod-install share this copy, so the two cannot drift apart.
 *
 * Game rule (the Victoria 3 wiki metadata page): the `id` is a non-empty string
 * ("Id of the mod, as chosen by the modder. This must be unique"). "The id equals the directory
 * name, in lower_snake_case" is a suggestion from this repository, and this file does not enforce
 * it. If the two tools disagree on what counts as valid, validate_mod reports a mod as installable
 * and install_mod then fails.
 *
 * An empty `id` is a WARNING, not a failure. Steam fills the field on upload, and 4 of the 10
 * downloaded Workshop mods ship it empty while loading and installing perfectly. The launcher
 * identifies a local mod by its directory, not by the id, so an install must not be blocked on it.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

/** The id check. Game rule: a non-empty string. */
export const isValidModId = (v: unknown): v is string => typeof v === "string" && v.trim() !== "";

export interface ModIdentity {
  /** The player-visible title from `metadata.name`, falling back to the directory name. */
  name: string;
  version: string;
  /** The declared id, or an empty string. */
  id: string;
  /** True when `metadata.id` is missing or empty. The caller reports it as a WARN, never a FAIL. */
  idMissing: boolean;
}

/**
 * Read the identity from `.metadata/metadata.json`.
 * Returns null only when the file is absent, the JSON is invalid, or the top level is not an object:
 * those are the conditions that make an install impossible. A missing `id` is reported through
 * `idMissing`, so the two tools apply the same rule.
 */
export function readModIdentity(modDir: string, dirName?: string): ModIdentity | null {
  const metadataPath = join(modDir, ".metadata", "metadata.json");
  if (!existsSync(metadataPath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(metadataPath, "utf8")) as Record<string, unknown>;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    const id = typeof parsed.id === "string" ? parsed.id.trim() : "";
    const title = typeof parsed.name === "string" ? parsed.name.trim() : "";
    const fallback = dirName?.trim() || "";
    return {
      name: title || id || fallback,
      version: typeof parsed.version === "string" ? parsed.version.trim() : "",
      id,
      idMissing: !isValidModId(id),
    };
  } catch {
    return null;
  }
}
