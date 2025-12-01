import connection from "../../shared/api/signalrConnection.ts";
import { AppStore } from "../../application/store.ts";
import { setName } from "./detectorSlice.ts";

class DetectorSignalrService {
  init(store: AppStore) {
    connection.on("newMessage", (value: string) => {
      store.dispatch(store.dispatch(setName(value)));
    });
  }

  async triggerMessage() {
    await connection.invoke("newMessage");
  }
}

export const detectorSignalrService = new DetectorSignalrService();
