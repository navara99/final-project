import React from "react";
import GroupsBtn from "./GroupsBtn";
import JobApplicationForm from "./JobApplicationForm";
import { useState } from "react";
import { Link } from "react-router-dom";

function JobActions({ job, isMember, setSnackBarDetails }) {
  const [openApplicationForm, setOpenApplicationForm] = useState(false);

  return (
    <>
      <JobApplicationForm {...{ job }} {...{ openApplicationForm }} {...{ setOpenApplicationForm }} {...{ setSnackBarDetails }} />
      {!isMember && <GroupsBtn text={"Apply"} onClick={() => setOpenApplicationForm(!openApplicationForm)} />}
      {isMember && <Link to={`/jobs/${job.id}/applications`}><GroupsBtn text={`View Applications (${job.applications.length})`} /></Link>}
      <GroupsBtn text={"Details"} />
    </>
  )

};

export default JobActions;
