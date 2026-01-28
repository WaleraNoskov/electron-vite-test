import { createAsyncThunk } from "@reduxjs/toolkit";
import { detectorApi } from "../../../shared/api/rest";

export const dynamicDetectorOffsetCalibration = createAsyncThunk(
  "dynamicDetectorControl/offsetCalibration",
  async () => {
    await detectorApi.offsetCalibration();
  },
);

export const dynamicDetectorReconnect = createAsyncThunk(
  "dynamicDetectorControl/reconnect",
  async () => {
    await detectorApi.reconnect();
  },
);
