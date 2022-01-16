import React from "react";
import { List, Divider } from "@mui/material"
import JobListItem from "./JobListItem";

function JobsList({ jobs }) {

  const renderJobs = () => {
    return jobs.map((job) => {
      return (
        <>
          <JobListItem {...{ job }} />
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