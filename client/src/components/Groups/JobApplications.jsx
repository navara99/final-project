import React from "react";
import ApplicantsList from "./ApplicantsList";
import Resume from "./Resume";
import { useState } from "react";
import { useParams } from "react-router";
import useApplications from "../../hooks/useApplications";

function JobApplications() {
  const { id } = useParams();
  const [applications, setApplications] = useApplications(id);
  const [currentResume, setCurrentResume] = useState(applications ? applications[0].resume : "");

  return (
    <div>
      {applications && <ApplicantsList {...{ applications }} {...{ setCurrentResume }} />}
      {applications && <Resume resume={currentResume} />}
    </div>
  )
}

export default JobApplications;