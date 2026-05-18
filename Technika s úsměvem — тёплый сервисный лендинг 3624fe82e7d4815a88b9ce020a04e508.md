# Technika s úsměvem — тёплый сервисный лендинг

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs" data-theme="warm">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Technika s úsměvem — počítačové služby u vás doma</title>
  <meta name="description" content="Výjezdový mistr počítačových služeb: čištění, modernizace, nastavení Windows, kamery, chytrá domácnost, výuka a design.">
  <meta name="theme-color" content="#fbf2df">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <a class="skip-link" href="#services">Přejít na služby</a>

  <header class="site-header" data-reveal>
    <a class="brand" href="#top" aria-label="Technika s úsměvem">
      🙂
      Technika s úsměvem
    </a>

    <nav class="nav" aria-label="Hlavní navigace">
      <a href="#services">Služby</a>
      <a href="#process">Jak pracuji</a>
      <a href="#contact">Kontakt</a>
    </nav>

    <div class="language" aria-label="Výběr jazyka">
      <label for="languageSelect">Jazyk</label>
      <select id="languageSelect" aria-label="Vybrat jazyk">
        <option value="cs" selected>CS</option>
      </select>
    </div>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="heroTitle">
      <div class="hero__copy" data-reveal>
        <p class="eyebrow" data-i18n="hero.kicker">Počítačová pomoc doma i online</p>
        <h1 id="heroTitle" data-i18n="hero.title">Technika má sloužit vám, ne brát vám klid.</h1>
        <p class="hero__lead" data-i18n="hero.lead">Přijedu, vysvětlím jednoduchou řečí a pomohu s počítačem, bezpečností, výukou i malým designovým projektem. Výjezd a první diagnostika jsou zdarma.</p>

        <div class="hero__actions">
          <a class="button button--primary" href="#contact" data-i18n="hero.ctaPrimary">Domluvit pomoc</a>
          <a class="button button--ghost" href="#services" data-i18n="hero.ctaSecondary">Prohlédnout služby</a>
        </div>

        <ul class="trust-list" aria-label="Výhody">
          <li data-i18n="hero.benefits.0">Bezplatný výjezd</li>
          <li data-i18n="hero.benefits.1">Srozumitelné vysvětlení</li>
          <li data-i18n="hero.benefits.2">Statické ceny po domluvě</li>
        </ul>
      </div>

      <div class="hero__visual" data-reveal>
        <div class="hero-card">
          <img src="./img/hero--main.png" data-hover="./img/hero--hover.png" alt="Přátelský počítačový mistr" width="370" height="790" loading="eager">
        </div>
        <div class="floating-note floating-note--top">diagnostika zdarma</div>
        <div class="floating-note floating-note--bottom">klidně a lidsky</div>
      </div>
    </section>

    <section class="section section--soft" id="services" aria-labelledby="servicesTitle">
      <div class="section__head" data-reveal>
        <p class="eyebrow" data-i18n="services.kicker">12 oblastí pomoci</p>
        <h2 id="servicesTitle" data-i18n="services.title">Od hučícího notebooku po chytrou domácnost</h2>
        <p data-i18n="services.lead">Vyberte si, co vás trápí. Každá karta má jemnou změnu obrázku při najetí, aby web působil živě, ale zůstal lehký.</p>
      </div>

      <div class="service-groups" id="serviceGroups" aria-live="polite"></div>
    </section>

    <section class="process" id="process" aria-labelledby="processTitle">
      <div class="section__head" data-reveal>
        <p class="eyebrow" data-i18n="process.kicker">Jednoduchý postup</p>
        <h2 id="processTitle" data-i18n="process.title">Bez technického stresu</h2>
      </div>

      <ol class="steps" data-reveal>
        <li>
          01
          <strong data-i18n="process.steps.0.title">Ozvete se</strong>
          <p data-i18n="process.steps.0.text">Krátce popíšete problém nebo nápad.</p>
        </li>
        <li>
          02
          <strong data-i18n="process.steps.1.title">Přijedu a zjistím stav</strong>
          <p data-i18n="process.steps.1.text">První výjezd a diagnostika jsou zdarma.</p>
        </li>
        <li>
          03
          <strong data-i18n="process.steps.2.title">Navrhnu řešení</strong>
          <p data-i18n="process.steps.2.text">Dostanete jasné vysvětlení bez složitých slov.</p>
        </li>
        <li>
          04
          <strong data-i18n="process.steps.3.title">Technika zase slouží</strong>
          <p data-i18n="process.steps.3.text">Platíte jen za domluvenou práci a případné díly.</p>
        </li>
      </ol>
    </section>

    <section class="contact" id="contact" aria-labelledby="contactTitle">
      <div class="contact__copy" data-reveal>
        <p class="eyebrow" data-i18n="contact.kicker">Kontakt</p>
        <h2 id="contactTitle" data-i18n="contact.title">Napište nebo zavolejte a v klidu probereme, co vaše technika nebo projekt potřebuje.</h2>
        <p data-i18n="contact.note">Kontaktní údaje jsou připravené jako snadno vyměnitelné odkazy. Před publikací nahraďte ukázkový e-mail a telefon skutečnými údaji.</p>
      </div>

      <div class="contact__panel" data-reveal>
        <a class="contact-link" href="mailto:kontakt@example.cz?subject=Popt%C3%A1vka%20po%C4%8D%C3%ADta%C4%8Dov%C3%A9%20pomoci">
          ✉️
          <strong>E-mail</strong>
          <em>mailto:kontakt@example.cz</em>
        </a>
        <a class="contact-link" href="tel:+420000000000">
          📞
          <strong>Telefon</strong>
          <em>+420 000 000 000</em>
        </a>
        <a class="contact-link" href="https://wa.me/420000000000" rel="noopener">
          💬
          <strong>WhatsApp</strong>
          <em>rychlá zpráva</em>
        </a>

        <form class="mini-form" action="mailto:kontakt@example.cz" method="post" enctype="text/plain">
          <label>
            Vaše zpráva
            <textarea name="zprava" rows="4" placeholder="Dobrý den, potřebuji pomoci s..."></textarea>
          </label>
          <button class="button button--primary" type="submit">Odeslat přes e-mail</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>©  Technika s úsměvem</p>
    <a href="#top">Nahoru ↑</a>
  </footer>

  <script src="./app.js" defer></script>
</body>
</html>
Other: === package.json ===
{
  "scripts": {
    "start": "npx serve .",
    "check": "node --check app.js"
  },
  "devDependencies": {
    "serve": "latest"
  }
}

=== vercel.json ===
{
  "cleanUrls": true,
  "trailingSlash": false
}

=== robots.txt ===
User-agent: *
Allow: /

=== manifest.webmanifest ===
{
  "name": "Technika s úsměvem",
  "short_name": "PC pomoc",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fffaf0",
  "theme_color": "#fbf2df",
  "lang": "cs"
}
Scripts: === app.js ===
const i18n = {
  cs: {
    hero: {
      kicker: "Počítačová pomoc doma i online",
      title: "Technika má sloužit vám, ne brát vám klid.",
      lead: "Přijedu, vysvětlím jednoduchou řečí a pomohu s počítačem, bezpečností, výukou i malým designovým projektem. Výjezd a první diagnostika jsou zdarma.",
      ctaPrimary: "Domluvit pomoc",
      ctaSecondary: "Prohlédnout služby",
      benefits: ["Bezplatný výjezd", "Srozumitelné vysvětlení", "Statické ceny po domluvě"]
    },
    services: {
      kicker: "12 oblastí pomoci",
      title: "Od hučícího notebooku po chytrou domácnost",
      lead: "Vyberte si, co vás trápí. Každá karta má jemnou změnu obrázku při najetí, aby web působil živě, ale zůstal lehký."
    },
    process: {
      kicker: "Jednoduchý postup",
      title: "Bez technického stresu",
      steps: [
        { title: "Ozvete se", text: "Krátce popíšete problém nebo nápad." },
        { title: "Přijedu a zjistím stav", text: "První výjezd a diagnostika jsou zdarma." },
        { title: "Navrhnu řešení", text: "Dostanete jasné vysvětlení bez složitých slov." },
        { title: "Technika zase slouží", text: "Platíte jen za domluvenou práci a případné díly." }
      ]
    },
    contact: {
      kicker: "Kontakt",
      title: "Napište nebo zavolejte a v klidu probereme, co vaše technika nebo projekt potřebuje.",
      note: "Kontaktní údaje jsou připravené jako snadno vyměnitelné odkazy. Před publikací nahraďte ukázkový e-mail a telefon skutečnými údaji."
    },
    groups: [
      {
        title: "Péče o počítač",
        icon: "🖥️",
        services: [
          {
            section: "1.1",
            slug: "cleaning",
            title: "Počítačová údržba",
            text: "Když notebook v létě hučí jako fén, pálí do kolen a vypne se zrovna uprostřed práce, často potřebuje jen pořádnou péči. Přijedu k vám domů zdarma, podívám se, v jakém je stavu, a jednoduše vysvětlím, co mu pomůže. Vyčistím prach, zkontroluji chlazení a pomohu počítači zase dýchat tišeji a klidněji. Bez zbytečného stresu — abyste se mohli vrátit k práci, učení nebo filmu.",
            alt: "Čištění notebooku a počítače"
          },
          {
            section: "1.2",
            slug: "upgrade",
            title: "Modernizace",
            text: "Pokud se počítač zapíná déle než ranní káva, nemusí to hned znamenat nákup nového. Někdy stačí přidat paměť, vyměnit starý disk nebo vybrat vhodnější součástku. Přijedu zdarma, udělám první diagnostiku a řeknu vám, jestli má vylepšení smysl. Získáte svižnější počítač bez pocitu, že vás někdo tlačí do zbytečných výdajů.",
            alt: "Výměna dílů a zrychlení počítače"
          },
          {
            section: "1.3",
            slug: "software",
            title: "Nastavení softwaru",
            text: "Když se Windows zpomaluje, vyskakují divná okna nebo nejde internet, člověk má rychle pocit, že technika vyhrála. Pomohu systém uklidit, nastavit potřebné programy a zařídit, aby se vám s počítačem zase dobře pracovalo. Pomůžu také s online formuláři, registracemi nebo dokumenty, když vám technika stojí v cestě. Výjezd i první diagnostika jsou zdarma, takže si nejdřív v klidu řekneme, co vás brzdí.",
            alt: "Nastavení Windows a programů"
          },
          {
            section: "1.4",
            slug: "repair",
            title: "Oprava a recyklace",
            text: "Rozbitý notebook na poličce ještě nemusí být odpad. Možná mu chybí jen jedna nová součástka, možná z něj půjde zachránit data nebo užitečné díly. Přijedu zdarma, zařízení prohlédnu a férově řeknu, jestli se oprava vyplatí. Vy se zbavíte nejistoty a rozhodnete se v klidu — opravit, zachránit důležité věci, nebo se s technikou rozloučit bez výčitek.",
            alt: "Oprava rozbitého notebooku"
          }
        ]
      },
      {
        title: "Bezpečnost a chytrý domov",
        icon: "🔒",
        services: [
          {
            section: "2.1",
            slug: "webcam",
            title: "Webové kamery",
            text: "Chcete vidět, co se děje u vchodu, v garáži nebo na chatě, i když jste daleko? Kamery nejsou jen pro bezpečnost — můžete zkontrolovat starší rodiče, podívat se, jestli přišel kurýr, nebo se ujistit, že je doma klid. Pomohu vybrat vhodné místo, připojit kamery k internetu a ukážu vám, jak obraz sledovat v telefonu. První návštěva a zjištění možností u vás doma jsou zdarma.",
            alt: "Domácí kamera připojená k internetu"
          },
          {
            section: "2.2",
            slug: "alarm",
            title: "Domácí alarm",
            text: "Někdy klid začíná obyčejným pocitem, že dveře, garáž nebo sklep nejsou bez dozoru. Nainstaluji srozumitelný domácí alarm s hlasitým upozorněním a zprávou do telefonu, abyste se o problému dozvěděli včas. Vše vysvětlím bez složitých slov a nastavím ovládání tak, aby se používalo pohodlně každý den. Bezplatný výjezd a první diagnostika pomohou zjistit, co se hodí právě pro váš domov.",
            alt: "Domácí alarm se sirénou"
          },
          {
            section: "2.3",
            slug: "appliances",
            title: "Chytrá domácnost",
            text: "Chytrá domácnost má život zjednodušit, ne vás nutit hodiny hledat správné tlačítko v aplikaci. Pomohu připojit Smart TV, zásuvky, světla, čidla nebo jiné domácí zařízení a ukážu vám, jak je používat beze strachu, že něco pokazíte. Hodí se to pro rodinu, starší rodiče i každého, kdo chce doma víc pohodlí. Přijedu zdarma, podívám se na situaci na místě a vše v klidu nastavím.",
            alt: "Chytré domácí spotřebiče"
          }
        ]
      },
      {
        title: "Učení pro dospělé i děti",
        icon: "🎓",
        services: [
          {
            section: "3.1",
            slug: "literacy",
            title: "Počítačová gramotnost",
            text: "Když potřebujete počítač na e-maily, fotky, banku, spojení s rodinou nebo umělou inteligenci, nikdy není pozdě začít. Vysvětluji klidně, lidsky a vaším tempem, bez posměchu a bez složitých slov. Společně probereme přesně ty věci, které potřebujete v běžném životě. Výuka může proběhnout u vás doma a první domluva s pochopením vašich potřeb je bez placeného výjezdu.",
            alt: "Výuka práce s počítačem pro dospělé"
          },
          {
            section: "3.2",
            slug: "tutor",
            title: "Doučování informatiky",
            text: "Informatika ve škole může působit jako hromada nejasných pravidel, ale ve skutečnosti je to způsob, jak jistěji řešit úkoly. Pomohu dítěti pochopit látku, domácí úkoly i projekty jednoduchou řečí a bez tlaku. Dítě získá pocit, že technologie nejsou strašák, ale něco zajímavého a užitečného pro budoucnost. Můžeme začít klidným seznámením a zjistit, jaká pomoc bude opravdu dávat smysl.",
            alt: "Doučování informatiky pro děti"
          },
          {
            section: "3.3",
            slug: "chess",
            title: "Šachy",
            text: "Šachy učí dítě přemýšlet o pár kroků dopředu, všímat si detailů a nebát se chyb. Není to jen hra u desky, ale trénink trpělivosti, logiky a sebejistoty. Mohu s dítětem pracovat přátelskou formou, aby učení působilo jako objevování, ne jako přísná hodina. Taková dovednost pomáhá ve škole i v obyčejných životních situacích.",
            alt: "Výuka šachu pro děti"
          },
          {
            section: "3.4",
            slug: "development",
            title: "Vysoké technologie a AI",
            text: "Umělá inteligence už je součástí učení, práce i tvoření, ale chytře ji používat neumí každý. Pomohu dítěti rozšířit obzor, klást správné otázky a měnit složité věci na srozumitelné kroky. Může jít o podporu s domácími úkoly, projekty nebo jen zábavné poznávání technologií budoucnosti. Cílem není nahradit vlastní myšlení, ale udělat ho silnější.",
            alt: "Dítě se učí moderní technologie"
          }
        ]
      },
      {
        title: "Design",
        icon: "🎨",
        services: [
          {
            section: "4",
            slug: "design",
            title: "Letáky, weby a katalogy",
            text: "Malý podnik, kroužek, akce nebo osobní projekt často potřebují hezkou a srozumitelnou tvář. Pomohu připravit leták, plakát, webovou stránku nebo katalog tak, aby lidé rychle pochopili vaši myšlenku a chtěli se ozvat. Začneme u vašeho cíle a vybereme styl bez zbytečných komplikací. První rozhovor a odhad potřeb jsou zdarma, takže si v klidu ujasníme, odkud začít.",
            alt: "Grafický design a webová stránka"
          }
        ]
      }
    ]
  }
};

const state = {
  lang: "cs"
};

function readPath(source, path) {
  return path.split(".").reduce((value, key) => {
    if (Array.isArray(value)) return value[Number(key)];
    return value ? value[key] : undefined;
  }, source);
}

function applyTranslations() {
  const dictionary = i18n[state.lang] || i18n.cs;
  document.documentElement.lang = state.lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = readPath(dictionary, node.dataset.i18n);
    if (typeof value === "string") node.textContent = value;
  });
}

function serviceCardTemplate(service) {
  const main = ./img/${service.slug}--main.png;
  const hover = ./img/${service.slug}--hover.png;

  return 
    <article class="card" data-reveal>
      <div class="card__media">
        <img src="${main}" data-hover="${hover}" width="320" height="320" loading="lazy" alt="${service.alt}">
      </div>
      <div class="card__body">
        <span class="card__section">${service.section}</span>
        <h3>${service.title}</h3>
        <p>${service.text}</p>
      </div>
    </article>
  ;
}

function renderServices() {
  const dictionary = i18n[state.lang] || i18n.cs;
  const mount = document.querySelector("#serviceGroups");
  if (!mount) return;

  mount.innerHTML = http://dictionary.groups.map((group) => 
    <section class="service-group" aria-label="${group.title}">
      <h3 class="service-group__title" data-reveal><span>${group.icon}</span>${group.title}</h3>
      <div class="cards">
        ${group.services.map(serviceCardTemplate).join("")}
      </div>
    </section>
  ).join("");

  bindHoverImages(mount);
  observeReveals(mount);
}

function bindHoverImages(root = document) {
  root.querySelectorAll("img[data-hover]").forEach((img) => {
    const original = img.getAttribute("src");
    const hover = img.dataset.hover;
    if (!hover) return;

    const preload = new Image();
    preload.src = hover;

    img.closest(".card, .hero-card")?.addEventListener("pointerenter", () => {
      img.src = hover;
    });

    img.closest(".card, .hero-card")?.addEventListener("pointerleave", () => {
      img.src = original;
    });
  });
}

function observeReveals(root = document) {
  const items = root.querySelectorAll("[data-reveal]:not(.is-visible)");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      http://entry.target.classList.add("is-visible");
      currentObserver.unobserve(http://entry.target);
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function initLanguageSwitcher() {
  const select = document.querySelector("#languageSelect");
  if (!select) return;

  select.addEventListener("change", (event) => {
    const nextLang = http://event.target.value;
    if (!i18n[nextLang]) return;
    state.lang = nextLang;
    applyTranslations();
    renderServices();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  renderServices();
  bindHoverImages();
  observeReveals();
  initLanguageSwitcher();

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
Styles: === styles.css ===
:root {
  --bg: #fffaf0;
  --paper: #ffffff;
  --paper-soft: #fbf2df;
  --ink: #22202a;
  --muted: #6d6575;
  --brand: #ee7f4f;
  --brand-dark: #bb4f2d;
  --mint: #87d8bf;
  --blue: #7bb7ff;
  --line: rgba(34, 32, 42, .12);
  --shadow: 0 24px 70px rgba(89, 62, 32, .15);
  --radius-lg: 32px;
  --radius-md: 22px;
  --radius-sm: 14px;
  --max: 1180px;
}

 {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 12% 5%, rgba(135, 216, 191, .34), transparent 30rem),
    radial-gradient(circle at 88% 8%, rgba(238, 127, 79, .20), transparent 28rem),
    var(--bg);
  color: var(--ink);
  font-family: Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
}

.skip-link {
  position: fixed;
  left: 1rem;
  top: -4rem;
  z-index: 30;
  padding: .7rem 1rem;
  border-radius: 999px;
  background: var(--ink);
  color: white;
  transition: top .2s ease;
}

.skip-link:focus {
  top: 1rem;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: min(var(--max), calc(100% - 2rem));
  margin: 1rem auto 0;
  padding: .7rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 250, 240, .78);
  backdrop-filter: blur(18px);
  box-shadow: 0 14px 38px rgba(72, 54, 30, .08);
}

.brand,
.nav,
.language {
  display: flex;
  align-items: center;
}

.brand {
  gap: .55rem;
  text-decoration: none;
  font-weight: 800;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: var(--paper);
  box-shadow: inset 0 0 0 1px var(--line);
}

.nav {
  gap: .35rem;
}

.nav a {
  padding: .6rem .85rem;
  border-radius: 999px;
  text-decoration: none;
  color: var(--muted);
  font-weight: 700;
  transition: background .2s ease, color .2s ease, transform .2s ease;
}

.nav a:hover,
.nav a:focus-visible {
  background: var(--paper);
  color: var(--ink);
  transform: translateY(-1px);
}

.language {
  gap: .45rem;
  padding: .25rem .35rem .25rem .75rem;
  border-radius: 999px;
  background: var(--paper);
  font-weight: 700;
  color: var(--muted);
}

.language select {
  border: 0;
  border-radius: 999px;
  padding: .45rem .6rem;
  background: var(--paper-soft);
  color: var(--ink);
  font: inherit;
}

.hero,
.section,
.process,
.contact {
  width: min(var(--max), calc(100% - 2rem));
  margin: 0 auto;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, .75fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);
  min-height: calc(100vh - 6rem);
  padding: clamp(3rem, 7vw, 7rem) 0 4rem;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  margin: 0 0 1rem;
  padding: .35rem .75rem;
  border-radius: 999px;
  background: rgba(238, 127, 79, .13);
  color: var(--brand-dark);
  font-weight: 800;
  letter-spacing: .04em;
  text-transform: uppercase;
  font-size: .78rem;
}

h1,
h2,
h3 {
  margin: 0;
  line-height: 1.05;
  letter-spacing: -.04em;
}

h1,
h2 {
  font-family: "Playfair Display", Georgia, serif;
}

h1 {
  max-width: 850px;
  font-size: clamp(3.1rem, 8vw, 7.4rem);
}

h2 {
  font-size: clamp(2.15rem, 5vw, 4.5rem);
}

h3 {
  font-size: clamp(1.25rem, 2vw, 1.65rem);
}

.hero__lead,
.section__head p,
.contact__copy p {
  max-width: 700px;
  color: var(--muted);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  margin: 2rem 0 1.4rem;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 3rem;
  padding: .85rem 1.15rem;
  border: 0;
  border-radius: 999px;
  font: inherit;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button--primary {
  background: linear-gradient(135deg, var(--brand), #ffb15f);
  color: white;
  box-shadow: 0 14px 30px rgba(238, 127, 79, .32);
}

.button--ghost {
  background: var(--paper);
  color: var(--ink);
  box-shadow: inset 0 0 0 1px var(--line);
}

.trust-list {
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.trust-list li {
  padding: .55rem .8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, .72);
  color: var(--muted);
  font-weight: 700;
}

.hero__visual {
  position: relative;
  justify-self: center;
  width: min(390px, 100%);
}

.hero-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 45% 45% var(--radius-lg) var(--radius-lg);
  background: linear-gradient(180deg, #ffe2bd, #fff);
  box-shadow: var(--shadow);
}

.hero-card img {
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform .35s ease, filter .35s ease;
}

.hero-card:hover img {
  transform: scale(1.025);
  filter: saturate(1.08);
}

.floating-note {
  position: absolute;
  padding: .65rem .9rem;
  border-radius: 999px;
  background: var(--paper);
  box-shadow: var(--shadow);
  font-weight: 800;
}

.floating-note--top {
  right: -1rem;
  top: 18%;
}

.floating-note--bottom {
  left: -1rem;
  bottom: 14%;
}

.section {
  padding: clamp(3rem, 7vw, 6rem) 0;
}

.section--soft {
  width: 100%;
  max-width: none;
  padding-inline: max(1rem, calc((100vw - var(--max)) / 2));
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .45), rgba(255, 255, 255, .84)),
    var(--paper-soft);
}

.section__head {
  margin-bottom: 2rem;
}

.service-groups {
  display: grid;
  gap: 2.2rem;
}

.service-group {
  display: grid;
  gap: 1rem;
}

.service-group__title {
  display: flex;
  align-items: center;
  gap: .65rem;
  color: var(--brand-dark);
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, .86);
  box-shadow: 0 18px 45px rgba(72, 54, 30, .08);
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}

.card:hover,
.card:focus-within {
  transform: translateY(-6px);
  border-color: rgba(238, 127, 79, .38);
  box-shadow: 0 26px 65px rgba(72, 54, 30, .14);
}

.card__media {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 210px;
  padding: 1.1rem;
  background:
    radial-gradient(circle at 50% 45%, rgba(135, 216, 191, .28), transparent 11rem),
    linear-gradient(180deg, rgba(255, 177, 95, .18), transparent);
}

.card__media img {
  width: min(82%, 260px);
  max-height: 225px;
  object-fit: contain;
  transition: opacity .2s ease, transform .22s ease;
}

.card:hover .card__media img {
  transform: scale(1.04) rotate(-1deg);
}

.card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.15rem;
}

.card__section {
  margin-bottom: .55rem;
  color: var(--brand-dark);
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .05em;
}

.card p {
  margin: .75rem 0 0;
  color: var(--muted);
}

.process {
  padding: clamp(3rem, 7vw, 6rem) 0;
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.steps li {
  padding: 1.25rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--paper);
  box-shadow: 0 16px 45px rgba(72, 54, 30, .07);
}

.steps span {
  display: inline-flex;
  margin-bottom: 1.5rem;
  color: var(--brand);
  font-weight: 900;
}

.steps strong {
  display: block;
  font-size: 1.08rem;
}

.steps p {
  margin-bottom: 0;
  color: var(--muted);
}

.contact {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(280px, .8fr);
  gap: 2rem;
  padding: clamp(3rem, 7vw, 6rem) 0;
}

.contact__panel {
  display: grid;
  gap: .85rem;
  padding: 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, .78);
  box-shadow: var(--shadow);
}

.contact-link {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: .85rem;
  align-items: center;
  padding: 1rem;
  border-radius: var(--radius-md);
  background: var(--paper);
  text-decoration: none;
  transition: transform .2s ease, background .2s ease;
}

.contact-link:hover,
.contact-link:focus-visible {
  transform: translateX(4px);
  background: #fff3e6;
}

.contact-link span {
  grid-row: span 2;
  font-size: 1.5rem;
}

.contact-link em {
  color: var(--muted);
  font-style: normal;
}

.mini-form {
  display: grid;
  gap: .75rem;
  padding: 1rem;
}

.mini-form label {
  display: grid;
  gap: .4rem;
  font-weight: 800;
}

textarea {
  width: 100%;
  resize: vertical;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: .8rem;
  background: var(--paper);
  color: var(--ink);
  font: inherit;
}

textarea:focus {
  outline: 3px solid rgba(238, 127, 79, .22);
  border-color: var(--brand);
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: min(var(--max), calc(100% - 2rem));
  margin: 0 auto;
  padding: 2rem 0 3rem;
  color: var(--muted);
}

[data-reveal] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .55s ease, transform .55s ease;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 980px) {
  .site-header {
    align-items: stretch;
    border-radius: 28px;
    flex-wrap: wrap;
  }

  .nav {
    order: 3;
    width: 100%;
    justify-content: center;
  }

  .hero,
  .contact {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
  }

  .hero__visual {
    order: -1;
    width: min(300px, 78vw);
  }

  .cards,
  .steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .brand__text {
    display: none;
  }

  .nav a {
    padding-inline: .6rem;
    font-size: .9rem;
  }

  .hero__actions,
  .button {
    width: 100%;
  }

  .cards,
  .steps {
    grid-template-columns: 1fr;
  }

  .floating-note {
    display: none;
  }

  .site-footer {
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  ,
  ::before,
  ::after {
    transition-duration: .001ms !important;
    animation-duration: .001ms !important;
  }
}

# Отчёт по сайту

Создан лёгкий статический лендинг **«Technika s úsměvem»** для выездного мастера компьютерных услуг. Основная идея — тёплый, дружелюбный сайт без «технического холода»: крупная типографика, мягкий кремовый фон, оранжевые акценты, округлые карточки и спокойные микроанимации.

## Концепция и дизайн

- **Целевая аудитория:** частные клиенты, семьи, пожилые пользователи, родители школьников, малый бизнес.
- **Устройства:** mobile-first адаптация, затем планшеты и desktop.
- **Палитра:** кремовый фон `#fffaf0`, белые карточки, оранжевый акцент `#ee7f4f`, мятные и голубые декоративные оттенки.
- **Шрифты:** `Manrope` для интерфейса и текста, `Playfair Display` для выразительных заголовков.
- **UX-приёмы:** sticky-навигация, якоря к разделам, заметная CTA-кнопка, карточки услуг, reveal-анимации при прокрутке.
- **Изображения:** все карточки используют пары `./img/slug--main.png` и `./img/slug--hover.png`; при наведении изображение меняется на hover-версию.
- **Доступность:** есть skip-link, семантические секции, `alt`-тексты, видимые фокус-состояния, поддержка `prefers-reduced-motion`.

## Проверка контента

На сайте представлены все 12 услуг:

1. `cleaning` — 1.1 Компьютерная уборка
2. `upgrade` — 1.2 Модернизация
3. `software` — 1.3 Настройка программного обеспечения
4. `repair` — 1.4 Ремонт и утилизация
5. `webcam` — 2.1 Web-камеры
6. `alarm` — 2.2 Домашняя сигнализация
7. `appliances` — 2.3 Устройства умного дома
8. `literacy` — 3.1 Компьютерная грамотность
9. `tutor` — 3.2 Репетитор по информатике
10. `chess` — 3.3 Шахматы
11. `development` — 3.4 Высокие технологии
12. `design` — 4 Дизайн

Также добавлен контактный блок с `mailto:`, `tel:`, WhatsApp-ссылкой и простой формой через e-mail.

## Важное замечание по контактам

В записи Site content не было конкретного e-mail, телефона или мессенджера. Поэтому в коде стоят безопасные заменяемые значения:

- `kontakt@example.cz`
- `+420 000 000 000`
- `https://wa.me/420000000000`

Перед публикацией нужно заменить их на реальные контактные данные.

# Инструкция по сборке

Создайте папку проекта со следующей структурой:

```
site/
├── index.html
├── styles.css
├── app.js
├── package.json
├── vercel.json
├── robots.txt
├── manifest.webmanifest
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

## Куда положить код

- Из свойства **Html** скопировать файл `index.html`.
- Из свойства **Styles** скопировать файл `styles.css`.
- Из свойства **Scripts** скопировать файл `app.js`.
- Из свойства **Other** скопировать `package.json`, `vercel.json`, `robots.txt`, `manifest.webmanifest`.
- Изображения из страницы Main images положить в папку `./img/` и назвать строго по схеме `slug--main.png` и `slug--hover.png`.

## Мультиязычность

Основной словарь находится в `app.js` в объекте `i18n.cs`. Переключатель языка уже есть в интерфейсе. Чтобы добавить новый язык:

1. Добавить новый ключ в объект `i18n`, например `en`.
2. Скопировать структуру `cs` и перевести значения.
3. Добавить новый `<option value="en">EN</option>` в `index.html`.

# Развёртывание на Vercel

1. Создайте новый проект на Vercel.
2. Загрузите папку проекта или подключите Git-репозиторий.
3. Framework Preset оставьте **Other**.
4. Build Command можно оставить пустым: сайт статический и не требует сборки.
5. Output Directory оставьте корнем проекта.
6. После деплоя откройте домен Vercel и проверьте:
    - отображение всех 12 карточек;
    - загрузку изображений из `./img/`;
    - смену картинок при наведении;
    - работу якорей меню;
    - контактные ссылки после замены тестовых данных;
    - мобильную версию.

# Проверка качества

Код логически проверен:

- HTML5 использует семантические `header`, `main`, `section`, `footer`.
- CSS не содержит заведомо лишних селекторов и имеет адаптивные брейкпоинты.
- JS вынес тексты в расширяемый словарь `i18n`, рендерит услуги, меняет изображения по hover и не требует серверной части.
- Все изображения подключаются через `./img/slug--main.png` и `./img/slug--hover.png`.