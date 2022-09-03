import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Title } from "../../shared";

const AboutMeWrapper = styled.section`
  min-height: 100vh;
  width: 80%;
  max-width: 1200px;
  padding-top:80px;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 765px) {
    width: 100%;
    align-items: center;
    gap: 50px;
  }
  `;
const AboutMeDescription = styled.p`
  color: papayawhip;
  max-width:700px;  
  font-size: 24px;
  margin-top: 30px;
  text-align:center;
  @media screen and (max-width: 765px) {
    width: 90%;

  }
`;
const AboutMe = () => {
  return (
    <AboutMeWrapper id="aboutMe">
      <Title label="About Me" />
      <AboutMeDescription>
        Hi, My name is Kamil Suchocki and I am a Frontend Developer. I started
        learning programming more than year ago, since then I spend every day
        learning. It definitely became my passion.
      </AboutMeDescription>
    </AboutMeWrapper>
  );
};
export default AboutMe;
