---
name: portfolio-audit
description: Audit Taimur's portfolio site (taimur.framer.website) from a buyer's point of view and against current AI animation job posts on X, then stage fixes in Framer for his review. Use when Taimur asks to audit, review, improve or "do a round of analysis" on the website, or to check it against job posts.
---

# Portfolio audit

Taimur sells AI animation (Pixar-style 3D drama, claymation, Zack D. Films style, 2D storybook, micro drama ads, trend ads) to DTC and app brands, mostly found through hiring posts on X. The site's job is to get a stranger from a DM link to "send me a brief" in under a minute.

## Before you start

1. In the Git project (this PC: `C:\Users\User\Desktop\Taimur\AI Animation`), run `git pull`.
2. Read these for the facts you may quote:
   - `docs/cheermyrun.md`: view, like and reel counts with scan dates. Use only the latest dated count.
   - `docs/offer.md`: offer, tools, capacity, client quotes, new samples, what is private (the $50 rate never goes on the site).
   - `docs/leads-x.md`: job posts and what they ask for.
   - `docs/framer-fixes.md`: publish history and open items.
   - The latest `docs/site-audit-*.md`, so you don't repeat findings already handled.
3. Fetch the live pages (`/`, `/brazil`, `/germany`) with curl and extract the text. Audit what is live, not the canvas.

## The four rounds

Run all four unless Taimur asks for fewer. Each round gets its own short findings list.

### 1. Buyer view (bird's-eye)
Read the page as a brand owner who clicked a DM link. For every heading, card title and caption ask: does it say what kind of piece this is (style), what product it sold, and what result it got? Story plots and character names don't help a buyer; formats, product types and numbers do. Check that the hero answers "what do you make, does it work, what do I do next" above the fold, and that the main button offers the free test.

### 2. Job-post fit
Scan X for animation hiring posts from the last 7 days (browser pane, signed in as Taimur). Useful searches, each with `since:<date 7 days ago>` and the Latest tab: `"AI animation" hiring`, `hiring "AI video editor"`, `hiring Pixar AI`, `hiring (claymation OR "AI animator" OR "animated ads")`, `"AI video editor" (animation OR animated OR Pixar OR cartoon)`. Keep only posts that ask for animation (rule in `docs/leads-x.md`). List what they ask for (formats, niche, length, tools, volume, proof) and count how often. Mark each ask as covered, partly covered or missing on the site. Add new leads to `docs/leads-x.md`, newest first. Never send or post anything.

### 3. Fact check
List every number and claim on the live site and match it to a dated source in the docs. Flag anything stale, rounded wrongly, or with no source. Anything Taimur hasn't confirmed gets asked, not guessed.

### 4. Technical
- Page title, meta description and social image (`og:image`) for each page. The social image is what shows when the link is pasted in a DM, so it must match the current hero and numbers. Open it and look at it.
- Every link: X, email (mailto), Instagram posts, nav anchors.
- Phone and desktop screenshots (`framer.agent.readProject([{type:"screenshot", id}])`; Desktop `WQLkyLRf1`, Phone `A4RYqPCqe`, Brazil desktop `eSx24BgLb`). Look for wrapping headlines, overflow and lone cards.
- Leftover template text in the page source (layer names, hidden notes).

## Making fixes in Framer

CLI: `npx @framer/agent@latest session new "BvCFb9br7hmesCXcUNKg"`, then `exec -s <id>` with the script on stdin.

- Text: `framer.agent.replaceText({id, searchText, replaceText}, {pagePath})`. Use the node id without the `v:` prefix and `:0:0` suffix. If it returns false on a tablet/phone id, the text usually inherits from desktop; confirm on a screenshot.
- Component controls and node attributes: `framer.agent.applyChanges(dsl, {pagePath})`. **End every DSL command with `;`.** Without it, later SET lines get applied to the first node. This mixed up a hero card and an FAQ answer once.
- New FAQ item or section: `DUPE <id> newId="x" parent="<parent>" index="<n>";` then find the new node with `getChildren()` and SET it.
- CMS: Videos collection `qgModfbit` (Title `PsPAyloCN`, Format `xOiA7Bs_r`, Views `Idff0AR2O`, Likes `QjxccJCPK`, Result `x5GjDtjtC`, Category `dJ3lSzOhO`, Market `vRmn4i41w`, Brand `RI9_HBo06`). Brand ticker: `DOel7RfG4`. An empty Views/Likes value hides that row on the card.
- Page meta: `SET <pageId> metadata.description="..." metadata.socialImage="<uploaded image url>";`
- Shared footer lives in the layout template (`v1iFbaCMR` / `KcWOX36Pt`, with breakpoint copies prefixed `bFcHfHWND` and `vV0wX_aFY`). Change all of them.
- Client names can be swapped for product types with `scripts/framer/client-names.js` (MODE "hide" or "show").

## Rules

- Stage changes on the canvas, show Taimur screenshots, and publish only after he says "publish" (or told you up front to publish once applied). After publishing, fetch the live pages and confirm each change is there.
- Claim only what's true and sourced. Organic reels are never called ads; client ads are labelled as ads.
- One reel per story on the home grid; drop cards under 10K views unless they show a style nothing else covers.
- Writing: no em dashes, no "actually", no "the kind of", no "isn't X, it's Y", no padding or promotional language.

## Output

1. A short report in chat: per round, what's working, what's missing (ranked by how many job posts or buyers it affects), and what you staged.
2. Save the report as `docs/site-audit-<YYYY-MM-DD>.md` in the Git project, log staged/published changes in `docs/framer-fixes.md`, then commit and push.
3. End by asking Taimur whether to publish, plus any facts you need from him.
