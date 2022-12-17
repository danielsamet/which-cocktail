import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CheckboxGroup } from "./Components/CheckboxGroup";
import { IngredientsContext } from "./App";

export const ListIngredients = () => {
  const { ingredients, setSelectedIngredients } =
    useContext(IngredientsContext);

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
          setSelectedItems={setSelectedIngredients}
        />
        <CheckboxGroup
          title={"Mixers"}
          items={ingredients.mixers}
          setSelectedItems={setSelectedIngredients}
        />
        <CheckboxGroup
          title={"Juices"}
          items={ingredients.juices}
          setSelectedItems={setSelectedIngredients}
        />
        <CheckboxGroup
          title={"Liqueurs"}
          items={ingredients.liqueurs}
          setSelectedItems={setSelectedIngredients}
        />
        <CheckboxGroup
          title={"Other"}
          items={ingredients.other}
          setSelectedItems={setSelectedIngredients}
        />
      </Box>

      <Box display={"flex"} justifyContent={"space-between"} mt={"auto"} pt={5}>
        <Button>Select All</Button>
        <Button>Deselect All</Button>
      </Box>
    </Box>
  );
};
