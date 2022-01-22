import React from "react";
import JobListItem from "./JobListItem";

const JobList = ({ jobs, setJobId, setJobDetailsOpen }) => {
  const elmArr = jobs.map((job) => {
    return (
      <JobListItem {...{ job, setJobDetailsOpen, setJobId, key: job.id }} />
    );
  });
  return <ul>{elmArr}</ul>;
};

export default JobList;
