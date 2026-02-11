import { AppStore, frameStore } from "../../../../application/store.ts";
import {
  CtSettingsDto,
  CtStepsChangedDto,
  DynamicDetectorStateDto,
  ImageDto,
} from "../../dto";
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
  CtStatus,
  setDoneSteps,
  setStatus,
  setStepIds,
  setTimeToFinish,
  setTotalSteps,
  setType,
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
  ctSignalrConnection.on("ctSettingsChanged", (value: CtSettingsDto) => {
    store.dispatch(setType(value.type));
    store.dispatch(setTotalSteps(value.steps));
  });
  ctSignalrConnection.on("ctStatusChanged", (value: CtStatus) => {
    store.dispatch(setStatus(value));
  });
  ctSignalrConnection.on("ctStepChanged", (value: CtStepsChangedDto) => {
    store.dispatch(setDoneSteps(value.step));
    store.dispatch(setTotalSteps(value.totalSteps));
    store.dispatch(setStepIds(value.stepIds));
  });
  ctSignalrConnection.on("timeToFinishReestimated", (value: number) => {
    store.dispatch(setTimeToFinish(value));
  });
}
