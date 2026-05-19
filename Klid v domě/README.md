# Klid v domě
Český statický web výjezdového počítačového mistra. Žádný build, jen statika.

## Spuštění lokálně
- Otevřete index.html přímo v prohlížeči, nebo spusťte npx serve . v kořeni projektu.

## Struktura

.
├── index.html
├── styles.css
├── i18n.js
├── app.js
├── manifest.webmanifest
├── robots.txt
├── vercel.json
└── img/
    ├── hero--main.png ... atd.


## Přidání jazyka
1. V i18n.js přidejte do window.I18N nový klíč, např. en: { ... } se stejnou strukturou klíčů jako cs.
2. V index.html přidejte <option value="en">EN</option> do #lang-select.

## Deploy na Vercel
1. git init && git add . && git commit -m "init"
2. Pushněte na GitHub.
3. Na https://vercel.com zvolte Add New → Project* a vyberte repo. Build i Output nechte prázdné — vercel.json už všechno popisuje.
4. Po deployi musí být přístupné https://<vaše-slug>.vercel.app.
