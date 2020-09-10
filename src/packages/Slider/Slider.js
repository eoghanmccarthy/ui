import React, { memo } from "react";
import { bool, func, number, oneOf } from "prop-types";
import cx from "classnames";

import baseProps from "../../utils/baseProps";

const Slider = memo(
  ({
    className,
    isDisabled = false,
    orient = "horizontal",
    max = 1,
    min = 0,
    step = 0.1,
    onChange,
    ...rest
  }) => {
    return (
      <input
        className={cx(
          "ui-slider",
          { [`orient-${orient}`]: orient, disabled: isDisabled },
          className
        )}
        disabled={isDisabled}
        orient={orient}
        type={"range"}
        step={step}
        max={max}
        min={min}
        onChange={onChange}
        {...rest}
      />
    );
  }
);

export default baseProps(Slider);

Slider.propTypes = {
  isDisabled: bool,
  orient: oneOf(["horizontal", "vertical"]),
  max: number,
  min: number,
  step: number,
  onChange: func.isRequired
};
