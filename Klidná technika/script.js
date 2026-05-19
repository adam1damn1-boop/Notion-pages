(function(){
  var root = document.documentElement;
  var STORAGE_KEY = "klidna-technika.lang";
  var FALLBACK = "cs";
  var supported = Object.keys(window.I18N || { cs: {} });

  function getByPath(obj, path){
    return path.split(".").reduce(function(acc, k){
      return (acc && acc[k] != null) ? acc[k] : null;
    }, obj);
  }

  function applyLang(lang){
    var dict = window.I18N[lang] || window.I18N[FALLBACK];
    if (!dict) return;
    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      var val = getByPath(dict, key);
      if (val == null) return;
      if (el.tagName === "META" || (el.hasAttribute("content") && el.tagName !== "OPTION")){
        el.setAttribute("content", val);
      } else if (el.tagName === "TITLE"){
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll("[data-alt-i18n]").forEach(function(el){
      var v = getByPath(dict, el.getAttribute("data-alt-i18n"));
      if (v != null) el.setAttribute("alt", v);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  function initLangSwitch(){
    var sel = document.getElementById("lang-select");
    if (!sel) return;
    var saved = FALLBACK;
    try { saved = localStorage.getItem(STORAGE_KEY) || FALLBACK; } catch(e){}
    if (supported.indexOf(saved) === -1) saved = FALLBACK;
    sel.value = saved;
    applyLang(saved);
    sel.addEventListener("change", function(e){ applyLang(e.target.value); });
  }

  function initReveal(){
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)){
      els.forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting){
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function(el){ io.observe(el); });
  }

  function initSmoothAnchor(){
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener("click", function(e){
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (target){
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", id);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    initLangSwitch();
    initReveal();
    initSmoothAnchor();
  });
})();