import "./manual-mode-page.css";
import { AppShell, Burger, Text, Group, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DetectorControlWidget } from "../../../features/detector-control/ui/detector-control-widget.tsx";

function ManualModePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 440, breakpoint: "sm", collapsed: { mobile: !opened } }}
      aside={{
        width: 440,
        breakpoint: "md",
        collapsed: { desktop: false, mobile: true },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          Header
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Navbar</Text>
        </Group>
      </AppShell.Navbar>
      <AppShell.Main>
        <Text>This is the main section, your app content here.</Text>
        <Text>
          Alt layout demo – navbar and aside go all the way from top to bottom.
        </Text>
      </AppShell.Main>
      <AppShell.Aside p="md">
        <Flex direction="column">
          <DetectorControlWidget />
        </Flex>
      </AppShell.Aside>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
}

export default ManualModePage;
