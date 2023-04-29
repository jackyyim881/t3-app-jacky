import { FC, useState } from "react";
import { useDebouncedState } from "@mantine/hooks";
import { TextInput, Text } from "@mantine/core";

interface blogProps {}

const mockResults = [
  "Apple",
  "Banana",
  "Orange",
  "Pineapple",
  "Strawberry",
  "Watermelon",
  "Mango",
  "Peach",
];

const ITEMS_PER_PAGE = 5;

const blog: FC<blogProps> = ({}) => {
  const [value, setValue] = useDebouncedState("", 200, { leading: true });
  const [visibleItems, setVisibleItems] = useState(
    mockResults.slice(0, ITEMS_PER_PAGE)
  );
  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Text>Debounced value: {value}</Text>
    </>
  );
};

export default blog;
