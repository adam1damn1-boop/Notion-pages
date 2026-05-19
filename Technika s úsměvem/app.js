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
  const main = `./img/${service.slug}--main.png`;
  const hover = `./img/${service.slug}--hover.png`;

  return `
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
  `;
}

function renderServices() {
  const dictionary = i18n[state.lang] || i18n.cs;
  const mount = document.querySelector("#serviceGroups");
  if (!mount) return;

  mount.innerHTML = dictionary.groups.map((group) => `
    <section class="service-group" aria-label="${group.title}">
      <h3 class="service-group__title" data-reveal><span>${group.icon}</span>${group.title}</h3>
      <div class="cards">
        ${group.services.map(serviceCardTemplate).join("")}
      </div>
    </section>
  `).join("");

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
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function initLanguageSwitcher() {
  const select = document.querySelector("#languageSelect");
  if (!select) return;

  select.addEventListener("change", (event) => {
    const nextLang = event.target.value;
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
