import { Box, chakra, Flex, Text, useCheckbox } from "@chakra-ui/react";
import { ChangeEvent } from "react";

export type CheckboxItem = {
  name: string;
};

type CheckboxProps<Item extends CheckboxItem> = {
  item: Item;
  selectedItems: Item[];
  setSelectedItems: (selectedItems: (items: Item[]) => Item[]) => void;
};

export const Checkbox = <Item extends CheckboxItem>({
  item,
  selectedItems,
  setSelectedItems,
}: CheckboxProps<Item>) => {
  const makeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedItems((items: Item[]) =>
      event.target.checked
        ? [item, ...items]
        : items.filter((value) => value !== item)
    );
  };

  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox({
      onChange: makeChange,
      isChecked: selectedItems.includes(item),
    });

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      my={1}
      bg="gray.100"
      borderColor="green.500"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="green.500"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="green.500" />}
      </Flex>
      <Text
        color="gray.800"
        fontWeight={"semibold"}
        textTransform={"capitalize"}
        {...getLabelProps()}
      >
        {item.name}
      </Text>
    </chakra.label>
  );
};
