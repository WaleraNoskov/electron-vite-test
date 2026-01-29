import { createSlice } from "@reduxjs/toolkit";
import {
  dynamicDetectorGainCalibration,
  dynamicDetectorOffsetCalibration,
  dynamicDetectorReconnect,
  setDynamicDetectorCalibrations,
} from "./thunks.ts";

export interface DynamicDetectorSettingsControlState {
  calibratingOffset: boolean;
  enablingOffsetCorrection: boolean;
  calibratingGain: boolean;
  enablingGainCorrection: boolean;
  reconnecting: boolean;
}

const initialState: DynamicDetectorSettingsControlState = {
  calibratingOffset: false,
  enablingOffsetCorrection: false,
  calibratingGain: false,
  enablingGainCorrection: false,
  reconnecting: false,
};

const slice = createSlice({
  name: "dynamicDetectorSettingsControl",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dynamicDetectorOffsetCalibration.pending, (state) => {
        state.calibratingOffset = true;
      })
      .addCase(dynamicDetectorOffsetCalibration.fulfilled, (state) => {
        state.calibratingOffset = false;
      })
      .addCase(dynamicDetectorOffsetCalibration.rejected, (state) => {
        state.calibratingOffset = false;
      })
      .addCase(dynamicDetectorGainCalibration.pending, (state) => {
        state.calibratingGain = true;
      })
      .addCase(dynamicDetectorGainCalibration.fulfilled, (state) => {
        state.calibratingGain = false;
      })
      .addCase(dynamicDetectorGainCalibration.rejected, (state) => {
        state.calibratingGain = false;
      })
      .addCase(setDynamicDetectorCalibrations.pending, (state) => {
        state.enablingOffsetCorrection = true;
        state.enablingGainCorrection = true;
      })
      .addCase(setDynamicDetectorCalibrations.fulfilled, (state) => {
        state.enablingOffsetCorrection = false;
        state.enablingGainCorrection = false;
      })
      .addCase(setDynamicDetectorCalibrations.rejected, (state) => {
        state.enablingOffsetCorrection = false;
        state.enablingGainCorrection = false;
      })
      .addCase(dynamicDetectorReconnect.pending, (state) => {
        state.reconnecting = true;
      })
      .addCase(dynamicDetectorReconnect.fulfilled, (state) => {
        state.reconnecting = false;
      })
      .addCase(dynamicDetectorReconnect.rejected, (state) => {
        state.reconnecting = false;
      });
  },
});

export const dynamicDetectorSettingsControlReducer = slice.reducer;
