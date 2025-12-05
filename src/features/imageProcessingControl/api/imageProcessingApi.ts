import { Filters } from "../../../entities/imageFilter/model/types.ts";

class ImageProcessingApi {
  readonly API_URL =
    (import.meta.env.VITE_API_URL as string) + "/image-processing";

  async setFilter(filter: Filters): Promise<void> {
    const res = await fetch(this.API_URL + "/set-filter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filter),
    });

    if (!res.ok) throw new Error("Could not set exposure");
  }
}

export const imageProcessorApi = new ImageProcessingApi();
