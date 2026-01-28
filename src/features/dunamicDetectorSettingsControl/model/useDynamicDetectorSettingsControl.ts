import { useAppDispatch } from "../../../application/hooks.ts";
import {
  dynamicDetectorOffsetCalibration,
  dynamicDetectorReconnect,
} from "./thunks.ts";
import {
  isOffsetCalibratingChanged,
  isReconnectingChanged,
} from "../../../entities/dynamicDetector";

export function useDynamicDetectorSettingsControl() {
  const dispatch = useAppDispatch();

  const offsetCalibration = async () => {
    dispatch(isOffsetCalibratingChanged(true));

    await dispatch(dynamicDetectorOffsetCalibration());

    dispatch(isOffsetCalibratingChanged(false));
  };

  const reconnect = async () => {
    dispatch(isReconnectingChanged(true));

    await dispatch(dynamicDetectorReconnect());

    dispatch(isReconnectingChanged(false));
  };

  return { offsetCalibration, reconnect };
}
