import { RootState } from "../../../application/store.ts";

export const selectImageProcessingState = (state: RootState) =>
  state.imageProcessing;
