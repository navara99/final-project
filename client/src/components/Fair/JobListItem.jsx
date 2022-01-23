import React from "react";
import Button from "@mui/material/Button";

const JobListItem = ({
  job,
  setJobDetailsOpen,
  setJobId,
  setOpenApplicationForm,
}) => {
  const clickHandler = () => {
    setJobId(job.id);
    setJobDetailsOpen(true);
  };

  const clickHandlerApplication = () => {
    setOpenApplicationForm(true);
    setJobId(job.id);
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
          onClick={clickHandlerApplication}
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
