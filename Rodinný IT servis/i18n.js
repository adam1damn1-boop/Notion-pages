const SERVICES = [
  {key:"cleaning", section:"1.1", file:"uklid-pocitace.html"},
  {key:"upgrade", section:"1.2", file:"modernizace.html"},
  {key:"software", section:"1.3", file:"software.html"},
  {key:"repair", section:"1.4", file:"oprava.html"},
  {key:"webcam", section:"2.1", file:"kamery.html"},
  {key:"alarm", section:"2.2", file:"alarm.html"},
  {key:"appliances", section:"2.3", file:"chytra-domacnost.html"},
  {key:"literacy", section:"3.1", file:"pocitacova-gramotnost.html"},
  {key:"tutor", section:"3.2", file:"doucovani.html"},
  {key:"chess", section:"3.3", file:"sachy.html"},
  {key:"development", section:"3.4", file:"ai-technologie.html"},
  {key:"design", section:"4", file:"design.html"}
];

const I18N = {
  cs: {
    nav:{brand:"Rodinný IT servis",services:"Služby",contact:"Kontakt",language:"Jazyk"},
    common:{cta:"Domluvit návštěvu",contactButton:"Kontaktovat",free:"Výjezd a první diagnostika zdarma",backHome:"Zpět na přehled",next:"Další služba",previous:"Předchozí služba"},
    footer:{copy:"© Rodinný IT servis",free:"První diagnostika zdarma",back:"Zpět na služby"},
    home:{
      eyebrow:"Výjezd a první diagnostika zdarma",
      title:"Počítačové starosti? Postarám se o ně jako o vlastní rodinu.",
      lead:"Klidný domácí servis pro počítače, bezpečnost, výuku i drobný design. Bez studu, bez spěchu, srozumitelně.",
      viewServices:"Prohlédnout služby",
      heroCaption:"Technika má sloužit rodině, ne ji stresovat.",
      promiseTitle:"Rodinný přístup:",
      promise:"nejdřív vysvětlím, co se děje, potom společně rozhodneme, co má smysl opravit.",
      gridEyebrow:"12 služeb",
      gridTitle:"Pomoc pro domácnost, děti i malé podnikání"
    },
    contact:{
      eyebrow:"Ozvěte se",
      title:"Když technika doma dělá naschvál",
      text:"Napište mi nebo zavolejte, kdykoliv vám doma něco s technikou „dělá naschvál“. První konzultace a výjezd jsou zdarma – a možná spolu zjistíme, že problém je menší, než se zdál.",
      caption:"Stačí krátká zpráva: co se stalo, kde jste a kdy se vám hodí návštěva.",
      formTitle:"Rychlá zpráva",
      send:"Odeslat zprávu"
    },
    services:{
      cleaning:{
        title:"Počítačová údržba",
        subtitle:"Aby rodinné fotky i školní úkoly zůstaly v bezpečí.",
        text:"Pamatujete si, jak váš notebook v létě začal hučet jako stará lednička a babička se bála, že vybuchne? Stačí jednou ročně pořádný úklid uvnitř – zbavím počítač prachu, vyměním teplovodivou pastu a promažu ventilátory. Přijedu k vám domů zdarma a první diagnostika je také zdarma. Vaše rodinné fotky i školní úkoly tak zůstanou v bezpečí a stroj zase poběží tiše jako kotě.",
        points:["Čištění počítače, notebooku i klávesnice","Výměna teplovodivé pasty","Promazání ventilátorů","Zlepšení chlazení"],
        alt:"Čištění počítače"
      },
      upgrade:{
        title:"Modernizace",
        subtitle:"Starý počítač může ještě dlouho sloužit.",
        text:"Když dědeček říká, že počítač je už pomalejší než on sám u snídaně, není potřeba hned kupovat nový. Vyměním pevný disk za rychlé SSD, přidám paměť nebo nainstaluji novou baterii do notebooku. Vaše rodina ušetří tisíce a starý kamarád ještě dlouho poslouží dětem na úkoly i rodičům na filmy. Přijedu k vám zdarma a poradím, co se opravdu vyplatí.",
        points:["Rychlé SSD disky","Rozšíření operační paměti","Výměna baterie v notebooku","Rozumné doporučení bez zbytečných nákupů"],
        alt:"Modernizace počítače"
      },
      software:{
        title:"Nastavení software",
        subtitle:"Windows, programy, formuláře a klid u kuchyňského stolu.",
        text:"Maminka chtěla vyplnit elektronickou žádost na úřad a počítač se rozhodl zrovna v tu chvíli zamrznout? Pročistím Windows od zbytečností a virů, nainstaluji vše, co rodina potřebuje – od školního programu po video hovory s prarodiči. Pomůžu i s registrací na webech, žádostmi a formuláři. Výjezd k vám i první diagnostika jsou samozřejmě zdarma.",
        points:["Vyčištění a nastavení Windows","Instalace potřebných programů","Pomoc s internetem a účty","Formuláře, žádosti a registrace"],
        alt:"Nastavení software"
      },
      repair:{
        title:"Oprava a recyklace",
        subtitle:"Než techniku opláčete, pojďme ji zkusit zachránit.",
        text:"Bratr upustil notebook ze stolu a děti už ho oplakaly jako starého psa? Nespěchejte s vyhozením. Často stačí vyměnit jednu součástku a stroj zase ožije. Pokud už opravdu dosloužil, odvezu ho a využiji aspoň díly do jiných počítačů. Přijedu zdarma, podívám se zdarma a teprve potom společně rozhodneme, co dál.",
        points:["Diagnostika závady","Výměna drobných dílů","Rozhodnutí oprava vs. nákup","Ekologické využití součástek"],
        alt:"Oprava notebooku"
      },
      webcam:{
        title:"Web-kamery",
        subtitle:"Mějte blízké i chatu pod dohledem odkudkoliv.",
        text:"Bojíte se, jestli starší rodiče doma neupadli, nebo chcete vidět, kdo zvoní u chaty během dovolené? Nainstaluji vám kolik kamer potřebujete – uvnitř, venku, u vchodu. Stačí mobil a máte rodinu pod dohledem odkudkoliv. Můžete s nimi dokonce mluvit přes reproduktor. Výjezd a první návrh řešení jsou bez poplatku.",
        points:["Vnitřní i venkovní kamery","Přístup z mobilu","Obousměrná komunikace","Návrh vhodného umístění"],
        alt:"Bezpečnostní kamera"
      },
      alarm:{
        title:"Domácí signalizace",
        subtitle:"Když domov zůstane sám, nemusí být bez ochrany.",
        text:"Když celá rodina odjíždí o víkendu k babičce a v bytě zůstane jen mlčící zámek, je hezké vědět, že vás dům ochrání sám. Namontuji přímo na dveře bytu, chaty nebo garáže dálkově ovládaný alarm s hlasitou sirénou a SMS na váš telefon. Nepozvaný host si dvakrát rozmyslí, jestli pokračovat. Přijedu zdarma a poradím, co se hodí právě k vám.",
        points:["Alarm na byt, chatu i garáž","Hlasitá siréna","SMS upozornění","Dálkové ovládání"],
        alt:"Domácí alarm"
      },
      appliances:{
        title:"Chytrá domácnost",
        subtitle:"Světlo, konvice i televize v jedné jednoduché aplikaci.",
        text:"Představte si, že ráno řeknete „dobré ráno“ a v kuchyni se rozsvítí, konvice začne hřát a televize pustí zprávy. Připojím vám chytré spotřebiče do jedné aplikace v mobilu – žárovky, termostat, robotický vysavač i Smart TV. Naučím celou rodinu, jak vše ovládat, včetně tatínka, který „těmto novotám nevěří“. Výjezd k vám je zdarma.",
        points:["Připojení chytrých zařízení","Nastavení aplikace v mobilu","Smart TV a domácí technika","Trpělivé zaučení rodiny"],
        alt:"Chytrá domácnost"
      },
      literacy:{
        title:"Počítačová gramotnost",
        subtitle:"Žádná hloupá otázka neexistuje.",
        text:"Vnučka vám poslala fotky do e-mailu a vy nevíte, kde je hledat? Naučím vás v klidu a bez stresu používat počítač, mobil i moderní nástroje včetně umělé inteligence. Hodiny vedu doma u vás, vlastním tempem, žádné hloupé otázky neexistují. První návštěva a krátká ukázka jsou zdarma – uvidíte, že to zvládnete.",
        points:["Počítač a telefon bez stresu","E-mail, fotky a internet","Moderní nástroje včetně AI","Výuka doma vaším tempem"],
        alt:"Počítačová výuka pro dospělé"
      },
      tutor:{
        title:"Doučování informatiky",
        subtitle:"Když předmět začne dávat smysl, přestane být nudný.",
        text:"Když syn přinese pětku z informatiky a tváří se, že je to nuda, často jen nepotkal správného učitele. Mám vysokoškolské IT vzdělání a zkušenosti s výukou studentů z dob doktorátu. Vysvětlím látku tak, aby dávala smysl, a ukážu, proč může být programování zábavnější než video na telefonu. První setkání u vás doma – bez poplatku.",
        points:["Vysokoškolské IT vzdělání","Srozumitelné vysvětlení látky","Programování jako hra","První setkání zdarma"],
        alt:"Doučování informatiky"
      },
      chess:{
        title:"Šachy",
        subtitle:"Tichý trénink soustředění, trpělivosti a logiky.",
        text:"Dcera nedokáže vydržet u úkolu déle než pět minut? Šachy jsou tichý zázrak na soustředění, trpělivost i logiku. Hraji opravdu dobře a umím dětem vysvětlit hru tak, aby je bavila už od první partie. Hodiny můžou být přímo u vás u kuchyňského stolu. První ukázková lekce je bez poplatku – ať si rodina vyzkouší, jestli jim to sedne.",
        points:["Logika a soustředění","Výuka od první partie","Lekce u vás doma","Ukázková lekce zdarma"],
        alt:"Šachy pro děti"
      },
      development:{
        title:"Vysoké technologie a AI",
        subtitle:"Děti se naučí používat AI tvořivě, ne jen na rychlé odpovědi.",
        text:"Chcete, aby vaše dítě nebylo za pár let mezi těmi, kdo „si neví rady s počítačem“? Naučím školáky používat umělou inteligenci nejen na rychlé odpovědi, ale i na psaní, učení a vlastní tvorbu. Lze to brát jako kroužek, nebo jako pomoc s domácími úkoly. Děti najednou zjistí, že jim učení jde, a vy uvidíte, jak rostou. První návštěva u vás je zdarma.",
        points:["AI pro učení a tvorbu","Pomoc s domácími úkoly","Rozšíření technického obzoru","Kroužek nebo individuální lekce"],
        alt:"Děti a nové technologie"
      },
      design:{
        title:"Design a web",
        subtitle:"Leták, katalog nebo web naladěný na váš příběh.",
        text:"Otevíráte malou kavárnu, prodáváte ruční výrobky, nebo plánujete sousedský bazárek? Jsem diplomovaný vývojář a vytvořím pro vás stylové letáky, plakáty, katalog i celý web. Vše naladím na vás a vaše zákazníky, ne podle šablon z internetu. Pojďme to probrat u kávy – první návštěva a návrh jsou bez poplatku.",
        points:["Letáky a plakáty","Katalogy zboží a služeb","Webové stránky","Osobitý návrh bez šablon"],
        alt:"Designové služby"
      }
    }
  }
};

const getLang = () => localStorage.getItem("site-lang") || "cs";
const t = (path) => path.split(".").reduce((acc, part) => acc && acc[part], I18N[getLang()]) || path;

function applyI18n(){
  document.documentElement.lang = getLang();
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
}

function renderGrid(){
  const grid = document.querySelector("[data-service-grid]");
  if(!grid) return;
  grid.innerHTML = SERVICES.map((svc, index) => {
    const item = I18N[getLang()].services[svc.key];
    return `<a class="service-card reveal" href="./${svc.file}" style="animation-delay:${Math.min(index*0.04,.35)}s">
      <div class="service-card__image">
        <img class="main" src="./img/${svc.key}--main.png" alt="${item.alt}" loading="lazy">
        <img class="hover" src="./img/${svc.key}--hover.png" alt="" loading="lazy" aria-hidden="true">
      </div>
      <div class="service-card__body">
        <span class="service-card__meta">${svc.section}</span>
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
      </div>
    </a>`;
  }).join("");
}

function renderServicePage(){
  const mount = document.querySelector("[data-service-page]");
  if(!mount) return;
  const key = document.body.dataset.service;
  const index = SERVICES.findIndex(s => s.key === key);
  const svc = SERVICES[index];
  const item = I18N[getLang()].services[key];
  const prev = SERVICES[(index - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(index + 1) % SERVICES.length];
  mount.innerHTML = `
    <section class="hero service-hero">
      <div class="hero__text reveal">
        <p class="eyebrow">${svc.section} · ${t("common.free")}</p>
        <h1>${item.title}</h1>
        <p class="lead">${item.subtitle}</p>
        <div class="hero__actions"><a class="button" href="./kontakt.html">${t("common.cta")}</a><a class="button button--soft" href="./index.html">${t("common.backHome")}</a></div>
      </div>
      <figure class="hero-card reveal">
        <img src="./img/${key}--main.png" alt="${item.alt}" loading="eager">
        <figcaption>${item.subtitle}</figcaption>
      </figure>
    </section>
    <section class="section service-body">
      <article class="story reveal">
        <p>${item.text}</p>
        <ul class="feature-list">${item.points.map(point => `<li>${point}</li>`).join("")}</ul>
        <nav class="page-nav" aria-label="Navigace mezi službami">
          <a class="button button--soft" href="./${prev.file}">← ${t("common.previous")}</a>
          <a class="button" href="./${next.file}">${t("common.next")} →</a>
        </nav>
      </article>
      <figure class="side-image reveal">
        <img src="./img/${key}--hover.png" alt="${item.alt} – detail" loading="lazy">
      </figure>
    </section>`;
}

function initLanguage(){
  const select = document.querySelector("[data-language]");
  if(!select) return;
  select.value = getLang();
  select.addEventListener("change", () => {
    localStorage.setItem("site-lang", select.value);
    applyI18n(); renderGrid(); renderServicePage();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  applyI18n();
  renderGrid();
  renderServicePage();
});
