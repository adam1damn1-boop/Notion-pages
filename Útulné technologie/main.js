(function () {
  var SERVICE_ORDER = ['cleaning','upgrade','software','repair','webcam','alarm','appliances','literacy','tutor','chess','development','design'];
  var defaultLang = 'cs';
  var currentLang = defaultLang;

  function dict() { return window.I18N[currentLang] || window.I18N[defaultLang]; }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  function renderCards() {
    var d = dict();
    var groups = { care: [], security: [], learning: [], design: [] };
    SERVICE_ORDER.forEach(function (slug) {
      var s = d.services[slug];
      if (!s) return;
      groups[s.cat].push(Object.assign({ slug: slug }, s));
    });
    Object.keys(groups).forEach(function (cat) {
      var wrap = document.querySelector('.cards[data-cat="' + cat + '"]');
      if (!wrap) return;
      wrap.innerHTML = groups[cat].map(function (s) {
        return '<article class="card reveal" data-slug="' + s.slug + '">'
          + '<div class="card-media">'
          +   '<img class="main" src="./img/' + s.slug + '--main.png" alt="' + escapeHtml(s.title) + '" loading="lazy" decoding="async">'
          +   '<img class="hover" src="./img/' + s.slug + '--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">'
          + '</div>'
          + '<div class="card-num">' + escapeHtml(s.num) + '</div>'
          + '<h3>' + escapeHtml(s.title) + '</h3>'
          + '<p class="card-body">' + escapeHtml(s.body) + '</p>'
          + '</article>';
      }).join('');
    });
    observeReveals();
  }

  function applyI18nAttrs() {
    var d = dict();
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (d[key] != null) el.textContent = d[key];
    });
    document.documentElement.setAttribute('lang', currentLang);
  }

  function setLang(lang) {
    if (!window.I18N[lang]) return;
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      var active = b.dataset.lang === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    applyI18nAttrs();
    renderCards();
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function bindLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });
  }

  function bindMobileMenu() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.main-nav');
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

  function observeReveals() {
    var els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    setLang(saved && window.I18N[saved] ? saved : defaultLang);
    bindLangSwitcher();
    bindMobileMenu();
    document.querySelectorAll('.hero, .category, .contact, .cat-header').forEach(function (el) { el.classList.add('reveal'); });
    observeReveals();
  });
})();
