import React from "react";
import { func, number } from "prop-types";

import styles from "./styles.js";

const DialogOverlay = ({ children, zIndex = 10000, closeDialog }) => {
  return (
    <div
      css={styles({ zIndex })}
      className={"ui-dialog-overlay"}
      onClick={closeDialog}
    >
      {children}
    </div>
  );
};

export default DialogOverlay;

DialogOverlay.propTypes = {
  zIndex: number,
  closeDialog: func.isRequired
};
