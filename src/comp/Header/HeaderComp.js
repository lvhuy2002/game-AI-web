import React, { useState, useContext } from "react";
import { GlobalContext } from "../../GlobalState/GlobalContext";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";
import logo from "../../img/logo.png";
import { Link as router } from "react-router-dom";

export default function Header() {
  const GlobalState = useContext(GlobalContext);
  return (
    <HeaderSection id="header">
      <HeaderWrapper>
        <HeaderSocial>
          <p
            style={{
              fontFamily: "Montserrat",
              display: "inline-block",
              margin: "12px 20px 5px 0",
              alignItems: "center",
              color: "white",
            }}
          >
            Follow us:
          </p>
          <a className="social-icon" href="#">
            <i className="fa fa-pinterest"></i>
          </a>
          <a className="social-icon" href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a className="social-icon" href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="social-icon" href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a className="social-icon" href="#">
            <i className="fa fa-behance"></i>
          </a>
        </HeaderSocial>

        <HeaderMenu>
          <a href="/">
            <img className="web-logo" src={logo} alt="logo-AI"></img>
          </a>

          <nav className="navbar">
            <ul className="main-menu primary-menu">
              <li>
                <a className="menu-item" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="menu-item" href="#">
                  <Link to="games" spy={true} smooth={true} offset={-180}>
                    Games
                  </Link>
                </a>
              </li>
              <li>
                <a className="menu-item" href="#">
                  <Link to="aboutus" spy={true} smooth={true} offset={0}>
                    About us
                  </Link>
                </a>
              </li>

              <li>
                <a className="menu-item" href="#">
                  <Link to="footer" spy={true} smooth={true} offset={-180}>
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
          <div className="user-panel" style={{ cursor: "pointer" }}>
            <Link to="games" smooth={true} spy={true} offset={200}>
              Join with us!
            </Link>
          </div>
        </HeaderMenu>
      </HeaderWrapper>
    </HeaderSection>

    // <div className="header">
    //   <Link
    //     to={"/"}
    //     id={
    //       GlobalState.pageState === "Home"
    //         ? "header-home-selected"
    //         : "header-home-unselected"
    //     }
    //     onClick={() => GlobalState.setPageState("Home")}
    //   >
    //     <h3>Home</h3>
    //   </Link>

    //   <img id="header-logo" src={logo} alt="logo" width={100} height={80}></img>
    //   <Link
    //     to={"/info"}
    //     id={
    //       GlobalState.pageState === "Info"
    //         ? "header-info-selected"
    //         : "header-info-unselected"
    //     }
    //     onClick={() => GlobalState.setPageState("Info")}
    //   >
    //     <h3>Info</h3>
    //   </Link>
    // </div>
  );
}

const HeaderSection = styled.div`
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 1vw;
  width: 100%;
  background-color: none;
  position: absolute;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderSocial = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  padding-right: 2px;
  justify-content: flex-end;
`;

const HeaderMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 95px;
  background-color: #081624;
  display: flex;
  justify-content: space-between;
  padding: 40px 40px 0 40px;
  box-shadow: 0px 0px 8px #4d87f2;
`;
