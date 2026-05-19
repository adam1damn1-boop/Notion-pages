const SERVICES = [
  {slug:"cleaning",section:"1.1",title:"Počítačové čištění",file:"cisteni-pocitace.html",tone:"tall",text:"Když se notebook v létě rozpálí jako fén a počítač se vypíná zrovna ve chvíli, kdy ho potřebujete, často mu jen chybí čistý vzduch. Přijedu k vám domů zdarma, v klidu se na zařízení podívám a první diagnostiku udělám bezplatně. Vyčistím notebook nebo počítač, pomohu s chlazením a jednoduše vysvětlím, co bylo příčinou přehřívání. Po takové péči bývá technika tišší, stabilnější a zase se s ní dá pracovat bez nervů."},
  {slug:"upgrade",section:"1.2",title:"Modernizace",file:"modernizace.html",tone:"compact",text:"Když se starý počítač ještě zapne, ale každé okno otevírá věčnost, nemusí to hned znamenat nákup nového. Někdy stačí přidat rychlejší paměť, vyměnit úložiště nebo baterii a zařízení znovu poslouží na učení, práci i domácí věci. Přijedu zdarma, zkontroluji možnosti vašeho počítače a navrhnu rozumné řešení bez zbytečných výdajů. Získáte víc rychlosti, méně čekání a zůstane vám známé zařízení."},
  {slug:"software",section:"1.3",title:"Nastavení softwaru",file:"software.html",tone:"",text:"Někdy počítač není rozbitý, jen se ztratil v přebytečných programech, hláškách a nastaveních. Pomohu vyčistit a nastavit Windows, nainstalovat potřebné programy, zprovoznit internet a vše vysvětlím bez složitých slov. Díky bezplatnému příjezdu a první diagnostice nejdřív v klidu zjistíme, co práci opravdu brzdí. Výsledkem je počítač, kterému rozumíte a který zase slouží vám, ne naopak."},
  {slug:"repair",section:"1.4",title:"Oprava a recyklace",file:"oprava-recyklace.html",tone:"compact",text:"Když notebook přestane startovat nebo se počítač chová divně, nemusíte se s ním hned loučit. Přijedu zdarma na první kontrolu a férově řeknu, jestli má oprava smysl, nebo je lepší zařízení využít na náhradní díly. Někdy pomůže malá výměna, jindy je důležité neutrácet energii za beznadějný případ. Dostanete srozumitelnou odpověď a klid, že se rozhodujete bez spěchu."},
  {slug:"webcam",section:"2.1",title:"Webové kamery",file:"webkamery.html",tone:"tall",text:"Když doma zůstává starší rodič, dítě se vrací ze školy dřív než vy nebo chcete pohlídat chatu, kamera přinese pocit, že jste blízko i na dálku. Pomohu vybrat místo, připojím domácí i venkovní kamery a ukážu, jak obraz sledovat v telefonu. Příjezd a první diagnostika jsou zdarma, takže nejdřív společně zjistíme, kde kamera opravdu pomůže. Domov pak máte víc pod dohledem, i když jste zrovna jinde."},
  {slug:"alarm",section:"2.2",title:"Domácí alarm",file:"alarm.html",tone:"",text:"Není příjemné odjet na víkend a přemýšlet, jestli je u dveří, v garáži nebo na chatě všechno v pořádku. Nainstaluji jednoduchý domácí alarm s hlasitým upozorněním a zprávou do telefonu, bez zbytečně složité techniky. Nejdřív zdarma přijedu, podívám se na místo a navrhnu řešení podle vaší situace. Z domova budete odcházet s lehčím pocitem."},
  {slug:"appliances",section:"2.3",title:"Chytrá domácnost",file:"chytra-domacnost.html",tone:"compact",text:"Chytrá televize, zásuvka, žárovka nebo robotický vysavač mají život zjednodušit, ne vás nutit celý večer číst návody. Pomohu zařízení připojit, nastavit aplikaci a ukážu běžným jazykem, jak všechno používat. Bezplatný příjezd a první diagnostika pomohou zjistit, co už doma máte a jak to pohodlně propojit. Po nastavení se technika stane pomocníkem pro celou rodinu, ne záhadou v krabici."},
  {slug:"literacy",section:"3.1",title:"Počítačová gramotnost",file:"pocitacova-gramotnost.html",tone:"tall",text:"Když potřebujete počítač na e-maily, žádosti, fotky, banku nebo spojení s rodinou, ale každý krok vyvolává nejistotu, dá se to v klidu naučit. Vysvětluji bez spěchu, na jednoduchých příkladech a s respektem k vašemu tempu. Můžeme se učit u vás doma, na vašem zařízení a v prostředí, které znáte. Strach z obrazovky postupně mizí a místo něj přichází pocit: zvládnu to."},
  {slug:"tutor",section:"3.2",title:"Doučování informatiky",file:"douco-informatiky.html",tone:"",text:"Když dítě ve škole informatice nerozumí, nebo naopak chce víc, pomůže lidské a živé vysvětlení. Pomohu s úkoly, logikou, programováním i moderními digitálními nástroji bez tlaku. Výuku můžeme propojit s tím, co dítě opravdu zajímá — hrami, budoucím povoláním, vlastními projekty nebo běžnými situacemi. Informatika pak není nudná povinnost, ale užitečná dovednost."},
  {slug:"chess",section:"3.3",title:"Šachy",file:"sachy.html",tone:"compact",text:"Šachy učí dítě přemýšlet několik tahů dopředu, nebát se chyb a hledat lepší řešení v klidu. Mohu učit přátelskou formou přes úlohy, partie a srozumitelné vysvětlení, bez suchého biflování. Hodí se to nejen ke hře, ale i k matematice, soustředění a sebevědomí. Dítě se učí vyhrávat slušně, prohrávat v klidu a myslet samostatně."},
  {slug:"development",section:"3.4",title:"Vysoké technologie a AI",file:"technologie-ai.html",tone:"tall",text:"Svět se mění rychle a dětem nestačí jen mačkat tlačítka — je dobré chápat, jak technologie pomáhají při učení a tvorbě. Ukážu, jak využívat umělou inteligenci a moderní nástroje pro domácí úkoly, nápady, projekty i rozšíření obzoru. Všechno vysvětluji jednoduše, prakticky a bez pocitu, že je to příliš složité. Dítě začne vidět v technologiích ne hračku, ale silného pomocníka do budoucna."},
  {slug:"design",section:"4",title:"Design",file:"design.html",tone:"",text:"Když potřebujete leták pro službu, jednoduchou stránku, katalog nebo hezky upravený materiál, dobrý design pomůže lidem rychle pochopit vaši nabídku. Pomohu nápad zpracovat čistě, přehledně a bez zbytečného hluku. V klidu probereme zadání, vybereme styl pro vaši cílovou skupinu a připravíme materiál, který se dá s radostí ukázat zákazníkům. Hodí se to pro malé podnikání, oznámení, akce i osobní projekty."}
];

const I18N = {
  cs:{
    brand:"Technika bez тревоги",
    navServices:"Služby",
    navApproach:"Jak pracuji",
    navContact:"Kontakt",
    langLabel:"Jazyk",
    heroKicker:"Výjezd a první diagnostika zdarma",
    heroTitle:"Technika bez starostí",
    heroLead:"Technika má pomáhat, ne přidělávat starosti. Přijedu domů, vysvětlím vše lidsky a najdu řešení bez tlaku.",
    heroPrimary:"Vybrat službu",
    heroSecondary:"Domluvit konzultaci",
    heroNote:"Klidný servis pro domácnost, rodiče, děti i malé podnikání.",
    servicesTitle:"12 způsobů, jak vrátit technice klid",
    servicesIntro:"Každá služba má vlastní stránku, jasný popis a dvojici ilustrací z lokální složky ./img/.",
    approachTitle:"Bez stresu, bez složitých slov",
    bands:[
      ["01","Nejdřív klidně zjistíme, co se děje. Příjezd a první diagnostika jsou zdarma."],
      ["02","Řešení vysvětlím srozumitelně, včetně toho, kdy se oprava nevyplatí."],
      ["03","Po nastavení ukážu, jak techniku používat, aby zůstala pomocníkem."]
    ],
    contactTitle:"Chcete situaci nejdřív probrat?",
    contactText:"Napište mi, pokud chcete svou situaci nejdřív v klidu probrat. Přijedu zdarma, udělám první diagnostiku a vysvětlím možné řešení jednoduchými slovy.",
    email:"mailto:kontakt@example.com",
    messenger:"WhatsApp / Messenger",
    form:"Krátký e-mailový formulář",
    serviceBack:"Zpět na přehled služeb",
    serviceCTA:"Nejprve se ozvěte. V klidu probereme, co se děje a jaké řešení dává smysl.",
    prev:"Předchozí služba",
    next:"Další služba",
    footer:"Statický vícestránkový web připravený pro Vercel.",
    services:SERVICES
  }
};

function t(key){
  const lang = localStorage.getItem("site-lang") || "cs";
  return I18N[lang][key];
}
function img(slug,kind){return `./img/${slug}--${kind}.png`;}
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}
function excerpt(text){
  const clean = text.split(". ").slice(0,2).join(". ");
  return clean.endsWith(".") ? clean : clean + ".";
}
function headerActive(){
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.setAttribute("aria-pressed", btn.dataset.lang === (localStorage.getItem("site-lang") || "cs") ? "true" : "false");
    btn.addEventListener("click",()=>{
      localStorage.setItem("site-lang", btn.dataset.lang);
      location.reload();
    });
  });
}
function renderIndex(){
  const app = document.querySelector("#app");
  app.innerHTML = `
    <section class="section hero">
      <div class="reveal">
        <span class="eyebrow">${t("heroKicker")}</span>
        <h1>${t("heroTitle")}</h1>
        <p class="lead">${t("heroLead")}</p>
        <div class="hero-actions">
          <a class="button" href="#sluzby">${t("heroPrimary")}</a>
          <a class="button secondary" href="./kontakt.html">${t("heroSecondary")}</a>
        </div>
      </div>
      <div class="hero-card reveal">
        <img src="${img("hero","main")}" alt="Přátelský počítačový mistr" loading="eager" width="370" height="790">
        <div class="status-note">${t("heroNote")}</div>
      </div>
    </section>
    <section class="section" id="sluzby">
      <div class="section-head reveal">
        <h2>${t("servicesTitle")}</h2>
        <p>${t("servicesIntro")}</p>
      </div>
      <div class="service-grid">${SERVICES.map(card).join("")}</div>
    </section>
    <section class="section" id="pristup">
      <div class="section-head reveal">
        <h2>${t("approachTitle")}</h2>
      </div>
      <div class="bands">${t("bands").map(b=>`<article class="band reveal"><strong>${b[0]}</strong><p>${b[1]}</p></article>`).join("")}</div>
    </section>
    ${contactPanel()}
  `;
}
function card(service){
  return `<a class="service-card reveal" href="./${service.file}">
    <div class="service-art">
      <img class="main" src="${img(service.slug,"main")}" alt="${escapeHtml(service.title)}" loading="lazy">
      <img class="hover" src="${img(service.slug,"hover")}" alt="" loading="lazy" aria-hidden="true">
    </div>
    <div>
      <div class="service-meta"><span class="pill">${service.section}</span><span>Otevřít →</span></div>
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(excerpt(service.text))}</p>
    </div>
  </a>`;
}
function contactPanel(){
  return `<section class="section" id="kontakt">
    <div class="contact-panel reveal">
      <div>
        <span class="eyebrow">${t("navContact")}</span>
        <h2>${t("contactTitle")}</h2>
        <p>${t("contactText")}</p>
        <div class="cta-row">
          <a class="button" href="mailto:${t("email")}?subject=Počítačová pomoc">${t("form")}</a>
          <a class="button secondary" href="./kontakt.html">${t("navContact")}</a>
        </div>
      </div>
      <div class="contact-list">
        <a href="mailto:${t("email")}"><span>E-mail</span><span>${t("email")}</span></a>
        <a href="https://wa.me/" target="_blank" rel="noreferrer"><span>${t("messenger")}</span><span>↗</span></a>
      </div>
    </div>
  </section>`;
}
function renderService(slug){
  const service = SERVICES.find(item=>item.slug===slug) || SERVICES[0];
  const index = SERVICES.indexOf(service);
  const prev = SERVICES[(index - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(index + 1) % SERVICES.length];
  document.title = `${service.title} — ${t("brand")}`;
  document.querySelector("#app").innerHTML = `
    <section class="section service-hero ${service.tone}">
      <div class="service-cover reveal">
        <img src="${img(service.slug,"main")}" alt="${escapeHtml(service.title)}" loading="eager">
      </div>
      <div class="reveal">
        <span class="eyebrow">${service.section} · ${t("heroKicker")}</span>
        <h1>${escapeHtml(service.title)}</h1>
        <p class="lead">${escapeHtml(excerpt(service.text))}</p>
        <div class="hero-actions">
          <a class="button" href="./kontakt.html">${t("heroSecondary")}</a>
          <a class="button secondary" href="./index.html#sluzby">${t("serviceBack")}</a>
        </div>
      </div>
    </section>
    <section class="section article">
      <article class="article-copy reveal">
        <h2>${escapeHtml(service.title)} bez nervů</h2>
        <p>${escapeHtml(service.text)}</p>
        <p>${t("serviceCTA")}</p>
        <div class="next-nav">
          <a href="./${prev.file}">← ${t("prev")}
${escapeHtml(prev.title)}</a>
          <a href="./${next.file}">${t("next")} →
${escapeHtml(next.title)}</a>
        </div>
      </article>
      <figure class="context-figure reveal">
        <img src="${img(service.slug,"hover")}" alt="${escapeHtml(service.title)} — doplňková ilustrace" loading="lazy">
      </figure>
    </section>
  `;
}
function renderContact(){
  document.title = `${t("navContact")} — ${t("brand")}`;
  document.querySelector("#app").innerHTML = `
    <section class="section hero">
      <div class="reveal">
        <span class="eyebrow">${t("heroKicker")}</span>
        <h1>${t("contactTitle")}</h1>
        <p class="lead">${t("contactText")}</p>
        <div class="hero-actions">
          <a class="button" href="mailto:${t("email")}?subject=Počítačová pomoc">${t("form")}</a>
          <a class="button secondary" href="./index.html#sluzby">${t("serviceBack")}</a>
        </div>
      </div>
      <div class="hero-card reveal">
        <img src="${img("hero","hover")}" alt="Mistr připravený pomoci" loading="eager">
        <div class="status-note">E-mail v šabloně nahraďte skutečným kontaktem.</div>
      </div>
    </section>
    ${contactPanel()}
  `;
}
function initReveal(){
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>entry.target.classList.toggle("in", entry.isIntersecting));
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}
function boot(){
  headerActive();
  const page = document.body.dataset.page || "index";
  if(page === "index") renderIndex();
  else if(page === "contact") renderContact();
  else renderService(page);
  initReveal();
}
document.addEventListener("DOMContentLoaded", boot);
