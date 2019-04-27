import React, { Component } from "react";
import { css } from "@emotion/core";

import * as styles from "./styles";

interface Props {
  location?: string;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  static defaultProps: Props = {
    location: ""
  };

  state: Readonly<State> = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <section
          css={css`
            ${styles};
          `}
        >
          Something went wrong.
        </section>
      );
    }

    return children;
  }
}
