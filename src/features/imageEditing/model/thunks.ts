import { Frame, changeCurrentFrame } from "../../../entities/imageProcessing";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../application/store.ts";

export const imageEditingFrameReceived = createAsyncThunk<void, Frame>(
  "imageEditing/imageProcessingFrameReceived",
  // eslint-disable-next-line @typescript-eslint/require-await
  async (frame, { dispatch, getState }) => {
    const state = getState() as RootState;

    if (state.imageProcessing.isOnline) {
      dispatch(changeCurrentFrame(frame));
    }
  },
);
