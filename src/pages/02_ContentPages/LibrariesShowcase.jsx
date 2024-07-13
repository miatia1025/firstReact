import React, { useState, useEffect } from "react";
import MaterialForm from "../../components/UIs/MaterialForm";
import AntdForm from "../../components/UIs/AntdForm";
import ChakraForm from "../../components/UIs/ChakraForm";
import TailwindForm from "../../components/UIs/TailwindForm";
import BootstrapForm from "../../components/UIs/BootstrapForm";
import DarkModeToggle from "../../components/UIs/DarkModeToggle";
import "./LibrariesShowcase.css";

export const LibrariesShowcase = () => {
  const [selectedLibrary, setSelectedLibrary] = useState("material");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(userPrefersDark);
  }, []);

  const renderForm = () => {
    switch (selectedLibrary) {
      case "material":
        return <MaterialForm />;
      case "antd":
        return <AntdForm />;
      case "chakra":
        return <ChakraForm />;
      case "tailwind":
        return <TailwindForm />;
      case "bootstrap":
        return <BootstrapForm />;
      default:
        return <MaterialForm />;
    }
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header">
        <select
          onChange={(e) => setSelectedLibrary(e.target.value)}
          value={selectedLibrary}
        >
          <option value="material">Material UI</option>
          <option value="antd">Ant Design</option>
          <option value="chakra">Chakra UI</option>
          <option value="tailwind">TailwindCSS</option>
          <option value="bootstrap">Bootstrap</option>
        </select>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="form-container">{renderForm()}</div>
    </div>
  );
};
