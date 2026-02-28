# MonkeyMagic.ai Jokes Library -- Suggestions & TODOs

## Known TODOs

- [ ] Add rating/scoring system to frontmatter (e.g., `rating: 1-5`)
- [ ] Add `audience` field to frontmatter (e.g., "general", "developers", "kids")
- [ ] Review dark-humor category for tone consistency
- [ ] Add image/illustration references for jokes that could benefit from visuals
- [ ] Create a "featured joke of the day" rotation mechanism

## Next-Step Suggestions

### 1. Build a Joke API Endpoint
Create a simple API that reads the markdown files and serves random or filtered jokes as JSON. Could use the `jokes-manifest.json` as an index for fast lookups.

### 2. Add User Favorites and Voting
Allow users to upvote/downvote jokes and save favorites. This data can inform which jokes to feature more prominently and which categories are most popular.

### 3. Expand to 20+ Jokes Per Category
The current library has 10 jokes per category. Expanding to 20+ per category would give more variety and support features like "joke of the day" without repetition for weeks.

### 4. Create a Joke Submission Portal
Let MonkeyMagic.ai community members submit their own jokes. Submissions would go through a review queue before being added to the library with proper attribution.

### 5. Integrate Jokes into the MonkeyMagic.ai Chat Experience
Surface jokes contextually within the MonkeyMagic.ai chat interface. For example, if a user seems frustrated, offer a joke. If they mention programming, serve a tech-ai joke. Use the tags for smart matching.
