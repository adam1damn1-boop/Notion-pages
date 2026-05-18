(function () {
  'use strict';

  // 1) Apply translations
  function applyI18n(lang) {
    var dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N[window.I18N.default]) || {};
    document.documentElement.setAttribute('lang', lang);

    // Text content nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var attr = el.getAttribute('data-i18n-attr');
      var value = dict[key];
      if (typeof value !== 'string') return;
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.textContent = value;
      }
    });

    // Page meta title
    if (dict['meta.title']) document.title = dict['meta.title'];
  }

  // 2) Language switcher (extendable: only cs available today)
  function initLangSwitcher() {
    var stored = (function () { try { return localStorage.getItem('site-lang'); } catch (e) { return null; } })();
    var available = (window.I18N && window.I18N.available) || ['cs'];
    var initial = available.indexOf(stored) >= 0 ? stored : (window.I18N.default || 'cs');
    applyI18n(initial);
    document.querySelectorAll('.lang-switcher__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (!lang || available.indexOf(lang) < 0) return;
        document.querySelectorAll('.lang-switcher__btn').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        applyI18n(lang);
        try { localStorage.setItem('site-lang', lang); } catch (e) {}
      });
    });
  }

  // 3) Hover-image preload + swap (works on hover and touch tap)
  function initHoverImages() {
    document.querySelectorAll('.hover-img').forEach(function (el) {
      var main = el.getAttribute('data-main');
      var hover = el.getAttribute('data-hover');
      if (!hover) return;
      // Preload
      var pre = new Image(); pre.src = hover;
      // Set CSS variable for ::after overlay (subtle layered swap on cards)
      el.style.setProperty('--hover-bg', "url('" + hover + "')");

      var img = el.querySelector('img');
      if (!img || !main) return;
      el.addEventListener('mouseenter', function () { img.src = hover; });
      el.addEventListener('mouseleave', function () { img.src = main; });
      // Mobile touch: toggle class
      el.addEventListener('touchstart', function () {
        el.classList.toggle('is-touched');
        img.src = el.classList.contains('is-touched') ? hover : main;
      }, { passive: true });
    });
  }

  // 4) Mobile nav toggle
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('primary-nav-mobile');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      menu.classList.toggle('is-open', !open);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      });
    });
  }

  // 5) Scroll reveal
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  // 6) Gracefully handle image assets that were referenced by the Notion export but not embedded.
  function initImageFallbacks() {
    document.querySelectorAll('img').forEach(function (img) {
      function markMissing() {
        var wrapper = img.closest('.hover-img') || img.parentElement;
        if (wrapper) {
          wrapper.classList.add('is-missing-image');
          wrapper.setAttribute('data-placeholder', img.getAttribute('alt') || 'Obrázek');
        }
        img.setAttribute('aria-hidden', 'true');
      }

      img.addEventListener('error', markMissing);
      if (img.complete && img.naturalWidth === 0) markMissing();
    });
  }

  // 7) Footer year
  function initYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLangSwitcher();
    initHoverImages();
    initMobileNav();
    initReveal();
    initImageFallbacks();
    initYear();
  });
})();
