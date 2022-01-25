import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MainTheme } from "./Providers/ThemeProvider";
import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
};

ReactDOM.render(
  <MainTheme>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainTheme>,
  document.getElementById("root")
);
