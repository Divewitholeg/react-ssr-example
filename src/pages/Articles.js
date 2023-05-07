import React from "react";
import { CounterButtonRecoil } from "../CounterButtonRecoil";
import { RecoilRoot } from "recoil";

export const Articles = () => {
  return (
    <RecoilRoot>
      <h1>Articles</h1>
      <h2>Implement Counter with Recoil</h2>
      <CounterButtonRecoil />
    </RecoilRoot>
  );
};
