import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Home/Dashboard";

function App() {
  useEffect(() => {
    axios.get("/test").then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
