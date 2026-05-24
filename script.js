// TEMAS
function setTheme(theme) {
  document.body.classList.remove("light", "dark", "neon");
  document.body.classList.add(theme);
}

// ANIMAÇÃO SCROLL (REVEAL)
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

elements.forEach((el) => observer.observe(el));
