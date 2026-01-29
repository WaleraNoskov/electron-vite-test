import { useAppDispatch } from "../../../application/hooks.ts";
import {
  changeDynamicDetectorExposure,
  changeDynamicDetectorGain,
} from "./thunks.ts";
import { changeIsSettingsChanging } from "../../../entities/dynamicDetector";

export function useDynamicDetectorControl() {
  const dispatch = useAppDispatch();

  const setExposure = async (value: number) => {
    dispatch(changeIsSettingsChanging(true));
    await dispatch(changeDynamicDetectorExposure(value));
    dispatch(changeIsSettingsChanging(false));
  };

  const setGain = async (value: number) => {
    dispatch(changeIsSettingsChanging(true));
    await dispatch(changeDynamicDetectorGain(value));
    dispatch(changeIsSettingsChanging(false));
  };
  return { setExposure, setGain };
}
