import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CareerFair from "../CareerFair/CareerFair";

const Home = () => {
  const [fair, setFair] = useState(undefined);
  useEffect(() => {

  }, []);
  const handleClick = () => {
    axios.get("/api/fairs/1").then(result => console.log(result));
  }
  return <div>
    <Button onClick = {handleClick}>get Fair</Button>
    <CareerFair fair={fair}/>
    </div>;
};

export default Home;
