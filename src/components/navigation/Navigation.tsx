import React, { useState } from "react";
import styled, { css } from "styled-components";
import { SVG } from "../../shared";
import SVG_TYPE from "../../shared/SVG/svgType";
import { HamburgerMenu } from "./components";
import { Link } from "react-scroll";

const NavigationWrapper = styled.nav`
  min-height: 60px;
  background-color: transparent;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;
  @media screen and (max-width: 765px) {
    justify-content: center;
  }
`;
const NavigationItem = styled.li`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;
  @media screen and (max-width: 765px) {
    font-size: 40px;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 0%;
    border-top: 5px solid papayawhip;
    left: 0;
    transition: 0.3s;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
`;
const NavigationList = styled.ul<{
  isMenuOpen: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 25px;
  margin-right: 50px;
  .active {
    li {
      ::after {
        content: "";
        position: absolute;
        bottom: -5px;
        width: 100%;
        border-top: 5px solid papayawhip;
        left: 0;
        transition: 0.3s;
      }
    }
  }
  @media screen and (max-width: 765px) {
    visibility: hidden;
    position: fixed;
    right: -120%;
    transition: 0.3s;
    top: 0;
    gap: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 0;
    min-width: 360px;
    height: 100vh;
    padding-top: 40px;
    gap: 25px;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
  }
  ${(props) =>
    props.isMenuOpen &&
    css`
      @media screen and (max-width: 765px) {
        visibility: visible;
        right: 0;
        background: dodgerblue;
      }
    `}
`;
const Navigation: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <NavigationWrapper>
      <HamburgerMenu isMenuOpen={isMenuOpen} onClick={() => handleMenuOpen()} />
      <NavigationList isMenuOpen={isMenuOpen}>
        <Link
          to="header"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={300}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavigationItem>
            <SVG type={SVG_TYPE.HOME} nav />
            HOME
          </NavigationItem>
        </Link>

        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={300}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavigationItem>
            <SVG type={SVG_TYPE.PROJECT} nav />
            Project
          </NavigationItem>
        </Link>

        <Link
          to="aboutMe"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={300}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavigationItem>
            <SVG type={SVG_TYPE.SKILLS} nav />
            about Me
          </NavigationItem>
        </Link>

        <Link
          to="contactMe"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={300}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavigationItem>
            <SVG type={SVG_TYPE.CONTACT} nav />
            contact me
          </NavigationItem>
        </Link>
      </NavigationList>
    </NavigationWrapper>
  );
};
export default Navigation;
