import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DetectorState {
  name: string;
  connected: boolean;
  exposure: number;
  gain: number;
}

const initialState: DetectorState = {
  name: "Vivix T43-43",
  connected: false,
  exposure: 1000,
  gain: 2,
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
