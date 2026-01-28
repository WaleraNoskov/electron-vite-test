import { useAppDispatch } from "../../../application/hooks.ts";
import {
  dynamicDetectorGainCalibration,
  dynamicDetectorOffsetCalibration,
  dynamicDetectorReconnect,
  setDynamicDetectorCalibrations,
} from "./thunks.ts";
import { isChangingSettingsChanged } from "../../../entities/dynamicDetector";

export function useDynamicDetectorSettingsControl() {
  const dispatch = useAppDispatch();

  const offsetCalibration = async () => {
    dispatch(isChangingSettingsChanged(true));

    await dispatch(dynamicDetectorOffsetCalibration());

    dispatch(isChangingSettingsChanged(false));
  };

  const gainCalibration = async () => {
    dispatch(isChangingSettingsChanged(true));

    await dispatch(dynamicDetectorGainCalibration());

    dispatch(isChangingSettingsChanged(false));
  };

  const setCalibrations = async (
    enableOffset: boolean,
    enableGain: boolean,
  ) => {
    dispatch(isChangingSettingsChanged(true));

    await dispatch(
      setDynamicDetectorCalibrations({ enableOffset, enableGain }),
    );

    dispatch(isChangingSettingsChanged(false));
  };

  const reconnect = async () => {
    dispatch(isChangingSettingsChanged(true));

    await dispatch(dynamicDetectorReconnect());

    dispatch(isChangingSettingsChanged(false));
  };

  return { offsetCalibration, gainCalibration, setCalibrations, reconnect };
}
