import React from "react";
import { useTransition, animated } from "react-spring";
import classNames from "classNames";

interface Props {
  id?: string;
  className?: string;
  isVisible: boolean;
  transparent?: boolean;
  atRoot?: boolean;
  rootID?: string;
  onClick?: () => void;
  onDestroy?: () => void;
}

const ContentOverlay: React.FunctionComponent<Props> = ({
  children,
  id = undefined,
  className = "",
  isVisible,
  transparent = false,
  atRoot = false,
  rootID = "app-root",
  onClick = null,
  onDestroy = null
}) => {
  const transitions = useTransition(isVisible, null, {
    native: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onDestroyed: onDestroy,
    config: {
      tension: 220,
      friction: 20,
      clamp: true
    }
  });

  const _className = classNames("content-overlay", className, {
    active: isVisible
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          id={id}
          style={transparent ? undefined : props}
          className={_className}
          onClick={onClick}
        >
          {children}
        </animated.div>
      )
  );
};

export default ContentOverlay;
