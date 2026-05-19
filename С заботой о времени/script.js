(function () {
  var LANG_KEY = 'siteLang';
  function dict() { return window.DICT || { cs: {} }; }
  function currentLang() {
    var l = localStorage.getItem(LANG_KEY);
    if (!l || !dict()[l]) l = 'cs';
    return l;
  }
  function t(key) {
    var l = currentLang();
    var d = dict();
    return (d[l] && d[l][key]) || (d.cs && d.cs[key]) || '';
  }
  function applyI18n() {
    var lang = currentLang();
    document.documentElement.setAttribute('lang', lang);
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (!val) continue;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    }
  }
  function paintLangSwitch() {
    var lang = currentLang();
    var btns = document.querySelectorAll('.lang button[data-lang]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('is-active', btns[i].dataset.lang === lang);
    }
  }
  function setLang(l) {
    if (!dict()[l]) return;
    localStorage.setItem(LANG_KEY, l);
    applyI18n();
    paintLangSwitch();
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyI18n();
    paintLangSwitch();

    var btns = document.querySelectorAll('.lang button[data-lang]');
    for (var i = 0; i < btns.length; i++) {
      (function (b) {
        b.addEventListener('click', function () {
          if (b.disabled) return;
          setLang(b.dataset.lang);
        });
      })(btns[i]);
    }

    var tgl = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.nav');
    if (tgl && nav) {
      tgl.addEventListener('click', function () { nav.classList.toggle('open'); });
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    }

    // Touch fallback: tap card to swap to hover image, second tap navigates
    document.querySelectorAll('.card').forEach(function (c) {
      c.addEventListener('touchstart', function () { c.classList.add('is-hover'); }, { passive: true });
    });

    var y = document.querySelector('[data-year]');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
