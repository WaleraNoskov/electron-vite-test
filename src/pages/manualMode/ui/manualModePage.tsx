import { DynamicDetectorControlWidget } from "../../../widgets/detectorControlWidget";
import { Flex, Grid } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../../application/hooks.ts";
import { useEffect, useRef, useState } from "react";
import { fetchDynamicDetectorState } from "../../../features/dynamicDetectorControl/model/thunks.ts";
import { DynamicDetectorSettingsWidget } from "../../../widgets/dynamicDetectorSettingsWidget";
import { ImageViewWidget } from "../../../widgets/imageViewWidget";
import { FilterSwitcherWidget } from "../../../widgets/filterSwitcherWidget";
import { HistogramWidget } from "../../../widgets/histogramWidget/ui/histogramWidget.tsx";
import { CtControlWidget } from "../../../widgets/ctControl/ui/ctControlWidget.tsx";

function ManualModePage() {
  const dispatch = useAppDispatch();
  const detector = useAppSelector((state) => state.dynamicDetector);

  useEffect(() => {
    if (!detector) void dispatch(fetchDynamicDetectorState());
  });

  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Check if the ref has been attached to a DOM element
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  return (
    <Grid>
      <Grid.Col span={3} mx="xl">
        <CtControlWidget />
      </Grid.Col>

      <Grid.Col span="auto">
        <ImageViewWidget />
      </Grid.Col>

      <Grid.Col span={3} mx="xl">
        <Flex direction="column" gap="xl" ref={ref}>
          <DynamicDetectorControlWidget />
          <DynamicDetectorSettingsWidget />
          <FilterSwitcherWidget />
          <div>
            <HistogramWidget width={width} height={200} />
          </div>
        </Flex>
      </Grid.Col>
    </Grid>
  );
}

export default ManualModePage;
