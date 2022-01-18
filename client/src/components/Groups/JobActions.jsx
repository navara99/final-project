import React from "react";
import GroupsBtn from "./GroupsBtn";
import JobApplicationForm from "./JobApplicationForm";
import { useState } from "react";

function JobActions({ job, isMember, setSnackBarDetails }) {
  const [openApplicationForm, setOpenApplicationForm] = useState(false);


  return (
    <>
      <JobApplicationForm {...{ job }} {...{ openApplicationForm }} {...{ setOpenApplicationForm }} {...{ setSnackBarDetails }} />
      {!isMember && <GroupsBtn text={"Apply"} onClick={() => setOpenApplicationForm(!openApplicationForm)} />}
      {isMember && <GroupsBtn text={`Applications (${job.applications.length})`} />}
      <GroupsBtn text={"Details"} />
    </>
  )

};

export default JobActions;
