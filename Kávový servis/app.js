(function () {
  const state = {
    language: localStorage.getItem("site-language") || window.SITE_I18N.defaultLanguage || "cs"
  };

  const getDictionary = () => {
    return window.SITE_I18N.languages[state.language] || window.SITE_I18N.languages.cs;
  };

  const getValue = (path, dictionary = getDictionary()) => {
    return path.split(".").reduce((value, key) => value && value[key], dictionary);
  };

  const translatePage = () => {
    const dictionary = getDictionary();
    document.documentElement.lang = state.language;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = getValue(node.dataset.i18n, dictionary);
      if (typeof value === "string") {
        node.textContent = value;
      }
    });

    const title = getValue("meta.title", dictionary);
    if (title) {
      document.title = title;
    }
  };

  const renderServices = () => {
    const dictionary = getDictionary();
    const root = document.getElementById("service-groups");
    if (!root) return;

    const groups = dictionary.serviceGroups || [];
    const moreText = dictionary.services?.more || "Kontakt";
    root.innerHTML = groups.map((group) => {
      const cards = group.items.map((item) => {
        const mainSrc = `./img/${item.slug}--main.png`;
        const hoverSrc = `./img/${item.slug}--hover.png`;

        return `
          <article class="service-card reveal" id="${item.slug}">
            <div class="service-card__media">
              <img class="main-img" src="${mainSrc}" alt="${item.alt}" loading="lazy">
              <img class="hover-img" src="${hoverSrc}" alt="" loading="lazy" aria-hidden="true">
            </div>
            <span class="service-card__section">${item.section}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a class="service-card__link" href="#contact">${moreText} →</a>
          </article>
        `;
      }).join("");

      return `
        <section class="service-group" id="${group.id}">
          <h3 class="service-group__title"><span>${group.icon}</span>${group.title}</h3>
          <div class="cards">${cards}</div>
        </section>
      `;
    }).join("");
  };

  const setupMenu = () => {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;

    const setOpen = (isOpen) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      menu.classList.toggle("is-open", isOpen);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  };

  const setupLanguage = () => {
    const select = document.getElementById("language");
    if (!select) return;

    const available = Object.keys(window.SITE_I18N.languages);
    select.innerHTML = available.map((code) => `<option value="${code}">${code.toUpperCase()}</option>`).join("");
    select.value = state.language;

    select.addEventListener("change", () => {
      state.language = select.value;
      localStorage.setItem("site-language", state.language);
      translatePage();
      renderServices();
      setupRevealObserver();
    });
  };

  let revealObserver;

  const setupRevealObserver = () => {
    if (revealObserver) {
      revealObserver.disconnect();
    }

    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    nodes.forEach((node) => revealObserver.observe(node));
  };

  const setupCurrentYear = () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  };

  const boot = () => {
    translatePage();
    renderServices();
    setupLanguage();
    setupMenu();
    setupCurrentYear();
    setupRevealObserver();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
