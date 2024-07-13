// src/components/forms/AntdForm.jsx
import React, { useState } from "react";
import { Form, Input, Button, Select, Checkbox, Radio, Collapse } from "antd";

const { Panel } = Collapse;

const AntdForm = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");

  return (
    <Form layout="vertical">
      <Form.Item label="Text Field">
        <Input />
      </Form.Item>
      <Form.Item label="Number Field">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Dropdown">
        <Select
          value={dropdownValue}
          onChange={(value) => setDropdownValue(value)}
        >
          <Select.Option value="">None</Select.Option>
          <Select.Option value="Option 1">Option 1</Select.Option>
          <Select.Option value="Option 2">Option 2</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Checkbox">
        <Checkbox
          checked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
        />
      </Form.Item>
      <Form.Item label="Radio Buttons">
        <Radio.Group
          value={radioValue}
          onChange={(e) => setRadioValue(e.target.value)}
        >
          <Radio value="Option 1">Option 1</Radio>
          <Radio value="Option 2">Option 2</Radio>
        </Radio.Group>
      </Form.Item>
      <Collapse>
        <Panel header="Optional Section" key="1">
          <Form.Item label="Optional Text Field">
            <Input />
          </Form.Item>
        </Panel>
      </Collapse>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AntdForm;
