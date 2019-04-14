import React from "react";
import { useTransition, animated } from "react-spring";

interface Props {
  children?: JSX.Element | null;
  isVisible: boolean;
  transparent: boolean;
  atRoot: boolean;
  rootID: string;
  onClick: () => void;
  onDestroy: () => void;
}

const ContentOverlay: React.FunctionComponent<Props> = ({
  children,
  isVisible = false,
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

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={transparent ? undefined : props}
          className={"modal-overlay"}
          onClick={onClick}
        >
          {children}
        </animated.div>
      )
  );
};

export default ContentOverlay;
