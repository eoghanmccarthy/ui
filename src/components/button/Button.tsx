import React from "react";

import { shape, colour } from "./style";

import ButtonBase from "../buttonBase/ButtonBase";

interface Props {
  theme?: string;
  rounded?: boolean;
  circle?: boolean;
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
        ...shape(props),
        ...colour(props)
      }}
    >
      {props.children}
    </ButtonBase>
  );
};

export default Button;

Button.defaultProps = {
  theme: "green",
  rounded: false,
  circle: false,
  capsule: false,
  outlined: false,
  isActive: false,
  loading: false
};
