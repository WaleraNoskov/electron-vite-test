import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetectorImageState } from "./types";

const initialState: DetectorImageState = {
  width: 0,
  height: 0,
  lastFrameId: 0,
  fps: 0,
};

export const detectorImageSlice = createSlice({
  name: "detectorImageSlice",
  initialState,
  reducers: {
    setFrameId(
      state: DetectorImageState,
      action: PayloadAction<DetectorImageState["lastFrameId"]>,
    ) {
      state.lastFrameId = action.payload;
    },
    setWidth(
      state: DetectorImageState,
      action: PayloadAction<DetectorImageState["width"]>,
    ) {
      state.width = action.payload;
    },
    setHeight(
      state: DetectorImageState,
      action: PayloadAction<DetectorImageState["height"]>,
    ) {
      state.height = action.payload;
    },
    setFps(
      state: DetectorImageState,
      action: PayloadAction<DetectorImageState["fps"]>,
    ) {
      state.fps = action.payload;
    },
  },
});

export const { setFrameId, setWidth, setHeight, setFps } =
  detectorImageSlice.actions;
export default detectorImageSlice.reducer;
