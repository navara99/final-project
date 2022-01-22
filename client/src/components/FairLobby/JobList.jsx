import React from "react";

const JobList = ({ jobs }) => {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>{job.title}</li>
      ))}
    </ul>
  );
};

export default JobList;