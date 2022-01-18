import React from "react";
import { List, Divider } from "@mui/material"
import JobListItem from "./JobListItem";

function JobsList({ jobs, isMember, setSnackBarDetails }) {

  const renderJobs = () => {
    return jobs.map((job, i) => {
      return (
        <>
          <JobListItem {...{ job }} {...{ isMember }}  {...{ setSnackBarDetails }} />
          {i === jobs.length - 1 ? "" : < Divider />}
        </>
      )
    });
  };

  return (
    <List>
      {renderJobs()}
    </List>
  )

}

export default JobsList;