import { Theme, createTheme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#121212",
      light: "#404040",
    },
    secondary: {
      main: "#1E1E1E",
      light: "#333",
    },
    text: {
      primary: "#ffffff",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
