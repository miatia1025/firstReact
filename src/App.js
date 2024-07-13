// src/App.jsx
import React from "react";

import { RoutingHomeObject } from "./pages/01_NavPages/RoutingObjects/RoutingHomeObject";

import { ToggleColorMode } from "./components/FunctionalComponents/DarkModeToggle";

const App = () => {
  return (
    <div>
      <ToggleColorMode>
        <RoutingHomeObject />
      </ToggleColorMode>
    </div>
  );
};

export default App;
