import { Box, chakra, Flex, Text, useCheckbox } from "@chakra-ui/react";
import { useEffect } from "react";

type CheckboxProps = {
  label: string;
  setSelectedItems: (selectedItems: (items: string[]) => string[]) => void;
};

export const Checkbox = ({ label, setSelectedItems }: CheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox();

  useEffect(() => {
    setSelectedItems((items: string[]) => {
      if (state.isChecked) return [label, ...items];
      else return items.filter((value) => value !== label);
    });
  }, [state.isChecked, label, setSelectedItems]);
  // TODO: Investigate how to directly use the user event (rather than tracking it after the fact with useEffect)

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
