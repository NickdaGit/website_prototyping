# Change Request 006 - Completed

**Request:** change_request006.md
**Date completed:** 2026-02-28
**Implemented by:** Claude (AI assistant)

---

## Changes Made

### 1. Banana Runner Game

| File | Change |
|------|--------|
| `fun/banana-runner.html` | **Created** — fully playable endless side-scrolling runner game. |

**Game features:**
- **Endless side-scroller** — monkey auto-runs through a jungle, player controls jumping
- **Variable jump height** — hold Space/tap longer for higher jumps, release early for short hops
- **Double jump** — second jump allowed mid-air for extra reach and recovery
- **Obstacles** — single crates, double-stacked crates, and rocks. Contact = game over.
- **Ground gaps** — missing ground sections at higher speeds that the player must jump over
- **Banana collectibles** — floating bananas at various heights with gentle bob animation. +50 points each.
- **Parallax scrolling** — 3-layer background (stars/sky, far hills, mid trees) for depth
- **Speed progression** — game accelerates from 3.5px/frame to max 9px/frame as distance increases
- **Pixel art monkey** — 4×6 grid at 4x scale with 4 run frames, jump pose, and death frame
- **Scoring** — distance (metres) + banana bonus. Total displayed in HUD.
- **High score** — persisted in localStorage across sessions
- **Mobile touch controls** — single JUMP button, plus tap-on-canvas to jump
- **Monkey Magic theming** — jungle colour palette, banana-yellow accents, brand colours
- **Logo** — hidden on mobile (≤520px), same pattern as other games

### 2. Fun Page Update

| File | Change |
|------|--------|
| `fun.html` | Added "Banana Runner" card between "Monkey Tetris" and "Proof of Concepts". |

---

## Summary

- **Files created:** 2 (`fun/banana-runner.html`, `change_requests/change_request006_completed.md`)
- **Files modified:** 1 (`fun.html`)

---

## Technical Notes

- **Self-contained architecture:** All CSS and JS inline in a single HTML file, following the established pattern. No external CSS dependencies.
- **IIFE with 'use strict':** All game code is scoped and strict-mode enabled.
- **Parallax scrolling:** Three layers scroll at 0.05×, 0.5×, and 1× game speed. Hills drawn with quadratic Bézier curves, trees with circles. All procedural — no image assets.
- **Ground gap system:** Ground is segmented. At higher speeds, gaps appear that the monkey falls through. Gaps don't spawn too close together (cooldown prevents unfair clustering).
- **Obstacle fairness:** Minimum spawn interval ensures the player always has reaction time. Obstacles never spawn on top of ground gaps.
- **Variable jump:** Jump power is applied instantly, but reduced gravity while the button is held (up to 12 frames). This creates the classic "tap for short hop, hold for big jump" feel.
- **Canvas dimensions:** 480×320 (landscape ratio) suits the side-scrolling format. Scales responsively on mobile via `max-width: 100%`.
- **localStorage:** High score saved with `try/catch` to handle situations where localStorage is unavailable (private browsing, etc).
