(function(){
  var KEY='sousedsky-lang';
  function val(d,f,k){if(d&&d[k]!==undefined)return d[k];if(f&&f[k]!==undefined)return f[k];return undefined;}
  function apply(lang){
    var d=(window.I18N&&window.I18N[lang])||{};
    var f=(window.I18N&&window.I18N.cs)||{};
    document.documentElement.lang=lang;
    var nodes=document.querySelectorAll('[data-i18n]');
    for(var i=0;i<nodes.length;i++){
      var el=nodes[i];var key=el.getAttribute('data-i18n');var v=val(d,f,key);
      if(v===undefined)continue;
      var a=el.getAttribute('data-i18n-attr');
      if(a)el.setAttribute(a,v);else el.textContent=v;
    }
    var btns=document.querySelectorAll('.lang button');
    for(var j=0;j<btns.length;j++)btns[j].classList.toggle('active',btns[j].getAttribute('data-lang')===lang);
  }
  function initLang(){
    var lang;try{lang=localStorage.getItem(KEY);}catch(e){lang=null;}
    if(!lang||!(window.I18N&&window.I18N[lang]))lang='cs';
    apply(lang);
    var btns=document.querySelectorAll('.lang button');
    for(var i=0;i<btns.length;i++){(function(b){b.addEventListener('click',function(){
      var nl=b.getAttribute('data-lang');
      if(window.I18N&&window.I18N[nl]){try{localStorage.setItem(KEY,nl);}catch(e){}apply(nl);}
    });})(btns[i]);}
  }
  function initReveal(){
    var els=document.querySelectorAll('.fade-in');
    if(!('IntersectionObserver' in window)){for(var i=0;i<els.length;i++)els[i].classList.add('visible');return;}
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
    },{threshold:0.12});
    for(var i=0;i<els.length;i++)obs.observe(els[i]);
  }
  function initLazy(){
    var imgs=document.querySelectorAll('img');
    for(var i=0;i<imgs.length;i++){
      if(!imgs[i].hasAttribute('loading'))imgs[i].setAttribute('loading','lazy');
      if(!imgs[i].hasAttribute('decoding'))imgs[i].setAttribute('decoding','async');
    }
  }
  document.addEventListener('DOMContentLoaded',function(){initLang();initReveal();initLazy();});
})();
