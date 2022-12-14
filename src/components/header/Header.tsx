import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SVG } from "../../shared";
import SVG_TYPE from "../../shared/SVG/svgType";

interface P {
  headerRef: any;
}

const HeaderWrapper = styled.header`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  flex-direction:column;
  @media screen and (max-width: 765px) {
    justify-content: center;
  }
`;

const HeaderContent = styled.hgroup`
  color: papayawhip;
  text-align: center;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Hi = styled.h2`
  animation: fadein 2s;
  font-size: 36px;
`;
const FrontendDeveloper = styled.h3`
  opacity: 0;
  font-size: 24px;
  animation: fadein 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  margin-top: 5px;
`;

const Header = () => {
  return (
    <HeaderWrapper id="header">
      <HeaderContent>
        <Hi>Hi, I'm Kamil Suchocki</Hi>
        <FrontendDeveloper>Frontend Developer</FrontendDeveloper>
      </HeaderContent>
      <SVG type={SVG_TYPE.SWIPE_UP} swipe_up />
    </HeaderWrapper>
  );
};
export default Header;
