import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CheckboxGroup } from "./Components/CheckboxGroup";
import { IngredientsContext } from "./App";

export const ListIngredients = () => {
  const { ingredients, selectedIngredients, setSelectedIngredients } =
    useContext(IngredientsContext);

  const selectAll = () => {
    setSelectedIngredients([
      ...ingredients.bases,
      ...ingredients.mixers,
      ...ingredients.juices,
      ...ingredients.liqueurs,
      ...ingredients.other,
    ]);
  };

  const deselectAll = () => {
    setSelectedIngredients([]);
  };

  return (
    <Box
      p={5}
      bg={"whiteAlpha.200"}
      w={"20em"}
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
        <CheckboxGroup
          title={"Bases"}
          items={ingredients.bases}
          selectedItems={selectedIngredients}
          setSelectedItems={setSelectedIngredients}
        />
        <CheckboxGroup
          title={"Mixers"}
          items={ingredients.mixers}
          selectedItems={selectedIngredients}
          setSelectedItems={setSelectedIngredients}
        />
        <CheckboxGroup
          title={"Juices"}
          items={ingredients.juices}
          selectedItems={selectedIngredients}
          setSelectedItems={setSelectedIngredients}
        />
        <CheckboxGroup
          title={"Liqueurs"}
          items={ingredients.liqueurs}
          selectedItems={selectedIngredients}
          setSelectedItems={setSelectedIngredients}
        />
        <CheckboxGroup
          title={"Other"}
          items={ingredients.other}
          selectedItems={selectedIngredients}
          setSelectedItems={setSelectedIngredients}
        />
      </Box>

      <Box display={"flex"} justifyContent={"space-between"} mt={"auto"} pt={5}>
        <Button onClick={selectAll}>Select All</Button>
        <Button onClick={deselectAll}>Deselect All</Button>
      </Box>
    </Box>
  );
};
