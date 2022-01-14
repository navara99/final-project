import React from 'react';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Register from "./components/Register"
import ErrorModal from './components/ErrorModal';

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
      <ErrorModal {...{ errorMessage }} {...{ showError }} {...{ setShowError }} />
      <Register {...{ setErrorMessage }} {...{ setShowError }} />
    </div>
  );
}

export default App;
