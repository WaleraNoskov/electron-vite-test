import "./detector-control-widget.css";
import {
  Button,
  Flex,
  SegmentedControl,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { DetectorState } from "../../../entities/detector/detectorSlice.ts";
import { useAppSelector } from "../../../application/hooks.ts";
import { detectorService } from "../../../entities/detector/detectorService.ts";

function DetectorControlWidget() {
  const detector: DetectorState = useAppSelector((state) => state.detector);

  return (
    <Stack gap="xs">
      <Flex direction={"row"} align={"center"} gap="xs">
        <Title order={4}>{detector.name}</Title>
        <Text c={detector.connected ? "green" : "red"}>
          {detector.connected ? "Подключено" : "Нет соединения"}
        </Text>
      </Flex>

      <div>
        <Text>Экспозиция</Text>
        <SegmentedControl
          disabled={!detector.connected}
          radius="md"
          size="lg"
          value={detector.exposure.toString()}
          data={["50", "100", "500", "1000", "2000"]}
          onChange={(e) => {
            const num = parseInt(e);
            void detectorService.setExposure(num);
          }}
        />
      </div>
      <div>
        <Text>Усиление</Text>
        <SegmentedControl
          disabled={!detector.connected}
          size="lg"
          data={["1", "2", "4"]}
          radius="md"
          value={detector.gain.toString()}
          onChange={(g) => {
            const num = parseInt(g);
            void detectorService.setGain(num);
          }}
        />
      </div>
      <Button mt={"md"} onClick={() => void detectorService.refresh()}>
        Обновить
      </Button>
    </Stack>
  );
}

export { DetectorControlWidget };
