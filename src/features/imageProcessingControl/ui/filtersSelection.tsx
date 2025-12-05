import { useAppSelector } from "../../../application/hooks.ts";
import {
  Filters,
  ImageProcessingState,
} from "../../../entities/imageFilter/model/types.ts";
import { SegmentedControl } from "@mantine/core";
import { imageProcessingService } from "../model/imageProcessingService.ts";

export function FiltersSelection() {
  const imageProcessing: ImageProcessingState = useAppSelector(
    (state) => state.imageProcessing,
  );

  return (
    <SegmentedControl
      data={[
        Filters.HDI.toString(),
        Filters.AlignmentLow.toString(),
        Filters.AlignmentMedium.toString(),
        Filters.AlignmentHigh.toString(),
        Filters.Relief.toString(),
        Filters.Median.toString(),
        Filters.SharpenLow.toString(),
        Filters.SharpenMedium.toString(),
        Filters.SharpenHigh.toString(),
      ]}
      value={imageProcessing.filter.toString()}
      radius="md"
      size="lg"
      onChange={(e) => {
        const filter = stringToColor(e);
        if (filter !== undefined) void imageProcessingService.setFilter(filter);
      }}
    />
  );
}

function stringToColor(str: string): Filters | undefined {
  const enumValues = Object.values(Filters);
  if (enumValues.includes(str as unknown as Filters)) {
    return str as unknown as Filters;
  }
  return undefined; // Or throw an error for invalid input
}
