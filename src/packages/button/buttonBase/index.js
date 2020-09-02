import React from "react";
import { string, bool, oneOf, func } from "prop-types";

import baseProps from "packages/baseProps";

const n = () => null;

const buttonBase = Component => {
  const ButtonBase = props => {
    const {
      role = "button",
      type = "button",
      tabIndex = "0",
      disabled = false,
      onClick = n,
      ...rest
    } = props;

    return (
      <Component
        role={role}
        type={type}
        tabIndex={tabIndex}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      />
    );
  };

  ButtonBase.propTypes = {
    role: string,
    type: oneOf(["button", "submit", "reset"]),
    tabIndex: string,
    disabled: bool,
    onClick: func
  };

  return baseProps(ButtonBase);
};

export default buttonBase;
