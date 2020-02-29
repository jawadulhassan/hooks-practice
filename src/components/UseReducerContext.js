import React, { useReducer, useContext, createContext } from "react";

const initialState = {
  counter: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

const CounterContext = createContext();

function UseReducerContext() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider
      value={{ counter: state.counter, dispatchCounter: dispatch }}
    >
      <ContextConsumerFunction />
    </CounterContext.Provider>
  );
}

function ContextConsumerFunction() {
  const context = useContext(CounterContext);
  return (
    <>
      <div onClick={() => context.dispatchCounter({ type: "INCREMENT" })}>
        +
      </div>
      <h1>{context.counter}</h1>
      <div onClick={() => context.dispatchCounter({ type: "DECREMENT" })}>
        -
      </div>
    </>
  );
}

export default UseReducerContext;
