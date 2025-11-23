import React from "react";
import { Box, Button } from "@mui/material";

const Callouts = () => {
  return (
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
          textTransform: "none",
          fontSize: "0.95rem",
          py: 1.25,
          px: 2.5,
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
          textTransform: "none",
          fontSize: "0.95rem",
          py: 1.25,
          px: 2.5,
        }}
      >
        Mediating science knowledge and understanding for funders, policy
        makers, pharmaceutical companies and the public.
      </Button>
    </Box>
  );
};

export default Callouts;

