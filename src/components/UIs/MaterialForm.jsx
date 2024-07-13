import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Select,
  MenuItem,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MaterialForm = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const [selectedPCs, setSelectedPCs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIDs, setSelectedIDs] = useState({});

  const handlePCChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedPCs(typeof value === "string" ? value.split(",") : value);
  };

  const handleIDChange = (pc, id) => {
    setSelectedIDs((prev) => ({ ...prev, [pc]: id }));
  };

  const pcOptions = ["PC1", "PC2", "PC3", "PC4", "PC5", "PC6", "PC7"];
  const pcIDs = {
    PC1: [1.5, 1.2, 0.7, 0.45, 0.25, 0.1, 0.08],
    PC2: [1.4, 1.1, 0.6, 0.35, 0.2, 0.15, 0.05],
    PC3: [1.3, 1.0, 0.5, 0.25, 0.15, 0.1, 0.05],
    PC4: [1.2, 0.9, 0.4, 0.35, 0.2, 0.1, 0.08],
    PC5: [1.1, 0.8, 0.3, 0.25, 0.15, 0.1, 0.05],
    PC6: [1.0, 0.7, 0.4, 0.35, 0.2, 0.1, 0.08],
    PC7: [0.9, 0.6, 0.3, 0.25, 0.15, 0.1, 0.05],
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <FormGroup>
      <FormControl margin="normal">
        <FormLabel>Text Field</FormLabel>
        <TextField
          variant="outlined"
          fullWidth
          inputProps={{ style: { backgroundColor: "#333", color: "white" } }}
        />
      </FormControl>
      <FormControl margin="normal">
        <FormLabel>Number Field</FormLabel>
        <TextField
          type="number"
          variant="outlined"
          fullWidth
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            style: { backgroundColor: "#333", color: "white" },
          }}
        />
      </FormControl>
      <FormControl margin="normal">
        <FormLabel>Dropdown</FormLabel>
        <Select
          value={dropdownValue}
          onChange={(e) => setDropdownValue(e.target.value)}
          fullWidth
          inputProps={{ style: { backgroundColor: "#333", color: "white" } }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl margin="normal">
        <FormLabel>Checkbox</FormLabel>
        <Checkbox
          checked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
          disableRipple
        />
      </FormControl>
      <FormControl margin="normal">
        <FormLabel>Radio Buttons</FormLabel>
        <RadioGroup
          value={radioValue}
          onChange={(e) => setRadioValue(e.target.value)}
        >
          <FormControlLabel
            value="Option 1"
            control={<Radio disableRipple />}
            label="Option 1"
          />
          <FormControlLabel
            value="Option 2"
            control={<Radio disableRipple />}
            label="Option 2"
          />
        </RadioGroup>
      </FormControl>
      <FormControl margin="normal">
        <FormLabel>Optional Section</FormLabel>
        <Button variant="outlined" onClick={() => setModalOpen(true)}>
          Select PCs
        </Button>
      </FormControl>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            bgcolor: "background.paper",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            p: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Select PCs
          </Typography>
          <FormControl fullWidth margin="normal">
            <Select
              multiple
              value={selectedPCs}
              onChange={handlePCChange}
              renderValue={(selected) => selected.join(", ")}
              fullWidth
            >
              {pcOptions.map((pc) => (
                <MenuItem key={pc} value={pc}>
                  {pc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            onClick={handleClose}
            style={{ position: "absolute", top: 8, right: 8 }}
          >
            OK
          </Button>
        </Box>
      </Modal>
      <Accordion
        expanded={accordionExpanded}
        onChange={() => setAccordionExpanded(!accordionExpanded)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormLabel>Optional Section</FormLabel>
        </AccordionSummary>
        <AccordionDetails>
          {selectedPCs.length > 0 ? (
            selectedPCs.map((pc) => (
              <div key={pc} style={{ marginBottom: "16px" }}>
                <Typography variant="h6">{pc}</Typography>
                <RadioGroup
                  value={selectedIDs[pc]}
                  onChange={(e) => handleIDChange(pc, e.target.value)}
                >
                  {pcIDs[pc].map((id) => (
                    <FormControlLabel
                      key={id}
                      value={id}
                      control={<Radio />}
                      label={id}
                    />
                  ))}
                </RadioGroup>
                <TextField
                  type="number"
                  label="Amount"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    style: { backgroundColor: "#333", color: "white" },
                  }}
                  style={{ marginTop: "8px" }}
                />
              </div>
            ))
          ) : (
            <Typography variant="body1">Nothing selected</Typography>
          )}
        </AccordionDetails>
      </Accordion>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </FormGroup>
  );
};

export default MaterialForm;
