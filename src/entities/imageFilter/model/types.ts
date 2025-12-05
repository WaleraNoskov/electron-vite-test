export enum Filters {
  None,
  HDI,
  AlignmentLow,
  AlignmentMedium,
  AlignmentHigh,
  Relief,
  Median,
  SharpenLow,
  SharpenMedium,
  SharpenHigh,
}

export interface ImageProcessingState {
  filter: Filters;
}
