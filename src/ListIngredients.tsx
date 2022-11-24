import { Box, BoxProps, Heading } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { cocktails } from "./cocktails";
import { BoxOption } from "./Components/BoxOption";

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
        {ingredients.map((ingredient) => (
          <BoxOption
            name={ingredient}
            selected={selectedIngredients.includes(ingredient)}
            setSelectedIngredient={setSelectedIngredient}
          />
          // <Box
          //   key={ingredient}
          //   m={1}
          //   p={2}
          //   w={"15em"}
          //   border={"2px"}
          //   borderRadius={5}
          //   bg={"whiteAlpha.200"}
          //   borderColor={"blackAlpha.400"}
          //   cursor={"pointer"}
          //   onClick={() => setSelectedIngredient(ingredient)}
          // >
          //   <Checkbox
          //     colorScheme={"green"}
          //     isChecked={selectedIngredients.includes(ingredient)}
          //     onChange={() => {
          //       setSelectedIngredient(ingredient);
          //     }}
          //   >
          //     <Text px={2}>{toTitleCase(ingredient)}</Text>
          //   </Checkbox>
          // </Box>
        ))}
      </Box>
    </Box>
  );
};
