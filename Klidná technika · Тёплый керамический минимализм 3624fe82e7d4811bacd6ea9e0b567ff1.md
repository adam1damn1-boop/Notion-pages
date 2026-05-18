# Klidná technika · Тёплый керамический минимализм

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs" data-lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title data-i18n="meta.title">Klidná technika — výjezdový mistr počítačových služeb</title>
  <meta name="description" data-i18n="meta.description" content="Výjezdový mistr počítačových služeb. Výjezd a první diagnostika zdarma.">
  <meta name="theme-color" content="#FAF6EE">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./styles.css">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%231E2530'/%3E%3Ctext x='50%25' y='66%25' font-family='Georgia,serif' font-size='22' fill='%23FAF6EE' text-anchor='middle' font-weight='700'%3EK%3C/text%3E%3C/svg%3E">
</head>
<body>
<a class="skip" href="#services" data-i18n="a11y.skip">Přejít na obsah</a>

<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="#top">
      ⌁
      Klidná technika
    </a>
    <nav class="nav" aria-label="Hlavní menu">
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#security" data-i18n="http://nav.security">Bezpečí</a>
      <a href="#learning" data-i18n="nav.learning">Výuka</a>
      <a href="#design-group" data-i18n="http://nav.design">Design</a>
      <a href="#contact" class="nav-cta" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
    <label class="lang-switch">
      Jazyk
      <select id="lang-select" aria-label="Jazyk">
        <option value="cs">CS</option>
      </select>
    </label>
  </div>
</header>

<main id="top">

<section class="hero">
  <div class="wrap hero-inner">
    <div class="hero-copy reveal">
      <p class="eyebrow" data-i18n="hero.eyebrow">Výjezdový mistr · Praha a okolí</p>
      <h1 class="hero-title" data-i18n="hero.title">Technika přeložená do lidské řeči.</h1>
      <p class="hero-sub" data-i18n="hero.sub">Výjezd a první diagnostika zdarma. Platíte jen za práci a náhradní díly.</p>
      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary" data-i18n="hero.cta1">Domluvit návštěvu</a>
        <a href="#services" class="btn btn-ghost" data-i18n="hero.cta2">Co umím</a>
      </div>
      <ul class="hero-points">
        <li data-i18n="hero.points.p1">Výjezd zdarma</li>
        <li data-i18n="hero.points.p2">První diagnostika zdarma</li>
        <li data-i18n="hero.points.p3">Bez technické vaty</li>
      </ul>
    </div>
    <figure class="hero-figure card-swap reveal" tabindex="0" aria-label="Mistr, který přijede k vám domů">
      <img class="img-main" src="./img/hero--main.png" alt="" data-alt-i18n="alt.hero" loading="eager" decoding="async">
      <img class="img-hover" src="./img/hero--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
    </figure>
  </div>
</section>

<section id="services" class="services">
  <div class="wrap">

    <article id="care" class="group reveal">
      <header class="group-head">
        01
        <h2 class="group-title" data-i18n="http://group.care.title">Péče o počítač</h2>
        <p class="group-lede" data-i18n="http://group.care.lede">Aby váš stroj zase dýchal — bez prachu, bez čekání, bez zbytečných slov.</p>
      </header>
      <div class="cards">
        <article class="card" data-section="1.1">
          <figure><img class="img-main" src="./img/cleaning--main.png" alt="" data-alt-i18n="http://alt.cleaning" loading="lazy"><img class="img-hover" src="./img/cleaning--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="http://services.cleaning.title">Počítačový úklid</h3>
          <p data-i18n="cleaning"></p>
        </article>
        <article class="card" data-section="1.2">
          <figure><img class="img-main" src="./img/upgrade--main.png" alt="" data-alt-i18n="alt.upgrade" loading="lazy"><img class="img-hover" src="./img/upgrade--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="services.upgrade.title">Modernizace</h3>
          <p data-i18n="upgrade"></p>
        </article>
        <article class="card" data-section="1.3">
          <figure><img class="img-main" src="./img/software--main.png" alt="" data-alt-i18n="http://alt.software" loading="lazy"><img class="img-hover" src="./img/software--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="http://services.software.title">Nastavení softwaru</h3>
          <p data-i18n="software"></p>
        </article>
        <article class="card" data-section="1.4">
          <figure><img class="img-main" src="./img/repair--main.png" alt="" data-alt-i18n="http://alt.repair" loading="lazy"><img class="img-hover" src="./img/repair--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="http://services.repair.title">Oprava a likvidace</h3>
          <p data-i18n="repair"></p>
        </article>
      </div>
    </article>

    <div class="divider" role="presentation"></div>

    <article id="security" class="group reveal">
      <header class="group-head">
        02
        <h2 class="group-title" data-i18n="http://group.security.title">Bezpečí</h2>
        <p class="group-lede" data-i18n="http://group.security.lede">Klidný spánek a chytrá domácnost, srozumitelně nastavené.</p>
      </header>
      <div class="cards">
        <article class="card" data-section="2.1">
          <figure><img class="img-main" src="./img/webcam--main.png" alt="" data-alt-i18n="http://alt.webcam" loading="lazy"><img class="img-hover" src="./img/webcam--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="http://services.webcam.title">Web kamery</h3>
          <p data-i18n="webcam"></p>
        </article>
        <article class="card" data-section="2.2">
          <figure><img class="img-main" src="./img/alarm--main.png" alt="" data-alt-i18n="alt.alarm" loading="lazy"><img class="img-hover" src="./img/alarm--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="services.alarm.title">Domácí siréna</h3>
          <p data-i18n="alarm"></p>
        </article>
        <article class="card" data-section="2.3">
          <figure><img class="img-main" src="./img/appliances--main.png" alt="" data-alt-i18n="alt.appliances" loading="lazy"><img class="img-hover" src="./img/appliances--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="services.appliances.title">Chytrá domácnost</h3>
          <p data-i18n="appliances"></p>
        </article>
      </div>
    </article>

    <div class="divider" role="presentation"></div>

    <article id="learning" class="group reveal">
      <header class="group-head">
        03
        <h2 class="group-title" data-i18n="group.learning.title">Výuka</h2>
        <p class="group-lede" data-i18n="group.learning.lede">Pro dospělé i pro děti. Žádné poučování — jen klidné vysvětlení krok za krokem.</p>
      </header>
      <div class="cards">
        <article class="card" data-section="3.1">
          <figure><img class="img-main" src="./img/literacy--main.png" alt="" data-alt-i18n="alt.literacy" loading="lazy"><img class="img-hover" src="./img/literacy--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="services.literacy.title">Počítačová gramotnost</h3>
          <p data-i18n="literacy"></p>
        </article>
        <article class="card" data-section="3.2">
          <figure><img class="img-main" src="./img/tutor--main.png" alt="" data-alt-i18n="alt.tutor" loading="lazy"><img class="img-hover" src="./img/tutor--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="services.tutor.title">Doučování informatiky</h3>
          <p data-i18n="tutor"></p>
        </article>
        <article class="card" data-section="3.3">
          <figure><img class="img-main" src="./img/chess--main.png" alt="" data-alt-i18n="alt.chess" loading="lazy"><img class="img-hover" src="./img/chess--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="services.chess.title">Šachy</h3>
          <p data-i18n="chess"></p>
        </article>
        <article class="card" data-section="3.4">
          <figure><img class="img-main" src="./img/development--main.png" alt="" data-alt-i18n="alt.development" loading="lazy"><img class="img-hover" src="./img/development--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="services.development.title">Vysoké technologie a AI</h3>
          <p data-i18n="development"></p>
        </article>
      </div>
    </article>

    <div class="divider" role="presentation"></div>

    <article id="design-group" class="group reveal">
      <header class="group-head">
        04
        <h2 class="group-title" data-i18n="http://group.design.title">Design a vývoj</h2>
        <p class="group-lede" data-i18n="http://group.design.lede">Aby vaše nabídka vypadala čistě a profesionálně.</p>
      </header>
      <div class="cards cards-one">
        <article class="card" data-section="4">
          <figure><img class="img-main" src="./img/design--main.png" alt="" data-alt-i18n="http://alt.design" loading="lazy"><img class="img-hover" src="./img/design--hover.png" alt="" loading="lazy" aria-hidden="true"></figure>
          <h3 data-i18n="http://services.design.title">Grafika a weby</h3>
          <p data-i18n="design"></p>
        </article>
      </div>
    </article>

  </div>
</section>

<section id="contact" class="contact">
  <div class="wrap contact-inner">
    <div class="contact-copy reveal">
      <p class="eyebrow" data-i18n="contact.eyebrow">Kontakt</p>
      <h2 data-i18n="contact.title">Pojďte do toho s klidem.</h2>
      <p data-i18n="contactBody"></p>
      <ul class="contact-channels">
        <li><a href="mailto:mistr@klidnatechnika.cz">✉ mailto:mistr@klidnatechnika.cz</a></li>
        <li><a href="tel:+420700000000">☎ +420 700 000 000</a></li>
        <li><a href="https://wa.me/420700000000" rel="noopener" target="_blank">💬 WhatsApp</a></li>
        <li><a href="https://t.me/klidnatechnika" rel="noopener" target="_blank">✈ Telegram</a></li>
      </ul>
    </div>
    <form class="contact-form reveal" action="https://formsubmit.co/mistr@klidnatechnika.cz" method="POST" novalidate>
      <input type="hidden" name="_subject" value="Klidná technika — nová poptávka">
      <input type="hidden" name="_template" value="table">
      <input type="text" name="_honey" tabindex="-1" autocomplete="off" style="display:none">
      <label>Jméno<input name="name" required></label>
      <label>Telefon nebo e‑mail<input name="contact" required></label>
      <label>Co potřebujete?<textarea name="message" rows="4" required></textarea></label>
      <button type="submit" class="btn btn-primary" data-i18n="form.submit">Odeslat</button>
    </form>
  </div>
</section>

</main>

<footer class="site-footer">
  <div class="wrap">
    <p data-i18n="footer.line">© 2026 Klidná technika · Praha a okolí · Výjezd zdarma</p>
  </div>
</footer>

<script src="./i18n.js"></script>
<script src="./script.js"></script>
</body>
</html>

Other: === vercel.json ===
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.)\.(css|js|png|jpg|jpeg|svg|webp|woff2)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}

=== package.json ===
{
  "name": "klidna-technika",
  "version": "1.0.0",
  "private": true,
  "description": "Klidná technika — výjezdový mistr počítačových služeb (statický web)",
  "scripts": {
    "start": "npx serve .",
    "dev": "npx serve ."
  }
}

=== robots.txt ===
User-agent: 
Allow: /
Sitemap: /sitemap.xml

=== manifest.webmanifest ===
{
  "name": "Klidná technika",
  "short_name": "Klidná technika",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#FAF6EE",
  "theme_color": "#1E2530",
  "icons": []
}

=== locales/cs.json ===
(Дублирующий JSON-словарь для случая, если в будущем потребуется загружать локали по сети, а не из i18n.js. Содержимое идентично объекту window.I18N.cs из i18n.js.)

Scripts: === i18n.js ===
window.I18N = {
  cs: {
    meta: {
      title: "Klidná technika — výjezdový mistr počítačových služeb",
      description: "Výjezdový mistr počítačových služeb. Výjezd a první diagnostika zdarma."
    },
    brand: { name: "Klidná technika" },
    nav: { care: "Péče", security: "Bezpečí", learning: "Výuka", design: "Design", contact: "Kontakt" },
    hero: {
      eyebrow: "Výjezdový mistr · Praha a okolí",
      title: "Technika přeložená do lidské řeči.",
      sub: "Výjezd a první diagnostika zdarma. Platíte jen za práci a náhradní díly.",
      cta1: "Domluvit návštěvu",
      cta2: "Co umím",
      points: { p1: "Výjezd zdarma", p2: "První diagnostika zdarma", p3: "Bez technické vaty" }
    },
    main: "Technika přeloženo do lidské řeči — výjezd a první diagnostika zdarma.",
    group: {
      care:     { title: "Péče o počítač",  lede: "Aby váš stroj zase dýchal — bez prachu, bez čekání, bez zbytečných slov." },
      security: { title: "Bezpečí",         lede: "Klidný spánek a chytrá domácnost, srozumitelně nastavené." },
      learning: { title: "Výuka",           lede: "Pro dospělé i pro děti. Žádné poučování — jen klidné vysvětlení krok za krokem." },
      design:   { title: "Design a vývoj",  lede: "Aby vaše nabídka vypadala čistě a profesionálně." }
    },
    services: {
      cleaning:    { title: "Počítačový úklid" },
      upgrade:     { title: "Modernizace" },
      software:    { title: "Nastavení softwaru" },
      repair:      { title: "Oprava a likvidace" },
      webcam:      { title: "Web kamery" },
      alarm:       { title: "Domácí siréna" },
      appliances:  { title: "Chytrá domácnost" },
      literacy:    { title: "Počítačová gramotnost" },
      tutor:       { title: "Doučování informatiky" },
      chess:       { title: "Šachy" },
      development: { title: "Vysoké technologie a AI" },
      design:      { title: "Grafika a weby" }
    },
    cleaning:    "Když počítač začne hučet jako vysavač a topit jako kamna, většinou je na vině obyčejný prach. Stačí jedna návštěva ročně a vaše technika zase dýchá. Vyčistím vnitřek, vyměním teplovodivou pastu, promažu ventilátory a klávesnici zbavím drobků. Všechno vysvětlím běžnými slovy, bez složitých zkratek. Dojezd k vám domů i první prohlídka jsou zdarma — platíte jen za samotnou práci.",
    upgrade:     "Máte pocit, že počítač zestárl rychleji než vy? Často stačí vyměnit jednu nebo dvě součástky a stroj zase létá jako nový. Doporučím rychlý disk SSD, přidám paměť nebo vyměním baterii v notebooku. Vše vám řeknu lidsky — co k čemu slouží a proč to pomůže. Přijedu k vám zdarma a poradím, co se opravdu vyplatí, abyste neutráceli za zbytečnosti.",
    software:    "Windows se časem zaplní jako kapsa po zimě — vším možným a hlavně nepotřebným. Když počítač padá, zamrzá nebo se samy otevírají divná okna, je čas na pořádný úklid. Pročistím systém, odstraním viry, nainstaluji programy pro práci, školu i zábavu. Pomůžu i s vyplněním úředního formuláře nebo registrací na webu, pokud si nevíte rady. Domácí návštěva a první diagnostika nic nestojí — vy se jen díváte a ptáte.",
    repair:      "Než starý počítač odnesete do sběru, dejte mu druhou šanci. Mnohdy stačí vyměnit drobnou součástku a přístroj zase poslouží další roky. Když už opravdu dosloužil, rád si ho vezmu na náhradní díly — ušetříte si starosti s odvozem. Diagnostiku udělám u vás doma a zdarma, abyste věděli, na čem jste, ještě než cokoli rozhodnete.",
    webcam:      "Chcete vědět, kdo zazvonil u dveří, když nejste doma, nebo zkontrolovat chatu o víkendu z pohodlí gauče? Připojím vám libovolný počet kamer dovnitř i ven — ke kabelovému internetu i k Wi‑Fi. Naučím vás, jak se na obraz dívat z mobilu, a vysvětlím všechno bez technické vaty. Přijdu na obhlídku zdarma a navrhnu, kde kamery udělají největší službu.",
    alarm:       "Mívají sousedé volné ruce po setmění? Klidný spánek vrátí jednoduchá domovní siréna s SMS upozorněním přímo do mobilu. Namontuji ji na vstupní dveře bytu, garáže i kůlny, ovládá se na dálku jediným tlačítkem. Vysvětlím všechno krok za krokem, abyste věděli, co děláte. Posouzení i první návštěva jsou zdarma — ať vidíte, jestli to má pro vás smysl.",
    appliances:  "Chytrá domácnost zní složitě, ve skutečnosti je to ale jen pár tlačítek v mobilu. Propojím vám světla, zásuvky, Smart TV nebo termostat do jednoho přehledného ovládání. Ukážu, jak rozsvítit pokoj jediným klepnutím a jak nastavit, aby se topení samo přizpůsobilo vašemu dni. Mluvím s vámi jako se sousedem, ne jako z návodu. První návštěvu a prohlídku domácnosti dělám zdarma.",
    literacy:    "Bojíte se počítače víc než zlého psa? Naučím vás všechno potřebné běžnými slovy, ve vašem tempu a u vašeho stolu. Vyřídíme spolu e‑maily, nákupy přes internet, videohovory s rodinou i bezpečné placení kartou. Žádné poučování, žádné kroucení očima — jen klidné ukazování krok za krokem. První ukázková hodina je u vás doma zdarma, ať víte, do čeho jdete.",
    tutor:       "Když dítě sedí nad informatikou jako nad rébusem, často chybí jen někdo, kdo to vysvětlí lidsky. Mám vysokoškolské vzdělání v IT a roky praxe s vysvětlováním studentům. Probereme učivo tak, aby mu rozumělo, a domácí úkoly přestaly být drama. Úvodní setkání u vás doma je zdarma — ať se s dítětem poznáme bez stresu a vy víte, že to bude fungovat.",
    chess:       "Šachy nejsou jen hra — jsou to denní cvičení pro hlavu, trpělivost a logiku. Děti, které šachují, lépe počítají, plánují a méně podléhají chvilkovým náladám. Naučím vaše dítě hrát od prvních tahů až po pokročilé taktiky, srozumitelně a s humorem. První hodina u vás doma je zdarma — ať uvidíte, jestli si s dítětem padneme do oka.",
    development: "Umělé inteligenci se ve škole zatím moc neučí, a přitom právě s ní bude vaše dítě v dospělosti pracovat každý den. Ukážu mu, jak se na AI ptát chytře, jak si pomáhat s úkoly a jak rozumět věcem, které spolužáci jen opíšou. Vysvětlím vše prostě, bez záplavy zkratek a cizích slov. První návštěva a krátká ukázka jsou u vás doma zdarma — ať vidíte, co to vašemu dítěti přinese.",
    design:      "Potřebujete poutavý leták, jednoduché webové stránky nebo přehledný katalog služeb? Jsem vystudovaný vývojář s praxí a rád vám pomůžu, aby vaše nabídka vypadala čistě a profesionálně. Domluvíme se obyčejnou řečí — bez marketingových frází a tajemných pojmů. První konzultaci dělám zdarma, ať si srovnáme představy, dřív než cokoli začnu kreslit.",
    contactBody: "Ozvěte se, kdykoli vás to napadne — odpovím přátelsky a srozumitelně, a domluvíme se, kdy se zastavím. První návštěva i prohlídka jsou zdarma.",
    contact: { eyebrow: "Kontakt", title: "Pojďte do toho s klidem." },
    form: { name: "Jméno", contact: "Telefon nebo e‑mail", message: "Co potřebujete?", submit: "Odeslat" },
    footer: { line: "© 2026 Klidná technika · Praha a okolí · Výjezd zdarma" },
    a11y: { skip: "Přejít na obsah" },
    alt: {
      hero: "Mistr, který přijede k vám domů",
      cleaning: "Počítačový úklid",
      upgrade: "Modernizace počítače",
      software: "Nastavení softwaru",
      repair: "Oprava počítače",
      webcam: "Web kamery",
      alarm: "Domácí siréna",
      appliances: "Chytrá domácnost",
      literacy: "Počítačová gramotnost",
      tutor: "Doučování informatiky",
      chess: "Šachy",
      development: "AI a vysoké technologie",
      design: "Grafika a weby"
    }
  }
};

=== script.js ===
(function(){
  var root = document.documentElement;
  var STORAGE_KEY = "klidna-technika.lang";
  var FALLBACK = "cs";
  var supported = Object.keys(window.I18N || { cs: {} });

  function getByPath(obj, path){
    return path.split(".").reduce(function(acc, k){
      return (acc && acc[k] != null) ? acc[k] : null;
    }, obj);
  }

  function applyLang(lang){
    var dict = window.I18N[lang] || window.I18N[FALLBACK];
    if (!dict) return;
    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      var val = getByPath(dict, key);
      if (val == null) return;
      if (el.tagName === "META" || (el.hasAttribute("content") && el.tagName !== "OPTION")){
        el.setAttribute("content", val);
      } else if (el.tagName === "TITLE"){
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll("[data-alt-i18n]").forEach(function(el){
      var v = getByPath(dict, el.getAttribute("data-alt-i18n"));
      if (v != null) el.setAttribute("alt", v);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  function initLangSwitch(){
    var sel = document.getElementById("lang-select");
    if (!sel) return;
    var saved = FALLBACK;
    try { saved = localStorage.getItem(STORAGE_KEY) || FALLBACK; } catch(e){}
    if (supported.indexOf(saved) === -1) saved = FALLBACK;
    sel.value = saved;
    applyLang(saved);
    sel.addEventListener("change", function(e){ applyLang(http://e.target.value); });
  }

  function initReveal(){
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)){
      els.forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting){
          http://en.target.classList.add("is-visible");
          io.unobserve(http://en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function(el){ io.observe(el); });
  }

  function initSmoothAnchor(){
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener("click", function(e){
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (target){
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", id);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    initLangSwitch();
    initReveal();
    initSmoothAnchor();
  });
})();

Styles: === styles.css ===
:root{
  --bg:#FAF6EE;
  --bg-soft:#F2EBDB;
  --ink:#1E2530;
  --ink-soft:#4B5563;
  --line:#E2D9C6;
  --accent:#C95A3B;
  --accent-deep:#9B3F26;
  --mint:#7FB69A;
  --gold:#D7A55C;
  --radius:18px;
  --radius-sm:10px;
  --shadow-1:0 1px 2px rgba(30,37,48,.05),0 10px 30px rgba(30,37,48,.06);
  --shadow-2:0 2px 6px rgba(30,37,48,.08),0 30px 60px rgba(30,37,48,.10);
  --font-display:"Fraunces",ui-serif,Georgia,serif;
  --font-text:"Inter",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  --maxw:1180px;
  --space:clamp(16px,2vw,28px);
}
,::before,::after{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--font-text);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
img{max-width:100%;height:auto;display:block}
a{color:inherit;text-decoration:none}
button{font:inherit}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 var(--space)}
.visually-hidden{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
.skip{position:absolute;left:-9999px;top:0;background:var(--ink);color:#fff;padding:8px 14px;border-radius:0 0 var(--radius-sm) 0;z-index:100}
.skip:focus{left:0}

.site-header{position:sticky;top:0;z-index:30;background:rgba(250,246,238,.85);backdrop-filter:saturate(140%) blur(10px);-webkit-backdrop-filter:saturate(140%) blur(10px);border-bottom:1px solid var(--line)}
.header-inner{display:flex;align-items:center;gap:24px;padding:14px 0}
.brand{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-weight:700;font-size:20px}
.brand-mark{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--ink);color:var(--bg);font-size:18px;transform:rotate(-12deg);transition:transform .4s ease}
.brand:hover .brand-mark{transform:rotate(0deg) scale(1.05)}
.nav{margin-left:auto;display:flex;gap:22px;align-items:center}
.nav a{font-weight:500;color:var(--ink-soft);transition:color .2s}
.nav a:hover{color:var(--accent)}
.nav-cta{padding:8px 14px;border-radius:999px;background:var(--ink);color:var(--bg)!important;transition:background .2s,transform .2s}
.nav-cta:hover{background:var(--accent);transform:translateY(-1px)}
.lang-switch{position:relative}
.lang-switch select{appearance:none;-webkit-appearance:none;border:1px solid var(--line);background:transparent;padding:6px 30px 6px 12px;border-radius:999px;font:inherit;color:var(--ink);cursor:pointer;background-image:linear-gradient(45deg,transparent 50%,var(--ink) 50%),linear-gradient(135deg,var(--ink) 50%,transparent 50%);background-position:calc(100% - 14px) 50%,calc(100% - 10px) 50%;background-size:4px 4px,4px 4px;background-repeat:no-repeat}
.lang-switch select:focus{border-color:var(--accent);outline:none}

.hero{padding:clamp(40px,8vw,90px) 0 clamp(50px,8vw,100px);position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;inset:auto -10% -40% -10%;height:480px;background:radial-gradient(60% 60% at 50% 50%,rgba(201,90,59,.10),transparent 70%);pointer-events:none}
.hero::after{content:"";position:absolute;left:-80px;top:30%;width:280px;height:280px;background:radial-gradient(circle,rgba(127,182,154,.18),transparent 70%);pointer-events:none;filter:blur(20px)}
.hero-inner{position:relative;display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(24px,5vw,60px);align-items:center}
.eyebrow{letter-spacing:.14em;text-transform:uppercase;color:var(--accent);font-weight:600;font-size:13px;margin:0 0 14px}
.hero-title{font-family:var(--font-display);font-weight:600;font-size:clamp(36px,5.5vw,68px);line-height:1.06;margin:0 0 18px;letter-spacing:-.01em}
.hero-sub{font-size:clamp(17px,1.4vw,20px);color:var(--ink-soft);max-width:42ch;margin:0 0 28px}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:999px;font-weight:600;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease,background .2s ease,color .2s ease,border-color .2s ease;border:1px solid transparent;text-align:center}
.btn-primary{background:var(--ink);color:var(--bg)}
.btn-primary:hover{background:var(--accent);transform:translateY(-1px);box-shadow:var(--shadow-1)}
.btn-ghost{background:transparent;color:var(--ink);border-color:var(--line)}
.btn-ghost:hover{border-color:var(--ink);transform:translateY(-1px)}
.hero-points{list-style:none;padding:0;margin:0;display:flex;gap:18px 22px;flex-wrap:wrap;color:var(--ink-soft)}
.hero-points li{display:flex;align-items:center;gap:8px;font-size:14px}
.hero-points li::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--mint);box-shadow:0 0 0 4px rgba(127,182,154,.18)}
.hero-figure{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:370/640;max-width:380px;justify-self:end;width:100%;box-shadow:var(--shadow-2);background:linear-gradient(180deg,#F4E7CC,#EAD2A4)}
.hero-figure::before{content:"";position:absolute;inset:0;background:radial-gradient(120% 70% at 50% 100%,rgba(0,0,0,.10),transparent 60%);pointer-events:none}
.hero-figure img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center bottom;transition:opacity .5s ease,transform .8s ease}
.hero-figure .img-hover{opacity:0;transform:scale(1.03)}
.hero-figure:hover .img-main,.hero-figure:focus-visible .img-main{opacity:0}
.hero-figure:hover .img-hover,.hero-figure:focus-visible .img-hover{opacity:1;transform:scale(1)}

.services{padding:clamp(40px,7vw,90px) 0}
.group{margin-bottom:clamp(40px,6vw,72px)}
.group-head{display:grid;grid-template-columns:auto 1fr;column-gap:20px;align-items:end;margin-bottom:28px}
.group-num{font-family:var(--font-display);font-size:clamp(48px,7vw,80px);line-height:.9;color:var(--accent);font-weight:600;letter-spacing:-.02em;align-self:end}
.group-title{grid-column:2;font-family:var(--font-display);font-size:clamp(28px,3.2vw,40px);margin:0;font-weight:600;letter-spacing:-.01em}
.group-lede{grid-column:2;color:var(--ink-soft);max-width:60ch;margin:8px 0 0}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:22px}
.cards-one{grid-template-columns:repeat(auto-fit,minmax(260px,520px));justify-content:center}
.card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:18px;display:flex;flex-direction:column;gap:14px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;position:relative;overflow:hidden}
.card::before{content:"";position:absolute;inset:auto -40% -60% auto;width:220px;height:220px;background:radial-gradient(circle,rgba(215,165,92,.18),transparent 70%);opacity:0;transition:opacity .4s ease;pointer-events:none}
.card:hover::before{opacity:1}
.card:hover{transform:translateY(-4px);box-shadow:var(--shadow-1);border-color:transparent}
.card figure{position:relative;margin:0;aspect-ratio:4/3;border-radius:var(--radius-sm);overflow:hidden;background:var(--bg-soft)}
.card figure img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:8%;transition:opacity .45s ease,transform .6s ease}
.card .img-hover{opacity:0;transform:scale(1.05)}
.card:hover .img-main,.card:focus-within .img-main{opacity:0}
.card:hover .img-hover,.card:focus-within .img-hover{opacity:1;transform:scale(1)}
.card h3{font-family:var(--font-display);font-size:22px;margin:0;font-weight:600}
.card p{margin:0;color:var(--ink-soft);font-size:15.5px}

.divider{height:1px;background:linear-gradient(90deg,transparent,var(--line),transparent);margin:0 0 clamp(40px,6vw,72px)}

.contact{padding:clamp(50px,7vw,90px) 0;background:linear-gradient(180deg,var(--bg-soft),var(--bg))}
.contact-inner{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(24px,5vw,60px);align-items:start}
.contact h2{font-family:var(--font-display);font-size:clamp(30px,3.6vw,46px);margin:0 0 14px;font-weight:600;letter-spacing:-.01em}
.contact-copy p{color:var(--ink-soft);max-width:50ch;margin:0}
.contact-channels{list-style:none;padding:0;margin:22px 0 0;display:grid;gap:10px}
.contact-channels a{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:999px;background:#fff;border:1px solid var(--line);transition:border-color .2s,transform .2s,color .2s}
.contact-channels a:hover{border-color:var(--accent);transform:translateY(-1px);color:var(--accent)}
.contact-channels .ico{width:22px;text-align:center}
.contact-form{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:22px;display:grid;gap:14px;box-shadow:var(--shadow-1)}
.contact-form label{display:grid;gap:6px;font-size:14px;color:var(--ink-soft)}
.contact-form input,.contact-form textarea{font:inherit;color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:var(--radius-sm);padding:12px 14px;outline:none;transition:border-color .2s,box-shadow .2s;width:100%}
.contact-form textarea{resize:vertical;min-height:96px}
.contact-form input:focus,.contact-form textarea:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(201,90,59,.12)}
.contact-form .btn{justify-self:start}

.site-footer{padding:24px 0 32px;border-top:1px solid var(--line);color:var(--ink-soft);font-size:14px;text-align:center}

.reveal{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease}
.http://reveal.is-visible{opacity:1;transform:none}

@media (max-width:860px){
  .nav{display:none}
  .header-inner{padding:12px 0}
  .hero-inner{grid-template-columns:1fr}
  .hero-figure{justify-self:center;max-width:340px}
  .contact-inner{grid-template-columns:1fr}
  .group-head{grid-template-columns:1fr}
  .group-title,.group-lede{grid-column:1}
  .group-num{display:inline-block;margin-bottom:4px}
}
@media (max-width:520px){
  body{font-size:16px}
  .btn{padding:12px 18px;width:100%;justify-content:center}
  .hero-cta{flex-direction:column}
}

:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:6px}

@media (prefers-reduced-motion:reduce){
  ,::before,::after{animation:none!important;transition:none!important}
  html{scroll-behavior:auto}
}

## 🎨 Концепция дизайна — «Тёплый керамический минимализм»

Задача — превратить рекламную страницу выездного мастера в спокойное, тёплое и человечное цифровое пространство, в котором посетителю не страшно начать. Главный лозунг записи Site content — *«Technika přeloženo do lidské řeči»* — задаёт интонацию: без жаргона, без давления, с заботой.

### Палитра

- **Фон** — мягкий кремово-овсяный `#FAF6EE` с приглушённой керамической вариацией `#F2EBDB`.
- **Текст** — глубокий графит `#1E2530` и пыльный серо-синий `#4B5563` для второстепенных строк.
- **Акцент** — тёплая терракота `#C95A3B` (заголовки секций, ховеры, CTA-обводки).
- **Поддержка** — мятный `#7FB69A` (маркеры преимуществ) и медовый `#D7A55C` (мягкие световые блики на карточках).
- **Линии** — нейтральная песочная `#E2D9C6`, чтобы рамки не «резали» интерфейс.

### Типографика

- **Fraunces** (Google Fonts) — для заголовков и крупных нумерующих цифр секций. Тёплый, гуманистический шрифт с характерными засечками — добавляет «ремесленную» интонацию.
- **Inter** — для основного текста и UI. Чистый, идеально читаемый на мобильных.

### Компоновка

- **Шапка** прилипает к верху и слегка блюрит фон при прокрутке.
- **Hero**: слева крупный заголовок и слоган из свойства `main`, два CTA («Domluvit návštěvu» / «Co umím») и три мятных тика — гарантии. Справа — портрет мастера высокого формата (370×640) c мягкой светлой керамической подложкой; при наведении/фокусе плавно меняется на `hero--hover`.
- **Услуги**: 4 группы (Péče, Bezpečí, Výuka, Design a vývoj). У каждой — крупная цифра в стиле журнальной вёрстки, заголовок Fraunces и подзаголовок-лид. Внутри — сетка карточек `auto-fit minmax(260px, 1fr)`, в дизайн-группе всего одна центрированная карточка.
- **Карточка услуги**: белый фон, мягкая тень при ховере, верхняя «полка-фигура» 4:3 с двумя слоями изображений (`-main`/`-hover`), под ней заголовок и абзац. Все 12 услуг — на месте и сопоставлены с правильными парами картинок (по полю `section`).
- **Контакты**: тёплый градиент фона, заголовок Fraunces, абзац из свойства `contact`, четыре способа связи (e-mail, телефон, WhatsApp, Telegram) и форма обратной связи через бесплатный сервис **FormSubmit** (только `mailto`-маршрутизация на e-mail мастера, без бэкенда).
- **Подвал** — тонкая строка с копирайтом.

### Микровзаимодействия

- Плавный hover-swap изображений: `opacity` + лёгкий `scale` через `transition`.
- Появление блоков при скролле через **IntersectionObserver** (`.reveal` → `.is-visible`).
- Плавная прокрутка по якорям через `scrollIntoView`.
- Уважение к `prefers-reduced-motion` — анимации отключаются при системных настройках.
- Доступность: skip-link, видимый `:focus-visible`, alt-тексты через словарь `alt.*`, семантические `<header>/<main>/<section>/<article>/<footer>`.

### Адаптивность

Mobile-first: на узких экранах меню сворачивается, hero перестраивается в одну колонку, фотография мастера центрируется и сжимается, карточки услуг укладываются друг под друга. Проверены брейкпоинты `860px` и `520px`.

## 🗂️ Структура папок и сборка

```
klidna-technika/
├─ index.html              ← из свойства Html
├─ styles.css              ← из свойства Styles
├─ i18n.js                 ← из свойства Scripts (первый блок)
├─ script.js               ← из свойства Scripts (второй блок)
├─ vercel.json             ← из свойства Other
├─ package.json            ← из свойства Other
├─ robots.txt              ← из свойства Other
├─ manifest.webmanifest    ← из свойства Other
├─ locales/
│   └─ cs.json             ← (опционально) копия словаря из i18n.js
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

### Что куда положить

1. **Html** → файл `index.html` в корне проекта. В свойстве код предварён маркером `=== index.html ===`; всё, что после маркера, — содержимое файла.
2. **Styles** → файл `styles.css` в корне.
3. **Scripts** содержит два блока, разделённых маркерами `=== i18n.js ===` и `=== script.js ===`. Каждый блок — отдельный файл в корне.
4. **Other** содержит четыре файла (`vercel.json`, `package.json`, `robots.txt`, `manifest.webmanifest`) и комментарий об опциональном `locales/cs.json`. Создавайте по маркерам.
5. **Изображения**: создайте папку `./img/` и положите туда все 26 файлов (12 услуг × 2 + 2 портрета мастера). Имена должны строго совпадать с тем, что описано на странице [Main images](https://www.notion.so/Main-images-3614fe82e7d4800891eacef2c9d4ab58?pvs=21) (`slug--main.png`, `slug--hover.png`).

### Локальный запуск

```bash
# Самый простой способ:
npx serve .
# или
python3 -m http.server 8080
```

Затем откройте `http://localhost:8080`.

### Переключение языков

- Сейчас словарь содержит только `cs`. Чтобы добавить, например, английский, расширьте объект `window.I18N` в `i18n.js`:

```jsx
window.I18N.en = { meta: { title: "…" }, /* … остальные ключи по той же схеме … */ };
```

- Затем добавьте опцию в селектор в `index.html`:

```html
<option value="en">EN</option>
```

- Скрипт `script.js` автоматически подхватит новый язык, переключит `<html lang>` и применит все строки из словаря. Выбор сохраняется в `localStorage` под ключом `klidna-technika.lang`.

## 🚀 Развёртывание на Vercel

### Вариант A. Через GitHub (рекомендуется)

1. Создайте новый репозиторий на GitHub (например, `klidna-technika`).
2. Из локальной папки проекта:

```bash
git init
git add .
git commit -m "Klidná technika: initial site"
git branch -M main
git remote add origin https://github.com/<ваш-логин>/klidna-technika.git
git push -u origin main
```

1. Зайдите на [vercel.com](http://vercel.com), нажмите **Add New → Project**, выберите ваш репозиторий.
2. На экране настроек:
    - **Framework Preset**: Other.
    - **Build Command**: оставьте пустым.
    - **Output Directory**: оставьте пустым (Vercel возьмёт корень).
3. Нажмите **Deploy**. Через 30–60 секунд получите ссылку вида `https://klidna-technika.vercel.app`.

### Вариант B. Через Vercel CLI без Git

```bash
npm i -g vercel
vercel login
vercel        # первая публикация (preview)
vercel --prod # промоушен в production
```

### Подключение собственного домена

1. В проекте на Vercel откройте **Settings → Domains**.
2. Введите свой домен (например, `klidnatechnika.cz`) и нажмите **Add**.
3. У регистратора домена добавьте записи, которые покажет Vercel: либо `A` на их IP, либо `CNAME` на `cname.vercel-dns.com`.
4. Подождите, пока DNS обновится (обычно 5–30 минут). Vercel автоматически выпустит SSL-сертификат.

### Альтернативные бесплатные хостинги

- **Netlify** — drag-and-drop папки в [app.netlify.com](http://app.netlify.com) или интеграция с Git.
- **Cloudflare Pages** — подключение Git-репозитория, build command пустой.
- **GitHub Pages** — включите Pages в настройках репозитория и выберите ветку `main`.

## ✅ Контроль качества

- Все 12 услуг присутствуют и сопоставлены с правильными парами изображений (по полю `section`).
- Пути к изображениям соответствуют формату `./img/<slug>--main.png` и `./img/<slug>--hover.png`.
- HTML семантичен, использует `<header>/<main>/<section>/<article>/<footer>`, alt-тексты задаются скриптом.
- CSS использует современные приёмы (CSS variables, Grid, Flexbox, `clamp()`), без «висящих» селекторов.
- JS не выбрасывает ошибок (всё в IIFE, проверки на наличие элементов), уважает `prefers-reduced-motion`.
- Переключатель языка работает (сейчас одна опция `cs`), словарь расширяется без изменения HTML.
- Форма обратной связи не требует серверной части — использует бесплатный сервис **FormSubmit** (нужно один раз подтвердить e-mail мастера на их сайте после первого письма).
- Перед публикацией замените заглушки `mistr@klidnatechnika.cz`, `+420 700 000 000`, `wa.me/420700000000`, `t.me/klidnatechnika` на реальные контакты мастера.