import { createTheme } from "@mui/material/styles";

const serif = '"Times New Roman", Georgia, "Times", serif';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Main headings (h4) - serif, regular weight
    h4: {
      fontFamily: serif,
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
    },
    // Section titles (h5) - bold
    h5: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.334,
    },
    // Subsection headings (h6) - light or regular
    h6: {
      fontWeight: 300,
      fontSize: "1.25rem",
      lineHeight: 1.6,
    },
    // Subtitle for company name
    subtitle2: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: 1.57,
    },
    // Body text
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
      color: "#333333",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        // Default h4 styling (can be overridden with sx)
        h4: {
          fontFamily: serif,
          fontWeight: 400,
        },
        // Default h6 styling for light text
        h6: {
          fontWeight: 300,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "text", size: "small" },
          style: {
            fontSize: 11,
            letterSpacing: 0.8,
            textTransform: "uppercase",
            padding: 0,
            minWidth: "auto",
          },
        },
        {
          props: { variant: "contained", size: "small" },
          style: {
            fontSize: 11,
            borderRadius: "10px",
            textTransform: "none",
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 4,
            paddingBottom: 4,
            "&:hover": {
              backgroundColor: "#000000",
            },
          },
        },
      ],
    },
  },
});

export default theme;

