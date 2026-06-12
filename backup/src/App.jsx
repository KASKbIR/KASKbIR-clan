import "./App.css";
import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Gallery from "./pages/Gallery";
import Recruitment from "./pages/Recruitment";

import t from "./data/translations";

function App() {
  const [lang, setLang] = useState("ru");

  return (
    <BrowserRouter>

      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
      />

      <Routes>
        <Route
          path="/"
          element={<Home lang={lang} t={t} />}
        />

        <Route
          path="/about"
          element={<About lang={lang} t={t} />}
        />

        <Route
  path="/members"
  element={
    <Members
      lang={lang}
      t={t}
    />
  }
/>

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
  path="/recruitment"
  element={
    <Recruitment
      lang={lang}
      t={t}
    />
  }
/>
      </Routes>

      <Footer
        lang={lang}
        t={t}
      />

    </BrowserRouter>
  );
}

export default App;