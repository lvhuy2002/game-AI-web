import React, { useState, useContext, Components } from "react";
import styled from "styled-components";
import styles from "./TeamInfo.module.css";
import bg from "../../img/slider-bg-2.jpg";
import us2 from "../../img/aboutus/2.png";
import us3 from "../../img/aboutus/3.png";
import us4 from "../../img/aboutus/4.png";
import us1 from "../../img/aboutus/1.png";
import triangle from "../../img/triangle.png";

export default function TeamInfo() {
  return (
    <TeamInfoSection id="aboutus">
      <img
        style={{
          position: "absolute",
          zIndex: "1",
          width: "800px",
          right: "0",
          opacity: "0.3",
          zIndex: "0",
        }}
        src={triangle}
        alt="img"
      ></img>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10",
        }}
      >
        <TeamInfoWrapper>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: "10",
            }}
          >
            <h1 className={styles.title}>About us!</h1>
          </div>
          <Container>
            <div className={styles.left}>
              <h2 className={styles.containerTitle}>AG Gaming</h2>
              <p>
                AG Gaming is a project founded by a team of 5 members who are
                students of the University of Technology - VNU. Conceived since
                2020, AG Gaming has now been officially built and achieved
                certain successes.
              </p>
              <p>
                Starting from zero, we created 2 games in just 5 days. That
                shows the relentless efforts of the team members!
              </p>
              <p>Let's play <a className={styles.gameLink} href="/tower_defence">Tower Defence</a> or <a className={styles.gameLink} href="">Face Game</a>.</p>
            </div>
            <div className={styles.right}>
              <img src={us4}></img>
            </div>
          </Container>
        </TeamInfoWrapper>
      </div>
    </TeamInfoSection>
  );
}

const TeamInfoSection = styled.div`
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TeamInfoWrapper = styled.div`
  width: 88%;
  height: 80%;
  background: rgba(27, 57, 86, 0.5);
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  display: flex;
  padding-top: 30px;
  width: 100%;
  justify-content: space-between;
`;
