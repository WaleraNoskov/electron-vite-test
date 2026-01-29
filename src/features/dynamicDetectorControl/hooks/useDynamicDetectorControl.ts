import { useAppDispatch } from "../../../application/hooks.ts";
import {
  changeDynamicDetectorExposure,
  changeDynamicDetectorGain,
} from "../model/thunks.ts";

export function useDynamicDetectorControl() {
  const dispatch = useAppDispatch();

  const setExposure = async (value: number) =>
    await dispatch(changeDynamicDetectorExposure(value));

  const setGain = async (value: number) =>
    await dispatch(changeDynamicDetectorGain(value));

  return { setExposure, setGain };
}
