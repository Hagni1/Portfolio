import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SVG } from "../../../shared";

interface P {
  type: string;
  label: string;
}

const SkillWrapper = styled.figure`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 0 33%;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 0%;
    border-top: 5px solid papayawhip;
    left: 50%;
    transition: 0.3s;
  }
  :hover {
    ::after {
      width: 50%;
      left: 25%;
    }
  }
  @media screen and (max-width: 765px) {
    flex: 1 0 49%;
  }
`;

const SkillLabel = styled.figcaption`
  font-size: 24px;
  color: papayawhip;
  width: 100%;
  text-align: center;
`;
const Skill = ({ type, label }: P) => {
  return (
    <SkillWrapper>
      <SVG type={type} />
      <SkillLabel>{label}</SkillLabel>
    </SkillWrapper>
  );
};
export default Skill;
