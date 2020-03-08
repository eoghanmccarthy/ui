import { css } from "@emotion/core";

const baseStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border-width: 0;
  border-style: solid;
  outline: none;
  overflow: hidden;
  transition: all 0.25s;
  user-select: none;
  cursor: pointer;
  &:[disabled] {
    cursor: not-allowed;
  }
`;

export default baseStyles;
