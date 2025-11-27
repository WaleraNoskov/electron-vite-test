import "./detector-control-widget.css";
import { SegmentedControl, Stack, Text, Title } from "@mantine/core";

function DetectorControlWidget() {
  return (
    <Stack gap="xs">
      <Title order={4}>Vivix T43-43</Title>

      <div>
        <Text>Экспозиция</Text>
        <SegmentedControl
          radius="md"
          size="lg"
          data={["50", "100", "500", "1000", "2000"]}
        />
      </div>
      <div>
        <Text>Усиление</Text>
        <SegmentedControl size="lg" data={["1", "2", "4"]} radius="md" />
      </div>
    </Stack>
  );
}

export { DetectorControlWidget };
