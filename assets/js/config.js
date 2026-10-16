// Edit this file to update the site. No build step needed.

window.SITE = {
  name: "AI Forge",
  owner: "Taimur Ali",
  // Contact email for this agency. Leave empty to hide the email buttons.
  email: "taimurai969@gmail.com",
  // Paste your Calendly (or Cal.com) link. Leave empty to hide the "Book a call" buttons.
  calendly: "",
  // Hero showreel. Vertical 9:16 mp4 works best. Leave empty to show the animated placeholder.
  reel: "",
  reelPoster: "",
  socials: [
    // { label: "TikTok", url: "https://tiktok.com/@yourhandle" },
    // { label: "Instagram", url: "https://instagram.com/yourhandle" },
    // { label: "YouTube", url: "https://youtube.com/@yourhandle" },
    // { label: "LinkedIn", url: "https://linkedin.com/in/yourhandle" },
  ],
  // Only list tools you use on real projects.
  tools: ["Blender", "Cycles", "Photoshop", "Adobe Creative Cloud"],
};

// Each entry is one card in the Work grid.
// category: "explainer" | "character" | "brand" | "series"
// ratio: "9:16" | "16:9" | "1:1" | "4:5"
// video: path to an mp4 in assets/work/ (e.g. "assets/work/shark-explainer.mp4")
// poster: path to a jpg still (first frame or best frame)
// Entries with no video show as "In production" cards. Delete them once real clips replace them.
window.WORK = [
  {
    title: "Explainer short",
    category: "explainer",
    ratio: "9:16",
    video: "",
    poster: "",
    summary: "A curiosity-driven 3D explainer built around one question and a payoff.",
    details: { Format: "Vertical short, 45 to 60s", Role: "Script, characters, animation, edit" },
  },
  {
    title: "Character brand film",
    category: "character",
    ratio: "9:16",
    video: "",
    poster: "",
    summary: "A product character with a personality, in a short story that works as an ad.",
    details: { Format: "Vertical short, 30s", Role: "Script, character design, animation, edit" },
  },
  {
    title: "Series: episode 1",
    category: "series",
    ratio: "9:16",
    video: "",
    poster: "",
    summary: "First episode of a recurring character. Same model, same world, every week.",
    details: { Format: "Episodic shorts", Role: "Character bible, animation, edit" },
  },
  {
    title: "Series: episode 2",
    category: "series",
    ratio: "9:16",
    video: "",
    poster: "",
    summary: "Second episode. The character sheet keeps the look locked between shorts.",
    details: { Format: "Episodic shorts", Role: "Animation, edit" },
  },
  {
    title: "Product story",
    category: "brand",
    ratio: "9:16",
    video: "",
    poster: "",
    summary: "A short animated story that ends on the product.",
    details: { Format: "Vertical ad, 15 to 30s", Role: "Script, animation, edit" },
  },
  {
    title: "Widescreen explainer",
    category: "explainer",
    ratio: "16:9",
    video: "",
    poster: "",
    summary: "Long-form version for YouTube or a website hero.",
    details: { Format: "16:9, 60 to 120s", Role: "Script, animation, edit" },
  },
];
