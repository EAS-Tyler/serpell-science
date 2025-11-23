import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

const ToolbarComponent = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "text.primary",
        borderBottom: "none",
        mt: '20px'
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
          size="medium" 
          variant="text"
          onClick={() => navigate("/about")}
        >
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

