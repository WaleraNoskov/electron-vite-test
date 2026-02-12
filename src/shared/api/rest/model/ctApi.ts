import { CtSessionStateDto, CtSettingsDto, CtStateDto } from "../../dto";

const API_URL = import.meta.env.VITE_API_URL as string;

class CtApi {
  async getState(): Promise<CtStateDto> {
    const res = await fetch(API_URL + "/ct/get-state", {
      method: "GET",
    });

    if (!res.ok) throw new Error("Could not get ct state");

    return (await res.json()) as CtStateDto;
  }

  async getSessionState(): Promise<CtSessionStateDto> {
    const res = await fetch(API_URL + "/ct/get-session-state", {
      method: "GET",
    });

    if (!res.ok) throw new Error("Could not get ct state");

    return (await res.json()) as CtSessionStateDto;
  }

  async getSettings(): Promise<CtSettingsDto> {
    const res = await fetch(API_URL + "/ct/get-settings", {
      method: "GET",
    });

    if (!res.ok) throw new Error("Could not get ct settings");

    return (await res.json()) as CtSettingsDto;
  }

  async setSettings(dto: CtSettingsDto): Promise<void> {
    const res = await fetch(API_URL + "/ct/set-settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
    });

    if (!res.ok) throw new Error("Could not set ct settings");
  }

  async restartSession(dto: CtSettingsDto): Promise<void> {
    const res = await fetch(API_URL + "/ct/restart-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    if (!res.ok) throw new Error("Could not start session");
  }

  async start(): Promise<void> {
    const res = await fetch(API_URL + "/ct/start", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Could not start ct");
  }

  async emergencyStop(): Promise<void> {
    const res = await fetch(API_URL + "/ct/emergency-stop", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Could not stop ct");
  }

  async pause(): Promise<void> {
    const res = await fetch(API_URL + "/ct/pause", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Could not pause ct");
  }

  async continue(): Promise<void> {
    const res = await fetch(API_URL + "/ct/continue", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Could not continue ct");
  }

  async moveHome(): Promise<void> {
    const res = await fetch(API_URL + "/ct/move-home", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Could not move home ct");
  }

  async restore(): Promise<void> {
    const res = await fetch(API_URL + "/ct/restore", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Could not restore ct");
  }
}

export const ctApi = new CtApi();
