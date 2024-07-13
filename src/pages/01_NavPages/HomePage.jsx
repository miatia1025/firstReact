// src/components/HomePage.jsx
import React from "react";
import { Container, Typography, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { HomeContent } from "../02_ContentPages/HomeContent";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center">
        Home Page
      </Typography>
      <ButtonGroup color="primary" variant="outlined" size="large" fullWidth>
        <Button
          component={Link}
          to="/home"
          variant="contained"
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
        <Button component={Link} to="/about" startIcon={<ChatBubbleIcon />}>
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

      <HomeContent />
    </Container>
  );
};
