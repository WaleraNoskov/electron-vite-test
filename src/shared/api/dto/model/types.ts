export interface DynamicDetectorModeDto {
  id: number;
  exposure: number;
  gain: number;
  isOffsetCalibrationExist: boolean;
  isOffsetCalibrationEnabled: boolean;
  isOffsetCalibrationApplied: boolean;
  isGainCalibrationExist: boolean;
  isGainCalibrationEnabled: boolean;
  isGainCalibrationApplied: boolean;
}

export interface DynamicDetectorStateDto {
  name: string;
  connected: boolean;
  currentMode: DynamicDetectorModeDto;
}

export interface SetCalibrationsDto {
  enableOffset: boolean;
  enableGain: boolean;
}

export interface ImageDto {
  width: number;
  height: number;
  array: number[];
}
