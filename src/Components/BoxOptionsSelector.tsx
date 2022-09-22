import { Box, BoxProps, Button, Heading } from "@chakra-ui/react";
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
    <Box
      p={5}
      bg={"whiteAlpha.200"}
      w={"fit-content"}
      height={height}
      borderRadius={5}
      display={"flex"}
      flexDirection={"column"}
    >
      <Heading size={"lg"} textAlign={"center"}>
        {title}
      </Heading>

      <Box
        overflowY={"auto"}
        overflowX="hidden"
        display={"flex"}
        flexGrow={1}
        flexDirection={"column"}
        mt={5}
      >
        {items.map((item) => (
          <BoxOption name={item} />
        ))}
      </Box>

      <Box display={"flex"} justifyContent={"center"} pt={5}>
        <Button bg={"green.500"} color={"blackAlpha.900"}>
          Build Menu!
        </Button>
      </Box>
    </Box>
  );
};
