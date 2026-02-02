import { AppStore, frameStore } from "../../../../application/store.ts";
import { CtStateDto, DynamicDetectorStateDto, ImageDto } from "../../dto";
import {
  changeConnected,
  changeMode,
  changeName,
} from "../../../../entities/dynamicDetector";
import { imageEditingFrameReceived } from "../../../../features/imageEditing";
import { Frame } from "../../../../entities/imageProcessing";
import {
  ctSignalrConnection,
  hardwareSignalrConnection,
} from "./signalrConnections.ts";
import {
  setDoneSteps,
  setStatus,
  setTimeToFinish,
  setTotalSteps,
  setType,
  setValidationErrors,
} from "../../../../entities/ct";

export function initHardwareSignalrListeners(store: AppStore) {
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

export function initCtSignalrListeners(store: AppStore) {
  ctSignalrConnection.on("newCtState", (value: CtStateDto) => {
    store.dispatch(setStatus(value.status));
    store.dispatch(setType(value.type));
    store.dispatch(setValidationErrors(value.validationErrors));
    store.dispatch(setDoneSteps(value.stepsDone));
    store.dispatch(setTotalSteps(value.totalSteps));
    store.dispatch(setTimeToFinish(value.timeToFinish));
  });
}
