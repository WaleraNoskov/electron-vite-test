import { FC } from "react";
import { DynamicDetectorState } from "../../../entities/dynamicDetector";
import { useDynamicDetectorSettingsControl } from "../../../features/dunamicDetectorSettingsControl";
import { Button, Flex, Group, Text, Title } from "@mantine/core";
import { FaCheck } from "react-icons/fa6";
import {
  selectIsEnablingGain,
  selectIsEnablingOffset,
  selectIsGainCalibrating,
  selectIsOffsetCalibrating,
  selectIsReconnecting,
} from "../../../features/dunamicDetectorSettingsControl/model/selectors.ts";
import { useAppSelector } from "../../../application/hooks.ts";

interface DynamicDetectorControlWidgetProps {
  state: DynamicDetectorState;
}

export const DynamicDetectorSettingsWidget: FC<
  DynamicDetectorControlWidgetProps
> = (props) => {
  const { offsetCalibration, gainCalibration, reconnect, setCalibrations } =
    useDynamicDetectorSettingsControl();

  const isOffsetCalibrating = useAppSelector(selectIsOffsetCalibrating);
  const isSetOffsetCalibration = useAppSelector(selectIsEnablingOffset);
  const isGainCalibrating = useAppSelector(selectIsGainCalibrating);
  const isSetGainCalibration = useAppSelector(selectIsEnablingGain);
  const isReconnecting = useAppSelector(selectIsReconnecting);

  if (!props.state) return;

  return (
    <>
      <Flex direction="column" gap="sm">
        <Title order={3}>Settings</Title>
        <Group align="center" justify="space-between">
          <Text>Offset calibration</Text>
          <Group>
            <FaCheck
              visibility={
                props.state.currentMode.isOffsetCalibrationApplied
                  ? "visible"
                  : "collapse"
              }
            />
            <Button
              variant="light"
              disabled={
                !props.state.connected || props.state.isChangingSettings
              }
              size="xs"
              loading={isSetOffsetCalibration}
              onClick={() => {
                void setCalibrations(
                  !props.state.currentMode.isOffsetCalibrationApplied,
                  props.state.currentMode.isGainCalibrationApplied,
                );
              }}
            >
              {props.state.currentMode.isOffsetCalibrationApplied
                ? "Off"
                : "On"}
            </Button>
            <Button
              size="xs"
              disabled={
                !props.state.connected || props.state.isChangingSettings
              }
              loading={isOffsetCalibrating}
              onClick={() => void offsetCalibration()}
            >
              Calibrate
            </Button>
          </Group>
        </Group>

        <Group align="center" justify="space-between">
          <Text>Gain calibration</Text>
          <Group>
            <FaCheck
              visibility={
                props.state.currentMode.isGainCalibrationApplied
                  ? "visible"
                  : "collapse"
              }
            />
            <Button
              variant="light"
              disabled={
                !props.state.connected || props.state.isChangingSettings
              }
              loading={isSetGainCalibration}
              size="xs"
              onClick={() =>
                void setCalibrations(
                  props.state.currentMode.isOffsetCalibrationApplied,
                  !props.state.currentMode.isGainCalibrationApplied,
                )
              }
            >
              {props.state.currentMode.isGainCalibrationApplied ? "Off" : "On"}
            </Button>
            <Button
              size="xs"
              disabled={
                !props.state.connected || props.state.isChangingSettings
              }
              loading={isGainCalibrating}
              onClick={() => void gainCalibration()}
            >
              Calibrate
            </Button>
          </Group>
        </Group>

        <Button
          disabled={props.state.isChangingSettings}
          loading={isReconnecting}
          onClick={() => void reconnect()}
        >
          Reconnect
        </Button>
      </Flex>
    </>
  );
};
