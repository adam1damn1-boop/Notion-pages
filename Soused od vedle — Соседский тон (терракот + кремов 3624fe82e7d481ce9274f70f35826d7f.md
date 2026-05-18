# Soused od vedle — Соседский тон (терракот + кремовый)

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs" data-lang="cs">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#C8553D" />
  <title data-i18n="meta.title">Soused od vedle — počítačový pomocník u vás doma</title>
  <meta name="description" data-i18n-attr="content" data-i18n="meta.desc" content="Počítačový soused, který přijede až k vám domů. Výjezd a první diagnostika zdarma." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Inter:wght@400;500;600&display=swap" />
  <link rel="stylesheet" href="./styles.css" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='54' font-size='52'%3E🏘️%3C/text%3E%3C/svg%3E" />
  <link rel="manifest" href="./manifest.webmanifest" />
</head>
<body>
  <a class="skip-link" href="#main" data-i18n="a11y.skip">Přeskočit na obsah</a>

  <header class="site-header" id="top">
    <div class="container header-row">
      <a class="brand" href="#top" aria-label="Soused od vedle">
        🏘️
        
          <strong data-i18n="http://brand.name">Soused od vedle</strong>
          <small data-i18n="brand.tag">počítače · bezpečnost · učení</small>
        
      </a>
      <nav class="site-nav" aria-label="Hlavní menu">
        <ul>
          <li><a href="#care" data-i18n="http://nav.care">Péče</a></li>
          <li><a href="#security" data-i18n="http://nav.security">Bezpečnost</a></li>
          <li><a href="#learning" data-i18n="nav.learning">Učení</a></li>
          <li><a href="#design" data-i18n="http://nav.design">Design</a></li>
          <li><a class="nav-cta" href="#contact" data-i18n="http://nav.contact">Kontakt</a></li>
        </ul>
      </nav>
      <div class="header-tools">
        <label class="lang-switch" for="lang-select">
          Jazyk
          <select id="lang-select" aria-label="Jazyk"></select>
        </label>
        <button class="menu-toggle" aria-label="Menu" aria-expanded="false"></button>
      </div>
    </div>
  </header>

  <main id="main">
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="kicker" data-i18n="hero.kicker">Vítejte ve dveřích</p>
          <h1 data-i18n="hero.title">Soused od vedle, který rozumí počítačům</h1>
          <p class="lead" data-i18n="sec.main"></p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#contact" data-i18n="http://cta.call">Zavolat sousedovi</a>
            <a class="btn btn-ghost" href="#care" data-i18n="http://cta.services">Prohlédnout služby</a>
          </div>
          <ul class="badges">
            <li data-i18n="hero.badge1">Výjezd zdarma</li>
            <li data-i18n="hero.badge2">Diagnostika zdarma</li>
            <li data-i18n="hero.badge3">Bez předplatného</li>
          </ul>
        </div>
        <figure class="hero-art">
          <img class="img-main" src="./img/hero--main.png" alt="Soused od vedle" width="370" height="790" />
          <img class="img-hover" src="./img/hero--hover.png" alt="" aria-hidden="true" loading="lazy" width="370" height="790" />
          <figcaption class="hero-stamp" data-i18n="hero.stamp">U vás doma</figcaption>
        </figure>
      </div>
      <a class="scroll-down" href="#care" aria-hidden="true">↓</a>
    </section>

    <section class="services section-care" id="care">
      <div class="container">
        <header class="section-head">
          01
          <h2 data-i18n="sec1.title">Péče o počítač</h2>
          <p class="section-intro" data-i18n="sec1.intro">Pravidelná údržba, modernizace, software i druhý život pro starý stroj.</p>
        </header>
        <div class="cards cards-4">
          <article class="card" id="cleaning">
            <div class="card-art"><img class="img-main" src="./img/cleaning--main.png" alt="cleaning" loading="lazy" width="310" height="310" /><img class="img-hover" src="./img/cleaning--hover.png" alt="" aria-hidden="true" loading="lazy" width="310" height="310" /></div>
            <h3 data-i18n="http://srv.cleaning.title">Čištění a chlazení</h3>
            <p data-i18n="http://sec.cleaning"></p>
            Výjezd zdarma
          </article>
          <article class="card" id="upgrade">
            <div class="card-art"><img class="img-main" src="./img/upgrade--main.png" alt="upgrade" loading="lazy" width="320" height="340" /><img class="img-hover" src="./img/upgrade--hover.png" alt="" aria-hidden="true" loading="lazy" width="320" height="340" /></div>
            <h3 data-i18n="srv.upgrade.title">Modernizace</h3>
            <p data-i18n="sec.upgrade"></p>
            Výjezd zdarma
          </article>
          <article class="card" id="software">
            <div class="card-art"><img class="img-main" src="./img/software--main.png" alt="software" loading="lazy" width="350" height="300" /><img class="img-hover" src="./img/software--hover.png" alt="" aria-hidden="true" loading="lazy" width="350" height="300" /></div>
            <h3 data-i18n="http://srv.software.title">Software a Windows</h3>
            <p data-i18n="http://sec.software"></p>
            Výjezd zdarma
          </article>
          <article class="card" id="repair">
            <div class="card-art"><img class="img-main" src="./img/repair--main.png" alt="repair" loading="lazy" width="300" height="286" /><img class="img-hover" src="./img/repair--hover.png" alt="" aria-hidden="true" loading="lazy" width="300" height="286" /></div>
            <h3 data-i18n="http://srv.repair.title">Oprava a likvidace</h3>
            <p data-i18n="http://sec.repair"></p>
            Výjezd zdarma
          </article>
        </div>
      </div>
    </section>

    <section class="services section-security" id="security">
      <div class="container">
        <header class="section-head">
          02
          <h2 data-i18n="sec2.title">Bezpečnost domova</h2>
          <p class="section-intro" data-i18n="sec2.intro">Klidný spánek, ať jste doma, na chalupě nebo na dovolené.</p>
        </header>
        <div class="cards cards-3">
          <article class="card" id="webcam">
            <div class="card-art"><img class="img-main" src="./img/webcam--main.png" alt="webcam" loading="lazy" width="220" height="290" /><img class="img-hover" src="./img/webcam--hover.png" alt="" aria-hidden="true" loading="lazy" width="220" height="290" /></div>
            <h3 data-i18n="http://srv.webcam.title">Web-kamery</h3>
            <p data-i18n="http://sec.webcam"></p>
            Výjezd zdarma
          </article>
          <article class="card" id="alarm">
            <div class="card-art"><img class="img-main" src="./img/alarm--main.png" alt="alarm" loading="lazy" width="360" height="280" /><img class="img-hover" src="./img/alarm--hover.png" alt="" aria-hidden="true" loading="lazy" width="360" height="280" /></div>
            <h3 data-i18n="srv.alarm.title">Domácí alarm</h3>
            <p data-i18n="sec.alarm"></p>
            Výjezd zdarma
          </article>
          <article class="card" id="appliances">
            <div class="card-art"><img class="img-main" src="./img/appliances--main.png" alt="appliances" loading="lazy" width="290" height="290" /><img class="img-hover" src="./img/appliances--hover.png" alt="" aria-hidden="true" loading="lazy" width="290" height="290" /></div>
            <h3 data-i18n="srv.appliances.title">Chytrá domácnost</h3>
            <p data-i18n="sec.appliances"></p>
            Výjezd zdarma
          </article>
        </div>
      </div>
    </section>

    <section class="hero-strip">
      <div class="container">
        <p class="strip-quote" data-i18n="strip.quote">„Žádný tlak, žádné předplatné — prostě soused, který rozumí počítačům.“</p>
      </div>
    </section>

    <section class="services section-learning" id="learning">
      <div class="container">
        <header class="section-head">
          03
          <h2 data-i18n="sec3.title">Učení pro celou rodinu</h2>
          <p class="section-intro" data-i18n="sec3.intro">Pro dospělé i pro děti — od základů po umělou inteligenci.</p>
        </header>
        <h3 class="subgroup" data-i18n="sec3.adults">Pro dospělé</h3>
        <div class="cards cards-1">
          <article class="card card-wide" id="literacy">
            <div class="card-art"><img class="img-main" src="./img/literacy--main.png" alt="literacy" loading="lazy" width="320" height="290" /><img class="img-hover" src="./img/literacy--hover.png" alt="" aria-hidden="true" loading="lazy" width="320" height="290" /></div>
            <div class="card-body">
              <h3 data-i18n="srv.literacy.title">Počítačová gramotnost</h3>
              <p data-i18n="sec.literacy"></p>
              Návštěva zdarma
            </div>
          </article>
        </div>
        <h3 class="subgroup" data-i18n="http://sec3.kids">Pro děti</h3>
        <div class="cards cards-3">
          <article class="card" id="tutor">
            <div class="card-art"><img class="img-main" src="./img/tutor--main.png" alt="tutor" loading="lazy" width="370" height="310" /><img class="img-hover" src="./img/tutor--hover.png" alt="" aria-hidden="true" loading="lazy" width="370" height="310" /></div>
            <h3 data-i18n="srv.tutor.title">Doučování informatiky</h3>
            <p data-i18n="sec.tutor"></p>
            Návštěva zdarma
          </article>
          <article class="card" id="chess">
            <div class="card-art"><img class="img-main" src="./img/chess--main.png" alt="chess" loading="lazy" width="330" height="320" /><img class="img-hover" src="./img/chess--hover.png" alt="" aria-hidden="true" loading="lazy" width="330" height="320" /></div>
            <h3 data-i18n="srv.chess.title">Šachy pro děti</h3>
            <p data-i18n="sec.chess"></p>
            První lekce zdarma
          </article>
          <article class="card" id="development">
            <div class="card-art"><img class="img-main" src="./img/development--main.png" alt="development" loading="lazy" width="320" height="320" /><img class="img-hover" src="./img/development--hover.png" alt="" aria-hidden="true" loading="lazy" width="320" height="320" /></div>
            <h3 data-i18n="srv.development.title">Vysoké technologie a AI</h3>
            <p data-i18n="sec.development"></p>
            Konzultace zdarma
          </article>
        </div>
      </div>
    </section>

    <section class="services section-design" id="design">
      <div class="container">
        <header class="section-head">
          04
          <h2 data-i18n="sec4.title">Design pro lidi i firmy</h2>
        </header>
        <div class="cards cards-1">
          <article class="card card-wide" id="design-card">
            <div class="card-art"><img class="img-main" src="./img/design--main.png" alt="design" loading="lazy" width="310" height="310" /><img class="img-hover" src="./img/design--hover.png" alt="" aria-hidden="true" loading="lazy" width="310" height="310" /></div>
            <div class="card-body">
              <h3 data-i18n="http://srv.design.title">Letáky, weby, katalogy</h3>
              <p data-i18n="http://sec.design"></p>
              Konzultace u kávy zdarma
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="container contact-grid">
        <div>
          <p class="kicker" data-i18n="contact.kicker">Ozvěte se</p>
          <h2 data-i18n="contact.title">Domluvíme se přes plot</h2>
          <p class="lead" data-i18n="http://sec.contact"></p>
        </div>
        <ul class="contact-list">
          <li><a href="mailto:soused@pocitacovysoused.cz">✉️<strong>E-mail</strong><small>soused@pocitacovysoused.cz</small></a></li>
          <li><a href="tel:+420777123456">📞<strong data-i18n="http://contact.phone">Telefon</strong><small>+420 777 123 456</small></a></li>
          <li><a href="https://wa.me/420777123456" target="_blank" rel="noopener">💬<strong>WhatsApp</strong><small>+420 777 123 456</small></a></li>
          <li><a href="https://t.me/pocitacovysoused" target="_blank" rel="noopener">✈️<strong>Telegram</strong><small>@pocitacovysoused</small></a></li>
        </ul>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-row">
      <p>©  Soused od vedle · vyrobeno s láskou pro sousedy</p>
      <p class="muted" data-i18n="footer.note">Výjezd zdarma v Praze a okolí. Mimo region po dohodě.</p>
    </div>
  </footer>

  <script src="./i18n.js"></script>
  <script src="./main.js"></script>
</body>
</html>
Other: === package.json ===
{
  "name": "soused-od-vedle",
  "version": "1.0.0",
  "private": true,
  "description": "Statický web pro výjezdního počítačového mistra. Koncept: Соседский тон.",
  "scripts": {
    "start": "npx serve .",
    "build": "echo 'Žádný build krok — pouze statické soubory.'"
  }
}

=== vercel.json ===
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.)\.(png|jpg|jpeg|webp|svg|ico|woff2)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.)\.(html|js|css|webmanifest)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=3600, must-revalidate" }
      ]
    }
  ]
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

=== manifest.webmanifest ===
{
  "name": "Soused od vedle",
  "short_name": "Soused",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#faf4e8",
  "theme_color": "#c8553d",
  "icons": [
    { "src": "./img/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "./img/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}

=== http://README.md ===
# Soused od vedle

Statický web (HTML/CSS/JS) bez build kroku. Texty v aktivním jazyce CS;
struktura window.TRANSLATIONS ve i18n.js je připravená pro další jazyky.

## Struktura


.
├── index.html
├── styles.css
├── i18n.js
├── main.js
├── manifest.webmanifest
├── robots.txt
├── sitemap.xml
├── vercel.json
├── package.json
└── img/
    ├── hero--main.png
    ├── hero--hover.png
    ├── cleaning--main.png
    ├── cleaning--hover.png
    └── ...


Obrázky uložte do složky ./img/ přesně pod názvy slug--main.png
a slug--hover.png (viz Notion stránku „Main images").

Scripts: === i18n.js ===
/ Slovník jazykových mutací. Český jazyk je výchozí.
   Další jazyky doplňte přidáním klíče do TRANSLATIONS, např. en: { ... }. /
window.TRANSLATIONS = {
  cs: {
    "meta.title": "Soused od vedle — počítačový pomocník u vás doma",
    "meta.desc": "Počítačový soused, který přijede až k vám domů. Výjezd a první diagnostika zdarma.",
    "a11y.skip": "Přeskočit na obsah",
    "a11y.lang": "Jazyk",
    "http://brand.name": "Soused od vedle",
    "brand.tag": "počítače · bezpečnost · učení",
    "http://nav.care": "Péče",
    "http://nav.security": "Bezpečnost",
    "nav.learning": "Učení",
    "http://nav.design": "Design",
    "http://nav.contact": "Kontakt",
    "hero.kicker": "Vítejte ve dveřích",
    "hero.title": "Soused od vedle, který rozumí počítačům",
    "hero.badge1": "Výjezd zdarma",
    "hero.badge2": "Diagnostika zdarma",
    "hero.badge3": "Bez předplatného",
    "hero.stamp": "U vás doma",
    "http://cta.call": "Zavolat sousedovi",
    "http://cta.services": "Prohlédnout služby",
    "sec1.title": "Péče o počítač",
    "sec1.intro": "Pravidelná údržba, modernizace, software i druhý život pro starý stroj.",
    "sec2.title": "Bezpečnost domova",
    "sec2.intro": "Klidný spánek, ať jste doma, na chalupě nebo na dovolené.",
    "sec3.title": "Učení pro celou rodinu",
    "sec3.intro": "Pro dospělé i pro děti — od základů po umělou inteligenci.",
    "sec3.adults": "Pro dospělé",
    "http://sec3.kids": "Pro děti",
    "sec4.title": "Design pro lidi i firmy",
    "http://srv.cleaning.title": "Čištění a chlazení",
    "srv.upgrade.title": "Modernizace",
    "http://srv.software.title": "Software a Windows",
    "http://srv.repair.title": "Oprava a likvidace",
    "http://srv.webcam.title": "Web-kamery",
    "srv.alarm.title": "Domácí alarm",
    "srv.appliances.title": "Chytrá domácnost",
    "srv.literacy.title": "Počítačová gramotnost",
    "srv.tutor.title": "Doučování informatiky",
    "srv.chess.title": "Šachy pro děti",
    "srv.development.title": "Vysoké technologie a AI",
    "http://srv.design.title": "Letáky, weby, katalogy",
    "http://tag.free": "Výjezd zdarma",
    "http://tag.free.first": "První lekce zdarma",
    "http://tag.free.consult": "Konzultace zdarma",
    "http://tag.free.coffee": "Konzultace u kávy zdarma",
    "strip.quote": "„Žádný tlak, žádné předplatné — prostě soused, který rozumí počítačům.“",
    "contact.kicker": "Ozvěte se",
    "contact.title": "Domluvíme se přes plot",
    "http://contact.phone": "Telefon",
    "footer.tag": "vyrobeno s láskou pro sousedy",
    "footer.note": "Výjezd zdarma v Praze a okolí. Mimo region po dohodě.",
    / === Texty z aktuálního záznamu Site content (Соседский тон) === /
    "sec.main": "Počítačový soused, který přijede až k vám domů — výjezd i první diagnostika zdarma.",
    "http://sec.cleaning": "Když váš počítač začne hučet jako stará lednička a v létě se přehřívá, většinou za to může prach a vyschlá teplovodivá pasta. Stavím se u vás doma, opatrně počítač nebo notebook vyčistím, vyměním pastu a promažu ventilátory. Po jedné návštěvě si oddechnete vy i váš stroj — a ušetříte za nákup nového. Výjezd k vám i první prohlídka jsou zdarma, platíte jen za odvedenou práci a případné součástky.",
    "sec.upgrade": "Notebook si dává na čas a než se nastartuje, stihnete uvařit kávu? Nemusíte hned utíkat pro nový. Často stačí přidat paměť, vyměnit starý disk za rychlé SSD nebo vložit novou baterii. Přijedu k vám domů, podívám se, co dává smysl, a poradím po sousedsku, bez zbytečných řečí. První pohled na váš počítač vás nestojí ani korunu.",
    "http://sec.software": "Windows je trochu jako obývák — když se v něm dlouho neuklízí, začne to být znát. Počítač zpomaluje, vyskakují podivné reklamy a něco klikne, kde nemá. Přijedu, pořádně systém uklidím, zbavím se virů, doinstaluji vše potřebné pro práci, školu i zábavu, a v klidu pomůžu i s datovou schránkou nebo vyplněním formuláře. Výjezd a první diagnostika u vás doma — zdarma.",
    "http://sec.repair": "Než starý počítač nebo notebook hodíte do popelnice, dejte mi šanci se na něj podívat. Často stačí vyměnit jednu součástku a stroj jede dál ještě roky. A pokud už opravdu doslouží, klidně si ho odvezu na náhradní díly, ať se nemusíte starat o jeho ekologickou likvidaci. Přijedu k vám zdarma, prohlédnu zdarma — rozhodnete se až potom.",
    "http://sec.webcam": "Jezdíte na chalupu a pořád myslíte na to, jestli je doma všechno v pořádku? Nebo chcete jen vidět, jak se má babička ve vedlejším pokoji? Připojím u vás doma i venku libovolný počet kamer, ukážu, jak se na ně dívat z mobilu, a vše vysvětlím tak, abyste tomu rozuměli i bez příručky. Stavím se zdarma, poradím zdarma — platíte jen samotnou montáž.",
    "sec.alarm": "Bojíte se nezvaných hostů, když jste celý den v práci nebo na dovolené? Namontuji vám přímo na dveře bytu, garáže nebo chaty chytrý alarm s hlasitou sirénou a SMS upozorněním na mobil. Žádné složité kabely a žádný nepořádek na zdi. Přijedu se podívat, co se vám hodí nejvíc — výjezd a první konzultace jsou samozřejmě zdarma.",
    "sec.appliances": "Koupili jste si chytrou televizi, robotický vysavač nebo žárovky, které se dají ovládat mobilem, a nevíte, kde začít? Klidně přijedu, propojím to do jedné aplikace, ukážu, jak to ovládat, a nechám u vás krátký návod sousedským jazykem. Najednou si zhasnete světla rovnou z postele a televize se vás přestane bát. Výjezd k vám i první poradenství platím já.",
    "sec.literacy": "Nikdy není pozdě se s počítačem skamarádit. Pomůžu vám s e-mailem, internetovým bankovnictvím, nákupy online, voláním přes počítač s vnoučaty i s tím, jak se nenechat napálit podvodným odkazem. Učím v klidu, vaším tempem, doma u kuchyňského stolu. První návštěva i konzultace u vás — zdarma.",
    "sec.tutor": "Vaše dítě má informatiku ve škole a doma to skřípe? Mám vystudované IT, učil jsem studenty na vysoké škole a umím látku vysvětlit tak, aby ji pochopil i ten, kdo si myslel, že na to nemá hlavu. Stavím se k vám domů, sednu si s dítětem ke stolu a jdeme na to spolu. První návštěva, kde si plácneme, jak by to mohlo fungovat, je zdarma.",
    "sec.chess": "Šachy nejsou jen hra — naučí dítě přemýšlet o krok dopředu, prohrávat s úsměvem a vyhrávat s pokorou. Hraji opravdu rád a umím to předat i začátečníkům. Přijdu k vám domů, posadíme se k šachovnici a uvidíte, jak se vašemu dítěti rozsvítí v hlavě. První seznámení je samozřejmě zdarma.",
    "sec.development": "Umělá inteligence dnes mění svět rychleji, než stíhají reagovat školy. Naučím vaše dítě používat AI chytře — ne aby za něj psala úkoly, ale aby mu pomáhala pochopit těžké věci, učit se jazyky a hledat odpovědi tam, kde ostatní tápou. Z takového dítěte vyroste člověk, který se v budoucí práci neztratí. Stavím se zdarma a v klidu probereme, jestli to dává smysl právě pro vás.",
    "http://sec.design": "Potřebujete leták na akci ve sboru, jednoduchý web pro malou firmu nebo přehledný katalog pro vaši dílnu? Jsem vystudovaný vývojář a rád připravím něco, co bude vypadat k světu a hlavně bude srozumitelné vašim zákazníkům. Stačí říct, k čemu to bude sloužit, a já se postarám o zbytek. První konzultace nad kávou — zdarma.",
    "http://sec.contact": "Stačí krátká zpráva nebo telefonát — domluvíme se, kdy se zastavím. Žádný tlak, žádné předplatné, prostě soused, který rozumí počítačům."
  }
  / Příklad přidání angličtiny:
  , en: { "meta.title": "Neighbour next door — your computer helper", ... }
  /
};

=== main.js ===
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

  / Mobile menu /
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

  / Year /
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  / Reveal on scroll /
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { http://e.target.classList.add('in'); io.unobserve(http://e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    document.querySelectorAll('.card, .section-head, .hero-copy, .hero-art, .contact-grid > *, .strip-quote').forEach(function(el){
      el.classList.add('reveal'); io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();
Styles: === styles.css ===
:root{
  --bg:#faf4e8;--bg-2:#fff8eb;--ink:#2d241b;--ink-soft:#6a5b4b;
  --primary:#c8553d;--primary-dark:#a73e2b;--olive:#6b8e4e;--mustard:#e9c46a;
  --line:rgba(45,36,27,.12);--card:#fffcf4;
  --shadow:0 2px 0 rgba(45,36,27,.06),0 14px 30px -22px rgba(45,36,27,.4);
  --r:18px;
}
,::before,::after{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.6;background-image:radial-gradient(rgba(200,85,61,.05) 1px,transparent 1.5px);background-size:22px 22px}
img{max-width:100%;display:block}
h1,h2,h3{font-family:Fraunces,Georgia,serif;font-weight:600;line-height:1.15;margin:0 0 .4em;letter-spacing:-.01em}
h1{font-size:clamp(2.1rem,4.6vw,3.6rem)}
h2{font-size:clamp(1.7rem,3.4vw,2.5rem)}
h3{font-size:1.25rem}
p{margin:0 0 1em}
.container{max-width:1180px;margin:0 auto;padding:0 24px}
.visually-hidden{position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;overflow:hidden}
.skip-link{position:absolute;left:-9999px}
.skip-link:focus{left:8px;top:8px;background:var(--primary);color:#fff;padding:8px 12px;border-radius:8px;z-index:99}

/ HEADER /
.site-header{position:sticky;top:0;z-index:50;-webkit-backdrop-filter:saturate(140%) blur(8px);backdrop-filter:saturate(140%) blur(8px);background:rgba(250,244,232,.78);border-bottom:1px solid var(--line)}
.header-row{display:flex;align-items:center;gap:16px;padding:14px 24px;position:relative}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit}
.brand-mark{font-size:32px;filter:drop-shadow(0 2px 0 rgba(0,0,0,.08))}
.brand-text strong{display:block;font-family:Fraunces,serif;font-weight:600;font-size:1.1rem;letter-spacing:-.01em}
.brand-text small{display:block;font-size:.72rem;color:var(--ink-soft);letter-spacing:.04em;text-transform:uppercase}
.site-nav{margin-left:auto}
.site-nav ul{display:flex;gap:6px;list-style:none;margin:0;padding:0}
.site-nav a{display:block;padding:10px 14px;color:var(--ink);text-decoration:none;border-radius:10px;font-weight:500;transition:.2s}
.site-nav a:hover,.site-nav a:focus-visible{background:rgba(200,85,61,.08);color:var(--primary);outline:none}
.site-nav a.nav-cta{background:var(--ink);color:#fff}
.site-nav a.nav-cta:hover{background:var(--primary)}
.header-tools{display:flex;align-items:center;gap:8px}
.lang-switch select{appearance:none;-webkit-appearance:none;background:transparent;border:1px solid var(--line);border-radius:10px;padding:8px 28px 8px 12px;font:inherit;cursor:pointer;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%232d241b' d='M5 6 0 0h10z'/></svg>");background-repeat:no-repeat;background-position:right 10px center}
.menu-toggle{display:none;background:transparent;border:0;width:44px;height:44px;padding:10px;cursor:pointer}
.menu-toggle span{display:block;height:2px;background:var(--ink);margin:5px 0;border-radius:2px;transition:.25s}

/ HERO /
.hero{position:relative;padding:64px 0 40px;overflow:hidden}
.hero::before{content:"";position:absolute;inset:auto -10% -40% -10%;height:90%;background:radial-gradient(closest-side,rgba(233,196,106,.35),transparent 70%);z-index:0}
.hero-grid{position:relative;display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center}
.kicker{font-family:Caveat,cursive;font-size:1.6rem;color:var(--primary);margin:0 0 6px;transform:rotate(-2deg);display:inline-block}
.hero-copy h1 .accent{color:var(--primary);background:linear-gradient(transparent 60%,rgba(233,196,106,.55) 60%);padding:0 4px;border-radius:4px}
.lead{font-size:1.15rem;color:var(--ink-soft);max-width:52ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin:18px 0 14px}
.btn{display:inline-flex;align-items:center;gap:6px;padding:14px 22px;border-radius:999px;text-decoration:none;font-weight:600;transition:.25s;border:1px solid transparent;cursor:pointer}
.btn-primary{background:var(--primary);color:#fff;box-shadow:0 8px 20px -8px rgba(200,85,61,.6)}
.btn-primary:hover{background:var(--primary-dark);transform:translateY(-2px)}
.btn-ghost{border-color:var(--ink);color:var(--ink)}
.btn-ghost:hover{background:var(--ink);color:#fff}
.badges{list-style:none;padding:0;margin:18px 0 0;display:flex;flex-wrap:wrap;gap:10px}
.badges li{background:#fff;border:1px dashed var(--primary);color:var(--primary);padding:6px 12px;border-radius:999px;font-size:.86rem;font-weight:500}
.badges li::before{content:"✓ ";font-weight:700}
.hero-art{position:relative;margin:0;aspect-ratio:370/590;max-width:420px;justify-self:end;width:100%;border-radius:32px;overflow:hidden;background:linear-gradient(180deg,#fff8eb,#f3deb6);box-shadow:var(--shadow);transform:rotate(1deg)}
.hero-art img{width:100%;height:100%;object-fit:contain;object-position:bottom;padding:18px;position:absolute;inset:0;transition:opacity .5s ease}
.hero-art .img-hover{opacity:0}
.hero-art:hover .img-hover,.hero-art:focus-within .img-hover{opacity:1}
.hero-stamp{position:absolute;top:18px;right:18px;background:var(--ink);color:#fff;padding:8px 14px;border-radius:999px;font-family:Caveat,cursive;font-size:1.1rem;transform:rotate(6deg)}
.scroll-down{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);width:42px;height:42px;display:grid;place-items:center;border-radius:50%;background:#fff;color:var(--ink);text-decoration:none;box-shadow:var(--shadow);animation:bob 2.6s infinite ease-in-out;font-size:1.2rem}
@keyframes bob{0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,6px)}}

/ SECTIONS /
.services{padding:80px 0;position:relative}
.section-care{background:linear-gradient(180deg,transparent,#fff7e6 30%,transparent)}
.section-security{background:linear-gradient(180deg,transparent,#efe7d3 50%,transparent)}
.section-learning{background:linear-gradient(180deg,transparent,#fff3df 50%,transparent)}
.section-design{padding-top:30px}
.section-head{max-width:760px;margin:0 auto 40px;text-align:center;position:relative}
.section-num{font-family:Caveat,cursive;font-size:2.4rem;color:var(--primary);display:block;line-height:1;margin-bottom:6px}
.section-intro{color:var(--ink-soft);font-size:1.05rem}
.subgroup{font-family:Caveat,cursive;font-size:1.6rem;color:var(--olive);margin:32px 0 18px;text-align:center}

/ CARDS /
.cards{display:grid;gap:24px}
.cards-4{grid-template-columns:repeat(4,1fr)}
.cards-3{grid-template-columns:repeat(3,1fr)}
.cards-1{grid-template-columns:1fr}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:18px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden;transition:transform .35s,box-shadow .35s,border-color .35s}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow);border-color:rgba(200,85,61,.35)}
.card-art{position:relative;aspect-ratio:1/1;background:linear-gradient(135deg,#fff,#f5e6c8);border-radius:14px;overflow:hidden}
.card-art img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:14px;transition:opacity .45s ease,transform .6s ease}
.card-art .img-hover{opacity:0}
.card:hover .card-art .img-main,.card:focus-within .card-art .img-main{opacity:0;transform:scale(1.04)}
.card:hover .card-art .img-hover,.card:focus-within .card-art .img-hover{opacity:1;transform:scale(1.02)}
.card h3{margin-top:6px}
.card p{font-size:.97rem;color:var(--ink-soft);margin:0}
.card-tag{margin-top:auto;align-self:flex-start;font-family:Caveat,cursive;color:var(--olive);font-size:1.15rem}
.card-wide{display:grid;grid-template-columns:280px 1fr;gap:24px;align-items:center}
.card-wide .card-art{aspect-ratio:1/1}
.card-wide .card-body{display:flex;flex-direction:column;gap:10px}

/ STRIP /
.hero-strip{background:var(--ink);color:#fff;padding:48px 0;text-align:center}
.strip-quote{font-family:Fraunces,serif;font-size:clamp(1.3rem,2.4vw,1.8rem);max-width:820px;margin:0 auto;font-style:italic}

/ CONTACT /
.contact{padding:80px 0;background:linear-gradient(180deg,#fff7e6,#faf4e8)}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.contact-list{list-style:none;padding:0;margin:0;display:grid;gap:14px}
.contact-list a{display:flex;align-items:center;gap:14px;padding:18px 22px;background:#fff;border:1px solid var(--line);border-radius:var(--r);color:inherit;text-decoration:none;transition:.25s}
.contact-list a:hover{transform:translateX(6px);border-color:var(--primary);box-shadow:var(--shadow)}
.contact-list .ico{font-size:1.6rem;width:44px;height:44px;display:grid;place-items:center;background:#fff7e6;border-radius:50%;flex:0 0 auto}
.contact-list strong{display:block}
.contact-list small{color:var(--ink-soft)}

/ FOOTER /
.site-footer{padding:32px 0;border-top:1px solid var(--line);background:var(--bg-2);font-size:.92rem}
.footer-row{display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;color:var(--ink-soft)}
.footer-row .muted{opacity:.85}

/ SCROLL ANIM /
.reveal{opacity:0;transform:translateY(20px);transition:opacity .7s ease,transform .7s ease}
.http://reveal.in{opacity:1;transform:none}

@media (max-width:980px){
  .cards-4{grid-template-columns:repeat(2,1fr)}
  .cards-3{grid-template-columns:repeat(2,1fr)}
  .hero-grid{grid-template-columns:1fr;gap:24px}
  .hero-art{justify-self:center;max-width:320px;transform:none}
  .contact-grid{grid-template-columns:1fr}
  .card-wide{grid-template-columns:1fr}
}
@media (max-width:680px){
  .site-nav{display:none}
  .http://site-nav.open{display:block;position:absolute;top:64px;left:0;right:0;background:var(--bg);border-bottom:1px solid var(--line);padding:12px 24px}
  .http://site-nav.open ul{flex-direction:column;gap:4px}
  .menu-toggle{display:block;margin-left:auto}
  .cards-4,.cards-3{grid-template-columns:1fr}
  .services{padding:56px 0}
  .hero{padding:40px 0 24px}
}
@media (prefers-reduced-motion:reduce){
  {animation:none!important;transition:none!important}
}

## 📋 Отчёт по сайту

### Концепция

«Соседский тон» — лендинг компьютерного выездного мастера, который выглядит как добрая визитка от соседа из дома напротив. Палитра — кремовый молочный фон, тёплый терракот для основных акцентов, мягкий оливковый для рукописных подписей, тёмный кофе для текста. Минимальная фактура «крафтовой бумаги» поверх фона (мелкая текстура `radial-gradient`) усиливает ощущение домашности.

### Целевые устройства

Mobile-first сетка с разворачиванием в 4-колоночную и 3-колоночную раскладки на десктопе. Брейкпоинты — 980 px (планшеты) и 680 px (телефоны). Навигация на мобильном превращается в гамбургер-меню.

### Ключевые приёмы дизайна

- Hero с «открыткой» — изображение мастера в карточке с лёгким поворотом и эффектом смены кадра (`hover` / `focus-within`).
- Карточки услуг 1:1 с фирменной заливкой, лёгким подъёмом по hover и hover-переключением `--main` ↔ `--hover`.
- Декоративные «соседские» рукописные акценты шрифтом *Caveat* — нумерация секций, подгруппы, теги «зарплата зрчдара».
- Контраст «крафтовый» бумажный фон ↔ почти чёрный strip-quote-блок с цитатой.
- Плавные `IntersectionObserver`-анимации появления карточек.

### Палитра

- `#FAF4E8` — основной фон
- `#FFFCF4` — карточки
- `#2D241B` — текст
- `#C8553D` — основной акцент (терракот)
- `#6B8E4E` — оливковый (рукописные подписи)
- `#E9C46A` — горчичный (хайлайт в заголовке)

### Типографика

- **Fraunces** (Google Fonts) — заголовки. Тёплый современный сериф.
- **Caveat** (Google Fonts) — рукописные акценты.
- **Inter** — основной текст и UI.

Все шрифты подключены через бесплатный Google Fonts CDN.

### Доступность

- Семантика `header / main / section / footer`, ARIA-атрибуты для меню и языкового переключателя.
- Skip-link.
- Все изображения имеют `alt` или `aria-hidden`.
- Учтена `prefers-reduced-motion`.

---

## 🧰 Инструкция по сборке

1. Создайте папку проекта, например `soused-od-vedle/`.
2. Из свойства **Html** возьмите блок `index.html` и сохраните как `./index.html`.
3. Из свойства **Styles** возьмите блок `styles.css` и сохраните как `./styles.css`.
4. Из свойства **Scripts** возьмите блоки `i18n.js` и `main.js` и сохраните в корень.
5. Из свойства **Other** разложите файлы по корню проекта: `package.json`, `vercel.json`, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `README.md`.
6. Создайте подпапку `./img/` и поместите туда все пары изображений из страницы [Main images](https://www.notion.so/Main-images-3614fe82e7d4800891eacef2c9d4ab58?pvs=21) в формате `slug--main.png` и `slug--hover.png` (12 пар услуг + `hero--main.png` / `hero--hover.png`).
7. Для локальной проверки запустите `npx serve .` в корне проекта (или откройте `index.html` через любой статический сервер).
8. Чтобы добавить новый язык, в `i18n.js` рядом с объектом `cs` дополните объект, например:
    
    ```jsx
    en: { "meta.title": "...", "sec.main": "...", ... }
    ```
    
    Селектор языка в шапке автоматически предложит новый код.
    

---

## 🚀 Развёртывание на Vercel

1. Зарегистрируйтесь / войдите на [vercel.com](http://vercel.com) (бесплатный план).
2. Создайте новый проект «Add New… → Project».
3. Вариант A — через Git:
    - Создайте GitHub-репозиторий, залейте туда содержимое папки проекта.
    - В Vercel выберите репозиторий, в качестве *Framework Preset* укажите **Other**.
    - Build Command оставьте пустым, *Output Directory* — пустым (корень репозитория).
4. Вариант B — через CLI:
    - Установите Vercel CLI: `npm i -g vercel`.
    - В корне проекта выполните `vercel` и пройдите мастер; для продакшна — `vercel --prod`.
5. После деплоя Vercel выдаст домен вида `soused-od-vedle.vercel.app`. При желании в *Settings → Domains* подключите собственный домен и обновите DNS.
6. Аналогично подойдут Netlify, Cloudflare Pages и GitHub Pages — везде это «статический сайт без билд-шага».

## ⚠️ Заметки по этому запуску

- Все 12 услуг и контактный блок есть на странице, сопоставлены с правильными парами изображений по `slug` (`cleaning`, `upgrade`, `software`, `repair`, `webcam`, `alarm`, `appliances`, `literacy`, `tutor`, `chess`, `development`, `design`) и с hero-парой `hero--main.png` / `hero--hover.png`.
- Контактные данные (email, телефон, мессенджеры) проставлены как пример — перед публикацией замените их на реальные.
- Иконки 192×192 / 512×512 для `manifest.webmanifest` необходимо положить в `./img/` или удалить упоминание из манифеста, если PWA-иконки не нужны.