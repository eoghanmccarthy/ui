import React, { Component } from "react";

interface Props {}

export default class ErrorBoundary extends Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

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
      return <span>Something went wrong.</span>;
    }

    return children;
  }
}
