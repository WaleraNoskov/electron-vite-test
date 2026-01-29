import {
  Frame,
  changeCurrentFrame,
  changeFilter,
} from "../../../entities/imageProcessing";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../application/store.ts";
import { UpdateOutputPipelineInputDto } from "../../../shared/api/dto";
import { imageEditingApi } from "../../../shared/api/rest/model/imageEditingApi.ts";

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

export const trySetFilter = createAsyncThunk<
  void,
  UpdateOutputPipelineInputDto
>("imageEditing/trySetFilter", async (dto, { dispatch }) => {
  await imageEditingApi.updateOutputPipeline(dto);

  dispatch(changeFilter(dto.filter));
});
