import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CocktailsContext } from "./App";
import { CheckboxGroup } from "./Components/CheckboxGroup";
import { Cocktail } from "./data/types";

export const ListCocktails = () => {
  const { availableCocktails, selectedCocktails, setSelectedCocktails } =
    useContext(CocktailsContext);

  const selectAll = () => {
    setSelectedCocktails(availableCocktails);
  };

  const deselectAll = () => {
    setSelectedCocktails([]);
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
      <Heading size={"lg"} textAlign={"center"} mb={5}>
        Cocktails
      </Heading>

      {availableCocktails && availableCocktails.length > 0 ? (
        <Box
          overflowY={"auto"}
          overflowX="hidden"
          display={"flex"}
          flexGrow={1}
          flexDirection={"column"}
        >
          <CheckboxGroup<Cocktail>
            title={"Results"}
            labels={availableCocktails.map((cocktail) => cocktail.name)}
            items={availableCocktails}
            selectedItems={selectedCocktails}
            setSelectedItems={setSelectedCocktails}
          />
        </Box>
      ) : (
        <Box bg={"blue.800"} p={5} fontSize={"lg"} textAlign={"center"}>
          Select ingredients to see cocktails appear here!
        </Box>
      )}

      <Box display={"flex"} justifyContent={"space-between"} mt={"auto"} pt={5}>
        <Button
          onClick={selectAll}
          disabled={availableCocktails && availableCocktails.length === 0}
        >
          Select All
        </Button>
        <Button
          onClick={deselectAll}
          disabled={availableCocktails && availableCocktails.length === 0}
        >
          Deselect All
        </Button>
      </Box>
    </Box>
  );
};
