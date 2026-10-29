# 05: Project cards: links visible on touch/keyboard + legibility overlay

**What to build:** On a phone, the visitor sees each project card's GitHub and live-site links without hovering. A keyboard user tabbing into a card sees the links appear. On desktop (`md` and up), the links stay hidden until hover. Card text stays readable both at rest and on hover, thanks to a bottom-to-top background-colored gradient overlay between the background image and the content.

**Blocked by:** 01 (build check script)

**Status:** done

- [ ] The card link group is visible by default; opacity 0 plus hover reveal apply only from `md`, and `focus-within` always forces it visible
- [ ] The build check asserts that the card link group is not unconditionally `opacity-0` and carries the `md`-gated and `focus-within` classes
- [ ] The bento card has a gradient overlay (background color at high opacity at the bottom, transparent at the top) that is present at rest and on hover
- [ ] Build, check script and `astro check` pass
- [ ] Manual: at ~390px the links are visible without interaction; on desktop the links appear on hover; tab focus shows the links; text is legible on hover over the sharpened image

## Comments

Resolved on integration branch `style-refinement`: cc98023 (+ review fixes f8d801e). Verified with `astro check`, `astro build`, `bun run check:build`. Manual browser check pending.
