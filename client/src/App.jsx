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
import Fair from "./components/Fair";
import ChatBox from "./components/ChatBox/ChatBox";

import OrganizationDetails from "./components/Groups/OrganizationDetails";
import Jobs from "./components/JobBoard/index";
import Schedule from "./components/Schedule";
import ProfileSetting from "./components/ProfileSetting/ProfileSetting";

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
            element={
              <LogIn
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
            path="/organizations"
            element={<Groups {...{ setSnackBarDetails }} />}
          />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/messages" element={<ChatBox currentUser = {currentUser}/>} />
          <Route path="/settings" element={<ProfileSetting/>} />
          <Route path="/fairs/:id" element={<Fair currentUser={currentUser} />} />
          <Route path="/organizations/:id" element={<OrganizationDetails {...{ setSnackBarDetails }}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
