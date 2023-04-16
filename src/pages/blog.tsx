import { FC } from "react";
import { useDebouncedState } from "@mantine/hooks";
import { TextInput, Text } from "@mantine/core";

interface blogProps {}

const blog: FC<blogProps> = ({}) => {
  const [value, setValue] = useDebouncedState("", 200, { leading: true });
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
