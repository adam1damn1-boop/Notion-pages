const I18N = {
  cs: {
    nav: { services: "Služby", how: "Jak pracuji", learning: "Výuka", contact: "Kontakt" },
    hero: {
      eyebrow: "Výjezdní počítačové služby",
      title: "Technika má pomáhat, ne brát čas a klid.",
      lead: "Přijedu k vám domů, zkontroluji techniku a pomohu vyřešit problém.",
      primaryCta: "Domluvit bezplatnou diagnostiku",
      secondaryCta: "Prohlédnout služby"
    },
    facts: { travel: { title: "Výjezd" }, diagnostic: { title: "Diagnostika" }, format: { title: "Řešení" } },
    intro: { eyebrow: "Osobně, klidně, srozumitelně", title: "Technická pomoc, která šetří váš čas.", text: "Nejde jen o opravu počítače." },
    services: { eyebrow: "12 služeb", title: "Vyberte, s čím potřebujete pomoci", link: "Přejít ke kontaktu" },
    process: {
      eyebrow: "Jak probíhá spolupráce",
      title: "Bez nervů a bez technických hádanek",
      steps: [
        { title: "Krátce popíšete problém", text: "Stačí zpráva nebo telefonát." },
        { title: "Přijedu a ověřím situaci", text: "Výjezd i první diagnostika jsou zdarma." },
        { title: "Dostanete jasné vysvětlení", text: "Bez nátlaku a bez složitých slov." },
        { title: "Technika znovu slouží", text: "Po práci ukážu, co se změnilo." }
      ]
    },
    learning: { eyebrow: "Děti i dospělí", title: "Technologie se dají vysvětlit lidsky.", text: "Od prvního e-mailu až po umělou inteligenci." },
    contact: { eyebrow: "Kontakt", title: "Začněme krátkou domluvou.", text: "Napište nebo zavolejte.", email: "mailto:kontakt@example.com", phone: "+420 000 000 000", whatsapp: "WhatsApp" },
    footer: { copy: "© Klidný servis.", top: "Nahoru ↑" }
  }
};
I18N.cs.servicesList = ["cleaning","upgrade","software","repair","webcam","alarm","appliances","literacy","tutor","chess","development","design"].map((id, i) => ({ id, section: String(i + 1), group: "Služba", title: id, text: "Popis služby", alt: id }));

const state = { language: "cs" };
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = (p) => p.split(".").reduce((v, k) => v?.[k], I18N[state.language]) ?? p;

function applyStaticText() { $$('[data-i18n]').forEach((n) => { n.textContent = t(n.dataset.i18n); }); }
function renderServices() {
  const grid = $('[data-service-grid]');
  grid.innerHTML = I18N.cs.servicesList.map((s) => `<article class="service-card reveal" id="service-${s.id}"><div class="service-card__media"><img class="main" src="./img/${s.id}--main.png" alt="${s.alt}"><img class="hover" src="./img/${s.id}--hover.png" alt="" aria-hidden="true"></div><div class="service-card__body"><span class="service-card__meta">${s.section} · ${s.group}</span><h3>${s.title}</h3><p>${s.text}</p><a class="service-card__link" href="#contact">${I18N.cs.services.link} →</a></div></article>`).join('');
}
function renderSteps() {
  const steps = $('[data-steps]');
  steps.innerHTML = I18N.cs.process.steps.map((s, i) => `<article class="step"><span class="step__num">${i + 1}</span><h3>${s.title}</h3><p>${s.text}</p></article>`).join('');
}

document.addEventListener('DOMContentLoaded', () => { applyStaticText(); renderServices(); renderSteps(); $$('.reveal').forEach((e) => e.classList.add('is-visible')); });
