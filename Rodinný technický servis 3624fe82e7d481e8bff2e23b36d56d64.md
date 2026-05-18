# Rodinný technický servis

Created by: Elijah 
Html: === index.html ===
html
<!doctype html>
<html lang="cs">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Rodinný technický servis</title>
  <meta name="description" content="Výjezdový mistr počítačových služeb. Výjezd a první diagnostika zdarma.">
  <meta name="theme-color" content="#f3b33d">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <a class="skip-link" href="#services">Přeskočit na služby</a>
  <header class="site-header" data-elevate>
    <a class="brand" href="#top" aria-label="Domů">
      <span class="brand-mark">J</span>
      <span><strong>Jakub servis</strong><small>technika s lidským přístupem</small></span>
    </a>
    <nav class="nav" aria-label="Hlavní navigace">
      <a href="#services">Služby</a>
      <a href="#how">Jak pracuji</a>
      <a href="#contact">Kontakt</a>
    </nav>
    <div class="lang" aria-label="Volba jazyka">
      <button class="lang-button is-active" type="button" data-lang="cs" aria-pressed="true">CS</button>
      <button class="lang-button" type="button" data-lang="placeholder" aria-pressed="false" title="Další jazyky lze doplnit ve slovníku">+</button>
    </div>
  </header>

  <main id="top">
    <section class="hero section" aria-labelledby="hero-title">
      <div class="hero-copy reveal">
        <p class="eyebrow" data-i18n="hero.kicker">Výjezd a první diagnostika zdarma</p>
        <h1 id="hero-title" data-i18n="hero.title">Počítačové starosti? Postarám se o ně jako o vlastní rodinu.</h1>
        <p class="hero-lead" data-i18n="hero.lead">Pomáhám domácnostem i malým podnikům s počítači, chytrou domácností, výukou a designem.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="mailto:jakub@example.com?subject=Pot%C5%99ebuji%20pomoc%20s%20technikou" data-i18n="hero.ctaPrimary">Napsat e-mail</a>
          <a class="button button-ghost" href="#services" data-i18n="hero.ctaSecondary">Prohlédnout služby</a>
        </div>
        <ul class="trust-list">
          <li data-i18n="hero.trust.0">Doma, v klidu a bez žargonu</li>
          <li data-i18n="hero.trust.1">Platíte až za domluvenou práci</li>
          <li data-i18n="hero.trust.2">Výjezd a první diagnostika zdarma</li>
        </ul>
      </div>
      <div class="hero-visual reveal" aria-hidden="true">
        <div class="hero-card">
          <img class="hero-img hero-img-main" src="./img/hero--main.png" width="370" height="790" alt="">
          <img class="hero-img hero-img-hover" src="./img/hero--hover.png" width="370" height="790" alt="">
          <b class="bubble bubble-top">diagnostika zdarma</b>
          <b class="bubble bubble-bottom">rodinný servis</b>
        </div>
      </div>
    </section>

    <section class="section stats reveal" aria-label="Shrnutí">
      <div><strong>12</strong><span data-i18n="stats.services">služeb pro domov i práci</span></div>
      <div><strong>0 Kč</strong><span data-i18n="stats.visit">výjezd a první kontrola</span></div>
      <div><strong>CS</strong><span data-i18n="stats.language">hlavní jazyk, připravené i18n</span></div>
    </section>

    <section class="section services" id="services" aria-labelledby="services-title">
      <div class="section-head reveal">
        <p class="eyebrow" data-i18n="services.kicker">Služby</p>
        <h2 id="services-title" data-i18n="services.title">Technika, bezpečí, učení i nápady pod jednou střechou</h2>
        <p data-i18n="services.lead">Každá karta má vlastní ilustraci, jemný hover efekt a krátký rodinný příběh.</p>
      </div>
      <div class="service-grid" data-services></div>
    </section>

    <section class="section process" id="how" aria-labelledby="how-title">
      <div class="section-head reveal">
        <p class="eyebrow" data-i18n="process.kicker">Jak pracuji</p>
        <h2 id="how-title" data-i18n="process.title">Jednoduše, přehledně a bez překvapení</h2>
      </div>
      <ol class="steps reveal">
        <li><span>01</span><strong data-i18n="process.steps.0.title">Ozvete se</strong><p data-i18n="process.steps.0.text">Popíšete problém e-mailem, telefonicky nebo zprávou.</p></li>
        <li><span>02</span><strong data-i18n="process.steps.1.title">Přijedu zdarma</strong><p data-i18n="process.steps.1.text">Podívám se na zařízení nebo prostor a navrhnu řešení.</p></li>
        <li><span>03</span><strong data-i18n="process.steps.2.title">Domluvíme cenu</strong><p data-i18n="process.steps.2.text">Platíte jen za odsouhlasenou práci a náhradní díly.</p></li>
      </ol>
    </section>

    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="contact-panel reveal">
        <div>
          <p class="eyebrow" data-i18n="contact.kicker">Kontakt</p>
          <h2 id="contact-title" data-i18n="contact.title">Technika doma zlobí? Začněme první zprávou.</h2>
          <p data-i18n="contact.text">Napište mi nebo zavolejte, kdykoliv vám doma něco s technikou „dělá naschvál“.</p>
        </div>
        <div class="contact-actions">
          <a class="button button-primary" href="mailto:jakub@example.com?subject=Pot%C5%99ebuji%20pomoc%20s%20technikou">jakub@example.com</a>
          <a class="button button-ghost" href="tel:+420000000000">+420 000 000 000</a>
          <a class="button button-ghost" href="https://wa.me/420000000000" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© <time data-year></time> Jakub servis. <span data-i18n="footer">Statický web připravený pro Vercel, Netlify a GitHub Pages.</span></p>
  </footer>

  <script src="./js/i18n.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>

Other: === http://README.md ===
markdown
# Rodinný technický servis

Statický, responzivní a vícejazyčně připravený web pro výjezdového mistra počítačových služeb.

## Struktura
- index.html
- css/styles.css
- js/i18n.js
- js/main.js
- img/hero--main.png
- img/hero--hover.png
- img/cleaning--main.png
- img/cleaning--hover.png
- img/upgrade--main.png
- img/upgrade--hover.png
- img/software--main.png
- img/software--hover.png
- img/repair--main.png
- img/repair--hover.png
- img/webcam--main.png
- img/webcam--hover.png
- img/alarm--main.png
- img/alarm--hover.png
- img/appliances--main.png
- img/appliances--hover.png
- img/literacy--main.png
- img/literacy--hover.png
- img/tutor--main.png
- img/tutor--hover.png
- img/chess--main.png
- img/chess--hover.png
- img/development--main.png
- img/development--hover.png
- img/design--main.png
- img/design--hover.png

## Spuštění lokálně
Otevřete index.html v prohlížeči nebo spusťte jednoduchý statický server.


=== package.json ===
json
{
  "name": "rodinny-technicky-servis",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "npx serve .",
    "dev": "npx serve ."
  },
  "devDependencies": {
    "serve": "^14.2.4"
  }
}


=== vercel.json ===
json
{
  "cleanUrls": true,
  "trailingSlash": false
}


=== robots.txt ===
plain text
User-agent: *
Allow: /


=== manifest.webmanifest ===
json
{
  "name": "Jakub servis",
  "short_name": "Jakub servis",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#fff9ec",
  "theme_color": "#f3c969",
  "icons": []
}

Scripts: === js/i18n.js ===
javascript
window.SITE_I18N = {
  cs: {
    hero: {
      kicker: "Výjezd a první diagnostika zdarma",
      title: "Počítačové starosti? Postarám se o ně jako o vlastní rodinu.",
      lead: "Pomáhám domácnostem i malým podnikům s počítači, chytrou domácností, výukou a designem. Přijedu, vysvětlím a opravím bez zbytečného stresu.",
      ctaPrimary: "Napsat e-mail",
      ctaSecondary: "Prohlédnout služby",
      trust: ["Doma, v klidu a bez žargonu", "Platíte až za domluvenou práci", "Výjezd a první diagnostika zdarma"]
    },
    stats: {
      services: "služeb pro domov i práci",
      visit: "výjezd a první kontrola",
      language: "hlavní jazyk, připravené i18n"
    },
    services: {
      kicker: "Služby",
      title: "Technika, bezpečí, učení i nápady pod jednou střechou",
      lead: "Každá karta má vlastní ilustraci, jemný hover efekt a krátký rodinný příběh, aby návštěvník rychle pochopil přínos služby.",
      items: [
        { id: "cleaning", section: "1.1", group: "Údržba", title: "Počítačová úklidová péče", text: "Pamatujete si, jak váš notebook v létě začal hučet jako stará lednička a babička se bála, že vybuchne? Stačí jednou ročně pořádný úklid uvnitř – zbavím počítač prachu, vyměním teplovodivou pastu a promažu ventilátory. Přijedu k vám domů zdarma a první diagnostika je také zdarma. Vaše rodinné fotky i školní úkoly tak zůstanou v bezpečí a stroj zase poběží tiše jako kotě.", alt: "Čištění počítače od prachu" },
        { id: "upgrade", section: "1.2", group: "Údržba", title: "Modernizace počítače", text: "Když dědeček říká, že počítač je už pomalejší než on sám u snídaně, není potřeba hned kupovat nový. Vyměním pevný disk za rychlé SSD, přidám paměť nebo nainstaluji novou baterii do notebooku. Vaše rodina ušetří tisíce a starý kamarád ještě dlouho poslouží dětem na úkoly i rodičům na filmy. Přijedu k vám zdarma a poradím, co se opravdu vyplatí.", alt: "Modernizace notebooku a počítače" },
        { id: "software", section: "1.3", group: "Údržba", title: "Nastavení softwaru", text: "Maminka chtěla vyplnit elektronickou žádost na úřad a počítač se rozhodl zrovna v tu chvíli zamrznout? Pročistím Windows od zbytečností a virů, nainstaluji vše, co rodina potřebuje – od školního programu po video hovory s prarodiči. Pomůžu i s registrací na webech, žádostmi a formuláři. Výjezd k vám i první diagnostika jsou samozřejmě zdarma.", alt: "Nastavení Windows a programů" },
        { id: "repair", section: "1.4", group: "Údržba", title: "Oprava a recyklace", text: "Bratr upustil notebook ze stolu a děti už ho oplakaly jako starého psa? Nespěchejte s vyhozením. Často stačí vyměnit jednu součástku a stroj zase ožije. Pokud už opravdu dosloužil, odvezu ho a využiji aspoň díly do jiných počítačů. Přijedu zdarma, podívám se zdarma a teprve potom společně rozhodneme, co dál.", alt: "Oprava poškozeného notebooku" },
        { id: "webcam", section: "2.1", group: "Bezpečnost", title: "Webové kamery", text: "Bojíte se, jestli starší rodiče doma neupadli, nebo chcete vidět, kdo zvoní u chaty během dovolené? Nainstaluji vám kolik kamer potřebujete – uvnitř, venku, u vchodu. Stačí mobil a máte rodinu pod dohledem odkudkoliv. Můžete s nimi dokonce mluvit přes reproduktor. Výjezd a první návrh řešení jsou bez poplatku.", alt: "Domácí bezpečnostní kamera" },
        { id: "alarm", section: "2.2", group: "Bezpečnost", title: "Domácí alarm", text: "Když celá rodina odjíždí o víkendu k babičce a v bytě zůstane jen mlčící zámek, je hezké vědět, že vás dům ochrání sám. Namontuji přímo na dveře bytu, chaty nebo garáže dálkově ovládaný alarm s hlasitou sirénou a SMS na váš telefon. Nepozvaný host si dvakrát rozmyslí, jestli pokračovat. Přijedu zdarma a poradím, co se hodí právě k vám.", alt: "Dálkově ovládaný domácí alarm" },
        { id: "appliances", section: "2.3", group: "Bezpečnost", title: "Chytrá domácnost", text: "Představte si, že ráno řeknete „dobré ráno“ a v kuchyni se rozsvítí, konvice začne hřát a televize pustí zprávy. Připojím vám chytré spotřebiče do jedné aplikace v mobilu – žárovky, termostat, robotický vysavač i Smart TV. Naučím celou rodinu, jak vše ovládat, včetně tatínka, který „těmto novotám nevěří“. Výjezd k vám je zdarma.", alt: "Chytré spotřebiče v domácnosti" },
        { id: "literacy", section: "3.1", group: "Výuka", title: "Počítačová gramotnost", text: "Vnučka vám poslala fotky do e-mailu a vy nevíte, kde je hledat? Naučím vás v klidu a bez stresu používat počítač, mobil i moderní nástroje včetně umělé inteligence. Hodiny vedu doma u vás, vlastním tempem, žádné hloupé otázky neexistují. První návštěva a krátká ukázka jsou zdarma – uvidíte, že to zvládnete.", alt: "Výuka práce s počítačem pro dospělé" },
        { id: "tutor", section: "3.2", group: "Výuka", title: "Doučování informatiky", text: "Když syn přinese pětku z informatiky a tváří se, že je to nuda, často jen nepotkal správného učitele. Mám vysokoškolské IT vzdělání a zkušenosti s výukou studentů z dob doktorátu. Vysvětlím látku tak, aby dávala smysl, a ukážu, proč může být programování zábavnější než video na telefonu. První setkání u vás doma – bez poplatku.", alt: "Doučování informatiky pro děti" },
        { id: "chess", section: "3.3", group: "Výuka", title: "Šachy pro děti", text: "Dcera nedokáže vydržet u úkolu déle než pět minut? Šachy jsou tichý zázrak na soustředění, trpělivost i logiku. Hraji opravdu dobře a umím dětem vysvětlit hru tak, aby je bavila už od první partie. Hodiny můžou být přímo u vás u kuchyňského stolu. První ukázková lekce je bez poplatku – ať si rodina vyzkouší, jestli jim to sedne.", alt: "Šachová lekce pro děti" },
        { id: "development", section: "3.4", group: "Výuka", title: "AI a vysoké technologie", text: "Chcete, aby vaše dítě nebylo za pár let mezi těmi, kdo „si neví rady s počítačem“? Naučím školáky používat umělou inteligenci nejen na rychlé odpovědi, ale i na psaní, učení a vlastní tvorbu. Lze to brát jako kroužek, nebo jako pomoc s domácími úkoly. Děti najednou zjistí, že jim učení jde, a vy uvidíte, jak rostou. První návštěva u vás je zdarma.", alt: "Dítě se učí s umělou inteligencí" },
        { id: "design", section: "4", group: "Design", title: "Letáky, weby a katalogy", text: "Otevíráte malou kavárnu, prodáváte ruční výrobky, nebo plánujete sousedský bazárek? Jsem diplomovaný vývojář a vytvořím pro vás stylové letáky, plakáty, katalog i celý web. Vše naladím na vás a vaše zákazníky, ne podle šablon z internetu. Pojďme to probrat u kávy – první návštěva a návrh jsou bez poplatku.", alt: "Grafický design a tvorba webu" }
      ]
    },
    process: {
      kicker: "Jak pracuji",
      title: "Jednoduše, přehledně a bez překvapení",
      steps: [
        { title: "Ozvete se", text: "Popíšete problém e-mailem, telefonicky nebo zprávou. Stačí pár vět." },
        { title: "Přijedu zdarma", text: "Podívám se na zařízení nebo prostor a navrhnu nejrozumnější řešení." },
        { title: "Domluvíme cenu", text: "Platíte jen za odsouhlasenou práci a případné náhradní díly." }
      ]
    },
    contact: {
      kicker: "Kontakt",
      title: "Technika doma zlobí? Začněme první zprávou.",
      text: "Napište mi nebo zavolejte, kdykoliv vám doma něco s technikou „dělá naschvál“. První konzultace a výjezd jsou zdarma – a možná spolu zjistíme, že problém je menší, než se zdál."
    },
    footer: "Statický web připravený pro Vercel, Netlify a GitHub Pages."
  }
};


=== js/main.js ===
javascript
(function () {
  const state = { lang: "cs" };
  const dictionary = window.SITE_I18N || {};

  const getValue = (path, source) => path.split(".").reduce((acc, key) => {
    if (acc === undefined || acc === null) return undefined;
    return acc[key];
  }, source);

  const t = (path) => getValue(path, dictionary[state.lang]);

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);

  const renderServices = () => {
    const container = document.querySelector("[data-services]");
    const items = t("services.items") || [];
    if (!container) return;

    container.innerHTML = items.map((item) => 
      <article class="service-card reveal" tabindex="0">
        <div class="service-media">
          <img src="./img/${escapeHtml(http://item.id)}--main.png" width="330" height="320" loading="lazy" alt="${escapeHtml(item.alt)}">
          <img src="./img/${escapeHtml(http://item.id)}--hover.png" width="330" height="320" loading="lazy" alt="">
        </div>
        <div class="service-body">
          ${escapeHtml(item.section)} · ${escapeHtml(http://item.group)}
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </article>
    ).join("");
  };

  const observeReveal = () => {
    const nodes = document.querySelectorAll(".reveal:not(.is-observed)");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => {
      node.classList.add("is-observed");
      observer.observe(node);
    });
  };

  const applyLanguage = () => {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = t(node.dataset.i18n);
      if (typeof value === "string") node.textContent = value;
    });
    renderServices();
    observeReveal();
    document.querySelectorAll(".lang-button").forEach((button) => {
      const active = button.dataset.lang === state.lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  const initHeader = () => {
    const header = document.querySelector("[data-elevate]");
    if (!header) return;
    const update = () => header.classList.toggle("is-elevated", window.scrollY > 10);
    update();
    window.addEventListener("scroll", update, { passive: true });
  };

  const initLanguageButtons = () => {
    document.querySelectorAll(".lang-button").forEach((button) => {
      button.addEventListener("click", () => {
        const next = button.dataset.lang;
        if (dictionary[next]) {
          state.lang = next;
          applyLanguage();
        } else {
          button.animate([
            { transform: "translateX(0)" },
            { transform: "translateX(-4px)" },
            { transform: "translateX(4px)" },
            { transform: "translateX(0)" }
          ], { duration: 260 });
        }
      });
    });
  };

  const initSmoothFocus = () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.setAttribute("tabindex", "-1");
          window.setTimeout(() => target.focus({ preventScroll: true }), 450);
        }
      });
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const year = document.querySelector("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());
    initHeader();
    initLanguageButtons();
    initSmoothFocus();
    applyLanguage();
  });
})();

Styles: === css/styles.css ===
css
:root {
  --bg: #fff9ec;
  --paper: rgba(255,255,255,.78);
  --paper-strong: #fff;
  --ink: #1e2430;
  --muted: #667085;
  --brand: #f3b33d;
  --brand-2: #72b9a4;
  --brand-3: #ee775f;
  --line: rgba(30,36,48,.12);
  --shadow: 0 22px 70px rgba(72,54,23,.14);
  --radius: 28px;
  --max: 1180px;
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(243,179,61,.28), transparent 34rem),
    radial-gradient(circle at 85% 8%, rgba(114,185,164,.24), transparent 28rem),
    linear-gradient(180deg, var(--bg), #fff 42%, #f8fbff);
  font-family: "Nunito", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
}
img { max-width: 100%; display: block; }
a { color: inherit; }
.skip-link {
  position: fixed; z-index: 100; top: .75rem; left: .75rem;
  transform: translateY(-160%);
  padding: .75rem 1rem; border-radius: 999px; background: var(--ink); color: #fff;
  transition: transform .2s ease;
}
.skip-link:focus { transform: translateY(0); }
.site-header {
  position: sticky; z-index: 20; top: 0;
  display: grid; grid-template-columns: 1fr auto auto; gap: 1rem; align-items: center;
  max-width: calc(var(--max) + 2rem); margin: 0 auto; padding: 1rem;
  backdrop-filter: blur(16px);
}
.site-header.is-elevated { background: rgba(255,249,236,.78); border-bottom: 1px solid var(--line); }
.brand { display: inline-flex; gap: .75rem; align-items: center; text-decoration: none; }
.brand-mark {
  display: grid; width: 44px; height: 44px; place-items: center; border-radius: 16px;
  background: var(--ink); color: #fff; font-weight: 900; box-shadow: 0 10px 30px rgba(30,36,48,.18);
}
.brand strong, .brand small { display: block; }
.brand small { color: var(--muted); font-size: .78rem; }
.nav, .lang { display: flex; gap: .25rem; padding: .35rem; border: 1px solid var(--line); border-radius: 999px; background: rgba(255,255,255,.7); }
.nav a, .lang-button {
  border: 0; border-radius: 999px; padding: .62rem .9rem; background: transparent;
  color: var(--muted); font: inherit; font-weight: 800; text-decoration: none;
}
.nav a:hover, .nav a:focus-visible, .lang-button.is-active { background: var(--ink); color: #fff; outline: none; }
.section { max-width: var(--max); margin: 0 auto; padding: clamp(3.5rem, 7vw, 6.5rem) 1rem; }
.hero {
  display: grid; grid-template-columns: minmax(0,1.05fr) minmax(290px,.95fr);
  gap: clamp(2rem,5vw,5rem); align-items: center; min-height: calc(100svh - 90px);
  padding-top: clamp(2rem,6vw,5rem);
}
.eyebrow {
  display: inline-flex; gap: .5rem; align-items: center; margin: 0 0 1rem; color: #9a5d00;
  font-size: .78rem; font-weight: 900; letter-spacing: .14em; text-transform: uppercase;
}
.eyebrow::before { content: ""; width: 34px; height: 3px; border-radius: 99px; background: currentColor; }
h1, h2, h3 { margin: 0; font-family: "Source Serif 4", Georgia, serif; line-height: 1.02; letter-spacing: -.04em; }
h1 { max-width: 12ch; font-size: clamp(3.35rem, 9vw, 7.25rem); }
h2 { max-width: 14ch; font-size: clamp(2.35rem, 5vw, 4.9rem); }
h3 { font-size: clamp(1.45rem, 3vw, 2rem); }
.hero-lead, .section-head p { max-width: 64ch; color: var(--muted); font-size: clamp(1.04rem,1.8vw,1.24rem); }
.hero-actions, .contact-actions { display: flex; flex-wrap: wrap; gap: .85rem; margin-top: 1.75rem; }
.button {
  display: inline-flex; align-items: center; justify-content: center; min-height: 48px;
  padding: .85rem 1.12rem; border: 1px solid var(--line); border-radius: 999px;
  font-weight: 900; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}
.button:hover, .button:focus-visible { transform: translateY(-2px); outline: none; }
.button-primary { background: var(--ink); color: #fff; box-shadow: 0 16px 40px rgba(30,36,48,.18); }
.button-ghost { background: rgba(255,255,255,.72); color: var(--ink); }
.trust-list { display: grid; gap: .55rem; margin: 1.75rem 0 0; padding: 0; list-style: none; color: var(--muted); font-weight: 800; }
.trust-list li::before { content: "✓"; display: inline-grid; width: 1.35rem; height: 1.35rem; margin-right: .5rem; place-items: center; border-radius: 50%; background: rgba(114,185,164,.24); color: #23725d; font-size: .88rem; }
.hero-visual { position: relative; min-height: 560px; }
.hero-card {
  position: relative; isolation: isolate; width: min(78vw,390px); margin: 0 auto; border-radius: 48px;
  background: linear-gradient(160deg, rgba(255,255,255,.82), rgba(255,255,255,.38)), radial-gradient(circle at 35% 16%, rgba(243,179,61,.42), transparent 48%);
  box-shadow: var(--shadow);
}
.hero-card::before, .hero-card::after { content: ""; position: absolute; z-index: -1; border-radius: 40px; background: rgba(114,185,164,.32); }
.hero-card::before { inset: 8% -8% 20% 18%; transform: rotate(8deg); }
.hero-card::after { inset: 18% 18% 6% -10%; background: rgba(238,119,95,.24); transform: rotate(-10deg); }
.hero-img { width: 100%; height: auto; object-fit: contain; transition: opacity .35s ease, transform .35s ease; }
.hero-img-hover { position: absolute; inset: 0; opacity: 0; }
.hero-card:hover .hero-img-main { opacity: 0; transform: translateY(-8px) rotate(-1deg); }
.hero-card:hover .hero-img-hover { opacity: 1; transform: translateY(-8px) rotate(1deg); }
.bubble { position: absolute; padding: .65rem .9rem; border-radius: 999px; background: #fff; box-shadow: 0 12px 32px rgba(30,36,48,.16); font-size: .82rem; font-weight: 900; }
.bubble-top { top: 9%; left: -8%; }
.bubble-bottom { right: -9%; bottom: 13%; }
.stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; padding-top: 1rem; padding-bottom: 1rem; }
.stats div { padding: 1.35rem; border: 1px solid var(--line); border-radius: 24px; background: var(--paper); box-shadow: 0 12px 38px rgba(72,54,23,.08); }
.stats strong { display: block; font-size: clamp(2rem,5vw,3.4rem); line-height: 1; }
.stats span { color: var(--muted); font-weight: 800; }
.section-head { display: grid; gap: 1rem; margin-bottom: 2rem; }
.service-grid { display: grid; grid-template-columns: repeat(12,1fr); gap: 1rem; }
.service-card {
  position: relative; grid-column: span 4; display: flex; flex-direction: column; min-height: 100%;
  overflow: hidden; border: 1px solid var(--line); border-radius: var(--radius);
  background: var(--paper); box-shadow: 0 20px 60px rgba(72,54,23,.08);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.service-card:nth-child(5n + 1) { grid-column: span 5; }
.service-card:nth-child(5n + 2) { grid-column: span 7; }
.service-card:hover, .service-card:focus-within { transform: translateY(-6px); border-color: rgba(243,179,61,.72); box-shadow: 0 28px 78px rgba(72,54,23,.16); }
.service-media {
  position: relative; display: grid; min-height: 230px; place-items: center; overflow: hidden;
  background: radial-gradient(circle at 30% 20%, rgba(255,255,255,.9), transparent 35%), linear-gradient(135deg, rgba(243,179,61,.26), rgba(114,185,164,.2));
}
.service-media img { max-width: min(74%,330px); max-height: 250px; object-fit: contain; transition: opacity .3s ease, transform .3s ease; }
.service-media img:last-child { position: absolute; opacity: 0; }
.service-card:hover .service-media img:first-child { opacity: 0; transform: scale(.96) rotate(-2deg); }
.service-card:hover .service-media img:last-child { opacity: 1; transform: scale(1.04) rotate(2deg); }
.service-body { display: grid; gap: .8rem; padding: 1.4rem; }
.service-meta { color: #8b5600; font-size: .78rem; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
.service-body p { margin: 0; color: var(--muted); }
.steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin: 0; padding: 0; list-style: none; }
.steps li, .contact-panel { border: 1px solid var(--line); border-radius: var(--radius); background: var(--paper-strong); box-shadow: var(--shadow); }
.steps li { padding: 1.5rem; }
.steps span { display: inline-flex; margin-bottom: 1rem; color: var(--brand-3); font-size: .82rem; font-weight: 900; letter-spacing: .14em; }
.steps strong { display: block; margin-bottom: .45rem; font-size: 1.25rem; }
.steps p { margin: 0; color: var(--muted); }
.contact-panel {
  display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 2rem; align-items: center;
  padding: clamp(1.35rem,4vw,3rem);
  background: linear-gradient(135deg, rgba(255,255,255,.92), rgba(255,255,255,.76)), radial-gradient(circle at 85% 20%, rgba(243,179,61,.32), transparent 30rem);
}
.contact-panel p { max-width: 66ch; color: var(--muted); font-size: 1.08rem; }
.contact-actions { flex-direction: column; min-width: min(100%,270px); margin: 0; }
.site-footer { max-width: var(--max); margin: 0 auto; padding: 2rem 1rem 3rem; color: var(--muted); text-align: center; }
.reveal { opacity: 0; transform: translateY(18px); transition: opacity .55s ease, transform .55s ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }

@media (max-width: 920px) {
  .site-header { grid-template-columns: 1fr auto; }
  .nav { grid-column: 1 / -1; justify-content: center; overflow-x: auto; }
  .hero, .contact-panel { grid-template-columns: 1fr; }
  .hero { min-height: auto; }
  .hero-visual { min-height: 460px; }
  .service-card, .service-card:nth-child(n) { grid-column: span 6; }
  .steps, .stats { grid-template-columns: 1fr; }
}
@media (max-width: 620px) {
  .site-header { position: static; }
  .brand small { display: none; }
  .nav a { padding-inline: .7rem; }
  h1 { font-size: clamp(3rem,17vw,4.4rem); }
  .bubble { display: none; }
  .service-card, .service-card:nth-child(n) { grid-column: 1 / -1; }
  .service-media { min-height: 210px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; }
  .reveal { opacity: 1; transform: none; }
}

# Отчёт по сайту

Создан макет **«Rodinný technický servis»** — тёплый рекламный сайт выездного мастера компьютерных услуг в стиле семейных историй. Основной язык интерфейса — чешский.

## Концепция

В основе дизайна — ощущение домашнего доверия: мягкий кремовый фон, карточки с закруглениями, спокойная типографика и дружелюбные иллюстрации. Тексты поданы через узнаваемые семейные ситуации, поэтому услуги выглядят не как сухой прайс-лист, а как практичная помощь для дома.

## Целевые устройства

- мобильные телефоны;
- планшеты;
- ноутбуки;
- широкие desktop-экраны.

Сетка адаптивная: на больших экранах карточки образуют живой masonry-like ритм, на планшетах переходят в две колонки, на мобильных — в одну колонку.

## Ключевые приёмы дизайна

- Hero-блок с образом мастера и hover-сменой изображения `hero--main.png` → `hero--hover.png`.
- 12 карточек услуг, каждая использует пару `slug--main.png` и `slug--hover.png`.
- Мягкие radial-gradient акценты, glassmorphism-панели и крупные скругления.
- Scroll reveal-анимации через IntersectionObserver.
- Доступность: skip-link, фокусируемые элементы, контрастные CTA, `prefers-reduced-motion`.
- Переключатель языка уже есть в интерфейсе; сейчас активен словарь `cs`, новые языки добавляются в `SITE_I18N`.

## Палитра

- Основной фон: `#fff9ec`.
- Текст: `#1e2430`.
- Акцент: `#f3b33d`.
- Вторичный акцент: `#72b9a4`.
- Тёплый коралл: `#ee775f`.

## Шрифты

- Заголовки: `Source Serif 4` — создаёт ощущение редакционного, человеческого и немного семейного стиля.
- Основной текст: `Nunito` — мягкий, современный и хорошо читаемый интерфейсный шрифт.
- Оба шрифта подключены через бесплатный Google Fonts CDN.

# Проверка качества

- Все 12 услуг присутствуют:
    - `cleaning` — секция 1.1;
    - `upgrade` — секция 1.2;
    - `software` — секция 1.3;
    - `repair` — секция 1.4;
    - `webcam` — секция 2.1;
    - `alarm` — секция 2.2;
    - `appliances` — секция 2.3;
    - `literacy` — секция 3.1;
    - `tutor` — секция 3.2;
    - `chess` — секция 3.3;
    - `development` — секция 3.4;
    - `design` — секция 4.
- Для каждой услуги используются пути `./img/slug--main.png` и `./img/slug--hover.png`.
- Контактный блок содержит `mailto:`, `tel:` и ссылку WhatsApp без серверной части.
- HTML5-структура логична: `header`, `main`, `section`, `article`, `footer`.
- CSS не требует сборки и содержит адаптивные брейкпоинты.
- JS не зависит от платных API и работает как расширяемый i18n-словарь.
- Внешние ресурсы бесплатные: Google Fonts.

# Инструкция по сборке

Создайте папку проекта и разложите файлы так:

```
project/
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  ├─ i18n.js
│  └─ main.js
├─ img/
│  ├─ hero--main.png
│  ├─ hero--hover.png
│  ├─ cleaning--main.png
│  ├─ cleaning--hover.png
│  ├─ upgrade--main.png
│  ├─ upgrade--hover.png
│  ├─ software--main.png
│  ├─ software--hover.png
│  ├─ repair--main.png
│  ├─ repair--hover.png
│  ├─ webcam--main.png
│  ├─ webcam--hover.png
│  ├─ alarm--main.png
│  ├─ alarm--hover.png
│  ├─ appliances--main.png
│  ├─ appliances--hover.png
│  ├─ literacy--main.png
│  ├─ literacy--hover.png
│  ├─ tutor--main.png
│  ├─ tutor--hover.png
│  ├─ chess--main.png
│  ├─ chess--hover.png
│  ├─ development--main.png
│  ├─ development--hover.png
│  ├─ design--main.png
│  └─ design--hover.png
├─ package.json
├─ vercel.json
├─ robots.txt
└─ manifest.webmanifest
```

## Куда положить код из свойств записи

- `Html` → файл `index.html`.
- `Styles` → файл `css/styles.css`.
- `Scripts`:
    - блок `js/i18n.js` → файл `js/i18n.js`;
    - блок `js/main.js` → файл `js/main.js`.
- `Other`:
    - `README.md`;
    - `package.json`;
    - `vercel.json`;
    - `robots.txt`;
    - `manifest.webmanifest`.

## Как организовать изображения

Папка изображений должна называться строго `img`. Все изображения подключаются относительными путями вида:

```
./img/cleaning--main.png
./img/cleaning--hover.png
```

Имена должны совпадать с манифестом изображений. Если нужно заменить картинку, лучше сохранить тот же filename — тогда HTML и JS менять не придётся.

## Как добавить другой язык

1. Откройте `js/i18n.js`.
2. Скопируйте объект `cs`.
3. Создайте рядом новый ключ, например `en` или `ru`.
4. Переведите строки внутри нового объекта.
5. В `index.html` добавьте кнопку языка:

```html
<button class="lang__button" type="button" data-lang="en" aria-pressed="false">EN</button>
```

# Развёртывание на Vercel

1. Создайте новый Git-репозиторий и загрузите туда структуру проекта.
2. Проверьте, что `index.html` находится в корне проекта.
3. На Vercel нажмите **Add New → Project**.
4. Подключите репозиторий.
5. Для статического сайта без сборки оставьте настройки по умолчанию:
    - Framework Preset: `Other`;
    - Build Command: пусто;
    - Output Directory: пусто или `./`.
6. Нажмите **Deploy**.
7. После публикации откройте выданный домен и проверьте:
    - hero-изображение;
    - hover-смену картинок в карточках;
    - кнопки контакта;
    - мобильную версию;
    - отсутствие ошибок в консоли браузера.

# Примечания

В контактных ссылках используются заглушки:

```
jakub@example.com
+420 000 000 000
https://wa.me/420000000000
```

Перед публикацией их нужно заменить на реальные контакты мастера.