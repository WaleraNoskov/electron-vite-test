import { frameStore } from "../lib/imageBuffer";
import {
  setFps,
  setFrameId,
  setHeight,
  setWidth,
} from "../../entities/detector-image/model/detectorImageSlice.ts";
import { DetectorStateDto, ImageDto } from "./signalr/types.ts";
import { AppStore } from "../../application/store.ts";
import connection from "./signalr/hardwareSignalrConnection.ts";
import {
  setConnected,
  setExposure,
  setGain,
  setName,
} from "../../entities/detector/model/detectorSlice.ts";

export function initSignalrListeners(store: AppStore) {
  connection.on("newDetectorImage", (value: ImageDto) => {
    const image = new Uint16Array(value.array);
    const lastFrame = frameStore.getLatestFrame();
    const frame = frameStore.addFrame(image);

    const allDates = frameStore.getFrames().map((f) => f.date);

    store.dispatch(setWidth(value.width));
    store.dispatch(setHeight(value.height));
    store.dispatch(setFrameId(frame.id));
    store.dispatch(setFps(lastFrame !== null ? calculateFps(allDates) : 0));
  });

  connection.on("newDetectorState", (value: DetectorStateDto) => {
    store.dispatch(setName(value.name));
    store.dispatch(setExposure(value.exposure));
    store.dispatch(setGain(value.gain));
    store.dispatch(setConnected(value.connected));
  });
}

function calculateFps(dates: Date[]): number {
  if (dates.length < 2) return 0;

  const deltas = [];
  for (let i = 1; i < dates.length; i++) {
    deltas.push(dates[i].getTime() - dates[i - 1].getTime());
  }

  const avgDelta = deltas.reduce((a, b) => a + b, 0) / deltas.length;

  return avgDelta > 0 ? Math.round(1000 / avgDelta) : 0;
}
