import React, { forwardRef } from "react";
import { bool, func, oneOf, string } from "prop-types";
import cx from "classnames";

import baseProps from "../../utils/baseProps";

const Button = forwardRef(
  (
    {
      children,
      className,
      role = "button",
      type = "button",
      tabIndex = "0",
      isDisabled = false,
      onClick = () => null,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <button
        ref={forwardedRef}
        className={cx("ui-button", { disabled: isDisabled }, className)}
        role={role}
        type={type}
        tabIndex={tabIndex}
        disabled={isDisabled}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default baseProps(Button);

Button.propTypes = {
  role: string,
  type: oneOf(["button", "submit", "reset"]),
  tabIndex: string,
  isDisabled: bool,
  onClick: func.isRequired
};
