import React from "react";
import { string, bool, oneOf, func } from "prop-types";

import baseProps from "../../baseProps";

const n = () => null;

const buttonWrapper = Component => {
  const ButtonBase = props => {
    const {
      role = "button",
      type = "button",
      tabIndex = "0",
      onClick = n,
      ...rest
    } = props;

    return (
      <Component
        role={role}
        type={type}
        tabIndex={tabIndex}
        onClick={onClick}
        {...rest}
      />
    );
  };

  ButtonBase.propTypes = {
    role: string,
    type: oneOf(["button", "submit", "reset"]),
    tabIndex: string,
    onClick: func
  };

  return baseProps(ButtonBase);
};

export default buttonWrapper;
