import React from "react";

import styleShape from "./styles/shape";
import styleColour from "./styles/colour";

import ButtonBase from "../buttonBase/ButtonBase";

interface Props {
  colour?: string;
  shape?: "rounded" | "circle" | "capsule" | undefined;
  size?: "small" | "large" | undefined;
  fullWidth?: boolean;
  outlined?: boolean;
  isActive?: boolean;
  loading?: boolean;
}

const Button: React.FunctionComponent<Props> = props => {
  const { children, loading, ...rest } = props;

  return (
    <ButtonBase {...rest} css={{ ...styleShape(rest), ...styleColour(rest) }}>
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
