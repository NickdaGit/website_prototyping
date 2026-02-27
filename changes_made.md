# Changes Made

## 2026-02-27

### Website Rebuild per monkeymagicAI.md Vision

**Renames/Backups:**
- `index.html` renamed to `index_retired.html`
- `index3.md` renamed to `index3_old.md`
- `index.md` was not found (may have been previously removed)

**New Files Created:**
- `assets/monkeymagic.css` - New light corporate theme stylesheet (white/off-white background, subdued accents, responsive design). Replaces the dark theme in `assets/style.css` for new pages.
- `index.html` - New landing page with hero video (hero1.mp4), "Monkey Magic AI" heading, 3 section cards (About, Knowledge, Fun), and search functionality.
- `about.html` - Rewritten with curious_monkeys1.mp4 hero, company mission section (Technology, Education, Fun), and clickable Meet the Team cards linking to individual bio pages.
- `gunther.html` - Bio page for Gunther (Lead Developer) with career background and personality details.
- `lila.html` - Bio page for Lila (Design Queen) with career background and personality details.
- `zara.html` - Bio page for Zara (Data Wizard) with career background and personality details.
- `knowledge.html` - Root-level knowledge landing page with curious_monkeys1.mp4 hero and "Under Construction" placeholder.
- `fun.html` - Root-level fun landing page with curious_monkeys1.mp4 hero and "Under Construction" placeholder.

**Key Changes from Previous Version:**
- Color theme changed from dark (#111, #222, #1a1a1a) to light corporate (white, #f7f8fa, subdued accents).
- Navigation simplified from nav-strip + 5-card quick-bar to 3 main section cards (About, Knowledge, Fun).
- CSS moved to `assets/monkeymagic.css` (vision document requires avoiding the filename "style").
- About page hero video changed from hero1.mp4 to curious_monkeys1.mp4.
- About page image paths fixed from `assets/` to `/images/`.
- Zara's description updated to "Followed the white rabbit" per vision document.
- Team cards made clickable with links to individual bio pages.
- Logo made clickable (links back to home) across all pages.

**Files Left Untouched:**
- `assets/style.css` - Preserved for any existing pages still referencing it.
- `assets/search.js` - Search functionality unchanged, included in new index.html.
- `index_old.html` - Previous backup preserved.
- `/fun/*` - Existing fun directory content preserved.
- `/knowledge/*` - Existing knowledge directory content preserved.
- `local.html`, `training.md` - Preserved but no longer linked from landing page.
