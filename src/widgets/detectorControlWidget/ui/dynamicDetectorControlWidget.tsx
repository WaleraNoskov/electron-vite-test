import { useDynamicDetectorControl } from "../../../features/dynamicDetectorControl";
import { Flex, SegmentedControl, Text, Title } from "@mantine/core";
import { DynamicDetectorState } from "../../../entities/dynamicDetector";
import { FC } from "react";

interface DynamicDetectorControlWidgetProps {
  state: DynamicDetectorState;
}

export const DynamicDetectorControlWidget: FC<
  DynamicDetectorControlWidgetProps
> = (props) => {
  const { setExposure, setGain } = useDynamicDetectorControl();

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
          data={[
            { value: "0", label: "40" },
            { value: "1", label: "50" },
            { value: "2", label: "67" },
            { value: "3", label: "100" },
            { value: "4", label: "200" },
            { value: "5", label: "500" },
            { value: "6", label: "1000" },
            { value: "7", label: "2000" },
          ]}
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
