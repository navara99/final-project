import React from "react";
import GroupsBtn from "./GroupsBtn";
import JobApplicationForm from "./JobApplicationForm";
import JobApplications from "./JobApplications";
import { useState } from "react";

function JobActions({ job, isMember, setSnackBarDetails }) {
  const [openApplicationForm, setOpenApplicationForm] = useState(false);
  const [openApplicants, setOpenApplicants] = useState(false);

  console.log(job);
  return (
    <>
      <JobApplications {...{ openApplicants }} {...{ setOpenApplicants }} {...{ job }} />
      <JobApplicationForm {...{ job }} {...{ openApplicationForm }} {...{ setOpenApplicationForm }} {...{ setSnackBarDetails }} />
      {!isMember && <GroupsBtn text={"Apply"} onClick={() => setOpenApplicationForm(!openApplicationForm)} />}
      {isMember && <GroupsBtn text={`View Applications (${job.applications.length})`} onClick={() => setOpenApplicants(!openApplicants)} />}
      <GroupsBtn text={"Details"} />
    </>
  )

};

export default JobActions;
