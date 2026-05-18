# Kávový servis — sousedský počítačový web

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs" data-theme="warm">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title data-i18n="meta.title">Počítačový soused — výjezdový servis bez starostí</title>
  <meta name="description" content="Výjezdový počítačový servis, chytrá domácnost, výuka IT, šachy a design. První diagnostika zdarma.">
  <meta name="theme-color" content="#2f5d62">
  <meta property="og:title" content="Počítačový soused">
  <meta property="og:description" content="Promluvme si o vašem počítači — u kávy a bez starostí.">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./styles.css">
  <link rel="manifest" href="./manifest.webmanifest">
  <script src="./i18n.js" defer></script>
  <script src="./app.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">Přeskočit na obsah</a>

  <header class="site-header" id="top">
    <nav class="nav container" aria-label="Hlavní navigace">
      <a class="brand" href="#top" aria-label="Počítačový soused">
        ☕
        Počítačový soused
      </a>

      <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-menu">
        
        Otevřít menu
      </button>

      <div class="nav__menu" id="nav-menu">
        <a href="#services" data-i18n="http://nav.services">Služby</a>
        <a href="#process" data-i18n="nav.process">Jak to probíhá</a>
        <a href="#trust" data-i18n="http://nav.trust">Proč já</a>
        <a href="#contact" data-i18n="http://nav.contact">Kontakt</a>
        <label class="language-switch" for="language">
          Jazyk
          <select id="language" aria-label="Vybrat jazyk">
            <option value="cs">CS</option>
          </select>
        </label>
      </div>
    </nav>
  </header>

  <main id="main">
    <section class="hero section">
      <div class="hero__glow hero__glow--one"></div>
      <div class="hero__glow hero__glow--two"></div>

      <div class="hero__grid container">
        <div class="hero__copy reveal">
          <p class="eyebrow" data-i18n="hero.eyebrow">Výjezd a první diagnostika zdarma</p>
          <h1 data-i18n="hero.title">Promluvme si o vašem počítači — u kávy a bez starostí.</h1>
          <p class="hero__lead" data-i18n="hero.lead">Klidná pomoc doma: počítače, kamery, chytrá domácnost, výuka, šachy i design. Bez nátlaku, bez složitých slov — jen poctivá rada od souseda.</p>

          <div class="hero__actions">
            <a class="button button--primary" href="mailto:kontakt@pocitacovy-soused.cz?subject=Prosím%20o%20konzultaci" data-i18n="hero.primaryCta">Napsat e-mail</a>
            <a class="button button--ghost" href="#services" data-i18n="hero.secondaryCta">Prohlédnout služby</a>
          </div>

          <dl class="hero__stats" aria-label="Výhody">
            <div>
              <dt>0 Kč</dt>
              <dd data-i18n="hero.stat1">první diagnostika</dd>
            </div>
            <div>
              <dt>12</dt>
              <dd data-i18n="hero.stat2">praktických služeb</dd>
            </div>
            <div>
              <dt>1:1</dt>
              <dd data-i18n="hero.stat3">lidský přístup</dd>
            </div>
          </dl>
        </div>

        <div class="hero__visual reveal" aria-label="Mistr počítačových služeb">
          <div class="hero-card">
            <img class="hero-card__img hero-card__img--main" src="./img/hero--main.png" alt="Počítačový mistr" width="370" height="790" loading="eager">
            <img class="hero-card__img hero-card__img--hover" src="./img/hero--hover.png" alt="" width="370" height="790" loading="eager" aria-hidden="true">
            <div class="hero-card__note">
              <strong data-i18n="hero.noteTitle">Nejdřív si popovídáme.</strong>
              Pak vybereme řešení, které opravdu dává smysl.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section services" id="services">
      <div class="container section__head reveal">
        <p class="eyebrow" data-i18n="services.eyebrow">Co pro vás zařídím</p>
        <h2 data-i18n="services.title">Dvanáct služeb, jedna klidná domluva</h2>
        <p data-i18n="services.lead">Od vyčištění notebooku až po první lekci šachu. Všechny služby přijedou za vámi domů a začínají rozhovorem, ne účtenkou.</p>
      </div>

      <div class="container category-strip reveal" role="list" aria-label="Kategorie služeb">
        <a href="#care" role="listitem">🖥️ Péče o počítač</a>
        <a href="#security" role="listitem">🔒 Bezpečí</a>
        <a href="#learning" role="listitem">🎓 Učení</a>
        <a href="#design" role="listitem">🎨 Design</a>
      </div>

      <div class="container service-groups" id="service-groups" aria-live="polite"></div>
    </section>

    <section class="section process" id="process">
      <div class="container process__grid">
        <div class="section__head reveal">
          <p class="eyebrow" data-i18n="process.eyebrow">Jak to probíhá</p>
          <h2 data-i18n="process.title">Žádná panika. Jen tři klidné kroky.</h2>
        </div>

        <ol class="steps reveal">
          <li>
            01
            <h3 data-i18n="process.step1Title">Napíšete nebo zavoláte</h3>
            <p data-i18n="process.step1Text">Krátce mi řeknete, co se děje, a domluvíme vhodný čas návštěvy.</p>
          </li>
          <li>
            02
            <h3 data-i18n="process.step2Title">Přijedu a podíváme se na to</h3>
            <p data-i18n="process.step2Text">První diagnostika a posouzení jsou zdarma. Vysvětlím možnosti srozumitelně.</p>
          </li>
          <li>
            03
            <h3 data-i18n="process.step3Title">Vyřešíme jen to, co má smysl</h3>
            <p data-i18n="process.step3Text">Doporučím praktické řešení bez zbytečných výdajů a prodejního tlaku.</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section trust" id="trust">
      <div class="container trust__grid">
        <div class="trust__panel reveal">
          <p class="eyebrow" data-i18n="trust.eyebrow">Proč sousedský servis</p>
          <h2 data-i18n="trust.title">Technika má sloužit lidem, ne naopak.</h2>
          <p data-i18n="trust.text">Mluvím normálně, pracuji pečlivě a doporučuji jen věci, které bych udělal i pro vlastní rodinu. Ať jde o dítě, seniora nebo malou firmu, cílem je klid a funkční řešení.</p>
        </div>

        <div class="trust__cards reveal">
          <article>
            🤝
            <h3 data-i18n="trust.card1Title">Bez nátlaku</h3>
            <p data-i18n="trust.card1Text">Nejdřív vysvětlím, potom se rozhodnete.</p>
          </article>
          <article>
            🏠
            <h3 data-i18n="trust.card2Title">Doma u vás</h3>
            <p data-i18n="trust.card2Text">Nemusíte nikam nosit těžký počítač.</p>
          </article>
          <article>
            🧠
            <h3 data-i18n="trust.card3Title">IT i výuka</h3>
            <p data-i18n="trust.card3Text">Servis, AI, informatika i šachy v jednom.</p>
          </article>
          <article>
            ✨
            <h3 data-i18n="trust.card4Title">Praktický design</h3>
            <p data-i18n="trust.card4Text">Když má být vaše práce také vidět.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="container contact__grid">
        <div class="contact__copy reveal">
          <p class="eyebrow" data-i18n="contact.eyebrow">Kontakt</p>
          <h2 data-i18n="contact.title">Stačí napsat pár řádků.</h2>
          <p data-i18n="contact.text">Stačí zvednout telefon nebo napsat pár řádků — domluvíme se v klidu a beze spěchu. Příjezd k vám i první diagnostika nestojí ani korunu. Těším se na vás.</p>

          <div class="contact__links">
            <a href="tel:+420777000000" aria-label="Zavolat na telefon +420 777 000 000">+420 777 000 000</a>
            <a href="mailto:kontakt@pocitacovy-soused.cz">kontakt@pocitacovy-soused.cz</a>
            <a href="https://wa.me/420777000000" rel="noopener" target="blank">WhatsApp</a>
          </div>
        </div>

        <form class="contact-form reveal" action="mailto:kontakt@pocitacovy-soused.cz" method="post" enctype="text/plain">
          <label>
            Vaše jméno
            <input name="name" type="text" autocomplete="name" required>
          </label>
          <label>
            E-mail nebo telefon
            <input name="contact" type="text" autocomplete="email" required>
          </label>
          <label>
            Co potřebujete vyřešit?
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button class="button button--primary" type="submit" data-i18n="form.submit">Odeslat přes e-mail</button>
          <p class="form-note" data-i18n="form.note">Formulář otevře váš e-mailový program. Neodesílá nic na server.</p>
        </form>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer_grid">
      <p>©  Počítačový soused</p>
      <a href="#top" data-i18n="http://footer.top">Zpět nahoru</a>
    </div>
  </footer>
</body>
</html>
Other: === manifest.webmanifest ===
{
  "name": "Počítačový soused",
  "short_name": "Servis",
  "description": "Výjezdový počítačový servis bez starostí.",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#fff9ef",
  "theme_color": "#2f5d62",
  "icons": []
}

=== robots.txt ===
User-agent: *
Allow: /

=== README-IMAGES.txt ===
Vytvořte složku ./img/ vedle souboru index.html a vložte do ní tyto soubory:

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

Poznámka: telefon +420 777 000 000 a e-mail mailto:kontakt@pocitacovy-soused.cz jsou pracovní zástupné kontakty. Před publikací je nahraďte skutečnými údaji.
Scripts: === i18n.js ===
http://window.SITE_I18N = {
  defaultLanguage: "cs",
  languages: {
    cs: {
      meta: {
        title: "Počítačový soused — výjezdový servis bez starostí"
      },
      brand: "Počítačový soused",
      nav: {
        services: "Služby",
        process: "Jak to probíhá",
        trust: "Proč já",
        contact: "Kontakt",
        language: "Jazyk"
      },
      hero: {
        eyebrow: "Výjezd a první diagnostika zdarma",
        title: "Promluvme si o vašem počítači — u kávy a bez starostí.",
        lead: "Klidná pomoc doma: počítače, kamery, chytrá domácnost, výuka, šachy i design. Bez nátlaku, bez složitých slov — jen poctivá rada od souseda.",
        primaryCta: "Napsat e-mail",
        secondaryCta: "Prohlédnout služby",
        stat1: "první diagnostika",
        stat2: "praktických služeb",
        stat3: "lidský přístup",
        noteTitle: "Nejdřív si popovídáme.",
        noteText: "Pak vybereme řešení, které opravdu dává smysl."
      },
      services: {
        eyebrow: "Co pro vás zařídím",
        title: "Dvanáct služeb, jedna klidná domluva",
        lead: "Od vyčištění notebooku až po první lekci šachu. Všechny služby přijedou za vámi domů a začínají rozhovorem, ne účtenkou.",
        more: "Domluvit konzultaci"
      },
      categories: {
        care: "Péče o počítač",
        security: "Bezpečí",
        learning: "Učení",
        design: "Design"
      },
      serviceGroups: [
        {
          id: "care",
          icon: "🖥️",
          title: "Péče o počítač",
          items: [
            {
              section: "1.1",
              slug: "cleaning",
              title: "Počítačová úklidová péče",
              alt: "Čištění počítače",
              text: "Někdy stačí, aby si počítač jen tak povzdechl pod nánosem prachu, a hned se z něj stane neposlušný společník. Zpomaluje, hřeje, ventilátor hučí jako stará lednička. Přijdu k vám domů, v klidu si techniku prohlédnu a vyčistím ji od prachu, vyměním teplovodivou pastu a promažu větráky. Výjezd i první diagnostika jsou zdarma — platíte jen za skutečnou práci. Váš počítač se zase nadechne a vy ušetříte nervy i peníze."
            },
            {
              section: "1.2",
              slug: "upgrade",
              title: "Moudrá modernizace",
              alt: "Modernizace počítače",
              text: "Říkáte si, že už je čas koupit nový notebook? Ještě chvíli počkejte. Někdy stačí přidat rychlý SSD disk, trochu paměti nebo vyměnit baterii a vaše věrná technika ožije, jako by právě vyšla z obchodu. Sednu si k vám domů, společně se podíváme, co dává smysl, a doporučím jen to, co opravdu pomůže. Výjezd i posouzení jsou zdarma. Místo zbytečného nákupu uděláte chytrou investici, která vydrží další roky."
            },
            {
              section: "1.3",
              slug: "software",
              title: "Windows a programy v pořádku",
              alt: "Nastavení softwaru",
              text: "Stává se vám, že Windows začne dělat scény — pomalu se spouští, hlásí nesmysly, někde vyskakují reklamy? Většinou je to jen tím, že systém je přeplněný a možná chytil i nějaký virus. Přijdu k vám, počítač pořádně uklidím, nastavím od základu, nainstaluji programy pro práci, školu i zábavu a pomůžu vyřídit i ty otravné formuláře na úřadě. Diagnostika i příjezd jsou zdarma. Od vašeho stolu odejdu, až bude všechno fungovat tak, jak má."
            },
            {
              section: "1.4",
              slug: "repair",
              title: "Oprava bez zbytečných slibů",
              alt: "Oprava počítače",
              text: "Než hodíte starý počítač do koše, dejte mu ještě šanci. Často stačí vyměnit jednu součástku a všechno se zase rozjede — a vy ušetříte tisíce korun. Přijdu se k vám podívat zdarma a řeknu na rovinu, jestli má smysl opravovat, nebo už ne. Pokud ne, klidně si techniku odvezu na náhradní díly a vy se nemusíte starat o ekologickou likvidaci. Bez tlaku, bez prodejních triků — jen upřímná rada od souseda."
            }
          ]
        },
        {
          id: "security",
          icon: "🔒",
          title: "Bezpečí domova",
          items: [
            {
              section: "2.1",
              slug: "webcam",
              title: "Webkamery pro klid",
              alt: "Domácí kamera",
              text: "Občas přijde chvíle, kdy nejste doma, a srdce zatrne — co když se něco děje? Klid přinesou kamery, které vidí za vás. Připojím vám tolik domácích nebo venkovních kamer, kolik potřebujete, ať máte přehled o vchodu, zahradě i o tom, jestli pejsek neutekl. Z mobilu se podíváte kdykoli a v případě potřeby si i popovídáte s návštěvou u dveří. Příjezd i poradenství jsou zdarma — a vy doma i v práci konečně dýcháte zhluboka."
            },
            {
              section: "2.2",
              slug: "alarm",
              title: "Domácí alarm",
              alt: "Domácí alarm",
              text: "O bezpečí domova se mluví špatně, dokud se něco nestane. Pojďme si o tom promluvit dřív, než bude pozdě. Přijdu k vám, namontuji přímo na dveře bytu nebo garáže dálkově ovládaný alarm s hlasitou sirénou a SMS upozorněním. Výjezd i posouzení jsou zdarma. Když odjedete na dovolenou nebo na chalupu, budete spát klidněji — a o to přece jde."
            },
            {
              section: "2.3",
              slug: "appliances",
              title: "Chytrá domácnost",
              alt: "Chytré spotřebiče",
              text: "Moderní spotřebiče se naučily rozumět nám lidem, jen jim k tomu občas chybí někdo, kdo jim ukáže cestu. Pomůžu vám zprovoznit chytrou domácnost — propojím světla, termostat, Smart TV i robotický vysavač do jedné aplikace v telefonu. Trpělivě vás vším provedu a naučím obsluhu tak, aby technika sloužila vám, ne naopak. Výjezd a první konzultace jsou zdarma. Až odejdu, budete mít doma malého neviditelného pomocníka."
            }
          ]
        },
        {
          id: "learning",
          icon: "🎓",
          title: "Učení pro děti i dospělé",
          items: [
            {
              section: "3.1",
              slug: "literacy",
              title: "Počítačová gramotnost",
              alt: "Výuka počítače pro dospělé",
              text: "Říkáte si, že počítače jsou pro mladé? Vůbec ne. Ukážu vám klidně a beze spěchu, jak si zařídit věci na úřadě bez front, zavolat vnoučatům přes obrazovku nebo si nechat od umělé inteligence pomoct s receptem či dopisem. Učím tempem, které vyhovuje vám, a tolikrát, kolikrát potřebujete. Výjezd domů i první hodina seznámení jsou zdarma. Uvidíte, že počítač je nakonec docela milý společník."
            },
            {
              section: "3.2",
              slug: "tutor",
              title: "Doučování informatiky",
              alt: "Doučování informatiky",
              text: "Mluvme spolu jako dospělí: dnešní informatika ve škole je rychlá, někdy zmatená, a děti se v ní snadno ztratí. Mám vysokoškolské vzdělání v IT a roky zkušeností s výukou ještě z doktorského studia. K vám domů přijdu, posadím se s vaším dítětem k jednomu stolu a ukážu mu, že programování i počítače mohou být i zábava. První setkání i příjezd jsou zdarma — abyste viděli, jestli si rozumíme."
            },
            {
              section: "3.3",
              slug: "chess",
              title: "Šachy pro bystrou hlavu",
              alt: "Výuka šachu",
              text: "Šachy nejsou jen hra — je to malá životní škola trpělivosti a chladné hlavy. Hraju moc rád a ještě raději to předávám dál, hlavně dětem. Přijdu k vám domů, sedneme si k šachovnici a uvidíte, jak vaše dítě začne přemýšlet o pár tahů dopředu — nejen u hry, ale i ve škole. První lekce i výjezd jsou zdarma. Někdy se velké změny rodí u malých dřevěných figurek."
            },
            {
              section: "3.4",
              slug: "development",
              title: "AI a vysoké technologie",
              alt: "Výuka umělé inteligence",
              text: "Po pravdě řečeno — kdo dnes neumí pracovat s umělou inteligencí, bude to mít v životě těžší. Ale není čeho se bát. Naučím vaše děti, jak si od AI nechat pomoct s úkoly, projekty i s tím, čemu zrovna nerozumí ve škole. Ne jen opsat odpověď, ale opravdu pochopit. Příjezd i úvodní hodina jsou zdarma. Dáte tím dětem náskok, který se za peníze koupit nedá."
            }
          ]
        },
        {
          id: "design",
          icon: "🎨",
          title: "Design a viditelnost",
          items: [
            {
              section: "4",
              slug: "design",
              title: "Letáky, weby a katalogy",
              alt: "Grafický a webový design",
              text: "Máte malou firmu, spolek nebo nápad, který si zaslouží být vidět? Jsem vystudovaný vývojář a rád pomůžu i s tím, co je krásné na pohled. Navrhnu vám letáky, plakáty, webové stránky nebo katalog služeb tak, aby se za ně nestyděl ani velký řetězec. Nejdřív se sejdeme, popovídáme si o tom, co potřebujete, a teprve potom začnu tvořit — bezplatná první konzultace je samozřejmost. Z vašeho nápadu uděláme něco, co si lidé zapamatují."
            }
          ]
        }
      ],
      process: {
        eyebrow: "Jak to probíhá",
        title: "Žádná panika. Jen tři klidné kroky.",
        step1Title: "Napíšete nebo zavoláte",
        step1Text: "Krátce mi řeknete, co se děje, a domluvíme vhodný čas návštěvy.",
        step2Title: "Přijedu a podíváme se na to",
        step2Text: "První diagnostika a posouzení jsou zdarma. Vysvětlím možnosti srozumitelně.",
        step3Title: "Vyřešíme jen to, co má smysl",
        step3Text: "Doporučím praktické řešení bez zbytečných výdajů a prodejního tlaku."
      },
      trust: {
        eyebrow: "Proč sousedský servis",
        title: "Technika má sloužit lidem, ne naopak.",
        text: "Mluvím normálně, pracuji pečlivě a doporučuji jen věci, které bych udělal i pro vlastní rodinu. Ať jde o dítě, seniora nebo malou firmu, cílem je klid a funkční řešení.",
        card1Title: "Bez nátlaku",
        card1Text: "Nejdřív vysvětlím, potom se rozhodnete.",
        card2Title: "Doma u vás",
        card2Text: "Nemusíte nikam nosit těžký počítač.",
        card3Title: "IT i výuka",
        card3Text: "Servis, AI, informatika i šachy v jednom.",
        card4Title: "Praktický design",
        card4Text: "Když má být vaše práce také vidět."
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Stačí napsat pár řádků.",
        text: "Stačí zvednout telefon nebo napsat pár řádků — domluvíme se v klidu a beze spěchu. Příjezd k vám i první diagnostika nestojí ani korunu. Těším se na vás."
      },
      form: {
        name: "Vaše jméno",
        email: "E-mail nebo telefon",
        message: "Co potřebujete vyřešit?",
        submit: "Odeslat přes e-mail",
        note: "Formulář otevře váš e-mailový program. Neodesílá nic na server."
      },
      footer: {
        top: "Zpět nahoru"
      }
    }
  }
};

=== app.js ===
(function () {
  const state = {
    language: localStorage.getItem("site-language") || http://window.SITE_I18N.defaultLanguage || "cs"
  };

  const getDictionary = () => {
    return http://window.SITE_I18N.languages[state.language] || http://window.SITE_I18N.languages.cs;
  };

  const getValue = (path, dictionary = getDictionary()) => {
    return path.split(".").reduce((value, key) => value && value[key], dictionary);
  };

  const translatePage = () => {
    const dictionary = getDictionary();
    document.documentElement.lang = state.language;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = getValue(node.dataset.i18n, dictionary);
      if (typeof value === "string") {
        node.textContent = value;
      }
    });

    const title = getValue("meta.title", dictionary);
    if (title) {
      document.title = title;
    }
  };

  const renderServices = () => {
    const dictionary = getDictionary();
    const root = document.getElementById("service-groups");
    if (!root) return;

    const groups = dictionary.serviceGroups || [];
    const moreText = http://dictionary.services?.more || "Kontakt";
    root.innerHTML = http://groups.map((group) => {
      const cards = http://group.items.map((item) => {
        const mainSrc = ./img/${item.slug}--main.png;
        const hoverSrc = ./img/${item.slug}--hover.png;

        return 
          <article class="service-card reveal" id="${item.slug}">
            <div class="service-card__media">
              <img class="main-img" src="${mainSrc}" alt="${item.alt}" loading="lazy">
              <img class="hover-img" src="${hoverSrc}" alt="" loading="lazy" aria-hidden="true">
            </div>
            <span class="service-card__section">${item.section}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a class="service-card__link" href="#contact">${moreText} →</a>
          </article>
        ;
      }).join("");

      return 
        <section class="service-group" id="${group.id}">
          <h3 class="service-group__title"><span>${group.icon}</span>${group.title}</h3>
          <div class="cards">${cards}</div>
        </section>
      ;
    }).join("");
  };

  const setupMenu = () => {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;

    const setOpen = (isOpen) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      menu.classList.toggle("is-open", isOpen);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  };

  const setupLanguage = () => {
    const select = document.getElementById("language");
    if (!select) return;

    const available = Object.keys(http://window.SITE_I18N.languages);
    select.innerHTML = http://available.map((code) => <option value="${code}">${code.toUpperCase()}</option>).join("");
    select.value = state.language;

    select.addEventListener("change", () => {
      state.language = select.value;
      localStorage.setItem("site-language", state.language);
      translatePage();
      renderServices();
      setupRevealObserver();
    });
  };

  let revealObserver;

  const setupRevealObserver = () => {
    if (revealObserver) {
      revealObserver.disconnect();
    }

    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          http://entry.target.classList.add("is-visible");
          revealObserver.unobserve(http://entry.target);
        }
      });
    }, { threshold: 0.16 });

    nodes.forEach((node) => revealObserver.observe(node));
  };

  const setupCurrentYear = () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  };

  const boot = () => {
    translatePage();
    renderServices();
    setupLanguage();
    setupMenu();
    setupCurrentYear();
    setupRevealObserver();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
Styles: === styles.css ===
:root {
  --bg: #fff9ef;
  --bg-2: #f3eadb;
  --paper: rgba(255, 255, 255, 0.78);
  --paper-strong: #ffffff;
  --ink: #203032;
  --muted: #687678;
  --brand: #2f5d62;
  --brand-2: #e28f55;
  --brand-3: #f5c16c;
  --accent: #7e5bef;
  --line: rgba(32, 48, 50, 0.13);
  --shadow: 0 24px 70px rgba(47, 93, 98, 0.18);
  --radius-lg: 34px;
  --radius-md: 22px;
  --radius-sm: 14px;
  --container: 1180px;
  --font-sans: "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-display: "Playfair Display", Georgia, serif;
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
    radial-gradient(circle at top left, rgba(245, 193, 108, 0.35), transparent 34rem),
    radial-gradient(circle at 80% 10%, rgba(126, 91, 239, 0.13), transparent 28rem),
    linear-gradient(180deg, var(--bg), #fffdf8 45%, var(--bg-2));
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  overflow-x: hidden;
}

img {
  display: block;
  max-width: 100%;
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

button {
  cursor: pointer;
}

.container {
  width: min(100% - 32px, var(--container));
  margin-inline: auto;
}

.section {
  padding: clamp(64px, 9vw, 120px) 0;
  position: relative;
}

.section__head {
  max-width: 760px;
  margin-bottom: 34px;
}

.section__head h2,
.hero h1,
.trust__panel h2,
.contact__copy h2,
.process h2 {
  margin: 0;
  font-family: var(--font-display);
  line-height: 1.05;
  letter-spacing: -0.035em;
}

.section__head h2,
.trust__panel h2,
.contact__copy h2,
.process h2 {
  font-size: clamp(2.15rem, 5vw, 4.4rem);
}

.section__head p:not(.eyebrow),
.hero__lead,
.trust__panel p,
.contact__copy p {
  color: var(--muted);
  font-size: clamp(1rem, 2vw, 1.15rem);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0 0 14px;
  color: var(--brand);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.eyebrow::before {
  content: "";
  width: 26px;
  height: 2px;
  border-radius: 999px;
  background: var(--brand-2);
}

.skip-link {
  position: fixed;
  left: 16px;
  top: 12px;
  z-index: 100;
  padding: 10px 14px;
  border-radius: 999px;
  background: var(--ink);
  color: #fff;
  transform: translateY(-160%);
  transition: transform 0.2s ease;
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(255, 249, 239, 0.78);
  border-bottom: 1px solid var(--line);
}

.nav {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: var(--paper-strong);
  box-shadow: 0 12px 32px rgba(47, 93, 98, 0.12);
}

.nav__menu {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2.4vw, 28px);
  color: #405052;
  font-weight: 700;
}

.nav__menu a {
  position: relative;
}

.nav__menu a::after {
  content: "";
  position: absolute;
  inset: auto 0 -8px;
  height: 2px;
  border-radius: 999px;
  background: var(--brand-2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.nav__menu a:hover::after,
.nav__menu a:focus-visible::after {
  transform: scaleX(1);
}

.language-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 8px 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
}

.language-switch select {
  border: 0;
  border-radius: 999px;
  background: var(--brand);
  color: #fff;
  padding: 7px 10px;
  font-weight: 800;
}

.nav__toggle {
  display: none;
  width: 46px;
  height: 46px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.72);
}

.nav__toggle span:not(.sr-only) {
  display: block;
  width: 20px;
  height: 2px;
  margin: 5px auto;
  background: var(--ink);
  border-radius: 999px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav__toggle[aria-expanded="true"] span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav__toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.nav__toggle[aria-expanded="true"] span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.hero {
  min-height: calc(100svh - 76px);
  display: grid;
  align-items: center;
  padding-top: clamp(42px, 7vw, 90px);
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(280px, 0.76fr);
  gap: clamp(34px, 6vw, 78px);
  align-items: center;
}

.hero h1 {
  max-width: 820px;
  font-size: clamp(3rem, 8vw, 7.4rem);
}

.hero__lead {
  max-width: 690px;
  margin: 24px 0 0;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 13px 22px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 900;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button--primary {
  background: var(--brand);
  color: #fff;
  box-shadow: 0 18px 40px rgba(47, 93, 98, 0.24);
}

.button--ghost {
  background: rgba(255, 255, 255, 0.68);
  color: var(--brand);
  border-color: var(--line);
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 44px 0 0;
  max-width: 660px;
}

.hero__stats div {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.55);
}

.hero__stats dt {
  font-size: 1.65rem;
  font-weight: 900;
  color: var(--brand);
}

.hero__stats dd {
  margin: 2px 0 0;
  color: var(--muted);
  font-weight: 700;
}

.hero__visual {
  position: relative;
}

.hero-card {
  position: relative;
  width: min(100%, 440px);
  min-height: 600px;
  margin-inline: auto;
  border-radius: 44px;
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.35)),
    radial-gradient(circle at 50% 20%, rgba(245, 193, 108, 0.32), transparent 55%);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.hero-card::before {
  content: "";
  position: absolute;
  inset: 28px;
  border: 1px dashed rgba(47, 93, 98, 0.22);
  border-radius: 34px;
}

.hero-card__img {
  position: absolute;
  inset: auto 50% 0 auto;
  transform: translateX(50%);
  width: min(78%, 370px);
  max-height: 92%;
  object-fit: contain;
  object-position: bottom center;
  transition: opacity 0.35s ease, transform 0.45s ease;
}

.hero-card__img--hover {
  opacity: 0;
}

.hero-card:hover .hero-card__img--main,
.hero-card:focus-within .hero-card__img--main {
  opacity: 0;
  transform: translateX(50%) scale(1.02);
}

.hero-card:hover .hero-card__img--hover,
.hero-card:focus-within .hero-card__img--hover {
  opacity: 1;
  transform: translateX(50%) scale(1.02);
}

.hero-card__note {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  display: grid;
  gap: 3px;
  padding: 16px 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 44px rgba(32, 48, 50, 0.12);
}

.hero-card__note span {
  color: var(--muted);
  font-size: 0.92rem;
}

.hero__glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(10px);
  opacity: 0.6;
  pointer-events: none;
}

.hero__glow--one {
  width: 160px;
  height: 160px;
  background: rgba(226, 143, 85, 0.22);
  left: 6%;
  top: 16%;
  animation: float 7s ease-in-out infinite;
}

.hero__glow--two {
  width: 220px;
  height: 220px;
  background: rgba(47, 93, 98, 0.12);
  right: 9%;
  bottom: 14%;
  animation: float 8s ease-in-out infinite reverse;
}

.category-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
}

.category-strip a {
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.62);
  color: #405052;
  font-weight: 800;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.category-strip a:hover,
.category-strip a:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(47, 93, 98, 0.38);
}

.service-groups {
  display: grid;
  gap: 34px;
}

.service-group {
  scroll-margin-top: 98px;
}

.service-group__title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 18px;
  font-size: clamp(1.45rem, 3vw, 2.2rem);
  letter-spacing: -0.02em;
}

.cards {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 18px;
}

.service-card {
  grid-column: span 4;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--paper);
  box-shadow: 0 16px 50px rgba(32, 48, 50, 0.08);
  overflow: hidden;
  isolation: isolate;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 14% 0%, rgba(245, 193, 108, 0.28), transparent 38%),
    radial-gradient(circle at 90% 18%, rgba(126, 91, 239, 0.12), transparent 30%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.service-card:hover,
.service-card:focus-within {
  transform: translateY(-7px);
  box-shadow: 0 26px 70px rgba(47, 93, 98, 0.17);
  border-color: rgba(47, 93, 98, 0.28);
}

.service-card:hover::before,
.service-card:focus-within::before {
  opacity: 1;
}

.service-card__media {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 220px;
  margin-bottom: 14px;
  border-radius: 26px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(243, 234, 219, 0.55));
  overflow: hidden;
}

.service-card__media img {
  max-height: 210px;
  object-fit: contain;
  transition: opacity 0.28s ease, transform 0.35s ease;
}

.service-card__media .hover-img {
  position: absolute;
  opacity: 0;
}

.service-card:hover .main-img,
.service-card:focus-within .main-img {
  opacity: 0;
  transform: scale(0.97) rotate(-1deg);
}

.service-card:hover .hover-img,
.service-card:focus-within .hover-img {
  opacity: 1;
  transform: scale(1.04) rotate(1deg);
}

.service-card__section {
  display: inline-flex;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(47, 93, 98, 0.09);
  color: var(--brand);
  font-size: 0.78rem;
  font-weight: 900;
}

.service-card h3 {
  margin: 12px 0 8px;
  font-size: 1.24rem;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.service-card p {
  margin: 0;
  color: var(--muted);
}

.service-card__link {
  margin-top: auto;
  padding-top: 18px;
  color: var(--brand);
  font-weight: 900;
}

.process {
  background:
    linear-gradient(90deg, rgba(47, 93, 98, 0.96), rgba(32, 48, 50, 0.96)),
    radial-gradient(circle at top right, rgba(245, 193, 108, 0.25), transparent 30rem);
  color: #fff;
}

.process .eyebrow,
.process .section__head p {
  color: #f8d89e;
}

.process__grid {
  display: grid;
  grid-template-columns: 0.82fr 1fr;
  gap: clamp(30px, 6vw, 70px);
  align-items: start;
}

.steps {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: steps;
}

.steps li {
  position: relative;
  padding: 24px 24px 24px 88px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

.steps span {
  position: absolute;
  left: 22px;
  top: 24px;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: var(--brand-3);
  color: var(--ink);
  font-weight: 900;
}

.steps h3 {
  margin: 0 0 6px;
  font-size: 1.2rem;
}

.steps p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
}

.trust__grid,
.contact__grid {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
}

.trust__panel {
  padding: clamp(24px, 4vw, 42px);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.trust__cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.trust__cards article {
  padding: 24px;
  border-radius: var(--radius-md);
  background: var(--paper);
  border: 1px solid var(--line);
}

.trust__cards span {
  font-size: 2rem;
}

.trust__cards h3 {
  margin: 14px 0 6px;
  font-size: 1.15rem;
}

.trust__cards p {
  margin: 0;
  color: var(--muted);
}

.contact {
  padding-top: 0;
}

.contact__copy {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(26px, 4vw, 46px);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(150deg, rgba(255, 255, 255, 0.74), rgba(255, 249, 239, 0.72)),
    radial-gradient(circle at top left, rgba(245, 193, 108, 0.28), transparent 24rem);
  border: 1px solid var(--line);
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.contact__links a {
  padding: 10px 14px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid var(--line);
  color: var(--brand);
  font-weight: 900;
}

.contact-form {
  display: grid;
  gap: 16px;
  padding: clamp(22px, 4vw, 38px);
  border-radius: var(--radius-lg);
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.contact-form label {
  display: grid;
  gap: 7px;
  color: #405052;
  font-weight: 800;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(32, 48, 50, 0.16);
  border-radius: 16px;
  background: #fffaf2;
  color: var(--ink);
  padding: 13px 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: rgba(47, 93, 98, 0.72);
  box-shadow: 0 0 0 4px rgba(47, 93, 98, 0.1);
}

.form-note {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.footer {
  padding: 30px 0;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.footer__grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.footer a {
  color: var(--brand);
  font-weight: 900;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.http://reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes float {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -18px, 0);
  }
}

@media (max-width: 980px) {
  .hero__grid,
  .process__grid,
  .trust__grid,
  .contact__grid {
    grid-template-columns: 1fr;
  }

  .hero-card {
    min-height: 520px;
  }

  .service-card {
    grid-column: span 6;
  }

  .process__grid .section__head {
    margin-bottom: 0;
  }
}

@media (max-width: 760px) {
  .nav__toggle {
    display: inline-block;
  }

  .nav__menu {
    position: absolute;
    left: 16px;
    right: 16px;
    top: calc(100% + 10px);
    display: grid;
    gap: 0;
    padding: 12px;
    border: 1px solid var(--line);
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: var(--shadow);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .nav__http://menu.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav__menu a,
  .language-switch {
    padding: 13px 12px;
  }

  .language-switch {
    justify-content: space-between;
    border-radius: 16px;
  }

  .hero {
    min-height: auto;
  }

  .hero__stats,
  .trust__cards {
    grid-template-columns: 1fr;
  }

  .service-card {
    grid-column: 1 / -1;
  }

  .service-card__media {
    min-height: 190px;
  }

  .steps li {
    padding-left: 24px;
  }

  .steps span {
    position: static;
    margin-bottom: 12px;
  }

  .footer__grid {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .container {
    width: min(100% - 22px, var(--container));
  }

  .section {
    padding: 54px 0;
  }

  .hero h1 {
    font-size: clamp(2.55rem, 15vw, 4rem);
  }

  .hero__actions .button {
    width: 100%;
  }

  .category-strip {
    display: grid;
    grid-template-columns: 1fr;
  }

  .hero-card {
    min-height: 430px;
    border-radius: 30px;
  }

  .hero-card__note {
    left: 14px;
    right: 14px;
    bottom: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  ,
  ::before,
  ::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}

# Отчёт по сайту

Создан статический рекламный сайт для выездного мастера компьютерных услуг в концепции **«соседский разговор за кофе»**. Визуальный стиль тёплый и спокойный: кремовый фон, зелёно-бирюзовый основной цвет, мягкие кофейно-оранжевые акценты, крупная декоративная типографика для заголовков и нейтральный читаемый шрифт для интерфейса.

## Что включено

- Главный экран с героем, слоганом и быстрыми CTA.
- Все 12 услуг из структуры Computer services:
    - Компьютерная уборка
    - Модернизация
    - Настройка ПО
    - Ремонт и утилизация
    - Web-камеры
    - Домашняя сигнализация
    - Устройства умного дома
    - Компьютерная грамотность
    - Репетитор по информатике
    - Шахматы
    - Высокие технологии / AI
    - Дизайн
- Карточки услуг с переключением изображений `slug--main.png` → `slug--hover.png` при наведении.
- Контактный блок с телефоном, e-mail, WhatsApp и формой через `mailto:`.
- Переключатель языка. Сейчас доступен язык `cs`, словарь вынесен в `i18n.js`, поэтому другие языки можно добавить без изменения HTML.
- Адаптивная верстка для мобильных, планшетов и десктопов.
- Микроанимации: появление при прокрутке, мягкие hover-состояния, плавающие декоративные элементы.
- Доступность: skip-link, alt-тексты, фокус-состояния, семантические секции, отключение анимаций через `prefers-reduced-motion`.

## Палитра и шрифты

- Основной фон: `#fff9ef`
- Текст: `#203032`
- Основной брендовый цвет: `#2f5d62`
- Акцент кофе / тепла: `#e28f55`
- Светлый акцент: `#f5c16c`
- Дополнительный мягкий фиолетовый: `#7e5bef`

Шрифты:

- Заголовки: `Playfair Display`
- Основной интерфейс: `Manrope`

# Инструкция по сборке

Создайте папку проекта со следующей структурой:

```
site/
  index.html
  styles.css
  i18n.js
  app.js
  manifest.webmanifest
  robots.txt
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

Содержимое файлов возьмите из свойств этой записи:

- `Html` → `index.html`
- `Styles` → `styles.css`
- `Scripts` → разделить на `i18n.js` и `app.js`
- `Other` → `manifest.webmanifest`, `robots.txt`, `README-IMAGES.txt`

## Изображения

Все изображения подключаются из папки `./img/` и используют имена из манифеста Main images:

- `hero--main.png`, `hero--hover.png`
- `cleaning--main.png`, `cleaning--hover.png`
- `upgrade--main.png`, `upgrade--hover.png`
- `software--main.png`, `software--hover.png`
- `repair--main.png`, `repair--hover.png`
- `webcam--main.png`, `webcam--hover.png`
- `alarm--main.png`, `alarm--hover.png`
- `appliances--main.png`, `appliances--hover.png`
- `literacy--main.png`, `literacy--hover.png`
- `tutor--main.png`, `tutor--hover.png`
- `chess--main.png`, `chess--hover.png`
- `development--main.png`, `development--hover.png`
- `design--main.png`, `design--hover.png`

## Контакты

В коде указаны рабочие затычки:

- `+420 777 000 000`
- `kontakt@pocitacovy-soused.cz`

Перед публикацией замените их на реальные телефон, e-mail и ссылку WhatsApp.

## Как добавить другой язык

1. Откройте `i18n.js`.
2. В объект `languages` добавьте новый ключ, например `en` или `ru`.
3. Скопируйте структуру объекта `cs` и переведите значения.
4. Переключатель языка появится автоматически, потому что `app.js` читает список языков из `SITE_I18N.languages`.

# Развёртывание на бесплатном хостинге Vercel

1. Создайте папку проекта и разложите файлы по инструкции выше.
2. Проверьте локально:
    - откройте `index.html` в браузере;
    - убедитесь, что изображения лежат в `./img/`;
    - наведите курсор на карточки услуг и проверьте смену изображений;
    - проверьте мобильный вид через DevTools.
3. Зайдите на Vercel и создайте новый проект.
4. Вариант без Git:
    - установите Vercel CLI;
    - выполните `vercel` в папке проекта;
    - следуйте подсказкам.
5. Вариант через Git:
    - создайте репозиторий;
    - загрузите туда файлы;
    - подключите репозиторий в Vercel;
    - framework preset оставьте как **Other**;
    - build command не нужен;
    - output directory не нужен, корень проекта уже содержит `index.html`.
6. После публикации откройте выданный домен и проверьте:
    - загрузку CSS и JS;
    - работу меню на мобильном;
    - форму `mailto:`;
    - все 12 карточек услуг;
    - все 26 изображений в `./img/`.

# Проверка качества

- Все 12 услуг присутствуют.
- Все slug-и изображений соответствуют манифесту Main images.
- Сайт статический и не требует backend.
- CSS использует Grid/Flexbox, адаптивные breakpoint-и и фокус-состояния.
- JS не требует сборки и работает как обычный файл.
- Словарь `cs` вынесен отдельно и расширяем.
- В отчёте отмечены затычки контактных данных, потому что в исходном тексте не было реального телефона или e-mail.