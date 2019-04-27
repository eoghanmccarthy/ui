import React from "react";
import { css } from "@emotion/core";
import classNames from "classnames";

import * as styles from "./styles";

import ButtonBase from "../buttonBase/ButtonBase";

interface Props {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  colour?: string;
  tier?: "contained" | "outlined" | "basic";
  shape?: "rounded" | "circle" | "capsule" | undefined;
  size?: "small" | "large" | undefined;
  fullWidth?: boolean;
  raised?: boolean;
  isActive?: boolean;
  loading?: boolean;
}

const Button: React.FunctionComponent<Props> = props => {
  const {
    children,
    className,
    onClick,
    disabled,
    shape,
    fullWidth,
    isActive,
    loading,
    ...rest
  } = props;

  const _classNames = classNames("btn", className, {
    active: isActive,
    disabled: disabled
  });

  return (
    <ButtonBase
      className={_classNames}
      onClick={onClick}
      disabled={disabled}
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
  className: undefined,
  disabled: false,
  colour: "#000000",
  tier: "basic",
  shape: undefined,
  size: undefined,
  fullWidth: false,
  raised: false,
  isActive: false,
  loading: false
};
