import React, { Fragment, forwardRef, useState, useEffect } from "react";
import { func, bool } from "prop-types";
import { useTransition, animated, config } from "react-spring";
import FocusLock from "react-focus-lock";
import cx from "classnames";

import styles from "./styles.js";

import dialogBase from "../dialogBase";
import ContentOverlay from "../contentOverlay";
import DialogBackground from "../dialogBackground";

const Dialog = forwardRef(
  (
    {
      children,
      className,
      isVisible,
      closeDialog,
      onDestroy,
      immediate = false,
      ...rest
    },
    forwardedRef
  ) => {
    const [showOverlay, toggleOverlay] = useState(false);

    useEffect(() => {
      isVisible && toggleOverlay(true);
    }, [isVisible]);

    const transition = useTransition(isVisible, null, {
      immediate: immediate,
      from: { opacity: 0, transform: "translateY(+70px)" },
      enter: { opacity: 1, transform: "translateY(0px)" },
      leave: { opacity: 0, transform: "translateY(+50px)" },
      config: (item, state) =>
        state === "leave"
          ? { mass: 1, tension: 380, friction: 40, clamp: true }
          : config.stiff,
      onDestroyed: () => !isVisible && toggleOverlay(false)
    });

    return (
      <Fragment>
        {transition.map(({ item, key, props }) =>
          item ? (
            <Fragment key={key}>
              <FocusLock returnFocus>
                <DialogBackground closeDialog={closeDialog}>
                  <animated.div
                    ref={forwardedRef}
                    tabIndex={"-1"}
                    css={styles}
                    style={props}
                    className={cx("ui-dialog", className)}
                    onClick={e => e.stopPropagation()}
                    {...rest}
                  >
                    {children}
                  </animated.div>
                </DialogBackground>
              </FocusLock>
            </Fragment>
          ) : null
        )}
        <ContentOverlay
          isVisible={showOverlay}
          onDestroy={onDestroy}
          immediate={immediate}
        />
      </Fragment>
    );
  }
);

export default dialogBase(Dialog);

Dialog.propTypes = {
  immediate: bool
};
