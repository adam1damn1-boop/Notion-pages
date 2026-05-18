# Teplý pomocník — теплый персональный лендинг

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title data-i18n="meta.title">Teplý pomocník — domácí počítačové služby</title>
<meta name="description" data-i18n-attr="content:meta.description" content="Výjezdový počítačový mistr u vás doma. Výjezd a první prohlídka jsou zdarma.">
<meta name="theme-color" content="#FAF5EC">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='28' fill='%23E8B964'/%3E%3Ccircle cx='32' cy='32' r='10' fill='%232F4A4A'/%3E%3C/svg%3E">
<link rel="manifest" href="./manifest.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./styles.css">
</head>
<body>

<header class="site-header">
  <div class="container">
    <a href="#" class="brand" aria-label="Teplý pomocník">
      
      Teplý pomocník
    </a>
    <nav class="nav" id="primary-nav">
      <a href="#services" data-i18n="http://nav.services">Služby</a>
      <a href="#about" data-i18n="nav.about">O mně</a>
      <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
    <div class="nav-right">
      <select id="lang-switch" class="lang-switch" aria-label="Language">
        <option value="cs">CZ</option>
      </select>
      <button class="menu-toggle" aria-label="Menu" aria-controls="primary-nav" aria-expanded="false">☰</button>
    </div>
  </div>
</header>

<main>

<section class="hero">
  <div class="hero-blob" aria-hidden="true"></div>
  <div class="container hero-grid">
    <div class="hero-text">
      Domácí počítačové služby
      <h1 data-i18n="hero.slogan">Váš počítač v dobrých rukou — a vy v klidu doma.</h1>
      <p class="lead" data-i18n="hero.lead">Klidná pomoc s počítačem, sítí i chytrou domácností. Přijedu, vyslechnu vás bez spěchu a poradím lidsky.</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="#contact" data-i18n="hero.cta_contact">Napsat zprávu</a>
        <a class="btn btn-ghost" href="#services" data-i18n="hero.cta_services">Co umím</a>
      </div>
      <ul class="hero-strip">
        <li data-i18n="http://hero.free">Výjezd a první prohlídka zdarma</li>
        <li data-i18n="http://hero.pay">Platíte jen za skutečnou práci a díly</li>
        <li data-i18n="hero.home">U vás doma, v klidném tempu</li>
      </ul>
    </div>
    <figure class="hero-photo">
      <img class="main" src="./img/hero--main.png" alt="master" loading="eager" width="370" height="790">
      <img class="hover" src="./img/hero--hover.png" alt="" loading="lazy" width="370" height="790">
    </figure>
  </div>
</section>

<section id="services">
  <div class="container">
    <div class="section-head reveal">
      <div class="eyebrow" data-i18n="services_section.eyebrow">Co dělám</div>
      <h2 data-i18n="services_section.title">Klidné a srozumitelné služby u vás doma</h2>
      <p data-i18n="services_section.text">První návštěva i diagnostika jsou vždy zdarma. Platíte pouze za skutečnou práci a díly.</p>
    </div>

    <div class="group reveal" id="group-care">
      <div class="group-title">01Péče o počítač</div>
      <div class="cards">
        <article class="card">
          <div class="card-media"><img class="main" src="./img/cleaning--main.png" alt="cleaning" loading="lazy"><img class="hover" src="./img/cleaning--hover.png" alt="" loading="lazy"></div>
          1.1
          <h3 data-i18n="http://services.cleaning.title">Počítačový úklid</h3>
          <p data-i18n="http://services.cleaning.text"></p>
        </article>
        <article class="card">
          <div class="card-media"><img class="main" src="./img/upgrade--main.png" alt="upgrade" loading="lazy"><img class="hover" src="./img/upgrade--hover.png" alt="" loading="lazy"></div>
          1.2
          <h3 data-i18n="services.upgrade.title">Modernizace</h3>
          <p data-i18n="services.upgrade.text"></p>
        </article>
        <article class="card">
          <div class="card-media"><img class="main" src="./img/software--main.png" alt="software" loading="lazy"><img class="hover" src="./img/software--hover.png" alt="" loading="lazy"></div>
          1.3
          <h3 data-i18n="http://services.software.title">Nastavení softwaru</h3>
          <p data-i18n="http://services.software.text"></p>
        </article>
        <article class="card">
          <div class="card-media"><img class="main" src="./img/repair--main.png" alt="repair" loading="lazy"><img class="hover" src="./img/repair--hover.png" alt="" loading="lazy"></div>
          1.4
          <h3 data-i18n="http://services.repair.title">Oprava a likvidace</h3>
          <p data-i18n="http://services.repair.text"></p>
        </article>
      </div>
    </div>

    <div class="master-band reveal" id="about">
      <div class="master-band-text">
        <div class="eyebrow light" data-i18n="about.eyebrow">O mně</div>
        <h3 data-i18n="about.title">Klidná pomoc, která rozumí lidem</h3>
        <p data-i18n="about.long">Jsem výjezdový počítačový mistr s diplomem v IT a roky praxe. Pracuji u vás doma a v čase, který vám sedne. Diagnostika i první návštěva jsou vždy zdarma — platíte jen za skutečnou práci a díly.</p>
        <a class="btn btn-light" href="#contact" data-i18n="about.cta">Domluvit návštěvu</a>
      </div>
      <figure class="master-band-photo">
        <img class="main" src="./img/hero--main.png" alt="" loading="lazy">
        <img class="hover" src="./img/hero--hover.png" alt="" loading="lazy">
      </figure>
    </div>

    <div class="group reveal" id="group-security">
      <div class="group-title">02Bezpečnost domova</div>
      <div class="cards three">
        <article class="card">
          <div class="card-media"><img class="main" src="./img/webcam--main.png" alt="webcam" loading="lazy"><img class="hover" src="./img/webcam--hover.png" alt="" loading="lazy"></div>
          2.1
          <h3 data-i18n="http://services.webcam.title">Webové kamery</h3>
          <p data-i18n="http://services.webcam.text"></p>
        </article>
        <article class="card">
          <div class="card-media"><img class="main" src="./img/alarm--main.png" alt="alarm" loading="lazy"><img class="hover" src="./img/alarm--hover.png" alt="" loading="lazy"></div>
          2.2
          <h3 data-i18n="services.alarm.title">Domácí alarm</h3>
          <p data-i18n="services.alarm.text"></p>
        </article>
        <article class="card">
          <div class="card-media"><img class="main" src="./img/appliances--main.png" alt="appliances" loading="lazy"><img class="hover" src="./img/appliances--hover.png" alt="" loading="lazy"></div>
          2.3
          <h3 data-i18n="services.appliances.title">Chytrá domácnost</h3>
          <p data-i18n="services.appliances.text"></p>
        </article>
      </div>
    </div>

    <div class="group reveal" id="group-learning">
      <div class="group-title">03Učení doma</div>
      <div class="cards">
        <article class="card">
          <div class="card-media"><img class="main" src="./img/literacy--main.png" alt="literacy" loading="lazy"><img class="hover" src="./img/literacy--hover.png" alt="" loading="lazy"></div>
          3.1
          <h3 data-i18n="services.literacy.title">Počítačová gramotnost</h3>
          <p data-i18n="services.literacy.text"></p>
        </article>
        <article class="card">
          <div class="card-media"><img class="main" src="./img/tutor--main.png" alt="tutor" loading="lazy"><img class="hover" src="./img/tutor--hover.png" alt="" loading="lazy"></div>
          3.2
          <h3 data-i18n="services.tutor.title">Doučování informatiky</h3>
          <p data-i18n="services.tutor.text"></p>
        </article>
        <article class="card">
          <div class="card-media"><img class="main" src="./img/chess--main.png" alt="chess" loading="lazy"><img class="hover" src="./img/chess--hover.png" alt="" loading="lazy"></div>
          3.3
          <h3 data-i18n="services.chess.title">Šachy pro děti</h3>
          <p data-i18n="services.chess.text"></p>
        </article>
        <article class="card">
          <div class="card-media"><img class="main" src="./img/development--main.png" alt="development" loading="lazy"><img class="hover" src="./img/development--hover.png" alt="" loading="lazy"></div>
          3.4
          <h3 data-i18n="services.development.title">AI a vysoké technologie</h3>
          <p data-i18n="services.development.text"></p>
        </article>
      </div>
    </div>

    <div class="group reveal" id="group-design">
      <div class="group-title">04Design a tvorba</div>
      <div class="cards two">
        <article class="card">
          <div class="card-media"><img class="main" src="./img/design--main.png" alt="design" loading="lazy"><img class="hover" src="./img/design--hover.png" alt="" loading="lazy"></div>
          4
          <h3 data-i18n="http://services.design.title">Design a webové stránky</h3>
          <p data-i18n="http://services.design.text"></p>
        </article>
        <article class="card card-soft">
          Bonus
          <h3 data-i18n="design_extra.title">Hezky vypadat a dobře fungovat</h3>
          <p data-i18n="design_extra.text"></p>
          <a class="card-foot" href="#contact">Pojďme si popovídat →</a>
        </article>
      </div>
    </div>

  </div>
</section>

<section id="contact" class="contact">
  <div class="container">
    <div class="section-head reveal">
      <div class="eyebrow" data-i18n="contact.eyebrow">Kontakt</div>
      <h2 data-i18n="contact.title">Pojďme si v klidu popovídat</h2>
      <p data-i18n="contact.lead"></p>
    </div>
    <div class="contact-grid reveal">
      <div class="contact-info">
        <div class="contact-list">
          <a class="contact-item" href="mailto:pomoc@teplypomocnik.cz">
            @
            <small data-i18n="http://contact.email_label">E-mail</small>mailto:pomoc@teplypomocnik.cz
          </a>
          <a class="contact-item" href="tel:+420777123456">
            ☎
            <small data-i18n="http://contact.phone_label">Telefon</small>+420 777 123 456
          </a>
          <a class="contact-item" href="https://wa.me/420777123456" target="_blank" rel="noopener">
            W
            <small data-i18n="contact.whatsapp">WhatsApp</small>+420 777 123 456
          </a>
          <a class="contact-item" href="https://t.me/teplypomocnik" target="_blank" rel="noopener">
            T
            <small data-i18n="contact.telegram">Telegram</small>@teplypomocnik
          </a>
        </div>
        <p class="contact-note" data-i18n="contact.note">Pracovní doba: po–so, 8:00 — 20:00. Volejte klidně, vždy se ozvu.</p>
      </div>
      <form id="contact-form" class="contact-form" novalidate>
        <label for="cf-name" data-i18n="contact.form_name">Jak vám mám říkat?</label>
        <input id="cf-name" name="name" type="text" autocomplete="name" required>
        <label for="cf-contact" data-i18n="contact.form_contact">E-mail nebo telefon</label>
        <input id="cf-contact" name="contact" type="text" required>
        <label for="cf-message" data-i18n="contact.form_message">Co potřebujete?</label>
        <textarea id="cf-message" name="message" rows="5" required></textarea>
        <button type="submit" class="btn btn-primary" data-i18n="contact.form_send">Odeslat e-mailem</button>
        <p class="form-hint" data-i18n="contact.form_hint">Otevře se váš e-mailový klient s předvyplněnou zprávou.</p>
      </form>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="container">
    © Teplý pomocník — domácí počítačové služby. Výjezd a diagnostika zdarma.
    <a href="#" class="to-top">↑ Nahoru</a>
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
      "source": "/(.)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/img/(.)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}

=== robots.txt ===
User-agent: *
Allow: /

=== manifest.webmanifest ===
{
  "name": "Teplý pomocník",
  "short_name": "Teplý pomocník",
  "description": "Domácí počítačové služby. Výjezd a první prohlídka zdarma.",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#FAF5EC",
  "theme_color": "#FAF5EC",
  "icons": []
}

=== package.json ===
{
  "name": "teply-pomocnik",
  "version": "1.0.0",
  "description": "Domácí počítačové služby — statický web (Vercel-ready).",
  "private": true,
  "scripts": {
    "start": "npx serve .",
    "deploy": "npx vercel --prod"
  }
}

=== http://README.md ===
# Teplý pomocník

Lehký statický landing výjezdového počítačového mistra. Pouze HTML, CSS a JS — bez backendu a bez sestavovacího procesu.

## Struktura

- index.html — stránka
- styles.css — styly
- i18n.js — slovníky jazyků
- main.js — interakce
- img/ — obrázky (slug--main.png, slug--hover.png)
- vercel.json, manifest.webmanifest, robots.txt — konfigurace

## Spuštění lokálně

bash
npx serve .


## Nasazení

bash
npx vercel --prod


Scripts: === i18n.js ===
window.I18N = {
  cs: {
    meta: {
      title: 'Teplý pomocník — domácí počítačové služby',
      description: 'Výjezdový počítačový mistr u vás doma. Výjezd a první prohlídka jsou zdarma. Platíte jen za skutečnou práci a díly.'
    },
    nav: { services: 'Služby', about: 'O mně', contact: 'Kontakt' },
    hero: {
      kicker: 'Domácí počítačové služby',
      slogan: 'Váš počítač v dobrých rukou — a vy v klidu doma.',
      lead: 'Klidná pomoc s počítačem, sítí i chytrou domácností. Přijedu, vyslechnu vás bez spěchu a poradím lidsky.',
      cta_contact: 'Napsat zprávu',
      cta_services: 'Co umím',
      free: 'Výjezd a první prohlídka zdarma',
      pay: 'Platíte jen za skutečnou práci a díly',
      home: 'U vás doma, v klidném tempu'
    },
    sections: {
      care: 'Péče o počítač',
      security: 'Bezpečnost domova',
      learning: 'Učení doma',
      design: 'Design a tvorba'
    },
    services_section: {
      eyebrow: 'Co dělám',
      title: 'Klidné a srozumitelné služby u vás doma',
      text: 'První návštěva i diagnostika jsou vždy zdarma. Platíte pouze za skutečnou práci a díly.'
    },
    services: {
      cleaning: { section: '1.1', title: 'Počítačový úklid', text: 'Když počítač v létě hučí jako stará lednice a tváří se, že se každou chvíli rozteče, většinou stačí pořádný úklid uvnitř. Přijedu k vám domů, prach opatrně vyfoukám, vyměním teplovodivou pastu a promažu ventilátory, aby zase jen tiše šeptaly. Výjezd i první prohlídka jsou zdarma – platíte pouze za skutečnou práci a díly. Po mojí návštěvě budete mít pocit, jako byste si pořídili nový kus techniky, jen za zlomek ceny.' },
      upgrade: { section: '1.2', title: 'Modernizace', text: 'Někdy to není starý počítač, jen unavený. Stačí přidat rychlý SSD disk, trochu paměti nebo do notebooku novou baterii a najednou máte stroj, který zase stíhá vaše tempo. Přijedu k vám, zdarma se podívám, co se opravdu vyplatí vyměnit, a poradím bez nátlaku. Žádné zbytečné nákupy – jen to, co vašemu počítači skutečně vrátí energii a vám chuť u něj zase sedět.' },
      software: { section: '1.3', title: 'Nastavení softwaru', text: 'Windows se časem zaplní vším možným, antivirů se v něm nahromadí jako bot v předsíni a počítač pak couvá při každém kliknutí. Přijedu k vám domů, systém pečlivě vyčistím, nastavím a doinstaluji programy, které opravdu potřebujete – ať už pro práci, učení, nebo večerní film. Pomůžu i s registracemi, formuláři pro úřady a podáním žádostí online. Diagnostika u vás je zdarma a já odejdu, až bude všechno fungovat tak, jak má.' },
      repair: { section: '1.4', title: 'Oprava a likvidace', text: 'Než starý počítač nebo notebook hodíte do popelnice, dejte mu ještě jednu šanci. Často stačí vyměnit jednu drobnou součástku a stroj poslouží další roky – třeba dětem, na chalupu nebo jako záloha. Přijedu k vám, zdarma se podívám, jestli má oprava smysl, a řeknu vám to na rovinu. Když už mu opravdu odzvonilo, postarám se i o ekologickou likvidaci, abyste se o nic nemuseli starat.' },
      webcam: { section: '2.1', title: 'Webové kamery', text: 'Chcete vědět, co se děje doma, když jste v práci, nebo nakouknout na chalupu uprostřed týdne? Připojím vám tolik kamer, kolik potřebujete – uvnitř i venku – a ukážu, jak se na ně z mobilu podíváte odkudkoliv. Přes kameru se dá s návštěvou i krátce promluvit, takže klidně otevřete dveře, aniž byste museli vstát od stolu. Příjezd k vám i první prohlídka jsou zdarma. Klid v hlavě stojí často mnohem méně, než si myslíte.' },
      alarm: { section: '2.2', title: 'Domácí alarm', text: 'Stačí pár vteřin a do bytu nebo garáže se dostane někdo, kdo tam nemá co dělat. Namontuji přímo na vaše dveře dálkově ovládaný alarm s hlasitou sirénou a SMS upozorněním, takže o nezvaném hostu víte okamžitě. Výjezd a prohlídka jsou zdarma – ukážu vám možnosti a nic navíc nevnucuji. Klidnější spaní vás může čekat třeba už dnes večer.' },
      appliances: { section: '2.3', title: 'Chytrá domácnost', text: 'Chytrá domácnost zní složitě, ale ve skutečnosti vám má jen ulehčit den – rozsvítit světlo dřív, než přijdete domů, ztlumit topení, když jste pryč, nebo pustit oblíbený film jedním klepnutím. Pomůžu propojit vaše stávající zařízení, nastavit aplikaci v telefonu a v klidu vám ukážu, jak se to ovládá – třeba i Smart TV, kterou se zatím bojíte pořádně použít. První návštěva je zdarma. Odcházím, až všechno opravdu funguje a vy se v tom cítíte jako doma.' },
      literacy: { section: '3.1', title: 'Počítačová gramotnost', text: 'Není ostuda, když se v dnešní technice ztrácíte – mění se rychleji, než stíháme dýchat. U vás doma vás v klidu naučím používat počítač, mobil i moderní pomocníky včetně umělé inteligence, ať už si chcete psát s vnoučaty, nakupovat online, nebo si zjednodušit papírování. Učím trpělivě, bez posměchu a bez složitých slov. Úvodní setkání je zdarma, abyste si mohli vyzkoušet, jestli vám můj způsob vysvětlování sedí.' },
      tutor: { section: '3.2', title: 'Doučování informatiky', text: 'Informatika ve škole umí být pro děti nesrozumitelná, zvlášť když chybí někdo, kdo látku vysvětlí lidsky. Mám vysokoškolské vzdělání v IT a zkušenosti s výukou ještě z doktorského studia – učím tak, aby vaše dítě skutečně chápalo, ne jen opisovalo. Přijedu k vám domů, první ukázková hodina je zdarma a sami uvidíte, jak rychle se začne dařit. Klidnější dítě u stolu znamená klidnější večery v celé rodině.' },
      chess: { section: '3.3', title: 'Šachy pro děti', text: 'Šachy nejsou jen hra – jsou to malé lekce trpělivosti, soustředění a rozhodování, které vašemu dítěti zůstanou na celý život. Hraji velmi dobře a rád se o své triky podělím tak, aby to děti bavilo a zároveň jim to rozvíjelo myšlení. Přijedu k vám domů, první ukázková lekce je zdarma. Možná zjistíte, že večery u šachovnice nahradí kus zbytečného brouzdání na mobilu.' },
      development: { section: '3.4', title: 'AI a vysoké technologie', text: 'Svět běží na umělé inteligenci a děti, které ji umějí používat chytře, budou mít před ostatními pořádný náskok. Naučím vaše dítě nebrat AI jako podvod při úkolech, ale jako nástroj, který otevírá dveře – pomáhá pochopit těžké předměty, učit se rychleji a tvořit věci, na které by samo nepřišlo. Můžeme zvolit zábavnou formu, nebo se opřít rovnou do domácích úkolů. První setkání u vás doma je zdarma, ať vidíte, jak by to fungovalo.' },
      design: { section: '4', title: 'Design a webové stránky', text: 'Někdy stačí pěkný leták, srozumitelný web nebo poctivě udělaný katalog, aby si lidé vaší práce konečně všimli. Jsem vystudovaný vývojář softwaru s praxí a navrhnu vám letáky, plakáty, webové stránky i menší aplikace – tak, aby působily moderně a přitom zůstaly blízké vám i vašim zákazníkům. Pojďme si o nápadu nezávazně popovídat, první konzultace nic nestojí. Z dobře udělaného návrhu bývá nakonec ta nejlepší investice – do klidu i do tržeb.' }
    },
    about: {
      eyebrow: 'O mně',
      title: 'Klidná pomoc, která rozumí lidem',
      long: 'Jsem výjezdový počítačový mistr s diplomem v IT a roky praxe. Pracuji u vás doma, v čase, který vám sedne. Diagnostika i první návštěva jsou vždy zdarma — platíte jen za skutečnou práci a díly. Mojí prací je, aby vám technika sloužila a vy jste se u ní cítili klidně.',
      cta: 'Domluvit návštěvu'
    },
    design_extra: {
      tag: 'Bonus',
      title: 'Hezky vypadat a dobře fungovat',
      text: 'Letáky, plakáty, weby, katalogy i menší aplikace — navržené tak, aby vám přiváděly zákazníky a vám se s nimi pohodlně pracovalo.',
      cta: 'Pojďme si popovídat'
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Pojďme si v klidu popovídat',
      lead: 'Napište mi nebo zavolejte – rád si v klidu poslechnu, co potřebujete. Výjezd k vám domů i první prohlídka jsou zdarma, takže nic neriskujete.',
      email_label: 'E-mail',
      phone_label: 'Telefon',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      form_name: 'Jak vám mám říkat?',
      form_contact: 'E-mail nebo telefon',
      form_message: 'Co potřebujete?',
      form_send: 'Odeslat e-mailem',
      form_hint: 'Otevře se váš e-mailový klient s předvyplněnou zprávou.',
      email_subject: 'Poptávka z webu Teplý pomocník',
      note: 'Pracovní doba: po–so, 8:00 — 20:00. Volejte klidně, vždy se ozvu.'
    },
    footer: { rights: '© Teplý pomocník — domácí počítačové služby. Výjezd a diagnostika zdarma.', top: 'Nahoru' }
  }
};

=== main.js ===
(function () {
  'use strict';
  var STORAGE_KEY = 'tp_lang';
  var DEFAULT_LANG = 'cs';

  function getLang() {
    try { return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; } catch (e) { return DEFAULT_LANG; }
  }
  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }
  function resolve(path, dict) {
    return path.split('.').reduce(function (a, k) { return (a == null ? a : a[k]); }, dict);
  }
  function applyLang(lang) {
    var dict = (window.I18N || {})[lang] || (window.I18N || {})[DEFAULT_LANG];
    if (!dict) return;
    document.documentElement.lang = lang;
    var meta = dict.meta || {};
    if (meta.title) document.title = meta.title;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = resolve(key, dict);
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = el.getAttribute('data-i18n-attr').split(',');
      pairs.forEach(function (pair) {
        var parts = pair.split(':');
        var attr = (parts[0] || '').trim();
        var key = (parts[1] || '').trim();
        var val = resolve(key, dict);
        if (typeof val === 'string') el.setAttribute(attr, val);
      });
    });
    var sw = document.getElementById('lang-switch');
    if (sw) sw.value = lang;
  }

  function bindMenu() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function bindLang() {
    var sw = document.getElementById('lang-switch');
    if (!sw) return;
    sw.addEventListener('change', function (e) { setLang(http://e.target.value); });
  }

  function bindReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { http://e.target.classList.add('in'); obs.unobserve(http://e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  }

  function bindForm() {
    var f = document.getElementById('contact-form');
    if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (http://f.elements.name.value || '').trim();
      var contact = (http://f.elements.contact.value || '').trim();
      var msg = (f.elements.message.value || '').trim();
      if (!name || !contact || !msg) {
        f.querySelectorAll('input, textarea').forEach(function (el) {
          if (!el.value.trim()) http://el.style.borderColor = '#c0654a';
        });
        return;
      }
      var lang = getLang();
      var i18n = (window.I18N || {})[lang] || {};
      var subj = (http://i18n.contact && http://i18n.contact.email_subject) || 'Poptávka z webu';
      var body = name + 'n' + contact + 'nn' + msg;
      window.location.href = 'mailto:pomoc@teplypomocnik.cz?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
    });
    f.querySelectorAll('input, textarea').forEach(function (el) {
      el.addEventListener('input', function () { http://el.style.borderColor = ''; });
    });
  }

  function bindHeaderShadow() {
    var hdr = document.querySelector('.site-header');
    if (!hdr) return;
    var onScroll = function () {
      if (window.scrollY > 8) hdr.classList.add('scrolled');
      else hdr.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());
    bindMenu();
    bindLang();
    bindReveal();
    bindForm();
    bindHeaderShadow();
  });
})();

Styles: === styles.css ===
:root {
  --bg: #FAF5EC;
  --paper: #FFFDF8;
  --ink: #2B2A26;
  --muted: #6B6A62;
  --warm: #E8B964;
  --warm-soft: #F6E3B8;
  --accent: #2F4A4A;
  --accent-strong: #20393A;
  --accent-soft: #DDEDE7;
  --line: #ECDFC4;
  --radius: 18px;
  --radius-lg: 28px;
  --shadow: 0 14px 40px rgba(43,42,38,0.08);
  --shadow-lg: 0 24px 60px rgba(43,42,38,0.12);
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --ease: cubic-bezier(.2,.7,.2,1);
}

 { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--ink);
  line-height: 1.55;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }
.container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }

.site-header {
  position: sticky; top: 0; z-index: 30;
  backdrop-filter: saturate(140%) blur(12px);
  -webkit-backdrop-filter: saturate(140%) blur(12px);
  background: rgba(250,245,236,0.85);
  border-bottom: 1px solid var(--line);
}
.site-header .container { display: flex; align-items: center; justify-content: space-between; height: 72px; position: relative; }
.brand { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 700; font-size: 20px; }
.brand-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--warm); box-shadow: 0 0 0 4px var(--warm-soft); }
.nav { display: flex; gap: 28px; }
.nav a { font-weight: 500; color: var(--muted); transition: color .2s var(--ease); position: relative; padding: 6px 0; }
.nav a::after { content: ''; position: absolute; left: 0; right: 100%; bottom: 0; height: 2px; background: var(--warm); transition: right .25s var(--ease); }
.nav a:hover { color: var(--ink); }
.nav a:hover::after { right: 0; }
.nav-right { display: flex; align-items: center; gap: 12px; }
.lang-switch { background: var(--paper); border: 1px solid var(--line); border-radius: 999px; padding: 8px 14px; font-size: 14px; font-weight: 600; color: var(--ink); }
.menu-toggle { display: none; background: transparent; border: 0; font-size: 22px; color: var(--ink); padding: 6px 10px; }

.hero { padding: 90px 0 70px; position: relative; overflow: hidden; }
.hero-blob { position: absolute; top: -120px; right: -120px; width: 520px; height: 520px; border-radius: 50%; background: radial-gradient(closest-side, var(--warm-soft), transparent 75%); filter: blur(10px); z-index: 0; }
.hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: center; }
.hero-text { animation: fadeUp .9s var(--ease) both; }
.hero-kicker { display: inline-block; background: var(--warm-soft); color: #7a5a18; padding: 7px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; letter-spacing: .02em; }
.hero h1 { font-family: var(--font-display); font-weight: 700; font-size: clamp(36px, 5vw, 62px); line-height: 1.04; margin: 22px 0 22px; letter-spacing: -.01em; }
.hero p.lead { font-size: 19px; color: var(--muted); margin: 0 0 32px; max-width: 520px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 24px; border-radius: 999px; font-weight: 600; border: 0; transition: transform .18s var(--ease), box-shadow .18s var(--ease), background .2s var(--ease); font-size: 15px; }
.btn-primary { background: var(--accent); color: #fff; box-shadow: var(--shadow); }
.btn-primary:hover { transform: translateY(-2px); background: var(--accent-strong); box-shadow: var(--shadow-lg); }
.btn-ghost { background: var(--paper); color: var(--ink); border: 1px solid var(--line); }
.btn-ghost:hover { background: var(--warm-soft); border-color: var(--warm); }
.btn-light { background: #fff; color: var(--accent); }
.btn-light:hover { background: var(--warm-soft); color: var(--accent-strong); }
.hero-strip { list-style: none; padding: 0; margin: 36px 0 0; display: flex; gap: 22px; flex-wrap: wrap; }
.hero-strip li { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); font-size: 14px; }
.hero-strip li::before { content: '✓'; color: var(--accent); font-weight: 800; }

.hero-photo { position: relative; height: 560px; border-radius: var(--radius-lg); overflow: hidden; background: linear-gradient(160deg, var(--warm-soft), var(--accent-soft)); box-shadow: var(--shadow-lg); animation: floaty 8s ease-in-out infinite; }
.hero-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: opacity .5s var(--ease), transform 1.2s var(--ease); }
.hero-photo img.hover { opacity: 0; }
.hero-photo:hover img.main { opacity: 0; transform: scale(1.03); }
.hero-photo:hover img.hover { opacity: 1; transform: scale(1.03); }
.hero-photo::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(43,42,38,0.18)); pointer-events: none; }

section { padding: 80px 0; }
.section-head { max-width: 720px; margin: 0 auto 50px; text-align: center; }
.section-head .eyebrow { color: var(--accent); text-transform: uppercase; letter-spacing: .14em; font-size: 13px; font-weight: 700; }
.section-head .eyebrow.light { color: rgba(255,255,255,.8); }
.section-head h2 { font-family: var(--font-display); font-size: clamp(28px, 3.6vw, 44px); margin: 14px 0; line-height: 1.1; }
.section-head p { color: var(--muted); }

.group { margin-bottom: 64px; }
.group-title { font-family: var(--font-display); font-weight: 700; font-size: 24px; margin-bottom: 26px; display: flex; align-items: baseline; gap: 16px; color: var(--accent); }
.group-no { display: inline-flex; align-items: center; justify-content: center; min-width: 44px; height: 28px; padding: 0 10px; border-radius: 999px; background: var(--warm-soft); color: #7a5a18; font-family: var(--font-body); font-weight: 700; font-size: 13px; letter-spacing: .04em; }

.cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
.cards.three { grid-template-columns: repeat(3, 1fr); }
.cards.two { grid-template-columns: repeat(2, 1fr); }

.card { background: var(--paper); border-radius: var(--radius); padding: 18px; border: 1px solid var(--line); transition: transform .25s var(--ease), box-shadow .25s var(--ease), border-color .25s var(--ease); display: flex; flex-direction: column; }
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow); border-color: var(--warm); }
.card-media { border-radius: 14px; overflow: hidden; aspect-ratio: 4/3; background: linear-gradient(160deg, var(--warm-soft), var(--accent-soft)); position: relative; margin-bottom: 16px; }
.card-media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; padding: 12px; transition: opacity .45s var(--ease), transform .8s var(--ease); }
.card-media img.hover { opacity: 0; }
.card:hover .card-media img.main { opacity: 0; }
.card:hover .card-media img.hover { opacity: 1; transform: scale(1.04); }
.card-tag { font-size: 12px; color: var(--accent); font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.card h3 { font-family: var(--font-display); font-size: 21px; margin: 6px 0 10px; line-height: 1.2; }
.card p { color: var(--muted); font-size: 15px; margin: 0; flex: 1; }
.card-foot { margin-top: 16px; font-weight: 600; color: var(--accent); display: inline-flex; align-items: center; gap: 6px; }
.card-soft { background: linear-gradient(135deg, var(--warm-soft), var(--accent-soft)); border-color: transparent; }
.card-soft h3 { color: var(--accent-strong); }
.card-soft p { color: #4d4a3f; }

.master-band { margin: 60px 0; border-radius: var(--radius-lg); overflow: hidden; background: linear-gradient(120deg, var(--accent) 0%, #3d6360 100%); color: #fff; padding: 54px; display: grid; grid-template-columns: 1.2fr .8fr; gap: 44px; align-items: center; position: relative; box-shadow: var(--shadow-lg); }
.master-band::before { content: ''; position: absolute; right: -80px; bottom: -80px; width: 260px; height: 260px; border-radius: 50%; background: rgba(232,185,100,.18); }
.master-band h3 { font-family: var(--font-display); font-size: clamp(24px, 2.5vw, 36px); margin: 12px 0 14px; line-height: 1.15; }
.master-band p { color: rgba(255,255,255,.85); margin: 0 0 24px; max-width: 520px; }
.master-band-photo { border-radius: 22px; overflow: hidden; height: 340px; position: relative; box-shadow: var(--shadow-lg); }
.master-band-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: opacity .5s var(--ease), transform 1.2s var(--ease); }
.master-band-photo img.hover { opacity: 0; }
.master-band-photo:hover img.main { opacity: 0; }
.master-band-photo:hover img.hover { opacity: 1; transform: scale(1.04); }

.contact { background: var(--paper); border-top: 1px solid var(--line); }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
.contact-list { display: flex; flex-direction: column; gap: 12px; margin-top: 6px; }
.contact-item { display: flex; align-items: center; gap: 14px; padding: 14px 18px; background: var(--bg); border-radius: 14px; border: 1px solid var(--line); transition: background .2s var(--ease), transform .2s var(--ease); }
.contact-item:hover { background: var(--warm-soft); transform: translateX(4px); }
.contact-item .ico { width: 38px; height: 38px; border-radius: 50%; background: var(--accent-soft); display: grid; place-items: center; color: var(--accent); font-weight: 800; flex-shrink: 0; }
.contact-item small { display: block; color: var(--muted); font-size: 12px; }
.contact-note { color: var(--muted); font-size: 14px; margin-top: 18px; }
.contact-form { background: var(--bg); padding: 28px; border-radius: 22px; border: 1px solid var(--line); }
.contact-form label { display: block; font-size: 13px; font-weight: 600; color: var(--muted); margin-bottom: 6px; }
.contact-form input, .contact-form textarea { width: 100%; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--line); background: var(--paper); font: inherit; color: var(--ink); margin-bottom: 14px; transition: border-color .2s var(--ease), box-shadow .2s var(--ease); }
.contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft); }
.contact-form textarea { min-height: 120px; resize: vertical; }
.contact-form button { width: 100%; }
.form-hint { color: var(--muted); font-size: 12px; margin: 10px 0 0; text-align: center; }

footer { padding: 30px 0; border-top: 1px solid var(--line); color: var(--muted); font-size: 14px; background: var(--bg); }
footer .container { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
.to-top { color: var(--accent); font-weight: 600; }

.reveal { opacity: 0; transform: translateY(20px); transition: opacity .8s var(--ease), transform .8s var(--ease); }
.http://reveal.in { opacity: 1; transform: none; }

:focus-visible { outline: 3px solid var(--warm); outline-offset: 3px; border-radius: 6px; }

@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
@keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

@media (max-width: 1080px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
  .cards.three { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-photo { height: 420px; }
  .cards, .cards.three { grid-template-columns: repeat(2, 1fr); }
  .master-band { grid-template-columns: 1fr; padding: 36px; }
  .master-band-photo { height: 280px; }
  .contact-grid { grid-template-columns: 1fr; }
}
@media (max-width: 620px) {
  .nav { display: none; }
  .menu-toggle { display: inline-flex; }
  .http://nav.open { display: flex; flex-direction: column; gap: 14px; position: absolute; top: 72px; left: 0; right: 0; background: var(--paper); padding: 20px 24px; border-bottom: 1px solid var(--line); box-shadow: var(--shadow); }
  .cards, .cards.three, .cards.two { grid-template-columns: 1fr; }
  section { padding: 60px 0; }
  .hero { padding: 50px 0 30px; }
  .master-band { padding: 28px; }
}
@media (prefers-reduced-motion: reduce) {
  , ::before, ::after { animation-duration: .001ms !important; transition-duration: .001ms !important; }
  html { scroll-behavior: auto; }
}

# 🤝 Teplý pomocník — отчёт по сайту

<aside>
🎯

Концепция: «Тёплый помощник» — добрый сосед-эксперт, который приедет, не торопит, объяснит человеческим языком. Сайт работает на доверие и спокойствие — главный обещанный товар.

</aside>

## 🎨 Дизайн и принципы

- **Палитра:** мягкий кремовый фон `#FAF5EC`, бумажный белый `#FFFDF8`, тёплый янтарь `#E8B964` как акцент уюта, глубокий тил `#2F4A4A` как акцент доверия и спокойствия.
- **Шрифты:** заголовки — *Fraunces* (тёплая антиква с лёгкой пластикой), основной текст — *Inter* (чистый гротеск, отлично читается).
- **Тон:** дружелюбный, без давления. На ключевых местах напоминание «Výjezd a první prohlídka zdarma».
- **Композиция:** hero с фото мастера, четыре группы услуг (01 Péče, 02 Bezpečnost, 03 Učení, 04 Design), посередине — широкая «master-band» с цитатой и вторым фото мастера. В конце — блок контактов и форма обратной связи на `mailto:`.
- **Микровзаимодействия:** плавный hover c подменой картинки (`main` → `hover`), мягкое всплытие карточек, лёгкая анимация «дыхания» у hero-фото, IntersectionObserver-анимация появления секций, кастомные фокус-обводки для доступности.
- **Адаптивность:** колоночные сетки сжимаются с 4 → 3 → 2 → 1; мобильное меню «бургер» с накладной панелью.
- **Доступность:** alt-тексты, `aria-label`, `aria-expanded`, видимые `:focus-visible`, поддержка `prefers-reduced-motion`.

## 🧱 Структура сайта

1. Шапка со ссылками на разделы и переключателем языка (по умолчанию CZ).
2. Hero: слоган, лид, CTA, фото мастера (370×790).
3. Группа **01 Péče o počítač** — 4 карточки (cleaning, upgrade, software, repair).
4. Master-band «О мне» с тёмным акцентом и вторым фото мастера.
5. Группа **02 Bezpečnost domova** — 3 карточки (webcam, alarm, appliances).
6. Группа **03 Učení doma** — 4 карточки (literacy, tutor, chess, development).
7. Группа **04 Design a tvorba** — карточка `design` + мягкий «Bonus»-блок.
8. Контакты: e-mail, телефон, WhatsApp, Telegram + `mailto:`-форма.
9. Подвал.

## 🌍 Мультиязычность

- Все тексты вынесены в `i18n.js` в объект `window.I18N.cs`.
- В разметке используются атрибуты `data-i18n="path.to.key"` и `data-i18n-attr="content:meta.description"`.
- Переключатель `<select id="lang-switch">` поддерживает добавление новых языков: достаточно добавить `<option value="en">EN</option>` и блок `window.I18N.en = { ... }`.
- Выбранный язык сохраняется в `localStorage` (`tp_lang`).

# 📦 Инструкция по сборке

## Структура папок

```
tpomocnik/
├── index.html
├── styles.css
├── i18n.js
├── main.js
├── manifest.webmanifest
├── robots.txt
├── vercel.json
├── package.json
├── README.md
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
```

## Куда положить файлы

- Свойство **Html** → `index.html` (один файл).
- Свойство **Styles** → `styles.css`.
- Свойство **Scripts** содержит два файла, разделённые маркерами `=== i18n.js ===` и `=== main.js ===`. Скопируйте их в `i18n.js` и `main.js`.
- Свойство **Other** содержит `vercel.json`, `robots.txt`, `manifest.webmanifest`, `package.json`, `README.md` — каждый со своим маркером в начале.
- Папку `img/` заполните файлами со страницы **Main images**, соблюдая имена `slug--main.png` / `slug--hover.png`.

## Локальный запуск

```bash
npx serve .
# или
python3 -m http.server 5173
```

Откройте `http://localhost:3000` (или указанный порт).

## Добавление нового языка

1. В `i18n.js` рядом с `cs:` добавьте, например, `en: { ... }` с теми же ключами.
2. В `index.html` в `<select id="lang-switch">` добавьте `<option value="en">EN</option>`.
3. Готово — переключатель сам подхватит словарь и запомнит выбор пользователя.

# 🚀 Развёртывание на Vercel

## Способ 1. Через CLI (быстро)

```bash
npm i -g vercel
vercel login
cd tpomocnik
vercel --prod
```

Vercel определит проект как статический и опубликует его. Ничего настраивать не нужно — `vercel.json` уже включает `cleanUrls`, безопасные заголовки и кеширование `/img/`.

## Способ 2. Через Git и панель Vercel

1. Создайте репозиторий на GitHub/GitLab и запушьте папку проекта.
2. На [vercel.com/new](http://vercel.com/new) выберите репозиторий.
3. Framework Preset: **Other**. Root Directory: корень проекта. Build Command: пусто. Output Directory: пусто.
4. Нажмите **Deploy**. После сборки получите URL вида `https://teply-pomocnik.vercel.app`.
5. В **Settings → Domains** добавьте свой домен (например, `teplypomocnik.cz`), пропишите DNS-записи, дождитесь зелёной галочки SSL.

## Аналоги

- **Netlify**: перетащите папку на [app.netlify.com/drop](http://app.netlify.com/drop) — готово.
- **Cloudflare Pages**: подключите репозиторий, framework — *None*, build command пустой, output — корень.
- **GitHub Pages**: включите Pages из ветки `main`