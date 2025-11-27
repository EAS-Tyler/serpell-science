import React from "react";
import { Routes, Route } from "react-router-dom";
import ListItems from "./components/ListItems";
import WhoAmI from "./components/WhoAmI";
import Footer from "./components/Footer";
import ToolbarComponent from "./components/Toolbar";
import Callouts from "./components/Callouts";
import { Typography, Container, Box, Card, CardMedia } from "@mui/material";

import AboutLouiseSerpell from "./views/About";
import AboutLouiseSerpell2 from "./views/About2";

const Home = () => {
  return (
    <>
      {/* Hero + logo column (narrow, centred) */}
      <Container maxWidth="sm" sx={{ pb: 6, pt: 0, mt: -4 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 0,
              maxWidth: 260,
            }}
          >
            <CardMedia
              component="img"
              image={"LOGO1.jpeg"}
              alt="Logo"
              sx={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Card>
        </Box>

        {/* Titles */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
            Serpell Science
          </Typography>

          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Louise Serpell Science Consulting
          </Typography>

          <Typography variant="body2" sx={{ maxWidth: 420, mx: "auto" }}>
            Specialising in Science Communication, Liaison and Strategic
            Directions
          </Typography>
        </Box>

        {/* Dark pill callouts */}
        <Callouts />

        {/* Portrait image */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            elevation={0}
            sx={{
              maxWidth: 480,
            }}
          >
            <CardMedia
              component="img"
              image={"ME.png"}
              // image={'ME2.png'}
              alt="Portrait"
              sx={{ width: "100%", objectFit: "cover" }}
            />
          </Card>
        </Box>
      </Container>

      {/* Consultancy section – wider with two columns */}
      <ListItems />
      {/* Who am I? – full width black band */}
      <WhoAmI />
    </>
  );
};

const App = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#ffffff" }}>
      {/* Top navigation – light, centred */}

      {/* <ToolbarComponent /> */}

      <Box
        sx={{ display: "flex", justifyContent: "center", height: "45px" }}
      ></Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLouiseSerpell2 />} />
        {/* <Route path="/about2" element={<AboutLouiseSerpell2 />} /> */}
      </Routes>

      <Footer />
    </Box>
  );
};

export default App;
