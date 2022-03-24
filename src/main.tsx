import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { App } from "./app";

import { theme } from "./app/theme";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={theme.light}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  rootElement
);
