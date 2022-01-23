import React from "react";
import { blue, green } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[500]
    },
    secondary: {
      main: blue[500]
    },
    typography: {
      fontFamily: ['Lato', "sans-serif"].join(",")
    }
  }
});

export const MainTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}