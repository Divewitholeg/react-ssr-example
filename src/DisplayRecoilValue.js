import { useRecoilValue } from "recoil";
import React from "react";
import { numberOfClicksSelector } from "./numberOfClicksSelector";

export const DisplayRecoilValue = () => {
  const clicksData = useRecoilValue(numberOfClicksSelector);
  return (
    <>
      <div>Counter: {clicksData}</div>
    </>
  );
};
