import React from "react";
import ListItems from "./components/ListItems"
import WhoAmI from "./components/WhoAmI"
import Footer from "./components/Footer";
import {
  AppBar,
  Toolbar,
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

const serif = '"Times New Roman", Georgia, "Times", serif';

const App = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#ffffff" }}>
      {/* Top navigation – light, centred */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#ffffff",
          color: "text.primary",
          borderBottom: "none",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "center",
            minHeight: 40,
            gap: 3,
          }}
        >
          <Button
            color="inherit"
            size="small"
            sx={{
              fontSize: 11,
              letterSpacing: 0.8,
              textTransform: "uppercase",
              p: 0,
              minWidth: "auto",
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            size="small"
            sx={{
              fontSize: 11,
              letterSpacing: 0.8,
              textTransform: "uppercase",
              p: 0,
              minWidth: "auto",
            }}
          >
            Projects
          </Button>
        </Toolbar>
      </AppBar>

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
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontFamily: serif,
              fontWeight: 400,
              mb: 1,
            }}
          >
            Serpell Science
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, mb: 1 }}
          >
            Louise Serpell Science Consulting
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#333", maxWidth: 420, mx: "auto" }}
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
              borderRadius: '10px',
              textTransform: "none",
              fontSize: 11,
              px: 3,
              py: 0.5,
              "&:hover": { bgcolor: "#000" },
            }}
          >
            Neurodegenerative disease &amp; protein misfolding diseases.
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#111",
              borderRadius: '10px',
              textTransform: "none",
              fontSize: 11,
              px: 3,
              py: 0.5,
              textAlign: "center",
              "&:hover": { bgcolor: "#000" },
            }}
          >
            Mediating science knowledge and understanding for funders, policy
            makers, pharmaceutical companies and the public.
          </Button>
        </Box>

        {/* Portrait image */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
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
      <ListItems>       </ListItems>
      {/* Who am I? – full width black band */}
      <    WhoAmI></WhoAmI>
< Footer></Footer>
    </Box>
  );
};

export default App;
