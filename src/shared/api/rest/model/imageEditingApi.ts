import { UpdateOutputPipelineInputDto } from "../../dto";

const API_URL = import.meta.env.VITE_API_URL as string;

class ImageEditingApi {
  async updateOutputPipeline(dto: UpdateOutputPipelineInputDto): Promise<void> {
    const res = await fetch(
      API_URL + "/image-processing/update-output-pipeline",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      },
    );

    if (!res.ok) throw new Error("Could not set exposure");
  }
}

export const imageEditingApi = new ImageEditingApi();
