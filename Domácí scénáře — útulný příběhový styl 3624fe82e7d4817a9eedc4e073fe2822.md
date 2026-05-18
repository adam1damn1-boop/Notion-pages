# Domácí scénáře — útulný příběhový styl

Created by: Elijah 
Html: <!doctype html>
<html lang="cs">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title data-i18n="meta.title">Domácí scénáře</title>
<meta name="description" data-i18n="meta.desc" data-i18n-attr="content" content="Výjezdový počítačový mistr pro celou rodinu. Diagnostika zdarma.">
<meta name="theme-color" content="#143b4a">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23143b4a'/%3E%3Ctext x='50%25' y='58%25' text-anchor='middle' font-family='Georgia,serif' font-weight='700' font-size='30' fill='%23f6f1e7'%3EDS%3C/text%3E%3C/svg%3E">
<link rel="manifest" href="manifest.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="styles.css">
</head>
<body id="top">
<a class="skip" href="#sluzby">Přeskočit na obsah</a>

<header class="site-header" data-reveal="fade">
  <div class="container nav">
    <a class="brand" href="#top" aria-label="Domácí scénáře">
      DS
      Domácí scénáře
    </a>
    <nav class="primary-nav" id="primary-nav" aria-label="Hlavní">
      <a href="#pece" data-i18n="http://nav.care">Péče o PC</a>
      <a href="#bezpecnost" data-i18n="http://nav.security">Bezpečnost</a>
      <a href="#vzdelavani" data-i18n="nav.learning">Vzdělávání</a>
      <a href="#design" data-i18n="http://nav.design">Design</a>
      <a href="#kontakt" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
    <div class="lang-switch" role="group" aria-label="Jazyk">
      <button type="button" data-lang="cs" class="is-active">CS</button>
      <button type="button" data-lang="en">EN</button>
      <button type="button" data-lang="ru">RU</button>
    </div>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Menu"></button>
  </div>
</header>

<main>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy" data-reveal="up">
        <p class="eyebrow" data-i18n="hero.eyebrow">Výjezdový mistr · u vás doma</p>
        <h1 data-i18n="content.main">Počítačové starosti?</h1>
        <p class="hero-sub" data-i18n="hero.sub">První návštěva i diagnostika jsou vždy zdarma.</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#kontakt" data-i18n="hero.cta1">Zavolat mistra</a>
          <a class="btn btn-ghost" href="#sluzby" data-i18n="hero.cta2">Prohlédnout služby</a>
        </div>
        <ul class="badges">
          <li data-i18n="hero.badge1">Diagnostika zdarma</li>
          <li data-i18n="hero.badge2">Přijedu do 24 hodin</li>
          <li data-i18n="hero.badge3">Bez závazků</li>
        </ul>
      </div>
      <figure class="hero-figure" data-reveal="up">
        <div class="figure-frame"><img class="swap" src="./img/hero--main.png" data-main="./img/hero--main.png" data-hover="./img/hero--hover.png" alt="master" loading="eager"></div>
        <figcaption data-i18n="hero.caption">Váš osobní průvodce po počítačovém světě</figcaption>
      </figure>
    </div>
  </section>

  <section id="sluzby" class="section">
    <div class="container">
      <header id="pece" class="sec-head" data-reveal="up">
        01
        <h2 data-i18n="http://sec.care.title">Péče o počítač</h2>
        <p data-i18n="http://sec.care.lead">Aby technika sloužila vám, ne naopak.</p>
      </header>
      <div class="cards">
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/cleaning--main.png" data-main="./img/cleaning--main.png" data-hover="./img/cleaning--hover.png" alt="cleaning" loading="lazy"></a>
          <div class="card-body">1.1<h3 data-i18n="http://card.cleaning.title">Čištění a chlazení</h3><p data-i18n="http://content.cleaning"></p></div>
        </article>
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/upgrade--main.png" data-main="./img/upgrade--main.png" data-hover="./img/upgrade--hover.png" alt="upgrade" loading="lazy"></a>
          <div class="card-body">1.2<h3 data-i18n="card.upgrade.title">Modernizace komponent</h3><p data-i18n="content.upgrade"></p></div>
        </article>
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/software--main.png" data-main="./img/software--main.png" data-hover="./img/software--hover.png" alt="software" loading="lazy"></a>
          <div class="card-body">1.3<h3 data-i18n="http://card.software.title">Software a Windows</h3><p data-i18n="http://content.software"></p></div>
        </article>
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/repair--main.png" data-main="./img/repair--main.png" data-hover="./img/repair--hover.png" alt="repair" loading="lazy"></a>
          <div class="card-body">1.4<h3 data-i18n="http://card.repair.title">Oprava a likvidace</h3><p data-i18n="http://content.repair"></p></div>
        </article>
      </div>
    </div>
  </section>

  <section id="bezpecnost" class="section alt">
    <div class="container">
      <header class="sec-head" data-reveal="up">
        02
        <h2 data-i18n="http://sec.security.title">Bezpečnost a chytrá domácnost</h2>
        <p data-i18n="http://sec.security.lead">Klidný spánek, ať jste kdekoli.</p>
      </header>
      <div class="cards cards-3">
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/webcam--main.png" data-main="./img/webcam--main.png" data-hover="./img/webcam--hover.png" alt="webcam" loading="lazy"></a>
          <div class="card-body">2.1<h3 data-i18n="http://card.webcam.title">Webové kamery</h3><p data-i18n="http://content.webcam"></p></div>
        </article>
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/alarm--main.png" data-main="./img/alarm--main.png" data-hover="./img/alarm--hover.png" alt="alarm" loading="lazy"></a>
          <div class="card-body">2.2<h3 data-i18n="card.alarm.title">Domácí alarm</h3><p data-i18n="content.alarm"></p></div>
        </article>
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/appliances--main.png" data-main="./img/appliances--main.png" data-hover="./img/appliances--hover.png" alt="appliances" loading="lazy"></a>
          <div class="card-body">2.3<h3 data-i18n="card.appliances.title">Chytrá domácnost</h3><p data-i18n="content.appliances"></p></div>
        </article>
      </div>
    </div>
  </section>

  <section id="vzdelavani" class="section">
    <div class="container">
      <header class="sec-head" data-reveal="up">
        03
        <h2 data-i18n="sec.learning.title">Vzdělávání pro děti i dospělé</h2>
        <p data-i18n="sec.learning.lead">Pomalu, srozumitelně a s ohledem na váš čas.</p>
      </header>
      <div class="cards">
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/literacy--main.png" data-main="./img/literacy--main.png" data-hover="./img/literacy--hover.png" alt="literacy" loading="lazy"></a>
          <div class="card-body">3.1 · pro dospělé</span><h3 data-i18n="card.literacy.title">Počítačová gramotnost</h3><p data-i18n="content.literacy"></p></div>
        </article>
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/tutor--main.png" data-main="./img/tutor--main.png" data-hover="./img/tutor--hover.png" alt="tutor" loading="lazy"></a>
          <div class="card-body">3.2 · pro děti</span><h3 data-i18n="card.tutor.title">Doučování informatiky</h3><p data-i18n="content.tutor"></p></div>
        </article>
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/chess--main.png" data-main="./img/chess--main.png" data-hover="./img/chess--hover.png" alt="chess" loading="lazy"></a>
          <div class="card-body">3.3<h3 data-i18n="card.chess.title">Šachy a logika</h3><p data-i18n="content.chess"></p></div>
        </article>
        <article class="card" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/development--main.png" data-main="./img/development--main.png" data-hover="./img/development--hover.png" alt="development" loading="lazy"></a>
          <div class="card-body">3.4<h3 data-i18n="card.development.title">AI pro chytré děti</h3><p data-i18n="content.development"></p></div>
        </article>
      </div>
    </div>
  </section>

  <section id="design" class="section alt">
    <div class="container">
      <header class="sec-head" data-reveal="up">
        04
        <h2 data-i18n="http://sec.design.title">Design a vývoj na míru</h2>
        <p data-i18n="http://sec.design.lead">Letáky, weby, katalogy i celé aplikace.</p>
      </header>
      <div class="cards cards-feature">
        <article class="card card-wide" data-reveal="up">
          <a href="#kontakt" class="card-media"><img class="swap" src="./img/design--main.png" data-main="./img/design--main.png" data-hover="./img/design--hover.png" alt="design" loading="lazy"></a>
          <div class="card-body">4<h3 data-i18n="http://card.design.title">Stylový design a aplikace</h3><p data-i18n="http://content.design"></p></div>
        </article>
      </div>
    </div>
  </section>

  <section id="kontakt" class="contact">
    <div class="container contact-grid">
      <div class="contact-copy" data-reveal="up">
        <header class="sec-head sec-head-light">
          05
          <h2 data-i18n="http://sec.contact.title">Napište nebo zavolejte</h2>
          <p data-i18n="http://content.contact"></p>
        </header>
        <ul class="contact-list">
          <li>📞<a href="tel:+420777123456" data-i18n="http://contact.phone">+420 777 123 456</a></li>
          <li>✉️<a href="mailto:mistr@domaci-scenare.cz" data-i18n="http://contact.email">mailto:mistr@domaci-scenare.cz</a></li>
          <li>💬<a href="https://wa.me/420777123456" target="_blank" rel="noopener" data-i18n="contact.whatsapp">WhatsApp</a></li>
          <li>✈️<a href="https://t.me/domaci_scenare" target="_blank" rel="noopener" data-i18n="contact.telegram">Telegram</a></li>
        </ul>
        <form class="contact-form" action="https://formspree.io/f/your-form-id" method="post" novalidate>
          <label>Jak vám mám říkat?<input name="name" autocomplete="name" required></label>
          <label>Telefon nebo e-mail<input name="contact" required></label>
          <label>S čím vám můžu pomoci?<textarea name="message" rows="4" required></textarea></label>
          <button type="submit" class="btn btn-primary" data-i18n="form.send">Odeslat poptávku</button>
          <p class="form-note" data-i18n="form.note">Odpovídám zpravidla do několika hodin.</p>
        </form>
      </div>
      <figure class="contact-figure" data-reveal="up">
        <div class="figure-frame light"><img class="swap" src="./img/hero--main.png" data-main="./img/hero--main.png" data-hover="./img/hero--hover.png" alt="master" loading="lazy"></div>
      </figure>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container foot">
    <p data-i18n="footer.rights">© Domácí scénáře · Výjezdový IT mistr</p>
    <a href="#top" data-i18n="footer.totop">Nahoru ↑</a>
  </div>
</footer>

<script src="scripts.js" defer></script>
</body>
</html>
Other: === vercel.json ===
{
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
      "source": "/(.)\.(css|js|webmanifest)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=604800" }
      ]
    }
  ]
}

=== package.json ===
{
  "name": "domaci-scenare",
  "version": "1.0.0",
  "private": true,
  "description": "Domácí scénáře — výjezdový IT mistr. Statický web pro Vercel.",
  "scripts": {
    "start": "npx serve .",
    "build": "echo 'Static site — nic kompilovat netřeba.'"
  }
}

=== manifest.webmanifest ===
{
  "name": "Domácí scénáře",
  "short_name": "DS",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f6f1e7",
  "theme_color": "#143b4a",
  "icons": []
}

=== robots.txt ===
User-agent: *
Allow: /
Sitemap: https://domaci-scenare.cz/sitemap.xml

=== sitemap.xml ===
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://domaci-scenare.cz/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>

=== .gitignore ===
node_modules
.DS_Store
.vercel

Scripts: (() => {
  const dict = {
    cs: {
      "meta.title": "Domácí scénáře — IT mistr na zavolání",
      "meta.desc": "Výjezdový počítačový mistr pro celou rodinu. První návštěva a diagnostika zdarma.",
      "brand": "Domácí scénáře",
      "http://nav.care": "Péče o PC",
      "http://nav.security": "Bezpečnost",
      "nav.learning": "Vzdělávání",
      "http://nav.design": "Design",
      "http://nav.contact": "Kontakt",
      "a11y.skip": "Přeskočit na obsah",
      "hero.eyebrow": "Výjezdový mistr · u vás doma",
      "hero.sub": "První návštěva i diagnostika jsou vždy zdarma. Platíte jen za skutečnou práci a náhradní díly — bez paušálů, bez papírování, bez velkých slov.",
      "hero.cta1": "Zavolat mistra",
      "hero.cta2": "Prohlédnout služby",
      "hero.badge1": "Diagnostika zdarma",
      "hero.badge2": "Přijedu do 24 hodin",
      "hero.badge3": "Bez závazků",
      "hero.caption": "Váš osobní průvodce po počítačovém světě",
      "http://sec.care.title": "Péče o počítač",
      "http://sec.care.lead": "Aby technika sloužila vám, ne naopak. Pravidelná údržba a chytré úpravy prodlouží život počítače o roky.",
      "http://sec.security.title": "Bezpečnost a chytrá domácnost",
      "http://sec.security.lead": "Klidný spánek, ať jste kdekoli. Kamery, alarmy a chytré spotřebiče propojené v jediné aplikaci.",
      "sec.learning.title": "Vzdělávání pro děti i dospělé",
      "sec.learning.lead": "Pomalu, srozumitelně a s ohledem na váš čas — od první klávesnice po umělou inteligenci.",
      "http://sec.design.title": "Design a vývoj na míru",
      "http://sec.design.lead": "Letáky, plakáty, webové stránky a celé aplikace, které opravdu přitahují zákazníky.",
      "http://sec.contact.title": "Napište nebo zavolejte",
      "http://card.cleaning.title": "Čištění a chlazení",
      "card.upgrade.title": "Modernizace komponent",
      "http://card.software.title": "Software a Windows",
      "http://card.repair.title": "Oprava a likvidace",
      "http://card.webcam.title": "Webové kamery",
      "card.alarm.title": "Domácí alarm",
      "card.appliances.title": "Chytrá domácnost",
      "card.literacy.title": "Počítačová gramotnost",
      "card.tutor.title": "Doučování informatiky",
      "card.chess.title": "Šachy a logika",
      "card.development.title": "AI pro chytré děti",
      "http://card.design.title": "Stylový design a aplikace",
      "card.adults": "pro dospělé",
      "http://card.kids": "pro děti",
      "http://contact.phone": "+420 777 123 456",
      "http://contact.email": "mailto:mistr@domaci-scenare.cz",
      "contact.whatsapp": "WhatsApp",
      "contact.telegram": "Telegram",
      "http://form.name": "Jak vám mám říkat?",
      "http://form.contact": "Telefon nebo e-mail",
      "form.message": "S čím vám můžu pomoci?",
      "form.send": "Odeslat poptávku",
      "form.note": "Odpovídám zpravidla do několika hodin. Diagnostika je vždy zdarma.",
      "footer.rights": "© Domácí scénáře · Výjezdový IT mistr po Praze a okolí",
      "footer.totop": "Nahoru ↑",
      "content.main": "Počítačové starosti? Přijedu zdarma a poradím — vy platíte jen za skutečnou práci.",
      "http://content.contact": "Zavolejte nebo napište kdykoli — první návštěva i diagnostika jsou vždy zdarma a bez závazků. Společně najdeme to nejjednodušší řešení přímo u vás doma.",
      "http://content.cleaning": "Váš počítač nebo notebook se přehřívá, zamrzá, nebo se zničehonic rozhučí jako vrtulník? Většinou za to nemůže stáří, ale obvyklý prach uvnitř a vyschlá teplovodivá pasta. Pečlivě vyčistím vnitřek, vyměním pastu a promazu ventilátory, aby technika opět běžela tiše a spolehlivě i v největším letním vedru. Přijedu k vám domů zdarma a první diagnostiku uděláme bez jakýchkoli závazků. Pravidelná údržba prodlouží životnost počítače klidně o několik let — a vy ušetříte za nový.",
      "content.upgrade": "Vaše věrné PC nebo notebook už nestíhá nové programy, ale loučit se s ním ještě nechcete? Často stačí menší vylepšení a stroj naběhne jako nový. Vyměním pevný disk za rychlé SSD, přidám operační paměť, vyměním procesor nebo baterii v notebooku. Po pár hodinách práce uvidíte rozdíl od první vteřiny po zapnutí. Poradím vám zdarma, co se opravdu vyplatí — bez zbytečného přeplacení.",
      "http://content.software": "Windows se vleče, vyskakují reklamy, nebo máte pocit, že počítač žije vlastním životem? Provedu kompletní úklid systému, odstraním viry i zbytečnosti a nastavím vše tak, aby to fungovalo plynule. V případě potřeby nainstaluji modernější Windows a programy pro práci, učení, zábavu i hraní. Pomohu i s registrací na úřadech, vyplněním formulářů a online žádostmi — nic, co vás dosud stresovalo, už řešit nemusíte.",
      "http://content.repair": "Počítač nebo notebook dosloužil? Nevyhazujte ho hned. Často stačí vyměnit jednu jedinou součástku a technika znovu ožije za zlomek ceny nové. Posoudím, co se dá opravit, kolik to bude stát, a diagnostika je zdarma. Pokud už oprava nedává smysl, mohu starý přístroj odvézt a využít na náhradní díly — ušetříte si starosti s likvidací a možná tím pomůžete někomu dalšímu.",
      "http://content.webcam": "Chcete vědět, co se děje doma, když jste v práci, nebo na zahradě a u chaty, když jste na dovolené? Připojím vám libovolný počet domácích i venkovních kamer, do kterých se podíváte kdykoli přímo z mobilu. Můžete dokonce promluvit s návštěvou na dveřích, i když právě sedíte v kanceláři. Skvělé řešení pro hlídání dětí, starších rodičů, domácích mazlíčků i chaty u lesa. Stačí, že máte internet — o zbytek se postarám.",
      "content.alarm": "Bojíte se nezvané návštěvy, když je byt nebo garáž prázdný? Nainstaluji vám přímo na vchodové dveře dálkově ovládaný alarm s hlasitou sirénou a okamžitým upozorněním přes SMS. Skvělá ochrana pro byt, dílnu, garáž i chalupu — bez velkých stavebních zásahů a bez drahého měsíčního paušálu. Spát budete klidněji, ať jste doma, na dovolené, nebo na druhém konci světa.",
      "content.appliances": "Moderní spotřebiče se dnes umí propojit do chytré domácnosti: světla, topení, televize, žaluzie i robotický vysavač pracují jako jeden tým. Pomohu vám vše nastavit do jediné aplikace v mobilu, abyste domov ovládali třeba i z dovolené. Vysvětlím srozumitelně, jak používat chytrou televizi a další techniku tak, aby si poradil každý člen rodiny — od dětí až po praprodiče. Pohodlí, úspora energie a hrdý pocit, že vám technika konečně slouží, ne naopak.",
      "content.literacy": "Máte pocit, že vás moderní technika přerostla? Naučím vás od úplných základů pracovat s počítačem a využívat nové nástroje včetně umělé inteligence. Ukážu, jak si bezpečně zařídit e-mail, e-banking, nakupovat online, volat s vnoučaty přes video, nebo si nechat poradit od AI s každodenními úkoly. Tempo přizpůsobím vám — bez stresu, bez cizích slov a bez pocitu, že se ptáte na hloupost.",
      "content.tutor": "Hledáte doučování informatiky pro své dítě? Mám vysokoškolské IT vzdělání a zkušenosti s výukou studentů ještě z doby doktorského studia. Látku ze školy vysvětlím srozumitelně, pomohu s domácími úkoly i s přípravou na přijímačky a maturitu. Z předmětu, kterého se dítě dosud bálo, se snadno může stát ten nejoblíbenější — a otevřít cestu k dobře placené budoucí profesi.",
      "content.chess": "Šachy jsou jeden z nejlepších tréninků logického myšlení, trpělivosti a sebedůvěry — a navíc se hodí na celý život. Hraji na velmi dobré úrovni a rád své zkušenosti předám dětem i dospělým začátečníkům. Pravidelná hra zlepšuje soustředění ve škole i v práci a baví celou rodinu při společných večerech. Možná je to přesně ta jiskra, která vašemu dítěti dosud chyběla.",
      "content.development": "Chcete, aby vaše dítě bylo o krok napřed před ostatními? Naučím ho používat umělou inteligenci chytře — tak, aby mu pomáhala s úkoly, projekty i s pochopením složitějších předmětů. Místo bezcílného surfování po mobilu objeví, jak technologii skutečně využít. Můžeme se učit hravou formou jako volnčasový kroužek, nebo přímo nad domácími úkoly. Investice do schopností, které mu pomohou v jakékoli budoucí profesi.",
      "http://content.design": "Potřebujete dát svému podnikání nebo nápadu pěknou tvář? Jsem diplomovaný vývojář softwaru a vytvořím pro vás stylové letáky, plakáty, webové stránky, katalogy zboží i celé aplikace na míru. Vše srozumitelně, bez prázdných marketingových frází a s důrazem na to, aby to opravdu přitahovalo zákazníky. Stačí zavolat a popsat svůj nápad — návrh připravíme společně."
    },
    en: {
      "meta.title": "Home Scenarios — your IT master on call",
      "http://nav.care": "PC care", "http://nav.security": "Security", "nav.learning": "Learning", "http://nav.design": "Design", "http://nav.contact": "Contact",
      "a11y.skip": "Skip to content",
      "hero.eyebrow": "On-site IT master",
      "hero.cta1": "Call the master", "hero.cta2": "Browse services",
      "hero.badge1": "Free diagnostics", "hero.badge2": "On-site within 24 h", "hero.badge3": "No strings attached",
      "footer.totop": "Top ↑"
    },
    ru: {
      "meta.title": "Бытовые сценарии — выездной компьютерный мастер",
      "http://nav.care": "Уход", "http://nav.security": "Безопасность", "nav.learning": "Учёба", "http://nav.design": "Дизайн", "http://nav.contact": "Контакт",
      "a11y.skip": "Перейти к контенту",
      "hero.eyebrow": "Выездной мастер · у вас дома",
      "hero.cta1": "Позвонить мастеру", "hero.cta2": "Смотреть услуги",
      "hero.badge1": "Диагностика бесплатно", "hero.badge2": "Приеду в течение 24 ч", "hero.badge3": "Без обязательств",
      "footer.totop": "Наверх ↑"
    }
  };

  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function applyLang(lang) {
    if (!dict[lang]) lang = "cs";
    document.documentElement.lang = lang;
    const cs = dict.cs;
    const d = dict[lang];
    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      const val = d[key] ?? cs[key];
      if (val == null) return;
      const attr = el.dataset.i18nAttr;
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    });
    document.title = d["meta.title"] ?? cs["meta.title"];
    $$(".lang-switch button").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
    try { localStorage.setItem("ds-lang", lang); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    let saved = "cs";
    try { saved = localStorage.getItem("ds-lang") || "cs"; } catch (e) {}
    applyLang(saved);

    $$(".lang-switch button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));

    $$("img.swap").forEach(img => {
      const main = img.dataset.main || img.src;
      const hover = img.dataset.hover;
      const host = img.closest(".card, .hero-figure, .contact-figure");
      if (!host || !hover) return;
      const pre = new Image(); pre.src = hover;
      const on = () => { img.src = hover; };
      const off = () => { img.src = main; };
      host.addEventListener("mouseenter", on);
      host.addEventListener("mouseleave", off);
      host.addEventListener("focusin", on);
      host.addEventListener("focusout", off);
      host.addEventListener("touchstart", on, { passive: true });
    });

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { http://e.target.classList.add("is-in"); io.unobserve(http://e.target); }
        });
      }, { threshold: 0.12 });
      $$("[data-reveal]").forEach(el => io.observe(el));
    } else {
      $$("[data-reveal]").forEach(el => el.classList.add("is-in"));
    }

    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".primary-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }));
    }
  });
})();

Styles: :root{
  --bg:#f6f1e7; --bg-alt:#ece4d2; --ink:#142a36; --ink-soft:#4a5b66;
  --brand:#143b4a; --brand-2:#e87a3b; --accent:#0e7c66; --card:#fff;
  --line:rgba(20,42,54,.12); --shadow:0 30px 50px -25px rgba(20,42,54,.25);
  --radius:20px; --container:1180px;
  --font-display:"Fraunces",Georgia,"Times New Roman",serif;
  --font-body:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
}
,::before,::after{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:var(--font-body);color:var(--ink);background:var(--bg);line-height:1.6;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
img{max-width:100%;display:block}
.skip{position:absolute;left:-9999px}
.skip:focus{left:14px;top:14px;background:var(--brand);color:#fff;padding:.5rem .9rem;border-radius:8px;z-index:100}
.container{width:100%;max-width:var(--container);margin:0 auto;padding:0 24px}

h1,h2,h3{font-family:var(--font-display);font-weight:600;letter-spacing:-.01em;margin:0 0 .4em}
h1{font-size:clamp(2.1rem,4.4vw + .5rem,3.8rem);line-height:1.05}
h2{font-size:clamp(1.7rem,2.4vw + .8rem,2.6rem);line-height:1.15}
h3{font-size:1.2rem;line-height:1.3}
p{margin:0 0 1em}
a{color:inherit;text-decoration:none}
a:focus-visible,button:focus-visible{outline:2px solid var(--brand-2);outline-offset:3px;border-radius:6px}

.btn{display:inline-flex;align-items:center;justify-content:center;padding:.85rem 1.4rem;border-radius:999px;font-weight:600;font-size:.95rem;border:1px solid transparent;cursor:pointer;transition:transform .2s,background .2s,color .2s,box-shadow .2s}
.btn-primary{background:var(--brand-2);color:#fff}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 30px -10px rgba(232,122,59,.55)}
.btn-ghost{background:transparent;color:var(--brand);border-color:var(--brand)}
.btn-ghost:hover{background:var(--brand);color:#fff}

.site-header{position:sticky;top:0;z-index:50;backdrop-filter:saturate(140%) blur(12px);-webkit-backdrop-filter:saturate(140%) blur(12px);background:rgba(246,241,231,.82);border-bottom:1px solid var(--line)}
.nav{display:flex;align-items:center;gap:24px;padding:14px 0}
.brand{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-weight:700;font-size:1.05rem}
.brand-mark{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:10px;background:var(--brand);color:#fff;font-family:var(--font-display);font-weight:700;font-size:.9rem}
.primary-nav{display:flex;gap:22px;margin-left:auto}
.primary-nav a{font-weight:500;font-size:.95rem;position:relative;padding:6px 0;color:var(--ink-soft)}
.primary-nav a:hover{color:var(--ink)}
.primary-nav a::after{content:"";position:absolute;left:0;bottom:0;height:2px;width:0;background:var(--brand-2);transition:width .25s}
.primary-nav a:hover::after{width:100%}
.lang-switch{display:flex;border:1px solid var(--line);border-radius:999px;overflow:hidden;background:#fff}
.lang-switch button{border:0;background:transparent;padding:.45rem .75rem;font:inherit;font-size:.78rem;font-weight:600;color:var(--ink-soft);cursor:pointer;transition:background .2s,color .2s}
.lang-switch http://button.is-active,.lang-switch button:hover{background:var(--brand);color:#fff}
.nav-toggle{display:none;background:transparent;border:0;cursor:pointer;padding:8px;flex-direction:column;gap:5px}
.nav-toggle span{display:block;width:24px;height:2px;background:var(--ink);border-radius:2px;transition:transform .2s}

.hero{padding:80px 0 60px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;inset:auto -10% -40% auto;width:520px;height:520px;border-radius:50%;background:radial-gradient(closest-side,rgba(232,122,59,.18),transparent 70%);z-index:0;pointer-events:none}
.hero::after{content:"";position:absolute;inset:-20% auto auto -10%;width:420px;height:420px;border-radius:50%;background:radial-gradient(closest-side,rgba(14,124,102,.12),transparent 70%);z-index:0;pointer-events:none}
.hero-grid{display:grid;gap:40px;align-items:center;grid-template-columns:1.05fr .95fr;position:relative;z-index:1}
.eyebrow{display:inline-flex;align-items:center;gap:.5rem;font-size:.8rem;letter-spacing:.18em;text-transform:uppercase;color:var(--brand);margin-bottom:18px;font-weight:600}
.eyebrow::before{content:"";width:24px;height:2px;background:var(--brand-2)}
.hero-sub{font-size:1.1rem;color:var(--ink-soft);max-width:46ch}
.hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin:24px 0 28px}
.badges{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:10px}
.badges li{font-size:.85rem;padding:.45rem .85rem;border-radius:999px;background:#fff;border:1px solid var(--line);font-weight:500;color:var(--ink-soft)}
.badges li::before{content:"✓ ";color:var(--accent);font-weight:700}
.hero-figure{margin:0;text-align:center}
.figure-frame{position:relative;display:inline-flex;justify-content:center;align-items:flex-end;padding:18px;border-radius:28px;background:linear-gradient(160deg,#fff,var(--bg-alt));box-shadow:var(--shadow);max-width:420px;width:100%;aspect-ratio:370/520;overflow:hidden}
.figure-frame::before{content:"";position:absolute;inset:auto -20% -30% auto;width:240px;height:240px;background:radial-gradient(closest-side,rgba(232,122,59,.18),transparent 70%);z-index:0}
.figure-frame img{position:relative;max-height:100%;width:auto;object-fit:contain;transition:transform .5s ease,filter .5s ease}
.figure-frame.light{background:rgba(255,255,255,.08);box-shadow:0 30px 40px rgba(0,0,0,.35)}
.hero-figure:hover .figure-frame img{transform:translateY(-6px) rotate(-1deg)}
.hero-figure figcaption{font-size:.85rem;color:var(--ink-soft);margin-top:14px;font-style:italic}

.section{padding:80px 0;position:relative}
.section.alt{background:var(--bg-alt)}
.sec-head{max-width:720px;margin-bottom:48px}
.sec-num{display:inline-block;font-family:var(--font-display);font-style:italic;font-weight:500;color:var(--brand-2);font-size:1rem;letter-spacing:.05em}
.sec-head h2{margin-top:.2em}
.sec-head p{color:var(--ink-soft);font-size:1.05rem;max-width:60ch}
.sec-head-light .sec-num{color:#f5b48a}
.sec-head-light p{color:rgba(246,239,224,.85)}

.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px}
.cards-3{grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
.card{background:var(--card);border-radius:var(--radius);overflow:hidden;display:flex;flex-direction:column;border:1px solid var(--line);transition:transform .3s,box-shadow .3s;will-change:transform}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow)}
.card-media{position:relative;display:block;overflow:hidden;aspect-ratio:4/3;background:linear-gradient(135deg,var(--bg-alt),#fff)}
.card-media::after{content:"";position:absolute;inset:auto -20% -30% auto;width:200px;height:200px;background:radial-gradient(closest-side,rgba(20,59,74,.06),transparent 70%);pointer-events:none}
.card-media img{width:100%;height:100%;object-fit:contain;padding:18px;transition:transform .5s,opacity .35s}
.card:hover .card-media img{transform:scale(1.05)}
.card-body{padding:22px 22px 26px;display:flex;flex-direction:column;gap:8px;flex:1}
.card-tag{font-family:var(--font-display);font-style:italic;font-size:.85rem;color:var(--brand-2);letter-spacing:.04em}
.card-body p{margin:.4em 0 0;color:var(--ink-soft);font-size:.95rem;line-height:1.55}

.cards-feature .card-wide{grid-column:1/-1;flex-direction:row;align-items:stretch}
.cards-feature .card-wide .card-media{flex:0 0 42%;aspect-ratio:auto;min-height:280px}
.cards-feature .card-wide .card-body{padding:36px;justify-content:center}
@media (max-width:800px){
  .cards-feature .card-wide{flex-direction:column}
  .cards-feature .card-wide .card-media{aspect-ratio:4/3;flex-basis:auto;min-height:0}
}

.contact{background:linear-gradient(180deg,var(--brand) 0%,#0b2632 100%);color:#f6efe0;padding:90px 0}
.contact h2{color:#fff}
.contact-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
.contact-list{list-style:none;padding:0;margin:20px 0 28px;display:grid;gap:10px}
.contact-list li{display:flex;align-items:center;gap:12px;font-weight:500}
.contact-list .ico{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.08);font-size:1rem}
.contact-list a{border-bottom:1px dashed rgba(255,255,255,.4);padding-bottom:1px;transition:border-color .2s}
.contact-list a:hover{border-color:#fff}
.contact-form{display:grid;gap:14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);padding:22px;border-radius:20px}
.contact-form label{display:grid;gap:6px;font-size:.85rem;color:rgba(246,239,224,.8)}
.contact-form input,.contact-form textarea{background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.12);color:#fff;padding:.7rem .9rem;border-radius:12px;font:inherit;transition:border-color .2s,background .2s}
.contact-form input:focus,.contact-form textarea:focus{outline:2px solid var(--brand-2);outline-offset:0;border-color:transparent}
.form-note{font-size:.8rem;color:rgba(246,239,224,.6);margin:0}
.contact-figure{display:flex;justify-content:center}

.site-footer{padding:28px 0;background:#0b2632;color:rgba(246,239,224,.6);font-size:.85rem}
.foot{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap}
.foot a:hover{color:#fff}

[data-reveal]{opacity:0;transform:translateY(20px);transition:opacity .8s ease,transform .8s ease}
[data-reveal="fade"]{transform:none}
[data-reveal].is-in{opacity:1;transform:none}

@media (max-width:900px){
  .hero{padding:60px 0 40px}
  .hero-grid{grid-template-columns:1fr}
  .hero-figure{order:-1}
  .contact-grid{grid-template-columns:1fr}
  .contact-figure{order:-1}
}
@media (max-width:720px){
  .primary-nav{position:fixed;inset:64px 0 auto 0;background:var(--bg);flex-direction:column;gap:0;padding:14px 24px 24px;border-bottom:1px solid var(--line);transform:translateY(-110%);transition:transform .3s}
  .http://primary-nav.is-open{transform:none}
  .primary-nav a{padding:14px 0;border-bottom:1px solid var(--line)}
  .primary-nav a:last-child{border-bottom:0}
  .nav-toggle{display:flex}
  .badges{gap:8px}
}
@media (prefers-reduced-motion:reduce){
  ,::before,::after{transition:none!important;animation:none!important}
  html{scroll-behavior:auto}
}

<aside>
🏡

**Domácí scénáře** — тёплый, рассказовый стиль для выездного компьютерного мастера. Палитра кремовая + глубокий бирюзовый + тёплый оранжевый, шрифты Fraunces + Inter.

</aside>

## 1. Отчёт по сайту

### Концепция

Сайт оформлен как уютная история про мастера, который приезжает к вам домой. Заголовки набраны характерным Fraunces (display-serif с мягкими засечками), основной текст — Inter. Цвета — кремовый фон `#f6f1e7`, акцентный тёплый оранжевый `#e87a3b` и глубокий бирюзово-синий `#143b4a` для брендового цвета, кнопок и тёмной контактной секции. Лёгкие радиальные градиенты в hero и нумерация секций в стиле «01 / 02 / 03» дают сайту ощущение журнала, а не сухого прайс-листа.

### Целевая аудитория

- Чешские семьи, у которых дома больше одного компьютера и техника разного поколения.
- Пожилые пользователи, которым нужен спокойный, человеческий язык и обещание «всё объясню».
- Родители школьников, ищущие репетитора по информатике и развивающие занятия.
- Жители квартир, домов и дач, которым нужны камеры, сигнализация и умная техника.

### Структура страницы

1. Шапка с логотипом «DS», навигацией (Péče / Bezpečnost / Vzdělávání / Design / Kontakt), переключателем языков CS / EN / RU и бургер-меню для мобильных.
2. Hero с главным слоганом, двумя CTA (позвонить и посмотреть услуги), бейджами преимуществ и портретом мастера. Hero-картинка занимает половину экрана и красиво масштабируется (соотношение 370×520).
3. Секция **01 Péče o počítač** (1.1–1.4): чистка, апгрейд, софт, ремонт.
4. Секция **02 Bezpečnost a chytrá domácnost** (2.1–2.3): камеры, сигнализация, умная техника.
5. Секция **03 Vzdělávání** (3.1–3.4): компьютерная грамотность, репетитор по информатике, шахматы, AI для детей.
6. Секция **04 Design** (4): один широкий «feature»-блок про вёрстку, дизайн и приложения на заказ.
7. Секция **05 Kontakt**: контактный список (телефон, e-mail, WhatsApp, Telegram) + форма Formspree + повторное hero-фото в светлой рамке на тёмном фоне.
8. Подвал с подписью и ссылкой «Nahoru ↑».

### Ключевые приёмы

- Sticky-шапка с лёгким размытием фона (`backdrop-filter`).
- Hover-swap: на каждой карточке услуги и в hero меняется изображение на `*--hover.png` (предзагрузка `Image()`).
- Scroll-reveal через `IntersectionObserver` (`[data-reveal]` плавно появляется при попадании в viewport).
- CSS-сетка `repeat(auto-fit, minmax(260px, 1fr))` для адаптивных карточек без media-queries.
- Все тексты на чешском, ключи `data-i18n` подвязаны к словарю, который пользователь легко расширит для других языков.
- Мобильная навигация выезжает сверху, бургер-кнопка управляет `aria-expanded`.
- `prefers-reduced-motion: reduce` отключает анимации.
- Иконка сайта зашита data-URL SVG, никакого `favicon.ico` качать не нужно.

### Все 12 услуг покрыты

1.1 Čištění a chlazení · 1.2 Modernizace komponent · 1.3 Software a Windows · 1.4 Oprava a likvidace · 2.1 Webové kamery · 2.2 Domácí alarm · 2.3 Chytrá domácnost · 3.1 Počítačová gramotnost · 3.2 Doučování informatiky · 3.3 Šachy a logika · 3.4 AI pro chytré děti · 4 Stylový design a aplikace.

## 2. Инструкция по сборке

### Структура проекта

```
domaci-scenare/
├── index.html             ← из свойства Html
├── styles.css             ← из свойства Styles
├── scripts.js             ← из свойства Scripts
├── manifest.webmanifest   ← из свойства Other
├── vercel.json            ← из свойства Other
├── package.json           ← из свойства Other
├── robots.txt             ← из свойства Other
├── sitemap.xml            ← из свойства Other
├── .gitignore             ← из свойства Other
└── img/
    ├── hero--main.png        hero--hover.png
    ├── cleaning--main.png    cleaning--hover.png
    ├── upgrade--main.png     upgrade--hover.png
    ├── software--main.png    software--hover.png
    ├── repair--main.png      repair--hover.png
    ├── webcam--main.png      webcam--hover.png
    ├── alarm--main.png       alarm--hover.png
    ├── appliances--main.png  appliances--hover.png
    ├── literacy--main.png    literacy--hover.png
    ├── tutor--main.png       tutor--hover.png
    ├── chess--main.png       chess--hover.png
    ├── development--main.png development--hover.png
    └── design--main.png      design--hover.png
```

### Шаги

1. Создайте локально папку `domaci-scenare/`.
2. Скопируйте содержимое свойств **Html**, **Styles**, **Scripts** в файлы `index.html`, `styles.css`, `scripts.js` соответственно.
3. Из свойства **Other** разбейте блок по разделителям `=== filename ===` и сохраните каждый файл отдельно.
4. Положите парные изображения в папку `./img/` (имена ровно как в таблице выше).
5. Откройте `index.html` в браузере или запустите `npx serve .` — сайт работает без сборщика.

### Расширение языкового словаря

В `scripts.js` объект `dict` уже содержит полный чешский словарь и базовые UI-ключи для `en` и `ru`. Чтобы добавить полный перевод другого языка, просто продублируйте чешские ключи и переведите значения. Сохранённый язык хранится в `localStorage.ds-lang`.

### Контакты и форма

- В шаблоне `tel:+420777123456`, `mailto:mistr@domaci-scenare.cz`, `wa.me/420777123456`, `t.me/domaci_scenare` — замените на реальные данные перед публикацией.
- Форма отправляется на `https://formspree.io/f/your-form-id` — создайте бесплатную форму на Formspree и подставьте свой ID. Никаких серверов или платных API не требуется.

## 3. Развёртывание на бесплатном хостинге (Vercel)

### Вариант A — через Git

1. Создайте репозиторий на GitHub / GitLab / Bitbucket и закоммитьте папку проекта.
2. На [vercel.com](http://vercel.com) нажмите **Add New → Project**, импортируйте репозиторий.
3. Framework Preset = **Other**, Build Command = пусто, Output Directory = `.`.
4. Нажмите **Deploy**. Vercel автоматически подхватит `vercel.json` (длинный кэш для `/img/*` и средний для CSS/JS/манифеста).
5. После сборки сайт будет доступен по адресу `*.vercel.app`. В разделе **Domains** можно привязать собственный домен (например, `domaci-scenare.cz`).

### Вариант B — через CLI

```bash
cd domaci-scenare
npx vercel        # первый раз — войдите и подтвердите проект
npx vercel --prod # выкатить продакшен-версию
```

### Чек-лист после деплоя

- [ ]  Все 13 пар картинок отображаются и подменяются при наведении.
- [ ]  Переключатель CS / EN / RU работает и язык сохраняется при перезагрузке.
- [ ]  Мобильное меню открывается и закрывается, все ссылки на якоря работают.
- [ ]  Форма Formspree принимает тестовое сообщение.
- [ ]  Lighthouse: Performance ≥ 95, Accessibility ≥ 95, Best Practices = 100.

<aside>
✨

Готово! Сайт «Domácí scénáře» полностью статичен, не требует ни сборщика, ни платных сервисов и разворачивается на бесплатном плане Vercel за пару минут.

</aside>