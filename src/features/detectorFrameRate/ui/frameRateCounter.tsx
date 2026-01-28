import { FC } from "react";
import { Text } from "@mantine/core";

export interface FrameRateCounterProps {
  fps: number;
}

export const FrameRateCounter: FC<FrameRateCounterProps> = (props) => {
  return (
    <>
      <Text>FPS: {props.fps.toFixed(1)}</Text>
    </>
  );
};
