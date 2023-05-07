import React from "react";
import { CounterContext } from "./CounterContext";
import { useContext } from "react";

export const CounterButton = () => {
  const { numberOfClicks, increment, incrementBy, setIncrementBy } =
    useContext(CounterContext);
  return (
    <>
      <label>
        Increment by:
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        />
      </label>
      <p>Count: {numberOfClicks}</p>
      <button onClick={() => increment(incrementBy)}>Increment</button>
    </>
  );
};
