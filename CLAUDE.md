# AI Forge workspace

This repo is shared between two Windows PCs and a cloud Claude session. GitHub is the sync point.

## Sync rules (every session, every PC)

- Start of session: `git pull`, then read the top entries of `docs/log.md` and continue from its "Next" list.
- End of each task: add a dated entry at the top of `docs/log.md` (where it ran, what was done, what's next), then commit and push.

- Branch: always work on `claude/blissful-maxwell-44nxto`. Don't create other branches.
- At the start of a session, run `git pull` before touching anything.
- After each finished task, commit with a clear message and `git push`. Don't leave work uncommitted at the end of a session.
- If a pull brings conflicts, stop and show me before resolving them.
- Files over 50 MB (raw renders, full-length videos) don't go in git. They live in Google Drive. Compressed web clips under 10 MB in `assets/work/` are fine.

## Wrap up (when I say "wrap up" or "handoff")

1. Add a detailed entry at the top of `docs/log.md`: date, which PC or cloud, what was done, decisions made, anything half-finished (exact file and state), what you're waiting on me for, and the exact sentence I should send to the next chat.
2. Commit and push. Confirm the push succeeded.
3. Save the same entry as a new Google Doc in Drive: AI Forge/Handoffs (https://drive.google.com/drive/folders/12LBwYuUicnJ2fsuMTpz2thrzS4JLgN95), titled "YYYY-MM-DD HH:MM <where>". Create a new file each time; don't edit old ones.
4. Tell me it's safe to switch PCs.

## Where things live

- Git (this repo): docs, fix lists, scripts, site files, the work log. Anything text that gets edited.
- Google Drive (AI Forge folder): videos, renders, Google Sheets (outbound, content engine), client files, handoff copies.

## Google Drive (account: cgiforge@gmail.com)

All AI Forge files live under the **AI Forge** folder: https://drive.google.com/drive/folders/1aB8MRViIlcg0SvNo-_lm62fDiJeatJRh
- `Portfolio/` (CheerMyRun with French, German, Japanese versions; Ketro; JTX): https://drive.google.com/drive/folders/1M6c7RfjJhn2TpJINaluk6mv4toTSJjmM
- `Research/`: https://drive.google.com/drive/folders/189tUTXUBwNyhGojS-dbf1ggORyx_tzBd
- `Handoffs/`: https://drive.google.com/drive/folders/12LBwYuUicnJ2fsuMTpz2thrzS4JLgN95

The same Drive has a **CGI Forge** folder. Never read from it or write to it in AI Forge work.

## Framer

- Live site: taimur.framer.website, project https://framer.com/projects/Hey-Creator-copy--BvCFb9br7hmesCXcUNKg
- Framer edits only work from a session running on one of my PCs (not the cloud session). Run `npx @framer/agent@latest setup` once per PC.
- Show me changes before publishing. Don't publish without my OK.
- Pending fixes are in `docs/framer-fixes.md`.

## Context

- `docs/handoff-prompt.md`: who I am, goals, honesty and writing rules
- `docs/playbook.md`: positioning, curating, outreach templates
- `docs/cheermyrun.md`: CheerMyRun campaign: review links, posting accounts, all 30 reels and which are in Drive
