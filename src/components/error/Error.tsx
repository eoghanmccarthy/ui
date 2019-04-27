import React from "react";
import classNames from "classnames";

import styles from "./styles";

interface Props {
  id?: string;
  className?: string;
  error?: { code?: number; message?: string };
  message?: string;
}

const Error: React.FunctionComponent<Props> = ({
  children,
  id = undefined,
  className = undefined,
  error = {
    code: null,
    message: ""
  },
  message = ""
}) => {
  const _classNames = classNames("error", className);

  const _getErrorMessage = (code: number) => {
    switch (code) {
      case 400:
        return "No items detected";
      case 404:
        return "Page not found :(";
      case 500:
        return "Error";
      default:
        return "Something went wrong";
    }
  };

  return (
    <div id={id} className={_classNames} css={styles}>
      <h3>Oops!</h3>
      {message ? (
        <span>{message}</span>
      ) : error.code ? (
        <span>{_getErrorMessage(error.code)}</span>
      ) : null}
      {children}
    </div>
  );
};

export default Error;
