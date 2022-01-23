import React from "react";
import { List, Divider } from "@mui/material"
import JobListItem from "./JobListItem";

function JobsList({ jobs, isMember, setSnackBarDetails, currentUser}) {

  const renderJobs = () => {
    return jobs.map((job, i) => {
      return (
        <div key={job.id}>
          <JobListItem {...{ job }} {...{ isMember }}  {...{ setSnackBarDetails }} key={job.id} {...{currentUser}}/>
          {i === jobs.length - 1 ? "" : < Divider />}
        </div>
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