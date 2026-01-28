import { configureStore } from "@reduxjs/toolkit";
import { detectorReducer } from "../entities/dynamicDetector";
import { initSignalrListeners } from "../shared/api/signalr/model/init.ts";

export const store = configureStore({
  reducer: {
    dynamicDetector: detectorReducer,
  },
});

initSignalrListeners(store);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
