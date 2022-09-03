import React, { useRef, useState } from "react";
import styled from "styled-components";

interface P {
    label: string; 
}

const TitleLabel = styled.header`
    color: papayawhip;
    font-size:48px;
    font-family: 'Roboto Mono', monospace;
    font-weight:700;
    width:100%;
    text-align:center;
`

const Title = ({label}:P) => {
  return (
        <TitleLabel>{label}</TitleLabel>
  );
};
export default Title;
