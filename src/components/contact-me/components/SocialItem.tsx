import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SVG } from "../../../shared";

interface P {
  type: string;
  label: string;
  url: string;
}

const SocialItemWrapper = styled.a`
  display: flex;
  position: relative;
  gap: 10px;
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
      width: 100%;
      left: 0;
    }
  }
`;

const SocialItem = ({ type, url, label }: P) => {
  return (
    <SocialItemWrapper href={url} target="_blank">
      <SVG type={type} />
      {label}
    </SocialItemWrapper>
  );
};
export default SocialItem;
