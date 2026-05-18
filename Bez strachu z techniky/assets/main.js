// Mobilní menu, přepínač jazyků a animace při odhalování v okně prohlížeče.
document.addEventListener('DOMContentLoaded', function(){
  // Mobilní menu
  var burger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');
  if (burger && nav){
    burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
    document.addEventListener('click', function(e){
      if (!nav.contains(e.target) && nav.classList.contains('open')) nav.classList.remove('open');
    });
  }

  // Přepínač jazyků
  function setLang(code){
    if (!window.I18N || !window.I18N[code]) return;
    window.I18N.current = code;
    document.querySelectorAll('.lang button').forEach(function(b){
      b.classList.toggle('on', b.getAttribute('data-lang') === code);
    });
    if (typeof applyI18n === 'function') applyI18n();
    try { localStorage.setItem('lang', code); } catch(e){}
  }
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); });
  });
  try {
    var saved = localStorage.getItem('lang');
    if (saved && window.I18N && window.I18N[saved]) setLang(saved);
  } catch(e){}

  // Animace odhalování při skrolování
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  // Aktivní položka menu
  var path = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var href = a.getAttribute('href') || '';
    if (href.replace('./','') === path) a.classList.add('active');
  });
});
