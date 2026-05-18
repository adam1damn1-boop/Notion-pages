# Domácí rytmus IT služeb

Created by: Elijah 
Html: === index.html ===
<!doctype html>
<html lang="cs" data-page="home">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Domácí rytmus IT služeb</title>
  <meta name="description" content="Výjezdní počítačové služby pro domácnost: údržba, opravy, bezpečnost, výuka a design. První diagnostika zdarma.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/styles.css">
  <script defer src="./js/i18n.js"></script>
  <script defer src="./js/app.js"></script>
</head>
<body>
<a class="skip-link" href="#main">Přejít na obsah</a>
<header class="site-header">
  <a class="brand" href="./index.html" aria-label="Domů">⌂Domácí IT pomoc</a>
  <nav class="main-nav" aria-label="Hlavní navigace">
    <a href="./index.html">Služby</a>
    <a href="./kontakt.html">Kontakt</a>
  </nav>
  <label class="lang-switch">Jazyk <select data-lang-select aria-label="Vybrat jazyk"><option value="cs">Česky</option></select></label>
</header>
<main id="main">
  <section class="hero home-hero">
    <div class="hero-copy reveal">
      <p class="eyebrow">Výjezd a první diagnostika zdarma</p>
      <h1>Počítačové starosti? Přijedu zdarma a poradím — vy platíte jen za skutečnou práci.</h1>
      <p>Praktická pomoc pro domácí situace: tichý notebook, rychlejší Windows, bezpečný byt, klidné učení i pěkná prezentace nápadu.</p>
      <div class="hero-actions"><a class="button" href="./kontakt.html">Domluvit návštěvu</a><a class="button ghost" href="#sluzby">Prohlédnout služby</a></div>
    </div>
    <figure class="hero-figure reveal">
      <img src="./img/hero--main.png" alt="Výjezdní počítačový technik" width="370" height="790" loading="eager">
      <figcaption>Technika má sloužit domácnosti, ne ji zdržovat.</figcaption>
    </figure>
  </section>
  <section id="sluzby" class="section">
    <div class="section-heading reveal">
      <p class="eyebrow">12 praktických scénářů</p>
      <h2>Služby pro každodenní domácí techniku</h2>
      <p>Vyberte si situaci, která nejvíc připomíná váš problém. Na kartě se při najetí myší ukáže druhý pohled.</p>
    </div>
    <div class="service-grid">
      <a class="service-card reveal" href="./cisteni-pocitace.html">1.1<img src="./img/cleaning--main.png" alt="Čištění počítače" loading="lazy"><img src="./img/cleaning--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Počítačová údržba</strong>Přehřívání, prach, hlučné ventilátory a výměna teplovodivé pasty.</a>
      <a class="service-card reveal" href="./modernizace.html">1.2<img src="./img/upgrade--main.png" alt="Modernizace počítače" loading="lazy"><img src="./img/upgrade--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Modernizace</strong>SSD, paměť, procesor nebo baterie místo zbytečné koupě nového zařízení.</a>
      <a class="service-card reveal" href="./software.html">1.3<img src="./img/software--main.png" alt="Nastavení software" loading="lazy"><img src="./img/software--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Software a Windows</strong>Úklid systému, viry, programy, internet i online formuláře.</a>
      <a class="service-card reveal" href="./oprava.html">1.4<img src="./img/repair--main.png" alt="Oprava notebooku" loading="lazy"><img src="./img/repair--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Oprava a využití dílů</strong>Diagnostika, oprava tam, kde dává smysl, nebo šetrné využití náhradních dílů.</a>
      <a class="service-card reveal" href="./kamery.html">2.1<img src="./img/webcam--main.png" alt="Webkamera a dohled" loading="lazy"><img src="./img/webcam--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Web-kamery</strong>Domácí i venkovní kamery s přístupem z mobilu.</a>
      <a class="service-card reveal" href="./alarm.html">2.2<img src="./img/alarm--main.png" alt="Domácí alarm" loading="lazy"><img src="./img/alarm--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Domácí alarm</strong>Siréna, SMS upozornění a ochrana bytu, garáže i chalupy.</a>
      <a class="service-card reveal" href="./chytra-domacnost.html">2.3<img src="./img/appliances--main.png" alt="Chytrá domácnost" loading="lazy"><img src="./img/appliances--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Chytrá domácnost</strong>Spotřebiče, Smart TV a aplikace v mobilu srozumitelně pro celou rodinu.</a>
      <a class="service-card reveal" href="./pocitacova-gramotnost.html">3.1<img src="./img/literacy--main.png" alt="Počítačová gramotnost" loading="lazy"><img src="./img/literacy--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Počítačová gramotnost</strong>E-mail, e-banking, videohovory, online nákupy a AI bez stresu.</a>
      <a class="service-card reveal" href="./doucovani-informatiky.html">3.2<img src="./img/tutor--main.png" alt="Doučování informatiky" loading="lazy"><img src="./img/tutor--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Doučování informatiky</strong>Škola, úkoly, přijímačky, maturita a jistější vztah k technologiím.</a>
      <a class="service-card reveal" href="./sachy.html">3.3<img src="./img/chess--main.png" alt="Šachy" loading="lazy"><img src="./img/chess--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Šachy</strong>Logické myšlení, trpělivost a soustředění pro děti i dospělé.</a>
      <a class="service-card reveal" href="./ai-rozvoj.html">3.4<img src="./img/development--main.png" alt="Výuka AI" loading="lazy"><img src="./img/development--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>AI a vysoké technologie</strong>Chytré používání AI pro úkoly, projekty a budoucí profesi.</a>
      <a class="service-card reveal" href="./design.html">4<img src="./img/design--main.png" alt="Design webu a letáků" loading="lazy"><img src="./img/design--hover.png" alt="" loading="lazy" aria-hidden="true"><strong>Design</strong>Letáky, plakáty, weby, katalogy i jednoduché aplikace.</a>
    </div>
  </section>
  <section class="cta-band reveal">
    <div><p class="eyebrow">Nejjednodušší další krok</p><h2>Popište mi situaci doma a navrhnu řešení.</h2><p>Zavolejte nebo napište kdykoli — první návštěva i diagnostika jsou vždy zdarma a bez závazků.</p></div>
    <a class="button light" href="./kontakt.html">Kontaktovat technika</a>
  </section>
</main>
<footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer>
</body>
</html>

=== cisteni-pocitace.html ===
<!doctype html><html lang="cs" data-page="cleaning"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Počítačová údržba | Domácí IT pomoc</title><meta name="description" content="Čištění počítače a notebooku od prachu, výměna pasty a ztišení chlazení."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page warm"><section class="service-hero"><div><p class="eyebrow">1.1 · péče o počítač</p><h1>Počítačová údržba</h1><p>Váš počítač nebo notebook se přehřívá, zamrzá, nebo se zničehonic rozhučí jako vrtulník? Většinou za to nemůže stáří, ale obyčejný prach uvnitř a vyschlá teplovodivá pasta.</p></div><img src="./img/cleaning--main.png" alt="Čištění počítače" loading="eager"></section><section class="service-body"><div><h2>Tichý provoz a delší životnost</h2><p>Pečlivě vyčistím vnitřek, vyměním pastu a promažu ventilátory, aby technika opět běžela tiše a spolehlivě i v největším letním vedru. Přijedu k vám domů zdarma a první diagnostiku uděláme bez jakýchkoli závazků. Pravidelná údržba prodlouží životnost počítače klidně o několik let — a vy ušetříte za nový.</p><ul><li>Čištění počítače, notebooku i klávesnice od prachu.</li><li>Výměna teplovodivé pasty a kontrola chlazení.</li><li>Promazání ventilátorů a doporučení další péče.</li></ul></div><figure><img src="./img/cleaning--hover.png" alt="Detail údržby počítače" loading="lazy"><figcaption>Domácí servis bez zbytečného přenášení techniky.</figcaption></figure></section><nav class="pager"><a href="./index.html">← Všechny služby</a><a href="./modernizace.html">Modernizace →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== modernizace.html ===
<!doctype html><html lang="cs" data-page="upgrade"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Modernizace | Domácí IT pomoc</title><meta name="description" content="SSD, RAM, procesor nebo baterie pro rychlejší počítač bez zbytečné koupě nového."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page cool"><section class="service-hero tall"><div><p class="eyebrow">1.2 · rychlejší start</p><h1>Modernizace</h1><p>Vaše věrné PC nebo notebook už nestíhá nové programy, ale loučit se s ním ještě nechcete? Často stačí menší vylepšení a stroj naběhne jako nový.</p></div><img src="./img/upgrade--main.png" alt="Modernizace počítače" loading="eager"></section><section class="service-body flip"><div><h2>Vylepšení, které má smysl</h2><p>Vyměním pevný disk za rychlé SSD, přidám operační paměť, vyměním procesor nebo baterii v notebooku. Po pár hodinách práce uvidíte rozdíl od první vteřiny po zapnutí. Poradím vám zdarma, co se opravdu vyplatí — bez zbytečného přeplácení.</p><ul><li>SSD pro svižné zapnutí a reakce systému.</li><li>Více paměti pro práci s více programy najednou.</li><li>Rozumné doporučení podle stáří a stavu zařízení.</li></ul></div><figure><img src="./img/upgrade--hover.png" alt="Komponenty pro modernizaci" loading="lazy"><figcaption>Někdy je menší upgrade lepší než velký nákup.</figcaption></figure></section><nav class="pager"><a href="./cisteni-pocitace.html">← Údržba</a><a href="./software.html">Software →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== software.html ===
<!doctype html><html lang="cs" data-page="software"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Software a Windows | Domácí IT pomoc</title><meta name="description" content="Úklid Windows, odstranění virů, instalace programů a pomoc s online formuláři."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page mint"><section class="service-hero"><div><p class="eyebrow">1.3 · čistý systém</p><h1>Software a Windows</h1><p>Windows se vleče, vyskakují reklamy, nebo máte pocit, že počítač žije vlastním životem? Provedu kompletní úklid systému, odstraním viry i zbytečnosti a nastavím vše tak, aby to fungovalo plynule.</p></div><img src="./img/software--main.png" alt="Nastavení software" loading="eager"></section><section class="service-body"><div><h2>Méně stresu u počítače</h2><p>V případě potřeby nainstaluji modernější Windows a programy pro práci, učení, zábavu i hraní. Pomohu i s registrací na úřadech, vyplněním formulářů a online žádostmi — nic, co vás dosud stresovalo, už řešit nemusíte.</p><ul><li>Odstranění virů, reklam a zbytečných programů.</li><li>Instalace Windows a běžného softwaru.</li><li>Pomoc s internetem, účty, registracemi a dokumenty.</li></ul></div><figure><img src="./img/software--hover.png" alt="Čistý software v počítači" loading="lazy"><figcaption>Počítač se má chovat předvídatelně a klidně.</figcaption></figure></section><nav class="pager"><a href="./modernizace.html">← Modernizace</a><a href="./oprava.html">Oprava →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== oprava.html ===
<!doctype html><html lang="cs" data-page="repair"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Oprava a využití dílů | Domácí IT pomoc</title><meta name="description" content="Diagnostika a oprava počítače nebo notebooku, pokud má oprava smysl."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page amber"><section class="service-hero compact"><div><p class="eyebrow">1.4 · druhá šance</p><h1>Oprava a využití dílů</h1><p>Počítač nebo notebook dosloužil? Nevyhazujte ho hned. Často stačí vyměnit jednu jedinou součástku a technika znovu ožije za zlomek ceny nové.</p></div><img src="./img/repair--main.png" alt="Oprava notebooku" loading="eager"></section><section class="service-body flip"><div><h2>Nejdřív zjistit, potom rozhodnout</h2><p>Posoudím, co se dá opravit, kolik to bude stát, a diagnostika je zdarma. Pokud už oprava nedává smysl, mohu starý přístroj odvézt a využít na náhradní díly — ušetříte si starosti s likvidací a možná tím pomůžete někomu dalšímu.</p><ul><li>Rychlé posouzení poruchy a ceny opravy.</li><li>Výměna dílů tam, kde se opravdu vyplatí.</li><li>Možnost odvozu starého zařízení na náhradní díly.</li></ul></div><figure><img src="./img/repair--hover.png" alt="Detail opravy počítače" loading="lazy"><figcaption>Rozhodnutí bez tlaku: opravit, nebo už ne.</figcaption></figure></section><nav class="pager"><a href="./software.html">← Software</a><a href="./kamery.html">Kamery →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== kamery.html ===
<!doctype html><html lang="cs" data-page="webcam"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Web-kamery | Domácí IT pomoc</title><meta name="description" content="Domácí a venkovní kamery s mobilním přístupem a vzdálenou komunikací."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page blue"><section class="service-hero tall"><div><p class="eyebrow">2.1 · dohled z mobilu</p><h1>Web-kamery</h1><p>Chcete vědět, co se děje doma, když jste v práci, nebo na zahradě a u chaty, když jste na dovolené? Připojím vám libovolný počet domácích i venkovních kamer, do kterých se podíváte kdykoli přímo z mobilu.</p></div><img src="./img/webcam--main.png" alt="Webkamera a dohled" loading="eager"></section><section class="service-body"><div><h2>Klid, i když nejste doma</h2><p>Můžete dokonce promluvit s návštěvou na dveřích, i když právě sedíte v kanceláři. Skvělé řešení pro hlídání dětí, starších rodičů, domácích mazlíčků i chaty u lesa. Stačí, že máte internet — o zbytek se postarám.</p><ul><li>Vnitřní a venkovní kamery podle prostoru.</li><li>Nastavení aplikace v telefonu.</li><li>Vysvětlení, jak bezpečně sdílet přístup v rodině.</li></ul></div><figure><img src="./img/webcam--hover.png" alt="Kamera u domu" loading="lazy"><figcaption>Jednoduchý přehled o domácnosti odkudkoli.</figcaption></figure></section><nav class="pager"><a href="./oprava.html">← Oprava</a><a href="./alarm.html">Alarm →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== alarm.html ===
<!doctype html><html lang="cs" data-page="alarm"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Domácí alarm | Domácí IT pomoc</title><meta name="description" content="Dálkově ovládaný alarm se sirénou a SMS upozorněním pro byt, garáž nebo chalupu."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page red"><section class="service-hero"><div><p class="eyebrow">2.2 · ochrana vstupu</p><h1>Domácí alarm</h1><p>Bojíte se nezvané návštěvy, když je byt nebo garáž prázdný? Nainstaluji vám přímo na vchodové dveře dálkově ovládaný alarm s hlasitou sirénou a okamžitým upozorněním přes SMS.</p></div><img src="./img/alarm--main.png" alt="Domácí alarm" loading="eager"></section><section class="service-body flip"><div><h2>Bez paušálu a stavebních zásahů</h2><p>Skvělá ochrana pro byt, dílnu, garáž i chalupu — bez velkých stavebních zásahů a bez drahého měsíčního paušálu. Spát budete klidněji, ať jste doma, na dovolené, nebo na druhém konci světa.</p><ul><li>Dálkové ovládání pro běžné denní používání.</li><li>Hlasitá siréna a rychlé SMS upozornění.</li><li>Vhodné pro byt, dílnu, garáž i rekreační objekt.</li></ul></div><figure><img src="./img/alarm--hover.png" alt="Zabezpečení dveří" loading="lazy"><figcaption>Malé zařízení, velký pocit bezpečí.</figcaption></figure></section><nav class="pager"><a href="./kamery.html">← Kamery</a><a href="./chytra-domacnost.html">Chytrá domácnost →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== chytra-domacnost.html ===
<!doctype html><html lang="cs" data-page="appliances"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Chytrá domácnost | Domácí IT pomoc</title><meta name="description" content="Nastavení chytrých spotřebičů, Smart TV a aplikací pro celou rodinu."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page green"><section class="service-hero compact"><div><p class="eyebrow">2.3 · pohodlí v mobilu</p><h1>Chytrá domácnost</h1><p>Moderní spotřebiče se dnes umí propojit do chytré domácnosti: světla, topení, televize, žaluzie i robotický vysavač pracují jako jeden tým.</p></div><img src="./img/appliances--main.png" alt="Chytrá domácnost" loading="eager"></section><section class="service-body"><div><h2>Technika, které rozumí celá rodina</h2><p>Pomohu vám vše nastavit do jediné aplikace v mobilu, abyste domov ovládali třeba i z dovolené. Vysvětlím srozumitelně, jak používat chytrou televizi a další techniku tak, aby si poradil každý člen rodiny — od dětí až po prarodiče. Pohodlí, úspora energie a hrdý pocit, že vám technika konečně slouží, ne naopak.</p><ul><li>Nastavení aplikací a přidání zařízení.</li><li>Smart TV, osvětlení, topení a další spotřebiče.</li><li>Praktický návod bez technického žargonu.</li></ul></div><figure><img src="./img/appliances--hover.png" alt="Spotřebiče chytré domácnosti" loading="lazy"><figcaption>Domov se ovládá jednodušeji, když má jasný systém.</figcaption></figure></section><nav class="pager"><a href="./alarm.html">← Alarm</a><a href="./pocitacova-gramotnost.html">Počítačová gramotnost →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== pocitacova-gramotnost.html ===
<!doctype html><html lang="cs" data-page="literacy"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Počítačová gramotnost | Domácí IT pomoc</title><meta name="description" content="Individuální výuka práce s počítačem, internetem, e-bankingem a AI bez stresu."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page lavender"><section class="service-hero tall"><div><p class="eyebrow">3.1 · klidné tempo</p><h1>Počítačová gramotnost</h1><p>Máte pocit, že vás moderní technika přerostla? Naučím vás od úplných základů pracovat s počítačem a využívat nové nástroje včetně umělé inteligence.</p></div><img src="./img/literacy--main.png" alt="Počítačová gramotnost" loading="eager"></section><section class="service-body flip"><div><h2>Bez stresu a cizích slov</h2><p>Ukážu, jak si bezpečně zařídit e-mail, e-banking, nakupovat online, volat s vnoučaty přes video, nebo si nechat poradit od AI s každodenními úkoly. Tempo přizpůsobím vám — bez stresu, bez cizích slov a bez pocitu, že se ptáte na hloupost.</p><ul><li>Základy práce s počítačem a internetem.</li><li>Bezpečné účty, e-mail, e-banking a videohovory.</li><li>Praktické používání AI v běžném životě.</li></ul></div><figure><img src="./img/literacy--hover.png" alt="Výuka práce s počítačem" loading="lazy"><figcaption>Učení má být užitečné, laskavé a srozumitelné.</figcaption></figure></section><nav class="pager"><a href="./chytra-domacnost.html">← Chytrá domácnost</a><a href="./doucovani-informatiky.html">Doučování →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== doucovani-informatiky.html ===
<!doctype html><html lang="cs" data-page="tutor"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Doučování informatiky | Domácí IT pomoc</title><meta name="description" content="Doučování informatiky pro děti, úkoly, přijímačky a maturitu."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page sunny"><section class="service-hero"><div><p class="eyebrow">3.2 · jistota ve škole</p><h1>Doučování informatiky</h1><p>Hledáte doučování informatiky pro své dítě? Mám vysokoškolské IT vzdělání a zkušenosti s výukou studentů ještě z doby doktorského studia.</p></div><img src="./img/tutor--main.png" alt="Doučování informatiky" loading="eager"></section><section class="service-body"><div><h2>Z obávaného předmětu oblíbený</h2><p>Látku ze školy vysvětlím srozumitelně, pomohu s domácími úkoly i s přípravou na přijímačky a maturitu. Z předmětu, kterého se dítě dosud bálo, se snadno může stát ten nejoblíbenější — a otevřít cestu k dobře placené budoucí profesi.</p><ul><li>Individuální vysvětlení školní látky.</li><li>Domácí úkoly, projekty, přijímačky a maturita.</li><li>Klidná výuka propojená s praxí.</li></ul></div><figure><img src="./img/tutor--hover.png" alt="Výuka informatiky pro dítě" loading="lazy"><figcaption>Technologie jsou srozumitelnější, když se vysvětlují lidsky.</figcaption></figure></section><nav class="pager"><a href="./pocitacova-gramotnost.html">← Gramotnost</a><a href="./sachy.html">Šachy →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== sachy.html ===
<!doctype html><html lang="cs" data-page="chess"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Šachy | Domácí IT pomoc</title><meta name="description" content="Šachy pro děti i dospělé začátečníky jako trénink logiky a soustředění."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page ink"><section class="service-hero compact"><div><p class="eyebrow">3.3 · logika a soustředění</p><h1>Šachy</h1><p>Šachy jsou jeden z nejlepších tréninků logického myšlení, trpělivosti a sebedůvěry — a navíc se hodí na celý život. Hraji na velmi dobré úrovni a rád své zkušenosti předám dětem i dospělým začátečníkům.</p></div><img src="./img/chess--main.png" alt="Šachy" loading="eager"></section><section class="service-body flip"><div><h2>Hra, která pomáhá i mimo šachovnici</h2><p>Pravidelná hra zlepšuje soustředění ve škole i v práci a baví celou rodinu při společných večerech. Možná je to přesně ta jiskra, která vašemu dítěti dosud chyběla.</p><ul><li>Základy pravidel a první strategie.</li><li>Rozvoj trpělivosti, plánování a logiky.</li><li>Výuka pro děti i dospělé začátečníky.</li></ul></div><figure><img src="./img/chess--hover.png" alt="Šachová partie" loading="lazy"><figcaption>Klidné přemýšlení je dovednost pro celý život.</figcaption></figure></section><nav class="pager"><a href="./doucovani-informatiky.html">← Doučování</a><a href="./ai-rozvoj.html">AI rozvoj →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== ai-rozvoj.html ===
<!doctype html><html lang="cs" data-page="development"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI a vysoké technologie | Domácí IT pomoc</title><meta name="description" content="Hravá výuka umělé inteligence pro děti, úkoly, projekty a širší rozhled."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page neon"><section class="service-hero tall"><div><p class="eyebrow">3.4 · technologie s rozumem</p><h1>AI a vysoké technologie</h1><p>Chcete, aby vaše dítě bylo o krok napřed před ostatními? Naučím ho používat umělou inteligenci chytře — tak, aby mu pomáhala s úkoly, projekty i s pochopením složitějších předmětů.</p></div><img src="./img/development--main.png" alt="Výuka AI" loading="eager"></section><section class="service-body"><div><h2>Z mobilu nástroj, ne past</h2><p>Místo bezcílného surfování po mobilu objeví, jak technologii skutečně využít. Můžeme se učit hravou formou jako volnočasový kroužek, nebo přímo nad domácími úkoly. Investice do schopností, které mu pomohou v jakékoli budoucí profesi.</p><ul><li>Bezpečné a užitečné používání AI.</li><li>Pomoc s projekty, úkoly a pochopením látky.</li><li>Hravá forma i cílená školní podpora.</li></ul></div><figure><img src="./img/development--hover.png" alt="Dítě a technologie" loading="lazy"><figcaption>Budoucnost je praktičtější, když ji dítě chápe.</figcaption></figure></section><nav class="pager"><a href="./sachy.html">← Šachy</a><a href="./design.html">Design →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== design.html ===
<!doctype html><html lang="cs" data-page="design"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Design | Domácí IT pomoc</title><meta name="description" content="Letáky, plakáty, webové stránky, katalogy a aplikace na míru."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet"><link rel="stylesheet" href="./css/styles.css"><script defer src="./js/i18n.js"></script><script defer src="./js/app.js"></script></head><body><a class="skip-link" href="#main">Přejít na obsah</a><header class="site-header"><a class="brand" href="./index.html">⌂Domácí IT pomoc</a><nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html">Kontakt</a></nav><label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label></header><main id="main"><article class="service-page coral"><section class="service-hero"><div><p class="eyebrow">4 · viditelný nápad</p><h1>Design</h1><p>Potřebujete dát svému podnikání nebo nápadu pěknou tvář? Jsem diplomovaný vývojář softwaru a vytvořím pro vás stylové letáky, plakáty, webové stránky, katalogy zboží i celé aplikace na míru.</p></div><img src="./img/design--main.png" alt="Design webu a letáků" loading="eager"></section><section class="service-body flip"><div><h2>Hezky, srozumitelně a účelně</h2><p>Vše srozumitelně, bez prázdných marketingových frází a s důrazem na to, aby to opravdu přitahovalo zákazníky. Stačí zavolat a popsat svůj nápad — návrh připravíme společně.</p><ul><li>Letáky, plakáty a katalogy.</li><li>Webové stránky a jednoduché aplikace.</li><li>Návrh laděný podle konkrétního cíle.</li></ul></div><figure><img src="./img/design--hover.png" alt="Návrh designu" loading="lazy"><figcaption>Nápad působí lépe, když dostane jasný tvar.</figcaption></figure></section><nav class="pager"><a href="./ai-rozvoj.html">← AI rozvoj</a><a href="./kontakt.html">Kontakt →</a></nav></article></main><footer class="site-footer">© Domácí IT pomoc<a href="./kontakt.html">Kontakt</a></footer></body></html>

=== kontakt.html ===
<!doctype html>
<html lang="cs" data-page="contact">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Kontakt | Domácí IT pomoc</title>
  <meta name="description" content="Domluvte první bezplatnou návštěvu a diagnostiku.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,650&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/styles.css">
  <script defer src="./js/i18n.js"></script>
  <script defer src="./js/app.js"></script>
</head>
<body>
<a class="skip-link" href="#main">Přejít na obsah</a>
<header class="site-header">
  <a class="brand" href="./index.html">⌂Domácí IT pomoc</a>
  <nav class="main-nav"><a href="./index.html">Služby</a><a href="./kontakt.html" aria-current="page">Kontakt</a></nav>
  <label class="lang-switch">Jazyk <select data-lang-select><option value="cs">Česky</option></select></label>
</header>
<main id="main">
  <section class="contact-hero">
    <div class="reveal">
      <p class="eyebrow">První návštěva zdarma</p>
      <h1>Společně najdeme nejjednodušší řešení přímo u vás doma.</h1>
      <p>Zavolejte nebo napište kdykoli — první návštěva i diagnostika jsou vždy zdarma a bez závazků.</p>
      <div class="contact-actions">
        <a class="button" href="mailto:technik@example.com?subject=Dom%C3%A1c%C3%AD%20IT%20pomoc">Napsat e-mail</a>
        <a class="button ghost" href="tel:+420000000000">Zavolat</a>
      </div>
      <p class="small-note">Nahraďte ukázkový e-mail a telefon vlastními kontakty. Formulář níže používá pouze e-mailový odkaz, takže nepotřebuje server.</p>
    </div>
    <figure class="contact-card reveal">
      <img src="./img/hero--hover.png" alt="Technik připravený vyrazit na návštěvu" loading="eager">
      <figcaption>Diagnostika zdarma · platíte jen za práci a díly.</figcaption>
    </figure>
  </section>
  <section class="contact-panel reveal">
    <h2>Rychlá zpráva</h2>
    <form action="mailto:technik@example.com" method="post" enctype="text/plain">
      <label>Jméno <input name="jmeno" autocomplete="name" required></label>
      <label>Kontakt <input name="kontakt" autocomplete="email" required></label>
      <label>Co potřebujete vyřešit? <textarea name="zprava" rows="5" required></textarea></label>
      <button class="button" type="submit">Odeslat přes e-mail</button>
    </form>
  </section>
</main>
<footer class="site-footer">© Domácí IT pomoc<a href="./index.html">Služby</a></footer>
</body>
</html>
Other: === package.json ===
{
  "scripts": {
    "start": "npx serve .",
    "check": "echo "Static site: open index.html or deploy the folder.""
  },
  "dependencies": {},
  "devDependencies": {}
}

=== vercel.json ===
{
  "cleanUrls": false,
  "trailingSlash": false
}

=== robots.txt ===
User-agent: *
Allow: /

=== manifest.webmanifest ===
{
  "name": "Domácí IT pomoc",
  "short_name": "IT pomoc",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#fbf7ef",
  "theme_color": "#c45f32",
  "lang": "cs"
}
Scripts: === js/i18n.js ===
http://window.SITE_I18N={
  cs:{
    common:{brand:"Domácí IT pomoc",navServices:"Služby",navContact:"Kontakt",lang:"Jazyk"},
    home:{title:"Počítačové starosti? Přijedu zdarma a poradím — vy platíte jen za skutečnou práci.",lead:"Praktická pomoc pro domácí situace: tichý notebook, rychlejší Windows, bezpečný byt, klidné učení i pěkná prezentace nápadu."},
    services:{
      cleaning:"Váš počítač nebo notebook se přehřívá, zamrzá, nebo se zničehonic rozhučí jako vrtulník? Většinou za to nemůže stáří, ale obyčejný prach uvnitř a vyschlá teplovodivá pasta. Pečlivě vyčistím vnitřek, vyměním pastu a promažu ventilátory, aby technika opět běžela tiše a spolehlivě i v největším letním vedru. Přijedu k vám domů zdarma a první diagnostiku uděláme bez jakýchkoli závazků. Pravidelná údržba prodlouží životnost počítače klidně o několik let — a vy ušetříte za nový.",
      upgrade:"Vaše věrné PC nebo notebook už nestíhá nové programy, ale loučit se s ním ještě nechcete? Často stačí menší vylepšení a stroj naběhne jako nový. Vyměním pevný disk za rychlé SSD, přidám operační paměť, vyměním procesor nebo baterii v notebooku. Po pár hodinách práce uvidíte rozdíl od první vteřiny po zapnutí. Poradím vám zdarma, co se opravdu vyplatí — bez zbytečného přeplácení.",
      software:"Windows se vleče, vyskakují reklamy, nebo máte pocit, že počítač žije vlastním životem? Provedu kompletní úklid systému, odstraním viry i zbytečnosti a nastavím vše tak, aby to fungovalo plynule. V případě potřeby nainstaluji modernější Windows a programy pro práci, učení, zábavu i hraní. Pomohu i s registrací na úřadech, vyplněním formulářů a online žádostmi — nic, co vás dosud stresovalo, už řešit nemusíte.",
      repair:"Počítač nebo notebook dosloužil? Nevyhazujte ho hned. Často stačí vyměnit jednu jedinou součástku a technika znovu ožije za zlomek ceny nové. Posoudím, co se dá opravit, kolik to bude stát, a diagnostika je zdarma. Pokud už oprava nedává smysl, mohu starý přístroj odvézt a využít na náhradní díly — ušetříte si starosti s likvidací a možná tím pomůžete někomu dalšímu.",
      webcam:"Chcete vědět, co se děje doma, když jste v práci, nebo na zahradě a u chaty, když jste na dovolené? Připojím vám libovolný počet domácích i venkovních kamer, do kterých se podíváte kdykoli přímo z mobilu. Můžete dokonce promluvit s návštěvou na dveřích, i když právě sedíte v kanceláři. Skvělé řešení pro hlídání dětí, starších rodičů, domácích mazlíčků i chaty u lesa. Stačí, že máte internet — o zbytek se postarám.",
      alarm:"Bojíte se nezvané návštěvy, když je byt nebo garáž prázdný? Nainstaluji vám přímo na vchodové dveře dálkově ovládaný alarm s hlasitou sirénou a okamžitým upozorněním přes SMS. Skvělá ochrana pro byt, dílnu, garáž i chalupu — bez velkých stavebních zásahů a bez drahého měsíčního paušálu. Spát budete klidněji, ať jste doma, na dovolené, nebo na druhém konci světa.",
      appliances:"Moderní spotřebiče se dnes umí propojit do chytré domácnosti: světla, topení, televize, žaluzie i robotický vysavač pracují jako jeden tým. Pomohu vám vše nastavit do jediné aplikace v mobilu, abyste domov ovládali třeba i z dovolené. Vysvětlím srozumitelně, jak používat chytrou televizi a další techniku tak, aby si poradil každý člen rodiny — od dětí až po prarodiče. Pohodlí, úspora energie a hrdý pocit, že vám technika konečně slouží, ne naopak.",
      literacy:"Máte pocit, že vás moderní technika přerostla? Naučím vás od úplných základů pracovat s počítačem a využívat nové nástroje včetně umělé inteligence. Ukážu, jak si bezpečně zařídit e-mail, e-banking, nakupovat online, volat s vnoučaty přes video, nebo si nechat poradit od AI s každodenními úkoly. Tempo přizpůsobím vám — bez stresu, bez cizích slov a bez pocitu, že se ptáte na hloupost.",
      tutor:"Hledáte doučování informatiky pro své dítě? Mám vysokoškolské IT vzdělání a zkušenosti s výukou studentů ještě z doby doktorského studia. Látku ze školy vysvětlím srozumitelně, pomohu s domácími úkoly i s přípravou na přijímačky a maturitu. Z předmětu, kterého se dítě dosud bálo, se snadno může stát ten nejoblíbenější — a otevřít cestu k dobře placené budoucí profesi.",
      chess:"Šachy jsou jeden z nejlepších tréninků logického myšlení, trpělivosti a sebedůvěry — a navíc se hodí na celý život. Hraji na velmi dobré úrovni a rád své zkušenosti předám dětem i dospělým začátečníkům. Pravidelná hra zlepšuje soustředění ve škole i v práci a baví celou rodinu při společných večerech. Možná je to přesně ta jiskra, která vašemu dítěti dosud chyběla.",
      development:"Chcete, aby vaše dítě bylo o krok napřed před ostatními? Naučím ho používat umělou inteligenci chytře — tak, aby mu pomáhala s úkoly, projekty i s pochopením složitějších předmětů. Místo bezcílného surfování po mobilu objeví, jak technologii skutečně využít. Můžeme se učit hravou formou jako volnočasový kroužek, nebo přímo nad domácími úkoly. Investice do schopností, které mu pomohou v jakékoli budoucí profesi.",
      design:"Potřebujete dát svému podnikání nebo nápadu pěknou tvář? Jsem diplomovaný vývojář softwaru a vytvořím pro vás stylové letáky, plakáty, webové stránky, katalogy zboží i celé aplikace na míru. Vše srozumitelně, bez prázdných marketingových frází a s důrazem na to, aby to opravdu přitahovalo zákazníky. Stačí zavolat a popsat svůj nápad — návrh připravíme společně.",
      contact:"Zavolejte nebo napište kdykoli — první návštěva i diagnostika jsou vždy zdarma a bez závazků. Společně najdeme to nejjednodušší řešení přímo u vás doma."
    }
  }
};
=== js/app.js ===
(function(){
  const select=document.querySelector("[data-lang-select]");
  const saved=localStorage.getItem("site-lang")||"cs";
  if(select){select.value=saved;select.addEventListener("change",e=>{localStorage.setItem("site-lang",http://e.target.value);document.documentElement.lang=http://e.target.value;});}
  document.documentElement.lang=saved;
  const io="IntersectionObserver" in window?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){http://entry.target.classList.add("is-visible");io.unobserve(http://entry.target);}})},{threshold:.16}):null;
  document.querySelectorAll(".reveal").forEach(el=>io?io.observe(el):el.classList.add("is-visible"));
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>anchor.addEventListener("click",event=>{const target=document.querySelector(anchor.getAttribute("href"));if(target){event.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"});}}));
})();
Styles: === css/styles.css ===
:root{
  --bg:#fbf7ef;--paper:#fffdf8;--ink:#1f2933;--muted:#667085;--line:#eadfce;
  --brand:#c45f32;--brand-dark:#7d321e;--mint:#d9f0df;--blue:#dcecff;--yellow:#fff0bd;
  --shadow:0 24px 70px rgba(73,47,22,.13);--radius:28px;--max:1180px
}
{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(circle at top left,#fff4d8,transparent 34rem),linear-gradient(180deg,#fbf7ef,#f5efe3);color:var(--ink);font-family:Manrope,system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6}img{max-width:100%;display:block}a{color:inherit}.skip-link{position:absolute;left:-999px;top:1rem;background:#111;color:#fff;padding:.7rem 1rem;border-radius:999px;z-index:20}.skip-link:focus{left:1rem}.site-header{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:1rem;justify-content:space-between;max-width:var(--max);margin:0 auto;padding:1rem clamp(1rem,3vw,2rem);backdrop-filter:blur(16px);background:rgba(251,247,239,.78);border-bottom:1px solid rgba(234,223,206,.75)}.brand,.main-nav{display:flex;align-items:center;gap:.7rem}.brand{text-decoration:none;font-weight:800}.brand-mark{display:grid;place-items:center;width:2.4rem;height:2.4rem;border-radius:50%;background:var(--brand);color:#fff;box-shadow:0 8px 25px rgba(196,95,50,.32)}.main-nav a{padding:.55rem .85rem;text-decoration:none;border-radius:999px;color:#384150}.main-nav a:hover,.main-nav a[aria-current=page]{background:#fff;box-shadow:0 8px 22px rgba(43,32,20,.08)}.lang-switch{font-size:.85rem;color:var(--muted)}select,input,textarea,button{font:inherit}select,input,textarea{border:1px solid var(--line);border-radius:16px;background:#fff;padding:.75rem .9rem;color:var(--ink)}main{overflow:hidden}.hero,.section,.cta-band,.service-page,.contact-hero,.contact-panel{max-width:var(--max);margin:0 auto;padding:clamp(2.4rem,6vw,5.5rem) clamp(1rem,3vw,2rem)}.home-hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(280px,.7fr);align-items:center;gap:clamp(2rem,5vw,4rem);min-height:75vh}.hero-copy h1,.section-heading h2,.cta-band h2,.service-hero h1,.contact-hero h1{font-family:Fraunces,Georgia,serif;line-height:1.02;letter-spacing:-.04em;margin:.2rem 0 1rem}.hero-copy h1,.contact-hero h1{font-size:clamp(2.8rem,7vw,6.6rem)}.section-heading h2,.cta-band h2,.service-hero h1{font-size:clamp(2.2rem,5vw,4.9rem)}.hero-copy p,.section-heading p,.contact-hero p{font-size:clamp(1rem,2vw,1.25rem);color:#4d5662}.eyebrow{margin:0 0 .7rem;text-transform:uppercase;letter-spacing:.14em;font-size:.78rem;font-weight:800;color:var(--brand-dark)}.button{display:inline-flex;align-items:center;justify-content:center;min-height:3rem;padding:.85rem 1.2rem;border:0;border-radius:999px;background:var(--brand);color:#fff;text-decoration:none;font-weight:800;box-shadow:0 15px 34px rgba(196,95,50,.28);cursor:pointer;transition:.2s ease}.button:hover{transform:translateY(-2px);background:var(--brand-dark)}.button.ghost{background:#fff;color:var(--brand-dark);box-shadow:inset 0 0 0 1px var(--line)}.button.light{background:#fff;color:var(--brand-dark)}.hero-actions,.contact-actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.5rem}.hero-figure{position:relative;margin:0;justify-self:center;background:linear-gradient(160deg,#fff,#ffe8c7);padding:1rem;border-radius:42px;box-shadow:var(--shadow);isolation:isolate}.hero-figure:before{content:"";position:absolute;inset:9% -10% 5% 20%;background:#f7c66d;border-radius:48% 52% 42% 58%;z-index:-1;opacity:.45}.hero-figure img{max-height:620px;object-fit:contain}.hero-figure figcaption,.contact-card figcaption,figure figcaption{font-size:.9rem;color:var(--muted);margin-top:.8rem}.section-heading{max-width:760px;margin-bottom:2rem}.service-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}.service-card{position:relative;display:flex;min-height:390px;flex-direction:column;gap:.65rem;padding:1rem;border-radius:var(--radius);background:rgba(255,253,248,.86);border:1px solid rgba(234,223,206,.9);text-decoration:none;box-shadow:0 16px 36px rgba(43,32,20,.07);transition:.25s ease;overflow:hidden}.service-card:hover,.service-card:focus-visible{transform:translateY(-6px);box-shadow:var(--shadow)}.section-code{position:absolute;right:1rem;top:1rem;z-index:2;background:#fff;border:1px solid var(--line);border-radius:999px;padding:.2rem .55rem;font-weight:800;font-size:.78rem}.swap{position:relative;display:grid;place-items:center;min-height:210px;background:linear-gradient(145deg,#fff7df,#f0fbef);border-radius:22px;overflow:hidden}.swap img{position:absolute;max-height:92%;object-fit:contain;transition:.35s ease}.swap img+img{opacity:0;transform:scale(1.04) rotate(2deg)}.service-card:hover .swap img:first-child{opacity:0;transform:scale(.96)}.service-card:hover .swap img+img{opacity:1;transform:scale(1)}.service-card strong{font-size:1.08rem}.service-card span:last-child{color:var(--muted);font-size:.94rem}.cta-band{margin-top:2rem;margin-bottom:3rem;display:flex;align-items:center;justify-content:space-between;gap:2rem;background:linear-gradient(135deg,var(--brand),#e4a24e);border-radius:40px;color:#fff;box-shadow:var(--shadow)}.cta-band .eyebrow,.cta-band p{color:#fff}.service-hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,.55fr);gap:2rem;align-items:center;padding:2rem;border-radius:44px;background:linear-gradient(135deg,#fffaf0,#f3eadc);box-shadow:var(--shadow)}.service-hero.tall{grid-template-columns:minmax(0,.9fr) minmax(260px,.65fr);min-height:520px}.service-hero.compact{min-height:390px}.service-hero img{justify-self:center;max-height:430px;object-fit:contain;filter:drop-shadow(0 22px 28px rgba(44,31,18,.16))}.service-body{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,.7fr);gap:2rem;align-items:center;margin-top:2rem}.service-body.flip figure{order:-1}.service-body>div,.service-body figure,.contact-panel{background:rgba(255,253,248,.9);border:1px solid var(--line);border-radius:32px;padding:clamp(1.2rem,3vw,2rem);box-shadow:0 14px 34px rgba(43,32,20,.06)}.service-body h2{font-size:clamp(1.6rem,3vw,2.6rem);line-height:1.1;margin-top:0}.service-body ul{padding-left:1.1rem}.service-body li{margin:.35rem 0}.service-body figure{margin:0}.service-body figure img{margin:auto;max-height:360px;object-fit:contain}.pager{display:flex;justify-content:space-between;gap:1rem;margin-top:2rem}.pager a{padding:.8rem 1rem;border-radius:999px;background:#fff;text-decoration:none;border:1px solid var(--line);font-weight:800}.warm .service-hero{background:linear-gradient(135deg,#fff2cc,#fff)}.cool .service-hero{background:linear-gradient(135deg,#dcecff,#fff)}.mint .service-hero{background:linear-gradient(135deg,#d9f0df,#fff)}.amber .service-hero{background:linear-gradient(135deg,#ffe1aa,#fff)}.blue .service-hero{background:linear-gradient(135deg,#d9ecff,#fff)}.red .service-hero{background:linear-gradient(135deg,#ffe0d8,#fff)}.green .service-hero{background:linear-gradient(135deg,#dbf6d9,#fff)}.lavender .service-hero{background:linear-gradient(135deg,#eadfff,#fff)}.sunny .service-hero{background:linear-gradient(135deg,#fff0ae,#fff)}.ink .service-hero{background:linear-gradient(135deg,#e7e4dd,#fff)}.neon .service-hero{background:linear-gradient(135deg,#dcfff3,#f0e5ff)}.coral .service-hero{background:linear-gradient(135deg,#ffd8ca,#fff)}.contact-hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,.55fr);gap:2rem;align-items:center}.contact-card{margin:0;background:#fff;border-radius:38px;padding:1rem;box-shadow:var(--shadow)}.contact-card img{max-height:520px;object-fit:contain;margin:auto}.small-note{font-size:.9rem;color:var(--muted)}.contact-panel{margin-bottom:4rem}.contact-panel form{display:grid;gap:1rem;max-width:720px}.contact-panel label{display:grid;gap:.35rem;font-weight:800}.contact-panel textarea{resize:vertical}.site-footer{max-width:var(--max);margin:0 auto;padding:2rem clamp(1rem,3vw,2rem);display:flex;justify-content:space-between;color:var(--muted);border-top:1px solid var(--line)}.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}.http://reveal.is-visible{opacity:1;transform:none}@media (prefers-reduced-motion:reduce){,::before,::after{scroll-behavior:auto!important;transition:none!important;animation:none!important}.reveal{opacity:1;transform:none}}@media (max-width:980px){.home-hero,.service-hero,.service-body,.contact-hero{grid-template-columns:1fr}.service-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.service-body.flip figure{order:0}.site-header{flex-wrap:wrap}.main-nav{order:3;width:100%;justify-content:center}}@media (max-width:620px){.service-grid{grid-template-columns:1fr}.service-card{min-height:auto}.swap{min-height:190px}.cta-band{display:block;border-radius:28px}.cta-band .button{margin-top:1rem}.hero,.section,.cta-band,.service-page,.contact-hero,.contact-panel{padding-left:1rem;padding-right:1rem}.service-hero{padding:1.2rem;border-radius:30px}.pager{flex-direction:column}.site-footer{display:grid;gap:.6rem}.hero-actions .button,.contact-actions .button{width:100%}}

# Отчёт по сайту

Создан макет **«Domácí rytmus IT služeb»** для записи Site content **«Бытовые сценарии»**.

## Ассоциации из брифа и текстов

- **Домашний ритм**: услуги описаны через бытовые ситуации — перегрев ноутбука, камеры на даче, Smart TV, помощь с формами.
- **Спокойная практичность**: акцент на бесплатной диагностике, понятном объяснении и отсутствии лишних затрат.
- **Тёплый мастер на выезд**: hero и контакт подают специалиста как человека, который приезжает домой и решает проблему без стресса.
- **Семейная польза**: отдельные сценарии для детей, взрослых, пожилых родственников и дома в целом.
- **Техника как помощник**: интерфейс делает услуги не «ремонтной витриной», а набором понятных жизненных решений.

Финальный макет соответствует этим ассоциациям: тёплая кремово-терракотовая палитра, мягкие карточки, «домашняя» навигация, крупные спокойные заголовки и разные цветовые акценты на страницах услуг.

## Концепция

Сайт сделан как лёгкий мультистраничный каталог: `index.html` + 12 страниц услуг + `kontakt.html`. Главная страница показывает все услуги в сетке, где изображения меняются с `slug--main.png` на `slug--hover.png` при наведении. На страницах услуг `-main` используется как hero-иллюстрация, а `-hover` — как дополнительное изображение в тексте.

## Дизайн

- **Палитра:** тёплый фон `#fbf7ef`, белая бумага, терракотовый акцент `#c45f32`, мягкие дополнительные оттенки для категорий.
- **Шрифты:** `Manrope` для интерфейса и `Fraunces` для крупных эмоциональных заголовков.
- **UX:** липкая шапка, skip-link для доступности, крупные CTA, мягкая scroll-анимация с отключением через `prefers-reduced-motion`.
- **Адаптивность:** сетка 4 колонки → 2 колонки → 1 колонка; страницы услуг перестраиваются в одну колонку на планшетах и телефонах.
- **Доступность:** alt-тексты у изображений, видимая структура заголовков, контрастные кнопки, фокусируемые ссылки и элементы формы.

## Проверка содержания

Все 12 услуг присутствуют:

1. `cleaning` — 1.1 Компьютерная уборка
2. `upgrade` — 1.2 Модернизация
3. `software` — 1.3 Настройка ПО
4. `repair` — 1.4 Ремонт и утилизация
5. `webcam` — 2.1 Web-камеры
6. `alarm` — 2.2 Домашняя сигнализация
7. `appliances` — 2.3 Умный дом
8. `literacy` — 3.1 Компьютерная грамотность
9. `tutor` — 3.2 Репетитор по информатике
10. `chess` — 3.3 Шахматы
11. `development` — 3.4 Высокие технологии / AI
12. `design` — 4 Дизайн

Изображения подключены только по локальным путям `./img/slug--main.png` и `./img/slug--hover.png`.

# Инструкция по сборке

Создайте такую структуру проекта:

```
project/
  index.html
  cisteni-pocitace.html
  modernizace.html
  software.html
  oprava.html
  kamery.html
  alarm.html
  chytra-domacnost.html
  pocitacova-gramotnost.html
  doucovani-informatiky.html
  sachy.html
  ai-rozvoj.html
  design.html
  kontakt.html
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

Код из свойства **Html** разложите по HTML-файлам. Код из **Styles** сохраните как `css/styles.css`. Код из **Scripts** разделите на `js/i18n.js` и `js/app.js`. Код из **Other** сохраните в корень проекта.

## Изображения

Папка `img/` должна содержать файлы с точными именами из манифеста Main images. Если реальные скачанные изображения имеют другие имена, переименуйте их по схеме `slug--main.png` и `slug--hover.png`.

## Контакты

В `kontakt.html` замените демонстрационные значения:

- `technik@example.com`
- `+420000000000`

на реальные e-mail и телефон. Форма работает через `mailto:` и не требует сервера.

## Мультиязычность

Сейчас словарь `js/i18n.js` содержит язык `cs`. Переключатель языка уже есть на всех страницах. Для добавления нового языка нужно:

1. добавить новый ключ рядом с `cs`, например `en`;
2. добавить `<option value="en">English</option>` во все селекты;
3. расширить логику подстановки текстов, если понадобится полная замена статического HTML.

# Развёртывание на Vercel

1. Создайте папку проекта и разложите файлы по структуре выше.
2. Проверьте локально: откройте `index.html` в браузере или выполните `npx serve .`.
3. Создайте новый проект на Vercel.
4. Загрузите папку проекта или подключите Git-репозиторий.
5. Для статического сайта без сборки оставьте Build Command пустым, Output Directory — корень проекта.
6. После публикации проверьте:
    - открывается `index.html`;
    - работают относительные ссылки на все 12 страниц и `kontakt.html`;
    - изображения загружаются из `./img/`;
    - hover-замена картинок есть на главной;
    - контактные ссылки ведут на реальные e-mail/телефон после замены плейсхолдеров.

# Финальная самопроверка

- HTML-файлы имеют `<!doctype html>`, `lang="cs"`, meta viewport и подключают общие CSS/JS.
- Внутренние ссылки относительные и ведут на существующие файлы.
- Все 12 услуг представлены на главной и имеют отдельные страницы.
- На главной карточки используют hover-swap `-main` → `-hover`.
- На страницах услуг hover не используется: `-main` — hero, `-hover` — дополнительная иллюстрация.
- CSS содержит адаптивные брейкпоинты и стили для всех используемых классов.
- JS не требует внешних API, не ломает сайт без дополнительных зависимостей.