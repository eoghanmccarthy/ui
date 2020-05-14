import React, { forwardRef } from "react";
import { string, oneOf } from "prop-types";
import { css } from "@emotion/core";
import cx from "classnames";

import buttonBase from "../buttonBase";

const Button = forwardRef(
  (
    {
      children,
      className,
      disabled,
      href = "",
      target = "_blank",
      size = 36,
      shape = "circle",
      ...rest
    },
    forwardedRef
  ) => {
    const Element = href ? "a" : "button";

    return (
      <Element
        ref={forwardedRef}
        {...(href && { href: href })}
        {...(href && { target: target })}
        disabled={disabled}
        className={cx("ui-button", className)}
        css={css`
          background-color: transparent;
          min-width: ${shape === "circle" && `${size}px`};
          min-height: ${size}px;
          padding: 0 ${shape === "circle" ? "0" : "0.75em"};
          border-radius: ${borderRadius[shape]};
          &:focus {
            box-shadow: 0 0 0 3px white;
          }
        `}
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
  target: oneOf(["_blank", "_self", "_parent", "_top"]),
  size: oneOf([24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72]),
  shape: oneOf(["rounded", "circle", "capsule"])
};

const borderRadius = {
  rounded: "2px",
  circle: "100%",
  capsule: "1000px"
};
