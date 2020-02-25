import React, { useState, useCallback } from "react";

const functionsCounter = new Set();

const Counter = () => {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    console.log('increment!')
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    console.log('decrement!')
    setCount(count - 1);
  }, [count]);

  const incrementOtherCounter = () => {
    setOtherCounter(otherCounter + 1);
  };

  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);

  // alert(functionsCounter);

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  );
};

export default Counter;
