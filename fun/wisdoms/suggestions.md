# MonkeyMagic.ai Wisdoms Library - Suggestions & TODOs

## Known TODOs

- [ ] **Quality review pass** - Read through all 60 wisdoms and flag any that feel weak, repetitive, or off-tone for their category.
- [ ] **Tag consistency audit** - Review tags across all files to ensure consistent naming (e.g., no mix of "ai" vs "AI", "long-term" vs "longterm").
- [ ] **Expand each category to 20+ wisdoms** - The initial set of 10 per category is a starting point. Each category should grow to at least 20 for a richer rotation.
- [ ] **Add unique IDs** - Consider adding a `wisdom_id` field to frontmatter for stable referencing independent of file path.
- [ ] **Regenerate manifest** - After any additions or edits, regenerate `wisdoms-manifest.json` to stay in sync.

## Suggested Next Steps

1. **Build a "Wisdom of the Day" component** - Create a frontend widget that pulls a random wisdom from the manifest and displays it on the MonkeyMagic.ai homepage. Could rotate daily or on each page load.

2. **Add a community submission pipeline** - Allow users to submit their own wisdoms via a form. Submissions go into a moderation queue before being added to the library. This builds engagement and grows the collection organically.

3. **Create category-themed visual cards** - Design shareable image cards (social-media-ready) for each wisdom, styled per category. Life-hacks get a bold, clean look; monkey-magic-moments get playful illustrations; quiet-truths get soft, minimalist aesthetics.

4. **Implement tag-based filtering on the site** - Let visitors browse wisdoms by tag, not just category. This enables cross-category discovery (e.g., all wisdoms tagged "humor" regardless of whether they're in witty-one-liners or monkey-magic-moments).

5. **Seasonal and themed collections** - Curate special collections for events, seasons, or themes (e.g., "New Year Motivation Pack", "Developer Appreciation Week", "Monday Morning Survival Kit"). These can be assembled from existing wisdoms using tag queries, with a simple JSON collection file pointing to the relevant wisdom IDs.
