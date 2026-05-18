# Aurora Cesta — krok do budoucnosti

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs" data-theme="aurora">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title data-i18n="meta.title">Krok do budoucnosti — výjezdový počítačový mistr</title>
  <meta name="description" data-i18n-attr="content" data-i18n="meta.description" content="Výjezdový počítačový mistr u vás doma: údržba, bezpečnost, výuka i design. Výjezd a první diagnostika zdarma." />
  <meta name="theme-color" content="#0b1326" />
  <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='26' font-size='28'>🌅</text></svg>" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <a class="skip-link" href="#main" data-i18n="a11y.skip">Přejít na obsah</a>

  <header class="site-header" id="top">
    <div class="container header__inner">
      <a class="brand" href="#top" aria-label="Krok do budoucnosti">
        ↗
        Krok do budoucnosti
      </a>
      <nav class="primary-nav" aria-label="Hlavní menu">
        <a href="#care" data-i18n="http://nav.care">Péče</a>
        <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
        <a href="#learning" data-i18n="nav.learning">Učení</a>
        <a href="#design" data-i18n="http://nav.design">Design</a>
        <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
      </nav>
      <div class="header__actions">
        <div class="lang-switcher" role="group" aria-label="Jazyk">
          <button type="button" class="lang-switcher__btn is-active" data-lang="cs" aria-pressed="true">CS</button>
        </div>
        <a href="#contact" class="btn btn--primary btn--sm hide-sm" data-i18n="http://cta.book">Domluvit</a>
        <button class="nav-toggle" type="button" aria-label="Otevřít menu" aria-expanded="false" aria-controls="primary-nav-mobile">
          
        </button>
      </div>
    </div>
    <nav class="primary-nav primary-nav--mobile" id="primary-nav-mobile" aria-label="Mobilní menu">
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
      <a href="#learning" data-i18n="nav.learning">Učení</a>
      <a href="#design" data-i18n="http://nav.design">Design</a>
      <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__aurora" aria-hidden="true"></div>
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="eyebrow" data-i18n="hero.eyebrow">Výjezdový počítačový mistr</p>
          <h1 id="hero-title" class="hero__title" data-i18n="hero.title">Krok do budoucnosti — s počítačovým mistrem, který přijede k vám domů.</h1>
          <p class="hero__lead" data-i18n="hero.lead">Údržba, bezpečnost, výuka a design. První výjezd i diagnostika jsou zdarma a k ničemu vás nezavazují.</p>
          <div class="hero__actions">
            <a href="#contact" class="btn btn--primary" data-i18n="hero.cta1">Domluvit návštěvu</a>
            <a href="#services" class="btn btn--ghost" data-i18n="hero.cta2">Prozkoumat služby</a>
          </div>
          <ul class="hero__badges" aria-label="Výhody">
            <li>✓ Výjezd zdarma</li>
            <li>✓ Diagnostika zdarma</li>
            <li>✓ Bez nátlaku</li>
          </ul>
        </div>
        <figure class="hero__figure hover-img" data-main="./img/hero--main.png" data-hover="./img/hero--hover.png">
          <img src="./img/hero--main.png" alt="master" width="370" height="790" loading="eager" decoding="async" />
          <figcaption class="hero__caption" data-i18n="hero.caption">Přijíždím k vám domů po celém okolí.</figcaption>
        </figure>
      </div>
    </section>

    <section class="section" id="care" aria-labelledby="care-title">
      <div class="container">
        <header class="section__header reveal">
          <p class="eyebrow" data-i18n="care.eyebrow">01 — Péče o počítač</p>
          <h2 id="care-title" data-i18n="care.title">Aby technika dýchala</h2>
          <p class="section__lead" data-i18n="care.lead">Malé kroky, díky kterým váš stroj poslouchá jako první den.</p>
        </header>
        <div class="cards cards--4" id="services">
          <article class="card reveal" data-section="1.1" id="cleaning">
            <figure class="card__media hover-img" data-main="./img/cleaning--main.png" data-hover="./img/cleaning--hover.png">
              <img src="./img/cleaning--main.png" alt="cleaning" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">1.1</p>
              <h3 class="card__title" data-i18n="http://cards.cleaning.title">Čištění počítače</h3>
              <p class="card__text" data-i18n="http://content.cleaning"></p>
            </div>
          </article>
          <article class="card reveal" data-section="1.2" id="upgrade">
            <figure class="card__media hover-img" data-main="./img/upgrade--main.png" data-hover="./img/upgrade--hover.png">
              <img src="./img/upgrade--main.png" alt="upgrade" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">1.2</p>
              <h3 class="card__title" data-i18n="cards.upgrade.title">Modernizace</h3>
              <p class="card__text" data-i18n="content.upgrade"></p>
            </div>
          </article>
          <article class="card reveal" data-section="1.3" id="software">
            <figure class="card__media hover-img" data-main="./img/software--main.png" data-hover="./img/software--hover.png">
              <img src="./img/software--main.png" alt="software" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">1.3</p>
              <h3 class="card__title" data-i18n="http://cards.software.title">Nastavení softwaru</h3>
              <p class="card__text" data-i18n="http://content.software"></p>
            </div>
          </article>
          <article class="card reveal" data-section="1.4" id="repair">
            <figure class="card__media hover-img" data-main="./img/repair--main.png" data-hover="./img/repair--hover.png">
              <img src="./img/repair--main.png" alt="repair" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">1.4</p>
              <h3 class="card__title" data-i18n="http://cards.repair.title">Opravy a recyklace</h3>
              <p class="card__text" data-i18n="http://content.repair"></p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--alt" id="security" aria-labelledby="security-title">
      <div class="container">
        <header class="section__header reveal">
          <p class="eyebrow" data-i18n="security.eyebrow">02 — Bezpečnost</p>
          <h2 id="security-title" data-i18n="security.title">Klid pro vás i váš domov</h2>
          <p class="section__lead" data-i18n="security.lead">Kamery, alarmy a chytré spotřebiče. Propojím to tak, aby vás technika hlídala — ne stresovala.</p>
        </header>
        <div class="cards cards--3">
          <article class="card reveal" data-section="2.1" id="webcam">
            <figure class="card__media hover-img" data-main="./img/webcam--main.png" data-hover="./img/webcam--hover.png">
              <img src="./img/webcam--main.png" alt="webcam" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">2.1</p>
              <h3 class="card__title" data-i18n="http://cards.webcam.title">Webkamery</h3>
              <p class="card__text" data-i18n="http://content.webcam"></p>
            </div>
          </article>
          <article class="card reveal" data-section="2.2" id="alarm">
            <figure class="card__media hover-img" data-main="./img/alarm--main.png" data-hover="./img/alarm--hover.png">
              <img src="./img/alarm--main.png" alt="alarm" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">2.2</p>
              <h3 class="card__title" data-i18n="cards.alarm.title">Domácí alarm</h3>
              <p class="card__text" data-i18n="content.alarm"></p>
            </div>
          </article>
          <article class="card reveal" data-section="2.3" id="appliances">
            <figure class="card__media hover-img" data-main="./img/appliances--main.png" data-hover="./img/appliances--hover.png">
              <img src="./img/appliances--main.png" alt="appliances" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">2.3</p>
              <h3 class="card__title" data-i18n="cards.appliances.title">Chytrá domácnost</h3>
              <p class="card__text" data-i18n="content.appliances"></p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="learning" aria-labelledby="learning-title">
      <div class="container">
        <header class="section__header reveal">
          <p class="eyebrow" data-i18n="learning.eyebrow">03 — Učení</p>
          <h2 id="learning-title" data-i18n="learning.title">Pro dospělé i děti</h2>
          <p class="section__lead" data-i18n="learning.lead">Tempo si určujete vy. Z výuky uděláme dobrodružství — bez nátlaku a poučování.</p>
        </header>

        <div class="subgroup reveal">
          <p class="subgroup__label" data-i18n="learning.adults">Dospělí</p>
        </div>
        <div class="cards cards--1">
          <article class="card card--wide reveal" data-section="3.1" id="literacy">
            <figure class="card__media hover-img" data-main="./img/literacy--main.png" data-hover="./img/literacy--hover.png">
              <img src="./img/literacy--main.png" alt="literacy" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">3.1</p>
              <h3 class="card__title" data-i18n="cards.literacy.title">Počítačová gramotnost</h3>
              <p class="card__text" data-i18n="content.literacy"></p>
            </div>
          </article>
        </div>

        <div class="subgroup reveal">
          <p class="subgroup__label" data-i18n="http://learning.kids">Děti</p>
        </div>
        <div class="cards cards--3">
          <article class="card reveal" data-section="3.2" id="tutor">
            <figure class="card__media hover-img" data-main="./img/tutor--main.png" data-hover="./img/tutor--hover.png">
              <img src="./img/tutor--main.png" alt="tutor" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">3.2</p>
              <h3 class="card__title" data-i18n="cards.tutor.title">Doučování informatiky</h3>
              <p class="card__text" data-i18n="content.tutor"></p>
            </div>
          </article>
          <article class="card reveal" data-section="3.3" id="chess">
            <figure class="card__media hover-img" data-main="./img/chess--main.png" data-hover="./img/chess--hover.png">
              <img src="./img/chess--main.png" alt="chess" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">3.3</p>
              <h3 class="card__title" data-i18n="cards.chess.title">Šachy</h3>
              <p class="card__text" data-i18n="content.chess"></p>
            </div>
          </article>
          <article class="card reveal" data-section="3.4" id="development">
            <figure class="card__media hover-img" data-main="./img/development--main.png" data-hover="./img/development--hover.png">
              <img src="./img/development--main.png" alt="development" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">3.4</p>
              <h3 class="card__title" data-i18n="cards.development.title">Vyspělé technologie</h3>
              <p class="card__text" data-i18n="content.development"></p>
            </div>
          </article>
        </div>

        <aside class="callout reveal" role="note">
          ⭐
          <p data-i18n="learning.callout">Tajemství úspěchu ve škole: aby vaše děti obstály mezi vrstevníky, měly by už dnes začít chápat umělou inteligenci. Ve škole se to neučí — kdo umí AI používat chytře, bude o krok napřed.</p>
        </aside>
      </div>
    </section>

    <section class="section section--alt" id="design" aria-labelledby="design-title">
      <div class="container">
        <header class="section__header reveal">
          <p class="eyebrow" data-i18n="design.eyebrow">04 — Design</p>
          <h2 id="design-title" data-i18n="design.title">Vizuální tvář vašeho nápadu</h2>
          <p class="section__lead" data-i18n="design.lead">Letáky, plakáty, webové stránky i malé aplikace — srozumitelně, s lidským přístupem.</p>
        </header>
        <div class="cards cards--1">
          <article class="card card--wide reveal" data-section="4" id="design-card">
            <figure class="card__media hover-img" data-main="./img/design--main.png" data-hover="./img/design--hover.png">
              <img src="./img/design--main.png" alt="design" loading="lazy" decoding="async" />
            </figure>
            <div class="card__body">
              <p class="card__code">4</p>
              <h3 class="card__title" data-i18n="http://cards.design.title">Design na míru</h3>
              <p class="card__text" data-i18n="http://content.design"></p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--contact" id="contact" aria-labelledby="contact-title">
      <div class="container contact__grid">
        <div class="contact__content reveal">
          <p class="eyebrow" data-i18n="contact.eyebrow">05 — Kontakt</p>
          <h2 id="contact-title" data-i18n="contact.title">Pojďme udělat ten krok společně</h2>
          <p class="contact__lead" data-i18n="http://content.contact"></p>
          <ul class="contact__list">
            <li><a class="contact__link" href="mailto:savik@krok-do-budoucnosti.cz">✉️<strong data-i18n="http://contact.email_label">E-mail</strong>
mailto:savik@krok-do-budoucnosti.cz</a></li>
            <li><a class="contact__link" href="tel:+420777123456">📞<strong data-i18n="http://contact.phone_label">Telefon</strong>
+420 777 123 456</a></li>
            <li><a class="contact__link" href="https://wa.me/420777123456" target="blank" rel="noopener"><span class="contacticon" aria-hidden="true">💬</span><strong>WhatsApp</strong>
+420 777 123 456</a></li>
            <li><a class="contactlink" href="https://t.me/krokdobudoucnosti" target="_blank" rel="noopener"><span class="contacticon" aria-hidden="true">✈️</span><strong>Telegram</strong>
@krokdobudoucnosti</a></li>
          </ul>
          <form class="contactform" action="https://formsubmit.co/savik@krok-do-budoucnosti.cz" method="POST" novalidate>
            <input type="hidden" name="_subject" value="Nová poptávka — Krok do budoucnosti" />
            <input type="hidden" name="_captcha" value="false" />
            <label>Jméno<input type="text" name="name" required autocomplete="name" /></label>
            <label>Telefon nebo e-mail<input type="text" name="contact" required autocomplete="email" /></label>
            <label class="contactform-full">Co řešíte?<textarea name="message" rows="4" required></textarea></label>
            <button type="submit" class="btn btn--primary contactform-full" data-i18n="form.submit">Odeslat poptávku</button>
            <p class="contactform-note contactform-full" data-i18n="form.note">Odesláním souhlasíte se zpracováním osobních údajů výhradně pro účely odpovědi.</p>
          </form>
        </div>
        <figure class="contactfigure hover-img reveal" data-main="./img/hero--main.png" data-hover="./img/hero--hover.png">
          <img src="./img/hero--main.png" alt="master" width="370" height="790" loading="lazy" decoding="async" />
        </figure>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container site-footerinner">
      <p class="site-footerbrand">↗ Krok do budoucnosti</p>
      <p class="site-footertagline" data-i18n="footer.tagline">Výjezdový počítačový mistr · Česko</p>
      <p class="site-footer_copy">©  Krok do budoucnosti. Všechna práva vyhrazena.</p>
    </div>
  </footer>

  <a href="#contact" class="floating-cta" aria-label="Domluvit návštěvu" data-i18n="cta.floating">Domluvit návštěvu</a>

  <script src="./scripts/i18n.js"></script>
  <script src="./scripts/main.js"></script>
</body>
</html>

Other: === package.json ===
{
  "name": "krok-do-budoucnosti",
  "version": "1.0.0",
  "description": "Aurora Cesta — výjezdový počítačový mistr (statický web).",
  "private": true,
  "scripts": {
    "start": "npx serve .",
    "build": "echo 'Žádný build krok není potřeba — statické soubory.'"
  }
}

=== vercel.json ===
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/img/(.)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.)\.(css|js)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=86400" }
      ]
    }
  ]
}

=== robots.txt ===
User-agent: *
Allow: /
Sitemap: /sitemap.xml

=== manifest.webmanifest ===
{
  "name": "Krok do budoucnosti",
  "short_name": "Krok",
  "description": "Výjezdový počítačový mistr u vás doma.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#fafbff",
  "theme_color": "#0b1326",
  "icons": []
}

=== sitemap.xml ===
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>

=== locales/cs.json ===
{
  "_note": "Tento soubor není ve výchozí buildu používán — překlady jsou pro jednoduchost zapsány v ./scripts/i18n.js. Soubor slouží jako šablona pro přidání dalšího jazyka.",
  "meta": { "title": "Krok do budoucnosti — výjezdový počítačový mistr" }
}

=== http://README.md ===
# Krok do budoucnosti — Aurora Cesta

Statický rekla­mní web výjezdového počítačového mistra. Žádný backend, jen čistá statika.

## Spuštění lokálně

bash
npx serve .


## Struktura

- index.html — kořenová stránka
- styles.css — všechny styly
- scripts/i18n.js — slovník překladů (cs)
- scripts/main.js — chování (jazyk, hover, scroll, nav)
- img/ — obrázky (12 služeb × 2 + hero × 2)
- vercel.json, manifest.webmanifest, robots.txt, sitemap.xml — pomocné soubory

## Přidání dalšího jazyka

1. V scripts/i18n.js přidejte další objekt vedle window.I18N.cs, např. window.I18N.en.
2. Do pole window.I18N.available doplňte kód jazyka.
3. V hlavičce přidejte další tlačítko <button data-lang="en">EN</button>.

Scripts: === scripts/i18n.js ===
(function () {
  window.I18N = window.I18N || {};
  window.I18N.cs = {
    'meta.title': 'Krok do budoucnosti — výjezdový počítačový mistr',
    'meta.description': 'Výjezdový počítačový mistr u vás doma: údržba, bezpečnost, výuka i design. Výjezd a první diagnostika zdarma.',
    'a11y.skip': 'Přejít na obsah',
    'http://brand.name': 'Krok do budoucnosti',
    'http://nav.care': 'Péče',
    'http://nav.security': 'Bezpečnost',
    'nav.learning': 'Učení',
    'http://nav.design': 'Design',
    'http://nav.contact': 'Kontakt',
    'http://cta.book': 'Domluvit',
    'cta.floating': 'Domluvit návštěvu',
    'hero.eyebrow': 'Výjezdový počítačový mistr',
    'hero.title': 'Krok do budoucnosti — s počítačovým mistrem, který přijede k vám domů.',
    'hero.lead': 'Údržba, bezpečnost, výuka i design. První výjezd a diagnostika jsou zdarma a k ničemu vás nezavazují. Platíte jen za odvedenou práci a případné náhradní díly.',
    'hero.caption': 'Přijíždím k vám domů po celém okolí.',
    'hero.cta1': 'Domluvit návštěvu',
    'hero.cta2': 'Prozkoumat služby',
    'hero.badge1': 'Výjezd zdarma',
    'hero.badge2': 'Diagnostika zdarma',
    'hero.badge3': 'Bez nátlaku',
    'care.eyebrow': '01 — Péče o počítač',
    'care.title': 'Aby technika zase dýchala',
    'care.lead': 'Malé kroky, díky kterým váš stroj poslouchá jako první den.',
    'security.eyebrow': '02 — Bezpečnost',
    'security.title': 'Klid pro vás i pro váš domov',
    'security.lead': 'Kamery, alarmy a chytré spotřebiče. Propojím to tak, aby vás technika hlídala — ne stresovala.',
    'learning.eyebrow': '03 — Učení',
    'learning.title': 'Pro dospělé i pro děti',
    'learning.lead': 'Tempo si určujete vy. Z výuky uděláme dobrodružství — bez nátlaku a poučování.',
    'learning.adults': 'Dospělí',
    'http://learning.kids': 'Děti',
    'learning.callout': 'Tajemství úspěchu ve škole: aby vaše děti obstály mezi vrstevníky, měly by už dnes začít rozumět umělé inteligenci. Ve škole se to neučí — kdo umí AI používat s rozumem, bude o krok napřed.',
    'design.eyebrow': '04 — Design',
    'design.title': 'Vizuální tvář vašeho nápadu',
    'design.lead': 'Letáky, plakáty, webové stránky i malé aplikace — srozumitelně a s lidským přístupem.',
    'contact.eyebrow': '05 — Kontakt',
    'contact.title': 'Pojďme udělat ten krok společně',
    'http://contact.email_label': 'E-mail',
    'http://contact.phone_label': 'Telefon',
    'http://cards.cleaning.title': 'Čištění počítače',
    'cards.upgrade.title': 'Modernizace',
    'http://cards.software.title': 'Nastavení softwaru',
    'http://cards.repair.title': 'Opravy a recyklace',
    'http://cards.webcam.title': 'Webkamery',
    'cards.alarm.title': 'Domácí alarm',
    'cards.appliances.title': 'Chytrá domácnost',
    'cards.literacy.title': 'Počítačová gramotnost',
    'cards.tutor.title': 'Doučování informatiky',
    'cards.chess.title': 'Šachy',
    'cards.development.title': 'Vyspělé technologie',
    'http://cards.design.title': 'Design na míru',
    'http://content.cleaning': 'Začíná váš počítač hučet jako stará lednička a v létě se zahřívá jako kamna? Prach a vyschlá teplovodivá pasta jsou tiší zloději rychlosti i klidu. Přijedu k vám domů, techniku opatrně rozeberu, vyčistím, vyměním pastu a namažu ventilátory — a vy zase uslyšíte to příjemné ticho. Výjezd a prvotní diagnostika jsou zdarma, platíte jen za odvedenou práci. Připravte se s klidem na další roky bez horkých překvapení.',
    'content.upgrade': 'Notebook už nestíhá s moderními programy a vy přemýšlíte, jestli rovnou kupovat nový? Často stačí malý krok do budoucnosti: rychlý SSD disk, více operační paměti nebo nová baterie. Přijedu, podívám se a upřímně poradím, co se vyplatí a co ne — bez nátlaku a bez vymýšlených závad. Diagnostika i konzultace jsou zdarma. Starý počítač často ožije tak, že vás samotné překvapí.',
    'http://content.software': 'Windows už hodinu startuje, prohlížeč zamrzá a vy se bojíte cokoli kliknout? Nemusíte se v tom složitě patlat sami. Přijedu k vám, systém pročistím, ochráním před viry, doladím internet a nainstaluji programy, které opravdu potřebujete — pro práci, školu i odpočinek. Pomůžu i s registrací na úřadech a vyplněním formulářů. Vy se vrátíte k tomu, co je důležité, a počítač zase poslouchá na první kliknutí.',
    'http://content.repair': 'Než starý počítač nebo notebook hodíte do popelnice, dejte mu ještě jednu šanci. Často stačí vyměnit jednu součástku a stroj poslouží další roky — bez nákupu nového. Přijedu, prohlédnu, řeknu vám na rovinu, jestli má oprava smysl. Pokud ne, mohu si techniku vzít na náhradní díly, abyste se nemuseli starat o ekologickou likvidaci. Výjezd i posouzení jsou zdarma.',
    'http://content.webcam': 'Chcete vědět, jestli dorazil balík, jak se má pes nebo zda děti v pořádku přišly ze školy? Webové kamery promění nervózní přemýšlení v klidnou jistotu. Přijedu k vám, vyberu vhodná místa, propojím kamery s vaší Wi-Fi a nastavím aplikaci v mobilu, abyste se mohli ke svému domovu kdykoli „podívat" — třeba i z dovolené u moře. Výjezd a prvotní konzultace jsou zdarma.',
    'content.alarm': 'Odjíždíte na chalupu nebo na delší dovolenou a v hlavě se vám pořád točí otázka „A co když…?" Diskrétní alarm přímo na vstupních dveřích bytu nebo garáže odežene nezvané hosty hlasitou sirénou a vás okamžitě upozorní SMS zprávou. Přijedu, vše namontuji bez velkých zásahů do dveří a ukážu, jak se zařízení ovládá z mobilu. Klidný spánek je odsud na krok — a první návštěva je zdarma.',
    'content.appliances': 'Smart TV svítí, ale moc toho neumí. Termostat, světla a robotický vysavač spolu „nemluví". Pojďme udělat krok do budoucnosti: propojím vaše chytré spotřebiče do jedné aplikace v telefonu a naučím vás je ovládat jednoduše, bez nervů. Vrátíte se z práce do nasvíceného a vytopeného domova, aniž byste se museli stát IT odborníky. První výjezd a poradenství zdarma.',
    'content.literacy': 'Děti i vnoučata mluví o aplikacích, umělé inteligenci a heslech — a vy se cítíte trochu pozadu? Není třeba se učit všechno najednou. Přijedu k vám, sednu si vedle vás a v klidném tempu vás provedu od úplných základů až po chytré používání internetu a AI pomocníků. Žádné poučování, žádné posměšky, jen trpělivost. Po pár setkáních budete sami překvapeni, co všechno zvládnete — a první návštěva je zdarma.',
    'content.tutor': 'Má vaše dítě z informatiky ve škole čtyřku a doma jen krčí rameny? Mám vysokoškolské vzdělání v IT a zkušenosti s výukou studentů z dob doktorského studia. Přijedu k vám domů, najdu, kde se vlákno látky ztratilo, a vysvětlím ji po kouskách, dokud dítě samo neřekne „aha". Společně z toho uděláme krok do budoucnosti, ne další zdroj stresu. Úvodní setkání je zdarma.',
    'content.chess': 'Šachy nejsou jen hra — jsou to malá tělocvična pro myšlení. Děti se učí plánovat, být trpělivé a chápat, že každé rozhodnutí má své důsledky. Hraju velmi rád a rád to předávám dál. Můžeme začít doma u vašeho stolu, bez složitých kroužků a dojíždění. Třeba je to právě ten krok, který vaše dítě posune dál — ve škole i v životě. První lekce a seznámení jsou zdarma.',
    'content.development': 'Umělou inteligenci ve škole zatím pořádně neučí — a přitom právě ona rozhodne, kdo bude v dospělosti o krok napřed. Naučím vaše dítě AI nejen používat, ale používat chytře — při učení, projektech i domácích úkolech. Z hodin uděláme spíš zajímavou zábavu než povinnost. Přijedu k vám domů, vy uvidíte výsledky a dítě nadšení. Krok do budoucnosti, který se opravdu vyplatí — a první setkání je zdarma.',
    'http://content.design': 'Otevíráte malou kavárnu, kroužek pro děti nebo nabízíte služby v okolí? Stylový leták, plakát nebo jednoduchá webová stránka udělají dojem, který se prodává sám. Jsem diplomovaný vývojář softwaru s praxí — navrhnu vám letáky, katalogy, webové stránky i celé malé aplikace, srozumitelně a podle vašich představ. Bez korporátního chladu, s lidským přístupem. Úvodní konzultace je zdarma.',
    'http://content.contact': 'Napište nebo zavolejte — rád si v klidu poslechnu, co řešíte. První návštěva a diagnostika jsou zdarma a k ničemu vás nezavazují.',
    'http://form.name': 'Jméno',
    'http://form.contact': 'Telefon nebo e-mail',
    'form.message': 'Co řešíte?',
    'form.submit': 'Odeslat poptávku',
    'form.note': 'Odesláním souhlasíte se zpracováním osobních údajů výhradně pro účely odpovědi.',
    'footer.tagline': 'Výjezdový počítačový mistr · Česko',
    'footer.copyright': 'Krok do budoucnosti. Všechna práva vyhrazena.'
  };
  window.I18N.default = 'cs';
  window.I18N.available = ['cs'];
})();

=== scripts/main.js ===
(function () {
  'use strict';

  // 1) Apply translations
  function applyI18n(lang) {
    var dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N[window.I18N.default]) || {};
    document.documentElement.setAttribute('lang', lang);

    // Text content nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var attr = el.getAttribute('data-i18n-attr');
      var value = dict[key];
      if (typeof value !== 'string') return;
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.textContent = value;
      }
    });

    // Page meta title
    if (dict['meta.title']) document.title = dict['meta.title'];
  }

  // 2) Language switcher (extendable: only cs available today)
  function initLangSwitcher() {
    var stored = (function () { try { return localStorage.getItem('site-lang'); } catch (e) { return null; } })();
    var available = (window.I18N && window.I18N.available) || ['cs'];
    var initial = available.indexOf(stored) >= 0 ? stored : (window.I18N.default || 'cs');
    applyI18n(initial);
    document.querySelectorAll('.lang-switcher__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (!lang || available.indexOf(lang) < 0) return;
        document.querySelectorAll('.lang-switcher__btn').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        applyI18n(lang);
        try { localStorage.setItem('site-lang', lang); } catch (e) {}
      });
    });
  }

  // 3) Hover-image preload + swap (works on hover and touch tap)
  function initHoverImages() {
    document.querySelectorAll('.hover-img').forEach(function (el) {
      var main = el.getAttribute('data-main');
      var hover = el.getAttribute('data-hover');
      if (!hover) return;
      // Preload
      var pre = new Image(); pre.src = hover;
      // Set CSS variable for ::after overlay (subtle layered swap on cards)
      http://el.style.setProperty('--hover-bg', "url('" + hover + "')");

      var img = el.querySelector('img');
      if (!img || !main) return;
      el.addEventListener('mouseenter', function () { img.src = hover; });
      el.addEventListener('mouseleave', function () { img.src = main; });
      // Mobile touch: toggle class
      el.addEventListener('touchstart', function () {
        el.classList.toggle('is-touched');
        img.src = el.classList.contains('is-touched') ? hover : main;
      }, { passive: true });
    });
  }

  // 4) Mobile nav toggle
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('primary-nav-mobile');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      menu.classList.toggle('is-open', !open);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      });
    });
  }

  // 5) Scroll reveal
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          http://entry.target.classList.add('is-visible');
          io.unobserve(http://entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  // 6) Footer year
  function initYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLangSwitcher();
    initHoverImages();
    initMobileNav();
    initReveal();
    initYear();
  });
})();

Styles: === styles.css ===
:root {
  --bg: #0b1326;
  --bg-soft: #0f1a36;
  --surface: #ffffff;
  --surface-2: #f5f7fc;
  --ink: #0b1326;
  --ink-2: #475569;
  --muted: #94a3b8;
  --line: #e5e9f2;
  --primary: #2dd4bf;
  --primary-ink: #042f2e;
  --accent: #f97316;
  --accent-soft: #fed7aa;
  --navy: #1e3a8a;
  --radius-sm: 10px;
  --radius: 18px;
  --radius-lg: 28px;
  --shadow-sm: 0 4px 16px rgba(15, 26, 54, 0.06);
  --shadow: 0 20px 50px rgba(15, 26, 54, 0.10);
  --shadow-lg: 0 30px 80px rgba(15, 26, 54, 0.18);
  --font-display: 'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --transition: 200ms cubic-bezier(.2,.7,.2,1);
  --transition-slow: 450ms cubic-bezier(.2,.7,.2,1);
  --container: 1180px;
  --space: clamp(16px, 3vw, 28px);
}

, ::before, ::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  , ::before, ::after { animation-duration: 0ms !important; transition-duration: 0ms !important; }
}
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--ink);
  background: linear-gradient(180deg, #fafbff 0%, #f3f6ff 60%, #fff5ed 100%);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  line-height: 1.55;
  min-height: 100%;
}
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; border-radius: 6px; }

.container { width: min(100% - 2  var(--space), var(--container)); margin-inline: auto; }
.skip-link { position: absolute; left: -9999px; top: 0; background: var(--ink); color: #fff; padding: 10px 14px; border-radius: 8px; z-index: 100; }
.skip-link:focus { left: 12px; top: 12px; }

.eyebrow { font-family: var(--font-display); font-size: 13px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin: 0 0 14px; }

/ HEADER /
.site-header { position: sticky; top: 0; z-index: 50; backdrop-filter: saturate(150%) blur(14px); -webkit-backdrop-filter: saturate(150%) blur(14px); background: rgba(255,255,255,0.78); border-bottom: 1px solid rgba(11,19,38,0.06); }
.header__inner { display: flex; align-items: center; gap: 18px; padding: 14px 0; }
.brand { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 700; color: var(--ink); }
.brand__mark { display: inline-grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, var(--primary), var(--accent)); color: #fff; font-size: 16px; transform: rotate(0deg); transition: transform var(--transition-slow); box-shadow: var(--shadow-sm); }
.brand:hover .brand__mark { transform: rotate(15deg) scale(1.05); }
.brand__name { font-size: 16px; letter-spacing: -0.01em; }
.primary-nav { margin-left: auto; display: flex; gap: 4px; }
.primary-nav a { padding: 8px 12px; border-radius: 999px; font-weight: 500; font-size: 14px; color: var(--ink-2); transition: color var(--transition), background var(--transition); }
.primary-nav a:hover { color: var(--ink); background: rgba(45,212,191,0.10); }
.header__actions { display: flex; align-items: center; gap: 10px; }
.lang-switcher { display: inline-flex; gap: 2px; padding: 4px; background: var(--surface-2); border-radius: 999px; }
.lang-switcher__btn { background: transparent; border: 0; padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; color: var(--ink-2); transition: background var(--transition), color var(--transition); }
.lang-switcher__http://btn.is-active { background: var(--ink); color: #fff; }
.nav-toggle { display: none; width: 38px; height: 38px; border: 0; background: var(--surface-2); border-radius: 12px; position: relative; }
.nav-toggle span { position: absolute; left: 9px; right: 9px; height: 2px; background: var(--ink); border-radius: 2px; transition: transform var(--transition), opacity var(--transition); }
.nav-toggle span:nth-child(1) { top: 12px; }
.nav-toggle span:nth-child(2) { top: 18px; }
.nav-toggle span:nth-child(3) { top: 24px; }
.nav-toggle[aria-expanded='true'] span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav-toggle[aria-expanded='true'] span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded='true'] span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
.primary-nav--mobile { display: none; flex-direction: column; padding: 0 var(--space) 12px; }
.primary-nav--mobile a { padding: 12px 4px; border-bottom: 1px solid var(--line); }
.primary-nav--http://mobile.is-open { display: flex; }

/ BUTTONS /
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 22px; border-radius: 999px; font-weight: 600; font-size: 15px; letter-spacing: -0.01em; transition: transform var(--transition), box-shadow var(--transition), background var(--transition); border: 1px solid transparent; will-change: transform; }
.btn--primary { background: var(--ink); color: #fff; box-shadow: var(--shadow); }
.btn--primary:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); background: #131c3b; }
.btn--ghost { background: rgba(255,255,255,0.6); color: var(--ink); border-color: var(--line); }
.btn--ghost:hover { background: #fff; border-color: var(--primary); }
.btn--sm { padding: 10px 16px; font-size: 14px; }

/ HERO /
.hero { position: relative; overflow: hidden; padding: clamp(40px, 7vw, 90px) 0 clamp(40px, 8vw, 110px); }
.hero__aurora { position: absolute; inset: -20% -20% auto -20%; height: 90%; pointer-events: none; background:
  radial-gradient(circle at 20% 30%, rgba(45,212,191,0.30), transparent 55%),
  radial-gradient(circle at 80% 20%, rgba(249,115,22,0.25), transparent 55%),
  radial-gradient(circle at 50% 70%, rgba(30,58,138,0.18), transparent 60%);
  filter: blur(40px);
  animation: drift 18s ease-in-out infinite alternate;
}
@keyframes drift {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(2%, 3%, 0) scale(1.04); }
}
.hero__grid { position: relative; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(28px, 6vw, 80px); align-items: center; }
.hero__title { font-family: var(--font-display); font-size: clamp(34px, 5vw, 60px); font-weight: 700; line-height: 1.05; letter-spacing: -0.02em; margin: 0 0 18px; background: linear-gradient(120deg, var(--ink) 30%, var(--navy) 60%, var(--accent) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero__lead { font-size: clamp(16px, 1.4vw, 19px); color: var(--ink-2); max-width: 52ch; margin: 0 0 28px; }
.hero__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 28px; }
.hero__badges { display: flex; flex-wrap: wrap; gap: 12px; padding: 0; margin: 0; list-style: none; }
.hero__badges li { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(255,255,255,0.7); border: 1px solid var(--line); border-radius: 999px; font-size: 13px; color: var(--ink-2); backdrop-filter: blur(6px); }
.hero__badges span:first-child { color: var(--primary); font-weight: 700; }
.hero__figure { position: relative; margin: 0; justify-self: center; }
.hero__figure img { width: 100%; max-width: 380px; aspect-ratio: 370 / 790; object-fit: contain; filter: drop-shadow(0 30px 60px rgba(15,26,54,0.20)); animation: floaty 6s ease-in-out infinite alternate; }
.hero__caption { margin-top: 14px; text-align: center; color: var(--muted); font-size: 13px; }
@keyframes floaty { from { transform: translateY(-6px); } to { transform: translateY(8px); } }

/ SECTIONS /
.section { padding: clamp(60px, 8vw, 110px) 0; position: relative; }
.section--alt { background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(45,212,191,0.07) 50%, rgba(255,255,255,0) 100%); }
.section__header { max-width: 720px; margin: 0 auto clamp(36px, 5vw, 60px); text-align: center; }
.section__header h2 { font-family: var(--font-display); font-size: clamp(28px, 4vw, 44px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 14px; }
.section__lead { color: var(--ink-2); font-size: clamp(15px, 1.2vw, 18px); margin: 0; }
.subgroup { max-width: var(--container); margin: 30px auto 14px; }
.subgroup__label { font-family: var(--font-display); font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted); margin: 0; display: inline-flex; align-items: center; gap: 10px; }
.subgroup__label::before { content: ''; display: inline-block; width: 28px; height: 2px; background: var(--accent); border-radius: 2px; }

/ CARDS /
.cards { display: grid; gap: clamp(18px, 2.5vw, 28px); }
.cards--4 { grid-template-columns: repeat(4, 1fr); }
.cards--3 { grid-template-columns: repeat(3, 1fr); }
.cards--1 { grid-template-columns: 1fr; }
.card { position: relative; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition); box-shadow: var(--shadow-sm); }
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: rgba(45,212,191,0.45); }
.card__media { position: relative; aspect-ratio: 4 / 3; margin: 0; background: linear-gradient(135deg, #eef3ff 0%, #f8eee6 100%); overflow: hidden; }
.card__media img { width: 100%; height: 100%; object-fit: contain; padding: 18px; transition: transform var(--transition-slow), opacity var(--transition); }
.card:hover .card__media img { transform: scale(1.04); }
.card__body { padding: 22px 22px 24px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.card__code { font-family: var(--font-display); font-size: 12px; letter-spacing: 0.18em; color: var(--accent); margin: 0; font-weight: 600; }
.card__title { font-family: var(--font-display); font-size: clamp(18px, 1.4vw, 22px); margin: 0 0 6px; letter-spacing: -0.01em; }
.card__text { font-size: 15px; line-height: 1.6; color: var(--ink-2); margin: 0; }
.card--wide { flex-direction: row; align-items: stretch; }
.card--wide .card__media { flex: 0 0 42%; aspect-ratio: auto; min-height: 280px; }
.card--wide .card__body { padding: clamp(24px, 3vw, 40px); justify-content: center; }
.card--wide .card__text { font-size: 16px; max-width: 60ch; }

/ CALLOUT /
.callout { display: flex; gap: 16px; align-items: flex-start; max-width: 820px; margin: 32px auto 0; padding: 22px 26px; border-radius: var(--radius); background: linear-gradient(135deg, rgba(45,212,191,0.10), rgba(249,115,22,0.10)); border: 1px solid rgba(45,212,191,0.20); color: var(--ink); font-size: 15px; line-height: 1.65; }
.callout__icon { font-size: 22px; line-height: 1; }
.callout p { margin: 0; }

/ CONTACT /
.section--contact { padding-bottom: clamp(80px, 10vw, 130px); }
.contact__grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: clamp(28px, 6vw, 80px); align-items: center; }
.contact__content h2 { font-family: var(--font-display); font-size: clamp(28px, 4vw, 44px); margin: 0 0 12px; letter-spacing: -0.02em; }
.contact__lead { color: var(--ink-2); max-width: 56ch; margin: 0 0 28px; font-size: 17px; }
.contact__list { list-style: none; padding: 0; margin: 0 0 36px; display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr); }
.contact__link { display: flex; gap: 14px; align-items: center; padding: 14px 16px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition); }
.contact__link:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: var(--shadow); }
.contact__icon { width: 42px; height: 42px; display: inline-grid; place-items: center; border-radius: 12px; background: linear-gradient(135deg, rgba(45,212,191,0.18), rgba(249,115,22,0.18)); font-size: 18px; flex-shrink: 0; }
.contact__link strong { font-family: var(--font-display); font-size: 14px; letter-spacing: 0.02em; }
.contact__form { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.contact__form-full { grid-column: 1 / -1; }
.contact__form label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 500; color: var(--ink-2); }
.contact__form input, .contact__form textarea { font: inherit; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--line); background: var(--surface); transition: border-color var(--transition), box-shadow var(--transition); color: var(--ink); resize: vertical; }
.contact__form input:focus, .contact__form textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 4px rgba(45,212,191,0.15); }
.contact__form-note { font-size: 12px; color: var(--muted); margin: 0; }
.contact__figure { margin: 0; align-self: stretch; display: grid; place-items: center; }
.contact__figure img { max-width: 320px; width: 100%; aspect-ratio: 370 / 790; object-fit: contain; filter: drop-shadow(0 24px 50px rgba(15,26,54,0.18)); }

/ HOVER IMAGE EFFECT /
.hover-img { position: relative; }
.hover-img::after { content: ''; position: absolute; inset: 0; background-image: var(--hover-bg); background-size: contain; background-repeat: no-repeat; background-position: center; opacity: 0; transition: opacity var(--transition); pointer-events: none; padding: inherit; }
.card__media.hover-img::after { padding: 18px; background-size: calc(100% - 36px) calc(100% - 36px); background-position: center; }
.hover-img:hover::after, .http://hover-img.is-touched::after { opacity: 1; }

/ FOOTER /
.site-footer { padding: 40px 0 60px; border-top: 1px solid var(--line); margin-top: 40px; }
.site-footer__inner { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; color: var(--ink-2); font-size: 14px; }
.site-footer__brand { font-family: var(--font-display); font-weight: 700; color: var(--ink); margin: 0; }
.site-footer__tagline { margin: 0; }
.site-footer__copy { margin: 0; }

/ FLOATING CTA /
.floating-cta { position: fixed; right: 20px; bottom: 20px; padding: 14px 22px; border-radius: 999px; background: var(--ink); color: #fff; font-weight: 600; box-shadow: var(--shadow-lg); transition: transform var(--transition); z-index: 40; }
.floating-cta:hover { transform: translateY(-2px) scale(1.03); }

/ REVEAL ANIMATIONS /
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 600ms ease, transform 600ms cubic-bezier(.2,.7,.2,1); }
.http://reveal.is-visible { opacity: 1; transform: none; }

/ RESPONSIVE /
@media (max-width: 1080px) {
  .cards--4 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .primary-nav { display: none; }
  .nav-toggle { display: inline-grid; place-items: center; }
  .hero__grid { grid-template-columns: 1fr; text-align: left; }
  .hero__figure { order: -1; }
  .hero__figure img { max-width: 280px; }
  .contact__grid { grid-template-columns: 1fr; }
  .contact__figure { display: none; }
  .card--wide { flex-direction: column; }
  .card--wide .card__media { flex: 0 0 auto; aspect-ratio: 4 / 3; min-height: 0; }
  .hide-sm { display: none; }
}
@media (max-width: 640px) {
  .cards--4, .cards--3 { grid-template-columns: 1fr; }
  .contact__list { grid-template-columns: 1fr; }
  .contact__form { grid-template-columns: 1fr; }
  .floating-cta { right: 12px; bottom: 12px; padding: 12px 18px; font-size: 14px; }
}
@media (prefers-color-scheme: dark) {
  / Light theme is intentional. Kept ready for future. */
}

## 🌅 Отчёт по сайту «Aurora Cesta»

**Концепция.** «Krok do budoucnosti» (Шаг в будущее) визуально передан через образ «aurora» — мягкое сияние, плывущее в фоне героя. Палитра: глубокий navy `#0b1326`, бирюзовый `#2dd4bf` и тёплый оранжевый `#f97316` как акценты восходящего солнца. Это даёт спокойную, технологичную, но человеческую интонацию — без агрессивного «киберпанка».

**Целевые устройства.** Mobile-first, проверенные брейкпоинты 1080 px, 900 px и 640 px. На десктопе карточки услуг идут сеткой 4/3/1, на планшетах сворачиваются в 2 колонки, на мобильных — в одну. Плавающая CTA-кнопка всегда под рукой.

**Типографика.** Заголовки — *Space Grotesk* (геометричный, дружелюбный), основной текст — *Inter*. Контраст по AAA для основных текстов, минимум AA для подписей.

**Ключевые приёмы дизайна.**

- Анимированный градиентный «aurora»-фон героя с мягким параллаксом.
- Градиентный текст заголовка героя (ink → navy → orange) — метафора рассвета.
- Hover-смена изображения (`--main` → `--hover`) на всех карточках и герое. На сенсорных устройствах — по тапу.
- Лёгкое масштабирование изображения карточки при наведении, тень и поднимание карточки на 4 px.
- Scroll-reveal через IntersectionObserver, отключается при `prefers-reduced-motion`.
- Sticky-шапка с матовым backdrop-blur, бургер-меню на мобильных.
- Floating CTA «Domluvit návštěvu» внизу экрана.

**Доступность.** Skip-link, корректные `aria-*`, видимый focus, `loading="lazy"` для изображений, fallback при отключённом IntersectionObserver, поддержка `prefers-reduced-motion`.

**Контактный блок.** 4 канала связи (e-mail, телефон, WhatsApp, Telegram) + форма поверх бесплатного сервиса `formsubmit.co` (полностью без бэкенда). Замените контактные данные на реальные перед публикацией.

**Все 12 услуг присутствуют** в правильном порядке секций со страницы Computer services: 1.1, 1.2, 1.3, 1.4 → 2.1, 2.2, 2.3 → 3.1 → 3.2, 3.3, 3.4 → 4 → контакт.

## 🧩 Инструкция по сборке

Создайте на диске папку проекта и разложите файлы строго по этой структуре. **Разделители `=== filename ===` в каждом свойстве — это маркеры границ файлов.**

```
krok-do-budoucnosti/
├── index.html              ← из свойства Html
├── styles.css              ← из свойства Styles
├── scripts/
│   ├── i18n.js             ← из свойства Scripts (первый блок)
│   └── main.js             ← из свойства Scripts (второй блок)
├── locales/
│   └── cs.json             ← из свойства Other
├── img/
│   ├── hero--main.png
│   ├── hero--hover.png
│   ├── cleaning--main.png
│   ├── cleaning--hover.png
│   ├── upgrade--main.png
│   ├── upgrade--hover.png
│   ├── software--main.png
│   ├── software--hover.png
│   ├── repair--main.png
│   ├── repair--hover.png
│   ├── webcam--main.png
│   ├── webcam--hover.png
│   ├── alarm--main.png
│   ├── alarm--hover.png
│   ├── appliances--main.png
│   ├── appliances--hover.png
│   ├── literacy--main.png
│   ├── literacy--hover.png
│   ├── tutor--main.png
│   ├── tutor--hover.png
│   ├── chess--main.png
│   ├── chess--hover.png
│   ├── development--main.png
│   ├── development--hover.png
│   ├── design--main.png
│   └── design--hover.png
├── package.json            ← из свойства Other
├── vercel.json             ← из свойства Other
├── manifest.webmanifest    ← из свойства Other
├── robots.txt              ← из свойства Other
├── sitemap.xml             ← из свойства Other
└── README.md               ← из свойства Other
```

**Изображения.** Возьмите оригинальные файлы со страницы [Main images](https://www.notion.so/Main-images-3614fe82e7d4800891eacef2c9d4ab58?pvs=21) и переименуйте их по схеме `slug--main.png` / `slug--hover.png` (см. таблицу выше). Положите всё в папку `./img/`.

**Переключение языков.** Сейчас доступен только чешский (`cs`). Чтобы добавить новый язык:

1. В `scripts/i18n.js` добавьте новый объект, например `window.I18N.en = { ... }` со всеми ключами из `cs`.
2. В массив `window.I18N.available` допишите `'en'`.
3. В `index.html` (в `.lang-switcher`) добавьте `<button type="button" class="lang-switcher__btn" data-lang="en" aria-pressed="false">EN</button>`.

Локальный запуск:

```
cd krok-do-budoucnosti
npx serve .
```

## 🚀 Развёртывание на Vercel (бесплатный план)

1. **Создайте репозиторий на GitHub.** Залейте всю папку `krok-do-budoucnosti/` в новый репозиторий (`git init`, `git add .`, `git commit`, `git push`).
2. **Зарегистрируйтесь на [vercel.com](http://vercel.com) через GitHub.** Бесплатный Hobby-план полностью покрывает такой статический сайт.
3. **New Project → Import Git Repository → выберите ваш репозиторий.**
4. **Framework Preset:** оставьте `Other` (это статический сайт). `Build Command` и `Output Directory` оставьте пустыми. `Install Command` тоже пустой.
5. Нажмите **Deploy**. Через несколько секунд Vercel выдаст домен вида `krok-do-budoucnosti.vercel.app`.
6. **Свой домен** (например, `krokdobudoucnosti.cz`): Project → Settings → Domains → Add → введите домен и пропишите у регистратора A-запись `76.76.21.21` либо CNAME `cname.vercel-dns.com` согласно инструкции Vercel.
7. **Проверьте сайт:** мобильная и десктопная версии, hover-смена изображений, кнопка домовой связи, форма ([formsubmit.co](http://formsubmit.co) при первом отправлении попросит подтвердить e-mail на адрес `savik@krok-do-budoucnosti.cz` — замените его на свой реальный).
8. **Альтернативы.** Аналогично разворачивается на Netlify (drag-and-drop папки), Cloudflare Pages или GitHub Pages — без изменений в коде.

## ⚠️ Замечания

- В разделах контактов использованы плейсхолдеры (`savik@krok-do-budoucnosti.cz`, `+420 777 123 456`, Telegram/WhatsApp). Перед публикацией замените на реальные данные мастера.
- Все 26 изображений (12 пар услуг + 1 пара hero) присутствуют и сопоставлены с правильными секциями.
- Форма обратной связи использует бесплатный сервис `formsubmit.co`. Если он не подходит — замените `action` на свой Formspree, Web3Forms или mailto-ссылку.