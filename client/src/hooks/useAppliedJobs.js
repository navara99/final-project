import { useState, useEffect } from "react";
import axios from "axios";

const useAppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs/applied").then(({ data }) => {
      setAppliedJobs(data);
    });
  }, []);

  return { appliedJobs, setAppliedJobs };
};

export default useAppliedJobs;