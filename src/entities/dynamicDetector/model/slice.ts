import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DynamicDetectorMode {
  id: number;
  exposure: number;
  gain: number;
  isOffsetCalibrationExist: boolean;
  isOffsetCalibrationEnabled: boolean;
  isOffsetCalibrationApplied: boolean;
  isGainCalibrationExist: boolean;
  isGainCalibrationEnabled: boolean;
  isGainCalibrationApplied: boolean;
}

export interface DynamicDetectorState {
  name: string;
  connected: boolean;
  currentMode: DynamicDetectorMode;
  isOffsetCalibrating: boolean;
  isGainCalibrating: boolean;
  isReconnecting: boolean;
}

const initialState: DynamicDetectorState = {
  name: "Неизвестный детектор",
  connected: false,
  currentMode: {
    id: 0,
    exposure: 0,
    gain: 0,
    isOffsetCalibrationExist: false,
    isOffsetCalibrationEnabled: false,
    isOffsetCalibrationApplied: false,
    isGainCalibrationExist: false,
    isGainCalibrationEnabled: false,
    isGainCalibrationApplied: false,
  },
  isOffsetCalibrating: false,
  isGainCalibrating: false,
  isReconnecting: false,
};

const dynamicDetectorSlice = createSlice({
  name: "detector",
  initialState,
  reducers: {
    nameChanged: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    modeChanged: (state, action: PayloadAction<DynamicDetectorMode>) => {
      state.currentMode = action.payload;
    },
    connectedChanged: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
    isOffsetCalibratingChanged: (state, action: PayloadAction<boolean>) => {
      state.isOffsetCalibrating = action.payload;
    },
    isGainCalibrationChanged: (state, action: PayloadAction<boolean>) => {
      state.isGainCalibrating = action.payload;
    },
    isReconnectingChanged: (state, action: PayloadAction<boolean>) => {
      state.isReconnecting = action.payload;
    },
  },
});

export const {
  nameChanged,
  modeChanged,
  connectedChanged,
  isOffsetCalibratingChanged,
  isGainCalibrationChanged,
  isReconnectingChanged,
} = dynamicDetectorSlice.actions;
dynamicDetectorSlice.actions;
export const detectorReducer = dynamicDetectorSlice.reducer;
