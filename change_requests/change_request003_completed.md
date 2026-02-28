# Change Request 003 - Completed

**Request:** change_request003.md
**Date completed:** 2026-02-28
**Implemented by:** Claude (AI assistant)

---

## Changes Made

### 1. Bug Fix: Daily Jokes & Wisdoms Pages Not Populating

| File | Change |
|------|--------|
| `_config.yml` | Added `exclude: [fun/jokes, fun/wisdoms]` to prevent Jekyll from processing .md content files into HTML. The daily-pick.js fetches raw .md files and parses YAML frontmatter — Jekyll was converting them to HTML, breaking the parser. |

**Root cause:** Jekyll (kramdown) was processing all `.md` files in the repository, including the joke and wisdom library files. When `daily-pick.js` fetched these files, it received rendered HTML instead of raw markdown with YAML frontmatter, causing `parseMd()` to fail silently and display no content.

### 2. Nicholas Added to About Page

| File | Change |
|------|--------|
| `about.html` | Added new "The Founder" section below "Meet the Team" with a clickable card for Nicholas. Uses `GUNTHER2.JPG` as placeholder image. Card links to `/nicholas.html`. Description includes Founder/Visionary/Angel Investor title and the lederhosen/hat quote. |

### 3. Nicholas Bio Page

Created `nicholas.html` — a distinct bio page for the founder, different from the standard team bio pages:

| File | Description |
|------|-------------|
| `nicholas.html` | Full-width magazine cover banner using `Nicholas_magazine01.jpg` with gradient overlay and "Monkey Business Magazine — Cover Story" caption. Bio sections: "The Man Behind the Monkey" (intro, lederhosen), "The Great Banana Crisis of '08" (banana derivatives empire, catastrophic crash, napkin sketch origin story), "The Comeback" (rebuilding from Graz, Monkey Magic AI founding). Video placeholder section: "Let's Hear from Our Founder" with coming-soon message and play icon. Inline CSS for magazine banner and video container. |

### 4. POC Homepage Variants

| File | Description |
|------|-------------|
| `poc/homepage-variants.html` | Cloned homepage layout with 3-button style toggle: Original (blue gradient hero, white cards), Warm (cream/gold tones, subtler hover, off-white background), Cool (slate blue gradient, deeper shadows, pronounced 10px hover lift). All styles transition smoothly (0.4s ease). Cards are non-linking display copies. Gradient hero instead of video to keep POC lightweight. |
| `poc/poc-variants.css` | Self-contained stylesheet with all POC-scoped classes (`poc-hero`, `poc-section-card`, etc.). Variant styles via `body.variant-warm` and `body.variant-cool` class toggles. Fully isolated — no impact on the rest of the site. Responsive with mobile breakpoint at 768px. |

### 5. POC Landing Page Updated

| File | Change |
|------|--------|
| `poc/poc.html` | Replaced "Under Construction" section with section cards: "Homepage Variants" (links to `/poc/homepage-variants.html`) and "Donkey Kong" (links to `/fun/donkey-kong.html`). |

### 6. Web Games Assessment

| File | Description |
|------|-------------|
| `fun/web-games-assessment.md` | Honest assessment of browser game capabilities on a static site. Covers: achievable game types (platformers, puzzle, endless runners, card games), graphics capabilities (Canvas 2D pixel art, SVG, CSS), quality expectations (NES/Game Boy era pixel art, not modern indie), limitations (no multiplayer, no persistent leaderboards, mobile audio restrictions), 5 game suggestions (Barrel Dodge, Monkey Tetris, Banana Runner, Monkey Memory Match, Monkey Quiz), and level-setting on what AI agents can/cannot produce. |

### 7. Donkey Kong Game

| File | Change |
|------|--------|
| `fun/donkey-kong.html` | Full overwrite. Replaced static SVG with a playable Donkey Kong-style platformer game. HTML5 Canvas with inline JS/CSS. Features: 5 sloped girder platforms with ladders, pixel art gorilla (8x8 grid, 3 animation states: idle/pound/throw), pixel art player character (4x6 grid, walk/climb animations, directional facing), rolling barrels with rotation markers, golden banana goal at top, gravity/collision/jump physics, scoring (100pts per barrel dodge, 500+ per level), 3 lives, level progression with increasing barrel speed/frequency, title screen, game over screen, level complete screen. Touch controls for mobile (d-pad + jump button). Self-contained with no external CSS dependencies. |

---

## Summary

- **Files modified:** 3 (`_config.yml`, `about.html`, `poc/poc.html`)
- **Files created:** 5 (`nicholas.html`, `poc/homepage-variants.html`, `poc/poc-variants.css`, `fun/web-games-assessment.md`, `change_requests/change_request003_completed.md`)
- **Files overwritten:** 1 (`fun/donkey-kong.html` — static SVG replaced with playable game)

---

## Technical Notes

- **Jekyll exclude fix:** The `exclude` directive in `_config.yml` tells Jekyll to skip the specified directories entirely. The raw `.md` files are served as-is, which is what `daily-pick.js` expects. This fix only excludes the content library directories — other `.md` files in the repo continue to be processed by Jekyll normally.
- **Nicholas page differs from standard bios:** Uses a static image banner (not video hero) with CSS gradient overlay for the caption. The video placeholder section uses a contained layout (max-width 640px) rather than full-bleed, since the actual video will be an inline player with sound — not a background hero element.
- **POC CSS isolation:** All POC styles use `poc-` prefixed class names to avoid any collision with `monkeymagic.css`. The `homepage-variants.html` page loads only `poc-variants.css` — it does not load `monkeymagic.css` at all.
- **Style toggle mechanism:** Uses CSS class toggling on `<body>` (`variant-warm`, `variant-cool`) with all variant overrides scoped to those classes. All visual properties have `transition: 0.4s ease` for smooth switching.
- **Donkey Kong game architecture:** Single IIFE containing all game logic. 60fps `requestAnimationFrame` loop with state machine (title/playing/levelComplete/gameOver). Pixel art drawn via `fillRect` calls on 2D arrays. Platforms have configurable slope directions for authentic barrel-rolling behaviour. Barrel speed and spawn frequency increase with level number.
