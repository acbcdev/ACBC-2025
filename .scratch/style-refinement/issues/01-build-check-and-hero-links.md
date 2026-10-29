# 01: Build check script + hero links without nested button

**What to build:** A visitor tabbing through the hero hits each LinkedIn / GitHub / Resume link exactly once, because each one is a single styled anchor and there is no `<button>` nested inside an `<a>`. External links open safely (`target="_blank"` + `rel="noopener noreferrer"`). On hover the links lift subtly with a brighter border instead of scaling to 1.1. This ticket also lays down the project's single test seam: a small plain-assertion script that runs against the built site output after `astro build`, starting with its first real assertion.

**Blocked by:** None (can start immediately)

**Status:** done

- [ ] A plain-assertion script (no test framework) parses the built index HTML and fails with a clear message on violation
- [ ] The script asserts that no `<a>` element contains a `<button>`
- [ ] The script is runnable through a package script, and the build plus the check pass
- [ ] The hero links are single anchors with the button styling applied directly; no nested button remains
- [ ] External hero links have `target="_blank"` and `rel="noopener noreferrer"`
- [ ] The hero link hover is a small lift plus a brighter border; `scale: 1.1` is gone
- [ ] `astro check` passes

## Comments

Resolved on integration branch `style-refinement`: 9ef9509 (+ review fixes f8d801e). Verified with `astro check`, `astro build`, `bun run check:build`. Manual browser check pending.
