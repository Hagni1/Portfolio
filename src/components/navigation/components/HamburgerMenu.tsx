import * as React from "react";
import styled, { css } from "styled-components";

interface P {
  onClick: () => void;
  isMenuOpen: boolean;
}

const HamburgerIcon = styled.button`
  display: none;
  border: none;
  width: 48px;
  height: 30px;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 25px;
  right: 25px;
  @media screen and (max-width: 765px) {
    z-index: 2;
    display: flex;
  }
`;
const HamburgerIconBar = styled.div<{
  bar: string;
}>`
  width: 48px;
  height: 5px;
  background-color: papayawhip;
  transition: transform 0.3s ease-in-out;
  transition: 0.3s;
  transform: translate(0px, 0px);
  opacity: 1;
  visibility: inherit;
  ${(props) =>
    props.bar === "firstBar" &&
    css`
      transform: translate(0px, 9px) rotate(135deg);
    `}
  ${(props) =>
    props.bar === "middleBar" &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
    ${(props) =>
    props.bar === "lastBar" &&
    css`
      transform: translate(0px, -15px) rotate(225deg);
    `}
`;
const Background = styled.div<{
  isMenuOpen: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;
  ${(props) =>
    props.isMenuOpen &&
    css`
      opacity: 0.4;
      pointer-events: all;
    `}
`;

const HamburgerMenu: React.FunctionComponent<P> = ({ onClick, isMenuOpen }) => {
  return (
    <>
      <Background isMenuOpen={isMenuOpen} onClick={() => onClick()} />
      <HamburgerIcon aria-label='Mobile menu' onClick={() => onClick()}>
        <HamburgerIconBar bar={isMenuOpen ? "firstBar" : ""} />
        <HamburgerIconBar bar={isMenuOpen ? "middleBar" : ""} />
        <HamburgerIconBar bar={isMenuOpen ? "lastBar" : ""} />
      </HamburgerIcon>
    </>
  );
};

export default HamburgerMenu;
