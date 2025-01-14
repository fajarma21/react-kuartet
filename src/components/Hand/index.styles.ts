import { css } from "@emotion/css";

export const hand = css`
  position: fixed;
  padding: 12px;
  background-color: #353535;
  border-bottom: none;
  border-radius: 18px 18px 0 0;
  border: 5px solid #898989;
  border-bottom: none;

  &[data-index="0"] {
    bottom: 0;
    left: calc(50% - 400px);
    width: 800px;
    height: 300px;
    border-width: 10px;
    border-radius: 36px 36px 0 0;
    padding: 24px;
  }

  &[data-index="1"] {
    top: 20%;
    right: 200px;
    width: 400px;
    height: 200px;
    transform-origin: top right;
    transform: rotateZ(270deg);
  }

  &[data-index="2"] {
    top: 0;
    left: calc(50% - 200px);
    width: 400px;
    height: 200px;
    transform: rotateZ(180deg);
  }

  &[data-index="3"] {
    top: 20%;
    left: 200px;
    width: 400px;
    height: 200px;
    transform-origin: top left;
    transform: rotateZ(90deg);
  }

  &[data-turn] {
    background-color: #66d976;
    border-color: #b8ffc2;
  }

  &[data-winner] {
    background-color: gold;
    border-color: #fff0a1;
  }
`;

export const text = css`
  position: absolute;
  top: -70px;
  left: 50%;
  width: 400px;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  transform: translateX(-50%);
`;

const row = css`
  display: flex;
  align-items: center;
`;

export const mainRow = css`
  ${row};
  justify-content: center;
`;

export const rowKuartet = css`
  ${row};
  position: relative;
  width: 65px;
  height: 180px;
  flex: none;
`;

export const topSection = css`
  ${row};
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const kuartetContainer = css`
  padding: 4px;
  border-radius: 4px;
  background-color: rgb(107 107 107 / 30%);

  &[data-winner] {
    background-color: rgb(255 255 255 / 30%);
  }
`;

export const crown = css`
  display: flex;
  border-radius: 50% 50% 0 0;
  overflow: hidden;
  width: 60px;
  height: 44px;
  & > div {
    width: 30%;

    &::after,
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 50%;
      box-sizing: border-box;
      background: transparent;
      border-style: solid;
    }

    &::after {
      border-width: 22px 9px 0;
      border-color: #ff9507 #ff9507 transparent transparent;
    }

    &::before {
      border-width: 11px 9px;
      border-color: transparent transparent #ff9507 #ff9507;
    }

    &:nth-child(2) {
      width: 40%;
      &::before {
        border-width: 0px 12px 28px 12px;
        border-color: transparent transparent #ff9507;
      }
      &::after {
        border: none;
        background-color: #ff9507;
      }
    }

    &:last-child {
      &::before {
        border-color: transparent #ff9507 #ff9507 transparent;
      }
      &::after {
        border-color: #ff9507 transparent transparent #ff9507;
      }
    }
  }
`;
