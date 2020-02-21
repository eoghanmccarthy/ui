import React, { forwardRef } from "react";
import { string, oneOf } from "prop-types";
import { css } from "@emotion/core";
import cx from "classnames";

import styles from "./styles";

import buttonBase from "../buttonBase";

const sizes = {
  sm: "36px",
  md: "42px",
  lg: "48px"
};

const shapes = {
  rounded: "8px",
  circle: "100%"
};

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
          min-width: ${shape === "circle" && sizes[size]};
          min-height: ${sizes[size]};
          padding: 0 ${shape === "rounded" ? "1em" : "0"};
          color: ${variant === "text" ? color : "#ffffff"};
          background-color: ${variant === "text" ? "transparent" : color}; 
          border-width: ${variant === "text" ? "0" : "1px"};
          border-color: ${color};
          border-radius: ${shapes[shape]};
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
  size: oneOf(["sm", "md", "lg"]),
  shape: oneOf(["rounded", "circle"]),
  variant: oneOf(["contained", "outlined", "text"]),
  color: string.isRequired
};
