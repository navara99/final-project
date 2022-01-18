import { useState, useEffect } from "react";
import axios from "axios";

const useSchedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/schedule/").then(({ data }) => {
      setEvents(data);
    });
  }, []);
  return events;
};

export default useSchedule;
