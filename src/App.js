import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Header from "./comp/Header/HeaderComp.js";
import Footer from "./comp/Footer/Footer";
import HomePage from "./comp/HomePage/HomePage";
import TowerDefence from "./comp/TowerDefence/TowerDefence";
import Tutorial from "./comp/TowerDefence/Tutorial";
import PredictFaceExpression from "./comp/PredictFaceExpression/PredictFaceExpression";

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
          <Route path="/tower_defence_tutorial" element={<Tutorial />} />
          <Route path="/predict_face_expression" element={<PredictFaceExpression/>} />
        </Routes>
        <Footer />
      </div>
    )
  );
}

export default App;
