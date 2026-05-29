import { Link } from "react-router-dom";

function Footer({ lang, t }) {

  return (
    <footer className="footer">

      <div className="footerGlow"></div>

      <div className="footerContainer">

        <div className="footerBrand">

          <h1>KASKbIR</h1>

          <p>
            {t[lang].motto}
          </p>

        </div>

        <div className="footerLinks">

          <Link to="/">
            {t[lang].home}
          </Link>

          <Link to="/about">
            {t[lang].about}
          </Link>

          <Link to="/members">
            {t[lang].members}
          </Link>

          <Link to="/gallery">
            {t[lang].gallery}
          </Link>

          <Link to="/recruitment">
            {t[lang].recruitment}
          </Link>

        </div>

        <div className="footerSocials">

          <span>Discord</span>
          <span>TikTok</span>
          <span>YouTube</span>

        </div>

      </div>

      <div className="footerBottom">
        © 2026 KASKbIR Clan. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;