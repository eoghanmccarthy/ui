import React from "react";

const SVGBase: React.FunctionComponent<{
  id?: string;
  className?: string;
}> = ({ children, id = undefined, className = undefined }) => {
  return (
    <svg id={id} className={className} height="100%" width="100%">
      {children}
    </svg>
  );
};

interface Props {
  id?: string;
  className?: string;
  colour?: string;
  width?: number;
}

export const Close: React.FunctionComponent<Props> = ({
  id = undefined,
  className = undefined,
  colour = "#ffffff",
  width = 1
}) => {
  return (
    <SVGBase id={id} className={className}>
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="100%"
        stroke={colour}
        strokeWidth={width}
      />
      <line
        x1="0"
        y1="100%"
        x2="100%"
        y2="0"
        stroke={colour}
        strokeWidth={width}
      />
    </SVGBase>
  );
};

export const Menu: React.FunctionComponent<Props> = ({
  id = undefined,
  className = undefined,
  colour = "#ffffff",
  width = 1
}) => {
  return (
    <SVGBase id={id} className={className}>
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke={colour}
        strokeWidth={width}
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke={colour}
        strokeWidth={width}
      />
      <line
        x1="0"
        y1="100%"
        x2="100%"
        y2="100%"
        stroke={colour}
        strokeWidth={width}
      />
    </SVGBase>
  );
};

export const ArrowRight: React.FunctionComponent<Props> = ({
  id = undefined,
  className = undefined,
  colour = "#ffffff",
  width = 1
}) => {
  return (
    <SVGBase id={id} className={className}>
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="50%"
        stroke={colour}
        strokeWidth={width}
      />
      <line
        x1="0"
        y1="100%"
        x2="100%"
        y2="50%"
        stroke={colour}
        strokeWidth={width}
      />
    </SVGBase>
  );
};

export const ArrowLeft: React.FunctionComponent<Props> = ({
  id = undefined,
  className = undefined,
  colour = "#ffffff",
  width = 1
}) => {
  return (
    <SVGBase id={id} className={className}>
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="0"
        stroke={colour}
        strokeWidth={width}
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="100%"
        stroke={colour}
        strokeWidth={width}
      />
    </SVGBase>
  );
};

export const ScrollUp: React.FunctionComponent<Props> = ({
  id = undefined,
  className = undefined,
  colour = "#ffffff",
  width = 1
}) => {
  return (
    <SVGBase id={id} className={className}>
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke={colour}
        strokeWidth={width}
      />
    </SVGBase>
  );
};
