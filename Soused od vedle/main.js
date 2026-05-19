(function(){
  'use strict';
  var dict = window.TRANSLATIONS || { cs: {} };
  var langs = Object.keys(dict);
  var select = document.getElementById('lang-select');
  if (select) {
    langs.forEach(function(code){
      var o = document.createElement('option');
      o.value = code; o.textContent = code.toUpperCase();
      select.appendChild(o);
    });
  }

  function apply(lang){
    var map = dict[lang] || dict.cs || {};
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    var nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(function(el){
      var k = el.getAttribute('data-i18n');
      if (map[k] == null) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) { el.setAttribute(attr, map[k]); return; }
      if (/[<>]/.test(map[k])) { el.innerHTML = map[k]; }
      else { el.textContent = map[k]; }
    });
    if (map['meta.title']) document.title = map['meta.title'].replace(/<‣+>/g,'');
  }

  var saved = (function(){ try { return localStorage.getItem('lang'); } catch(e){ return null; } })();
  var initial = (saved && dict[saved]) ? saved : 'cs';
  if (select) select.value = initial;
  apply(initial);
  if (select) {
    select.addEventListener('change', function(){
      try { localStorage.setItem('lang', select.value); } catch(e){}
      apply(select.value);
    });
  }

  /* Mobile menu */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Year */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Reveal on scroll */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    document.querySelectorAll('.card, .section-head, .hero-copy, .hero-art, .contact-grid > *, .strip-quote').forEach(function(el){
      el.classList.add('reveal'); io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();
