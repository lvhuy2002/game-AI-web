import React, { useState, useContext } from "react";
import { GlobalContext } from "../../GlobalState/GlobalContext";
import "./HomePage.css";
import HeroSection from "../HeroSection/HeroSection";
import GameList from "../GameList/GameList";
import GameAbout from "../GameAbout/GameAbout";
import TeamInfo from "../TeamInfo/TeamInfo";
// import BGGame1 from "../../img/BGGame1.png"
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <GameList />
      <GameAbout />
      <TeamInfo />
    </div>
  );
};

export default HomePage;
