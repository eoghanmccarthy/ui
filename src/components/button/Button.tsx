import React from "react";

import style from "./style";

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
  const { children, shape, fullWidth, loading, ...rest } = props;

  return (
    <ButtonBase
      {...rest}
      css={{
        ...style(rest),
        width: fullWidth ? "100%" : undefined,
        borderRadius:
          shape === "circle"
            ? "50%"
            : shape === "capsule"
              ? "1000px"
              : undefined
      }}
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
