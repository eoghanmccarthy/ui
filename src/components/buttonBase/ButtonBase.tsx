import React from "react";

import style from "./style";

interface Props {
  type?: "button" | "submit" | "reset";
  role?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

const ButtonBase: React.FunctionComponent<Props> = ({
  children,
  type = "button",
  role = "button",
  id = undefined,
  className = undefined,
  disabled = false,
  onClick
}) => {
  return (
    <button
      type={type}
      role={role}
      id={id}
      className={className}
      disabled={disabled}
      onClick={onClick}
      css={style}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
