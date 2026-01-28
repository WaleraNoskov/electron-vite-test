import { RootState } from "../../../application/store";

export const selectDetectorFrameRateState = (state: RootState) =>
  state.detectorFrameRate;

export const selectDetectorFps = (state: RootState) =>
  state.detectorFrameRate.fps;
