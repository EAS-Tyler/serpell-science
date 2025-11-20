import React from "react";
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
  ListItemIcon,
} from "@mui/material";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import CheckIcon from "@mui/icons-material/Check";

const serif = '"Times New Roman", Georgia, "Times", serif';

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        color: "#ffffff",
        py: 6,
        height: "100px",
        mb: '30px'
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontFamily: serif, fontWeight: 400, mb: 1, color: "#000000" }}
        >
          Connecting, engaging, communicating
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "#000000", fontWeight: 700 }}
          >
            Social
          </Typography>

          {/* <Typography
            variant="h6"
            component="h2"
            sx={{ color: "#000000", fontWeight: 300 }}
          >
            Profile
          </Typography> */}

          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              fontWeight: 300,
              cursor: "pointer",
              textDecoration: "underline",
            }}
            component="a"
            href="https://en.wikipedia.org/wiki/Louise_Serpell"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </Typography>

          <Typography
            variant="h6"
            component="a"
            sx={{
              color: "#000000",
              fontWeight: 300,
              cursor: "pointer",
              textDecoration: "underline",
            }}
            href="https://www.linkedin.com/in/louise-serpell-0b318119/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Typography>
        </Box>


        
        <Typography
          variant="h6"
          component="a"
          href="mailto:l.c.serpell@sussex.ac.uk"
          sx={{
            color: "#000000",
            fontWeight: 300,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          email: l.c.serpell@sussex.ac.uk
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
