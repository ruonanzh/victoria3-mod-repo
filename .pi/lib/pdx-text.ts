/**
 * pdx-text - the small text helpers that the PDXScript checks share.
 *
 * PDXScript has two properties that every scanner needs: a `#` starts a comment only outside a
 * quoted string, and a string can span several physical lines (a GUI file uses that). This module is
 * the single copy of that rule, so `validate_mod`, the brace check, and the name-level checks cannot
 * drift apart.
 */

/**
 * Removes a `#` line comment that sits outside a quoted string. The string state carries across the
 * lines, and an escaped character inside a string is skipped, so `\"` does not close it.
 */
export function stripLineComments(text: string): string {
  const out: string[] = [];
  let inString = false;
  for (const line of text.split("\n")) {
    let cut = line.length;
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (inString) {
        if (ch === "\\") {
          i += 1; // The next character is escaped, so a quote there does not close the string.
          continue;
        }
        if (ch === '"') inString = false;
        continue;
      }
      if (ch === '"') {
        inString = true;
        continue;
      }
      if (ch === "#") {
        cut = i;
        break;
      }
    }
    out.push(line.slice(0, cut));
  }
  return out.join("\n");
}
