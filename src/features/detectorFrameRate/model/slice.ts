import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FrameRateState {
  timestamps: number[]; // последние 3–5
  fps: number;
}

const initialState: FrameRateState = {
  timestamps: [],
  fps: 0,
};

const frameRateSlice = createSlice({
  name: "detectorFrameRate",
  initialState,
  reducers: {
    frameReceived(state, action: PayloadAction<{ timestamp: number }>) {
      state.timestamps.push(action.payload.timestamp);

      if (state.timestamps.length > 2) {
        state.timestamps.shift();
      }

      if (state.timestamps.length >= 2) {
        const delta = state.timestamps[1] - state.timestamps[0];

        state.fps = 1000 / delta;
      }
    },

    resetFrameRate(state) {
      state.timestamps = [];
      state.fps = 0;
    },
  },
});

export const { frameReceived, resetFrameRate } = frameRateSlice.actions;
export const detectorFrameRateReducer = frameRateSlice.reducer;
