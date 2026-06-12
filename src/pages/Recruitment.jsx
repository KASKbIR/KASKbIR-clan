import React from "react";

function Recruitment({ lang, t }) {

  const text = t[lang];

  return (
    <section className="recruitmentPage">

      <div className="recruitmentWrapper">

        <div className="recruitmentCard">

          <h1>{text.recruitmentTitle}</h1>

          <p className="recruitmentIntro">
  {text.recruitmentIntro}
</p>

          <h2>{text.requirementsTitle}</h2>

          <ul>
  <li>✔ {text.req1}</li>
  <li>✔ {text.req2}</li>
  <li>✔ {text.req3}</li>
  <li>✔ {text.req4}</li>
  <li>✔ {text.req5}</li>
  <li>✔ {text.req6}</li>
  <li>✔ {text.req7}</li>
  <li>✔ {text.req8}</li>
  <li>✔ {text.req9}</li>
  <li>✔ {text.req10}</li>
</ul>

        </div>

        <div className="recruitmentCard">

          <h2>{text.benefitsTitle}</h2>

          <ul>
  <li>✔ {text.benefit1}</li>
  <li>✔ {text.benefit2}</li>
  <li>✔ {text.benefit3}</li>
  <li>✔ {text.benefit4}</li>
  <li>✔ {text.benefit5}</li>
  <li>✔ {text.benefit6}</li>
</ul>

          <h2>🌍 {text.internationalTitle}</h2>

          <p>
  {text.internationalText}
</p>

          <h2>💬 {text.reviewsTitle}</h2>

          <div className="reviewCard">
            <p>"{text.review1}"</p>
          </div>

          <div className="reviewCard">
            <p>"{text.review2}"</p>
          </div>

          <div className="reviewCard">
           <p>"{text.review3}"</p>
          </div>

        </div>

      </div>

      <div className="joinBlock">

        <h2>{text.joinTitle}</h2>

        <ol>
  <li>{text.join1}</li>
  <li>{text.join2}</li>
  <li>{text.join3}</li>
</ol>

        <h2>{text.rulesTitle}</h2>

        <p>{text.rulesText1}</p>

        <p>{text.rulesText2}</p>

        <a
          href="https://t.me/+-krdNtQaKqdiYzQ6"
          target="_blank"
          rel="noreferrer"
          className="telegramButton"
        >
          {text.telegramButton}
        </a>

        <blockquote>
  {text.quote}
</blockquote>
      </div>

    </section>
  );
}

export default Recruitment;