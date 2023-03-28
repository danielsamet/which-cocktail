import { Badge, Box, Divider, Flex, Heading, Spacer } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { Checkbox, CheckboxItem } from "./Checkbox";

type CheckboxGroupProps<Item extends CheckboxItem<Item>> = {
  title: string;
  items: Item[];
  selectedItems: Item[];
  setSelectedItems: Dispatch<SetStateAction<Item[]>>;
  checkWithProperties?: (keyof Item)[];
};

/**
 * CheckboxGroup
 * @param title
 * @param items
 * @param selectedItems [these are items that have been (and should be marked as) selected - can include more items than the items parameter]
 * @param setSelectedItems
 * @param checkWithProperties
 */
export const CheckboxGroup = <Item extends CheckboxItem<Item>>({
  title,
  items,
  selectedItems,
  setSelectedItems,
  checkWithProperties,
}: CheckboxGroupProps<Item>) => {
  const selectedItemCount = selectedItems.filter((selectedItem) =>
    items.some((item) =>
      checkWithProperties === undefined
        ? item === selectedItem
        : checkWithProperties.every(
            (property) => item[property] === selectedItem[property]
          )
    )
  ).length;
  const itemCount = items.length;

  return (
    <Box p={5}>
      <Flex>
        <Heading size={"md"} textTransform={"capitalize"}>
          {title}
        </Heading>
        <Spacer />
        <Badge colorScheme="green" px={2} py={1} mr={2} mb={1}>
          {selectedItemCount}/{itemCount}
        </Badge>
      </Flex>
      <Divider borderWidth={"1px"} borderColor={"#ffffffeb"} mb={2} />

      {items.map((item, index) => {
        return (
          <Checkbox
            item={item}
            key={`${item.name}-${index}`} // TODO: err, this ain't foolproof :upside-down-face:
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            checkWithProperties={checkWithProperties}
          />
        );
      })}

      {items.length === 0 && "No items in this group"}
    </Box>
  );
};
