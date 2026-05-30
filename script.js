const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
};

const categories = ["Graphic Design", "Posters", "Motion Graphics", "Video Editing"];

const projects = [
  {
    id: "fanta-poster-design",
    title: "Fanta Poster Design",
    category: "Posters",
    description: "A vibrant beverage campaign poster with playful energy, bold product focus, and a fresh commercial composition.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/posters/fanta-poster-design.jpg",
    media: "public/projects/posters/fanta-poster-design.jpg",
    software: ["Photoshop", "Graphic Design"]
  },
  {
    id: "gestalt-principle-poster",
    title: "Gestalt Principle Poster",
    category: "Posters",
    description: "A visual design study exploring Gestalt principles through structured hierarchy, form, and composition.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/posters/gestalt-principle-poster.jpg",
    media: "public/projects/posters/gestalt-principle-poster.jpg",
    software: ["Photoshop", "Layout Design"]
  },
  {
    id: "holi-poster",
    title: "Holi Festival Poster",
    category: "Posters",
    description: "A colorful festive poster designed around the energy, movement, and celebratory spirit of Holi.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/posters/holi-poster.jpg",
    media: "public/projects/posters/holi-poster.jpg",
    software: ["Photoshop", "Poster Design"]
  },
  {
    id: "porsche-gt3-poster",
    title: "Porsche GT3 Poster",
    category: "Posters",
    description: "An automotive poster concept with a premium editorial feel, dramatic framing, and performance-led visual direction.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/posters/porsche-gt3-poster.jpg",
    media: "public/projects/posters/porsche-gt3-poster.jpg",
    software: ["Photoshop", "Automotive Design"]
  },
  {
    id: "unity-day-poster",
    title: "Unity Day Poster",
    category: "Posters",
    description: "A commemorative poster with a strong patriotic visual identity, clear hierarchy, and polished presentation.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/posters/unity-day-poster.jpg",
    media: "public/projects/posters/unity-day-poster.jpg",
    software: ["Photoshop", "Poster Design"]
  },
  {
    id: "business-card",
    title: "Business Card Design",
    category: "Graphic Design",
    description: "A clean and professional business card design with strong typographic hierarchy and brand presence.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/graphic-design/business-card.jpg",
    media: "public/projects/graphic-design/business-card.jpg",
    software: ["Photoshop", "Illustrator"]
  },
  {
    id: "emailer-design",
    title: "Emailer Design",
    category: "Graphic Design",
    description: "A polished email marketing layout designed for high engagement, clear hierarchy, and brand consistency.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/graphic-design/emailer-design.jpg",
    media: "public/projects/graphic-design/emailer-design.jpg",
    software: ["Photoshop", "Illustrator"]
  },
  {
    id: "landscape-design",
    title: "Landscape Artwork",
    category: "Graphic Design",
    description: "A richly detailed landscape composition with atmospheric depth, mood lighting, and refined visual storytelling.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/graphic-design/landscape.jpg",
    media: "public/projects/graphic-design/landscape.jpg",
    software: ["Photoshop"]
  },
  {
    id: "package-design",
    title: "Package Design",
    category: "Graphic Design",
    description: "A product packaging concept combining structural form with bold visual identity and shelf-ready appeal.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/graphic-design/package-design.jpg",
    media: "public/projects/graphic-design/package-design.jpg",
    software: ["Photoshop", "Illustrator"]
  },
  {
    id: "pattern-design",
    title: "Pattern Design",
    category: "Graphic Design",
    description: "Repeatable geometric patterns designed for fashion, packaging, and digital surface applications.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/graphic-design/pattern-design.jpg",
    media: "public/projects/graphic-design/pattern-design.jpg",
    software: ["Illustrator", "Photoshop"]
  },
  {
    id: "game-background",
    title: "Game Background Design",
    category: "Graphic Design",
    description: "An immersive game environment background with layered depth, cinematic atmosphere, and strong visual character.",
    date: "2026",
    mediaType: "image",
    thumbnail: "public/projects/graphic-design/game-background.jpg",
    media: "public/projects/graphic-design/game-background.jpg",
    software: ["Photoshop"]
  },
  {
    id: "logo-animation",
    title: "Logo Animation",
    category: "Motion Graphics",
    description: "A sleek logo reveal animation with fluid motion, precise timing, and a polished broadcast-ready finish.",
    date: "2026",
    mediaType: "video",
    thumbnail: "public/projects/thumbnails/thumb-logo-animation.jpg",
    media: "https://drive.google.com/file/d/15AENRC5jDwpZSb3yCxwmxk2LpUHP-w7a/preview",
    software: ["After Effects", "Premiere Pro"]
  },
  {
    id: "lays-product-design",
    title: "Lays Product Design",
    category: "Motion Graphics",
    description: "A dynamic product showcase video for Lays with bold motion, vibrant visuals, and commercial energy.",
    date: "2026",
    mediaType: "video",
    thumbnail: "public/projects/thumbnails/thumb-lays.jpg",
    media: "https://drive.google.com/file/d/1EkeUH03ANPF3TSM69bz05iybw3EHK8bg/preview",
    software: ["After Effects", "Premiere Pro", "Photoshop"]
  },
  {
    id: "teaser-cops-gangster-devil",
    title: "Teaser — The Gangster, The Cop, The Devil",
    category: "Video Editing",
    description: "A high-energy cinematic teaser with sharp cuts, dramatic pacing, and a compelling narrative build.",
    date: "2026",
    mediaType: "video",
    thumbnail: "public/projects/thumbnails/thumb-teaser.jpg",
    media: "https://drive.google.com/file/d/1XAHfKdk6z9tau1284bMv_AEo4Jshre0a/preview",
    software: ["Premiere Pro", "After Effects", "DaVinci Resolve"]
  },
  {
    id: "short-film-repeating-silence",
    title: "Short Film — The Repeating Silence",
    category: "Video Editing",
    description: "A thoughtful short film edit with deliberate pacing, emotional continuity, and cinematic visual rhythm.",
    date: "2026",
    mediaType: "video",
    thumbnail: "public/projects/thumbnails/thumb-repeating-silence.jpg",
    media: "https://drive.google.com/file/d/1mnWQnYJ-84mOMNt8yuh_wkzMt63r3Zmn/preview",
    software: ["Premiere Pro", "DaVinci Resolve"]
  },
  {
    id: "suzume-trailer",
    title: "Suzume Trailer Edit",
    category: "Video Editing",
    description: "A fan trailer edit of Suzume with precise cuts, atmospheric sound design, and emotional scene pacing.",
    date: "2026",
    mediaType: "video",
    thumbnail: "public/projects/thumbnails/thumb-suzume.jpg",
    media: "https://drive.google.com/file/d/1qvUAlKcYVMEEbdDiD3BEUE4iDweE8H2x/preview",
    software: ["Premiere Pro", "After Effects"]
  }
];


const services = [
  {
    icon: "pen",
    title: "Graphic Design",
    description: "Premium posters, social media creatives, branding assets, campaign visuals, and high-impact artwork.",
    includes: ["Posters", "Social Media", "Branding", "Creative Artwork"]
  },
  {
    icon: "motion",
    title: "Motion Graphics",
    description: "Logo animation, kinetic typography, animated explainer visuals, and modern motion design systems.",
    includes: ["Logo Animation", "Explainers", "Kinetic Type", "Motion Design"]
  },
  {
    icon: "video",
    title: "Video Editing",
    description: "Sharp edits for YouTube, reels, promotional videos, commercials, and digital campaigns.",
    includes: ["YouTube", "Reels", "Commercials", "Promos"]
  },
  {
    icon: "grade",
    title: "Color Grading",
    description: "Professional color correction and cinematic grading for polished, mood-rich video results.",
    includes: ["Cinematic Looks", "Correction", "Finishing"]
  },
  {
    icon: "ai",
    title: "AI-Assisted Creative Solutions",
    description: "Concept development, visual ideation, prompt direction, and AI workflow integration.",
    includes: ["Ideation", "Concepts", "AI Workflow"]
  }
];

const tools = [
  ["public/logos/photoshop.svg", "Adobe Photoshop", "Retouching, composites, campaign visuals, and social creatives."],
  ["public/logos/illustrator.svg", "Adobe Illustrator", "Vector artwork, marks, layout systems, and brand assets."],
  ["public/logos/animate.svg", "Adobe Animate", "2D animation, character movement, and interactive motion assets."],
  ["public/logos/after-effects.svg", "Adobe After Effects", "Motion graphics, title design, visual effects, and animation."],
  ["public/logos/premiere.svg", "Adobe Premiere Pro", "Timeline editing, short-form video, commercials, and reels."],
  ["public/logos/davinci.svg", "DaVinci Resolve", "Color correction, cinematic grading, finishing, and delivery."],
  ["public/logos/chatgpt.svg", "ChatGPT", "Concept exploration, scripting, planning, and AI-assisted production."],
  ["public/logos/gemini.svg", "Google Gemini", "Creative research, prompt ideation, and multimodal thinking."],
  ["public/logos/flow-ai.svg", "Flow AI", "AI workflow support for concepts, automation, and visual planning."],
  ["public/logos/canva.svg", "Canva", "Fast layout production, brand kits, and social media adaptations."]
];



const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

let activeCategory = "All";
let searchTerm = "";
let countersStarted = false;

function serviceIcon(name) {
  const icons = {
    pen: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 20l4-1 10-10-3-3L5 16l-1 4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M13 8l3 3" stroke="currentColor" stroke-width="1.8"/></svg>',
    motion: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 12h5l2-6 4 12 2-6h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M16 10l4-3v10l-4-3" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    grade: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.8"/><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="1.8"/></svg>',
    ai: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M18 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" stroke="currentColor" stroke-width="1.5"/></svg>'
  };
  return icons[name] || icons.ai;
}

function cardHTML(project) {
  const videoPreview = project.mediaType === "video" && project.media
    ? `<video src="${project.media}" poster="${project.thumbnail}" muted playsinline preload="metadata"></video>`
    : `<img src="${project.thumbnail}" alt="${project.title}" loading="lazy">`;

  return `
    <button class="card project-card reveal${project.mediaType === 'video' ? ' video-card' : ''}" data-project="${project.id}" type="button" aria-label="Open ${project.title}">
      <div class="media-frame">
        ${videoPreview}
        ${project.mediaType === "video" ? '<span class="play-badge">Play</span>' : ""}
      </div>
      <div class="card-copy">
        <p class="card-category">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tag-row">${project.software.map((tool) => `<span>${tool}</span>`).join("")}</div>
      </div>
    </button>
  `;
}

function renderServices() {
  $("#serviceGrid").innerHTML = services.map((service) => `
    <article class="card reveal">
      <div class="service-icon">${serviceIcon(service.icon)}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <div class="includes">${service.includes.map((item) => `<span>${item}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderTools() {
  $("#toolsGrid").innerHTML = tools.map(([logo, name, description]) => `
    <article class="card tool-card reveal">
      <img class="tool-logo" src="${logo}" alt="${name} logo" loading="lazy">
      <h3>${name}</h3>
      <p>${description}</p>
    </article>
  `).join("");
}

function renderFilters() {
  $("#filterRow").innerHTML = ["All", ...categories].map((category) => `
    <button class="${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">${category}</button>
  `).join("");
}

function filteredProjects() {
  const term = searchTerm.toLowerCase();
  return projects.filter((project) => {
    const categoryMatch = activeCategory === "All" || project.category === activeCategory;
    const searchMatch = [project.title, project.description, project.category, project.date, ...project.software].join(" ").toLowerCase().includes(term);
    return categoryMatch && searchMatch;
  });
}

function renderProjects() {
  $("#portfolioGrid").innerHTML = filteredProjects().map(cardHTML).join("");
  setupHoverPreviews();
  observeReveals();
}

function setupHoverPreviews() {
  $$(".project-card video").forEach((video) => {
    const card = video.closest(".project-card");
    card.addEventListener("mouseenter", () => {
      video.muted = true;
      video.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;

  if (project.mediaType === "video" && project.media) {
    const isDrive = project.media.includes("drive.google.com");
    $("#modalMedia").innerHTML = isDrive
      ? `<iframe src="${project.media}" width="100%" height="100%" frameborder="0" allow="autoplay" allowfullscreen style="min-height:340px;border-radius:12px;"></iframe>`
      : `<video src="${project.media}" poster="${IMAGE_MAP[project.thumbnail] || project.thumbnail}" controls playsinline preload="metadata"></video>`;
  } else if (project.mediaType === "video") {
    $("#modalMedia").innerHTML = `<div class="video-placeholder"><img src="${IMAGE_MAP[project.thumbnail] || project.thumbnail}" alt="${project.title}"><p>Video coming soon.</p></div>`;
  } else {
    $("#modalMedia").innerHTML = `<img src="${IMAGE_MAP[project.media] || project.media}" alt="${project.title}">`;
  }

  $("#modalCategory").textContent = `${project.category} - ${project.date}`;
  $("#modalTitle").textContent = project.title;
  $("#modalDescription").textContent = project.description;
  $("#modalTags").innerHTML = project.software.map((tool) => `<span>${tool}</span>`).join("");
  $("#projectModal").showModal();
}

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  $$(".reveal:not(.visible)").forEach((item) => observer.observe(item));
}

function setupCounters() {
  const statsGrid = $("#statsGrid");
  if (!statsGrid) return;
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting) || countersStarted) return;
    countersStarted = true;
    $$("[data-count]").forEach((counter) => {
      const target = Number(counter.dataset.count);
      const suffix = counter.dataset.suffix || "";
      const duration = 1100;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
    observer.disconnect();
  }, { threshold: 0.35 });
  observer.observe(statsGrid);
}

function setupNavigation() {
  const header = $("#siteHeader");
  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");
  const links = $$(".nav-links a");

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 18);
    let current = null;
    links.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section && section.getBoundingClientRect().top <= 170) current = link;
    });
    links.forEach((link) => link.classList.toggle("active", link === current));
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  links.forEach((link) => link.addEventListener("click", () => navLinks.classList.remove("open")));
}

function setupTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light");
  updateThemeLabel();
  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
    updateThemeLabel();
  });
}

function updateThemeLabel() {
  $("#themeToggle").textContent = document.body.classList.contains("light") ? "Dark" : "Light";
}

function setupContactForm() {
  const form = $("#contactForm");
  const button = $("#submitButton");
  const status = $("#formStatus");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.classList.remove("success");
    status.textContent = "";

    if (form.website.value) return;

    const required = ["fullName", "email", "phone", "projectType", "projectDescription", "budget", "deadline"];
    const missing = required.some((name) => !String(form.elements[name].value || "").trim());
    if (missing || !form.checkValidity()) {
      status.textContent = "Please complete all required fields with valid information.";
      form.reportValidity();
      return;
    }

    const configured = !Object.values(EMAILJS_CONFIG).some((value) => value.startsWith("YOUR_"));
    if (!configured) {
      status.textContent = "EmailJS is ready, but your keys are not added yet. Update EMAILJS_CONFIG in script.js.";
      return;
    }

    button.disabled = true;
    button.textContent = "Sending...";

    try {
      emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
      await emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, form);
      status.textContent = "Your project inquiry has been sent successfully.";
      status.classList.add("success");
      form.reset();
    } catch {
      status.textContent = "Something went wrong while sending. Please email me directly at kshitiz16.05@gmail.com.";
    } finally {
      button.disabled = false;
      button.textContent = "Send Project Inquiry";
    }
  });
}

function setupParticles() {
  const canvas = $("#particleCanvas");
  const context = canvas.getContext("2d");
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let particles = [];

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(96, Math.max(44, Math.floor(window.innerWidth / 18)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r: Math.random() * 1.8 + 0.6
    }));
  }

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle, index) => {
      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 140) {
        particle.x += dx / 170;
        particle.y += dy / 170;
      }
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      context.fillStyle = "rgba(99, 230, 190, 0.56)";
      context.fill();

      for (let i = index + 1; i < particles.length; i++) {
        const other = particles[i];
        const gap = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (gap < 92) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - gap / 92)})`;
          context.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  document.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    $(".cursor-glow").style.left = `${event.clientX}px`;
    $(".cursor-glow").style.top = `${event.clientY}px`;
    document.documentElement.style.setProperty("--mx", `${(event.clientX / window.innerWidth) * 100}%`);
    document.documentElement.style.setProperty("--my", `${(event.clientY / window.innerHeight) * 100}%`);
    document.documentElement.style.setProperty("--px", `${event.clientX / window.innerWidth - 0.5}`);
    document.documentElement.style.setProperty("--py", `${event.clientY / window.innerHeight - 0.5}`);
  });
  resize();
  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderTools();
  renderFilters();
  renderProjects();
  observeReveals();
  setupCounters();
  setupNavigation();
  setupTheme();
  setupContactForm();
  setupParticles();
  $("#year").textContent = new Date().getFullYear();

  $("#filterRow").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderProjects();
  });

  $("#projectSearch").addEventListener("input", (event) => {
    searchTerm = event.target.value;
    renderProjects();
  });

  document.body.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project]");
    if (card) openProject(card.dataset.project);
  });

  $("#modalClose").addEventListener("click", () => $("#projectModal").close());
  $("#projectModal").addEventListener("click", (event) => {
    if (event.target.id === "projectModal") $("#projectModal").close();
  });
});
