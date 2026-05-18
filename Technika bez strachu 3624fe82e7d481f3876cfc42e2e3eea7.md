# Technika bez strachu

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Technika bez strachu | Počítačové služby u vás doma</title>
  <meta name="description" content="Výjezdní počítačové služby, bezpečnost, chytrá domácnost, výuka a design. První diagnostika u vás doma zdarma.">
  <meta name="theme-color" content="#16213e">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./styles.css">
  <link rel="manifest" href="./manifest.webmanifest">
</head>
<body>
  <a class="skip-link" href="#sluzby">Přeskočit na služby</a>

  <header class="site-header" id="top">
    <nav class="nav" aria-label="Hlavní navigace">
      <a class="brand" href="#top" aria-label="Technika bez strachu">
        ⌘
        Technika bez strachu
      </a>
      <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-links">
        
        Menu
      </button>
      <div class="nav__links" id="nav-links">
        <a href="#sluzby" data-i18n="http://nav.services">Služby</a>
        <a href="#jak-to-funguje" data-i18n="nav.process">Jak to funguje</a>
        <a href="#kontakt" data-i18n="http://nav.contact">Kontakt</a>
        <label class="language" for="language-select">
          Jazyk
          <select id="language-select" aria-label="Výběr jazyka">
            <option value="cs">CS</option>
          </select>
        </label>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero section">
      <div class="hero__content reveal">
        <p class="eyebrow" data-i18n="hero.eyebrow">Výjezdní počítačový servis</p>
        <h1 data-i18n="hero.title">Technika nemusí strašit – přijedu, vysvětlím a vyřeším.</h1>
        <p class="hero__lead" data-i18n="hero.lead">Počítače, chytrá domácnost, bezpečnost, výuka i drobný design. První diagnostika a cesta k vám domů jsou zdarma.</p>
        <div class="hero__actions">
          <a class="button button--primary" href="#kontakt" data-i18n="hero.ctaPrimary">Chci poradit zdarma</a>
          <a class="button button--ghost" href="#sluzby" data-i18n="hero.ctaSecondary">Prohlédnout služby</a>
        </div>
        <dl class="trust-list" aria-label="Výhody">
          <div><dt>0 Kč</dt><dd data-i18n="http://hero.trust.visit">první výjezd a prohlídka</dd></div>
          <div><dt>12</dt><dd data-i18n="http://hero.trust.services">služeb pro domov i práci</dd></div>
          <div><dt>CS</dt><dd data-i18n="http://hero.trust.language">čeština v celém webu</dd></div>
        </dl>
      </div>
      <div class="hero__visual reveal" aria-label="Ilustrace mistra">
        <div class="orbit orbit--one"></div>
        <div class="orbit orbit--two"></div>
        <picture class="hero-card">
          <img src="./img/hero--main.png" data-hover="./img/hero--hover.png" alt="Přátelský počítačový technik" width="370" height="790" loading="eager">
        </picture>
        <div class="floating-note floating-note--top">diagnostika zdarma</div>
        <div class="floating-note floating-note--bottom">bez technických řečí</div>
      </div>
    </section>

    <section class="section intro-strip" aria-label="Hlavní sdělení">
      <div class="intro-strip__card reveal">
        💻
        <p data-i18n="intro">Profesionální počítačové služby: údržba, bezpečnost, učení i design. Platíte jen za skutečnou práci a případné díly.</p>
      </div>
    </section>

    <section class="section services" id="sluzby">
      <div class="section__heading reveal">
        <p class="eyebrow" data-i18n="services.eyebrow">Co pro vás zařídím</p>
        <h2 data-i18n="services.title">Dvanáct služeb, které berou technice strašidelnost.</h2>
        <p data-i18n="services.subtitle">Každá karta má vlastní ilustraci. Najeďte myší nebo klepněte na mobilu a uvidíte druhý obraz.</p>
      </div>

      <div class="category-tabs reveal" role="tablist" aria-label="Kategorie služeb">
        <button class="tab is-active" type="button" data-filter="all" data-i18n="filters.all">Vše</button>
        <button class="tab" type="button" data-filter="care" data-i18n="http://filters.care">Počítač</button>
        <button class="tab" type="button" data-filter="security" data-i18n="http://filters.security">Bezpečnost</button>
        <button class="tab" type="button" data-filter="education" data-i18n="http://filters.education">Výuka</button>
        <button class="tab" type="button" data-filter="design" data-i18n="http://filters.design">Design</button>
      </div>

      <div class="services-grid" id="services-grid" aria-live="polite"></div>
    </section>

    <section class="section process" id="jak-to-funguje">
      <div class="section__heading reveal">
        <p class="eyebrow" data-i18n="process.eyebrow">Jednoduchý postup</p>
        <h2 data-i18n="process.title">Bez stresu, bez zbytečných nákupů.</h2>
      </div>
      <div class="steps">
        <article class="step reveal">
          01
          <h3 data-i18n="process.steps.0.title">Ozvete se</h3>
          <p data-i18n="process.steps.0.text">Krátce popíšete, co se děje. I malý dotaz je v pořádku.</p>
        </article>
        <article class="step reveal">
          02
          <h3 data-i18n="process.steps.1.title">Přijedu zdarma</h3>
          <p data-i18n="process.steps.1.text">Na místě zkontroluji techniku a vysvětlím řešení lidskou řečí.</p>
        </article>
        <article class="step reveal">
          03
          <h3 data-i18n="process.steps.2.title">Vyřešíme úkol</h3>
          <p data-i18n="process.steps.2.text">Platíte jen za práci, kterou odsouhlasíte, a za potřebné díly.</p>
        </article>
      </div>
    </section>

    <section class="section contact" id="kontakt">
      <div class="contact__panel reveal">
        <div>
          <p class="eyebrow" data-i18n="contact.eyebrow">Kontakt</p>
          <h2 data-i18n="contact.title">Napište dřív, než z malé potíže vyroste velký problém.</h2>
          <p data-i18n="contact.text">Nebojte se mi ozvat, i kdyby šlo jen o malý dotaz – první rada vás nic nestojí a často ušetří spoustu starostí dopředu.</p>
        </div>
        <div class="contact__actions" aria-label="Kontaktní odkazy">
          <a class="contact-link" href="mailto:technik@example.cz">
            ✉
            <strong data-i18n="contact.emailLabel">E-mail</strong>
            <small>mailto:technik@example.cz</small>
          </a>
          <a class="contact-link" href="tel:+420000000000">
            ☎
            <strong data-i18n="contact.phoneLabel">Telefon</strong>
            <small>+420 000 000 000</small>
          </a>
          <a class="contact-link" href="https://wa.me/420000000000" rel="noopener">
            ☘
            <strong data-i18n="contact.whatsappLabel">WhatsApp</strong>
            <small data-i18n="contact.whatsappText">rychlá zpráva</small>
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>©  Technika bez strachu</p>
    <a href="#top" data-i18n="http://footer.top">Zpět nahoru</a>
  </footer>

  <script src="./app.js" defer></script>
</body>
</html>
Other: === manifest.webmanifest ===
{
  "name": "Technika bez strachu",
  "short_name": "Tech servis",
  "description": "Lehký vícejazyčný statický web pro výjezdní počítačové služby.",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#f7f3ea",
  "theme_color": "#16213e",
  "lang": "cs",
  "icons": []
}

=== robots.txt ===
User-agent: *
Allow: /

=== http://README.md ===
# Technika bez strachu

Statický web bez build procesu.

## Struktura
- index.html
- styles.css
- app.js
- manifest.webmanifest
- robots.txt
- img/ se soubory slug--main.png a slug--hover.png

## Lokální spuštění
Otevřete index.html v prohlížeči nebo spusťte jednoduchý statický server:

bash
python3 -m http.server 5173


Poté otevřete http://localhost:5173.
Scripts: === app.js ===
const i18n = {
  cs: {
    nav: {
      services: "Služby",
      process: "Jak to funguje",
      contact: "Kontakt",
      language: "Jazyk"
    },
    hero: {
      eyebrow: "Výjezdní počítačový servis",
      title: "Technika nemusí strašit – přijedu, vysvětlím a vyřeším.",
      lead: "Počítače, chytrá domácnost, bezpečnost, výuka i drobný design. První diagnostika a cesta k vám domů jsou zdarma.",
      ctaPrimary: "Chci poradit zdarma",
      ctaSecondary: "Prohlédnout služby",
      trust: {
        visit: "první výjezd a prohlídka",
        services: "služeb pro domov i práci",
        language: "čeština v celém webu"
      }
    },
    intro: "Profesionální počítačové služby: údržba, bezpečnost, učení i design. Platíte jen za skutečnou práci a případné díly.",
    services: {
      eyebrow: "Co pro vás zařídím",
      title: "Dvanáct služeb, které berou technice strašidelnost.",
      subtitle: "Každá karta má vlastní ilustraci. Najeďte myší nebo klepněte na mobilu a uvidíte druhý obraz.",
      detail: "Chci tuto službu"
    },
    filters: {
      all: "Vše",
      care: "Počítač",
      security: "Bezpečnost",
      education: "Výuka",
      design: "Design"
    },
    process: {
      eyebrow: "Jednoduchý postup",
      title: "Bez stresu, bez zbytečných nákupů.",
      steps: [
        {
          title: "Ozvete se",
          text: "Krátce popíšete, co se děje. I malý dotaz je v pořádku."
        },
        {
          title: "Přijedu zdarma",
          text: "Na místě zkontroluji techniku a vysvětlím řešení lidskou řečí."
        },
        {
          title: "Vyřešíme úkol",
          text: "Platíte jen za práci, kterou odsouhlasíte, a za potřebné díly."
        }
      ]
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Napište dřív, než z malé potíže vyroste velký problém.",
      text: "Nebojte se mi ozvat, i kdyby šlo jen o malý dotaz – první rada vás nic nestojí a často ušetří spoustu starostí dopředu.",
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      whatsappLabel: "WhatsApp",
      whatsappText: "rychlá zpráva"
    },
    footer: {
      name: "Technika bez strachu",
      top: "Zpět nahoru"
    },
    serviceItems: [
      {
        id: "cleaning",
        section: "1.1",
        category: "care",
        categoryLabel: "Údržba počítače",
        title: "Počítačová očista",
        alt: "Čištění počítače a notebooku",
        text: "Bojíte se, že váš počítač jednoho dne prostě chcípne uprostřed důležité práce? Když začne hučet jako tryskáč a v létě se přehřívá tak, že sám od sebe vypíná, většinou za to může obyčejný prach a stará teplovodivá pasta. Přijedu k vám domů zcela zdarma, opatrně rozeberu počítač nebo notebook, vyčistím ho, vyměním pastu a promažu větráčky. Po hodince práce odejde strach a zůstane tichý, chladný a poslušný stroj. První prohlídka u vás doma vás nestojí ani korunu."
      },
      {
        id: "upgrade",
        section: "1.2",
        category: "care",
        categoryLabel: "Zrychlení",
        title: "Modernizace",
        alt: "Upgrade počítače pomocí SSD a paměti",
        text: "Máte pocit, že váš počítač zestárl rychleji než vy sami? Než ho v hněvu pošlete do důchodu, dejte mu druhou šanci. Často stačí přidat rychlý SSD disk nebo trochu paměti a stará mašina najednou běží jako čerstvě z obchodu. Přijedu se podívat zdarma, srozumitelně poradím, co se opravdu vyplatí vyměnit, a nebudu vás tlačit do zbytečných nákupů. Žádné cizí zkratky ani odborné řeči – mluvím s vámi tak, jak byste si povídali se sousedem přes plot."
      },
      {
        id: "software",
        section: "1.3",
        category: "care",
        categoryLabel: "Windows a programy",
        title: "Nastavení softwaru",
        alt: "Nastavení Windows a programů",
        text: "Windows se chová podivně, samo otevírá reklamy a každé kliknutí trvá věčnost? Není třeba propadat panice ani volat synovce z druhého konce republiky. Přijedu k vám, počítač pořádně pročistím, odstraním viry a doinstaluji jen ty programy, které opravdu používáte. Pomůžu i s úřady na internetu, registracemi nebo vyplňováním formulářů, aby vás z toho nebolela hlava. Cesta a první prohlídka jsou zdarma – platíte jen za skutečně odvedenou práci."
      },
      {
        id: "repair",
        section: "1.4",
        category: "care",
        categoryLabel: "Oprava",
        title: "Oprava a likvidace",
        alt: "Oprava notebooku",
        text: "Notebook spadl ze stolu, klávesnice zlobí, nebo se počítač už ráno odmítá probudit? Nezahazujte ho hned do popelnice – často stačí vyměnit jediný malý díl a věrný pomocník je zpátky ve službě. Přijedu zdarma, prohlédnu pacienta a poctivě vám řeknu, jestli se oprava vyplatí, nebo už ne. Pokud opravdu dosloužil, postarám se o jeho ekologickou likvidaci a využiju aspoň náhradní díly. Žádné drama, žádné zbytečné výdaje navíc."
      },
      {
        id: "webcam",
        section: "2.1",
        category: "security",
        categoryLabel: "Dohled",
        title: "Webové kamery",
        alt: "Domácí bezpečnostní kamera",
        text: "Necháváte často byt prázdný, máte chatu u lesa nebo se bojíte o starší rodiče, když jsou sami doma? S kamerou se kdykoliv podíváte do mobilu a hned víte, že je doma klid a pohoda. Přijedu zdarma na obhlídku, doporučím vhodná místa a počet kamer a vše v klidu zapojím tak, abyste s tím sami uměli pracovat. Žádné kabely přes celý pokoj, žádné technické řeči – jen jistota, že máte své blízké i majetek pod dohledem. Diagnostika u vás doma je úplně zdarma."
      },
      {
        id: "alarm",
        section: "2.2",
        category: "security",
        categoryLabel: "Alarm",
        title: "Domácí signalizace",
        alt: "Chytrý dveřní alarm",
        text: "Stačí pár vteřin a nezvaný host je v bytě – a vy zjistíte škodu, až když je pozdě. Namontuji vám přímo na vstupní dveře bytu, sklepa nebo garáže chytrý alarm s hlasitou sirénou a SMS hlášením rovnou do mobilu. Když se něco děje, dozvíte se to dřív než soused naproti. Přijedu zdarma, ukážu vám, jak alarm zapnout jediným klepnutím, a naučím celou rodinu používat ho bez obav. Spát budete klidněji už první noc."
      },
      {
        id: "appliances",
        section: "2.3",
        category: "security",
        categoryLabel: "Chytrý domov",
        title: "Zařízení chytré domácnosti",
        alt: "Chytrá domácí zařízení",
        text: "Máte doma chytrou televizi, robotický vysavač nebo žárovky, které se měly samy ovládat z mobilu – jenže se to nějak nepodařilo rozjet? Tahle technika dokáže opravdu krásně usnadnit život, jen je potřeba ji propojit a srozumitelně ukázat, kde co zmáčknout. Přijedu k vám zdarma, propojím všechny chytré přístroje do jedné aplikace a v klidu vás naučím, jak je ovládat – od dálkového zapnutí topení až po videohovor s vnoučetem rovnou na televizi. Bez frustrace, bez složitých návodů, jen pohodlí."
      },
      {
        id: "literacy",
        section: "3.1",
        category: "education",
        categoryLabel: "Pro dospělé",
        title: "Počítačová gramotnost",
        alt: "Výuka práce s počítačem pro dospělé",
        text: "Cítíte se ztracení, když na vás vnoučata mluví o e-mailu, datové schránce nebo umělé inteligenci? Není ostuda se ptát – ostuda je nechat se odradit. Přijedu k vám domů, sednu si vedle vás a vlastním tempem vás provedu vším, co dnes počítač i mobil umí. Naučím vás bezpečně nakupovat, volat přes internet, posílat fotky vnoučatům a využívat umělou inteligenci jako šikovného pomocníka. První setkání i cesta jsou zdarma – ať se i vy cítíte ve světě techniky konečně doma."
      },
      {
        id: "tutor",
        section: "3.2",
        category: "education",
        categoryLabel: "Pro děti",
        title: "Doučování informatiky",
        alt: "Doučování informatiky",
        text: "Vaše dítě se v informatice trápí a vy už si s tím nevíte rady, protože v dobách vašeho dětství žádné takové předměty nebyly? Mám vysokoškolské vzdělání v oboru IT a zkušenosti s výukou ještě z doktorského studia, takže umím složité věci podat tak, aby je pochopil i páťák. Přijedu k vám domů, podívám se na učebnici i sešity a společně najdeme způsob, jak látku zvládnout bez slz a večerních hádek. První návštěva a seznámení jsou zdarma. Místo strachu z písemky přijde radost z toho, že tomu konečně rozumí."
      },
      {
        id: "chess",
        section: "3.3",
        category: "education",
        categoryLabel: "Logika",
        title: "Šachy",
        alt: "Výuka šachu pro děti",
        text: "Hledáte koníček, který dítě odtáhne od obrazovky a zároveň ho posune dál? Šachy jsou tichá hra, která učí přemýšlet dva tahy dopředu – a to se hodí v matematice, ve škole i v dospělém životě. Hraju šachy opravdu dobře a rád předám své triky vašemu malému stratégovi v klidu vaší kuchyně. Není potřeba kupovat drahé pomůcky ani jezdit přes celé město – přijedu zdarma, přinesu šachovnici a uvidíme, jestli vás chytnou. Klidně se přidejte i vy, ať si zahrajete společně."
      },
      {
        id: "development",
        section: "3.4",
        category: "education",
        categoryLabel: "AI a technologie",
        title: "Vysoké technologie",
        alt: "Dítě objevuje umělou inteligenci",
        text: "Slyšíte všude kolem o umělé inteligenci a máte strach, že vaše děti zaspí důležitou dobu? Škola jim dá maximálně základ pro nejslabší žáky – kdo chce být napřed, musí si přidat doma. Naučím vaše dítě používat AI chytře a bezpečně tak, aby mu pomáhala s úkoly, projekty i s tím, co ho opravdu zajímá – od vesmíru přes programování až po kreslení. Nepůjde o memorování, ale o radost z objevování a sebevědomí, které mu zůstane na celý život. Vyrazím za vámi zdarma a poradím, kde nejlépe začít."
      },
      {
        id: "design",
        section: "4",
        category: "design",
        categoryLabel: "Vizuální práce",
        title: "Design",
        alt: "Design letáků a webových stránek",
        text: "Otevíráte novou kavárnu, pořádáte sousedský bazárek nebo potřebujete elegantní stránku pro svou živnost a leták, který se nestydí pověsit na nástěnku? Jsem vystudovaný vývojář s praxí a kromě počítačů umím vytvořit také pěkně vypadající letáky, plakáty, katalogy a webové stránky šité přímo vám na míru. Stačí mi říct, co potřebujete, a já navrhnu několik variant, ze kterých si v klidu vyberete. Konzultace u vás doma je zdarma a konečně budete mít materiály, na které budete hrdí."
      }
    ]
  }
};

const state = {
  lang: localStorage.getItem("site-lang") || "cs",
  filter: "all"
};

const get = (path, dictionary = i18n[state.lang]) => {
  return path.split(".").reduce((value, key) => value?.[key], dictionary);
};

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = get(node.dataset.i18n);
    if (typeof value === "string") node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = get(node.dataset.i18nPlaceholder);
    if (typeof value === "string") node.setAttribute("placeholder", value);
  });

  renderServices();
}

function renderServices() {
  const grid = document.querySelector("#services-grid");
  const items = i18n[state.lang].serviceItems;
  grid.innerHTML = http://items.map((item, index) => {
    const hiddenClass = state.filter === "all" || state.filter === item.category ? "" : " is-hidden";
    return 
      <article class="service-card reveal${hiddenClass}" data-category="${item.category}" style="transition-delay:${Math.min(index * 35, 260)}ms">
        <div class="service-card__media">
          <img src="./img/${item.id}--main.png" data-hover="./img/${item.id}--hover.png" alt="${escapeHtml(item.alt)}" width="340" height="320" loading="lazy">
        </div>
        <div class="service-card__body">
          <div class="service-card__meta">
            <span>${item.section}</span>
            <span>${escapeHtml(item.categoryLabel)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          <a class="service-card__link" href="#kontakt">${i18n[state.lang].services.detail}</a>
        </div>
      </article>
    ;
  }).join("");
  bindHoverImages();
  observeReveals();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function bindHoverImages() {
  document.querySelectorAll("img[data-hover]").forEach((img) => {
    if (img.dataset.boundHover === "true") return;
    const mainSrc = img.getAttribute("src");
    const hoverSrc = img.dataset.hover;
    img.dataset.boundHover = "true";

    const preload = new Image();
    preload.src = hoverSrc;

    const activate = () => img.setAttribute("src", hoverSrc);
    const deactivate = () => img.setAttribute("src", mainSrc);

    img.closest(".service-card, .hero__visual")?.addEventListener("mouseenter", activate);
    img.closest(".service-card, .hero__visual")?.addEventListener("mouseleave", deactivate);
    img.closest(".service-card, .hero__visual")?.addEventListener("focusin", activate);
    img.closest(".service-card, .hero__visual")?.addEventListener("focusout", deactivate);
    img.addEventListener("click", () => {
      img.setAttribute("src", img.getAttribute("src") === mainSrc ? hoverSrc : mainSrc);
    });
  });
}

let revealObserver;

function observeReveals() {
  if (revealObserver) revealObserver.disconnect();

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        http://entry.target.classList.add("is-visible");
        revealObserver.unobserve(http://entry.target);
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
}

function initNavigation() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelectorAll(".nav__links a");

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

function initFilters() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.filter = tab.dataset.filter;
      document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("is-active", item === tab));
      renderServices();
    });
  });
}

function initLanguage() {
  const select = document.querySelector("#language-select");
  select.value = state.lang;
  select.addEventListener("change", () => {
    state.lang = select.value;
    localStorage.setItem("site-lang", state.lang);
    applyTranslations();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#year").textContent = new Date().getFullYear();
  initNavigation();
  initFilters();
  initLanguage();
  applyTranslations();
});
Styles: === styles.css ===
:root {
  color-scheme: light;
  --bg: #f7f3ea;
  --bg-soft: #fffaf0;
  --ink: #16213e;
  --muted: #687089;
  --primary: #ff7a45;
  --primary-dark: #df5630;
  --accent: #3bb6a3;
  --sky: #7ac7ff;
  --card: rgba(255, 255, 255, 0.78);
  --line: rgba(22, 33, 62, 0.12);
  --shadow: 0 24px 70px rgba(22, 33, 62, 0.14);
  --radius-xl: 32px;
  --radius-lg: 24px;
  --radius-md: 18px;
  --max: 1180px;
  --font-sans: "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-serif: "Source Serif 4", Georgia, serif;
}

 { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-sans);
  color: var(--ink);
  background:
    radial-gradient(circle at 10% 10%, rgba(122, 199, 255, 0.35), transparent 30rem),
    radial-gradient(circle at 90% 5%, rgba(255, 122, 69, 0.25), transparent 28rem),
    linear-gradient(180deg, #fff8ea 0%, var(--bg) 44%, #edf8f5 100%);
  min-height: 100vh;
}

body.nav-open { overflow: hidden; }

img { max-width: 100%; display: block; }

a { color: inherit; }

button, select { font: inherit; }

.skip-link {
  position: fixed;
  left: 1rem;
  top: -6rem;
  z-index: 100;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: var(--ink);
  color: white;
  transition: top 0.2s ease;
}

.skip-link:focus { top: 1rem; }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(247, 243, 234, 0.78);
  border-bottom: 1px solid var(--line);
}

.nav {
  width: min(100% - 2rem, var(--max));
  margin: 0 auto;
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 15px;
  color: white;
  background: linear-gradient(135deg, var(--ink), #34466e);
  box-shadow: 0 12px 30px rgba(22, 33, 62, 0.22);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.nav__links a,
.language {
  text-decoration: none;
  color: var(--muted);
  font-weight: 700;
  padding: 0.75rem 0.9rem;
  border-radius: 999px;
}

.nav__links a:hover,
.nav__links a:focus-visible {
  background: rgba(255, 255, 255, 0.65);
  color: var(--ink);
}

.language {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--line);
}

.language select {
  border: 0;
  background: transparent;
  color: var(--ink);
  font-weight: 800;
  cursor: pointer;
}

.nav__toggle {
  display: none;
  width: 46px;
  height: 46px;
  border: 0;
  border-radius: 14px;
  background: white;
  box-shadow: 0 10px 30px rgba(22, 33, 62, 0.12);
}

.nav__toggle span:not(.sr-only) {
  display: block;
  width: 20px;
  height: 2px;
  margin: 4px auto;
  background: var(--ink);
  border-radius: 999px;
}

.section {
  width: min(100% - 2rem, var(--max));
  margin: 0 auto;
  padding: clamp(3.5rem, 7vw, 7rem) 0;
}

.hero {
  min-height: calc(100vh - 76px);
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  padding-top: clamp(2rem, 5vw, 5rem);
}

.eyebrow {
  margin: 0 0 1rem;
  color: var(--primary-dark);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
}

h1, h2, h3, p { overflow-wrap: anywhere; }

h1 {
  margin: 0;
  font-family: var(--font-serif);
  font-size: clamp(3.1rem, 7vw, 6.9rem);
  line-height: 0.88;
  letter-spacing: -0.065em;
}

h2 {
  margin: 0;
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 4vw, 4.4rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
}

h3 {
  margin: 0;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.hero__lead,
.section__heading p:not(.eyebrow),
.contact p {
  color: var(--muted);
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  line-height: 1.75;
}

.hero__lead {
  max-width: 680px;
  margin: 1.4rem 0 0;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin: 2rem 0;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button--primary {
  background: linear-gradient(135deg, var(--primary), #ffb347);
  color: white;
  box-shadow: 0 16px 36px rgba(255, 122, 69, 0.32);
}

.button--ghost {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--line);
}

.trust-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
  margin: 0;
}

.trust-list div {
  padding: 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid var(--line);
}

.trust-list dt {
  font-size: 1.6rem;
  font-weight: 800;
}

.trust-list dd {
  margin: 0.2rem 0 0;
  color: var(--muted);
  font-size: 0.88rem;
}

.hero__visual {
  position: relative;
  min-height: 620px;
  display: grid;
  place-items: end center;
}

.hero-card {
  position: relative;
  z-index: 3;
  width: min(82%, 390px);
  border-radius: 46% 46% 28px 28px;
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.38));
  filter: drop-shadow(0 32px 55px rgba(22, 33, 62, 0.22));
  overflow: hidden;
}

.hero-card img {
  width: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.hero__visual:hover .hero-card img { transform: scale(1.025); }

.orbit {
  position: absolute;
  border-radius: 999px;
  border: 1px solid rgba(22, 33, 62, 0.12);
  animation: spin 18s linear infinite;
}

.orbit--one {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(59,182,163,0.16), transparent 65%);
}

.orbit--two {
  width: 560px;
  height: 560px;
  border-style: dashed;
  animation-duration: 28s;
  animation-direction: reverse;
}

.floating-note {
  position: absolute;
  z-index: 4;
  max-width: 180px;
  padding: 0.8rem 1rem;
  border-radius: 18px;
  background: white;
  box-shadow: var(--shadow);
  color: var(--ink);
  font-weight: 800;
  transform: rotate(-3deg);
}

.floating-note--top {
  top: 14%;
  left: 2%;
}

.floating-note--bottom {
  right: 3%;
  bottom: 18%;
  transform: rotate(4deg);
}

.intro-strip {
  padding-top: 0;
  padding-bottom: 2rem;
}

.intro-strip__card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.2rem;
  align-items: center;
  padding: clamp(1.2rem, 3vw, 2rem);
  border-radius: var(--radius-xl);
  background: var(--ink);
  color: white;
  box-shadow: var(--shadow);
}

.intro-strip__card span {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.12);
}

.intro-strip__card p {
  margin: 0;
  line-height: 1.65;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
}

.section__heading {
  max-width: 780px;
  margin-bottom: 2rem;
}

.category-tabs {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.tab {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.66);
  border-radius: 999px;
  padding: 0.75rem 1rem;
  font-weight: 800;
  color: var(--muted);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.tab:hover,
.tab:focus-visible {
  transform: translateY(-2px);
}

.http://tab.is-active {
  background: var(--ink);
  color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.service-card {
  grid-column: span 4;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  background: var(--card);
  box-shadow: 0 18px 44px rgba(22, 33, 62, 0.08);
  overflow: hidden;
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
}

.service-card:nth-child(5n + 1) { grid-column: span 5; }
.service-card:nth-child(5n + 2) { grid-column: span 3; }
.service-card:nth-child(5n + 3) { grid-column: span 4; }

.service-card:hover,
.service-card:focus-within {
  transform: translateY(-8px);
  box-shadow: 0 28px 70px rgba(22, 33, 62, 0.14);
  border-color: rgba(255, 122, 69, 0.32);
}

.http://service-card.is-hidden {
  display: none;
}

.service-card__media {
  position: relative;
  min-height: 230px;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.92), transparent 34%),
    linear-gradient(135deg, rgba(255,122,69,0.18), rgba(122,199,255,0.22));
}

.service-card__media img {
  max-height: 250px;
  object-fit: contain;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.service-card:hover .service-card__media img,
.service-card:focus-within .service-card__media img {
  transform: scale(1.04) rotate(-1deg);
}

.service-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  flex: 1;
  padding: 1.35rem;
}

.service-card__meta {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  color: var(--primary-dark);
  font-weight: 800;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.service-card__body p {
  margin: 0;
  color: var(--muted);
  line-height: 1.68;
}

.service-card__link {
  margin-top: auto;
  align-self: flex-start;
  color: var(--ink);
  font-weight: 800;
  text-decoration: none;
}

.service-card__link::after {
  content: " →";
  color: var(--primary);
}

.process {
  position: relative;
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.step {
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--line);
}

.step__number {
  display: inline-block;
  margin-bottom: 2.2rem;
  color: var(--accent);
  font-size: 2.8rem;
  font-family: var(--font-serif);
  font-weight: 700;
}

.step p {
  color: var(--muted);
  line-height: 1.68;
}

.contact__panel {
  display: grid;
  grid-template-columns: 1fr 0.86fr;
  gap: 2rem;
  align-items: center;
  padding: clamp(1.4rem, 4vw, 3rem);
  border-radius: calc(var(--radius-xl) + 8px);
  color: white;
  background:
    radial-gradient(circle at 100% 0%, rgba(255, 122, 69, 0.35), transparent 22rem),
    linear-gradient(135deg, #16213e, #233a62 62%, #1e6f65);
  box-shadow: var(--shadow);
}

.contact__panel .eyebrow,
.contact__panel p {
  color: rgba(255, 255, 255, 0.78);
}

.contact__actions {
  display: grid;
  gap: 0.8rem;
}

.contact-link {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.9rem;
  align-items: center;
  padding: 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}

.contact-link:hover,
.contact-link:focus-visible {
  transform: translateX(4px);
  background: rgba(255, 255, 255, 0.16);
}

.contact-link span {
  grid-row: span 2;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.14);
}

.contact-link small {
  color: rgba(255, 255, 255, 0.74);
}

.footer {
  width: min(100% - 2rem, var(--max));
  margin: 0 auto;
  padding: 2rem 0 3rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--muted);
}

.footer a {
  text-decoration: none;
  font-weight: 800;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.http://reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 980px) {
  .hero,
  .contact__panel {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    min-height: 520px;
    order: -1;
  }

  .service-card,
  .service-card:nth-child(n) {
    grid-column: span 6;
  }

  .steps {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .nav__toggle {
    display: block;
    position: relative;
    z-index: 60;
  }

  .nav__links {
    position: fixed;
    inset: 0;
    z-index: 55;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    background: rgba(247, 243, 234, 0.96);
    transform: translateY(-105%);
    transition: transform 0.25s ease;
  }

  body.nav-open .nav__links {
    transform: translateY(0);
  }

  .nav__links a,
  .language {
    font-size: 1.25rem;
  }

  .hero {
    min-height: auto;
  }

  .hero__visual {
    min-height: 460px;
  }

  .orbit--one {
    width: 310px;
    height: 310px;
  }

  .orbit--two {
    width: 390px;
    height: 390px;
  }

  .floating-note {
    font-size: 0.84rem;
  }

  .trust-list {
    grid-template-columns: 1fr;
  }

  .intro-strip__card {
    grid-template-columns: 1fr;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card,
  .service-card:nth-child(n) {
    grid-column: auto;
    min-height: auto;
  }

  .footer {
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  , ::before, ::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}

## Отчёт по сайту

Создан статический рекламный сайт **«Technika bez strachu»** для выездного мастера компьютерных услуг. Концепция построена вокруг идеи «техника не должна пугать»: визуально сайт выглядит тёплым, дружелюбным и понятным для людей, которые откладывают компьютерные задачи из-за страха сделать что-то неправильно.

### Ключевые решения

- **Структура:** hero-блок, короткое обещание, фильтруемая сетка из 12 услуг, блок «как это работает», контактный CTA.
- **Контент:** все 12 услуг из структуры Computer services представлены отдельными карточками:
    - `1.1` cleaning
    - `1.2` upgrade
    - `1.3` software
    - `1.4` repair
    - `2.1` webcam
    - `2.2` alarm
    - `2.3` appliances
    - `3.1` literacy
    - `3.2` tutor
    - `3.3` chess
    - `3.4` development
    - `4` design
- **Изображения:** для каждой услуги используются пути вида `./img/slug--main.png` и `./img/slug--hover.png`; для героя — `./img/hero--main.png` и `./img/hero--hover.png`.
- **UX:** карточки меняют изображение при hover/focus, на мобильных изображение можно переключить нажатием; есть плавная прокрутка, адаптивное меню, фильтры категорий и scroll-reveal анимация.
- **Адаптивность:** сетка перестраивается с desktop-layout на 2 колонки и затем на одну колонку.
- **Доступность:** добавлены `alt`-тексты, skip-link, фокусируемые элементы, `aria-label`, поддержка `prefers-reduced-motion`.
- **Палитра:** тёплый кремовый фон, тёмно-синий текст, оранжевый CTA, бирюзовый акцент.
- **Шрифты:** Google Fonts — Manrope для интерфейса и Source Serif 4 для крупных заголовков.

### Мультиязычность

Основной язык — **чешский**. Все тексты интерфейса и услуг вынесены в объект `i18n` в файле `app.js`. Переключатель языка уже есть в интерфейсе и сохраняет выбранный язык в `localStorage`. Сейчас доступен язык `cs`; новые языки можно добавить как новые ключи рядом с `cs`.

### Контакты

Так как в исходной записи был только текст контактного блока без конкретного e-mail или телефона, в коде оставлены безопасные заменяемые значения:

- `technik@example.cz`
- `+420 000 000 000`
- `https://wa.me/420000000000`

Перед публикацией их нужно заменить на реальные контакты мастера.

## Инструкция по сборке

Создайте папку проекта, например:

```
technika-bez-strachu/
	index.html
	styles.css
	app.js
	manifest.webmanifest
	robots.txt
	img/
```

Разложите код из свойств записи так:

1. Из свойства **Html** сохраните блок `=== index.html ===` в файл `index.html`.
2. Из свойства **Styles** сохраните блок `=== styles.css ===` в файл `styles.css`.
3. Из свойства **Scripts** сохраните блок `=== app.js ===` в файл `app.js`.
4. Из свойства **Other** сохраните:
    - `manifest.webmanifest`
    - `robots.txt`
    - при необходимости `README.md`

### Папка изображений

В папку `img/` положите изображения с точными именами:

```
hero--main.png
hero--hover.png
cleaning--main.png
cleaning--hover.png
upgrade--main.png
upgrade--hover.png
software--main.png
software--hover.png
repair--main.png
repair--hover.png
webcam--main.png
webcam--hover.png
alarm--main.png
alarm--hover.png
appliances--main.png
appliances--hover.png
literacy--main.png
literacy--hover.png
tutor--main.png
tutor--hover.png
chess--main.png
chess--hover.png
development--main.png
development--hover.png
design--main.png
design--hover.png
```

Имена должны совпадать полностью: сайт ожидает именно формат `./img/slug--main.png` и `./img/slug--hover.png`.

### Локальная проверка

Можно открыть `index.html` напрямую в браузере. Для более корректной проверки статического сайта запустите локальный сервер:

```bash
python3 -m http.server 5173
```

Затем откройте:

```
http://localhost:5173
```

Проверьте:

- открывается главная страница;
- карточки услуг отображаются все 12;
- изображения меняются при наведении;
- фильтры категорий работают;
- мобильное меню открывается;
- переключатель языка не ломает страницу;
- ссылки контактов ведут на реальные e-mail/телефон после замены заглушек.

## Развёртывание на бесплатном хостинге Vercel

### Вариант 1: через GitHub

1. Создайте репозиторий на GitHub.
2. Загрузите в него файлы проекта:
    - `index.html`
    - `styles.css`
    - `app.js`
    - `manifest.webmanifest`
    - `robots.txt`
    - папку `img/`
3. Зайдите на [vercel.com](http://vercel.com).
4. Нажмите **Add New → Project**.
5. Выберите репозиторий.
6. Framework Preset оставьте **Other**.
7. Build Command оставьте пустым.
8. Output Directory оставьте пустым или `./`.
9. Нажмите **Deploy**.
10. После публикации откройте выданный домен и проверьте изображения, ссылки и мобильную версию.

### Вариант 2: ручная загрузка

1. Подготовьте локальную папку со всеми файлами.
2. Установите Vercel CLI:

```bash
npm i -g vercel
```

1. Войдите в аккаунт:

```bash
vercel login
```

1. В папке проекта выполните:

```bash
vercel
```

1. На вопросы отвечайте как для статического проекта без build-команды.
2. Для финальной публикации выполните:

```bash
vercel --prod
```

## Проверка качества

- Все 12 услуг включены.
- Все slug-и изображений соответствуют Main images.
- Сайт не требует backend или платных API.
- CSS содержит адаптивные брейкпоинты и `prefers-reduced-motion`.
- JS не использует внешних зависимостей и должен работать как обычный современный JavaScript.
- Тексты сайта находятся в словаре `i18n.cs`, что позволяет расширить сайт другими языками.