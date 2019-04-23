import React from "react";

import style from "./style";

import ButtonBase from "../buttonBase/ButtonBase";

interface Props {
  colour?: string;
  round?: boolean;
  capsule?: boolean;
  outlined?: boolean;
  isActive?: boolean;
  loading?: boolean;
}

const Button: React.FunctionComponent<Props> = props => {
  return (
    <ButtonBase
      {...props}
      css={{
        ...style(props),
        borderRadius: props.round ? "50%" : props.capsule ? "1000px" : undefined
      }}
    >
      {props.children}
    </ButtonBase>
  );
};

export default Button;

Button.defaultProps = {
  colour: "green",
  round: false,
  capsule: false,
  outlined: false,
  isActive: false,
  loading: false
};
