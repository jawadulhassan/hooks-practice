import React from "react";

function Child(props) {
  const { counter } = props;
  console.log("Rendered");

  return (
    <div style={{ background: "orange" }}>
      <h3>{counter}</h3>
    </div>
  );
}

export default Child;
