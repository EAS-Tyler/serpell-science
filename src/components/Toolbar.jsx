import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

const ToolbarComponent = () => {
  return (
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
        <Button color="inherit" size="medium" variant="text">
          About
        </Button>
        <Button color="inherit" size="medium" variant="text">
          Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarComponent;

