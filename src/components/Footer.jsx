import { Link } from "react-router-dom";

function Footer({ lang, t }) {
  const text = t[lang];

  return (
    <footer className="footer">

      <div className="footerGlow"></div>

      <div className="footerContainer">

        <div className="footerBrand">
          <h1>KASKbIR</h1>
          <p>{text.motto}</p>
        </div>

        <div className="footerLinks">
          <Link to="/">{text.home}</Link>
          <Link to="/about">{text.about}</Link>
          <Link to="/members">{text.members}</Link>
          <Link to="/gallery">{text.gallery}</Link>
          <Link to="/recruitment">{text.recruitment}</Link>
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