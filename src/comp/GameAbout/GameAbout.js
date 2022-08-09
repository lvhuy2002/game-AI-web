import React from "react";
import styled from "styled-components";
import styles from "./GameAbout.module.css";
import sideBg from "../../img/razer.jpg";
import towerDefence from "../../img/game-background/menu/background.png";
import arrow from "../../img/icons/double-arrow.png";

export default function GameAbout() {
  return (
    <GameAboutSection>
      <GameAboutWrapper>
        <AboutWrapper>
          <AboutContainer>
            <AboutLeft>
              <h2 className={styles.GameTitle}>Tower Defence</h2>
              <h3
                style={{
                  color: "white",
                  fontSize: "24px",
                  color: "rgb(255, 90, 30)",
                }}
              >
                ENEMIES IS HERE, SAVE YOUR LAND!!!
              </h3>
              <p className={styles.GameDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi iusto, fuga consequuntur laudantium porro suscipit
                minima, delectus commodi possimus animi nesciunt neque hic
                fugiat. Alias sequi consectetur voluptate voluptatum quaerat.
              </p>

              <p className={styles.GameDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi iusto, fuga consequuntur laudantium
              </p>

              <a className={styles.siteBtn} href="">
                Play!<img src={arrow}></img>
              </a>
            </AboutLeft>
            <AboutRight>
              <img
                style={{
                  boxShadow:
                    "0 0 10px rgba(122, 153, 255, 0.5), 10px 10px 0 rgba(0, 0, 0, 0.4)",
                }}
                src={towerDefence}
                alt="Tower Defense"
              ></img>
            </AboutRight>
          </AboutContainer>
        </AboutWrapper>
        <AboutWrapperBot>
          <AboutContainer style={{marginLeft: "90px"}}>
            <AboutRight>
              <img
                style={{
                  boxShadow:
                    "0 0 10px rgba(122, 153, 255, 0.5), 10px 10px 0 rgba(0, 0, 0, 0.4)",
                }}
                src={towerDefence}
                alt="Tower Defense"
              ></img>
            </AboutRight>
            <AboutLeft>
              <h2 className={styles.GameTitle}>Face Game</h2>
              <h3
                style={{
                  color: "white",
                  fontSize: "24px",
                  color: "rgb(255, 90, 30)",
                }}
              >
                ENEMIES IS HERE, SAVE YOUR LAND!!!
              </h3>
              <p className={styles.GameDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi iusto, fuga consequuntur laudantium porro suscipit
                minima, delectus commodi possimus animi nesciunt neque hic
                fugiat. Alias sequi consectetur voluptate voluptatum quaerat.
              </p>

              <p className={styles.GameDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi iusto, fuga consequuntur laudantium
              </p>

              <a className={styles.siteBtn} href="">
                Go!<img src={arrow}></img>
              </a>
            </AboutLeft>
          </AboutContainer>
        </AboutWrapperBot>
      </GameAboutWrapper>
    </GameAboutSection>
  );
}

const GameAboutSection = styled.div`
  width: 100%;
  height: auto;
`;

const GameAboutWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const AboutWrapper = styled.div`
  width: 100%;
  height: 110vh;
  background: url(${sideBg}), #0a1e33;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: -200px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid black;
`;

const AboutWrapperBot = styled(AboutWrapper)`
  background-position: right;
  background-position-x: calc(100vw - 300px);
  justify-content: flex-start;
`;

const AboutContainer = styled.div`
  width: 70%;
  height: 70%;
  margin: 40px 40px;
  margin-right: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;
`;

const AboutLeft = styled.div`
  width: 45%;
  height: 100%;
  padding-top: 50px;
`;

const AboutRight = styled.div`
  width: 45%;
  padding-top: 130px;
  img {
    width: 500px;
  }
`;
