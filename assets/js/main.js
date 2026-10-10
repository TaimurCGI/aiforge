(function () {
  const SITE = window.SITE || {};
  const WORK = window.WORK || [];

  const CATEGORY_LABELS = {
    explainer: "Explainer",
    character: "Character film",
    series: "Series",
    brand: "Brand",
  };
  const CATEGORY_COLORS = {
    explainer: "var(--accent)",
    character: "var(--sun)",
    series: "var(--sky)",
    brand: "var(--mint)",
  };

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k === "style") node.style.cssText = v;
      else node.setAttribute(k, v);
    }
    children.forEach((c) => c && node.appendChild(c));
    return node;
  };

  // Site text
  document.querySelectorAll('[data-site="name"]').forEach((n) => (n.textContent = SITE.name));
  document.querySelectorAll('[data-site="owner"]').forEach((n) => (n.textContent = SITE.owner));
  $("#year").textContent = new Date().getFullYear();

  // Contact
  if (SITE.email) {
    $("#email-btn").href = `mailto:${SITE.email}`;
    $("#email-link").href = `mailto:${SITE.email}`;
    $("#email-link").textContent = SITE.email;
  }
  if (SITE.calendly) {
    const cal = $("#calendly-btn");
    cal.href = SITE.calendly;
    cal.hidden = false;
    document.querySelectorAll("[data-calendly-or-contact]").forEach((a) => {
      a.href = SITE.calendly;
      a.target = "_blank";
      a.rel = "noopener";
    });
  } else {
    // No booking link yet: point "Book a call" at the contact section.
    document.querySelectorAll("[data-calendly-or-contact]").forEach((a) => (a.textContent = "Get in touch"));
  }
  const socials = $("#socials");
  (SITE.socials || []).forEach((s) => {
    socials.appendChild(el("li", {}, [el("a", { href: s.url, target: "_blank", rel: "noopener", text: s.label })]));
  });
  const tools = $("#tools");
  (SITE.tools || []).forEach((t) => tools.appendChild(el("li", { text: t })));

  // Hero reel
  if (SITE.reel) {
    const v = el("video", { src: SITE.reel, autoplay: "", muted: "", loop: "", playsinline: "", preload: "metadata" });
    if (SITE.reelPoster) v.poster = SITE.reelPoster;
    v.muted = true;
    const slot = $("#reel-slot");
    slot.innerHTML = "";
    slot.appendChild(v);
  }

  // Work grid
  const grid = $("#work-grid");
  const canHover = window.matchMedia("(hover: hover)").matches;

  WORK.forEach((item, i) => {
    const pending = !item.video;
    const card = el("button", {
      class: "card" + (pending ? " is-pending" : ""),
      "data-cat": item.category,
      "data-ratio": item.ratio || "9:16",
      "aria-label": pending ? `${item.title}, in production` : `Play ${item.title}`,
      type: "button",
    });
    if (pending) {
      card.setAttribute("aria-disabled", "true");
      card.appendChild(el("div", { class: "card-pending-art", style: `--c: ${CATEGORY_COLORS[item.category] || "var(--accent)"}` }));
      card.appendChild(el("span", { class: "card-badge", text: "In production" }));
    } else {
      if (item.poster) card.appendChild(el("img", { src: item.poster, alt: "", loading: "lazy" }));
      if (canHover) {
        const preview = el("video", { muted: "", loop: "", playsinline: "", preload: "none" });
        preview.muted = true;
        preview.dataset.src = item.video;
        card.appendChild(preview);
        card.addEventListener("mouseenter", () => {
          if (!preview.src) preview.src = preview.dataset.src;
          preview.play().catch(() => {});
        });
        card.addEventListener("mouseleave", () => preview.pause());
      }
      card.appendChild(el("span", { class: "card-play", "aria-hidden": "true" }));
      card.addEventListener("click", () => openLightbox(item));
    }
    card.appendChild(
      el("div", { class: "card-meta" }, [
        el("div", { class: "card-cat", text: CATEGORY_LABELS[item.category] || item.category }),
        el("div", { class: "card-title", text: item.title }),
      ])
    );
    grid.appendChild(card);
  });

  // Filters
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((c) => {
        c.classList.toggle("is-active", c === chip);
        c.setAttribute("aria-selected", c === chip ? "true" : "false");
      });
      const f = chip.dataset.filter;
      grid.querySelectorAll(".card").forEach((card) => {
        card.classList.toggle("is-hidden", f !== "all" && card.dataset.cat !== f);
      });
    });
  });

  // Lightbox
  const box = $("#lightbox");
  const media = $("#lightbox-media");

  function openLightbox(item) {
    media.innerHTML = "";
    media.classList.toggle("is-wide", item.ratio === "16:9");
    const v = el("video", { src: item.video, controls: "", autoplay: "", playsinline: "" });
    if (item.poster) v.poster = item.poster;
    media.appendChild(v);
    $("#lightbox-cat").textContent = CATEGORY_LABELS[item.category] || item.category;
    $("#lightbox-title").textContent = item.title;
    $("#lightbox-summary").textContent = item.summary || "";
    const dl = $("#lightbox-details");
    dl.innerHTML = "";
    Object.entries(item.details || {}).forEach(([k, val]) => {
      dl.appendChild(el("dt", { text: k }));
      dl.appendChild(el("dd", { text: val }));
    });
    box.showModal();
  }
  function closeLightbox() {
    const v = media.querySelector("video");
    if (v) v.pause();
    box.close();
  }
  $("#lightbox-close").addEventListener("click", closeLightbox);
  box.addEventListener("click", (e) => { if (e.target === box) closeLightbox(); });
  box.addEventListener("close", () => { const v = media.querySelector("video"); if (v) v.pause(); });
})();
