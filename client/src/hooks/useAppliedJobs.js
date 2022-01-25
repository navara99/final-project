import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const updateAppliedJobs = useCallback(() => {
    axios.get("/api/jobs/applied").then(({ data }) => {
      setAppliedJobs(data);
    });
  }, []);

  useEffect(() => {
    updateAppliedJobs();
  }, []);

  return { appliedJobs, setAppliedJobs, updateAppliedJobs };
};

export default useAppliedJobs;