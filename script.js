const eventDetails = {
  eventDate: "",
  mapUrl: "",
};

const translations = {
  kk: {
    brandMini: "Жания",
    navInvite: "Шақыру",
    navProgram: "Бағдарлама",
    navRsvp: "Жауап",
    heroKicker: "Қыз ұзату шақыруы",
    heroCopy:
      "Қадірлі ағайын-туыс, құда-жекжат, дос-жаран! Сіздерді аяулы қызымыз Жанияның қыз ұзату тойының қадірлі қонағы болуға шақырамыз.",
    primaryCta: "Шақыруды көру",
    secondaryCta: "Қатысуымды білдіру",
    dateLabel: "Күні",
    dateValue: "Күні жақында қосылады",
    timeLabel: "Уақыты",
    timeValue: "Уақыты нақтыланады",
    placeLabel: "Орын",
    placeValue: "Мекенжай қосылады",
    inviteEyebrow: "Ақ ниетпен",
    inviteTitle: "Қыз ұзату тойына шақырамыз",
    inviteBodyOne:
      "Бұл кеш - ата-ана шаңырағынан жаңа өмірге ақ тілекпен шығарып салатын ерекше сәт. Сізбен бірге бөліскіміз келетін жылы естелік осы жерден басталады.",
    inviteBodyTwo:
      "Қатысуыңыз біз үшін үлкен қуаныш. Барлық нақты мәліметтер төмендегі бөлімдерге қосылады.",
    days: "күн",
    hours: "сағ",
    minutes: "мин",
    countNote: "Күн белгіленген соң кері санақ қосылады",
    motionEyebrow: "Кештің көңіл-күйі",
    motionTitle: "Жібек, алтын жарық және салтанатты үнсіздік",
    motionCopy:
      "Видео-блок шақыруды тірі сезіндіреді: қонақ сайтты ашқанда оқиға атмосферасын бірден көреді.",
    programEyebrow: "Кеш жоспары",
    programTitle: "Бағдарлама",
    programOneTitle: "Қонақтарды қарсы алу",
    programOneText: "Келу уақыты мен зал атауы нақты мәліметтермен жаңартылады.",
    programTwoTitle: "Ақ тілек",
    programTwoText: "Жақындардың лебізі және отбасылық жылы сәттер.",
    programThreeTitle: "Қызды шығарып салу",
    programThreeText: "Ұзату дәстүріне арналған негізгі салтанатты бөлім.",
    programFourTitle: "Мерекелік кеш",
    programFourText: "Музыка, естелік фото және қонақтармен ортақ қуаныш.",
    galleryEyebrow: "Фото көңіл-күй",
    galleryTitle: "Дәстүрге жақын, бүгінгі күнге лайық",
    galleryCopy:
      "Сайтта басты фото, салтанатты деталь және қысқа видео бар. Нақты отбасылық фото берілгенде осы блоктар оңай ауыстырылады.",
    detailsEyebrow: "Қонаққа қажеті",
    detailsTitle: "Мәліметтер",
    detailDate: "Күні",
    detailTime: "Басталуы",
    detailVenue: "Тойхана",
    detailAddress: "Мекенжай",
    venueValue: "Тойхана атауы қосылады",
    addressValue: "Мекенжай қосылады",
    mapTitle: "Карта сілтемесі осында қосылады",
    mapCta: "Картаны ашу",
    rsvpEyebrow: "Жауап беру",
    rsvpTitle: "Келетініңізді белгілеңіз",
    rsvpCopy:
      "Бұл форма әзірге сайт ішіндегі әдемі интерактив ретінде жұмыс істейді. Қажет болса, оны WhatsApp немесе Google Forms сілтемесіне қосуға болады.",
    nameLabel: "Атыңыз",
    guestLabel: "Қонақ саны",
    phoneLabel: "Телефон",
    oneGuest: "1 қонақ",
    twoGuests: "2 қонақ",
    threeGuests: "3 қонақ",
    submitRsvp: "Жауап жіберу",
    formThanks: "Рақмет! Жауабыңыз белгіленді.",
    footerText: "Жанияның қыз ұзату шақыру сайты",
    footerTop: "Жоғарыға",
  },
  ru: {
    brandMini: "Жания",
    navInvite: "Приглашение",
    navProgram: "Программа",
    navRsvp: "Ответ",
    heroKicker: "Приглашение на қыз ұзату",
    heroCopy:
      "Дорогие родные, близкие и друзья! Приглашаем вас стать почетными гостями на торжестве қыз ұзату нашей дорогой Жании.",
    primaryCta: "Смотреть приглашение",
    secondaryCta: "Подтвердить участие",
    dateLabel: "Дата",
    dateValue: "Дата будет добавлена",
    timeLabel: "Время",
    timeValue: "Время уточняется",
    placeLabel: "Место",
    placeValue: "Адрес будет добавлен",
    inviteEyebrow: "С теплом",
    inviteTitle: "Приглашаем на қыз ұзату",
    inviteBodyOne:
      "Этот вечер посвящен особенному моменту, когда родительский дом провожает дочь в новую жизнь с добрыми пожеланиями.",
    inviteBodyTwo:
      "Ваше присутствие будет для нас большой радостью. Все точные данные будут добавлены в разделы ниже.",
    days: "дней",
    hours: "час",
    minutes: "мин",
    countNote: "Обратный отсчет включится после добавления даты",
    motionEyebrow: "Настроение вечера",
    motionTitle: "Шелк, золотой свет и торжественная тишина",
    motionCopy:
      "Видео-блок делает приглашение живым: гость сразу чувствует атмосферу события.",
    programEyebrow: "План вечера",
    programTitle: "Программа",
    programOneTitle: "Встреча гостей",
    programOneText: "Время прибытия и название зала будут обновлены точными данными.",
    programTwoTitle: "Теплые пожелания",
    programTwoText: "Слова близких и семейные моменты.",
    programThreeTitle: "Проводы невесты",
    programThreeText: "Главная торжественная часть, посвященная традиции ұзату.",
    programFourTitle: "Праздничный вечер",
    programFourText: "Музыка, памятные фото и общая радость с гостями.",
    galleryEyebrow: "Фото-настроение",
    galleryTitle: "Близко к традиции, актуально сегодня",
    galleryCopy:
      "На сайте есть главное фото, торжественная деталь и короткое видео. Когда появятся реальные семейные фото, эти блоки легко заменить.",
    detailsEyebrow: "Для гостей",
    detailsTitle: "Детали",
    detailDate: "Дата",
    detailTime: "Начало",
    detailVenue: "Зал",
    detailAddress: "Адрес",
    venueValue: "Название зала будет добавлено",
    addressValue: "Адрес будет добавлен",
    mapTitle: "Ссылка на карту будет добавлена здесь",
    mapCta: "Открыть карту",
    rsvpEyebrow: "Ответ",
    rsvpTitle: "Отметьте участие",
    rsvpCopy:
      "Пока форма работает как красивая интерактивная часть сайта. При необходимости ее можно подключить к WhatsApp или Google Forms.",
    nameLabel: "Ваше имя",
    guestLabel: "Количество гостей",
    phoneLabel: "Телефон",
    oneGuest: "1 гость",
    twoGuests: "2 гостя",
    threeGuests: "3 гостя",
    submitRsvp: "Отправить ответ",
    formThanks: "Спасибо! Ваш ответ отмечен.",
    footerText: "Сайт-приглашение на қыз ұзату Жании",
    footerTop: "Наверх",
  },
};

const header = document.querySelector(".site-header");
const langButtons = document.querySelectorAll(".lang-btn");
const mapLink = document.querySelector(".map-link");
const form = document.querySelector(".rsvp-form");
const formStatus = document.querySelector(".form-status");
let activeLang = localStorage.getItem("site-lang") || "kk";

function setLanguage(lang) {
  activeLang = translations[lang] ? lang : "kk";
  document.documentElement.lang = activeLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[activeLang][key]) {
      node.textContent = translations[activeLang][key];
    }
  });

  document.querySelectorAll("[data-placeholder-kk]").forEach((node) => {
    node.placeholder = node.dataset[`placeholder${activeLang === "kk" ? "Kk" : "Ru"}`] || "";
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (formStatus.textContent) {
    formStatus.textContent = translations[activeLang].formThanks;
  }

  localStorage.setItem("site-lang", activeLang);
}

function updateHeader() {
  header.dataset.elevated = String(window.scrollY > 18);
}

function updateCountdown() {
  const date = eventDetails.eventDate ? new Date(eventDetails.eventDate) : null;
  const cells = {
    days: document.querySelector('[data-count="days"]'),
    hours: document.querySelector('[data-count="hours"]'),
    minutes: document.querySelector('[data-count="minutes"]'),
  };

  if (!date || Number.isNaN(date.getTime())) {
    Object.values(cells).forEach((cell) => {
      cell.textContent = "--";
    });
    return;
  }

  const diff = Math.max(0, date.getTime() - Date.now());
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;

  cells.days.textContent = String(Math.floor(diff / day)).padStart(2, "0");
  cells.hours.textContent = String(Math.floor((diff % day) / hour)).padStart(2, "0");
  cells.minutes.textContent = String(Math.floor((diff % hour) / minute)).padStart(2, "0");
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  nodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 35, 180)}ms`;
    observer.observe(node);
  });
}

function initVideoPlayback() {
  const video = document.querySelector("video");
  if (!video) return;

  video.muted = true;
  video.playsInline = true;

  const playVideo = () => {
    const request = video.play();
    if (request && typeof request.catch === "function") {
      request.catch(() => {});
    }
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) playVideo();
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
  }

  window.addEventListener("focus", playVideo);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) playVideo();
  });
  playVideo();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("scroll", updateHeader, { passive: true });

if (mapLink) {
  if (eventDetails.mapUrl) {
    mapLink.href = eventDetails.mapUrl;
    mapLink.target = "_blank";
    mapLink.rel = "noopener";
  } else {
    mapLink.setAttribute("aria-disabled", "true");
  }
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = translations[activeLang].formThanks;
    form.reset();
  });
}

setLanguage(activeLang);
updateHeader();
updateCountdown();
initReveal();
initVideoPlayback();
setInterval(updateCountdown, 60 * 1000);
