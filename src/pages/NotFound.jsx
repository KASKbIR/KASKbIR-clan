import { Link } from "react-router-dom";

function NotFound({ lang, t }) {
  const text = t[lang];

  return (
    <section className="notFoundPage">
      <h1>404</h1>
      <p>{text.notFoundText}</p>
      <Link to="/" className="telegramButton">
        {text.notFoundButton}
      </Link>
    </section>
  );
}

export default NotFound;