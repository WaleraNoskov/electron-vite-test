import { useAppDispatch } from "../../../application/hooks.ts";
import { tryFetchSettings, trySetSettings } from "../model/thunks.ts";
import { CtType } from "../../../entities/ct";

export function useCtSettingsControl() {
  const dispatch = useAppDispatch();

  const fetchSettings = async () => {
    await dispatch(tryFetchSettings());
  };

  const setSettings = async (steps: number, type: CtType) => {
    await dispatch(trySetSettings({ steps: steps, type: type }));
  };

  return { fetchSettings, setSettings };
}
