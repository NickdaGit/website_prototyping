# Repository Review: website_prototyping

**Repository:** website_prototyping
**Hosted at:** monkeymagic.ai (GitHub Pages)
**Review date:** 2026-03-01

---

## 1. Repository Structure

### Root Directory

The root contains the main website pages served directly by GitHub Pages:

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero video, three section cards (About, Knowledge, Fun), search bar |
| `about.html` | About page — company missions, team grid, founder card |
| `fun.html` | Fun hub — cards linking to games, jokes, and entertainment |
| `knowledge.html` | Knowledge hub — under construction notice, POC card |
| `nicholas.html` | Nicholas bio page — photo, magazine banner, video, story text |
| `zara.html` | Zara bio page |
| `gunther.html` | Gunther bio page |
| `lila.html` | Lila bio page |
| `local.html` | Local development or testing page |
| `CNAME` | GitHub Pages custom domain configuration (monkeymagic.ai) |
| `_config.yml` | Jekyll configuration (largely bypassed by `.nojekyll`) |
| `.nojekyll` | Disables Jekyll processing — files served as-is |
| `README.md` | Repository readme |
| `.gitignore` | Git ignore rules |

### `assets/`

Static assets shared across the site:

| File | Purpose |
|------|---------|
| `monkeymagic.css` | Primary stylesheet — all page layouts, cards, grids, responsive breakpoints |
| `search.js` | Client-side search script used on the homepage |
| `daily-pick.js` | Shared logic for Joke of the Day and Wisdom of the Day — seeded PRNG, manifest fetching, card rendering, mobile carousel |
| `daily-pick.css` | Styles for the daily pick flip-card UI |

### `images/`

Contains approximately 30 image files including logos (`MM_LOGO5.PNG`), team member photos, and decorative assets. No subdirectory organisation — all images sit flat in the folder.

### `videos/`

Video files used on the site:

| File | Purpose |
|------|---------|
| `hero1.mp4` | Homepage hero background video (autoplays, loops, muted) |
| `nicholas_about.mp4` | Nicholas founder video on his bio page (user-initiated playback) |

### `fun/`

The entertainment section. Contains games, joke/wisdom libraries, and daily pick pages.

**Games (self-contained HTML files):**

| File | Description |
|------|-------------|
| `monkey-tetris.html` | Tetris clone — 10x20 grid, SRS wall kicks, ghost piece, hold, bag randomizer |
| `banana-runner.html` | Endless side-scroller — auto-running monkey, obstacles, double jump, parallax |
| `banana-pong.html` | Pong variant — banana ball, wooden paddle, angle deflection, 3 lives |
| `donkey-kong.html` | Donkey Kong arcade game — platforms, barrels, ladder climbing |
| `monkey-memory.html` | Memory match — 4x4 card grid, 8 icon pairs, star rating |
| `monkey-pacman.html` | Pac-Man style — maze, 4 ghost AI types, power pellets, level progression |

Each game is fully self-contained (inline CSS/JS, IIFE, Canvas 2D, state machine, touch controls, dark theme, Monkey Magic branding).

**Daily pick pages:**

| File | Description |
|------|-------------|
| `joke-of-the-day.html` | Picks 3 random jokes daily using seeded PRNG from the jokes manifest |
| `wisdom-of-the-day.html` | Same system for wisdoms |

**Content libraries:**

| Directory | Description |
|-----------|-------------|
| `fun/jokes/` | Joke collection organized by category. Each joke is a Markdown file with YAML frontmatter (category, title, subject, tags, author, date). Includes `jokes-manifest.json` listing all jokes. |
| `fun/wisdoms/` | Same structure as jokes but for wisdom/quote content. 6 categories, 10 items each. |

**Joke categories:** quick-hits, dad-jokes, story-jokes, tech-ai, monkey-magic-specials, absurd-surreal

**Other files:** `web-games-assessment.md` (game quality notes), `tours/ai-intro.html` (guided tour prototype), retired/old versions of index pages.

### `knowledge/`

AI learning content organized in a tiered structure:

```
knowledge/
  ai/
    beginner/
    intermediate/
    advanced/
  knowledge-base/
    beginner/
    intermediate/
    advanced/
```

Currently sparse — the Knowledge page shows an "Under Construction" style message ("Something is brewing."). This section is intended for AI education content covering topics like tokenization, prompting, and beyond.

### `poc/`

Proof of Concepts section:

| File | Description |
|------|-------------|
| `poc.html` | Currently shows "Under Construction — Hard hats required" notice |
| `homepage-variants.html` | Alternative homepage designs (retired from active use) |
| `poc-variants.css` | Styles for POC page variants |

### `change_requests/`

Change management workflow:

| File | Description |
|------|-------------|
| `how_to_process_change_requests.md` | Comprehensive workflow guide for processing change requests |
| `change_request001.md` – `change_request008.md` | Individual change requests |
| `change_request00N_completed.md` | Completion logs paired with each processed request |

### `review/`

Review and documentation files. Location for repository assessments and documentation.

---

## 2. Improvement Suggestions

### 1. Upgrade the search function to a cross-page knowledge base search

The current search (`assets/search.js`) only checks if a search term exists in the visible text of the current page and returns a generic message. It should be expanded to search across all knowledge base articles, jokes, and wisdoms using a pre-built JSON index. This would index article titles, tags, categories, and content snippets — allowing users to find relevant content across the entire site.

### 2. Expand the Knowledge section with substantive AI content

The knowledge section has the folder structure (beginner/intermediate/advanced) but very little content. Populating it with articles on core AI concepts — tokenization, neural networks, prompt engineering, large language models, embeddings, fine-tuning — would give the site genuine educational value and make the search function meaningful.

### 3. Add consistent site-wide navigation

Currently there is no shared navigation component. The homepage has section cards, game pages have a "Back to Fun" link, and bio pages have "Back to About." A lightweight sticky navigation bar (or at least a consistent header pattern) across all pages would improve wayfinding, especially on desktop.

### 4. Add meta tags for SEO and social sharing

Pages lack `<meta name="description">` tags and Open Graph (`og:title`, `og:description`, `og:image`) tags. Adding these would improve search engine visibility and generate proper link previews when shared on social media.

### 5. Organize images into subdirectories

All ~30 images sit flat in `/images/`. As the site grows, organizing them into subdirectories (`/images/team/`, `/images/logos/`, `/images/games/`) would improve maintainability.

### 6. Add a 404 page

There is no custom 404 page. GitHub Pages serves a generic one. A branded 404 page with a playful message fitting the Monkey Magic personality would improve the user experience for broken links.

### 7. Add a favicon

No favicon is configured. Adding a small monkey/banana favicon would give the site a polished appearance in browser tabs and bookmarks.

### 8. Add loading states and error handling to game pages

The games launch directly into a title screen which is good, but there's no handling for the case where the canvas isn't supported or JS fails. A simple `<noscript>` fallback and canvas support check would improve robustness.

### 9. Consider a shared game template or stylesheet

All 6 games duplicate the same CSS boilerplate (body reset, dark background, game-wrapper layout, back-link, mobile media query, logo positioning). Extracting this into a shared `game-base.css` would reduce duplication and make styling updates easier across all games.

### 10. Add analytics to understand user engagement

There appears to be no analytics tracking. Adding a lightweight, privacy-respecting analytics solution would help understand which games and content are most popular, informing future development priorities.

---

## 3. Search Function Analysis

### Location

- **Script:** `assets/search.js`
- **UI:** Bottom of `index.html` — an input field with placeholder "Search knowledge..." and a results div

### How It Works

```javascript
// Simplified flow:
1. Listens for 'input' events on #search-input
2. Takes the typed text, converts to lowercase, trims whitespace
3. Grabs ALL visible text on the current page: document.body.innerText
4. Checks if the search term exists anywhere in that text
5. If found: shows "Found something about <term> – check Knowledge or Fun sections!"
6. If not found: shows "No matches yet... but we're still building the full library!"
```

### Current Limitations

- **Single-page scope:** Only searches text visible on the current page (the homepage). It cannot find content in other pages, games, jokes, or knowledge articles.
- **No specific results:** Returns a generic "found" or "not found" message. It doesn't link to specific pages, articles, or sections.
- **No indexing:** There is no pre-built search index. The search is a live text scan of the DOM.
- **Homepage only:** The search input only appears on `index.html`. Other pages don't include it.

### Intended User Experience

The search bar is currently a **placeholder teaser** — it gives users the impression that the site has searchable content and sets up the expectation that a knowledge base is coming. When users type a term, they get back a friendly nudge toward the Knowledge or Fun sections rather than specific results.

### Expansion Path

To make the search genuinely useful:

1. **Build a search index** — Create a JSON file (`knowledge-index.json`) that lists every article, joke, wisdom, and game with their titles, tags, categories, descriptions, and URLs.
2. **Search the index** — Modify `search.js` to fetch this index on page load, then filter entries matching the search term against titles, tags, and content snippets.
3. **Return clickable results** — Show a list of matching items with titles, categories, and direct links.
4. **Extend to all pages** — Include the search bar on Knowledge and Fun pages too, or add it to a shared nav component.
5. **Fuzzy matching** — Add basic fuzzy/partial matching so "token" finds "tokenization" articles.
