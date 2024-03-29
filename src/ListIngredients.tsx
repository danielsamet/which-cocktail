import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CheckboxGroup } from "./Components/CheckboxGroup";
import { IngredientsContext, INGREDIENT_PROPERTIES_TO_COMPARE } from "./App";
import { Ingredient, ingredientTypes } from "./data/types";
import { useNavigate } from "react-router-dom";

export const ListIngredients = () => {
  const { ingredients, selectedIngredients, setSelectedIngredients } =
    useContext(IngredientsContext);

  const navigate = useNavigate();

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
          const ingredientsByType = ingredients
            .filter((ingredient) => ingredient.type === type)
            .map((ingredient) => ({
              ...ingredient,
              callback: ingredient.address
                ? () => navigate(ingredient.address ?? "/ingredients/unknown")
                : undefined,
            }));
          return (
            <CheckboxGroup<Ingredient>
              key={type}
              title={`${type}s`}
              items={ingredientsByType}
              selectedItems={selectedIngredients}
              setSelectedItems={setSelectedIngredients}
              checkWithProperties={INGREDIENT_PROPERTIES_TO_COMPARE}
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
