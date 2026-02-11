import { useAppDispatch } from "../../../application/hooks.ts";
import {
  tryContinue,
  tryEmergencyStop,
  tryFetchState,
  tryMoveHome,
  tryPause,
  tryRestore,
  tryStart,
  tryStartSession,
} from "../model/thunks.ts";
import { CtType } from "../../../entities/ct";

export function useCtControl() {
  const dispatch = useAppDispatch();

  const fetchState = async () => {
    await dispatch(tryFetchState());
  };

  const startSession = async (type: CtType, steps: number) => {
    await dispatch(tryStartSession({ type: type, steps: steps }));
  };

  const start = async () => {
    await dispatch(tryStart());
  };

  const emergencyStop = async () => {
    await dispatch(tryEmergencyStop());
  };

  const pause = async () => {
    await dispatch(tryPause());
  };

  const resume = async () => {
    await dispatch(tryContinue());
  };

  const moveHome = async () => {
    await dispatch(tryMoveHome());
  };

  const restore = async () => {
    await dispatch(tryRestore());
  };

  return {
    fetchState,
    startSession,
    start,
    emergencyStop,
    pause,
    resume,
    moveHome,
    restore,
  };
}
