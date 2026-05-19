(function(){
  var STORAGE_KEY = 'mv-lang';
  var SERVICE_BY_PAGE = {
    'cisteni.html':'cleaning','modernizace.html':'upgrade','software.html':'software','oprava.html':'repair','kamery.html':'webcam','alarm.html':'alarm','domacnost.html':'appliances','gramotnost.html':'literacy','doucovani.html':'tutor','sachy.html':'chess','technologie.html':'development','design.html':'design'
  };
  function getLang(){ return localStorage.getItem(STORAGE_KEY) || document.documentElement.lang || 'cs'; }
  function lookup(dict, key){ return key.split('.').reduce(function(o,k){ return (o!=null && o[k]!==undefined) ? o[k] : null; }, dict); }
  function pageName(){ return location.pathname.split('/').pop() || 'index.html'; }
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }

  function headerTpl(){
    var p = pageName();
    var homeActive = p==='index.html' ? 'is-active' : '';
    var contactActive = p==='kontakt.html' ? 'is-active' : '';
    return '<div class="container nav">'
      + '<a class="logo" href="./index.html"><span class="logo-mark">MV</span><span data-i18n="common.brand"></span></a>'
      + '<nav class="nav-links">'
      + '<a class="'+homeActive+'" href="./index.html" data-i18n="nav.home"></a>'
      + '<a href="./index.html#services" data-i18n="nav.services"></a>'
      + '<a class="'+contactActive+'" href="./kontakt.html" data-i18n="nav.contact"></a>'
      + '</nav>'
      + '<div class="lang-switch" aria-label="Language switch">'
      + '<button type="button" data-lang="cs">CS</button><button type="button" data-lang="en">EN</button>'
      + '</div></div>';
  }

  function footerTpl(){
    return '<div class="container">'
      + '<div class="footer-grid"><div><h3 class="footer-title" data-i18n="common.brand"></h3><p data-i18n="common.tagline"></p></div>'
      + '<div><h3 class="footer-title" data-i18n="nav.services"></h3><ul class="footer-links"><li><a href="./cisteni.html">Čištění</a></li><li><a href="./software.html">Software</a></li><li><a href="./kamery.html">Kamery</a></li></ul></div>'
      + '<div><h3 class="footer-title" data-i18n="nav.contact"></h3><ul class="footer-links"><li><a href="tel:+420777123456" data-i18n="common.free_call"></a></li><li><a href="mailto:mistr@vyhody.cz">mistr@vyhody.cz</a></li></ul></div></div>'
      + '<div class="footer-bottom"><span>© <span id="year"></span> <span data-i18n="common.copyright"></span></span></div></div>';
  }

  function homeTpl(){
    var cards = Object.keys(window.I18N.cs.services).map(function(k){ var s=window.I18N.cs.services[k]; var href={cleaning:'cisteni',upgrade:'modernizace',software:'software',repair:'oprava',webcam:'kamery',alarm:'alarm',appliances:'domacnost',literacy:'gramotnost',tutor:'doucovani',chess:'sachy',development:'technologie',design:'design'}[k]+'.html'; return '<a class="service-card reveal" href="./'+href+'"><div class="service-body"><span class="service-num">'+esc(s.num)+'</span><h3 class="service-title" data-i18n="services.'+k+'.title"></h3><p class="service-tag" data-i18n="services.'+k+'.tag"></p></div></a>'; }).join('');
    return '<section class="hero"><div class="container hero-grid"><div><span class="hero-eyebrow" data-i18n="home.eyebrow"></span><h1 data-i18n="home.h1"></h1><p class="hero-lead" data-i18n="home.lead"></p><div class="hero-cta"><a class="btn btn-primary" href="./kontakt.html" data-i18n="common.cta_contact"></a><a class="btn btn-ghost" href="#services" data-i18n="common.cta_services"></a></div></div></div></section>'
      + '<section class="section" id="services"><div class="container"><div class="section-head"><span class="eyebrow" data-i18n="home.services_eyebrow"></span><h2 data-i18n="home.services_h2"></h2></div><div class="services">'+cards+'</div></div></section>';
  }

  function serviceTpl(key){
    return '<section class="svc-hero var-a"><div class="container svc-hero-grid"><div class="svc-hero-text"><div class="crumb"><a href="./index.html" data-i18n="common.back_index"></a></div><span class="badge" data-i18n="services.'+key+'.num"></span><h1 data-i18n="services.'+key+'.title"></h1><p class="lead" data-i18n="services.'+key+'.subtitle"></p></div></div></section>'
      + '<section class="svc-body"><div class="container grid"><article class="article"><p data-i18n="body.'+key+'"></p></article></div></section>';
  }

  function contactTpl(){
    return '<section class="contact-section"><div class="container contact-grid"><div class="contact-card"><h1 data-i18n="contact.h1"></h1><p data-i18n="contact.lead"></p><form class="form" id="contactForm"><label><span data-i18n="contact.form_name"></span><input name="jmeno" required></label><label><span data-i18n="contact.form_email"></span><input name="email" type="email" required></label><label><span data-i18n="contact.form_msg"></span><textarea name="zprava" required></textarea></label><button class="btn btn-primary" type="submit" data-i18n="contact.form_send"></button></form></div></div></section>';
  }

  function render(){
    var header = document.querySelector('.site-header'); if(header) header.innerHTML = headerTpl();
    var footer = document.querySelector('.site-footer'); if(footer) footer.innerHTML = footerTpl();
    var main = document.querySelector('main'); if(!main) return;
    var p = pageName();
    if(p==='index.html') main.innerHTML = homeTpl();
    else if(p==='kontakt.html') main.innerHTML = contactTpl();
    else if(SERVICE_BY_PAGE[p]) main.innerHTML = serviceTpl(SERVICE_BY_PAGE[p]);
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
      if(attr){ el.setAttribute(attr, value); } else { el.innerHTML = value; }
    });
    document.querySelectorAll('.lang-switch button').forEach(function(b){ b.classList.toggle('is-active', b.dataset.lang === lang); });
  }

  document.addEventListener('click', function(e){ var b = e.target.closest && e.target.closest('.lang-switch button'); if(b){ applyLang(b.dataset.lang); } });
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 }) : null;
  function observeReveal(){ document.querySelectorAll('.reveal').forEach(function(el){ if(io) io.observe(el); else el.classList.add('in'); }); }
  function bindContact(){ var cf = document.getElementById('contactForm'); if(!cf) return; cf.addEventListener('submit', function(e){ e.preventDefault(); var d = new FormData(cf); var subject = encodeURIComponent('Poptávka — ' + (d.get('jmeno')||'')); var body = encodeURIComponent('Jméno: ' + (d.get('jmeno')||'') + '\n' + 'E-mail: ' + (d.get('email')||'') + '\n\n' + (d.get('zprava')||'')); window.location.href = 'mailto:mistr@vyhody.cz?subject=' + subject + '&body=' + body; }); }

  document.addEventListener('DOMContentLoaded', function(){ render(); applyLang(getLang()); observeReveal(); bindContact(); var y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear(); });
})();
