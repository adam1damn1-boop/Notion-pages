# Klidný mistr — статический сайт

Лёгкий, адаптивный, мультиязычный сайт выездного компьютерного мастера. Только статика — HTML, CSS, JS. Готов к деплою на Vercel/Netlify/GitHub Pages/Cloudflare Pages.

## Структура


klidny-dum/
├── index.html
├── styles.css
├── i18n.js
├── main.js
├── vercel.json
├── robots.txt
├── manifest.webmanifest
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


## Локальный просмотр

sh
npx serve .
# или
python3 -m http.server 8080


Откройте http://localhost:8080.

## Деплой на Vercel

1. Создайте Git-репозиторий и закоммитьте папку.
2. На http://vercel.com → Add New → Project → Import репозиторий.
3. Framework Preset: Other. Build Command: (пусто). Output Directory: (пусто, корень).
4. Deploy.

## Перед публикацией

Замените в index.html контактные заглушки:
- mailto:mistr@klidny-mistr.cz
- tel:+420777123456
- https://wa.me/420777123456
- https://t.me/klidny_mistr
- https://formspree.io/f/your-form-id
