import hardwareSignalrConnection from "./hardwareSignalrConnection.ts";
import { AppStore } from "../../../../application/store.ts";
import { DynamicDetectorStateDto } from "../../dto";
import {
  connectedChanged,
  modeChanged,
  nameChanged,
} from "../../../../entities/dynamicDetector";

export function initSignalrListeners(store: AppStore) {
  hardwareSignalrConnection.on(
    "newDetectorState",
    (value: DynamicDetectorStateDto) => {
      store.dispatch(nameChanged(value.name));
      store.dispatch(connectedChanged(value.connected));
      store.dispatch(modeChanged(value.currentMode));
    },
  );
}
