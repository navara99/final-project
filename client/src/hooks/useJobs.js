import { useEffect, useState } from "react";
import axios from "axios";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs").then(({ data }) => {
      console.log(data);
      setJobs(data);
    });
  },[]);

  return [jobs, setJobs];
};

export default useJobs;