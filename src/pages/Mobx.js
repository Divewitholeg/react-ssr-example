import React from "react";
import { CounterButtonMobx } from "../CounterButtonMobx";
import { Counter } from "../Counter";

const counter = new Counter();

export const Mobx = () => {
  return (
    <>
      <h1>Mobx</h1>
      <CounterButtonMobx counter={counter} />
    </>
  );
};
