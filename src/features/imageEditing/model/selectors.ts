import { RootState } from "../../../application/store.ts";

export const selectImageProcessingState = (state: RootState) =>
  state.imageProcessing;

export const selectImageEditingState = (state: RootState) => {
  return state.imageEditing;
};
