import React, { Component } from "react";

function withHigherOrderComp(Component) {
  return function wrapper() {
    const propsValue = "red";
    return <Component {...{ propsValue }} />;
  };
}

class HOCs extends Component {
  render() {
    const { propsValue } = this.props;
    return (
      <div
        style={{
          background: propsValue,
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          width: 600,
          height: 600
        }}
      >
        <h1>Context to be wrapper</h1>
      </div>
    );
  }
}

export default withHigherOrderComp(HOCs);
