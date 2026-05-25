function Members({ lang, t }) {
  return (
    <section className="members">

      <h2>{t[lang].leaders}</h2>

      <div className="cards">

        <div className="card">
          <h3>KS乂ChingisXan</h3>
          <p>{t[lang].leader}</p>
          <span>UID: 5828989992</span>
        </div>

        <div className="card">
          <h3>KS乂TeHbBeTpA</h3>
          <p>{t[lang].deputy}</p>
          <span>UID: 5753457243</span>
        </div>

        <div className="card">
          <h3>KS乂KARATEL</h3>
          <p>{t[lang].deputy}</p>
          <span>UID: 5991021949</span>
        </div>

        <div className="card">
          <h3>KS乂KaKoCiK</h3>
          <p>{t[lang].deputy}</p>
          <span>UID: 51418110998</span>
        </div>

      </div>

      <h2 style={{ marginTop: "100px" }}>
        {t[lang].clanMembers}
      </h2>

      <div className="cards">

        <div className="card">
          <h3>KS乂NURLAN</h3>
          <p>{t[lang].elite}</p>
          <span>UID: 52266239504</span>
        </div>

        <div className="card">
          <h3>KS乂Alisher133</h3>
          <p>{t[lang].elite}</p>
          <span>UID: 5645926746</span>
        </div>

        <div className="card">
          <h3>KS乂Krisderik</h3>
          <p>{t[lang].elite}</p>
          <span>UID: 51697179436</span>
        </div>

        <div className="card">
          <h3>KS乂ALEkOtOMa</h3>
          <span>UID: 563094369</span>
        </div>

        <div className="card">
          <h3>KS乂KAРА</h3>
          <span>UID: 51418935814</span>
        </div>

        <div className="card">
          <h3>KS乂ツSOVa</h3>
          <p>{t[lang].elite}</p>
          <span>UID: 51507652214</span>
        </div>

        <div className="card">
          <h3>KS乂TALANT</h3>
          <p>{t[lang].elite}</p>
          <span>UID: 5627992934</span>
        </div>

      </div>

    </section>
  );
}

export default Members;