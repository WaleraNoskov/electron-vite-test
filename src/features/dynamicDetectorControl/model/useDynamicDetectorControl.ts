import { useAppDispatch } from "../../../application/hooks.ts";
import {
  changeDynamicDetectorExposure,
  changeDynamicDetectorGain,
} from "./thunks.ts";
import { isChangingSettingsChanged } from "../../../entities/dynamicDetector";

export function useDynamicDetectorControl() {
  const dispatch = useAppDispatch();

  const setExposure = async (value: number) => {
    dispatch(isChangingSettingsChanged(true));
    await dispatch(changeDynamicDetectorExposure(value));
    dispatch(isChangingSettingsChanged(false));
  };

  const setGain = async (value: number) => {
    dispatch(isChangingSettingsChanged(true));
    await dispatch(changeDynamicDetectorGain(value));
    dispatch(isChangingSettingsChanged(false));
  };
  return { setExposure, setGain };
}
