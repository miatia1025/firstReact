import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

const ButtonsShowcaseLoading = () => {
  return (
    <div id="containedLoading">
      <Button variant="contained" disabled>
        Loading
        <CircularProgress size={24} />
      </Button>
    </div>
  );
};

export default ButtonsShowcaseLoading;
