import { useImageEditing } from "../../../features/imageEditing";
import { Flex, Group, Text } from "@mantine/core";

export const ImageEditingWidget = () => {
  const { frame, fps, ref } = useImageEditing();

  return (
    <>
      <Flex direction={"column"} align="center" gap="sm">
        <canvas
          ref={ref}
          width={frame?.width ?? 0}
          height={frame?.height ?? 0}
        />
        <Group justify="end" w={frame?.width ?? 0}>
          <Text>FPS: {fps.toFixed(1)}</Text>
        </Group>
      </Flex>
    </>
  );
};
