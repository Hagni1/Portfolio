import * as React from "react";
import styled, { css } from "styled-components";
import SVG_TYPE from "./svgType";

interface P {
  type: string;
  nav?: boolean;
}

const SvgWrapper = styled.svg<{
  nav?: boolean;
}>`
  ${(props) =>
    props.nav &&
    css`
      fill: papayawhip;
    `}
`;

const SVG = ({ type, ...props }: P) => {
  switch (type) {
    case SVG_TYPE.HOME: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          {...props}
        >
          <path d="M7.7 42.3V17.85L24.1 5.6l16.2 12.25V42.3H28V28.05h-8.05V42.3Zm3.4-3.4h5.45V24.65H31.4V38.9h5.5V19.55L24.1 9.9l-13 9.65ZM24 24.35Z" />
        </SvgWrapper>
      );
    }
    case SVG_TYPE.SKILLS: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          {...props}
        >
          <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z" />
        </SvgWrapper>
      );
    }
    case SVG_TYPE.PROJECT: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          {...props}
        >
          <path d="M17.25 29.15H36.8l-6.35-8.55-5.15 6.75L21.9 23ZM13 38q-1.2 0-2.1-.9-.9-.9-.9-2.1V7q0-1.2.9-2.1.9-.9 2.1-.9h28q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h28V7H13v28Zm-6 9q-1.2 0-2.1-.9Q4 42.2 4 41V10h3v31h31v3Zm6-37v28V7Z" />
        </SvgWrapper>
      );
    }
    case SVG_TYPE.CONTACT: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          {...props}
        >
          <path d="M2.95 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V9q0-1.2.9-2.1.9-.9 2.1-.9H45q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm26.5-3H45V9H2.95v30h.5q2.2-3.7 5.6-5.6 3.4-1.9 7.4-1.9t7.375 1.9Q27.2 35.3 29.45 39Zm-13-11.5q2.45 0 4.175-1.725Q22.35 24.05 22.35 21.6q0-2.45-1.725-4.175Q18.9 15.7 16.45 15.7q-2.45 0-4.175 1.725Q10.55 19.15 10.55 21.6q0 2.45 1.725 4.175Q14 27.5 16.45 27.5Zm11.65-5.7h13.4v-9.3H28.1Zm6.75-1.85L29.6 16v-2l5.2 3.95L40 14v2ZM7.25 39h18.4q-1.9-2.35-4.225-3.425Q19.1 34.5 16.45 34.5q-2.65 0-5.025 1.05Q9.05 36.6 7.25 39Zm9.2-14.5q-1.2 0-2.05-.85-.85-.85-.85-2.05 0-1.2.85-2.05.85-.85 2.05-.85 1.2 0 2.05.85.85.85.85 2.05 0 1.2-.85 2.05-.85.85-2.05.85ZM24 24Z" />
        </SvgWrapper>
      );
    }
    default: {
      return null;
    }
  }
};
export default SVG;
