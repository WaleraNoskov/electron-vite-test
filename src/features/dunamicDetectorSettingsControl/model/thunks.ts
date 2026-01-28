import { createAsyncThunk } from "@reduxjs/toolkit";
import { detectorApi } from "../../../shared/api/rest";
import { SetCalibrationsDto } from "../../../shared/api/dto";

export const dynamicDetectorOffsetCalibration = createAsyncThunk(
  "dynamicDetectorControl/offsetCalibration",
  async () => {
    await detectorApi.offsetCalibration();
  },
);

export const dynamicDetectorGainCalibration = createAsyncThunk(
  "dynamicDetectorControl/offsetCalibration",
  async () => {
    await detectorApi.gainCalibration();
  },
);

export const setDynamicDetectorCalibrations = createAsyncThunk<
  void,
  SetCalibrationsDto
>("dynamicDetectorControl/setDynamicDetectorCalibrations", async (dto) => {
  await detectorApi.setCalibrations(dto);
});

export const dynamicDetectorReconnect = createAsyncThunk(
  "dynamicDetectorControl/reconnect",
  async () => {
    await detectorApi.reconnect();
  },
);
