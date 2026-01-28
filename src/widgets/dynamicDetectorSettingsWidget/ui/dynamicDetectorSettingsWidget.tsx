import { FC, useState } from "react";
import { DynamicDetectorState } from "../../../entities/dynamicDetector";
import { useDynamicDetectorSettingsControl } from "../../../features/dunamicDetectorSettingsControl";
import { Button, Flex, Group, Text, Title } from "@mantine/core";
import { FaCheck } from "react-icons/fa6";

interface DynamicDetectorControlWidgetProps {
  state: DynamicDetectorState;
}

export const DynamicDetectorSettingsWidget: FC<
  DynamicDetectorControlWidgetProps
> = (props) => {
  const { offsetCalibration, gainCalibration, reconnect, setCalibrations } =
    useDynamicDetectorSettingsControl();
  const [isSetOffsetCalibration, setIsSetOffsetCalibration] = useState(false);
  const [isSetGainCalibration, setIsSetGainCalibration] = useState(false);
  const [calibratingOffset, setCalibratingOffset] = useState(false);
  const [calibratingGain, setCalibratingGain] = useState(false);
  const [isReconnecting, setIsReconnecting] = useState(false);

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
                setIsSetOffsetCalibration(true);
                void setCalibrations(
                  !props.state.currentMode.isOffsetCalibrationApplied,
                  props.state.currentMode.isGainCalibrationApplied,
                ).finally(() => setIsSetOffsetCalibration(false));
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
              loading={calibratingOffset}
              onClick={() => {
                setCalibratingOffset(true);
                void offsetCalibration().finally(() =>
                  setCalibratingOffset(false),
                );
              }}
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
              onClick={() => {
                setIsSetGainCalibration(true);
                void setCalibrations(
                  props.state.currentMode.isOffsetCalibrationApplied,
                  !props.state.currentMode.isGainCalibrationApplied,
                ).finally(() => setIsSetGainCalibration(false));
              }}
            >
              {props.state.currentMode.isGainCalibrationApplied ? "Off" : "On"}
            </Button>
            <Button
              size="xs"
              disabled={
                !props.state.connected || props.state.isChangingSettings
              }
              loading={calibratingGain}
              onClick={() => {
                setCalibratingGain(true);
                void gainCalibration().finally(() => setCalibratingGain(false));
              }}
            >
              Calibrate
            </Button>
          </Group>
        </Group>

        <Button
          disabled={props.state.isChangingSettings}
          loading={isReconnecting}
          onClick={() => {
            setIsReconnecting(true);
            void reconnect().finally(() => setIsReconnecting(false));
          }}
        >
          Reconnect
        </Button>
      </Flex>
    </>
  );
};
