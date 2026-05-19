window.SERVICES = [
  { slug: 'cleaning',    section: '1.1', group: 'care' },
  { slug: 'upgrade',     section: '1.2', group: 'care' },
  { slug: 'software',    section: '1.3', group: 'care' },
  { slug: 'repair',      section: '1.4', group: 'care' },
  { slug: 'webcam',      section: '2.1', group: 'security' },
  { slug: 'alarm',       section: '2.2', group: 'security' },
  { slug: 'appliances',  section: '2.3', group: 'security' },
  { slug: 'literacy',    section: '3.1', group: 'learning' },
  { slug: 'tutor',       section: '3.2', group: 'learning' },
  { slug: 'chess',       section: '3.3', group: 'learning' },
  { slug: 'development', section: '3.4', group: 'learning' },
  { slug: 'design',      section: '4',   group: 'design'  }
];

window.I18N = {
  cs: {
    brand: 'Digitální péče',
    a11y: { skip: 'Přeskočit na obsah' },
    nav: {
      care: 'Péče',
      security: 'Bezpečnost',
      learning: 'Vzdělávání',
      design: 'Design',
      contact: 'Domluvit návštěvu'
    },
    hero: {
      eyebrow: 'Sousedský mistr po ruce',
      title: 'Digitální péče, jakou si zaslouží i váš počítač',
      lead: 'Výjezd a první diagnostika zdarma. Přijedu k vám domů, podívám se a poradím — lidsky, beze spěchu a bez technického žargonu.',
      cta1: 'Domluvit návštěvu',
      cta2: 'Co všechno umím',
      points: ['Výjezd zdarma', 'První diagnostika zdarma', 'Platíte jen za práci a díly'],
      badge: 'Praha a okolí · po–so'
    },
    groups: {
      care:     { title: 'Péče o počítač',     lead: 'Pravidelná péče, díky které vám technika slouží roky.' },
      security: { title: 'Bezpečnost domova',  lead: 'Kamery, alarmy a chytré spotřebiče, které pracují za vás.' },
      learning: { title: 'Vzdělávání',         lead: 'Trpělivé doučování pro dospělé i děti — ve vašem tempu.' },
      design:   { title: 'Design a web',       lead: 'Letáky, weby a aplikace, které dělají dobrý dojem.' }
    },
    cards: {
      cleaning:    { title: 'Vyčištění počítače',    tag: '1.1' },
      upgrade:     { title: 'Modernizace',            tag: '1.2' },
      software:    { title: 'Nastavení softwaru',     tag: '1.3' },
      repair:      { title: 'Oprava a likvidace',     tag: '1.4' },
      webcam:      { title: 'Web-kamery',             tag: '2.1' },
      alarm:       { title: 'Domácí alarm',           tag: '2.2' },
      appliances:  { title: 'Chytrá domácnost',       tag: '2.3' },
      literacy:    { title: 'Počítačová gramotnost',  tag: '3.1' },
      tutor:       { title: 'Doučování informatiky',  tag: '3.2' },
      chess:       { title: 'Šachy',                  tag: '3.3' },
      development: { title: 'Vysoké technologie',     tag: '3.4' },
      design:      { title: 'Design na míru',         tag: '4'   }
    },
    sections: {
      main:        'Digitální péče, jakou si zaslouží i váš počítač — výjezd a první diagnostika zdarma.',
      cleaning:    'Váš počítač v létě hučí jako stará lednička a notebook na klíně pálí jako horký toast? To není normální stav — uvnitř se nejspíš nashromáždila pestrá sbírka prachu, chlupů a zapomenutých drobků. Přijedu k vám domů zdarma, opatrně počítač rozeberu, vyčistím ho zevnitř, vyměním vyschlou teplovodivou pastu a namažu ventilátory. Po mojí návštěvě bude mašina tichá jako kočka u kamen a vy zase v klidu otevřete deset záložek najednou. První diagnostika je samozřejmě zdarma — nejdřív se podíváme, co stroj potřebuje, a teprve pak budete platit.',
      upgrade:     'Stará dobrá mašina, na kterou jste si za roky zvykli, vás najednou nutí čekat u každého kliknutí? Než ji odnesete do sběrného dvora, dejte jí ještě jednu šanci. Vyměním pomalý disk za rychlý SSD, přidám paměť, osadím nový procesor nebo unavenou baterii do notebooku. Z věrného pomocníka uděláme zase rychlonožku, která zvládne práci, školu i večerní film bez čekání. Přijedu zdarma, podívám se a hned vám na rovinu řeknu, co dává smysl pořizovat a co ne — abyste neutráceli za zbytečnosti.',
      software:    'Když počítač ráno spustí pět neznámých oken a internet se chová jako bludiště, je čas zavolat někoho, kdo to dá zpátky do pořádku. Pomůžu s vyčištěním Windows, odstraněním virů, instalací nového systému i programů, které doopravdy potřebujete — od kancelářských nástrojů přes výuku až po hry pro děti. Když nevíte, jak vyplnit formulář na úřadě nebo se přihlásit na portál, projdeme to spolu krok za krokem, bez spěchu. Cesta k vám i první rozbor problému jsou zdarma, takže nic neriskujete.',
      repair:      'Notebook spadl ze stolu, na klávesnici se rozlila káva nebo prostě jednoho rána nenastartoval? Neházejte ho hned do popelnice — často stačí vyměnit jednu součástku a stroj bude zase sloužit dál. Přijedu zdarma, podívám se, a když má oprava smysl, řeknu vám to upřímně. Když už ne, postarám se o ekologickou likvidaci a využiji ho jako zdroj náhradních dílů pro někoho dalšího. Žádný šrot navíc, žádné zbytečné výdaje — jen poctivá rada od souseda, který tomu rozumí.',
      webcam:      'Chcete vědět, co se děje doma, když jste v práci, nebo zkontrolovat chatu uprostřed týdne, aniž byste tam museli jezdit? Připojím vám tolik vnitřních či venkovních kamer, kolik potřebujete — pohodlně se na ně podíváte z mobilu, ať jste kdekoli na světě. S příchozím poštákem si můžete promluvit přímo přes kameru, jako byste byli za dveřmi. Přijedu zdarma a poradím, kam je nejlépe umístit, aby pokrývaly to, na čem vám doopravdy záleží. Klidný spánek i bez drahé bezpečnostní agentury.',
      alarm:       'Bojíte se, že vás někdo navštíví, zatímco jste pryč na dovolené nebo na chalupě? Namontuji přímo na vstupní dveře bytu, garáže nebo kůlny dálkově ovládaný alarm s hlasitou sirénou a SMS upozorněním. V okamžiku, kdy se někdo pokusí dostat dovnitř, pípne vám telefon a okolí to uslyší. Žádné složité šňůry po celém domě, žádné drahé měsíční tarify. Přijedu zdarma, podívám se na vaše dveře a navrhnu nejjednodušší řešení, které vás bude doopravdy krýt.',
      appliances:  'Koupili jste chytrou žárovku, robotický vysavač nebo novou Smart TV a teď leží v krabici, protože návod vypadá jako kniha v cizí řeči? Přijedu, propojím všechno do jedné aplikace v telefonu a v klidu vám ukážu, jak to ovládat. Stačí ťuknout — a večer se rozsvítí teplé světlo, ráno se spustí kávovar, kotel se zapne, než přijdete z práce domů. Z neposlušné techniky uděláme tichého pomocníka, který se o vás stará. První návštěva i poradenství jsou zdarma.',
      literacy:    'Vnoučata vám posílají fotky přes nějakou novou aplikaci a vy jen kroutíte hlavou, že to za vašich časů takhle nebylo? Naučím vás ovládat počítač, mobil i moderní pomocníky tak, abyste se na ně přestali bát sáhnout. Probereme jen to, co skutečně používáte v každodenním životě — videohovory s rodinou, nakupování online, doklady a úřady, klidně i chytrou pomoc od umělé inteligence. Tempo si určujete vy, hloupé otázky neexistují. Přijedu zdarma a první lekci si zkusíme úplně bez závazku.',
      tutor:       'Vaše dítě má z informatiky špatné známky nebo se učivu nestíhá věnovat doma? Mám vysokoškolské vzdělání v IT a zkušenosti s výukou ze své doktorandské praxe, takže umím látku vysvětlit srozumitelně a podle tempa dítěte. Společně projdeme úkoly, doplníme chybějící základy a najdeme způsob, jak ho téma začne bavit. Často stačí pár sezení a děti samy najednou sahají po klávesnici, aby si něco vyzkoušely. Přijedu k vám domů zdarma — vy i dítě budete v prostředí, které dobře znáte.',
      chess:       'Hledáte pro dítě smysluplnou činnost, která ho odtáhne od nekonečných videí a zároveň trénuje hlavu? Šachy hraji velmi dobře a ukážu vašemu dítěti, proč je tahle hra tak okouzlující — od prvních otevření po malé taktické finty. Šachy učí trpělivost, soustředění a předvídání důsledků — schopnosti, které se mu budou hodit ve škole i v životě. Lekce vedu hravě, ne jako nudnou školní povinnost. Přijedu zdarma a podle nálady dítěte poznáme, jestli ho hra chytne — teprve pak se domluvíme na dalších krocích.',
      development: 'Co kdyby vaše dítě umělo používat umělou inteligenci dřív, než ji začnou používat jeho spolužáci? Ukážu mu, jak si nechat vysvětlit těžké učivo srozumitelně, jak si připravit referát, jak si poradit s úkolem, který v hodině nepochopilo. Není to o opisování — je to o tom umět chytře pracovat s nástroji budoucnosti. Ze zvědavého školáka se může stát dítě, které ve třídě klidně sahá po složitějších tématech, protože ví, jak na to. Přijedu zdarma a domluvíme se, jestli chcete formu zábavy, nebo přímo doučování.',
      design:      'Otevíráte si malou kavárnu, kadeřnictví nebo si chcete konečně udělat pořádek v rodinné firmě a potřebujete, aby vás bylo vidět? Jsem diplomovaný vývojář software a navrhnu vám letáky, plakáty, jednoduché webové stránky, katalog nabídky nebo i celou aplikaci na míru. Společně vymyslíme styl, který bude vypadat čistě a moderně, ne jako šablona ze stovky stejných. Žádné cizí studio, kterému musíte složitě vysvětlovat, co chcete — sednu si k vám domů nebo do podniku a první nápady probereme zdarma.',
      contact:     'Ozvěte se kdykoli — odepíšu vám lidsky a v klidu, bez technického žargonu a bez tlaku. Domluvíme termín, který vám sedí, a já se za vámi zastavím přímo doma. Cesta i první diagnostika nic nestojí.'
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Stačí krátká zpráva — ozvu se brzy',
      labels: { email: 'E-mail', phone: 'Telefon', whatsapp: 'WhatsApp', telegram: 'Telegram' }
    },
    form: {
      name: 'Jak vám mám říkat?',
      contact: 'Telefon nebo e-mail',
      message: 'S čím vám můžu pomoci?',
      submit: 'Odeslat zprávu',
      note: 'Odpovím obvykle do několika hodin. Bez spamu, jen lidský rozhovor.'
    },
    footer: {
      copy: '© 2026 Digitální péče — Adam',
      made: 'Vyrobeno s láskou k sousedům.'
    }
  }
};