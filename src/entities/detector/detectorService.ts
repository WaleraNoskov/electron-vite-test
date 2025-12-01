import signalrConnection from "../../shared/api/hardwareSignalrConnection.ts";
import { AppStore } from "../../application/store.ts";
import {
  setConnected,
  setExposure,
  setGain,
  setName,
} from "./detectorSlice.ts";
import { DetectorStateDto } from "../../shared/api/dto/detectorStateDto.ts";

const API_URL = import.meta.env.VITE_API_URL as string;

class DetectorService {
  init(store: AppStore) {
    signalrConnection.on("newDetectorState", (value: DetectorStateDto) => {
      store.dispatch(setName(value.name));
      store.dispatch(setExposure(value.exposure));
      store.dispatch(setGain(value.gain));
      store.dispatch(setConnected(value.connected));
    });
  }

  async refresh(): Promise<void> {
    await signalrConnection.invoke("SendDetectorState");
  }

  async setExposure(exposure: number): Promise<void> {
    const res = await fetch(API_URL + "/detector/set-exposure", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exposure),
    });

    if (!res.ok) throw new Error("Could not set exposure");
  }

  async setGain(gain: number): Promise<void> {
    const res = await fetch(API_URL + "/detector/set-gain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gain),
    });

    if (!res.ok) throw new Error("Could not set exposure");
  }
}

export const detectorService = new DetectorService();
