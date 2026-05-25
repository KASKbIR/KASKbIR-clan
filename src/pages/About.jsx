function About({ lang, t }) {
  return (
    <section className="about">
      <h2>{t[lang].aboutTitle}</h2>

      <p>{t[lang].aboutText1}</p>

      <p>{t[lang].aboutText2}</p>

      <p
        className="legend"
        style={{ whiteSpace: "pre-line" }}
      >
        {t[lang].legend}
      </p>
    </section>
  );
}

export default About;