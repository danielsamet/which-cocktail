import { Box, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export const TitleBlock = () => {
  return (
    <Box
      h={"100%"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Heading fontSize={"5em"} width={"fit-content"}>
        which-cocktail?!
      </Heading>

      <Text
        color={"blackAlpha.800"}
        fontWeight={"semibold"}
        maxW={"34em"}
        textAlign={"justify"}
      >
        Welcome to which-cocktail, a webapp to help you find out which cocktails
        you can make with the ingredients you have. Then, you can even print out
        a "customer" menu and a "mixer" menu too!
      </Text>
    </Box>
  );
};
