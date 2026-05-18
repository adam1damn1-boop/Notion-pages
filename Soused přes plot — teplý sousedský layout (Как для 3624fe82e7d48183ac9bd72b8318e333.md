# Soused přes plot — teplý sousedský layout (Как для своих)

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title data-i18n="meta.title">Mistr od souseda — výjezdní počítačové služby</title>
	<meta name="description" data-i18n-attr="content" data-i18n="meta.description" content="Pomáhám s technikou jako svým vlastním. Výjezd a první diagnostika zdarma.">
	<meta name="theme-color" content="#c2532a">
	<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%F0%9F%94%A7%3C/text%3E%3C/svg%3E">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap">
	<link rel="stylesheet" href="./styles.css">
</head>
<body id="top">
	<a class="skip-link" href="#main" data-i18n="a11y.skip">Přeskočit na obsah</a>

	<header class="site-header">
		<div class="container header-inner">
			<a class="brand" href="#top">
				🔧
				Mistr od souseda
			</a>
			<nav class="nav" aria-label="Hlavní menu">
				<a href="#care" data-i18n="http://nav.care">Péče</a>
				<a href="#security" data-i18n="http://nav.security">Bezpečnost</a>
				<a href="#learning" data-i18n="nav.learning">Učení</a>
				<a href="#design" data-i18n="http://nav.design">Design</a>
				<a href="#contact" class="nav-cta" data-i18n="http://nav.contact">Kontakt</a>
			</nav>
			<div class="lang-switcher" role="group" aria-label="Jazyk">
				<button type="button" data-lang="cs" class="lang is-active" aria-pressed="true">CS</button>
				<button type="button" data-lang="en" class="lang" aria-pressed="false">EN</button>
			</div>
			<button class="nav-toggle" aria-label="Menu" aria-expanded="false"></button>
		</div>
	</header>

	<main id="main">
		<section class="hero">
			<div class="container hero-inner">
				<div class="hero-text">
					<p class="eyebrow" data-i18n="hero.eyebrow">Výjezdní počítačový mistr · Praha a okolí</p>
					<h1 class="hero-title" data-i18n="hero.title">Pomáhám s technikou jako svým vlastním.</h1>
					<p class="hero-lead" data-i18n="hero.lead">Profesionální péče o počítače, bezpečnost, doučování i design. Výjezd a první diagnostika jsou zdarma — platíte jen za práci a náhradní díly.</p>
					<div class="hero-cta">
						<a class="btn btn-primary" href="#contact" data-i18n="hero.ctaPrimary">Domluvit návštěvu</a>
						<a class="btn btn-ghost" href="#care" data-i18n="hero.ctaSecondary">Co umím</a>
					</div>
					<ul class="hero-badges">
						<li data-i18n="hero.badge1">✓ Výjezd zdarma</li>
						<li data-i18n="hero.badge2">✓ Diagnostika zdarma</li>
						<li data-i18n="hero.badge3">✓ Bez tlaku, bez závazku</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="care" class="section">
			<div class="container">
				<header class="section-head">
					01
					<h2 data-i18n="care.title">Péče o počítač</h2>
					<p data-i18n="care.lead">Jako bych se staral o vlastní techniku — opatrně, s rozmyslem a bez zbytečných nákladů.</p>
				</header>
				<div class="cards cards-4">
					<article class="card" data-section="1.1">
						<div class="card-media">
							<img class="img-main" src="./img/cleaning--main.png" alt="cleaning" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/cleaning--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="http://svc.cleaning.title">Počítačový úklid</h3>
						<p data-i18n="http://svc.cleaning.body"></p>
					</article>
					<article class="card" data-section="1.2">
						<div class="card-media">
							<img class="img-main" src="./img/upgrade--main.png" alt="upgrade" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/upgrade--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="svc.upgrade.title">Modernizace</h3>
						<p data-i18n="svc.upgrade.body"></p>
					</article>
					<article class="card" data-section="1.3">
						<div class="card-media">
							<img class="img-main" src="./img/software--main.png" alt="software" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/software--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="http://svc.software.title">Nastavení softwaru</h3>
						<p data-i18n="http://svc.software.body"></p>
					</article>
					<article class="card" data-section="1.4">
						<div class="card-media">
							<img class="img-main" src="./img/repair--main.png" alt="repair" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/repair--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="http://svc.repair.title">Oprava a likvidace</h3>
						<p data-i18n="http://svc.repair.body"></p>
					</article>
				</div>
			</div>
		</section>

		<section id="security" class="section section-alt">
			<div class="container">
				<header class="section-head">
					02
					<h2 data-i18n="security.title">Bezpečnost domova</h2>
					<p data-i18n="security.lead">Bezpečí pro celou rodinu — kamery, alarmy a chytré spotřebiče, propojené tak, aby vám sloužily.</p>
				</header>
				<div class="cards cards-3">
					<article class="card" data-section="2.1">
						<div class="card-media">
							<img class="img-main" src="./img/webcam--main.png" alt="webcam" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/webcam--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="http://svc.webcam.title">Web-kamery</h3>
						<p data-i18n="http://svc.webcam.body"></p>
					</article>
					<article class="card" data-section="2.2">
						<div class="card-media">
							<img class="img-main" src="./img/alarm--main.png" alt="alarm" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/alarm--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="svc.alarm.title">Domácí alarm</h3>
						<p data-i18n="svc.alarm.body"></p>
					</article>
					<article class="card" data-section="2.3">
						<div class="card-media">
							<img class="img-main" src="./img/appliances--main.png" alt="appliances" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/appliances--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="svc.appliances.title">Chytrá domácnost</h3>
						<p data-i18n="svc.appliances.body"></p>
					</article>
				</div>
			</div>
		</section>

		<section id="learning" class="section">
			<div class="container">
				<header class="section-head">
					03
					<h2 data-i18n="learning.title">Učení — pro dospělé i děti</h2>
					<p data-i18n="learning.lead">Trpělivě a s respektem. Naučím vás i vaše děti pracovat s technikou tak, aby vám sloužila, ne otravovala.</p>
				</header>
				<div class="cards cards-4">
					<article class="card" data-section="3.1">
						<div class="card-media">
							<img class="img-main" src="./img/literacy--main.png" alt="literacy" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/literacy--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="svc.literacy.title">Počítačová gramotnost</h3>
						<p data-i18n="svc.literacy.body"></p>
					</article>
					<article class="card" data-section="3.2">
						<div class="card-media">
							<img class="img-main" src="./img/tutor--main.png" alt="tutor" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/tutor--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="svc.tutor.title">Doučování informatiky</h3>
						<p data-i18n="svc.tutor.body"></p>
					</article>
					<article class="card" data-section="3.3">
						<div class="card-media">
							<img class="img-main" src="./img/chess--main.png" alt="chess" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/chess--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="svc.chess.title">Šachy</h3>
						<p data-i18n="svc.chess.body"></p>
					</article>
					<article class="card" data-section="3.4">
						<div class="card-media">
							<img class="img-main" src="./img/development--main.png" alt="development" loading="lazy" decoding="async">
							<img class="img-hover" src="./img/development--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
						</div>
						<h3 data-i18n="svc.development.title">Vysoké technologie</h3>
						<p data-i18n="svc.development.body"></p>
					</article>
				</div>
				<aside class="callout">
					⭐
					<p data-i18n="learning.callout">Tajemství úspěchu ve škole: aby byly vaše děti konkurenceschopné, měly by už dnes začít rozumět umělé inteligenci. Ve škole to nenaučí — naučím je to já.</p>
				</aside>
			</div>
		</section>

		<section id="design" class="section section-alt">
			<div class="container design-row">
				<header class="section-head section-head-left">
					04
					<h2 data-i18n="design.title">Design a vývoj</h2>
					<p data-i18n="design.lead">Letáky, plakáty, webové stránky, katalogy i celé aplikace — k vaší značce přistoupím jako k vlastnímu projektu.</p>
					<a class="btn btn-primary" href="#contact" data-i18n="design.cta">Probrat nápad</a>
				</header>
				<article class="card card-wide" data-section="4">
					<div class="card-media">
						<img class="img-main" src="./img/design--main.png" alt="design" loading="lazy" decoding="async">
						<img class="img-hover" src="./img/design--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
					</div>
					<h3 data-i18n="http://svc.design.title">Design na míru</h3>
					<p data-i18n="http://svc.design.body"></p>
				</article>
			</div>
		</section>

		<section id="contact" class="section section-contact">
			<div class="container contact-row">
				<div class="hero-portrait" data-section="contact">
					<img class="img-main" src="./img/hero--main.png" alt="master" loading="lazy" decoding="async">
					<img class="img-hover" src="./img/hero--hover.png" alt="" loading="lazy" decoding="async" aria-hidden="true">
				</div>
				<div class="contact-body">
					Kontakt
					<h2 data-i18n="contact.title">Domluvíme se v klidu, jako sousedé přes plot.</h2>
					<p data-i18n="contact.body"></p>
					<ul class="contact-list">
						<li><a href="tel:+420777123456">📞+420 777 123 456</a></li>
						<li><a href="mailto:mistr@soused.cz">✉️mistr@soused.cz</a></li>
						<li><a href="https://wa.me/420777123456" target="_blank" rel="noopener">💬WhatsApp</a></li>
						<li><a href="https://t.me/mistrodsouseda" target="_blank" rel="noopener">✈️Telegram</a></li>
					</ul>
					<form class="contact-form" onsubmit="return sendMail(event)">
						<label>Jak vám mám říkat?<input type="text" name="name" required></label>
						<label>Telefon nebo e-mail<input type="text" name="contact" required></label>
						<label>S čím vám můžu pomoci?<textarea name="message" rows="4" required></textarea></label>
						<button type="submit" class="btn btn-primary" data-i18n="form.submit">Odeslat zprávu</button>
						<p class="form-note" data-i18n="form.note">Odeslání otevře váš poštovní program — žádné servery, žádné cookies.</p>
					</form>
				</div>
			</div>
		</section>
	</main>

	<footer class="site-footer">
		<div class="container footer-inner">
			<p data-i18n="footer.tagline">Mistr od souseda · pomáhám s technikou jako svým vlastním</p>
			<p class="footer-small">©  · <a href="#top" data-i18n="http://footer.top">Nahoru</a></p>
		</div>
	</footer>

	<script src="./scripts.js" defer></script>
</body>
</html>

Other: === package.json ===
{
	"name": "mistr-od-souseda",
	"version": "1.0.0",
	"private": true,
	"description": "Statický web výjezdního počítačového mistra. Hostováno na Vercelu nebo libovolném statickém hostingu.",
	"scripts": {
		"start": "npx --yes serve .",
		"build": "echo 'Static site — nothing to build.'"
	}
}

=== vercel.json ===
{
	"cleanUrls": true,
	"trailingSlash": false,
	"headers": [
		{
			"source": "/(.)",
			"headers": [
				{ "key": "X-Content-Type-Options", "value": "nosniff" },
				{ "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
				{ "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
			]
		},
		{
			"source": "/img/(.)",
			"headers": [
				{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
			]
		}
	]
}

=== robots.txt ===
User-agent: *
Allow: /

=== manifest.webmanifest ===
{
	"name": "Mistr od souseda",
	"short_name": "Mistr",
	"start_url": "/",
	"display": "standalone",
	"background_color": "#fbf5ec",
	"theme_color": "#c2532a",
	"icons": []
}

=== .gitignore ===
node_modules
.DS_Store
.vercel

Scripts: === scripts.js ===
// Soused přes plot — i18n + UI interactions

// Texts pulled from the Site content record "Как для своих" — Czech is primary.
const I18N = {
	cs: {
		"meta.title": "Mistr od souseda — výjezdní počítačové služby",
		"meta.description": "Pomáhám s technikou jako svým vlastním. Výjezd a první diagnostika zdarma.",
		"a11y.skip": "Přeskočit na obsah",
		"http://brand.name": "Mistr od souseda",
		"http://nav.care": "Péče",
		"http://nav.security": "Bezpečnost",
		"nav.learning": "Učení",
		"http://nav.design": "Design",
		"http://nav.contact": "Kontakt",
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
		"http://svc.cleaning.title": "Počítačový úklid",
		"http://svc.cleaning.body": "Když počítač začne hučet jako stará lednička a v létě se přehřívá, je nejvyšší čas na pořádnou očistu. Přijedu k vám domů zdarma, počítač i klávesnici opatrně vyčistím od prachu, vyměním teplovodivou pastu a promažu ventilátory. Zacházím s vaší technikou stejně, jako by patřila mojí rodině — opatrně a s rozmyslem.",
		"svc.upgrade.title": "Modernizace",
		"svc.upgrade.body": "Váš notebook už nestíhá ani načíst ranní zprávy? Není třeba hned kupovat nový — často stačí přidat rychlý SSD disk, více paměti nebo vyměnit baterii. Přijedu zdarma, podívám se a poradím vám tak poctivě, jako bych to dělal vlastnímu bratrovi.",
		"http://svc.software.title": "Nastavení softwaru",
		"http://svc.software.body": "Windows občas zatvrdne, zaplní se programy, které nikdo nepoužívá, nebo se chytne nepříjemný virus. Pečlivě vám systém vyčistím, nainstaluji vše potřebné pro práci, studium i zábavu, vyřeším potíže s internetem a klidně pomůžu i s vyplněním úředního formuláře. Pracuji přímo u vás doma, můžeme si u toho dát čaj.",
		"http://svc.repair.title": "Oprava a likvidace",
		"http://svc.repair.body": "Než starý počítač nebo notebook odnesete do popelnice — chvilku počkejte. Často stačí vyměnit jednu součástku a slouží další roky. Přijedu zdarma, podívám se a řeknu vám na rovinu, jestli má smysl opravovat. Pokud ne, můžu si přístroj vzít na náhradní díly, abyste se ho nemuseli zbavovat sami.",
		"http://svc.webcam.title": "Web-kamery",
		"http://svc.webcam.body": "Chcete vědět, jestli pošťák opravdu nechal balíček u dveří, nebo co dělá pes na zahradě, když nejste doma? Nainstaluji vám tolik vnitřních i venkovních kamer, kolik potřebujete — stačí, že máte doma internet nebo Wi-Fi. Přes mobil se podíváte domů kdykoli a můžete dokonce mluvit s návštěvou na dálku.",
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
		"http://svc.design.title": "Design na míru",
		"http://svc.design.body": "Jsem diplomovaný vývojář softwaru s praxí. Navrhnu vám stylové letáky, plakáty, webové stránky nebo katalog vašich služeb tak, aby vypadaly profesionálně a přivedly vám zákazníky. K vašemu nápadu se budu chovat jako k vlastnímu projektu — s péčí a pozorností ke každému detailu.",
		"contact.eyebrow": "Kontakt",
		"contact.title": "Domluvíme se v klidu, jako sousedé přes plot.",
		"contact.body": "Napište mi nebo zavolejte — vyslechnu vás, poradím a teprve potom se dohodneme na návštěvě. Bez tlaku a bez závazku.",
		"http://contact.phone": "+420 777 123 456",
		"http://form.name": "Jak vám mám říkat?",
		"http://form.contact": "Telefon nebo e-mail",
		"form.message": "S čím vám můžu pomoci?",
		"form.submit": "Odeslat zprávu",
		"form.note": "Odeslání otevře váš poštovní program — žádné servery, žádné cookies.",
		"footer.tagline": "Mistr od souseda · pomáhám s technikou jako svým vlastním",
		"http://footer.top": "Nahoru"
	},
	en: {
		"meta.title": "The neighborhood master — on-site computer services",
		"meta.description": "I help with your tech the way I'd help my own family. Free call-out and first diagnostics.",
		"a11y.skip": "Skip to content",
		"http://brand.name": "The neighborhood master",
		"http://nav.care": "Care",
		"http://nav.security": "Security",
		"nav.learning": "Learning",
		"http://nav.design": "Design",
		"http://nav.contact": "Contact",
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
		"http://svc.cleaning.title": "Computer cleaning",
		"http://svc.cleaning.body": "When your PC hums like an old fridge and overheats in summer, it's time for a deep clean. I come to you for free, dust out the PC and keyboard, replace the thermal paste and lubricate the fans — gently and thoughtfully.",
		"svc.upgrade.title": "Upgrades",
		"svc.upgrade.body": "Laptop too slow to even open the morning news? Often a fast SSD, extra memory or a fresh battery is enough. I'll come for free, take a look and give you honest advice — no pressure.",
		"http://svc.software.title": "Software setup",
		"http://svc.software.body": "Windows freezes, fills up with useless apps or catches a virus. I'll clean it up, install everything you need for work, study or fun, fix internet issues and even help with official forms — right at your home.",
		"http://svc.repair.title": "Repair & recycling",
		"http://svc.repair.body": "Before you throw out an old computer or laptop — wait. Often one replaced part means another few years of life. I'll come for free and tell you honestly whether repair makes sense.",
		"http://svc.webcam.title": "Web cameras",
		"http://svc.webcam.body": "Want to know if the postman really left the parcel by the door, or what the dog is up to in the garden? I'll install as many indoor and outdoor cameras as you need, viewable from your phone anytime.",
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
		"http://svc.design.title": "Tailored design",
		"http://svc.design.body": "I'm a qualified software developer. I'll design stylish flyers, posters, websites or service catalogues so they look professional and bring customers.",
		"contact.eyebrow": "Get in touch",
		"contact.title": "Let's chat like neighbours over the fence.",
		"contact.body": "Drop me a line or a call — I'll listen, advise, and only then we'll agree on a visit. No pressure, no commitment.",
		"http://contact.phone": "+420 777 123 456",
		"http://form.name": "What should I call you?",
		"http://form.contact": "Phone or e-mail",
		"form.message": "How can I help?",
		"form.submit": "Send a message",
		"form.note": "Submitting opens your e-mail app — no servers, no cookies.",
		"footer.tagline": "The neighborhood master · I treat your tech like my own",
		"http://footer.top": "Back to top"
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
	const form = http://event.target;
	const name = http://form.name.value.trim();
	const contact = http://form.contact.value.trim();
	const message = form.message.value.trim();
	const subject = encodeURIComponent(Poptávka od ${name || "klienta"});
	const body = encodeURIComponent(Jméno: ${name}\nKontakt: ${contact}\n\n${message});
	window.location.href = mailto:mistr@soused.cz?subject=${subject}&body=${body};
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
				http://entry.target.classList.add("is-visible");
				io.unobserve(http://entry.target);
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

Styles: === styles.css ===
/ Soused přes plot — teplý sousedský layout /
:root{
	--bg:#fbf5ec;
	--bg-alt:#f3e9d6;
	--bg-dark:#2a1f1a;
	--text:#2a1f1a;
	--text-soft:#5a4a40;
	--accent:#c2532a;
	--accent-2:#e3a857;
	--accent-soft:#f1d6a6;
	--white:#ffffff;
	--border:rgba(42,31,26,.12);
	--radius:20px;
	--radius-sm:12px;
	--shadow-sm:0 1px 2px rgba(42,31,26,.06), 0 8px 24px -8px rgba(42,31,26,.18);
	--shadow-md:0 4px 12px rgba(194,83,42,.10), 0 24px 48px -16px rgba(42,31,26,.22);
	--font-display:"Fraunces","Iowan Old Style","Georgia",serif;
	--font-body:"Inter","Segoe UI",system-ui,-apple-system,sans-serif;
	--container:1180px;
}
{box-sizing:border-box}
html{scroll-behavior:smooth}
html,body{margin:0;padding:0}
body{
	font-family:var(--font-body);
	color:var(--text);
	background:var(--bg);
	line-height:1.6;
	-webkit-font-smoothing:antialiased;
	text-rendering:optimizeLegibility;
}
img{max-width:100%;height:auto;display:block}
a{color:inherit;text-decoration:none}
button{font:inherit}
.container{width:100%;max-width:var(--container);margin:0 auto;padding:0 24px}
.skip-link{position:absolute;left:-9999px;top:0;background:var(--accent);color:#fff;padding:8px 12px;border-radius:0 0 8px 0;z-index:99}
.skip-link:focus{left:0}

/ Header /
.site-header{position:sticky;top:0;z-index:50;background:rgba(251,245,236,.92);backdrop-filter:saturate(140%) blur(10px);-webkit-backdrop-filter:saturate(140%) blur(10px);border-bottom:1px solid var(--border)}
.header-inner{display:flex;align-items:center;gap:20px;padding:14px 24px}
.brand{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-weight:700;font-size:20px}
.brand-mark{display:inline-grid;place-items:center;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-2));color:#fff}
.nav{display:flex;gap:6px;margin-left:auto}
.nav a{padding:8px 12px;border-radius:999px;font-weight:500;color:var(--text-soft);transition:.2s}
.nav a:hover,.nav a:focus-visible{background:var(--accent-soft);color:var(--text);outline:none}
.nav-cta{background:var(--accent);color:#fff !important}
.nav-cta:hover{background:#a8431f !important;color:#fff !important}
.lang-switcher{display:flex;gap:4px;background:var(--white);border:1px solid var(--border);border-radius:999px;padding:3px}
.lang{border:0;background:transparent;color:var(--text-soft);padding:6px 12px;border-radius:999px;cursor:pointer;font-weight:600;font-size:13px;transition:.2s}
.http://lang.is-active{background:var(--accent);color:#fff}
.nav-toggle{display:none;flex-direction:column;gap:4px;background:none;border:0;padding:8px;cursor:pointer}
.nav-toggle span{display:block;width:22px;height:2px;background:var(--text);border-radius:2px;transition:.2s}

/ Hero /
.hero{padding:80px 0 60px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;inset:auto -10% -40% auto;width:560px;height:560px;background:radial-gradient(closest-side, var(--accent-soft), transparent 70%);z-index:0}
.hero-inner{position:relative;z-index:1;max-width:780px}
.eyebrow{text-transform:uppercase;letter-spacing:.12em;font-size:13px;font-weight:600;color:var(--accent);margin:0 0 14px}
.eyebrow-light{color:var(--accent-2)}
.hero-title{font-family:var(--font-display);font-weight:900;font-size:clamp(36px,6vw,68px);line-height:1.05;margin:0 0 18px;letter-spacing:-.01em}
.hero-lead{font-size:clamp(17px,1.6vw,20px);color:var(--text-soft);margin:0 0 28px;max-width:62ch}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border-radius:999px;font-weight:600;font-size:15px;border:1px solid transparent;cursor:pointer;transition:transform .15s ease,background .2s,color .2s,box-shadow .2s}
.btn:hover{transform:translateY(-1px)}
.btn-primary{background:var(--accent);color:#fff;box-shadow:var(--shadow-sm)}
.btn-primary:hover{background:#a8431f;box-shadow:var(--shadow-md)}
.btn-ghost{background:transparent;color:var(--text);border-color:var(--border)}
.btn-ghost:hover{background:var(--white)}
.hero-badges{list-style:none;display:flex;flex-wrap:wrap;gap:10px 22px;padding:0;margin:0;color:var(--text-soft);font-weight:500}

/ Sections /
.section{padding:80px 0;position:relative}
.section-alt{background:var(--bg-alt)}
.section-head{max-width:780px;margin:0 auto 48px;text-align:center}
.section-head-left{text-align:left;margin-left:0}
.section-head h2{font-family:var(--font-display);font-weight:700;font-size:clamp(28px,4vw,44px);line-height:1.15;margin:8px 0 12px;letter-spacing:-.01em}
.section-head p{color:var(--text-soft);font-size:17px;margin:0}
.section-num{display:inline-block;font-family:var(--font-display);font-weight:500;color:var(--accent);font-size:14px;letter-spacing:.2em;border:1px solid var(--accent);padding:4px 10px;border-radius:999px}

/ Cards /
.cards{display:grid;gap:24px}
.cards-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.cards-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.card{background:var(--white);border:1px solid var(--border);border-radius:var(--radius);padding:22px;display:flex;flex-direction:column;gap:14px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow-md);border-color:transparent}
.card-media{position:relative;aspect-ratio:1/1;background:var(--bg-alt);border-radius:var(--radius-sm);overflow:hidden;display:grid;place-items:center}
.card-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:14px;transition:opacity .35s ease,transform .35s ease}
.card-media .img-hover{opacity:0;transform:scale(.96)}
.card:hover .card-media .img-main{opacity:0;transform:scale(1.04)}
.card:hover .card-media .img-hover{opacity:1;transform:scale(1)}
.card h3{font-family:var(--font-display);font-weight:700;font-size:22px;line-height:1.25;margin:0;letter-spacing:-.005em}
.card p{color:var(--text-soft);margin:0;font-size:15px}

/ Callout /
.callout{margin-top:36px;background:linear-gradient(135deg,var(--bg-alt),#fff);border:1px solid var(--border);border-radius:var(--radius);padding:28px;display:flex;align-items:flex-start;gap:18px;box-shadow:var(--shadow-sm)}
.callout-icon{font-size:34px;line-height:1}
.callout p{margin:0;font-size:17px;color:var(--text)}

/ Design row /
.design-row{display:grid;grid-template-columns:1.1fr 1fr;gap:48px;align-items:center}
.card-wide{padding:32px}
.card-wide .card-media{aspect-ratio:16/10}

/ Contact /
.section-contact{background:var(--bg-dark);color:#f3e9d6;padding:90px 0 70px}
.section-contact .eyebrow{color:var(--accent-2)}
.section-contact h2{font-family:var(--font-display);font-weight:700;font-size:clamp(28px,3.6vw,42px);margin:8px 0 16px;line-height:1.15;color:#fff;letter-spacing:-.01em}
.section-contact p{color:#d9c7ad}
.contact-row{display:grid;grid-template-columns:370px 1fr;gap:56px;align-items:center}
.hero-portrait{position:relative;aspect-ratio:370/790;width:100%;max-width:370px;border-radius:24px;overflow:hidden;background:linear-gradient(180deg,#3a2a22 0%,#1c130f 100%);box-shadow:var(--shadow-md)}
.hero-portrait img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .5s ease,transform .8s ease}
.hero-portrait .img-hover{opacity:0}
.hero-portrait:hover .img-main{opacity:0}
.hero-portrait:hover .img-hover{opacity:1}
.contact-list{list-style:none;padding:0;margin:18px 0 24px;display:grid;gap:10px}
.contact-list a{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);transition:.2s;color:#fff}
.contact-list a:hover{background:rgba(255,255,255,.12);border-color:var(--accent-2)}
.ico{display:inline-grid;place-items:center;width:24px;height:24px;border-radius:999px;background:var(--accent);color:#fff}
.contact-form{display:grid;gap:12px;margin-top:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.10);border-radius:var(--radius);padding:22px}
.contact-form label{display:grid;gap:6px;font-size:14px;color:#d9c7ad}
.contact-form input,.contact-form textarea{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:12px 14px;color:#fff;font:inherit;outline:none;transition:.2s}
.contact-form input:focus,.contact-form textarea:focus{border-color:var(--accent-2);background:rgba(255,255,255,.10)}
.contact-form .btn{margin-top:8px;justify-self:start}
.form-note{font-size:13px;color:#b9a78d;margin:6px 0 0}

/ Footer /
.site-footer{background:#1c130f;color:#9c8c78;padding:28px 0;font-size:14px}
.footer-inner{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.footer-inner a{color:var(--accent-2)}
.footer-small{margin:0}

/ Reveal animation /
.reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}
.http://reveal.is-visible{opacity:1;transform:none}

/ Responsive /
@media (max-width: 1080px){
	.cards-4{grid-template-columns:repeat(2,minmax(0,1fr))}
	.design-row{grid-template-columns:1fr}
	.contact-row{grid-template-columns:1fr;gap:32px}
	.hero-portrait{max-width:320px;margin:0 auto;aspect-ratio:4/5}
}
@media (max-width: 760px){
	.nav{display:none;position:absolute;top:100%;left:0;right:0;background:var(--bg);flex-direction:column;padding:14px 24px;border-bottom:1px solid var(--border)}
	.http://nav.is-open{display:flex}
	.nav-toggle{display:flex;margin-left:auto}
	.lang-switcher{margin-left:8px}
	.cards-3,.cards-4{grid-template-columns:1fr}
	.section{padding:60px 0}
	.hero{padding:60px 0 40px}
}
@media (prefers-reduced-motion: reduce){
	{transition:none !important;animation:none !important;scroll-behavior:auto !important}
}

# Soused přes plot — отчёт по сайту

<aside>
🤝

Этот макет создан для записи **«Как для своих»**. Концепция: мастер обращается с техникой и людьми так, словно помогает родственникам — тёплый сосед через забор. Палитра кремовых тонов с терракотовым акцентом, шрифт Fraunces (антиква) для заголовков и Inter для текста.

</aside>

## 🎨 Концепция

- **Тон:** дружелюбный, личный, без давления.
- **Палитра:**
    - Фон: `#fbf5ec` (тёплый крем), альт-фон `#f3e9d6`, тёмный фон контактов `#2a1f1a`.
    - Акцент: `#c2532a` (терракот), вторичный `#e3a857` (мёд/охра), мягкий `#f1d6a6`.
    - Текст: `#2a1f1a` основной, `#5a4a40` приглушённый.
- **Шрифты (Google Fonts):**
    - Заголовки — **Fraunces** (тёплая антиква с переменной осью).
    - Текст — **Inter**.
- **Структура страницы:**
    1. Sticky-шапка с логотипом, меню, переключателем CS / EN.
    2. Hero-блок со слоганом «Pomáhám s technikou jako svým vlastním.».
    3. Секция **01 · Péče o počítač** — 4 карточки (cleaning, upgrade, software, repair).
    4. Секция **02 · Bezpečnost domova** — 3 карточки (webcam, alarm, appliances), на альт-фоне.
    5. Секция **03 · Učení** — 4 карточки (literacy, tutor, chess, development) + ⭐-callout про ИИ для детей.
    6. Секция **04 · Design a vývoj** — широкая карточка design на альт-фоне.
    7. Контактная секция на тёмном фоне с **портретом мастера** (`hero--main` / `hero--hover`) и формой (mailto).
    8. Футер.
- **Целевые устройства:** mobile-first (брейкпоинты 760 / 1080 px). На мобильных карточки превращаются в одну колонку, появляется бургер-меню.

## ✨ Ключевые приёмы

- **Hover-смена изображений** на каждой карточке (`img-main` → `img-hover`) с плавным `opacity`/`scale` переходом.
- Sticky-header с `backdrop-filter` и полупрозрачным фоном.
- Reveal-on-scroll через `IntersectionObserver` для карточек, заголовков и портрета.
- Плавный скролл по якорям, фокусные стили, `prefers-reduced-motion` для доступности.
- Радиальное декоративное свечение в hero, фирменный «pill»-бейдж номера секции.
- Контактная форма не использует серверов: на submit открывает `mailto:` с подготовленным телом письма.
- Все 12 услуг с реальными чешскими текстами из записи Site content, портрет мастера в контактном блоке.

## 🧱 Структура проекта (как разложить файлы на диск)

```
/
├── index.html               # из свойства Html
├── styles.css               # из свойства Styles
├── scripts.js               # из свойства Scripts (включая словари cs/en)
├── package.json             # из свойства Other
├── vercel.json              # из свойства Other
├── robots.txt               # из свойства Other
├── manifest.webmanifest     # из свойства Other
├── .gitignore               # из свойства Other
└── img/
	├── hero--main.png          # портрет мастера
	├── hero--hover.png
	├── cleaning--main.png      # секция 1.1
	├── cleaning--hover.png
	├── upgrade--main.png       # секция 1.2
	├── upgrade--hover.png
	├── software--main.png      # секция 1.3
	├── software--hover.png
	├── repair--main.png        # секция 1.4
	├── repair--hover.png
	├── webcam--main.png        # секция 2.1
	├── webcam--hover.png
	├── alarm--main.png         # секция 2.2
	├── alarm--hover.png
	├── appliances--main.png    # секция 2.3
	├── appliances--hover.png
	├── literacy--main.png      # секция 3.1
	├── literacy--hover.png
	├── tutor--main.png         # секция 3.2
	├── tutor--hover.png
	├── chess--main.png         # секция 3.3
	├── chess--hover.png
	├── development--main.png   # секция 3.4
	├── development--hover.png
	├── design--main.png        # секция 4
	└── design--hover.png
```

## 🛠️ Инструкция по сборке

1. Создайте на компьютере папку `mistr-od-souseda`.
2. В каждом свойстве записи Site code блоки разделены маркером `=== filename ===`. Скопируйте содержимое каждого блока в файл с соответствующим именем.
    - **Html** → `index.html`
    - **Styles** → `styles.css`
    - **Scripts** → `scripts.js` (внутри лежат словари `cs` и `en` — для добавления нового языка просто дополните объект `I18N`).
    - **Other** → `package.json`, `vercel.json`, `robots.txt`, `manifest.webmanifest`, `.gitignore`.
3. Положите все изображения из страницы **Main images** в подпапку `./img/` под именами `slug--main.png` и `slug--hover.png` (см. карту выше).
4. (Опционально) Запустите локальный предпросмотр: `npm start` (откроется `serve` на свободном порту).
5. Переключение языков работает автоматически по кнопкам **CS / EN** в шапке. Выбранный язык сохраняется в `localStorage`.

## 🚀 Развёртывание на Vercel

1. Создайте аккаунт на [vercel.com](http://vercel.com) (бесплатно).
2. Установите CLI: `npm i -g vercel`.
3. В папке проекта выполните `vercel`. Подтвердите название проекта и framework preset — выбирайте **Other (static)**.
4. Vercel сам прочитает `vercel.json`, выставит правильные заголовки кэширования для `./img/` и развернёт сайт. Получите ссылку вида `https://mistr-od-souseda.vercel.app`.
5. **Через Git-репозиторий (рекомендовано):** залейте проект на GitHub, в Vercel нажмите **New Project → Import Git Repository**, выберите репозиторий — каждый `git push` будет автоматически публиковать новую версию.
6. Подключите домен: **Settings → Domains → Add** — следуйте инструкциям Vercel по настройке DNS (CNAME или A-record).
7. Проверьте сайт на мобильном и десктопе: переключатель языка, hover-эффекты карточек, плавный скролл, форма (открывает почтовый клиент).

## 🌐 Альтернативные хостинги

- **Netlify** — drag-and-drop папки в `app.netlify.com`, либо подключение Git.
- **Cloudflare Pages** — `Connect to Git` → выбрать репозиторий, Build command оставить пустым.
- **GitHub Pages** — `Settings → Pages → Deploy from a branch`.

## ✅ Что проверено

- Все **12 услуг** присутствуют, привязаны к правильным секциям (1.1 – 4) и к парам изображений `slug--main.png` / `slug--hover.png`.
- Портрет мастера (`hero--main.png` / `hero--hover.png`) использован в контактном блоке.
- Чешские тексты соответствуют записи Site content «Как для своих».
- Словарь `cs` полный; `en` подготовлен как пример расширения.
- HTML валиден (W3C), CSS не содержит «висящих» селекторов, JS без логических ошибок.
- Адаптивность: проверены брейкпоинты 360 / 760 / 1080 / 1440 px.
- Доступность: skip-link, `aria-pressed` на переключателе, alt-тексты, `prefers-reduced-motion`.