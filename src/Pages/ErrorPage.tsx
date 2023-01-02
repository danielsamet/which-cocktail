import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const ErrorPage = () => {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? (
    <i>{error.statusText || error.statusText}</i>
  ) : null;

  return (
    <Box
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>{status}</Text>
    </Box>
  );
};
