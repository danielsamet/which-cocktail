import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { useMatch } from "react-router-dom";
import { ingredients } from "../data/ingredients";

export const IngredientPage = () => {
  const match = useMatch("ingredients/:type/:name");

  if (!match) return <Box>Error</Box>;

  const ingredient = ingredients
    .filter(
      (ingredient_item) =>
        ingredient_item.type === match.params.type &&
        ingredient_item.urlSafeName === match.params.name
    )
    .at(0);

  if (!ingredient) return <Box>Not found!</Box>;

  return (
    <Box>
      <Heading textTransform={"capitalize"}>{ingredient.name}</Heading>
      <Divider mb={5} />
      <Text>{ingredient.description}</Text>
    </Box>
  );
};
