import React from "react";
import { func } from "prop-types";
import { useTransition, animated } from "react-spring";
import cx from "classnames";

import styles from "./styles.js";

const n = () => null;

const ContentOverlay = ({ isVisible, onDestroy = n, immediate }) => {
  const transition = useTransition(isVisible, null, {
    immediate: immediate,
    from: { backgroundColor: "rgba(0,0,0,0)" },
    enter: { backgroundColor: "rgba(0,0,0,.22)" },
    leave: { backgroundColor: "rgba(0,0,0,0)" },
    config: (item, state) =>
      state === "leave"
        ? { mass: 1, tension: 400, friction: 20, clamp: true }
        : { mass: 1, tension: 220, friction: 12, clamp: true },
    onDestroyed: () => !isVisible && onDestroy()
  });

  return transition.map(({ item, key, props }) =>
    item ? (
      <animated.div
        key={key}
        css={styles}
        style={props}
        className={cx("ui-content-overlay")}
      />
    ) : null
  );
};

export default ContentOverlay;

ContentOverlay.propTypes = {
  onDestroy: func
};
