import { Box, Button, chakra, Flex, Text, useCheckbox } from "@chakra-ui/react";
import { ChangeEvent } from "react";

export type CheckboxItem<Item> = {
  name: string;
  callback?: (item: Item) => void;
  callbackButtonIcon?: string;
};

type CheckboxProps<Item extends CheckboxItem<Item>> = {
  item: Item;
  selectedItems: Item[];
  setSelectedItems: (selectedItems: (items: Item[]) => Item[]) => void;
};

export const Checkbox = <Item extends CheckboxItem<Item>>({
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
      bg="transparent"
      _hover={{ background: "blackAlpha.400" }}
      borderRadius={2}
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
        borderColor="green.600"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="green.500" />}
      </Flex>
      <Text
        color="gray.100"
        fontWeight={"semibold"}
        textTransform={"capitalize"}
        {...getLabelProps()}
      >
        {item.name}
      </Text>
      {item.callback && (
        <Button
          size={"xs"}
          marginStart={"auto"}
          onClick={() => item.callback && item.callback(item)}
        >
          {item.callbackButtonIcon || "?"}
        </Button>
      )}
    </chakra.label>
  );
};
