import React, { forwardRef } from "react";
import { string, oneOf } from "prop-types";
import { css } from "@emotion/core";
import cx from "classnames";

import styles from "./styles";

import buttonBase from "../buttonBase";

const Button = forwardRef(
  (
    {
      children,
      className,
      disabled,
      href = "",
      target,
      size = "md",
      shape = "circle",
      variant = "contained",
      color,
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
        ${styles}
          min-width: ${shape === "circle" && minHeight[size]};
          min-height: ${minHeight[size]};
          padding: 0 ${shape === "rounded" ? "0.75em" : "0"};
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
  size: oneOf(["xs", "sm", "md", "lg", "xl"]),
  shape: oneOf(["rounded", "circle"]),
  variant: oneOf(["contained", "outlined", "text"]),
  color: string.isRequired
};

const minHeight = {
  xs: "32px",
  sm: "38px",
  md: "44px",
  lg: "50px",
  xl: "56px"
};

const borderRadius = {
  rounded: "2px",
  circle: "100%"
};
