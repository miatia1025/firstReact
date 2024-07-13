import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage";
import { AboutPage } from "../AboutPage";
import { ContactPage } from "../ContactPage";
import { CssBaseline, Container } from "@mui/material";
import { LibrariesShowcase } from "../../02_ContentPages/LibrariesShowcase";
import { ButtonsShowcase } from "../../02_ContentPages/ButtonsShowcase";
import { FormShowcase } from "../../02_ContentPages/FormShowcase";
import { NumbersShowcase } from "../../02_ContentPages/NumbersShowcase";
import { ListsShowcase } from "../../02_ContentPages/ListsShowcase";
import { AccordionsShowcase } from "../../02_ContentPages/AccordionsShowcase";
import { ImagesShowcase } from "../../02_ContentPages/ImagesShowcase";
import { CardsShowcase } from "../../02_ContentPages/CardsShowcase";

export function RoutingHomeObject() {
  return (
    <Router>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/LibrariesShowcase" element={<LibrariesShowcase />} />
          <Route path="/ButtonsShowcase" element={<ButtonsShowcase />} />
          <Route path="/FormShowcase" element={<FormShowcase />} />
          <Route path="/NumbersShowcase" element={<NumbersShowcase />} />
          <Route path="/ListsShowcase" element={<ListsShowcase />} />
          <Route path="/AccordionsShowcase" element={<AccordionsShowcase />} />
          <Route path="/ImagesShowcase" element={<ImagesShowcase />} />
          <Route path="/CardsShowcase" element={<CardsShowcase />} />
        </Routes>
      </Container>
    </Router>
  );
}
