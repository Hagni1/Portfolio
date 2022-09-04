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
  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
  p {
    word-wrap: break-word;
    @media screen and (max-width: 450px) {
    width: 200px;
  }
  }

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
      <p>{label}</p>
    </SocialItemWrapper>
  );
};
export default SocialItem;
