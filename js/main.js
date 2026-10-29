
// ======================================
// ULF WEBSITE - MAIN JAVASCRIPT
// Shared website functionality
// ======================================

// Automatically update footer year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ======================================
// HERO VIDEO
// ======================================

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  // Pause video when the browser tab is hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      heroVideo.pause();
    } else {
      heroVideo.play().catch(() => {});
    }
  });
}


// ======================================
// NAVIGATION SCROLL EFFECT
// ======================================

const header = document.querySelector(".site-header");

if (header) {
  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  };

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });
}


// ======================================
// SMOOTH SCROLL FOR SAME-PAGE LINKS
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ======================================
// REVEAL ELEMENTS ON SCROLL
// ======================================

const revealElements = document.querySelectorAll(
  ".section-heading, .objective-row, .membership-card, " +
  ".governance-item, .news-card, .news-feature, .cta-section"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
}
