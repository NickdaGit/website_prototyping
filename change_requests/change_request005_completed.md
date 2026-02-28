# Change Request 005 - Completed

**Request:** change_request005.md
**Date completed:** 2026-02-28
**Implemented by:** Claude (AI assistant)

---

## Changes Made

### 1. Monkey Tetris Game

| File | Change |
|------|--------|
| `fun/monkey-tetris.html` | **Created** — fully playable Tetris game with all standard mechanics. |

**Game features:**
- **10×20 grid** with all 7 standard tetrominoes (I, O, T, S, Z, J, L)
- **SRS rotation** with wall kick tables for both standard and I-piece
- **Ghost piece** — semi-transparent preview of landing position
- **Next piece preview** — displayed in the side panel
- **Hold piece** — press C or Shift to store a piece (once per drop)
- **Hard drop** (Space) and **soft drop** (Down arrow) with scoring
- **DAS (Delayed Auto Shift)** — holding left/right auto-repeats after initial delay, matching standard Tetris feel
- **Lock delay** — piece sits briefly before locking, with reset on successful moves (up to 15 resets)
- **Bag randomiser** — 7-bag system ensures all pieces appear before repeating
- **Line clear animation** — flashing white effect before rows collapse
- **Level progression** — speed increases every 10 lines, NES Tetris-inspired speed curve
- **Scoring** — 100/300/500/800 points for 1/2/3/4 lines (×level multiplier), +2 per hard drop cell, +1 per soft drop cell
- **Mobile touch controls** — left, right, down, rotate, hold, and drop buttons
- **Monkey Magic theming** — banana-yellow accents, brand colour palette, styled side panel
- **Responsive** — logo hidden on mobile (≤520px), touch controls appear on touch devices

### 2. Fun Page Update

| File | Change |
|------|--------|
| `fun.html` | Added "Monkey Tetris" card between "Wisdom of the Day" and "Proof of Concepts". |

---

## Summary

- **Files created:** 2 (`fun/monkey-tetris.html`, `change_requests/change_request005_completed.md`)
- **Files modified:** 1 (`fun.html`)

---

## Technical Notes

- **Self-contained architecture:** All CSS and JS are inline in a single HTML file, following the same pattern as `donkey-kong.html`. No external CSS dependencies (does not load `monkeymagic.css`). Only external references: Google Fonts and the logo image.
- **IIFE scope:** All game code runs inside an immediately-invoked function expression with `'use strict'` to avoid polluting the global scope and to catch variable errors early.
- **Variable naming:** All constants use descriptive names (COLS, ROWS, CELL, GRID_W, etc.) to avoid the `const W` collision bug that affected Donkey Kong.
- **SRS wall kicks:** The Super Rotation System is the modern Tetris standard. Without it, pieces refuse to rotate near walls, which feels broken. The implementation includes the full kick table for all rotation transitions.
- **Bag randomiser:** Each "bag" contains all 7 pieces shuffled. This ensures the player sees every piece type exactly once per cycle, preventing frustrating droughts.
- **Canvas layout:** 240px game grid (10 × 24px cells) + 12px gap + 120px side panel = 372px total width. 480px tall (20 × 24px cells). Compact enough for mobile screens.
