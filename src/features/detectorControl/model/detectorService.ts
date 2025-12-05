import { detectorApi } from "../api/detectorApi.ts";
import {
  setExposure,
  setGain,
} from "../../../entities/detector/model/detectorSlice.ts";
import { store } from "../../../application/store.ts";

class DetectorService {
  async setExposure(exposure: number): Promise<void> {
    try {
      await detectorApi.setExposure(exposure);
      store.dispatch(setExposure(exposure));
    } catch (err) {
      console.log("Cannot set exposure");
    }
  }

  async setGain(gain: number): Promise<void> {
    try {
      await detectorApi.setGain(gain);
      store.dispatch(setGain(gain));
    } catch (err) {
      console.log("Cannot set gain");
    }
  }
  async reconnect(): Promise<void> {
    try {
      await detectorApi.reconnect();
    } catch (err) {
      console.log("Cannot reconnect");
    }
  }
}

export const detectorService = new DetectorService();
