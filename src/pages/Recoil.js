import React from "react";
import { CounterButtonRecoil } from "../CounterButtonRecoil";
import { RecoilRoot } from "recoil";
import { DisplayRecoilValue } from "../DisplayRecoilValue";

export const Recoil = () => {
  return (
    <RecoilRoot>
      <h1>Articles</h1>
      <DisplayRecoilValue />
      <h2>Implement Counter with Recoil</h2>
      <CounterButtonRecoil />
    </RecoilRoot>
  );
};
