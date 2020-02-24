import React, { useCallback } from "react";

function Child(props) {
  const { negativeCounter } = props;
  console.log("Component B Rendered");
  const comp = useCallback(() => {
    console.log("B rendered!", negativeCounter);
  }, [negativeCounter]);

  return <div style={{ background: "yellow" }}>{comp}</div>;
}

export default Child;
