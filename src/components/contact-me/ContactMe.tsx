import React from "react";
import styled from "styled-components";
import { Title } from "../../shared";
import SVG_TYPE from "../../shared/SVG/svgType";
import { SocialItem } from "./components";

const ContactMeWrapper = styled.section`
  min-height: 100vh;
  width: 80%;
  max-width: 1200px;
  padding-top: 80px;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 765px) {
    gap: 50px;
  }
`;

const SocialWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
  color: papayawhip;
  gap: 20px;
  margin-top: 50px;
  max-width: 90%;
`;

const ContactMe = () => {
  return (
    <ContactMeWrapper id="contactMe">
      <Title label="Contact Me" />
      <SocialWrapper>
        <SocialItem
          type={SVG_TYPE.GITHUB}
          label="Hagni1"
          url="https://github.com/Hagni1"
        />
        <SocialItem
          type={SVG_TYPE.LINKEDIN}
          label="Kamil Suchocki"
          url="https://www.linkedin.com/in/kamil-suchocki-772862240/"
        />
        <SocialItem
          type={SVG_TYPE.MAIL}
          label="kamilsuchocki123@gmail.com"
          url="mailto: kamilsuchocki123@gmail.com"
        />
      </SocialWrapper>
    </ContactMeWrapper>
  );
};
export default ContactMe;
