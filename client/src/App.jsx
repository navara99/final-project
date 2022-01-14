import React from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import axios from "axios";
import Navbar from "./components/Navbar/index";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import ErrorModal from "./components/ErrorModal";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get("/api/users/me").then(({ data }) => {
      const keys = Object.keys(data);
      const loggedIn = keys.length > 0;
      if (loggedIn) setCurrentUser(data);
    });
  }, []);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div className="App">
      <Navbar currentUser={currentUser} />
      <ErrorModal {...{ errorMessage, showError, setShowError }} />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <Register
                {...{ setErrorMessage, setShowError, setCurrentUser }}
              />
            }
          />
          <Route path="/login" element={<LogIn {...{ setCurrentUser }} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
