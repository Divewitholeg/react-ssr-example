import { useRecoilValue } from "recoil";
import React from "react";
import { counterState } from "./counterState";

export const DisplayRecoilValue = () => {
  const counter = useRecoilValue(counterState);
  return <div>Counter: {counter}</div>;
};
