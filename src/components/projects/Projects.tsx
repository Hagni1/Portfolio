import React, { useRef, useState } from "react";
import styled from "styled-components";
import { shop, starlink } from "../../assets/img";
import { SVG, Title } from "../../shared";
import SVG_TYPE from "../../shared/SVG/svgType";

const ProjectsWrapper = styled.section`
  min-height: 100vh;
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: space-evenly;
  align-items: space-between;
  flex-direction: column;
  @media screen and (max-width: 765px) {
    width: 100%;
    align-items: center;
    gap: 50px;
  }
`;
const Project = styled.figure`
  position: relative;
  overflow: hidden;
  width: 600px;
  :hover {
    nav {
      opacity: 1;
      visibility:visible;
    }
    .cover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @media screen and (max-width: 765px) {
    width: 90%;
    object-fit: cover;
  }
  :nth-child(even) {
    @media screen and (min-width: 765px) {
      align-self: end;
    }
  }
  img {
    border: 5px solid papayawhip;
    border-radius: 24px;
    height: 300px;
    width: 600px;
    @media screen and (max-width: 765px) {
      object-fit: cover;
    }
  }
`;
const ProjectDescription = styled.figcaption`
  font-size: 24px;
  color: papayawhip;
  width: 100%;
  text-align: center;
`;
const ProjectNavigation = styled.div`
  position: absolute;
  height: 290px;
  width: 580px;
  max-width: calc(100% - 20px);
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 24px;
  border: 5px solid transparent;
  transition: 0.3s;
`;
const ImageWrapper = styled.div`
  border: 5px solid transparent;
  border-radius: 24px;
  overflow: hidden;
`;
const IconsWrapper = styled.nav`
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  justify-content: center;
  gap: 75px;
  opacity: 0;
  transition: 0.3s;
  display: flex;
  visibility:hidden;
  svg {
    height: 75px;
    width: 75px;
    cursor: pointer;
    path {
      fill: papayawhip;
    }
  }
`;
const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <Title label="Projects" />

      <Project>
        <ImageWrapper>
          <img src={starlink} alt="SpaceX tracker project" loading="lazy" />
          <ProjectNavigation className="cover" />
          <IconsWrapper>
            <a href="https://github.com/Hagni1/SpaceX-Tracker" target="_blank">
              <SVG type={SVG_TYPE.GITHUB} />
            </a>
            <a href="https://starlink-tracker-a.web.app" target="_blank">
              <SVG type={SVG_TYPE.HOME} />
            </a>
          </IconsWrapper>
        </ImageWrapper>
        <ProjectDescription>SpaceX tracker project.</ProjectDescription>
      </Project>

      <Project>
        <ImageWrapper>
          <img src={shop} alt="Shop project" loading="lazy" />
          <ProjectNavigation className="cover" />
          <IconsWrapper>
            <a
              href="https://github.com/Hagni1/15-shop-template"
              target="_blank"
            >
              <SVG type={SVG_TYPE.GITHUB} />
            </a>
            <a href="https://shop-templa.web.app" target="_blank">
              <SVG type={SVG_TYPE.HOME} />
            </a>
          </IconsWrapper>
        </ImageWrapper>
        <ProjectDescription>Shop Template</ProjectDescription>
      </Project>
    </ProjectsWrapper>
  );
};
export default Projects;
