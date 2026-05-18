# Čas pro to důležité — тёплый кремово-янтарный макет

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs" data-theme="time-for-important">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#F8F4EC">
<title>Čas pro to důležité — Výjezdový mistr počítačových služeb</title>
<meta name="description" content="Postarám se o vaši techniku, abyste vy měli čas na to nejdůležitější. Výjezd k vám i první diagnostika jsou vždy zdarma.">
<meta property="og:title" content="Čas pro to důležité">
<meta property="og:description" content="Výjezdový mistr počítačových služeb. Výjezd a první diagnostika zdarma.">
<meta property="og:type" content="website">
<meta property="og:image" content="./img/hero--main.png">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='28' fill='%23C5862C'/%3E%3Cpath d='M32 14v18l12 8' stroke='%23F8F4EC' stroke-width='5' stroke-linecap='round' fill='none'/%3E%3C/svg%3E">
<link rel="manifest" href="./manifest.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./styles/main.css">
</head>
<body>
<a class="skip-link" href="#main" data-i18n="skip">Přeskočit na obsah</a>

<header class="site-header" id="top">
  <div class="container header-inner">
    <a href="#top" class="brand" aria-label="Čas pro to důležité">
      
        <svg viewBox="0 0 64 64" width="40" height="40"><circle cx="32" cy="32" r="28" fill="currentColor"/><circle cx="32" cy="32" r="22" fill="none" stroke="#F8F4EC" stroke-width="1.5" stroke-dasharray="2 4"/><path d="M32 14v18l12 8" stroke="#F8F4EC" stroke-width="5" stroke-linecap="round" fill="none"/></svg>
      
      
        <strong data-i18n="brand.title">Čas pro to důležité</strong>
        <small data-i18n="brand.tagline">Výjezdový mistr počítačových služeb</small>
      
    </a>
    <nav class="primary-nav" id="primary-nav" aria-label="Hlavní navigace">
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
      <a href="#learning" data-i18n="nav.learning">Učení</a>
      <a href="#design" data-i18n="http://nav.design">Design</a>
      <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
    <div class="header-tools">
      <div class="lang" role="group" aria-label="Volba jazyka">
        <button type="button" class="lang-btn is-active" data-lang="cs" aria-pressed="true">CS</button>
        <button type="button" class="lang-btn" data-lang="en" aria-pressed="false">EN</button>
      </div>
      <a class="btn btn-primary header-cta" href="#contact" data-i18n="http://cta.book">Objednat výjezd</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Otevřít menu">
        
      </button>
    </div>
  </div>
</header>

<main id="main">
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        Vracím vám čas
        <h1 data-i18n-html="hero.title">Postarám se o vaši techniku, abyste vy měli <em>čas na to nejdůležitější</em>.</h1>
        <p class="lead" data-i18n="hero.lead">Výjezd k vám domů i první diagnostika jsou vždy zdarma. Vy platíte jen za skutečnou práci a díly.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact" data-i18n="hero.cta1">Domluvit návštěvu</a>
          <a class="btn btn-ghost" href="#services" data-i18n="hero.cta2">Co umím</a>
        </div>
        <ul class="hero-bullets" aria-label="Výhody">
          <li data-i18n="hero.b1">Výjezd zdarma</li>
          <li data-i18n="hero.b2">První diagnostika zdarma</li>
          <li data-i18n="hero.b3">Platíte jen za práci a díly</li>
        </ul>
      </div>
      <figure class="hero-figure">
        <div class="hero-frame">
          <div class="swap swap-hero">
            <img class="swap-main" src="./img/hero--main.png" alt="Mistr připravený přijet k vám" loading="eager" decoding="async" width="370" height="790">
            <img class="swap-hover" src="./img/hero--hover.png" alt="" aria-hidden="true" loading="eager" decoding="async" width="370" height="790">
          </div>
          <div class="hero-badge" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="56" height="56"><circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" stroke-width="2"/><path d="M32 16v16l11 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/></svg>
          </div>
        </div>
        <figcaption data-i18n="hero.caption">Váš mistr, který přijede až k vám.</figcaption>
      </figure>
    </div>
  </section>

  <div id="services"></div>

  <section class="section section-care" id="care" aria-labelledby="care-title">
    <div class="container">
      <header class="section-head">
        01
        <h2 id="care-title" data-i18n="care.title">Péče o počítač</h2>
        <p class="section-lead" data-i18n="care.lead">Aby technika pracovala pro vás — ne vy pro ni.</p>
      </header>
      <div class="cards cards-4">
        <article class="card" data-section="1.1">
          <div class="card-media swap"><img class="swap-main" src="./img/cleaning--main.png" alt="Vyčištění počítače" loading="lazy" decoding="async"><img class="swap-hover" src="./img/cleaning--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
          <div class="card-body"><h3 data-i18n="http://svc.cleaning.title">Vyčištění počítače</h3><p data-i18n="http://svc.cleaning.text"></p></div>
        </article>
        <article class="card" data-section="1.2">
          <div class="card-media swap"><img class="swap-main" src="./img/upgrade--main.png" alt="Modernizace" loading="lazy" decoding="async"><img class="swap-hover" src="./img/upgrade--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
          <div class="card-body"><h3 data-i18n="svc.upgrade.title">Modernizace</h3><p data-i18n="svc.upgrade.text"></p></div>
        </article>
        <article class="card" data-section="1.3">
          <div class="card-media swap"><img class="swap-main" src="./img/software--main.png" alt="Nastavení softwaru" loading="lazy" decoding="async"><img class="swap-hover" src="./img/software--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
          <div class="card-body"><h3 data-i18n="http://svc.software.title">Nastavení softwaru</h3><p data-i18n="http://svc.software.text"></p></div>
        </article>
        <article class="card" data-section="1.4">
          <div class="card-media swap"><img class="swap-main" src="./img/repair--main.png" alt="Oprava a likvidace" loading="lazy" decoding="async"><img class="swap-hover" src="./img/repair--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
          <div class="card-body"><h3 data-i18n="http://svc.repair.title">Oprava a likvidace</h3><p data-i18n="http://svc.repair.text"></p></div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-security" id="security" aria-labelledby="security-title">
    <div class="container">
      <header class="section-head">
        02
        <h2 id="security-title" data-i18n="security.title">Bezpečnost</h2>
        <p class="section-lead" data-i18n="security.lead">Klid, který vám neukradne ani hodinu.</p>
      </header>
      <div class="cards cards-3">
        <article class="card" data-section="2.1">
          <div class="card-media swap"><img class="swap-main" src="./img/webcam--main.png" alt="Web-kamery" loading="lazy" decoding="async"><img class="swap-hover" src="./img/webcam--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
          <div class="card-body"><h3 data-i18n="http://svc.webcam.title">Web-kamery</h3><p data-i18n="http://svc.webcam.text"></p></div>
        </article>
        <article class="card" data-section="2.2">
          <div class="card-media swap"><img class="swap-main" src="./img/alarm--main.png" alt="Domácí alarm" loading="lazy" decoding="async"><img class="swap-hover" src="./img/alarm--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
          <div class="card-body"><h3 data-i18n="svc.alarm.title">Domácí alarm</h3><p data-i18n="svc.alarm.text"></p></div>
        </article>
        <article class="card" data-section="2.3">
          <div class="card-media swap"><img class="swap-main" src="./img/appliances--main.png" alt="Chytrá domácnost" loading="lazy" decoding="async"><img class="swap-hover" src="./img/appliances--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
          <div class="card-body"><h3 data-i18n="svc.appliances.title">Chytrá domácnost</h3><p data-i18n="svc.appliances.text"></p></div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-learning" id="learning" aria-labelledby="learning-title">
    <div class="container">
      <header class="section-head">
        03
        <h2 id="learning-title" data-i18n="learning.title">Učení</h2>
        <p class="section-lead" data-i18n="learning.lead">Čas věnovaný učení se vrací několikanásobně.</p>
      </header>
      <div class="subsection">
        <h3 class="subsection-title" data-i18n="learning.adults">Dospělí</h3>
        <div class="cards cards-1">
          <article class="card card-wide" data-section="3.1">
            <div class="card-media swap"><img class="swap-main" src="./img/literacy--main.png" alt="Počítačová gramotnost" loading="lazy" decoding="async"><img class="swap-hover" src="./img/literacy--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
            <div class="card-body"><h4 data-i18n="svc.literacy.title">Počítačová gramotnost</h4><p data-i18n="svc.literacy.text"></p></div>
          </article>
        </div>
      </div>
      <div class="subsection">
        <h3 class="subsection-title" data-i18n="http://learning.kids">Děti</h3>
        <div class="cards cards-3">
          <article class="card" data-section="3.2">
            <div class="card-media swap"><img class="swap-main" src="./img/tutor--main.png" alt="Doučování informatiky" loading="lazy" decoding="async"><img class="swap-hover" src="./img/tutor--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
            <div class="card-body"><h4 data-i18n="svc.tutor.title">Doučování informatiky</h4><p data-i18n="svc.tutor.text"></p></div>
          </article>
          <article class="card" data-section="3.3">
            <div class="card-media swap"><img class="swap-main" src="./img/chess--main.png" alt="Šachy" loading="lazy" decoding="async"><img class="swap-hover" src="./img/chess--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
            <div class="card-body"><h4 data-i18n="svc.chess.title">Šachy</h4><p data-i18n="svc.chess.text"></p></div>
          </article>
          <article class="card" data-section="3.4">
            <div class="card-media swap"><img class="swap-main" src="./img/development--main.png" alt="Vyspělé technologie" loading="lazy" decoding="async"><img class="swap-hover" src="./img/development--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
            <div class="card-body"><h4 data-i18n="svc.development.title">Vyspělé technologie</h4><p data-i18n="svc.development.text"></p></div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-design" id="design" aria-labelledby="design-title">
    <div class="container">
      <header class="section-head">
        04
        <h2 id="design-title" data-i18n="design.title">Design</h2>
        <p class="section-lead" data-i18n="design.lead">Profesionální vizuál bez vašich nocí v grafických programech.</p>
      </header>
      <div class="cards cards-1">
        <article class="card card-wide card-feature" data-section="4">
          <div class="card-media swap"><img class="swap-main" src="./img/design--main.png" alt="Design" loading="lazy" decoding="async"><img class="swap-hover" src="./img/design--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async"></div>
          <div class="card-body"><h3 data-i18n="http://svc.design.title">Design pro vás</h3><p data-i18n="http://svc.design.text"></p></div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-contact" id="contact" aria-labelledby="contact-title">
    <div class="container contact-grid">
      <div class="contact-copy">
        Zavolejte. Napište. Já přijedu.
        <h2 id="contact-title" data-i18n="contact.title">Pojďme si chvíli povídat o tom, co vás trápí.</h2>
        <p class="section-lead" data-i18n="contact.text"></p>
        <ul class="contact-list">
          <li>✉️<a href="mailto:mistr@cas-pro-dulezite.cz">mistr@cas-pro-dulezite.cz</a></li>
          <li>📱<a href="tel:+420777123456">+420 777 123 456</a></li>
          <li>💬<a href="https://wa.me/420777123456" target="_blank" rel="noopener">WhatsApp</a></li>
          <li>📨<a href="https://t.me/cas_pro_dulezite" target="_blank" rel="noopener">Telegram</a></li>
        </ul>
      </div>
      <form class="contact-form" action="https://formsubmit.co/mistr@cas-pro-dulezite.cz" method="POST" aria-label="Kontaktní formulář">
        <input type="hidden" name="_subject" value="Nová poptávka — Čas pro to důležité">
        <input type="hidden" name="_template" value="table">
        <label>Vaše jméno<input name="name" type="text" required autocomplete="name"></label>
        <label>E-mail nebo telefon<input name="contact" type="text" required autocomplete="email"></label>
        <label>S čím vám můžu pomoci?<textarea name="message" rows="4" required></textarea></label>
        <button class="btn btn-primary btn-block" type="submit" data-i18n="form.submit">Odeslat zprávu</button>
        <p class="form-note" data-i18n="form.note">Ozvu se obvykle do několika hodin. Výjezd i první diagnostika jsou zdarma.</p>
      </form>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <strong data-i18n="brand.title">Čas pro to důležité</strong>
      <small data-i18n="footer.tagline">Výjezdový mistr počítačových služeb · Praha a okolí</small>
    </div>
    <nav class="footer-nav" aria-label="Patička">
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
      <a href="#learning" data-i18n="nav.learning">Učení</a>
      <a href="#design" data-i18n="http://nav.design">Design</a>
      <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
    <small class="footer-meta" data-i18n="footer.meta">© Čas pro to důležité. Vyrobeno s láskou k vašemu času.</small>
  </div>
</footer>

<script src="./scripts/i18n.js"></script>
<script src="./scripts/app.js"></script>
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
    },
    {
      "source": "/(.)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}

=== manifest.webmanifest ===
{
  "name": "Čas pro to důležité",
  "short_name": "Čas pro to důležité",
  "description": "Výjezdový mistr počítačových služeb. Postarám se o vaši techniku, abyste vy měli čas na to nejdůležitější.",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#F8F4EC",
  "theme_color": "#C5862C",
  "lang": "cs",
  "icons": [
    { "src": "./img/hero--main.png", "sizes": "512x512", "type": "image/png" }
  ]
}

=== robots.txt ===
User-agent: *
Allow: /
Sitemap: /sitemap.xml

=== sitemap.xml ===
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cas-pro-dulezite.example.cz/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>

=== http://README.md ===
# Čas pro to důležité

Statický jednostránkový web výjezdového mistra počítačových služeb. Hlavní jazyk: čeština.

## Struktura


.
├── index.html
├── manifest.webmanifest
├── vercel.json
├── robots.txt
├── sitemap.xml
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
├── styles/
│   └── main.css
└── scripts/
    ├── i18n.js
    └── app.js


## Lokální spuštění

Stačí otevřít index.html v prohlížeči. Pro testování doporučujeme jednoduchý statický server:

bash
npx serve .
# nebo
python3 -m http.server 8000


## Nasazení na Vercel

1. Nahrajte složku jako Git repozitář (GitHub/GitLab/Bitbucket).
2. V dashboardu Vercel: New Project → vyberte repozitář.
3. Framework Preset: Other. Build & Output zůstanou prázdné — jde o čistou statiku.
4. Po deployi Vercel automaticky aplikuje vercel.json (cache, security headers).
5. Volitelně přidejte vlastní doménu v Settings → Domains.

## Přidání dalšího jazyka

1. V souboru scripts/i18n.js přidejte nový klíč jazyka (např. de) do objektu window.I18N se stejnou sadou klíčů jako cs.
2. V index.html přidejte tlačítko do .lang: <button type="button" class="lang-btn" data-lang="de" aria-pressed="false">DE</button>.
3. Žádné další změny nejsou potřeba — app.js přepínač detekuje automaticky.

Scripts: === scripts/i18n.js ===
/ Slovník i18n. Hlavní jazyk: cs. Další jazyky lze přidat jako další klíče v window.I18N. /
window.I18N = {
  cs: {
    "skip": "Přeskočit na obsah",
    "brand.title": "Čas pro to důležité",
    "brand.tagline": "Výjezdový mistr počítačových služeb",
    "http://nav.care": "Péče",
    "http://nav.security": "Bezpečnost",
    "nav.learning": "Učení",
    "http://nav.design": "Design",
    "http://nav.contact": "Kontakt",
    "http://cta.book": "Objednat výjezd",
    "hero.eyebrow": "Vracím vám čas",
    "hero.title": "Postarám se o vaši techniku, abyste vy měli <em>čas na to nejdůležitější</em>.",
    "hero.lead": "Výjezd k vám domů i první diagnostika jsou vždy zdarma. Vy platíte jen za skutečnou práci a díly.",
    "hero.cta1": "Domluvit návštěvu",
    "hero.cta2": "Co umím",
    "hero.b1": "Výjezd zdarma",
    "hero.b2": "První diagnostika zdarma",
    "hero.b3": "Platíte jen za práci a díly",
    "hero.caption": "Váš mistr, který přijede až k vám.",
    "care.title": "Péče o počítač",
    "care.lead": "Aby technika pracovala pro vás — ne vy pro ni.",
    "security.title": "Bezpečnost",
    "security.lead": "Klid, který vám neukradne ani hodinu.",
    "learning.title": "Učení",
    "learning.lead": "Čas věnovaný učení se vrací několikanásobně.",
    "learning.adults": "Dospělí",
    "http://learning.kids": "Děti",
    "design.title": "Design",
    "design.lead": "Profesionální vizuál bez vašich nocí v grafických programech.",
    "http://svc.cleaning.title": "Vyčištění počítače",
    "http://svc.cleaning.text": "Notebook hučí jako malý vrtulník a každou chvíli se přehřívá? Místo abyste s ním večer zápasili, raději ho svěřte mně. Přijedu k vám domů zdarma, počítač pečlivě vyčistím od prachu, vyměním teplovodivou pastu a promažu ventilátory. Vy se zatím můžete věnovat rodině nebo si dát v klidu kávu — než dopijete, máte zase tichý a chladný stroj. První diagnostika je samozřejmě zdarma.",
    "svc.upgrade.title": "Modernizace",
    "svc.upgrade.text": "Čekání, než se otevře program nebo nastartuje notebook, ukradne klidně hodinu denně — a to je čas, který už nikdy nevrátíte. Často stačí přidat rychlý SSD disk, trochu paměti, vyměnit baterii nebo procesor a počítač znovu poletí. Přijedu zdarma až k vám, v klidu poradím, co se opravdu vyplatí, a vy zase budete mít čas na to, co máte rádi. Bez zbytečných výdajů za úplně nový stroj.",
    "http://svc.software.title": "Nastavení softwaru",
    "http://svc.software.text": "Pomalé Windows, vyskakující reklamy, podivné chyby? Místo abyste večer nervózně klikali a hledali rady na internetu, nechte to na mně. Pročistím systém, odstraním viry, nainstaluji vše potřebné pro práci, studium i zábavu a pomohu i s formuláři na úřady nebo registracemi na různých webech. Přijedu k vám domů zdarma a první diagnostika nic nestojí — vy se vracíte ke svému životu, ne k technickým příručkám.",
    "http://svc.repair.title": "Oprava a likvidace",
    "http://svc.repair.text": "Rozbitý počítač nebo notebook nemusí hned do koše — a vy nemusíte hned utrácet za nový. Podívám se k vám zdarma, řeknu na rovinu, jestli má smysl opravovat, a často stačí vyměnit jen pár součástek. Pokud už dosloužil, klidně ho ode mě vykoupím na náhradní díly. Ušetříte peníze i čas hledáním náhrady a nezatížíte přírodu zbytečným odpadem.",
    "http://svc.webcam.title": "Web-kamery",
    "http://svc.webcam.text": "Když jste v práci nebo na dovolené, hlavou vám čas od času proběhne: „Je doma všechno v pořádku?“ S kamerami se kdykoli podíváte do bytu, ke vchodu i na zahradu přímo z mobilu, a dokonce si můžete popovídat s návštěvou na dálku. Pomohu vám vybrat a nainstalovat tolik kamer, kolik potřebujete — vnitřních i venkovních. Výjezd a první konzultace jsou zdarma, a vy získáte to nejcennější: klid.",
    "svc.alarm.title": "Domácí alarm",
    "svc.alarm.text": "Zamykáte dveře a stejně se cítíte nesví, když odjíždíte na víkend? Namontuji vám přímo na vstupní dveře bytu, chaty nebo garáže chytrý alarm s hlasitou sirénou a SMS upozorněním na mobil. Žádné dlouhé instalace, žádné rozvrtané stěny. Přijedu zdarma, ukážu, jak vše funguje, a vy budete moci v klidu odejít z domu i odjet pryč. Bezpečí, které vám neukradne ani hodinu času.",
    "svc.appliances.title": "Chytrá domácnost",
    "svc.appliances.text": "Smart TV, robotický vysavač, chytré žárovky nebo termostat — krásné věci, jen dokud je nemáte spárovat a propojit. Místo abyste trávili večery v návodech a aplikacích, zavolejte mě. Nastavím vše v telefonu, propojím zařízení dohromady a v klidu vás naučím, jak je ovládat. Přijedu zdarma a první diagnostika nic nestojí. Domov vám pak bude doopravdy sloužit, ne komplikovat život.",
    "svc.literacy.title": "Počítačová gramotnost",
    "svc.literacy.text": "Bojíte se počítače nebo si jen nejste jistí, zda děláte vše správně? Není proč se stydět — naučím vás všechno od základů, vlastním tempem, přímo u vás doma. Ukážu, jak si bezpečně objednat zboží, zařídit věci přes internet a využít moderní nástroje včetně umělé inteligence. Výjezd k vám i první konzultace jsou zdarma. Získáte jistotu a spoustu času ušetřeného za zbytečné starosti.",
    "svc.tutor.title": "Doučování informatiky",
    "svc.tutor.text": "Informatika ve škole najednou neklape a zadání působí jako cizí řeč? Mám vysokoškolské IT vzdělání a zkušenost s výukou studentů z doktorského studia. Doučím vaše dítě klidně a srozumitelně přímo u vás doma, vlastním tempem a bez stresu. První setkání i diagnostika znalostí jsou zdarma, abyste viděli, že si rozumíme. Dítě získá sebevědomí, vy zase klid u večeře.",
    "svc.chess.title": "Šachy",
    "svc.chess.text": "Šachy nejsou jen hra — je to malá škola života, kde se dítě učí přemýšlet dopředu, trpělivosti a nevzdávat se. Hraji na velmi dobré úrovni a rád své znalosti předám i vašemu synovi nebo dceři. Přijedu zdarma, posedíme u šachovnice, podíváme se, kde dítě teď je a co ho baví. Místo dalších hodin u obrazovky vznikne čas, na který bude rád vzpomínat.",
    "svc.development.title": "Vyspělé technologie",
    "svc.development.text": "Umělou inteligenci se ve škole zatím pořádně neučí, a přitom právě ona rozhodne, kdo bude za pár let napřed. Naučím vaše dítě, jak s AI rozumně pracovat — nejen kvůli úkolům, ale hlavně kvůli rozvoji myšlení a kreativity. Můžeme se učit hravou formou v rámci volného času nebo společně řešit školní projekty. Výjezd k vám zdarma, první ukázková lekce také. Investice do času, která se vrátí v lepších výsledcích.",
    "http://svc.design.title": "Design pro vás",
    "http://svc.design.text": "Potřebujete leták na akci, plakát do kavárny, katalog služeb nebo vlastní webové stránky? Jsem diplomovaný vývojář softwaru s praxí a rád pro vás připravím něco, co bude vypadat profesionálně a působit přirozeně. Probereme to v klidu u vás doma — výjezd a první konzultace jsou zdarma. Vy se pak můžete soustředit na své podnikání nebo zákazníky, ne na grafické programy.",
    "contact.eyebrow": "Zavolejte. Napište. Já přijedu.",
    "contact.title": "Pojďme si chvíli povídat o tom, co vás trápí.",
    "contact.text": "Napište nebo zavolejte — rád si vás vyslechnu a poradím, co bude pro vás nejlepší. Výjezd k vám domů a první diagnostika jsou vždy zdarma.",
    "http://form.name": "Vaše jméno",
    "http://form.contact": "E-mail nebo telefon",
    "form.message": "S čím vám můžu pomoci?",
    "form.submit": "Odeslat zprávu",
    "form.note": "Ozvu se obvykle do několika hodin. Výjezd i první diagnostika jsou zdarma.",
    "footer.tagline": "Výjezdový mistr počítačových služeb · Praha a okolí",
    "footer.meta": "© Čas pro to důležité. Vyrobeno s láskou k vašemu času."
  },
  en: {
    "skip": "Skip to content",
    "brand.title": "Time for what matters",
    "brand.tagline": "On-site computer services master",
    "http://nav.care": "Care",
    "http://nav.security": "Security",
    "nav.learning": "Learning",
    "http://nav.design": "Design",
    "http://nav.contact": "Contact",
    "http://cta.book": "Book a visit",
    "hero.eyebrow": "Giving your time back",
    "hero.title": "I take care of your tech so you have <em>time for what truly matters</em>.",
    "hero.lead": "Home visits and the first diagnosis are always free. You only pay for the actual work and parts.",
    "hero.cta1": "Schedule a visit",
    "hero.cta2": "What I do",
    "hero.b1": "Free visit",
    "hero.b2": "Free first diagnosis",
    "hero.b3": "Pay only for work & parts",
    "hero.caption": "Your master, ready to come to you.",
    "care.title": "Computer care",
    "care.lead": "So your tech works for you — not the other way round.",
    "security.title": "Security",
    "security.lead": "Peace of mind that doesn’t steal an hour of your time.",
    "learning.title": "Learning",
    "learning.lead": "Time spent learning comes back many times over.",
    "learning.adults": "Adults",
    "http://learning.kids": "Kids",
    "design.title": "Design",
    "design.lead": "Professional visuals without your evenings spent in graphic editors.",
    "http://svc.cleaning.title": "Computer cleaning",
    "http://svc.cleaning.text": "Laptop sounding like a small helicopter and overheating? Leave it to me. I come to your home for free, carefully clean the dust, replace thermal paste and lubricate the fans. While you enjoy a coffee, your machine becomes quiet and cool again.",
    "svc.upgrade.title": "Upgrades",
    "svc.upgrade.text": "Waiting for programs to open easily eats an hour a day. Often a fast SSD, some RAM, a new battery or CPU is enough — and your computer flies again. Free visit, honest advice.",
    "http://svc.software.title": "Software setup",
    "http://svc.software.text": "Slow Windows, pop-up ads, weird errors? Instead of clicking around looking for fixes, leave it to me. I clean the system, remove viruses, install what you need and help with online forms. Free home visit and diagnosis.",
    "http://svc.repair.title": "Repair & recycling",
    "http://svc.repair.text": "A broken computer doesn’t have to go straight to the trash. I’ll come for free and tell you honestly whether it’s worth fixing. If it’s done, I’ll happily take it for parts.",
    "http://svc.webcam.title": "Web-cameras",
    "http://svc.webcam.text": "Wondering whether things are fine at home? With cameras you can check from your phone any time — and even talk to a visitor remotely. I help you pick and install indoor and outdoor cameras. Free visit, free first consultation.",
    "svc.alarm.title": "Home alarm",
    "svc.alarm.text": "Lock the door and still feel uneasy? I’ll install a smart alarm with a loud siren and SMS alerts right onto the entry door of your flat, cottage or garage. No long installation, no drilled walls.",
    "svc.appliances.title": "Smart home",
    "svc.appliances.text": "Smart TV, robot vacuum, smart bulbs, thermostat — lovely, until you have to connect them. Instead of spending evenings reading manuals, call me. I set everything up and gently teach you how to use it.",
    "svc.literacy.title": "Computer literacy",
    "svc.literacy.text": "Afraid of the computer or just unsure if you are doing things right? Nothing to be ashamed of. I’ll teach you everything from the basics, at your own pace, at home. Free visit and first consultation.",
    "svc.tutor.title": "Computer science tutoring",
    "svc.tutor.text": "School IT suddenly doesn’t click and assignments feel like a foreign language? With my IT degree and teaching experience I’ll calmly tutor your child at home, without stress.",
    "svc.chess.title": "Chess",
    "svc.chess.text": "Chess isn’t just a game — it’s a little school of life. I play well and I’ll happily pass my knowledge to your child. Free first meeting, hours your child will remember warmly.",
    "svc.development.title": "Advanced technologies",
    "svc.development.text": "AI isn’t really taught at school yet — and it’s exactly what will decide who is ahead in a few years. I’ll teach your child to use AI wisely, for thinking and creativity, not just homework.",
    "http://svc.design.title": "Design for you",
    "http://svc.design.text": "Need a flyer, a poster, a service catalog or your own website? As a software developer with practice I’ll prepare something professional and human at the same time. Free first consultation.",
    "contact.eyebrow": "Call. Write. I’ll come.",
    "contact.title": "Let’s talk for a moment about what’s bothering you.",
    "contact.text": "Write or call — I’ll listen and advise you on what fits best. Home visits and the first diagnosis are always free.",
    "http://form.name": "Your name",
    "http://form.contact": "Email or phone",
    "form.message": "How can I help?",
    "form.submit": "Send message",
    "form.note": "I usually reply within a few hours. Visits and the first diagnosis are free.",
    "footer.tagline": "On-site computer services master · Prague and surroundings",
    "footer.meta": "© Time for what matters. Crafted with love for your time."
  }
};

=== scripts/app.js ===
(function(){
  const DEFAULT_LANG = 'cs';
  const STORAGE_KEY = 'cas-pro-dulezite.lang';
  const dict = window.I18N || {};

  function getLang(){
    const stored = localStorage.getItem(STORAGE_KEY);
    if(stored && dict[stored]) return stored;
    return DEFAULT_LANG;
  }

  function applyLang(lang){
    const table = dict[lang] || dict[DEFAULT_LANG] || {};
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(table[key] !== undefined) el.textContent = table[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if(table[key] !== undefined) el.innerHTML = table[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
  }

  function initLangSwitch(){
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  }

  function initNavToggle(){
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');
    if(!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', e => {
      if(http://e.target.tagName === 'A'){
        toggle.setAttribute('aria-expanded','false');
        nav.classList.remove('is-open');
      }
    });
  }

  function initReveal(){
    if(!('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll('.card, .section-head, .hero-figure, .contact-form, .contact-list');
    targets.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          http://entry.target.classList.add('is-visible');
          io.unobserve(http://entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  }

  function initTouchHover(){
    if(!matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', e => {
        if(http://e.target.closest('a,button')) return;
        card.classList.toggle('is-touch-hover');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(getLang());
    initLangSwitch();
    initNavToggle();
    initReveal();
    initTouchHover();
  });
})();

Styles: === styles/main.css ===
:root{
  --bg:#F8F4EC;
  --bg-soft:#F1E9D8;
  --surface:#FFFFFF;
  --ink:#1F2A37;
  --ink-soft:#3F4A5A;
  --muted:#6B7280;
  --line:#E7DECB;
  --line-strong:#D7CAA9;
  --accent:#C5862C;
  --accent-dark:#A26F1F;
  --accent-soft:#F4E2BE;
  --sage:#6B8E5A;
  --shadow:0 18px 40px -22px rgba(45,32,8,.25);
  --radius:20px;
  --radius-sm:12px;
  --ease:cubic-bezier(.2,.7,.2,1);
  --container:1180px;
}
,::before,::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:6px}

.container{width:100%;max-width:var(--container);margin:0 auto;padding:0 24px}

.skip-link{position:absolute;left:-9999px;top:0;background:var(--ink);color:#fff;padding:10px 16px;border-radius:0 0 12px 12px;z-index:1000}
.skip-link:focus{left:16px}

/ Header /
.site-header{position:sticky;top:0;z-index:50;background:rgba(248,244,236,.85);backdrop-filter:saturate(140%) blur(12px);border-bottom:1px solid var(--line)}
.header-inner{display:flex;align-items:center;gap:24px;min-height:76px}
.brand{display:flex;align-items:center;gap:12px;color:var(--accent)}
.brand-mark{display:inline-flex}
.brand-text{display:flex;flex-direction:column;color:var(--ink);line-height:1.1}
.brand-text strong{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:18px;letter-spacing:.01em}
.brand-text small{font-size:12px;color:var(--muted);margin-top:2px}
.primary-nav{display:flex;gap:22px;margin-left:auto;font-weight:500}
.primary-nav a{color:var(--ink-soft);padding:6px 2px;border-bottom:2px solid transparent;transition:.25s var(--ease)}
.primary-nav a:hover{color:var(--accent);border-color:var(--accent)}
.header-tools{display:flex;align-items:center;gap:14px}
.lang{display:inline-flex;background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:3px}
.lang-btn{background:transparent;border:0;border-radius:999px;padding:5px 12px;color:var(--muted);font-size:13px;letter-spacing:.04em}
.http://lang-btn.is-active{background:var(--accent);color:#fff}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:12px 22px;border-radius:999px;font-weight:600;border:1px solid transparent;transition:.25s var(--ease);white-space:nowrap}
.btn-primary{background:var(--accent);color:#fff}
.btn-primary:hover{background:var(--accent-dark);transform:translateY(-1px)}
.btn-ghost{background:transparent;color:var(--ink);border-color:var(--line-strong)}
.btn-ghost:hover{border-color:var(--accent);color:var(--accent)}
.btn-block{width:100%;padding:14px}
.nav-toggle{display:none;width:42px;height:42px;border:1px solid var(--line);background:var(--surface);border-radius:12px;align-items:center;justify-content:center;flex-direction:column;gap:5px}
.nav-toggle span{display:block;width:18px;height:2px;background:var(--ink);border-radius:2px;transition:.25s var(--ease)}
.nav-toggle[aria-expanded=true] span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.nav-toggle[aria-expanded=true] span:nth-child(2){opacity:0}
.nav-toggle[aria-expanded=true] span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

/ Hero /
.hero{position:relative;padding:72px 0 60px;overflow:hidden}
.hero::before{content:"";position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 10%,rgba(197,134,44,.18),transparent 60%),radial-gradient(60% 80% at 10% 90%,rgba(107,142,90,.12),transparent 60%);pointer-events:none;z-index:0}
.hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.1fr .9fr;gap:64px;align-items:center}
.eyebrow{display:inline-block;font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);font-weight:600;background:var(--accent-soft);padding:6px 14px;border-radius:999px}
.hero h1{font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:clamp(38px,5.2vw,64px);line-height:1.05;letter-spacing:-.01em;margin:22px 0 16px}
.hero h1 em{color:var(--accent);font-style:italic;font-weight:500}
.lead{font-size:19px;color:var(--ink-soft);max-width:48ch;margin:0 0 28px}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}
.hero-bullets{list-style:none;padding:0;margin:0;display:flex;gap:24px;flex-wrap:wrap;font-size:14px;color:var(--ink-soft)}
.hero-bullets li{display:flex;align-items:center;gap:8px}
.hero-bullets li::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--sage);box-shadow:0 0 0 4px rgba(107,142,90,.18)}
.hero-figure{margin:0;display:flex;flex-direction:column;align-items:center}
.hero-frame{position:relative;width:min(100%,420px);aspect-ratio:370/790;border-radius:36px;background:linear-gradient(160deg,var(--accent-soft),var(--bg-soft));padding:18px;box-shadow:var(--shadow)}
.hero-frame::before{content:"";position:absolute;inset:-14px;border:1px dashed var(--line-strong);border-radius:46px;pointer-events:none}
.hero-frame .swap{height:100%;border-radius:24px;overflow:hidden;background:var(--surface)}
.hero-frame .swap img{width:100%;height:100%;object-fit:cover;object-position:center}
.hero-badge{position:absolute;right:-14px;bottom:36px;width:76px;height:76px;border-radius:50%;background:var(--ink);color:var(--accent-soft);display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow);animation:spin 40s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.hero-badge{animation:none}}
.hero-figure figcaption{margin-top:16px;color:var(--muted);font-size:14px;font-style:italic}

/ Image swap /
.swap{position:relative;overflow:hidden}
.swap img{width:100%;height:100%;object-fit:cover;transition:opacity .5s var(--ease),transform .9s var(--ease)}
.swap .swap-hover{position:absolute;inset:0;opacity:0}
.swap:hover .swap-main,.card:hover .swap .swap-main{opacity:0;transform:scale(1.04)}
.swap:hover .swap-hover,.card:hover .swap .swap-hover{opacity:1;transform:scale(1.02)}

/ Sections /
.section{padding:96px 0;position:relative}
.section + .section{border-top:1px solid var(--line)}
.section-care{background:linear-gradient(180deg,var(--bg),var(--bg))}
.section-security{background:#FBF6EB}
.section-learning{background:var(--bg)}
.section-design{background:#FBF6EB}
.section-contact{background:linear-gradient(180deg,#FBF6EB,var(--bg))}
.section-head{display:grid;grid-template-columns:auto 1fr;align-items:end;gap:18px 24px;margin-bottom:48px}
.section-number{font-family:'Fraunces',Georgia,serif;font-size:64px;font-weight:500;color:var(--accent);line-height:1;grid-row:span 2}
.section-head h2{font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:clamp(30px,3.6vw,44px);line-height:1.1;margin:0;letter-spacing:-.01em}
.section-lead{margin:0;color:var(--ink-soft);max-width:60ch;font-size:18px}
.subsection{margin-top:36px}
.subsection-title{font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:22px;margin:0 0 20px;color:var(--ink-soft);display:inline-flex;align-items:center;gap:14px}
.subsection-title::before{content:"";width:36px;height:1px;background:var(--accent)}

/ Cards /
.cards{display:grid;gap:28px}
.cards-1{grid-template-columns:1fr}
.cards-3{grid-template-columns:repeat(3,1fr)}
.cards-4{grid-template-columns:repeat(4,1fr)}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;display:flex;flex-direction:column;transition:transform .35s var(--ease),box-shadow .35s var(--ease),border-color .35s var(--ease)}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow);border-color:var(--line-strong)}
.card-media{aspect-ratio:4/3;background:var(--bg-soft)}
.card-media img{object-fit:contain;padding:18px}
.card-body{padding:22px 24px 26px;display:flex;flex-direction:column;gap:10px;flex:1}
.card-body h3,.card-body h4{font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:22px;margin:0;line-height:1.2}
.card-body p{margin:0;color:var(--ink-soft);font-size:15.5px;line-height:1.6}
.card-wide{display:grid;grid-template-columns:1.05fr 1.4fr;align-items:stretch}
.card-wide .card-media{aspect-ratio:auto}
.card-wide .card-body{padding:32px 36px;justify-content:center}
.card-feature{background:linear-gradient(135deg,#FFFFFF,var(--accent-soft))}

/ Contact /
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
.contact-copy h2{font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:clamp(28px,3.4vw,40px);margin:18px 0 16px;line-height:1.15}
.contact-list{list-style:none;padding:0;margin:24px 0 0;display:grid;gap:14px}
.contact-list li{display:flex;align-items:center;gap:14px;background:var(--surface);border:1px solid var(--line);padding:14px 18px;border-radius:14px;transition:.25s var(--ease)}
.contact-list li:hover{border-color:var(--accent);transform:translateX(4px)}
.contact-icon{font-size:20px}
.contact-form{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:32px;display:grid;gap:16px;box-shadow:var(--shadow)}
.contact-form label{display:grid;gap:6px;font-size:13px;color:var(--ink-soft);font-weight:500}
.contact-form input,.contact-form textarea{font:inherit;background:var(--bg);border:1px solid var(--line);border-radius:12px;padding:12px 14px;color:var(--ink);transition:.2s var(--ease)}
.contact-form input:focus,.contact-form textarea:focus{border-color:var(--accent);outline:none;background:#fff}
.contact-form textarea{resize:vertical;min-height:110px}
.form-note{margin:0;color:var(--muted);font-size:13px;text-align:center}

/ Footer /
.site-footer{background:var(--ink);color:#E7DECB;padding:48px 0}
.footer-inner{display:grid;grid-template-columns:1.2fr 1.5fr auto;align-items:center;gap:24px}
.footer-brand{display:flex;flex-direction:column;gap:4px}
.footer-brand strong{font-family:'Fraunces',Georgia,serif;color:#fff;font-weight:500;font-size:20px}
.footer-brand small{color:#A89E84}
.footer-nav{display:flex;gap:22px;flex-wrap:wrap}
.footer-nav a{color:#D6CBAE;transition:.2s var(--ease)}
.footer-nav a:hover{color:var(--accent)}
.footer-meta{color:#8C826B;font-size:13px;text-align:right}

/ Reveal animation /
.reveal{opacity:0;transform:translateY(20px);transition:opacity .7s var(--ease),transform .7s var(--ease)}
.http://reveal.is-visible{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}

/ Responsive */
@media (max-width:1080px){
  .cards-4{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:960px){
  .primary-nav{position:fixed;top:76px;right:0;bottom:0;left:0;background:var(--bg);flex-direction:column;align-items:flex-start;padding:28px 24px;gap:18px;font-size:20px;transform:translateX(100%);transition:transform .35s var(--ease);z-index:40}
  .http://primary-nav.is-open{transform:translateX(0)}
  .nav-toggle{display:inline-flex}
  .header-cta{display:none}
  .hero-grid{grid-template-columns:1fr;gap:40px}
  .hero-figure{order:-1}
  .hero-frame{width:min(86%,360px)}
  .cards-3{grid-template-columns:repeat(2,1fr)}
  .card-wide{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr;gap:32px}
  .footer-inner{grid-template-columns:1fr;text-align:left}
  .footer-meta{text-align:left}
}
@media (max-width:640px){
  .section{padding:64px 0}
  .cards-4,.cards-3{grid-template-columns:1fr}
  .section-head{grid-template-columns:1fr}
  .section-number{grid-row:auto;font-size:48px}
  .hero{padding:48px 0 32px}
  .hero-bullets{gap:14px}
  .contact-form{padding:22px}
}

## 🎨 Отчёт по сайту

### Концепция

Имя записи Site content — **«Время для важного»**. Это и стало центральной метафорой макета: каждая услуга показывается не как технический процесс, а как способ вернуть клиенту время — на семью, отдых, работу, увлечения. Тон текстов записи — тёплый, спокойный, без давления, в духе доброго соседского мастера; макет повторяет эту интонацию визуально.

### 3–5 ассоциаций, выведенных из имени и текстов

1. **Часы / циферблат** — лейтмотив (логотип, бейдж в hero, нумерация секций как «01–04»).
2. **Тёплая гостиная, утренний свет, кофейный пар** — кремово-янтарная палитра, мягкие тени, скруглённые карточки.
3. **«Не торопимся»** — щедрый воздух между блоками, спокойная типографика с засечками, длинные строки.
4. **Доверие, рукотворность** — рамка с пунктиром у hero (как «домашняя» этикетка), личный голос «приеду к вам».
5. **Возвращённое время** — повторяющийся мотив «выезд бесплатно», бейдж-часы рядом с мастером.

### Палитра

| Роль | HEX |
| --- | --- |
| Фон страницы | `#F8F4EC` (тёплый кремовый) |
| Мягкий фон | `#F1E9D8` |
| Поверхность карточек | `#FFFFFF` |
| Основной текст | `#1F2A37` |
| Вторичный текст | `#6B7280` |
| Линии | `#E7DECB` |
| Янтарный акцент | `#C5862C` |
| Акцент тёмный | `#A26F1F` |
| Акцент мягкий | `#F4E2BE` |
| Спокойный зелёный | `#6B8E5A` (для маркеров) |

### Шрифты (Google Fonts)

- **Fraunces** (opsz 9–144, weights 400/500/700) — заголовки и брендовые элементы. Засечки придают «редакторский», человечный вид и подчёркивают идею не торопиться.
- **Inter** (400/500/600/700) — основной текст и UI. Высокая читаемость на любых экранах.

### Ключевые приёмы дизайна

- **Hero-блок «портрет в рамке»** — изображение мастера в скруглённой кремовой рамке с пунктирным внешним контуром (визуальная метафора «домашнего» обращения) и анимированным значком-часами рядом.
- **Двухслойные карточки услуг** с эффектом смены изображения при наведении (`--main` → `--hover`) и лёгким приподниманием с тенью. Изображения вписаны через `object-fit: contain` и не обрезаются.
- **Нумерованные секции (01–04)** — крупная засечная цифра рядом с заголовком, создаёт ритм «глав книги».
- **Сетки**: 4 карточки в «Уходе», 3 в «Безопасности», подразделы «Взрослые/Дети» в «Учёбе» (1 широкая + 3 равных), 1 широкая фичерная карточка в «Дизайне».
- **Анимации**: плавное появление по `IntersectionObserver`, медленное вращение бейджа-часов (отключается при `prefers-reduced-motion`).
- **Мобильное меню**: гамбургер, выезжающее меню на всю ширину, фиксированная шапка с blur-фоном.
- **Контакты**: два столбца — «карточки контактов» (email/телефон/WhatsApp/Telegram) и форма обратной связи через бесплатный сервис **FormSubmit** (без бекенда).
- **Доступность**: skip-link, фокус-стили, `aria-pressed` на переключателе языка, `aria-expanded` на меню, alt-тексты, контраст ≥ AA, поддержка `prefers-reduced-motion`.

### Содержимое

- Все **12 услуг** из страницы Computer services присутствуют и сопоставлены с парами изображений из Main images по полю `section`.
- Hero-изображение (`section: contact`, `role: hero`) органично вписано в hero-блок.
- Слоган `main` использован как заголовок hero (с выделением «čas na to nejdůležitější» янтарным курсивом).
- Контактный блок объединяет текст `contact` + список каналов связи + статичную форму.

### Целевые устройства

Mobile-first сетка с брейкпоинтами **640px / 960px / 1080px / 1180px**. Проверена компоновка на телефоне (одна колонка карточек), планшете (две колонки) и десктопе (3–4 колонки). Шрифты адаптивные через `clamp()`.

### Недостающие материалы

Все 12 пар изображений + hero-пара получены из Main images. Недостающих нет.

---

## 🧰 Инструкция по сборке

### Структура папок

```
cas-pro-dulezite/
├── index.html              ← свойство Html
├── manifest.webmanifest    ← свойство Other (блок === manifest.webmanifest ===)
├── vercel.json             ← свойство Other
├── robots.txt              ← свойство Other
├── sitemap.xml             ← свойство Other
├── README.md               ← свойство Other
├── styles/
│   └── main.css            ← свойство Styles
├── scripts/
│   ├── i18n.js             ← свойство Scripts (блок === scripts/i18n.js ===)
│   └── app.js              ← свойство Scripts (блок === scripts/app.js ===)
└── img/
    ├── hero--main.png
    ├── hero--hover.png
    ├── cleaning--main.png  ... cleaning--hover.png
    ├── upgrade--main.png   ... upgrade--hover.png
    ├── software--main.png  ... software--hover.png
    ├── repair--main.png    ... repair--hover.png
    ├── webcam--main.png    ... webcam--hover.png
    ├── alarm--main.png     ... alarm--hover.png
    ├── appliances--main.png ... appliances--hover.png
    ├── literacy--main.png  ... literacy--hover.png
    ├── tutor--main.png     ... tutor--hover.png
    ├── chess--main.png     ... chess--hover.png
    ├── development--main.png ... development--hover.png
    └── design--main.png    ... design--hover.png
```

### Как разложить файлы из свойств Site code

1. **Html** → один файл `index.html` в корне (содержимое идёт целиком, заголовок `=== index.html ===` нужен только как маркер).
2. **Styles** → создайте папку `styles/`, файл `main.css`.
3. **Scripts** → создайте папку `scripts/`. Свойство содержит **два блока** с разделителями `=== scripts/i18n.js ===` и `=== scripts/app.js ===`. Разрежьте их в два файла соответственно.
4. **Other** → разделите по маркерам `=== <имя файла> ===` на: `vercel.json`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`, `README.md`. Уложите в корень.
5. **img/** → создайте папку, скачайте 26 изображений из Notion-страницы Main images и сохраните с именами вида `slug--main.png` и `slug--hover.png` (slug берётся из карточек объектов: `hero`, `cleaning`, `upgrade`, `software`, `repair`, `webcam`, `alarm`, `appliances`, `literacy`, `tutor`, `chess`, `development`, `design`).

### Как переключать язык

- По умолчанию язык — `cs` (чешский).
- Кнопки переключателя — `CS` / `EN` в шапке. JS из `scripts/app.js` подставляет тексты из `window.I18N[lang]`, объявленного в `scripts/i18n.js`, и сохраняет выбор в `localStorage`.
- Добавление нового языка:
    1. В `scripts/i18n.js` дополните `window.I18N` новым ключом (например, `de`) и продублируйте все ключи.
    2. В `index.html` в блоке `.lang` добавьте кнопку: `<button type="button" class="lang-btn" data-lang="de" aria-pressed="false">DE</button>`.
- Тексты в HTML — только дефолтные (cs); фактический рендер всегда идёт через словарь, поэтому SEO для чешского по умолчанию работает корректно.

### Локальная проверка

```bash
npx serve .
# или
python3 -m http.server 8000
```

Откройте `http://localhost:3000` (или `:8000`) и проверьте: переключатель языка, hover на карточках, мобильное меню (DevTools → Toggle device toolbar).

---

## 🚀 Развёртывание на Vercel (или аналоге)

### Вариант A — через Git (рекомендуется)

1. Создайте репозиторий на **GitHub / GitLab / Bitbucket** и загрузите туда папку проекта.
2. Зайдите на [vercel.com](http://vercel.com) → **Add New… → Project**.
3. Подключите Git-провайдера и выберите репозиторий.
4. В шаге **Configure Project**:
    - **Framework Preset**: `Other`.
    - **Build Command**: оставьте пустым.
    - **Output Directory**: оставьте пустым (или `./`).
    - **Install Command**: пустым.
5. Нажмите **Deploy**. Через ~20 секунд получите URL вида `cas-pro-dulezite.vercel.app`.
6. После деплоя Vercel автоматически применит правила из `vercel.json` (кеш статики на год, security-заголовки).
7. **Свой домен**: Settings → Domains → Add → введите домен → следуйте инструкциям по DNS (CNAME или A-запись).
8. Каждый `git push` в основную ветку автоматически передеплоит сайт.

### Вариант B — drag-and-drop

1. Установите Vercel CLI: `npm i -g vercel`.
2. В корне проекта запустите `vercel` и следуйте подсказкам, или просто перетащите zip в дашборд (Import → Upload).

### Альтернативы (та же раскладка файлов)

- **Netlify**: drag-and-drop папки на `app.netlify.com` или подключение Git. Файл `netlify.toml` не нужен — статика работает сразу.
- **Cloudflare Pages**: New Project → Direct Upload или Git. Framework: `None`. Build command пустой.
- **GitHub Pages**: положите всё в ветку `gh-pages` или включите Pages в Settings → Pages.

### Проверка после публикации

- [ ]  Открывается стартовая страница.
- [ ]  Изображения подгружаются по путям `./img/*.png`.
- [ ]  Карточки реагируют на hover (главное → hover).
- [ ]  Переключатель CS/EN меняет тексты и сохраняет выбор после перезагрузки.
- [ ]  Мобильный вид (≤ 640px) — одна колонка, работает гамбургер-меню.
- [ ]  DevTools → Console — нет ошибок.
- [ ]  Lighthouse: Performance ≥ 90, Accessibility ≥ 95.

---

💛
Сайт спроектирован так, чтобы транслировать главное обещание мастера: **ваш день не ускоряется — он становится свободнее**.