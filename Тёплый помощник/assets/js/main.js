(function () {
  var STORAGE_KEY = "tp_lang";
  var DEFAULT = "cs";
  function getLang(){ return localStorage.getItem(STORAGE_KEY) || document.documentElement.lang || DEFAULT; }
  function setLang(lang){
    if (!window.SITE_I18N || !window.SITE_I18N[lang]) lang = DEFAULT;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    var dict = window.SITE_I18N[lang] || {};
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function(el){
      var pairs = el.getAttribute("data-i18n-attr").split(";");
      pairs.forEach(function(pair){
        var idx = pair.indexOf(":");
        if (idx < 0) return;
        var attr = pair.slice(0, idx).trim();
        var key = pair.slice(idx + 1).trim();
        if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });
    document.querySelectorAll(".lang__btn").forEach(function(btn){
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
  }
  document.addEventListener("DOMContentLoaded", function(){
    setLang(getLang());
    document.querySelectorAll(".lang__btn").forEach(function(btn){
      btn.addEventListener("click", function(){ setLang(btn.dataset.lang); });
    });
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -60px 0px" });
      document.querySelectorAll(".reveal").forEach(function(el){ obs.observe(el); });
    } else {
      document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("is-visible"); });
    }
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener("click", function(e){
        var id = a.getAttribute("href").slice(1);
        if (!id) return;
        var target = document.getElementById(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); history.pushState(null, "", "#" + id); }
      });
    });
  });
})();
