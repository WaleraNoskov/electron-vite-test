export interface DetectorStateDto {
  name: string;
  exposure: number;
  gain: number;
  connected: boolean;
}

export interface ImageDto {
  width: number;
  height: number;
  array: number[];
}
