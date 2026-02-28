# Change Request 004 - Completed

**Request:** change_request004.md
**Date completed:** 2026-02-28
**Implemented by:** Claude (AI assistant)

---

## Changes Made

### 1. Bug Fix: Daily Jokes & Wisdoms Pages (Priority)

| File | Change |
|------|--------|
| `_config.yml` | Removed the `exclude: [fun/jokes, fun/wisdoms]` directive added in CR003. The `exclude` was preventing Jekyll from copying those files to the build output at all, causing 404s when daily-pick.js tried to fetch them. |
| `.nojekyll` | **Created** — empty file at repo root. Disables Jekyll processing entirely on GitHub Pages. All files (including .md) are now served as-is with raw content intact. This is safe because the site uses no Jekyll features (no Liquid templates, no _layouts, no _includes). |

**Root cause:** The CR003 fix identified the right problem (Jekyll processing .md files) but applied the wrong solution. `exclude` removes files from the build entirely. The correct approach is `.nojekyll` which disables Jekyll so .md files are served with their raw YAML frontmatter intact.

### 2. Bug Fix: Donkey Kong Game — Black Screen

| File | Change |
|------|--------|
| `fun/donkey-kong.html` | Renamed color constant `const W = '#ffffff'` to `const WH = '#ffffff'` (line 276). The original `W` conflicted with `const W = 480` (canvas width, line 148) in the same IIFE scope, causing a JavaScript SyntaxError that prevented the entire game script from executing. |
| `fun/donkey-kong.html` | Added `.game-logo { display: none; }` inside the `@media (max-width: 520px)` block per user feedback that the logo overlaps the game area on mobile. |

### 3. POC Homepage Variants — Card-Only Toggle

| File | Change |
|------|--------|
| `poc/poc-variants.css` | Removed all variant overrides for: `body` background, `.poc-hero`, `.poc-hero-text`, `.poc-section-cards` background, `.variant-switcher`, `.poc-footer`. The toggle now only changes card appearance. |

**Variant differences (cards only):**
- **Original:** White background, 1px border `#e2e5ea`, 16px radius, 6px hover lift, subtle shadow
- **Warm:** Cream background `#fffcf7`, 2px gold border `#e0d4c2`, 20px radius, 4px hover lift, warm gold heading `#b8860b`
- **Cool:** Blue-grey background `#f2f4f8`, 1px slate border `#c0c8d8`, 8px radius, 10px hover lift, deep shadow, slate heading `#2c3e6b`

Also removed unnecessary CSS transitions from hero/footer elements since they no longer change between variants. Added `border-radius` to the card transition list for smooth switching.

### 4. Nicholas Bio — Text Correction

| File | Change |
|------|--------|
| `nicholas.html` | Changed "Monkey Business Magazine" to "Fintech Magazine" in both the image alt text and the caption overlay text. |

---

## Summary

- **Files modified:** 4 (`_config.yml`, `fun/donkey-kong.html`, `poc/poc-variants.css`, `nicholas.html`)
- **Files created:** 2 (`.nojekyll`, `change_requests/change_request004_completed.md`)

---

## Technical Notes

- **`.nojekyll`:** This file tells GitHub Pages to bypass Jekyll entirely and serve all repository files as static content. Since no page in the site uses Jekyll templating (Liquid tags, layouts, includes), this has no negative side effects. The `_config.yml` remains in the repo but is effectively ignored by GitHub Pages with `.nojekyll` present.
- **Donkey Kong `const W` bug:** In JavaScript, `const` cannot be redeclared in the same scope. Both declarations were inside the same IIFE, so the second `const W` caused a SyntaxError at parse time — before any code executed. The canvas remained black because the entire `(function() { ... })()` block failed to run.
- **POC card variants:** The hero banner, page background, and footer now remain static regardless of which variant is selected. This focuses the comparison on the card aesthetics — which is the actual design decision being explored.
