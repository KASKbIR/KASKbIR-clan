import "./App.css";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("ru");

const t = {
  ru: {
    home: "Главная",
    about: "О клане",
    members: "Состав",
    recruitment: "Набор",
    gallery: "Галерея",

    hero: "Элитное сообщество PUBG Mobile",

    aboutTitle: "О КЛАНЕ",

    aboutText1:
      "KASKbIR — клан PUBG Mobile, ориентированный на командную игру, активность, дисциплину и атмосферу киберспорта.",

    aboutText2:
      "Клановые события, турниры, совместные игры и активная командная работа — часть нашей атмосферы.",

    leaders: "РУКОВОДСТВО КЛАНА",
    clanMembers: "УЧАСТНИКИ КЛАНА",

    recruitmentTitle: "НАБОР В КЛАН ОТКРЫТ",

    apply: "ПОДАТЬ ЗАЯВКУ"
  },

  en: {
    home: "Home",
    about: "About",
    members: "Roster",
    recruitment: "Recruitment",
    gallery: "Gallery",

    hero: "Elite PUBG Mobile Community",

    aboutTitle: "ABOUT CLAN",

    aboutText1:
      "KASKbIR is a PUBG Mobile clan focused on teamwork, activity, discipline and esports atmosphere.",

    aboutText2:
      "Clan events, tournaments and active teamwork are part of our identity.",

    leaders: "CLAN LEADERS",
    clanMembers: "CLAN MEMBERS",

    recruitmentTitle: "RECRUITMENT OPEN",

    apply: "APPLY NOW"
  },

  kz: {
    home: "Басты бет",
    about: "Клан туралы",
    members: "Құрам",
    recruitment: "Қабылдау",
    gallery: "Галерея",

    hero: "PUBG Mobile элиталық қауымдастығы",

    aboutTitle: "КЛАН ТУРАЛЫ",

    aboutText1:
      "KASKbIR — командалық ойынға, белсенділікке және тәртіпке бағытталған PUBG Mobile кланы.",

    aboutText2:
      "Кландық іс-шаралар, турнирлер және бірлескен ойындар — біздің атмосферамыздың бөлігі.",

    leaders: "КЛАН БАСШЫЛЫҒЫ",
    clanMembers: "КЛАН МҮШЕЛЕРІ",

    recruitmentTitle: "КЛАНҒА ҚАБЫЛДАУ АШЫҚ",

    apply: "ӨТІНІШ БЕРУ"
  }
};
  return (
    <div className="app">

     <nav className="navbar">

  <h1>KASKbIR</h1>

  <div className="langSwitcher">
    <button onClick={() => setLang("ru")}>RU</button>
    <button onClick={() => setLang("en")}>EN</button>
    <button onClick={() => setLang("kz")}>KZ</button>
  </div>

  <div className="navLinks">
      
          <a href="#">{t[lang].home}</a>
          <a href="#about">{t[lang].about}</a>
          <a href="#members">{t[lang].members}</a>
          <a href="#gallery">{t[lang].gallery}</a>
          <a href="#recruitment">{t[lang].recruitment}</a>
        </div>
      </nav>

      <header className="hero">
        <div className="heroOverlay">

          <h2>KASKbIR CLAN</h2>

          <p>
            {t[lang].hero}
          </p>

          

        </div>
      </header>

      <section className="about" id="about">

  <h2>{t[lang].aboutTitle}</h2>

  <p>
    {t[lang].aboutText1}
  </p>

  <p>
    {t[lang].aboutText2}
  </p>

  <p className="legend">
    Говорят, среди холодных степей однажды появился одинокий волк.
    Он не искал власти, не подчинялся чужим законам и не склонял голову
    перед сильными. Многие пытались сломать его, но каждый раз он
    возвращался ещё сильнее.

    Со временем вокруг него начали собираться такие же —
    верные, опасные и свободные. Так появилась стая KASKbIR.

    Старики говорят:
    волк становится легендой не тогда, когда побеждает в битве,
    а тогда, когда за ним идут другие.

    И пока жива стая —
    имя KASKbIR не исчезнет.
  </p>

</section>

     <section className="members" id="members">

  <h2>РУКОВОДСТВО КЛАНА</h2>

  <div className="cards">

    <div className="card">
      <h3>KS乂ChingisXan</h3>
      <p>Лидер</p>
      <span>UID: 5828989992</span>
    </div>

    <div className="card">
      <h3>KS乂TeHbBeTpA</h3>
      <p>Заместитель</p>
      <span>UID: 5753457243</span>
    </div>

    <div className="card">
      <h3>KS乂KARATEL</h3>
      <p>Заместитель</p>
      <span>UID: 5991021949</span>
    </div>

    <div className="card">
      <h3>KS乂KaKoCiK</h3>
      <p>Заместитель</p>
      <span>UID: 51418110998</span>
    </div>

  </div>

 <h2 style={{ marginTop: "100px" }}>
  УЧАСТНИКИ КЛАНА
</h2>

<div className="cards">

  <div className="card">
    <h3>KS乂NURLAN</h3>
    <p>Elite</p>
    <span>UID: 52266239504</span>
  </div>

  <div className="card">
    <h3>KS乂Alisher133</h3>
    <p>Elite</p>
    <span>UID: 5645926746</span>
  </div>

  <div className="card">
    <h3>KS乂Krisderik</h3>
    <p>Elite</p>
    <span>UID: 51697179436</span>
  </div>

  <div className="card">
    <h3>KS乂ALEkOtOMa</h3>
    <span>UID: 563094369</span>
  </div>

  <div className="card">
    <h3>KS乂KAРА</h3>
    <span>UID: 51418935814</span>
  </div>

  <div className="card">
    <h3>KS乂ツSOVa</h3>
    <p>Elite</p>
    <span>UID: 51507652214</span>
  </div>

  <div className="card">
    <h3>KS乂TALANT</h3>
    <p>Elite</p>
    <span>UID: 5627992934</span>
  </div>

</div>

</section>

<section className="gallery" id="gallery">

  <h2>{t[lang].gallery}</h2>

  <div className="galleryGrid">

    <img src="/gallery1.jpg" alt="" />
    <img src="/gallery2.jpg" alt="" />
    <img src="/gallery3.jpg" alt="" />
    <img src="/gallery4.jpg" alt="" />

  </div>

</section>

<section className="recruitment" id="recruitment">

        <h2>НАБОР В КЛАН ОТКРЫТ</h2>

        <ul>
         <li>✔ Активный онлайн</li>
<li>✔ Наличие микрофона</li>
<li>✔ Обязателен Telegram</li>
<li>✔ Адекватное общение</li>
<li>✔ Без политики и религии</li>
<li>✔ Желательна карта смены ника</li>
  </ul>

<a
  href="https://t.me/+-krdNtQaKqdiYzQ6"
  target="_blank"
  rel="noopener noreferrer"
  className="applyBtn"
>
  ПОДАТЬ ЗАЯВКУ
</a>

</section>

    </div>
  );
}

export default App;