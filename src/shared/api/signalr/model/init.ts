import hardwareSignalrConnection from "./hardwareSignalrConnection.ts";
import { AppStore, frameStore } from "../../../../application/store.ts";
import { DynamicDetectorStateDto, ImageDto } from "../../dto";
import {
  changeConnected,
  changeMode,
  changeName,
} from "../../../../entities/dynamicDetector";
import { imageEditingFrameReceived } from "../../../../features/imageEditing";
import { Frame } from "../../../../entities/imageProcessing";

export function initSignalrListeners(store: AppStore) {
  hardwareSignalrConnection.on(
    "newDetectorState",
    (value: DynamicDetectorStateDto) => {
      store.dispatch(changeName(value.name));
      store.dispatch(changeConnected(value.connected));
      store.dispatch(changeMode(value.currentMode));
    },
  );

  hardwareSignalrConnection.on("newDetectorImage", (value: ImageDto) => {
    const array = new Uint16Array(value.array);
    frameStore.addFrame(array);
    const image: Frame = {
      array: array,
      width: value.width,
      height: value.height,
    };
    void store.dispatch(imageEditingFrameReceived(image));
  });
}
