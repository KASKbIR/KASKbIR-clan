import bg from "../assets/bg.webp";

function Home({ lang, t }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.7),
          rgba(0,0,0,0.85)
        ),
        url(${bg})`,
      }}
    >
      <div className="heroOverlay">

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