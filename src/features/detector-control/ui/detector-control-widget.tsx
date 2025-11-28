import "./detector-control-widget.css";
import {
  Button,
  Flex,
  SegmentedControl,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  setExposure,
  setGain,
  DetectorState,
  setConnected,
} from "../../../entities/detector/model/detectorSlice.ts";
import { useAppSelector, useAppDispatch } from "../../../application/hooks.ts";

function DetectorControlWidget() {
  const dispatch = useAppDispatch();
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
            const num = parseInt(e, 10);
            dispatch(setExposure(num));
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
            dispatch(setGain(g));
          }}
        />
      </div>

      <Button
        mt={"md"}
        onClick={() => dispatch(setConnected(!detector.connected))}
        variant={"light"}
      >
        {detector.connected ? "Отключить" : "Подключить"}
      </Button>
    </Stack>
  );
}

export { DetectorControlWidget };
