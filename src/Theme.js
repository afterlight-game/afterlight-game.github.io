import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "#221f20", //(34, 31, 32)
    darkAccent: "#262324",
    shadow: "#141313",
    blue: "#345983", //(254, 254, 254)
    light: "#fefefe", //(52, 89, 131)
  },
  fonts: {
    title: "Montserrat Alternates, sans-serif",
    body: "Lato, sans-serif",
    handwritingTitle: "Permanent Marker, sans-serif",
    handwriting: "Gloria Hallelujah, sans-serif",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
