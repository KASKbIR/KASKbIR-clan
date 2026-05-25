import "./App.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Gallery from "./pages/Gallery";
import Recruitment from "./pages/Recruitment";

function App() {

  const [lang, setLang] = useState("ru");

  const t = {
    ru: {
  home: "Главная",
  about: "О клане",
  members: "Состав",
  recruitment: "Набор",
  gallery: "Галерея",

  hero: "Элитное сообщество PUBG Mobile",
},

    en: {
  home: "Home",
  about: "About",
  members: "Roster",
  recruitment: "Recruitment",
  gallery: "Gallery",

  hero: "Elite PUBG Mobile Community",
},

    kz: {
  home: "Басты бет",
  about: "Клан туралы",
  members: "Құрам",
  recruitment: "Қабылдау",
  gallery: "Галерея",

  hero: "PUBG Mobile элиталық қауымдастығы",
},
  };

  return (
    <BrowserRouter>

      <div className="app">

        <Navbar
          t={t}
          lang={lang}
          setLang={setLang}
        />

        <Routes>

          <Route
            path="/"
            element={<Home t={t} lang={lang} />}
          />

          <Route
            path="/about"
            element={<About t={t} lang={lang} />}
          />

          <Route
            path="/members"
            element={<Members t={t} lang={lang} />}
          />

          <Route
            path="/gallery"
            element={<Gallery t={t} lang={lang} />}
          />

          <Route
            path="/recruitment"
            element={<Recruitment t={t} lang={lang} />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;