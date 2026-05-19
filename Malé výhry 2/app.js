(function(){
  var SERVICES = [
    { slug:'cleaning', section:'1.1', group:'care' },
    { slug:'upgrade', section:'1.2', group:'care' },
    { slug:'software', section:'1.3', group:'care' },
    { slug:'repair', section:'1.4', group:'care' },
    { slug:'webcam', section:'2.1', group:'security' },
    { slug:'alarm', section:'2.2', group:'security' },
    { slug:'appliances', section:'2.3', group:'security' },
    { slug:'literacy', section:'3.1', group:'learning' },
    { slug:'tutor', section:'3.2', group:'learning' },
    { slug:'chess', section:'3.3', group:'learning' },
    { slug:'development', section:'3.4', group:'learning' },
    { slug:'design', section:'4', group:'design' }
  ];
  var containers = {
    care: document.getElementById('cards-care'),
    security: document.getElementById('cards-security'),
    learning: document.getElementById('cards-learning'),
    design: document.getElementById('cards-design')
  };
  SERVICES.forEach(function(s){
    var el = document.createElement('article');
    el.className = 'card reveal';
    el.innerHTML =
      '<div class="thumb">' +
        '<img class="main" src="./img/' + s.slug + '--main.png" alt="" loading="lazy" />' +
        '<img class="hover" src="./img/' + s.slug + '--hover.png" alt="" loading="lazy" />' +
      '</div>' +
      '' +
      '<h3 data-i18n="service.' + s.slug + '.title"></h3>' +
      '<p data-i18n="service.' + s.slug + '.body"></p>' +
      '' + s.section + '';
    if (containers[s.group]) containers[s.group].appendChild(el);
  });

  var LANG_KEY = 'mistr.lang';
  function applyI18n(lang){
    var dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N.cs) || {};
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var attr = el.getAttribute('data-i18n-attr');
      var value = dict[key];
      if (value == null) return;
      if (attr) el.setAttribute(attr, value); else el.textContent = value;
    });
    document.querySelectorAll('.lang-switch button').forEach(function(b){
      var active = b.dataset.lang === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }
  function showToast(msg){
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    el.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function(){ el.classList.remove('show'); el.hidden = true; }, 2600);
  }
  function setLang(lang){
    if (!window.I18N || !window.I18N[lang]){
      var fb = (window.I18N && window.I18N.cs && window.I18N.cs['toast.lang.soon']) || 'Tento jazyk bude brzy k dispozici.';
      showToast(fb);
      return;
    }
    try { localStorage.setItem(LANG_KEY, lang); } catch(e){}
    applyI18n(lang);
  }
  var saved = 'cs';
  try { saved = localStorage.getItem(LANG_KEY) || 'cs'; } catch(e){}
  if (!window.I18N || !window.I18N[saved]) saved = 'cs';
  applyI18n(saved);
  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.dataset.lang); });
  });

  var toggle = document.getElementById('menu-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links){
    toggle.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function(e){
      if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
    });
  }

  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  document.querySelectorAll('.card, .hero-image').forEach(function(card){
    card.addEventListener('touchstart', function(){
      document.querySelectorAll('.touched').forEach(function(t){ if (t !== card) t.classList.remove('touched'); });
      card.classList.toggle('touched');
    }, { passive: true });
  });
})();
