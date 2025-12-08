import "./detectorControlWidget.css";
import {
  Button,
  Flex,
  Grid,
  Modal,
  SegmentedControl,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useAppSelector } from "../../../application/hooks.ts";
import { DetectorState } from "../../../entities/detector/model/types.ts";
import { detectorService } from "../model/detectorService.ts";
import { useDisclosure } from "@mantine/hooks";

function DetectorControlWidget() {
  const detector: DetectorState = useAppSelector((state) => state.detector);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Настройки детектора"
        centered
        size="xs"
      >
        <Button
          mt="md"
          onClick={() => void detectorService.reconnect()}
          fullWidth={true}
        >
          Переподключить
        </Button>
      </Modal>

      <Stack gap="xs">
        <Grid>
          <Grid.Col span="auto">
            <Flex direction={"row"} align={"center"} gap="xs">
              <Title order={3}>{detector.name}</Title>
              <Text c={detector.connected ? "green" : "red"}>
                {detector.connected ? "Подключено" : "Нет соединения"}
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span="content">
            <Button variant="light" onClick={open}>
              Настройки
            </Button>
          </Grid.Col>
        </Grid>

        <div>
          <Text>Экспозиция</Text>
          <SegmentedControl
            disabled={!detector.connected}
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
            value={detector.gain.toString()}
            onChange={(g) => {
              const num = parseInt(g);
              void detectorService.setGain(num);
            }}
          />
        </div>
      </Stack>
    </>
  );
}

export { DetectorControlWidget };
