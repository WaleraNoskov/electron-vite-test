import { useAppSelector } from "../../../application/hooks.ts";
import {
  Filters,
  ImageProcessingState,
} from "../../../entities/imageFilter/model/types.ts";
import { Flex, SegmentedControl, Title } from "@mantine/core";
import { imageProcessingService } from "../model/imageProcessingService.ts";

export function FiltersSelection() {
  const imageProcessing: ImageProcessingState = useAppSelector(
    (state) => state.imageProcessing,
  );

  return (
    <Flex direction="column" gap="xs">
      <Title order={4}>Фильтр</Title>
      <SegmentedControl
        orientation="vertical"
        data={[
          {
            label: filterToString(Filters.None),
            value: Filters.None.toString(),
          },
          { label: filterToString(Filters.HDI), value: Filters.HDI.toString() },
          {
            label: filterToString(Filters.AlignmentLow),
            value: Filters.AlignmentLow.toString(),
          },
          {
            label: filterToString(Filters.AlignmentMedium),
            value: Filters.AlignmentMedium.toString(),
          },
          {
            label: filterToString(Filters.AlignmentHigh),
            value: Filters.AlignmentHigh.toString(),
          },
          {
            label: filterToString(Filters.Median),
            value: Filters.Relief.toString(),
          },
          { label: Filters[Filters.Median], value: Filters.Median.toString() },
          {
            label: filterToString(Filters.SharpenLow),
            value: Filters.SharpenLow.toString(),
          },
          {
            label: filterToString(Filters.SharpenMedium),
            value: Filters.SharpenMedium.toString(),
          },
          {
            label: filterToString(Filters.SharpenHigh),
            value: Filters.SharpenHigh.toString(),
          },
        ]}
        value={imageProcessing.filter.toString()}
        size="md"
        onChange={(e) => {
          const filter = parseInt(e);
          if (filter !== undefined)
            void imageProcessingService.setFilter(filter);
        }}
      />
    </Flex>
  );
}

function filterToString(filter: Filters): string {
  switch (filter) {
    case Filters.None:
      return "Без фильтра";
    case Filters.HDI:
      return "HDI";
    case Filters.AlignmentLow:
      return "Контраст низкий";
    case Filters.AlignmentMedium:
      return "Контраст средний";
    case Filters.AlignmentHigh:
      return "Контраст высокий";
    case Filters.Relief:
      return "Рельеф";
    case Filters.Median:
      return "Медианный";
    case Filters.SharpenLow:
      return "Резкость слабая";
    case Filters.SharpenMedium:
      return "Резкость средняя";
    case Filters.SharpenHigh:
      return "Резкость высокая";
    default:
      return "Неизвестный";
  }
}
