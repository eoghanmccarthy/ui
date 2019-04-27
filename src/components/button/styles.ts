import { css } from "@emotion/core";
import lightenDarkenColour from "utils/lightenDarkenColour";

export const colour = (props: any) => {
  const { tier, colour } = props;

  if (tier === "contained") {
    return css`
      color: #ffffff;
      background-color: ${colour};
      border: 1px solid ${colour};

      &:hover {
        background-color: ${lightenDarkenColour(colour, -50)};
        border: 1px solid ${lightenDarkenColour(colour, -50)};
      }
    `;
  } else if (tier === "outlined") {
    return css`
      color: ${colour};
      background-color: transparent;
      border: 1px solid ${colour};
      span {
        background-color: ${colour};
      }

      &:hover {
        color: #ffffff;
        background-color: ${colour};
        span {
          background-color: #ffffff;
        }
      }
    `;
  } else if (tier === "basic") {
    return css`
      color: ${colour};
      span {
        background-color: ${colour};
      }
    `;
  }
};

export const shape = (shape: string) => {
  return css`
    border-radius: ${shape === "circle"
      ? "50%"
      : shape === "capsule"
        ? "1000px"
        : shape === "rounded"
          ? "4px"
          : undefined};
  `;
};