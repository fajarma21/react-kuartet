import { css } from "@emotion/css";
import bgCard from "@/assets/bg-card.png";

export const card = css`
  all: unset;
  position: relative;
  cursor: pointer;
  text-align: center;
  width: calc(130px / var(--scale, 2));
  height: calc(180px / var(--scale, 2));
  border-radius: calc(12px / var(--scale, 2));
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 250ms;

  &:disabled {
    cursor: not-allowed;
  }

  &[data-selected] {
    margin-top: calc(-150px / var(--scale, 2));
  }
`;

const inner = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: calc(12px / var(--scale, 2));
  display: flex;
  align-items: center;
  backface-visibility: hidden;
`;

export const front = css`
  ${inner};
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  color: #bebebe;
  background: #1f1f1f;
  border: 2px solid #474747;
`;

export const back = css`
  ${inner};
  justify-content: center;
  background-image: url(${bgCard});
  border: calc(6px / var(--scale, 2)) solid #9444cf;
`;

export const imgModifier = css`
  object-fit: cover;
  border-radius: calc(8px / var(--scale, 2));
`;

export const color = css`
  width: 100%;
  height: 60%;
  border-radius: calc(8px / var(--scale, 2));
`;
