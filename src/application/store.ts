import { configureStore } from "@reduxjs/toolkit";
import detectorReducer from "../entities/detector/model/detectorSlice";

export const store = configureStore({
  reducer: {
    detector: detectorReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
