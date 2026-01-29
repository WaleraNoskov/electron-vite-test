import { createAsyncThunk } from "@reduxjs/toolkit";
import { detectorApi } from "../../../shared/api/rest";
import {
  changeConnected,
  changeIsSettingsChanging,
  changeMode,
  changeName,
} from "../../../entities/dynamicDetector";

export const changeDynamicDetectorExposure = createAsyncThunk<void, number>(
  "dynamicDetectorControl/ChangeExposure",
  async (exposure, { dispatch }) => {
    dispatch(changeIsSettingsChanging(true));
    await detectorApi.setExposure(exposure);
    dispatch(changeIsSettingsChanging(false));
  },
);

export const changeDynamicDetectorGain = createAsyncThunk<void, number>(
  "dynamicDetectorControl/ChangeGain",
  async (gain, { dispatch }) => {
    dispatch(changeIsSettingsChanging(true));
    await detectorApi.setGain(gain);
    dispatch(changeIsSettingsChanging(false));
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
