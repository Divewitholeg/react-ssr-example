import React from "react";
import { CounterButton } from "../CounterButton";
import { CounterProvider } from "../CounterProvider";

export const About = () => {
  return (
    <CounterProvider>
      <h1>About</h1>
      <h2>Implement Counter with useContext hook</h2>
      <CounterButton />
    </CounterProvider>
  );
};
