import { useCtControl } from "../../../features/ctControl";
import { useAppSelector } from "../../../application/hooks.ts";
import {
  selectCtControlState,
  selectCtProgress,
  selectCtState,
} from "../../../features/ctControl/model/selectors.ts";
import { ActionIcon, Button, Flex, Group, Progress, Text } from "@mantine/core";
import { CtStatus, CtType } from "../../../entities/ct";
import { FaCircle, FaPause, FaPlay, FaStop } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useEffect } from "react";

export const CtControlWidget = () => {
  const {
    restartSession,
    start,
    emergencyStop,
    pause,
    resume,
    restore,
    moveHome,
    fetchCtSessionState,
  } = useCtControl();

  const ctState = useAppSelector(selectCtState);
  const ctControlState = useAppSelector(selectCtControlState);
  const ctProgress = useAppSelector(selectCtProgress);

  useEffect(() => {
    if (!ctState) void fetchCtSessionState();
  });

  return (
    <Flex gap="md" direction="column">
      <Group align="center">
        <FaCircle size={12} color={getIndicatorColor(ctState.status)} />

        <Text size="lg" fw={600}>
          {getStatusDisplay(ctState.status)}
        </Text>

        {ctState.status == CtStatus.Running && (
          <Text size="lg" fw={600}>
            {ctState.stepsDone}/{ctState.totalSteps}
          </Text>
        )}
      </Group>
      <Progress value={ctProgress} size="xl" striped />
      <Group>
        <ActionIcon
          onClick={() => void emergencyStop()}
          variant="outline"
          size="xl"
          disabled={
            ctControlState.isLoading ||
            ctState.status === CtStatus.Error ||
            !ctState.isSessionRunning
          }
        >
          <FaStop />
        </ActionIcon>
        <ActionIcon
          onClick={() => {
            if (ctState.status === CtStatus.Idle) void start();
            else if (ctState.status === CtStatus.Paused) void resume();
          }}
          variant="outline"
          size="xl"
          disabled={
            ctControlState.isLoading ||
            (ctState.status !== CtStatus.Idle &&
              ctState.status !== CtStatus.Paused) ||
            !ctState.isSessionRunning
          }
        >
          <FaPlay />
        </ActionIcon>
        <ActionIcon
          onClick={() => void pause()}
          variant="outline"
          size="xl"
          disabled={
            ctControlState.isLoading ||
            ctState.status !== CtStatus.Running ||
            !ctState.isSessionRunning
          }
        >
          <FaPause />
        </ActionIcon>
        <ActionIcon
          onClick={() => void moveHome()}
          variant="outline"
          size="xl"
          disabled={
            ctControlState.isLoading ||
            ctState.status !== CtStatus.Idle ||
            !ctState.isSessionRunning
          }
        >
          <FaHome />
        </ActionIcon>
        <Button
          size="md"
          disabled={
            ctControlState.isLoading ||
            ctState.status !== CtStatus.Error ||
            !ctState.isSessionRunning
          }
          onClick={() => void restore()}
        >
          Restore
        </Button>
      </Group>

      <Button
        variant="light"
        disabled={ctControlState.isLoading || ctState.isSessionRunning}
        onClick={() => void restartSession(CtType.NonStop, 360)}
      >
        Restart Session
      </Button>
    </Flex>
  );
};

function getStatusDisplay(status: CtStatus): string {
  switch (status) {
    case CtStatus.Error:
      return "Error";
    case CtStatus.Idle:
      return "Idle";
    case CtStatus.Cancelling:
      return "Cancelling";
    case CtStatus.Starting:
      return "Starting";
    case CtStatus.Running:
      return "Running";
    case CtStatus.Finishing:
      return "Finished";
    case CtStatus.MovingHome:
      return "MovingHome";
    case CtStatus.Paused:
      return "Paused";
    case CtStatus.Continuing:
      return "Continuing";
    case CtStatus.Pausing:
      return "Pausing";
    case CtStatus.Restoring:
      return "Restoring";

    default:
      return "Unknown";
  }
}

function getIndicatorColor(status: CtStatus): string {
  switch (status) {
    case CtStatus.Idle:
      return "blue";
    case CtStatus.Restoring:
    case CtStatus.Continuing:
    case CtStatus.Cancelling:
    case CtStatus.Finishing:
    case CtStatus.MovingHome:
    case CtStatus.Paused:
    case CtStatus.Pausing:
    case CtStatus.Running:
    case CtStatus.Starting:
      return "green";
    case CtStatus.Error:
    default:
      return "orange";
  }
}
