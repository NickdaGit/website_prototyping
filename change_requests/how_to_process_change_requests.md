# How to Process Change Requests

This document defines the complete workflow for processing change request files in this repository. It is the single source of truth for how an AI agent should handle a change request from start to finish.

A **change request** is a human-written markdown file that describes desired modifications to the codebase. Change requests are stored in the `/change_requests/` folder at the repository root. Your job is to read the request, explore the codebase for context, plan the work, raise issues, get explicit approval, execute the approved plan, and document what you did.

This process is repository-agnostic. The only structural requirement is a `/change_requests/` folder at the repository root containing this guide and any change request files.

---

## Core Principles

These are non-negotiable rules. Follow all of them, every time.

1. **Plan before executing.** Never make changes to the codebase without first presenting a plan and receiving explicit approval. The plan exists so the user can catch misunderstandings before any code is written or files are modified.

2. **Raise issues and ask questions.** If anything in the change request is ambiguous, contradictory, incomplete, or potentially problematic, surface it to the user before proceeding. Do not resolve ambiguity by guessing. Present each issue clearly and, where possible, offer a recommended resolution the user can accept or override.

3. **Ask permission before executing.** After presenting the plan and resolving all raised issues, explicitly ask "Shall I proceed with this plan?" and wait for confirmation. Do not begin execution until you have received a clear affirmative.

4. **Do not make assumptions.** When the request leaves room for interpretation — technology choice, architectural approach, naming convention, scope boundary — ask the user rather than deciding unilaterally. Even if you are confident in a good default, call it out in the plan so the user can override it.

5. **Understand before you act.** Before planning, explore the existing codebase to understand its conventions, structure, tech stack, and patterns. Your plan must work with what already exists, not against it.

6. **Follow existing conventions.** Match the naming patterns, file organisation, coding style, and technology choices already present in the repository. Do not introduce new frameworks, build tools, libraries, or paradigms unless the change request explicitly calls for them.

7. **Do not over-engineer.** Implement what is requested, nothing more. Do not add features, abstractions, refactoring, or "improvements" that were not asked for. A simple task requires a simple solution.

8. **Preserve, do not destroy.** When replacing existing files, rename the original (e.g., `filename.html` becomes `filename_retired.html` or `filename_old.html`) rather than deleting it. The user can delete old files when they are ready.

9. **Document everything.** Every change you make must be recorded in the completion log. If someone reads only the completion log, they should understand exactly what was created, modified, or renamed — and why.

10. **Break large requests into phases.** If a change request contains many unrelated changes, group them into logical phases. Execute and verify one phase before moving to the next. Track your progress with a structured todo list throughout.

---

## File Naming Conventions

### Change request files

- **Location:** `/change_requests/` at the repository root
- **Pattern:** `change_request001.md`, `change_request002.md`, `change_request003.md`, etc.
- **Numbering:** Zero-padded three-digit sequential numbering (001 through 999)
- **Case:** Always lowercase with underscores

### Completion log files

- **Location:** Same `/change_requests/` folder
- **Pattern:** `change_request001_completed.md` (append `_completed` before `.md`)
- **Rule:** One completion log per change request. They are always paired.
- **Timing:** The completion log is only created after all work is finished. Never write it before execution is complete.

### Determining the request number

When processing a request, the user will typically direct you to a specific file. If not, look in `/change_requests/` for the latest numbered request that does not yet have a paired `_completed.md` file.

---

## Processing Workflow

Follow these steps in order. Do not skip steps.

### Step 1: Read the Change Request

- Read the entire change request file from beginning to end. Do not skim.
- Change requests are written in free-form prose. Critical details, constraints, and process instructions may appear anywhere in the document, including at the very end.
- Some requests include meta-instructions about how to process the request itself (e.g., "plan this work before executing" or "from now on, log changes per request"). Extract and follow these. They modify your workflow but are not codebase changes.

### Step 2: Analyse and Decompose

On a second pass through the document, decompose it into discrete, actionable work items.

- **Identify each individual change** requested. A single change request file may contain 5, 10, or more distinct changes spanning different areas of the codebase.
- **Categorise the changes.** Group related changes. Common categories include:
  - Cosmetic or styling adjustments
  - Content text changes
  - New page or section creation
  - New data or content structures (libraries, collections)
  - Infrastructure changes (CSS, JS modules, build config)
  - Process or workflow changes
- **Identify dependencies.** Some changes depend on others. A "Joke of the Day" page depends on a jokes library existing first. Order your work accordingly.
- **Extract explicit constraints.** Look for specific measurements, sizes, ratios, file paths, naming conventions, technology restrictions, or ordering requirements.
- **Distinguish vision from specification.** Some parts describe a future direction ("The overall vision is..."). Distinguish between what should be built now and what is aspirational context informing your design.
- **Note embedded examples and sample content.** When the user provides example content (specific text, specific wording for UI elements), it must be included verbatim. These are specifications, not suggestions.

### Step 3: Explore the Codebase

Before you can plan, you must understand what already exists.

- **Map the project structure.** List the top-level directories and files. Understand what lives where.
- **Read key files.** Read the main entry points (index files, config files, main CSS/JS files) to understand the tech stack and patterns in use.
- **Identify conventions.** Look at existing filenames (kebab-case? snake_case? camelCase?), CSS approach, JavaScript approach, content formats, and directory organisation.
- **Read files referenced in the change request.** If the request mentions specific files, read them now.
- **Check for context documents.** Look for README.md, CLAUDE.md, context.md, or similar files that may document conventions, decisions, or architectural context.
- **Identify affected files.** For each change in the request, determine which existing files will need to be read or modified. Read them before planning.

### Step 4: Raise Issues and Questions

Compile a list of any issues, ambiguities, or concerns. Present them to the user **before** presenting your plan. Wait for responses before proceeding.

Types of issues to surface:

- **Ambiguities:** Requirements that could be interpreted multiple ways.
- **Contradictions:** Parts of the request that conflict with each other or with the existing codebase.
- **Missing information:** Decisions that need user input (technology choice, design direction, naming).
- **Technical concerns:** Approaches that have trade-offs the user should know about.
- **Scope clarification:** Whether something is in scope for this request or deferred.
- **Risk flags:** Changes that could break existing functionality or affect other parts of the codebase.

**Format:** Number each issue, state it clearly, and offer a recommended resolution where possible. If there are no issues, state explicitly: "I have reviewed the request and have no blocking questions."

### Step 5: Plan the Work

After all issues are resolved, present a structured plan.

**The plan must include:**

- **Overview:** One paragraph summarising the entire scope.
- **Phases:** If the work is large, break it into sequential phases (e.g., Phase 1: Cosmetic fixes, Phase 2: Content library, Phase 3: New pages).
- **Per-phase breakdown:** For each phase, list:
  - Files to be created (with full relative paths from repo root)
  - Files to be modified (with description of the change)
  - Files to be renamed or backed up
  - New directories to be created
  - Technical approach for non-obvious implementations
- **Conventions to follow:** State what patterns you observed in the codebase and will follow.
- **Out of scope:** Explicitly state anything in the request that you interpret as deferred or not part of this request, so the user can correct you if wrong.
- **Estimated scope:** Rough count of files to be created and modified.

**The plan is a contract.** Once approved, execute it as stated. If during execution you discover the plan needs to change, stop and inform the user before deviating.

### Step 6: Get Approval

- Present the plan and explicitly ask: "Shall I proceed with this plan?"
- Wait for explicit approval before making any changes to the codebase.
- If the user requests modifications, update the plan and re-present it.
- If the user approves with conditions (e.g., "yes but skip Phase 3"), acknowledge the conditions and confirm your understanding before proceeding.

### Step 7: Execute the Plan

- **Work in phases** if the plan has phases. Complete one phase fully before starting the next.
- **Track progress** using a todo list. Mark items as you start and complete them.
- **Follow the approved plan.** Do not add extra features, skip steps, or reorder without reason.
- **Rename before replacing.** When replacing an existing file, rename the original first (append `_old`, `_retired`, or `_backup`).
- **Verify as you go.** After creating or modifying files, check that links, paths, CSS class names, file references, and imports are correct.
- **If you hit a problem during execution:** Stop, explain the problem to the user, and propose a solution. Do not silently work around issues or deviate from the plan without communication.

### Step 8: Document Completion

After all work is complete, create the completion log file. This step is mandatory. See the **Completion Log Format** section below for the exact template.

---

## Completion Log Format

Create the completion log at `/change_requests/change_requestNNN_completed.md` using the following template. Fill in all sections. Do not omit any files from the tables.

```markdown
# Change Request [NNN] - Completed

**Request:** change_request[NNN].md
**Date completed:** [YYYY-MM-DD]
**Implemented by:** [Agent name or identifier]

---

## Changes Made

### 1. [Category Name]

| File | Change |
|------|--------|
| `[relative/path/to/file]` | [Specific description of what changed] |

### 2. [Category Name]

Created `[/path/to/new/directory/]` with [N] files:

| Path | Description |
|------|-------------|
| `[relative/path]` | [What was created] |

[Repeat for each category of changes]

---

## Summary

- **Files modified:** [count] ([list key filenames])
- **Files created:** [count] ([brief breakdown])
- **Files renamed/backed up:** [count] ([old name -> new name])

---

## Technical Notes

- [Implementation decision 1: why a particular approach was chosen]
- [Implementation decision 2: any non-obvious technical details]
- [Anything a future agent or developer would need to know]
```

**Guidelines for the completion log:**

- **File paths must be relative** to the repository root (e.g., `fun/jokes/context.md`, not an absolute system path).
- **Every file touched must appear** in the tables. No omissions.
- **Group changes by logical category,** not by file type or alphabetical order.
- **Be specific about what changed.** Not "updated styles" but "Mobile logo (<=768px): width 20vw to 13vw, min-width 110px to 70px."
- **For bulk file creation,** use range notation (e.g., `001.md-010.md`) rather than listing every file individually.
- **Technical notes should explain the "why"** behind non-obvious decisions. If you chose a specific algorithm, pattern, or workaround, explain the reasoning.
- **The summary must include counts.** This gives the user an at-a-glance verification that the scope matches expectations.

---

## Handling Edge Cases

### Requests that mix process instructions with technical changes
Change requests may include meta-instructions like "plan this work before executing" or "from now on, use this naming convention." These modify how you work. Extract and follow them, but do not list them as codebase changes to implement.

### Requests that include vision statements
Vision statements provide context for why a change is being made and where it is heading. They inform your design decisions but are not implementation tasks unless they contain specific, actionable items. Use them to make better choices, but do not build features that are only described as future aspirations.

### Requests with embedded examples
When the user provides example content — specific joke text, specific UI wording, specific file structures — include that content verbatim in your implementation. These are not suggestions. They are specifications.

### Requests that reference previous work
If the request says "same approach as before" or "similar to what we did for X," find and read that previous work to understand the pattern before planning. Check existing completion logs in `/change_requests/` for context on prior implementations.

### Requests with implicit scope boundaries
Watch for phrases like "for now," "we can adjust later," "at a later date," "we will fix that another time." These define what is out of scope for this request. Respect these boundaries and do not build beyond them.

---

## Working with the Existing Codebase

- **Never introduce new dependencies** (packages, CDN libraries, frameworks) unless the change request explicitly calls for them.
- **Match the existing tech stack.** If the site uses vanilla HTML/CSS/JS, keep it that way. If it uses a framework, work within that framework.
- **Respect the directory structure.** Place new files in locations consistent with existing organisation. If CSS lives in `/assets/`, put new CSS there.
- **Read before writing.** Before modifying any file, read its current contents completely. Understand what exists before changing it.
- **Check for naming conventions.** Look at existing filenames and code patterns. If they use kebab-case for filenames, follow that. If YAML frontmatter uses specific keys, use the same keys.
- **Look for context documents.** Previous agents or developers may have left context files (like `context.md`, `suggestions.md`, `CLAUDE.md`) that document conventions, known issues, or planned work. Read these before planning.

---

## Common Pitfalls

Avoid these mistakes. Each one has caused real problems in past change request processing.

1. **Executing before getting approval.** Even if the request seems perfectly clear, present the plan first. The user may have context or preferences you lack.

2. **Reading only part of the change request.** Change requests are not structured with headers you can jump to. Critical instructions may appear in the middle of a paragraph at the end of the document. Read the entire file.

3. **Making assumptions about ambiguous requirements.** When the request says "make it look good on mobile" without specifying breakpoints or dimensions, ask. Do not guess.

4. **Adding unrequested features.** If asked to build a jokes library, do not also build a search engine, rating system, or admin panel unless asked. Stick to what was requested.

5. **Ignoring existing patterns.** If the codebase uses a specific CSS naming convention, file structure, or architectural pattern, do not introduce a different one without explicit instruction.

6. **Deleting files instead of renaming.** When replacing files, rename the originals. The user decides when to permanently delete.

7. **Creating the completion log before finishing.** The completion log documents what was done, not what you plan to do. Write it last, after all changes are complete.

8. **Writing vague completion log entries.** "Updated CSS" is not useful. "Mobile logo (<=768px): width 20vw to 13vw, min-width 110px to 70px, top 15px to 8px, left 15px to 5px" is useful.

9. **Silently working around problems.** If something in the plan does not work as expected during execution, stop and communicate. Do not quietly change approach without informing the user.

10. **Forgetting process changes.** If the change request modifies your workflow (like switching to per-request change logs), that is itself a change worth noting in the completion log.

11. **Not verifying file paths and references.** After creating new pages, check that all internal links, image paths, CSS references, and JS imports are correct relative to where each file lives.

12. **Treating the change request as a technical specification.** It is not. It is human prose that may be imprecise, may use non-technical language, and may describe intent rather than implementation. Your job is to translate intent into a precise technical plan, then validate that translation with the user before executing.

---

## Quick Reference Checklist

Use this as a sanity check at each stage.

### Before planning
- [ ] Read the entire change request, including the last paragraph
- [ ] Explored the repository structure and understood the tech stack
- [ ] Read all files referenced in or affected by the change request
- [ ] Checked for existing context documents (README, CLAUDE.md, context.md)
- [ ] Identified all distinct changes requested
- [ ] Surfaced and resolved all ambiguities and issues with the user

### Before executing
- [ ] Presented a structured plan covering all changes
- [ ] Received explicit approval from the user
- [ ] Set up a todo list for tracking progress

### During execution
- [ ] Following the approved plan without deviation
- [ ] Renaming (not deleting) files being replaced
- [ ] Following existing codebase conventions
- [ ] Verifying file paths and references as I go
- [ ] Communicating any problems or deviations to the user

### After execution
- [ ] All planned changes are complete
- [ ] Created completion log at `/change_requests/change_request[NNN]_completed.md`
- [ ] Completion log includes every file created, modified, or renamed
- [ ] Completion log includes summary counts and technical notes
- [ ] Informed the user that the work is complete
