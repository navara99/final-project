import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Home/Dashboard";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    axios.get("/test").then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
