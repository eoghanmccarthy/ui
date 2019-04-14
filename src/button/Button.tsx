import React from "react";
import classNames from "classNames";

interface Props {
  type?: string;
  role?: string;
  id?: string;
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
  className = "",
  disabled = false,
  isActive = false,
  onClick = null
}) => {
  const _className = classNames("btn", className, {
    active: isActive,
    disabled: disabled
  });

  return (
    <button
      type={type}
      role={role}
      id={id}
      className={_className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
