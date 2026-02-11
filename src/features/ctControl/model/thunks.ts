import { createAsyncThunk } from "@reduxjs/toolkit";
import { CtSettingsDto } from "../../../shared/api/dto";
import { ctApi } from "../../../shared/api/rest/model/ctApi.ts";
import {
  setDoneSteps,
  setStatus,
  setStepIds,
  setTotalSteps,
  setType,
} from "../../../entities/ct";

export const tryFetchState = createAsyncThunk(
  "ct/fetchState",
  async (_, { dispatch }) => {
    try {
      const state = await ctApi.getState();
      dispatch(setStatus(state.status));
      dispatch(setType(state.type));
      dispatch(setDoneSteps(state.stepsDone));
      dispatch(setTotalSteps(state.totalSteps));
      dispatch(setStepIds(state.stepIds));
    } catch (error) {
      console.error(error);
    }
  },
);

export const tryFetchSettings = createAsyncThunk(
  "ct/fetchSettings",
  async (_, { dispatch }) => {
    try {
      const settings = await ctApi.getSettings();
      dispatch(setType(settings.type));
      dispatch(setTotalSteps(settings.steps));
    } catch (error) {
      console.log(error);
    }
  },
);

export const trySetSettings = createAsyncThunk<void, CtSettingsDto>(
  "ct/setSettings",
  async (settings) => {
    try {
      await ctApi.setSettings(settings);
    } catch (error) {
      console.error(error);
    }
  },
);

export const tryStartSession = createAsyncThunk<void, CtSettingsDto>(
  "ct/startSession",
  async (settings) => {
    try {
      await ctApi.startSession(settings);
    } catch (error) {
      console.error(error);
    }
  },
);

export const tryStart = createAsyncThunk("ct/start", async () => {
  try {
    await ctApi.start();
  } catch (error) {
    console.error(error);
  }
});

export const tryEmergencyStop = createAsyncThunk(
  "ct/emergencyStop",
  async () => {
    try {
      await ctApi.emergencyStop();
    } catch (error) {
      console.error(error);
    }
  },
);

export const tryPause = createAsyncThunk("ct/pause", async () => {
  try {
    await ctApi.pause();
  } catch (error) {
    console.error(error);
  }
});

export const tryContinue = createAsyncThunk("ct/continue", async () => {
  try {
    await ctApi.continue();
  } catch (error) {
    console.error(error);
  }
});

export const tryMoveHome = createAsyncThunk("ct/moveHome", async () => {
  try {
    await ctApi.moveHome();
  } catch (error) {
    console.error(error);
  }
});

export const tryRestore = createAsyncThunk("ct/restore", async () => {
  try {
    await ctApi.restore();
  } catch (error) {
    console.error(error);
  }
});
