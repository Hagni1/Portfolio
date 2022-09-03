import React, { useRef, useState } from "react";
import styled from "styled-components";
import { shop, starlink } from "../../assets/img";
import { Title } from "../../shared";

const ProjectsWrapper = styled.section`
  min-height: 100vh;
  width: 80%;
  max-width:1200px;
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
const Projects = () => {
  return (
      <ProjectsWrapper id="projects">
          <Title label="Projects"/>
      <Project>
        <img src={starlink} alt="SpaceX tracker project" loading="lazy" />
        <ProjectDescription>SpaceX tracker project.</ProjectDescription>
      </Project>
      <Project>
        <img src={shop} alt="Shop project" loading="lazy" />
        <ProjectDescription>Shop Template</ProjectDescription>
      </Project>
    </ProjectsWrapper>
  );
};
export default Projects;
