import { DynamicDetectorControlWidget } from "../../../widgets/detectorControlWidget";
import { Flex, Grid } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../../application/hooks.ts";
import { useEffect } from "react";
import { fetchDynamicDetectorState } from "../../../features/dynamicDetectorControl/model/thunks.ts";
import { DynamicDetectorSettingsWidget } from "../../../widgets/dynamicDetectorSettingsWidget";
import { ImageEditingWidget } from "../../../widgets/imageEditingWidget/ui/imageEditingWidget.tsx";

function ManualModePage() {
  const dispatch = useAppDispatch();
  const detector = useAppSelector((state) => state.dynamicDetector);

  useEffect(() => {
    if (!detector) void dispatch(fetchDynamicDetectorState());
  });

  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <ImageEditingWidget />
        </Grid.Col>
        <Grid.Col span={3}>
          <Flex direction="column" gap="xl" px="xl">
            <DynamicDetectorControlWidget />
            <DynamicDetectorSettingsWidget />
          </Flex>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default ManualModePage;
