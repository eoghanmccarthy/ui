import { css } from "@emotion/core";

export const overlay = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const modal = () => css`
  position: relative;
  width: 100%;
`;
