import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Frame } from "./types.ts";

export interface ImageProcessingState {
  isOnline: boolean;
  frame: Frame | null;
  filter: number;
}

const initialState: ImageProcessingState = {
  isOnline: true,
  frame: null,
  filter: 0,
};

const imageProcessingSlice = createSlice({
  name: "imageProcessing",
  initialState,
  reducers: {
    changeIsOnline: (
      state: ImageProcessingState,
      action: PayloadAction<boolean>,
    ) => {
      state.isOnline = action.payload;
    },

    changeCurrentFrame: (
      state: ImageProcessingState,
      action: PayloadAction<Frame>,
    ) => {
      state.frame = action.payload;
    },

    changeFilter: (
      state: ImageProcessingState,
      action: PayloadAction<number>,
    ) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter, changeIsOnline, changeCurrentFrame } =
  imageProcessingSlice.actions;
export const imageProcessingReducer = imageProcessingSlice.reducer;
