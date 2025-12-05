import { imageProcessorApi } from "../api/imageProcessingApi.ts";
import { Filters } from "../../../entities/imageFilter/model/types.ts";
import { store } from "../../../application/store.ts";
import { setFilter } from "../../../entities/imageFilter/model/ImageProcessingSlice.ts";

class ImageProcessingService {
  async setFilter(filter: Filters): Promise<void> {
    try {
      await imageProcessorApi.setFilter(filter);
      store.dispatch(setFilter(filter));
    } catch (error) {
      console.log("Cannot apply filter");
    }
  }
}

export const imageProcessingService = new ImageProcessingService();
