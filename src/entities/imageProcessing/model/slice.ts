import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Frame } from "./types.ts";

export interface ImageProcessingState {
  isOnline: boolean;
  frame: Frame | null;
}

const initialState: ImageProcessingState = {
  isOnline: false,
  frame: null,
};

const imageProcessingSlice = createSlice({
  name: "imageProcessing",
  initialState,
  reducers: {
    isOnlineChanged: (
      state: ImageProcessingState,
      action: PayloadAction<boolean>,
    ) => {
      state.isOnline = action.payload;
    },

    imageChanged: (
      state: ImageProcessingState,
      action: PayloadAction<Frame>,
    ) => {
      state.frame = action.payload;
    },
  },
});

export const { isOnlineChanged, imageChanged } = imageProcessingSlice.actions;
export const imageProcessingReducer = imageProcessingSlice.reducer;
