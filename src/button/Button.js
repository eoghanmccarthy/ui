import React from "react";
import PropTypes from 'prop-types';
import classNames from "classNames";

const Button = ({
  children,
  type = "button",
  role = "button",
  id = undefined,
  styles = undefined,
  addClass = "",
  disabled = false,
  isActive = false,
  onClick = null
}) => {
  const _classNames = classNames("", {
    active: isActive,
    disabled: disabled
  });

  return (
    <button
      type={type}
      role={role}
      id={id}
      style={styles}
      disabled={disabled}
      className={`btn ${addClass && addClass} ${_classNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  role: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object,
  addClass: PropTypes.string,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};
