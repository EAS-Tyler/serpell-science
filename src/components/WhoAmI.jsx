
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
  ListItemIcon
} from "@mui/material";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import CheckIcon from "@mui/icons-material/Check";


const serif = '"Times New Roman", Georgia, "Times", serif';

const WhoAmI = () => { 

return (

    <Box
    sx={{
      width: "100%",
      bgcolor: "#000000",
      color: "#ffffff",
      py: 6,
    }}
  >
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        component="h3"
        sx={{ fontFamily: serif, fontWeight: 400, fontStyle: 'italic', mb: 4 }}
      >
        Who am I?
      </Typography>

      <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
        Professor Louise Serpell
      </Typography>

      <Typography variant="h6" component="h2" sx={{ fontWeight: 300, mb: 1 }}>
        30 years research in Biochemistry and Neuroscience
      </Typography>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 300, mb: 1 }}>
        <Box component="span" sx={{ fontWeight: 700 }}>
          Expert
        </Box>{" "}
        in proteins, protein misfolding in disease
      </Typography>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 300, mb: 1 }}>
        Neurodegenerative disease and translational directions
      </Typography>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 300 }}>
        <Box component="span" sx={{ fontWeight: 700 }}>
          Areas of specialist interest:
        </Box>{" "}
        Alzheimer&apos;s disease causation; pathology and translational
        directions
      </Typography>
    </Container>
  </Box>
                )
}

export default WhoAmI