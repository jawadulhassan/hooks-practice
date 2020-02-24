import React, { useMemo } from "react";

function Child(props) {
  const { counter } = props;
  console.log('Rendered')
  useMemo(() => {
    console.log("rendered!", counter);
  }, [counter]);

  return (
    <div style={{ background: "orange" }}>
      <h3>{counter}</h3>
    </div>
  );
}

export default Child;
