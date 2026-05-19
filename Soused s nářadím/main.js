(function(){
  "use strict";
  var STORAGE_KEY = "sousedJazyk";
  var fallback = window.I18N_DEFAULT || "cs";

  function applyI18n(lang){
    var dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N[fallback]) || {};
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k = el.getAttribute("data-i18n");
      if(dict[k] === undefined) return;
      var attr = el.getAttribute("data-i18n-attr");
      if(attr){ el.setAttribute(attr, dict[k]); }
      else if(el.tagName === "META"){ el.setAttribute("content", dict[k]); }
      else if(el.tagName === "INPUT" || el.tagName === "TEXTAREA"){ el.setAttribute("placeholder", dict[k]); }
      else { el.textContent = dict[k]; }
    });
    document.querySelectorAll("[data-alt-i18n]").forEach(function(el){
      var k = el.getAttribute("data-alt-i18n");
      if(dict[k] !== undefined){ el.setAttribute("alt", dict[k]); }
    });
    var cur = document.getElementById("langCurrent");
    if(cur) cur.textContent = lang.toUpperCase();
    var titleKey = (document.querySelector("title[data-i18n]") || {}).getAttribute && document.querySelector("title[data-i18n]").getAttribute("data-i18n");
    if(titleKey && dict[titleKey]) document.title = dict[titleKey];
  }

  function initLang(){
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch(e){}
    if(!saved){
      var browser = (navigator.language || "cs").slice(0,2).toLowerCase();
      saved = (window.I18N && window.I18N[browser]) ? browser : fallback;
    }
    applyI18n(saved);

    var btn = document.getElementById("langBtn");
    var menu = document.getElementById("langMenu");
    if(!btn || !menu) return;

    / Vyplnit menu jazyků dynamicky podle I18N_AVAILABLE /
    if(window.I18N_AVAILABLE && window.I18N_AVAILABLE.length){
      menu.innerHTML = "";
      window.I18N_AVAILABLE.forEach(function(item){
        var li = document.createElement("li");
        li.setAttribute("role","none");
        var b = document.createElement("button");
        b.setAttribute("role","menuitem");
        b.setAttribute("data-lang", item.code);
        b.textContent = item.label;
        li.appendChild(b);
        menu.appendChild(li);
      });
    }

    btn.addEventListener("click", function(){
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("open", !open);
    });
    menu.addEventListener("click", function(e){
      var target = e.target.closest("button[data-lang]");
      if(!target) return;
      var l = target.getAttribute("data-lang");
      try { localStorage.setItem(STORAGE_KEY, l); } catch(e){}
      applyI18n(l);
      btn.setAttribute("aria-expanded","false");
      menu.classList.remove("open");
    });
    document.addEventListener("click", function(e){
      if(!btn.contains(e.target) && !menu.contains(e.target)){
        btn.setAttribute("aria-expanded","false");
        menu.classList.remove("open");
      }
    });
  }

  function initReveal(){
    var els = document.querySelectorAll(".reveal");
    if(!("IntersectionObserver" in window)){
      els.forEach(function(e){ e.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function(e){ io.observe(e); });
  }

  function initSmoothNav(){
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener("click", function(e){
        var id = a.getAttribute("href").slice(1);
        if(!id) return;
        var t = document.getElementById(id);
        if(!t) return;
        e.preventDefault();
        t.scrollIntoView({ behavior:"smooth", block:"start" });
        var nav = document.querySelector(".nav");
        var burger = document.getElementById("burger");
        if(nav && nav.classList.contains("open")){
          nav.classList.remove("open");
          if(burger) burger.setAttribute("aria-expanded","false");
        }
      });
    });
  }

  function initYear(){
    var y = document.getElementById("year");
    if(y) y.textContent = new Date().getFullYear();
  }

  function initHeaderShadow(){
    var h = document.getElementById("siteHeader");
    if(!h) return;
    var onScroll = function(){
      if(window.scrollY > 10) h.classList.add("scrolled"); else h.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initBurger(){
    var burger = document.getElementById("burger");
    var nav = document.querySelector(".nav");
    if(!burger || !nav) return;
    burger.addEventListener("click", function(){
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    initLang();
    initReveal();
    initSmoothNav();
    initYear();
    initHeaderShadow();
    initBurger();
  });
})();