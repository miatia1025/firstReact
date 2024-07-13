import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

const ChakraForm = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (value) => {
    setRadioValue(value);
  };

  return (
    <VStack spacing={4}>
      <FormControl>
        <FormLabel>Text Field</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Number Field</FormLabel>
        <Input type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Dropdown</FormLabel>
        <Select
          value={dropdownValue}
          onChange={(e) => setDropdownValue(e.target.value)}
        >
          <option value="">None</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Checkbox</FormLabel>
        <Checkbox
          isChecked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
          className="chakra-checkbox__control"
        >
          <span className="chakra-checkbox__label">Checkbox Label</span>
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Radio Buttons</FormLabel>
        <RadioGroup value={radioValue} onChange={handleRadioChange}>
          <Radio value="Option 1" className="chakra-radio__control">
            <span className="chakra-radio__label">Option 1</span>
          </Radio>
          <Radio value="Option 2" className="chakra-radio__control">
            <span className="chakra-radio__label">Option 2</span>
          </Radio>
        </RadioGroup>
      </FormControl>
      <Accordion>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Optional Section
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <FormControl>
              <FormLabel>Optional Text Field</FormLabel>
              <Input />
            </FormControl>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Button colorScheme="blue">Submit</Button>
    </VStack>
  );
};

export default ChakraForm;
