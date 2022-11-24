import { Box, ChakraProvider, HStack, theme } from "@chakra-ui/react";
import { TitleBlock } from "./TitleBlock";
import { ListIngredients } from "./ListIngredients";
import { ListCocktails } from "./ListCocktails";
import { useState } from "react";

export const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  return (
    <ChakraProvider theme={theme}>
      <HStack height={"100vh"} p={5} gap={5}>
        <Box h={"100%"} display={"flex"} gap={5}>
          <ListIngredients
            height={"100%"}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />

          <ListCocktails height={"100%"} ingredients={selectedIngredients} />
        </Box>

        <TitleBlock />
      </HStack>
    </ChakraProvider>
  );
};
