# Čas pro to důležité

Statický jednostránkový web výjezdového mistra počítačových služeb. Hlavní jazyk: čeština.

## Struktura


.
├── index.html
├── manifest.webmanifest
├── vercel.json
├── robots.txt
├── sitemap.xml
├── img/
│   ├── hero--main.png
│   ├── hero--hover.png
│   ├── cleaning--main.png
│   ├── cleaning--hover.png
│   ├── upgrade--main.png
│   ├── upgrade--hover.png
│   ├── software--main.png
│   ├── software--hover.png
│   ├── repair--main.png
│   ├── repair--hover.png
│   ├── webcam--main.png
│   ├── webcam--hover.png
│   ├── alarm--main.png
│   ├── alarm--hover.png
│   ├── appliances--main.png
│   ├── appliances--hover.png
│   ├── literacy--main.png
│   ├── literacy--hover.png
│   ├── tutor--main.png
│   ├── tutor--hover.png
│   ├── chess--main.png
│   ├── chess--hover.png
│   ├── development--main.png
│   ├── development--hover.png
│   ├── design--main.png
│   └── design--hover.png
├── styles/
│   └── main.css
└── scripts/
    ├── i18n.js
    └── app.js


## Lokální spuštění

Stačí otevřít index.html v prohlížeči. Pro testování doporučujeme jednoduchý statický server:

bash
npx serve .
# nebo
python3 -m http.server 8000


## Nasazení na Vercel

1. Nahrajte složku jako Git repozitář (GitHub/GitLab/Bitbucket).
2. V dashboardu Vercel: New Project → vyberte repozitář.
3. Framework Preset: Other. Build & Output zůstanou prázdné — jde o čistou statiku.
4. Po deployi Vercel automaticky aplikuje vercel.json (cache, security headers).
5. Volitelně přidejte vlastní doménu v Settings → Domains.

## Přidání dalšího jazyka

1. V souboru scripts/i18n.js přidejte nový klíč jazyka (např. de) do objektu window.I18N se stejnou sadou klíčů jako cs.
2. V index.html přidejte tlačítko do .lang: <button type="button" class="lang-btn" data-lang="de" aria-pressed="false">DE</button>.
3. Žádné další změny nejsou potřeba — app.js přepínač detekuje automaticky.
