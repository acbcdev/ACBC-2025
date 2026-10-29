# Spec: Portfolio style refinement (identity, typography, card/hero fixes)

Status: ready-for-agent

## Problem Statement

The portfolio looks like a default shadcn setup with patches on top, and nothing about it stands out. A purple accent appears only on the hero buttons and the footer heart, while everything else is default zinc gray. Four different near-black/gray values compete as backgrounds and borders, and some of them are hardcoded hex values instead of tokens. Typography is system-ui everywhere, with a random monospace on section titles. The hero headline contains a typo ("I'm a Camilo Blandon") and is undersized, and the intro paragraph is a generic wall of text.

On top of that, several real defects hurt visitors:

- On touch devices (no hover) and for keyboard users, the GitHub and live-site links on project cards are never visible, because they stay at opacity 0 until hover.
- The hero social/resume links wrap a `<button>` inside an `<a>`, which is invalid HTML and creates double focus targets.
- When a project card is hovered, its background image goes from heavily blurred to almost sharp, so the text on top becomes hardest to read at exactly the moment the visitor is interested.

## Solution

Give the site a single, consistent visual identity and fix the visibility, markup and legibility defects:

- One purple accent token, used consistently on buttons, tags, focus rings, link hovers and text selection.
- All background and border grays collapse onto the existing theme tokens. No hardcoded hex values remain in components.
- One variable sans-serif typeface (Geist or Inter) across the whole site, replacing system-ui and the stray monospace.
- A stronger hero: the typo is fixed, the headline is larger and tighter with a subtle accent gradient on the name, the intro is two lines, and an "Available for work" badge is added.
- Project card links are always visible on touch and keyboard, and hover-revealed only on pointer devices from `md` up.
- Hero links are styled anchors, with no nested button.
- Project cards get a bottom-to-top background-colored overlay so text stays legible over the sharpened image on hover.

## User Stories

1. As a recruiter, I want the headline to read correctly, so that my first impression is not a typo.
2. As a recruiter, I want the developer's name to stand out visually in the hero, so that I remember who this portfolio belongs to.
3. As a recruiter, I want a short two-line intro, so that I understand the developer's focus in seconds.
4. As a recruiter, I want an "Available for work" badge in the hero, so that I know right away whether to reach out.
5. As a visitor, I want one recognizable accent color across the site, so that it feels like a deliberate brand and not a template.
6. As a visitor, I want buttons, tags and link hovers to share the same accent, so that interactive elements are easy to recognize.
7. As a visitor, I want selected text highlighted in the accent color, so that small details feel polished.
8. As a visitor, I want backgrounds and borders to use one coherent dark palette, so that sections don't look stitched together.
9. As a visitor, I want a single modern typeface across headings, body and section titles, so that the page reads as one system.
10. As a visitor, I want the font to load without a flash of layout shift, so that the page feels fast.
11. As a mobile visitor, I want to see each project card's GitHub and live-site links without hovering, so that I can open them on my phone.
12. As a keyboard user, I want project card links to become visible when I tab into them, so that I know where focus is.
13. As a keyboard user, I want a visible accent-colored focus ring on every link and button, so that I can navigate without a mouse.
14. As a desktop visitor, I want card links to appear on hover, so that the cards stay clean until I engage with them.
15. As a screen-reader user, I want each hero link to be a single focusable link, so that I don't hit a nested button.
16. As a visitor hovering a project card, I want the title, description and tags to stay readable over the sharper image, so that the hover effect doesn't punish my interest.
17. As a visitor without hover (touch), I want card text to be readable at rest, so that the overlay doesn't depend on hover.
18. As the site owner, I want colors defined only as theme tokens, so that changing the accent later is a single-place edit.
19. As the site owner, I want `astro check` and `astro build` to keep passing, so that the deploy never breaks.
20. As the site owner, I want a small automated check over the built HTML, so that these defects can't silently come back.

## Implementation Decisions

- **Accent token:** in the dark theme, the theme's accent and primary-ring tokens are redefined around a purple derived from the existing hero-button purple (`#2d2154` as the dark end, plus a brighter variant for text and rings). The local `--primary` override inside the hero button component is removed, and the button consumes the global token instead.
- **Gray consolidation:** the custom dark background color token and every inline `#373739` border become the existing border/muted tokens. The background canvas fill color matches the background token, and the canvas logic itself stays unchanged.
- **Global polish rules** (in the base layer of the global stylesheet): `::selection` uses the accent, and `accent-color` plus a `focus-visible` ring use the ring token.
- **Typography:** add one variable font package (`@fontsource-variable/geist` preferred; Inter as fallback if Geist rendering is unsatisfactory). Import it once in the layout and register it as the Tailwind sans font in the theme. Remove the system-ui stack from the layout and `font-mono` from the section title component.
- **Hero:** the headline becomes "Hi, I'm Camilo Blandon", sized up to `5xl`/`6xl` at `md` with tight tracking and balanced wrapping. The name span gets an accent text gradient. The intro is cut to two sentences, and an "Available for work" pill with a dot indicator sits above the headline.
- **Hero links:** the button component becomes an anchor-capable component, or its classes are applied directly to the `<a>`. Either way, the rendered markup must have no `<button>` inside an `<a>`. External links get `target="_blank"` and `rel="noopener noreferrer"`.
- **Card links visibility:** the card link group is visible by default. Opacity 0 and hover reveal apply only from the `md` breakpoint, and `focus-within` always forces it visible.
- **Card legibility:** the bento card adds an overlay layer between the background image and the content, as a linear gradient from the background color (high opacity) at the bottom to transparent at the top. It is present at rest and on hover.
- **Hover scale on the hero buttons** is reduced from 1.1 to a subtle lift (small negative translate plus a brighter border). Other hover effects stay as they are in this spec.

## Testing Decisions

- **One seam: the built site.** Tests only observe the external output (`astro check`, `astro build`, and the HTML/CSS emitted to the build output directory), never component internals.
- **Automated check:** a single small script with plain assertions, no test framework, run after the build. It parses the built index HTML and asserts that:
  - no `<a>` element contains a `<button>`;
  - the project card link group carries the mobile-visible / `md`-gated hover / `focus-within` classes, and is not unconditionally `opacity-0`;
  - the hero headline contains "I'm Camilo Blandon" and does not contain "I'm a Camilo";
  - built component markup contains no hardcoded `#373739` or `#2d2154`.
- **Manual visual check:** in a browser at mobile (~390px) and desktop (~1440px) widths, verify the accent consistency, the font, the hero layout, card overlay legibility at rest and on hover, and keyboard tab order and focus rings.
- **Prior art:** none. The repo currently has no tests, and this script is the first one.

## Out of Scope

- Replacing the canvas background with pure CSS, or fixing its resize behavior.
- Layout width changes (the percentage-based container) and section spacing scale.
- Skills chip sizing and the Tailwind v3 → v4 gradient syntax migration.
- Scroll-driven reveal animations and `prefers-reduced-motion` handling.
- Reducing hover scale on Skills chips and bento cards.
- Removing dead code (old carousel section, old card, card image, React button) and the React/Radix/CVA dependencies.
- Turning the repeated bento card blocks into a mapped list.
- Duplicate meta tags between the layout and the SEO component.
- Light theme. The site remains dark-only.

## Further Notes

- The accent choice is purple, picked for continuity with the existing hero buttons and footer heart. A warm accent (amber/lime) was considered for differentiation and rejected for this pass because it would require redesigning the hero buttons.
- The out-of-scope items come from the same style review and are good candidates for follow-up specs.
