import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import * as React from "react";

export const Page = () => {
  const titleMatch = useMatch("/");
  const navigate = useNavigate();

  return (
    <VStack h={"100%"} width={"100%"} gap={2}>
      <Box h={"100%"} w={"100%"} bg={"green.600"} p={10} borderRadius={5}>
        <Outlet />
      </Box>

      <HStack w={"100%"} justifyContent={"space-between"}>
        <Button
          size={"lg"}
          disabled={Boolean(titleMatch)}
          onClick={() => navigate("/")}
        >
          Which-Cocktail
        </Button>
        <Button size={"lg"} disabled>
          Build Menu
        </Button>
      </HStack>
    </VStack>
  );
};
