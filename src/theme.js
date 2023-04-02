import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#d2d6df",
    200: "#a6adbf",
    300: "#7984a0",
    400: "#4d5b80",
    500: "#203260",
    600: "#1a284d",
    700: "#131e3a",
    800: "#0d1426",
    900: "#060a13",
  },
  secondary: {
    100: "#d9f5ff",
    200: "#b3ecfe",
    300: "#8de2fe",
    400: "#67d9fd",
    500: "#41cffd",
    600: "#34a6ca",
    700: "#277c98",
    800: "#1a5365",
    900: "#0d2933",
  },
  neutral: {
    100: "#fcfdfe",
    200: "#fafbfd",
    300: "#f7f9fc",
    400: "#f5f7fb",
    500: "#f2f5fa",
    600: "#c2c4c8",
    700: "#919396",
    800: "#616264",
    900: "#303132",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 36,
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 28,
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
