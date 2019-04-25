import React, { Fragment, useState, useLayoutEffect } from "react";
import { css } from "@emotion/core";
import { useTransition, animated, config } from "react-spring";

import * as styles from "./styles";

import ContentOverlay from "components/contentOverlay/ContentOverlay";

interface Props {
  id?: string;
  className?: string;
  isVisible?: boolean;
  disableAnim?: boolean;
  disableClickableOverlay?: boolean;
  closeDialog: () => void;
  onDestroy?: () => void;
}

const Dialog: React.FunctionComponent<Props> = ({
  children,
  id = undefined,
  className = undefined,
  isVisible = false,
  disableAnim = false,
  disableClickableOverlay = false,
  closeDialog = null,
  onDestroy = null
}) => {
  const [overlayVIS, setOverlayVIS] = useState(false);

  const transitions = useTransition(isVisible, null, {
    native: true,
    from: { opacity: 0.75, transform: "translateY(+70px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0.75, transform: "translateY(+70px)" },
    onDestroyed: () => !isVisible && setOverlayVIS(false),
    config: config.easing,
    immediate: disableAnim
  });

  useLayoutEffect(
    () => {
      isVisible && setOverlayVIS(true);
    },
    [isVisible]
  );

  return (
    <Fragment>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <div
              key={key}
              onClick={!disableClickableOverlay ? closeDialog : null}
              css={css`
                ${styles.overlay()};
              `}
            >
              <animated.div
                id={id}
                style={props}
                className={className}
                onClick={e => e.stopPropagation()}
                css={css`
                  ${styles.modal()};
                `}
              >
                {children}
              </animated.div>
            </div>
          )
      )}
      <ContentOverlay isVisible={overlayVIS} onDestroy={onDestroy} />
    </Fragment>
  );
};

export default Dialog;
