# 04: Hero rewrite

**What to build:** A recruiter landing on the page reads "Hi, I'm Camilo Blandon" in a large, tight headline, with the name in a subtle accent gradient. Below it is a two-sentence intro, and above the headline sits an "Available for work" pill with a dot indicator, so the recruiter knows in seconds who this is, what they do, and whether to reach out.

**Blocked by:** 01 (build check script), 02 (accent token), 03 (typography)

**Status:** done

- [ ] The headline reads "Hi, I'm Camilo Blandon" (typo fixed)
- [ ] The build check asserts that the headline contains "I'm Camilo Blandon" and not "I'm a Camilo"
- [ ] The headline is `5xl`, scaling to `6xl` at `md`, with tight tracking and balanced wrapping
- [ ] The name has an accent text gradient that uses the accent token
- [ ] The intro paragraph is cut to two sentences
- [ ] An "Available for work" pill with a dot indicator appears above the headline
- [ ] Build, check script and `astro check` pass
- [ ] Manual: the hero looks right at ~390px and ~1440px

## Comments

Resolved on integration branch `style-refinement`: 44cfe3b. Verified with `astro check`, `astro build`, `bun run check:build`. Manual browser check pending.
