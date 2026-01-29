import { RootState } from "../../../application/store.ts";

export const selectDetectorState = (state: RootState) => state.dynamicDetector;
