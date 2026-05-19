# Sezónní starosti

Static, multi-language (cs) landing page for an in-home computer service technician.

## Quick start

1. Copy index.html, styles.css, scripts.js, vercel.json, robots.txt, manifest.webmanifest into a project folder.
2. Create an img/ subfolder and add the 26 image files (slug--main.png and slug--hover.png for each of the 12 services + hero pair).
3. Open index.html in a browser or run npx serve ..

## i18n

All translatable strings live in elements marked with data-i18n="key". The bootstrap script scrapes the cs strings from the HTML on load. To add another language, register it in scripts.js and add a <button data-lang="...">...</button> to .lang-switch.

## Deploy

Vercel: vercel --prod from the project root. Netlify / Cloudflare Pages / GitHub Pages all work too — it is a fully static site, no build step required.
