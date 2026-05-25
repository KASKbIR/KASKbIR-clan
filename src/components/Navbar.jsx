import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>KASKbIR</h1>

      <div className="navLinks">
        <Link to="/">Главная</Link>
        <Link to="/about">О клане</Link>
        <Link to="/members">Состав</Link>
        <Link to="/gallery">Галерея</Link>
        <Link to="/recruitment">Набор</Link>
      </div>
    </nav>
  );
}

export default Navbar;