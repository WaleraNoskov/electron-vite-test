import { DynamicDetectorStateDto, SetCalibrationsDto } from "../../dto";

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

  async getState(): Promise<DynamicDetectorStateDto> {
    const res = await fetch(API_URL + "/detector/get-detector-state", {
      method: "GET",
    });

    if (!res.ok) throw new Error("Could not get detector state");

    return (await res.json()) as DynamicDetectorStateDto;
  }

  async offsetCalibration(): Promise<void> {
    const res = await fetch(API_URL + "/detector/offset-calibration", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Could not get detector offset-calibration");
  }

  async gainCalibration(): Promise<void> {
    const res = await fetch(API_URL + "/detector/gain-calibration", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Could not get detector offset-calibration");
  }

  async setCalibrations(dto: SetCalibrationsDto): Promise<void> {
    const res = await fetch(API_URL + "/detector/set-calibrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    if (!res.ok) throw new Error("Could not get detector offset-calibration");
  }
}

export const detectorApi = new DetectorApi();
