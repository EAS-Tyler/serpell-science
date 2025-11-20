
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

const ListItems = () => { 

return (

    <Container maxWidth="md" sx={{ pb: 6 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              {/* <Typography
                variant="h6"
                sx={{ fontFamily: serif, mb: 1, fontSize: 20 }}
              >
                *
              </Typography> */}
              <Typography
            variant="h4"
        component="h3"
                sx={{ fontFamily: serif, fontWeight: 400, mb: 1 }}
              >
                Consultancy and advisory services
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Providing a range of services arising from academic research
                expertise.
              </Typography>
            </Box>
    
            <Grid container spacing={6}>
              {/* Left column */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontFamily: serif,
                    fontWeight: 400,
                    mb: 1,
                  }}
                >
                  Providing communication of scientific discoveries
                </Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
                    <ListItemText
                      primary="Facilitation of communication of high level science between potential partners"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
                    <ListItemText
                      primary="Inform policy makers of strategic scientific priorities"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
                    <ListItemText
                      primary="Public speaking"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                </List>
              </Grid>
    
              {/* Right column */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontFamily: serif,
                    fontWeight: 400,
                    mb: 1,
                  }}
                >
                  Strategic pathways
                </Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
                
                    <ListItemText
                      primary="Pathways to translation and early diagnosis"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
                    <ListItemText
                      primary="Determining research and impact priorities"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
                    <ListItemText
                      primary="Directions for funding priorities"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
                    <ListItemText
                      primary="Cultural changes in academic research"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>


          </Container>

                )
}

export default ListItems