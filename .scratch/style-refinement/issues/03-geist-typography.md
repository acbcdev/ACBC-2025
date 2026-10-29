# 03: Geist typography

**What to build:** The visitor reads the whole page (headings, body, section titles) in one modern variable typeface, with no layout flash on load. One variable font package is added (Geist preferred, Inter as fallback if Geist renders poorly), imported once in the layout and registered as the Tailwind sans font in the theme. The system-ui stack and the stray `font-mono` on section titles are removed.

**Blocked by:** None (can start immediately)

**Status:** done

- [ ] Exactly one font dependency is added
- [ ] The font is registered as the theme's sans font, and no inline font-family stack remains in the layout
- [ ] Section titles no longer use `font-mono`
- [ ] Build and `astro check` pass
- [ ] Manual: headings, body and titles all render in the new font, with no visible layout shift on load

## Comments

Resolved on integration branch `style-refinement`: bc79d98. Verified with `astro check`, `astro build`, `bun run check:build`. Manual browser check pending.
