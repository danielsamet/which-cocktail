import { Box, ChakraProvider, HStack, theme } from "@chakra-ui/react";
import { ListIngredients } from "./ListIngredients";
import { ListCocktails } from "./ListCocktails";
import * as React from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Cocktail, Ingredient } from "./data/types";
import { ingredients } from "./data/ingredients/all";
import { cocktails } from "./data/cocktails/all";
import { Page } from "./Pages/Page";

type IngredientValues = {
  ingredients: Ingredient[];
  selectedIngredients: Ingredient[];
  setSelectedIngredients: Dispatch<SetStateAction<Ingredient[]>>;
};

const ingredientValues: IngredientValues = {
  ingredients: ingredients,
  selectedIngredients: [],
  setSelectedIngredients: () => null,
};

type CocktailValues = {
  cocktails: Cocktail[];
  availableCocktails: Cocktail[];
  setAvailableCocktails: Dispatch<SetStateAction<Cocktail[]>>;
  selectedCocktails: Cocktail[];
  setSelectedCocktails: Dispatch<SetStateAction<Cocktail[]>>;
};

const cocktailValues: CocktailValues = {
  cocktails: cocktails,
  availableCocktails: [],
  setAvailableCocktails: () => null,
  selectedCocktails: [],
  setSelectedCocktails: () => null,
};

export const IngredientsContext =
  createContext<IngredientValues>(ingredientValues);

export const CocktailsContext = createContext<CocktailValues>(cocktailValues);

export const INGREDIENT_PROPERTIES_TO_COMPARE = [
  "type",
  "name",
] as (keyof Ingredient)[];

export const COCKTAIL_PROPERTIES_TO_COMPARE = ["name"] as (keyof Cocktail)[];

export const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    []
  );
  const [availableCocktails, setAvailableCocktails] = useState<Cocktail[]>([]);
  const [selectedCocktails, setSelectedCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    const areIngredientsAvailable = (cocktail: Cocktail) =>
      cocktail.components.every((ingredient) =>
        selectedIngredients.some((selectedIngredient) =>
          INGREDIENT_PROPERTIES_TO_COMPARE.every(
            (property) =>
              selectedIngredient[property] === ingredient.ingredient[property]
          )
        )
      );

    cocktailValues.cocktails.map((cocktail) => {
      setAvailableCocktails((currAvailableCocktails) =>
        areIngredientsAvailable(cocktail)
          ? !currAvailableCocktails.includes(cocktail)
            ? [...currAvailableCocktails, cocktail]
            : currAvailableCocktails
          : currAvailableCocktails.filter((item) => item !== cocktail)
      );
    });
  }, [selectedIngredients]);

  return (
    <ChakraProvider theme={theme}>
      <IngredientsContext.Provider
        value={{
          ingredients: ingredients.map((ingredient) => ({
            ...ingredient,
          })),
          selectedIngredients: selectedIngredients,
          setSelectedIngredients: setSelectedIngredients,
        }}
      >
        <CocktailsContext.Provider
          value={{
            cocktails: cocktails,
            availableCocktails: availableCocktails,
            setAvailableCocktails: setAvailableCocktails,
            selectedCocktails: selectedCocktails,
            setSelectedCocktails: setSelectedCocktails,
          }}
        >
          <HStack height={"100vh"} p={5} gap={5}>
            <Box h={"100%"} display={"flex"} gap={5}>
              <ListIngredients />
              <ListCocktails />
            </Box>

            <Page />
          </HStack>
        </CocktailsContext.Provider>
      </IngredientsContext.Provider>
    </ChakraProvider>
  );
};
