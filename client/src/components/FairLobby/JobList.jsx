import React from "react";

const JobList = ({ jobs, setJobId }) => {
  console.log(jobs);
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id} onClick={() => setJobId(job.id)}>
          {/* {job.title} */}
        </li>
      ))}
    </ul>
  );
};

export default JobList;
