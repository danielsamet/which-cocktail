import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { useMatch } from "react-router-dom";
import { useContext } from "react";
import { CocktailsContext } from "../App";

export const CocktailPage = () => {
  const match = useMatch("cocktails/:name");
  const { cocktails } = useContext(CocktailsContext);

  if (!match) return <Box>Error</Box>;

  const cocktail = cocktails
    .filter((cocktail_item) => cocktail_item.urlSafeName === match.params.name)
    .at(0);

  if (!cocktail) return <Box>Not found!</Box>;

  return (
    <Box>
      <Heading textTransform={"capitalize"}>{cocktail.name}</Heading>
      <Divider mb={5} />
      <Text>{cocktail.description}</Text>
    </Box>
  );
};
