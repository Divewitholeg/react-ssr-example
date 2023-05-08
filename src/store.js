import { createStore, combineReducers, legacy_createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { numberOfClicksReducer } from "./reducers";

const rootReducer = combineReducers({
  numberOfClicks: numberOfClicksReducer,
});

export const store = legacy_createStore(rootReducer);
