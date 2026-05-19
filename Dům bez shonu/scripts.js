(function(){
  "use strict";
  var D = window.I18N || {};
  var DEF = "cs";
  var cur = (function(){try{var s=localStorage.getItem("dbs.lang");if(s&&D[s]&&Object.keys(D[s]).length)return s;}catch(e){}return DEF;})();
  function get(o,p){var a=p.split("."),c=o;for(var i=0;i<a.length;i++){if(c&&Object.prototype.hasOwnProperty.call(c,a[i]))c=c[a[i]];else return undefined}return c}
  function t(k,l){var L=l||cur;var v=get(D[L],k);if(v===undefined&&L!==DEF)v=get(D[DEF],k);return v}
  function apply(){
    document.documentElement.lang=cur;
    document.querySelectorAll("[data-i18n]").forEach(function(n){var v=t(n.getAttribute("data-i18n"));if(typeof v==="string")n.textContent=v});
    var alt=(D[cur]&&D[cur].alt)||{};
    document.querySelectorAll(".swap[data-slug]").forEach(function(f){var s=f.getAttribute("data-slug"),a=alt[s];if(a)f.querySelectorAll("img").forEach(function(i){i.setAttribute("alt",a)})});
    var br=t("brand.name")||"",h=t("hero.title")||"";
    document.title=br+(h?" — "+h:"");
  }
  function setLang(l){if(!D[l]||!Object.keys(D[l]).length)return false;cur=l;try{localStorage.setItem("dbs.lang",l)}catch(e){}document.querySelectorAll(".lang-switch button").forEach(function(b){b.classList.toggle("is-active",b.getAttribute("data-lang")===l)});apply();return true}
  function reveal(){
    if(!("IntersectionObserver" in window)){document.querySelectorAll("[data-reveal]").forEach(function(e){e.classList.add("is-visible")});return}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:.08});
    document.querySelectorAll("[data-reveal]").forEach(function(e){io.observe(e)});
  }
  function mnav(){
    var t=document.querySelector(".menu-toggle"),m=document.getElementById("mobile-nav");if(!t||!m)return;
    function close(){t.setAttribute("aria-expanded","false");m.hidden=true}
    function open(){t.setAttribute("aria-expanded","true");m.hidden=false}
    t.addEventListener("click",function(){t.getAttribute("aria-expanded")==="true"?close():open()});
    m.querySelectorAll("a").forEach(function(a){a.addEventListener("click",close)});
    window.addEventListener("resize",function(){if(window.innerWidth>=880)close()});
  }
  function lang(){
    document.querySelectorAll(".lang-switch button").forEach(function(b){b.addEventListener("click",function(){var l=b.getAttribute("data-lang");if(!setLang(l)){b.classList.add("is-shake");setTimeout(function(){b.classList.remove("is-shake")},400)}})});
  }
  function touch(){if(!matchMedia("(hover: none)").matches)return;document.querySelectorAll(".swap").forEach(function(e){e.addEventListener("click",function(ev){if(e.closest("a"))return;e.classList.toggle("is-hover")})});}
  function head(){var h=document.querySelector(".site-header");if(!h)return;var f=function(){h.classList.toggle("is-scrolled",window.scrollY>6)};window.addEventListener("scroll",f,{passive:true});f();}
  function yr(){var e=document.getElementById("year");if(e)e.textContent=new Date().getFullYear()}
  document.addEventListener("DOMContentLoaded",function(){setLang(cur);apply();reveal();mnav();lang();touch();head();yr();});
})();
