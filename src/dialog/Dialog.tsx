import React, { Fragment, useState, useLayoutEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import classNames from "classNames";

import ContentOverlay from "src/contentOverlay/ContentOverlay";
//import BtnClose from 'shared/modal/closeBtn';

interface Props {
  id?: string;
  className?: string;
  isVisible?: boolean;
  closeDialog: () => void;
  onDestroy?: () => void;
  disableAnim?: boolean;
}

const Dialog: React.FunctionComponent<Props> = ({
  children,
  id = undefined,
  className = undefined,
  isVisible = false,
  closeDialog = null,
  onDestroy = null,
  disableAnim = false
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

  const _className = classNames("dialog", className, {
    active: isVisible
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
            <div className={"dialog-overlay"} onClick={closeDialog}>
              <animated.div
                id={id}
                style={props}
                className={_className}
                onClick={e => e.stopPropagation()}
              >
                <div className={"dialog__gutter"}>
                  {closeDialog && <BtnClose onClick={closeDialog} />}
                </div>
                <div className={"dialog__main"}>{children}</div>
                <div className={"dialog__gutter"} />
              </animated.div>
            </div>
          )
      )}
      <ContentOverlay atRoot isVisible={overlay} onDestroy={onDestroy} />
    </Fragment>
  );
};

export default Dialog;
