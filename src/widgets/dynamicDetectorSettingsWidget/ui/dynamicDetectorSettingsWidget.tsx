import { FC } from "react";
import { DynamicDetectorState } from "../../../entities/dynamicDetector";
import { useDynamicDetectorSettingsControl } from "../../../features/dunamicDetectorSettingsControl";
import { Button, Flex, Group, Text } from "@mantine/core";

interface DynamicDetectorControlWidgetProps {
  state: DynamicDetectorState;
}

export const DynamicDetectorSettingsWidget: FC<
  DynamicDetectorControlWidgetProps
> = (props) => {
  const { offsetCalibration, reconnect } = useDynamicDetectorSettingsControl();

  if (!props.state) return;

  return (
    <>
      <Flex direction="column" gap="sm">
        <Group align="center" justify="space-between">
          <Text>Offset calibration</Text>
          <Group>
            <Button variant="light" disabled={!props.state.connected} size="xs">
              {props.state.currentMode.isOffsetCalibrationApplied
                ? "Off"
                : "On"}
            </Button>
            <Button
              size="xs"
              disabled={!props.state.connected}
              loading={props.state.isOffsetCalibrating}
              onClick={() => {
                void offsetCalibration();
              }}
            >
              Calibrate
            </Button>
          </Group>
        </Group>

        <Button
          loading={props.state.isReconnecting}
          onClick={() => {
            void reconnect();
          }}
        >
          Reconnect
        </Button>
      </Flex>
    </>
  );
};
