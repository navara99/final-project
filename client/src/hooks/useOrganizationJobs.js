import { useState, useEffect } from "react";
import axios from "axios";

const useOrganizationJobs = (id) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get(`/api/organizations/jobs/${id}`).then(({ data }) => {
      setJobs(data);
    });
  }, []);

  return jobs;
};

export default useOrganizationJobs;
