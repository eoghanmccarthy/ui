import { css } from "@emotion/core";

const styles = ({ maxWidth }) => css`
  position: relative;
  width: 100%;
  max-width: ${maxWidth}px;
  max-height: calc(100vh - 140px);
  padding: 0 30px;
  background: transparent;
  border-radius: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &:focus {
    outline: none;
  }
`;

export default styles;
