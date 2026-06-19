import { useState } from "react";

import darkAvalanche from "../assets/history/dark-avalanche-team.jpg";
import firstKaskbir from "../assets/history/first-kaskbir-team.jpg";

function About({ lang, t }) {

  const [showHistory, setShowHistory] = useState(false);

return (

<section className="aboutPage">

  <div className="aboutContainer">

    {/* LEFT */}
    <div className="aboutSide">

      <p>
        <strong>{t[lang].founded}</strong><br />
        2022
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

    {/* 🆕 HISTORY (ОТДЕЛЬНОЕ ОКНО) */}
    <div className="aboutHistoryBox">

      <h4>{t[lang].historyTitle}</h4>

<p>{t[lang].historyPreview}</p>

<button onClick={() => setShowHistory(true)}>
  {t[lang].historyButton}
</button>

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

    <p>{t[lang].historySignature}</p>

    <hr />

    <h3>💬 Комментарии</h3>

    <p>
      Блок комментариев будет подключён следующим этапом.
    </p>

  </div>

</div>

)}

</section>

);

}

export default About;