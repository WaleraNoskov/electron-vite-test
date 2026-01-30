import {
  Frame,
  changeCurrentFrame,
  changeFilter,
  changeIsSettingsChanging,
} from "../../../entities/imageProcessing";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../application/store.ts";
import { UpdateOutputPipelineInputDto } from "../../../shared/api/dto";
import { imageEditingApi } from "../../../shared/api/rest/model/imageEditingApi.ts";
import { setHistogram } from "./slice.ts";

export const imageEditingFrameReceived = createAsyncThunk<void, Frame>(
  "imageEditing/imageProcessingFrameReceived",
  // eslint-disable-next-line @typescript-eslint/require-await
  async (frame, { dispatch, getState }) => {
    const state = getState() as RootState;

    if (!state.imageProcessing.isOnline) return;

    dispatch(changeCurrentFrame(frame));

    const histogram = calculateHistogramBinned(frame.array);
    dispatch(setHistogram(histogram));
  },
);

export const trySetFilter = createAsyncThunk<
  void,
  UpdateOutputPipelineInputDto
>("imageEditing/trySetFilter", async (dto, { dispatch }) => {
  try {
    dispatch(changeIsSettingsChanging(true));
    await imageEditingApi.updateOutputPipeline(dto);

    dispatch(changeFilter(dto.filter));
  } finally {
    dispatch(changeIsSettingsChanging(false));
  }
});

function calculateHistogramBinned(data: Uint16Array, bins = 256): Uint32Array {
  const histogram = new Uint32Array(bins);
  const maxValue = 65535;
  const binSize = (maxValue + 1) / bins;

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < data.length; i++) {
    const bin = Math.min(bins - 1, Math.floor(data[i] / binSize));
    histogram[bin]++;
  }

  return histogram;
}
