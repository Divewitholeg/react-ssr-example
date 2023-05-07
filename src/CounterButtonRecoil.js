import React from "react";

import { useRecoilState } from "recoil";
import { counterState } from "./counterState";
import { incrementByState } from "./incrementByState";

export const CounterButtonRecoil = () => {
  const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

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
      <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>
        Increment
      </button>
    </>
  );
};
