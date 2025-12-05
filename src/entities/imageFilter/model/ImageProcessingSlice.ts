import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters, ImageProcessingState } from "./types.ts";

const initialState: ImageProcessingState = {
  filter: Filters.None,
};

export const imageProcessingSlice = createSlice({
  name: "imageFilterSlice",
  initialState,
  reducers: {
    setFilter(
      state: ImageProcessingState,
      action: PayloadAction<ImageProcessingState["filter"]>,
    ) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = imageProcessingSlice.actions;
export default imageProcessingSlice.reducer;
