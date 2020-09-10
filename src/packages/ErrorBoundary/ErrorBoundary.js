import React, { Component } from "react";

import styles from "./styles";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
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
        <section css={styles}>
          <span>something wrong.</span>
        </section>
      );
    }

    return children;
  }
}
