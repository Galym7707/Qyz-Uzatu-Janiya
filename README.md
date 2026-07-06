# Жания | Қыз ұзату шақыру сайты

Статический сайт-визитка для приглашения на қыз ұзату. По умолчанию открыт казахский язык, есть переключение на русский.

## Что внутри

- `index.html` - структура сайта.
- `styles.css` - адаптивный премиальный UI.
- `script.js` - переключение KZ/RU, анимации, счетчик, RSVP-интерактив.
- `assets/` - сгенерированные фото и локальный MP4-loop.

## Где менять реальные данные

В `script.js` заполните объект `eventDetails`:

```js
const eventDetails = {
  eventDate: "2026-09-12T18:00:00+05:00",
  mapUrl: "https://2gis.kz/...",
};
```

Тексты даты, времени, зала и адреса сейчас оставлены как заглушки, потому что точные данные не были переданы.

## Публикация на GitHub Pages

Сайт не требует сборки. Для публикации достаточно включить GitHub Pages из ветки `main`, папка `/root`.

## Источники референсов

- Қыз ұзату онлайн шақырулары: https://toi.com.kz/kk/qyz-uzatu-shakyru
- Конструктор қыз ұзату шақыруы: https://shaqyru.kz/qyz_uzatu
- Онлайн шақыру сайттары: https://online-shaqyru.kz/kk/uzatu-kz/
- Wedding website структура: https://www.canva.com/create/wedding-websites/
- RSVP и wedding website функции: https://withjoy.com/wedding-website/
