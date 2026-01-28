import { useDebouncedDynamicDetectorControl } from "../../../features/dynamicDetectorControl";
import { Flex, SegmentedControl, Text, Title } from "@mantine/core";
import { DynamicDetectorState } from "../../../entities/dynamicDetector";
import { FC } from "react";

interface DynamicDetectorControlWidgetProps {
  state: DynamicDetectorState;
}

export const DynamicDetectorControlWidget: FC<
  DynamicDetectorControlWidgetProps
> = (props) => {
  const { setExposure, setGain } = useDebouncedDynamicDetectorControl();

  if (!props.state) return;

  return (
    <Flex direction="column" gap="sm">
      <Title order={3}>{props.state.name}</Title>

      <Text c={(props.state?.connected ?? false) ? "green" : "red"}>
        {props.state.connected ? "Connected" : "Disconnected"}
      </Text>
      <div>
        <SegmentedControl
          disabled={!props.state.connected || props.state.isChangingSettings}
          value={props.state.currentMode.exposure.toString()}
          data={["50", "100", "500", "1000", "2000"]}
          fullWidth={false}
          onChange={(e) => {
            const num = parseInt(e);
            void setExposure(num);
          }}
        />
      </div>

      <div>
        <SegmentedControl
          disabled={!props.state.connected || props.state.isChangingSettings}
          value={props.state.currentMode.gain.toString()}
          data={["1", "2", "4"]}
          onChange={(e) => {
            const num = parseInt(e);
            void setGain(num);
          }}
        />
      </div>
    </Flex>
  );
};
