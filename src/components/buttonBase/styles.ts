import { css } from "@emotion/core";

export default () => css`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0;
  outline: none;
  overflow: hidden;
  transition: all 0.25s ease;
  user-select: none;
  cursor: pointer;
`;
