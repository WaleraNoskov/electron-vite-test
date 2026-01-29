import { useFilterSwitching } from "../../../features/imageEditing";
import { Flex, SegmentedControl, Title } from "@mantine/core";

export const FilterSwitcherWidget = () => {
  const { filter, setFilter } = useFilterSwitching();
  return (
    <>
      <Flex direction="column" gap="sm">
        <Title order={3}>Current Filter</Title>
        <SegmentedControl
          orientation="horizontal"
          value={filter.toString()}
          data={[
            { value: "-1", label: "None" },
            { value: "1", label: "HDI" },
            { value: "4", label: "Alignment High" },
            { value: "6", label: "Relief" },
          ]}
          onChange={(newValue) => {
            const num = parseInt(newValue);
            void setFilter(num);
          }}
        />
      </Flex>
    </>
  );
};
