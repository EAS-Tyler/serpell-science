import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemIcon
} from "@mui/material";

const AboutLouiseSerpell = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        {/* Name and strapline */}
        <Typography variant="h4" gutterBottom>
          Louise C. Serpell MAE
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 3 }}>
          Professor of Biochemistry Emerita, structural biologist and
          neuroscientist at the University of Sussex
        </Typography>

        {/* Key fields */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 4, flexWrap: "wrap", gap: 1 }}
        >
          <Chip label="Biochemistry" size="small" />
          <Chip label="Structural biology" size="small" />
          <Chip label="Neuroscience" size="small" />
          <Chip label="Amyloid and neurodegeneration" size="small" />
        </Stack>

        {/* Intro paragraph */}
        <Typography variant="body1" paragraph>
          Louise Serpell is a British scientist whose work has helped shape
          current understanding of how amyloid proteins misfold and form
          damaging structures in neurodegenerative diseases such as Alzheimer’s.
          Her research combines molecular biophysics, cell biology and
          high-resolution imaging to reveal how these fibrous protein assemblies
          form and how they affect brain cells.
        </Typography>

        <Grid container spacing={4} mb={-6}>
          {/* Background */}
          <Grid item xs={12} md={6} mt={2}>
            <Typography variant="h5" gutterBottom>
              Background and career
            </Typography>
            <Typography variant="body2" paragraph>
              Born in Brighton, Louise studied Biochemistry and Genetics at the
              University of Nottingham before completing a DPhil in the
              Laboratory of Molecular Biophysics at the University of Oxford in
              1996. She then held research posts in Toronto, at the MRC
              Laboratory of Molecular Biology in Cambridge and at the University
              of Cambridge with a Wellcome Trust Career Development Fellowship.
            </Typography>
            <Typography variant="body2" paragraph>
              She joined the University of Sussex in 2003 as a Wellcome Trust
              Fellow, became Reader in Biochemistry in 2006 and Professor of
              Biochemistry in 2010. From 2019 until May 2025 she served as
              Director of Sussex Neuroscience, a multidisciplinary research
              centre within the School of Life Sciences.
            </Typography>
          </Grid>

          {/* Research focus */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Research focus
            </Typography>
            <Typography variant="body2" paragraph>
              Louise’s laboratory investigates amyloidogenic proteins, asking
              how and why they assemble into fibrils and oligomers, and how
              these structures contribute to disease. Her group has reported
              detailed molecular structures of amyloid fibrils and develops
              methods to stabilise and study native oligomeric forms of amyloid
              beta and related proteins.
            </Typography>
            <Typography variant="body2" paragraph>
              By linking structural studies to cellular and neuronal models, her
              work aims to connect atomic-level changes in protein structure to
              the mechanisms that drive neurodegeneration.
            </Typography>
          </Grid>

          {/* Editorial and leadership */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Editorial and leadership roles
            </Typography>
            <Typography variant="body2" paragraph>
              Louise contributes to the wider scientific community through a
              number of editorial positions. She has served on the editorial
              boards of:
            </Typography>
            <List dense sx={{ pl: 2 }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Journal of Molecular Biology
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Frontiers in Molecular Biosciences
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Biochemical Journal
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">Amyloid</Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Honours */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Selected honours
            </Typography>
            <List dense sx={{ pl: 2 }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Red Magazine Pioneer of the Year (2013)
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24}}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  University of Sussex Impact Award (2016)
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Elected Member of the Academia Europaea (2021)
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutLouiseSerpell;
