# Klidný dům — тёплый домашний макет

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#FAF7F2">
<title>Klidná počítačová pomoc — výjezd k vám domů</title>
<meta name="description" content="Výjezdový mistr počítačových služeb v Česku. První návštěva a diagnostika zdarma. Péče o počítač, bezpečnost, učení a design.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./styles.css">
</head>
<body>
<a class="skip" href="#main">Přeskočit na obsah</a>

<header class="site-header" id="top">
  <div class="container header-inner">
    <a href="#top" class="brand" aria-label="Klidný mistr — úvod">
      ⌂
      Klidný mistr
    </a>
    <nav class="site-nav" aria-label="Hlavní navigace">
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
      <a href="#learning" data-i18n="nav.learning">Učení</a>
      <a href="#design" data-i18n="http://nav.design">Design</a>
      <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
    <div class="header-right">
      <div class="lang-switch" role="group" aria-label="Jazyk / Language">
        <button class="lang-btn is-active" data-lang="cs" type="button" aria-pressed="true">CS</button>
        <button class="lang-btn" data-lang="en" type="button" aria-pressed="false">EN</button>
      </div>
      <button class="nav-toggle" aria-label="Otevřít menu" aria-expanded="false" type="button">
        
      </button>
    </div>
  </div>
</header>

<main id="main">
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero-grid">
      <div class="hero-copy" data-reveal>
        <p class="eyebrow" data-i18n="hero.eyebrow">Výjezd k vám domů · diagnostika zdarma</p>
        <h1 id="hero-title" data-i18n="main">Počítačová pomoc přijede k vám — klid začíná doma.</h1>
        <p class="lead" data-i18n="hero.lead">První příjezd a diagnostika jsou zdarma. Platíte jen za práci a díly.</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#contact" data-i18n="hero.ctaPrimary">Nezávazně poptat</a>
          <a class="btn btn-ghost" href="#services" data-i18n="hero.ctaSecondary">Prohlédnout služby</a>
        </div>
        <ul class="hero-badges">
          <li>Diagnostika zdarma</li>
          <li>Bez spěchu a lidsky</li>
          <li>Vlastní auto, dochvilnost</li>
        </ul>
      </div>
      <figure class="hero-figure" data-reveal>
        <div class="hero-img-wrap">
          <img class="img-main" src="./img/hero--main.png" alt="Mistr — domácí pomocník" loading="eager" width="370" height="790">
          <img class="img-hover" src="./img/hero--hover.png" alt="" aria-hidden="true" width="370" height="790">
        </div>
        <figcaption class="hero-caption" data-i18n="hero.caption">Domácí mistr, který vysvětluje lidsky.</figcaption>
      </figure>
    </div>
  </section>

  <section id="services" class="services" aria-label="Služby">
    <div class="container">

      <div class="cat" id="care" data-reveal>
        <header class="cat-head">
          01
          <h2 data-i18n="http://cat.care">Péče o počítač</h2>
          <p data-i18n="cat.careLead">Údržba, modernizace a klidné řešení potíží.</p>
        </header>
        <div class="cards">
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/cleaning--main.png" alt="Čištění počítače" loading="lazy" width="310" height="310">
              <img class="img-hover" src="./img/cleaning--hover.png" alt="" aria-hidden="true" width="310" height="310">
            </div>
            <div class="card-body">
              1.1
              <h3 data-i18n="http://srv.cleaning.title">Čištění a chlazení</h3>
              <p data-i18n="cleaning"></p>
            </div>
          </article>
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/upgrade--main.png" alt="Modernizace" loading="lazy" width="320" height="340">
              <img class="img-hover" src="./img/upgrade--hover.png" alt="" aria-hidden="true" width="320" height="340">
            </div>
            <div class="card-body">
              1.2
              <h3 data-i18n="srv.upgrade.title">Modernizace komponent</h3>
              <p data-i18n="upgrade"></p>
            </div>
          </article>
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/software--main.png" alt="Software" loading="lazy" width="350" height="300">
              <img class="img-hover" src="./img/software--hover.png" alt="" aria-hidden="true" width="350" height="300">
            </div>
            <div class="card-body">
              1.3
              <h3 data-i18n="http://srv.software.title">Software a Windows</h3>
              <p data-i18n="software"></p>
            </div>
          </article>
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/repair--main.png" alt="Oprava" loading="lazy" width="300" height="286">
              <img class="img-hover" src="./img/repair--hover.png" alt="" aria-hidden="true" width="300" height="286">
            </div>
            <div class="card-body">
              1.4
              <h3 data-i18n="http://srv.repair.title">Oprava a férové ocenění</h3>
              <p data-i18n="repair"></p>
            </div>
          </article>
        </div>
      </div>

      <div class="cat" id="security" data-reveal>
        <header class="cat-head">
          02
          <h2 data-i18n="http://cat.security">Bezpečnost domova</h2>
          <p data-i18n="cat.securityLead">Kamery, alarm a chytrá domácnost s lidským návodem.</p>
        </header>
        <div class="cards">
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/webcam--main.png" alt="Web-kamera" loading="lazy" width="220" height="290">
              <img class="img-hover" src="./img/webcam--hover.png" alt="" aria-hidden="true" width="220" height="290">
            </div>
            <div class="card-body">
              2.1
              <h3 data-i18n="http://srv.webcam.title">Web-kamery</h3>
              <p data-i18n="webcam"></p>
            </div>
          </article>
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/alarm--main.png" alt="Domácí alarm" loading="lazy" width="360" height="280">
              <img class="img-hover" src="./img/alarm--hover.png" alt="" aria-hidden="true" width="360" height="280">
            </div>
            <div class="card-body">
              2.2
              <h3 data-i18n="srv.alarm.title">Domácí alarm</h3>
              <p data-i18n="alarm"></p>
            </div>
          </article>
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/appliances--main.png" alt="Chytrá domácnost" loading="lazy" width="290" height="290">
              <img class="img-hover" src="./img/appliances--hover.png" alt="" aria-hidden="true" width="290" height="290">
            </div>
            <div class="card-body">
              2.3
              <h3 data-i18n="srv.appliances.title">Chytrá domácnost</h3>
              <p data-i18n="appliances"></p>
            </div>
          </article>
        </div>
      </div>

      <div class="cat" id="learning" data-reveal>
        <header class="cat-head">
          03
          <h2 data-i18n="cat.learning">Učení a doučování</h2>
          <p data-i18n="cat.learningLead">Pro dospělé i pro děti — klidně, bez stresu.</p>
        </header>
        <div class="cards">
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/literacy--main.png" alt="Počítačová gramotnost" loading="lazy" width="320" height="290">
              <img class="img-hover" src="./img/literacy--hover.png" alt="" aria-hidden="true" width="320" height="290">
            </div>
            <div class="card-body">
              3.1
              <h3 data-i18n="srv.literacy.title">Počítačová gramotnost</h3>
              <p data-i18n="literacy"></p>
            </div>
          </article>
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/tutor--main.png" alt="Doučování informatiky" loading="lazy" width="370" height="310">
              <img class="img-hover" src="./img/tutor--hover.png" alt="" aria-hidden="true" width="370" height="310">
            </div>
            <div class="card-body">
              3.2
              <h3 data-i18n="srv.tutor.title">Doučování informatiky</h3>
              <p data-i18n="tutor"></p>
            </div>
          </article>
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/chess--main.png" alt="Šachy" loading="lazy" width="330" height="320">
              <img class="img-hover" src="./img/chess--hover.png" alt="" aria-hidden="true" width="330" height="320">
            </div>
            <div class="card-body">
              3.3
              <h3 data-i18n="srv.chess.title">Šachy a logika</h3>
              <p data-i18n="chess"></p>
            </div>
          </article>
          <article class="card">
            <div class="card-media">
              <img class="img-main" src="./img/development--main.png" alt="AI pro děti" loading="lazy" width="320" height="320">
              <img class="img-hover" src="./img/development--hover.png" alt="" aria-hidden="true" width="320" height="320">
            </div>
            <div class="card-body">
              3.4
              <h3 data-i18n="srv.development.title">AI pro děti</h3>
              <p data-i18n="development"></p>
            </div>
          </article>
        </div>
      </div>

      <div class="cat" id="design" data-reveal>
        <header class="cat-head">
          04
          <h2 data-i18n="http://cat.design">Grafika a malé weby</h2>
          <p data-i18n="cat.designLead">Letáky, jednoduché weby a vizuály pro malé podnikání.</p>
        </header>
        <div class="cards cards-one">
          <article class="card card-wide">
            <div class="card-media">
              <img class="img-main" src="./img/design--main.png" alt="Design" loading="lazy" width="310" height="310">
              <img class="img-hover" src="./img/design--hover.png" alt="" aria-hidden="true" width="310" height="310">
            </div>
            <div class="card-body">
              4
              <h3 data-i18n="http://srv.design.title">Grafika a weby</h3>
              <p data-i18n="design"></p>
            </div>
          </article>
        </div>
      </div>

    </div>
  </section>

  <section id="contact" class="contact" aria-labelledby="contact-title" data-reveal>
    <div class="container contact-grid">
      <div class="contact-copy">
        <p class="eyebrow" data-i18n="contact.eyebrow">Kontakt</p>
        <h2 id="contact-title" data-i18n="contact.title">Pojďme si nezávazně promluvit.</h2>
        <p class="lead" data-i18n="contact">Napište nebo zavolejte, když vám technika bere klid.</p>
        <ul class="contact-list">
          <li><a href="mailto:mistr@klidny-mistr.cz" data-i18n="http://contact.email">Napsat e-mail</a></li>
          <li><a href="tel:+420777123456" data-i18n="http://contact.phone">Zavolat: +420 777 123 456</a></li>
          <li><a href="https://wa.me/420777123456" target="_blank" rel="noopener" data-i18n="contact.whatsapp">WhatsApp</a></li>
          <li><a href="https://t.me/klidny_mistr" target="_blank" rel="noopener" data-i18n="contact.telegram">Telegram</a></li>
        </ul>
      </div>
      <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST" novalidate>
        <label>
          Vaše jméno
          <input name="name" type="text" required autocomplete="name">
        </label>
        <label>
          E-mail nebo telefon
          <input name="contact" type="text" required autocomplete="email">
        </label>
        <label>
          S čím vám mohu pomoci?
          <textarea name="message" rows="4" required></textarea>
        </label>
        <button class="btn btn-primary" type="submit" data-i18n="contact.formSubmit">Odeslat poptávku</button>
        <p class="form-note" data-i18n="contact.formNote">Bez závazku. Ozvu se obvykle týž den.</p>
      </form>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container footer-inner">
    <p data-i18n="footer.tagline">Klidná počítačová pomoc s výjezdem k vám domů.</p>
    <p class="muted">©  Klidný mistr · Všechna práva vyhrazena.</p>
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
      "source": "/(.\.(?:png|jpg|jpeg|webp|svg|ico|woff2?))",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.\.(?:html|css|js))",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }
      ]
    }
  ]
}

=== robots.txt ===
User-agent: *
Allow: /

=== manifest.webmanifest ===
{
  "name": "Klidný mistr — počítačová pomoc",
  "short_name": "Klidný mistr",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#FAF7F2",
  "theme_color": "#FAF7F2",
  "icons": []
}

=== http://README.md ===
# Klidný mistr — статический сайт

Лёгкий, адаптивный, мультиязычный сайт выездного компьютерного мастера. Только статика — HTML, CSS, JS. Готов к деплою на Vercel/Netlify/GitHub Pages/Cloudflare Pages.

## Структура


klidny-dum/
├── index.html
├── styles.css
├── i18n.js
├── main.js
├── vercel.json
├── robots.txt
├── manifest.webmanifest
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


## Локальный просмотр

sh
npx serve .
# или
python3 -m http.server 8080


Откройте http://localhost:8080.

## Деплой на Vercel

1. Создайте Git-репозиторий и закоммитьте папку.
2. На http://vercel.com → Add New → Project → Import репозиторий.
3. Framework Preset: Other. Build Command: (пусто). Output Directory: (пусто, корень).
4. Deploy.

## Перед публикацией

Замените в index.html контактные заглушки:
- mailto:mistr@klidny-mistr.cz
- tel:+420777123456
- https://wa.me/420777123456
- https://t.me/klidny_mistr
- https://formspree.io/f/your-form-id

Scripts: === i18n.js ===
window.I18N = {
  cs: {
    "http://nav.care": "Péče",
    "http://nav.security": "Bezpečnost",
    "nav.learning": "Učení",
    "http://nav.design": "Design",
    "http://nav.contact": "Kontakt",

    "hero.eyebrow": "Výjezd k vám domů · diagnostika zdarma",
    "hero.lead": "První příjezd a diagnostika jsou zdarma. Platíte jen za práci a díly.",
    "hero.ctaPrimary": "Nezávazně poptat",
    "hero.ctaSecondary": "Prohlédnout služby",
    "hero.badge1": "Diagnostika zdarma",
    "hero.badge2": "Bez spěchu a lidsky",
    "hero.badge3": "Vlastní auto, dochvilnost",
    "hero.caption": "Domácí mistr, který vysvětluje lidsky.",

    "http://cat.care": "Péče o počítač",
    "cat.careLead": "Údržba, modernizace a klidné řešení potíží.",
    "http://cat.security": "Bezpečnost domova",
    "cat.securityLead": "Kamery, alarm a chytrá domácnost s lidským návodem.",
    "cat.learning": "Učení a doučování",
    "cat.learningLead": "Pro dospělé i pro děti — klidně, bez stresu.",
    "http://cat.design": "Grafika a malé weby",
    "cat.designLead": "Letáky, jednoduché weby a vizuály pro malé podnikání.",

    "http://srv.cleaning.title": "Čištění a chlazení",
    "srv.upgrade.title": "Modernizace komponent",
    "http://srv.software.title": "Software a Windows",
    "http://srv.repair.title": "Oprava a férové ocenění",
    "http://srv.webcam.title": "Web-kamery",
    "srv.alarm.title": "Domácí alarm",
    "srv.appliances.title": "Chytrá domácnost",
    "srv.literacy.title": "Počítačová gramotnost",
    "srv.tutor.title": "Doučování informatiky",
    "srv.chess.title": "Šachy a logika",
    "srv.development.title": "AI pro děti",
    "http://srv.design.title": "Grafika a weby",

    "main": "Počítačová pomoc přijede k vám — klid začíná doma.",
    "cleaning": "Když se notebook v létě rozpálí tak, že skoro vzlétne, práce i učení přestanou být příjemné. Přijedu k vám domů zdarma a první kontrolu udělám také zdarma, abych zjistil, jestli počítači nevadí prach, špína nebo vyschlá teplovodivá pasta. Po vyčištění bývá technika tišší, stabilnější a příjemnější na používání. Je to obyčejná péče, která může počítači prodloužit život a vám ušetřit nervy.",
    "upgrade": "Když počítač dlouho přemýšlí nad každým kliknutím, nemusíte hned kupovat nový. Někdy stačí přidat rychlejší paměť, vyměnit starý disk nebo vybrat novou baterii do notebooku. Přijedu zdarma, podívám se na stav zařízení a lidsky vysvětlím, co má smysl měnit a co je lepší nechat být. Získáte svižnější techniku bez zbytečných nákupů a bez hádání.",
    "software": "Vyskakují okna, internet se ztrácí, Windows se vleče a potřebný program nejde spustit? Pomohu dát počítač do pořádku: uklidím zbytečnosti, nastavím systém a nainstaluji programy pro práci, školu, odpočinek i hry. Přijedu k vám domů zdarma a nejdřív zdarma zjistím, kde je skutečný problém. Počítač zase budete používat v klidu, bez pocitu, že si žije vlastním životem.",
    "repair": "Když se počítač nebo notebook nezapne, nespěchejte s cestou do sběrného dvora. Někdy pomůže výměna jedné součástky a někdy se dá zařízení férově využít na náhradní díly. Přijedu zdarma, provedu bezplatnou první diagnostiku a upřímně řeknu, jestli má oprava smysl. Rozhodnete se v klidu, bez tlaku a bez zbytečných výdajů.",
    "webcam": "Chcete vidět, co se děje doma, u dveří, v garáži nebo na chalupě, když jste pryč? Pomohu připojit domácí i venkovní kamery a ukážu vám, jak obraz sledovat v telefonu. Díky bezplatnému příjezdu a první diagnostice zdarma zjistíme, kam kameru nejlépe umístit a jestli váš internet stačí. Domov tak zůstane blíž, i když jste v práci nebo na cestách.",
    "alarm": "Někdy klid začíná jednoduchou otázkou: co když se někdo pokusí otevřít dveře? Nainstaluji a nastavím domácí alarm s hlasitou sirénou a upozorněním do telefonu, aby byt, garáž nebo chalupa byly pod dohledem. Nejdřív přijedu zdarma a zdarma se podívám, jaké řešení se hodí právě k vám. Budete se cítit jistěji, aniž by se z domova stala složitá technická pevnost.",
    "appliances": "Chytrá televize, žárovky, zásuvky nebo další zařízení mají pomáhat, ne rozčilovat. Nastavím aplikaci, připojím techniku a ukážu vám používání obyčejnou lidskou řečí. Přijedu k vám domů zdarma a zdarma zkontroluji, co už máte a jak to nejlépe propojit. Telefon se pak stane pohodlným ovladačem domácnosti, ne zdrojem dalších otázek.",
    "literacy": "Jestli vám počítač připadá složitý, není to vaše chyba – jen ho někdo musí vysvětlit pomalu a bez spěchu. Naučím vás používat základní programy, internet, moderní služby i umělou inteligenci pro běžné úkoly. Výuka může probíhat doma, v klidném známém prostředí, bez stresu a studu. Krok za krokem se z techniky stane nástroj, ne překážka.",
    "tutor": "Když dítě nerozumí informatice, nestačí jen vyřešit úkol – potřebuje pochopit logiku. Pomohu se školní látkou, domácími úkoly i základy programování bez tlaku a strašení. Díky zkušenostem z IT a výuky umím složité věci vysvětlit na jednoduchých příkladech ze života. Dítě tak získá nejen lepší známku, ale i jistotu před budoucími technologiemi.",
    "chess": "Šachy nejsou jen hra, ale klidný trénink pozornosti, trpělivosti a přemýšlení o několik tahů dopředu. Pokud je pro dítě těžké soustředit se nebo chcete rozvíjet logiku, šachové lekce mohou být užitečnou i zábavnou cestou. Vysvětluji bez suché teorie, přes partie, chyby a malé výhry. Dítě se učí přemýšlet, radovat z pokroku a přijímat prohru s klidem.",
    "development": "Umělá inteligence už je kolem nás a děti se s ní potřebují naučit pracovat jako s pomocníkem, ne jen jako s hračkou. Ukážu, jak se správně ptát, ověřovat odpovědi, chápat složitá témata a dělat domácí úkoly poctivěji i chytřeji. Lekce mohou být zajímavým volnočasovým objevováním nebo podporou ke škole. Dítě získá dovednost, která se hodí mnohem víc než jen v hodině informatiky.",
    "design": "Potřebujete leták, jednoduchý web, katalog služeb nebo hezký vizuál pro malé podnikání? Pomohu vaši myšlenku upravit tak, aby se dala s radostí ukázat zákazníkům, sousedům i partnerům. Technickou část vysvětlím jednoduše a nejdřív zdarma probereme, co opravdu potřebujete. Dobrý design udělá vaši nabídku srozumitelnější a viditelnější bez zbytečné okázalosti.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Pojďme si nezávazně promluvit.",
    "contact": "Napište nebo zavolejte, když vám technika bere klid. Nejdřív se podíváme, co je potřeba, a první diagnostika je zdarma.",
    "http://contact.email": "Napsat e-mail",
    "http://contact.phone": "Zavolat: +420 777 123 456",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",
    "contact.formName": "Vaše jméno",
    "contact.formEmail": "E-mail nebo telefon",
    "contact.formMessage": "S čím vám mohu pomoci?",
    "contact.formSubmit": "Odeslat poptávku",
    "contact.formNote": "Bez závazku. Ozvu se obvykle týž den.",

    "footer.tagline": "Klidná počítačová pomoc s výjezdem k vám domů.",
    "footer.rights": "Všechna práva vyhrazena."
  },
  en: {
    "http://nav.care": "Care",
    "http://nav.security": "Security",
    "nav.learning": "Learning",
    "http://nav.design": "Design",
    "http://nav.contact": "Contact",

    "hero.eyebrow": "Home visit · free diagnostics",
    "hero.lead": "First visit and diagnostics are free. You only pay for work and parts.",
    "hero.ctaPrimary": "Request a visit",
    "hero.ctaSecondary": "See services",
    "hero.badge1": "Free diagnostics",
    "hero.badge2": "Calm and human",
    "hero.badge3": "Own car, on time",
    "hero.caption": "A home master who explains in plain language.",

    "http://cat.care": "Computer care",
    "cat.careLead": "Maintenance, upgrades and calm troubleshooting.",
    "http://cat.security": "Home security",
    "cat.securityLead": "Cameras, alarm and smart home with guidance.",
    "cat.learning": "Learning & tutoring",
    "cat.learningLead": "For adults and kids — calmly, without stress.",
    "http://cat.design": "Design & small websites",
    "cat.designLead": "Flyers, simple websites and visuals for small business.",

    "http://srv.cleaning.title": "Cleaning & cooling",
    "srv.upgrade.title": "Hardware upgrades",
    "http://srv.software.title": "Software & Windows",
    "http://srv.repair.title": "Repair & fair quote",
    "http://srv.webcam.title": "Web cameras",
    "srv.alarm.title": "Home alarm",
    "srv.appliances.title": "Smart home",
    "srv.literacy.title": "Computer literacy",
    "srv.tutor.title": "IT tutoring",
    "srv.chess.title": "Chess & logic",
    "srv.development.title": "AI for kids",
    "http://srv.design.title": "Graphics & websites",

    "main": "Calm computer help comes to you — peace begins at home.",
    "cleaning": "When a laptop heats up so much in summer that it almost takes off, work and study stop being pleasant. I come to your home for free and do the first check at no charge to find out whether dust, dirt or dried thermal paste are the problem. After cleaning, the device is usually quieter, more stable and nicer to use.",
    "upgrade": "When a computer thinks a long time over every click, you don't always need to buy a new one. Sometimes adding faster memory, replacing an old drive or picking a new laptop battery is enough. Free visit, calm explanation of what is worth changing and what is better left alone.",
    "software": "Pop-ups appearing, internet dropping, Windows slow, a needed program won't start? I'll tidy up the system, configure Windows and install programs for work, school, leisure or games. Free visit and free first diagnostics.",
    "repair": "When a computer or laptop won't start, don't rush it to the dump. Sometimes one part replacement is enough; sometimes the device can be reused for parts. Free visit, free first diagnostics, honest advice.",
    "webcam": "Want to see what's happening at home, by the door, in the garage or at the cottage when you're away? I connect indoor and outdoor cameras and show you how to watch them on your phone. Free visit and free assessment of placement and internet capacity.",
    "alarm": "Sometimes peace begins with a simple question: what if someone tries to open the door? I install and configure a home alarm with a loud siren and phone notifications for flat, garage or cottage. Free first visit, free assessment of what fits you.",
    "appliances": "Smart TV, bulbs, sockets or other devices should help, not annoy. I set up the app, connect the gear and explain usage in plain language. Free home visit and free check of what you already own.",
    "literacy": "If a computer feels complicated, it isn't your fault — someone just needs to explain it slowly and without rush. I'll teach you basic programs, internet, modern services and AI for everyday tasks at home, in a calm familiar place.",
    "tutor": "When a child doesn't understand IT, solving the task isn't enough — they need to grasp the logic. Help with school topics, homework and basics of programming without pressure, using simple real-life examples.",
    "chess": "Chess isn't just a game — it's calm training of attention, patience and thinking several moves ahead. Lessons through real games, mistakes and small wins; the child learns to think and accept losses gracefully.",
    "development": "AI is all around us and kids need to learn to use it as a helper, not just a toy. I show how to ask, verify answers, understand complex topics and do homework honestly and smarter.",
    "design": "Need a flyer, a simple website, a service catalogue or a tidy visual for a small business? I'll shape your idea so it's a pleasure to show to clients, neighbours and partners. The tech part explained simply.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk — no obligations.",
    "contact": "Write or call when technology steals your peace. First diagnostics is free.",
    "http://contact.email": "Send e-mail",
    "http://contact.phone": "Call: +420 777 123 456",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",
    "contact.formName": "Your name",
    "contact.formEmail": "E-mail or phone",
    "contact.formMessage": "How can I help you?",
    "contact.formSubmit": "Send request",
    "contact.formNote": "No obligations. I usually reply the same day.",

    "footer.tagline": "Calm computer help with home visits.",
    "footer.rights": "All rights reserved."
  }
};

=== main.js ===
(function () {
  var FALLBACK = "cs";
  var html = document.documentElement;

  function t(key, lang) {
    var dict = (window.I18N && window.I18N[lang]) || {};
    if (dict[key] != null) return dict[key];
    var fb = (window.I18N && window.I18N[FALLBACK]) || {};
    return fb[key] != null ? fb[key] : key;
  }

  function applyLang(lang) {
    html.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = t(key, lang);
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, value);
      else el.textContent = value;
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      var active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.dataset.lang); });
  });

  var initial = FALLBACK;
  try {
    var stored = localStorage.getItem("lang");
    if (stored && window.I18N && window.I18N[stored]) initial = stored;
  } catch (e) {}
  applyLang(initial);

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          http://e.target.classList.add("is-in");
          io.unobserve(http://e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll("[data-reveal]").forEach(function (el) { el.classList.add("is-in"); });
  }

  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

Styles: === styles.css ===
:root{
  --bg:#FAF7F2;
  --surface:#FFFFFF;
  --soft:#F1EADD;
  --ink:#1B1F23;
  --muted:#6B6F76;
  --line:rgba(27,31,35,.08);
  --accent:#2A6F6B;
  --accent-2:#E8865A;
  --shadow:0 10px 30px -16px rgba(27,31,35,.18);
  --shadow-strong:0 24px 60px -28px rgba(27,31,35,.32);
  --radius:18px;
  --radius-sm:12px;
  --max:1200px;
  --t:cubic-bezier(.22,.61,.36,1);
}
{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;
  background:var(--bg);
  color:var(--ink);
  font-size:17px;
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer}
.container{max-width:var(--max);margin:0 auto;padding:0 24px;width:100%}
.skip{position:absolute;left:-9999px;top:0;background:var(--ink);color:#fff;padding:10px 14px;border-radius:0 0 8px 0;z-index:99}
.skip:focus{left:0}

h1,h2,h3{font-family:"Plus Jakarta Sans",system-ui,sans-serif;color:var(--ink);margin:0;line-height:1.15;letter-spacing:-.01em}
h1{font-size:clamp(2.1rem,4.2vw + .5rem,3.6rem);font-weight:800}
h2{font-size:clamp(1.6rem,2.2vw + .4rem,2.4rem);font-weight:700}
h3{font-size:1.18rem;font-weight:700}
p{margin:0 0 .6em}

.eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  font-size:.78rem;font-weight:600;letter-spacing:.14em;
  text-transform:uppercase;color:var(--accent);
  background:rgba(42,111,107,.08);
  padding:6px 12px;border-radius:999px;margin:0 0 14px;
}

.btn{
  display:inline-flex;align-items:center;justify-content:center;
  padding:13px 22px;border-radius:14px;font-weight:600;font-size:.97rem;
  transition:transform .25s var(--t),box-shadow .25s var(--t),background .25s var(--t),color .25s var(--t),border-color .25s var(--t);
  border:1px solid transparent;cursor:pointer;
}
.btn-primary{background:var(--ink);color:#fff}
.btn-primary:hover{background:var(--accent);transform:translateY(-2px);box-shadow:var(--shadow)}
.btn-ghost{background:transparent;border-color:var(--line);color:var(--ink)}
.btn-ghost:hover{border-color:var(--ink);transform:translateY(-2px)}

.site-header{
  position:sticky;top:0;z-index:50;
  background:rgba(250,247,242,.85);
  -webkit-backdrop-filter:saturate(140%) blur(10px);
  backdrop-filter:saturate(140%) blur(10px);
  transition:box-shadow .3s var(--t),background .3s var(--t);
}
.http://site-header.is-scrolled{box-shadow:0 6px 20px -16px rgba(0,0,0,.2)}
.header-inner{display:flex;align-items:center;gap:20px;padding:14px 0;justify-content:space-between;position:relative}
.brand{display:flex;align-items:center;gap:10px;font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:1.05rem}
.brand-mark{display:inline-flex;width:32px;height:32px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent-2));color:#fff;align-items:center;justify-content:center;font-size:1.1rem}
.site-nav{display:flex;gap:6px}
.site-nav a{
  padding:9px 14px;border-radius:10px;font-weight:500;font-size:.96rem;
  transition:background .2s var(--t),color .2s var(--t);
}
.site-nav a:hover{background:var(--soft);color:var(--accent)}
.header-right{display:flex;align-items:center;gap:10px}
.lang-switch{display:flex;background:var(--soft);border-radius:999px;padding:3px}
.lang-btn{
  background:transparent;border:0;padding:7px 12px;border-radius:999px;
  font-weight:600;font-size:.82rem;color:var(--muted);letter-spacing:.04em;
  transition:background .2s var(--t),color .2s var(--t);
}
.http://lang-btn.is-active{background:#fff;color:var(--ink);box-shadow:0 1px 4px rgba(0,0,0,.06)}
.nav-toggle{display:none;flex-direction:column;gap:4px;background:transparent;border:0;padding:8px;border-radius:10px}
.nav-toggle span{display:block;width:22px;height:2px;background:var(--ink);border-radius:2px}

.hero{padding:64px 0 36px;position:relative;overflow:hidden}
.hero::before{
  content:"";position:absolute;inset:auto -10% -30% auto;
  width:520px;height:520px;border-radius:50%;
  background:radial-gradient(closest-side,rgba(232,134,90,.25),transparent 70%);
  filter:blur(8px);z-index:0;pointer-events:none;
}
.hero::after{
  content:"";position:absolute;inset:-25% auto auto -15%;
  width:520px;height:520px;border-radius:50%;
  background:radial-gradient(closest-side,rgba(42,111,107,.16),transparent 70%);
  filter:blur(8px);z-index:0;pointer-events:none;
}
.hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.15fr .9fr;gap:48px;align-items:center}
.hero-copy .lead{font-size:1.12rem;color:var(--muted);max-width:520px;margin-top:14px}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}
.hero-badges{
  list-style:none;padding:0;margin:28px 0 0;display:flex;flex-wrap:wrap;gap:18px;
  font-size:.92rem;color:var(--muted);
}
.hero-badges li{display:inline-flex;align-items:center;gap:8px}
.dot{width:6px;height:6px;background:var(--accent);border-radius:50%}

.hero-figure{margin:0;display:flex;flex-direction:column;align-items:center;gap:10px}
.hero-img-wrap{
  position:relative;width:min(370px,90%);aspect-ratio:370/790;
  border-radius:24px;overflow:hidden;
  background:linear-gradient(160deg,#fff,var(--soft));
  box-shadow:var(--shadow-strong);
}
.hero-img-wrap::after{
  content:"";position:absolute;inset:auto 0 0 0;height:38%;
  background:linear-gradient(to top,rgba(27,31,35,.18),transparent);pointer-events:none;
}
.hero-img-wrap .img-main,.hero-img-wrap .img-hover{
  position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
  transition:opacity .5s var(--t),transform 6s var(--t);
}
.hero-img-wrap .img-hover{opacity:0}
.hero-img-wrap:hover .img-hover{opacity:1}
.hero-img-wrap:hover .img-main{opacity:0}
.hero-caption{font-size:.86rem;color:var(--muted);text-align:center;max-width:300px;margin:0}

.services{padding:80px 0 40px}
.cat{margin-bottom:80px}
.cat-head{margin-bottom:32px;max-width:680px}
.cat-num{
  display:inline-block;font-family:"Plus Jakarta Sans",sans-serif;
  font-size:.78rem;letter-spacing:.18em;color:var(--accent-2);font-weight:700;
  margin-bottom:8px;
}
.cat-head h2{margin-bottom:10px}
.cat-head p{color:var(--muted);font-size:1.05rem;margin:0}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:22px;
}
.cards-one{grid-template-columns:1fr}
.card{
  background:var(--surface);
  border-radius:var(--radius);
  overflow:hidden;
  border:1px solid var(--line);
  transition:transform .4s var(--t),box-shadow .4s var(--t),border-color .4s var(--t);
  display:flex;flex-direction:column;
}
.card:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:rgba(42,111,107,.3)}
.card-wide{display:grid;grid-template-columns:.9fr 1.1fr;align-items:stretch}
.card-wide .card-media{aspect-ratio:auto;min-height:280px}
.card-wide .card-body{padding:32px}
.card-media{
  position:relative;aspect-ratio:4/3;overflow:hidden;
  background:linear-gradient(150deg,#FBF6EC,var(--soft));
}
.card-media .img-main,.card-media .img-hover{
  position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:18px;
  transition:opacity .5s var(--t),transform .8s var(--t);
}
.card-media .img-hover{opacity:0}
.card:hover .card-media .img-main{opacity:0;transform:scale(1.04)}
.card:hover .card-media .img-hover{opacity:1;transform:scale(1.04)}
.card-body{padding:22px 22px 26px}
.card-tag{
  font-size:.72rem;letter-spacing:.16em;font-weight:700;color:var(--accent);
  background:rgba(42,111,107,.1);padding:4px 8px;border-radius:6px;
  display:inline-block;margin-bottom:10px;
}
.card-body h3{margin:0 0 8px}
.card-body p{color:var(--muted);font-size:.96rem;margin:0}

.contact{padding:80px 0;background:linear-gradient(160deg,var(--soft),#FBF6EC 60%,#F4ECDC);border-radius:32px 32px 0 0;margin-top:40px}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.contact-copy .lead{color:var(--muted);max-width:480px}
.contact-list{list-style:none;padding:0;margin:18px 0 0;display:flex;flex-direction:column;gap:8px}
.contact-list a{
  display:inline-flex;align-items:center;gap:10px;
  padding:12px 14px;border-radius:12px;background:#fff;border:1px solid var(--line);
  font-weight:500;transition:transform .25s var(--t),border-color .25s var(--t),color .25s var(--t);
}
.contact-list a:hover{transform:translateX(4px);border-color:var(--accent);color:var(--accent)}
.contact-form{background:#fff;padding:28px;border-radius:var(--radius);box-shadow:var(--shadow);display:flex;flex-direction:column;gap:14px}
.contact-form label{display:flex;flex-direction:column;gap:6px;font-size:.9rem;font-weight:500;color:var(--muted)}
.contact-form input,.contact-form textarea{
  font:inherit;color:var(--ink);
  border:1px solid var(--line);border-radius:12px;
  padding:12px 14px;background:#FBFAF7;
  transition:border-color .2s var(--t),background .2s var(--t),box-shadow .2s var(--t);
  resize:vertical;
}
.contact-form input:focus,.contact-form textarea:focus{
  outline:none;border-color:var(--accent);background:#fff;
  box-shadow:0 0 0 4px rgba(42,111,107,.12);
}
.contact-form .btn{align-self:flex-start;margin-top:4px}
.form-note{margin:0;font-size:.84rem;color:var(--muted)}

.site-footer{padding:28px 0 40px;background:#FAF7F2}
.footer-inner{display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;color:var(--muted);font-size:.92rem}
.footer-inner p{margin:0}
.muted{color:var(--muted)}

[data-reveal]{opacity:0;transform:translateY(20px);transition:opacity .8s var(--t),transform .8s var(--t)}
[data-reveal].is-in{opacity:1;transform:none}

@media (prefers-reduced-motion:reduce){
  {transition:none !important;animation:none !important}
  [data-reveal]{opacity:1;transform:none}
  html{scroll-behavior:auto}
}

@media (max-width:960px){
  .hero{padding:48px 0 24px}
  .hero-grid{grid-template-columns:1fr;gap:32px}
  .hero-figure{order:-1}
  .hero-img-wrap{width:min(280px,80%);aspect-ratio:1/1.7}
  .contact-grid{grid-template-columns:1fr;gap:32px}
  .card-wide{grid-template-columns:1fr}
  .card-wide .card-media{min-height:0}
  .site-nav{
    position:absolute;top:100%;left:0;right:0;background:var(--bg);
    flex-direction:column;align-items:stretch;padding:14px;gap:4px;
    border-top:1px solid var(--line);
    transform:translateY(-6px);opacity:0;visibility:hidden;
    transition:transform .25s var(--t),opacity .2s var(--t),visibility .2s var(--t);
  }
  .http://site-nav.is-open{transform:none;opacity:1;visibility:visible}
  .site-nav a{padding:12px 14px}
  .nav-toggle{display:inline-flex}
}
@media (max-width:600px){
  body{font-size:16px}
  .services{padding:48px 0 24px}
  .cat{margin-bottom:56px}
  .contact{padding:56px 0}
  .hero{padding:32px 0 12px}
  .footer-inner{flex-direction:column;align-items:flex-start}
}

<aside>
🏡

Макет **«Klidný dům»** — тёплый, спокойный одностраничный сайт выездного компьютерного мастера. Основной язык — чешский, переключатель CS/EN в шапке. Все 12 услуг + герой собраны на одной странице с эффектом смены изображения при наведении.

</aside>

## Отчёт по сайту

### Концепция

«Klidný dům» (Спокойный дом) — отказ от агрессивного технологического визуала в пользу домашней эстетики. Cream-палитра, мягкая типографика, спокойные акценты глубокой бирюзы и тёплой терракоты. Ключевой смысловой угол совпадает с тоном текстов: техника не пугает, когда мастер приезжает домой и объясняет всё человеческим языком.

### Целевые устройства

- Mobile-first сетка, брейкпоинты 600 px и 960 px.
- Десктоп: hero в две колонки, услуги auto-fit гридом.
- Мобильный: одна колонка, выпадающее меню, увеличенные тапы.

### Ключевые приёмы дизайна

- CSS Grid и Flexbox для всей компоновки.
- Hover-смена `-main` → `-hover` для героя и всех 12 карточек.
- Радиальные свечения в hero через `radial-gradient` + blur без тяжёлых картинок.
- Sticky-шапка с `backdrop-filter: blur` и мягкой тенью на скролл.
- IntersectionObserver для плавного появления секций.
- `prefers-reduced-motion` отключает все анимации.
- Доступность: aria-атрибуты, alt-тексты, skip-link, фокусные обводки, контраст WCAG AA.

### Палитра

| Назначение | HEX |
| --- | --- |
| Фон (cream) | `#FAF7F2` |
| Surface | `#FFFFFF` |
| Soft (пергамент) | `#F1EADD` |
| Ink (текст) | `#1B1F23` |
| Muted | `#6B6F76` |
| Accent (бирюза) | `#2A6F6B` |
| Accent-2 (терракота) | `#E8865A` |

### Шрифты

- Заголовки — **Plus Jakarta Sans** (600/700/800).
- Текст — **Inter** (400/500/600).
- Google Fonts с `preconnect` и `display=swap`, fallback на системные стеки.

### Обоснование решений

- Светлый тёплый фон снижает напряжение — важно для взрослой аудитории услуги «компьютерная грамотность».
- Тёплые акценты поддерживают тон текстов ·»без давления«.
- Каждая карточка имеет код секции (1.1, 2.3…) — удобная привязка к структуре «Computer services».
- Несколько контактных каналов: `mailto:`, `tel:`, WhatsApp, Telegram и бесплатный Formspree.

## Инструкция по сборке

### Структура папок

```
klidny-dum/
├── index.html              ← свойство Html
├── styles.css              ← свойство Styles
├── i18n.js                 ← свойство Scripts (блок === i18n.js ===)
├── main.js                 ← свойство Scripts (блок === main.js ===)
├── vercel.json             ← свойство Other
├── robots.txt              ← свойство Other
├── manifest.webmanifest    ← свойство Other
├── README.md               ← свойство Other
└── img/
    ├── hero--main.png  / hero--hover.png
    ├── cleaning--main.png  / cleaning--hover.png
    ├── upgrade--main.png  / upgrade--hover.png
    ├── software--main.png  / software--hover.png
    ├── repair--main.png  / repair--hover.png
    ├── webcam--main.png  / webcam--hover.png
    ├── alarm--main.png  / alarm--hover.png
    ├── appliances--main.png  / appliances--hover.png
    ├── literacy--main.png  / literacy--hover.png
    ├── tutor--main.png  / tutor--hover.png
    ├── chess--main.png  / chess--hover.png
    ├── development--main.png  / development--hover.png
    └── design--main.png  / design--hover.png
```

### Как разложить файлы

1. Создайте папку `klidny-dum`.
2. **Html** → `index.html` в корень.
3. **Styles** → `styles.css` в корень.
4. **Scripts** содержит два блока, разделённых маркером `=== имя ===`. Сохраните каждый в отдельный файл (`i18n.js`, `main.js`).
5. **Other** содержит 4 файла (`vercel.json`, `robots.txt`, `manifest.webmanifest`, `README.md`). Разложите по маркерам.
6. Папка `./img` — все 26 PNG из базы **Main images** с точными именами `slug--main.png` и `slug--hover.png`.

### Переключение языков

- Словари живут в `i18n.js` (`window.I18N`): `cs` (основной) и `en` (демонстрационный).
- Кнопки **CS / EN** в шапке меняют текст во всех элементах с атрибутом `data-i18n`. Выбор сохраняется в `localStorage`.
- Чтобы добавить язык: скопируйте блок `cs`, переведите значения, добавьте кнопку `<button class="lang-btn" data-lang="xx">XX</button>` в `index.html`.

## Развёртывание на Vercel

1. Зарегистрируйтесь на [vercel.com](http://vercel.com) (бесплатный Hobby plan).
2. Подготовьте Git-репозиторий (GitHub / GitLab / Bitbucket) с папкой `klidny-dum`. Альтернатива — Vercel CLI: `npm i -g vercel && vercel deploy`.
3. В дашборде: **Add New → Project → Import Repository**.
4. **Framework Preset:** Other. **Build Command:** пусто. **Output Directory:** пусто (корень).
5. Нажмите **Deploy**. Через 10–30 секунд сайт будет доступен по адресу `your-project.vercel.app`.
6. Свой домен — **Settings → Domains → Add**. SSL выдаётся автоматически.
7. Проверьте: переключение языка, hover-эффект карточек, мобильную вёрстку, отправку формы.

**Альтернативы:** Netlify (drag-n-drop `klidny-dum` в интерфейс), GitHub Pages (любая ветка с корнем сайта), Cloudflare Pages (импорт Git-репо). Структура файлов и настройки сборки одинаковы.

## Чек-лист перед публикацией

- [x]  Все 12 услуг присутствуют и связаны с `slug--main.png` / `slug--hover.png`.
- [x]  Hero использует `hero--main.png` / `hero--hover.png`.
- [x]  Переключатель CS/EN с fallback на CS.
- [x]  Контакты: e-mail, телефон, WhatsApp, Telegram, форма (Formspree).
- [x]  HTML5, валидный маркап, без ошибок в консоли.
- [x]  Адаптивность 360 / 600 / 960 / 1280 px.
- [ ]  Замените в `index.html` контактные заглушки: e-mail, телефон, WhatsApp/Telegram и ID формы Formspree.

<aside>
✨

Сайт легко расширяется: новые языки — в `i18n.js`, новые услуги — карточкой в соответствующей категории. При необходимости макет можно разбить на отдельные страницы, сохранив статичность.

</aside>