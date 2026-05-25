/* =====================================================
   VICTOR HUGO DE PIERI JUSTINO — script.js
   ===================================================== */

// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ── NAV SCROLL SHRINK ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 10
    ? 'rgba(10,10,10,0.13)'
    : 'rgba(10,10,10,0.09)';
}, { passive: true });

// ── COUNTER ANIMATION ──
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

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCounter(el, parseInt(el.dataset.target));
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.hc-num').forEach(el => counterObserver.observe(el));

// ── SKILL BARS ──
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.sg-fill').forEach((bar, i) => {
        setTimeout(() => bar.classList.add('animated'), i * 80);
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const stackSection = document.getElementById('stack');
if (stackSection) barObserver.observe(stackSection);

// ── REVEAL ON SCROLL ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 0);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

reveals.forEach(el => revealObserver.observe(el));

// ── AUTO-REVEAL SECTIONS ──
// Add reveal class to section children dynamically
document.querySelectorAll('.work-card, .sg-item, .tl-item, .about-text-col > *').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.07}s`;
  revealObserver.observe(el);
});

// ── CONTACT FORM ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Enviado!';
  btn.style.background = '#22C55E';
  btn.style.borderColor = '#22C55E';
  setTimeout(() => {
    btn.textContent = 'Enviar mensagem';
    btn.style.background = '';
    btn.style.borderColor = '';
    e.target.reset();
  }, 3000);
}