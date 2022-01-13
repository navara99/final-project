import React from 'react';
import './App.css';
import axios from "axios"
import { useEffect } from 'react';

function App() {

  useEffect(()=> {

    axios.get("/test").then((result)=> {
      console.log(result)
    })

  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
