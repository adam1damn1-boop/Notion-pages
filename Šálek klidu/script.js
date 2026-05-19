(function(){
  var I18N = window.I18N || {};
  var stored = localStorage.getItem('site-lang') || 'cs';
  var current = I18N[stored] ? stored : 'cs';
  function get(obj, path){ return path.split('.').reduce(function(o,k){ return o && o[k]; }, obj); }
  function apply(lang){
    if(!I18N[lang]) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var v = get(I18N[lang], el.getAttribute('data-i18n'));
      if (typeof v === 'string') el.innerHTML = v;
    });
    document.querySelectorAll('.lang-btn').forEach(function(b){
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    localStorage.setItem('site-lang', lang);
    current = lang;
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest && e.target.closest('.lang-btn');
    if (b) {
      if (!I18N[b.dataset.lang]) {
        alert('Tato jazyková verze zatím není k dispozici.');
        return;
      }
      apply(b.dataset.lang);
    }
  });
  apply(current);
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (en.isIntersecting){ en.target.classList.add('is-visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 }) : null;
  if (io) document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  else document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
  var header = document.querySelector('.site-header');
  if (header){
    window.addEventListener('scroll', function(){
      header.style.boxShadow = window.scrollY > 12 ? '0 4px 18px -10px rgba(60,50,35,.15)' : 'none';
    }, { passive: true });
  }
})();
