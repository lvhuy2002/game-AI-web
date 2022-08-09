import React, { useState, useContext, Components } from "react";
import styled from "styled-components";
import styles from "./HeroSection.module.css";
import slider1 from "../../img/slider-bg-1.png";
import slider2 from "../../img/slider-bg-2.jpg";
import arrow from "../../img/icons/double-arrow.png"

export default function HeroSection() {
  return (
    <Hero>
      <HeroSlider>
        <HeroItem>
          <ItemContainer>
            <h2 className={styles.title}>Switch, turned on!!</h2>
            <p className={styles.desc}>
              A project created with a team with 5 amazing people, we just want
              you to have a great time when playing this game together with your
              friend or with your family!
            </p>
            <GoBtn className={styles.siteBtn} href="#">Let's play! <img src={arrow} alt="#"/></GoBtn>
          </ItemContainer>
        </HeroItem>
      </HeroSlider>
    </Hero>
  );
}

const Hero = styled.div`
  overflow: hidden;
`;

const HeroSlider = styled.div`
  z-index: 1;
`;

const HeroItem = styled.div`
  box-sizing: border-box;
  background: url(${slider1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -200px;
  height: auto;
  min-height: 100vh;
`;

const ItemContainer = styled.div`
  min-height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GoBtn = styled.a`
  
`;
