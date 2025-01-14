import { css, keyframes } from "@emotion/css";

const drawDistance = "150px";
const drawDuration = "250ms";

const stacking = keyframes`
  from {
    top: 0;
  }
  to {
    top: var(--top, 20px);
  }
`;

const drawed0 = keyframes`
  from {
    top: var(--top, 20px);
  } to {
    opacity: 1;
    top: ${drawDistance};
  }
`;

const drawed1 = keyframes`
  from {
    left: 0;
  } to {
    opacity: 1;
    left: ${drawDistance};
  }
`;

const drawed2 = keyframes`
  from {
    bottom: calc(0px - var(--top, 20px));
    top: unset;
  } to {
    opacity: 1;
    bottom: ${drawDistance};
    top: unset;
  }
`;

const drawed3 = keyframes`
  from {
    right: 0;
  } to {
    opacity: 1;
    right: ${drawDistance};
  }
`;

export const drawContainer = css`
  position: relative;
`;

const cardBase = css`
  position: absolute;
  top: var(--top, 0);
`;

export const cardModifier = css`
  ${cardBase};
  animation: ${stacking} 500ms 1 ease-out;
`;

export const bottomCards = css`
  width: calc(130px / var(--scale, 2));
  height: calc(180px / var(--scale, 2));
  border-radius: calc(12px / var(--scale, 2));
  background-color: #9444cf;

  &[data-null] {
    background-color: #303030;
  }
`;

export const cardDraw0 = css`
  ${cardBase};
  opacity: 0;
  animation: ${drawed0} ${drawDuration} 1;
`;

export const cardDraw1 = css`
  ${cardBase};
  opacity: 0;
  animation: ${drawed1} ${drawDuration} 1;
`;

export const cardDraw2 = css`
  ${cardBase};
  opacity: 0;
  animation: ${drawed2} ${drawDuration} 1;
`;

export const cardDraw3 = css`
  ${cardBase};
  opacity: 0;
  animation: ${drawed3} ${drawDuration} 1;
`;
