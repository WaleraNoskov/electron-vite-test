import { useDynamicDetectorSettingsControl } from "../../../features/dunamicDetectorSettingsControl";
import { Button, Flex, Group, Text, Title } from "@mantine/core";
import { FaCheck } from "react-icons/fa6";
import {
  selectDetectorState,
  selectIsEnablingGain,
  selectIsEnablingOffset,
  selectIsGainCalibrating,
  selectIsOffsetCalibrating,
  selectIsReconnecting,
} from "../../../features/dunamicDetectorSettingsControl";
import { useAppSelector } from "../../../application/hooks.ts";

export const DynamicDetectorSettingsWidget = () => {
  const { offsetCalibration, gainCalibration, reconnect, setCalibrations } =
    useDynamicDetectorSettingsControl();

  const isOffsetCalibrating = useAppSelector(selectIsOffsetCalibrating);
  const isSetOffsetCalibration = useAppSelector(selectIsEnablingOffset);
  const isGainCalibrating = useAppSelector(selectIsGainCalibrating);
  const isSetGainCalibration = useAppSelector(selectIsEnablingGain);
  const isReconnecting = useAppSelector(selectIsReconnecting);
  const detectorState = useAppSelector(selectDetectorState);

  if (!detectorState) return;

  return (
    <>
      <Flex direction="column" gap="sm">
        <Title order={3}>Settings</Title>
        <Group align="center" justify="space-between">
          <Text>Offset calibration</Text>
          <Group gap="xs">
            <FaCheck
              visibility={
                detectorState.currentMode.isOffsetCalibrationApplied
                  ? "visible"
                  : "collapse"
              }
            />
            <Button
              variant="light"
              disabled={
                !detectorState.connected || detectorState.isChangingSettings
              }
              size="xs"
              loading={isSetOffsetCalibration}
              onClick={() => {
                void setCalibrations(
                  !detectorState.currentMode.isOffsetCalibrationApplied,
                  detectorState.currentMode.isGainCalibrationApplied,
                );
              }}
            >
              {detectorState.currentMode.isOffsetCalibrationApplied
                ? "Off"
                : "On"}
            </Button>
            <Button
              size="xs"
              disabled={
                !detectorState.connected || detectorState.isChangingSettings
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
          <Group gap="xs">
            <FaCheck
              visibility={
                detectorState.currentMode.isGainCalibrationApplied
                  ? "visible"
                  : "collapse"
              }
            />
            <Button
              variant="light"
              disabled={
                !detectorState.connected || detectorState.isChangingSettings
              }
              loading={isSetGainCalibration}
              size="xs"
              onClick={() =>
                void setCalibrations(
                  detectorState.currentMode.isOffsetCalibrationApplied,
                  !detectorState.currentMode.isGainCalibrationApplied,
                )
              }
            >
              {detectorState.currentMode.isGainCalibrationApplied
                ? "Off"
                : "On"}
            </Button>
            <Button
              size="xs"
              disabled={
                !detectorState.connected || detectorState.isChangingSettings
              }
              loading={isGainCalibrating}
              onClick={() => void gainCalibration()}
            >
              Calibrate
            </Button>
          </Group>
        </Group>

        <Button
          disabled={detectorState.isChangingSettings}
          loading={isReconnecting}
          onClick={() => void reconnect()}
        >
          Reconnect
        </Button>
      </Flex>
    </>
  );
};
