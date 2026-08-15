const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const header = document.getElementById("site-header");
const progressBar = document.querySelector(".scroll-progress span");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const sectionLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
const sections = sectionLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    sectionLinks.forEach(link => {
      const isActive = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("active", isActive);
    });
  },
  { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.4] }
);

sections.forEach(section => sectionObserver.observe(section));

function updateScrollUi() {
  const y = window.scrollY;
  if (header) header.classList.toggle("scrolled", y > 24);

  if (progressBar) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(100, (y / maxScroll) * 100) : 0;
    progressBar.style.width = `${progress}%`;
  }
}

updateScrollUi();
window.addEventListener("scroll", updateScrollUi, { passive: true });

const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
if (supportsFinePointer) {
  document.querySelectorAll(".spotlight").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
    });
  });
}
