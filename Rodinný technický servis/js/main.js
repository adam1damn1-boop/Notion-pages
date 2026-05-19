(function () {
  const state = { lang: "cs" };
  const dictionary = window.SITE_I18N || {};

  const getValue = (path, source) => path.split(".").reduce((acc, key) => {
    if (acc === undefined || acc === null) return undefined;
    return acc[key];
  }, source);

  const t = (path) => getValue(path, dictionary[state.lang]);

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);

  const renderServices = () => {
    const container = document.querySelector("[data-services]");
    const items = t("services.items") || [];
    if (!container) return;

    container.innerHTML = items.map((item) => `
      <article class="service-card reveal" tabindex="0">
        <div class="service-media">
          <img src="./img/${escapeHtml(item.id)}--main.png" width="330" height="320" loading="lazy" alt="${escapeHtml(item.alt)}">
          <img src="./img/${escapeHtml(item.id)}--hover.png" width="330" height="320" loading="lazy" alt="">
        </div>
        <div class="service-body">
          <span class="service-meta">${escapeHtml(item.section)} · ${escapeHtml(item.group)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </article>
    `).join("");
  };

  const observeReveal = () => {
    const nodes = document.querySelectorAll(".reveal:not(.is-observed)");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => {
      node.classList.add("is-observed");
      observer.observe(node);
    });
  };

  const applyLanguage = () => {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = t(node.dataset.i18n);
      if (typeof value === "string") node.textContent = value;
    });
    renderServices();
    observeReveal();
    document.querySelectorAll(".lang-button").forEach((button) => {
      const active = button.dataset.lang === state.lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  const initHeader = () => {
    const header = document.querySelector("[data-elevate]");
    if (!header) return;
    const update = () => header.classList.toggle("is-elevated", window.scrollY > 10);
    update();
    window.addEventListener("scroll", update, { passive: true });
  };

  const initLanguageButtons = () => {
    document.querySelectorAll(".lang-button").forEach((button) => {
      button.addEventListener("click", () => {
        const next = button.dataset.lang;
        if (dictionary[next]) {
          state.lang = next;
          applyLanguage();
        } else {
          button.animate([
            { transform: "translateX(0)" },
            { transform: "translateX(-4px)" },
            { transform: "translateX(4px)" },
            { transform: "translateX(0)" }
          ], { duration: 260 });
        }
      });
    });
  };

  const initSmoothFocus = () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.setAttribute("tabindex", "-1");
          window.setTimeout(() => target.focus({ preventScroll: true }), 450);
        }
      });
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const year = document.querySelector("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());
    initHeader();
    initLanguageButtons();
    initSmoothFocus();
    applyLanguage();
  });
})();
