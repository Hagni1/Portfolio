import * as React from "react";
import styled, { css } from "styled-components";
import SVG_TYPE from "./svgType";

interface P {
  type: string;
  nav?: boolean;
  swipe_up?: boolean;
}

const SvgWrapper = styled.svg<{
  nav?: boolean;
  swipe_up?: boolean;
}>`
  ${(props) =>
    props.nav &&
    css`
      fill: papayawhip;
    `}
  ${(props) =>
    props.swipe_up &&
    css`
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      fill: papayawhip;
      position: absolute;
      bottom: 30px;
      animation: fadein 2s;
      animation-delay: 2s;
      opacity: 0;
      animation-fill-mode: forwards;
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
          viewBox="0 0 48 48"
          {...props}
        >
          <path d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Z" />
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
    case SVG_TYPE.REACT: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="200"
          width="200"
          viewBox="0 0 32 32"
          {...props}
        >
          <g
            transform="matrix(.05696 0 0 .05696 .647744 2.43826)"
            fill="none"
            fillRule="evenodd"
          >
            <circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff" />
            <g stroke="#00d8ff" strokeWidth="24">
              <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" />
              <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" />
              <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" />
            </g>
          </g>
        </SvgWrapper>
      );
    }
    case SVG_TYPE.REDUX: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="200"
          width="200"
          viewBox="0 0 300 300"
          {...props}
        >
          <path
            d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
            fill="#764ABC"
          />
        </SvgWrapper>
      );
    }
    case SVG_TYPE.GIT: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="200"
          width="200"
          viewBox="0 0 100 100"
          {...props}
        >
          <g>
            <path
              fill="#F05133"
              d="M92.71,44.408L52.591,4.291c-2.31-2.311-6.057-2.311-8.369,0l-8.33,8.332L46.459,23.19
		c2.456-0.83,5.272-0.273,7.229,1.685c1.969,1.97,2.521,4.81,1.67,7.275l10.186,10.185c2.465-0.85,5.307-0.3,7.275,1.671
		c2.75,2.75,2.75,7.206,0,9.958c-2.752,2.751-7.208,2.751-9.961,0c-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997
		c0.67,0.332,1.303,0.774,1.861,1.332c2.75,2.75,2.75,7.206,0,9.959c-2.75,2.749-7.209,2.749-9.957,0c-2.75-2.754-2.75-7.21,0-9.959
		c0.68-0.679,1.467-1.193,2.307-1.537V36.369c-0.84-0.344-1.625-0.853-2.307-1.537c-2.083-2.082-2.584-5.14-1.516-7.698
		L31.798,16.715L4.288,44.222c-2.311,2.313-2.311,6.06,0,8.371l40.121,40.118c2.31,2.311,6.056,2.311,8.369,0L92.71,52.779
		C95.021,50.468,95.021,46.719,92.71,44.408z"
            />
          </g>
        </SvgWrapper>
      );
    }
    case SVG_TYPE.SASS: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="200"
          width="200"
          viewBox="0 0 547.8 410.6"
          {...props}
        >
          <path
            fill="#CD6799"
            d="M471.4,236c-19.1,0.1-35.7,4.7-49.6,11.5c-5.1-10.1-10.2-19.1-11.1-25.7c-1-7.7-2.2-12.4-1-21.6
	c1.2-9.2,6.6-22.3,6.5-23.3s-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5c-1.1,2.9-3.2,9.5-4.6,16.3c-1.9,10-22,45.7-33.5,64.4
	c-3.7-7.3-6.9-13.7-7.6-18.8c-1-7.7-2.2-12.4-1-21.6c1.2-9.2,6.6-22.3,6.5-23.3c-0.1-1-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5
	c-1.1,2.9-2.3,9.7-4.6,16.3c-2.3,6.6-29,66.2-36,81.6c-3.6,7.9-6.7,14.2-8.9,18.5c0,0,0,0,0,0s-0.1,0.3-0.4,0.8
	c-1.9,3.7-3,5.7-3,5.7s0,0,0,0.1c-1.5,2.7-3.1,5.2-3.9,5.2c-0.6,0-1.7-7.2,0.2-17c4-20.7,13.5-52.9,13.4-54c0-0.6,1.8-6.2-6.2-9.1
	c-7.8-2.9-10.6,1.9-11.3,1.9c-0.7,0-1.2,1.7-1.2,1.7s8.7-36.2-16.6-36.2c-15.8,0-37.6,17.3-48.4,32.9c-6.8,3.7-21.3,11.6-36.8,20.1
	c-5.9,3.3-12,6.6-17.7,9.7c-0.4-0.4-0.8-0.9-1.2-1.3c-30.6-32.7-87.2-55.8-84.8-99.7c0.9-16,6.4-58,108.7-109
	C233.9,19,300.9,30.5,312.5,56c16.6,36.4-35.9,104-122.9,113.8c-33.2,3.7-50.6-9.1-55-13.9c-4.6-5-5.3-5.3-7-4.3c-2.8,1.5-1,6,0,8.6
	c2.6,6.8,13.3,18.8,31.4,24.7c16,5.2,54.9,8.1,102-10.1c52.7-20.4,93.9-77.1,81.8-124.6C330.7,2,250.7-13.9,175,13
	C130,29,81.2,54.2,46.1,87c-41.7,39-48.3,72.9-45.6,87.1c9.7,50.4,79.2,83.2,107,107.5c-1.4,0.8-2.7,1.5-3.8,2.1
	c-13.9,6.9-66.9,34.6-80.1,63.9c-15,33.2,2.4,57,13.9,60.2c35.7,9.9,72.4-7.9,92.1-37.3c19.7-29.4,17.3-67.6,8.2-85.1
	c-0.1-0.2-0.2-0.4-0.4-0.6c3.6-2.1,7.3-4.3,10.9-6.4c7.1-4.2,14.1-8.1,20.1-11.3c-3.4,9.3-5.9,20.4-7.1,36.4
	c-1.5,18.8,6.2,43.2,16.3,52.8c4.5,4.2,9.8,4.3,13.2,4.3c11.8,0,17.1-9.8,23-21.4c7.2-14.2,13.7-30.7,13.7-30.7s-8.1,44.6,13.9,44.6
	c8,0,16.1-10.4,19.7-15.7c0,0.1,0,0.1,0,0.1s0.2-0.3,0.6-1c0.8-1.3,1.3-2.1,1.3-2.1s0-0.1,0-0.2c3.2-5.6,10.4-18.3,21.1-39.4
	c13.8-27.2,27.1-61.2,27.1-61.2s1.2,8.3,5.3,22.1c2.4,8.1,7.4,17,11.4,25.6c-3.2,4.5-5.2,7-5.2,7s0,0,0.1,0.1
	c-2.6,3.4-5.4,7.1-8.5,10.7c-10.9,13-23.9,27.9-25.7,32.2c-2.1,5.1-1.6,8.8,2.4,11.8c2.9,2.2,8.1,2.5,13.4,2.2
	c9.8-0.7,16.7-3.1,20.1-4.6c5.3-1.9,11.5-4.8,17.3-9.1c10.7-7.9,17.2-19.2,16.6-34.1c-0.3-8.2-3-16.4-6.3-24.1
	c1-1.4,1.9-2.8,2.9-4.2c16.9-24.7,30-51.8,30-51.8s1.2,8.3,5.3,22.1c2,7,6.1,14.6,9.7,22c-15.9,12.9-25.7,27.9-29.2,37.7
	c-6.3,18.2-1.4,26.4,7.9,28.3c4.2,0.9,10.2-1.1,14.6-3c5.6-1.8,12.2-4.9,18.5-9.5c10.7-7.9,21-18.9,20.4-33.8
	c-0.3-6.8-2.1-13.5-4.6-20c13.5-5.6,30.9-8.7,53.1-6.1c47.6,5.6,57,35.3,55.2,47.8c-1.8,12.5-11.8,19.3-15.1,21.4
	c-3.3,2.1-4.4,2.8-4.1,4.3c0.4,2.2,2,2.1,4.8,1.7c3.9-0.7,25-10.1,25.9-33.1C548.9,267.8,520.9,235.7,471.4,236z M104.2,359.8
	C88.4,377,66.4,383.5,56.9,378c-10.2-5.9-6.2-31.3,13.2-49.5c11.8-11.1,27-21.4,37.1-27.7c2.3-1.4,5.7-3.4,9.8-5.9
	c0.7-0.4,1.1-0.6,1.1-0.6l0,0c0.8-0.5,1.6-1,2.4-1.5C127.6,318.8,120.8,341.7,104.2,359.8z M219.2,281.6c-5.5,13.4-17,47.7-24,45.8
	c-6-1.6-9.7-27.6-1.2-53.3c4.3-12.9,13.4-28.3,18.7-34.3c8.6-9.6,18.1-12.8,20.4-8.9C236,236,222.6,273.2,219.2,281.6z M314.1,327
	c-2.3,1.2-4.5,2-5.5,1.4c-0.7-0.4,1-2,1-2s11.9-12.8,16.6-18.6c2.7-3.4,5.9-7.4,9.3-11.9c0,0.4,0,0.9,0,1.3
	C335.5,312.5,320.7,322.8,314.1,327z M387.3,310.3c-1.7-1.2-1.4-5.2,4.3-17.7c2.2-4.9,7.4-13.1,16.3-21c1,3.2,1.7,6.3,1.6,9.2
	C409.4,300.1,395.6,307.3,387.3,310.3z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </SvgWrapper>
      );
    }
    case SVG_TYPE.STYLED_COMPONENTS: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="200"
          width="200"
          viewBox="0 0 32 32"
          {...props}
        >
          <path
            d="m18.05 29.6c.042-.095.148-.161.225-.241 1.175-1.232 2.36-2.453 3.519-3.7a3.2 3.2 0 0 0 1.014-2.659 5.925 5.925 0 0 0 -.143-.624c-.316.3-.61.573-.906.848-.46.428-.918.858-1.382 1.281a1.931 1.931 0 0 1 -2.148.419 1.973 1.973 0 0 1 -1.29-1.75 1.04 1.04 0 0 0 -.043-.146c-.353.3-.691.576-1.026.86l-6.963 5.9c-.048.041-.1.092-.145.132h9.283l-.014-.009c-.05-.035-.024-.219.019-.311z"
            fill="#ffcebf"
          />
          <path
            d="m8.337 29.6a1.239 1.239 0 0 1 .295-.276l9.636-8.175q.986-.837 1.963-1.683a.523.523 0 0 0 .182-.224 5.364 5.364 0 0 0 .065-2.069c-.1.07-.154.1-.2.149-.789.706-1.574 1.418-2.367 2.12a1.762 1.762 0 0 1 -2.048.329 1.889 1.889 0 0 1 -1.08-1.807c0-.085 0-.169 0-.324-.145.106-.251.177-.35.257q-5.785 4.632-11.568 9.257c-.174.139-.382.449-.61.148s.119-.425.294-.565q6.165-4.947 12.336-9.885c.67-.537.714-.762.278-1.615l-.26.244c-.713.663-1.434 1.317-2.136 1.991a2.121 2.121 0 0 1 -3.585-1.337c-.133.1-.248.173-.357.258l-6.1 4.728a1.485 1.485 0 0 1 -.356.258.446.446 0 0 1 -.3-.015v8.561h6.256a.365.365 0 0 1 .012-.325z"
            fill="#ffcebf"
          />
          <path
            d="m25.237 2.423c-.17.557-.335 1.115-.484 1.678a1.688 1.688 0 0 0 .9 2.09 7.122 7.122 0 0 0 3.818.8v-4.473a.73.73 0 0 1 .016-.294.666.666 0 0 1 .105-.149h-4.359c.067.078.044.215.004.348z"
            fill="#ff6196"
          />
          <g fill="#ff87af">
            <path d="m16.482 12.032a2.422 2.422 0 0 1 -.5 1.376 22.671 22.671 0 0 1 -3.726 3.792 1.442 1.442 0 0 1 -1.684.2 1.393 1.393 0 0 1 -.843-1.368 1.624 1.624 0 0 1 .417-.947 35.848 35.848 0 0 1 5.019-3.993.71.71 0 0 1 .829-.034 1.041 1.041 0 0 1 .488.974z" />
            <path d="m15.284 18.093a1.437 1.437 0 0 1 .448-1.2 38.336 38.336 0 0 1 4.87-3.813c.052-.033.1-.066.157-.1a.837.837 0 0 1 1.025.035.861.861 0 0 1 .242.979 4.39 4.39 0 0 1 -1.168 1.908c-1.105 1.1-2.252 2.164-3.4 3.22a1.124 1.124 0 0 1 -1.364.192 1.512 1.512 0 0 1 -.81-1.221z" />
            <path d="m22.5 18.754c-.28.3-.568.586-.837.893a1.89 1.89 0 0 0 -.2.38c.148.044.321.16.441.119.611-.205 1.207-.451 1.878-.71-.146.336-.256.646-.411.93a12.189 12.189 0 0 1 -2.371 2.872q-.532.513-1.105.981a1.484 1.484 0 0 1 -2.415-.92 1.1 1.1 0 0 1 .238-.813 22.187 22.187 0 0 1 4.623-3.823.193.193 0 0 1 .065-.013z" />
          </g>
          <path
            d="m24.794 14.771 1.711-7.6 1.2.281-.619 1.881c-.578 1.75-1.163 3.5-1.727 5.252-.11.324-.254.384-.565.186z"
            fill="#ff6196"
          />
          <path
            d="m22.862 19.241c.181-.691.361-1.33.513-1.976a4.468 4.468 0 0 1 .826-1.721c.243-.319.516-.192.795-.123.258.063.323.252.334.5a2.845 2.845 0 0 1 -.588 1.907 4.8 4.8 0 0 1 -1.88 1.413z"
            fill="#ff6196"
          />
          <path d="m29.993 2.894a3.623 3.623 0 0 0 -.017-.668.291.291 0 0 0 -.116-.151.381.381 0 0 0 -.152-.075c-.032-.006-.077.027-.12.074a.666.666 0 0 0 -.105.149.73.73 0 0 0 -.016.294v4.472a7.122 7.122 0 0 1 -3.818-.8 1.688 1.688 0 0 1 -.9-2.09c.149-.563.314-1.121.484-1.678.04-.133.063-.27 0-.348a.2.2 0 0 0 -.135-.064.3.3 0 0 0 -.182.064.434.434 0 0 0 -.171.19c-.2.6-.376 1.206-.529 1.818a2.148 2.148 0 0 0 -.046.737 2.339 2.339 0 0 0 1.542 2c.189.079.3.157.247.406-.073.316-.144.632-.216.949q-.735 3.222-1.462 6.447a.483.483 0 0 1 -.121.257 3.228 3.228 0 0 0 -.791.92 4.8 4.8 0 0 0 -.53 1.5.981.981 0 0 1 -.558.785c-.417.211-.8.484-1.263.768a12.639 12.639 0 0 0 -.018-1.671 1.062 1.062 0 0 1 .284-.96 4.75 4.75 0 0 0 1.258-2.194 1.294 1.294 0 0 0 -1.208-1.7 1.7 1.7 0 0 0 -.929.264c-.957.646-1.888 1.332-2.812 2.026-.547.412-1.062.868-1.592 1.3a.418.418 0 0 1 -.059-.081.842.842 0 0 0 -.059-.214c-.443-.684-.136-1.181.345-1.692a2.793 2.793 0 0 0 .772-1.951 1.568 1.568 0 0 0 -.327-1.026 1.459 1.459 0 0 0 -.438-.363 1.337 1.337 0 0 0 -1.517.162l-.279.2c-.637.456-1.282.9-1.895 1.388-.895.712-1.769 1.454-2.626 2.214-.4.353-.692.835-1.107 1.163-2.164 1.709-4.351 3.387-6.53 5.076a1.022 1.022 0 0 0 -.205.161.164.164 0 0 0 -.016.029c-.046.107-.085.284-.031.349a.141.141 0 0 0 .047.033.446.446 0 0 0 .3.015 1.485 1.485 0 0 0 .356-.258l6.1-4.728c.109-.085.224-.162.357-.258a2.121 2.121 0 0 0 3.585 1.337c.7-.674 1.423-1.328 2.136-1.991l.26-.244c.436.853.392 1.078-.278 1.615q-6.176 4.942-12.343 9.886c-.175.14-.521.267-.294.565s.436-.009.61-.148q5.786-4.621 11.564-9.254c.1-.08.205-.151.35-.257v.324a1.889 1.889 0 0 0 1.08 1.807 1.762 1.762 0 0 0 2.048-.329c.793-.7 1.578-1.414 2.367-2.12.05-.045.108-.079.2-.149a5.364 5.364 0 0 1 -.065 2.069.523.523 0 0 1 -.182.224q-.978.845-1.963 1.683l-9.632 8.176a1.239 1.239 0 0 0 -.295.276.365.365 0 0 0 -.012.321.376.376 0 0 0 .32.063.294.294 0 0 0 .116-.065c.05-.04.1-.091.145-.132l6.963-5.9c.335-.284.673-.564 1.026-.86a1.04 1.04 0 0 1 .043.146 1.973 1.973 0 0 0 1.29 1.75 1.931 1.931 0 0 0 2.148-.419c.464-.423.922-.853 1.382-1.281.3-.275.59-.551.906-.848a5.925 5.925 0 0 1 .143.624 3.2 3.2 0 0 1 -1.014 2.649c-1.159 1.248-2.344 2.469-3.519 3.7-.077.08-.183.146-.225.241s-.069.281-.019.321l.014.009a.573.573 0 0 0 .338.051.136.136 0 0 0 .081-.051c.028-.029.055-.065.082-.092.952-.984 1.909-1.963 2.854-2.954a13.982 13.982 0 0 0 1.074-1.223 3.411 3.411 0 0 0 .61-3.616.516.516 0 0 1 .074-.386c.065-.112.137-.221.211-.329a4.632 4.632 0 0 0 .587-1 7.547 7.547 0 0 1 1.339-2.4 2.792 2.792 0 0 0 .5-2.469.988.988 0 0 1 0-.489c.506-1.567 1.027-3.129 1.543-4.692q.347-1.05.69-2.094l.213-.647c.454 0 .882-.009 1.308 0 .354.01.462-.156.458-.5-.021-1.38-.013-2.759-.013-4.138zm-17.737 14.306a1.442 1.442 0 0 1 -1.684.2 1.393 1.393 0 0 1 -.843-1.368 1.624 1.624 0 0 1 .417-.947 35.848 35.848 0 0 1 5.019-3.993.852.852 0 0 1 .326-.14.656.656 0 0 1 .238 0 .763.763 0 0 1 .265.106 1.041 1.041 0 0 1 .488.975 2.422 2.422 0 0 1 -.5 1.376 22.671 22.671 0 0 1 -3.726 3.791zm5.2 1.929a1.124 1.124 0 0 1 -1.364.192 1.512 1.512 0 0 1 -.81-1.224 1.437 1.437 0 0 1 .448-1.2 38.336 38.336 0 0 1 4.87-3.813c.052-.033.1-.066.157-.1a.837.837 0 0 1 1.025.035.861.861 0 0 1 .242.979 4.39 4.39 0 0 1 -1.168 1.908c-1.103 1.102-2.25 2.163-3.398 3.219zm5.911 1.241a12.189 12.189 0 0 1 -2.367 2.868q-.532.513-1.105.981a1.484 1.484 0 0 1 -2.415-.92 1.1 1.1 0 0 1 .238-.813 22.187 22.187 0 0 1 4.623-3.823.193.193 0 0 1 .065-.013l.1.1c-.28.3-.568.586-.837.893a1.89 1.89 0 0 0 -.2.38c.148.044.321.16.441.119.483-.162.958-.35 1.467-.55l.411-.16c-.154.34-.264.65-.419.934zm1.373-2.535a4.363 4.363 0 0 1 -1.373 1.152q-.247.138-.507.258c.178-.681.356-1.312.507-1.95l.006-.026a4.468 4.468 0 0 1 .826-1.721c.243-.319.516-.192.795-.123.258.063.323.252.334.5a2.845 2.845 0 0 1 -.586 1.906zm2.34-8.5c-.578 1.75-1.163 3.5-1.727 5.252-.106.329-.25.389-.561.191l1.483-6.593.228-1.012 1.2.281c-.082.247-.161.49-.241.731z" />
        </SvgWrapper>
      );
    }
    case SVG_TYPE.TYPESCRIPT: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="200"
          width="200"
          viewBox="0 0 256 256"
          {...props}
        >
          <g>
            <polygon
              fill="#007ACC"
              transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) "
              points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
            ></polygon>
            <path
              d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z"
              fill="#FFFFFF"
              transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) "
            ></path>
            <path
              d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z"
              fill="#FFFFFF"
              transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) "
            ></path>
          </g>
        </SvgWrapper>
      );
    }
    case SVG_TYPE.TYPESCRIPT: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="200"
          width="200"
          viewBox="0 0 256 256"
          {...props}
        >
          <g>
            <polygon
              fill="#007ACC"
              transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) "
              points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
            ></polygon>
            <path
              d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z"
              fill="#FFFFFF"
              transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) "
            ></path>
            <path
              d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z"
              fill="#FFFFFF"
              transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) "
            ></path>
          </g>
        </SvgWrapper>
      );
    }
    case SVG_TYPE.GITHUB: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </SvgWrapper>
      );
    }
    case SVG_TYPE.LINKEDIN: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 32 32"
          {...props}
        >
          <path
            d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z"
            fill="#0177b5"
          />
          <path
            d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z"
            fill="#fff"
          />
        </SvgWrapper>
      );
    }
    case SVG_TYPE.MAIL: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
        </SvgWrapper>
      );
    }
    case SVG_TYPE.SWIPE_UP: {
      return (
        <SvgWrapper
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          {...props}
        >
          <path d="M11.9 27.65q-2.4-3-3.7-6.75-1.3-3.75-1.3-7.9 0-1.4.1-2.875T7.45 7.1l-3.7 3.65L2 9l6.65-6.6L15.3 9l-1.75 1.75-3.65-3.6q-.3 1.45-.4 3-.1 1.55-.1 2.85 0 3.6 1.15 6.9 1.15 3.3 3.15 5.95ZM29.7 43.7l-13.6-5.25 1.4-3.8q.35-.9 1-1.575.65-.675 1.6-.875l3.95-.8-6.65-14.85q-.85-1.9-.1-3.825.75-1.925 2.65-2.775 1.9-.85 3.825-.125 1.925.725 2.775 2.625l3.5 7.85 1.2-.5q.2-.1.45-.1h.5l8.2.3q1.3.05 2.3.9 1 .85 1.35 2.15l2.8 10.7q.4 1.45-.275 2.75t-2.025 1.9l-11.7 5.2q-.75.35-1.575.375Q30.45 44 29.7 43.7Zm1.55-2.7 12.85-5.7L41 23.05l-10.2-.45-2.5 1.15-4.5-10.05q-.4-.85-1.1-1.15-.7-.3-1.55.1-.85.4-1.125 1.1-.275.7.125 1.55l8.1 18.25-7.7 1.6L20 36.7Zm0 0Z" />
        </SvgWrapper>
      );
    }
    default: {
      return null;
    }
  }
};
export default SVG;
