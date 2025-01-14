import { css } from "@emotion/css";

export const buttonModifier = css`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  min-width: 80px;
  height: 32px;
  font-weight: bold;
  border-radius: 8px;
  color: white;
  background-color: #9444cf;
  transition: 250ms all;

  &:disabled {
    cursor: not-allowed;
    background-color: #eaeaea;
    color: #828282;
  }
`;
