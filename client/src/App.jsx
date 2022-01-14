import React from 'react';
import './App.css';
import axios from "axios";
import Navbar from "./components/Navbar/index";
import { useEffect, useState } from 'react';
import Register from "./components/Register"
import ErrorModal from './components/ErrorModal';
import Dashboard from "./components/Home/Dashboard";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {

    axios.get("/test").then((result) => {
      console.log(result)
    })

  }, [])

  return (
    <div className="App">
      <Navbar currentUser={null} />
      <div class="main-container">
        <Dashboard />
        <ErrorModal {...{ errorMessage }} {...{ showError }} {...{ setShowError }} />
        <Register {...{ setErrorMessage }} {...{ setShowError }} />
      </div>
    </div>
  );
};

export default App;
