import React from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar/index";
import { useState } from "react";
import Register from "./components/Register";
import ErrorModal from "./components/ErrorModal";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import useCurrentUser from "./hooks/useCurrentUser";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const { currentUser, setCurrentUser, logout } = useCurrentUser();

  return (
    <div className="App">
      <Navbar {...{ currentUser, logout }} />
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
          <Route path="/jobs" element={<>Job board</>} />
          <Route path="/schedule" element={<>My Schedule</>} />
          <Route path="/messages" element={<>Messages</>} />
          <Route path="/groups" element={<>My Groups</>} />
          <Route path="/settings" element={<>Settings</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
