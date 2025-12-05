import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetectorState } from "./types";

const initialState: DetectorState = {
  name: "Неизвестный детектор",
  connected: false,
  exposure: 0,
  gain: 0,
  image: null,
};

export const detectorSlice = createSlice({
  name: "detector",
  initialState,
  reducers: {
    setExposure(
      state: DetectorState,
      action: PayloadAction<DetectorState["exposure"]>,
    ) {
      state.exposure = action.payload;
    },
    setGain(
      state: DetectorState,
      action: PayloadAction<DetectorState["gain"]>,
    ) {
      state.gain = action.payload;
    },
    setConnected(state: DetectorState, action: PayloadAction<boolean>) {
      state.connected = action.payload;
    },
    setName(state: DetectorState, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setExposure, setGain, setConnected, setName } =
  detectorSlice.actions;
export default detectorSlice.reducer;
