# Útulné technologie — тёплый одностраничник (терракота + крем)

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="Útulné technologie pro váš domov. Počítačové služby s výjezdem a první diagnostikou zdarma.">
<meta name="theme-color" content="#C66B3D">
<title>Útulné technologie — počítačové služby s výjezdem zdarma</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap">
<link rel="stylesheet" href="./styles.css">
<link rel="manifest" href="./manifest.webmanifest">
</head>
<body>
<a class="skip" href="#main" data-i18n="skip">Přeskočit na obsah</a>
<header class="site-header">
  <div class="container header-inner">
    <a class="logo" href="#top">
      ☕
      Útulné technologie
    </a>
    <nav class="main-nav" aria-label="Navigace">
      <a href="#care" data-i18n="http://nav.care">Péče</a>
      <a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
      <a href="#learning" data-i18n="nav.learning">Učení</a>
      <a href="#design" data-i18n="http://nav.design">Design</a>
      <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
    </nav>
    <div class="lang-switch" role="group" aria-label="Jazyk">
      <button class="lang-btn is-active" data-lang="cs" aria-pressed="true">CS</button>
    </div>
    <button class="menu-toggle" aria-label="Menu" aria-expanded="false">
      
    </button>
  </div>
</header>

<main id="main">
  <section class="hero" id="top">
    <div class="container hero-inner">
      <div class="hero-text">
        <p class="eyebrow" data-i18n="hero.eyebrow">Vítejte doma u techniky</p>
        <h1 data-i18n="hero.title">Útulné technologie pro váš domov</h1>
        <p class="lead" data-i18n="hero.main">Útulné technologie pro váš domov — výjezd i první diagnostika zdarma.</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#contact" data-i18n="hero.cta">Napsat mistrovi</a>
          <a class="btn btn-ghost" href="#care" data-i18n="http://hero.services">Prohlédnout služby</a>
        </div>
        <ul class="hero-points">
          <li data-i18n="hero.p1">✔ Výjezd zdarma</li>
          <li data-i18n="hero.p2">✔ První diagnostika zdarma</li>
          <li data-i18n="hero.p3">✔ Platíte jen za práci a díly</li>
        </ul>
      </div>
      <figure class="hero-figure">
        <img class="hero-img hero-img--main" src="./img/hero--main.png" alt="Mistr Květoslav" width="370" height="790">
        <img class="hero-img hero-img--hover" src="./img/hero--hover.png" alt="" aria-hidden="true" width="370" height="790">
        Výjezd a diagnostika zdarma
      </figure>
    </div>
  </section>

  <section class="category" id="care">
    <div class="container">
      <header class="cat-header">
        🖥️
        <h2 data-i18n="http://cat.care.title">Péče o počítač</h2>
        <p data-i18n="http://cat.care.lead">Aby vaše technika doma spolehlivě dýchala.</p>
      </header>
      <div class="cards" data-cat="care"></div>
    </div>
  </section>

  <section class="category alt" id="security">
    <div class="container">
      <header class="cat-header">
        🔒
        <h2 data-i18n="http://cat.security.title">Bezpečnost</h2>
        <p data-i18n="http://cat.security.lead">Klidný spánek díky chytrému dohledu.</p>
      </header>
      <div class="cards" data-cat="security"></div>
    </div>
  </section>

  <section class="category" id="learning">
    <div class="container">
      <header class="cat-header">
        🎓
        <h2 data-i18n="cat.learning.title">Učení</h2>
        <p data-i18n="cat.learning.lead">Pro dospělé i pro děti — v pohodlí domova.</p>
      </header>
      <div class="cards" data-cat="learning"></div>
    </div>
  </section>

  <section class="category alt" id="design">
    <div class="container">
      <header class="cat-header">
        🎨
        <h2 data-i18n="http://cat.design.title">Design</h2>
        <p data-i18n="http://cat.design.lead">Z vašeho nápadu uděláme něco hezkého.</p>
      </header>
      <div class="cards" data-cat="design"></div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="container contact-inner">
      <div class="contact-text">
        <p class="eyebrow" data-i18n="contact.eyebrow">📞 Spojme se</p>
        <h2 data-i18n="contact.title">Stačí krátká zpráva</h2>
        <p class="lead" data-i18n="contact.lead">Stačí krátká zpráva — ozvu se vám, v klidu si popovídáme a domluvíme příjezd. První konzultace nic nestojí a k ničemu vás nezavazuje.</p>
        <div class="contact-actions">
          <a class="btn btn-primary" href="mailto:mistr@utulnetechnologie.cz" data-i18n="contact.cta_email">✉ Napsat e-mail</a>
          <a class="btn btn-ghost" href="tel:+420777000000" data-i18n="contact.cta_call">📞 Zavolat</a>
          <a class="btn btn-ghost" href="https://wa.me/420777000000" data-i18n="contact.cta_msg">💬 WhatsApp</a>
          <a class="btn btn-ghost" href="https://t.me/utulnetechnologie" data-i18n="contact.cta_tg">✈ Telegram</a>
        </div>
        <form class="contact-form" action="https://formsubmit.co/mistr@utulnetechnologie.cz" method="POST">
          <label>Vaše jméno<input type="text" name="name" required></label>
          <label>E-mail nebo telefon<input type="text" name="contact" required></label>
          <label>Napište, s čím vám mohu pomoci<textarea name="message" rows="4" required></textarea></label>
          <button type="submit" class="btn btn-primary" data-i18n="form.submit">Odeslat zprávu</button>
        </form>
      </div>
      <aside class="contact-meta">
        <h3 data-i18n="contact.meta_title">Co od první návštěvy čekat?</h3>
        <ol>
          <li data-i18n="contact.meta_1">Krátký rozhovor, abych pochopil situaci.</li>
          <li data-i18n="contact.meta_2">Bezplatný příjezd k vám domů.</li>
          <li data-i18n="contact.meta_3">Klidná diagnostika a férový návrh řešení.</li>
          <li data-i18n="contact.meta_4">Platíte až po dohodě — jen za práci a díly.</li>
        </ol>
      </aside>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container footer-inner">
    <p data-i18n="footer.rights">© 2026 Útulné technologie. Vytvořeno s teplem.</p>
    <p><a href="#top" data-i18n="http://footer.top">Nahoru ↑</a></p>
  </div>
</footer>

<script src="./i18n.js"></script>
<script src="./main.js"></script>
</body>
</html>

Other: === package.json ===
{
  "name": "utulne-technologie",
  "version": "1.0.0",
  "private": true,
  "description": "Static marketing site for cozy computer services (cs).",
  "scripts": {
    "start": "npx serve .",
    "build": "echo 'Static site — nothing to build.'"
  },
  "license": "MIT"
}

=== vercel.json ===
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=3600, must-revalidate" }
      ]
    },
    {
      "source": "/img/(.)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=2592000, immutable" }
      ]
    }
  ]
}

=== manifest.webmanifest ===
{
  "name": "Útulné technologie",
  "short_name": "Útulné",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FAF5EC",
  "theme_color": "#C66B3D",
  "icons": []
}

=== robots.txt ===
User-agent: *
Allow: /

=== .gitignore ===
node_modules
.DS_Store
.vercel

Scripts: === i18n.js ===
window.I18N = {
  cs: {
    skip: 'Přeskočit na obsah',
    brand: 'Útulné technologie',
    'http://nav.care': 'Péče',
    'http://nav.security': 'Bezpečnost',
    'nav.learning': 'Učení',
    'http://nav.design': 'Design',
    'http://nav.contact': 'Kontakt',
    'hero.eyebrow': 'Vítejte doma u techniky',
    'hero.title': 'Útulné technologie pro váš domov',
    'hero.main': 'Útulné technologie pro váš domov — výjezd i první diagnostika zdarma.',
    'hero.cta': 'Napsat mistrovi',
    'http://hero.services': 'Prohlédnout služby',
    'hero.p1': '✔ Výjezd zdarma',
    'hero.p2': '✔ První diagnostika zdarma',
    'hero.p3': '✔ Platíte jen za práci a díly',
    'hero.badge': 'Výjezd a diagnostika zdarma',
    'http://cat.care.title': 'Péče o počítač',
    'http://cat.care.lead': 'Aby vaše technika doma spolehlivě dýchala.',
    'http://cat.security.title': 'Bezpečnost',
    'http://cat.security.lead': 'Klidný spánek díky chytrému dohledu.',
    'cat.learning.title': 'Učení',
    'cat.learning.lead': 'Pro dospělé i pro děti — v pohodlí domova.',
    'http://cat.design.title': 'Design',
    'http://cat.design.lead': 'Z vašeho nápadu uděláme něco hezkého.',
    'contact.eyebrow': '📞 Spojme se',
    'contact.title': 'Stačí krátká zpráva',
    'contact.lead': 'Stačí krátká zpráva — ozvu se vám, v klidu si popovídáme a domluvíme příjezd. První konzultace nic nestojí a k ničemu vás nezavazuje.',
    'contact.cta_email': '✉ Napsat e-mail',
    'contact.cta_call': '📞 Zavolat',
    'contact.cta_msg': '💬 WhatsApp',
    'contact.cta_tg': '✈ Telegram',
    'contact.meta_title': 'Co od první návštěvy čekat?',
    'contact.meta_1': 'Krátký rozhovor, abych pochopil situaci.',
    'contact.meta_2': 'Bezplatný příjezd k vám domů.',
    'contact.meta_3': 'Klidná diagnostika a férový návrh řešení.',
    'contact.meta_4': 'Platíte až po dohodě — jen za práci a díly.',
    'http://form.name': 'Vaše jméno',
    'http://form.contact': 'E-mail nebo telefon',
    'form.message': 'Napište, s čím vám mohu pomoci',
    'form.submit': 'Odeslat zprávu',
    'footer.rights': '© 2026 Útulné technologie. Vytvořeno s teplem.',
    'http://footer.top': 'Nahoru ↑',
    services: {
      cleaning: { num: '1.1', cat: 'care', title: 'Počítačový úklid', body: 'Když si večer sednete k počítači a slyšíte, jak ventilátor řve jako tryskáč, ztrácí se ten domácí klid. Prach a vyschlá teplovodivá pasta umí proměnit váš věrný stroj v hlučného souseda. Přijedu k vám domů zdarma, počítač jemně vyčistím, vyměním pastu, promažu ventilátory a v případě potřeby vylepším chlazení. Z vašeho stolu se zase stane tiché a útulné místo, kam se budete rádi vracet.' },
      upgrade: { num: '1.2', cat: 'care', title: 'Modernizace', body: 'Máte pocit, že váš počítač zpomalil natolik, že byste si při čekání stihli uvařit čaj? Nemusíte hned utrácet za nový — často stačí přidat rychlý SSD disk, více paměti, vyměnit procesor nebo baterii v notebooku. Přijedu zdarma, podívám se, co dává smysl, a poradím, jak za málo peněz získat skoro novou mašinu. Doma to bude zase plynulé, pohodlné a bez zbytečných nervů.' },
      software: { num: '1.3', cat: 'care', title: 'Nastavení softwaru', body: 'Windows má svoje nálady — postupně se zaplní programy, které nikdo nepoužívá, a najednou trvá všechno věčnost. K tomu se přidají viry, reklamy a podivná okna, která vyskakují, kdy nemají. Přijedu k vám domů zdarma, systém pročistím, nastavím nebo nainstaluji novější verzi, pomůžu s internetem i s vyplněním úředních formulářů online. Doma pak budete mít počítač, který poslouchá vás, ne naopak.' },
      repair: { num: '1.4', cat: 'care', title: 'Oprava a likvidace', body: 'Stará dobrá věc se rozbila a vy už ji v duchu vidíte v kontejneru? Počkejte chvilku — možná stačí vyměnit jednu součástku a notebook bude dál sloužit dětem nebo babičce. Přijedu zdarma, podívám se, poradím, co se vyplatí opravit a co už opravdu doslouží. Pokud to nepůjde, vezmu si počítač na náhradní díly a vám odpadne starost s jeho likvidací.' },
      webcam: { num: '2.1', cat: 'security', title: 'Web kamery', body: 'Když odjedete na víkend na chalupu nebo necháte rodiče samotné doma, hlavou se honí spousta drobných obav. Stačí kabelový internet nebo Wi-Fi a já vám doma i venku zapojím kolik kamer budete chtít. Příjezd a první konzultace zdarma. Z mobilu si pak v klidu zkontrolujete, že je všechno v pořádku, a dokonce si můžete popovídat s návštěvou u dveří.' },
      alarm: { num: '2.2', cat: 'security', title: 'Domácí alarm', body: 'Vrátit se z práce a najít otevřené dveře — to je sen, který nikdo nechce mít. Na vstupní dveře bytu, sklepa nebo garáže nainstaluji dálkově ovládaný alarm s hlasitou sirénou a SMS upozorněním. Přijedu zdarma a poradím, kam ho nejlépe umístit. Doma pak budete spát klidněji, i když jste třeba na druhém konci republiky.' },
      appliances: { num: '2.3', cat: 'security', title: 'Chytrá domácnost', body: 'Představte si, že při příjezdu domů už svítí lampa v obýváku, topí se v ložnici a televize ví, co máte rádi. Moderní zařízení se dají propojit do chytré domácnosti, ale jejich nastavení často připomíná luštění křížovky. Přijedu zdarma, propojím aplikace a všechnu techniku — od chytrého televizoru až po žárovky — a v klidu vás naučím, jak to ovládat. Pohodlí bez čtení tlustých návodů.' },
      literacy: { num: '3.1', cat: 'learning', title: 'Počítačová gramotnost', body: 'Když se kolem všichni baví o e-mailech, datových schránkách a umělé inteligenci, je snadné se v tom ztratit. Přijedu k vám domů zdarma a v klidu vám ukážu, jak používat počítač, mobil i moderní pomocníky, kteří vám ušetří hodiny času. Učím srozumitelně, vlastním tempem a beze spěchu. Brzy zjistíte, že technika může být váš příjemný společník, ne nepřítel.' },
      tutor: { num: '3.2', cat: 'learning', title: 'Doučování informatiky', body: 'Děti si s informatikou občas nevědí rady a rodiče také ne vždy stihnou pomoci. Mám vysokoškolské vzdělání v IT a praxi s vyučováním studentů z dob doktorského studia. Přijedu zdarma, podívám se, kde to vázne, a domluvíme se na klidném tempu výuky. Doma, u známého stolu, se učí dětem nejlíp.' },
      chess: { num: '3.3', cat: 'learning', title: 'Šachy', body: 'Šachy nejsou jen hra — jsou to teplé večery s rodinou, soustředění a tichá radost z dobrého tahu. Hraji velmi rád a umím i učit, takže z vašeho dítěte může být nejen lepší žák, ale i klidnější přemýšlivý člověk. Přijedu zdarma a první lekci si vyzkoušíme nezávazně. Místo dalšího koukání do obrazovky pěkná deska, dvě židle a spousta nápadů.' },
      development: { num: '3.4', cat: 'learning', title: 'Vysoké technologie pro děti', body: 'Svět se mění tak rychle, že to, co je dnes módní, bude zítra samozřejmostí. Naučím vaše děti pracovat s umělou inteligencí tak, aby jim pomáhala s domácími úkoly i s rozšířením rozhledu daleko za rámec školy. Přijedu k vám domů zdarma, společně se podíváme, co dítě baví, a najdeme tu správnou formu — někdy hravou, někdy soustředěnou. Když si dítě zvykne na chytré nástroje brzy, ve třídě bude o krok napřed bez stresu.' },
      design: { num: '4', cat: 'design', title: 'Design a vývoj', body: 'Otevíráte malou firmu, chystáte rodinnou oslavu nebo prostě potřebujete vlastní stránku na internetu? Jsem vystudovaný vývojář softwaru s praxí a navrhnu vám hezké letáky, plakáty, web nebo i celou aplikaci. Přijedu zdarma na první schůzku, vyposlechnu si vaše představy a navrhnu řešení, které vám sedne. Z vašeho nápadu uděláme něco, na co budete pyšní.' }
    }
  }
};

=== main.js ===
(function () {
  var SERVICE_ORDER = ['cleaning','upgrade','software','repair','webcam','alarm','appliances','literacy','tutor','chess','development','design'];
  var defaultLang = 'cs';
  var currentLang = defaultLang;

  function dict() { return window.I18N[currentLang] || window.I18N[defaultLang]; }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  function renderCards() {
    var d = dict();
    var groups = { care: [], security: [], learning: [], design: [] };
    SERVICE_ORDER.forEach(function (slug) {
      var s = http://d.services[slug];
      if (!s) return;
      groups[http://s.cat].push(Object.assign({ slug: slug }, s));
    });
    Object.keys(groups).forEach(function (cat) {
      var wrap = document.querySelector('.cards[data-cat="' + cat + '"]');
      if (!wrap) return;
      wrap.innerHTML = groups[cat].map(function (s) {
        return '<article class="card reveal" data-slug="' + s.slug + '">'
          + '<div class="card-media">'
          +   '<img class="main" src="./img/' + s.slug + '--main.png" alt="' + escapeHtml(s.title) + '" loading="lazy" decoding="async">'
          +   '<img class="hover" src="./img/' + s.slug + '--hover.png" alt="" aria-hidden="true" loading="lazy" decoding="async">'
          + '</div>'
          + '§ ' + escapeHtml(s.num) + ''
          + '<h3>' + escapeHtml(s.title) + '</h3>'
          + '<p class="card-body">' + escapeHtml(s.body) + '</p>'
          + '</article>';
      }).join('');
    });
    observeReveals();
  }

  function applyI18nAttrs() {
    var d = dict();
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (d[key] != null) el.textContent = d[key];
    });
    document.documentElement.setAttribute('lang', currentLang);
  }

  function setLang(lang) {
    if (!window.I18N[lang]) return;
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      var active = b.dataset.lang === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    applyI18nAttrs();
    renderCards();
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function bindLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });
  }

  function bindMobileMenu() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.main-nav');
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

  function observeReveals() {
    var els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          http://e.target.classList.add('in');
          io.unobserve(http://e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    setLang(saved && window.I18N[saved] ? saved : defaultLang);
    bindLangSwitcher();
    bindMobileMenu();
    document.querySelectorAll('.hero, .category, .contact, .cat-header').forEach(function (el) { el.classList.add('reveal'); });
    observeReveals();
  });
})();

Styles: === styles.css ===
:root {
  --bg: #FAF5EC;
  --bg-soft: #F2E9D8;
  --bg-card: #FFFDF8;
  --text: #2D2A26;
  --text-soft: #6A625A;
  --accent: #C66B3D;
  --accent-deep: #8E4A23;
  --leaf: #4A6B5C;
  --line: rgba(46,42,38,.08);
  --shadow-sm: 0 2px 6px rgba(143,93,55,.07);
  --shadow-md: 0 14px 40px rgba(143,93,55,.12);
  --radius: 18px;
  --radius-lg: 28px;
  --max: 1200px;
  --ease: cubic-bezier(.2,.7,.2,1);
}
 { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font: 16px/1.6 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}
img { display: block; max-width: 100%; height: auto; }
a { color: inherit; }
h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; font-weight: 600; letter-spacing: -.01em; margin: 0 0 .4em; color: var(--text); }
h1 { font-size: clamp(2rem, 4.5vw, 3.4rem); line-height: 1.1; }
h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); }
h3 { font-size: 1.2rem; }
.container { max-width: var(--max); margin: 0 auto; padding: 0 24px; }
.skip { position: absolute; left: -9999px; }
.skip:focus { left: 16px; top: 16px; background: var(--accent); color: #fff; padding: 8px 14px; border-radius: 8px; z-index: 100; }

.site-header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(250,245,236,.86);
  -webkit-backdrop-filter: saturate(140%) blur(10px);
  backdrop-filter: saturate(140%) blur(10px);
  border-bottom: 1px solid var(--line);
}
.header-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 68px; position: relative; }
.logo { display: flex; align-items: center; gap: 10px; text-decoration: none; font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.15rem; color: var(--text); }
.logo-mark { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: var(--accent); color: #fff; }
.main-nav { display: flex; gap: 22px; }
.main-nav a { text-decoration: none; color: var(--text-soft); font-weight: 500; transition: color .2s var(--ease); }
.main-nav a:hover, .main-nav a:focus-visible { color: var(--accent-deep); }
.lang-switch { display: flex; gap: 6px; }
.lang-btn { background: transparent; border: 1px solid var(--line); border-radius: 999px; padding: 6px 12px; font-weight: 600; font-size: .85rem; cursor: pointer; color: var(--text-soft); transition: all .2s var(--ease); font-family: inherit; }
.http://lang-btn.is-active, .lang-btn:hover { background: var(--accent); border-color: var(--accent); color: #fff; }
.menu-toggle { display: none; background: none; border: 0; cursor: pointer; flex-direction: column; gap: 5px; padding: 8px; }
.menu-toggle span { display: block; width: 24px; height: 2px; background: var(--text); border-radius: 2px; transition: transform .2s var(--ease); }

.hero { padding: 64px 0 80px; background: radial-gradient(1200px 600px at 90% -10%, #F7D9B3 0%, transparent 60%), var(--bg); }
.hero-inner { display: grid; grid-template-columns: 1.1fr .9fr; gap: 56px; align-items: center; }
.eyebrow { color: var(--accent-deep); text-transform: uppercase; letter-spacing: .18em; font-size: .82rem; font-weight: 600; margin: 0 0 12px; }
.lead { font-size: 1.15rem; color: var(--text-soft); margin: 0 0 26px; max-width: 540px; }
.hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 22px; border-radius: 999px; font-weight: 600; text-decoration: none; transition: transform .2s var(--ease), box-shadow .2s var(--ease), background .2s var(--ease), color .2s var(--ease), border-color .2s var(--ease); cursor: pointer; border: 0; font: inherit; }
.btn-primary { background: var(--accent); color: #fff; box-shadow: var(--shadow-sm); }
.btn-primary:hover, .btn-primary:focus-visible { transform: translateY(-2px); box-shadow: var(--shadow-md); background: var(--accent-deep); }
.btn-ghost { background: var(--bg-card); color: var(--text); border: 1px solid var(--line); }
.btn-ghost:hover, .btn-ghost:focus-visible { transform: translateY(-2px); border-color: var(--accent); color: var(--accent-deep); }
.hero-points { list-style: none; padding: 0; margin: 28px 0 0; display: flex; flex-wrap: wrap; gap: 18px; color: var(--text-soft); font-weight: 500; }
.hero-figure { position: relative; justify-self: center; }
.hero-img { width: min(100%, 370px); height: auto; border-radius: 24px; transition: opacity .6s var(--ease); }
.hero-img--hover { position: absolute; inset: 0; opacity: 0; }
.hero-figure:hover .hero-img--hover, .hero-figure:focus-within .hero-img--hover { opacity: 1; }
.hero-figure:hover .hero-img--main, .hero-figure:focus-within .hero-img--main { opacity: 0; }
.hero-badge { position: absolute; bottom: 20px; left: -18px; background: var(--leaf); color: #fff; padding: 10px 18px; border-radius: 999px; font-weight: 600; box-shadow: var(--shadow-md); font-size: .9rem; }

.category { padding: 72px 0; }
.category.alt { background: var(--bg-soft); }
.cat-header { text-align: center; max-width: 720px; margin: 0 auto 44px; }
.cat-icon { display: inline-grid; place-items: center; width: 56px; height: 56px; background: var(--bg-card); border-radius: 18px; font-size: 26px; margin-bottom: 14px; box-shadow: var(--shadow-sm); }
.cat-header p { color: var(--text-soft); margin: 0; }
.cards { display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.card { background: var(--bg-card); border-radius: var(--radius-lg); padding: 22px; box-shadow: var(--shadow-sm); border: 1px solid var(--line); transition: transform .35s var(--ease), box-shadow .35s var(--ease); display: flex; flex-direction: column; gap: 14px; }
.card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.card-media { position: relative; aspect-ratio: 4/3; overflow: hidden; border-radius: var(--radius); background: linear-gradient(135deg, #F7E6CF, #F2D5B1); }
.card-media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; padding: 14px; transition: opacity .4s var(--ease), transform .8s var(--ease); }
.card-media .hover { opacity: 0; }
.card:hover .card-media img.main { opacity: 0; transform: scale(1.04); }
.card:hover .card-media img.hover { opacity: 1; transform: scale(1.04); }
.card-num { font-size: .78rem; font-weight: 700; color: var(--accent-deep); letter-spacing: .14em; }
.card h3 { margin: 0; }
.card-body { color: var(--text-soft); margin: 0; font-size: .98rem; }

.contact { padding: 80px 0; background: linear-gradient(180deg, var(--bg) 0%, #F4E1C8 100%); }
.contact-inner { display: grid; grid-template-columns: 1.2fr .8fr; gap: 40px; align-items: start; }
.contact-text .lead { max-width: 560px; }
.contact-actions { display: flex; flex-wrap: wrap; gap: 10px; margin: 6px 0 24px; }
.contact-form { display: grid; gap: 14px; max-width: 560px; }
.contact-form label { display: grid; gap: 6px; font-weight: 500; font-size: .92rem; color: var(--text-soft); }
.contact-form input, .contact-form textarea { padding: 12px 14px; background: var(--bg-card); border: 1px solid var(--line); border-radius: 12px; font: inherit; color: var(--text); transition: border-color .2s var(--ease), box-shadow .2s var(--ease); }
.contact-form input:focus, .contact-form textarea:focus { outline: 0; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(198,107,61,.18); }
.contact-meta { background: var(--bg-card); padding: 26px; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); border: 1px solid var(--line); }
.contact-meta ol { padding-left: 20px; margin: 12px 0 0; color: var(--text-soft); display: grid; gap: 8px; }

.site-footer { padding: 28px 0; border-top: 1px solid var(--line); background: var(--bg); color: var(--text-soft); }
.footer-inner { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: .92rem; }
.footer-inner a { color: var(--accent-deep); text-decoration: none; font-weight: 600; }

.reveal { opacity: 0; transform: translateY(18px); transition: opacity .8s var(--ease), transform .8s var(--ease); }
.http://reveal.in { opacity: 1; transform: translateY(0); }

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-figure { order: -1; }
  .hero-img { width: min(78%, 320px); margin: 0 auto; }
  .contact-inner { grid-template-columns: 1fr; }
  .main-nav { display: none; position: absolute; top: 68px; left: 0; right: 0; background: var(--bg); flex-direction: column; padding: 16px 24px; border-bottom: 1px solid var(--line); }
  .http://main-nav.open { display: flex; }
  .menu-toggle { display: flex; }
}
@media (max-width: 540px) {
  .hero { padding: 40px 0 56px; }
  .category { padding: 56px 0; }
  .hero-badge { left: 50%; transform: translateX(-50%); bottom: -16px; }
}
@media (prefers-reduced-motion: reduce) {
   { animation: none !important; transition: none !important; }
  html { scroll-behavior: auto; }
}

## 🎨 Отчёт по сайту

**Концепция:** «Útulné technologie» — уютные технологии. Я отошёл от привычной для IT-сайтов холодной цифровой палитры и сделал ставку на тёплые тона домашнего интерьера: кремовый базовый фон, терракотовый акцент и лесной зелёный для бейджей. Техника здесь представлена как тёплая часть дома, а мастер — как добрый сосед, которого не страшно позвать.

**Целевые устройства:** настольные компьютеры, ноутбуки, планшеты и смартфоны. Подход mobile-first, проверены брейкпоинты 540 px и 900 px.

**Палитра:**

- Кремовый базовый фон `#FAF5EC`
- Тёплый бежевый альт-фон `#F2E9D8`
- Карточный белый `#FFFDF8`
- Терракотовый акцент `#C66B3D` (глубокий вариант `#8E4A23`)
- Лесной зелёный для бейджа `#4A6B5C`
- Кофейный тёмный текст `#2D2A26`

**Шрифты (Google Fonts):**

- `Fraunces` — заголовки, тёплая антиква с лёгким контрастом.
- `Inter` — основной текст, читаемая гротеска.

**Ключевые приёмы дизайна и UX:**

- Адаптивная сетка на CSS Grid и `auto-fit, minmax`.
- Sticky-header с полупрозрачным blur-фоном.
- Hero с парой изображений `hero--main` / `hero--hover` и плавной сменой при наведении и фокусе.
- 12 карточек услуг, у каждой картинка `slug--main.png` сменяется на `slug--hover.png` при ховере.
- Reveal-анимации через `IntersectionObserver`.
- Контактный блок с быстрыми ссылками (`mailto:`, `tel:`, WhatsApp, Telegram) и формой через бесплатный сервис **FormSubmit** (без бэкенда).
- Уважение `prefers-reduced-motion`, доступность: skip-link, ARIA-атрибуты, контрасты, focus-кольца.
- Готовая многоязычная подложка: переключатель CS уже в шапке, словари в `window.I18N` легко расширяются.

## 📁 Инструкция по сборке

Структура проекта:

```
utulne-technologie/
├── index.html
├── styles.css
├── i18n.js
├── main.js
├── manifest.webmanifest
├── robots.txt
├── package.json
├── vercel.json
├── .gitignore
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

Как собрать проект:

1. Скопируйте содержимое свойства **Html** в файл `index.html`.
2. Скопируйте содержимое свойства **Styles** в файл `styles.css`.
3. Свойство **Scripts** содержит два файла, разделённых маркерами `=== filename ===` — сохраните каждый блок в одноимённый файл: `i18n.js` и `main.js`.
4. Свойство **Other** содержит вспомогательные файлы (`package.json`, `vercel.json`, `manifest.webmanifest`, `robots.txt`, `.gitignore`), разделённые теми же маркерами. Сохраните каждый блок отдельно.
5. Создайте папку `img/` и положите туда 26 изображений с именами, как в дереве выше (12 услуг × 2 + hero × 2).
6. Локально проверить можно командой `npx serve .` из корня проекта.

**Переключение языков.** Все строки интерфейса собраны в `i18n.js`, в объекте `window.I18N`. Сейчас доступен только чешский (`cs`). Чтобы добавить, например, английский, продублируйте ветку `cs`, переведите значения и добавьте `window.I18N.en = { ... }`. Затем в шапке `index.html` рядом с существующей кнопкой добавьте `<button class="lang-btn" data-lang="en" aria-pressed="false">EN</button>`. Переключатель сам подхватит новый язык и сохранит выбор в `localStorage`.

## 🚀 Развёртывание на бесплатном хостинге (Vercel)

1. Создайте бесплатный аккаунт на [vercel.com](http://vercel.com) (можно войти через GitHub).
2. Загрузите содержимое проекта в новый репозиторий на GitHub (или GitLab / Bitbucket).
3. В Vercel выберите **Add New → Project**, подключите репозиторий.
4. В настройках проекта: Framework Preset = **Other**, Build Command оставьте пустым, Output Directory = `.`.
5. Нажмите **Deploy**. Через 20–40 секунд сайт будет доступен на адресе `*.vercel.app`.
6. Чтобы подключить свой домен: **Settings → Domains → Add**, далее пропишите в DNS A-запись `76.76.21.21` или CNAME на `cname.vercel-dns.com`.
7. Альтернатива — деплой из локальной папки командой `npx vercel --prod` (после `npm i -g vercel`).

Тот же набор файлов работает на Netlify, Cloudflare Pages и GitHub Pages без изменений: достаточно указать корневую папку как источник.

## ✅ Проверка качества

- Все 12 услуг присутствуют и сопоставлены с правильными парами изображений `slug--main.png` / `slug--hover.png`.
- Hero использует пару `hero--main.png` / `hero--hover.png`.
- Контактный блок предлагает четыре способа связи и форму обратной связи через FormSubmit (без бэкенда).
- Сайт адаптивный: брейкпоинты 900 px (планшеты) и 540 px (телефоны).
- HTML валиден, CSS не содержит висящих селекторов, в `main.js` ошибок логически нет.
- Переключатель языка работает, словарь `cs` загружается по умолчанию, выбор сохраняется в `localStorage`.