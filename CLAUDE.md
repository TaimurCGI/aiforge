# AI Forge workspace

This repo is shared between two Windows PCs and a cloud Claude session. GitHub is the sync point.

## Sync rules (every session, every PC)

- Branch: always work on `claude/blissful-maxwell-44nxto`. Don't create other branches.
- At the start of a session, run `git pull` before touching anything.
- After each finished task, commit with a clear message and `git push`. Don't leave work uncommitted at the end of a session.
- If a pull brings conflicts, stop and show me before resolving them.
- Files over 50 MB (raw renders, full-length videos) don't go in git. They live in Google Drive (AI Portfolio folder). Compressed web clips under 10 MB in `assets/work/` are fine.

## Framer

- Live site: taimur.framer.website, project https://framer.com/projects/Hey-Creator-copy--BvCFb9br7hmesCXcUNKg
- Framer edits only work from a session running on one of my PCs (not the cloud session). Run `npx @framer/agent@latest setup` once per PC.
- Show me changes before publishing. Don't publish without my OK.
- Pending fixes are in `docs/framer-fixes.md`.

## Context

- `docs/handoff-prompt.md`: who I am, goals, honesty and writing rules
- `docs/playbook.md`: positioning, curating, outreach templates
