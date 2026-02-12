import { useAppDispatch } from "../../../application/hooks.ts";
import {
  tryContinue,
  tryEmergencyStop,
  tryFetchSessionState,
  tryFetchState,
  tryMoveHome,
  tryPause,
  tryRestore,
  tryStart,
  tryRestartSession,
} from "../model/thunks.ts";
import { CtType } from "../../../entities/ct";

export function useCtControl() {
  const dispatch = useAppDispatch();

  const fetchCtState = async () => {
    await dispatch(tryFetchState());
  };

  const fetchCtSessionState = async () => {
    await dispatch(tryFetchSessionState());
  };

  const restartSession = async (type: CtType, steps: number) => {
    await dispatch(tryRestartSession({ type: type, steps: steps }));
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
    fetchCtState,
    fetchCtSessionState,
    restartSession: restartSession,
    start,
    emergencyStop,
    pause,
    resume,
    moveHome,
    restore,
  };
}
