import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DynamicDetectorState {
  name: string;
  exposure: number;
  gain: number;
  connected: boolean;
}

const initialState: DynamicDetectorState = {
  name: "Неизвестный детектор",
  exposure: 0,
  gain: 0,
  connected: false,
};

const dynamicDetectorSlice = createSlice({
  name: "detector",
  initialState,
  reducers: {
    nameChanged: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    exposureChanged: (state, action: PayloadAction<number>) => {
      state.exposure = action.payload;
    },
    gainChanged: (state, action: PayloadAction<number>) => {
      state.gain = action.payload;
    },
    connectedChanged: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
  },
});

export const { nameChanged, exposureChanged, gainChanged, connectedChanged } =
  dynamicDetectorSlice.actions;
export const detectorReducer = dynamicDetectorSlice.reducer;
