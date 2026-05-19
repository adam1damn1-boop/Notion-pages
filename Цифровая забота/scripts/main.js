(function () {
  var STATE = { lang: 'cs' };

  function getByPath(obj, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }

  function t(key) {
    var dict = window.I18N[STATE.lang] || {};
    var v = getByPath(dict, key);
    return v == null ? '' : v;
  }

  function applyI18n() {
    document.documentElement.lang = STATE.lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v !== '') el.textContent = v;
    });
  }

  function renderCards() {
    var tpl = document.getElementById('card-template');
    document.querySelectorAll('[data-group]').forEach(function (container) {
      var group = container.getAttribute('data-group');
      container.innerHTML = '';
      window.SERVICES.filter(function (s) { return s.group === group; }).forEach(function (s) {
        var node = tpl.content.cloneNode(true);
        var card = node.querySelector('.card');
        card.dataset.main = './img/' + s.slug + '--main.png';
        card.dataset.hover = './img/' + s.slug + '--hover.png';
        card.dataset.slug = s.slug;
        var img = node.querySelector('img');
        img.src = card.dataset.main;
        img.alt = (window.I18N[STATE.lang].cards[s.slug] || {}).title || s.slug;
        var meta = (window.I18N[STATE.lang].cards || {})[s.slug] || {};
        node.querySelector('.card-tag').textContent = meta.tag || s.section;
        node.querySelector('.card-title').textContent = meta.title || s.slug;
        var text = ((window.I18N[STATE.lang].sections || {})[s.slug]) || '';
        node.querySelector('.card-text').textContent = text;
        container.appendChild(node);
      });
    });
  }

  function bindSwap() {
    document.querySelectorAll('.swap').forEach(function (el) {
      if (el.dataset.swapBound === '1') return;
      var img = el.querySelector('img');
      if (!img || !el.dataset.main) return;
      var main = el.dataset.main;
      var hover = el.dataset.hover;
      var preload = new Image();
      preload.src = hover;
      el.addEventListener('mouseenter', function () { img.src = hover; });
      el.addEventListener('mouseleave', function () { img.src = main; });
      el.addEventListener('focusin', function () { img.src = hover; });
      el.addEventListener('focusout', function () { img.src = main; });
      el.dataset.swapBound = '1';
    });
  }

  function bindReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal], .card').forEach(function (el) { el.classList.add('revealed'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '-40px 0px' });
    document.querySelectorAll('[data-reveal], .card').forEach(function (el) { io.observe(el); });
  }

  function bindLang() {
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (!window.I18N[lang]) return;
        STATE.lang = lang;
        document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        applyI18n();
        renderCards();
        bindSwap();
        bindReveal();
      });
    });
  }

  function bindMenu() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.primary-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyI18n();
    renderCards();
    bindSwap();
    bindReveal();
    bindLang();
    bindMenu();
  });
})();