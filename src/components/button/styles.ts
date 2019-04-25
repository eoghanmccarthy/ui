import { css } from "@emotion/core";
import lightenDarkenColour from "utils/lightenDarkenColour";

export default (props: any) => {
  const { outlined, colour } = props;

  if (outlined) {
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
  } else {
    return css`
      color: #ffffff;
      background-color: ${colour};
      border: 1px solid ${colour};

      &:hover {
        background-color: ${lightenDarkenColour(colour, 50)};
        border: 1px solid ${lightenDarkenColour(colour, 50)};
      }
    `;
  }
};
