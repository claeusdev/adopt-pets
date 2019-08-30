import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error Boundary", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 2000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go bacj to home page or wait a few.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
