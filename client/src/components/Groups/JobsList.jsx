import React from "react";
import { List, Divider } from "@mui/material"
import JobListItem from "./JobListItem";

function JobsList({ jobs, isMember }) {

  const renderJobs = () => {
    return jobs.map((job, i) => {
      return (
        <>
          <JobListItem {...{ job }} {...{ isMember }} />
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