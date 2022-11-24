import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";

export const TitleBlock = () => {
  return (
    <VStack h={"100%"} width={"100%"} gap={2}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        height={"100%"}
        width={"100%"}
        bg={"green.600"}
        p={5}
        borderRadius={5}
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
          Welcome to which-cocktail, a webapp to help you find out which
          cocktails you can make with the ingredients you have. Then, you can
          even print out a "customer" menu and a "mixer" menu too!
        </Text>
      </Box>

      <HStack w={"100%"} justifyContent={"space-between"}>
        <Button size={"lg"} disabled>
          Which-Cocktail
        </Button>
        <Button size={"lg"}>Build Menu</Button>
      </HStack>
    </VStack>
  );
};
