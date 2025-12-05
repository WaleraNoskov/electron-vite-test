import "./manual-mode-page.css";
import { AppShell, Burger, Text, Group, Flex, Center } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DetectorControlWidget } from "../../../features/detectorControl/ui/detectorControlWidget.tsx";
import { DetectorLiveView } from "../../../features/detectorLiveView/ui/detectorILiveViewWidget.tsx";

function ManualModePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      layout="alt"
      navbar={{ width: 440, breakpoint: "sm", collapsed: { mobile: !opened } }}
      aside={{
        width: 440,
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
        <Flex direction="column">
          <DetectorControlWidget />
        </Flex>
      </AppShell.Aside>
      {/*<AppShell.Footer p="md">Footer</AppShell.Footer>*/}
    </AppShell>
  );
}

export default ManualModePage;
