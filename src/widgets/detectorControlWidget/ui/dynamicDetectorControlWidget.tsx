import { useDebouncedDynamicDetectorControl } from "../../../features/dynamicDetectorControl";
import { Button, Flex, SegmentedControl, Text, Title } from "@mantine/core";
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
    <>
      <Title order={3}>{props.state.name}</Title>

      <Flex direction="column" gap="sm">
        <Text c={(props.state?.connected ?? false) ? "green" : "red"}>
          {props.state.connected ? "Connected" : "Disconnected"}
        </Text>
        <div>
          <SegmentedControl
            disabled={!props.state.connected}
            value={props.state.exposure.toString()}
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
            disabled={!props.state.connected}
            value={props.state.gain.toString()}
            data={["1", "2", "4"]}
            onChange={(e) => {
              const num = parseInt(e);
              void setGain(num);
            }}
          />
        </div>
        <Button mt="xs" variant="light">
          Settings
        </Button>
      </Flex>
    </>
  );
};
