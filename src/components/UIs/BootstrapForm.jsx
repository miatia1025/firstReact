// src/components/forms/BootstrapForm.jsx
import React, { useState } from "react";
import { Form, Button, Accordion } from "react-bootstrap";

const BootstrapForm = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");

  return (
    <Form>
      <Form.Group controlId="textField">
        <Form.Label>Text Field</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="numberField">
        <Form.Label>Number Field</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Form.Group controlId="dropdown">
        <Form.Label>Dropdown</Form.Label>
        <Form.Control
          as="select"
          value={dropdownValue}
          onChange={(e) => setDropdownValue(e.target.value)}
        >
          <option value="">None</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="checkbox">
        <Form.Check
          type="checkbox"
          label="Checkbox"
          checked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
        />
      </Form.Group>
      <Form.Group controlId="radioButtons">
        <Form.Label>Radio Buttons</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Option 1"
            name="radioOptions"
            value="Option 1"
            checked={radioValue === "Option 1"}
            onChange={(e) => setRadioValue(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Option 2"
            name="radioOptions"
            value="Option 2"
            checked={radioValue === "Option 2"}
            onChange={(e) => setRadioValue(e.target.value)}
          />
        </div>
      </Form.Group>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Optional Section</Accordion.Header>
          <Accordion.Body>
            <Form.Group controlId="optionalField">
              <Form.Label>Optional Text Field</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default BootstrapForm;
