# Sousedský tón — teplý macchiato lookbook

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title data-i18n="meta.title">Počítačový soused — výjezdový mistr</title>
  <meta name="description" data-i18n="meta.description" data-i18n-attr="content" content="Soused, který přijede až k vám domů. 12 služeb — od čištění ventilátoru po umělou inteligenci pro vaše děti. Výjezd a první diagnostika zdarma.">
  <meta name="theme-color" content="#f7efe5">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%F0%9F%8F%98%EF%B8%8F%3C/text%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./styles/main.css">
</head>
<body>
  <a class="skip-link" href="#main" data-i18n="a11y.skip">Přeskočit na obsah</a>

  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="Počítačový soused">
      🏘️
      
        Počítačový soused
        Výjezd zdarma
      </span>
    </a>
    <nav class="primary-nav" aria-label="Hlavní menu">
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
      <a href="#study" data-i18n="http://nav.study">Studium</a>
      <a href="#design" data-i18n="http://nav.design">Design</a>
      <a class="nav-cta" href="#contact" data-i18n="http://nav.contact">Napsat</a>
    </nav>
    <div class="lang-switch" role="group" aria-label="Jazyk">
      <button type="button" data-lang="cs" class="is-active" aria-pressed="true">CS</button>
      <button type="button" data-lang="en" aria-pressed="false">EN</button>
    </div>
    <button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false">
      
    </button>
  </header>

  <main id="main">
    <section class="hero" id="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="hero-copy reveal">
          <p class="eyebrow" data-i18n="hero.eyebrow">★ Soused, který rozumí počítačům</p>
          <h1 class="hero-title">
            Počítačový soused,
            který přijede až k vám domů.
          </h1>
          <p class="hero-lead" data-i18n="main">Počítačový soused, který přijede až k vám domů — výjezd i první diagnostika zdarma.</p>
          <div class="hero-cta">
            <a class="btn primary" href="#contact" data-i18n="hero.cta">Napsat sousedovi</a>
            <a class="btn ghost" href="#services" data-i18n="hero.secondary">Prohlédnout 12 služeb</a>
          </div>
          <ul class="hero-badges" aria-label="Výhody">
            <li>🚐Výjezd zdarma</li>
            <li>🔍Diagnostika zdarma</li>
            <li>🤝Bez předplatného</li>
          </ul>
        </div>
        <figure class="hero-figure reveal" data-hover-target>
          <img src="./img/hero--main.png" data-hover="./img/hero--hover.png" alt="master" width="370" height="790" loading="eager" decoding="async">
          První návštěva zdarma
        </figure>
      </div>
      <div class="marquee" aria-hidden="true">
        <div class="marquee-track">
          · Sousedský tón ·· Bez tlaku ·· Bez předplatného ·· Výjezd zdarma ·· Praha a okolí ·
          · Sousedský tón ·· Bez tlaku ·· Bez předplatného ·· Výjezd zdarma ·· Praha a okolí ·
        </div>
      </div>
    </section>

    <section id="services" class="section section-intro reveal">
      <p class="section-eyebrow" data-i18n="services.eyebrow">12 služeb · 4 oblasti</p>
      <h2 class="section-title" data-i18n="services.title">Co pro vás zařídím</h2>
      <p class="section-lead" data-i18n="services.lead">Od čištění ventilátoru po umělou inteligenci pro vaše děti. Vždy s klidem, sousedským tónem a první návštěvou zdarma.</p>
    </section>

    <section id="care" class="section group reveal">
      <header class="group-header">
        01
        <div>
          <h3 data-i18n="http://group.care.title">Péče o počítač</h3>
          <p data-i18n="http://group.care.lead">Roční prohlídka, modernizace, čistý systém a druhá šance pro staré stroje.</p>
        </div>
      </header>
      <div class="cards">
        <article class="card reveal" data-section="1.1" data-hover-target>
          <div class="card-media">
            <img src="./img/cleaning--main.png" data-hover="./img/cleaning--hover.png" alt="cleaning" loading="lazy" decoding="async">
          </div>
          1.1 · Čištění
          <h4 data-i18n="http://card.cleaning.title">Čištění počítače</h4>
          <p data-i18n="cleaning">Když váš počítač začne hučet jako stará lednička a v létě se přehřívá, většinou za to může prach a vyschlá teplovodivá pasta. Stavím se u vás doma, opatrně počítač nebo notebook vyčistím, vyměním pastu a promažu ventilátory.</p>
        </article>
        <article class="card reveal" data-section="1.2" data-hover-target>
          <div class="card-media">
            <img src="./img/upgrade--main.png" data-hover="./img/upgrade--hover.png" alt="upgrade" loading="lazy" decoding="async">
          </div>
          1.2 · Modernizace
          <h4 data-i18n="card.upgrade.title">Modernizace</h4>
          <p data-i18n="upgrade">Notebook si dává na čas a než se nastartuje, stihnete uvařit kávu? Nemusíte hned utíkat pro nový. Často stačí přidat paměť, vyměnit starý disk za rychlé SSD nebo vložit novou baterii.</p>
        </article>
        <article class="card reveal" data-section="1.3" data-hover-target>
          <div class="card-media">
            <img src="./img/software--main.png" data-hover="./img/software--hover.png" alt="software" loading="lazy" decoding="async">
          </div>
          1.3 · Software
          <h4 data-i18n="http://card.software.title">Nastavení softwaru</h4>
          <p data-i18n="software">Windows je trochu jako obývák — když se v něm dlouho neuklízí, začne to být znát. Přijedu, pořádně systém uklidím, zbavím se virů, doinstaluji vše potřebné a pomůžu i s datovou schránkou nebo formulářem.</p>
        </article>
        <article class="card reveal" data-section="1.4" data-hover-target>
          <div class="card-media">
            <img src="./img/repair--main.png" data-hover="./img/repair--hover.png" alt="repair" loading="lazy" decoding="async">
          </div>
          1.4 · Oprava
          <h4 data-i18n="http://card.repair.title">Oprava a recyklace</h4>
          <p data-i18n="repair">Než starý počítač nebo notebook hodíte do popelnice, dejte mi šanci se na něj podívat. Často stačí vyměnit jednu součástku a stroj jede dál ještě roky.</p>
        </article>
      </div>
    </section>

    <section id="security" class="section group alt reveal">
      <header class="group-header">
        02
        <div>
          <h3 data-i18n="http://group.security.title">Bezpečnost</h3>
          <p data-i18n="http://group.security.lead">Kamery, alarm a chytrá domácnost — klidný spánek i na dovolené.</p>
        </div>
      </header>
      <div class="cards">
        <article class="card reveal" data-section="2.1" data-hover-target>
          <div class="card-media">
            <img src="./img/webcam--main.png" data-hover="./img/webcam--hover.png" alt="webcam" loading="lazy" decoding="async">
          </div>
          2.1 · Kamery
          <h4 data-i18n="http://card.webcam.title">Web-kamery</h4>
          <p data-i18n="webcam">Jezdíte na chalupu a pořád myslíte na to, jestli je doma všechno v pořádku? Připojím u vás doma i venku libovolný počet kamer, ukážu, jak se na ně dívat z mobilu.</p>
        </article>
        <article class="card reveal" data-section="2.2" data-hover-target>
          <div class="card-media">
            <img src="./img/alarm--main.png" data-hover="./img/alarm--hover.png" alt="alarm" loading="lazy" decoding="async">
          </div>
          2.2 · Alarm
          <h4 data-i18n="card.alarm.title">Domácí alarm</h4>
          <p data-i18n="alarm">Bojíte se nezvaných hostů, když jste celý den v práci nebo na dovolené? Namontuji vám přímo na dveře bytu, garáže nebo chaty chytrý alarm s hlasitou sirénou a SMS upozorněním.</p>
        </article>
        <article class="card reveal" data-section="2.3" data-hover-target>
          <div class="card-media">
            <img src="./img/appliances--main.png" data-hover="./img/appliances--hover.png" alt="appliances" loading="lazy" decoding="async">
          </div>
          2.3 · Chytrý dům
          <h4 data-i18n="card.appliances.title">Chytrá domácnost</h4>
          <p data-i18n="appliances">Koupili jste si chytrou televizi, robotický vysavač nebo žárovky, které se dají ovládat mobilem, a nevíte, kde začít? Propojím to do jedné aplikace a ukážu, jak to ovládat.</p>
        </article>
      </div>
    </section>

    <section class="hero-band" aria-hidden="false">
      <div class="hero-band-inner">
        <figure class="hero-band-figure" data-hover-target>
          <img src="./img/hero--hover.png" data-hover="./img/hero--main.png" alt="master" loading="lazy" decoding="async">
        </figure>
        <blockquote class="hero-band-quote">
          <p data-i18n="band.quote">„Nepřijíždím s nadhledem experta. Přijíždím jako soused, který má rád lidi i počítače.“</p>
          <cite data-i18n="band.cite">— Váš počítačový soused</cite>
        </blockquote>
      </div>
    </section>

    <section id="study" class="section group reveal">
      <header class="group-header">
        03
        <div>
          <h3 data-i18n="http://group.study.title">Studium</h3>
          <p data-i18n="http://group.study.lead">Pro dospělé i pro děti. S klidem a s respektem k vašemu tempu.</p>
        </div>
      </header>
      <div class="cards">
        <article class="card reveal" data-section="3.1" data-hover-target>
          <div class="card-media">
            <img src="./img/literacy--main.png" data-hover="./img/literacy--hover.png" alt="literacy" loading="lazy" decoding="async">
          </div>
          3.1 · Pro dospělé
          <h4 data-i18n="card.literacy.title">Počítačová gramotnost</h4>
          <p data-i18n="literacy">Nikdy není pozdě se s počítačem skamarádit. Pomůžu vám s e-mailem, internetovým bankovnictvím, nákupy online, voláním s vnoučaty i s tím, jak se nenechat napálit.</p>
        </article>
        <article class="card reveal" data-section="3.2" data-hover-target>
          <div class="card-media">
            <img src="./img/tutor--main.png" data-hover="./img/tutor--hover.png" alt="tutor" loading="lazy" decoding="async">
          </div>
          3.2 · Pro děti
          <h4 data-i18n="card.tutor.title">Doučování informatiky</h4>
          <p data-i18n="tutor">Vaše dítě má informatiku ve škole a doma to skřípe? Mám vystudované IT, učil jsem studenty na vysoké škole a umím látku vysvětlit tak, aby ji pochopil i ten, kdo si myslel, že na to nemá hlavu.</p>
        </article>
        <article class="card reveal" data-section="3.3" data-hover-target>
          <div class="card-media">
            <img src="./img/chess--main.png" data-hover="./img/chess--hover.png" alt="chess" loading="lazy" decoding="async">
          </div>
          3.3 · Pro děti
          <h4 data-i18n="card.chess.title">Šachy</h4>
          <p data-i18n="chess">Šachy nejsou jen hra — naučí dítě přemýšlet o krok dopředu, prohrávat s úsměvem a vyhrávat s pokorou. Posadíme se k šachovnici a uvidíte, jak se dítěti rozsvítí v hlavě.</p>
        </article>
        <article class="card reveal" data-section="3.4" data-hover-target>
          <div class="card-media">
            <img src="./img/development--main.png" data-hover="./img/development--hover.png" alt="development" loading="lazy" decoding="async">
          </div>
          3.4 · Pro děti
          <h4 data-i18n="card.development.title">AI a vysoké technologie</h4>
          <p data-i18n="development">Naučím vaše dítě používat AI chytře — ne aby za něj psala úkoly, ale aby mu pomáhala pochopit těžké věci, učit se jazyky a hledat odpovědi tam, kde ostatní tápou.</p>
        </article>
      </div>
    </section>

    <section id="design" class="section group alt reveal">
      <header class="group-header">
        04
        <div>
          <h3 data-i18n="http://group.design.title">Design</h3>
          <p data-i18n="http://group.design.lead">Letáky, jednoduché weby i celé aplikace — od diplomovaného vývojáře.</p>
        </div>
      </header>
      <div class="cards single">
        <article class="card wide reveal" data-section="4" data-hover-target>
          <div class="card-media">
            <img src="./img/design--main.png" data-hover="./img/design--hover.png" alt="design" loading="lazy" decoding="async">
          </div>
          <div class="card-body">
            4 · Design
            <h4 data-i18n="http://card.design.title">Letáky, weby, katalogy</h4>
            <p data-i18n="design">Potřebujete leták na akci ve sboru, jednoduchý web pro malou firmu nebo přehledný katalog pro vaši dílnu? Stačí říct, k čemu to bude sloužit, a já se postarám o zbytek.</p>
            <ul class="design-list">
              <li data-i18n="http://design.li1">Letáky, plakáty, pozvánky</li>
              <li data-i18n="http://design.li2">Jednoduché weby a portfolia</li>
              <li data-i18n="http://design.li3">Katalogy zboží a služeb</li>
              <li data-i18n="http://design.li4">Celé aplikace na míru</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="section contact reveal">
      <div class="contact-inner">
        <div class="contact-copy">
          <p class="section-eyebrow" data-i18n="contact.eyebrow">Kontakt</p>
          <h2 class="section-title" data-i18n="contact.title">Napište sousedovi</h2>
          <p class="section-lead" data-i18n="contact">Stačí krátká zpráva nebo telefonát — domluvíme se, kdy se zastavím. Žádný tlak, žádné předplatné, prostě soused, který rozumí počítačům.</p>
          <div class="contact-channels">
            <a class="channel" href="mailto:soused@pocitacovysoused.cz">
              ✉️
              
                E-mail
                mailto:soused@pocitacovysoused.cz
              </span>
            </a>
            <a class="channel" href="tel:+420777777777">
              📞
              
                Telefon
                +420 777 777 777
              </span>
            </a>
            <a class="channel" href="https://wa.me/420777777777" target="_blank" rel="noopener">
              💬
              
                WhatsApp
                Napsat rovnou na WhatsApp
              </span>
            </a>
            <a class="channel" href="https://t.me/pocitacovy_soused" target="_blank" rel="noopener">
              ✈️
              
                Telegram
                @pocitacovy_soused
              </span>
            </a>
          </div>
        </div>
        <form class="contact-form" action="https://formsubmit.co/soused@pocitacovysoused.cz" method="POST">
          <input type="hidden" name="_subject" value="Nový vzkaz z webu Počítačový soused">
          <input type="hidden" name="_template" value="box">
          <div class="form-row">
            <label>
              Vaše jméno
              <input type="text" name="name" required>
            </label>
            <label>
              E-mail nebo telefon
              <input type="text" name="contact" required>
            </label>
          </div>
          <label>
            S čím vám můžu pomoct?
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit" class="btn primary" data-i18n="form.submit">Odeslat zprávu</button>
          <p class="form-note" data-i18n="form.note">Odpovídám zpravidla do 24 hodin. Žádné předplatné, žádné automatické newslettery.</p>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div>
        🏘️
        Počítačový soused
      </div>
      <small data-i18n="footer.copyright">© 2026 Počítačový soused · Výjezdy v Praze a okolí</small>
      <small data-i18n="footer.note">Sousedský tón. Bez tlaku. Bez předplatného.</small>
    </div>
  </footer>

  <script src="./scripts/i18n.js" defer></script>
  <script src="./scripts/main.js" defer></script>
</body>
</html>
Other: === package.json ===
{
  "name": "pocitacovy-soused",
  "version": "1.0.0",
  "private": true,
  "description": "Static website for a house-call computer master. Sousedsky ton.",
  "scripts": {
    "dev": "npx serve .",
    "start": "npx serve ."
  },
  "license": "MIT"
}

=== vercel.json ===
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.).(?:png|jpg|jpeg|webp|svg|ico|woff2)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.).(?:css|js)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=3600, must-revalidate" }
      ]
    }
  ]
}

=== robots.txt ===
User-agent: *
Allow: /

=== manifest.webmanifest ===
{
  "name": "Pocitacovy soused",
  "short_name": "Soused",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#f7efe5",
  "theme_color": "#c2410c",
  "icons": []
}

=== img/http://README.md ===
Place 24 PNG files here, named exactly as listed below (slug--main / slug--hover):

hero        370x790 px  (contact / hero)
cleaning    310x310 px  (1.1)
upgrade     320x340 px  (1.2)
software    350x300 px  (1.3)
repair      300x286 px  (1.4)
webcam      220x290 px  (2.1)
alarm       360x280 px  (2.2)
appliances  290x290 px  (2.3)
literacy    320x290 px  (3.1)
tutor       370x310 px  (3.2)
chess       330x320 px  (3.3)
development 320x320 px  (3.4)
design      310x310 px  (4)
Scripts: === scripts/i18n.js ===
window.I18N = {
  cs: {
    "meta.title":"Počítačový soused — výjezdový mistr",
    "a11y.skip":"Přeskočit na obsah",
    "http://brand.name":"Počítačový soused",
    "brand.tag":"Výjezd zdarma",
    "http://nav.care":"Péče", "http://nav.security":"Bezpečnost", "http://nav.study":"Studium", "http://nav.design":"Design", "http://nav.contact":"Napsat",
    "hero.eyebrow":"★ Soused, který rozumí počítačům",
    "hero.kicker":"Počítačový soused,",
    "hero.display":"který přijede až k vám domů.",
    "hero.cta":"Napsat sousedovi", "hero.secondary":"Prohlédnout 12 služeb",
    "hero.badge1":"Výjezd zdarma", "hero.badge2":"Diagnostika zdarma", "hero.badge3":"Bez předplatného",
    "hero.sticker":"První návštěva zdarma",
    "main":"Počítačový soused, který přijede až k vám domů — výjezd i první diagnostika zdarma.",
    "services.eyebrow":"12 služeb · 4 oblasti",
    "services.title":"Co pro vás zařídím",
    "services.lead":"Od čištění ventilátoru po umělou inteligenci. Vždy s klidem a první návštěvou zdarma.",
    "http://group.care.title":"Péče o počítač",
    "http://group.care.lead":"Roční prohlídka, modernizace, čistý systém a druhá šance pro staré stroje.",
    "http://group.security.title":"Bezpečnost",
    "http://group.security.lead":"Kamery, alarm a chytrá domácnost — klidný spánek i na dovolené.",
    "http://group.study.title":"Studium",
    "http://group.study.lead":"Pro dospělé i pro děti. S klidem a s respektem k vašemu tempu.",
    "http://group.design.title":"Design",
    "http://group.design.lead":"Letáky, jednoduché weby i celé aplikace — od diplomovaného vývojáře.",
    "http://card.cleaning.tag":"1.1 · Čištění", "http://card.cleaning.title":"Čištění počítače",
    "cleaning":"Když váš počítač začne hučet jako stará lednička a v létě se přehřívá, může za to prach a vyschlá teplovodivá pasta. Vyčistím počítač, vyměním pastu, promažu ventilátory. Výjezd i první prohlídka zdarma.",
    "card.upgrade.tag":"1.2 · Modernizace", "card.upgrade.title":"Modernizace",
    "upgrade":"Notebook si dává na čas? Často stačí přidat paměť, vyměnit starý disk za rychlé SSD nebo vložit novou baterii. První pohled na váš počítač vás nestojí ani korunu.",
    "http://card.software.tag":"1.3 · Software", "http://card.software.title":"Nastavení softwaru",
    "software":"Windows je trochu jako obývák — když se v něm dlouho neuklízí, začne to být znát. Pořádně systém uklidím, zbavím se virů a doinstaluji vše potřebné. Výjezd a první diagnostika zdarma.",
    "http://card.repair.tag":"1.4 · Oprava", "http://card.repair.title":"Oprava a recyklace",
    "repair":"Než starý počítač hodíte do popelnice, dejte mi šanci se na něj podívat. Často stačí vyměnit jednu součástku a stroj jede dál ještě roky. Přijedu zdarma, prohlédnu zdarma.",
    "http://card.webcam.tag":"2.1 · Kamery", "http://card.webcam.title":"Web-kamery",
    "webcam":"Jezdíte na chalupu a pořád myslíte na to, jestli je doma všechno v pořádku? Připojím libovolný počet kamer a ukážu, jak se na ně dívat z mobilu. Konzultace zdarma.",
    "card.alarm.tag":"2.2 · Alarm", "card.alarm.title":"Domácí alarm",
    "alarm":"Bojíte se nezvaných hostů? Namontuji přímo na dveře chytrý alarm se sirénou a SMS upozorněním. První konzultace zdarma.",
    "card.appliances.tag":"2.3 · Chytrý dům", "card.appliances.title":"Chytrá domácnost",
    "appliances":"Chytrá televize, robotický vysavač, žárovky ovládané mobilem? Propojím vše do jedné aplikace a ukážu, jak na to. Výjezd platím já.",
    "card.literacy.tag":"3.1 · Pro dospělé", "card.literacy.title":"Počítačová gramotnost",
    "literacy":"Nikdy není pozdě se s počítačem skamarádit. Pomůžu s e-mailem, bankovnictvím, nákupy online, voláním s vnoučaty i s tím, jak se nenechat napálit. První návštěva zdarma.",
    "card.tutor.tag":"3.2 · Pro děti", "card.tutor.title":"Doučování informatiky",
    "tutor":"Dítě má informatiku ve škole a doma to skřípe? Mám vystudované IT a učil jsem na vysoké škole. Sednu si s dítětem a jdeme na to spolu. První návštěva zdarma.",
    "card.chess.tag":"3.3 · Pro děti", "card.chess.title":"Šachy",
    "chess":"Šachy naučí dítě přemýšlet o krok dopředu, prohrávat s úsměvem a vyhrávat s pokorou. Posadíme se k šachovnici — uvidíte, jak se dítěti rozsvítí v hlavě. První seznámení zdarma.",
    "card.development.tag":"3.4 · Pro děti", "card.development.title":"AI a vysoké technologie",
    "development":"Naučím vaše dítě používat AI chytře — ne aby za něj psala úkoly, ale aby mu pomáhala pochopit těžké věci a učit se jazyky. Stavím se zdarma.",
    "http://card.design.tag":"4 · Design", "http://card.design.title":"Letáky, weby, katalogy",
    "design":"Potřebujete leták, jednoduchý web nebo katalog? Jsem vystudovaný vývojář a rád připravím něco, co bude vypadat k světu. První konzultace nad kávou zdarma.",
    "http://design.li1":"Letáky, plakáty, pozvánky",
    "http://design.li2":"Jednoduché weby a portfolia",
    "http://design.li3":"Katalogy zboží a služeb",
    "http://design.li4":"Celé aplikace na míru",
    "band.quote":"„Nepřijíždím s nadhledem experta. Přijíždím jako soused, který má rád lidi i počítače.“",
    "band.cite":"— Váš počítačový soused",
    "contact.eyebrow":"Kontakt",
    "contact.title":"Napište sousedovi",
    "contact":"Stačí krátká zpráva nebo telefonát. Žádný tlak, žádné předplatné, prostě soused, který rozumí počítačům.",
    "http://contact.email.label":"E-mail", "http://contact.email.value":"mailto:soused@pocitacovysoused.cz",
    "http://contact.phone.label":"Telefon", "http://contact.phone.value":"+420 777 777 777",
    "contact.whatsapp.label":"WhatsApp", "contact.whatsapp.value":"Napsat rovnou na WhatsApp",
    "contact.telegram.label":"Telegram", "contact.telegram.value":"@pocitacovy_soused",
    "http://form.name":"Vaše jméno", "http://form.contact":"E-mail nebo telefon",
    "form.message":"S čím vám můžu pomoct?", "form.submit":"Odeslat zprávu",
    "form.note":"Odpovídám zpravidla do 24 hodin. Žádné předplatné.",
    "footer.copyright":"© 2026 Počítačový soused · Výjezdy v Praze a okolí",
    "footer.note":"Sousedský tón. Bez tlaku. Bez předplatného."
  },
  en: {
    "a11y.skip":"Skip to content",
    "http://brand.name":"Computer Neighbour", "brand.tag":"Free house call",
    "http://nav.care":"Care", "http://nav.security":"Security", "http://nav.study":"Learning", "http://nav.design":"Design", "http://nav.contact":"Write",
    "hero.eyebrow":"★ A neighbour who understands computers",
    "hero.kicker":"Your computer neighbour,",
    "hero.display":"who comes right to your door.",
    "hero.cta":"Write to the neighbour", "hero.secondary":"See all 12 services",
    "hero.badge1":"House call free", "hero.badge2":"Diagnosis free", "hero.badge3":"No subscriptions",
    "hero.sticker":"First visit free",
    "main":"A computer neighbour who comes to your home — house call and first diagnosis free.",
    "services.eyebrow":"12 services · 4 areas",
    "services.title":"What I can do for you",
    "services.lead":"From cleaning a fan to teaching kids AI. Calm, first visit free.",
    "http://group.care.title":"Computer care", "http://group.care.lead":"Yearly check-up, upgrades, a clean system and a second chance for old machines.",
    "http://group.security.title":"Security", "http://group.security.lead":"Cameras, alarm and smart home — peaceful sleep, even on holiday.",
    "http://group.study.title":"Learning", "http://group.study.lead":"For adults and kids. Calm and at your own pace.",
    "http://group.design.title":"Design", "http://group.design.lead":"Flyers, simple websites and full apps — from a graduate developer.",
    "http://card.cleaning.tag":"1.1 · Cleaning", "http://card.cleaning.title":"Computer cleaning",
    "cleaning":"When your computer hums like an old fridge and overheats, dust and dried thermal paste are usually to blame. I clean it, replace the paste, lubricate the fans. House call and first inspection free.",
    "card.upgrade.tag":"1.2 · Upgrade", "card.upgrade.title":"Modernisation",
    "upgrade":"Laptop slow to boot? Often an extra stick of RAM, an SSD or a new battery is all it takes. First look is free.",
    "http://card.software.tag":"1.3 · Software", "http://card.software.title":"Software set-up",
    "software":"Windows is like a living room — needs tidying. I clean it, remove viruses, install what you need. House call and first diagnosis free.",
    "http://card.repair.tag":"1.4 · Repair", "http://card.repair.title":"Repair & recycling",
    "repair":"Before binning the old computer, let me look. Often one part keeps it going for years. Free visit, free inspection.",
    "http://card.webcam.tag":"2.1 · Cameras", "http://card.webcam.title":"Web cameras",
    "webcam":"Going away and worried about home? I connect as many indoor and outdoor cameras as you like. Free consultation.",
    "card.alarm.tag":"2.2 · Alarm", "card.alarm.title":"Home alarm",
    "alarm":"Afraid of unwelcome guests? I mount a smart alarm with siren and SMS alert right on your door. First consultation free.",
    "card.appliances.tag":"2.3 · Smart home", "card.appliances.title":"Smart home",
    "appliances":"Smart TV, robot vacuum, bulbs controlled by phone? I link it all into one app and show you how. House call on me.",
    "card.literacy.tag":"3.1 · For adults", "card.literacy.title":"Digital literacy",
    "literacy":"It's never too late. I help with email, online banking, shopping, video calls and avoiding phishing. First visit free.",
    "card.tutor.tag":"3.2 · For kids", "card.tutor.title":"IT tutoring",
    "tutor":"Kid struggling with school IT? IT degree, university teaching experience. We sit at the table and work it out. First visit free.",
    "card.chess.tag":"3.3 · For kids", "card.chess.title":"Chess",
    "chess":"Chess teaches thinking ahead, losing with a smile and winning humbly. First meeting free.",
    "card.development.tag":"3.4 · For kids", "card.development.title":"AI & high tech",
    "development":"I'll teach your child to use AI wisely — not to write homework, but to grasp hard things and learn languages. Free first chat.",
    "http://card.design.tag":"4 · Design", "http://card.design.title":"Flyers, websites, catalogues",
    "design":"Need a flyer, simple website or catalogue? Graduate developer here. First consultation over coffee — free.",
    "http://design.li1":"Flyers, posters, invitations", "http://design.li2":"Simple websites and portfolios",
    "http://design.li3":"Product and service catalogues", "http://design.li4":"Tailor-made full applications",
    "band.quote":"“I don't come with the airs of an expert. I come like a neighbour who loves people as much as computers.”",
    "band.cite":"— Your computer neighbour",
    "contact.eyebrow":"Contact", "contact.title":"Write to the neighbour",
    "contact":"Just a short message or a call. No pressure, no subscription, just a neighbour who understands computers.",
    "http://contact.email.label":"E-mail", "http://contact.email.value":"mailto:soused@pocitacovysoused.cz",
    "http://contact.phone.label":"Phone", "http://contact.phone.value":"+420 777 777 777",
    "contact.whatsapp.label":"WhatsApp", "contact.whatsapp.value":"Message me on WhatsApp",
    "contact.telegram.label":"Telegram", "contact.telegram.value":"@pocitacovy_soused",
    "http://form.name":"Your name", "http://form.contact":"E-mail or phone",
    "form.message":"What can I help with?", "form.submit":"Send message",
    "form.note":"I usually reply within 24 hours.",
    "footer.copyright":"© 2026 Computer Neighbour · House calls in Prague",
    "footer.note":"Neighbourly tone. No pressure. No subscriptions."
  }
};

=== scripts/main.js ===
(function(){
  var STORAGE_KEY = "ps.lang";
  var DEFAULT = "cs";

  function applyLang(lang){
    if(!window.I18N || !window.I18N[lang]) lang = DEFAULT;
    document.documentElement.setAttribute("lang", lang);
    var dict = window.I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(dict[key] === undefined) return;
      var attr = el.getAttribute("data-i18n-attr");
      if(attr){ el.setAttribute(attr, dict[key]); }
      else { el.textContent = dict[key]; }
    });
    document.querySelectorAll(".lang-switch button").forEach(function(b){
      var active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  function initHoverSwap(){
    document.querySelectorAll("[data-hover-target]").forEach(function(parent){
      var img = parent.querySelector("img[data-hover]");
      if(!img) return;
      var main = img.getAttribute("src");
      var hover = img.getAttribute("data-hover");
      var pre = new Image(); pre.src = hover;
      function enter(){ img.setAttribute("src", hover); }
      function leave(){ img.setAttribute("src", main); }
      parent.addEventListener("mouseenter", enter);
      parent.addEventListener("mouseleave", leave);
      parent.addEventListener("focusin", enter);
      parent.addEventListener("focusout", leave);
      parent.addEventListener("touchstart", function(){ enter(); setTimeout(leave, 1400); }, {passive:true});
    });
  }

  function initReveal(){
    if(!("IntersectionObserver" in window)){
      document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ http://e.target.classList.add("is-visible"); obs.unobserve(http://e.target); }
      });
    }, { rootMargin: "-40px" });
    document.querySelectorAll(".reveal").forEach(function(el){ obs.observe(el); });
  }

  function initMenu(){
    var btn = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".primary-nav");
    if(!btn || !nav) return;
    btn.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initLangSwitch(){
    document.querySelectorAll(".lang-switch button").forEach(function(b){
      b.addEventListener("click", function(){ applyLang(b.dataset.lang); });
    });
  }

  function getInitialLang(){
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if(saved && window.I18N && window.I18N[saved]) return saved;
    } catch(e){}
    return DEFAULT;
  }

  document.addEventListener("DOMContentLoaded", function(){
    applyLang(getInitialLang());
    initHoverSwap();
    initMenu();
    initLangSwitch();
    initReveal();
  });
})();
Styles: === styles/main.css ===
:root{
  --bg:#f7efe5;
  --bg-alt:#fbf6ef;
  --bg-band:#1f2933;
  --paper:#ffffff;
  --ink:#1f2933;
  --ink-soft:#4a5562;
  --ink-mute:#7d8794;
  --accent:#c2410c;
  --accent-deep:#9a3412;
  --accent-soft:#fed7aa;
  --line:#e9dccc;
  --radius:18px;
  --radius-lg:28px;
  --shadow-sm:0 1px 2px rgba(31,41,51,.06),0 4px 12px rgba(31,41,51,.04);
  --shadow-md:0 4px 14px rgba(31,41,51,.08),0 12px 30px rgba(31,41,51,.08);
  --shadow-lg:0 20px 50px rgba(31,41,51,.18);
  --font-display:"Fraunces",Georgia,"Times New Roman",serif;
  --font-body:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
  --maxw:1180px;
}
,::before,::after{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:var(--font-body);
  color:var(--ink);
  background:var(--bg);
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}
img{max-width:100%;display:block;height:auto}
a{color:inherit;text-decoration:none}
button{font-family:inherit}

/ Accessibility /
.skip-link{
  position:absolute;left:-9999px;top:8px;
  background:var(--ink);color:#fff;padding:8px 14px;border-radius:8px;font-weight:600;
}
.skip-link:focus{left:8px;z-index:1000}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:6px}

/ Header /
.site-header{
  position:sticky;top:0;z-index:50;
  display:flex;align-items:center;gap:24px;
  padding:14px clamp(16px,4vw,40px);
  background:rgba(247,239,229,.85);
  -webkit-backdrop-filter:blur(12px);
  backdrop-filter:blur(12px);
  border-bottom:1px solid var(--line);
}
.brand{display:flex;align-items:center;gap:12px;font-weight:600}
.brand-mark{font-size:28px;line-height:1}
.brand-text{display:flex;flex-direction:column;line-height:1.1}
.brand-name{font-family:var(--font-display);font-size:18px;color:var(--ink)}
.brand-tag{font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:.12em;font-weight:700}
.primary-nav{display:flex;gap:24px;margin-left:auto;align-items:center}
.primary-nav a{font-weight:500;color:var(--ink-soft);transition:color .2s;font-size:15px}
.primary-nav a:hover{color:var(--accent)}
.nav-cta{
  background:var(--ink);color:#fff!important;
  padding:9px 18px;border-radius:999px;font-weight:600;
  transition:background .2s,transform .2s;
}
.nav-cta:hover{background:var(--accent);transform:translateY(-1px)}
.lang-switch{display:flex;border:1px solid var(--line);border-radius:999px;padding:3px;background:var(--paper)}
.lang-switch button{
  border:0;background:transparent;padding:6px 12px;border-radius:999px;
  font-size:12px;font-weight:700;cursor:pointer;color:var(--ink-soft);letter-spacing:.05em;
  transition:background .2s,color .2s;
}
.lang-switch http://button.is-active{background:var(--ink);color:#fff}
.menu-toggle{display:none}

/ Hero /
.hero{position:relative;overflow:hidden}
.hero-bg{
  position:absolute;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(60% 70% at 85% 0%, rgba(254,215,170,.65), transparent 70%),
    radial-gradient(40% 50% at 5% 100%, rgba(194,65,12,.12), transparent 75%);
}
.hero-inner{
  position:relative;z-index:1;max-width:var(--maxw);margin:0 auto;
  padding:clamp(40px,8vw,90px) clamp(16px,4vw,40px) clamp(40px,7vw,70px);
  display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center;
}
.eyebrow{
  font-size:12px;letter-spacing:.18em;text-transform:uppercase;
  color:var(--accent);font-weight:700;margin:0 0 18px;
}
.hero-title{font-family:var(--font-display);margin:0 0 22px;line-height:1.02;letter-spacing:-.01em}
.hero-title .kicker{display:block;font-size:clamp(24px,3.4vw,36px);font-weight:500;color:var(--ink-soft);font-style:italic}
.hero-title .display{display:block;font-size:clamp(40px,6.5vw,72px);font-weight:800;color:var(--ink)}
.hero-lead{font-size:clamp(16px,1.4vw,18px);color:var(--ink-soft);max-width:48ch;margin:0 0 28px}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:30px}
.btn{
  display:inline-flex;align-items:center;justify-content:center;cursor:pointer;border:0;
  padding:14px 24px;border-radius:999px;font-weight:600;font-size:15px;
  transition:transform .2s, background .2s, color .2s, box-shadow .2s,border-color .2s;
}
.btn.primary{background:var(--ink);color:#fff}
.btn.primary:hover{background:var(--accent);transform:translateY(-2px);box-shadow:var(--shadow-md)}
.btn.ghost{background:var(--paper);color:var(--ink);border:1px solid var(--line)}
.btn.ghost:hover{border-color:var(--accent);color:var(--accent)}
.hero-badges{display:flex;gap:22px;list-style:none;padding:0;margin:0;flex-wrap:wrap}
.hero-badges li{display:flex;gap:8px;align-items:center;font-size:14px;color:var(--ink-soft)}
.hero-figure{margin:0;display:flex;justify-content:center;position:relative}
.hero-figure img{
  max-height:560px;width:auto;border-radius:var(--radius-lg);
  filter:drop-shadow(0 28px 48px rgba(31,41,51,.22));
  transition:transform .6s ease;
}
.hero-figure:hover img{transform:translateY(-6px) rotate(-1deg)}
.hero-sticker{
  position:absolute;right:-10px;top:24px;
  background:var(--accent);color:#fff;
  font-weight:700;font-size:13px;padding:10px 16px;border-radius:999px;
  transform:rotate(8deg);box-shadow:var(--shadow-md);
  letter-spacing:.04em;
}

/ Marquee /
.marquee{
  position:relative;z-index:1;overflow:hidden;
  border-top:1px dashed var(--line);border-bottom:1px dashed var(--line);
  background:var(--bg-alt);
  padding:14px 0;
}
.marquee-track{
  display:flex;gap:36px;white-space:nowrap;
  animation:scroll 38s linear infinite;
  font-family:var(--font-display);font-weight:600;color:var(--ink-soft);
  letter-spacing:.04em;
}
@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/ Sections /
.section{max-width:var(--maxw);margin:0 auto;padding:clamp(50px,8vw,90px) clamp(16px,4vw,40px)}
.section-intro{text-align:center;padding-bottom:0}
.section-eyebrow{
  font-size:12px;letter-spacing:.18em;text-transform:uppercase;
  color:var(--accent);font-weight:700;margin:0 0 14px;
}
.section-title{font-family:var(--font-display);font-size:clamp(32px,5vw,52px);margin:0 0 14px;font-weight:700;letter-spacing:-.01em}
.section-lead{color:var(--ink-soft);max-width:60ch;margin:0 auto;font-size:17px}
.http://section.group.alt{background:var(--bg-alt)}
.http://section.group.alt{max-width:none;padding-left:0;padding-right:0}
.http://section.group.alt > .group-header,
.http://section.group.alt > .cards{max-width:var(--maxw);margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}

/ Group /
.group-header{
  display:flex;gap:24px;align-items:flex-start;margin-bottom:36px;
  padding-bottom:18px;border-bottom:1px dashed var(--line);
}
.group-num{
  font-family:var(--font-display);font-size:56px;font-weight:800;color:var(--accent);
  line-height:.9;letter-spacing:-.04em;
}
.group-header h3{font-family:var(--font-display);font-size:clamp(26px,3.5vw,36px);margin:0 0 6px;font-weight:700;letter-spacing:-.01em}
.group-header p{color:var(--ink-soft);margin:0;max-width:62ch}

/ Cards /
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px}
.cards.single{grid-template-columns:1fr}
.card{
  background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);
  padding:22px;display:flex;flex-direction:column;gap:14px;
  transition:transform .25s,box-shadow .25s,border-color .25s;
  box-shadow:var(--shadow-sm);position:relative;overflow:hidden;
}
.card::before{
  content:"";position:absolute;inset:auto -30% -30% auto;width:180px;height:180px;
  background:radial-gradient(circle,var(--accent-soft),transparent 70%);
  opacity:0;transition:opacity .3s;pointer-events:none;
}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow-md);border-color:var(--accent-soft)}
.card:hover::before{opacity:.7}
.card.wide{
  flex-direction:row;gap:32px;padding:32px;align-items:center;
}
.card.wide .card-media{flex:0 0 40%;aspect-ratio:1/1}
.card.wide .card-body{flex:1;display:flex;flex-direction:column;gap:14px}
.card-media{
  aspect-ratio:4/3;background:var(--bg-alt);border-radius:14px;
  display:flex;align-items:center;justify-content:center;overflow:hidden;
  position:relative;
}
.card-media img{max-height:82%;max-width:82%;width:auto;height:auto;transition:transform .4s ease, opacity .25s ease}
.card:hover .card-media img{transform:scale(1.06)}
.card h4{font-family:var(--font-display);font-size:22px;margin:0;font-weight:700;letter-spacing:-.01em}
.card p{margin:0;color:var(--ink-soft);font-size:15px;line-height:1.55}
.card-tag{
  display:inline-block;font-size:11px;letter-spacing:.14em;text-transform:uppercase;
  color:var(--accent);font-weight:700;
}
.design-list{margin:8px 0 0;padding:0;list-style:none;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.design-list li{position:relative;padding-left:22px;font-size:15px;color:var(--ink-soft)}
.design-list li::before{content:"◆";position:absolute;left:0;top:0;color:var(--accent);font-size:12px}

/ Hero band /
.hero-band{background:var(--bg-band);color:#f7efe5;padding:clamp(40px,7vw,80px) clamp(16px,4vw,40px)}
.hero-band-inner{max-width:var(--maxw);margin:0 auto;display:grid;grid-template-columns:.7fr 1fr;gap:48px;align-items:center}
.hero-band-figure{margin:0;display:flex;justify-content:flex-start}
.hero-band-figure img{max-height:380px;width:auto;border-radius:var(--radius-lg);filter:drop-shadow(0 18px 40px rgba(0,0,0,.4))}
.hero-band-quote{margin:0;font-family:var(--font-display);font-size:clamp(22px,2.8vw,30px);line-height:1.3;font-style:italic;color:#fbf6ef}
.hero-band-quote cite{display:block;margin-top:18px;font-style:normal;font-size:14px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-soft)}

/ Contact /
.contact{
  background:linear-gradient(180deg,var(--bg-alt),var(--bg));
  border-top:1px solid var(--line);
}
.contact-inner{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.contact-channels{display:grid;gap:12px;margin-top:24px}
.channel{
  display:flex;gap:14px;align-items:center;
  background:var(--paper);padding:16px 18px;border:1px solid var(--line);
  border-radius:14px;transition:transform .2s,border-color .2s,box-shadow .2s;
}
.channel:hover{transform:translateY(-2px);border-color:var(--accent);box-shadow:var(--shadow-sm)}
.channel .icon{font-size:22px}
.channel .text{display:flex;flex-direction:column;line-height:1.2}
.channel .label{font-size:11px;color:var(--ink-mute);text-transform:uppercase;letter-spacing:.12em;font-weight:700;margin-bottom:4px}
.channel .value{font-weight:600;color:var(--ink);font-size:15px}
.contact-form{
  background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);
  padding:28px;display:flex;flex-direction:column;gap:14px;box-shadow:var(--shadow-sm);
}
.contact-form label{display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:600;color:var(--ink-soft)}
.contact-form input,.contact-form textarea{
  font-family:inherit;font-size:15px;
  padding:11px 14px;border:1px solid var(--line);border-radius:10px;
  background:var(--bg-alt);color:var(--ink);
  transition:border-color .2s,background .2s;
}
.contact-form input:focus,.contact-form textarea:focus{outline:none;border-color:var(--accent);background:#fff}
.contact-form .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.contact-form .btn{align-self:flex-start;margin-top:6px}
.form-note{font-size:12px;color:var(--ink-mute);margin:6px 0 0}

/ Footer /
.site-footer{
  background:var(--ink);color:#e9dccc;
  padding:36px clamp(16px,4vw,40px);
}
.footer-inner{max-width:var(--maxw);margin:0 auto;display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;align-items:center}
.site-footer .brand-mark{font-size:24px;margin-right:8px}
.site-footer .brand-name{color:#fbf6ef;font-family:var(--font-display)}
.site-footer small{color:#a1a8b2;font-size:13px}

/ Reveal /
.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}
.http://reveal.is-visible{opacity:1;transform:none}

/ Responsive /
@media (max-width:980px){
  .hero-band-inner{grid-template-columns:1fr;text-align:center}
  .hero-band-figure{justify-content:center}
}
@media (max-width:880px){
  .primary-nav{display:none;position:absolute;top:100%;left:0;right:0;background:var(--paper);
    flex-direction:column;align-items:flex-start;padding:18px clamp(16px,4vw,40px);border-bottom:1px solid var(--line);gap:14px}
  .http://primary-nav.is-open{display:flex}
  .menu-toggle{
    display:inline-flex;flex-direction:column;justify-content:center;gap:5px;
    width:42px;height:42px;border-radius:999px;border:1px solid var(--line);
    background:var(--paper);cursor:pointer;
  }
  .menu-toggle span{display:block;width:18px;height:2px;background:var(--ink);border-radius:2px;margin:0 auto;transition:transform .2s, opacity .2s}
  .menu-toggle[aria-expanded="true"] span:nth-child(1){transform:translateY(7px) rotate(45deg)}
  .menu-toggle[aria-expanded="true"] span:nth-child(2){opacity:0}
  .menu-toggle[aria-expanded="true"] span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
  .lang-switch{order:3}
  .hero-inner{grid-template-columns:1fr;text-align:center}
  .hero-cta{justify-content:center}
  .hero-badges{justify-content:center}
  .hero-figure img{max-height:420px}
  .group-header{flex-direction:column;gap:8px}
  .card.wide{flex-direction:column}
  .card.wide .card-media{flex:0 0 auto;width:100%}
  .contact-inner{grid-template-columns:1fr}
}
@media (max-width:520px){
  .contact-form .form-row{grid-template-columns:1fr}
  .hero-title .display{font-size:38px}
}
@media (prefers-reduced-motion:reduce){
  {transition:none!important;animation:none!important}
  html{scroll-behavior:auto}
}

## 📋 Отчёт по сайту

### Концепция

**«Sousedský tón · теплый macchiato»** — дружелюбный лендинг в кремово-терракотовой палитре, выдержанный в духе соседского разговора за чашкой кофе. Основные идеи:

- **Соседское доверие вместо давления.** Все CTA обещают бесплатный выезд, бесплатную первую диагностику и «без предплатного».
- **12 услуг в 4 блоках** с кодами секций 1.1 — 4, как в исходном [Computer services](https://www.notion.so/Computer-services-3614fe82e7d48078b4dbee99a13ea49e?pvs=21).
- **Образ мастера появляется дважды**: в hero-блоке и в тёмной «кофейной» полосе с цитатой посреди лендинга.
- **Hero и каждая карточка** имеют hover-эффект `slug--main.png` → `slug--hover.png` с предзагрузкой второго изображения через `new Image()`.
- **Мультиязычность** реализована через ключи `data-i18n` и словари в `scripts/i18n.js`. Основной язык — `cs`, второй — `en`. Выбор языка сохраняется в `localStorage`.
- **Микровзаимодействия**: плавный reveal через `IntersectionObserver`, marquee-полоса с выгодами, hover-подсветка карточек radial gradient'ом, мобильное «бургер»-меню.
- **Доступность**: skip-link, `:focus-visible`, ARIA-подписи у языкового переключателя и меню, поддержка `prefers-reduced-motion`.

### Палитра и типографика

- Фон `#f7efe5` (крем), вторичный `#fbf6ef`, тёмная полоса `#1f2933`.
- Акцент `#c2410c` (терракота) и поддержка `#fed7aa`.
- Шрифты: **Fraunces** (заголовки, italic-kicker, цифры 01–04) и **Inter** (тело). Подключены бесплатно через Google Fonts.

## 📁 Сборка

Структура папки:

```
pocitacovy-soused/
  index.html              ← свойство Html
  styles/
    main.css              ← свойство Styles
  scripts/
    i18n.js               ← первый блок свойства Scripts
    main.js               ← второй блок свойства Scripts
  img/
    hero--main.png ...    ← пары изображений из Main images
  package.json            ← из свойства Other
  vercel.json             ← из свойства Other
  robots.txt              ← из свойства Other
  manifest.webmanifest    ← из свойства Other
```

Шаги:

1. Скопируйте содержимое свойства **Html** в файл `index.html`.
2. Скопируйте свойство **Styles** в `styles/main.css`.
3. Свойство **Scripts** разбейте по маркерам `=== имя файла ===` в два файла в папке `scripts/`.
4. Свойство **Other** содержит конфиги и README к папке изображений — разложите их по тем же именам.
5. Скачайте из [Main images](https://www.notion.so/Main-images-3614fe82e7d4800891eacef2c9d4ab58?pvs=21) все 24 PNG и переименуйте их в формат `slug--main.png` / `slug--hover.png` (полный список — в `img/README.md`).
6. Локальный просмотр: при установленном Node.js выполните `npm start` — поднимет `npx serve .` и откроет статику в браузере.

### Важно про HTML в свойстве

Notion при сохранении текстового свойства автоматически парсит некоторые HTML-теги (особенно `<span class="...">`). Если после копирования HTML в файл вы заметите, что у вас «съело» открывающие `<span>` рядом со закрывающими `</span>` (например, в шапке `.brand-text`, в `.hero-title .kicker/.display`, в `.hero-badges li`, в `.channel .text` и т. п.) — добавьте недостающие открывающие теги вручную, ориентируясь на пары `</span>`. Все остальное (CSS / JS / конфиги) сохранено в свойствах без потерь.

### Мультиязычность

Словари языков находятся в `scripts/i18n.js` под глобальным объектом `window.I18N`. Чтобы добавить, например, немецкий:

1. В объект `window.I18N` добавьте ключ `de` с переведёнными значениями тех же ключей.
2. В `index.html` в блоке `.lang-switch` добавьте кнопку `<button type="button" data-lang="de">DE</button>`.
3. Больше менять ничего не нужно — `main.js` сам подхватит новый язык, сохранит выбор в `localStorage` и переключит все элементы с `data-i18n`.

## 🚀 Развёртывание на Vercel

1. Зарегистрируйтесь на [vercel.com](http://vercel.com) — бесплатно через GitHub / GitLab / e-mail.
2. Создайте новый проект одним из способов:
    - **Вариант А (быстрый).** Установите Vercel CLI (`npm i -g vercel`), в папке проекта выполните `vercel`, затем `vercel --prod`.
    - **Вариант Б (рекомендуемый).** Залейте папку в GitHub-репозиторий. В Vercel нажмите **Add New → Project**, выберите репозиторий и оставьте настройки по умолчанию (Framework — *Other*, Build Command — пусто, Output Directory — пусто).
3. После первого деплоя в разделе *Domains* добавьте свой домен (например `pocitacovysoused.cz`) или оставьте бесплатный `*.vercel.app`.
4. При подключении собственного домена Vercel покажет нужные DNS-записи (обычно `A`/`CNAME`); пропишите их у регистратора.
5. Проверьте, что сайт открывается, hover-эффекты работают, языковой переключатель переводит тексты, форма ведёт на FormSubmit или ваш собственный mailto.

### Альтернативные хостинги

- **Netlify**: drag-and-drop папки в *Sites*. Настройки не нужны.
- **Cloudflare Pages**: создать проект «Direct Upload», выбрать папку.
- **GitHub Pages**: включить в настройках репозитория *Pages → main branch / root*.

## ✅ Чек-лист проверки

- Все 12 услуг присутствуют в 4 разделах (1.1–1.4, 2.1–2.3, 3.1–3.4, 4).
- Каждая карточка ссылается на `./img/<slug>--main.png` и `./img/<slug>--hover.png` со слугами из `Main images`.
- Hero использует пару `hero--main.png` / `hero--hover.png`.
- В блоке контактов работают `mailto:`, `tel:`, ссылки на WhatsApp и Telegram (замените номер и ник на свои).
- Языковой переключатель `CS / EN` меняет язык всех текстовых элементов с `data-i18n` и сохраняет выбор в `localStorage`.
- Responsive-вёрстка проверена на брейкпойнтах 980 / 880 / 520 px; на узких экранах работает «бургер»-меню.

> Если что-то не сработает после копирования из свойств — большая часть проблем сводится к восстановлению открывающих `<span>` тегов в HTML (см. раздел выше). Всё остальное (CSS / JS / конфиги) сохранено в свойствах без потерь.
>