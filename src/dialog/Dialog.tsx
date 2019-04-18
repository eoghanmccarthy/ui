import React, { Fragment, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated, config } from 'react-spring';

import ContentOverlay from 'src/contentOverlay/contentOverlay';
//import BtnClose from 'shared/modal/closeBtn';

interface Props {
  id?: string;
  className?: string;
  isVisible?: boolean;
  closeDialog: () => void;
  onDestroy?: () => void;
  disableTransition?: boolean;
}

const Dialog: React.FunctionComponent<Props> = ({
  children,
  id = undefined,
  className = undefined,
  isVisible = false,
  closeDialog = null,
  onDestroy = null,
  disableTransition = false
}) => {
  const [overlay, setOverlay] = useState(false);

  useLayoutEffect(
    () => {
      isVisible && setOverlay(true);
    },
    [isVisible]
  );

  return (
    <Fragment>
      <Transition
        native
        items={isVisible}
        from={{ opacity: 0.75, transform: 'translateY(+70px)' }}
        enter={{ opacity: 1, transform: 'translateY(0px)' }}
        leave={{ opacity: 0.75, transform: 'translateY(+70px)' }}
        config={config.easing}
        // config={{
        //   mass: 1,
        //   tension: 260,
        //   friction: 20,
        //   clamp: true
        // }}
        immediate={disableTransition}
        onDestroyed={() => !isVisible && setOverlay(false)}
      >
        {isVisible =>
          isVisible &&
          (props => (
            <div className={'dialog'} onClick={closeDialog}>
              <animated.div
                id={id}
                style={props}
                className={`dialog__modal ${className}`}
                onClick={e => e.stopPropagation()}
              >
                <div className={'modal__gutter'}>
                  {closeDialog && <BtnClose onClick={closeDialog} />}
                </div>
                <div className={'modal__main'}>{children}</div>
                <div className={'modal__gutter'} />
              </animated.div>
            </div>
          ))
        }
      </Transition>
      <ContentOverlay atRoot isVisible={overlay} onDestroy={onDestroy} />
    </Fragment>
  );
};

export default Dialog;
