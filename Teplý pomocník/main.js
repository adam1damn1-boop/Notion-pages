(function () {
  'use strict';
  var STORAGE_KEY = 'tp_lang';
  var DEFAULT_LANG = 'cs';

  function getLang() {
    try { return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; } catch (e) { return DEFAULT_LANG; }
  }
  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }
  function resolve(path, dict) {
    return path.split('.').reduce(function (a, k) { return (a == null ? a : a[k]); }, dict);
  }
  function applyLang(lang) {
    var dict = (window.I18N || {})[lang] || (window.I18N || {})[DEFAULT_LANG];
    if (!dict) return;
    document.documentElement.lang = lang;
    var meta = dict.meta || {};
    if (meta.title) document.title = meta.title;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = resolve(key, dict);
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = el.getAttribute('data-i18n-attr').split(',');
      pairs.forEach(function (pair) {
        var parts = pair.split(':');
        var attr = (parts[0] || '').trim();
        var key = (parts[1] || '').trim();
        var val = resolve(key, dict);
        if (typeof val === 'string') el.setAttribute(attr, val);
      });
    });
    var sw = document.getElementById('lang-switch');
    if (sw) sw.value = lang;
  }

  function bindMenu() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function bindLang() {
    var sw = document.getElementById('lang-switch');
    if (!sw) return;
    sw.addEventListener('change', function (e) { setLang(e.target.value); });
  }

  function bindReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  }

  function bindForm() {
    var f = document.getElementById('contact-form');
    if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (f.elements.name.value || '').trim();
      var contact = (f.elements.contact.value || '').trim();
      var msg = (f.elements.message.value || '').trim();
      if (!name || !contact || !msg) {
        f.querySelectorAll('input, textarea').forEach(function (el) {
          if (!el.value.trim()) el.style.borderColor = '#c0654a';
        });
        return;
      }
      var lang = getLang();
      var i18n = (window.I18N || {})[lang] || {};
      var subj = (i18n.contact && i18n.contact.email_subject) || 'Poptávka z webu';
      var body = name + "\n" + contact + "\n\n" + msg;
      window.location.href = 'mailto:pomoc@teplypomocnik.cz?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
    });
    f.querySelectorAll('input, textarea').forEach(function (el) {
      el.addEventListener('input', function () { el.style.borderColor = ''; });
    });
  }

  function bindHeaderShadow() {
    var hdr = document.querySelector('.site-header');
    if (!hdr) return;
    var onScroll = function () {
      if (window.scrollY > 8) hdr.classList.add('scrolled');
      else hdr.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());
    bindMenu();
    bindLang();
    bindReveal();
    bindForm();
    bindHeaderShadow();
  });
})();
