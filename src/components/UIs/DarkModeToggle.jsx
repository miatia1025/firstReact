import React from "react";
import { Switch } from "@mui/material";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <Switch
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      name="darkModeToggle"
      color="default"
    />
  );
};

export default DarkModeToggle;
