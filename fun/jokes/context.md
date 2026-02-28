# MonkeyMagic.ai Jokes Library

## Purpose

This is the jokes content library for MonkeyMagic.ai. It provides a structured collection of jokes organized by category, each stored as individual markdown files with YAML frontmatter for easy parsing, filtering, and display on the website.

## Folder Structure

```
/fun/jokes/
  context.md               -- This file: documents the library
  suggestions.md           -- TODOs and next-step suggestions
  jokes-manifest.json      -- JSON manifest of all jokes (machine-readable index)
  quick-hits/              -- One-liners and short punchy jokes (001-010.md)
  dad-jokes/               -- Classic groan-worthy dad jokes (001-010.md)
  story-jokes/             -- Longer narrative-format jokes (001-010.md)
  tech-ai/                 -- Developer, programming, and AI-themed jokes (001-010.md)
  monkey-magic-specials/   -- MonkeyMagic.ai brand jokes: monkeys, bananas, AI (001-010.md)
  dark-humor/              -- Edgy but tasteful dark humor (001-010.md)
  absurd-surreal/          -- Absurdist and surreal humor (001-010.md)
```

## YAML Frontmatter Schema

Every joke `.md` file uses the following YAML frontmatter fields:

| Field      | Type     | Description                                          |
|------------|----------|------------------------------------------------------|
| `category` | string   | The subdirectory/category name                       |
| `title`    | string   | Short descriptive title for the joke                 |
| `subject`  | string   | Primary subject matter of the joke                   |
| `tags`     | string[] | Array of tags for filtering and search               |
| `author`   | string   | Author attribution (default: "Nicholas")             |
| `date`     | string   | Date the joke was added (format: "YYYY-MM-DD")       |

## Category Descriptions

- **quick-hits**: Short, punchy one-liners. Setup and punchline, nothing more. Fast reads.
- **dad-jokes**: Classic dad-joke format. Puns, groans, and wholesome wordplay.
- **story-jokes**: Longer jokes with narrative structure. Characters, setup, buildup, and payoff.
- **tech-ai**: Jokes about programming, developers, AI, machine learning, and tech culture.
- **monkey-magic-specials**: On-brand MonkeyMagic.ai humor featuring monkeys, bananas, AI, and the company itself.
- **dark-humor**: Edgy humor that pushes boundaries without crossing into offensive territory.
- **absurd-surreal**: Nonsensical, dreamlike, or surreal humor. Logic optional.

## Author Convention

All jokes in this library are attributed to `"Nicholas"` unless otherwise specified. Guest contributions should use a different author name.

## Current State

- **Total jokes**: 70
- **Categories**: 7
- **Jokes per category**: 10
- **File naming**: Sequential numbering (001.md through 010.md per category)
- **Date created**: 2026-02-28
