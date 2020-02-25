import React, { useState } from "react";

import ChildComponent from "./Child";

function UseMemo() {
  let [counter, setCounter] = useState(0);

  const ChildrenA = React.useMemo(() => <ChildComponent {...{ counter }} />, [
    counter
  ]);

  return (
    <>
      <h1 onClick={() => setCounter(counter++)}>+</h1>
      {ChildrenA}
    </>
  );
}
export default UseMemo;
