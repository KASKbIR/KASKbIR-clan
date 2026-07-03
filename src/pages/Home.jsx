import bg from "../assets/bg.webp";

function Home({ lang, t }) {
  const news = [
    {
      date: "18.06.2026",
      text: t[lang].news1
    },
    {
      date: "15.06.2026",
      text: t[lang].news2
    },
    {
      date: "10.06.2026",
      text: t[lang].news3
    },
  ];

  return (
  <section
    className="hero"
    style={{
  backgroundImage: `url(${bg})`,
}}
  >
    <div className="heroOverlay">

      <div className="newsBox">
        <h3>{t[lang].newsTitle}</h3>

        {news.map((item, index) => (
          <div key={index} className="newsItem">
            <span>{item.date}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <p className="topText">
        {t[lang].hero}
      </p>

      <h1>KASKbIR</h1>

      <p className="heroText">
        PUBG MOBILE CLAN
      </p>

    </div>
  </section>
);
}

export default Home;