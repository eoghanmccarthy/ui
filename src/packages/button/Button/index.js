import React, { forwardRef } from "react";
import cx from "classnames";

import ButtonBase from "../ButtonBase";

const Button = forwardRef(
  ({ children, className, disabled, ...rest }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        disabled={disabled}
        className={cx("ui-button", { disabled: disabled }, className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default ButtonBase(Button);
