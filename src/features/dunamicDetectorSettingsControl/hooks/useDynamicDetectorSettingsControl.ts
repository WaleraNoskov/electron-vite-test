import { useAppDispatch } from "../../../application/hooks.ts";
import {
  dynamicDetectorGainCalibration,
  dynamicDetectorOffsetCalibration,
  dynamicDetectorReconnect,
  setDynamicDetectorCalibrations,
} from "../model/thunks.ts";

export function useDynamicDetectorSettingsControl() {
  const dispatch = useAppDispatch();

  const offsetCalibration = async () => {
    await dispatch(dynamicDetectorOffsetCalibration());
  };

  const gainCalibration = async () => {
    await dispatch(dynamicDetectorGainCalibration());
  };

  const setCalibrations = async (
    enableOffset: boolean,
    enableGain: boolean,
  ) => {
    await dispatch(
      setDynamicDetectorCalibrations({ enableOffset, enableGain }),
    );
  };

  const reconnect = async () => {
    await dispatch(dynamicDetectorReconnect());
  };

  return { offsetCalibration, gainCalibration, setCalibrations, reconnect };
}
