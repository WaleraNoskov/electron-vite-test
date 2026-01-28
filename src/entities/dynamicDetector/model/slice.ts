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
  isChangingSettings: boolean;
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
  isChangingSettings: false,
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
    isChangingSettingsChanged: (state, action: PayloadAction<boolean>) => {
      state.isChangingSettings = action.payload;
    },
  },
});

export const {
  nameChanged,
  modeChanged,
  connectedChanged,
  isChangingSettingsChanged,
} = dynamicDetectorSlice.actions;
dynamicDetectorSlice.actions;
export const detectorReducer = dynamicDetectorSlice.reducer;
