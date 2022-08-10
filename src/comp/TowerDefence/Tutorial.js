import React from "react";
import "./TowerDefence.css";
import styled from "styled-components";
import "./TowerDefence.css";
import tutorial1 from "../../img/tutorial/1.png";
import tutorial2 from "../../img/tutorial/2.png";
import arrow from "../../img/tutorial/arrow1.png";
import arrowLeft from "../../img/tutorial/arrow.png";
import enemy from "../../img/tutorial/enemy.png";
import number from "../../img/tutorial/number.png";

export default function Tutorial() {
  return (
    <TutorialWrapper>
      <TutorialContainer>
        <h1>
          How to play <a style={{ color: "orangered" }}>Tower Defence</a>
        </h1>
        <TutorialSection>
          <img src={tutorial1} alt="none"></img>
          <div className="right">
            <p style={{ color: "orangered", fontSize: "50px" }}>
              Enemy is attacking by air!
            </p>{" "}
            <p>Blow upthere balls to defend the tower.</p>
          </div>
        </TutorialSection>
        <img
          style={{
            width: "300px",
            transform: "rotate(20deg)",
            position: "absolute",
            top: "115vh",
            left: "55vw",
            zIndex: "10",
          }}
          src={arrow}
          alt="arrow"
        ></img>
        <TutorialSection>
          <div style={{}} className="right">
            <p style={{ color: "orangered", fontSize: "50px" }}>
              Draw the number of enemy's balls on the board to kill them
            </p>{" "}
            <p>Blow upthere balls to defend the tower.</p>
          </div>
          <img
            style={{ width: "300px", marginRight: "100px" }}
            src={tutorial2}
            alt="none"
          ></img>
        </TutorialSection>
        <img
          style={{
            width: "200px",
            position: "absolute",
            top: "240vh",
            left: "45vw",
            zIndex: "10",
          }}
          src={arrowLeft}
          alt="arrow"
        ></img>
        <TutorialSection>
          <img
            style={{ width: "400px", marginLeft: "100px" }}
            src={number}
            alt="none"
          ></img>
          <img
            style={{ width: "350px", marginRight: "100px" }}
            src={enemy}
            alt="none"
          ></img>
        </TutorialSection>
        <p style={{ fontSize: "40px" }}>
          Boom!!! Enemy is dead...{" "}
          <a
            style={{
              color: "orangered",
              cusor: "pointer",
              textDecoration: "none",
            }}
            href="/tower_defence"
          >
            Let's save your home now
          </a>
          .
        </p>
      </TutorialContainer>
    </TutorialWrapper>
  );
}

const TutorialWrapper = styled.div`
  width: 100%;
  min-height: 120vh;
  background-color: #0f2b47;
`;

const TutorialContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-size: 70px;
    font-family: "Montserrat", sans-serif;
  }

  p {
    color: white;
  }
`;

const TutorialSection = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    background-color: #16385b;
		box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
		padding: 30px;
  }

  img {
    width: 45%;
    height: auto;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.3);
  }
`;
