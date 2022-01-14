import React from 'react';
import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import Register from "./components/Register"

function App() {

  useEffect(()=> {

    axios.get("/test").then((result)=> {
      console.log(result)
    })

  }, [])

  return (
    <div className="App">
      <Register/>
    </div>
  );
}

export default App;
