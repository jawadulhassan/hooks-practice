import React, { useState } from "react";

import ChildComponent from "./Child";
import ChildComponentB from "./ChildB";

function UseMemo() {
  let [counter, setCounter] = useState(0);
  let [negativeCounter, setNegativeCounter] = useState(0);

  const ChildrenA = React.useMemo(() => <ChildComponent {...{ counter }} />, [
    counter
  ]);

  const ChildrenB = React.useMemo(
    () => <ChildComponentB {...{ negativeCounter }} />,
    [negativeCounter]
  );

  return (
    <>
      <h1 onClick={() => setCounter(counter++)}>+</h1>
      {ChildrenA}
      <h1 onClick={() => setNegativeCounter(negativeCounter--)}>-</h1>
      {ChildrenB}
    </>
  );
}
export default UseMemo;
