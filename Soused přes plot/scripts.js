// Soused přes plot — i18n + UI interactions

// Texts pulled from the Site content record "Как для своих" — Czech is primary.
const I18N = {
	cs: {
		"meta.title": "Mistr od souseda — výjezdní počítačové služby",
		"meta.description": "Pomáhám s technikou jako svým vlastním. Výjezd a první diagnostika zdarma.",
		"a11y.skip": "Přeskočit na obsah",
		"brand.name": "Mistr od souseda",
		"nav.care": "Péče",
		"nav.security": "Bezpečnost",
		"nav.learning": "Učení",
		"nav.design": "Design",
		"nav.contact": "Kontakt",
		"hero.eyebrow": "Výjezdní počítačový mistr · Praha a okolí",
		"hero.title": "Pomáhám s technikou jako svým vlastním.",
		"hero.lead": "Profesionální péče o počítače, bezpečnost, doučování i design. Výjezd a první diagnostika jsou zdarma — platíte jen za práci a náhradní díly.",
		"hero.ctaPrimary": "Domluvit návštěvu",
		"hero.ctaSecondary": "Co umím",
		"hero.badge1": "✓ Výjezd zdarma",
		"hero.badge2": "✓ Diagnostika zdarma",
		"hero.badge3": "✓ Bez tlaku, bez závazku",
		"care.title": "Péče o počítač",
		"care.lead": "Jako bych se staral o vlastní techniku — opatrně, s rozmyslem a bez zbytečných nákladů.",
		"security.title": "Bezpečnost domova",
		"security.lead": "Bezpečí pro celou rodinu — kamery, alarmy a chytré spotřebiče, propojené tak, aby vám sloužily.",
		"learning.title": "Učení — pro dospělé i děti",
		"learning.lead": "Trpělivě a s respektem. Naučím vás i vaše děti pracovat s technikou tak, aby vám sloužila, ne otravovala.",
		"learning.callout": "Tajemství úspěchu ve škole: aby byly vaše děti konkurenceschopné, měly by už dnes začít rozumět umělé inteligenci. Ve škole to nenaučí — naučím je to já, tak jako bych připravoval vlastní dítě.",
		"design.title": "Design a vývoj",
		"design.lead": "Letáky, plakáty, webové stránky, katalogy i celé aplikace — k vaší značce přistoupím jako k vlastnímu projektu.",
		"design.cta": "Probrat nápad",
		"svc.cleaning.title": "Počítačový úklid",
		"svc.cleaning.body": "Když počítač začne hučet jako stará lednička a v létě se přehřívá, je nejvyšší čas na pořádnou očistu. Přijedu k vám domů zdarma, počítač i klávesnici opatrně vyčistím od prachu, vyměním teplovodivou pastu a promažu ventilátory. Zacházím s vaší technikou stejně, jako by patřila mojí rodině — opatrně a s rozmyslem.",
		"svc.upgrade.title": "Modernizace",
		"svc.upgrade.body": "Váš notebook už nestíhá ani načíst ranní zprávy? Není třeba hned kupovat nový — často stačí přidat rychlý SSD disk, více paměti nebo vyměnit baterii. Přijedu zdarma, podívám se a poradím vám tak poctivě, jako bych to dělal vlastnímu bratrovi.",
		"svc.software.title": "Nastavení softwaru",
		"svc.software.body": "Windows občas zatvrdne, zaplní se programy, které nikdo nepoužívá, nebo se chytne nepříjemný virus. Pečlivě vám systém vyčistím, nainstaluji vše potřebné pro práci, studium i zábavu, vyřeším potíže s internetem a klidně pomůžu i s vyplněním úředního formuláře. Pracuji přímo u vás doma, můžeme si u toho dát čaj.",
		"svc.repair.title": "Oprava a likvidace",
		"svc.repair.body": "Než starý počítač nebo notebook odnesete do popelnice — chvilku počkejte. Často stačí vyměnit jednu součástku a slouží další roky. Přijedu zdarma, podívám se a řeknu vám na rovinu, jestli má smysl opravovat. Pokud ne, můžu si přístroj vzít na náhradní díly, abyste se ho nemuseli zbavovat sami.",
		"svc.webcam.title": "Web-kamery",
		"svc.webcam.body": "Chcete vědět, jestli pošťák opravdu nechal balíček u dveří, nebo co dělá pes na zahradě, když nejste doma? Nainstaluji vám tolik vnitřních i venkovních kamer, kolik potřebujete — stačí, že máte doma internet nebo Wi-Fi. Přes mobil se podíváte domů kdykoli a můžete dokonce mluvit s návštěvou na dálku.",
		"svc.alarm.title": "Domácí alarm",
		"svc.alarm.body": "Bojíte se nezvaných hostů, když odjíždíte na chatu nebo na dovolenou? Namontuji přímo na dveře bytu nebo garáže dálkově ovládaný alarm s hlasitou sirénou a SMS upozorněním do mobilu. Budete spát klidně a nemusíte si dělat starosti o domov ani o své blízké.",
		"svc.appliances.title": "Chytrá domácnost",
		"svc.appliances.body": "Smart televize, chytrá žárovka, robotický vysavač — moderní spotřebiče dokážou krásné věci, jen je třeba je správně propojit. Přijdu k vám, propojím všechna zařízení do jednoho systému ovladatelného z mobilu a v klidu vás naučím, jak na to. Vysvětlím všechno tak, aby tomu rozuměla i babička.",
		"svc.literacy.title": "Počítačová gramotnost",
		"svc.literacy.body": "Bojíte se počítače jako čert kříže? Nebojte se — naučím vás zacházet s notebookem, mobilem i s umělou inteligencí krok za krokem, vlídně a bez posměchu. Žádné hloupé otázky neexistují, ptejte se na cokoliv. Vysvětlím to tak, jak bych vysvětloval vlastní mamince.",
		"svc.tutor.title": "Doučování informatiky",
		"svc.tutor.body": "Mám vysokoškolské vzdělání v oboru IT a léta zkušeností s vyučováním studentů ještě z doktorského studia. Pomůžu vašemu dítěti pochopit informatiku tak, aby ji ve škole nejen zvládalo, ale i bavilo. Učím trpělivě a s respektem, jako bych učil vlastního syna nebo dceru.",
		"svc.chess.title": "Šachy",
		"svc.chess.body": "Šachy jsou nejlepší trénink pro dětský mozek — rozvíjejí logiku, trpělivost a schopnost přemýšlet dopředu. Vaše dítě se naučí soustředit a zvládat prohry s klidem a důstojností. Hraji už od dětství a vím, jak hru představit tak, aby skutečně bavila.",
		"svc.development.title": "Vysoké technologie",
		"svc.development.body": "Umělá inteligence není sci-fi, je to nástroj, který může vaše dítě posunout o krok dál než spolužáky. Ukážu mu, jak s ní pracovat chytře — ne aby jen opisovalo odpovědi, ale aby umělo porozumět složitým věcem a řešit úkoly samostatně.",
		"svc.design.title": "Design na míru",
		"svc.design.body": "Jsem diplomovaný vývojář softwaru s praxí. Navrhnu vám stylové letáky, plakáty, webové stránky nebo katalog vašich služeb tak, aby vypadaly profesionálně a přivedly vám zákazníky. K vašemu nápadu se budu chovat jako k vlastnímu projektu — s péčí a pozorností ke každému detailu.",
		"contact.eyebrow": "Kontakt",
		"contact.title": "Domluvíme se v klidu, jako sousedé přes plot.",
		"contact.body": "Napište mi nebo zavolejte — vyslechnu vás, poradím a teprve potom se dohodneme na návštěvě. Bez tlaku a bez závazku.",
		"contact.phone": "+420 777 123 456",
		"form.name": "Jak vám mám říkat?",
		"form.contact": "Telefon nebo e-mail",
		"form.message": "S čím vám můžu pomoci?",
		"form.submit": "Odeslat zprávu",
		"form.note": "Odeslání otevře váš poštovní program — žádné servery, žádné cookies.",
		"footer.tagline": "Mistr od souseda · pomáhám s technikou jako svým vlastním",
		"footer.top": "Nahoru"
	},
	en: {
		"meta.title": "The neighborhood master — on-site computer services",
		"meta.description": "I help with your tech the way I'd help my own family. Free call-out and first diagnostics.",
		"a11y.skip": "Skip to content",
		"brand.name": "The neighborhood master",
		"nav.care": "Care",
		"nav.security": "Security",
		"nav.learning": "Learning",
		"nav.design": "Design",
		"nav.contact": "Contact",
		"hero.eyebrow": "On-site computer master · Prague and around",
		"hero.title": "I treat your tech the way I'd treat my own.",
		"hero.lead": "Professional computer care, security, tutoring and design. The call-out and first diagnostics are free — you pay only for the work and parts.",
		"hero.ctaPrimary": "Book a visit",
		"hero.ctaSecondary": "What I do",
		"hero.badge1": "✓ Free call-out",
		"hero.badge2": "✓ Free diagnostics",
		"hero.badge3": "✓ No pressure, no commitment",
		"care.title": "Computer care",
		"care.lead": "Calm, careful work — as if I were taking care of my own gear.",
		"security.title": "Home security",
		"security.lead": "Safety for the whole family — cameras, alarms and smart appliances, set up to actually help you.",
		"learning.title": "Learning — for adults and kids",
		"learning.lead": "Patient, respectful teaching for grown-ups and children alike.",
		"learning.callout": "The secret to doing well at school: kids who already understand AI today are a step ahead. Schools won't teach it — but I will, the way I'd prepare my own child.",
		"design.title": "Design & development",
		"design.lead": "Flyers, posters, websites, catalogues or full apps — I treat your brand like my own project.",
		"design.cta": "Discuss your idea",
		"svc.cleaning.title": "Computer cleaning",
		"svc.cleaning.body": "When your PC hums like an old fridge and overheats in summer, it's time for a deep clean. I come to you for free, dust out the PC and keyboard, replace the thermal paste and lubricate the fans — gently and thoughtfully.",
		"svc.upgrade.title": "Upgrades",
		"svc.upgrade.body": "Laptop too slow to even open the morning news? Often a fast SSD, extra memory or a fresh battery is enough. I'll come for free, take a look and give you honest advice — no pressure.",
		"svc.software.title": "Software setup",
		"svc.software.body": "Windows freezes, fills up with useless apps or catches a virus. I'll clean it up, install everything you need for work, study or fun, fix internet issues and even help with official forms — right at your home.",
		"svc.repair.title": "Repair & recycling",
		"svc.repair.body": "Before you throw out an old computer or laptop — wait. Often one replaced part means another few years of life. I'll come for free and tell you honestly whether repair makes sense.",
		"svc.webcam.title": "Web cameras",
		"svc.webcam.body": "Want to know if the postman really left the parcel by the door, or what the dog is up to in the garden? I'll install as many indoor and outdoor cameras as you need, viewable from your phone anytime.",
		"svc.alarm.title": "Home alarm",
		"svc.alarm.body": "Worried about uninvited guests while you're away? I'll mount a remotely controlled alarm with a loud siren and SMS notifications right on your apartment or garage door.",
		"svc.appliances.title": "Smart home",
		"svc.appliances.body": "Smart TV, smart bulbs, robot vacuum — I'll connect everything into one system controllable from your phone and patiently show you how to use it.",
		"svc.literacy.title": "Computer literacy",
		"svc.literacy.body": "Afraid of computers? Don't be — I'll teach you how to use a laptop, phone and even AI step by step, kindly and without judgement. No question is silly.",
		"svc.tutor.title": "Computer-science tutoring",
		"svc.tutor.body": "Master's degree in IT and years of teaching experience. I'll help your child not only get through computer science at school, but actually enjoy it.",
		"svc.chess.title": "Chess",
		"svc.chess.body": "Chess is the best training for a child's brain — logic, patience and thinking ahead. I've played since childhood and know how to make it genuinely fun.",
		"svc.development.title": "Future tech",
		"svc.development.body": "AI is a tool that can put your child a step ahead of classmates. I'll show them how to use it wisely — not just copy answers, but understand and solve problems on their own.",
		"svc.design.title": "Tailored design",
		"svc.design.body": "I'm a qualified software developer. I'll design stylish flyers, posters, websites or service catalogues so they look professional and bring customers.",
		"contact.eyebrow": "Get in touch",
		"contact.title": "Let's chat like neighbours over the fence.",
		"contact.body": "Drop me a line or a call — I'll listen, advise, and only then we'll agree on a visit. No pressure, no commitment.",
		"contact.phone": "+420 777 123 456",
		"form.name": "What should I call you?",
		"form.contact": "Phone or e-mail",
		"form.message": "How can I help?",
		"form.submit": "Send a message",
		"form.note": "Submitting opens your e-mail app — no servers, no cookies.",
		"footer.tagline": "The neighborhood master · I treat your tech like my own",
		"footer.top": "Back to top"
	}
};

const DEFAULT_LANG = "cs";
let currentLang = (localStorage.getItem("lang") || DEFAULT_LANG);
if (!I18N[currentLang]) currentLang = DEFAULT_LANG;

function t(key, lang = currentLang) {
	return (I18N[lang] && I18N[lang][key]) || (I18N[DEFAULT_LANG] && I18N[DEFAULT_LANG][key]) || "";
}

function applyI18n(lang) {
	currentLang = lang;
	document.documentElement.lang = lang;
	localStorage.setItem("lang", lang);
	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.getAttribute("data-i18n");
		const attr = el.getAttribute("data-i18n-attr");
		const value = t(key, lang);
		if (!value) return;
		if (attr) {
			el.setAttribute(attr, value);
		} else if (el.tagName === "TITLE") {
			document.title = value;
		} else {
			el.textContent = value;
		}
	});
	document.querySelectorAll(".lang-switcher .lang").forEach((btn) => {
		const isActive = btn.dataset.lang === lang;
		btn.classList.toggle("is-active", isActive);
		btn.setAttribute("aria-pressed", String(isActive));
	});
}

// Form -> mailto fallback (no backend needed)
function sendMail(event) {
	event.preventDefault();
	const form = event.target;
	const name = form.name.value.trim();
	const contact = form.contact.value.trim();
	const message = form.message.value.trim();
	const subject = encodeURIComponent(`Poptávka od ${name || "klienta"}`);
	const body = encodeURIComponent(`Jméno: ${name}\nKontakt: ${contact}\n\n${message}`);
	window.location.href = `mailto:mistr@soused.cz?subject=${subject}&body=${body}`;
	return false;
}
window.sendMail = sendMail;

// Reveal-on-scroll
function setupReveal() {
	const targets = document.querySelectorAll(".card, .section-head, .callout, .hero-portrait");
	targets.forEach((el) => el.classList.add("reveal"));
	if (!("IntersectionObserver" in window)) {
		targets.forEach((el) => el.classList.add("is-visible"));
		return;
	}
	const io = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				io.unobserve(entry.target);
			}
		});
	}, { rootMargin: "-40px 0px", threshold: 0.08 });
	targets.forEach((el) => io.observe(el));
}

// Mobile menu toggle
function setupNavToggle() {
	const toggle = document.querySelector(".nav-toggle");
	const nav = document.querySelector(".nav");
	if (!toggle || !nav) return;
	toggle.addEventListener("click", () => {
		const open = nav.classList.toggle("is-open");
		toggle.setAttribute("aria-expanded", String(open));
	});
	nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
		nav.classList.remove("is-open");
		toggle.setAttribute("aria-expanded", "false");
	}));
}

function setupLangSwitcher() {
	document.querySelectorAll(".lang-switcher .lang").forEach((btn) => {
		btn.addEventListener("click", () => applyI18n(btn.dataset.lang));
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = new Date().getFullYear();
	setupLangSwitcher();
	setupNavToggle();
	applyI18n(currentLang);
	setupReveal();
});