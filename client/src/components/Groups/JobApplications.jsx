import React from "react";
import ApplicantsList from "./ApplicantsList";
import Resume from "./Resume";
import { useState } from "react";
import { useParams } from "react-router";
import useApplications from "../../hooks/useApplications";
import useEachJob from "../../hooks/useEachJob";

function JobApplications() {
  const { id } = useParams();
  const [applications, setApplications] = useApplications(id);
  const [job, setJob] = useEachJob(id);
  const [currentResume, setCurrentResume] = useState(applications ? applications[0].resume : "");

  console.log(job);

  return (
    <div>
      {job && <h2>Applications for {job.title}</h2>}
      {applications && <ApplicantsList {...{ applications }} {...{ setCurrentResume }} />}
    </div>
  )
}

export default JobApplications;