import React from "react";
import { Box } from "@mui/material";

const Callouts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        alignItems: "center",
        mb: 4,
      }}
    >
      <Box
        sx={{
          bgcolor: "#111",
          color: "white",
          textAlign: "center",
          textTransform: "none",
          fontSize: "0.95rem",
          py: 1.25,
          px: 2.5,
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          cursor: "default",
        }}
      >
        Neurodegenerative disease &amp; protein misfolding diseases.
      </Box>
      <Box
        sx={{
          bgcolor: "#111",
          color: "white",
          textAlign: "center",
          textTransform: "none",
          fontSize: "0.95rem",
          py: 1.25,
          px: 2.5,
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          cursor: "default",
        }}
      >
        Mediating science knowledge and understanding for funders, policy
        makers, pharmaceutical companies and the public.
      </Box>
    </Box>
  );
};

export default Callouts;
