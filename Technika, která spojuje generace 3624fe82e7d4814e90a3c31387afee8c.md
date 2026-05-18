# Technika, která spojuje generace

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Výjezdní počítačové služby pro domácnosti: servis, bezpečnost, výuka i design. Výjezd a první diagnostika zdarma.">
	<meta name="theme-color" content="#203d4f">
	<title>Technika, která spojuje generace</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="./css/styles.css">
</head>
<body>
	<a class="skip-link" href="#main">Přejít na obsah</a>

	<header class="site-header" data-header>
		<nav class="nav shell" aria-label="Hlavní navigace">
			<a class="brand" href="#top" aria-label="Domů">
				R
				
					Radka servis
					počítače pro celou rodinu
				</span>
			</a>

			<button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-menu" data-menu-toggle>
				
				Otevřít menu
			</button>

			<div class="nav__menu" id="nav-menu" data-menu>
				<a href="#services" data-i18n="http://nav.services">Služby</a>
				<a href="#approach" data-i18n="nav.approach">Jak pracuji</a>
				<a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
				<label class="language" for="language-select">
					Jazyk
					<select id="language-select" data-language-switcher aria-label="Výběr jazyka">
						<option value="cs">CS</option>
					</select>
				</label>
			</div>
		</nav>
	</header>

	<main id="main">
		<section class="hero shell" id="top">
			<div class="hero__copy reveal">
				<p class="eyebrow" data-i18n="hero.eyebrow">Výjezd a první diagnostika zdarma</p>
				<h1 data-i18n="hero.title">Technika, která spojuje generace.</h1>
				<p class="hero__lead" data-i18n="hero.lead">Pomohu vaší rodině s počítačem, mobilem, bezpečností, výukou i designem — klidně, srozumitelně a přímo u vás doma.</p>
				<div class="hero__actions">
					<a class="button button--primary" href="#contact" data-i18n="hero.ctaPrimary">Domluvit návštěvu</a>
					<a class="button button--ghost" href="#services" data-i18n="hero.ctaSecondary">Prohlédnout služby</a>
				</div>
				<ul class="hero__badges" aria-label="Výhody">
					<li data-i18n="hero.badge1">Bez závazku</li>
					<li data-i18n="hero.badge2">Doma u vás</li>
					<li data-i18n="hero.badge3">Pro děti i prarodiče</li>
				</ul>
			</div>

			<div class="hero__visual reveal">
				<div class="hero-card">
					<picture>
						<img class="hero-card__img hero-card__img--main" src="./img/hero--main.png" width="370" height="790" alt="Počítačový mistr připravený pomoci rodině" loading="eager">
						<img class="hero-card__img hero-card__img--hover" src="./img/hero--hover.png" width="370" height="790" alt="" aria-hidden="true" loading="lazy">
					</picture>
					<div class="hero-card__note">
						<strong data-i18n="hero.noteTitle">Klid pro celou rodinu</strong>
						Od tichého notebooku po bezpečný domov.
					</div>
				</div>
			</div>
		</section>

		<section class="section intro shell" id="approach">
			<div class="section__heading reveal">
				<p class="eyebrow" data-i18n="approach.eyebrow">Jednoduchý postup</p>
				<h2 data-i18n="approach.title">Nejdřív se podívám, potom se rozhodnete.</h2>
			</div>
			<div class="steps">
				<article class="step reveal">
					01
					<h3 data-i18n="approach.step1Title">Krátce popíšete problém</h3>
					<p data-i18n="approach.step1Text">Stačí telefonát nebo zpráva. Řeknete, co nefunguje a komu má technika pomáhat.</p>
				</article>
				<article class="step reveal">
					02
					<h3 data-i18n="approach.step2Title">Přijedu a zkontroluji situaci</h3>
					<p data-i18n="approach.step2Text">Výjezd i první diagnostika jsou zdarma. Vysvětlím možnosti bez složitých pojmů.</p>
				</article>
				<article class="step reveal">
					03
					<h3 data-i18n="approach.step3Title">Platíte jen za práci</h3>
					<p data-i18n="approach.step3Text">Vyberete řešení, které dává smysl. Bez tlaku, bez zbytečných nákupů.</p>
				</article>
			</div>
		</section>

		<section class="section services" id="services">
			<div class="shell">
				<div class="section__heading reveal">
					<p class="eyebrow" data-i18n="services.eyebrow">12 služeb pro domácnost</p>
					<h2 data-i18n="services.title">Technická pomoc od údržby po vzdělávání.</h2>
					<p data-i18n="services.subtitle">Karty reagují na najetí myší nebo fokus — stejně jako dobrá technika reaguje na potřeby vaší rodiny.</p>
				</div>

				<div class="service-group reveal">
					<h3 data-i18n="http://groups.care">Údržba počítače</h3>
					<div class="services__grid" data-service-group="care"></div>
				</div>

				<div class="service-group reveal">
					<h3 data-i18n="http://groups.security">Bezpečnost a chytrá domácnost</h3>
					<div class="services__grid" data-service-group="security"></div>
				</div>

				<div class="service-group reveal">
					<h3 data-i18n="groups.learning">Výuka pro dospělé i děti</h3>
					<div class="services__grid" data-service-group="learning"></div>
				</div>

				<div class="service-group reveal">
					<h3 data-i18n="http://groups.design">Design</h3>
					<div class="services__grid services__grid--single" data-service-group="design"></div>
				</div>
			</div>
		</section>

		<section class="section promise shell">
			<div class="promise__panel reveal">
				<div>
					<p class="eyebrow" data-i18n="promise.eyebrow">Rodinný klid</p>
					<h2 data-i18n="promise.title">Méně vysvětlování po telefonu, více společného času.</h2>
				</div>
				<p data-i18n="promise.text">Když technika funguje a lidé jí rozumí, prarodiče mohou volat vnoučatům, děti se učí moderně a rodiče nemusí jezdit přes půl města kvůli jednomu tlačítku.</p>
			</div>
		</section>

		<section class="section contact shell" id="contact">
			<div class="contact__copy reveal">
				<p class="eyebrow" data-i18n="contact.eyebrow">Kontakt</p>
				<h2 data-i18n="contact.title">Ozvěte se, první krok je zdarma.</h2>
				<p data-i18n="contact.text">Stačí se ozvat — krátký telefonát, pár vět o problému, a domluvíme se, kdy se u vás zastavím. Výjezd a první diagnostika jsou vždy zdarma.</p>
				<div class="contact__actions">
					<a class="button button--primary" href="mailto:servis@example.cz?subject=Domluva%20návštěvy" data-i18n="http://contact.email">Napsat e-mail</a>
					<a class="button button--ghost" href="tel:+420000000000" data-i18n="http://contact.phone">Zavolat</a>
				</div>
			</div>

			<form class="contact__form reveal" action="mailto:servis@example.cz" method="post" enctype="text/plain">
				<label>
					Jméno
					<input name="name" type="text" autocomplete="name" required>
				</label>
				<label>
					Co potřebujete vyřešit?
					<textarea name="message" rows="4" required></textarea>
				</label>
				<button class="button button--primary" type="submit" data-i18n="form.submit">Odeslat poptávku</button>
				<p class="form-note" data-i18n="form.note">Formulář otevře váš e-mailový program. Nepoužívá žádný server ani databázi.</p>
			</form>
		</section>
	</main>

	<footer class="site-footer">
		<div class="shell footer__inner">
			<p>©  Radka servis</p>
			<a href="#top" data-i18n="http://footer.top">Zpět nahoru</a>
		</div>
	</footer>

	<script src="./js/i18n.js"></script>
	<script src="./js/app.js"></script>
</body>
</html>
Other: === http://README.md ===
# Technika, která spojuje generace

Statický reklamní web pro výjezdního mistra počítačových služeb. Nevyžaduje build proces ani backend.

## Struktura

- index.html
- css/styles.css
- js/i18n.js
- js/app.js
- img/
  - hero--main.png
  - hero--hover.png
  - cleaning--main.png
  - cleaning--hover.png
  - upgrade--main.png
  - upgrade--hover.png
  - software--main.png
  - software--hover.png
  - repair--main.png
  - repair--hover.png
  - webcam--main.png
  - webcam--hover.png
  - alarm--main.png
  - alarm--hover.png
  - appliances--main.png
  - appliances--hover.png
  - literacy--main.png
  - literacy--hover.png
  - tutor--main.png
  - tutor--hover.png
  - chess--main.png
  - chess--hover.png
  - development--main.png
  - development--hover.png
  - design--main.png
  - design--hover.png

## Deployment

Nahrajte složku jako statický projekt na Vercel, Netlify, GitHub Pages nebo Cloudflare Pages. Build command nechte prázdný, output directory nastavte na kořen projektu.

=== vercel.json ===
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}

=== robots.txt ===
User-agent: 
Allow: /
Scripts: === js/i18n.js ===
http://window.SITE_I18N = {
	cs: {
		brand: {
			name: "Radka servis",
			tag: "počítače pro celou rodinu"
		},
		nav: {
			services: "Služby",
			approach: "Jak pracuji",
			contact: "Kontakt",
			language: "Jazyk"
		},
		hero: {
			eyebrow: "Výjezd a první diagnostika zdarma",
			title: "Technika, která spojuje generace.",
			lead: "Pomohu vaší rodině s počítačem, mobilem, bezpečností, výukou i designem — klidně, srozumitelně a přímo u vás doma.",
			ctaPrimary: "Domluvit návštěvu",
			ctaSecondary: "Prohlédnout služby",
			badge1: "Bez závazku",
			badge2: "Doma u vás",
			badge3: "Pro děti i prarodiče",
			noteTitle: "Klid pro celou rodinu",
			noteText: "Od tichého notebooku po bezpečný domov."
		},
		approach: {
			eyebrow: "Jednoduchý postup",
			title: "Nejdřív se podívám, potom se rozhodnete.",
			step1Title: "Krátce popíšete problém",
			step1Text: "Stačí telefonát nebo zpráva. Řeknete, co nefunguje a komu má technika pomáhat.",
			step2Title: "Přijedu a zkontroluji situaci",
			step2Text: "Výjezd i první diagnostika jsou zdarma. Vysvětlím možnosti bez složitých pojmů.",
			step3Title: "Platíte jen za práci",
			step3Text: "Vyberete řešení, které dává smysl. Bez tlaku, bez zbytečných nákupů."
		},
		services: {
			eyebrow: "12 služeb pro domácnost",
			title: "Technická pomoc od údržby po vzdělávání.",
			subtitle: "Karty reagují na najetí myší nebo fokus — stejně jako dobrá technika reaguje na potřeby vaší rodiny."
		},
		groups: {
			care: "Údržba počítače",
			security: "Bezpečnost a chytrá domácnost",
			learning: "Výuka pro dospělé i děti",
			design: "Design"
		},
		promise: {
			eyebrow: "Rodinný klid",
			title: "Méně vysvětlování po telefonu, více společného času.",
			text: "Když technika funguje a lidé jí rozumí, prarodiče mohou volat vnoučatům, děti se učí moderně a rodiče nemusí jezdit přes půl města kvůli jednomu tlačítku."
		},
		contact: {
			eyebrow: "Kontakt",
			title: "Ozvěte se, první krok je zdarma.",
			text: "Stačí se ozvat — krátký telefonát, pár vět o problému, a domluvíme se, kdy se u vás zastavím. Výjezd a první diagnostika jsou vždy zdarma.",
			email: "Napsat e-mail",
			phone: "Zavolat"
		},
		form: {
			name: "Jméno",
			message: "Co potřebujete vyřešit?",
			submit: "Odeslat poptávku",
			note: "Formulář otevře váš e-mailový program. Nepoužívá žádný server ani databázi."
		},
		footer: {
			top: "Zpět nahoru"
		},
		serviceList: [
			{
				id: "cleaning",
				group: "care",
				section: "1.1",
				title: "Počítačová údržba",
				text: "Notebook, na kterém dědeček volá s vnoučaty, najednou hučí jako vysavač a sám se vypíná? Po roce každodenního provozu se v něm usadí prach a teplovodivá pasta vyschne. Přijedu k vám domů, vyčistím vnitřek, vyměním pastu a promažu ventilátory — počítač bude zase tichý a chladný. Výjezd i první diagnostika jsou zdarma, platíte jen za samotnou práci. A babička může v klidu dál pouštět vnoučatům pohádky bez čekání a kolečka načítání.",
				alt: "Čištění počítače od prachu"
			},
			{
				id: "upgrade",
				group: "care",
				section: "1.2",
				title: "Modernizace",
				text: "Jeden počítač, tři generace — táta na něm pracuje, máma sleduje seriály a děti dělají úkoly. Není divu, že už nestíhá. Místo nákupu nového stačí často jen vyměnit pevný disk za rychlý SSD, přidat paměť nebo zkontrolovat baterii v notebooku. Přijedu k vám zdarma, podívám se, co přesně zpomaluje, a poradím nejlevnější cestu. Stará technika tak poslouží další roky a peníze zůstanou na něco hezčího pro celou rodinu.",
				alt: "Modernizace počítače"
			},
			{
				id: "software",
				group: "care",
				section: "1.3",
				title: "Nastavení softwaru",
				text: "Rodiče si nevědí rady s aktualizací Windows a vy bydlíte v jiném městě? Zavolejte mě místo sebe. Vyčistím systém od zbytečných programů a virů, nainstaluji modernější verzi Windows, srovnám internet a pomohu s registracemi i s vyplňováním úředních formulářů online. Vysvětlím každý krok klidně a srozumitelně, aby se vaši blízcí nebáli počítač používat sami. Výjezd a první diagnostika nic nestojí — vy ušetříte cestu a oni získají klid.",
				alt: "Nastavení programu v počítači"
			},
			{
				id: "repair",
				group: "care",
				section: "1.4",
				title: "Oprava a recyklace",
				text: "Starý notebook, na kterém babička prohlíží fotky vnoučat, přestal najednou fungovat? Ještě ho prosím nevyhazujte. Často stačí vyměnit jeden díl nebo opravit konektor a přístroj poslouží další roky. A pokud už opravdu doslouží, vezmu si ho na náhradní díly — z jednoho starého počítače pak může vzniknout nový život pro jiný. Přijedu zdarma, podívám se, a vy se rozhodnete bez tlaku.",
				alt: "Oprava notebooku"
			},
			{
				id: "webcam",
				group: "security",
				section: "2.1",
				title: "Webové kamery",
				text: "Chcete vidět, jak si vnoučata hrají na zahradě, nebo zkontrolovat, že babička bezpečně došla domů? S domácími a venkovními kamerami máte své blízké na očích, i když jste v práci nebo v jiném městě. Stačí kabelový internet nebo Wi‑Fi a já vám zapojím tolik kamer, kolik bude potřeba — i s možností spolu mluvit přes mobil. Výjezd a první diagnostika jsou zdarma a celá rodina bude klidnější.",
				alt: "Domácí webová kamera"
			},
			{
				id: "alarm",
				group: "security",
				section: "2.2",
				title: "Domácí alarm",
				text: "Bojíte se, že rodiče v paneláku otevřou dveře někomu nevítanému? Nebo že na chatě v zimě někdo využije, že jste daleko? Namontuji vám přímo na vstupní dveře bytu, domu nebo garáže dálkově ovládaný alarm s hlasitou sirénou a SMS upozorněním. O každém otevření tak budete vědět vy i děti, i kdyby byly stovky kilometrů daleko. Výjezd a první diagnostika nic nestojí, klid celé rodiny ale stojí za hodně.",
				alt: "Domácí bezpečnostní alarm"
			},
			{
				id: "appliances",
				group: "security",
				section: "2.3",
				title: "Chytrá domácnost",
				text: "Smart TV, chytrá zásuvka, robotický vysavač — moderní zařízení umí spolupracovat, ale jen když jim ukážete jak. Nastavím vám aplikaci v mobilu, propojím všechno do jedné domácí sítě a v klidu naučím i prarodiče, jak si zapnout topení dotykem nebo pustit oblíbený seriál bez hledání ovladače. Výjezd a první diagnostika jsou zdarma — a vy už nemusíte po telefonu vysvětlovat, kterým tlačítkem se to zapíná.",
				alt: "Zařízení chytré domácnosti"
			},
			{
				id: "literacy",
				group: "learning",
				section: "3.1",
				title: "Počítačová gramotnost",
				text: "Maminka by ráda volala vnoučatům přes video, ale neví, kde začít? Nebo si tatínek chce sám hlídat účet v bance, ale bojí se kliknout na špatné tlačítko? Naučím vaše blízké pracovat s počítačem, mobilem i s moderními pomocníky včetně umělé inteligence — klidně, krok za krokem, bez složitých slov. Po pár setkáních si poradí sami a vy budete mít méně starostí. Výjezd domů a první diagnostika potřeb jsou zdarma.",
				alt: "Výuka práce s počítačem"
			},
			{
				id: "tutor",
				group: "learning",
				section: "3.2",
				title: "Doučování informatiky",
				text: "Vaše dítě má ve škole informatiku a vy už si nepamatujete ani, kde se zapíná? Mám vysokoškolské vzdělání v IT a zkušenosti s výukou studentů z doby doktorského studia. Vysvětlím látku trpělivě a tak, aby ji dítě skutečně pochopilo — ne jen odříkalo. Učím doma u vás, takže rodiče vidí, co a jak se probírá. První návštěva a krátká diagnostika znalostí jsou zdarma.",
				alt: "Doučování informatiky"
			},
			{
				id: "chess",
				group: "learning",
				section: "3.3",
				title: "Šachy",
				text: "Šachy jsou hra, kterou si dědeček s vnukem rozumí stejně dobře jako kdysi praděda s pradědem. A přitom úžasně rozvíjejí logické myšlení a trpělivost — vlastnosti, které dítěti pomohou v matematice i v životě. Hraji velmi dobře a rád ukážu vašemu potomkovi, jak přemýšlet o několik tahů dopředu. Domluvíme si první setkání u vás doma a teprve potom se rozhodnete, zda budeme pokračovat — úvodní hodina je zdarma.",
				alt: "Šachová výuka"
			},
			{
				id: "development",
				group: "learning",
				section: "3.4",
				title: "Vysoké technologie a AI",
				text: "Vaše děti vyrůstají v době, kdy umělá inteligence mění svět rychleji, než jsme stihli pochopit. Ve škole se to bohužel neučí — a kdo s AI neumí, bude za pár let pozadu. Naučím vaše dítě používat moderní technologie chytře: jako pomocníka při úkolech, ne jako opisovače odpovědí. Tajemství dobrých známek dnes nespočívá v memorování, ale v tom, umět správně klást otázky. Přijedu zdarma, popovídáme si a vy se rozhodnete bez závazku.",
				alt: "Výuka moderních technologií"
			},
			{
				id: "design",
				group: "design",
				section: "4",
				title: "Design a weby",
				text: "Otevírá babička s vnučkou společnou kavárnu? Zakládáte rodinnou dílnu, kde se předávají řemeslné fígle z otce na syna? Vytvořím pro vás stylové letáky, plakáty, webové stránky i katalog služeb — a v případě potřeby i celou aplikaci. Jsem vystudovaný vývojář s praxí a vím, jak udělat věci, které budou vypadat dobře a hlavně fungovat. První konzultace u vás doma je zdarma.",
				alt: "Grafický design a webové stránky"
			}
		]
	}
};

=== js/app.js ===
(() => {
	const DEFAULT_LANGUAGE = "cs";
	const dictionaries = http://window.SITE_I18N || {};
	const state = {
		language: localStorage.getItem("site-language") || DEFAULT_LANGUAGE
	};

	const select = document.querySelector("[data-language-switcher]");
	const menu = document.querySelector("[data-menu]");
	const menuToggle = document.querySelector("[data-menu-toggle]");
	const header = document.querySelector("[data-header]");

	function getValue(path, dictionary) {
		return path.split(".").reduce((value, key) => value && value[key], dictionary);
	}

	function translate(language) {
		const dictionary = dictionaries[language] || dictionaries[DEFAULT_LANGUAGE];
		document.documentElement.lang = language;

		document.querySelectorAll("[data-i18n]").forEach((element) => {
			const value = getValue(element.dataset.i18n, dictionary);
			if (typeof value === "string") {
				element.textContent = value;
			}
		});

		renderServices(dictionary.serviceList || []);
	}

	function serviceTemplate(service) {
		const imageBase = ./img/${service.id};
		return 
			<article class="service-card" tabindex="0">
				<div class="service-card__media">
					<img src="${imageBase}--main.png" alt="${service.alt}" loading="lazy" width="320" height="320">
					<img src="${imageBase}--hover.png" alt="" aria-hidden="true" loading="lazy" width="320" height="320">
				</div>
				<div class="service-card__body">
					<div class="service-card__meta">
						<span>${service.section}</span>
						<span>${service.id}</span>
					</div>
					<h3>${service.title}</h3>
					<p>${service.text}</p>
				</div>
			</article>
		;
	}

	function renderServices(services) {
		document.querySelectorAll("[data-service-group]").forEach((container) => {
			const groupName = container.dataset.serviceGroup;
			container.innerHTML = services
				.filter((service) => http://service.group === groupName)
				.map(serviceTemplate)
				.join("");
		});
	}

	function setupLanguageSwitcher() {
		if (!select) return;

		Object.keys(dictionaries).forEach((language) => {
			if (!select.querySelector(option[value="${language}"])) {
				const option = document.createElement("option");
				option.value = language;
				option.textContent = language.toUpperCase();
				select.append(option);
			}
		});

		select.value = dictionaries[state.language] ? state.language : DEFAULT_LANGUAGE;
		select.addEventListener("change", (event) => {
			state.language = http://event.target.value;
			localStorage.setItem("site-language", state.language);
			translate(state.language);
		});
	}

	function setupMenu() {
		if (!menu || !menuToggle) return;

		const setOpen = (isOpen) => {
			menu.classList.toggle("is-open", isOpen);
			document.body.classList.toggle("menu-open", isOpen);
			menuToggle.setAttribute("aria-expanded", String(isOpen));
		};

		menuToggle.addEventListener("click", () => {
			setOpen(menuToggle.getAttribute("aria-expanded") !== "true");
		});

		menu.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", () => setOpen(false));
		});

		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape") setOpen(false);
		});
	}

	function setupHeader() {
		if (!header) return;

		const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
		update();
		window.addEventListener("scroll", update, { passive: true });
	}

	function setupReveal() {
		const elements = document.querySelectorAll(".reveal");
		if (!("IntersectionObserver" in window)) {
			elements.forEach((element) => element.classList.add("is-visible"));
			return;
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					http://entry.target.classList.add("is-visible");
					observer.unobserve(http://entry.target);
				}
			});
		}, { threshold: 0.16 });

		elements.forEach((element) => observer.observe(element));
	}

	function setupYear() {
		document.querySelectorAll("[data-year]").forEach((element) => {
			element.textContent = new Date().getFullYear();
		});
	}

	setupLanguageSwitcher();
	setupMenu();
	setupHeader();
	setupReveal();
	setupYear();
	translate(state.language);
})();
Styles: === css/styles.css ===
:root {
	--bg: #f7f2e8;
	--bg-soft: #fffaf0;
	--ink: #20313d;
	--muted: #65717a;
	--primary: #2f6f73;
	--primary-dark: #203d4f;
	--accent: #ef9f62;
	--accent-soft: #ffe2bf;
	--card: rgba(255, 255, 255, 0.82);
	--border: rgba(32, 49, 61, 0.12);
	--shadow: 0 24px 70px rgba(58, 77, 91, 0.14);
	--radius-lg: 32px;
	--radius-md: 22px;
	--radius-sm: 14px;
	--shell: min(1120px, calc(100% - 32px));
}

 {
	box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

body {
	margin: 0;
	font-family: "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	color: var(--ink);
	background:
		radial-gradient(circle at 8% 8%, rgba(239, 159, 98, 0.24), transparent 34rem),
		radial-gradient(circle at 88% 14%, rgba(47, 111, 115, 0.18), transparent 30rem),
		linear-gradient(180deg, var(--bg), #eef4f2 62%, var(--bg));
	line-height: 1.6;
	min-height: 100vh;
}

http://body.menu-open {
	overflow: hidden;
}

img {
	max-width: 100%;
	display: block;
}

a {
	color: inherit;
	text-decoration: none;
}

button,
input,
textarea,
select {
	font: inherit;
}

.shell {
	width: var(--shell);
	margin-inline: auto;
}

.skip-link {
	position: fixed;
	left: 16px;
	top: 12px;
	transform: translateY(-160%);
	z-index: 100;
	padding: 10px 14px;
	border-radius: 999px;
	background: var(--ink);
	color: white;
	transition: transform 0.2s ease;
}

.skip-link:focus {
	transform: translateY(0);
}

.visually-hidden {
	position: absolute;
	inline-size: 1px;
	block-size: 1px;
	overflow: hidden;
	clip: rect(0 0 0 0);
	white-space: nowrap;
}

.site-header {
	position: sticky;
	top: 0;
	z-index: 40;
	background: rgba(247, 242, 232, 0.76);
	backdrop-filter: blur(18px);
	border-bottom: 1px solid transparent;
	transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.http://site-header.is-scrolled {
	border-color: var(--border);
	box-shadow: 0 10px 35px rgba(32, 49, 61, 0.08);
}

.nav {
	min-height: 76px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
}

.brand {
	display: inline-flex;
	align-items: center;
	gap: 12px;
	font-weight: 800;
}

.brand__mark {
	width: 46px;
	height: 46px;
	display: grid;
	place-items: center;
	border-radius: 16px;
	color: white;
	background: linear-gradient(135deg, var(--primary-dark), var(--primary));
	box-shadow: 0 10px 28px rgba(47, 111, 115, 0.25);
}

.brand__name,
.brand__tag {
	display: block;
}

.brand__tag {
	font-size: 0.78rem;
	color: var(--muted);
	font-weight: 600;
}

.nav__menu {
	display: flex;
	align-items: center;
	gap: 22px;
	font-weight: 700;
}

.nav__menu a {
	position: relative;
}

.nav__menu a::after {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	bottom: -7px;
	height: 2px;
	border-radius: 99px;
	background: var(--accent);
	transform: scaleX(0);
	transform-origin: left;
	transition: transform 0.2s ease;
}

.nav__menu a:hover::after,
.nav__menu a:focus-visible::after {
	transform: scaleX(1);
}

.language {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 10px;
	border: 1px solid var(--border);
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.58);
	font-size: 0.88rem;
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
	width: 44px;
	height: 44px;
	border: 0;
	border-radius: 14px;
	background: var(--card);
	box-shadow: 0 8px 20px rgba(32, 49, 61, 0.08);
}

.nav__toggle span:not(.visually-hidden) {
	display: block;
	width: 20px;
	height: 2px;
	margin: 4px auto;
	border-radius: 99px;
	background: var(--ink);
	transition: transform 0.2s ease, opacity 0.2s ease;
}

.hero {
	min-height: calc(100vh - 76px);
	display: grid;
	grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.78fr);
	align-items: center;
	gap: clamp(32px, 6vw, 84px);
	padding-block: 54px 80px;
}

.eyebrow {
	margin: 0 0 14px;
	color: var(--primary);
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	font-size: 0.78rem;
}

h1,
h2,
h3 {
	margin: 0;
	line-height: 1.08;
}

h1,
h2 {
	font-family: "Playfair Display", Georgia, serif;
}

h1 {
	max-width: 760px;
	font-size: clamp(3rem, 8vw, 6.8rem);
	letter-spacing: -0.055em;
}

h2 {
	font-size: clamp(2.2rem, 5vw, 4.3rem);
	letter-spacing: -0.04em;
}

h3 {
	font-size: 1.16rem;
}

.hero__lead {
	max-width: 630px;
	margin: 24px 0 0;
	color: var(--muted);
	font-size: clamp(1.08rem, 2vw, 1.28rem);
}

.hero__actions,
.contact__actions {
	display: flex;
	flex-wrap: wrap;
	gap: 14px;
	margin-top: 32px;
}

.button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 50px;
	padding: 13px 20px;
	border: 1px solid transparent;
	border-radius: 999px;
	font-weight: 800;
	cursor: pointer;
	transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.button:hover,
.button:focus-visible {
	transform: translateY(-2px);
}

.button--primary {
	color: white;
	background: linear-gradient(135deg, var(--primary-dark), var(--primary));
	box-shadow: 0 16px 36px rgba(47, 111, 115, 0.25);
}

.button--ghost {
	background: rgba(255, 255, 255, 0.66);
	border-color: var(--border);
}

.hero__badges {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 0;
	margin: 28px 0 0;
	list-style: none;
}

.hero__badges li {
	padding: 8px 12px;
	border: 1px solid var(--border);
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.58);
	color: var(--muted);
	font-size: 0.93rem;
	font-weight: 700;
}

.hero__visual {
	position: relative;
	justify-self: center;
}

.hero-card {
	position: relative;
	width: min(100%, 390px);
	padding: 20px;
	border-radius: 42px;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.7), rgba(255, 250, 240, 0.92));
	box-shadow: var(--shadow);
	overflow: hidden;
}

.hero-card::before {
	content: "";
	position: absolute;
	inset: 11%;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(239, 159, 98, 0.36), transparent 68%);
	filter: blur(6px);
}

.hero-card picture {
	position: relative;
	display: block;
	min-height: 520px;
}

.hero-card__img {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: bottom center;
	transition: opacity 0.45s ease, transform 0.45s ease;
}

.hero-card__img--hover {
	opacity: 0;
	transform: translateY(12px) scale(0.98);
}

.hero-card:hover .hero-card__img--main,
.hero-card:focus-within .hero-card__img--main {
	opacity: 0;
}

.hero-card:hover .hero-card__img--hover,
.hero-card:focus-within .hero-card__img--hover {
	opacity: 1;
	transform: translateY(0) scale(1);
}

.hero-card__note {
	position: relative;
	display: grid;
	gap: 2px;
	margin-top: -18px;
	padding: 16px;
	border-radius: 22px;
	background: rgba(255, 255, 255, 0.78);
	backdrop-filter: blur(12px);
	box-shadow: 0 12px 32px rgba(32, 49, 61, 0.1);
}

.hero-card__note span {
	color: var(--muted);
	font-size: 0.92rem;
}

.section {
	padding-block: 86px;
}

.section__heading {
	max-width: 780px;
	margin-bottom: 34px;
}

.section__heading p:not(.eyebrow) {
	margin: 16px 0 0;
	color: var(--muted);
	font-size: 1.05rem;
}

.steps {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 18px;
}

.step,
.service-card,
.promise__panel,
.contact__form {
	border: 1px solid var(--border);
	background: var(--card);
	box-shadow: 0 18px 48px rgba(32, 49, 61, 0.08);
	backdrop-filter: blur(12px);
}

.step {
	padding: 24px;
	border-radius: var(--radius-md);
}

.step span {
	display: inline-grid;
	place-items: center;
	width: 42px;
	height: 42px;
	margin-bottom: 18px;
	border-radius: 14px;
	background: var(--accent-soft);
	color: #8a4a18;
	font-weight: 900;
}

.step p,
.service-card p,
.promise__panel p,
.contact__copy p,
.form-note {
	color: var(--muted);
}

.services {
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(32, 61, 79, 0.06));
}

.service-group {
	margin-top: 40px;
}

.service-group > h3 {
	display: inline-flex;
	margin-bottom: 18px;
	padding: 10px 14px;
	border-radius: 999px;
	background: rgba(255, 226, 191, 0.68);
	color: #7a451b;
}

.services__grid {
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 18px;
}

.services__grid--single {
	grid-template-columns: minmax(0, 1fr);
}

.service-card {
	position: relative;
	min-height: 100%;
	display: grid;
	grid-template-rows: auto 1fr;
	overflow: hidden;
	border-radius: var(--radius-lg);
}

.service-card__media {
	position: relative;
	min-height: 230px;
	margin: 12px 12px 0;
	border-radius: 24px;
	background:
		radial-gradient(circle at 50% 40%, rgba(239, 159, 98, 0.22), transparent 62%),
		linear-gradient(135deg, rgba(47, 111, 115, 0.16), rgba(255, 255, 255, 0.42));
	overflow: hidden;
}

.service-card__media img {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	padding: 18px;
	object-fit: contain;
	transition: opacity 0.35s ease, transform 0.35s ease;
}

.service-card__media img:last-child {
	opacity: 0;
	transform: scale(1.04) rotate(1deg);
}

.service-card:hover .service-card__media img:first-child,
.service-card:focus-within .service-card__media img:first-child {
	opacity: 0;
	transform: scale(0.96);
}

.service-card:hover .service-card__media img:last-child,
.service-card:focus-within .service-card__media img:last-child {
	opacity: 1;
	transform: scale(1) rotate(0);
}

.service-card__body {
	padding: 22px;
}

.service-card__meta {
	display: flex;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 12px;
	color: var(--primary);
	font-size: 0.82rem;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 0.08em;
}

.service-card p {
	margin: 12px 0 0;
	font-size: 0.95rem;
}

.promise__panel {
	display: grid;
	grid-template-columns: 0.9fr 1.1fr;
	gap: 24px;
	align-items: center;
	padding: clamp(26px, 5vw, 54px);
	border-radius: 38px;
	background:
		linear-gradient(135deg, rgba(32, 61, 79, 0.92), rgba(47, 111, 115, 0.88)),
		var(--primary-dark);
	color: white;
}

.promise__panel .eyebrow,
.promise__panel p {
	color: rgba(255, 255, 255, 0.78);
}

.promise__panel p {
	margin: 0;
	font-size: 1.08rem;
}

.contact {
	display: grid;
	grid-template-columns: 0.95fr 1.05fr;
	gap: clamp(24px, 5vw, 56px);
	align-items: start;
}

.contact__copy {
	position: sticky;
	top: 112px;
}

.contact__copy p:not(.eyebrow) {
	font-size: 1.08rem;
}

.contact__form {
	display: grid;
	gap: 18px;
	padding: clamp(22px, 4vw, 36px);
	border-radius: var(--radius-lg);
}

.contact__form label {
	display: grid;
	gap: 8px;
	font-weight: 800;
}

.contact__form input,
.contact__form textarea {
	width: 100%;
	border: 1px solid var(--border);
	border-radius: 16px;
	padding: 13px 14px;
	background: rgba(255, 255, 255, 0.8);
	color: var(--ink);
	outline: none;
	transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact__form input:focus,
.contact__form textarea:focus {
	border-color: var(--primary);
	box-shadow: 0 0 0 4px rgba(47, 111, 115, 0.12);
}

.form-note {
	margin: 0;
	font-size: 0.9rem;
}

.site-footer {
	padding-block: 30px;
	border-top: 1px solid var(--border);
	background: rgba(255, 255, 255, 0.32);
}

.footer__inner {
	display: flex;
	justify-content: space-between;
	gap: 16px;
	color: var(--muted);
	font-weight: 700;
}

.reveal {
	opacity: 0;
	transform: translateY(24px);
	transition: opacity 0.55s ease, transform 0.55s ease;
}

.http://reveal.is-visible {
	opacity: 1;
	transform: translateY(0);
}

@media (max-width: 980px) {
	.hero,
	.contact,
	.promise__panel {
		grid-template-columns: 1fr;
	}

	.hero {
		min-height: auto;
		padding-top: 42px;
	}

	.hero__visual {
		order: -1;
	}

	.hero-card picture {
		min-height: 430px;
	}

	.steps,
	.services__grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.contact__copy {
		position: static;
	}
}

@media (max-width: 760px) {
	.nav__toggle {
		display: block;
		position: relative;
		z-index: 51;
	}

	.nav__toggle[aria-expanded="true"] span:nth-child(1) {
		transform: translateY(6px) rotate(45deg);
	}

	.nav__toggle[aria-expanded="true"] span:nth-child(2) {
		opacity: 0;
	}

	.nav__toggle[aria-expanded="true"] span:nth-child(3) {
		transform: translateY(-6px) rotate(-45deg);
	}

	.nav__menu {
		position: fixed;
		inset: 0;
		z-index: 50;
		display: grid;
		align-content: center;
		justify-items: center;
		gap: 26px;
		padding: 96px 24px 32px;
		background: rgba(247, 242, 232, 0.96);
		transform: translateX(100%);
		transition: transform 0.25s ease;
		font-size: 1.28rem;
	}

	.nav__http://menu.is-open {
		transform: translateX(0);
	}

	.section {
		padding-block: 64px;
	}

	.steps,
	.services__grid,
	.services__grid--single {
		grid-template-columns: 1fr;
	}

	.service-card__media {
		min-height: 250px;
	}

	.footer__inner {
		flex-direction: column;
	}
}

@media (max-width: 520px) {
	:root {
		--shell: min(100% - 22px, 1120px);
	}

	.brand__tag {
		display: none;
	}

	.hero-card {
		border-radius: 30px;
		padding: 12px;
	}

	.hero-card picture {
		min-height: 360px;
	}

	.hero__actions,
	.contact__actions {
		flex-direction: column;
	}

	.button {
		width: 100%;
	}
}

@media (prefers-reduced-motion: reduce) {
	,
	::before,
	::after {
		scroll-behavior: auto !important;
		transition-duration: 0.01ms !important;
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
	}

	.reveal {
		opacity: 1;
		transform: none;
	}
}

## Отчёт по сайту

Создан статический рекламный сайт **«Technika, která spojuje generace»** для выездного мастера компьютерных услуг. Концепция — тёплый семейный сервис, где техника помогает бабушкам, дедушкам, родителям и детям оставаться на связи.

### Ключевые решения

- **Стиль:** мягкий семейный минимализм с карточками услуг, стеклянными панелями и спокойными анимациями появления.
- **Палитра:** тёплый кремовый фон, глубокий сине-зелёный для доверия, терракотовый акцент для дружелюбия.
- **Типографика:** `Playfair Display` для крупных эмоциональных заголовков и `Manrope` для удобного чтения сервисных текстов.
- **UX:** sticky-навигация, мобильное меню, плавные якоря, skip-link, видимые состояния фокуса, адаптивная сетка.
- **Изображения:** все карточки используют пары `./img/slug--main.png` и `./img/slug--hover.png`; при наведении или фокусе происходит мягкая смена изображения.
- **Мультиязычность:** тексты вынесены в `js/i18n.js` в словарь `cs`; переключатель языка уже встроен и готов к добавлению новых языков.

### Проверка контента

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
12. `design` — 4. Дизайн

## Инструкция по сборке

Создайте папку проекта со следующей структурой:

```
project/
  index.html
  css/
    styles.css
  js/
    i18n.js
    app.js
  img/
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

Содержимое свойства **Html** сохраните в `index.html`; **Styles** — в `css/styles.css`; **Scripts** разделите на `js/i18n.js` и `js/app.js`; **Other** — на `README.md`, `vercel.json` и `robots.txt`.

Папку `img/` заполните изображениями с указанными именами. Пути в коде уже настроены на `./img/`.

### Как добавить язык

1. Откройте `js/i18n.js`.
2. Скопируйте объект `cs` в новый ключ, например `en`.
3. Переведите строки, сохранив структуру ключей.
4. Переключатель языка автоматически добавит новый вариант.

## Развёртывание на Vercel

1. Создайте новый проект в Vercel.
2. Загрузите папку проекта или подключите Git-репозиторий.
3. Framework Preset выберите **Other**.
4. Build Command оставьте пустым.
5. Output Directory оставьте корнем проекта.
6. После деплоя откройте сайт и проверьте:
    - загрузку `index.html`;
    - работу CSS и JS;
    - смену изображений при наведении;
    - мобильное меню;
    - переключатель языка;
    - ссылки `mailto:` и `tel:`.
7. При необходимости подключите собственный домен в настройках проекта Vercel.

## Финальная самопроверка

- Все 12 услуг добавлены и распределены по группам.
- Все изображения вызываются через путь `./img/slug--main.png` и `./img/slug--hover.png`.
- HTML использует валидную структуру документа, семантические секции и доступные подписи.
- CSS не содержит незадействованных критических зависимостей и поддерживает мобильные брейкпоинты.
- JS изолирован, не требует сторонних библиотек, проверяет наличие элементов перед работой.
- Словарь `cs` является основным источником текстов и готов к расширению.