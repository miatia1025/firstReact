// src/components/forms/TailwindForm.jsx
import React, { useState } from "react";

const TailwindForm = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");

  return (
    <form className="space-y-4">
      <div className="flex flex-col">
        <label className="text-gray-700">Text Field</label>
        <input type="text" className="border rounded-md p-2" />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Number Field</label>
        <input type="number" className="border rounded-md p-2" />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Dropdown</label>
        <select
          className="border rounded-md p-2"
          value={dropdownValue}
          onChange={(e) => setDropdownValue(e.target.value)}
        >
          <option value="">None</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Checkbox</label>
        <input
          type="checkbox"
          checked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Radio Buttons</label>
        <div>
          <input
            type="radio"
            value="Option 1"
            checked={radioValue === "Option 1"}
            onChange={(e) => setRadioValue(e.target.value)}
          />{" "}
          Option 1
          <input
            type="radio"
            value="Option 2"
            checked={radioValue === "Option 2"}
            onChange={(e) => setRadioValue(e.target.value)}
          />{" "}
          Option 2
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Optional Section</label>
        <details>
          <summary>Click to expand</summary>
          <input
            type="text"
            className="border rounded-md p-2 mt-2"
            placeholder="Optional Text Field"
          />
        </details>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default TailwindForm;
