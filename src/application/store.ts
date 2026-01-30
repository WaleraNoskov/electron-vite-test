import { configureStore } from "@reduxjs/toolkit";
import { dynamicDetectorReducer } from "../entities/dynamicDetector";
import { initSignalrListeners } from "../shared/api/signalr/model/init.ts";
import { FrameStore } from "../shared/services/frameBuffer";
import { imageProcessingReducer } from "../entities/imageProcessing";
import { dynamicDetectorSettingsControlReducer } from "../features/dunamicDetectorSettingsControl/model/slice.ts";
import { imageEditingReducer } from "../features/imageEditing";

export const store = configureStore({
  reducer: {
    //core reducers
    dynamicDetector: dynamicDetectorReducer,
    imageProcessing: imageProcessingReducer,

    //feature reducers
    dynamicDetectorSettingsControl: dynamicDetectorSettingsControlReducer,
    imageEditing: imageEditingReducer,
  },
});

initSignalrListeners(store);
export const frameStore = new FrameStore();

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
