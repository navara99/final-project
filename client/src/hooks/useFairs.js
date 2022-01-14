import { useState, useEffect } from "react";
import axios from "axios";

const useFairs = () => {
  const [onGoingFairs, setOnGoingFairs] = useState([]);
  // const [upcomingFairs, setUpcomingFairs] = useState([]);
  // const [pastFairs, setpastFairs] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get("/api/fairs/");
      setOnGoingFairs(data);
      console.log(onGoingFairs);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return { onGoingFairs };
};

export default useFairs;
