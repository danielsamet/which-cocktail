import { Box, BoxProps, Heading } from "@chakra-ui/react";
import React from "react";
import { BoxOption } from "./BoxOption";

export const BoxOptionsSelector = ({
  title,
  items,
  height = "40em",
}: {
  title: string;
  items: string[];
  height?: BoxProps["height"];
}) => {
  return (
    <Box p={5} bg={"whiteAlpha.200"} w={"fit-content"} height={height}>
      <Heading size={"lg"} textAlign={"center"}>
        {title}
      </Heading>

      <Box overflowY={"auto"} overflowX="hidden" height={"90%"} mt={5}>
        {items.map((item) => (
          <BoxOption name={item} />
        ))}
      </Box>
    </Box>
  );
};
