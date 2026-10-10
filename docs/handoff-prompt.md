I'm Taimur Ali, a 3D animator with 7 years of experience, mostly in Blender. I now make AI animations: Pixar-style characters and Zach D Films style 3D explainer shorts. Story first, at scale and at speed. I'm building a portfolio and agency site called AI Forge (working name) to win gigs, brand work and full-time remote roles. My reference is Doublespeed, but I focus only on animation, which is my specialty. I also run CGI Forge (cgiforge.com), a 3D product-visualization studio for wellness and nutrition brands.

## What already exists in this folder

This repo (branch `claude/blissful-maxwell-44nxto`) has a finished coded version of the site and the strategy behind it. Read these first:
- `README.md`: how the coded site works
- `docs/playbook.md`: positioning, how to pick which pieces go on the site, outreach templates, pricing rules
- `index.html`: all the final site copy, section by section
- `assets/js/config.js`: site settings and the work-item data model
- `assets/css/style.css`: colours and fonts

## Goal for this session

Rebuild this site in Framer, using a Framer template, with the Framer agent.

1. Run `node --version`. If it's below v24, install Node 24+ (use winget if it's already installed, otherwise the official .msi from https://nodejs.org/download/release/latest/). Then run `npx @framer/agent@latest setup`.
2. Ask me for my Framer project link and the template I'm using. Don't pick a template for me.
3. Map the existing site onto the template, keeping its strong sections and dropping what doesn't fit:
   - Hero: "Animated shorts that start with the story." plus the lede from index.html, CTAs "See the work" and "Book a call", and a vertical 9:16 showreel video slot.
   - Work: a CMS collection with fields title, category (Explainer, Character film, Series, Brand), ratio (9:16, 16:9, 1:1, 4:5), video URL, poster image, summary, format, role, turnaround. Filter by category. Clicking a card plays the video with sound in a popup. If the template can't do the filter or popup, write a Framer code component for it.
   - "Why the work holds up" (4 points), "What I make" (4 services), "From brief to final cut" (5 steps), About, Contact. Use the copy from index.html as is unless the template's layout needs it shorter.
   - Colours: background #131015, alt #1a161d, surface #221d26, line #342d3a, text #f6efe6, muted #b0a69c, accent orange #ff7a3d, sun #ffd166, sky #7bdff2, mint #8ee3a8. Fonts: Bricolage Grotesque (headings), Inter (body).
   - Links: Behance https://behance.net/taimurcgi, CGI Forge https://cgiforge.com, email cgiforge@gmail.com. I don't have a Calendly link yet, so hide "Book a call" until I give you one.
4. Videos: I'll host clips on Vimeo, Mux or Bunny and paste the URLs in, so don't upload large mp4s to Framer.
5. Show me the result before publishing. Don't publish or connect a domain without my OK.

## Rules

Honesty:
- I have a large animation portfolio. Ask me for the clips and links, and help me pick the strongest 6 to 9 (see the curating section in docs/playbook.md). Build the Work collection from my real pieces.
- Don't invent details about any piece. Ask me for titles, clients, roles, view counts and turnaround instead of guessing.

Writing (all site copy):
- No em dashes. No "actually." No "the kind of." No "isn't X, it's Y."
- No rule-of-three padding, inflated or promotional language, filler, or fake-warm lines.
- Specific, concrete, human, confident. If something reads AI-written, tell me and let me write it.
