(() => {
  "use strict";

  // Add the public App Store URL after release. TestFlight links can remain as
  // an alternate download path.
  const APP_STORE_URL = "";

  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-button]");
  const navigation = document.querySelector("[data-nav]");

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  if (APP_STORE_URL) {
    document.querySelectorAll("[data-app-store-link]").forEach((link) => {
      link.href = APP_STORE_URL;
      link.removeAttribute("aria-disabled");
    });
    document.querySelectorAll("[data-app-store-status]").forEach((node) => {
      node.textContent = "Now available on the App Store.";
    });
  }

  const updateHeader = () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 18);
    }
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      navigation.classList.toggle("open", !open);
    });
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("open");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("open");
        menuButton.focus();
      }
    });
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll("[data-reveal]");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("revealed"));
  } else {
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        activeObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px" });
    revealItems.forEach((item) => observer.observe(item));
  }

  document.querySelectorAll(".faq-list details").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (!details.open) return;
      document.querySelectorAll(".faq-list details[open]").forEach((other) => {
        if (other !== details) other.open = false;
      });
    });
  });
})();
