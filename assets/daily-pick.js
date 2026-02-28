/**
 * daily-pick.js - Shared logic for Joke of the Day and Wisdom of the Day pages
 *
 * Usage:
 *   DailyPick.init({
 *     manifestUrl: '/fun/jokes/jokes-manifest.json',
 *     containerId: 'daily-cards',
 *     dotsId: 'carousel-dots',
 *     count: 3,
 *     mode: 'joke' // or 'wisdom'
 *   });
 */
const DailyPick = (() => {

  // Deterministic pseudo-random number generator seeded by date string
  function seededRandom(seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) {
      h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
    }
    return function() {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      h ^= h >>> 16;
      return (h >>> 0) / 4294967296;
    };
  }

  // Get today's date as a stable string seed
  function todaySeed(mode) {
    const d = new Date();
    const dateStr = d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
    return dateStr + '-' + mode;
  }

  // Pick N unique random indices from an array
  function pickN(arr, n, rng) {
    const indices = arr.map((_, i) => i);
    const picks = [];
    for (let i = 0; i < Math.min(n, indices.length); i++) {
      const j = i + Math.floor(rng() * (indices.length - i));
      [indices[i], indices[j]] = [indices[j], indices[i]];
      picks.push(arr[indices[i]]);
    }
    return picks;
  }

  // Parse YAML frontmatter from .md content
  function parseMd(text) {
    const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { meta: {}, body: text.trim() };

    const metaStr = match[1];
    const body = match[2].trim();
    const meta = {};

    metaStr.split('\n').forEach(line => {
      const idx = line.indexOf(':');
      if (idx > 0) {
        const key = line.slice(0, idx).trim();
        let val = line.slice(idx + 1).trim();
        // Remove surrounding quotes
        if ((val.startsWith('"') && val.endsWith('"')) ||
            (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        meta[key] = val;
      }
    });

    return { meta, body };
  }

  // Split joke body into setup and punchline (separated by blank line)
  function splitJoke(body) {
    const parts = body.split(/\n\n+/);
    if (parts.length >= 2) {
      return { setup: parts.slice(0, -1).join('\n\n'), punchline: parts[parts.length - 1] };
    }
    return { setup: body, punchline: body };
  }

  // Format category slug into readable label
  function formatCategory(slug) {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  // Render cards into the container
  function renderCards(items, container, mode) {
    container.innerHTML = '';

    items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'flip-card' + (i > 0 ? ' hidden-mobile' : '');
      card.setAttribute('data-index', i);

      const inner = document.createElement('div');
      inner.className = 'flip-card-inner';

      // Front
      const front = document.createElement('div');
      front.className = 'flip-card-front';

      const catLabel = document.createElement('span');
      catLabel.className = 'category-label';
      catLabel.textContent = formatCategory(item.meta.category || 'unknown');

      const frontText = document.createElement('div');
      frontText.className = 'card-text';

      const hint = document.createElement('div');
      hint.className = 'tap-hint';

      if (mode === 'joke') {
        const parts = splitJoke(item.body);
        frontText.textContent = parts.setup;
        hint.textContent = 'Tap to reveal punchline';
      } else {
        frontText.textContent = item.body;
        hint.textContent = 'Tap to reflect';
      }

      front.appendChild(catLabel);
      front.appendChild(frontText);
      front.appendChild(hint);

      // Back
      const back = document.createElement('div');
      back.className = 'flip-card-back';

      const backText = document.createElement('div');
      backText.className = 'card-text';

      const backHint = document.createElement('div');
      backHint.className = 'tap-hint';
      backHint.textContent = 'Tap to flip back';

      if (mode === 'joke') {
        const parts = splitJoke(item.body);
        backText.textContent = parts.punchline;
      } else {
        backText.textContent = '"' + item.body + '"';
      }

      back.appendChild(backText);
      back.appendChild(backHint);

      inner.appendChild(front);
      inner.appendChild(back);
      card.appendChild(inner);

      // Flip on click
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });

      container.appendChild(card);
    });
  }

  // Mobile carousel logic
  function setupCarousel(container, dotsId) {
    const cards = container.querySelectorAll('.flip-card');
    const dotsContainer = document.getElementById(dotsId);
    if (!dotsContainer || cards.length === 0) return;

    let current = 0;
    dotsContainer.innerHTML = '';

    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Card ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    // Nav buttons
    const navContainer = dotsContainer.parentElement.querySelector('.carousel-nav');
    if (navContainer) {
      const prevBtn = navContainer.querySelector('[data-dir="prev"]');
      const nextBtn = navContainer.querySelector('[data-dir="next"]');
      if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
      if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
    }

    function goTo(idx) {
      if (idx < 0) idx = cards.length - 1;
      if (idx >= cards.length) idx = 0;
      current = idx;
      cards.forEach((c, i) => {
        c.classList.toggle('hidden-mobile', i !== current);
      });
      dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    // Touch swipe support
    let touchStartX = 0;
    container.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0 ? current - 1 : current + 1);
      }
    }, { passive: true });
  }

  // Main init function
  async function init(opts) {
    const { manifestUrl, containerId, dotsId, count = 3, mode = 'joke' } = opts;
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '<div class="daily-loading">Loading today\'s picks...</div>';

    try {
      const resp = await fetch(manifestUrl);
      if (!resp.ok) throw new Error('Failed to load manifest');
      const manifest = await resp.json();

      const rng = seededRandom(todaySeed(mode));
      const picks = pickN(manifest, count, rng);

      // Fetch each .md file
      const items = await Promise.all(picks.map(async entry => {
        const r = await fetch(entry.file);
        if (!r.ok) return { meta: { category: entry.category }, body: 'Content unavailable.' };
        const text = await r.text();
        return parseMd(text);
      }));

      renderCards(items, container, mode);
      setupCarousel(container, dotsId);
    } catch (err) {
      container.innerHTML = '<div class="daily-loading">Could not load today\'s picks. Try refreshing.</div>';
      console.error('DailyPick error:', err);
    }
  }

  return { init };
})();
