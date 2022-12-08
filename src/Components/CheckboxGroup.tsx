import { Box, Divider, Heading } from "@chakra-ui/react";
import React from "react";
import { Checkbox } from "./Checkbox";

type CheckboxGroupProps = {
  title: string;
  items: string[];
};

export const CheckboxGroup = ({ title, items }: CheckboxGroupProps) => {
  return (
    <Box p={5}>
      <Heading size={"md"}>{title}</Heading>
      <Divider borderWidth={"1px"} borderColor={"#ffffffeb"} mb={2} />

      {items.map((item) => (
        <Checkbox label={item} key={item} />
      ))}
    </Box>
  );
};
