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
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeMode: (state, action: PayloadAction<DynamicDetectorMode>) => {
      state.currentMode = action.payload;
    },
    changeConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
    changeIsSettingsChanging: (state, action: PayloadAction<boolean>) => {
      state.isChangingSettings = action.payload;
    },
  },
});

export const {
  changeName,
  changeMode,
  changeConnected,
  changeIsSettingsChanging,
} = dynamicDetectorSlice.actions;
dynamicDetectorSlice.actions;
export const dynamicDetectorReducer = dynamicDetectorSlice.reducer;
