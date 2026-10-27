import membersData from "./members";

// Новости KASKbIR на главной. Самые свежие — сверху, показываются первые 3.
// Чтобы добавить новость: скопируйте блок {...}, поставьте дату и тексты ru / en / kz.
const count = membersData.length;

const newsData = [
  {
    date: "27.10.2026",
    ru: `Обновлён состав клана: теперь нас ${count}. Добро пожаловать, KS乂SugakRoma!`,
    en: `Clan roster updated: we are now ${count}. Welcome, KS乂SugakRoma!`,
    kz: `Клан құрамы жаңартылды: енді біз ${count} адамбыз. Қош келдің, KS乂SugakRoma!`,
  },
  {
    date: "27.10.2026",
    ru: "Обновлены данные участников: новый ник KS乂LUNØRA, новые города и фото",
    en: "Member info updated: new nickname KS乂LUNØRA, new cities and photos",
    kz: "Қатысушылар деректері жаңартылды: KS乂LUNØRA жаңа лақап аты, жаңа қалалар мен фото",
  },
  {
    date: "27.10.2026",
    ru: "Набор новых бойцов открыт — подайте заявку через Telegram",
    en: "Recruitment is open — apply via Telegram",
    kz: "Жаңа ойыншыларды қабылдау ашық — Telegram арқылы өтініш беріңіз",
  },
];

export default newsData;