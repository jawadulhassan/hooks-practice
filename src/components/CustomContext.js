import React, { useState } from "react";

function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);
  return [counter, setCounter];
}

function CustomContext() {
  const [counter, setCounter] = useCounter(5);
  return (
    <>
      <div onClick={() => setCounter(counter + 5)}>+</div>
      <h1>{counter}</h1>
      <div onClick={() => setCounter(counter - 5)}>-</div>
    </>
  );
}

export default CustomContext;
