import { DynamicDetectorControlWidget } from "../../../widgets/detectorControlWidget";
import { Center, Flex } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../../application/hooks.ts";
import { useEffect } from "react";
import { fetchDynamicDetectorState } from "../../../features/dynamicDetectorControl/model/thunks.ts";
import { DynamicDetectorSettingsWidget } from "../../../widgets/dynamicDetectorSettingsWidget";
import { ImageViewWidget } from "../../../widgets/imageViewWidget";
import { FilterSwitcherWidget } from "../../../widgets/filterSwitcherWidget/ui/filterSwitcherWidget.tsx";

function ManualModePage() {
  const dispatch = useAppDispatch();
  const detector = useAppSelector((state) => state.dynamicDetector);

  useEffect(() => {
    if (!detector) void dispatch(fetchDynamicDetectorState());
  });

  return (
    <Center>
      <Flex gap="xl">
        <ImageViewWidget />
        <Flex direction="column" gap="xl">
          <DynamicDetectorControlWidget />
          <DynamicDetectorSettingsWidget />
          <FilterSwitcherWidget />
        </Flex>
      </Flex>
    </Center>
  );
}

export default ManualModePage;
