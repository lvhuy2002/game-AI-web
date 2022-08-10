import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Header from "./comp/Header/HeaderComp.js";
import HeroSection from "./comp/HeroSection/HeroSection";
import GameList from "./comp/GameList/GameList";
import GameAbout from "./comp/GameAbout/GameAbout";
import TeamInfo from "./comp/TeamInfo/TeamInfo";
import Footer from "./comp/Footer/Footer";
import HomePage from "./comp/HomePage/HomePage";
import TowerDefence from "./comp/TowerDefence/TowerDefence";
function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }

  return (
    !loading && (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>AG Gaming</title>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tower_defence" element={<TowerDefence />} />
        </Routes>
        <Footer />
      </div>
    )
  );
}

export default App;
