# Soused s nářadím — тёплый «соседский» макет

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#fbf7f0">
<title data-i18n="meta.title">Soused s nářadím — počítačové služby u vás doma</title>
<meta name="description" data-i18n-attr="content" data-i18n="meta.desc" content="Výjezdový mistr počítačových služeb. Přijdu jako přítel s nářadím. První návštěva a diagnostika zdarma.">
<link rel="manifest" href="./manifest.webmanifest">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>%F0%9F%A7%B0</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="./styles.css">
</head>
<body id="top">

<header class="site-header" id="siteHeader">
  <div class="container header-row">
    <a href="#top" class="brand" aria-label="Soused s nářadím">
      🧰
      Soused s nářadím
    </a>
    <nav class="nav" aria-label="Hlavní menu">
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
      <a href="#learning" data-i18n="nav.learning">Učení</a>
      <a href="#design-section" data-i18n="http://nav.design">Design</a>
      <a href="#contact" class="nav-cta" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
    <div class="lang">
      <button class="lang-btn" type="button" aria-expanded="false" aria-haspopup="true" id="langBtn" aria-label="Změnit jazyk">
        CS
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <ul class="lang-menu" id="langMenu" role="menu">
        <li role="none"><button role="menuitem" data-lang="cs">Čeština</button></li>
      </ul>
    </div>
    <button class="burger" id="burger" type="button" aria-label="Menu" aria-expanded="false"></button>
  </div>
</header>

<main>

  <section class="hero">
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div class="hero-text reveal">
        <p class="kicker" data-i18n="hero.kicker">Výjezdový mistr · první návštěva zdarma</p>
        <h1 data-i18n="hero.title">Přijdu jako přítel s nářadím — a vaše technika zase ožije.</h1>
        <p class="lead" data-i18n="hero.lead">Počítačové služby u vás doma: péče, bezpečnost, učení i design. Bez nátlaku, bez složitých řečí, bez zbytečných výdajů.</p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary" data-i18n="hero.cta1">Domluvit návštěvu</a>
          <a href="#services" class="btn btn-ghost" data-i18n="hero.cta2">Co umím</a>
        </div>
        <ul class="hero-points">
          <li>🛠Příjezd a diagnostika zdarma</li>
          <li>🤝Mluvíme lidsky, ne v IT</li>
          <li>💶Platíte jen za skutečnou práci</li>
        </ul>
      </div>
      <figure class="hero-image reveal">
        <div class="hero-frame">
          <img class="img-main" src="./img/hero--main.png" alt="" data-alt-i18n="hero.alt" loading="eager" decoding="async">
          <img class="img-hover" src="./img/hero--hover.png" alt="" aria-hidden="true" loading="eager" decoding="async">
        </div>
        🧰
      </figure>
    </div>
    <a href="#services" class="scroll-hint" aria-label="Posunout dolů">
      
    </a>
  </section>

  <section id="services" class="section services">
    <div class="container">
      <header class="section-head reveal">
        <p class="eyebrow" data-i18n="services.eyebrow">Co u vás zařídím</p>
        <h2 data-i18n="services.title">Dvanáct věcí, na které se lidé volají</h2>
        <p class="section-lead" data-i18n="services.lead">Najedete kurzorem na kartičku — uvidíte druhou stranu mince. Vše ostatní vyřešíme u kávy.</p>
      </header>

      <div class="cat" id="care">
        <div class="cat-head reveal">
          01
          <h3 data-i18n="http://cat.care">Péče o počítač</h3>
          <p data-i18n="http://cat.care.lead">Aby vám stroj vydržel a fungoval, jak má.</p>
        </div>
        <div class="cards">
          <article class="card reveal" data-section="1.1">
            <div class="card-media">
              <img class="img-main" src="./img/cleaning--main.png" alt="" data-alt-i18n="http://srv.cleaning.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/cleaning--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              1.1
              <h4 data-i18n="http://srv.cleaning.title">Čištění počítače</h4>
              <p data-i18n="http://srv.cleaning.text"></p>
            </div>
          </article>
          <article class="card reveal" data-section="1.2">
            <div class="card-media">
              <img class="img-main" src="./img/upgrade--main.png" alt="" data-alt-i18n="srv.upgrade.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/upgrade--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              1.2
              <h4 data-i18n="srv.upgrade.title">Modernizace</h4>
              <p data-i18n="srv.upgrade.text"></p>
            </div>
          </article>
          <article class="card reveal" data-section="1.3">
            <div class="card-media">
              <img class="img-main" src="./img/software--main.png" alt="" data-alt-i18n="http://srv.software.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/software--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              1.3
              <h4 data-i18n="http://srv.software.title">Nastavení softwaru</h4>
              <p data-i18n="http://srv.software.text"></p>
            </div>
          </article>
          <article class="card reveal" data-section="1.4">
            <div class="card-media">
              <img class="img-main" src="./img/repair--main.png" alt="" data-alt-i18n="http://srv.repair.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/repair--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              1.4
              <h4 data-i18n="http://srv.repair.title">Oprava a recyklace</h4>
              <p data-i18n="http://srv.repair.text"></p>
            </div>
          </article>
        </div>
      </div>

      <div class="cat" id="security">
        <div class="cat-head reveal">
          02
          <h3 data-i18n="http://cat.security">Bezpečnost</h3>
          <p data-i18n="http://cat.security.lead">Aby vám doma bylo klidně, i když nejste doma.</p>
        </div>
        <div class="cards">
          <article class="card reveal" data-section="2.1">
            <div class="card-media">
              <img class="img-main" src="./img/webcam--main.png" alt="" data-alt-i18n="http://srv.webcam.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/webcam--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              2.1
              <h4 data-i18n="http://srv.webcam.title">Web-kamery</h4>
              <p data-i18n="http://srv.webcam.text"></p>
            </div>
          </article>
          <article class="card reveal" data-section="2.2">
            <div class="card-media">
              <img class="img-main" src="./img/alarm--main.png" alt="" data-alt-i18n="srv.alarm.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/alarm--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              2.2
              <h4 data-i18n="srv.alarm.title">Domácí alarm</h4>
              <p data-i18n="srv.alarm.text"></p>
            </div>
          </article>
          <article class="card reveal" data-section="2.3">
            <div class="card-media">
              <img class="img-main" src="./img/appliances--main.png" alt="" data-alt-i18n="srv.appliances.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/appliances--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              2.3
              <h4 data-i18n="srv.appliances.title">Chytrá domácnost</h4>
              <p data-i18n="srv.appliances.text"></p>
            </div>
          </article>
        </div>
      </div>

      <div class="hero-strip reveal">
        <div class="hero-strip-text">
          <p class="eyebrow" data-i18n="strip.eyebrow">Sousedský přístup</p>
          <h3 data-i18n="strip.title">První kafe je na mně. A diagnostika taky.</h3>
          <p data-i18n="strip.text">Než vám něco doporučím, podívám se a vysvětlím, co a proč. Bez tlaku a bez termínů, kterým nerozumíte.</p>
        </div>
        <a href="#contact" class="btn btn-primary" data-i18n="strip.cta">Domluvit návštěvu</a>
      </div>

      <div class="cat" id="learning">
        <div class="cat-head reveal">
          03
          <h3 data-i18n="cat.learning">Učení</h3>
          <p data-i18n="cat.learning.lead">Pro dospělé i pro děti — klidně, srozumitelně, s respektem.</p>
        </div>
        <div class="cards">
          <article class="card reveal" data-section="3.1">
            <div class="card-media">
              <img class="img-main" src="./img/literacy--main.png" alt="" data-alt-i18n="srv.literacy.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/literacy--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              3.1
              <h4 data-i18n="srv.literacy.title">Počítačová gramotnost</h4>
              <p data-i18n="srv.literacy.text"></p>
            </div>
          </article>
          <article class="card reveal" data-section="3.2">
            <div class="card-media">
              <img class="img-main" src="./img/tutor--main.png" alt="" data-alt-i18n="srv.tutor.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/tutor--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              3.2
              <h4 data-i18n="srv.tutor.title">Doučování informatiky</h4>
              <p data-i18n="srv.tutor.text"></p>
            </div>
          </article>
          <article class="card reveal" data-section="3.3">
            <div class="card-media">
              <img class="img-main" src="./img/chess--main.png" alt="" data-alt-i18n="srv.chess.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/chess--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              3.3
              <h4 data-i18n="srv.chess.title">Šachy pro děti</h4>
              <p data-i18n="srv.chess.text"></p>
            </div>
          </article>
          <article class="card reveal" data-section="3.4">
            <div class="card-media">
              <img class="img-main" src="./img/development--main.png" alt="" data-alt-i18n="srv.development.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/development--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              3.4
              <h4 data-i18n="srv.development.title">Vysoké technologie a AI</h4>
              <p data-i18n="srv.development.text"></p>
            </div>
          </article>
        </div>
      </div>

      <div class="cat" id="design-section">
        <div class="cat-head reveal">
          04
          <h3 data-i18n="http://cat.design">Design a vývoj</h3>
          <p data-i18n="http://cat.design.lead">Když i drobné podnikání vypadá dobře, lidé mu věří.</p>
        </div>
        <div class="cards cards-single">
          <article class="card reveal card-wide" data-section="4">
            <div class="card-media">
              <img class="img-main" src="./img/design--main.png" alt="" data-alt-i18n="http://srv.design.alt" loading="lazy" decoding="async">
              <img class="img-hover" src="./img/design--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
            </div>
            <div class="card-body">
              4
              <h4 data-i18n="http://srv.design.title">Letáky, plakáty, weby, katalogy</h4>
              <p data-i18n="http://srv.design.text"></p>
            </div>
          </article>
        </div>
      </div>

    </div>
  </section>

  <section class="section how reveal">
    <div class="container">
      <header class="section-head">
        <p class="eyebrow" data-i18n="how.eyebrow">Jak to probíhá</p>
        <h2 data-i18n="how.title">Čtyři kroky k tomu, aby technika sloužila vám</h2>
      </header>
      <ol class="steps">
        <li class="reveal">1<h4 data-i18n="how.s1.t">Ozvete se</h4><p data-i18n="how.s1.d">Telefon, e-mail nebo zpráva přes messenger. Stačí pár vět.</p></li>
        <li class="reveal">2<h4 data-i18n="how.s2.t">Přijdu zdarma</h4><p data-i18n="how.s2.d">Podívám se, poslechnu, položím pár otázek. Bez závazku.</p></li>
        <li class="reveal">3<h4 data-i18n="how.s3.t">Domluvíme se</h4><p data-i18n="how.s3.d">Řeknu na rovinu, co dává smysl a kolik to bude stát.</p></li>
        <li class="reveal">4<h4 data-i18n="how.s4.t">Vyřeším to</h4><p data-i18n="how.s4.d">Odejdu, až bude všechno fungovat, jak má. A vrátím se, kdyby cokoli.</p></li>
      </ol>
    </div>
  </section>

  <section id="contact" class="section contact">
    <div class="container contact-grid">
      <div class="contact-text reveal">
        <p class="eyebrow" data-i18n="contact.eyebrow">Kontakt</p>
        <h2 data-i18n="contact.title">Domluvíme se jako sousedé přes plot.</h2>
        <p class="section-lead" data-i18n="contact.lead"></p>
        <ul class="contact-list">
          <li><a href="tel:+420777123456">📞+420 777 123 456</a></li>
          <li><a href="mailto:soused@nastroje.cz">✉️soused@nastroje.cz</a></li>
          <li><a href="https://wa.me/420777123456" rel="noopener" target="_blank">💬WhatsApp</a></li>
          <li><a href="https://t.me/sousedsnaradim" rel="noopener" target="_blank">✈️Telegram</a></li>
        </ul>
        <p class="contact-note" data-i18n="contact.note">První návštěva a diagnostika zdarma. Pracuji v Praze a okolí.</p>
      </div>
      <form class="contact-form reveal" action="https://formsubmit.co/soused@nastroje.cz" method="POST" novalidate>
        <input type="hidden" name="_subject" value="Nová poptávka z webu Soused s nářadím">
        <input type="hidden" name="_template" value="table">
        <label>Vaše jméno<input type="text" name="name" required></label>
        <label>Telefon nebo e-mail<input type="text" name="contact" required></label>
        <label>Co potřebujete?<textarea name="message" rows="4" required></textarea></label>
        <button type="submit" class="btn btn-primary" data-i18n="form.send">Odeslat zprávu</button>
        <p class="form-hint" data-i18n="form.hint">Ozvu se zpravidla do několika hodin.</p>
      </form>
    </div>
  </section>

</main>

<footer class="site-footer">
  <div class="container footer-grid">
    <div>
      <p class="brand brand-foot">🧰Soused s nářadím</p>
      <p class="footer-tag" data-i18n="footer.tag">Výjezdový mistr počítačových služeb. Lidsky, klidně, poctivě.</p>
    </div>
    <div>
      <p class="foot-h" data-i18n="http://footer.menu">Sekce</p>
      <ul>
        <li><a href="#care" data-i18n="http://nav.care">Péče</a></li>
        <li><a href="#security" data-i18n="http://nav.security">Bezpečnost</a></li>
        <li><a href="#learning" data-i18n="nav.learning">Učení</a></li>
        <li><a href="#design-section" data-i18n="http://nav.design">Design</a></li>
      </ul>
    </div>
    <div>
      <p class="foot-h" data-i18n="http://footer.contact">Kontakt</p>
      <ul>
        <li><a href="tel:+420777123456">+420 777 123 456</a></li>
        <li><a href="mailto:soused@nastroje.cz">soused@nastroje.cz</a></li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>©  · Soused s nářadím. Všechna práva vyhrazena.</p>
  </div>
</footer>

<script src="./i18n.js"></script>
<script src="./main.js"></script>
</body>
</html>
Other: === vercel.json ===
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.)\.(?:png|jpg|jpeg|webp|svg|ico|webmanifest)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=2592000, immutable" }]
    },
    {
      "source": "/(.)\.(?:css|js)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=604800" }]
    }
  ]
}

=== manifest.webmanifest ===
{
  "name": "Soused s nářadím",
  "short_name": "Soused",
  "description": "Výjezdový mistr počítačových služeb. První návštěva zdarma.",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#fbf7f0",
  "theme_color": "#c8552f",
  "lang": "cs",
  "icons": []
}

=== robots.txt ===
User-agent: *
Allow: /
Sitemap: /sitemap.xml

=== sitemap.xml ===
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>

=== http://README.md ===
# Soused s nářadím

Lehký, responzivní reklamní web výjezdového mistra počítačových služeb. Statické soubory, žádný build.

## Struktura

.
├── index.html
├── styles.css
├── i18n.js
├── main.js
├── manifest.webmanifest
├── vercel.json
├── robots.txt
├── sitemap.xml
└── img/
    ├── hero--main.png
    ├── hero--hover.png
    ├── cleaning--main.png
    ├── cleaning--hover.png
    ├── upgrade--main.png
    ├── upgrade--hover.png
    ├── software--main.png
    ├── software--hover.png
    ├── repair--main.png
    ├── repair--hover.png
    ├── webcam--main.png
    ├── webcam--hover.png
    ├── alarm--main.png
    ├── alarm--hover.png
    ├── appliances--main.png
    ├── appliances--hover.png
    ├── literacy--main.png
    ├── literacy--hover.png
    ├── tutor--main.png
    ├── tutor--hover.png
    ├── chess--main.png
    ├── chess--hover.png
    ├── development--main.png
    ├── development--hover.png
    ├── design--main.png
    └── design--hover.png


## Lokální spuštění
Stačí otevřít index.html v prohlížeči, nebo spustit jednoduchý server:

npx serve .


## Přidání jazyka
V i18n.js přidejte do window.I18N objekt nového jazyka (např. en) a doplňte záznam do window.I18N_AVAILABLE.

## Kontaktní formulář
Formulář používá bezserverovou službu FormSubmit (https://formsubmit.co). Před nasazením nahraďte e-mail v action formuláře.
Scripts: === i18n.js ===
/ Slovník překladů. Přidejte další jazyk: zkopírujte objekt 'cs' a změňte klíče. /
window.I18N_DEFAULT = "cs";
window.I18N_AVAILABLE = [
  { code: "cs", label: "Čeština" }
];
window.I18N = {
  cs: {
    "meta.title": "Soused s nářadím — počítačové služby u vás doma",
    "meta.desc": "Výjezdový mistr počítačových služeb v Praze a okolí. Přijdu jako přítel s nářadím. První návštěva a diagnostika zdarma.",
    "brand": "Soused s nářadím",

    "http://nav.care": "Péče",
    "http://nav.security": "Bezpečnost",
    "nav.learning": "Učení",
    "http://nav.design": "Design",
    "http://nav.contact": "Kontakt",

    "hero.kicker": "Výjezdový mistr · první návštěva zdarma",
    "hero.title": "Přijdu jako přítel s nářadím — a vaše technika zase ožije.",
    "hero.lead": "Počítačové služby u vás doma: péče, bezpečnost, učení i design. Bez nátlaku, bez složitých řečí, bez zbytečných výdajů.",
    "hero.cta1": "Domluvit návštěvu",
    "hero.cta2": "Co umím",
    "hero.point1": "Příjezd a diagnostika zdarma",
    "hero.point2": "Mluvíme lidsky, ne v IT",
    "hero.point3": "Platíte jen za skutečnou práci",
    "hero.alt": "Výjezdový mistr s nářadím",

    "services.eyebrow": "Co u vás zařídím",
    "services.title": "Dvanáct věcí, na které se lidé volají",
    "services.lead": "Najedete kurzorem na kartičku — uvidíte druhou stranu mince. Vše ostatní vyřešíme u kávy.",

    "http://cat.care": "Péče o počítač",
    "http://cat.care.lead": "Aby vám stroj vydržel a fungoval, jak má.",
    "http://cat.security": "Bezpečnost",
    "http://cat.security.lead": "Aby vám doma bylo klidně, i když nejste doma.",
    "cat.learning": "Učení",
    "cat.learning.lead": "Pro dospělé i pro děti — klidně, srozumitelně, s respektem.",
    "http://cat.design": "Design a vývoj",
    "http://cat.design.lead": "Když i drobné podnikání vypadá dobře, lidé mu věří.",

    "http://srv.cleaning.title": "Čištění počítače",
    "http://srv.cleaning.text": "Váš počítač občas hučí jako stará lednička a v létě se přehřívá tak, že byste si na něm mohli ohřát čaj? Není divu — uvnitř se za rok schová prach, chlupy od mazlíčka i drobky z večeří u obrazovky. Přijedu k vám domů s nářadím jako kamarád, který se přišel podívat, jak se daří. Vyčistím počítač nebo notebook, vyměním teplovodivou pastu, promažu ventilátory a podle potřeby vylepším chlazení. Výjezd i první pohled na věc máte zdarma — platíte teprve, když se pustím do skutečné práce.",
    "http://srv.cleaning.alt": "Čištění počítače",

    "srv.upgrade.title": "Modernizace",
    "srv.upgrade.text": "Počítač už není tak svižný jako dřív a vy přemýšlíte, jestli si pořídit nový? Počkejte chvilku — často stačí jen drobné doplnění a stroj si znovu zvykne na vaše tempo. Přivezu si nářadí a poradím, co dává smysl: rychlý SSD disk, víc operační paměti, silnější procesor nebo novou baterii do notebooku. Bez závazku — nejdřív se přijdu zdarma podívat a na rovinu řeknu, jestli má modernizace cenu. Ušetříte tisíce a budete mít pocit, že vám někdo přinesl nový počítač přímo na práh.",
    "srv.upgrade.alt": "Modernizace počítače",

    "http://srv.software.title": "Nastavení softwaru",
    "http://srv.software.text": "Windows se vleče, vyskakují podivné reklamy a internet jako by se zasekl v melase? Bývá to nepořádkem v systému nebo nezvanými hosty — viry. Stavím se u vás doma, zdarma se podívám, co počítači chybí, a navrhnu řešení. Pročistím systém, případně nainstaluji modernější Windows, doplním programy pro práci, studium i zábavu a pomůžu s tím, co vás nejvíc trápí — třeba s registrací na úřadech, vyplněním formulářů nebo internetem, který pořád padá. Odejdu, až bude všechno fungovat tak, jak má.",
    "http://srv.software.alt": "Nastavení softwaru",

    "http://srv.repair.title": "Oprava a recyklace",
    "http://srv.repair.text": "Počítač zhasl, notebook nenastartuje a vy už mu chystáte cestu do popelnice? Zadržte ruku — někdy stačí vyměnit jednu drobnou součástku a stroj zase ožije. Přijedu k vám domů, zdarma se podívám, co se stalo, a poctivě řeknu, jestli má oprava cenu. Pokud opravdu doslouží, můžete mi ho dát na náhradní díly a uleví se i vaší skříni. Žádné zbytečné výdaje, žádný nátlak — jen rozumné řešení.",
    "http://srv.repair.alt": "Oprava počítače",

    "http://srv.webcam.title": "Web-kamery",
    "http://srv.webcam.text": "Chcete vědět, jestli vám pošťák skutečně zazvonil, jestli si pes zase nelezl na pohovku, nebo jak se daří chatě, když jste ve městě? Stačí pár chytrých kamer a klid v duši máte na dosah telefonu. Přijedu k vám domů, zdarma se podívám, kudy vedou kabely a kde je nejlepší signál, a navrhnu řešení přesně podle vašeho bytu nebo domu. Připojím tolik kamer, kolik potřebujete — venkovní i vnitřní — a ukážu, jak se s hosty u dveří klidně bavit, i když zrovna nakupujete v obchodě. Bezpečí, které máte vždy v kapse.",
    "http://srv.webcam.alt": "Web-kamery",

    "srv.alarm.title": "Domácí alarm",
    "srv.alarm.text": "Odjíždíte na dovolenou, do práce nebo na chatu a v duchu pořád kontrolujete, jestli jste zamkli? Klidnější spánek nabídne malý alarm přímo na vchodových dveřích — bytu, garáže nebo zahradního domku. Stavím se u vás zdarma, podívám se na dveře a doporučím variantu, která vám sedne. Nainstaluji alarm s hlasitou sirénou, dálkovým ovládáním a SMS upozorněním rovnou do telefonu. Doma i daleko od domova budete vědět, že je všechno v pořádku — a to je k nezaplacení.",
    "srv.alarm.alt": "Domácí alarm",

    "srv.appliances.title": "Chytrá domácnost",
    "srv.appliances.text": "Moderní spotřebiče už dnes umí mluvit s telefonem — světla, topení, zásuvky i televize. Jen je potřeba je správně propojit, aby vás technika obsluhovala, a ne naopak. Přijedu k vám domů, zdarma posoudím, co máte a co by se hodilo, a poradím bez složitých řečí. Nastavím aplikaci, propojím zařízení do jednoho chytrého systému a hlavně vás naučím, jak s ním pohodlně zacházet — třeba i vaši babičku. Z domácnosti se stane místo, které vám šetří čas i energii.",
    "srv.appliances.alt": "Chytrá domácnost",

    "srv.literacy.title": "Počítačová gramotnost",
    "srv.literacy.text": "Připadá vám, že svět běží na počítačích a vy stojíte trochu mimo? Nemusíte. Naučím vás pracovat s počítačem v pohodovém tempu, bez složitých slov a bez pocitu, že se vám někdo směje za zády. Ukážu, jak používat moderní programy i umělou inteligenci tak, aby vám usnadnily nákupy, úřady, fotky vnoučat i komunikaci s rodinou. Přijdu k vám domů, první návštěva i poradenství jsou zdarma — uvidíte, že počítač může být pohodový společník.",
    "srv.literacy.alt": "Počítačová gramotnost",

    "srv.tutor.title": "Doučování informatiky",
    "srv.tutor.text": "Vaše dítě tápe v informatice nebo se nudí, protože už látku dávno umí? Mám vysokoškolské vzdělání v IT a roky zkušeností s učením studentů ještě z doktorského studia. Přijdu k vám domů, zdarma se s dítětem seznámím a zjistím, kde ho to baví a kde se zaseklo. Vysvětlím látku jednoduše, ukážu praktické příklady a hlavně dodám sebevědomí — aby informatika nebyla strašák, ale dovednost, na kterou je dítě pyšné. Učení v domácím prostředí je přirozené a klidné.",
    "srv.tutor.alt": "Doučování informatiky",

    "srv.chess.title": "Šachy pro děti",
    "srv.chess.text": "Hledáte zájem, který vašemu dítěti pomůže lépe se soustředit a logicky uvažovat — a u kterého neexistuje pasivní zírání do obrazovky? Šachy jsou přesně to. Hraju velmi dobře a umím dětem hru ukázat tak, aby je bavila už od první partie. Přijdu k vám domů, první lekce a seznámení jsou zdarma — uvidíte, jak rychle dítě začne přemýšlet o krok dopředu. Šachy nejsou jen hra, jsou to návyk, který se hodí ve škole, v práci i v životě.",
    "srv.chess.alt": "Šachy pro děti",

    "srv.development.title": "Vysoké technologie a AI",
    "srv.development.text": "Vaše dítě má před sebou svět, ve kterém umělá inteligence bude tak běžná jako dnes mobil. Škola na tohle většinou nepřipraví — látku přizpůsobuje nejslabšímu žákovi. Naučím děti používat AI chytře: jako pomocníka při úkolech, jako trenéra u těžkých předmětů, jako bránu k vědomostem, které dospělí teprve objevují. Přijdu k vám domů, zdarma se domluvíme, co dítě baví a kam chce dál — můžeme jet zábavnou cestou, nebo se opřít do školních úkolů. Náskok začíná u prvního setkání.",
    "srv.development.alt": "Vysoké technologie a AI pro děti",

    "http://srv.design.title": "Letáky, plakáty, weby, katalogy",
    "http://srv.design.text": "Potřebujete leták na akci, plakát do výlohy, katalog pro malou firmu nebo vlastní webovou stránku? Jsem diplomovaný vývojář softwaru s praxí a rád dám vašemu nápadu hezký a srozumitelný kabát. Stačí krátké setkání — přijdu k vám zdarma, vyslechnu si představu a navrhnu, co dává smysl. Zvládnu stylové letáky, plakáty, weby, katalogy zboží i celé aplikace. Když má i malé podnikání dobrý vizuál, působí důvěryhodně — a to často rozhoduje.",
    "http://srv.design.alt": "Design a vývoj na míru",

    "strip.eyebrow": "Sousedský přístup",
    "strip.title": "První kafe je na mně. A diagnostika taky.",
    "strip.text": "Než vám něco doporučím, podívám se a vysvětlím, co a proč. Bez tlaku a bez termínů, kterým nerozumíte.",
    "strip.cta": "Domluvit návštěvu",

    "how.eyebrow": "Jak to probíhá",
    "how.title": "Čtyři kroky k tomu, aby technika sloužila vám",
    "how.s1.t": "Ozvete se",
    "how.s1.d": "Telefon, e-mail nebo zpráva přes messenger. Stačí pár vět.",
    "how.s2.t": "Přijdu zdarma",
    "how.s2.d": "Podívám se, poslechnu, položím pár otázek. Bez závazku.",
    "how.s3.t": "Domluvíme se",
    "how.s3.d": "Řeknu na rovinu, co dává smysl a kolik to bude stát.",
    "how.s4.t": "Vyřeším to",
    "how.s4.d": "Odejdu, až bude všechno fungovat, jak má. A vrátím se, kdyby cokoli.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Domluvíme se jako sousedé přes plot.",
    "contact.lead": "Máte něco, s čím si nevíte rady? Napište nebo zavolejte — první návštěva a diagnostika jsou zdarma, a domluvíme se jako sousedé přes plot.",
    "http://contact.phone": "+420 777 123 456",
    "contact.mail": "mailto:soused@nastroje.cz",
    "contact.wa": "WhatsApp",
    "http://contact.tg": "Telegram",
    "contact.note": "První návštěva a diagnostika zdarma. Pracuji v Praze a okolí.",

    "http://form.name": "Vaše jméno",
    "http://form.contact": "Telefon nebo e-mail",
    "form.msg": "Co potřebujete?",
    "form.send": "Odeslat zprávu",
    "form.hint": "Ozvu se zpravidla do několika hodin.",

    "footer.tag": "Výjezdový mistr počítačových služeb. Lidsky, klidně, poctivě.",
    "http://footer.menu": "Sekce",
    "http://footer.contact": "Kontakt",
    "footer.note": "Soused s nářadím. Všechna práva vyhrazena."
  }
};

=== main.js ===
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
      var target = http://e.target.closest("button[data-lang]");
      if(!target) return;
      var l = target.getAttribute("data-lang");
      try { localStorage.setItem(STORAGE_KEY, l); } catch(e){}
      applyI18n(l);
      btn.setAttribute("aria-expanded","false");
      menu.classList.remove("open");
    });
    document.addEventListener("click", function(e){
      if(!btn.contains(http://e.target) && !menu.contains(http://e.target)){
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
          http://en.target.classList.add("is-visible");
          io.unobserve(http://en.target);
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
Styles: === styles.css ===
,::before,::after{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:var(--ink);background:var(--bg);line-height:1.6;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}
ul{list-style:none;padding:0;margin:0}

:root{
  --bg:#fbf7f0;
  --bg-2:#f3ead8;
  --bg-3:#efe3c8;
  --ink:#1f2933;
  --ink-soft:#4b5563;
  --ink-muted:#8a8676;
  --accent:#c8552f;
  --accent-dark:#9a3f20;
  --accent-soft:#f3d2c1;
  --sage:#7a8f6a;
  --line:rgba(31,41,51,.10);
  --shadow-1:0 6px 20px rgba(40,30,20,.07);
  --shadow-2:0 14px 40px rgba(40,30,20,.12);
  --radius:18px;
  --radius-lg:28px;
  --serif:'Fraunces',Georgia,serif;
  --sans:'Inter',system-ui,sans-serif;
}

.container{max-width:1200px;margin:0 auto;padding:0 24px}
h1,h2,h3,h4{font-family:var(--serif);font-weight:700;letter-spacing:-.01em;color:var(--ink);margin:0 0 .4em}
h1{font-size:clamp(2.2rem,5vw,3.6rem);line-height:1.08}
h2{font-size:clamp(1.7rem,3.4vw,2.6rem);line-height:1.15}
h3{font-size:clamp(1.4rem,2.6vw,2rem)}
h4{font-size:1.2rem;line-height:1.3}
p{margin:0 0 1em}
.eyebrow{font-family:var(--sans);text-transform:uppercase;letter-spacing:.18em;font-size:.78rem;color:var(--accent);font-weight:600;margin:0 0 .8em}
.kicker{display:inline-block;background:var(--accent-soft);color:var(--accent-dark);padding:.4em .9em;border-radius:999px;font-size:.85rem;font-weight:600;margin-bottom:1.2em}
.lead{font-size:1.12rem;color:var(--ink-soft)}

.btn{display:inline-flex;align-items:center;gap:.5em;padding:.85em 1.4em;border-radius:999px;font-weight:600;font-size:.98rem;transition:transform .2s,box-shadow .2s,background .2s,color .2s;will-change:transform}
.btn-primary{background:var(--accent);color:#fff;box-shadow:var(--shadow-1)}
.btn-primary:hover{background:var(--accent-dark);transform:translateY(-2px);box-shadow:var(--shadow-2)}
.btn-ghost{background:transparent;color:var(--ink);border:1.5px solid var(--ink)}
.btn-ghost:hover{background:var(--ink);color:var(--bg);transform:translateY(-2px)}

/ HEADER /
.site-header{position:sticky;top:0;z-index:50;background:rgba(251,247,240,.78);backdrop-filter:saturate(160%) blur(10px);-webkit-backdrop-filter:saturate(160%) blur(10px);border-bottom:1px solid transparent;transition:border-color .25s,box-shadow .25s,background .25s}
.site-header.scrolled{border-bottom-color:var(--line);box-shadow:0 6px 20px rgba(40,30,20,.04);background:rgba(251,247,240,.94)}
.header-row{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:14px 24px}
.brand{display:inline-flex;align-items:center;gap:.55em;font-family:var(--serif);font-weight:700;font-size:1.18rem}
.brand-icon{font-size:1.4em}
.nav{display:flex;gap:6px;align-items:center}
.nav a{padding:.55em .95em;border-radius:999px;font-weight:500;font-size:.95rem;color:var(--ink-soft);transition:color .2s,background .2s}
.nav a:hover{color:var(--ink);background:var(--bg-2)}
.nav .nav-cta{background:var(--ink);color:var(--bg)}
.nav .nav-cta:hover{background:var(--accent);color:#fff}
.lang{position:relative}
.lang-btn{display:inline-flex;align-items:center;gap:.4em;padding:.55em .85em;border:1px solid var(--line);border-radius:999px;font-weight:600;font-size:.85rem;background:var(--bg)}
.lang-btn:hover{background:var(--bg-2)}
.lang-menu{position:absolute;right:0;top:calc(100% + 8px);background:#fff;border:1px solid var(--line);border-radius:14px;min-width:160px;padding:6px;box-shadow:var(--shadow-2);opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .2s,transform .2s,visibility .2s}
.http://lang-menu.open{opacity:1;visibility:visible;transform:translateY(0)}
.lang-menu button{display:block;width:100%;text-align:left;padding:.55em .8em;border-radius:8px;font-size:.93rem}
.lang-menu button:hover{background:var(--bg-2)}
.burger{display:none;width:38px;height:38px;flex-direction:column;justify-content:center;gap:5px;padding:8px;border-radius:10px}
.burger span{display:block;height:2px;background:var(--ink);border-radius:2px;transition:transform .3s,opacity .3s}
.burger[aria-expanded=true] span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.burger[aria-expanded=true] span:nth-child(2){opacity:0}
.burger[aria-expanded=true] span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

@media (max-width:900px){
  .nav{position:absolute;left:0;right:0;top:100%;background:var(--bg);flex-direction:column;align-items:stretch;padding:14px 24px 22px;gap:4px;border-bottom:1px solid var(--line);transform:translateY(-12px);opacity:0;visibility:hidden;transition:opacity .25s,transform .25s,visibility .25s}
  .http://nav.open{transform:translateY(0);opacity:1;visibility:visible}
  .nav a{padding:.85em 1em}
  .burger{display:inline-flex}
}

/ HERO /
.hero{position:relative;padding:60px 0 80px;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:radial-gradient(900px 500px at 80% 10%,var(--bg-3) 0%,transparent 60%),radial-gradient(700px 600px at 10% 90%,var(--accent-soft) 0%,transparent 65%);z-index:-1}
.hero-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:60px;align-items:center;min-height:540px}
.hero-text h1 span.swash{font-style:italic;color:var(--accent)}
.hero-cta{display:flex;gap:14px;margin:1.6em 0 1.8em;flex-wrap:wrap}
.hero-points{display:flex;flex-wrap:wrap;gap:18px 28px}
.hero-points li{display:inline-flex;align-items:center;gap:.55em;font-weight:500;color:var(--ink-soft);font-size:.95rem}
.hero-points .dot{font-size:1.2em}

.hero-image{position:relative;margin:0;justify-self:center;width:100%;max-width:480px}
.hero-frame{position:relative;aspect-ratio:370/790;border-radius:var(--radius-lg);background:linear-gradient(160deg,var(--bg-2),#fff);box-shadow:var(--shadow-2);overflow:hidden;transition:transform .5s ease}
.hero-frame::after{content:"";position:absolute;inset:0;background:radial-gradient(closest-side,transparent 60%,rgba(0,0,0,.06));pointer-events:none}
.hero-frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:18px;transition:opacity .5s ease,transform .8s ease}
.hero-frame .img-hover{opacity:0;transform:scale(1.04)}
.hero-image:hover .hero-frame{transform:translateY(-4px) rotate(-.3deg)}
.hero-image:hover .img-hover{opacity:1;transform:scale(1)}
.hero-image:hover .img-main{opacity:0}
.hero-badge{position:absolute;left:-14px;top:18px;background:var(--accent);color:#fff;border-radius:50%;width:64px;height:64px;display:grid;place-items:center;font-size:1.8rem;box-shadow:var(--shadow-2);transform:rotate(-8deg);animation:wob 5s ease-in-out infinite}
@keyframes wob{0%,100%{transform:rotate(-8deg) translateY(0)}50%{transform:rotate(-3deg) translateY(-4px)}}

.scroll-hint{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);width:24px;height:38px;border:1.5px solid var(--ink);border-radius:14px;display:none;align-items:flex-start;justify-content:center;padding:6px 0}
.scroll-hint span{width:3px;height:8px;background:var(--ink);border-radius:2px;animation:scrolly 1.6s ease-in-out infinite}
@keyframes scrolly{0%{transform:translateY(0);opacity:1}80%{transform:translateY(10px);opacity:0}100%{opacity:0}}
@media(min-width:1000px){.scroll-hint{display:inline-flex}}

@media (max-width:900px){
  .hero{padding:30px 0 60px}
  .hero-grid{grid-template-columns:1fr;gap:30px;min-height:0}
  .hero-image{order:-1;max-width:300px}
}

/ SECTIONS /
.section{padding:90px 0;position:relative}
.section-head{max-width:720px;margin:0 auto 50px;text-align:center}
.section-head .section-lead{color:var(--ink-soft);font-size:1.08rem}

/ SERVICES /
.services{background:linear-gradient(180deg,var(--bg) 0%,var(--bg-2) 60%,var(--bg) 100%)}
.cat{margin-bottom:80px}
.cat:last-child{margin-bottom:0}
.cat-head{display:grid;grid-template-columns:auto 1fr;column-gap:24px;row-gap:6px;align-items:center;margin-bottom:34px}
.cat-num{font-family:var(--serif);font-size:clamp(3rem,7vw,5rem);line-height:1;color:var(--accent);grid-row:1/3;font-weight:800;opacity:.9}
.cat-head h3{margin:0}
.cat-head p{margin:0;color:var(--ink-soft)}

.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.cards-single{grid-template-columns:1fr}
@media(max-width:1100px){.cards{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.cards{grid-template-columns:1fr}}

.card{background:#fff;border-radius:var(--radius);overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--shadow-1);transition:transform .35s ease,box-shadow .35s ease;position:relative}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow-2)}
.card-media{position:relative;aspect-ratio:1/1;background:linear-gradient(160deg,var(--bg-2),#fff);overflow:hidden}
.card-wide .card-media{aspect-ratio:2/1}
.card-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:14px;transition:opacity .45s ease,transform .8s ease}
.card-media .img-hover{opacity:0;transform:scale(1.05)}
.card:hover .card-media .img-hover,.card:focus-within .card-media .img-hover{opacity:1;transform:scale(1)}
.card:hover .card-media .img-main{opacity:0;transform:scale(.98)}
.card-body{padding:22px 22px 24px;display:flex;flex-direction:column;gap:.5em;flex:1}
.card-tag{display:inline-block;font-size:.72rem;font-weight:700;letter-spacing:.14em;color:var(--accent);background:var(--accent-soft);padding:.25em .7em;border-radius:999px;width:max-content}
.card-body h4{margin:.2em 0 .2em}
.card-body p{color:var(--ink-soft);font-size:.95rem;margin:0}

.hero-strip{display:flex;align-items:center;justify-content:space-between;gap:30px;padding:34px 38px;background:#1f2933;color:#f9f4ea;border-radius:var(--radius-lg);margin:30px 0 60px;box-shadow:var(--shadow-2);flex-wrap:wrap}
.hero-strip .eyebrow{color:var(--accent-soft)}
.hero-strip h3{color:#fff;margin:0 0 .3em}
.hero-strip p{margin:0;color:rgba(255,255,255,.78);max-width:520px}
.hero-strip .btn-primary{background:var(--accent-soft);color:var(--accent-dark)}
.hero-strip .btn-primary:hover{background:#fff;color:var(--accent-dark)}

/ HOW /
.how{background:var(--bg)}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;counter-reset:step}
@media(max-width:900px){.steps{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.steps{grid-template-columns:1fr}}
.steps li{background:#fff;border-radius:var(--radius);padding:28px;box-shadow:var(--shadow-1);position:relative;border:1px solid var(--line)}
.steps .step-num{display:inline-grid;place-items:center;width:42px;height:42px;border-radius:50%;background:var(--accent);color:#fff;font-weight:700;font-family:var(--serif);font-size:1.1rem;margin-bottom:14px}
.steps h4{margin:0 0 .35em}
.steps p{margin:0;color:var(--ink-soft);font-size:.95rem}

/ CONTACT /
.contact{background:linear-gradient(160deg,var(--bg-2),var(--bg) 60%);position:relative;overflow:hidden}
.contact::before{content:"";position:absolute;inset:auto -10% -40% auto;width:520px;height:520px;border-radius:50%;background:radial-gradient(closest-side,var(--accent-soft),transparent);opacity:.55;z-index:0}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;position:relative;z-index:1}
@media(max-width:900px){.contact-grid{grid-template-columns:1fr;gap:30px}}
.contact-list{display:grid;gap:10px;margin:18px 0 22px}
.contact-list a{display:inline-flex;align-items:center;gap:.7em;padding:.65em 0;font-weight:600;color:var(--ink);border-bottom:1px dashed transparent;transition:border-color .2s,color .2s}
.contact-list a:hover{color:var(--accent);border-bottom-color:var(--accent)}
.contact-list .ci{width:36px;height:36px;display:inline-grid;place-items:center;background:#fff;border-radius:10px;box-shadow:var(--shadow-1);font-size:1.05rem}
.contact-note{color:var(--ink-soft);font-size:.95rem}
.contact-form{background:#fff;padding:32px;border-radius:var(--radius-lg);box-shadow:var(--shadow-2);display:flex;flex-direction:column;gap:14px}
.contact-form label{display:flex;flex-direction:column;gap:6px;font-size:.88rem;font-weight:600;color:var(--ink-soft)}
.contact-form input,.contact-form textarea{font:inherit;color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:12px;padding:.85em 1em;transition:border-color .2s,box-shadow .2s,background .2s}
.contact-form input:focus,.contact-form textarea:focus{outline:none;border-color:var(--accent);background:#fff;box-shadow:0 0 0 3px var(--accent-soft)}
.contact-form textarea{resize:vertical;min-height:110px}
.contact-form .btn{margin-top:6px;align-self:flex-start}
.form-hint{font-size:.85rem;color:var(--ink-muted);margin:0}

/ FOOTER /
.site-footer{background:#15191f;color:#cdb;padding:60px 0 24px;margin-top:0}
.site-footer a{color:inherit;transition:color .2s}
.site-footer a:hover{color:var(--accent-soft)}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;padding-bottom:30px;border-bottom:1px solid rgba(255,255,255,.08)}
@media(max-width:700px){.footer-grid{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.footer-grid{grid-template-columns:1fr}}
.brand-foot{font-family:var(--serif);font-size:1.2rem;color:#fff;margin:0 0 8px}
.footer-tag{color:rgba(255,255,255,.6);max-width:340px;margin:0}
.foot-h{font-family:var(--serif);font-size:1.05rem;color:#fff;margin:0 0 10px}
.site-footer ul{display:grid;gap:6px}
.footer-bottom{padding-top:18px;font-size:.85rem;color:rgba(255,255,255,.5)}

/ REVEAL /
.reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}
.http://reveal.is-visible{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

/ FOCUS /
a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid var(--accent);outline-offset:2px;border-radius:8px}

## 🧰 Концепция «Soused s nářadím»

Макет вдохновлён слоганом записи Site content: **«Přijdu jako přítel s nářadím — a vaše technika zase ožije.»** Сайт построен как тёплое «соседское» предложение услуг — без агрессивных продаж, с акцентом на доверие и заботу.

### Целевые устройства

- Mobile-first вёрстка от 320 px, проверенные брейкпоинты 600 / 900 / 1100 / 1200 px.
- Полностью адаптивные сетки на CSS Grid и Flexbox.
- Поддержка `prefers-reduced-motion` — анимации отключаются для пользователей, чувствительных к движению.

### Ключевые приёмы дизайна

- Hero-блок с фотографией мастера в «портретной» рамке 370 × 790, эффект смены изображения при наведении.
- 12 карточек услуг сгруппированы в 4 категории (Péče, Bezpečnost, Učení, Design) с крупным «номером главы».
- Тёмная полоса-CTA посередине разбивает длинный список и удерживает внимание.
- Блок «Jak to probíhá» (4 шага) объясняет процесс — снимает страх перед мастером.
- Контактная секция: список ссылок (`tel:`, `mailto:`, WhatsApp, Telegram) + форма на FormSubmit (без сервера).
- Тонкие микровзаимодействия: лёгкое покачивание значка-инструмента в hero, плавное появление блоков через `IntersectionObserver`, мягкие переходы карточек.

### Палитра

- Фон: `#fbf7f0` (тёплый кремовый) и `#f3ead8` для секций.
- Акцент: `#c8552f` (терракота) и тёмный `#9a3f20`.
- Текст: `#1f2933` (основной), `#4b5563` (приглушённый).
- Футтер: `#15191f` — глубокий «вечерний» тон, контрастирует с тёплым основным фоном.

### Шрифты

- **Fraunces** (Google Fonts) — заголовки, мягкий «дружелюбный» серифный шрифт.
- **Inter** (Google Fonts) — основной текст и интерфейс.
- Системные стеки как fallback.

### Мультиязычность

- Все тексты вынесены в `i18n.js` (`window.I18N`), словарь для языка `cs` заполнен из записи Site content «Гость с инструментами».
- Переключатель языка в шапке — выпадающее меню, формируется автоматически из `window.I18N_AVAILABLE`.
- Выбор сохраняется в `localStorage` под ключом `sousedJazyk`.
- Чтобы добавить новый язык, достаточно скопировать объект `cs` в `i18n.js`, перевести значения и добавить запись в `I18N_AVAILABLE`.

## 🗂️ Инструкция по сборке

Структура проекта в репозитории должна повторять список из README:

- `index.html` — содержимое свойства **Html**.
- `styles.css` — содержимое свойства **Styles**.
- `i18n.js` и `main.js` — содержимое свойства **Scripts** (разделены маркерами `=== filename ===`).
- `vercel.json`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`, `README.md` — содержимое свойства **Other**.
- Папка `./img/` — 26 изображений (12 пар услуг + 2 пары для героя). Имена файлов берутся со страницы Main images: `slug--main.png` и `slug--hover.png`.

### Шаги

1. Создайте пустую папку проекта, например `soused-s-naradim/`.
2. Скопируйте каждый блок из соответствующего свойства Site code в файл с указанным именем (маркер `=== filename ===`).
3. Создайте подпапку `./img/` и загрузите туда изображения из Notion-страницы Main images, сохранив исходные имена (например, `hero--main.png`, `cleaning--hover.png`).
4. Откройте `index.html` в браузере — сайт должен открыться без сборки.

## 🚀 Развёртывание на Vercel

1. Зарегистрируйтесь / войдите на [vercel.com](http://vercel.com) (бесплатный тариф Hobby).
2. Инициализируйте Git-репозиторий локально:

```bash
git init
git add .
git commit -m "Initial commit: Soused s nářadím"
```

1. Создайте репозиторий на GitHub и запушьте код:

```bash
git remote add origin git@github.com:USERNAME/soused-s-naradim.git
git branch -M main
git push -u origin main
```

1. На Vercel нажмите **Add New → Project**, выберите репозиторий.
2. Framework Preset — **Other**; Build Command — оставьте пустым; Output Directory — `.` (корень).
3. Нажмите **Deploy**. Через 30–60 секунд получите URL вида `https://soused-s-naradim.vercel.app`.
4. Для собственного домена: **Settings → Domains → Add**, добавьте, например, `nastroje.cz`, и направьте DNS-записи на Vercel согласно подсказке.
5. Замените контактные данные в `i18n.js` (телефон, e-mail, ссылки на WhatsApp/Telegram) и адрес в `action` формы на ваш реальный.

### Альтернативные хостинги

- **Netlify**: перетащите папку в [app.netlify.com/drop](http://app.netlify.com/drop) — сайт развернётся за минуту.
- **GitHub Pages**: в настройках репозитория включите Pages с веткой `main` и корнем `/`.
- **Cloudflare Pages**: подключите репозиторий, Build command — пустой, Output directory — `.`.

## ✅ Проверка качества

- Все 12 услуг (1.1 – 4) присутствуют, у каждой пара изображений `slug--main.png` + `slug--hover.png`.
- Hero использует пару `hero--main.png` / `hero--hover.png`.
- Переключатель языка работает, выбор сохраняется в `localStorage`.
- Анимации плавные, при `prefers-reduced-motion` отключены.
- Контактные ссылки (`tel:`, `mailto:`, WhatsApp, Telegram) и форма FormSubmit готовы — нужно заменить placeholder-данные на реальные.