function Home({ t, lang }) {
  return (
    <header className="hero">

      <div className="heroOverlay">

        <h2>KASKbIR CLAN</h2>

        <p>
          {t[lang].hero || "Elite PUBG Mobile Community"}
        </p>

      </div>

    </header>
  );
}

export default Home;