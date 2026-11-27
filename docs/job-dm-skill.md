---
name: job-dm
description: Write a comment and DM (or application intro) for an AI animation job post, in Taimur's own voice, ready for him to send. Use when Taimur shares a job post (X link or pasted text), asks for "the DM", "message for this post", "write to this job", or asks for drafts for the leads in docs/leads-x.md.
---

# Job DM

Taimur finds AI animation jobs on X and sends the messages himself. This skill turns one job post into a short message that sounds like him, with the post link attached. Claude never sends, posts or comments: drafts only.

## Before you write

1. **Get the post.** If Taimur gave an X link, open it in the browser pane (signed in as Taimur) and read the full post. If he pasted text with no link, search X for it; if you can't find it, write the draft and ask him for the link.
2. **Open every link in the post** (apply pages, brand sites, forms, job boards) and **read each page to the end, including the application form** (forms often load late: scroll down and wait, then list every field). If the application is a form, draft an answer for every field instead of a DM, and mark the ones only Taimur can answer (city, timezone, rate, years). Then **name the brand**. If the post doesn't name it, look it up (search the job title + company, check the poster's bio). Prefer the brand's own job page: shared job-board links can change (an aicraftafrica link once switched to another company's listing).
3. **Check the fit and skip if any of these hold**, telling Taimur why in one line:
   - Hard no: alcohol, drugs, gambling, sexualization or anything immoral (e.g. Whiskey Library, alcohol).
   - Female-focused brand where the work is UGC or sells on desire (e.g. Primal Queen).
   - AI UGC is the priority (Taimur doesn't make UGC).
   - No animation asked for at all (rule in `docs/leads-x.md`: animation only).
   - Older than 7 days: mark "later", don't draft unless asked.
   - Crypto, trading and similar grey areas: draft it but flag "your call".
4. **Pull the numbers from the Git project** (`C:\Users\User\Desktop\Taimur\AI Animation`, `git pull` first). Use only the latest dated figure:
   - `docs/cheermyrun.md`: campaign total (2.5M organic views, 380 reels in 7 weeks as of 27 Nov 2026) and the top reel (AU proposal, instagram.com/reel/Deu6LaByK8P, 312K views on 27 Nov).
   - `docs/leads-x.md` links line: other reels (Ketro pain relief cream, Zack D. Films style, instagram.com/reel/DeAX99xM4wA, 18.2K on 27 Nov).
   - `docs/offer.md`: offer, tools, what is private.
   If a number may be stale, ask Taimur for today's count instead of guessing.
5. **Pick the proof that matches the post:** niche (health → pain relief cream), style (claymation → Lucky Growth claymation on the site, Pixar → proposal reel), volume (→ 380 reels in 7 weeks, up to 10 a day), tools (Higgsfield → Nano Banana Pro and Seedance 2.5).

## How Taimur writes these

This is his own DM (Isael, 27 Nov 2026). Copy its shape and tone:

```
Hey Isael, saw your post. AI Animation and drama ads/reels are what I make every day

The last campaign I worked on was for a marathon running app. 380 reels in 7 weeks with 2.5M organic views

This one did 312K views
instagram.com/reel/Deu6LaByK8P

And in the health niche I did some for a pain relief cream brand in Zack D. Films style (18K organic). That one and the rest of my work are here taimur.framer.website

Happy to make one for your supplement for free so you can see it first
```

The shape:
1. `Hey <name>, saw your post.` then what he makes, matched to what they asked for.
2. The campaign line, describing the client by what it is ("a marathon running app"), with 380 reels in 7 weeks and 2.5M organic views. Always include the 2.5M.
3. `This one did <views> views` plus the top reel link.
4. One line on the work that matches their niche or style, named in words, ending with the portfolio link.
5. A one-line close: the free test ("Happy to make one for <their product> for free so you can see it first"), a question if the brand is unknown ("Which brand is it for?"), or "Happy to do the paid test" if they run a paid test.

Rules:
- **Two links max:** the top reel and taimur.framer.website. Mention other reels in words; the site has them.
- **No commas** except the one after the name in the opener. Use line breaks, "and", "so".
- **No dashes, em dashes or hyphens** ("Pixar style", "story led").
- No "actually", no "isn't X it's Y", no AI or corporate phrases (leverage, seamless, game changer, passionate about), no padding or promotional language.
- Full sentences joined with and/so/but, not choppy fragments. Plain and calm. Light emoji only if the post is playful.
- **Organic, never ads:** his CheerMyRun and Ketro work had no ad spend. If they ask for ads that spent, say plainly the numbers are organic.
- **Price stays out.** Quote $50 per video (up to 60s) only when a lead asks, and longer videos cost more (ask Taimur for that rate). The 50% deposit for using his Higgsfield also only comes up when they ask.
- Follow the post's instructions: a keyword to comment ("EDIT"), a form instead of a DM, a deadline.
- Every lead gets its own message; never paste the same text to two leads. If two posts are word for word the same, say they're likely one brand and suggest sending only one.
- Full voice profile, if you need more: `C:\Users\User\.claude\uploads\99e6d271-260a-4ae8-a672-707d3d3e3d06\1a6fda4d-taimur-voice-claude.md`.

## Output

For each lead, in chat, newest first:

**<Who> (<date>)**: one line on what they sell and the fit
Post: <link to the post>
Apply: <form link, if any>
Comment (if the post asks for one), then the DM or application text in a code block so he can copy it.

Then:
1. Lint every message before showing it: count links (max 2), commas (only the opener), hyphens and dashes (none).
2. Save the drafts in `docs/leads-x.md` under the scan date (newest first, post link on every draft), then commit and push in the Git project.
3. Tell Taimur what you skipped and why, and anything you need from him (a missing link, today's view count).
