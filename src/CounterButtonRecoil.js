import React from "react";
import { numberOfClicksSelector } from "./numberOfClicksSelector";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "./counterState";
import { incrementByState } from "./incrementByState";

export const CounterButtonRecoil = () => {
  const numberOfClicks = useRecoilValue(numberOfClicksSelector);
  const [clicksData, setClicksData] = useRecoilState(counterState);
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
      <button
        onClick={() =>
          setClicksData([
            ...clicksData,
            { timestamp: Date.now(), amount: incrementBy },
          ])
        }
      >
        Increment
      </button>
    </>
  );
};
