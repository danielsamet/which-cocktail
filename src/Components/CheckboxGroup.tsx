import { Box, Divider, Heading } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { Checkbox, CheckboxItem } from "./Checkbox";

type CheckboxGroupProps<Item extends CheckboxItem<Item>> = {
  title: string;
  items: Item[];
  selectedItems: Item[];
  setSelectedItems: Dispatch<SetStateAction<Item[]>>;
};

export const CheckboxGroup = <Item extends CheckboxItem<Item>>({
  title,
  items,
  selectedItems,
  setSelectedItems,
}: CheckboxGroupProps<Item>) => {
  return (
    <Box p={5}>
      <Heading size={"md"} textTransform={"capitalize"}>
        {title}
      </Heading>
      <Divider borderWidth={"1px"} borderColor={"#ffffffeb"} mb={2} />

      {items.map((item, index) => {
        return (
          <Checkbox
            item={item}
            key={`${item.name}-${index}`} // TODO: err, this ain't foolproof :upside-down-face:
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        );
      })}

      {items.length === 0 && "No items in this group"}
    </Box>
  );
};
