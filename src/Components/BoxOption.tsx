import React, { useEffect, useState } from "react";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import { toTitleCase } from "../utils/general";

export const BoxOption = ({
  name,
  selected = false,
  setSelectedIngredient,
}: {
  name: string;
  selected?: boolean;
  setSelectedIngredient: (ingredient: string) => void;
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(selected);

  useEffect(() => {
    setSelectedIngredient(name);
    // eslint-disable-next-line
  }, [isChecked]);

  return (
    <Box
      m={1}
      p={2}
      w={"15em"}
      border={"2px"}
      borderRadius={5}
      bg={"whiteAlpha.200"}
      borderColor={"blackAlpha.400"}
      cursor={"pointer"}
      onClick={() => setIsChecked(!isChecked)}
    >
      <Checkbox
        colorScheme={"green"}
        isChecked={isChecked}
        onChange={({ currentTarget }: React.ChangeEvent<HTMLInputElement>) =>
          setIsChecked(!currentTarget.checked)
        }
      >
        <Text px={2}>{toTitleCase(name)}</Text>
      </Checkbox>
    </Box>
  );
};
