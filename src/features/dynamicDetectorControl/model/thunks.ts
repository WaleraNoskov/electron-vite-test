import { createAsyncThunk } from "@reduxjs/toolkit";
import { detectorApi } from "../../../shared/api/rest";
import {
  changeConnected,
  changeMode,
  changeName,
} from "../../../entities/dynamicDetector";

export const changeDynamicDetectorExposure = createAsyncThunk<void, number>(
  "dynamicDetectorControl/ChangeExposure",
  async (exposure) => {
    await detectorApi.setExposure(exposure);
  },
);

export const changeDynamicDetectorGain = createAsyncThunk<void, number>(
  "dynamicDetectorControl/ChangeGain",
  async (gain) => {
    await detectorApi.setGain(gain);
  },
);

export const fetchDynamicDetectorState = createAsyncThunk(
  "dynamicDetectorControl/FetchState",
  async (_, { dispatch }) => {
    const state = await detectorApi.getState();

    if (!state) return;

    dispatch(changeName(state.name));
    dispatch(changeConnected(state.connected));
    dispatch(changeMode(state.currentMode));
  },
);
