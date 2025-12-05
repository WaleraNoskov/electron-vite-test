import { configureStore } from "@reduxjs/toolkit";
import detectorReducer from "../entities/detector/model/detectorSlice.ts";
import detectorImageReducer from "../entities/detector-image/model/detectorImageSlice.ts";
import { initSignalrListeners } from "../shared/api/init.ts";

export const store = configureStore({
  reducer: {
    detector: detectorReducer,
    detectorImage: detectorImageReducer,
  },
});

initSignalrListeners(store);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
