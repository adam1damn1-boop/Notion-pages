(function(){
  var STORAGE_KEY = 'mv-lang';
  function getLang(){
    return localStorage.getItem(STORAGE_KEY) || document.documentElement.lang || 'cs';
  }
  function lookup(dict, key){
    return key.split('.').reduce(function(o,k){
      return (o!=null && o[k]!==undefined) ? o[k] : null;
    }, dict);
  }
  function applyLang(lang){
    var dict = window.I18N && window.I18N[lang];
    if(!dict){ lang = 'cs'; dict = window.I18N.cs; }
    document.documentElement.lang = lang;
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var value = lookup(dict, key);
      if(value==null) value = lookup(window.I18N.cs, key);
      if(value==null) return;
      var attr = el.getAttribute('data-i18n-attr');
      if(attr){ el.setAttribute(attr, value); }
      else { el.innerHTML = value; }
    });
    document.querySelectorAll('.lang-switch button').forEach(function(b){
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest && e.target.closest('.lang-switch button');
    if(b){ applyLang(b.dataset.lang); }
  });
  // Reveal animations
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 }) : null;
  function observeReveal(){
    document.querySelectorAll('.reveal').forEach(function(el){
      if(io) io.observe(el); else el.classList.add('in');
    });
  }
  // Contact form -> mailto
  function bindContact(){
    var cf = document.getElementById('contactForm');
    if(!cf) return;
    cf.addEventListener('submit', function(e){
      e.preventDefault();
      var d = new FormData(cf);
      var subject = encodeURIComponent('Poptávka — ' + (d.get('jmeno')||''));
      var body = encodeURIComponent(
        'Jméno: ' + (d.get('jmeno')||'') + '\n' +
        'E-mail: ' + (d.get('email')||'') + '\n\n' +
        (d.get('zprava')||'')
      );
      window.location.href = 'mailto:mistr@vyhody.cz?subject=' + subject + '&body=' + body;
    });
  }
  // Init
  document.addEventListener('DOMContentLoaded', function(){
    applyLang(getLang());
    observeReveal();
    bindContact();
    var y = document.getElementById('year');
    if(y) y.textContent = new Date().getFullYear();
  });
})();
