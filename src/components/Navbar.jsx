import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ lang, setLang, t }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbarLeft">

        <div className="socialLinks">
          <span>Discord</span>
          <a
  href="https://www.tiktok.com/@kaskbir6?_r=1&_t=ZS-97IvfeHMZUb"
  target="_blank"
  rel="noopener noreferrer"
>
  TikTok
</a>
          <span>YouTube</span>
        </div>

      </div>

      <h1>KASKbIR</h1>

      <div
        className={`burger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="langSwitcher">
        <button onClick={() => setLang("ru")}>RU</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("kz")}>KZ</button>
      </div>

      <div className={`navLinks ${menuOpen ? "showMenu" : ""}`}>

  <Link to="/" onClick={() => setMenuOpen(false)}>
    {t[lang].home}
  </Link>

  <Link to="/about" onClick={() => setMenuOpen(false)}>
    {t[lang].about}
  </Link>

  <Link to="/members" onClick={() => setMenuOpen(false)}>
    {t[lang].members}
  </Link>

  <Link to="/gallery" onClick={() => setMenuOpen(false)}>
    {t[lang].gallery}
  </Link>

  <Link to="/recruitment" onClick={() => setMenuOpen(false)}>
    {t[lang].recruitment}
  </Link>

</div>

 <div className="navMotto">
    <strong>KASKbIR</strong>
    <span>{t[lang].motto}</span>
  </div>

    </nav>
  );
}

export default Navbar;