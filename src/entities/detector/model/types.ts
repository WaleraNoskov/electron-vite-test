export interface DetectorState {
  name: string;
  connected: boolean;
  exposure: number;
  gain: number;
  image: Uint16Array | null;
}
