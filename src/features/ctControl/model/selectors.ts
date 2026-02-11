import { RootState } from "../../../application/store.ts";

export const selectCtState = (state: RootState) => state.ct;
export const selectCtControlState = (state: RootState) => state.ctControl;
