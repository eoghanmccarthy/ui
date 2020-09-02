import React, { forwardRef } from "react";
import { string, oneOf } from "prop-types";
import cx from "classnames";

import buttonBase from "../buttonBase";

const Button = forwardRef(
  (
    { children, className, disabled, href = "", target = "_blank", ...rest },
    forwardedRef
  ) => {
    const Element = href ? "a" : "button";

    return (
      <Element
        ref={forwardedRef}
        {...(href && { href: href })}
        {...(href && { target: target })}
        disabled={disabled}
        className={cx("ui-button", { disabled: disabled }, className)}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

export default buttonBase(Button);

Button.propTypes = {
  href: string,
  target: oneOf(["_blank", "_self", "_parent", "_top"])
};
