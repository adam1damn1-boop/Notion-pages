# Krok do budoucnosti — Aurora Cesta

Statický rekla­mní web výjezdového počítačového mistra. Žádný backend, jen čistá statika.

## Spuštění lokálně

```bash
npx serve .
```


## Struktura

- index.html — kořenová stránka
- styles.css — všechny styly
- scripts/i18n.js — slovník překladů (`cs`)
- scripts/main.js — chování (jazyk, hover, scroll, nav)
- img/ — obrázky (12 služeb × 2 + hero × 2), pokud byly z Notion exportovány samostatně
- vercel.json, manifest.webmanifest, robots.txt, sitemap.xml — pomocné soubory

> Exportovaná položka obsahuje odkazy na obrázky, ale neobsahuje samotné binární soubory.
> Pokud složka `img/` chybí, web zobrazí čisté placeholders místo rozbitých ikon prohlížeče.

## Přidání dalšího jazyka

1. V scripts/i18n.js přidejte další objekt vedle window.I18N.cs, např. window.I18N.en.
2. Do pole window.I18N.available doplňte kód jazyka.
3. V hlavičce přidejte další tlačítko <button data-lang="en">EN</button>.
