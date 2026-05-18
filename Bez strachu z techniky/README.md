# Pan domácí počítače — web „Bez strachu z techniky“

Statický mnoho-stránkový web na pronájem výjezdních počítačových služeb.

## Struktura
- index.html — hlavní stránka s přehledem 12 služeb a hero-portrétem
- cisteni.html … design.html — 12 podstránek služeb
- kontakt.html — kontaktní stránka s formulářem (mailto) a odkazy
- assets/styles.css — společné styly
- assets/main.js — mobilní menu, přepínač jazyků, scroll animace
- assets/i18n.js — slovník textů (cs, připraveno na rozšíření)
- img/ — obrázky <slug>--main.png a <slug>--hover.png

## Vývoj lokálně
Stačí otevřít index.html v prohlížeči nebo spustit npx serve ..

## Nasazení
Kompatibilní s Vercel, Netlify, GitHub Pages, Cloudflare Pages. Žádný build krok není potřeba.
