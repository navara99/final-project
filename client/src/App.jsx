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
import Groups from "./components/Groups/index";
import { Snackbar, Alert } from "@mui/material";
import CareerFair from "./components/CareerFair/CareerFair";
import Jobs from "./components/Jobs/index";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const { currentUser, setCurrentUser, logout } = useCurrentUser();
  const [snackBarDetails, setSnackBarDetails] = useState({
    open: false,
    message: "",
  });

  const handleSnackBarClose = () => {
    setSnackBarDetails({ open: false, message: "" });
  };

  return (
    <div className="App">
      <Snackbar
        open={snackBarDetails.open}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {snackBarDetails.message}
        </Alert>
      </Snackbar>
      <Navbar {...{ currentUser, logout }} />
      <ErrorModal {...{ errorMessage, showError, setShowError }} />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <Register
                {...{
                  setErrorMessage,
                  setShowError,
                  setCurrentUser,
                  currentUser,
                  logout,
                }}
              />
            }
          />
          <Route
            path="/login"
            element={<LogIn {...{ setCurrentUser, currentUser, logout }} />}
          />
          <Route
            path="/groups"
            element={<Groups {...{ setSnackBarDetails }} />}
          />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/schedule" element={<>My Schedule</>} />
          <Route path="/messages" element={<>Messages</>} />
          <Route path="/settings" element={<>Settings</>} />
          <Route path="/fairs/:id" element={<CareerFair />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
