# Implementation Plan: Setup Custom Subagents

## Objective
Create four custom subagents (`frontend`, `backend`, `tester`, `security`) in the `.gemini/agents/` directory to orchestrate specific workflow tasks for the project.

## Implementation Steps
1. Create directory `.gemini/agents/` in the project root.
2. Create `.gemini/agents/frontend.md` with a system prompt focused on UI/UX, Astro, React, and Tailwind.
3. Create `.gemini/agents/backend.md` with a system prompt focused on business logic, APIs, and data handling.
4. Create `.gemini/agents/tester.md` with a system prompt focused on writing unit tests, finding bugs, and QA.
5. Create `.gemini/agents/security.md` with a system prompt focused on security audits, vulnerability checks, and preparing code for deployment/GitHub.

## Verification
- Ensure the 4 Markdown files are generated correctly.
- Verify each file contains the required YAML frontmatter (`name`, `description`, `tools`).