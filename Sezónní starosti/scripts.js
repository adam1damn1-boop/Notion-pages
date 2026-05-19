(function(){
  "use strict";

  // Build base dictionary from current HTML (cs by default).
  // To add a new language, register it on the I18N object below.
  // Example:
  //   I18N.en = { "brand.name": "Seasonal Care", "nav.care": "Care", ... };
  //   And add: <button data-lang="en">EN</button> inside .lang-switch.
  var I18N = { cs: {} };
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var key = el.getAttribute("data-i18n");
    I18N.cs[key] = el.textContent.trim();
  });

  var state = { lang: "cs" };

  function applyI18n(lang){
    var dict = I18N[lang] || I18N.cs;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-switch button").forEach(function(b){
      b.classList.toggle("is-active", b.dataset.lang === lang);
    });
    state.lang = lang;
    try { localStorage.setItem("ss_lang", lang); } catch(e){}
  }

  function initLangSwitch(){
    document.querySelectorAll(".lang-switch button").forEach(function(btn){
      btn.addEventListener("click", function(){ applyI18n(btn.dataset.lang); });
    });
    var saved = null;
    try { saved = localStorage.getItem("ss_lang"); } catch(e){}
    if (saved && I18N[saved]) applyI18n(saved);
  }

  function initMenu(){
    var btn = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".primary-nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal(){
    var els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)){
      els.forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach(function(el){ io.observe(el); });
  }

  function initYear(){
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function(){
    initYear();
    initLangSwitch();
    initMenu();
    initReveal();
  });
})();
