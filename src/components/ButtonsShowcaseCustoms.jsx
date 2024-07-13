import { styled } from "@mui/system";
import { Button } from "@mui/material";

const CustomButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 2px rgba(255,105,135,.3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const ButtonsShowcaseCustoms = (props) => {
  return (
    <div id="containedCustoms">
      <CustomButton {...props}>{props.children}</CustomButton>
    </div>
  );
};

export default ButtonsShowcaseCustoms;
