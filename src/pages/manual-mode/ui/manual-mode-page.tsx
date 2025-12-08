import "./manual-mode-page.css";
import { AppShell, Burger, Text, Group, Flex, Center } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DetectorControlWidget } from "../../../features/detectorControl/ui/detectorControlWidget.tsx";
import { DetectorLiveView } from "../../../features/detectorLiveView/ui/detectorILiveViewWidget.tsx";
import { FiltersSelection } from "../../../features/imageProcessingControl/ui/filtersSelection.tsx";

function ManualModePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      layout="alt"
      navbar={{ width: 470, breakpoint: "sm", collapsed: { mobile: !opened } }}
      aside={{
        width: 470,
        breakpoint: "md",
        collapsed: { desktop: false, mobile: true },
      }}
      padding="md"
    >
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Navbar</Text>
        </Group>
      </AppShell.Navbar>
      <AppShell.Main>
        <Center>
          <DetectorLiveView />
        </Center>
      </AppShell.Main>
      <AppShell.Aside p="md">
        <Flex direction="column" gap="md">
          <DetectorControlWidget />
          <FiltersSelection />
        </Flex>
      </AppShell.Aside>
    </AppShell>
  );
}

export default ManualModePage;
