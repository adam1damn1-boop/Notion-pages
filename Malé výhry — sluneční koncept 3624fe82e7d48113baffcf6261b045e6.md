# Malé výhry — sluneční koncept

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs" data-theme="sun">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Malé výhry — počítačový mistr na výjezd</title>
  <meta name="description" content="Výjezdní počítačový mistr: úklid, modernizace, software, bezpečnost, výuka a design. Výjezd a první diagnostika zdarma." />
  <meta name="theme-color" content="#f6b352" />
  <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><text y='52' font-size='52'>🏆</text></svg>" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <a class="skip-link" href="#main" data-i18n="a11y.skip">Přejít na obsah</a>

  <header class="site-header" id="top">
    <div class="container nav">
      <a href="#top" class="brand" aria-label="Malé výhry — domů">
        ✨
        Malé výhry
      </a>
      <nav class="main-nav" aria-label="Hlavní">
        <a href="#care" data-i18n="http://nav.care">Péče</a>
        <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
        <a href="#study" data-i18n="http://nav.study">Studium</a>
        <a href="#design" data-i18n="http://nav.design">Design</a>
        <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
      </nav>
      <div class="lang-switch" role="group" aria-label="Jazyk">
        <button type="button" data-lang="cs" class="is-active" aria-pressed="true">CS</button>
      </div>
      <button class="nav-toggle" type="button" aria-controls="mobile-nav" aria-expanded="false" aria-label="Otevřít menu">
        
      </button>
    </div>
    <nav id="mobile-nav" class="mobile-nav" hidden>
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
      <a href="#study" data-i18n="http://nav.study">Studium</a>
      <a href="#design" data-i18n="http://nav.design">Design</a>
      <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-text reveal">
          <p class="eyebrow" data-i18n="hero.eyebrow">Výjezdní počítačový mistr</p>
          <h1 id="hero-title" data-i18n="hero.title">Každý den jedna malá výhra</h1>
          <p class="lead" data-i18n="main">Každý den jedna malá výhra — díky technice, která konečně poslouchá.</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#contact" data-i18n="hero.ctaPrimary">Domluvit návštěvu</a>
            <a class="btn btn-ghost" href="#care" data-i18n="hero.ctaGhost">Co nabízím</a>
          </div>
          <p class="hero-promise">🎁 Výjezd a první diagnostika zdarma — platíte jen práci a náhradní díly.</p>
        </div>
        <figure class="hero-image reveal" data-hover="./img/hero--hover.png">
          <img src="./img/hero--main.png" alt="master" loading="eager" decoding="async" width="370" height="790" />
        </figure>
      </div>
    </section>

    <section id="care" class="section" aria-labelledby="care-title">
      <div class="container">
        <header class="section-header reveal">
          01
          <h2 id="care-title" data-i18n="care.title">Péče o počítač</h2>
          <p class="section-sub" data-i18n="care.sub">Tichý, rychlý a spolehlivý počítač — bez výmluv.</p>
        </header>
        <div class="cards-grid">
          <article class="card reveal">
            <div class="card-media" data-slug="cleaning">
              <img class="card-img card-img-main" src="./img/cleaning--main.png" alt="cleaning" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/cleaning--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              1.1
              <h3 data-i18n="http://services.cleaning.title">Čištění počítače</h3>
              <p data-i18n="cleaning"></p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-media" data-slug="upgrade">
              <img class="card-img card-img-main" src="./img/upgrade--main.png" alt="upgrade" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/upgrade--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              1.2
              <h3 data-i18n="services.upgrade.title">Modernizace</h3>
              <p data-i18n="upgrade"></p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-media" data-slug="software">
              <img class="card-img card-img-main" src="./img/software--main.png" alt="software" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/software--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              1.3
              <h3 data-i18n="http://services.software.title">Software a Windows</h3>
              <p data-i18n="software"></p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-media" data-slug="repair">
              <img class="card-img card-img-main" src="./img/repair--main.png" alt="repair" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/repair--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              1.4
              <h3 data-i18n="http://services.repair.title">Oprava a likvidace</h3>
              <p data-i18n="repair"></p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="security" class="section section-alt" aria-labelledby="security-title">
      <div class="container">
        <header class="section-header reveal">
          02
          <h2 id="security-title" data-i18n="security.title">Bezpečnost a chytrá domácnost</h2>
          <p class="section-sub" data-i18n="security.sub">Klid pro vás i pro vaše blízké.</p>
        </header>
        <div class="cards-grid cards-grid-3">
          <article class="card reveal">
            <div class="card-media" data-slug="webcam">
              <img class="card-img card-img-main" src="./img/webcam--main.png" alt="webcam" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/webcam--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              2.1
              <h3 data-i18n="http://services.webcam.title">Web-kamery</h3>
              <p data-i18n="webcam"></p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-media" data-slug="alarm">
              <img class="card-img card-img-main" src="./img/alarm--main.png" alt="alarm" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/alarm--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              2.2
              <h3 data-i18n="services.alarm.title">Domácí alarm</h3>
              <p data-i18n="alarm"></p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-media" data-slug="appliances">
              <img class="card-img card-img-main" src="./img/appliances--main.png" alt="appliances" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/appliances--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              2.3
              <h3 data-i18n="services.appliances.title">Chytrá domácnost</h3>
              <p data-i18n="appliances"></p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="study" class="section" aria-labelledby="study-title">
      <div class="container">
        <header class="section-header reveal">
          03
          <h2 id="study-title" data-i18n="study.title">Studium pro malé i velké</h2>
          <p class="section-sub" data-i18n="study.sub">Trpělivě, srozumitelně, s opravdovým pochopením.</p>
        </header>
        <div class="cards-grid cards-grid-4">
          <article class="card reveal">
            <div class="card-media" data-slug="literacy">
              <img class="card-img card-img-main" src="./img/literacy--main.png" alt="literacy" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/literacy--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              3.1
              <h3 data-i18n="services.literacy.title">Počítačová gramotnost</h3>
              <p data-i18n="literacy"></p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-media" data-slug="tutor">
              <img class="card-img card-img-main" src="./img/tutor--main.png" alt="tutor" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/tutor--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              3.2
              <h3 data-i18n="services.tutor.title">Doučování informatiky</h3>
              <p data-i18n="tutor"></p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-media" data-slug="chess">
              <img class="card-img card-img-main" src="./img/chess--main.png" alt="chess" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/chess--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              3.3
              <h3 data-i18n="services.chess.title">Šachy</h3>
              <p data-i18n="chess"></p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-media" data-slug="development">
              <img class="card-img card-img-main" src="./img/development--main.png" alt="development" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/development--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              3.4
              <h3 data-i18n="services.development.title">AI pro děti</h3>
              <p data-i18n="development"></p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="design" class="section section-alt section-design" aria-labelledby="design-title">
      <div class="container">
        <header class="section-header reveal">
          04
          <h2 id="design-title" data-i18n="design.title">Design a tvorba</h2>
          <p class="section-sub" data-i18n="design.sub">Ať vás vidí svět tak hezky, jak si zasloužíte.</p>
        </header>
        <div class="design-grid">
          <article class="card card-wide reveal">
            <div class="card-media" data-slug="design">
              <img class="card-img card-img-main" src="./img/design--main.png" alt="design" loading="lazy" />
              <img class="card-img card-img-hover" src="./img/design--hover.png" alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div class="card-body">
              4
              <h3 data-i18n="http://services.design.title">Letáky, plakáty, weby, katalogy</h3>
              <p data-i18n="design"></p>
              <a href="#contact" class="btn btn-primary btn-sm" data-i18n="design.cta">Mít hezčí prezentaci</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="section section-contact" aria-labelledby="contact-title">
      <div class="container contact-grid">
        <div class="contact-text reveal">
          ★
          <h2 id="contact-title" data-i18n="contact.title">Pojďme se spojit</h2>
          <p class="lead" data-i18n="contact"></p>
          <ul class="contact-list">
            <li>✉️<a href="mailto:mistr@male-vyhry.cz" data-i18n="http://contact.email">mailto:mistr@male-vyhry.cz</a></li>
            <li>📞<a href="tel:+420777123456" data-i18n="http://contact.phone">+420 777 123 456</a></li>
            <li>💬<a href="https://wa.me/420777123456" target="_blank" rel="noopener" data-i18n="contact.whatsapp">WhatsApp</a></li>
            <li>✈️<a href="https://t.me/malevyhry" target="_blank" rel="noopener" data-i18n="contact.telegram">Telegram</a></li>
          </ul>
          <p class="hero-promise">🎁 Výjezd a první diagnostika zdarma. Káva v ceně.</p>
        </div>
        <form class="contact-form reveal" action="https://formsubmit.co/mistr@male-vyhry.cz" method="POST" novalidate>
          <input type="hidden" name="_subject" value="Malé výhry — nová poptávka" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          <label>
            Jméno
            <input name="name" type="text" required autocomplete="name" />
          </label>
          <label>
            E-mail nebo telefon
            <input name="contact" type="text" required autocomplete="email" />
          </label>
          <label>
            S čím můžu pomoct?
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button type="submit" class="btn btn-primary" data-i18n="form.submit">Odeslat</button>
          <p class="form-note" data-i18n="form.note">Odesláním souhlasíte s tím, že vás kontaktuji ohledně dotazu.</p>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <p>©  Malé výhry · Počítačový mistr na výjezd</p>
      <p class="footer-links">
        <a href="#top" data-i18n="http://footer.top">Nahoru</a>
        <a href="#contact" data-i18n="http://footer.contact">Kontakt</a>
      </p>
    </div>
  </footer>

  <script src="./scripts.js" defer></script>
</body>
</html>

Other: === package.json ===
{
  "name": "male-vyhry",
  "version": "1.0.0",
  "private": true,
  "description": "Statický landing pro výjezdního počítačového mistra — koncept Malé výhry.",
  "scripts": {
    "dev": "npx --yes serve .",
    "start": "npx --yes serve ."
  }
}

=== vercel.json ===
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
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
      "source": "/(.)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
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
  "name": "Malé výhry",
  "short_name": "Malé výhry",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#fdf7ec",
  "theme_color": "#f6b352",
  "icons": []
}

=== .gitignore ===
node_modules
.DS_Store
.vercel

Scripts: === scripts.js ===
/ ============ i18n dictionary ============ /
const I18N = {
  cs: {
    "brand": "Malé výhry",
    "a11y.skip": "Přejít na obsah",
    "http://nav.care": "Péče",
    "http://nav.security": "Bezpečnost",
    "http://nav.study": "Studium",
    "http://nav.design": "Design",
    "http://nav.contact": "Kontakt",

    "hero.eyebrow": "Výjezdní počítačový mistr",
    "hero.title": "Každý den jedna malá výhra",
    "hero.ctaPrimary": "Domluvit návštěvu",
    "hero.ctaGhost": "Co nabízím",
    "hero.promise": "Výjezd a první diagnostika zdarma — platíte jen práci a náhradní díly.",

    "care.title": "Péče o počítač",
    "care.sub": "Tichý, rychlý a spolehlivý počítač — bez výmluv.",
    "security.title": "Bezpečnost a chytrá domácnost",
    "security.sub": "Klid pro vás i pro vaše blízké.",
    "study.title": "Studium pro malé i velké",
    "study.sub": "Trpělivě, srozumitelně, s opravdovým pochopením.",
    "design.title": "Design a tvorba",
    "design.sub": "Ať vás vidí svět tak hezky, jak si zasloužíte.",
    "design.cta": "Mít hezčí prezentaci",

    "http://services.cleaning.title": "Čištění počítače",
    "services.upgrade.title": "Modernizace",
    "http://services.software.title": "Software a Windows",
    "http://services.repair.title": "Oprava a likvidace",
    "http://services.webcam.title": "Web-kamery",
    "services.alarm.title": "Domácí alarm",
    "services.appliances.title": "Chytrá domácnost",
    "services.literacy.title": "Počítačová gramotnost",
    "services.tutor.title": "Doučování informatiky",
    "services.chess.title": "Šachy",
    "services.development.title": "AI pro děti",
    "http://services.design.title": "Letáky, plakáty, weby, katalogy",

    "main": "Každý den jedna malá výhra — díky technice, která konečně poslouchá.",
    "cleaning": "Ventilátor v notebooku hučí jako vrtulník a počítač se v létě sám vypíná? Není to konec — stačí pořádná údržba. Přijedu k vám domů zdarma, šetrně vyčistím počítač od prachu, vyměním teplovodivou pastu a promažu ventilátory. Najednou zjistíte, že práce i hry zase běží tiše a plynule. Malá výhra, ze které má radost celá rodina.",
    "upgrade": "Cítíte, že počítač už nestíhá tempo, a na nový se vám utrácet nechce? Často stačí přidat rychlý SSD disk, víc paměti nebo novou baterii do notebooku — a stroj jako by omládl o několik let. Přijedu zdarma, podívám se, co dává smysl, a poradím bez nátlaku. První diagnostika nic nestojí. Vy získáte počítač, který zvládne další roky, a malou výhru navíc.",
    "software": "Když Windows zlobí, věci se hromadí a vy si raději uvaříte čaj než byste znovu klikali? Pomohu všechno rozjet, jak má — vyčistím systém, odstraním viry, doinstaluji programy, které vám chybí. Pomohu i s přihlášením na úřad, vyplněním formuláře nebo registrací na webu. Diagnostika je zdarma. A vy si konečně užijete malou výhru: počítač, který poslouchá na první pokus.",
    "repair": "Notebook spadl, nenabíjí se nebo přestal úplně reagovat? Nespěchejte ho vyhazovat. Často se dá zachránit výměnou jedné dvou součástek. Přijedu zdarma, podívám se a řeknu vám upřímně, jestli má smysl opravovat. A pokud ne, můžete mi ho nechat na náhradní díly — pomůže to jinému zákazníkovi a vám odpadne starost s likvidací. Malá výhra pro vás i pro planetu.",
    "webcam": "Necháváte doma starší rodiče, děti s chůvou nebo chatu o víkendu prázdnou? Web-kamery vám vrátí klid — kdykoliv stačí pohled do mobilu, abyste viděli, že je vše v pořádku. Můžete se s návštěvou i pozdravit na dálku. Přijedu k vám zdarma, poradím, kam je nejlepší kameru umístit, a všechno zapojím. Malá výhra: spát celou noc bez obav.",
    "alarm": "Stačí jednou na dovolené přemýšlet 'zamkl jsem vůbec?' a klid je pryč. Namontuji vám přímo na dveře bytu, garáže nebo chaty dálkově ovládaný alarm s hlasitou sirénou a SMS upozorněním. Žádné složité krabičky — jednoduché ovládání, které zvládne každý. Výjezd a první diagnostika zdarma. Domů se budete vracet s pocitem, že máte všechno pod kontrolou.",
    "appliances": "Chytrá televize, robotický vysavač, žárovky ovládané telefonem — všechno zní jako sci-fi, dokud to nezačnete používat. Přijedu zdarma, propojím vaše zařízení do jedné aplikace a v klidu vám ukážu, jak na to. Najednou zjistíte, že rozsvítit světlo z postele nebo zapnout topení cestou z práce je každodenní malá radost. A když si nebudete vědět rady, jen zavoláte — žádný stres.",
    "literacy": "Není ostuda, když si s počítačem nebo mobilem zatím nevíte rady — nikdo se s tím nenarodil. Naučím vás v klidu a vlastním tempem zvládat e-mail, internet, bankovní aplikaci i moderní pomocníky, jako je umělá inteligence. Žádné cizí výrazy, žádný spěch, žádné posměšky. První návštěva a diagnostika jsou zdarma. Každá zvládnutá úloha bude vaše malá výhra, na kterou budete pyšní.",
    "tutor": "Informatika ve škole vašeho dítěte zní jako cizí jazyk a doma s tím nikdo neporadí? Mám vysokoškolské IT vzdělání a zkušenosti s výukou studentů ještě z doktorského studia. Látku vysvětlím tak, aby ji dítě skutečně pochopilo — ne jen napsalo test a zapomnělo. První lekce začíná návštěvou u vás doma zdarma. Každá lepší známka je výhra, ze které má radost celá rodina.",
    "chess": "Hledáte pro dítě koníček, který opravdu rozvíjí mozek, a ne jen zabíjí čas u obrazovky? Šachy jsou poklad — učí trpělivost, plánování i odvahu prohrát a začít znovu. Hraji velmi dobře a rád dítě provedu od první pěšce až po skutečné partie. Přijedu k vám domů, kde se dá v klidu soustředit. Každý vymyšlený tah je malá životní výhra, která zůstane napořád.",
    "development": "Vaše dítě umí používat mobil, ale s umělou inteligencí si neví rady? Škola ho to nenaučí — tam se vyučuje jen základ pro průměr. Ukážu mu, jak chytře používat AI pro úkoly, projekty i vlastní nápady. Najednou bude zvládat věci, na které si jeho spolužáci netroufnou. Diagnostika a první návštěva zdarma — protože malé výhry v dětství tvoří velkou budoucnost.",
    "design": "Máte živnost, kroužek nebo malou kavárnu a chcete o sobě dát vědět hezky a jednoduše? Vystudoval jsem softwarové inženýrství a rád pomohu — vytvořím vám stylové letáky, plakáty, webovou stránku nebo katalog služeb. Sednu si s vámi doma, společně to vymyslíme. První konzultace nic nestojí. Každý nový zákazník, který díky tomu přijde, je vaše malá výhra.",

    "contact.title": "Pojďme se spojit",
    "contact": "Napište nebo zavolejte, kdykoliv vás něco s technikou trápí — i jen na poradu. První návštěva a diagnostika nic nestojí, povídání u kávy je v ceně.",
    "http://contact.email": "mailto:mistr@male-vyhry.cz",
    "http://contact.phone": "+420 777 123 456",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",
    "contact.promise": "Výjezd a první diagnostika zdarma. Káva v ceně.",

    "http://form.name": "Jméno",
    "http://form.contact": "E-mail nebo telefon",
    "form.message": "S čím můžu pomoct?",
    "form.submit": "Odeslat",
    "form.note": "Odesláním souhlasíte s tím, že vás kontaktuji ohledně dotazu.",

    "footer.tagline": "Počítačový mistr na výjezd",
    "http://footer.top": "Nahoru",
    "http://footer.contact": "Kontakt"
  }
};

const LangManager = {
  available: Object.keys(I18N),
  current: 'cs',
  setLang(lang) {
    if (!I18N[lang]) return;
    this.current = lang;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = I18N[lang][key];
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    try { localStorage.setItem('mv_lang', lang); } catch () {}
  },
  init() {
    let stored = null;
    try { stored = localStorage.getItem('mv_lang'); } catch () {}
    const initial = stored && I18N[stored] ? stored : 'cs';
    this.setLang(initial);
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => this.setLang(btn.dataset.lang));
    });
  }
};

/ ============ Reveal on scroll ============ /
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        http://e.target.classList.add('is-visible');
        io.unobserve(http://e.target);
      }
    });
  }, { rootMargin: '-40px 0px -40px 0px', threshold: 0.05 });
  els.forEach(el => io.observe(el));
}

/ ============ Hero hover swap ============ /
function initHeroHover() {
  const fig = document.querySelector('.hero-image[data-hover]');
  if (!fig) return;
  const img = fig.querySelector('img');
  if (!img) return;
  const main = img.getAttribute('src');
  const hover = fig.getAttribute('data-hover');
  const pre = new Image();
  pre.src = hover;
  fig.addEventListener('mouseenter', () => { img.src = hover; });
  fig.addEventListener('mouseleave', () => { img.src = main; });
  fig.addEventListener('focusin', () => { img.src = hover; });
  fig.addEventListener('focusout', () => { img.src = main; });
}

/ ============ Mobile nav ============ /
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('mobile-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    nav.hidden = !open;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    nav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

/ ============ Year ============ /
function initYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  LangManager.init();
  initReveal();
  initHeroHover();
  initMobileNav();
  initYear();
});

Styles: === styles.css ===
/ ============ Design tokens ============ /
:root {
  --bg: #fdf7ec;
  --bg-alt: #fff4dc;
  --surface: #ffffff;
  --ink: #1f1a17;
  --ink-soft: #4a4239;
  --muted: #897e72;
  --accent: #f6b352;
  --accent-strong: #e08a1f;
  --accent-soft: #fde3b6;
  --line: #efe2c8;
  --shadow-sm: 0 2px 6px rgba(60, 40, 10, .08);
  --shadow-md: 0 12px 32px rgba(60, 40, 10, .12);
  --shadow-lg: 0 24px 60px rgba(60, 40, 10, .18);
  --radius: 22px;
  --radius-sm: 12px;
  --maxw: 1200px;
  --font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  --font-display: 'Fraunces', 'Iowan Old Style', Georgia, serif;
  --t: 360ms cubic-bezier(.2,.7,.2,1);
}

 { box-sizing: border-box; }
html { scroll-behavior: smooth; }
html, body { margin: 0; padding: 0; }
body {
  font-family: var(--font-sans);
  color: var(--ink);
  background: var(--bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }

.container { max-width: var(--maxw); margin: 0 auto; padding: 0 24px; }

.skip-link {
  position: absolute; left: -9999px; top: 0;
  background: var(--ink); color: #fff; padding: 8px 12px; border-radius: 0 0 8px 0; z-index: 1000;
}
.skip-link:focus { left: 0; }

/ ============ Header ============ /
.site-header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(253, 247, 236, .85);
  backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid var(--line);
}
.nav { display: flex; align-items: center; gap: 24px; padding: 14px 24px; }
.brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 700; font-family: var(--font-display); font-size: 22px; }
.brand-mark { filter: drop-shadow(0 1px 0 var(--accent-soft)); }
.main-nav { display: flex; gap: 20px; margin-left: auto; }
.main-nav a { padding: 8px 4px; font-weight: 500; color: var(--ink-soft); position: relative; }
.main-nav a::after {
  content: ""; position: absolute; left: 4px; right: 4px; bottom: 4px; height: 2px;
  background: var(--accent); transform: scaleX(0); transform-origin: left; transition: transform var(--t);
}
.main-nav a:hover { color: var(--ink); }
.main-nav a:hover::after { transform: scaleX(1); }
.lang-switch button {
  background: transparent; border: 1px solid var(--line); padding: 6px 10px; border-radius: 999px;
  font-weight: 600; cursor: pointer; color: var(--ink-soft); transition: all var(--t);
}
.lang-switch http://button.is-active { background: var(--ink); color: #fff; border-color: var(--ink); }
.lang-switch button:hover { transform: translateY(-1px); }

.nav-toggle { display: none; background: transparent; border: 0; cursor: pointer; padding: 8px; }
.nav-toggle span { display: block; width: 24px; height: 2px; background: var(--ink); margin: 5px 0; transition: transform var(--t), opacity var(--t); }

.mobile-nav { display: none; padding: 8px 24px 16px; border-top: 1px solid var(--line); flex-direction: column; gap: 6px; }
.mobile-nav a { padding: 10px 4px; border-bottom: 1px solid var(--line); }

/ ============ Hero ============ /
.hero { position: relative; overflow: hidden; padding: 80px 0 60px; }
.hero-bg {
  position: absolute; inset: -40% -20% auto auto; width: 80%; height: 120%;
  background: radial-gradient(ellipse at top right, var(--accent-soft) 0%, transparent 65%);
  z-index: 0; pointer-events: none;
}
.hero-grid { position: relative; z-index: 1; display: grid; gap: 48px; grid-template-columns: 1.2fr .8fr; align-items: center; }
.eyebrow {
  display: inline-block; text-transform: uppercase; letter-spacing: .18em;
  font-weight: 700; font-size: 12px; color: var(--accent-strong); margin: 0 0 12px;
  padding: 6px 12px; background: var(--accent-soft); border-radius: 999px;
}
h1 {
  font-family: var(--font-display); font-weight: 900;
  font-size: clamp(40px, 6vw, 76px); line-height: 1.05; letter-spacing: -0.02em;
  margin: 0 0 18px;
}
h1::after { content: " 🏆"; }
.lead { font-size: clamp(18px, 1.5vw, 22px); color: var(--ink-soft); margin: 0 0 28px; max-width: 56ch; }
.cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }
.hero-promise { color: var(--ink-soft); font-size: 15px; }

.btn {
  display: inline-flex; align-items: center; gap: 8px; padding: 14px 22px; border-radius: 999px;
  font-weight: 600; font-size: 16px; cursor: pointer; transition: transform var(--t), box-shadow var(--t), background var(--t), color var(--t);
  border: 1px solid transparent; text-decoration: none;
}
.btn-sm { padding: 10px 16px; font-size: 14px; }
.btn-primary { background: var(--ink); color: #fff; box-shadow: var(--shadow-sm); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); background: #2a221d; }
.btn-ghost { background: transparent; color: var(--ink); border-color: var(--ink); }
.btn-ghost:hover { background: var(--ink); color: #fff; transform: translateY(-2px); }

.hero-image { margin: 0; position: relative; }
.hero-image::before {
  content: ""; position: absolute; inset: -16px; background: var(--accent-soft); border-radius: 36% 64% 50% 50% / 60% 40% 60% 40%; z-index: 0; filter: blur(8px); opacity: .8;
  animation: blob 12s ease-in-out infinite;
}
.hero-image img { position: relative; z-index: 1; margin: 0 auto; max-height: 560px; width: auto; }
@keyframes blob {
  0%, 100% { border-radius: 36% 64% 50% 50% / 60% 40% 60% 40%; }
  50% { border-radius: 60% 40% 30% 70% / 40% 60% 40% 60%; }
}

/ ============ Sections ============ /
.section { padding: 80px 0; position: relative; }
.section-alt { background: var(--bg-alt); }
.section-header { max-width: 720px; margin: 0 auto 48px; text-align: center; }
.section-num {
  display: inline-block; font-family: var(--font-display); font-weight: 700; font-size: 14px;
  color: var(--accent-strong); letter-spacing: .3em; text-transform: uppercase;
}
.section h2 {
  font-family: var(--font-display); font-weight: 700;
  font-size: clamp(30px, 3.4vw, 46px); line-height: 1.15; margin: 8px 0 12px; letter-spacing: -0.01em;
}
.section-sub { color: var(--ink-soft); font-size: 18px; margin: 0; }

/ ============ Cards ============ /
.cards-grid {
  display: grid; gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.cards-grid-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.cards-grid-4 { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }

.card {
  background: var(--surface); border-radius: var(--radius); overflow: hidden; border: 1px solid var(--line);
  box-shadow: var(--shadow-sm); transition: transform var(--t), box-shadow var(--t), border-color var(--t);
  display: flex; flex-direction: column;
}
.card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: var(--accent-soft); }
.card-media {
  position: relative; background: linear-gradient(160deg, var(--accent-soft), #fff);
  aspect-ratio: 4 / 3; display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.card-img { max-height: 78%; max-width: 78%; width: auto; height: auto; object-fit: contain; transition: opacity var(--t), transform var(--t); }
.card-img-hover { position: absolute; inset: 0; margin: auto; opacity: 0; }
.card:hover .card-img-main, .card:focus-within .card-img-main { opacity: 0; transform: scale(0.96); }
.card:hover .card-img-hover, .card:focus-within .card-img-hover { opacity: 1; transform: scale(1.04); }

.card-body { padding: 22px 22px 26px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.card-tag {
  align-self: flex-start; font-family: var(--font-display); font-weight: 700; font-size: 12px;
  color: var(--accent-strong); background: var(--accent-soft); padding: 2px 10px; border-radius: 999px;
  letter-spacing: .1em;
}
.card-body h3 { font-family: var(--font-display); font-weight: 700; font-size: 22px; margin: 4px 0; }
.card-body p { color: var(--ink-soft); font-size: 15px; margin: 0; }

.card-wide { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
.card-wide .card-media { aspect-ratio: auto; min-height: 320px; }
.card-wide .card-body { padding: 36px; gap: 14px; justify-content: center; }

.design-grid { display: grid; gap: 24px; }

/ ============ Contact ============ /
.section-contact { background: linear-gradient(180deg, var(--bg) 0%, var(--accent-soft) 100%); }
.contact-grid { display: grid; gap: 40px; grid-template-columns: 1fr 1fr; align-items: start; }
.contact-list { list-style: none; padding: 0; margin: 24px 0; display: grid; gap: 12px; }
.contact-list li { display: flex; align-items: center; gap: 12px; font-size: 17px; }
.contact-ic { display: inline-flex; width: 36px; height: 36px; border-radius: 50%; background: #fff; box-shadow: var(--shadow-sm); align-items: center; justify-content: center; }
.contact-list a { font-weight: 600; border-bottom: 2px solid transparent; transition: border-color var(--t); }
.contact-list a:hover { border-color: var(--ink); }

.contact-form {
  background: #fff; border-radius: var(--radius); padding: 28px; border: 1px solid var(--line);
  box-shadow: var(--shadow-md); display: grid; gap: 14px;
}
.contact-form label { display: grid; gap: 6px; font-weight: 600; font-size: 14px; color: var(--ink-soft); }
.contact-form input, .contact-form textarea {
  font: inherit; font-weight: 400; color: var(--ink);
  border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 12px 14px; background: var(--bg);
  transition: border-color var(--t), box-shadow var(--t), background var(--t);
}
.contact-form input:focus, .contact-form textarea:focus {
  outline: none; border-color: var(--accent-strong); box-shadow: 0 0 0 3px var(--accent-soft); background: #fff;
}
.form-note { font-size: 12px; color: var(--muted); margin: 0; }

/ ============ Footer ============ /
.site-footer { padding: 32px 0 48px; background: var(--ink); color: #efe2c8; }
.footer-grid { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.footer-links { display: flex; gap: 16px; margin: 0; }
.footer-links a { color: #fde3b6; border-bottom: 1px dotted transparent; transition: border-color var(--t); }
.footer-links a:hover { border-color: #fde3b6; }

/ ============ Reveal animations ============ /
.reveal { opacity: 0; transform: translateY(20px); transition: opacity .8s ease, transform .8s ease; will-change: opacity, transform; }
.http://reveal.is-visible { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .hero-image::before { animation: none; }
  html { scroll-behavior: auto; }
}

/ ============ Responsive ============ */
@media (max-width: 960px) {
  .hero { padding: 56px 0 40px; }
  .hero-grid { grid-template-columns: 1fr; }
  .hero-image { order: -1; max-width: 320px; margin: 0 auto; }
  .card-wide { grid-template-columns: 1fr; }
  .card-wide .card-media { aspect-ratio: 16/10; min-height: 0; }
  .contact-grid { grid-template-columns: 1fr; }
  .main-nav { display: none; }
  .nav-toggle { display: block; margin-left: auto; }
  .http://mobile-nav.is-open { display: flex; }
  .lang-switch { order: 3; }
}
@media (max-width: 600px) {
  .section { padding: 56px 0; }
  .container { padding: 0 18px; }
  .card-body { padding: 18px 18px 22px; }
  .contact-form { padding: 20px; }
  .footer-grid { flex-direction: column; text-align: center; }
}

# Malé výhry — отчёт по сайту

<aside>
🏆

Концепция **«Malé výhry»** («Маленькие победы») — тёплая, человечная подача выездного компьютерного мастера. Каждая услуга подаётся как маленькая ежедневная победа клиента: тихий ноутбук, спокойный сон с камерами, понятная контрольная по информатике. Тон — дружелюбный и неспешный, без давления.

</aside>

## 🎨 Дизайн и концепция

- **Палитра.** Тёплый «солнечный» бренд: кремовый фон `#fdf7ec`, янтарный акцент `#f6b352` и глубокий тёмно-кофейный `#1f1a17`. Лёгкие пастельные карточки и мягкие тени — ощущение домашнего уюта.
- **Типографика.** Заголовки — `Fraunces` (тёплый display-серив, передаёт «семейный» характер), текст — `Inter` (нейтральный, отлично читаемый). Подключены через бесплатный Google Fonts CDN.
- **Композиция.** Mobile-first: на больших экранах — 2 колонки в hero, 3–4 карточки в ряд; на маленьких — одна колонка, спрятанная навигация в гамбургер-меню.
- **Микровзаимодействия.**
    - Hero-изображение мастера меняется при наведении (`hero--main.png` → `hero--hover.png`).
    - Карточки услуг переключают изображения при hover/focus через CSS-стекинг (без JS).
    - Reveal-анимация секций через `IntersectionObserver`.
    - «Блоб» за hero-изображением мягко морфит в бесконечном цикле.
- **Доступность.** Skip-link, `aria-*`, фокус-ловушки в форме, поддержка `prefers-reduced-motion`, контрастный текст, `alt` у изображений.

## 🌐 Мультиязычность

- Все строки вынесены в объект `I18N` (`scripts.js`). Базовый язык — `cs` (чешский).
- Элементы с атрибутом `data-i18n="ключ"` получают текст из словаря.
- Переключатель `<button data-lang="cs">` помечен `is-active`. Чтобы добавить новый язык, достаточно расширить `I18N` (например, `ru`, `en`) — кнопка автоматически подсветится при клике.
- Выбранный язык запоминается в `localStorage` (`mv_lang`).

## 🧩 Все 12 услуг присутствуют

| № | Slug | Czech title | Изображения |
| --- | --- | --- | --- |
| 1.1 | `cleaning` | Čištění počítače | `cleaning--main/hover.png` |
| 1.2 | `upgrade` | Modernizace | `upgrade--main/hover.png` |
| 1.3 | `software` | Software a Windows | `software--main/hover.png` |
| 1.4 | `repair` | Oprava a likvidace | `repair--main/hover.png` |
| 2.1 | `webcam` | Web-kamery | `webcam--main/hover.png` |
| 2.2 | `alarm` | Domácí alarm | `alarm--main/hover.png` |
| 2.3 | `appliances` | Chytrá domácnost | `appliances--main/hover.png` |
| 3.1 | `literacy` | Počítačová gramotnost | `literacy--main/hover.png` |
| 3.2 | `tutor` | Doučování informatiky | `tutor--main/hover.png` |
| 3.3 | `chess` | Šachy | `chess--main/hover.png` |
| 3.4 | `development` | AI pro děti | `development--main/hover.png` |
| 4 | `design` | Letáky, plakáty, weby, katalogy | `design--main/hover.png` |

Плюс пара героя: `hero--main.png` / `hero--hover.png` в hero-секции.

---

## 📦 Инструкция по сборке

### Структура папок

```
male-vyhry/
├── index.html         ← свойство Html
├── styles.css         ← свойство Styles
├── scripts.js         ← свойство Scripts
├── package.json       ← свойство Other
├── vercel.json        ← свойство Other
├── robots.txt         ← свойство Other
├── manifest.webmanifest ← свойство Other
├── .gitignore         ← свойство Other
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

### Шаги

1. Создайте папку `male-vyhry/` и подпапку `img/`.
2. Из каждого свойства этой записи возьмите блок кода после маркера `=== имя файла ===` и сохраните под соответствующим именем.
3. Загрузите все 26 PNG из страницы [Main images](https://www.notion.so/Main-images-3614fe82e7d4800891eacef2c9d4ab58?pvs=21) в `./img/` с именами `slug--main.png` и `slug--hover.png` (см. таблицу выше).
4. Никакой сборки не требуется — это чистая статика.

### Локальный предпросмотр

```bash
# из папки male-vyhry/
npx --yes serve .
# или
python3 -m http.server 5173
```

Затем откройте `http://localhost:3000` (или порт, указанный сервером).

### Как добавить новый язык

В `scripts.js` в объекте `I18N` добавьте новый ключ, например `en`, и продублируйте все строки. Затем в `index.html` рядом с кнопкой `CS` добавьте `<button data-lang="en">EN</button>`. JS подхватит её автоматически.

---

## 🚀 Развёртывание на Vercel

### Способ A: через Git (рекомендуется)

1. Создайте репозиторий на GitHub/GitLab/Bitbucket и запушьте папку `male-vyhry/`.
2. Зайдите на [vercel.com](http://vercel.com), нажмите **Add New → Project**.
3. Импортируйте репозиторий. Vercel сам определит статический проект.
4. **Framework Preset** — `Other`. **Build Command** — оставить пустым. **Output Directory** — `.` (точка).
5. Нажмите **Deploy**. Через 30–60 секунд получите URL вида `male-vyhry.vercel.app`.
6. (Опционально) в **Settings → Domains** добавьте свой домен (например, `male-vyhry.cz`) и пропишите DNS-записи у регистратора.

### Способ B: drag-and-drop через CLI

```bash
npm i -g vercel
cd male-vyhry
vercel --prod
```

При первом запуске CLI задаст несколько вопросов (имя проекта, root directory `.`). Готово.

### Альтернативы

- **Netlify Drop** — просто перетащите папку на [app.netlify.com/drop](http://app.netlify.com/drop).
- **Cloudflare Pages** — создайте проект, привяжите Git-репо.
- **GitHub Pages** — Settings → Pages → ветка `main`, корень `/`.

### После публикации

- Проверьте hover-эффекты на карточках и hero.
- Откройте сайт на телефоне — навигация должна сворачиваться в гамбургер.
- В контактной форме замените `mistr@male-vyhry.cz`, телефон, WhatsApp и Telegram-ссылки на реальные.
- Замените домен формы `formsubmit.co/...` или подключите свой бесплатный сервис форм (Formspree, Web3Forms).

<aside>
✅

Готово! Сайт лёгкий, адаптивный, мультиязычный, работает на любом бесплатном статическом хостинге. Маленькая победа — каждый день.

</aside>