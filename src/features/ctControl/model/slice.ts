import { createSlice } from "@reduxjs/toolkit";
import {
  tryContinue,
  tryEmergencyStop,
  tryFetchSettings,
  tryFetchState,
  tryMoveHome,
  tryPause,
  tryRestore,
  tryStart,
  tryStartSession,
} from "./thunks.ts";

export interface CtControlState {
  isLoading: boolean;
}

const initialState: CtControlState = {
  isLoading: false,
};

const slice = createSlice({
  name: "ctControl",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(tryFetchState.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tryFetchState.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(tryFetchState.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(tryFetchSettings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tryFetchSettings.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(tryFetchSettings.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(tryStartSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tryStartSession.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(tryStartSession.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(tryStart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tryStart.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(tryStart.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(tryEmergencyStop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tryEmergencyStop.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(tryEmergencyStop.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(tryPause.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tryPause.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(tryPause.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(tryContinue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tryContinue.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(tryContinue.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(tryMoveHome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tryMoveHome.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(tryMoveHome.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(tryRestore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tryRestore.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(tryRestore.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const ctControlReducer = slice.reducer;
