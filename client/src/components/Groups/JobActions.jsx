import React from "react";
import GroupsBtn from "./GroupsBtn";
import JobApplicationForm from "./JobApplicationForm";
import { useState } from "react";
import { Link } from "react-router-dom";

function JobActions({ job, isMember, setSnackBarDetails, currentUser, isApplied, setApplied }) {
  const [openApplicationForm, setOpenApplicationForm] = useState(false);
  
  return (
    <>
      <JobApplicationForm {...{ job }} {...{ openApplicationForm }} {...{ setOpenApplicationForm }} {...{ setSnackBarDetails }} currentUser={currentUser}setApplied={setApplied}/>
      {!isMember &&  <GroupsBtn text={!isApplied? "Apply" : "Applied"} onClick={() => setOpenApplicationForm(!openApplicationForm)} deActive = {isApplied}/>}
      {isMember && <Link to={`/jobs/${job.id}/applications`} style={{ textDecoration: "none" }}><GroupsBtn text={`View Applications (${job.applications.length})`} /></Link>}
      <GroupsBtn text={"Details"} />
    </>
  )

};

export default JobActions;
