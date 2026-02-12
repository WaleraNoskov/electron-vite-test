import { RootState } from "../../../application/store.ts";

export const selectCtState = (state: RootState) => state.ct;
export const selectCtControlState = (state: RootState) => state.ctControl;
export const selectCtProgress = (state: RootState) =>
  Math.round((state.ct.stepsDone / state.ct.totalSteps) * 100);
