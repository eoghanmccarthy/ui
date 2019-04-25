import React from "react";
import { useTransition, animated } from "react-spring";

import style from "./style";

interface Props {
  id?: string;
  className?: string;
  isVisible: boolean;
  transparent?: boolean;
  onClick?: () => void;
  onDestroy?: () => void;
}

const ContentOverlay: React.FunctionComponent<Props> = ({
  children,
  id = undefined,
  className = undefined,
  isVisible,
  transparent = false,
  onClick = null,
  onDestroy = null
}) => {
  const transitions = useTransition(isVisible, null, {
    native: true,
    from: { backgroundColor: "rgba(255,255,255,0)" },
    enter: { backgroundColor: "rgba(255,255,255,.45)" },
    leave: { backgroundColor: "rgba(255,255,255,0)" },
    onDestroyed: onDestroy,
    config: {
      tension: 220,
      friction: 20,
      clamp: true
    }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          id={id}
          style={transparent ? undefined : props}
          className={className}
          onClick={onClick}
          css={{
            ...style()
          }}
        >
          {children}
        </animated.div>
      )
  );
};

export default ContentOverlay;
