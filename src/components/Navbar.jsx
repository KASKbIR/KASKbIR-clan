import { Link } from "react-router-dom";

function Navbar({ t, lang, setLang }) {
  return (
    <nav className="navbar">

      <h1>KASKbIR</h1>

      <div className="langSwitcher">
        <button onClick={() => setLang("ru")}>RU</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("kz")}>KZ</button>
      </div>

      <div className="navLinks">

        <Link to="/">{t[lang].home}</Link>

        <Link to="/about">{t[lang].about}</Link>

        <Link to="/members">{t[lang].members}</Link>

        <Link to="/gallery">{t[lang].gallery}</Link>

        <Link to="/recruitment">{t[lang].recruitment}</Link>

      </div>

    </nav>
  );
}

export default Navbar;