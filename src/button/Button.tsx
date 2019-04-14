import React from "react";
import classNames from "classNames";

interface Props {
  type?: string;
  role?: string;
  id?: string;
  styles?: object;
  addClass?: string;
  disabled?: boolean;
  isActive?: boolean;
  onClick: () => void;
}

const Button: React.FunctionComponent<Props> = ({
  children,
  type = "button",
  role = "button",
  id = undefined,
  style = undefined,
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
