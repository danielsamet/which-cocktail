import { Box, BoxProps, Button, Heading } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { bases, cocktails, juices, mixers } from "./data";
import { CheckboxGroup } from "./Components/CheckboxGroup";

export const ListIngredients = ({
  height = "40em",
  selectedIngredients,
  setSelectedIngredients,
}: {
  height?: BoxProps["height"];
  selectedIngredients: string[];
  setSelectedIngredients: Dispatch<SetStateAction<string[]>>;
}) => {
  const ingredients = cocktails
    .map((ingredient) => ingredient.ingredients)
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);

  const setSelectedIngredient = (ingredient: string) => {
    if (selectedIngredients.includes(ingredient))
      setSelectedIngredients(
        selectedIngredients.filter((value) => value !== ingredient)
      );
    else setSelectedIngredients([ingredient, ...selectedIngredients]);
  };

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
        <CheckboxGroup title={"Bases"} items={bases} />
        <CheckboxGroup title={"Mixers"} items={mixers} />
        <CheckboxGroup title={"Juices"} items={juices} />
      </Box>

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
