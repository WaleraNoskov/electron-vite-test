import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface imageEditingState {
  histogram: Uint32Array<ArrayBufferLike>;
}

const initialState: imageEditingState = {
  histogram: new Uint32Array(),
};

const imageEditingSlice = createSlice({
  name: "imageEditing",
  initialState,
  reducers: {
    setHistogram: (state, action: PayloadAction<Uint32Array>) => {
      state.histogram = action.payload;
    },
  },
});

export const { setHistogram } = imageEditingSlice.actions;
export const imageEditingReducer = imageEditingSlice.reducer;
