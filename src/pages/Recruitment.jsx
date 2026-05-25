function Recruitment({ lang, t }) {
  return (
    <section className="recruitment">

      <h2>{t[lang].recruitmentTitle}</h2>

      <ul>
        <li>{t[lang].req1}</li>
        <li>{t[lang].req2}</li>
        <li>{t[lang].req3}</li>
        <li>{t[lang].req4}</li>
        <li>{t[lang].req5}</li>
        <li>{t[lang].req6}</li>
      </ul>

      <a
        href="https://t.me/+-krdNtQaKqdiYzQ6"
        target="_blank"
        rel="noopener noreferrer"
        className="applyBtn"
      >
        {t[lang].apply}
      </a>

    </section>
  );
}

export default Recruitment;