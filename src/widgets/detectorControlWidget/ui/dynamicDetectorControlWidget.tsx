import { useDynamicDetectorControl } from "../../../features/dynamicDetectorControl";
import { Flex, SegmentedControl, Text, Title } from "@mantine/core";
import { useAppSelector } from "../../../application/hooks.ts";
import { selectDetectorState } from "../../../features/dynamicDetectorControl/model/selectors.ts";

export const DynamicDetectorControlWidget = () => {
  const { setExposure, setGain } = useDynamicDetectorControl();

  const dynamicDetectorState = useAppSelector(selectDetectorState);

  return (
    <Flex direction="column" gap="sm">
      <Title order={3}>{dynamicDetectorState.name}</Title>

      <Text c={(dynamicDetectorState?.connected ?? false) ? "green" : "red"}>
        {dynamicDetectorState.connected ? "Connected" : "Disconnected"}
      </Text>
      <div>
        <SegmentedControl
          disabled={
            !dynamicDetectorState.connected ||
            dynamicDetectorState.isChangingSettings
          }
          value={dynamicDetectorState.currentMode.exposure.toString()}
          data={[
            { value: "0", label: "40" },
            { value: "1", label: "50" },
            { value: "2", label: "67" },
            { value: "3", label: "100" },
            { value: "4", label: "200" },
            { value: "5", label: "500" },
            { value: "6", label: "1000" },
            { value: "7", label: "2000" },
          ]}
          fullWidth={false}
          onChange={(e) => {
            const num = parseInt(e);
            void setExposure(num);
          }}
        />
      </div>

      <div>
        <SegmentedControl
          disabled={
            !dynamicDetectorState.connected ||
            dynamicDetectorState.isChangingSettings
          }
          value={dynamicDetectorState.currentMode.gain.toString()}
          data={["1", "2", "4"]}
          onChange={(e) => {
            const num = parseInt(e);
            void setGain(num);
          }}
        />
      </div>
    </Flex>
  );
};
