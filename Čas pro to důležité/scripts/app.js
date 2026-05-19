(function(){
  const DEFAULT_LANG = 'cs';
  const STORAGE_KEY = 'cas-pro-dulezite.lang';
  const dict = window.I18N || {};

  function getLang(){
    const stored = localStorage.getItem(STORAGE_KEY);
    if(stored && dict[stored]) return stored;
    return DEFAULT_LANG;
  }

  function applyLang(lang){
    const table = dict[lang] || dict[DEFAULT_LANG] || {};
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(table[key] !== undefined) el.textContent = table[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if(table[key] !== undefined) el.innerHTML = table[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
  }

  function initLangSwitch(){
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  }

  function initNavToggle(){
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');
    if(!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', e => {
      if(e.target.tagName === 'A'){
        toggle.setAttribute('aria-expanded','false');
        nav.classList.remove('is-open');
      }
    });
  }

  function initReveal(){
    if(!('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll('.card, .section-head, .hero-figure, .contact-form, .contact-list');
    targets.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  }

  function initTouchHover(){
    if(!matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', e => {
        if(e.target.closest('a,button')) return;
        card.classList.toggle('is-touch-hover');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(getLang());
    initLangSwitch();
    initNavToggle();
    initReveal();
    initTouchHover();
  });
})();
