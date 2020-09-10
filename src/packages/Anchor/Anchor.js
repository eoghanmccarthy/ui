import React, { forwardRef } from "react";
import { string, oneOf } from "prop-types";
import cx from "classnames";

import baseProps from "../../utils/baseProps";

const Anchor = forwardRef(
  (
    { children, className, href = null, target = "_blank", ...rest },
    forwardedRef
  ) => {
    return (
      <a
        ref={forwardedRef}
        {...(href && { href: href })}
        {...(href && { target: target })}
        className={cx("ui-anchor", { placeholder: !href }, className)}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

export default baseProps(Anchor);

Anchor.propTypes = {
  href: string,
  target: oneOf(["_blank", "_self", "_parent", "_top"])
};
