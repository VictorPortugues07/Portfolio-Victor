/* VICTOR HUGO DE PIERI JUSTINO — script.js */

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
function closeMobile() {
  mobileMenu.classList.remove("open");
}

// NAV SCROLL
const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.style.borderBottomColor =
      window.scrollY > 10 ? "rgba(10,10,10,0.13)" : "rgba(10,10,10,0.09)";
  },
  { passive: true },
);

// COUNTER
function animateCounter(el, target, duration = 1400) {
  let start = null;
  const step = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.target));
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 },
);
document
  .querySelectorAll(".hc-num")
  .forEach((el) => counterObserver.observe(el));

// SKILL BARS
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".sg-fill").forEach((bar, i) => {
          setTimeout(() => bar.classList.add("animated"), i * 80);
        });
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);
const stackSection = document.getElementById("stack");
if (stackSection) barObserver.observe(stackSection);

// REVEAL
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
);

document
  .querySelectorAll(".work-card, .sg-item, .tl-item, .about-bio > *")
  .forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 0.07}s`;
    revealObserver.observe(el);
  });

// PHOTO GALLERY — switch main photo
const thumbs = document.querySelectorAll(".photo-thumb");
const mainImg = document.getElementById("photoMain");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const src = thumb.dataset.img;
    // Fade out, swap, fade in
    mainImg.style.opacity = "0";
    mainImg.style.transition = "opacity 0.25s ease";
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = "1";
    }, 250);
    // Update active state
    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const allImages = Array.from(thumbs).map((t) => t.dataset.img);
let currentIdx = 0;

thumbs.forEach((thumb, idx) => {
  thumb.addEventListener("dblclick", () => openLightbox(idx));
});

// Also open lightbox on click of main photo
if (mainImg) {
  mainImg.addEventListener("click", () => {
    const src = mainImg.src;
    const idx = allImages.findIndex((i) => i === src) ?? 0;
    openLightbox(idx >= 0 ? idx : 0);
  });
  mainImg.style.cursor = "zoom-in";
}

function openLightbox(idx) {
  currentIdx = idx;
  lbImg.src = allImages[idx];
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function lbNav(dir, e) {
  e.stopPropagation();
  currentIdx = (currentIdx + dir + allImages.length) % allImages.length;
  lbImg.style.opacity = "0";
  lbImg.style.transition = "opacity 0.15s ease";
  setTimeout(() => {
    lbImg.src = allImages[currentIdx];
    lbImg.style.opacity = "1";
  }, 150);
}

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lbNav(-1, e);
  if (e.key === "ArrowRight") lbNav(1, e);
});

// CONTACT FORM
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = "Enviado!";
  btn.style.background = "#22C55E";
  btn.style.borderColor = "#22C55E";
  setTimeout(() => {
    btn.textContent = "Enviar mensagem";
    btn.style.background = "";
    btn.style.borderColor = "";
    e.target.reset();
  }, 3000);
}
