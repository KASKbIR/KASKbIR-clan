import { useState } from "react";

import darkAvalanche from "../assets/history/dark-avalanche-team.jpg";
import firstKaskbir from "../assets/history/first-kaskbir-team.jpg";

function About({ lang, t }) {

  const [showHistory, setShowHistory] = useState(false);
  const foundationDate = new Date(2019, 2, 1); // 1 марта 2019

const today = new Date();

let years = today.getFullYear() - foundationDate.getFullYear();
let months = today.getMonth() - foundationDate.getMonth();
let days = today.getDate() - foundationDate.getDate();

if (days < 0) {
  months--;

  const prevMonthDays = new Date(
    today.getFullYear(),
    today.getMonth(),
    0
  ).getDate();

  days += prevMonthDays;
}

if (months < 0) {
  years--;
  months += 12;
}
  const [showReviews, setShowReviews] = useState(false);

return (

<section className="aboutPage">

<div className="aboutContainer">

  {/* LEFT */}
<div className="aboutSide">

  <p>
    <strong>{t[lang].founded}</strong><br />
    2019
  </p>

  <p>
    <strong>{t[lang].clanLevel}</strong><br />
    10
  </p>

  <p>
    <strong>{t[lang].membersCount}</strong><br />
    26 / 60
  </p>

  <p>
    <strong>{t[lang].languages}</strong><br />
    RU / EN / KZ
  </p>

</div>

{/* HISTORY + REVIEWS */}
<div className="aboutHistoryColumn">

  <div className="aboutHistoryBox">

    <h4>{t[lang].historyTitle}</h4>

    <p>{t[lang].historyPreview}</p>

    <button onClick={() => setShowHistory(true)}>
      {t[lang].historyButton}
    </button>

  </div>

  <div className="aboutHistoryBox reviewsBox">

  <h4>💬 {t[lang].reviewsTitle}</h4>

  <p>{t[lang].reviewsSubtitle}</p>

  <button onClick={() => setShowReviews(true)}>
    {t[lang].reviewsButton}
  </button>

</div>

  </div>

  {/* CENTER */}
  <div className="legendCenter">

    <div className="clanMotto">
      {t[lang].motto}
    </div>

    <h1>
      {t[lang].legendTitle}
    </h1>

    <div className="legendText">
      {t[lang].legend}
    </div>

  </div>

  {/* RIGHT */}
  <div className="philosophy">

    <h3>
      {t[lang].philosophy}
    </h3>

    <ul>
      <li>{t[lang].ph1}</li>
      <li>{t[lang].ph2}</li>
      <li>{t[lang].ph3}</li>
      <li>{t[lang].ph4}</li>
      <li>{t[lang].ph5}</li>
      <li>{t[lang].ph6}</li>
    </ul>

  </div>

</div>

{showHistory && (

<div className="historyModal">

  <div className="historyContent">

    <button
      className="closeHistory"
      onClick={() => setShowHistory(false)}
    >
      ✕
    </button>

    <h2>{t[lang].historyModalTitle}</h2>

    <p>{t[lang].historyText1}</p>

   <p>{t[lang].historyText2}</p>

    <img
      src={darkAvalanche}
      alt="Dark Avalanche"
      className="historyImage"
    />

    <p>{t[lang].historyText3}</p>

    <p>{t[lang].historyText4}</p>

    <img
      src={firstKaskbir}
      alt="First Team"
      className="historyImage"
    />

    <p>{t[lang].historyText5}</p>

<p>{t[lang].historyText6}</p>

<p>{t[lang].historyText7}</p>

<p>{t[lang].historyText8}</p>

<p>{t[lang].historyText9}</p>

<div className="clanAgeBox">

  <h3>⏳ {t[lang].clanAge}</h3>

  <div className="clanAgeCounter">
    {years} {lang === "ru" ? "лет" : lang === "kz" ? "жыл" : "years"}
    {" • "}
    {months} {lang === "ru" ? "мес." : lang === "kz" ? "ай" : "months"}
    {" • "}
    {days} {lang === "ru" ? "дн." : lang === "kz" ? "күн" : "days"}
  </div>

  <p>{t[lang].since}</p>

</div>

<hr />

    <p>{t[lang].historySignature}</p>

    <hr />

<h3>{t[lang].leaderTitle}</h3>

<p>{t[lang].leaderText1}</p>
<p>{t[lang].leaderText2}</p>
<p>{t[lang].leaderText3}</p>

<p className="historySignature">{t[lang].leaderSignature2}</p>

  </div>

</div>

)}
{showReviews && (

<div className="historyModal">

  <div className="historyContent">

    <button
      className="closeHistory"
      onClick={() => setShowReviews(false)}
    >
      ✕
    </button>

    <h2>{t[lang].reviewsModalTitle}</h2>

   <div className="reviewsList">

  {/* Отзывы лидера */}

  <div className="reviewCard">
    <p>{t[lang].reviewsText1}</p>
    <div className="reviewAuthor">
      {t[lang].reviewsAuthor1}
    </div>
  </div>

  <div className="reviewCard">
    <p>{t[lang].reviewsText2}</p>
    <div className="reviewAuthor">
      {t[lang].reviewsAuthor2}
    </div>
  </div>
  <div className="reviewAction">

  <p className="reviewActionText">
    {t[lang].reviewInvite}
  </p>

  <a
    href="https://t.me/KASKbIR_Reviews_bot"
    target="_blank"
    rel="noreferrer"
    className="telegramButton"
  >
    {t[lang].reviewButton}
  </a>
  <p className="reviewHint">
  {t[lang].reviewHint}
</p>

</div>

 </div>

  </div>

</div>

)}

</section>

);

}


export default About;