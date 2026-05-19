(function () {
  'use strict';

  var DEFAULT_LANG = 'cs';
  var STORAGE_KEY = 'klid-v-dome:lang';

  function getDict(lang) {
    var dict = window.I18N && window.I18N[lang];
    if (!dict) dict = window.I18N && window.I18N[DEFAULT_LANG];
    return dict || {};
  }

  function applyTranslations(lang) {
    var dict = getDict(lang);
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var key = node.getAttribute('data-i18n');
      if (!key || !(key in dict)) continue;
      var attr = node.getAttribute('data-i18n-attr');
      if (attr) {
        node.setAttribute(attr, dict[key]);
      } else {
        node.textContent = dict[key];
      }
    }
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
  }

  function initLangSwitcher() {
    var select = document.getElementById('lang-select');
    if (!select) return;
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var initial = (stored && window.I18N && window.I18N[stored]) ? stored : DEFAULT_LANG;
    if (select.value !== initial) {
      var match = select.querySelector('option[value="' + initial + '"]');
      if (match) select.value = initial;
    }
    applyTranslations(select.value || DEFAULT_LANG);
    select.addEventListener('change', function () {
      var lang = select.value || DEFAULT_LANG;
      applyTranslations(lang);
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    });
  }

  function initReveal() {
    var nodes = document.querySelectorAll('.reveal');
    if (!nodes.length) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (var i = 0; i < nodes.length; i++) nodes[i].classList.add('visible');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    for (var j = 0; j < nodes.length; j++) observer.observe(nodes[j]);
  }

  function initSmoothAnchors() {
    document.addEventListener('click', function (event) {
      var link = event.target.closest && event.target.closest('a[href^="#"]');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    });
  }

  function initYear() {
    var node = document.getElementById('year');
    if (node) node.textContent = String(new Date().getFullYear());
  }

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    initLangSwitcher();
    initReveal();
    initSmoothAnchors();
    initYear();
  });
})();
