// src/components/ContactPage.jsx
import React from "react";
import { Container, Typography } from "@mui/material";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export const ContactPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center">
        Contact Page
      </Typography>

      <ButtonGroup color="primary" variant="outlined" size="large" fullWidth>
        <Button component={Link} to="/home" startIcon={<HomeIcon />}>
          Home
        </Button>
        <Button component={Link} to="/about" startIcon={<ChatBubbleIcon />}>
          About
        </Button>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          startIcon={<ContactSupportIcon />}
        >
          Contact
        </Button>
      </ButtonGroup>
    </Container>
  );
};
