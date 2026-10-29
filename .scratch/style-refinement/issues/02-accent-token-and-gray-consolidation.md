# 02: Purple accent token + gray consolidation + selection/focus ring

**What to build:** The visitor sees one recognizable purple accent across the site (buttons, tags, link hovers, focus rings, text selection), and backgrounds and borders read as one coherent dark palette. The dark theme's accent and ring tokens are redefined around the existing hero purple (dark end plus a brighter variant for text and rings). Components consume tokens only, with no hardcoded hex values. The background canvas fill matches the background token, and the canvas logic is untouched.

**Blocked by:** 01 (build check script)

**Status:** done

- [ ] The accent and ring tokens in the dark theme are purple; the hero button no longer overrides `--primary` locally
- [ ] The custom dark-gray color token and every inline `#373739` border are replaced with the existing border/muted tokens
- [ ] `::selection` uses the accent, and `accent-color` plus a global `focus-visible` ring use the ring token
- [ ] Card tags and link hovers use the accent
- [ ] The build check asserts that built markup contains no `#373739` or `#2d2154`
- [ ] Build, check script and `astro check` pass
- [ ] Manual: at mobile and desktop widths, the accent looks consistent and no section looks like a different gray

## Comments

Resolved on integration branch `style-refinement`: f270313. Verified with `astro check`, `astro build`, `bun run check:build`. Manual browser check pending.
