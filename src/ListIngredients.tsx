import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CheckboxGroup } from "./Components/CheckboxGroup";
import { IngredientsContext } from "./App";
import { Ingredient, ingredientTypes } from "./data/types";

export const ListIngredients = () => {
  const { ingredients, selectedIngredients, setSelectedIngredients } =
    useContext(IngredientsContext);

  const selectAll = () => {
    setSelectedIngredients(ingredients);
  };

  const deselectAll = () => {
    setSelectedIngredients([]);
  };

  return (
    <Box
      p={5}
      bg={"whiteAlpha.200"}
      w={"25em"}
      height={"100%"}
      borderRadius={5}
      display={"flex"}
      flexDirection={"column"}
    >
      <Heading size={"lg"} textAlign={"center"}>
        Ingredients
      </Heading>

      <Box
        overflowY={"auto"}
        overflowX="hidden"
        display={"flex"}
        flexGrow={1}
        flexDirection={"column"}
        mt={5}
      >
        {ingredientTypes.map((type) => {
          const ingredientsByType = ingredients.filter(
            (ingredient) => ingredient.type === type
          );
          return (
            <CheckboxGroup<Ingredient>
              key={type}
              title={`${type}s`}
              items={ingredientsByType}
              selectedItems={selectedIngredients}
              setSelectedItems={setSelectedIngredients}
            />
          );
        })}
      </Box>

      <Box display={"flex"} justifyContent={"space-between"} mt={"auto"} pt={5}>
        <Button onClick={selectAll}>Select All</Button>
        <Button onClick={deselectAll}>Deselect All</Button>
      </Box>
    </Box>
  );
};
