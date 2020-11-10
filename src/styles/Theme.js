import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyles";

const theme = {
  colors: {
    dark: "#1a1a1a",
    light: "#fcfcfc",
    accent: "#1AA73A",
    lightGray: "#F9F9F9",
  },
  fontSizes: {
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
  },
};

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};
