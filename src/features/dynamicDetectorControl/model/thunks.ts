import { createAsyncThunk } from "@reduxjs/toolkit";
import { detectorApi } from "../../../shared/api/rest";
import {
  connectedChanged,
  exposureChanged,
  gainChanged,
  nameChanged,
} from "../../../entities/dynamicDetector";

export const changeDynamicDetectorExposure = createAsyncThunk<void, number>(
  "dynamicDetectorControl/ChangeExposure",
  async (exposure, { dispatch }) => {
    await detectorApi.setExposure(exposure);
    dispatch(exposureChanged(exposure));
  },
);

export const changeDynamicDetectorGain = createAsyncThunk<void, number>(
  "dynamicDetectorControl/ChangeGain",
  async (gain, { dispatch }) => {
    await detectorApi.setGain(gain);
    dispatch(gainChanged(gain));
  },
);

export const fetchDynamicDetectorState = createAsyncThunk(
  "dynamicDetectorControl/FetchState",
  async (_, { dispatch }) => {
    const state = await detectorApi.getState();

    if (!state) return;

    dispatch(nameChanged(state.name));
    dispatch(exposureChanged(state.exposure));
    dispatch(gainChanged(state.gain));
    dispatch(connectedChanged(state.connected));
  },
);
