import React from "react";
import { List, Divider } from "@mui/material"
import JobListItem from "./JobListItem";

function JobsList({ jobs, isMember }) {

  const renderJobs = () => {
    return jobs.map((job) => {
      return (
        <>
          <JobListItem {...{ job }} {...{ isMember }} />
          <Divider />
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