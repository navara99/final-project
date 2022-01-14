import { useState, useEffect } from "react";
import axios from "axios";

const useFairs = () => {
  const [onGoingFairs, setOnGoingFairs] = useState([]);
  const [upcomingFairs, setUpcomingFairs] = useState([]);
  const [pastFairs, setpastFairs] = useState([]);

  useEffect(async () => {
    try {
      const fairs = await axios.get("/api/fairs");
      console.log(fairs);
    } catch (e) {
      console.log(e);
    }
  }, []);
};
