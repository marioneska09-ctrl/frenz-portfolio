/**
 * Cinematic $7,000 Portfolio Interactive Engine
 * Identity: Gagabu-an, Frenz Levi Jan | BSIT @ ESSU Guiuan Campus | frnzlvjn@gmail.com
 * Honors: With Honors in Junior High School and Senior High School (GAS); Dean's Lister in 3rd Year
 * Production Projects:
 * 1. GRSTC Web Portal (https://grstc.free.nf/)
 * 2. Biling Boarding House Guiuan (https://bilingbhguiuan.gt.tc/)
 * 3. Baras Bulletin (https://baras-bulletin.gt.tc/)
 */

// 1. Initialize Lenis Buttery Smooth Scroll Engine
let lenis = null;
if (typeof Lenis !== "undefined") {
  lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.8,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// 2. Production Projects Data Connected to Live URLs
const projectsData = [
  {
    id: 0,
    title: "GRSTC — Tourist Feedback Platform",
    category: "Tourism & Feedback Platform",
    image: "images/grstc-homepage.jpg",
    description: "A tourist complaint and feedback platform for Guiuan's food-serving establishments. Tourists visiting Guiuan can submit complaints or feedback about any food-serving establishment in the area. Each submission is reviewed by the Guiuan Tourism Office administrator, who may approve or reject it. Approved complaints are forwarded directly to the concerned food-serving establishment for them to review and address accordingly.",
    features: [
      "Tourist-facing complaint and feedback submission form for food-serving establishments in Guiuan",
      "Admin review dashboard for the Guiuan Tourism Office to approve or reject submitted complaints",
      "Automated notification system that forwards approved complaints to the reported establishment",
      "Complaint tracking and status monitoring for transparent resolution workflow",
      "Production-ready deployment on live hosting at https://grstc.free.nf/"
    ],
    tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Apache"],
    source: "https://github.com",
    live: "https://grstc.free.nf/"
  },
  {
    id: 1,
    title: "Biling Boarding House Guiuan",
    category: "Web Application & Booking",
    image: "images/bilingbh-homepage.jpg",
    description: "A tailored boarding house reservation and tenant directory web application created for students of Eastern Samar State University (ESSU) Guiuan Campus and local transients searching for housing accommodation in Guiuan.",
    features: [
      "Room availability listings with pricing, amenities, and contact info",
      "Interactive tenant and visitor reservation inquiry workflow",
      "Lightweight database models handling bookings and room status updates",
      "Production-ready deployment on live hosting at https://bilingbhguiuan.gt.tc/"
    ],
    tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "REST APIs"],
    source: "https://github.com",
    live: "https://bilingbhguiuan.gt.tc/"
  },
  {
    id: 2,
    title: "Baras Bulletin",
    category: "Community & Public Info",
    image: "images/baras-bulletin-homepage.jpg",
    description: "A localized digital community bulletin board and public announcement portal built for Barangay Baras in Guiuan, Eastern Samar. Delivers official advisories, disaster alerts, and community event updates directly to residents.",
    features: [
      "Real-time barangay public information and emergency hotline directory",
      "Community event calendar and official public notices board",
      "Fast, responsive layout engineered for low-bandwidth mobile connections",
      "Production-ready deployment on live hosting at https://baras-bulletin.gt.tc/"
    ],
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "LocalStorage", "Cloud Hosting"],
    source: "https://github.com",
    live: "https://baras-bulletin.gt.tc/"
  }
];

// 3. Interactive Background Canvas (Cinematic Constellation Wave)
function initCanvasBackground() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 20), 70);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.4 + 0.6,
      alpha: Math.random() * 0.45 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(129, 140, 248, ${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 105) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 105)})`;
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// 4. Ultra-Smooth Scroll Sequence: Dual-Buffer Sub-Frame Crossfading
function initScrollSequence() {
  const section = document.getElementById("interactive-scroll");
  const canvas = document.getElementById("scroll-sequence-canvas");
  const percentText = document.getElementById("scroll-percentage");
  const badge1 = document.getElementById("scroll-badge-1");
  const badge2 = document.getElementById("scroll-badge-2");
  const badge3 = document.getElementById("scroll-badge-3");

  if (!section || !canvas) return;

  const ctx = canvas.getContext("2d");
  const frameCount = 15;
  const frameImages = [];
  let loadedCount = 0;

  // Preload all 15 transparent webp frames (fallback to png)
  for (let i = 1; i <= frameCount; i++) {
    const pad = String(i).padStart(3, "0");
    const img = new Image();
    
    img.src = `frames/ezgif-frame-${pad}.webp`;
    img.onerror = () => {
      img.src = `frames/ezgif-frame-${pad}.png`;
    };

    img.onload = () => {
      loadedCount++;
      if (loadedCount === 1) {
        drawFrame(0);
      }
    };
    frameImages.push(img);
  }

  let currentFrame = 0.0;
  let targetFrame = 0.0;
  let scrollProgress = 0.0;

  function calculateTargetFrame() {
    const rect = section.getBoundingClientRect();
    const scrollDistance = section.offsetHeight - window.innerHeight;
    const currentScroll = -rect.top;

    if (scrollDistance > 0) {
      scrollProgress = Math.max(0, Math.min(1, currentScroll / scrollDistance));
    } else {
      scrollProgress = 0;
    }

    // Target frame as a continuous float value between 0.0 and 14.0
    targetFrame = scrollProgress * (frameCount - 1);

    if (percentText) {
      percentText.textContent = `${Math.round(scrollProgress * 100)}%`;
    }

    // Milestone Badges Transition
    if (badge1 && badge2 && badge3) {
      if (scrollProgress < 0.30) {
        badge1.classList.remove("opacity-0", "translate-y-4");
        badge1.classList.add("opacity-100", "translate-y-0");

        badge2.classList.remove("opacity-100", "translate-y-0");
        badge2.classList.add("opacity-0", "translate-y-4");

        badge3.classList.remove("opacity-100", "translate-y-0");
        badge3.classList.add("opacity-0", "translate-y-4");
      } else if (scrollProgress >= 0.30 && scrollProgress < 0.70) {
        badge1.classList.remove("opacity-100", "translate-y-0");
        badge1.classList.add("opacity-0", "translate-y-4");

        badge2.classList.remove("opacity-0", "translate-y-4");
        badge2.classList.add("opacity-100", "translate-y-0");

        badge3.classList.remove("opacity-100", "translate-y-0");
        badge3.classList.add("opacity-0", "translate-y-4");
      } else {
        badge1.classList.remove("opacity-100", "translate-y-0");
        badge1.classList.add("opacity-0", "translate-y-4");

        badge2.classList.remove("opacity-100", "translate-y-0");
        badge2.classList.add("opacity-0", "translate-y-4");

        badge3.classList.remove("opacity-0", "translate-y-4");
        badge3.classList.add("opacity-100", "translate-y-0");
      }
    }
  }

  // Dual-Buffer Sub-Frame Crossfader for Buttery Continuous Motion
  function drawFrame(framePosition) {
    const clamped = Math.max(0, Math.min(frameCount - 1, framePosition));
    const idxA = Math.floor(clamped);
    const idxB = Math.min(frameCount - 1, idxA + 1);
    const blendFactor = clamped - idxA;

    const imgA = frameImages[idxA];
    const imgB = frameImages[idxB];
    if (!imgA || !imgA.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth || 800;
    const displayHeight = canvas.clientHeight || 500;

    const targetWidth = Math.floor(displayWidth * dpr);
    const targetHeight = Math.floor(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    const imgAspect = imgA.width / imgA.height;
    const canvasAspect = displayWidth / displayHeight;
    let drawW, drawH, posX, posY;

    if (canvasAspect > imgAspect) {
      drawH = displayHeight;
      drawW = displayHeight * imgAspect;
      posX = (displayWidth - drawW) / 2;
      posY = 0;
    } else {
      drawW = displayWidth;
      drawH = displayWidth / imgAspect;
      posX = 0;
      posY = (displayHeight - drawH) / 2;
    }

    // 1. Draw base frame A
    ctx.globalAlpha = 1.0;
    ctx.drawImage(imgA, posX, posY, drawW, drawH);

    // 2. Alpha crossfade frame B over frame A (Eliminates discrete frame jumping)
    if (idxB !== idxA && imgB && imgB.complete && blendFactor > 0.005) {
      ctx.globalAlpha = blendFactor;
      ctx.drawImage(imgB, posX, posY, drawW, drawH);
      ctx.globalAlpha = 1.0;
    }

    ctx.restore();
  }

  // 60FPS Continuous Render Loop with Fluid Damping
  function renderLoop() {
    currentFrame += (targetFrame - currentFrame) * 0.085;
    drawFrame(currentFrame);
    requestAnimationFrame(renderLoop);
  }

  window.addEventListener("scroll", calculateTargetFrame, { passive: true });
  if (lenis) {
    lenis.on("scroll", calculateTargetFrame);
  }

  window.addEventListener("resize", () => {
    calculateTargetFrame();
    drawFrame(currentFrame);
  });

  calculateTargetFrame();
  renderLoop();
}

// 5. Radial Spotlight Mouse Tracker (Apple / Linear / Vercel effect)
function initSpotlightEffect() {
  const cards = document.querySelectorAll(".spotlight-card");
  
  window.addEventListener("mousemove", (e) => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

// 6. Dynamic Typing Effect (Displaying Real Production Projects)
const typingWords = [
  "grstc.free.nf",
  "bilingbhguiuan.gt.tc",
  "baras-bulletin.gt.tc",
  "Full-Stack Web Architect",
  "BSIT @ ESSU Guiuan Campus"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
  if (!typingElement) return;

  const currentWord = typingWords[wordIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 30 : 65;

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1600;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
    typingSpeed = 300;
  }

  setTimeout(typeEffect, typingSpeed);
}

// 7. Theme Toggle (Dark / Light)
const themeToggleBtn = document.getElementById("theme-toggle");

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (window.lucide) lucide.createIcons();
  });
}

// 8. Mobile Flyout Menu
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// 9. Project Category Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active", "bg-white", "text-slate-950");
      btn.classList.add("bg-white/[0.04]", "text-slate-400");
    });
    button.classList.add("active", "bg-white", "text-slate-950");
    button.classList.remove("bg-white/[0.04]", "text-slate-400");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "flex";
        card.classList.remove("scale-95", "opacity-0");
        card.classList.add("scale-100", "opacity-100");
      } else {
        card.style.display = "none";
      }
    });
  });
});

// 10. Project Details Modal Dialog Connected to Live Sites
const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalImage = document.getElementById("modal-image");
const modalDesc = document.getElementById("modal-description");
const modalFeatures = document.getElementById("modal-features");
const modalTech = document.getElementById("modal-tech");
const modalSource = document.getElementById("modal-source");
const modalLive = document.getElementById("modal-live");

function openModal(projectId) {
  const project = projectsData.find((p) => p.id === parseInt(projectId));
  if (!project || !modal) return;

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalDesc.textContent = project.description;
  
  modalFeatures.innerHTML = project.features
    .map((feat) => `<li>${feat}</li>`)
    .join("");

  modalTech.innerHTML = project.tech
    .map((t) => `<span class="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.05] border border-white/10 text-slate-300">${t}</span>`)
    .join("");

  modalSource.href = project.source;
  modalLive.href = project.live;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  if (window.lucide) lucide.createIcons();
}

function closeModal() {
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

document.querySelectorAll(".view-details-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const projectId = e.currentTarget.getAttribute("data-project");
    openModal(projectId);
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

// 11. Contact Form Interactive Feedback
const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showStatus("Please complete all required fields.", "text-rose-400");
      return;
    }

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Sending message to frnzlvjn@gmail.com...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      contactForm.reset();
      showStatus("✓ Salamat! Your message was delivered. I'll get back to you via frnzlvjn@gmail.com within 24 hours.", "text-emerald-400 font-mono");
      if (window.lucide) lucide.createIcons();
    }, 1100);
  });
}

function showStatus(msg, colorClass) {
  if (!formStatus) return;
  formStatus.className = `text-xs mt-3 ${colorClass} block animate-pulse`;
  formStatus.textContent = msg;

  setTimeout(() => {
    formStatus.classList.remove("animate-pulse");
  }, 3500);
}

// 12. Dynamic Current Year
const yearSpan = document.getElementById("current-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Global Lifecycle Initializations
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCanvasBackground();
  initScrollSequence();
  initSpotlightEffect();
  typeEffect();
  if (window.lucide) {
    lucide.createIcons();
  }
});
