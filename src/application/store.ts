import { configureStore } from "@reduxjs/toolkit";
import detectorReducer from "../entities/detector/detectorSlice.ts";
import { detectorSignalrService } from "../entities/detector/detectorSignalrService.ts";

export const store = configureStore({
  reducer: {
    detector: detectorReducer,
  },
});

detectorSignalrService.init(store);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
