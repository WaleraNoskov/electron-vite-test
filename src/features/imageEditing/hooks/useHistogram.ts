import { useAppDispatch, useAppSelector } from "../../../application/hooks.ts";
import {
  selectImageEditingState,
  selectImageProcessingState,
} from "../model/selectors.ts";
import { trySetAutoHistogram } from "../model/thunks.ts";

export function useHistogram() {
  const dispatch = useAppDispatch();
  const imageEditingState = useAppSelector(selectImageEditingState);
  const imageProcessingState = useAppSelector(selectImageProcessingState);

  const setAutoHistogramEnabled = async (enabled: boolean) => {
    await dispatch(trySetAutoHistogram(enabled));
  };

  return {
    histogram: imageEditingState.histogram,
    autoHistogramEnabled: imageEditingState.autoHistogramEnabled,
    setAutoHistogramEnabled: setAutoHistogramEnabled,
    isChangingParameters: imageProcessingState.isChangingParameters,
  };
}

export class useHistogramReducer {}
