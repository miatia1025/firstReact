import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

const ButtonsShowcaseGroup = () => {
  return (
    <div id="containedGroup">
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="Outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonsShowcaseGroup;
