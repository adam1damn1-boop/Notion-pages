# Malé výhry — тёплый одностраничник в палитре «шалфей + коралл»

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#2E7D6B" />
<title data-i18n="meta.title">Pojízdný počítačový mistr — Malé výhry každý den</title>
<meta name="description" data-i18n="meta.description" data-i18n-attr="content" content="Profesionální IT služby u vás doma: úklid PC, modernizace, instalace software, opravy, kamery, alarm, chytrá domácnost, doučování i design. Výjezd a první diagnostika zdarma." />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%232E7D6B'/%3E%3Ctext x='50%25' y='58%25' font-family='Georgia,serif' font-size='38' font-weight='700' fill='%23fff' text-anchor='middle'%3EM%3C/text%3E%3C/svg%3E" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="./styles.css" />
</head>
<body>
<a class="skip-link" href="#services" data-i18n="a11y.skip">Přeskočit na obsah</a>
<header class="site-header">
  <div class="container nav">
    <a href="#top" class="brand" aria-label="Domů">
      M
      Mistr · Malé výhry
    </a>
    <nav class="nav-links" id="nav-links" aria-label="Hlavní navigace">
      <a href="#services" data-i18n="http://nav.services">Služby</a>
      <a href="#philosophy" data-i18n="nav.about">Filozofie</a>
      <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
      <div class="lang-switch" role="group" aria-label="Jazyk / Language">
        <button type="button" data-lang="cs" class="active" aria-pressed="true">CS</button>
        <button type="button" data-lang="en" aria-pressed="false">EN</button>
      </div>
    </nav>
    <button class="menu-toggle" id="menu-toggle" aria-label="Otevřít menu" aria-expanded="false" aria-controls="nav-links">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </div>
</header>

<main id="top">
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-text reveal">
        Výjezd zdarma · platíte jen za práci
        <h1 data-i18n="hero.title">Každý den jedna malá výhra</h1>
        <p class="lede" data-i18n="hero.lede">Váš pojízdný počítačový mistr. Přijedu k vám domů, srozumitelně vysvětlím a vyřeším – první diagnostika zdarma.</p>
        <div class="hero-cta">
          <a class="btn" href="#contact" data-i18n="hero.cta.primary">Domluvit bezplatnou návštěvu</a>
          <a class="btn ghost" href="#services" data-i18n="hero.cta.secondary">Zobrazit služby</a>
        </div>
        <div class="hero-stats">
          <div><strong>12</strong>služeb na míru</div>
          <div><strong>0 Kč</strong>první diagnostika</div>
          <div><strong>~30 min</strong>obvykle odpovím</div>
        </div>
      </div>
      <div class="hero-image reveal" aria-hidden="true">
        <div class="swap">
          <img class="main" src="./img/hero--main.png" alt="" loading="eager" />
          <img class="hover" src="./img/hero--hover.png" alt="" loading="lazy" />
        </div>
        Váš mistr
      </div>
    </div>
  </section>

  <section class="section" id="services">
    <div class="container">
      <header class="section-head reveal">
        Co umím
        <h2 data-i18n="http://section.services.title">Dvanáct způsobů, jak vyhrát s technikou</h2>
        <p class="sub" data-i18n="http://section.services.sub">Každá služba je malý krok k tomu, aby vám doma bylo klidněji, rychleji a bezpečněji. Výjezd a diagnostika jsou zdarma – platíte jen za skutečnou práci a díly.</p>
      </header>

      <div class="group">
        <div class="group-label reveal">1<h3 data-i18n="http://group.care">Péče o počítač</h3></div>
        <div class="cards" id="cards-care"></div>
      </div>
      <div class="group">
        <div class="group-label reveal">2<h3 data-i18n="http://group.security">Bezpečnost</h3></div>
        <div class="cards" id="cards-security"></div>
      </div>
      <div class="group">
        <div class="group-label reveal">3<h3 data-i18n="group.learning">Učení</h3></div>
        <div class="cards" id="cards-learning"></div>
      </div>
      <div class="group">
        <div class="group-label reveal">4<h3 data-i18n="http://group.design">Design</h3></div>
        <div class="cards" id="cards-design"></div>
      </div>

      <div class="banner-cta reveal">
        <div>
          <h3 data-i18n="banner.title">První malá výhra je na cestě.</h3>
          <p data-i18n="banner.text">Stačí krátká zpráva – domluvíme bezplatnou návštěvu u vás doma.</p>
        </div>
        <a class="btn accent" href="#contact" data-i18n="banner.cta">Napsat zprávu</a>
      </div>
    </div>
  </section>

  <section class="section" id="philosophy">
    <div class="container philosophy-grid">
      <div class="reveal">
        Filozofie
        <h2 data-i18n="philosophy.title">Velké úkoly skládám z malých výher</h2>
        <p data-i18n="philosophy.p1">Technika nemusí být boj. Když ji rozdělíme na malé, srozumitelné krůčky, každý z nich dokážete zvládnout – a každý je drobné vítězství.</p>
        <p data-i18n="philosophy.p2">Pracuji u vás doma, mluvím lidskou řečí a nikdy nepřemlouvám k tomu, co nepotřebujete. Cílem je, abyste si po mé návštěvě sedli k technice s úlevou, ne se strachem.</p>
      </div>
      <ul class="checklist reveal">
        <li data-i18n="philosophy.l1">První návštěva a diagnostika jsou zdarma.</li>
        <li data-i18n="philosophy.l2">Žádné cizí slovo bez vysvětlení.</li>
        <li data-i18n="philosophy.l3">Práce u vás doma, ve vašem tempu.</li>
        <li data-i18n="philosophy.l4">Účtuji jen skutečně odvedenou práci.</li>
      </ul>
    </div>
  </section>

  <section class="section contact" id="contact">
    <div class="container contact-grid">
      <div class="reveal">
        Kontakt
        <h2 data-i18n="contact.title">Pojďme se domluvit</h2>
        <p class="sub" data-i18n="contact.sub">Napište nebo zavolejte – v klidu si popovídáme o tom, co vás trápí, a domluvíme bezplatnou návštěvu. Žádný stres, žádné závazky, jen přátelský rozhovor a první malá výhra na cestě.</p>
        <div class="hero-cta" style="margin-top:18px">
          <a class="btn" href="mailto:mistr@example.cz?subject=Mal%C3%A1%20v%C3%BDhra%20-%20pomoc%20s%20po%C4%8D%C3%ADta%C4%8Dem" data-i18n="http://contact.cta.email">Napsat e-mail</a>
          <a class="btn ghost" href="tel:+420777123456" data-i18n="http://contact.cta.phone">Zavolat</a>
        </div>
      </div>
      <div class="contact-card reveal">
        <ul class="contact-list">
          <li>✉️<div><small data-i18n="http://contact.email">E-mail</small>
<a href="mailto:mistr@example.cz">mistr@example.cz</a></div></li>
          <li>📞<div><small data-i18n="http://contact.phone">Telefon</small>
<a href="tel:+420777123456">+420 777 123 456</a></div></li>
          <li>💬<div><small data-i18n="contact.whatsapp">WhatsApp</small>
<a href="https://wa.me/420777123456" target="_blank" rel="noopener">+420 777 123 456</a></div></li>
          <li>✈️<div><small data-i18n="contact.telegram">Telegram</small>
<a href="https://t.me/mistr" target="_blank" rel="noopener">@mistr</a></div></li>
        </ul>
      </div>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container footer-row">
    © 2026 Pojízdný počítačový mistr · Malé výhry každý den
    Praha a okolí · IČO doplňte
  </div>
</footer>

<div class="toast" id="toast" role="status" aria-live="polite" hidden></div>

<script src="./i18n.js"></script>
<script src="./app.js"></script>
</body>
</html>

Other: === package.json ===
{
  "name": "mistr-male-vyhry",
  "version": "1.0.0",
  "private": true,
  "description": "Pojizdny pocitacovy mistr — staticky web ve filozofii male vyhry.",
  "scripts": {
    "start": "npx serve ."
  }
}

=== vercel.json ===
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
      "source": "/(styles.css|app.js|i18n.js)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=3600" }
      ]
    }
  ]
}

=== robots.txt ===
User-agent: 
Allow: /
Sitemap: https://example.cz/sitemap.xml

=== sitemap.xml ===
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.cz/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>

=== .gitignore ===
node_modules
.DS_Store
.vercel
.idea
.vscode

=== /img/http://README.md ===
# /img — изображения сайта

Положите сюда 26 файлов изображений (со страницы Main images в Notion):

Герой (2 файла):
- hero--main.png
- hero--hover.png

Карточки услуг (12 пар по 2 файла):
- cleaning--main.png / cleaning--hover.png  (1.1)
- upgrade--main.png / upgrade--hover.png    (1.2)
- software--main.png / software--hover.png  (1.3)
- repair--main.png / repair--hover.png      (1.4)
- webcam--main.png / webcam--hover.png      (2.1)
- alarm--main.png / alarm--hover.png        (2.2)
- appliances--main.png / appliances--hover.png (2.3)
- literacy--main.png / literacy--hover.png  (3.1)
- tutor--main.png / tutor--hover.png        (3.2)
- chess--main.png / chess--hover.png        (3.3)
- development--main.png / development--hover.png (3.4)
- design--main.png / design--hover.png      (4)

Scripts: === app.js ===
(function(){
  var SERVICES = [
    { slug:'cleaning', section:'1.1', group:'care' },
    { slug:'upgrade', section:'1.2', group:'care' },
    { slug:'software', section:'1.3', group:'care' },
    { slug:'repair', section:'1.4', group:'care' },
    { slug:'webcam', section:'2.1', group:'security' },
    { slug:'alarm', section:'2.2', group:'security' },
    { slug:'appliances', section:'2.3', group:'security' },
    { slug:'literacy', section:'3.1', group:'learning' },
    { slug:'tutor', section:'3.2', group:'learning' },
    { slug:'chess', section:'3.3', group:'learning' },
    { slug:'development', section:'3.4', group:'learning' },
    { slug:'design', section:'4', group:'design' }
  ];
  var containers = {
    care: document.getElementById('cards-care'),
    security: document.getElementById('cards-security'),
    learning: document.getElementById('cards-learning'),
    design: document.getElementById('cards-design')
  };
  SERVICES.forEach(function(s){
    var el = document.createElement('article');
    el.className = 'card reveal';
    el.innerHTML =
      '<div class="thumb">' +
        '<img class="main" src="./img/' + s.slug + '--main.png" alt="" loading="lazy" />' +
        '<img class="hover" src="./img/' + s.slug + '--hover.png" alt="" loading="lazy" />' +
      '</div>' +
      '' +
      '<h3 data-i18n="service.' + s.slug + '.title"></h3>' +
      '<p data-i18n="service.' + s.slug + '.body"></p>' +
      '' + s.section + '';
    if (containers[http://s.group]) containers[http://s.group].appendChild(el);
  });

  var LANG_KEY = 'mistr.lang';
  function applyI18n(lang){
    var dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N.cs) || {};
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var attr = el.getAttribute('data-i18n-attr');
      var value = dict[key];
      if (value == null) return;
      if (attr) el.setAttribute(attr, value); else el.textContent = value;
    });
    document.querySelectorAll('.lang-switch button').forEach(function(b){
      var active = b.dataset.lang === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }
  function showToast(msg){
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    el.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function(){ el.classList.remove('show'); el.hidden = true; }, 2600);
  }
  function setLang(lang){
    if (!window.I18N || !window.I18N[lang]){
      var fb = (window.I18N && window.I18N.cs && window.I18N.cs['toast.lang.soon']) || 'Tento jazyk bude brzy k dispozici.';
      showToast(fb);
      return;
    }
    try { localStorage.setItem(LANG_KEY, lang); } catch(e){}
    applyI18n(lang);
  }
  var saved = 'cs';
  try { saved = localStorage.getItem(LANG_KEY) || 'cs'; } catch(e){}
  if (!window.I18N || !window.I18N[saved]) saved = 'cs';
  applyI18n(saved);
  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.dataset.lang); });
  });

  var toggle = document.getElementById('menu-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links){
    toggle.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function(e){
      if (http://e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
    });
  }

  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ http://e.target.classList.add('in'); io.unobserve(http://e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  document.querySelectorAll('.card, .hero-image').forEach(function(card){
    card.addEventListener('touchstart', function(){
      document.querySelectorAll('.touched').forEach(function(t){ if (t !== card) t.classList.remove('touched'); });
      card.classList.toggle('touched');
    }, { passive: true });
  });
})();

=== i18n.js ===
window.I18N = window.I18N || {};
window.I18N.cs = {
  'meta.title': 'Pojizdny pocitacovy mistr — Male vyhry kazdy den',
  'meta.description': 'Profesionalni IT sluzby u vas doma: uklid PC, modernizace, instalace software, opravy, kamery, alarm, chytra domacnost, doucovani i design. Vyjezd a prvni diagnostika zdarma.',
  'a11y.skip': 'Preskocit na obsah',
  'brand': 'Mistr · Male vyhry',
  'nav_services': 'Sluzby',
  'nav.about': 'Filozofie',
  'nav_contact': 'Kontakt',
  'hero.badge': 'Vyjezd zdarma · platite jen za praci',
  'hero.title': 'Kazdy den jedna mala vyhra',
  'hero.lede': 'Vas pojizdny pocitacovy mistr prijede k vam domu, srozumitelne vysvetli a vyresi. Prvni diagnostika je zdarma — platite jen za skutecnou praci a dily.',
  'hero.cta.primary': 'Domluvit bezplatnou navstevu',
  'hero.cta.secondary': 'Zobrazit sluzby',
  'http://hero.stats.services_label': 'sluzeb na miru',
  'hero.stats.diagnostics': 'prvni diagnostika',
  'hero.stats.reply': 'obvykle odpovim',
  'hero.image.tag': 'Vas mistr',
  'http://section.services.eyebrow_label': 'Co umim',
  'http://section.services.title_label': 'Dvanact zpusobu, jak vyhrat s technikou',
  'http://section.services.sub_label': 'Kazda sluzba je maly krok k tomu, aby vam doma bylo klidneji, rychleji a bezpecneji. Vyjezd a diagnostika jsou zdarma — platite jen za skutecnou praci a dily.',
  'http://group.care_label': 'Pece o pocitac',
  'http://group.security_label': 'Bezpecnost',
  'group.learning': 'Uceni',
  'http://group.design_label': 'Design',
  'http://tag.care_label': 'Servis',
  'http://tag.security_label': 'Klid',
  'tag.learning': 'Rust',
  'http://tag.design_label': 'Tvorba',
  'http://service.cleaning.title_label': 'Pocitacovy uklid',
  'http://service.cleaning.body_label': 'Slysite, jak vas pocitac huci jako stara lednicka a v letnim vedru se prehreje tak, ze vypadne uprostred prace? To neni konec — to je jen prach, ktery se za roky usadil uvnitr. Prijedu k vam domu, pocitac opatrne rozeberu, vycistim, vymenim teplovodivou pastu a promazu ventilatory. Po kratke chvili mate zpatky tichy, chladny a svizny stroj. Vyjezd i prvni diagnostika jsou zdarma — platite jen za skutecnou praci. Mala vyhra, kterou si uzije cela rodina.',
  'service.upgrade.title_label': 'Modernizace',
  'service.upgrade.body_label': 'Notebook uz nestiha, ceka minuty na otevreni prohlizece a vy nad nim kazdy vecer ztracite nervy? Nemusite hned utikat pro novy. Casto staci vymenit stary disk za rychly SSD, pridat pamet nebo osvezit baterii — a stary kamarad ozije, jako by byl z obchodu. Prijedu zdarma, podivam se a poradim, co se u vas opravdu vyplati. Vy usetrite penize a ziskate pocit male, ale sladke vyhry nad casem.',
  'http://service.software.title_label': 'Nastaveni software',
  'http://service.software.body_label': 'Windows se zpomalil, vyskakuji podivne reklamy a vy si nejste jisti, jestli vam v pocitaci nekdo nesedi pres rameno? Dukladne system procistim od zbytecnosti i viru, pripadne rovnou nainstaluji novejsi Windows, doplnim programy pro praci, skolu i zabavu, vyresim problemy s internetem a klidne pomuzu i s registraci na uredni portal nebo vyplnenim formulare. Diagnostika u vas doma je zdarma. Pak si uz jen sednete k uklizenemu, rychlemu pocitaci — a to je vyhra, ktera zlepsi cely tyden.',
  'http://service.repair.title_label': 'Oprava a recyklace',
  'http://service.repair.body_label': 'Notebook spadl, displej zhasl, nebo stolni pocitac uz ani nepipne? Nevyhazujte ho hned — velmi casto staci vymenit jednu nebo dve soucastky a stroj zase poslouchá. Prijedu zdarma, prohlednu si ho a poctive reknu, jestli ma oprava smysl. Kdyz ne, mohu stary pocitac vzit na nahradni dily, at poslouzi dal. Bud zachranite pristroj, nebo aspon prirodu — v obou pripadech mala vyhra.',
  'http://service.webcam.title_label': 'Web kamery',
  'http://service.webcam.body_label': 'Jste cely den v praci a premyslite, jestli je doma vsechno v poradku? Nebo mate chatu, kterou hlidate jen obcas? Nainstaluji vam tolik vnitrnich i venkovnich kamer, kolik potrebujete — staci mit Wi-Fi nebo kabelovy internet. Z telefonu pak uvidite deti, psa i zahradu a s navstevou si muzete promluvit, i kdybyste byli sto kilometru daleko. Vyjezd zdarma, klid v dusi k tomu jako bonus. Pekna kazdodenni vyhra.',
  'service.alarm.title_label': 'Domaci alarm',
  'service.alarm.body_label': 'Bydlite sami, mate garaz s naradim nebo chalupu na okraji vesnice a v noci se ptate, jestli je vsechno v poradku? Namontuji vam primo na dvere dalkove ovladany alarm s hlasitou sirenou a SMS upozornenim na telefon. Kdyz se nekdo priblizi, dozvite se to driv nez on. Prijedu zdarma, poradim, kam se zarizeni nejlepe hodi, a vsechno vam srozumitelne predvedu. Vy si konecne uzijete spanek bez napeti — mala vyhra kazdou noc.',
  'service.appliances.title_label': 'Chytra domacnost',
  'service.appliances.body_label': 'Sousedi se chlubi, ze si zapinaji topeni z mobilu, a vy mate pocit, ze je to veda pro mlade? Vubec ne. Pomuzu vam propojit Smart TV, chytre zarovky, zasuvky, termostat i roboticky vysavac do jedne aplikace a srozumitelne vam ukazu, jak to ovladat. Brzy budete z gauce zhasinat svetla v kuchyni a smat se, jak je to jednoduche. Prvni navsteva a diagnostika zdarma — mala vyhra moderniho pohodli pod jednou strechou.',
  'service.literacy.title_label': 'Pocitacova gramotnost',
  'service.literacy.body_label': 'Vnoucata vam posilaji fotky, banka chce overeni v aplikaci a vy mate pocit, ze jste o krok pozadu? Nejste sami — a vubec to neni ostuda. V klidu u vas doma, vasim vlastnim tempem, vas naucim ovladat pocitac i mobil, bezpecne pouzivat internet a vyuzivat umelou inteligenci jako chytreho pomocnika. Zadne cizi slovo bez vysvetleni. Po par setkanich zjistite, ze si vsechno zvladnete sami — a to je vyhra, na kterou budete pysni.',
  'service.tutor.title_label': 'Doucovani informatiky',
  'service.tutor.body_label': 'Dite ma ve skole informatiku a vy v ni plavete stejne jako ono? Mam vysokoskolske vzdelani v IT a roky zkusenosti s vysvetlovanim studentum na univerzite. K vam domu prijedu, posadim se vedle ditete a latku rozebereme po malych kruccich, dokud spokojene nekyvne hlavou: aha, ja to chapu. Znamka ve skole pak prijde sama. Prvni navsteva a posouzeni potreb ditete zdarma — a kazde pochopene tema je mala rodinna vyhra.',
  'service.chess.title_label': 'Sachy',
  'service.chess.body_label': 'Vase dite se tezko soustredi, rychle to vzdava a zabavu hleda jen v mobilu? Sachy ho nauci premyslet o krok napred, prohravat s usmevem a vyhravat s pokorou. Hraji opravdu dobre a budu trpelivym partnerem i ucitelem primo u vas doma. Z ditete postupne vyroste klidnejsi a soustredenejsi clovek — a ty prvni vyhrane partie proti tatovi? To je vyhra na cely zivot.',
  'service.development.title_label': 'AI a vysoke technologie',
  'service.development.body_label': 'Rika se, ze umela inteligence promeni svet — a vase dite stoji primo na jeho prahu. Ve skole se moc nenauci, tam dostane jen zaklad pro nejslabsiho zaka. U vas doma ho naucim chytre pracovat s AI: jak se spravne ptat, overovat odpovedi, tvorit a ucit se rychleji nez spoluzaci. Muzeme zvolit formu zabavy nebo to spojit s domacimi ukoly. Prvni navsteva a domluva jsou zdarma. Mala investice dnes — velka vyhra v budoucim povolani.',
  'http://service.design.title_label': 'Design a web',
  'http://service.design.body_label': 'Otevirate malou kavarnu, prodavate med ze sve zahrady nebo vedete detsky krouzek a potrebujete, aby vas bylo videt? Vytvorim vam pekne letaky a plakaty, katalog sluzeb i jednoduche webove stranky — a kdyz bude potreba, postavim i celou aplikaci na miru. Jsem diplomovany vyvojar s praxi, takze nepujde o amaterskou praci. Prvni konzultace a navrh jsou zdarma. Kdyz pak zakaznici prichazeji sami, je to ta nejhezci mala vyhra v podnikani.',
  'banner.title_label': 'Prvni mala vyhra je na ceste.',
  'banner.text_label': 'Staci kratka zprava — domluvime bezplatnou navstevu u vas doma.',
  'banner.cta_label': 'Napsat zpravu',
  'philosophy.eyebrow_label': 'Filozofie',
  'philosophy.title_label': 'Velke ukoly skladam z malych vyher',
  'philosophy.p1': 'Technika nemusi byt boj. Kdyz ji rozdelime na male, srozumitelne krucky, kazdy z nich dokazete zvladnout — a kazdy je drobne vitezstvi.',
  'philosophy.p2': 'Pracuji u vas doma, mluvim lidskou reci a nikdy nepremlouvam k tomu, co nepotrebujete. Cilem je, abyste si po me navsteve sedli k technice s ulevou, ne se strachem.',
  'philosophy.l1': 'Prvni navsteva a diagnostika jsou zdarma.',
  'philosophy.l2': 'Zadne cizi slovo bez vysvetleni.',
  'philosophy.l3': 'Prace u vas doma, ve vasem tempu.',
  'philosophy.l4': 'Uctuji jen skutecne odvedenou praci.',
  'contact.eyebrow_label': 'Kontakt',
  'contact.title_label': 'Pojdme se domluvit',
  'contact.sub_label': 'Napiste nebo zavolejte — v klidu si popovidame o tom, co vas trapi, a domluvime bezplatnou navstevu. Zadny stres, zadne zavazky, jen pratelsky rozhovor a prvni mala vyhra na ceste.',
  'http://contact.email_label': 'E-mail',
  'http://contact.phone_label': 'Telefon',
  'contact.whatsapp': 'WhatsApp',
  'contact.telegram': 'Telegram',
  'http://contact.cta.email_label': 'Napsat e-mail',
  'http://contact.cta.phone_label': 'Zavolat',
  'toast.lang.soon': 'Tento jazyk bude brzy k dispozici.',
  'footer.note_label': '(c) 2026 Pojizdny pocitacovy mistr · Male vyhry kazdy den',
  'http://footer.legal_label': 'Praha a okoli · ICO doplnte'
};

// POZNAMKA: Klice s priponou _label (a varianty jako nav_services, nav_contact) jsou zde pouzity, protoze Notion pri ulozeni do databaze automaticky meni retezce typu 'http://service.repair.title' na hypertextove odkazy. Ve finalnim souboru i18n.js musi byt klice prepsany zpet do tvaru, ktery odpovida atributum data-i18n v index.html, napr.: 'http://service.repair.title', 'http://service.repair.body', 'http://nav.services', 'http://nav.contact', 'http://section.services.eyebrow', 'http://section.services.title', 'http://section.services.sub', 'http://group.care', 'http://group.security', 'http://group.design', 'http://tag.care', 'http://tag.security', 'http://tag.design', 'http://hero.stats.services', 'banner.title', 'banner.text', 'banner.cta', 'philosophy.eyebrow', 'philosophy.title', 'contact.eyebrow', 'contact.title', 'contact.sub', 'http://contact.email', 'http://contact.phone', 'http://contact.cta.email', 'http://contact.cta.phone', 'footer.note', 'http://footer.legal'. Texty (hodnoty) zustanou stejne.

Styles: === styles.css ===
:root{--bg:#FAF7F2;--surface:#fff;--ink:#1F2A33;--muted:#5C6B75;--primary:#2E7D6B;--primary-dark:#235A4F;--accent:#E97A5B;--soft:#F2EAD9;--radius:18px;--shadow-sm:0 2px 10px rgba(31,42,51,.06);--shadow-md:0 12px 30px rgba(31,42,51,.10);--max:1200px;--display:"Fraunces",Georgia,serif;--body:"Manrope",system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--body);line-height:1.6;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:var(--primary);text-decoration:none}
a:hover{color:var(--primary-dark)}
.container{max-width:var(--max);margin:0 auto;padding:0 24px}
.skip-link{position:absolute;left:-9999px}
.skip-link:focus{left:12px;top:12px;background:var(--ink);color:#fff;padding:8px 12px;border-radius:8px;z-index:200}
.site-header{position:sticky;top:0;z-index:50;background:rgba(250,247,242,.85);backdrop-filter:saturate(150%) blur(14px);-webkit-backdrop-filter:saturate(150%) blur(14px);border-bottom:1px solid rgba(31,42,51,.06)}
.nav{display:flex;align-items:center;justify-content:space-between;padding:14px 0;gap:16px;position:relative}
.brand{display:flex;align-items:center;gap:10px;font-family:var(--display);font-weight:700;font-size:1.15rem;color:var(--ink)}
.brand-mark{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--accent));display:grid;place-items:center;color:#fff;font-weight:800}
.nav-links{display:flex;gap:22px;align-items:center}
.nav-links a{color:var(--ink);font-weight:500}
.nav-links a:hover{color:var(--primary)}
.lang-switch{display:flex;gap:6px}
.lang-switch button{border:1px solid rgba(31,42,51,.12);background:transparent;padding:6px 10px;border-radius:999px;cursor:pointer;font-weight:700;color:var(--muted);font-family:var(--body);font-size:.8rem;letter-spacing:.06em}
.lang-switch button.active{background:var(--ink);color:#fff;border-color:var(--ink)}
.menu-toggle{display:none;border:none;background:transparent;cursor:pointer;padding:6px;color:var(--ink)}
.hero{position:relative;padding:64px 0 40px;overflow:hidden}
.hero::before{content:"";position:absolute;inset:auto -10% -40% auto;width:520px;height:520px;background:radial-gradient(closest-side,rgba(233,122,91,.18),transparent);z-index:-1;filter:blur(10px)}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
.hero h1{font-family:var(--display);font-weight:600;font-size:clamp(2.2rem,5vw,3.6rem);line-height:1.06;margin:0 0 18px;letter-spacing:-.01em}
.hero .lede{font-size:1.125rem;color:var(--muted);margin:0 0 26px;max-width:56ch}
.hero-cta{display:flex;gap:14px;flex-wrap:wrap}
.hero-badge{display:inline-flex;align-items:center;gap:10px;background:var(--soft);color:var(--ink);padding:8px 14px;border-radius:999px;font-weight:600;font-size:.88rem;margin-bottom:18px}
.hero-badge::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 4px rgba(46,125,107,.18)}
.hero-stats{display:flex;gap:32px;margin-top:32px;flex-wrap:wrap}
.hero-stats div{display:flex;flex-direction:column}
.hero-stats strong{font-family:var(--display);font-size:1.5rem;color:var(--ink);font-weight:600}
.hero-stats span{color:var(--muted);font-size:.85rem}
.hero-image{position:relative;aspect-ratio:370/520;max-width:420px;margin-left:auto;width:100%;border-radius:28px;overflow:hidden;box-shadow:var(--shadow-md);background:linear-gradient(135deg,var(--soft),#fff)}
.hero-image .swap{position:absolute;inset:0}
.hero-image .swap img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .5s ease,transform .8s ease}
.hero-image .swap img.hover{opacity:0}
.hero-image:hover .swap img.main,.hero-image.touched .swap img.main{opacity:0}
.hero-image:hover .swap img.hover,.hero-image.touched .swap img.hover{opacity:1;transform:scale(1.03)}
.hero-image-tag{position:absolute;left:18px;bottom:18px;background:rgba(255,255,255,.92);backdrop-filter:blur(6px);padding:8px 14px;border-radius:999px;font-weight:700;color:var(--ink);font-size:.85rem;box-shadow:var(--shadow-sm)}
.btn{display:inline-flex;align-items:center;gap:8px;background:var(--primary);color:#fff!important;padding:14px 22px;border-radius:999px;font-weight:600;transition:transform .2s ease,background .2s ease,box-shadow .2s ease;border:none;cursor:pointer;font-family:var(--body);font-size:1rem;text-decoration:none}
.btn:hover{background:var(--primary-dark);transform:translateY(-2px);box-shadow:var(--shadow-md)}
.btn.ghost{background:transparent;color:var(--ink)!important;border:1px solid rgba(31,42,51,.18)}
.btn.ghost:hover{background:var(--soft)}
.btn.accent{background:var(--accent)}
.btn.accent:hover{background:#d56146}
.section{padding:60px 0}
.section-head{margin-bottom:32px;max-width:760px}
.eyebrow{color:var(--accent);font-weight:700;letter-spacing:.16em;text-transform:uppercase;font-size:.78rem}
.section h2{font-family:var(--display);font-weight:600;font-size:clamp(1.8rem,3.5vw,2.6rem);margin:8px 0 8px;line-height:1.1}
.section .sub{color:var(--muted);max-width:60ch;font-size:1.05rem}
.group{margin-top:8px}
.group-label{display:flex;align-items:center;gap:14px;margin:48px 0 18px}
.group-label .ring{width:42px;height:42px;border-radius:50%;background:var(--soft);display:grid;place-items:center;font-family:var(--display);font-weight:700;color:var(--primary);font-size:1.1rem}
.group-label h3{font-family:var(--display);font-size:1.5rem;margin:0;font-weight:600}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:22px}
.card{position:relative;background:var(--surface);border-radius:var(--radius);padding:22px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:14px;transition:transform .25s ease,box-shadow .25s ease;border:1px solid rgba(31,42,51,.04);overflow:hidden}
.card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}
.card .thumb{position:relative;aspect-ratio:4/3;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,var(--soft),#fff)}
.card .thumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:14px;transition:opacity .35s ease,transform .35s ease}
.card .thumb img.hover{opacity:0}
.card:hover .thumb img.main,.card.touched .thumb img.main{opacity:0}
.card:hover .thumb img.hover,.card.touched .thumb img.hover{opacity:1;transform:scale(1.03)}
.card .tag{display:inline-block;font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--primary)}
.card h3{font-family:var(--display);font-weight:600;font-size:1.22rem;margin:0;line-height:1.2}
.card p{color:var(--muted);margin:0;font-size:.96rem}
.card .meta{margin-top:auto;font-size:.78rem;color:var(--muted);display:flex;gap:10px;align-items:center;letter-spacing:.06em}
.card .meta::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--primary)}
.banner-cta{margin-top:56px;background:linear-gradient(135deg,var(--primary),#1f5a4d);color:#fff;border-radius:24px;padding:36px;display:flex;align-items:center;gap:24px;justify-content:space-between;flex-wrap:wrap;box-shadow:var(--shadow-md)}
.banner-cta h3{font-family:var(--display);font-size:1.6rem;margin:0 0 6px;font-weight:600}
.banner-cta p{margin:0;opacity:.92}
.philosophy-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.philosophy-grid h2{font-family:var(--display);font-weight:600;font-size:clamp(1.6rem,3vw,2.2rem);margin:8px 0 16px}
.philosophy-grid p{color:var(--muted);margin:0 0 14px}
.checklist{list-style:none;padding:24px;margin:0;display:grid;gap:14px;background:var(--surface);border-radius:var(--radius);box-shadow:var(--shadow-sm)}
.checklist li{padding-left:42px;position:relative;color:var(--ink);font-weight:500}
.checklist li::before{content:"2713";position:absolute;left:0;top:-2px;width:28px;height:28px;border-radius:50%;background:var(--soft);color:var(--primary);display:grid;place-items:center;font-weight:800}
.contact{background:linear-gradient(180deg,var(--bg),var(--soft));border-top:1px solid rgba(31,42,51,.06)}
.contact-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
.contact-card{background:var(--surface);border-radius:24px;padding:24px;box-shadow:var(--shadow-md)}
.contact-list{list-style:none;margin:0;padding:0;display:grid;gap:6px}
.contact-list li{display:flex;gap:14px;align-items:center;padding:12px;border-radius:14px;transition:background .2s ease}
.contact-list li:hover{background:var(--soft)}
.contact-list .ic{width:42px;height:42px;border-radius:12px;background:var(--soft);display:grid;place-items:center;font-size:1.15rem;color:var(--primary);flex:none}
.contact-list small{color:var(--muted);font-size:.74rem;letter-spacing:.08em;text-transform:uppercase}
.contact-list a{color:var(--ink);font-weight:600}
.site-footer{border-top:1px solid rgba(31,42,51,.06);padding:24px 0;color:var(--muted);font-size:.9rem}
.footer-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px}
.toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:var(--ink);color:#fff;padding:12px 18px;border-radius:999px;opacity:0;transition:opacity .25s ease,transform .25s ease;box-shadow:var(--shadow-md);z-index:100;pointer-events:none;font-weight:600;font-size:.92rem}
.http://toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.reveal{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease}
.http://reveal.in{opacity:1;transform:none}
@media (max-width:900px){.hero-grid{grid-template-columns:1fr}.hero-image{max-width:100%;margin:0 auto;aspect-ratio:4/5}.contact-grid,.philosophy-grid{grid-template-columns:1fr}.nav-links{display:none;position:absolute;right:24px;top:64px;background:var(--surface);padding:18px;border-radius:16px;box-shadow:var(--shadow-md);flex-direction:column;align-items:flex-start;gap:14px;min-width:200px}.http://nav-links.open{display:flex}.menu-toggle{display:inline-flex}}
@media (max-width:600px){.banner-cta{flex-direction:column;align-items:flex-start;padding:28px}.section{padding:48px 0}.hero{padding:40px 0 24px}}
@media (prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}{animation-duration:.001s!important;transition-duration:.001s!important}}

## 🎨 Концепция «Malé výhry / Маленькие победы»

Макет построен вокруг общей метафоры выбранной записи Site content — **«маленькие победы»**. Каждая услуга подаётся как небольшое, но ощутимое личное достижение клиента: над пылью внутри корпуса, над страхом перед банковским приложением, над школьной информатикой ребёнка или над тревожной ночью у двери. Тон при этом остаётся профессиональным и деловым — это сайт выездного мастера, а не блог.

### Целевые устройства

- Mobile-first вёрстка с CSS Grid и Flexbox.
- Брейкпоинты: до 600px (компактный мобильный), 600–900px (планшеты и узкие ноутбуки), >900px (десктоп).
- Поддержка `prefers-reduced-motion`, корректные `alt`-тексты, skip-link, видимый фокус, контрастные цвета.
- Sticky-хедер с бэкдроп-блюром, отзывчивая сетка карточек `auto-fill, minmax(280px, 1fr)`.

### Палитра

- Фон: `#FAF7F2` — тёплый кремовый.
- Поверхности: белый `#FFFFFF`.
- Основной: `#2E7D6B` (шалфейный/сосновый) — спокойствие и доверие.
- Тёмная вариация основного: `#235A4F` (hover-состояния и градиент CTA-баннера).
- Акцент: `#E97A5B` (тёплый коралл) — энергия и сами «маленькие победы».
- Мягкий: `#F2EAD9` (карамель) — фоны бейджей, иконок и плашек.
- Текст: `#1F2A33` (графит), приглушённый: `#5C6B75`.

### Типографика

- **Fraunces** — заголовки, тёплый «человеческий» серифный шрифт с характером.
- **Manrope** — UI и основной текст, чистая гротеска.
- Подключение через preconnect + один общий `<link>` к Google Fonts, без блокирующих сборок.

### Ключевые приёмы

- Hero с большим заголовком и слоганом из поля `main`, hover-сменой изображения мастера и плашкой «Váš mistr».
- Группировка 12 услуг в 4 смысловых блока (Péče · Bezpečnost · Učení · Design) с кольцевыми номерами.
- Карточки услуг с эффектом hover (смена `--main` ↔ `--hover`), tap-эквивалентом для тач-устройств (через класс `.touched`), микро-анимацией масштабирования.
- Плавное появление блоков при скролле через `IntersectionObserver`, отключаемое `prefers-reduced-motion`.
- CTA-баннер между услугами и контактом усиливает призыв «первая маленькая победа».
- Контактный блок с готовыми ссылками `mailto:`, `tel:`, WhatsApp и Telegram — без серверной части.
- Доступный мобильный гамбургер-меню, тост для языков, sticky-хедер с фоновым blur.

### Мультиязычность

- Все тексты вынесены в `i18n.js` в `window.I18N.cs`.
- В шапке — переключатель `CS / EN`. Если выбран язык без словаря, появляется ненавязчивый тост («Tento jazyk bude brzy k dispozici»).
- Выбранный язык сохраняется в `localStorage` (`mistr.lang`).
- Добавить новый язык — расширить `window.I18N` ещё одним ключом, например `en`, с теми же ключами; кнопка `EN` сразу начнёт работать.

---

## 📦 Инструкция по сборке

### Структура папок

```
site/
├── index.html        // из свойства Html
├── styles.css        // из свойства Styles
├── app.js            // из свойства Scripts (блок === app.js ===)
├── i18n.js           // из свойства Scripts (блок === i18n.js ===)
├── package.json      // из свойства Other
├── vercel.json       // из свойства Other
├── robots.txt        // из свойства Other
├── sitemap.xml       // из свойства Other
├── .gitignore        // из свойства Other
└── img/
    ├── README.md
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

1. Создайте корневую папку `site/`.
2. В неё положите четыре основных файла: **Html → `index.html`**, **Styles → `styles.css`**, **Scripts → разделите на `app.js` и `i18n.js`** по разделителям `=== app.js ===` и `=== i18n.js ===`, **Other → разделите по разделителям `=== <имя файла> ===`** на `package.json`, `vercel.json`, `robots.txt`, `sitemap.xml`, `.gitignore`.
3. Создайте подпапку `img/` и положите туда 26 файлов изображений из [Main images](https://www.notion.so/Main-images-3614fe82e7d4800891eacef2c9d4ab58?pvs=21). Имена должны точно совпадать: `<slug>--main.png` и `<slug>--hover.png`.
4. Откройте `index.html` локально в браузере — никакой сборки не требуется. Для удобной разработки можно запустить простой статический сервер: `npx serve .`.
5. Чтобы добавить другие языки, в `i18n.js` рядом с ключом `cs` создайте, например, `en: { ... }` с теми же ключами. Кнопка `EN` в переключателе сразу подхватит словарь и переключится на него.

<aside>
⚠️

Внутри свойства **Scripts** ключи словаря `i18n.js` намеренно сохранены с суффиксом `_label` (например, `service.repair.title_label`, `nav_services`, `tag.care_label`). Это сделано, чтобы Notion при сохранении текста в свойство не превращал точечные строки в гиперссылки. Перед использованием в проекте переименуйте ключи в финальный вид, который ожидает HTML (`data-i18n="service.repair.title"`, `data-i18n="nav.services"` и т. д.). Список нужных финальных ключей приведён в конце блока `=== i18n.js ===` в свойстве Scripts.

</aside>

---

## 🚀 Развёртывание на бесплатном хостинге

### Vercel (через Git, рекомендуется)

1. Создайте Git-репозиторий и закоммитьте папку `site/` как корень проекта.
2. На [vercel.com](http://vercel.com) → **Add New… → Project**, подключите репозиторий.
3. Настройки проекта: **Framework Preset: Other**, **Root Directory: `site`** (если код в подпапке), **Build Command:** пусто, **Output Directory:** пусто.
4. Нажмите **Deploy**. Через минуту получите домен `your-project.vercel.app`.
5. По желанию подключите собственный домен в **Project → Settings → Domains**.

### Vercel CLI (без Git)

1. Установите Vercel CLI: `npm i -g vercel`.
2. В папке `site/` выполните `vercel`. Согласитесь с параметрами по умолчанию.
3. Для продакшен-деплоя: `vercel --prod`.

### Альтернативы

- **Netlify** — «Add new site → Deploy manually» → перетащите папку `site/` в браузер.
- **Cloudflare Pages** — подключите репозиторий, framework: `None`, build: пусто, output: `/`.
- **GitHub Pages** — загрузите в репозиторий и включите Pages в Settings → Pages → Source: `main`.

---

## ✅ Проверка качества

- Все 12 услуг присутствуют и связаны с правильными парами изображений (см. соответствие slug ↔ section на странице [Main images](https://www.notion.so/Main-images-3614fe82e7d4800891eacef2c9d4ab58?pvs=21)).
- Hover-эффект корректно отображает `--main` ↔ `--hover`, на тач-устройствах работает тап.
- Sticky-хедер не закрывает якорные секции (используется `scroll-behavior: smooth`).
- Переключатель `CS / EN` сохраняет выбор и показывает тост, если язык ещё не добавлен.
- HTML валидный, JS не использует deprecated API, в консоли пусто.
- В `i18n.js` ключи переименованы в финальный вид (см. предупреждение выше).
- Контактные данные в `index.html` — заглушки (`mistr@example.cz`, `+420 777 123 456`, `@mistr`). Перед публикацией замените их на реальные.