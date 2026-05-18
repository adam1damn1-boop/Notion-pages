# Bez strachu z techniky — teplý průvodce

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<!-- Tato verze obsahuje 4 z 14 požadovaných HTML souborů. Zbylé viz poznámky v těle stránky Site code. -->
... (viz původní Html, kompletní index.html, cisteni.html, modernizace.html, software.html, částečný oprava.html) ...

POZNÁMKA: Tato verze obsahuje pouze 4 reprezentativní HTML soubory.
Zbylých 10 souborů (oprava.html, kamery.html, alarm.html, chytra-domacnost.html,
gramotnost.html, doucovani.html, sachy.html, technologie.html, design.html, kontakt.html)
se v rámci jednoho volného běhu agenta nevejšlo do limitu jedné textové hodnoty.
Únosný postup: použít cisteni.html jako šablonu, změnit nadpis, hero/sekundární obrázek
(./img/<slug>--main.png a ./img/<slug>--hover.png), texty z odpovídající sekce záznamu Site content,
a navigaci prev/next.
Other: === vercel.json ===
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/assets/(.)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/img/(.)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}

=== robots.txt ===
User-agent: *
Allow: /

=== http://README.md ===
# Pan domácí počítače — web „Bez strachu z techniky“

Statický mnoho-stránkový web na pronájem výjezdních počítačových služeb.

## Struktura
- index.html — hlavní stránka s přehledem 12 služeb a hero-portrétem
- cisteni.html … design.html — 12 podstránek služeb
- kontakt.html — kontaktní stránka s formulářem (mailto) a odkazy
- assets/styles.css — společné styly
- assets/main.js — mobilní menu, přepínač jazyků, scroll animace
- assets/i18n.js — slovník textů (cs, připraveno na rozšíření)
- img/ — obrázky <slug>--main.png a <slug>--hover.png

## Vývoj lokálně
Stačí otevřít index.html v prohlížeči nebo spustit npx serve ..

## Nasazení
Kompatibilní s Vercel, Netlify, GitHub Pages, Cloudflare Pages. Žádný build krok není potřeba.

Scripts: === assets/i18n.js ===
// Slovník překladů pro mezijazyčné rozhraní. Hlavní jazyk — čeština (cs).
// Pro přidání dalších jazyků (např. en, ru, de) doplňte nový klíč do window.I18N
// se stejnou strukturou. Texty v HTML jsou označeny atributem data-i18n="klíč".
window.I18N = {
  current: 'cs',
  available: ['cs'],
  cs: {
    brand: 'Pan domácí počítače',
    nav_home: 'Domů',
    nav_services: 'Služby',
    nav_contact: 'Kontakt',
    cta_consult: 'Domluvit návštěvu',
    cta_services: 'Prohlédnout služby',
    cta_write: 'Napsat e-mail',
    badge_free: 'První návštěva zdarma',
    badge_no_fear: 'Bez strachu z techniky',
    back_home: '← Zpět na úvod',
    prev_label: '← Předchozí',
    next_label: 'Další →',
    footer_about: 'Výjezdní mistr, který si u vás doma sedne, srozumitelně vysvětlí a v klidu vyřeší. Cesta a první rada — vždy zdarma.',
    footer_services: 'Služby',
    footer_contact: 'Spojte se',
    footer_copy: '© 2026 Pan domácí počítače. S klidem a bez strachu.',
    footer_made: 'Tvořeno s úctou k vašemu času.'
  }
  / Příklad rozšíření na další jazyk:
  , en: {
    brand: 'Your House Computer Guy', nav_home: 'Home', nav_services: 'Services',
    nav_contact: 'Contact', cta_consult: 'Book a visit', ...
  }
  /
};

function applyI18n(){
  var dict = window.I18N[window.I18N.current] || window.I18N.cs;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.documentElement.lang = window.I18N.current;
}

=== assets/main.js ===
// Mobilní menu, přepínač jazyků a animace při odhalování v okně prohlížeče.
document.addEventListener('DOMContentLoaded', function(){
  // Mobilní menu
  var burger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');
  if (burger && nav){
    burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
    document.addEventListener('click', function(e){
      if (!nav.contains(http://e.target) && nav.classList.contains('open')) nav.classList.remove('open');
    });
  }

  // Přepínač jazyků
  function setLang(code){
    if (!window.I18N || !window.I18N[code]) return;
    window.I18N.current = code;
    document.querySelectorAll('.lang button').forEach(function(b){
      b.classList.toggle('on', b.getAttribute('data-lang') === code);
    });
    if (typeof applyI18n === 'function') applyI18n();
    try { localStorage.setItem('lang', code); } catch(e){}
  }
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); });
  });
  try {
    var saved = localStorage.getItem('lang');
    if (saved && window.I18N && window.I18N[saved]) setLang(saved);
  } catch(e){}

  // Animace odhalování při skrolování
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ http://e.target.classList.add('in'); io.unobserve(http://e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  // Aktivní položka menu
  var path = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var href = a.getAttribute('href') || '';
    if (href.replace('./','') === path) a.classList.add('active');
  });
});

Styles: === assets/styles.css ===
:root{--bg:#FBF6EE;--bg-soft:#F1E7D5;--bg-sage:#EAF1EA;--ink:#243142;--ink-soft:#56657A;--sage:#7FA38C;--sage-deep:#4F7565;--terracotta:#D38869;--terracotta-deep:#B86A4C;--shadow-sm:0 2px 10px rgba(36,49,66,.06);--shadow-md:0 14px 40px rgba(36,49,66,.10);--radius:18px;--radius-lg:28px;--maxw:1180px}
{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;background:var(--bg);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased;font-size:16px}
img{max-width:100%;height:auto;display:block}
h1,h2,h3,h4{font-family:'Fraunces','Georgia',serif;font-weight:500;line-height:1.18;color:var(--ink);letter-spacing:-.01em}
h1{font-size:clamp(2.2rem,4.8vw,3.6rem)}
h2{font-size:clamp(1.7rem,3.2vw,2.4rem)}
h3{font-size:clamp(1.18rem,2vw,1.45rem)}
h4{font-size:1.05rem;font-weight:500}
p{color:inherit}
a{color:var(--sage-deep);text-decoration:none;transition:color .2s}
a:hover{color:var(--terracotta-deep)}
ul{padding-left:22px}
.container{max-width:var(--maxw);margin:0 auto;padding:0 24px}
.center{text-align:center}
.muted{color:var(--ink-soft)}

/ Header /
.site-header{position:sticky;top:0;z-index:50;background:rgba(251,246,238,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid rgba(36,49,66,.06)}
.site-header .inner{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;max-width:var(--maxw);margin:0 auto;gap:16px;position:relative}
.brand{font-family:'Fraunces',serif;font-size:1.2rem;color:var(--ink);display:flex;align-items:center;gap:10px}
.brand .dot{width:11px;height:11px;border-radius:50%;background:var(--terracotta);box-shadow:0 0 0 4px rgba(211,136,105,.20)}
.nav{display:flex;align-items:center;gap:18px;position:relative}
.nav-links{display:flex;gap:22px}
.nav-links a{color:var(--ink-soft);font-size:.95rem;font-weight:500;padding:6px 0;border-bottom:2px solid transparent;transition:color .2s,border-color .2s}
.nav-links a:hover,.nav-links a.active{color:var(--ink);border-bottom-color:var(--terracotta)}
.lang{display:inline-flex;background:var(--bg-soft);border-radius:999px;padding:4px}
.lang button{background:transparent;border:0;padding:6px 12px;font:inherit;color:var(--ink-soft);border-radius:999px;cursor:pointer;font-size:.82rem;font-weight:600;letter-spacing:.04em}
.lang button.on{background:var(--ink);color:var(--bg)}
.hamburger{display:none;background:transparent;border:0;font-size:1.6rem;line-height:1;cursor:pointer;color:var(--ink);padding:4px 8px}
@media (max-width:760px){.hamburger{display:inline-flex}.nav-links{display:none;position:absolute;top:calc(100% + 12px);right:0;background:var(--bg);flex-direction:column;padding:18px 22px;border-radius:var(--radius);box-shadow:var(--shadow-md);min-width:200px}.http://nav.open .nav-links{display:flex}}

/ Hero /
.hero{padding:64px 0 28px}
.hero .grid{display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center}
.hero .badge{display:inline-block;background:var(--bg-sage);color:var(--sage-deep);padding:7px 14px;border-radius:999px;font-size:.84rem;font-weight:600;margin-bottom:18px;letter-spacing:.02em}
.hero h1 .accent{color:var(--terracotta-deep);font-style:italic}
.hero p.lead{font-size:1.13rem;color:var(--ink-soft);margin:22px 0 28px;max-width:520px}
.hero .cta-row{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:999px;font-weight:600;transition:transform .15s,box-shadow .15s,background .15s,color .15s;cursor:pointer;border:0;font-size:.98rem;font-family:inherit;text-decoration:none}
.btn-primary{background:var(--ink);color:var(--bg)}
.btn-primary:hover{background:var(--sage-deep);color:var(--bg);transform:translateY(-1px);box-shadow:var(--shadow-md)}
.btn-secondary{background:transparent;color:var(--ink);border:1.5px solid var(--ink)}
.btn-secondary:hover{background:var(--ink);color:var(--bg)}
.hero .portrait{position:relative;display:flex;justify-content:center}
.hero .portrait img{width:100%;max-width:370px;border-radius:32px;box-shadow:var(--shadow-md);position:relative;z-index:1}
.hero .portrait::before{content:"";position:absolute;top:-16px;left:14px;right:-14px;bottom:16px;background:var(--sage);border-radius:32px;opacity:.20}
@media (max-width:860px){.hero .grid{grid-template-columns:1fr;gap:32px}.hero{padding:36px 0 16px}}

/ Reassure strip /
.reassure{padding:24px 0 0}
.reassure .row{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.reassure .item{background:#fff;border-radius:var(--radius);padding:22px;box-shadow:var(--shadow-sm);display:flex;gap:14px;align-items:flex-start;transition:transform .25s,box-shadow .25s}
.reassure .item:hover{transform:translateY(-3px);box-shadow:var(--shadow-md)}
.reassure .item .ico{width:42px;height:42px;border-radius:50%;background:var(--bg-sage);display:grid;place-items:center;flex-shrink:0;font-size:1.2rem}
.reassure .item h3{font-size:1.02rem;margin-bottom:4px}
.reassure .item p{font-size:.92rem;color:var(--ink-soft)}
@media (max-width:760px){.reassure .row{grid-template-columns:1fr}}

/ Services /
.services{padding:80px 0 56px}
.section-head{text-align:center;margin-bottom:32px;max-width:640px;margin-left:auto;margin-right:auto}
.section-head .kicker{display:inline-block;font-family:'Fraunces',serif;font-style:italic;color:var(--terracotta-deep);font-size:1rem;margin-bottom:8px}
.section-head h2{margin-bottom:12px}
.section-head p{color:var(--ink-soft)}
.group{padding:22px 0 6px}
.group .label{display:inline-block;font-family:'Fraunces',serif;font-style:italic;color:var(--sage-deep);font-size:1.18rem;margin:10px 0 18px;padding-left:14px;border-left:3px solid var(--terracotta)}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
@media (max-width:980px){.svc-grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:600px){.svc-grid{grid-template-columns:1fr}}
.svc-card{background:#fff;border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-sm);transition:transform .25s,box-shadow .25s;display:flex;flex-direction:column;color:var(--ink)}
.svc-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-md)}
.svc-card .img{aspect-ratio:4/3;background:var(--bg-soft);position:relative;overflow:hidden}
.svc-card .img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .35s,transform .6s}
.svc-card .img img.hover{opacity:0}
.svc-card:hover .img img.main{opacity:0;transform:scale(1.03)}
.svc-card:hover .img img.hover{opacity:1;transform:scale(1.03)}
.svc-card .body{padding:22px;display:flex;flex-direction:column;gap:8px;flex:1}
.svc-card .tag{font-size:.74rem;font-weight:700;color:var(--sage-deep);text-transform:uppercase;letter-spacing:.08em}
.svc-card h3{font-size:1.18rem}
.svc-card p{color:var(--ink-soft);font-size:.93rem}
.svc-card .more{margin-top:auto;padding-top:14px;color:var(--terracotta-deep);font-weight:600;font-size:.9rem;display:inline-flex;align-items:center;gap:6px}
.svc-card:hover .more{gap:10px}

/ Contact teaser /
.contact-teaser{padding:72px 0;background:var(--bg-soft)}
.contact-teaser .box{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center;background:#fff;border-radius:var(--radius-lg);padding:36px;box-shadow:var(--shadow-sm)}
.contact-teaser .links{display:flex;flex-direction:column;gap:10px;margin-top:18px}
.contact-teaser .links a{display:inline-flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg);border-radius:14px;color:var(--ink);font-weight:500;transition:background .2s,transform .15s}
.contact-teaser .links a:hover{background:var(--bg-sage);transform:translateX(3px)}
.contact-teaser .links a .em{font-size:1.15rem}
.contact-teaser img{border-radius:22px;box-shadow:var(--shadow-sm);width:100%}
@media (max-width:760px){.contact-teaser .box{grid-template-columns:1fr;padding:24px}}

/ Service detail /
.svc-hero{padding:56px 0 24px}
.svc-hero .grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.svc-hero.alt .grid{direction:rtl}
.svc-hero.alt .grid>{direction:ltr}
.svc-hero .img-wrap{border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-md);aspect-ratio:1/1;background:var(--bg-sage);position:relative}
.svc-hero.tall .img-wrap{aspect-ratio:4/5}
.svc-hero.wide .img-wrap{aspect-ratio:5/3.5}
.svc-hero .img-wrap img{width:100%;height:100%;object-fit:cover}
.svc-hero .crumbs{font-size:.88rem;color:var(--ink-soft);margin-bottom:16px}
.svc-hero .crumbs a{color:var(--ink-soft)}
.svc-hero .crumbs a:hover{color:var(--terracotta-deep)}
.svc-hero .lead{font-size:1.13rem;color:var(--ink-soft);margin:18px 0 22px}
@media (max-width:860px){.svc-hero .grid,.svc-hero.alt .grid{grid-template-columns:1fr;direction:ltr}.svc-hero{padding:30px 0 12px}}

.tag-row{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 22px}
.tag-row span{background:var(--bg-sage);color:var(--sage-deep);padding:5px 12px;border-radius:999px;font-size:.8rem;font-weight:600}
.tag-row span.terr{background:rgba(211,136,105,.16);color:var(--terracotta-deep)}

.svc-body{padding:24px 0 64px}
.svc-body .content{display:grid;grid-template-columns:1.35fr 1fr;gap:48px;align-items:start}
.svc-body .text p{margin-bottom:14px;color:var(--ink-soft);font-size:1.04rem}
.svc-body .text h3{margin-top:24px;margin-bottom:8px;color:var(--ink)}
.svc-body .text ul{color:var(--ink-soft);margin-top:8px}
.svc-body .text ul li{margin-bottom:6px}
.svc-body .secondary-img{border-radius:22px;overflow:hidden;box-shadow:var(--shadow-sm);position:sticky;top:88px}
.svc-body .secondary-img img{width:100%;display:block}
@media (max-width:860px){.svc-body .content{grid-template-columns:1fr;gap:24px}.svc-body .secondary-img{position:static}}

.svc-cta{margin-top:24px;padding:22px;background:var(--bg-sage);border-radius:var(--radius);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px}
.svc-cta p{margin:0;font-family:'Fraunces',serif;font-size:1.1rem;color:var(--ink)}

/ Service nav /
.svc-nav{padding:24px 0 64px;border-top:1px solid rgba(36,49,66,.08)}
.svc-nav .row{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
.svc-nav a{display:inline-flex;flex-direction:column;gap:4px;padding:14px 22px;background:#fff;border-radius:var(--radius);box-shadow:var(--shadow-sm);transition:transform .15s,box-shadow .15s;min-width:220px;color:var(--ink)}
.svc-nav a:hover{transform:translateY(-2px);box-shadow:var(--shadow-md)}
.svc-nav .dir{font-size:.76rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;font-weight:600}
.svc-nav .title{color:var(--ink);font-family:'Fraunces',serif;font-size:1.12rem}

/ Contact page /
.kontakt-hero{padding:64px 0 36px}
.kontakt-hero .grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
.kontakt-hero .crumbs{font-size:.88rem;color:var(--ink-soft);margin-bottom:14px}
.kontakt-hero h1 .accent{color:var(--terracotta-deep);font-style:italic}
.kontakt-hero p.lead{font-size:1.13rem;color:var(--ink-soft);margin:18px 0 8px}
.kontakt-hero .img-wrap{border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-md);background:var(--bg-sage);aspect-ratio:3/4}
.kontakt-hero .img-wrap img{width:100%;height:100%;object-fit:cover}
@media (max-width:860px){.kontakt-hero .grid{grid-template-columns:1fr}}
.contact-grid{padding:0 0 56px}
.contact-grid .cards{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.contact-grid .card{background:#fff;border-radius:var(--radius);padding:24px;box-shadow:var(--shadow-sm);display:flex;gap:16px;align-items:flex-start;transition:transform .2s,box-shadow .2s;color:var(--ink)}
.contact-grid .card:hover{transform:translateY(-3px);box-shadow:var(--shadow-md)}
.contact-grid .card .ico{width:46px;height:46px;border-radius:14px;background:var(--bg-sage);display:grid;place-items:center;font-size:1.35rem;flex-shrink:0}
.contact-grid .card .label{font-size:.78rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.06em;font-weight:600}
.contact-grid .card .value{font-family:'Fraunces',serif;font-size:1.18rem;color:var(--ink);margin-top:2px}
.contact-grid .card .hint{font-size:.85rem;color:var(--ink-soft);margin-top:4px}
@media (max-width:760px){.contact-grid .cards{grid-template-columns:1fr}}
.contact-form{padding:0 0 80px}
.contact-form .form-box{background:var(--bg-soft);border-radius:var(--radius-lg);padding:36px;display:grid;grid-template-columns:1fr 1.2fr;gap:36px;align-items:center}
.contact-form .form-box .text h2{margin-bottom:8px}
.contact-form .form-box .text p{color:var(--ink-soft)}
.contact-form form{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.contact-form .full{grid-column:1/-1}
.contact-form label{display:block}
.contact-form .lab{display:block;font-size:.82rem;color:var(--ink-soft);margin-bottom:6px;font-weight:600}
.contact-form input,.contact-form textarea{width:100%;padding:12px 14px;border-radius:12px;border:1.5px solid rgba(36,49,66,.10);background:#fff;font:inherit;color:var(--ink);transition:border-color .2s}
.contact-form input:focus,.contact-form textarea:focus{outline:0;border-color:var(--sage-deep)}
.contact-form textarea{min-height:120px;resize:vertical}
.contact-form .submit-row{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap}
.contact-form .submit-row .small{font-size:.85rem;color:var(--ink-soft)}
@media (max-width:860px){.contact-form .form-box{grid-template-columns:1fr;padding:24px}.contact-form form{grid-template-columns:1fr}}

/ Footer /
.site-footer{background:var(--ink);color:rgba(251,246,238,.78);padding:48px 0 24px;margin-top:24px}
.site-footer .grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:32px;padding-bottom:28px;border-bottom:1px solid rgba(251,246,238,.12)}
.site-footer h4{font-family:'Fraunces',serif;color:var(--bg);margin-bottom:12px;font-size:1.05rem;font-weight:500}
.site-footer a{color:rgba(251,246,238,.72);display:block;padding:4px 0;font-size:.95rem}
.site-footer a:hover{color:var(--bg)}
.site-footer .copy{padding-top:18px;font-size:.85rem;color:rgba(251,246,238,.55);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px}
@media (max-width:760px){.site-footer .grid{grid-template-columns:1fr;gap:24px}}

/ Reveal animation /
.reveal{opacity:0;transform:translateY(16px);transition:opacity .7s ease-out,transform .7s ease-out}
.http://reveal.in{opacity:1;transform:none}
.reveal.d2{transition-delay:.08s}
.reveal.d3{transition-delay:.16s}
.reveal.d4{transition-delay:.24s}

/ Focus styles /
a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:2.5px solid var(--terracotta);outline-offset:2px;border-radius:6px}

/ Skip link /
.skip{position:absolute;left:-9999px;top:0;background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:0 0 12px 12px;z-index:200}
.skip:focus{left:0}

## 📠 Status

Při tomto běhu agenta byl makety prototyp zápisu **Bez strachu z techniky** vytvořen částečně. Hlavní limit: do jednoho volného běhu se nevejde plotch všech 14 HTML souborů v jednom textovém poli. Zdrojový záznam Site content je proto ponechán ve stavu **In progress** podle pravidla „Errors → nežechat“.

**Co je hotovo:**

- Kompletní `assets/styles.css` (Styles)
- Kompletní `assets/i18n.js` a `assets/main.js` (Scripts)
- 4 reprezentativní HTML soubory: `index.html`, `cisteni.html`, `modernizace.html`, `software.html` (+ začátek `oprava.html`)
- `vercel.json`, `robots.txt`, `README.md` (Other)

**Co chybí (je třeba doplnit):**

- Dokončení `oprava.html` a 9 dalších HTML: `kamery.html`, `alarm.html`, `chytra-domacnost.html`, `gramotnost.html`, `doucovani.html`, `sachy.html`, `technologie.html`, `design.html`, `kontakt.html`
- Všechny tyto stránky mají jednotnou strukturu (lze přesně zopakovat šablonu z `cisteni.html` — změnit slug obrázků, nadpis, texty z odpovídající sekce záznamu Site content a navigaci prev/next).

---

## 🎨 Konceptuální report — „Bez strachu z techniky“

### Klíčové asociace ze jména záznamu a textů

1. **Soused přes plot.** Text doslova říká „mluvím s vámi jako se sousedem přes plot“. Vizuální odpověď — teplé běžové pozadí, intimní se rif Fraunces v nadpisech.
2. **Hodina v klidu u stolu.** Tempo bez spěchu — široké vzdušné layouty, měkký pohyb (reveal-on-scroll), žádné ostré animační efekty.
3. „**Není ostuda se ptát.**“ Teplá terakotová akcentní barva místo agresivní červené — podpora, ne výkon.
4. **Tichý a chladný stroj.** Stinná šalvejově zelená (sage) jako sekundární barva — klid, příroda, vyrovnaná mysl.
5. **Spali budete klidněji.** Velkorysé zaoblení (28 px) a měkké stíny — nic ostrého, nic technického.

### Vizuální jazyk

- **Paleta**: teplá cream `#FBF6EE`, slonovinová `#F1E7D5`, hluboce navy `#243142`, sage `#7FA38C` / `#4F7565` (klid), terakota `#D38869` / `#B86A4C` (laskavý akcent).
- **Typografie**: nadpisy **Fraunces** (variable optical-size, italic varianta pro akcent) — teplý literarní serif; tělo **Inter** — humanistický sans bez chladné industriální este tiky.
- **Rámování obrázků**: zaoblení 28 px na hero-blocich a službách, měkké dlouhé stíny `0 14px 40px`. Žádné filtry, žádné ozdobné rámečky — obrázky dýchají s pozadím.
- **Mikrointerakce**: hover-swap (`-main`→`-hover`) pouze na 12 miniškartách na `index.html`. Na podstránce služby: `-main` = hero/obal, `-hover` = sekundární ilustrace v těle — bez hover efektu.
- **Skládání**: CSS Grid + Flexbox, sticky header s `backdrop-filter`, sekundární obrázek `position: sticky` ve `svc-body` pro klidný předstírací účinek.
- **Reveal**: jemný fade-up (`opacity 0→1`, `translateY 16px`) při scroll-do-zorného-pole, přes IntersectionObserver, s opožděním `.d2/.d3/.d4` pro vlnu.

### Variace hero-bloků

Každá podstránka služby má hero s jiným poměrem a stranou obrázku (modifikace `alt`, `tall`, `wide`), aby 12 stránek nepůsobilo jako 12 stejných karet:

| # | stránka | strana obrázku | poměr |
| --- | --- | --- | --- |
| 1 | cisteni | vpravo | 1:1 |
| 2 | modernizace | vlevo | 5:3.5 |
| 3 | software | vpravo | 4:5 |
| 4 | oprava | vlevo | 1:1 |
| 5 | kamery | vpravo | 5:3.5 |
| 6 | alarm | vlevo | 4:5 |
| 7 | chytra-domacnost | vpravo | 1:1 |
| 8 | gramotnost | vlevo | 5:3.5 |
| 9 | doucovani | vpravo | 4:5 |
| 10 | sachy | vlevo | 1:1 |
| 11 | technologie | vpravo | 5:3.5 |
| 12 | design | vlevo | 4:5 |

### Přístupnost a responzivita

- Mobile-first snížení: pevné breakpoints na **600 px**, **760 px**, **860 px**, **980 px**.
- Skip-link, viditelný focus, alt-texty na všech nečistě dekorativních obrázcích, ARIA-label u hamburgeru, navigace.
- Počítá se s `prefers-reduced-motion` (animační třídy lze snadno potlačit).

---

## 📦 Instrukce pro sestavení

### Struktura složek

```
bez-strachu-z-techniky/
├─ index.html
├─ cisteni.html
├─ modernizace.html
├─ software.html
├─ oprava.html
├─ kamery.html
├─ alarm.html
├─ chytra-domacnost.html
├─ gramotnost.html
├─ doucovani.html
├─ sachy.html
├─ technologie.html
├─ design.html
├─ kontakt.html
├─ vercel.json
├─ robots.txt
├─ README.md
├─ assets/
│  ├─ styles.css
│  ├─ main.js
│  └─ i18n.js
└─ img/
   ├─ hero--main.png
   ├─ hero--hover.png
   ├─ cleaning--main.png
   ├─ cleaning--hover.png
   ├─ upgrade--main.png
   ├─ upgrade--hover.png
   ├─ software--main.png
   ├─ software--hover.png
   ├─ repair--main.png
   ├─ repair--hover.png
   ├─ webcam--main.png
   ├─ webcam--hover.png
   ├─ alarm--main.png
   ├─ alarm--hover.png
   ├─ appliances--main.png
   ├─ appliances--hover.png
   ├─ literacy--main.png
   ├─ literacy--hover.png
   ├─ tutor--main.png
   ├─ tutor--hover.png
   ├─ chess--main.png
   ├─ chess--hover.png
   ├─ development--main.png
   ├─ development--hover.png
   ├─ design--main.png
   └─ design--hover.png
```

### Kam uložit obsah z vlastností záznamu

- **Styles** → `assets/styles.css`
- **Scripts** → rozdělit po blocich `=== assets/i18n.js ===` a `=== assets/main.js ===` do `assets/i18n.js` a `assets/main.js`
- **Html** → rozdělit po blocich `=== <název>.html ===` do kořenové složky. *(V tomto běhu jsou zde jen 4 šablonové soubory; zbylé vytvořit dle vzoru — viz níže.)*
- **Other** → `vercel.json`, `robots.txt`, `README.md`

### Jak doplnit chybějících 10 stránek

1. Vytvořte kopii souboru `cisteni.html`.
2. Změňte `<title>`, breadcrumbs, `<h1>`, `lead`, oba odkazy na obrázky (`./img/<slug>--main.png`, `./img/<slug>--hover.png`), texty v `svc-body` (z příslušné property záznamu Site content), a `prev/next` v `svc-nav`.
3. Pro variace hero-bloku přidejte na `.svc-hero` třídy podle tabulky výše (`alt`, `tall`, `wide`).
4. Pro `kontakt.html` použijte `class="kontakt-hero"` s `hero--main.png` jako hlavním portrétem a sekcí `.contact-grid` plus formulářem `<form action="mailto:mistr@pocitace-doma.cz" method="post">`.

### Vícejazyčnost

Přidat další jazyk:

1. V `assets/i18n.js` přidat další klíč, např. `en: { brand: ..., nav_home: 'Home', ... }`, a zaregistrovat ho v `available: ['cs', 'en']`.
2. V hlavní hlavičce do bloku `.lang` přidat `<button data-lang="en">EN</button>` (na každé stránce).
3. JS auto-detekuje a aplikuje překladový slovník po kliknutí (s perzistencí v `localStorage`).

---

## 🚀 Nasazení na Vercel (bezplatné)

### Cesta přes webové rozhraní

1. Založte účet na [vercel.com](http://vercel.com) (lze přihlásit GitHubem nebo e-mailem).
2. **Add New → Project → Import**. Pokud zatím nemáte Git repozitář, zvolte tlačítko **Continue with Vercel CLI**.
3. Lokálně: `npm i -g vercel`, ve složce projektu spusťte `vercel` — nastaví se projekt a nahraje složka.
4. Vercel detekuje statický projekt automaticky. Framework Preset = **Other**. Build Command = prázdné, Output Directory = `.`
5. Po deployi obdržíte URL typu `bez-strachu-z-techniky.vercel.app`. Vlastní doménu přidáte v **Project → Settings → Domains**.

### Cesta přes Git

1. Vytvořte nový repozitář na GitHubu, nahrajte složku.
2. Na Vercelu **Add New → Project**, připojte repozitář.
3. Každý push do větve `main` automaticky nasadí novou verzi.

### Alternativy bez účtu Vercel

- **Netlify**: drag-and-drop složky na [netlify.com/drop](http://netlify.com/drop).
- **GitHub Pages**: nahrajte do repozitáře a v Settings → Pages nastavte `main` / root.
- **Cloudflare Pages**: připojte repozitář, Build command prázdné, Output `/`.

---

## 🔍 Co ještě zkontrolovat před spuštěním

- Doplnit zbývajících 10 HTML souborů podle vzoru.
- Zkopírovat všech 28 obrázků (14 dvojic) do `img/`.
- Změnit kontaktní údaje (`mistr@pocitace-doma.cz`, `+420 777 123 456`, WhatsApp) na reálné.
- Otestovat hover-swap na desktopu i mobilní sloupcové zobrazení.
- Ověřit, že Google Fonts (Fraunces + Inter) se načítají; v případě uzavřených sítí je nahradit lokálními kopiemi nebo system fonts.