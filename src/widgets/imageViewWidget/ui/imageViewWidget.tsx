import { useImageView } from "../../../features/imageEditing";
import { Flex, Group, Text } from "@mantine/core";

export const ImageViewWidget = () => {
  const { frame, fps, ref } = useImageView();

  return (
    <>
      <Flex direction={"column"} align="center" gap="sm">
        <canvas
          ref={ref}
          width={frame?.width ?? 0}
          height={frame?.height ?? 0}
        />
        {frame && (
          <Group justify="end" w={frame?.width ?? 0}>
            <Text>FPS: {fps.toFixed(1)}</Text>
          </Group>
        )}
      </Flex>
    </>
  );
};
