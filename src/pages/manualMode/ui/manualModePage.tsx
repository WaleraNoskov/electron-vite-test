import { DynamicDetectorControlWidget } from "../../../widgets/detectorControlWidget";
import { Flex, Grid } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../../application/hooks.ts";
import { useEffect } from "react";
import { fetchDynamicDetectorState } from "../../../features/dynamicDetectorControl/model/thunks.ts";
import { DynamicDetectorSettingsWidget } from "../../../widgets/dynamicDetectorSettingsWidget";

function ManualModePage() {
  const dispatch = useAppDispatch();
  const detector = useAppSelector((state) => state.dynamicDetector);

  useEffect(() => {
    if (!detector) void dispatch(fetchDynamicDetectorState());
  });

  return (
    <>
      <Grid>
        <Grid.Col span={3}></Grid.Col>
        <Grid.Col span={6}>
          <Flex direction="column" gap="xl">
            <DynamicDetectorControlWidget state={detector} />
            <DynamicDetectorSettingsWidget state={detector} />
          </Flex>
        </Grid.Col>
        <Grid.Col span={3}></Grid.Col>
      </Grid>
    </>
  );
}

export default ManualModePage;
