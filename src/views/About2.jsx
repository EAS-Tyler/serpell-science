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
  ListItemIcon,
  Button,
  Divider,
  Paper,
} from "@mui/material";

const AboutLouiseSerpell = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        {/* Header: name, role and primary call to action */}
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Louise C. Serpell MAE
            </Typography>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>
              Consultant in amyloid biology, structural neuroscience and
              neurodegeneration
            </Typography>
            <Typography variant="body1" paragraph mb={-1}>
              Louise works with organisations that need clear, expert insight
              into misfolded proteins and neurodegenerative disease. She brings
              decades of research experience to help teams interpret complex
              data, refine scientific strategy and make confident decisions in
              projects related to amyloid, Alzheimer’s disease and protein
              structure.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: { xs: "flex-start", md: "flex-end" },
              alignItems: { xs: "center", md: "flex-end" },
              gap: 1.5,
              mt: { xs: 2, md: 0 },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              href="mailto:louise@serpell-science.com"
              sx={{ textTransform: "none", borderRadius: "24px", fontSize: "1.12rem", py: 1.25, px: 3.5 }}
              size="large"
            >   
              Book a consultation
            </Button>
          </Grid>
        </Grid>

        {/* Key fields and expertise tags */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 3, mb: 4, flexWrap: "wrap", gap: 1 }}
        >
          <Chip label="Amyloid biology" size="small" />
          <Chip label="Neurodegeneration" size="small" />
          <Chip label="Structural neuroscience" size="small" />
          <Chip label="Protein misfolding" size="small" />
          <Chip label="Scientific strategy" size="small" />
          <Chip label="Research advisory" size="small" />
        </Stack>

        {/* How I can help */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              How Louise can help
            </Typography>
            <Typography variant="body2" paragraph>
              Louise supports scientific, medical and commercial teams that are
              working with amyloid, misfolded proteins or neurodegeneration. Her
              consultancy can be tailored to short, focused engagements or
              longer term advisory roles.
            </Typography>
            <List dense sx={{ pl: 2 }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Scientific advisory for biotech and pharmaceutical research
                  projects
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Independent review of experimental design, structural data and
                  interpretation
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Input on research strategy, risk assessment and project
                  direction
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Support for grant applications, reports and scientific
                  communication
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Speaking, panel participation and expert commentary
                </Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Who I work with / value */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Who she works with
            </Typography>
            <Typography variant="body2" paragraph>
              Louise collaborates with teams that need depth of understanding in
              structural biology and neurodegeneration, including:
            </Typography>
            <List dense sx={{ pl: 2 }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Biotech and pharmaceutical companies developing
                  neurodegenerative therapies
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Academic and clinical research groups seeking external
                  perspective
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Investors, charities and foundations that require scientific
                  due diligence
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Organisations needing clear explanation of complex protein
                  science for non specialists
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Why work with Louise */}
        <Grid container spacing={4} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Why work with Louise
            </Typography>
            <List dense sx={{ pl: 2 }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Internationally recognised expertise in amyloid biology and
                  neurodegeneration
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Ability to translate detailed structural findings into clear,
                  actionable insight for decision makers
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Long experience leading multidisciplinary teams and research
                  centres
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <span style={{ fontSize: "1.2em", color: "#888" }}>•</span>
                </ListItemIcon>
                <Typography variant="body2">
                  Calm, collaborative style focused on supporting your project
                  goals
                </Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Placeholder testimonial / social proof */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Client feedback
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                p: 2.5,
                fontStyle: "italic",
                backgroundColor: "background.paper",
              }}
            >
              {/* Replace with real testimonial text */}
              <Typography variant="body2" paragraph>
                “Placeholder testimonial from a client describing how Louise’s
                insight clarified a complex problem and influenced key project
                decisions.”
              </Typography>
              <Typography variant="caption">
                Placeholder name, Organisation
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Background and scientific foundation */}
        <Grid container spacing={4}>
          {/* Background */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Background and career
            </Typography>
            <Typography variant="body2" paragraph>
              Louise studied Biochemistry and Genetics at the University of
              Nottingham, followed by a DPhil in the Laboratory of Molecular
              Biophysics at the University of Oxford. She then held research
              posts in Toronto, at the MRC Laboratory of Molecular Biology in
              Cambridge and at the University of Cambridge with a Wellcome Trust
              Career Development Fellowship.
            </Typography>
            <Typography variant="body2" paragraph>
              She joined the University of Sussex in 2003 as a Wellcome Trust
              Fellow, became Reader in Biochemistry in 2006 and Professor of
              Biochemistry in 2010. From 2019 until May 2025 she served as
              Director of Sussex Neuroscience, a multidisciplinary research
              centre within the School of Life Sciences.
            </Typography>
          </Grid>

          {/* Research foundation presented as basis for consultancy */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Scientific foundation
            </Typography>
            <Typography variant="body2" paragraph>
              Louise’s research has focused on amyloidogenic proteins, asking
              how and why they assemble into fibrils and oligomers and how these
              structures contribute to disease. Her group has reported detailed
              molecular structures of amyloid fibrils and developed methods to
              stabilise and study native oligomeric forms of amyloid beta and
              related proteins.
            </Typography>
            <Typography variant="body2" paragraph>
              This work underpins her consultancy. By linking structural studies
              to cellular and neuronal models, she helps clients connect
              molecular level changes in protein structure to the mechanisms
              that drive neurodegeneration and to the practical choices they
              face in research and development.
            </Typography>
          </Grid>

          {/* Editorial and leadership */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Editorial and leadership roles
            </Typography>
            <Typography variant="body2" paragraph>
              Louise contributes to the wider scientific community through
              editorial and leadership positions. She has served on the
              editorial boards of:
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
                <ListItemIcon sx={{ minWidth: 24 }}>
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

        {/* Final call to action */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "divider",
            textAlign: { xs: "left", md: "center" },
          }}
        >
          <Typography variant="body1" paragraph>
            To discuss how Louise can support your project, research programme
            or organisation, please get in touch.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="mailto:louise@serpell-science.com"
            sx={{ textTransform: "none", borderRadius: "24px", fontSize: "1.12rem", py: 1.25, px: 3.5 }}
            size="large"
          >
            Enquire about availability
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutLouiseSerpell;
