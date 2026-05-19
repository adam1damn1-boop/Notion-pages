(function(){
  var STORAGE_KEY = "ps.lang";
  var DEFAULT = "cs";

  function applyLang(lang){
    if(!window.I18N || !window.I18N[lang]) lang = DEFAULT;
    document.documentElement.setAttribute("lang", lang);
    var dict = window.I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(dict[key] === undefined) return;
      var attr = el.getAttribute("data-i18n-attr");
      if(attr){ el.setAttribute(attr, dict[key]); }
      else { el.textContent = dict[key]; }
    });
    document.querySelectorAll(".lang-switch button").forEach(function(b){
      var active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  function initHoverSwap(){
    document.querySelectorAll("[data-hover-target]").forEach(function(parent){
      var img = parent.querySelector("img[data-hover]");
      if(!img) return;
      var main = img.getAttribute("src");
      var hover = img.getAttribute("data-hover");
      var pre = new Image(); pre.src = hover;
      function enter(){ img.setAttribute("src", hover); }
      function leave(){ img.setAttribute("src", main); }
      parent.addEventListener("mouseenter", enter);
      parent.addEventListener("mouseleave", leave);
      parent.addEventListener("focusin", enter);
      parent.addEventListener("focusout", leave);
      parent.addEventListener("touchstart", function(){ enter(); setTimeout(leave, 1400); }, {passive:true});
    });
  }

  function initReveal(){
    if(!("IntersectionObserver" in window)){
      document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add("is-visible"); obs.unobserve(e.target); }
      });
    }, { rootMargin: "-40px" });
    document.querySelectorAll(".reveal").forEach(function(el){ obs.observe(el); });
  }

  function initMenu(){
    var btn = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".primary-nav");
    if(!btn || !nav) return;
    btn.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initLangSwitch(){
    document.querySelectorAll(".lang-switch button").forEach(function(b){
      b.addEventListener("click", function(){ applyLang(b.dataset.lang); });
    });
  }

  function getInitialLang(){
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if(saved && window.I18N && window.I18N[saved]) return saved;
    } catch(e){}
    return DEFAULT;
  }

  document.addEventListener("DOMContentLoaded", function(){
    applyLang(getInitialLang());
    initHoverSwap();
    initMenu();
    initLangSwitch();
    initReveal();
  });
})();
