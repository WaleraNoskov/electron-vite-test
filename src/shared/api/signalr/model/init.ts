import hardwareSignalrConnection from "./hardwareSignalrConnection.ts";
import { AppStore, frameStore } from "../../../../application/store.ts";
import { DynamicDetectorStateDto, ImageDto } from "../../dto";
import {
  connectedChanged,
  modeChanged,
  nameChanged,
} from "../../../../entities/dynamicDetector";
import { frameReceived } from "../../../../features/detectorFrameRate";

export function initSignalrListeners(store: AppStore) {
  hardwareSignalrConnection.on(
    "newDetectorState",
    (value: DynamicDetectorStateDto) => {
      store.dispatch(nameChanged(value.name));
      store.dispatch(connectedChanged(value.connected));
      store.dispatch(modeChanged(value.currentMode));
    },
  );

  hardwareSignalrConnection.on("newDetectorImage", (value: ImageDto) => {
    const image = new Uint16Array(value.array);
    frameStore.addFrame(image);

    store.dispatch(frameReceived({ timestamp: Date.now() }));
  });
}
