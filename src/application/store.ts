import { configureStore } from "@reduxjs/toolkit";
import { detectorReducer } from "../entities/dynamicDetector";
import { initSignalrListeners } from "../shared/api/signalr/model/init.ts";
import { FrameStore } from "../shared/services/frameBuffer";
import { detectorFrameRateReducer } from "../features/detectorFrameRate";

export const store = configureStore({
  reducer: {
    //core reducers
    dynamicDetector: detectorReducer,

    //feature reducers
    detectorFrameRate: detectorFrameRateReducer,
  },
});

initSignalrListeners(store);
export const frameStore = new FrameStore();

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
