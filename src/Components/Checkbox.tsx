import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  Text,
  useCheckbox,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";

export type CheckboxItem<Item> = {
  name: string;
  details?: string[];
  callback?: (item: Item) => void;
  callbackButtonIcon?: string;
};

type CheckboxProps<Item extends CheckboxItem<Item>> = {
  item: Item;
  selectedItems: Item[];
  setSelectedItems: (selectedItems: (items: Item[]) => Item[]) => void;
  checkWithProperties?: (keyof Item)[];
};

/**
 * Checkbox
 * @param item
 * @param selectedItems
 * @param setSelectedItems
 * @param checkWithProperties [item's properties to use when checking if it exists in selectedItems]
 */
export const Checkbox = <Item extends CheckboxItem<Item>>({
  item,
  selectedItems,
  setSelectedItems,
  checkWithProperties,
}: CheckboxProps<Item>) => {
  const isItemSelected = (items: Item[]): boolean => {
    if (checkWithProperties === undefined) return items.includes(item);

    return items.some((selectedItem) =>
      checkWithProperties.every(
        (property) => selectedItem[property] === item[property]
      )
    );
  };

  const makeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedItems((items: Item[]) =>
      event.target.checked
        ? [item, ...items]
        : items.filter((value) => !isItemSelected([value]))
    );
  };

  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox({
      onChange: makeChange,
      isChecked: isItemSelected(selectedItems),
    });

  return (
    <chakra.label
      w={"100%"}
      display="flex"
      alignItems="center"
      cursor="pointer"
      gridColumnGap={2}
      bg="transparent"
      borderRadius={3}
      my={1}
      px={3}
      py={item.details ? 2 : 1}
      _hover={{ background: "blackAlpha.400" }}
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <VStack alignItems={"start"} width={"100%"}>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Box>
            <Flex
              alignItems="center"
              justifyContent={"center"}
              border="2px solid"
              borderColor="green.600"
              w={"4"}
              h={"4"}
              {...getCheckboxProps()}
            >
              {state.isChecked && (
                <Box w={2} h={2} mx={"auto"} bg="green.500" />
              )}
            </Flex>
          </Box>
          <Text
            color="gray.100"
            fontWeight={"semibold"}
            textTransform={"capitalize"}
            width={"90%"}
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
        </HStack>
        {item.details && (
          <Text
            marginTop={"0.1em !important"}
            paddingStart={"1.8em"}
            width={"90%"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            textTransform={"capitalize"}
            color={"whiteAlpha.600"}
            fontSize={"sm"}
          >
            {item.details.join(" / ")}
          </Text>
        )}
      </VStack>
    </chakra.label>
  );
};
