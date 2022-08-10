import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <FooterSection id="footer">
      <FooterWrapper>
        <FooterTop>
          <Container>
            <Brand>
              <img style={{ width: "100px" }} src={logo} alt="AG Game"></img>
              <p
                style={{
                  color: "#ababab",
                  fontFamily: "Montserrat",
                  margin: " 25px 0",
                }}
              >
                With fun of making games. We are a team of 5 people to making
                games that are easily playable on the web.
              </p>
              <a style={{ margin: "0" }} className={styles.socialIcon} href="#">
                <i className="fa fa-pinterest"></i>
              </a>
              <a className={styles.socialIcon} href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a className={styles.socialIcon} href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a className={styles.socialIcon} href="#">
                <i className="fa fa-dribbble"></i>
              </a>
              <a className={styles.socialIcon} href="#">
                <i className="fa fa-behance"></i>
              </a>
            </Brand>
            <PlayGames>
              <h2>Play Games</h2>
              <a href="">Tower Defence</a>
              <a href="">Face Game</a>
            </PlayGames>
            <Subscribe>
              <h2>Subscribe for our new games!</h2>
              <input
                placeholder="Enter Your Email Address"
                type="email"
              ></input>
              <button className={styles.btn}>Subscribe</button>
              <p>
                Subscribe to receive the latest news and games!
              </p>
            </Subscribe>
          </Container>
        </FooterTop>
        <FooterBottom>
          <h3>
            Copyright © <a href="/">AG-Gaming</a> - 2022. All Rights Reserved
          </h3>
        </FooterBottom>
      </FooterWrapper>
    </FooterSection>
  );
}

const FooterSection = styled.div``;

const FooterWrapper = styled.div``;

const FooterTop = styled.div`
  background-color: #040e19;
  min-height: 400px;
  width: 100%;
`;

const FooterBottom = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a1e33;
  h3 {
    font-family: "Montserrat";
    font-weight: 300;
    color: #ababab;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: orangered;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 150px;
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  width: 30%;
`;

const PlayGames = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    text-decoration: none;
    color: #ababab;
    font-size: 17px;
    font-family: "Montserrat";
    font-weight: light;
    line-height: 30px;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: orangered;
  }

  h2 {
    font-family: "Montserrat";
    font-size: 26px;
    color: white;
    margin-bottom: 30px;
  }
`;

const Subscribe = styled.div`
  width: 45%;

  h2 {
    color: white;
  }

  input {
    color: #ddd;
    font-size: 16px;
    background: none;
    border: none;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid orangered;
    outline: none;
    caret-color: white;
  }

  p {
    color: #ababab;
  }
`;
