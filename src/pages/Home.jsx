import bg from "../assets/bg.webp";
import newsData from "../data/news";

function Home({ lang, t }) {
  const news = newsData.slice(0, 3);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.48), rgba(0,0,0,0.68)), url(${bg})`,
      }}
    >
      <div className="heroOverlay">

        <div className="newsBox">
          <h3>{t[lang].newsTitle}</h3>

          {news.map((item, index) => (
            <div key={index} className="newsItem">
              <span>{item.date}</span>
              <p>{item[lang]}</p>
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