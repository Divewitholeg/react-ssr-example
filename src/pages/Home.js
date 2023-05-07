import React from "react";
import { useState } from "react";

export const Home = () => {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  return (
    <>
      <h1>Home</h1>
      <h2>State Management</h2>
      <h3>Counter with useState</h3>
      <label>
        Increment by:
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        />
      </label>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + incrementBy)}>Increment</button>
    </>
  );
};
