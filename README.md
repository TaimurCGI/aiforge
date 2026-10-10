# AI Forge

Portfolio site for story-first AI animation by Taimur Ali. Plain HTML, CSS and JS with no build step.

## Run it locally

```bash
npx http-server . -p 8080
# open http://localhost:8080
```

## Update the site

Everything you change day to day lives in `assets/js/config.js`.

- `SITE`: name, email, Calendly link, socials, tools, hero reel.
- `WORK`: one entry per clip in the Work grid.

### Add a clip

1. Export the final cut, then compress it for web:

   ```bash
   # 9:16 short, about 2 to 6 MB for 30 to 60 seconds
   ffmpeg -i final.mov -vf "scale=1080:-2" -c:v libx264 -crf 24 -preset slow \
     -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 128k assets/work/my-short.mp4

   # Poster frame (pick a strong frame with -ss)
   ffmpeg -ss 00:00:02 -i assets/work/my-short.mp4 -frames:v 1 -q:v 3 assets/work/my-short.jpg
   ```

2. Add or edit an entry in `WORK`:

   ```js
   {
     title: "What if the Moon disappeared?",
     category: "explainer",          // explainer | character | series | brand
     ratio: "9:16",                  // 9:16 | 16:9 | 1:1 | 4:5
     video: "assets/work/my-short.mp4",
     poster: "assets/work/my-short.jpg",
     summary: "One line on the idea and the hook.",
     details: { Format: "Vertical short, 52s", Turnaround: "3 days", Role: "Script, animation, edit" },
   },
   ```

   Only put numbers in `details` (turnaround, views, CTR) that you can prove.

3. Delete the placeholder entries (the ones with `video: ""`) as real clips replace them. Empty entries show as "In production" cards.

### Hero showreel

Set `SITE.reel` to a vertical mp4 (20 to 40 seconds of your best moments, no sound needed). Until then an animated placeholder character shows in the phone.

### Your photo

In `index.html`, replace the `photo-placeholder` div in the About section with `<img src="assets/img/taimur.jpg" alt="Taimur Ali">`.

## Deploy

The repo includes a `netlify.toml`. Connect the repo in Netlify (or drag the folder into app.netlify.com/drop) and it publishes as is. Videos over about 50 MB each are better hosted on Vimeo, Bunny or Cloudflare Stream, with the direct mp4 URL pasted into `video`.

## Positioning and outreach

See [`docs/playbook.md`](docs/playbook.md) for the portfolio build list, positioning and message templates for gigs and roles.
