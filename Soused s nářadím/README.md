# Soused s nářadím

Lehký, responzivní reklamní web výjezdového mistra počítačových služeb. Statické soubory, žádný build.

## Struktura

.
├── index.html
├── styles.css
├── i18n.js
├── main.js
├── manifest.webmanifest
├── vercel.json
├── robots.txt
├── sitemap.xml
└── img/
    ├── hero--main.png
    ├── hero--hover.png
    ├── cleaning--main.png
    ├── cleaning--hover.png
    ├── upgrade--main.png
    ├── upgrade--hover.png
    ├── software--main.png
    ├── software--hover.png
    ├── repair--main.png
    ├── repair--hover.png
    ├── webcam--main.png
    ├── webcam--hover.png
    ├── alarm--main.png
    ├── alarm--hover.png
    ├── appliances--main.png
    ├── appliances--hover.png
    ├── literacy--main.png
    ├── literacy--hover.png
    ├── tutor--main.png
    ├── tutor--hover.png
    ├── chess--main.png
    ├── chess--hover.png
    ├── development--main.png
    ├── development--hover.png
    ├── design--main.png
    └── design--hover.png


## Lokální spuštění
Stačí otevřít index.html v prohlížeči, nebo spustit jednoduchý server:

npx serve .


## Přidání jazyka
V i18n.js přidejte do window.I18N objekt nového jazyka (např. en) a doplňte záznam do window.I18N_AVAILABLE.

## Kontaktní formulář
Formulář používá bezserverovou službu FormSubmit (https://formsubmit.co). Před nasazením nahraďte e-mail v action formuláře.