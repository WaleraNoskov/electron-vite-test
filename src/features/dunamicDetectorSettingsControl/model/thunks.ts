import { createAsyncThunk } from "@reduxjs/toolkit";
import { detectorApi } from "../../../shared/api/rest";
import { SetCalibrationsDto } from "../../../shared/api/dto";
import { isChangingSettingsChanged } from "../../../entities/dynamicDetector";

export const dynamicDetectorOffsetCalibration = createAsyncThunk(
  "dynamicDetectorControl/offsetCalibration",
  async (_, { dispatch }) => {
    dispatch(isChangingSettingsChanged(true));

    try {
      await detectorApi.offsetCalibration();
    } finally {
      dispatch(isChangingSettingsChanged(false));
    }
  },
);

export const dynamicDetectorGainCalibration = createAsyncThunk(
  "dynamicDetectorControl/gainCalibration",
  async (_, { dispatch }) => {
    dispatch(isChangingSettingsChanged(true));

    try {
      await detectorApi.gainCalibration();
    } finally {
      dispatch(isChangingSettingsChanged(false));
    }
  },
);

export const setDynamicDetectorCalibrations = createAsyncThunk<
  void,
  SetCalibrationsDto
>(
  "dynamicDetectorControl/setDynamicDetectorCalibrations",
  async (dto, { dispatch }) => {
    dispatch(isChangingSettingsChanged(true));

    try {
      await detectorApi.setCalibrations(dto);
    } finally {
      dispatch(isChangingSettingsChanged(false));
    }
  },
);

export const dynamicDetectorReconnect = createAsyncThunk(
  "dynamicDetectorControl/reconnect",
  async (_, { dispatch }) => {
    dispatch(isChangingSettingsChanged(true));

    try {
      await detectorApi.reconnect();
    } finally {
      dispatch(isChangingSettingsChanged(false));
    }
  },
);
