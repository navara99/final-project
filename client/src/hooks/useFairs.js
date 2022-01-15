import { useState, useEffect } from "react";
import axios from "axios";

const useFairs = () => {
  const [onGoingFairs, setOnGoingFairs] = useState([]);
  const [upcomingFairs, setUpcomingFairs] = useState([]);
  const [pastFairs, setpastFairs] = useState([]);

  useEffect(() => {
    axios.get("/api/fairs/").then(({ data }) => {
      const { past, ongoing, upcoming } = data;
      setOnGoingFairs(ongoing);
      setUpcomingFairs(upcoming);
      setpastFairs(past);
    });
  }, []);
  return { onGoingFairs, upcomingFairs, pastFairs };
};

export default useFairs;
