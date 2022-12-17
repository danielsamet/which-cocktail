import { Box, ChakraProvider, HStack, theme } from "@chakra-ui/react";
import { TitleBlock } from "./TitleBlock";
import { ListIngredients } from "./ListIngredients";
import { ListCocktails } from "./ListCocktails";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ingredients } from "./data";

type IngredientValues = {
  ingredients: {
    bases: string[];
    mixers: string[];
    juices: string[];
    liqueurs: string[];
    other: string[];
  };
  selectedIngredients: string[];
  setSelectedIngredients: Dispatch<SetStateAction<string[]>>;
};

const ingredientValues: IngredientValues = {
  ingredients: {
    bases: ingredients.bases,
    mixers: ingredients.mixers,
    juices: ingredients.juices,
    liqueurs: ingredients.liqueurs,
    other: ingredients.other,
  },
  selectedIngredients: [],
  setSelectedIngredients: () => null,
};

export const IngredientsContext =
  createContext<IngredientValues>(ingredientValues);

export const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  return (
    <ChakraProvider theme={theme}>
      <IngredientsContext.Provider
        value={{
          ...ingredientValues,
          selectedIngredients: selectedIngredients,
          setSelectedIngredients: setSelectedIngredients,
        }}
      >
        <HStack height={"100vh"} p={5} gap={5}>
          <Box h={"100%"} display={"flex"} gap={5}>
            <ListIngredients />

            <ListCocktails height={"100%"} ingredients={selectedIngredients} />
          </Box>

          <TitleBlock />
        </HStack>
      </IngredientsContext.Provider>
    </ChakraProvider>
  );
};
