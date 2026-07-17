import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Верхняя строка */}
      <div className="navbarTop">

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h1 className="navbarLogo">KASKbIR</h1>

        <div className="langSwitcher">
          <button onClick={() => setLang("ru")}>RU</button>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("kz")}>KZ</button>
        </div>

      </div>

      {/* Соцсети */}
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

      {/* Меню */}
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

      {/* Девиз только для ПК */}
      <div className="navMotto">
        <strong>KASKbIR</strong>
        <span>{t[lang].motto}</span>
      </div>

    </nav>
  );
}

export default Navbar;