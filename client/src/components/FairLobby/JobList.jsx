import React from "react";
import Button from "@mui/material/Button";

const JobList = ({ jobs, setJobId, setJobDetailsOpen }) => {
  const clickHandler = (id) => {
    setJobId(id);
    setJobDetailsOpen(true);
  };
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          {job.title}
          <Button size="small" onClick={() => clickHandler(job.id)}>
            Details
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
