import { Box, ChakraProvider, Heading, Text, theme } from "@chakra-ui/react";
import { BoxOptionsSelector } from "./Components/BoxOptionsSelector";
import { cocktails } from "./cocktails";

export const App = () => {
  const cocktailNames = cocktails.map((cocktail) => cocktail.name);
  const ingredients = cocktails
    .map((ingredient) => ingredient.ingredients)
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <ChakraProvider theme={theme}>
      <Box
        height={"100vh"}
        p={5}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <BoxOptionsSelector
          title={"Ingredients"}
          items={ingredients}
          height={"100%"}
        />

        <Box height={"100%"} display={"flex"} alignItems={"center"}>
          <Box
            height={"20em"}
            width={"40em"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            bg={"green.600"}
            p={5}
            borderRadius={5}
          >
            <Heading>which-cocktail?!</Heading>

            <Text color={"blackAlpha.800"} fontWeight={"semibold"}>
              Welcome to which-cocktail, a webapp to help you find out which
              cocktails you can make with the ingredients you have. Then, you
              can even print out a "customer" menu and a "mixer" menu too!
            </Text>
          </Box>
        </Box>

        <BoxOptionsSelector
          title={"Cocktails"}
          items={cocktailNames}
          height={"100%"}
        />
      </Box>
    </ChakraProvider>
  );
};
