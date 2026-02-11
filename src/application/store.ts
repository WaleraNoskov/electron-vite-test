import { configureStore } from "@reduxjs/toolkit";
import { dynamicDetectorReducer } from "../entities/dynamicDetector";
import {
  initCtSignalrListeners,
  initHardwareSignalrListeners,
} from "../shared/api/signalr";
import { FrameStore } from "../shared/services/frameBuffer";
import { imageProcessingReducer } from "../entities/imageProcessing";
import { dynamicDetectorSettingsControlReducer } from "../features/dunamicDetectorSettingsControl/model/slice.ts";
import { imageEditingReducer } from "../features/imageEditing";
import { ctReducer } from "../entities/ct";
import { ctControlReducer } from "../features/ctControl";

export const store = configureStore({
  reducer: {
    //core reducers
    dynamicDetector: dynamicDetectorReducer,
    imageProcessing: imageProcessingReducer,
    ct: ctReducer,

    //feature reducers
    dynamicDetectorSettingsControl: dynamicDetectorSettingsControlReducer,
    imageEditing: imageEditingReducer,
    ctControl: ctControlReducer,
  },
});

initHardwareSignalrListeners(store);
initCtSignalrListeners(store);

export const frameStore = new FrameStore();

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
