import React from "react";
import classNames from "classNames";

interface Props {
  type?: string;
  role?: string;
  id?: string;
  styles?: object;
  className?: string;
  disabled?: boolean;
  isActive?: boolean;
  onClick: () => void;
}

const Button: React.FunctionComponent<Props> = ({
  children,
  type = "button",
  role = "button",
  id = undefined,
  styles = undefined,
  className = "",
  disabled = false,
  isActive = false,
  onClick = null
}) => {
  const btnClass = classNames("btn", className, {
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
      className={btnClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
