import { useState, useEffect } from "react";
import axios from "axios";

const useFairs = () => {
  const [onGoingFairs, setOnGoingFairs] = useState([]);
  const [upcomingFairs, setUpcomingFairs] = useState([]);
  const [pastFairs, setpastFairs] = useState([]);

  useEffect(() => {
    axios.get("/api/fairs/").then(({ data }) => {
      console.log(data);
      const fairsWithValidDate = data.map((fair) => {
        const { start_time, end_time } = fair;
        const parsedStart = Date.parse(start_time);
        const parsedEnd = Date.parse(end_time);
        return { ...fair, start_time: parsedStart, end_time: parsedEnd };
      });
      const past = fairsWithValidDate.filter(
        ({ end_time }) => end_time < Date.now()
      );
      const ongoing = fairsWithValidDate.filter(({ end_time, start_time }) => {
        return end_time > Date.now() && start_time < Date.now();
      });
      const upcoming = fairsWithValidDate.filter(
        ({ start_time }) => start_time > Date.now()
      );
      setOnGoingFairs(ongoing);
      setUpcomingFairs(upcoming);
      setpastFairs(past);
    });
  }, []);
  return { onGoingFairs, upcomingFairs, pastFairs };
};

export default useFairs;
