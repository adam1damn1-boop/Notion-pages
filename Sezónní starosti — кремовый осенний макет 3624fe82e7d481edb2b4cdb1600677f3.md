# Sezónní starosti — кремовый осенний макет

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#c8553d">
<meta name="description" content="Sezónní starosti — výjezdní počítačový mistr. Údržba, bezpečnost, výuka a design. Výjezd a první diagnostika zdarma.">
<title>Sezónní starosti — počítačový mistr na zavolanou</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%8D%82%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="./styles.css">
</head>
<body>
<a class="skip-link" href="#main">Přeskočit na obsah</a>
<header class="site-header" id="top">
  <div class="container nav">
    <a href="#top" class="brand">
      🍂
      Sezónní starosti
    </a>
    <nav class="primary-nav" aria-label="Hlavní navigace">
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#safety" data-i18n="http://nav.safety">Bezpečí</a>
      <a href="#learning" data-i18n="nav.learning">Učení</a>
      <a href="#design" data-i18n="http://nav.design">Design</a>
      <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
    <div class="lang-switch" role="group" aria-label="Jazyk">
      <button type="button" data-lang="cs" class="is-active">CS</button>
    </div>
    <button class="menu-toggle" type="button" aria-label="Otevřít menu" aria-expanded="false"></button>
  </div>
</header>

<main id="main">
  <section class="hero">
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="container hero__grid">
      <div class="hero__copy" data-reveal>
        <p class="eyebrow" data-i18n="hero.eyebrow">Výjezd a první diagnostika zdarma</p>
        <h1 class="hero__title" data-i18n="hero.title">Technika ve vaší domácnosti — po celý rok v pohodě.</h1>
        <p class="hero__lede" data-i18n="hero.lede">Výjezdní počítačový mistr pro celou rodinu — údržba, bezpečnost, výuka i design. Platíte jen za skutečnou práci a díly.</p>
        <div class="hero__cta">
          <a href="#contact" class="btn btn--primary">Zavolat mistra</a>
          <a href="#services" class="btn btn--ghost">Prohlédnout služby</a>
        </div>
        <ul class="hero__stats">
          <li><strong>12</strong>služeb pro domácnost</li>
          <li><strong>0 Kč</strong>za výjezd a diagnostiku</li>
          <li><strong>4</strong>sezóny v péči</li>
        </ul>
      </div>
      <aside class="hero__art" aria-hidden="true">
        🍂
        🍁
        ❄️
        🌸
        ☀️
        <div class="hero__disc"></div>
      </aside>
    </div>
  </section>

  <section id="services" class="services">
    <header class="section-head container" data-reveal>
      <p class="eyebrow" data-i18n="services.eyebrow">Co umím</p>
      <h2 data-i18n="services.title">Dvanáct služeb pro každou sezonu</h2>
      <p class="lead" data-i18n="services.lead">Od jarní modernizace po zimní bezpečnost — vyřeším techniku tak, aby vám sloužila, ne komandovala.</p>
    </header>

    <div id="care" class="services__group container">
      <div class="group-head" data-reveal>
        01
        <div>
          <h3 data-i18n="http://group.care.title">Péče o počítač</h3>
          <p data-i18n="http://group.care.desc">Aby technika přečkala léto i zimu bez stresu.</p>
        </div>
      </div>
      <div class="cards">
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/cleaning--main.png" alt="cleaning" class="card__image card__image--main" loading="lazy">
            <img src="./img/cleaning--hover.png" alt="cleaning" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            1.1
            <h4 data-i18n="http://card.cleaning.title">Počítačový úklid</h4>
            <p data-i18n="http://card.cleaning.body">Letní vedra dělají z notebooku malý radiátor — ventilátor řve, počítač zamrzá a nervy jsou pryč. Stačí jednou ročně pořádná údržba: vyfoukám prach z útrob, vyměním teplovodivou pastu, promažu ventilátory a v případě potřeby vylepším chlazení. Přijedu k vám domů zdarma a první prohlídku udělám také bez poplatku. Platíte jen za skutečnou práci a díly. Vaše technika tak v klidu přečká léto i zimu.</p>
          </div>
        </article>
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/upgrade--main.png" alt="upgrade" class="card__image card__image--main" loading="lazy">
            <img src="./img/upgrade--hover.png" alt="upgrade" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            1.2
            <h4 data-i18n="card.upgrade.title">Modernizace</h4>
            <p data-i18n="card.upgrade.body">Když počítač začne loudat i u běžných stránek, neznamená to hned koupi nového stroje. Často stačí vyměnit pomalý disk za rychlé SSD, přidat paměť, vyměnit procesor nebo dát notebooku novou baterii. Přijdu k vám, na místě se podívám, co počítači skutečně chybí, a poradím — výjezd i první diagnostika jsou zdarma. Ušetříte za nový stroj a vaše stará technika dostane druhý dech, ať už ji potřebujete na podzimní práci, zimní filmy nebo jarní cestování.</p>
          </div>
        </article>
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/software--main.png" alt="software" class="card__image card__image--main" loading="lazy">
            <img src="./img/software--hover.png" alt="software" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            1.3
            <h4 data-i18n="http://card.software.title">Nastavení softwaru</h4>
            <p data-i18n="http://card.software.body">Když Windows začne fungovat divně, je plný nepotřebných programů a možná i virů, je to jako neuklizený byt — všechno trvá dvakrát déle. Provedu kompletní úklid systému, nainstaluji modernější verzi Windows, doplním programy pro práci, studium i zábavu a vyřeším potíže s internetem. Pomohu i s registrací na webech, podáním žádostí na úřadech a vyplňováním sezónních formulářů. Dorazím k vám zdarma a první konzultace je rovněž bez poplatku — vy jen řeknete, co vás trápí.</p>
          </div>
        </article>
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/repair--main.png" alt="repair" class="card__image card__image--main" loading="lazy">
            <img src="./img/repair--hover.png" alt="repair" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            1.4
            <h4 data-i18n="http://card.repair.title">Oprava a recyklace</h4>
            <p data-i18n="http://card.repair.body">Než starou techniku odnesete do popelnice, dejte jí ještě jednu šanci. Často se počítač nebo notebook dá oživit výměnou několika dílů a poslouží další roky — třeba dětem na úkoly, babičce na videohovory nebo vám jako záložní stroj na chalupě. A pokud už se opravdu neoplatí opravovat, vezmu si ho na náhradní díly, abyste se nemuseli starat o ekologickou likvidaci. Výjezd k vám i posouzení stavu jsou zdarma.</p>
          </div>
        </article>
      </div>
    </div>

    <div class="banner" data-reveal>
      <div class="container banner__inner">
        <p class="banner__text" data-i18n="http://banner.free">Výjezd a první diagnostika jsou vždy zdarma — platíte jen za skutečnou práci a díly.</p>
      </div>
    </div>

    <div id="safety" class="services__group container">
      <div class="group-head" data-reveal>
        02
        <div>
          <h3 data-i18n="http://group.safety.title">Bezpečnost</h3>
          <p data-i18n="http://group.safety.desc">Klidnější dovolená i pracovní den.</p>
        </div>
      </div>
      <div class="cards">
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/webcam--main.png" alt="webcam" class="card__image card__image--main" loading="lazy">
            <img src="./img/webcam--hover.png" alt="webcam" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            2.1
            <h4 data-i18n="http://card.webcam.title">Web-kamery</h4>
            <p data-i18n="http://card.webcam.body">Odjíždíte v létě na chalupu a v hlavě vám neustále hloubá, jestli je doma všechno v pořádku? S kamerami se kdykoli podíváte na byt, dvůr, garáž i vchodové dveře přímo z telefonu — a s návštěvou si v případě potřeby promluvíte, i když jste stovky kilometrů daleko. Připojím vám tolik domácích či venkovních kamer, kolik potřebujete, ke kabelovému internetu nebo Wi-Fi. Výjezd a první prohlídka prostor jsou zdarma, vy už jen v klidu sledujete svůj domov.</p>
          </div>
        </article>
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/alarm--main.png" alt="alarm" class="card__image card__image--main" loading="lazy">
            <img src="./img/alarm--hover.png" alt="alarm" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            2.2
            <h4 data-i18n="card.alarm.title">Domácí alarm</h4>
            <p data-i18n="card.alarm.body">Bojíte se nezvaných hostů, ať už jste v práci, na zimní dovolené nebo na letní chalupě? Namontuji vám přímo na vchodové dveře bytu nebo garáže dálkově ovládaný alarm s hlasitou sirénou a SMS upozorněním na telefon. Jakmile někdo zkusí dveře otevřít, hned o tom víte. Přijedu zdarma, na místě poradím, co se k vašemu vchodu hodí nejlépe, a první konzultace nestojí ani korunu. Spát budete klidněji od první noci.</p>
          </div>
        </article>
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/appliances--main.png" alt="appliances" class="card__image card__image--main" loading="lazy">
            <img src="./img/appliances--hover.png" alt="appliances" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            2.3
            <h4 data-i18n="card.appliances.title">Chytrá domácnost</h4>
            <p data-i18n="card.appliances.body">Smart TV, chytré žárovky, termostat, robotický vysavač — moderní spotřebiče si rozumí mezi sebou, jen je potřeba je naučit spolupracovat. Nastavím vám aplikaci v telefonu, propojím všechna zařízení a srozumitelně vás naučím, jak je ovládat — i kdybyste se s technikou doposud moc nekamarádili. Hodí se to v zimě, když chcete vytopený byt ještě před návratem z práce, i v létě, kdy z dovolené stáhnete žaluzie. Výjezd a první diagnostika jsou samozřejmě zdarma.</p>
          </div>
        </article>
      </div>
    </div>

    <div class="spotlight" data-reveal>
      <div class="container spotlight__inner">
        <figure class="spotlight__photo">
          <img src="./img/hero--main.png" alt="master" class="spotlight__img spotlight__img--main" loading="lazy">
          <img src="./img/hero--hover.png" alt="master" class="spotlight__img spotlight__img--hover" loading="lazy">
        </figure>
        <div class="spotlight__copy">
          <p class="eyebrow" data-i18n="spotlight.eyebrow">Váš mistr</p>
          <h2 data-i18n="spotlight.title">Diplomovaný IT odborník, který přijede až k vám.</h2>
          <p data-i18n="spotlight.body">Vysokoškolské vzdělání v informatice, dlouhá praxe s domácí technikou, výukou i designem. Beru si na starost všechno od prachu ve ventilátoru po web vaší firmy — a celé to vysvětlím srozumitelnou češtinou.</p>
          <a href="#contact" class="btn btn--primary">Domluvit návštěvu</a>
        </div>
      </div>
    </div>

    <div id="learning" class="services__group container">
      <div class="group-head" data-reveal>
        03
        <div>
          <h3 data-i18n="group.learning.title">Učení</h3>
          <p data-i18n="group.learning.desc">Pro dospělé i děti — v klidu u vás doma.</p>
        </div>
      </div>
      <div class="cards">
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/literacy--main.png" alt="literacy" class="card__image card__image--main" loading="lazy">
            <img src="./img/literacy--hover.png" alt="literacy" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            3.1
            <h4 data-i18n="card.literacy.title">Počítačová gramotnost</h4>
            <p data-i18n="card.literacy.body">Připadá vám, že vás moderní svět trochu předbíhá — e-mail, internetové bankovnictví, úřední formuláře, umělá inteligence? Nic se neděje, dohoníme to v klidu u vás doma. Naučím vás vše, co skutečně potřebujete pro každodenní život, krok za krokem, vlastním tempem a bez nesrozumitelného hantýrku. Sezónní starosti jako daňové přiznání nebo objednání zájezdu pak zvládnete hravě sami. Příjezd k vám i první ukázková lekce jsou bez poplatku.</p>
          </div>
        </article>
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/tutor--main.png" alt="tutor" class="card__image card__image--main" loading="lazy">
            <img src="./img/tutor--hover.png" alt="tutor" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            3.2
            <h4 data-i18n="card.tutor.title">Doučování informatiky</h4>
            <p data-i18n="card.tutor.body">Informatika ve škole vašeho dítěte trochu skřípe? Mám vysokoškolské vzdělání v IT a zkušenosti s výukou studentů z dob doktorského studia. Vysvětlím látku tak, aby jí dítě skutečně rozumělo — od základů až po náročnější témata před zkouškami nebo přijímačkami. Lekce probíhají přímo u vás doma, v klidném prostředí, a první seznámení je zdarma. Investice do vědomostí v pravou chvíli se vrací celý život.</p>
          </div>
        </article>
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/chess--main.png" alt="chess" class="card__image card__image--main" loading="lazy">
            <img src="./img/chess--hover.png" alt="chess" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            3.3
            <h4 data-i18n="card.chess.title">Šachy</h4>
            <p data-i18n="card.chess.body">Šachy nejsou jen hra — jsou to dlouhé zimní večery u stolu, kdy se rodina baví bez obrazovek, a zároveň skvělá průprava pro logické myšlení dítěte. Hraji velmi dobře a rád ukážu vašemu synovi či dceři, jak přemýšlet o tah dopředu — což se hodí ve škole, ve sportu i v životě. Přijedu k vám domů, první ukázková hodina je bez poplatku, a vy uvidíte, jestli to vaše dítě chytne. Někdy z malé partie vyroste velká vášeň.</p>
          </div>
        </article>
        <article class="card" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/development--main.png" alt="development" class="card__image card__image--main" loading="lazy">
            <img src="./img/development--hover.png" alt="development" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            3.4
            <h4 data-i18n="card.development.title">Vysoké technologie</h4>
            <p data-i18n="card.development.body">Svět se mění rychleji než kdy dřív a děti, které dnes umí pracovat s umělou inteligencí, budou zítra napřed. Ve škole se tomu ale skoro nikdo nevěnuje. Naučím vaše dítě používat moderní technologie chytře — k úkolům, projektům, kreativním nápadům i k pochopení složitých předmětů. Nabízím to formou volnočasového kroužku nebo doučování v průběhu celého školního roku. Přijedu k vám zdarma, první lekce je nezávazná a vy uvidíte, jak se vašemu dítěti rozzáří oči.</p>
          </div>
        </article>
      </div>
    </div>

    <div id="design" class="services__group container">
      <div class="group-head" data-reveal>
        04
        <div>
          <h3 data-i18n="http://group.design.title">Design</h3>
          <p data-i18n="http://group.design.desc">Vizuální tvář vaší značky pro každou sezonu.</p>
        </div>
      </div>
      <div class="cards cards--single">
        <article class="card card--wide" data-reveal>
          <a class="card__media" href="#contact">
            <img src="./img/design--main.png" alt="design" class="card__image card__image--main" loading="lazy">
            <img src="./img/design--hover.png" alt="design" class="card__image card__image--hover" loading="lazy">
          </a>
          <div class="card__body">
            4
            <h4 data-i18n="http://card.design.title">Grafika a weby</h4>
            <p data-i18n="http://card.design.body">Otevíráte na jaře novou kavárnu, plánujete letní akci nebo chcete v zimě rozeslat originální přání zákazníkům? Jako diplomovaný vývojář pro vás připravím stylové letáky, plakáty, webové stránky, katalogy zboží či dokonce celé aplikace. Společně vymyslíme, co vaši firmu nebo nápad nejlépe vystihne. Přijedu si vyslechnout vaše představy bezplatně a teprve podle nich domluvíme rozsah práce. Vaše značka tak roste s každou sezonou.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="container contact__grid" data-reveal>
      <div class="contact__copy">
        <p class="eyebrow" data-i18n="contact.eyebrow">📞 Spojme se</p>
        <h2 data-i18n="contact.title">Domluvíme se snadno a bez tlaku</h2>
        <p data-i18n="contact.body">Ozvěte se kdykoli — ráno, večer i o víkendu. Krátký telefonát stačí, abychom probrali, co vás trápí, a domluvili návštěvu. Výjezd k vám i první diagnostika jsou vždy zdarma, abyste se rozhodovali v klidu.</p>
        <ul class="contact__list">
          <li><a href="tel:+420777123456">☎+420 777 123 456</a></li>
          <li><a href="mailto:mistr@sezonni-starosti.cz">✉mistr@sezonni-starosti.cz</a></li>
          <li><a href="https://wa.me/420777123456" target="blank" rel="noopener"><span class="contacticon" aria-hidden="true">💬</span>WhatsApp</a></li>
          <li><a href="https://t.me/sezonnistarosti" target="_blank" rel="noopener"><span class="contacticon" aria-hidden="true">✈</span>Telegram</a></li>
        </ul>
      </div>
      <form class="contactform" action="https://formsubmit.co/mistr@sezonni-starosti.cz" method="POST">
        <label>Jméno<input type="text" name="name" required></label>
        <label>Telefon nebo e-mail<input type="text" name="contact" required></label>
        <label>S čím vám můžu pomoci?<textarea name="message" rows="4" required></textarea></label>
        <button type="submit" class="btn btn--primary">Odeslat poptávku</button>
        <p class="formhint" data-i18n="form.hint">Ozvu se obvykle do několika hodin.</p>
      </form>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container footerinner">
    <p>©  Sezónní starosti — výjezdní počítačový mistr</p>
    <p class="footer_meta" data-i18n="footer.meta">Vyrobeno s láskou pro českou domácnost.</p>
  </div>
</footer>
<script src="./scripts.js" defer></script>
</body>
</html>
Other: === vercel.json ===
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/img/(.).png",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(styles.css|scripts.js)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=3600" }
      ]
    }
  ]
}

=== robots.txt ===
User-agent: 
Allow: /

=== manifest.webmanifest ===
{
  "name": "Sezónní starosti",
  "short_name": "Sez. starosti",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#faf6ef",
  "theme_color": "#c8553d",
  "icons": []
}

=== http://README.md ===
# Sezónní starosti

Static, multi-language (cs) landing page for an in-home computer service technician.

## Quick start

1. Copy index.html, styles.css, scripts.js, vercel.json, robots.txt, manifest.webmanifest into a project folder.
2. Create an img/ subfolder and add the 26 image files (slug--main.png and slug--hover.png for each of the 12 services + hero pair).
3. Open index.html in a browser or run npx serve ..

## i18n

All translatable strings live in elements marked with data-i18n="key". The bootstrap script scrapes the cs strings from the HTML on load. To add another language, register it in scripts.js and add a <button data-lang="...">...</button> to .lang-switch.

## Deploy

Vercel: vercel --prod from the project root. Netlify / Cloudflare Pages / GitHub Pages all work too — it is a fully static site, no build step required.
Scripts: === scripts.js ===
(function(){
  "use strict";

  // Build base dictionary from current HTML (cs by default).
  // To add a new language, register it on the I18N object below.
  // Example:
  //   I18N.en = { "http://brand.name": "Seasonal Care", "http://nav.care": "Care", ... };
  //   And add: <button data-lang="en">EN</button> inside .lang-switch.
  var I18N = { cs: {} };
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var key = el.getAttribute("data-i18n");
    I18N.cs[key] = el.textContent.trim();
  });

  var state = { lang: "cs" };

  function applyI18n(lang){
    var dict = I18N[lang] || I18N.cs;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-switch button").forEach(function(b){
      b.classList.toggle("is-active", b.dataset.lang === lang);
    });
    state.lang = lang;
    try { localStorage.setItem("ss_lang", lang); } catch(e){}
  }

  function initLangSwitch(){
    document.querySelectorAll(".lang-switch button").forEach(function(btn){
      btn.addEventListener("click", function(){ applyI18n(btn.dataset.lang); });
    });
    var saved = null;
    try { saved = localStorage.getItem("ss_lang"); } catch(e){}
    if (saved && I18N[saved]) applyI18n(saved);
  }

  function initMenu(){
    var btn = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".primary-nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal(){
    var els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)){
      els.forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){
          http://e.target.classList.add("is-visible");
          io.unobserve(http://e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach(function(el){ io.observe(el); });
  }

  function initYear(){
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function(){
    initYear();
    initLangSwitch();
    initMenu();
    initReveal();
  });
})();
Styles: === styles.css ===
:root{
  --bg:#faf6ef;--bg-alt:#f3ece0;--ink:#1f2233;--ink-soft:#4a4d62;--muted:#7f8093;
  --line:rgba(31,34,51,0.12);--primary:#c8553d;--primary-dark:#a8412d;
  --accent:#588157;--accent-soft:#d8e2c4;--gold:#e3a55c;
  --shadow:0 22px 60px -30px rgba(45,30,15,0.35);
  --radius:22px;--radius-sm:14px;--max:1180px;
  --font-display:"Fraunces","Georgia",serif;
  --font-body:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  --ease:cubic-bezier(.4,.14,.3,1);
}
{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:var(--font-body);color:var(--ink);background:var(--bg);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;background-image:radial-gradient(1200px 600px at 90% -100px,rgba(227,165,92,0.18),transparent 60%),radial-gradient(900px 500px at -10% 30%,rgba(88,129,87,0.14),transparent 70%)}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font-family:inherit}
.container{width:100%;max-width:var(--max);padding:0 24px;margin:0 auto}
.skip-link{position:absolute;left:-200%;top:8px;background:var(--ink);color:#fff;padding:8px 14px;border-radius:8px}
.skip-link:focus{left:8px;z-index:100}
.eyebrow{text-transform:uppercase;letter-spacing:.14em;font-size:12px;font-weight:600;color:var(--primary);margin:0 0 12px}

.site-header{position:sticky;top:0;z-index:30;background:rgba(250,246,239,.85);backdrop-filter:saturate(180%) blur(14px);-webkit-backdrop-filter:saturate(180%) blur(14px);border-bottom:1px solid var(--line)}
.nav{display:flex;align-items:center;gap:28px;padding:14px 24px;position:relative}
.brand{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-weight:700;font-size:19px;letter-spacing:-.01em}
.brand__mark{font-size:26px;filter:drop-shadow(0 3px 6px rgba(168,65,45,.25))}
.primary-nav{display:flex;gap:22px;margin-left:auto;font-weight:500;color:var(--ink-soft)}
.primary-nav a{position:relative;padding:6px 2px;transition:color .25s var(--ease)}
.primary-nav a:hover{color:var(--primary)}
.primary-nav a::after{content:"";position:absolute;left:0;right:0;bottom:-4px;height:2px;background:var(--primary);transform:scaleX(0);transform-origin:left;transition:transform .35s var(--ease)}
.primary-nav a:hover::after{transform:scaleX(1)}
.lang-switch{display:flex;gap:4px;padding:4px;border-radius:999px;background:var(--bg-alt);border:1px solid var(--line)}
.lang-switch button{font-weight:600;padding:6px 12px;border:0;background:transparent;border-radius:999px;cursor:pointer;color:var(--ink-soft);transition:background .25s,color .25s}
.lang-switch http://button.is-active{background:var(--ink);color:#fff}
.menu-toggle{display:none;background:none;border:0;width:38px;height:38px;cursor:pointer;flex-direction:column;justify-content:center;gap:5px;padding:0}
.menu-toggle span{display:block;height:2px;background:var(--ink);border-radius:2px;transition:transform .3s var(--ease),opacity .2s}

.hero{position:relative;padding:90px 0 70px;overflow:hidden}
.hero__bg{position:absolute;inset:0;pointer-events:none;background:radial-gradient(700px 360px at 80% 60%,rgba(200,85,61,.16),transparent 60%),radial-gradient(500px 360px at 10% 90%,rgba(88,129,87,.16),transparent 60%)}
.hero__grid{display:grid;grid-template-columns:1.15fr .85fr;gap:60px;align-items:center;position:relative}
.hero__title{font-family:var(--font-display);font-size:clamp(38px,5vw,64px);line-height:1.05;letter-spacing:-.02em;margin:0 0 20px;font-weight:700}
.hero__lede{font-size:19px;color:var(--ink-soft);margin:0 0 28px;max-width:540px}
.hero__cta{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:36px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:999px;font-weight:600;cursor:pointer;transition:transform .25s var(--ease),background .25s,box-shadow .25s,border-color .25s;border:1px solid transparent;font-size:15px;text-align:center}
.btn--primary{background:var(--primary);color:#fff;box-shadow:0 14px 30px -16px rgba(200,85,61,.6)}
.btn--primary:hover{background:var(--primary-dark);transform:translateY(-2px)}
.btn--ghost{background:transparent;color:var(--ink);border-color:var(--line)}
.btn--ghost:hover{background:var(--bg-alt);transform:translateY(-2px)}
.hero__stats{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;max-width:520px}
.hero__stats li{padding:16px 18px;background:rgba(255,255,255,.7);border:1px solid var(--line);border-radius:var(--radius-sm)}
.hero__stats strong{display:block;font-family:var(--font-display);font-size:26px;color:var(--primary);line-height:1.1}
.hero__stats span{font-size:13px;color:var(--ink-soft)}

.hero__art{position:relative;aspect-ratio:1;max-width:440px;margin:0 auto}
.hero__disc{position:absolute;inset:10%;border-radius:50%;background:conic-gradient(from 120deg,#fbe6c8,#d8e2c4,#fbe6c8,#f3c8b6,#d8e2c4);filter:blur(.5px);box-shadow:inset 0 0 0 1px rgba(255,255,255,.6),var(--shadow);animation:slowspin 60s linear infinite}
@keyframes slowspin{to{transform:rotate(360deg)}}
.leaf{position:absolute;font-size:48px;filter:drop-shadow(0 8px 14px rgba(0,0,0,.15));animation:bob 6s ease-in-out infinite}
.leaf-1{top:4%;left:14%;animation-delay:0s}
.leaf-2{top:18%;right:6%;font-size:60px;animation-delay:1s}
.leaf-3{bottom:14%;left:4%;font-size:42px;animation-delay:2s}
.leaf-4{bottom:6%;right:18%;font-size:54px;animation-delay:3s}
.leaf-5{top:46%;right:42%;font-size:52px;animation-delay:1.5s}
@keyframes bob{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-12px) rotate(6deg)}}

.services{padding:90px 0 40px}
.section-head{text-align:center;max-width:720px;margin:0 auto 60px}
.section-head h2{font-family:var(--font-display);font-size:clamp(30px,3.6vw,44px);margin:0 0 14px;letter-spacing:-.02em;line-height:1.1}
.section-head .lead{color:var(--ink-soft);font-size:18px;margin:0}
.services__group{margin:0 auto 80px}
.group-head{display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:end;margin-bottom:36px;padding-bottom:22px;border-bottom:1px solid var(--line)}
.group-num{font-family:var(--font-display);font-weight:700;font-size:64px;line-height:1;color:var(--primary);opacity:.92}
.group-head h3{font-family:var(--font-display);font-size:32px;margin:0 0 4px;letter-spacing:-.01em}
.group-head p{color:var(--ink-soft);margin:0;font-size:16px}

.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:28px}
.cards--single{grid-template-columns:minmax(0,720px);justify-content:center}
.card{background:#fff;border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);transition:transform .35s var(--ease),box-shadow .35s var(--ease),border-color .35s;display:flex;flex-direction:column}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow);border-color:rgba(200,85,61,.4)}
.card__media{position:relative;display:block;aspect-ratio:4/3;background:linear-gradient(140deg,var(--bg-alt),#fff);overflow:hidden}
.card__image{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:18px;transition:opacity .5s var(--ease),transform .6s var(--ease)}
.card__image--hover{opacity:0;transform:scale(1.04)}
.card:hover .card__image--main{opacity:0;transform:scale(.96)}
.card:hover .card__image--hover{opacity:1;transform:scale(1)}
.card__body{padding:22px 24px 26px;display:flex;flex-direction:column;gap:8px;flex:1}
.card__tag{font-size:12px;font-weight:700;color:var(--primary);letter-spacing:.1em}
.card__body h4{font-family:var(--font-display);font-size:22px;margin:0 0 4px;letter-spacing:-.01em}
.card__body p{color:var(--ink-soft);margin:0;font-size:15px;line-height:1.55}
.card--wide .card__media{aspect-ratio:16/8}

.banner{margin:0 auto 80px;padding:0 24px}
.banner__inner{background:linear-gradient(120deg,#2b2d42,#4a3f5b);color:#fff;border-radius:28px;padding:36px 42px;display:flex;align-items:center;gap:22px;position:relative;overflow:hidden}
.banner__inner::before{content:"🍂";position:absolute;right:30px;bottom:-30px;font-size:160px;opacity:.12;transform:rotate(-15deg)}
.banner__text{margin:0;font-family:var(--font-display);font-size:clamp(20px,2.4vw,28px);line-height:1.25;max-width:760px;position:relative;z-index:1}

.spotlight{margin:0 auto 80px;padding:0 24px}
.spotlight__inner{display:grid;grid-template-columns:auto 1fr;gap:50px;align-items:center;padding:36px;background:linear-gradient(120deg,var(--accent-soft) 0%,#fff5e1 100%);border-radius:32px;border:1px solid var(--line);box-shadow:var(--shadow)}
.spotlight__photo{position:relative;width:280px;aspect-ratio:370/790;border-radius:200px 200px 28px 28px;background:rgba(255,255,255,.5);overflow:hidden;flex-shrink:0;margin:0}
.spotlight__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .6s var(--ease),transform .8s var(--ease)}
.spotlight__img--hover{opacity:0;transform:scale(1.04)}
.spotlight__photo:hover .spotlight__img--main{opacity:0}
.spotlight__photo:hover .spotlight__img--hover{opacity:1;transform:scale(1)}
.spotlight__copy h2{font-family:var(--font-display);font-size:clamp(26px,3vw,36px);margin:0 0 14px;letter-spacing:-.01em;line-height:1.15}
.spotlight__copy p{color:var(--ink-soft);margin:0 0 24px;font-size:17px}

.contact{padding:80px 0 100px;background:linear-gradient(180deg,transparent,var(--bg-alt) 30%)}
.contact__grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
.contact__copy h2{font-family:var(--font-display);font-size:clamp(28px,3.4vw,40px);margin:0 0 16px;letter-spacing:-.02em}
.contact__copy>p{color:var(--ink-soft);margin:0 0 28px;font-size:17px}
.contact__list{list-style:none;padding:0;margin:0;display:grid;gap:12px}
.contact__list a{display:flex;align-items:center;gap:14px;padding:14px 18px;background:#fff;border:1px solid var(--line);border-radius:var(--radius-sm);transition:transform .25s,border-color .25s,color .25s;font-weight:500}
.contact__list a:hover{transform:translateX(4px);border-color:var(--primary);color:var(--primary)}
.contact__icon{display:inline-flex;width:32px;height:32px;align-items:center;justify-content:center;background:var(--bg-alt);border-radius:50%;font-size:16px}
.contact__form{background:#fff;padding:32px;border-radius:var(--radius);border:1px solid var(--line);display:grid;gap:16px;box-shadow:var(--shadow)}
.contact__form label{display:grid;gap:6px;font-size:13px;font-weight:600;color:var(--ink-soft)}
.contact__form input,.contact__form textarea{font:inherit;font-size:16px;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--ink);transition:border-color .25s,box-shadow .25s;resize:vertical}
.contact__form input:focus,.contact__form textarea:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 4px rgba(200,85,61,.15)}
.form__hint{font-size:13px;color:var(--muted);margin:0}

.site-footer{padding:28px 0 40px;border-top:1px solid var(--line);background:var(--bg-alt)}
.footer__inner{display:flex;justify-content:space-between;align-items:center;gap:18px;flex-wrap:wrap}
.footer__meta{color:var(--muted);font-size:14px;margin:0}

[data-reveal]{opacity:0;transform:translateY(24px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
[data-reveal].is-visible{opacity:1;transform:none}

@media (max-width:960px){
  .hero{padding:60px 0 40px}
  .hero__grid{grid-template-columns:1fr;gap:40px}
  .hero__art{max-width:340px;order:-1}
  .primary-nav{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;gap:0;background:var(--bg);padding:12px 24px 22px;border-bottom:1px solid var(--line)}
  .http://primary-nav.is-open{display:flex}
  .primary-nav a{padding:10px 0;border-bottom:1px solid var(--line)}
  .primary-nav a:last-child{border-bottom:0}
  .menu-toggle{display:flex}
  .group-head{grid-template-columns:1fr;gap:8px}
  .group-num{font-size:44px}
  .contact__grid{grid-template-columns:1fr;gap:40px}
  .contact{padding:60px 0 80px}
  .banner__inner{padding:28px}
  .spotlight__inner{grid-template-columns:1fr;text-align:center;padding:32px 22px}
  .spotlight__photo{margin:0 auto}
}
@media (max-width:520px){
  .hero__stats{grid-template-columns:1fr 1fr}
  .cards{gap:18px}
  .card__body{padding:18px 18px 22px}
  .nav{gap:14px;padding:12px 18px}
  .container{padding:0 18px}
  .banner{padding:0 18px}
  .spotlight{padding:0 18px}
}

@media (prefers-reduced-motion:reduce){
  ,::before,::after{transition:none!important;animation:none!important}
  html{scroll-behavior:auto}
}

<aside>
🍂

Кремовый осенний лендинг для выездного компьютерного мастера. Стек — чистый HTML, CSS, JS. Тексты на чешском; концепция «Sezónní starosti — забота круглый год».

</aside>

## 1. Концепция и аудитория

- **Целевая аудитория:** чешские семьи и пожилые жители крупных и средних городов, которым нужна выездная компьютерная помощь, безопасность дома, обучение и небольшой графический/веб-дизайн.
- **Целевое устройство:** в первую очередь смартфон (≥ 60% посещений ожидается с мобильных), во вторую — десктоп/планшет. Поэтому макет mobile-first, с двумя брейкпойнтами на сужение: 960px (планшет/узкий ноутбук) и 520px (телефон).
- **Эмоциональная нота:** «уютная осень», тёплый кремово-терракотовый палитр, шрифт с засечками *Fraunces* для заголовков и *Inter* для текста. Образ «сезонные хлопоты» проходит сквозной нитью: от заголовков до иконки сайта (🍂).

## 2. Палитра и типографика

| Роль | Цвет |
| --- | --- |
| Фон | `#faf6ef` (кремовый) |
| Альт-фон | `#f3ece0` |
| Чернила | `#1f2233` |
| Акцент (CTA) | `#c8553d` (терракота) |
| Зелёный акцент | `#588157` |
| Золотой | `#e3a55c` |
- **Заголовки** — `Fraunces` (вариативный, opsz), 500/700/900, с лёгким отрицательным трекингом.
- **Текст** — `Inter` 400–700.
- Шрифты подгружаются с Google Fonts с `preconnect`, чтобы не блокировать рендер.

## 3. Структура страницы

1. **Sticky-хедер** — логотип «🍂 Sezónní starosti», навигация (Péče / Bezpečí / Učení / Design / Kontakt), переключатель языка (пока только CS, заготовка под мультиязычность), кнопка-гамбургер на мобильных.
2. **Hero без главной картинки** — две колонки: текст + декоративная «осенняя композиция» из эмодзи-листьев и медленно вращающегося градиентного диска. Слева — заголовок, лид, две CTA-кнопки, блок с тремя статами (12 услуг / 0 Kč за выезд / 4 сезона).
3. **Группа 01 — Péče** (4 карточки услуг: úklid, modernizace, software, oprava).
4. **Баннер** — тёмная плашка с напоминанием, что выезд и диагностика бесплатны.
5. **Группа 02 — Bezpečí** (3 карточки: kamery, alarm, chytrá domácnost).
6. **Spotlight** — единственная секция с *главной* картинкой мастера (`hero--main` ↔ `hero--hover` на ховер), кратким рассказом о специалисте и CTA «Domluvit návštěvu».
7. **Группа 03 — Učení** (4 карточки: gramotnost, doučování, šachy, vysoké technologie).
8. **Группа 04 — Design** (одна широкая карточка).
9. **Contact** — двух-колоночный блок: список контактов (телефон/email/WhatsApp/Telegram) и форма на `formsubmit.co` (без бэкенда).
10. **Footer** — копирайт с автоматически подставляемым годом.

## 4. Ключевые UX-приёмы

- **Hover-swap «main → hover»** на всех 12 карточках услуг и в spotlight: два `<img>` накладываются один на другой, opacity переключается через CSS-transition (0.5 с). Без JS, работает и при отключённом скрипте.
- **Появление при скролле** — `[data-reveal]` элементы стартуют со смещением 24px и opacity 0, IntersectionObserver добавляет класс `is-visible`. На системах с `prefers-reduced-motion: reduce` анимации полностью отключаются.
- **Sticky-хедер** с `backdrop-filter` и тонкой нижней линией.
- **Гамбургер-меню** на ≤ 960px: навигация выезжает выпадающим списком, ARIA-атрибуты обновляются.
- **Доступность:** skip-link на `#main`, `aria-label` у навигации и форм, focus-стили на инпутах, alt у всех `<img>`, цветовой контраст текста ≥ 4.5:1.

## 5. Мультиязычность

- Любой видимый текст обёрнут в элемент с `data-i18n="section.key"`.
- На загрузке скрипт сканирует все такие элементы и формирует словарь `I18N.cs` *из самого HTML* — то есть чешский язык всегда канонический и не дублируется.
- Чтобы добавить, например, английский, достаточно в `scripts.js` зарегистрировать `I18N.en = { "brand.name": "Seasonal Care", "nav.care": "Care", ... }` и добавить кнопку `<button data-lang="en">EN</button>` внутрь `.lang-switch`.
- Выбранный язык запоминается в `localStorage` (`ss_lang`).

## 6. Структура папок

```
sezonni-starosti/
├── index.html
├── styles.css
├── scripts.js
├── vercel.json
├── robots.txt
├── manifest.webmanifest
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

## 7. Сборка

Сборка не нужна — это статический сайт без бандлера.

1. Скопируйте содержимое свойств `Html`, `Styles`, `Scripts`, `Other` в одноимённые файлы (внутри `Other` отдельные секции `=== filename ===` разделяют `vercel.json`, `robots.txt`, `manifest.webmanifest`, `README.md`).
2. Создайте папку `img/` и положите туда 26 файлов в соответствии с манифестом картинок.
3. Проверить локально: `npx serve .` или просто открыть `index.html` в браузере.

## 8. Развёртывание

### Vercel (рекомендуется)

```bash
npm i -g vercel
cd sezonni-starosti
vercel --prod
```

Vercel сам опознаёт static-сайт. `vercel.json` уже включает `cleanUrls`, отключает `trailingSlash` и выставляет долгий `Cache-Control` на картинки и часовой на CSS/JS.

Альтернативно — связать репозиторий с Vercel через web-консоль: `New Project → Import Git → Deploy`. После каждого `git push` происходит автодеплой.

### Netlify / Cloudflare Pages / GitHub Pages

Любая платформа статического хостинга работает «из коробки»:

- Netlify: `netlify deploy --prod --dir=.` или drag-and-drop в Netlify UI.
- Cloudflare Pages: подключить репозиторий, билд-команду оставить пустой, output directory — `/`.
- GitHub Pages: положить файлы в ветку `gh-pages` или включить Pages из `main /` в настройках репозитория.

### Собственный сервер

Достаточно отдать содержимое папки любым веб-сервером (`nginx`, `caddy`, `python -m http.server`). Никаких runtime-зависимостей нет.

## 9. Замечания и контрольный список

- Контакты в шаблоне — **плейсхолдеры**: телефон `+420 777 123 456`, email `mistr@sezonni-starosti.cz`, WhatsApp/Telegram-ссылки и адрес формы на `formsubmit.co`. Перед публикацией нужно заменить на реальные и подтвердить адрес у [formsubmit.co](http://formsubmit.co) (на первом отправлении он пришлёт письмо с подтверждением).
- Все изображения (12 услуг × 2 + hero × 2 = 26 файлов) должны быть подготовлены отдельно и сложены в `./img/` с теми же именами, что и в HTML.
- В случае добавления настоящих языков (en/de/ua/ru) — расширить `I18N` в `scripts.js` и добавить кнопки в `.lang-switch`; сам HTML менять не нужно.
- Свойства Notion-страницы `Html`, `Styles`, `Scripts`, `Other` хранят код в plain-text; при копировании в файлы достаточно убрать редкие markdown-экранирования (`\<` → `<`, `\{` → `{`), которые Notion добавляет в превью свойств.