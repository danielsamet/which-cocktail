import { Box, chakra, Flex, Text, useCheckbox } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type CheckboxProps = {
  label: string;
  selectedItems: string[];
  setSelectedItems: (selectedItems: (items: string[]) => string[]) => void;
};

export const Checkbox = ({
  label,
  selectedItems,
  setSelectedItems,
}: CheckboxProps) => {
  const makeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedItems((items: string[]) => {
      if (event.target.checked) return [label, ...items];
      else return items.filter((value) => value !== label);
    });
  };

  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox({
      onChange: makeChange,
      isChecked: selectedItems.includes(label),
    });

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      my={1}
      bg="gray.100"
      borderColor="green.500"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="green.500"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="green.500" />}
      </Flex>
      <Text
        color="gray.800"
        fontWeight={"semibold"}
        textTransform={"capitalize"}
        {...getLabelProps()}
      >
        {label}
      </Text>
    </chakra.label>
  );
};
