# Жания | Қыз ұзату шақыру сайты

Статический сайт-визитка для приглашения на қыз ұзату. По умолчанию открыт казахский язык, есть переключение на русский.

## Что внутри

- `index.html` - структура сайта.
- `styles.css` - адаптивный премиальный UI.
- `script.js` - переключение KZ/RU, анимации, счетчик, RSVP-интерактив.
- `assets/` - сгенерированные фото и локальный MP4-loop.

## Где менять реальные данные

Данные события находятся в объекте `eventDetails` в `script.js`:

```js
const eventDetails = {
  eventDate: "2026-08-21T18:00:00+05:00",
  mapUrls: {
    twoGis: "https://2gis.kz/almaty/geo/70000001093728642/77.035326,43.329644",
    google: "https://www.google.com/maps/search/?api=1&query=43.329644,77.035326",
  },
};
```

Текущие данные: Жания, 21 августа 2026, 18:00, Royal Plaza, Алматы.

## Публикация на GitHub Pages

Сайт не требует сборки. Для публикации достаточно включить GitHub Pages из ветки `main`, папка `/root`.

## Источники референсов

- Қыз ұзату онлайн шақырулары: https://toi.com.kz/kk/qyz-uzatu-shakyru
- Конструктор қыз ұзату шақыруы: https://shaqyru.kz/qyz_uzatu
- Онлайн шақыру сайттары: https://online-shaqyru.kz/kk/uzatu-kz/
- Wedding website структура: https://www.canva.com/create/wedding-websites/
- RSVP и wedding website функции: https://withjoy.com/wedding-website/
