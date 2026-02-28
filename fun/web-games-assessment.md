# Web Games Assessment for Monkey Magic AI

## What's Possible on a Static Site

The Monkey Magic AI website is hosted on GitHub Pages — a static site with no server-side processing. This constrains game development to **client-side technologies only**: HTML5 Canvas, JavaScript, CSS, SVG, and the Web Audio API. No server-side game logic, no databases, no multiplayer matchmaking.

That said, the browser is a surprisingly capable game platform. The constraints are real but the possibilities are broad.

## What Works Well

### Game Types That Are Achievable

- **Platformers** (Donkey Kong, Mario-style): Gravity, collision detection, scrolling levels — all doable in Canvas. The original arcade games ran on hardware far less powerful than a modern browser.
- **Pong / Breakout / Brick-breakers**: Simple physics, paddle controls, satisfying gameplay. Already proven with banana-pong.html.
- **Puzzle games** (Tetris, 2048, match-3): Grid-based logic, easy to implement, genuinely addictive.
- **Snake / Pac-Man clones**: Tile-based movement, straightforward collision, fun with a monkey theme.
- **Endless runners**: Side-scrolling obstacle avoidance — works well on mobile with tap controls.
- **Card / memory games**: Flip cards, matching pairs — light on performance, works on any device.
- **Turn-based games**: Quiz, trivia, text adventures — no real-time physics needed.

### Graphics Capabilities

An AI agent can draw game graphics programmatically using:

- **HTML5 Canvas 2D API**: Rectangles, circles, arcs, paths, gradients, text. Good for pixel art drawn block-by-block. This is the primary tool.
- **Pixel art via Canvas**: Drawing 16x16 or 32x32 characters by filling individual pixel blocks. Authentic retro look. This is the strength — it's how the original arcade games were drawn.
- **SVG**: Vector graphics for UI elements, menus, static scenes. Not ideal for real-time game sprites.
- **CSS animations**: Good for menus, transitions, and non-gameplay visual effects.

### What Level of Visual Quality to Expect

- **Pixel art characters**: Blocky, colourful, recognisably shaped — think NES/Game Boy era. A monkey character, barrels, platforms, collectibles — all achievable.
- **Smooth animation**: 60fps game loops via `requestAnimationFrame` — no stuttering.
- **Particle effects**: Explosions, sparks, score popups — lightweight and effective.
- **What it won't look like**: Photorealistic, hand-drawn illustration quality, or modern 3D. The strengths are in honest retro/pixel aesthetics, not in competing with professional game studios.

## What Doesn't Work (or Works Poorly)

- **Real-time multiplayer**: Requires a server (WebSocket backend, matchmaking). Not possible on a static site without external services (e.g., Firebase, Supabase).
- **Persistent leaderboards**: Scores can be saved locally (localStorage) but not shared across users without an external backend.
- **Heavy 3D (WebGL/Three.js)**: Technically possible but performance varies wildly across devices and the development effort is significant. Not recommended for a fun section.
- **Large sprite sheets or asset files**: Since assets must be hosted statically, large images or audio files will increase page load. Keep assets lean — programmatic drawing is better.
- **Mobile audio autoplay**: Browsers block autoplay of audio until user interaction. Games need a "tap to start" pattern before any sound plays.
- **Complex physics**: Full rigid-body physics engines (Box2D) can run in JS but are heavy. Simple gravity + collision is fine; ragdoll physics or fluid simulation is not worth the effort.

## Suggestions for Future Games

### 1. Barrel Dodge (Donkey Kong-style) — Already in progress
A playable Donkey Kong homage. Pixel art, platforming, barrel physics. This is the current proof of concept.

### 2. Monkey Tetris
Tetris with banana-shaped pieces and monkey-themed backgrounds. Classic gameplay, pixel art blocks, satisfying line-clear animations. Relatively straightforward to implement.

### 3. Banana Runner
Endless side-scroller where a monkey runs, jumps over obstacles, and collects bananas. Score based on distance. Simple touch controls for mobile. Low complexity, high replayability.

### 4. Monkey Memory Match
Card-matching game with monkey/banana/tech-themed illustrations. Great for younger visitors. Works perfectly on mobile. Short play sessions.

### 5. Monkey Quiz
Trivia game pulling questions from the knowledge base. Multiple choice, timed rounds, score tracking. Bridges the educational and fun sections of the site.

## Honest Level-Setting

The games will look and feel like **early 1980s to late 1980s arcade games** — which is exactly the right aesthetic for a site called Monkey Magic. Pixel art drawn programmatically will be blocky but characterful. Gameplay can be tight and responsive. The constraint is art quality, not game logic.

What an AI agent **can** do well:
- Program game mechanics (physics, collision, scoring, levels)
- Draw pixel art characters and environments block-by-block
- Create responsive controls (keyboard + touch)
- Build polished UI (menus, score displays, game over screens)

What an AI agent **cannot** do well:
- Create hand-drawn or illustrated art assets
- Produce detailed sprite animations (walk cycles, attack frames) at professional quality
- Generate audio/music (sound effects are possible via Web Audio API but will be basic beeps and tones)

The right expectation: **Authentic retro games that are fun to play**, not modern indie game quality. For a "wow that's actually playable" reaction rather than competing with Steam releases.
