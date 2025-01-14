import { css, keyframes } from "@emotion/css";

const get = keyframes`
  from {
    transform: translate(50px) scale(2.5);
    z-index: 5;
  }
  to {
    transform: translate(0) scale(1);
    z-index: unset;
  }
`;

export const container = css`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const smallCard = css`
  width: 26px;
  height: 36px;
  border-radius: 2px;
`;

export const kuartetCard = css`
  ${smallCard};
  position: relative;
  transform-origin: top;
  animation: ${get} 250ms 1 forwards;
`;

export const kuartetCounter = css`
  ${smallCard};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
