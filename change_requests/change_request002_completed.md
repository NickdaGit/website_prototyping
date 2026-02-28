# Change Request 002 — Completed

## Summary
13 changes across site structure edits, a bug fix, 3 new game builds, and text corrections.

## Changes Made

### Site Structure Changes

1. **fun.html** — Removed Wisdom of the Day card and Proof of Concepts card. Added 4 new cards: Donkey Kong, Monkey Memory Match, Monkey Pac-Man, Banana Pong. Final card order: Jokes of the Day, Monkey Tetris, Banana Runner, Donkey Kong, Monkey Memory Match, Monkey Pac-Man, Banana Pong.

2. **poc/poc.html** — Replaced both section cards (Homepage Variants + Donkey Kong) with an Under Construction notice including "Hard hats required" message.

3. **knowledge.html** — Changed "Something curious is brewing." to "Something is brewing." Added a Proof of Concepts card below the Under Construction section, linking to `/poc/poc.html`.

4. **about.html** — Trimmed Nicholas description to end at "Eccentric Austrian who wears lederhosen a little too much." Removed the additional "they go with the hat" text.

5. **nicholas.html** — Removed `<p>Fintech Magazine — Cover Story</p>` from the magazine banner caption. Only `<h1>Nicholas</h1>` remains.

### Bug Fix

6. **fun/donkey-kong.html** — Fixed barrel bug where barrels would get stuck on the top platform (P5) instead of falling to P4. Root cause: barrel reversed direction when rolling off edge, moved back into P5's x-range on next frame, and re-landed. Fix: added `lastPlatform` tracking to skip the originating platform in the landing check after a barrel falls off an edge.

### New Games

7. **fun/monkey-memory.html** — New card-matching memory game. 4x4 grid with 8 pairs of monkey-themed pixel art icons (banana, monkey, coconut, palm, star, barrel, hat, heart). Tracks moves, matches, and time. Star rating on win (3 stars for 16 or fewer moves). Click/tap to flip cards.

8. **fun/monkey-pacman.html** — New Pac-Man style maze game. Monkey character navigates a 21-column maze eating banana dots. 4 ghosts with distinct AI behaviours (Blinky chases, Pinky ambushes, Inky uses complex targeting, Clyde patrols). Power pellets make ghosts vulnerable. 3 lives, level progression with increasing ghost speed. Scoring: 10/dot, 50/power pellet, 200-1600 for ghost combos. Mobile d-pad touch controls.

9. **fun/banana-pong.html** — Complete rewrite of the original basic pong game. Now uses modern self-contained architecture (480x400 canvas, IIFE, dark theme). Features: banana-shaped ball with rotation, wooden paddle with grain detail, angle-based deflection based on paddle hit position, speed increases every 5 hits, 3 lives system, particle effects on paddle hit, localStorage high score, mouse/touch/keyboard controls, title screen and game over screen.

## Files Modified
| File | Action |
|------|--------|
| `fun.html` | Edited — removed 2 cards, added 4 cards |
| `poc/poc.html` | Edited — Under Construction notice |
| `knowledge.html` | Edited — text change + POC card |
| `about.html` | Edited — trimmed Nicholas text |
| `nicholas.html` | Edited — removed caption text |
| `fun/donkey-kong.html` | Edited — barrel lastPlatform bug fix |
| `fun/monkey-memory.html` | Created — memory match game |
| `fun/monkey-pacman.html` | Created — Pac-Man style game |
| `fun/banana-pong.html` | Rewritten — improved pong game |
