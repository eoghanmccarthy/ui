import React from "react";
import { css } from "@emotion/core";

import * as styles from "./styles";

import ButtonBase from "../buttonBase/ButtonBase";

interface Props {
  onClick: () => void;
  colour?: string;
  shape?: "rounded" | "circle" | "capsule" | undefined;
  size?: "small" | "large" | undefined;
  fullWidth?: boolean;
  outlined?: boolean;
  isActive?: boolean;
  loading?: boolean;
}

const Button: React.FunctionComponent<Props> = props => {
  const { children, shape, fullWidth, onClick, loading, ...rest } = props;

  return (
    <ButtonBase
      onClick={onClick}
      css={css`
        ${styles.colour(props)};
        ${styles.shape(shape)};
        width: ${fullWidth ? "100%" : undefined};
      `}
      {...rest}
    >
      {!loading ? children : null}
    </ButtonBase>
  );
};

export default Button;

Button.defaultProps = {
  colour: "green",
  shape: undefined,
  size: undefined,
  fullWidth: false,
  outlined: false,
  isActive: false,
  loading: false
};
