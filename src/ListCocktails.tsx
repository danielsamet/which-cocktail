import { Box, BoxProps, Button, Heading } from "@chakra-ui/react";
import { BoxOption } from "./Components/BoxOption";
import React from "react";
import { cocktails } from "./cocktails";

export const ListCocktails = ({
  height = "40em",
  ingredients,
}: {
  height?: BoxProps["height"];
  ingredients?: string[];
}) => {
  const cocktailNames = cocktails.map((cocktail) => cocktail.name);

  return (
    <Box
      p={5}
      bg={"whiteAlpha.200"}
      w={"20em"}
      height={height}
      borderRadius={5}
      display={"flex"}
      flexDirection={"column"}
    >
      <Heading size={"lg"} textAlign={"center"} mb={5}>
        Cocktails
      </Heading>

      {ingredients && ingredients.length > 0 ? (
        <Box
          overflowY={"auto"}
          overflowX="hidden"
          display={"flex"}
          flexGrow={1}
          flexDirection={"column"}
          mt={5}
        >
          {/*{cocktailNames.map((item) => (*/}
          {/*  <BoxOption name={item} key={item} />*/}
          {/*))}*/}
        </Box>
      ) : (
        <Box bg={"blue.800"} p={5} fontSize={"lg"} textAlign={"center"}>
          Select ingredients to see cocktails appear here!
        </Box>
      )}

      <Box display={"flex"} justifyContent={"space-between"} mt={"auto"} pt={5}>
        <Button disabled={ingredients && ingredients.length === 0}>
          Select All
        </Button>
        <Button disabled={ingredients && ingredients.length === 0}>
          Deselect All
        </Button>
      </Box>
    </Box>
  );
};
