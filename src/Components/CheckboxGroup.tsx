import { Box, Divider, Heading } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { Checkbox } from "./Checkbox";

type CheckboxGroupProps = {
  title: string;
  items: string[];
  setSelectedItems: Dispatch<SetStateAction<string[]>>;
};

export const CheckboxGroup = ({
  title,
  items,
  setSelectedItems,
}: CheckboxGroupProps) => {
  return (
    <Box p={5}>
      <Heading size={"md"}>{title}</Heading>
      <Divider borderWidth={"1px"} borderColor={"#ffffffeb"} mb={2} />

      {items.map((item) => (
        <Checkbox label={item} key={item} setSelectedItems={setSelectedItems} />
      ))}

      {items.length === 0 && "No items in this group"}
    </Box>
  );
};
