import { useState, useEffect } from "react";
import axios from "axios";

const useSchedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/schedule/").then(({ data }) => {
      setEvents(
        data.map((event) => {
          const { start, end } = event;
          return { ...event, start: new Date(start), end: new Date(end) };
        })
      );
    });
  }, []);
  return events;
};

export default useSchedule;
