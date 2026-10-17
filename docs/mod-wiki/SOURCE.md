# Where this snapshot comes from

The pages in this directory are **not written by this repository**. They are the Victoria 3 wiki's
modding documentation, converted to Markdown.

## Origin

| Item | Value |
|---|---|
| Upstream wiki | <https://vic3.paradoxwikis.com/Modding> |
| Snapshot repository | <https://github.com/Zinc-30/Victoria3_wiki> |
| Snapshot commit | `c8d7206` (the repository's only commit, 2026-05-18) |
| Crawl method | The snapshot's own `crawl_wiki.py`: Playwright to pass the wiki's JS challenge, then the MediaWiki API |
| Pages taken | 69: `Modding`, every `* modding` page, the scripting reference, the pages those link to, and six reference lists (buildings, production methods, state regions, culture modifier types, example script values, GUI script functions) |
| Pages left out | 537: country, state, flag, and other game-content pages that a modder does not need |

## License

The wiki text is published by the Paradox Wikis editors under **Creative Commons
Attribution-Share Alike 3.0 Unported (CC BY-SA 3.0)**: <https://creativecommons.org/licenses/by-sa/3.0/>.
That covers every page in this directory. The surrounding repository (tools, skills, conventions) is
not part of that license.

This arrangement follows the CK3 precedent, `jesec/ck3-modding-wiki`, which publishes the same kind
of snapshot with the same license split.

## How fresh it is

Each page states its own status, and the crawl kept that line. Most modding pages say "verified for
the current version (1.13)", which matches the installed game (`1.13.11 (Matcha)`). A page that says
it needs verification may lag a patch behind.

**The vanilla scripts win a conflict.** When a page and `game-scripts/` disagree about a name or a
value, `game-scripts/` is right: it is the installed game's own text.

## Link rewriting

Inside the set, the crawler's relative links are kept. Links to pages outside the set were rewritten
to point at `https://vic3.paradoxwikis.com/<page>`, so no link in this directory is dead in a way the
reader cannot follow. 2,687 links were rewritten this way.

## How to refresh

This directory is a snapshot, not a mirror. To refresh it:

1. Clone the snapshot repository: `git clone --depth 1 https://github.com/Zinc-30/Victoria3_wiki`.
2. Copy the same 69 page names from `wiki_clean/` into this directory. **Do not delete
   `INDEX.md`, `SOURCE.md`, or this file**; they are hand-written.
3. Re-run the link rewrite: any relative link to `Page.md` whose target is not in the directory
   becomes `https://vic3.paradoxwikis.com/Page`.
4. Update the snapshot commit and date in the table above.

Do not crawl `vic3.paradoxwikis.com` directly with a script: the site serves a JavaScript challenge,
and hammering it is rude. Use the snapshot, or one browser visit when a single page matters.
