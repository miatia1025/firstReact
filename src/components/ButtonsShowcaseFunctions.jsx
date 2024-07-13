import { Button } from "@mui/material";

export function ButtonsShowcaseFunctions() {
  return (
    <div id="containedLink">
      <Button variant="contained" onClick={() => alert("Clicked")}>
        Event Handler
      </Button>
    </div>
  );
}
