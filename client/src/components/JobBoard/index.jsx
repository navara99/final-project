import React from "react";
import JobsList from "../Groups/JobsList";
import useJobs from "../../hooks/useJobs";

const Jobs = () => {
  const [jobs, setJobs] = useJobs();

  return (
    <>
      <h2>JOB BOARD</h2>
      <JobsList {...{ jobs }} />
    </>
  );
};

export default Jobs;
