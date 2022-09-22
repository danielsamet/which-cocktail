import { Button, ChakraProvider, HStack, theme } from "@chakra-ui/react";
import { BoxOptionsSelector } from "./Components/BoxOptionsSelector";
import { cocktails } from "./cocktails";

export const App = () => {
  const cocktailNames = cocktails.map((cocktail) => cocktail.name);
  const ingredients = cocktails
    .map((ingredient) => ingredient.ingredients)
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);
  console.log(ingredients);

  return (
    <ChakraProvider theme={theme}>
      <HStack>
        <BoxOptionsSelector title={"Cocktails"} items={cocktailNames} />
        <BoxOptionsSelector title={"Ingredients"} items={ingredients} />
      </HStack>
      <Button bg={"green.600"} size={"lg"}>
        Build Menus
      </Button>
    </ChakraProvider>
  );
};
