import { RootState } from "../../../application/store.ts";

export const selectIsOffsetCalibrating = (state: RootState) =>
  state.dynamicDetectorSettingsControl.calibratingOffset;

export const selectIsEnablingOffset = (state: RootState) =>
  state.dynamicDetectorSettingsControl.enablingOffsetCorrection;

export const selectIsGainCalibrating = (state: RootState) =>
  state.dynamicDetectorSettingsControl.calibratingGain;

export const selectIsEnablingGain = (state: RootState) =>
  state.dynamicDetectorSettingsControl.enablingGainCorrection;

export const selectIsReconnecting = (state: RootState) =>
  state.dynamicDetectorSettingsControl.reconnecting;
