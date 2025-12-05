import { useDetectorCanvas } from "../lib/useDetectorCanvas.ts";
import { useAppSelector } from "../../../application/hooks.ts";
import { Flex, Stack, Text } from "@mantine/core";

export const DetectorLiveView = () => {
  const detectorImage = useAppSelector((state) => state.detectorImage);
  const canvasRef = useDetectorCanvas(
    detectorImage.lastFrameId,
    detectorImage.width,
    detectorImage.height,
  );

  return (
    <Stack>
      <canvas
        ref={canvasRef}
        width={detectorImage.width}
        height={detectorImage.height}
      />
      <Flex>
        <Text>FPS: {detectorImage.fps}</Text>
      </Flex>
    </Stack>
  );
};
