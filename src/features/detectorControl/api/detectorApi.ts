const API_URL = import.meta.env.VITE_API_URL as string;

class DetectorApi {
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

    if (!res.ok) throw new Error("Could not set gain");
  }

  async reconnect(): Promise<void> {
    const res = await fetch(API_URL + "/detector/reconnect", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Could not set reconnect");
  }
}

export const detectorApi = new DetectorApi();
