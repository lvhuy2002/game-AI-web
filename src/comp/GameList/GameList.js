import React, { useState, useContext, Components } from "react";
import styled from "styled-components";
import styles from "./GameList.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import arrow from "../../img/icons/double-arrow.png";
import towerDefence from "../../img/tower-defence.png";
import faceGame from "../../img/face-game.png";
import gameListBg from "../../img/about-img.png";

export default function GameList() {
  return (
    <GameListSection id="games">
      <GameListWrapper>
        <GameItem>
          <ItemImg>
            <img
              className={styles.gameLogo}
              src={towerDefence}
              alt="tower-defence"
            ></img>
          </ItemImg>
          <h4 className={styles.gameTitle}>Tower Defence</h4>
          <a className={styles.playBtn} href="/tower_defence">
            Play Now! <img style={{ marginLeft: "10px" }} src={arrow} alt="#" />
          </a>
        </GameItem>

        <GameItem>
          <ItemImg>
            <img
              className={styles.gameLogo}
              src={faceGame}
              alt="tower-defence"
            ></img>
          </ItemImg>
          <h4 className={styles.gameTitle}>Face Game</h4>
          <a className={styles.playBtn} href="#">
            Play Now! <img style={{ marginLeft: "10px" }} src={arrow} alt="#" />
          </a>
        </GameItem>
      </GameListWrapper>
      <AboutGame>
        <AboutGameLeft>
          <h2 className={styles.feature}>
            Looking for some rest? {""}
            <strong style={{ color: "orangered", cursor: "pointer" }}>
              Tower defence
            </strong>{" "}
            was born for you!
          </h2>
          <Description>
            Tower defense is a game for everyone. Those looking for a moment of
            relaxation after stressful work or study.
          </Description>
          <MoreBtn href="">
            <Link to="towerDefence" spy={true} smooth={true}>
              More! <img style={{ paddingLeft: "8px" }} src={arrow} />
            </Link>
          </MoreBtn>
        </AboutGameLeft>
        <AboutGameRight>
          <h2 className={styles.feature}>
            Looking for some fun? Let's play{" "}
            <strong style={{ color: "orangered", cursor: "pointer" }}>
              Face Game
            </strong>
          </h2>
          <Description>
            Face Game is a highly entertaining game. Those who want to have a
            funny experience when playing games, or playing with friends, Face
            Game is the best choice for you.
          </Description>
          <MoreBtn href="">
            <Link to="faceGame" spy={true} smooth={true}>
              More! <img style={{ paddingLeft: "8px" }} src={arrow} />
            </Link>
          </MoreBtn>
        </AboutGameRight>
      </AboutGame>
    </GameListSection>
  );
}

const GameListSection = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${gameListBg}), #040e19;
  background-size: 800px;
  background-position: center;
  background-position-y: 250px;
  background-repeat: no-repeat;
`;

const GameListWrapper = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: #11304f;
  position: relative;
  top: -150px;
  left: 10%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const GameItem = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemImg = styled.div`
  width: 40%;
  height: 40%;
`;

const AboutGame = styled.div`
  width: 80%;
  height: 400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const AboutGameLeft = styled.div`
  width: 35%;
`;

const Description = styled.p`
  color: #ababab;
  font-size: 16px;
`;

const AboutGameRight = styled.div`
  width: 35%;
`;

const MoreBtn = styled.a`
  display: inline-block;
  border: none;
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  border-radius: 0;
  text-transform: uppercase;
  color: white;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  position: relative;
  top: 70px;
  z-index: 10;
  text-decoration: none;
  margin-left: 20px;

  a {
    min-width: 186px;
    padding: 20px 30px;
    transition: all 0.2s ease-in;
  }

  a:hover {
    font-size: 22px;
    padding: 20px 30px;
    color: orangered;
    border: 1px solid orangered;
  }
`;
