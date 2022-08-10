import React, { useState, useContext, Components } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import styles from "./HeroSection.module.css";
import slider1 from "../../img/slider-bg-1.png";
import arrow from "../../img/icons/double-arrow.png";

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
            <Link
              to="games"
              spy={true}
              smooth={true}
              className={styles.siteBtn}
              offset={-180}
              href="#"
            >
              Let's play! <img src={arrow} alt="#" />
            </Link>
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

const GoBtn = styled.a``;
