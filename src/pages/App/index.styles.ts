import { css, keyframes } from "@emotion/css";

const cardAnim = keyframes`
  from {
    top: -100px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
`;

export const centerTable = css`
  position: fixed;
  top: calc(50% - 50px);
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const handCard = css`
  flex: none;
  opacity: 0;
  animation: ${cardAnim} 500ms 1 forwards cubic-bezier(0, 0, 0, 1.5);

  &:not(:first-child) {
    margin-left: var(--gap);
  }

  &:hover {
    z-index: var(--index, "unset");
    transform-origin: bottom left;
    transform: var(--hover, "unset");
  }
`;
