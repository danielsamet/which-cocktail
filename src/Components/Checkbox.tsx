import { Box, chakra, Flex, Text, useCheckbox } from "@chakra-ui/react";

type CheckboxProps = {
  label: string;
};

export const Checkbox = ({ label }: CheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox();

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
