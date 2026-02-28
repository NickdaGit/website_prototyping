# MonkeyMagic.ai Wisdoms Library - Context

## Purpose

The Wisdoms Library is a curated collection of short-form insights, aphorisms, and one-liners for the MonkeyMagic.ai platform. Each wisdom is stored as a standalone Markdown file with structured YAML frontmatter, making them easy to query, display, and shuffle across the site.

## Folder Structure

```
wisdoms/
  context.md              # This file - library documentation
  suggestions.md          # TODOs and next steps
  wisdoms-manifest.json   # Machine-readable index of all wisdoms
  life-hacks/             # Practical, actionable everyday advice
    001.md - 010.md
  tech-wisdom/            # Developer-resonant insights about code, craft, and career
    001.md - 010.md
  monkey-magic-moments/   # Cheeky, playful humor with monkey/banana/AI themes
    001.md - 010.md
  quiet-truths/           # Calm, reflective observations on life and self
    001.md - 010.md
  witty-one-liners/       # Sharp, smile-worthy quips and punchlines
    001.md - 010.md
  big-picture/            # Philosophical (not preachy) takes on meaning, time, and scale
    001.md - 010.md
```

## YAML Frontmatter Schema

Every wisdom `.md` file uses the following frontmatter format:

```yaml
---
category: "category-folder-name"   # Must match the parent folder name
title: "Short Descriptive Title"   # Human-readable title for display/indexing
subject: "brief topic description" # What the wisdom is about (lowercase sentence fragment)
tags: ["tag1", "tag2", "tag3"]     # 2-4 lowercase tags for filtering and search
author: "Gunther"                  # Attribution (currently all authored by Gunther)
date: "YYYY-MM-DD"                 # Date the wisdom was added
---

The wisdom text here.
```

## Category Descriptions

| Category | Tone | Audience |
|---|---|---|
| **life-hacks** | Practical, motivating, direct | Anyone looking for actionable advice |
| **tech-wisdom** | Insightful, developer-savvy | Developers, designers, makers |
| **monkey-magic-moments** | Playful, cheeky, irreverent | MonkeyMagic.ai fans, humor lovers |
| **quiet-truths** | Calm, reflective, gentle | Thinkers, feelers, midnight readers |
| **witty-one-liners** | Sharp, punchy, memorable | Anyone who appreciates a good quip |
| **big-picture** | Philosophical, expansive, grounded | Those who enjoy thinking at scale |

## Author Convention

All wisdoms are currently attributed to **Gunther**, the MonkeyMagic.ai persona. Future wisdoms may introduce guest authors or community-contributed entries, in which case the `author` field will reflect the contributor.

## Current State

- **Total wisdoms:** 60
- **Categories:** 6
- **Wisdoms per category:** 10 (001.md through 010.md)
- **Date of initial creation:** 2026-02-28
- **Manifest file:** `wisdoms-manifest.json` (auto-generated, should be updated when wisdoms are added)
