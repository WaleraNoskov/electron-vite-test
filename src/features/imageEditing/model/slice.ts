import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface imageEditingState {
  histogram: Uint32Array<ArrayBufferLike>;
  autoHistogramEnabled: boolean;
}

const initialState: imageEditingState = {
  histogram: new Uint32Array(),
  autoHistogramEnabled: false,
};

const imageEditingSlice = createSlice({
  name: "imageEditing",
  initialState,
  reducers: {
    setHistogram: (state, action: PayloadAction<Uint32Array>) => {
      state.histogram = action.payload;
    },
    setAutoHistogramEnabled: (state, action: PayloadAction<boolean>) => {
      state.autoHistogramEnabled = action.payload;
    },
  },
});

export const { setHistogram, setAutoHistogramEnabled } =
  imageEditingSlice.actions;
export const imageEditingReducer = imageEditingSlice.reducer;
