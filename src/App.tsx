import { ChakraProvider, theme } from "@chakra-ui/react";
import { IngredientsSelector } from "./IngredientsSelector";

export const App = () => (
  <ChakraProvider theme={theme}>
    <IngredientsSelector />
  </ChakraProvider>
);
