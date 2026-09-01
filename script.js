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

  const themeData = {
    solo: {
      main: "#496775",
      soft: "#e3edf0",
      background: "#f4f1e9",
      label: "SOLO JOURNEY",
      emoji: "🧭"
    },
    beach: {
      main: "#267fa2",
      soft: "#dff3f8",
      background: "#edf9fc",
      label: "COASTAL ESCAPE",
      emoji: "🏖️"
    },
    minimal: {
      main: "#59616c",
      soft: "#e9edf1",
      background: "#f6f7f8",
      label: "MINIMAL GETAWAY",
      emoji: "✦"
    },
    cat: {
      main: "#b45f4b",
      soft: "#f7e6d7",
      background: "#fff6e9",
      label: "COZY ADVENTURE",
      emoji: "🐾"
    }
  };

  const showcase = document.querySelector("[data-theme-showcase]");
  if (showcase) {
    const label = showcase.querySelector("[data-theme-label]");
    const emoji = showcase.querySelector("[data-theme-emoji]");
    const themeButtons = showcase.querySelectorAll("[data-theme-choice]");

    const selectTheme = (key) => {
      const theme = themeData[key] || themeData.solo;
      showcase.dataset.themeShowcase = key;
      showcase.style.setProperty("--showcase-main", theme.main);
      showcase.style.setProperty("--showcase-soft", theme.soft);
      showcase.style.setProperty("--showcase-bg", theme.background);
      if (label) label.textContent = theme.label;
      if (emoji) emoji.textContent = theme.emoji;
      themeButtons.forEach((button) => {
        const active = button.dataset.themeChoice === key;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    };

    themeButtons.forEach((button) => {
      button.addEventListener("click", () => selectTheme(button.dataset.themeChoice));
    });
    selectTheme(showcase.dataset.themeShowcase || "solo");
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
