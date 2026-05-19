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
  grid.innerHTML = items.map((item, index) => {
    const hiddenClass = state.filter === "all" || state.filter === item.category ? "" : " is-hidden";
    return `
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
    `;
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
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
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
