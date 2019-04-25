import React, { Fragment, useState, useLayoutEffect } from "react";
import { useTransition, animated, config } from "react-spring";

import style from "./style";

import ContentOverlay from "components/contentOverlay/ContentOverlay";

interface Props {
  id?: string;
  className?: string;
  isVisible?: boolean;
  disableAnim?: boolean;
  closeDialog: () => void;
  onDestroy?: () => void;
}

const Dialog: React.FunctionComponent<Props> = ({
  children,
  id = undefined,
  className = undefined,
  isVisible = false,
  disableAnim = false,
  closeDialog = null,
  onDestroy = null
}) => {
  const [overlay, setOverlay] = useState(false);
  const transitions = useTransition(isVisible, null, {
    native: true,
    from: { opacity: 0.75, transform: "translateY(+70px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0.75, transform: "translateY(+70px)" },
    onDestroyed: () => !isVisible && setOverlay(false),
    config: config.easing,
    immediate: disableAnim
  });

  useLayoutEffect(
    () => {
      isVisible && setOverlay(true);
    },
    [isVisible]
  );

  return (
    <Fragment>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <div
              onClick={closeDialog}
              css={{
                ...style().overlay
              }}
            >
              <animated.div
                id={id}
                style={props}
                className={className}
                onClick={e => e.stopPropagation()}
                css={{
                  ...style().modal
                }}
              >
                {children}
              </animated.div>
            </div>
          )
      )}
      <ContentOverlay isVisible={overlay} onDestroy={onDestroy} />
    </Fragment>
  );
};

export default Dialog;
