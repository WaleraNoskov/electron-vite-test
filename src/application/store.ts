import { configureStore } from "@reduxjs/toolkit";
import detectorReducer from "../entities/detector/detectorSlice.ts";
import { detectorService } from "../entities/detector/detectorService.ts";

export const store = configureStore({
  reducer: {
    detector: detectorReducer,
  },
});

detectorService.init(store);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
