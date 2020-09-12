// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import "prismjs/themes/prism.css";

import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#162918",
    },
    secondary: {
      main: "#297b2e",
    },
  },
});

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  );
};
