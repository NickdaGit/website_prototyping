# Change Request 001 - Completed

**Request:** change_request001.md
**Date completed:** 2026-02-28
**Implemented by:** Claude (AI assistant)

---

## Changes Made

### 1. Cosmetic Fixes

| File | Change |
|------|--------|
| `assets/monkeymagic.css` | Mobile logo (≤768px): width 20vw→13vw, min-width 110px→70px, overlay top 15px→8px, left 15px→5px |
| `index.html` | About card text changed from "Who we are and what we do" to "Monkey Magic AI" |
| `about.html` | Hero subtitle changed from "Who we are and what we do" to "Monkey Magic AI" |

### 2. Jokes Library

Created `/fun/jokes/` with 73 files:

| Path | Description |
|------|-------------|
| `fun/jokes/context.md` | Library context document |
| `fun/jokes/suggestions.md` | TODOs and future suggestions |
| `fun/jokes/jokes-manifest.json` | JSON index of all 70 jokes (absolute paths) |
| `fun/jokes/quick-hits/001.md–010.md` | 10 quick-hit one-liners |
| `fun/jokes/dad-jokes/001.md–010.md` | 10 dad jokes |
| `fun/jokes/story-jokes/001.md–010.md` | 10 story/narrative jokes |
| `fun/jokes/tech-ai/001.md–010.md` | 10 tech and AI jokes |
| `fun/jokes/monkey-magic-specials/001.md–010.md` | 10 Monkey Magic brand jokes |
| `fun/jokes/dark-humor/001.md–010.md` | 10 dark humor jokes |
| `fun/jokes/absurd-surreal/001.md–010.md` | 10 absurd/surreal jokes |

Each .md file has YAML frontmatter: category, title, subject, tags, author ("Nicholas"), date.

### 3. Wisdoms Library

Created `/fun/wisdoms/` with 63 files:

| Path | Description |
|------|-------------|
| `fun/wisdoms/context.md` | Library context document |
| `fun/wisdoms/suggestions.md` | TODOs and future suggestions |
| `fun/wisdoms/wisdoms-manifest.json` | JSON index of all 60 wisdoms (absolute paths) |
| `fun/wisdoms/life-hacks/001.md–010.md` | 10 practical life hacks |
| `fun/wisdoms/tech-wisdom/001.md–010.md` | 10 tech/developer wisdoms |
| `fun/wisdoms/monkey-magic-moments/001.md–010.md` | 10 Monkey Magic brand wisdoms |
| `fun/wisdoms/quiet-truths/001.md–010.md` | 10 reflective quiet truths |
| `fun/wisdoms/witty-one-liners/001.md–010.md` | 10 witty one-liners |
| `fun/wisdoms/big-picture/001.md–010.md` | 10 big-picture philosophical wisdoms |

Each .md file has YAML frontmatter: category, title, subject, tags, author ("Gunther"), date.

### 4. Interactive Daily Pages

| File | Description |
|------|-------------|
| `assets/daily-pick.js` | Shared JS module: date-seeded PRNG, manifest loading, .md parsing, flip card rendering, mobile carousel |
| `assets/daily-pick.css` | Shared CSS: flip cards (3D transforms), carousel dots/nav, responsive layout, wisdom-mode variant |
| `fun/joke-of-the-day.html` | Joke of the Day page — loads 3 daily jokes via manifest, flip-to-reveal punchline |
| `fun/wisdom-of-the-day.html` | Wisdom of the Day page — loads 3 daily wisdoms via manifest, flip-to-reveal content |

### 5. Proof of Concepts

| File | Description |
|------|-------------|
| `poc/poc.html` | Under Construction placeholder with hero video |

### 6. Fun Landing Page

| File | Change |
|------|--------|
| `fun.html` | Removed Under Construction section. Added 3 section cards: Jokes of the Day, Wisdom of the Day, Proof of Concepts |

---

## Summary

- **Files modified:** 3 (monkeymagic.css, index.html, about.html)
- **Files created:** ~139 (130 content .md, 2 manifest .json, 2 context .md, 2 suggestions .md, 2 HTML daily pages, 1 JS, 1 CSS, 1 PoC HTML, updated fun.html)
- **Categories:** 7 joke categories, 6 wisdom categories
- **Total content items:** 70 jokes + 60 wisdoms = 130

---

## Technical Notes

- Daily selection uses a date-seeded pseudo-random number generator for deterministic daily picks on a static site (no server-side logic needed)
- Manifest JSON files use absolute paths (e.g., `/fun/jokes/quick-hits/001.md`) for correct resolution from any page location
- Flip cards use CSS 3D transforms (perspective, rotateY, backface-visibility) — no framework dependencies
- Mobile carousel supports touch swipe navigation
- All pages use vanilla JS + CSS only, consistent with the project vision
