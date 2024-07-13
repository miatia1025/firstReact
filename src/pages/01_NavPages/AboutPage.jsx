// src/components/AboutPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { Button, ButtonGroup } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center">
        About
      </Typography>

      <ButtonGroup color="primary" variant="outlined" size="large" fullWidth>
        <Button component={Link} to="/home" startIcon={<HomeIcon />}>
          Home
        </Button>
        <Button
          component={Link}
          to="/about"
          variant="contained"
          startIcon={<ChatBubbleIcon />}
        >
          About
        </Button>
        <Button
          component={Link}
          to="/contact"
          startIcon={<ContactSupportIcon />}
        >
          Contact
        </Button>
      </ButtonGroup>
    </Container>
  );
};
