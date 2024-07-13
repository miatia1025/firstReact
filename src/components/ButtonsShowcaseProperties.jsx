import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export function ButtonsShowcaseProperties() {
  return (
    <div>
      <div id="containedColors">
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="inherit">
          Inherit
        </Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </div>
      <div id="containedIcons">
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      <div id="containedSizes">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
      <div id="containedWidth">
        <Button variant="contained" fullWidth>
          Full Width
        </Button>
      </div>
    </div>
  );
}
