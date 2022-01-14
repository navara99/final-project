import React from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import axios from "axios";
import Navbar from "./components/Navbar/index";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import ErrorModal from "./components/ErrorModal";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    axios.get("/test").then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <div className="App">
      <Navbar currentUser={null} />
      <ErrorModal {...{ errorMessage, showError, setShowError }} />
      <div class="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<Register {...{ setErrorMessage, setShowError }} />}
          />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
