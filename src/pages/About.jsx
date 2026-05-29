function About({ lang, t }) {

return (

<section className="aboutPage">

  <div className="aboutContainer">

    {/* LEFT */}

    <div className="aboutSide">

      <p>
        <strong>{t[lang].founded}</strong><br />
        2024
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

</section>

);

}

export default About;