import React, { useState, useContext } from "react";
import { GlobalContext } from "../../GlobalState/GlobalContext";
import "./Header.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const GlobalState = useContext(GlobalContext);
  return (
    <div className="header">
      <Link
        to={"/"}
        id={
          GlobalState.pageState === "Home"
            ? "header-home-selected"
            : "header-home-unselected"
        }
        onClick={() => GlobalState.setPageState("Home")}
      >
        <h3>Home</h3>
      </Link>

      <img id="header-logo" src={logo} alt="logo" width={100} height={80}></img>
      <Link
        to={"/info"}
        id={
          GlobalState.pageState === "Info"
            ? "header-info-selected"
            : "header-info-unselected"
        }
        onClick={() => GlobalState.setPageState("Info")}
      >
        <h3>Info</h3>
      </Link>
    </div>
  );
};
export default HeaderComp;
