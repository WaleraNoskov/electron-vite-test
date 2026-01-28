import { useAppDispatch } from "../../../application/hooks.ts";
import { useCallback, useRef } from "react";
import {
  changeDynamicDetectorExposure,
  changeDynamicDetectorGain,
} from "./thunks.ts";

export function useDebouncedDynamicDetectorControl() {
  const dispatch = useAppDispatch();
  const exposureTimeout = useRef<number | null>(null);
  const gainTimeout = useRef<number | null>(null);

  const setExposure = useCallback(
    (value: number) => {
      if (exposureTimeout.current) {
        clearTimeout(exposureTimeout.current);
      }

      exposureTimeout.current = window.setTimeout(() => {
        void dispatch(changeDynamicDetectorExposure(value));
      }, 150);
    },
    [dispatch],
  );

  const setGain = useCallback(
    (value: number) => {
      if (gainTimeout.current) {
        clearTimeout(gainTimeout.current);
      }

      gainTimeout.current = window.setTimeout(() => {
        void dispatch(changeDynamicDetectorGain(value));
      });
    },
    [dispatch],
  );

  return { setExposure, setGain };
}
