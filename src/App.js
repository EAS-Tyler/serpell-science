import React from "react";
import ListItems from "./components/ListItems"
import WhoAmI from "./components/WhoAmI"
import Footer from "./components/Footer";
import ToolbarComponent from "./components/Toolbar";
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
// import logoImage from "./LOGO1.jpeg";
import logoImage from "./logo.jpeg";
import face from "./ME.png"

const App = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#ffffff" }}>
      {/* Top navigation – light, centred */}
      <ToolbarComponent />



      {/* Hero + logo column (narrow, centred) */}
      <Container maxWidth="sm" sx={{ pb: 6 }}>
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
              image={logoImage}
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

          <Typography
            variant="body2"
            sx={{ maxWidth: 420, mx: "auto" }}
          >
            Specialising in Science Communication, Liaison and Strategic
            Directions
          </Typography>
        </Box>

        {/* Dark pill callouts */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            alignItems: "center",
            mb: 6,
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#111",
              textAlign: "center",
            }}
          >
            Neurodegenerative disease &amp; protein misfolding diseases.
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#111",
              textAlign: "center",
            }}
          >
            Mediating science knowledge and understanding for funders, policy
            makers, pharmaceutical companies and the public.
          </Button>
        </Box>

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
              image={face}
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
      <Footer />
    </Box>
  );
};

export default App;
