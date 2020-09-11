import React, { forwardRef } from "react";
import { createPortal } from "react-dom";
import { func, bool, number, node } from "prop-types";
import FocusLock from "react-focus-lock";
import cx from "classnames";

import styles from "./styles.js";

import baseProps from "../../../utils/baseProps";

import DialogOverlay from "../DialogOverlay/DialogOverlay";

const attachToNode = document.getElementById("root");

const Dialog = forwardRef(
  (
    {
      children,
      attachToNode = attachToNode,
      bypassFocusLock = false,
      className,
      zIndex = 10000,
      maxWidth = 720,
      isOpen,
      closeDialog,
      ...rest
    },
    forwardedRef
  ) => {
    const handleClick = e => {
      e.stopPropagation();
    };

    const handleKeyDown = e => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDialog();
      }
    };

    return isOpen
      ? createPortal(
          <FocusLock returnFocus disabled={bypassFocusLock}>
            <DialogOverlay zIndex={zIndex} closeDialog={closeDialog}>
              <div
                ref={forwardedRef}
                tabIndex={"-1"}
                css={styles({ maxWidth })}
                className={cx("ui-dialog", { "is-open": isOpen }, className)}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                {...rest}
              >
                {children}
              </div>
            </DialogOverlay>
          </FocusLock>,
          attachToNode
        )
      : null;
  }
);

export default baseProps(Dialog);

Dialog.propTypes = {
  attachToNode: node,
  bypassFocusLock: bool,
  zIndex: number,
  maxWidth: number,
  isOpen: bool.isRequired,
  closeDialog: func.isRequired
};
