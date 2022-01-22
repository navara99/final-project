import React from "react";
import Button from "@mui/material/Button";

const JobListItem = ({ job, setJobDetailsOpen, setJobId }) => {
  const clickHandler = () => {
    setJobId(job.id);
    setJobDetailsOpen(true);
  };
  return (
    <li key={job.id}>
      {job.title}
      <div>
        <Button
          size="small"
          onClick={clickHandler}
          variant="contained"
          color="warning"
        >
          Details
        </Button>
        <Button
          size="small"
          onClick={clickHandler}
          variant="outlined"
          color="warning"
        >
          Apply
        </Button>
      </div>
    </li>
  );
};

export default JobListItem;
